'use client';
import { useRef } from 'react';
import MovieCard from '../ui/MovieCard';
import SectionHeader, { SliderArrows } from '../ui/SectionHeader';
import useRowScroll from '../../hooks/useRowScroll';

// Oxşar filmlər: mövcud MovieCard yenidən istifadə olunur
export default function SimilarMovies({ movies }) {
  const rowRef = useRef(null);
  const { canPrev, canNext, scrollPrev, scrollNext } = useRowScroll(rowRef);

  return (
    <section className="section">
      <SectionHeader title="Similar Movies for you">
        <SliderArrows onPrev={scrollPrev} onNext={scrollNext} canPrev={canPrev} canNext={canNext} />
      </SectionHeader>

      <div className="row" ref={rowRef}>
        {movies.map((m) => (
          <div key={m.id} className="card-item">
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </section>
  );
}