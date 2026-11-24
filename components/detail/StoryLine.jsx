'use client';
import { useState } from 'react';

//"More" tam mətni açır, "Less" yenidən qısaldır.
export default function StoryLine({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section">
      <h2 className="section-title mb-4">Story Line</h2>
      <p className={`max-w-5xl text-sm leading-relaxed text-gray-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      {/* Düymə mətndən kənarda olmalıdır, çünki line-clamp sonda olan elementi gizlədər */}
      <button className="mt-2 font-semibold text-brand" onClick={() => setIsExpanded((v) => !v)}>
        {isExpanded ? 'Less' : 'More'}
      </button>
    </section>
  );
}