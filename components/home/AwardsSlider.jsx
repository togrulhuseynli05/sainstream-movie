'use client';
import { useState } from 'react';
import Img from '../ui/Img';
import SectionHeader, { SliderArrows } from '../ui/SectionHeader';
import { formatDuration } from '../../utils/format';

// Movies On Awards: bir böyük kart, dairəvi keçid (sonuncudan sonra yenidən birinci)
export default function AwardsSlider({ items }) {
  const [index, setIndex] = useState(0);
  const [inWatchlist, setInWatchlist] = useState(false);
  const total = items.length;

  // % (modulo) ilə dairə: (2 + 1) % 3 = 0 — sonda birinciyə qayıdır; (0 - 1 + 3) % 3 = 2 — əvvəldə sonuncuya
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const movie = items[index];

  return (
    <section className="awards">
      <SectionHeader title="Movies On Awards">
        <SliderArrows onPrev={prev} onNext={next} />
      </SectionHeader>

      <div className="awards-poster">
        <Img src={movie.backdropImage} alt={movie.title} sizes="600px" />
        <span className="platform-badge">{movie.platformName}</span>
      </div>
      <span className="age-badge">{movie.label}</span>
      <h2 className="awards-title">{movie.title}</h2>
      <p className="movie-card-meta">
        <span className="star">★</span> {movie.rating} | {formatDuration(movie.durationMinutes)} •{' '}
        {movie.releaseYear} • {movie.genres.join(' • ')}
      </p>
      <p className="awards-desc">{movie.description}</p>
      <div className="hero-actions">
        <button className="btn btn-primary">▶ Play Now</button>
        <button className="btn btn-outline" onClick={() => setInWatchlist((v) => !v)}>
          {inWatchlist ? '✓ Added' : '+ Add Watchlist'}
        </button>
      </div>
    </section>
  );
}
