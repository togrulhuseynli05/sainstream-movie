// Dəqiqəni "2h40m" formatına çevirir: 160 -> "2h40m"
export function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${m}m`;
}
