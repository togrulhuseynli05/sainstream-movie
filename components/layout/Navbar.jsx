'use client';
import { useEffect, useState } from 'react';

const links = ['Home', 'Discover', 'Movie Release', 'Forum', 'About'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // aşağı sürüşəndə true
  const [menuOpen, setMenuOpen] = useState(false); // mobil menyu
  const [active, setActive] = useState('Home');

  // Scroll dinləyicisi — cleanup ilə silinir
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="/" className="logo">
        <span className="logo-mark">SS</span> SaintStream
      </a>

      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className={`nav-link ${active === l ? 'is-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(l);
              setMenuOpen(false);
            }}
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-btn" aria-label="Axtarış">⌕</button>
        <button className="btn btn-outline">Sign up</button>
        <button className="btn btn-primary">Login</button>
        <button className="burger" aria-label="Menyunu aç" onClick={() => setMenuOpen((v) => !v)}>
          ☰
        </button>
      </div>
    </header>
  );
}
