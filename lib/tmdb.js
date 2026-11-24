const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const PLACEHOLDER_IMAGE = '/images/Thor_poster_02.webp';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;


function getImageUrl(path, size) {
  if (!path) {
    return PLACEHOLDER_IMAGE;
  }
  return `${IMAGE_BASE_URL}/${size}${path}`;
}


async function tmdbGet(path, params = {}) {
  if (!API_KEY) {
    throw new Error('NEXT_PUBLIC_TMDB_API_KEY təyin olunmayıb. .env.local faylını yoxlayın.');
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', 'en-US');

  Object.keys(params).forEach((key) => {
    url.searchParams.set(key, params[key]);
  });

  const response = await fetch(url);
  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.status_message || `TMDB xətası: ${response.status}`);
  }

  return data;
}


const genreCache = {};

async function getGenreMap(type) {
  if (genreCache[type]) {
    return genreCache[type];
  }

  const data = await tmdbGet(`/genre/${type}/list`);

  const map = {};
  for (const genre of data.genres) {
    map[genre.id] = genre.name;
  }
  genreCache[type] = map;
  return map;
}


function toCard(item, type, genreMap) {
  const title = item.title || item.name || 'Adsız';
  const dateText = item.release_date || item.first_air_date || '';
  const year = dateText ? dateText.slice(0, 4) : '';
  const tmdbRating = item.vote_average || 0;
  const rating = Number((tmdbRating / 2).toFixed(1));
  let genreName = 'Other';
  if (item.genre_ids && item.genre_ids.length > 0) {
    const firstGenreId = item.genre_ids[0];
    if (genreMap[firstGenreId]) {
      genreName = genreMap[firstGenreId];
    }
  }

  return {
    id: String(item.id),
    title: title,
    type: type === 'tv' ? 'Series' : 'Movie',
    posterImage: getImageUrl(item.poster_path, 'w500'),
    backdropImage: getImageUrl(item.backdrop_path, 'w1280'),
    rating: rating,
    genres: [genreName],
    description: item.overview || 'Təsvir mövcud deyil.',
    releaseYear: year,
    ageRating: item.adult ? '18+' : 'All',
    durationMinutes: null, 
  };
}


async function fetchList(path, type, params = {}, limit = 10) {
  const data = await tmdbGet(path, params);
  const genreMap = await getGenreMap(type);
  const items = data.results.slice(0, limit);

  return items.map((item) => toCard(item, type, genreMap));
}


export async function fetchHero() {
  const data = await tmdbGet('/trending/all/week');
  const movieGenres = await getGenreMap('movie');
  const tvGenres = await getGenreMap('tv');

  const moviesAndShows = data.results.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv'
  );

  const firstFive = moviesAndShows.slice(0, 5);

  return firstFive.map((item) => {
    const type = item.media_type;
    const genreMap = type === 'tv' ? tvGenres : movieGenres;
    const card = toCard(item, type, genreMap);

    // Watch Trailer
    const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(card.title + ' trailer')}`;

    return { ...card, trailerUrl: trailerUrl };
  });
}


export async function fetchPlatforms() {
  const data = await tmdbGet('/watch/providers/movie', { watch_region: 'US' });

  // Logosu olmayan platformalar
  const withLogo = data.results.filter((provider) => provider.logo_path);

  return withLogo.slice(0, 7).map((provider) => ({
    id: String(provider.provider_id),
    name: provider.provider_name,
    logoUrl: getImageUrl(provider.logo_path, 'w185'),
  }));
}

// Just Release
export async function fetchNowPlaying() {
  return fetchList('/movie/now_playing', 'movie', {}, 10);
}


export async function fetchPopularTop10() {
  const list = await fetchList('/discover/movie', 'movie', { sort_by: 'popularity.desc', page: 1 }, 10);

  return list.map((movie, index) => ({
    ...movie,
    rank: index + 1,
  }));
}


export async function fetchFeatured() {
  const list = await fetchList('/trending/movie/day', 'movie', {}, 4);

  return list.map((movie, index) => ({
    ...movie,
    tagline: `#${index + 1} Trending today`,
    durationMinutes: null,
  }));
}


export async function fetchTrendingMovies() {
  return fetchList('/trending/movie/week', 'movie', {}, 10);
}


export async function fetchTrendingTv() {
  return fetchList('/trending/tv/week', 'tv', {}, 10);
}


export async function fetchKoreanSeries() {
  return fetchList(
    '/discover/tv',
    'tv',
    { with_original_language: 'ko', sort_by: 'popularity.desc' },
    10
  );
}


export async function fetchAwards() {
  const list = await fetchList('/movie/top_rated', 'movie', {}, 5);

  return list.map((movie) => ({
    ...movie,
    platformName: 'TMDB',
    platformLogo: null,
    label: 'Top Rated',
    durationMinutes: null,
  }));
}


export async function fetchFast() {
  return fetchList('/movie/upcoming', 'movie', {}, 8);
}


export async function fetchLive() {
  return fetchList('/tv/on_the_air', 'tv', {}, 8);
}