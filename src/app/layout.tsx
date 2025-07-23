import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

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
      <body className="font-sans bg-white text-gray-800">
        <header className="bg-pink-100 p-4 shadow flex justify-between items-center">
          <h1 className="text-xl font-bold">Consulente di Immagine</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/chi-sono">Chi sono</Link>
            <Link href="/servizi">Servizi</Link>
            <Link href="/contatti">Contatti</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-12 p-4 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Consulente di Immagine
        </footer>
      </body>
    </html>
  );
}

