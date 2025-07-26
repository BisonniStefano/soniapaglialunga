import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script } from 'next/font/google';

const playfair_Display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const dancing_Script = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Consulente di Immagine',
    template: '%s | Consulente di Immagine',
  },
  description: 'Scopri come valorizzare la tua immagine con stile e personalità.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${playfair_Display.className} font-sans bg-white`}>
        <header className="text-sky-200 bg-neutral-800 p-4 shadow flex justify-between items-center fixed top-0 left-0 w-full z-50">
            <Link href="/" className={`${dancing_Script.className} hover:text-orange-300 transition text-2xl font-bold font-serif italic`}>
              Sonia Paglialunga
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/chi-sono" className="hover:text-orange-300 transition">Chi sono</Link>
              <span className="text-neutral-500">|</span>
              <Link href="/servizi" className="hover:text-orange-300 transition">Servizi</Link>
              <span className="text-neutral-500">|</span>
              <Link href="/contatti" className="hover:text-orange-300 transition">Contatti</Link>
            </nav>
          </header>
        <main>
          <div style={{ height: "60px" }}></div>
          {children}
        </main>
        <footer className="mt-12 p-4 text-sm text-center text-gray-500 fixed bottom-0 w-full z-50">
          © {new Date().getFullYear()} Consulente di Immagine
        </footer>
      </body>
    </html>
  );
}

