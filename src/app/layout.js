import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'I feel you',
  description: 'Брайльді жазу жүйесін ерте оқыту платформасы',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kk" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-brand-light text-gray-800 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}