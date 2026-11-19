import Link from 'next/link';
import Img from './Img';
import { detailHref } from '../../utils/links';

// Bir kart. onClick verilməyibsə kart detay səhifəsinə link olur.
// onClick verilibsə (Featured-də olduğu kimi) kart sadəcə seçilir, naviqasiya olmur.
export default function MovieCard({ movie, selected = false, onClick }) {
  const info = [movie.seasonLabel, ...movie.genres, movie.type].filter(Boolean).join(' • ');
  const className = `movie-card ${selected ? 'is-selected' : ''}`;

  const content = (
    <>
      <div className="movie-card-poster">
        <Img src={movie.posterImage} alt={`${movie.title} posteri`} sizes="220px" />
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-meta">
          <span className="star">★</span> {movie.rating} | {info}
        </p>
      </div>
    </>
  );

  if (!onClick) {
    return (
      <Link href={detailHref(movie)} className={`${className} block`}>
        {content}
      </Link>
    );
  }

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
    >
      {content}
    </div>
  );
}