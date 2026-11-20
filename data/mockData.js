const PLACEHOLDER_IMG = '/images/Thor_poster_02.webp';

// Hero slider — 5 slayd
export const heroMovies = [
  { id: 'h1', type: 'Movie', title: 'Star Wars: The Force Awakens', releaseYear: 2023, durationMinutes: 160, genres: ['Fantasy', 'Action'], description: 'The third season of the American television series The Mandalorian stars Pedro Pascal as the title character...', backdropImage: PLACEHOLDER_IMG, trailerUrl: 'https://www.youtube.com/' },
  { id: 'h2', type: 'Movie', title: 'Air; Courting A Legend', releaseYear: 2022, durationMinutes: 160, genres: ['Superhero', 'Action'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: PLACEHOLDER_IMG, trailerUrl: 'https://www.youtube.com/' },
  { id: 'h3', type: 'Movie', title: 'John Wick: Chapter 4', releaseYear: 2023, durationMinutes: 169, genres: ['Action', 'Thriller'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: PLACEHOLDER_IMG, trailerUrl: 'https://www.youtube.com/' },
  { id: 'h4', type: 'Movie', title: 'Gundala', releaseYear: 2022, durationMinutes: 124, genres: ['Superhero', 'Action'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: PLACEHOLDER_IMG, trailerUrl: 'https://www.youtube.com/' },
  { id: 'h5', type: 'Movie', title: 'The Flash', releaseYear: 2023, durationMinutes: 144, genres: ['Action', 'Superhero'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: PLACEHOLDER_IMG, trailerUrl: 'https://www.youtube.com/' },
];

// Platform loqoları
export const platforms = [
  { id: 'p1', name: 'Disney', logoUrl: PLACEHOLDER_IMG },
  { id: 'p2', name: 'Netflix', logoUrl: PLACEHOLDER_IMG },
  { id: 'p3', name: 'HBO Max', logoUrl: PLACEHOLDER_IMG },
  { id: 'p4', name: 'Pixar', logoUrl: PLACEHOLDER_IMG },
  { id: 'p5', name: 'Marvel', logoUrl: PLACEHOLDER_IMG },
  { id: 'p6', name: 'Star Wars', logoUrl: PLACEHOLDER_IMG },
  { id: 'p7', name: 'National Geographic', logoUrl: PLACEHOLDER_IMG },
];

// Kart sıraları — hamısı eyni formadadır (MovieCard üçün)
export const justRelease = [
  { id: 'jr1', title: 'Enola Holmes 2', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.8, genres: ['Action'] },
  { id: 'jr2', title: "Satan's slaves", posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Horror'] },
  { id: 'jr3', title: 'The Flash', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Mystery'] },
  { id: 'jr4', title: 'Weak Hero', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action', 'Drama'], seasonLabel: 'Season 1' },
  { id: 'jr5', title: 'Wonder Woman', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
];

export const movies = [
  { id: 'm1', title: 'Antman & The Wasp Quantumania', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'm2', title: 'Air; Courting A Legend', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'm3', title: 'John Wick; Chapter 4', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.9, genres: ['Action'] },
  { id: 'm4', title: 'Mechamato Movie', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'm5', title: 'Super Mario Bros.', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
];

export const series = [
  { id: 's1', title: 'Wednesday Season 1', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'], seasonLabel: 'Season 1' },
  { id: 's2', title: 'Beef Series', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 's3', title: 'Valhalla Murders Series', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 's4', title: 'The Witcher Volume 2', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 's5', title: 'The Foreigner', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
];

export const koreanSeries = [
  { id: 'k1', title: 'Toxic', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 'k2', title: 'Insider', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 'k3', title: 'Race Season 1', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'], seasonLabel: 'Season 1' },
  { id: 'k4', title: 'Ghost Doctor', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 'k5', title: 'The Pirates: The Last Royal Treasure', posterImage: PLACEHOLDER_IMG, type: 'Series', rating: 4.6, genres: ['Action'] },
];

// Popular of the week — 1–4 sıra
export const popularWeekMovies = [
  { rank: 1, id: 'tlou', title: 'The Last Of Us', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Horror', 'Thriller'], rating: 4.3, type: 'Series'},
  { rank: 2, id: 'pw2', title: 'Sri Asih', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Superhero', 'Action'], rating: 4.9, type: 'Movie' },
  { rank: 3, id: 'pw3', title: 'The Flash', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 3.7, type: 'Movie' },
  { rank: 4, id: 'pw4', title: 'Oppenheimer', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.4, type: 'Movie' },
];

// Featured — sağdakı kartlar; ilk film defolt seçilir
export const featuredMovies = [
  { id: 'f1', title: 'Air; Courting A Legend', tagline: '#1 in Australia', rating: 4.6, durationMinutes: 160, releaseYear: 2022, genres: ['Superhero', 'Action'], description: 'When international arms dealer and criminal mastermind Elena Federova orchestrates seven simultaneous New York City bank heists, an outcast agent must act.', posterImage: PLACEHOLDER_IMG, backdropImage: PLACEHOLDER_IMG },
  { id: 'f2', title: 'The Last Of Us', tagline: 'Trending now', rating: 4.6, durationMinutes: 60, releaseYear: 2023, genres: ['Mystery', 'Drama'], description: 'Twenty years after a fungal outbreak, a hardened survivor is hired to smuggle a girl across a ravaged America.', posterImage: PLACEHOLDER_IMG, backdropImage: PLACEHOLDER_IMG },
  { id: 'f3', title: "Satan's slaves", tagline: 'Trending now', rating: 4.6, durationMinutes: 107, releaseYear: 2022, genres: ['Horror'], description: 'A family is haunted by a mysterious presence after their mother dies, and the terror grows each night.', posterImage: PLACEHOLDER_IMG, backdropImage: PLACEHOLDER_IMG },
  { id: 'f4', title: 'Enola Holmes 2', tagline: 'Trending now', rating: 4.8, durationMinutes: 129, releaseYear: 2022, genres: ['Action', 'Mystery'], description: 'Enola Holmes teams up with Sherlock to track down a missing girl and uncover a dangerous match factory plot.', posterImage: PLACEHOLDER_IMG, backdropImage: PLACEHOLDER_IMG },
];

// Movies On Awards — dairəvi slider
export const awardsMovies = [
  { id: 'a1', title: 'Gundala', platformName: 'Prime Video', platformLogo: PLACEHOLDER_IMG, label: 'Best Pictures', rating: 4.6, durationMinutes: 124, releaseYear: 2022, genres: ['Superhero', 'Action'], description: 'An Indonesian hero is born in a rain-soaked city, gaining lightning powers to fight corruption and crime.', backdropImage: PLACEHOLDER_IMG },
  { id: 'a2', title: 'Enola Holmes 2', platformName: 'Netflix', platformLogo: PLACEHOLDER_IMG, label: 'Best Pictures', rating: 4.8, durationMinutes: 129, releaseYear: 2022, genres: ['Action', 'Mystery'], description: 'Enola Holmes teams up with Sherlock to track down a missing girl and uncover a dangerous plot.', backdropImage: PLACEHOLDER_IMG },
  { id: 'a3', title: 'The Last Of Us', platformName: 'HBO Max', platformLogo: PLACEHOLDER_IMG, label: 'Best Pictures', rating: 4.6, durationMinutes: 60, releaseYear: 2023, genres: ['Mystery', 'Drama'], description: 'A hardened survivor is hired to smuggle a girl across a ravaged America.', backdropImage: PLACEHOLDER_IMG },
];

// Fast və Live — hər biri 8 element (oxla 4-4 keçilir)
export const fastMovies = [
  { id: 'fa1', title: 'Oppenheimer', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.9, type: 'Movie' },
  { id: 'fa2', title: 'The End Movie', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.8, type: 'Movie' },
  { id: 'fa3', title: 'The Flash', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa4', title: 'Fall', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.4, type: 'Movie' },
  { id: 'fa5', title: 'Gundala', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Superhero', 'Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa6', title: 'Wonder Woman', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa7', title: 'Antman & The Wasp Quantumania', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa8', title: 'Super Mario Bros.', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
];

export const liveMovies = [
  { id: 'li1', title: 'Sonic 2', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.9, type: 'Movie' },
  { id: 'li2', title: 'Pathaan', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.8, type: 'Movie' },
  { id: 'li3', title: 'Black Adam', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.6, type: 'Movie' },
  { id: 'li4', title: 'Indemnity', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.4, type: 'Movie' },
  { id: 'li5', title: 'Mechamato Movie', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
  { id: 'li6', title: 'Enola Holmes 2', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Action'], rating: 4.8, type: 'Movie' },
  { id: 'li7', title: 'Weak Hero', posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Action', 'Drama'], rating: 4.6, type: 'Series' },
  { id: 'li8', title: "Satan's slaves", posterImage: PLACEHOLDER_IMG, ageRating: 'PG-13', genres: ['Horror'], rating: 4.6, type: 'Movie' },
];


// Serial üçün 9 epizod (Season 1). progressPercent progress bar-ın genişliyini təyin edir.
const tlouEpisodes = Array.from({ length: 9 }, (_, i) => ({
  id: `tlou-s1-e${i + 1}`,
  seasonId: 's1',
  chapterNumber: i + 1,
  description: 'The chapter about Joel and Ellie who just want to go out from the palace to get freedom...',
  thumbnail: PLACEHOLDER_IMG,
  watchedDuration: '34:05',
  remainingDuration: '00:57:45',
  progressPercent: [60, 45, 75, 30, 90, 0, 0, 0, 0][i],
}));

// Detay səhifəsi üçün tam məlumat.The Last Of Us
export const movieDetails = [
  {
    id: 'tlou',
    type: 'series',
    title: 'The Last Of Us Season 1',
    backgroundImage: PLACEHOLDER_IMG,
    badge: 'Series',
    episodeCount: 9,
    year: 2022,
    genres: ['Fantasy', 'Action'],
    continueWatchingProgress: 34,
    storyline:
      'The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States.',
    cast: [
      { id: 'c1', actorName: 'Pedro Pascal', characterName: 'Joel Miller', photo: PLACEHOLDER_IMG },
      { id: 'c2', actorName: 'Bella Ramsey', characterName: 'Ellie', photo: PLACEHOLDER_IMG },
      { id: 'c3', actorName: 'Anna Torv', characterName: 'Tessa', photo: PLACEHOLDER_IMG },
      { id: 'c4', actorName: 'Ashley Johnson', characterName: 'Ellie Mother', photo: PLACEHOLDER_IMG },
      { id: 'c5', actorName: 'Nick Offerman', characterName: 'Bill', photo: PLACEHOLDER_IMG },
      { id: 'c6', actorName: 'Nico Parker', characterName: 'Sarah Miller', photo: PLACEHOLDER_IMG },
      { id: 'c7', actorName: 'Murray Bartlett', characterName: 'Frank', photo: PLACEHOLDER_IMG },
    ],
    seasons: [
      { id: 's1', label: 'Season 1' },
      { id: 's2', label: 'Season 2' },
    ],
    episodes: tlouEpisodes,
    similarMovieIds: ['sm1', 'sm2', 'sm3', 'sm4', 'sm5'],
  },
];


export const similarMovies = [
  { id: 'sm1', title: 'TOP GUN: Maverick', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'sm2', title: 'Spider-Man: Into the Spider-Verse', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'sm3', title: 'Black Panther: Wakanda Forever', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'sm4', title: 'Batman v Superman', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'sm5', title: 'Red Notice', posterImage: PLACEHOLDER_IMG, type: 'Movie', rating: 4.6, genres: ['Action'] },
];

// Route-dan gələn type və id ilə detalı tapır. Tapılmasa undefined qaytarır.
export function getMovieDetail(type, id) {
  return movieDetails.find((m) => m.type === type && m.id === id);
}