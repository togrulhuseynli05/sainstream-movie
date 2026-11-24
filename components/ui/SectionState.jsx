// {(data) => <Komponent items={data} />}
export default function SectionState({ state, skeleton = 'mx-[5%] my-10 h-64 rounded-xl', children }) {
  if (state.loading) {
    return <div aria-busy="true" className={`animate-pulse bg-surface ${skeleton}`} />;
  }

  if (state.error) {
    return (
      <section className="section">
        <p className="text-gray-400">Məlumat yüklənə bilmədi</p>
      </section>
    );
  }

  if (Array.isArray(state.data) && state.data.length === 0) {
    return (
      <section className="section">
        <p className="text-gray-400">Məlumat tapılmadı</p>
      </section>
    );
  }

  return children(state.data);
}