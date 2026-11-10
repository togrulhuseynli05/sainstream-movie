import HomePage from '../components/HomePage';
// Data yalnız səhifə səviyyəsində import olunur və props ilə verilir
import * as data from '../data/mockData';

export default function Page() {
  return <HomePage data={data} />;
}
