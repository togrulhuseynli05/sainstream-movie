// 160 -> "2h40m". TMDB siyahılarında müddət olmadığı üçün null gələndə "—" qaytarır.
export function formatDuration(minutes) {
  if (!minutes) return '—';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${m}m`;
}