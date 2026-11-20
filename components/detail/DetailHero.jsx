import Img from '../ui/Img';
import { formatDuration } from '../../utils/format';


export default function DetailHero({ detail }) {
  const length =
    detail.type === 'series' ? `${detail.episodeCount} Episodes` : formatDuration(detail.durationMinutes);

  return (
    <section className="relative flex h-[80vh] min-h-[520px] items-end overflow-hidden">
      <Img src={detail.backgroundImage} alt={detail.title} sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

      <div className="relative z-10 flex w-full flex-wrap items-end justify-between gap-6 px-[5%] pb-14">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="w-fit rounded bg-black/60 px-3 py-1 text-xs">{detail.badge}</span>
          <h1 className="text-4xl font-bold md:text-5xl">{detail.title}</h1>
          <p className="text-sm text-gray-400">
            {length} • {detail.year} • {detail.genres.join(' • ')}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <button className="btn btn-primary">▶ Continue Watching</button>
            <button className="btn btn-outline">+ Add Watchlist</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-outline">⤓ Download</button>
          <button className="btn btn-outline">↗ Share</button>
          <button className="btn btn-outline">👍 Like</button>
        </div>
      </div>
    </section>
  );
}