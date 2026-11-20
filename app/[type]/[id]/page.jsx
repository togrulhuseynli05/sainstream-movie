import { notFound } from 'next/navigation';
import DetailHero from '../../../components/detail/DetailHero';
import StoryLine from '../../../components/detail/StoryLine';
import TopCast from '../../../components/detail/TopCast';
import ContentTabs from '../../../components/detail/ContentTabs';
import SimilarMovies from '../../../components/detail/SimilarMovies';
import { getMovieDetail, movieDetails, similarMovies } from '../../../data/mockData';

// Build zamanı mövcud detal səhifələrinin yolları hazırlanır
export function generateStaticParams() {
  return movieDetails.map((m) => ({ type: m.type, id: m.id }));
}

export default async function DetailPage({ params }) {
  const { type, id } = await params;
  const detail = getMovieDetail(type, id);

  // Yanlış type və ya id olduqda 404 səhifəsi göstərilir
  if (!detail) notFound();

  // similarMovieIds-ə görə uyğun filmləri tapırıq
  const similar = detail.similarMovieIds
    .map((sid) => similarMovies.find((m) => m.id === sid))
    .filter(Boolean);

  return (
    <main>
      <DetailHero detail={detail} />
      <StoryLine text={detail.storyline} />
      <TopCast cast={detail.cast} />
      <ContentTabs seasons={detail.seasons} episodes={detail.episodes} />
      <SimilarMovies movies={similar} />
    </main>
  );
}