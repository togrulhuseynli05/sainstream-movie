import { useEffect, useState } from 'react';

// Custom hook: üfüqi sıranı oxlarla sürüşdürmək üçün.
// ref — scroll olunan div-ə bağlanır.
// Qaytarır: canPrev / canNext (oxların görünməsi üçün) və scrollPrev / scrollNext.
export default function useRowScroll(ref) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Sürüşmə vəziyyətini oxuyur (sola çox getmişiksə canPrev = true, sona çatmışıqsa canNext = false)
  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    // Cleanup: komponent yox olanda dinləyiciləri silirik (yaddaş sızmasın)
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };

  }, []);

  // Ekranın 80%-i qədər sürüşdür
  const scrollBy = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return {
    canPrev,
    canNext,
    scrollPrev: () => scrollBy(-1),
    scrollNext: () => scrollBy(1),
  };
}
