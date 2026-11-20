import Img from '../ui/Img';


export default function EpisodeCard({ episode }) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface">
      <div className="relative aspect-video">
        <Img src={episode.thumbnail} alt={`Chapter ${episode.chapterNumber}`} sizes="300px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-x-4 bottom-12 z-10">
          <p className="text-base font-bold">Chapter {episode.chapterNumber}</p>
          <p className="line-clamp-2 text-xs text-gray-300">{episode.description}</p>
        </div>

        {/* Progress genişliyi progressPercent-dən gəlir. Tailwind dinamik faizləri bilmədiyi üçün inline style istifadə olunur */}
        <div className="absolute inset-x-4 bottom-3 z-10 flex items-center gap-2 text-xs">
          <span>{episode.watchedDuration}</span>
          <div className="relative h-1 flex-1 rounded-full bg-white/30">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-brand"
              style={{ width: `${episode.progressPercent}%` }}
            />
          </div>
          <span>{episode.remainingDuration}</span>
        </div>
      </div>
    </div>
  );
}