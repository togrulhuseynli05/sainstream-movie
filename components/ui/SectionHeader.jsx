// Bölmə başlığı + sağdakı oxlar (children kimi gəlir). Bütün bölmələrdə təkrar istifadə olunur.
// SliderArrows: canPrev/canNext false olanda ox gizlənir (visibility: hidden, yer tutur).
export function SliderArrows({ onPrev, onNext, canPrev = true, canNext = true }) {
  return (
    <div className="arrows">
      <button className={`arrow-btn ${canPrev ? '' : 'is-hidden'}`} onClick={onPrev} aria-label="Əvvəlki">‹</button>
      <button className={`arrow-btn ${canNext ? '' : 'is-hidden'}`} onClick={onNext} aria-label="Növbəti">›</button>
    </div>
  );
}

export default function SectionHeader({ title, children }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
}
