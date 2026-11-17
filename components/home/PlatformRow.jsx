'use client';
import { useRef } from 'react';
import Img from '../ui/Img';
import useRowScroll from '../../hooks/useRowScroll';


export default function PlatformRow({ platforms }) {
  const rowRef = useRef(null);
  const { scrollNext } = useRowScroll(rowRef);

  return (
    <section className="platform-section">
      <div className="row platform-row" ref={rowRef}>
        {platforms.map((p) => (
          <div key={p.id} className="platform-tile">
            <Img src={p.logoUrl} alt={`${p.name} logosu`} sizes="200px" className="platform-logo" />
          </div>
        ))}
      </div>
      <button className="arrow-btn" aria-label="Növbəti platforma" onClick={scrollNext}>›</button>
    </section>
  );
}
