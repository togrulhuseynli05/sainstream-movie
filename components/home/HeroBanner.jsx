'use client';
import { useEffect, useState } from 'react';
import Img from '../ui/Img';
import { formatDuration } from '../../utils/format';

const SLIDE_MS = 5000; // hər slayd 5 saniyə ekranda qalır

export default function HeroBanner({ movies }) {
  const [index, setIndex] = useState(0);
  const [inWatchlist, setInWatchlist] = useState(false);

  // Taymer: index dəyişəndə köhnə taymer silinir, yenisi qurulur.
  // Nöqtəyə klik də index-i dəyişdirir, ona görə sayğac avtomatik sıfırlanır.
  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % movies.length), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, movies.length]);

  const movie = movies[index];

  return (
    <section className="hero">
      <Img src={movie.backdropImage} alt={movie.title} sizes="100vw" priority={index === 0} />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-tag">{movie.type}</span>
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-meta">
          {formatDuration(movie.durationMinutes)} • {movie.releaseYear} • {movie.genres.join(' • ')}
        </p>
        <p className="hero-desc">{movie.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={movie.trailerUrl} target="_blank" rel="noreferrer">
            ▶ Watch Trailer
          </a>
          <button className="btn btn-outline" onClick={() => setInWatchlist((v) => !v)}>
            {inWatchlist ? '✓ Added' : '+ Add Watchlist'}
          </button>
        </div>
      </div>

      <div className="dots">
        {movies.map((m, i) => (
          <button
            key={m.id}
            className={`dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Slayd ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
