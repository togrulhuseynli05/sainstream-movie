'use client';
import { useState } from 'react';

export default function SeasonDropdown({ seasons, value, onChange }) {
  const [open, setOpen] = useState(false);
  const current = seasons.find((s) => s.id === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded border border-zinc-600 bg-black/50 px-4 py-2 text-xs font-semibold"
      >
        {current.label} <span>▾</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded border border-zinc-700 bg-surface"
        >
          {seasons.map((s) => (
            <li key={s.id}>
              <button
                role="option"
                aria-selected={s.id === value}
                onClick={() => {
                  onChange(s.id);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-brand/30 ${s.id === value ? 'text-brand' : ''
                  }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}