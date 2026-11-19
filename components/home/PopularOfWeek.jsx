'use client';
import { useRef } from 'react';
import Img from '../ui/Img';
import SectionHeader, { SliderArrows } from '../ui/SectionHeader';
import useRowScroll from '../../hooks/useRowScroll';
import Link from 'next/link';
import { detailHref } from '../../utils/links';

// Həftənin ən populyar filmləri: böyük rəqəm + poster + PG-13 + məlumat
export default function PopularOfWeek({ items }) {
  const rowRef = useRef(null);
  const { canPrev, canNext, scrollPrev, scrollNext } = useRowScroll(rowRef);

  return (
    <section className="section">
      <SectionHeader title="Popular of the week">
        <SliderArrows onPrev={scrollPrev} onNext={scrollNext} canPrev={canPrev} canNext={canNext} />
      </SectionHeader>
      <div className="row" ref={rowRef}>
        {items.map((m) => (
          <Link key={m.id} href={detailHref(m)} className="popular-item">
            <span className="popular-rank">{m.rank}</span>
            <div className="popular-poster">
              <Img src={m.posterImage} alt={`${m.title} posteri`} sizes="90px" />
            </div>
            <div className="popular-info">
              <span className="age-badge">{m.ageRating}</span>
              <h3>{m.title}</h3>
              <p className="movie-card-meta">{m.genres.join(' • ')}</p>
              <p className="movie-card-meta">
                <span className="star">★</span> {m.rating} | {m.type}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
