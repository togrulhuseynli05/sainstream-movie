'use client';
import { useState } from 'react';
import Img from '../ui/Img';
import SectionHeader, { SliderArrows } from '../ui/SectionHeader';
import Link from 'next/link';
import { detailHref } from '../../utils/links';

const PER_PAGE = 4; 

//Oxlar növbəti/əvvəlki 4-lük qrupa keçir.
export default function FastLiveColumn({ title, items, live = false }) {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(items.length / PER_PAGE);
  // slice: massivin bir hissəsini kəsir. Məs. page=1 -> elementlər 4..7
  const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const next = () => setPage((p) => (p + 1) % pages);
  const prev = () => setPage((p) => (p - 1 + pages) % pages);

  return (
    <div className="small-col">
      <SectionHeader title={<>{title}{live && <span className="live-dot" />}</>}>
        <SliderArrows onPrev={prev} onNext={next} />
      </SectionHeader>

      {visible.map((m) => (
        <Link key={m.id} href={detailHref(m)} className="small-item">
          <div className="small-poster">
            <Img src={m.posterImage} alt={`${m.title} posteri`} sizes="90px" />
          </div>
          <div className="small-info">
            <span className="age-badge">{m.ageRating}</span>
            <h4 className="small-title">{m.title}</h4>
            <p className="movie-card-meta">
              <span className="star">★</span> {m.rating} | {m.type}
            </p>
            <p className="movie-card-meta">{m.genres.join(' • ')}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
