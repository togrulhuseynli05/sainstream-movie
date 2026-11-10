import Img from './Img';

// Bir kart. Just Release, Movies, Series, Korean Series və Featured-da təkrar istifadə olunur.
// selected: Featured-də seçilmiş kart yaşıl çərçivə alır.
// onClick: klik olanda (məs. Featured-də kart seçmək) çağırılır.
export default function MovieCard({ movie, selected = false, onClick }) {
  // "Season 1 • Action • Movie" kimi sətir. seasonLabel yalnız Series üçün var.
  const info = [movie.seasonLabel, ...movie.genres, movie.type].filter(Boolean).join(' • ');

  return (
    <div
      className={`movie-card ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="movie-card-poster">
        <Img src={movie.posterImage} alt={`${movie.title} posteri`} sizes="220px" />
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-meta">
          <span className="star">★</span> {movie.rating} | {info}
        </p>
      </div>
    </div>
  );
}
