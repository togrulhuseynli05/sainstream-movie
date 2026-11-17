import Image from 'next/image';


export default function Img({ src, alt, className = '', sizes = '260px' }) {
  return <Image src={src} alt={alt} fill sizes={sizes} className={`img-fill ${className}`} />;
}
