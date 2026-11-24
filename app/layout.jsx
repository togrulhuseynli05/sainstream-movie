import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = { title: 'SaintStream', description: 'Film platforması' };

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
