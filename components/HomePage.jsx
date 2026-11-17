import HeroBanner from './home/HeroBanner';
import PlatformRow from './home/PlatformRow';
import MovieSection from './home/MovieSection';
import PopularOfWeek from './home/PopularOfWeek';
import FeaturedSection from './home/FeaturedSection';
import AwardsSlider from './home/AwardsSlider';
import FastLiveColumn from './home/FastLiveColumn';


export default function HomePage({ data }) {
  return (
    <main>
      <HeroBanner movies={data.heroMovies} />
      <PlatformRow platforms={data.platforms} />
      <MovieSection title="Just Release" items={data.justRelease} />
      <PopularOfWeek items={data.popularWeekMovies} />
      <FeaturedSection movies={data.featuredMovies} />
      <MovieSection title="Movies" items={data.movies} />
      <MovieSection title="Series" items={data.series} />
      <MovieSection title="Korean Series" items={data.koreanSeries} />
      <div className="bottom-grid">
        <AwardsSlider items={data.awardsMovies} />
        <FastLiveColumn title="Fast" items={data.fastMovies} />
        <FastLiveColumn title="Live" items={data.liveMovies} live />
      </div>
    </main>
  );
}
