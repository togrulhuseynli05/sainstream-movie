'use client';
import { useState } from 'react';
// import Img from '../ui/Img';
import MovieCard from '../ui/MovieCard';
import { formatDuration } from '../../utils/format';

// Featured: kart seçəndə sol məzmun və arxa fon dəyişir. "Read more" açıb-bağlayır.
export default function FeaturedSection({ movies }) {
  const [selectedId, setSelectedId] = useState(movies[0].id);
  const [expanded, setExpanded] = useState(false); // təsvir açıqdır?
  const [inWatchlist, setInWatchlist] = useState(false);

  const movie = movies.find((m) => m.id === selectedId);

  const selectMovie = (id) => {
    setSelectedId(id);
    setExpanded(false); // yeni film seçəndə mətn yenidən qısa olsun
  };

  return (
    <section className="featured">
      {/* key: film dəyişəndə şəkil yenidən yüklənir */}
      {/* <Img key={movie.id} src={movie.backdropImage} alt="" className="featured-bg" sizes="100vw" /> */}

      <div className="featured-left">
        <h2 className="featured-title">Featured in SaintStream</h2>
        <p className="featured-subtitle">Best featured for you today</p>
        <span className="hero-tag">{movie.tagline}</span>
        <h3 className="featured-movie">{movie.title}</h3>
        <p className="movie-card-meta">
          <span className="star">★</span> {movie.rating} | {formatDuration(movie.durationMinutes)} •{' '}
          {movie.releaseYear} • {movie.genres.join(' • ')}
        </p>
        <p className={`featured-desc ${expanded ? 'is-expanded' : ''}`}>{movie.description}</p>
        <button className="read-more" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Read less' : 'Read more'}
        </button>
        <div className="hero-actions">
          <button className="btn btn-primary">▶ Play Now</button>
          <button className="btn btn-outline" onClick={() => setInWatchlist((v) => !v)}>
            {inWatchlist ? '✓ Added' : '+ Add Watchlist'}
          </button>
        </div>
      </div>

      <div className="row featured-cards">
        {movies.map((m) => (
          <div key={m.id} className="card-item">
            <MovieCard movie={m} selected={m.id === selectedId} onClick={() => selectMovie(m.id)} />
          </div>
        ))}
      </div>
    </section>
  );
}
