/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // next/image yalnız icazə verilmiş xarici domenlərdən şəkil yükləyir
    remotePatterns: [
      { protocol: 'https', hostname: 'image.tmdb.org', pathname: '/t/p/**' },
    ],
  },
};

module.exports = nextConfig;