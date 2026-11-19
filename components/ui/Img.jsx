import Image from 'next/image';

// priority: ekranın yuxarısındakı böyük şəkillər üçün true olur.
// Brauzer belə şəkilləri əvvəlcə yükləyir və LCP xəbərdarlığı itir.
export default function Img({ src, alt, className = '', sizes = '260px', priority = false }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`img-fill ${className}`}
    />
  );
}