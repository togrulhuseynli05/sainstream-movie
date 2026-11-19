'use client';
import { useRef, useState } from 'react';
import SectionHeader, { SliderArrows } from '../ui/SectionHeader';
import SeasonDropdown from './SeasonDropdown';
import EpisodeCard from './EpisodeCard';
import useRowScroll from '../../hooks/useRowScroll';

// Epizod siyahısı: seçilmiş sezonun epizodlarını horizontal sürüşən kartlarda göstərir
export default function EpisodeList({ seasons, episodes }) {
  // Seçilmiş sezon state-də saxlanılır, dropdown onu dəyişir
  const [seasonId, setSeasonId] = useState(seasons[0].id);
  const rowRef = useRef(null);
  const { canPrev, canNext, scrollPrev, scrollNext } = useRowScroll(rowRef);

  const visible = episodes.filter((e) => e.seasonId === seasonId);

  return (
    <div>
      <SectionHeader title="1-9 Episode">
        <div className="flex items-center gap-3">
          <SeasonDropdown seasons={seasons} value={seasonId} onChange={setSeasonId} />
          <SliderArrows onPrev={scrollPrev} onNext={scrollNext} canPrev={canPrev} canNext={canNext} />
        </div>
      </SectionHeader>

      {/* Row həmişə render olunur, çünki useRowScroll ona bağlıdır */}
      <div className="row" ref={rowRef}>
        {visible.length > 0 ? (
          visible.map((ep) => (
            <div key={ep.id} className="w-[300px] flex-none">
              <EpisodeCard episode={ep} />
            </div>
          ))
        ) : (
          <p className="text-gray-400">Bu sezon üçün epizodlar hələ əlavə olunmayıb.</p>
        )}
      </div>
    </div>
  );
}