'use client';
import useTMDB from '../hooks/useTMDB';
import * as api from '../lib/tmdb';
import SectionState from './ui/SectionState';
import HeroBanner from './home/HeroBanner';
import PlatformRow from './home/PlatformRow';
import MovieSection from './home/MovieSection';
import PopularOfWeek from './home/PopularOfWeek';
import FeaturedSection from './home/FeaturedSection';
import AwardsSlider from './home/AwardsSlider';
import FastLiveColumn from './home/FastLiveColumn';

export default function HomePage() {
  const hero = useTMDB(api.fetchHero);
  const platforms = useTMDB(api.fetchPlatforms);
  const nowPlaying = useTMDB(api.fetchNowPlaying);
  const popular = useTMDB(api.fetchPopularTop10);
  const featured = useTMDB(api.fetchFeatured);
  const movies = useTMDB(api.fetchTrendingMovies);
  const series = useTMDB(api.fetchTrendingTv);
  const korean = useTMDB(api.fetchKoreanSeries);
  const awards = useTMDB(api.fetchAwards);
  const fast = useTMDB(api.fetchFast);
  const live = useTMDB(api.fetchLive);

  return (
    <main>
      <SectionState state={hero} skeleton="h-[80vh] min-h-[460px]">
        {(data) => <HeroBanner movies={data} />}
      </SectionState>

      <SectionState state={platforms} skeleton="mx-[5%] my-10 h-[110px] rounded-lg">
        {(data) => <PlatformRow platforms={data} />}
      </SectionState>

      <SectionState state={nowPlaying}>
        {(data) => <MovieSection title="Just Release" items={data} />}
      </SectionState>

      <SectionState state={popular}>
        {(data) => <PopularOfWeek items={data} />}
      </SectionState>

      <SectionState state={featured} skeleton="mx-[5%] my-16 h-[480px] rounded-xl">
        {(data) => <FeaturedSection movies={data} />}
      </SectionState>

      <SectionState state={movies}>
        {(data) => <MovieSection title="Movies" items={data} />}
      </SectionState>

      <SectionState state={series}>
        {(data) => <MovieSection title="Series" items={data} />}
      </SectionState>

      <SectionState state={korean}>
        {(data) => <MovieSection title="Korean Series" items={data} />}
      </SectionState>

      <div className="bottom-grid">
        <SectionState state={awards} skeleton="h-80 rounded-xl">
          {(data) => <AwardsSlider items={data} />}
        </SectionState>
        <SectionState state={fast} skeleton="h-80 rounded-xl">
          {(data) => <FastLiveColumn title="Fast" items={data} />}
        </SectionState>
        <SectionState state={live} skeleton="h-80 rounded-xl">
          {(data) => <FastLiveColumn title="Live" items={data} live />}
        </SectionState>
      </div>
    </main>
  );
}