// Footer: sloqan, linklər, 4 sosial ikon, alt sətir. Stateless olduğu üçün 'use client' lazım deyil.
const links = ['Home', 'Discover', 'Influence', 'Release'];
const socials = [
  { label: 'Instagram', text: 'IG' },
  { label: 'Facebook', text: 'f' },
  { label: 'Twitter', text: 't' },
  { label: 'Google', text: 'G' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-slogan">
          Our platform is trusted by millions &amp; features best updated movies all around the world.
        </p>
        <div className="footer-right">
          <nav className="footer-links">
            {links.map((l, i) => (
              <span key={l}>
                {i > 0 && ' / '}
                <a href="#">{l}</a>
              </span>
            ))}
          </nav>
          <div className="social">
            {socials.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="social-icon">
                {s.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <a href="#">Privacy policy</a>
          <a href="#">Term of service</a>
          <a href="#">Language</a>
        </div>
        <span>© 2023</span>
      </div>
    </footer>
  );
}
