# SaintStream — Ana səhifə (Next.js + Tailwind)

## Quraşdırma və işə salma
1. Node.js 18+ quraşdırılmalıdır.
2. Layihə qovluğunda: `npm install`
3. `npm run dev` → brauzerdə http://localhost:3000

## Şəkillər
`mockData.js` içindəki yollar (`/images/posters/...`, `/images/backdrops/...`, `/images/platforms/...`)
`public/images/` qovluğunda olmalıdır. Şəkillər olmayanda brauzer xəta göstərə bilər — Figma-dan export edib həmin adlarla qoyun.

## Qovluq quruluşu
- `app/` — Next.js səhifə və layout (route: `/`)
- `components/layout/` — Navbar, Footer
- `components/home/` — ana səhifə bölmələri
- `components/ui/` — təkrar istifadə olunan parçalar (MovieCard, SectionHeader, Img)
- `data/mockData.js` — bütün mock data
- `hooks/` — custom hook (useRowScroll)

## Əsas prinsip
Komponentlər datanı **props** ilə alır. `mockData` yalnız `app/page.jsx`-də import olunur. Sabah API gələndə yalnız səhifədə data mənbəyi dəyişəcək.
