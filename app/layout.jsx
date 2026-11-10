import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = { title: 'SaintStream', description: 'Film platforması' };

// Root layout: hər səhifədə Navbar yuxarıda, Footer aşağıda görünür
export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
