'use client';
import { useRef } from 'react';
import Img from '../ui/Img';
import SectionHeader, { SliderArrows } from '../ui/SectionHeader';
import useRowScroll from '../../hooks/useRowScroll';

// Top Cast: dairəvi aktyor şəkilləri horizontal sürüşür
export default function TopCast({ cast }) {
  const rowRef = useRef(null);
  const { canPrev, canNext, scrollPrev, scrollNext } = useRowScroll(rowRef);

  return (
    <section className="section">
      <SectionHeader title="Top Cast">
        <SliderArrows onPrev={scrollPrev} onNext={scrollNext} canPrev={canPrev} canNext={canNext} />
      </SectionHeader>

      <div className="row" ref={rowRef}>
        {cast.map((actor) => (
          <div key={actor.id} className="flex w-[180px] flex-none items-center gap-3">
            <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full bg-surface">
              <Img src={actor.photo} alt={actor.actorName} sizes="48px" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{actor.actorName}</p>
              <p className="truncate text-xs text-gray-400">{actor.characterName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}