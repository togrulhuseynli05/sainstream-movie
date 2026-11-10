import Image from 'next/image';

// Next.js <Image> (optimallaşdırılmış şəkil). fill: şəkil valideynin ölçüsünü tutur
// (valideyn position: relative olmalıdır). sizes: brauzerə təxmini ölçünü deyir.
export default function Img({ src, alt, className = '', sizes = '260px' }) {
  return <Image src={src} alt={alt} fill sizes={sizes} className={`img-fill ${className}`} />;
}
