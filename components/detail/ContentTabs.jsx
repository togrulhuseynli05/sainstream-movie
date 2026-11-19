'use client';
import { useState } from 'react';
import EpisodeList from './EpisodeList';

const TABS = ['Episode', 'Universe', 'News', 'Reviews'];

// Tablar: aktiv tabın altında yaşıl xətt. Hazırda yalnız Episode tabının məzmunu var.
export default function ContentTabs({ seasons, episodes }) {
  const [activeTab, setActiveTab] = useState('Episode');

  return (
    <section className="section">
      <div className="flex gap-8 border-b border-zinc-800">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`-mb-px border-b-2 pb-3 text-sm font-semibold transition ${
              activeTab === tab ? 'border-brand text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pt-8">
        {activeTab === 'Episode' ? (
          <EpisodeList seasons={seasons} episodes={episodes} />
        ) : (
          <p className="text-gray-400">Yaxında</p>
        )}
      </div>
    </section>
  );
}