import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative w-full" style={{ height: "calc(100vh - 60px)" }}>
      {/* Immagine di sfondo */}
      <Image
        src="/Analyst-consultant.webp" // metti qui la tua immagine in /public
        alt="Consulente di immagine"
        fill
        className="object-cover object-center brightness-50"
        priority
      />

      {/* Overlay con testo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-semibold drop-shadow-lg">
          Valorizza la tua immagine,<br /> Esprimi la tua unicità.
        </h1>

        <Link
          href="/contatti"
          className="mt-8 inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-100 transition"
        >
          Prenota la tua consulenza
        </Link>
      </div>
    </section>
  );
}
