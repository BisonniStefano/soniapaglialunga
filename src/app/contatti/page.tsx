export default function ContattiPage() {
  return (
    <section className="py-24 mx-auto w-full">
      <div className="mx-auto text-center">
        {/* Titolo */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 w-full">
          Iniziamo una collaborazione strategica
        </h1>

        {/* Invito diretto */}
        <p className="text-lg text-gray-700 mb-10">
          Ogni azienda ha esigenze specifiche. Per questo motivo ogni consulenza è progettata su misura.
        </p>

        {/* Mail di contatto */}
        <p className="text-2xl text-gray-800 mb-3">
          <a href="mailto:sonia@soniapaglialunga.it" className="font-semibold underline underline-offset-4 decoration-sky-300 hover:text-orange-300 transition">
            sonia@soniapaglialunga.it
          </a>
        </p>

        {/* Frase finale */}
        <p className="text-base text-gray-500 italic mb-20">
          Una consulenza mirata può fare la differenza tra una buona impressione e una presenza memorabile.
        </p>

        {/* Paragrafo introduttivo */}
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-4">
          Se desideri valorizzare l&apos;immagine del tuo team, potenziare la presenza dei tuoi leader 
          o migliorare la percezione del brand attraverso una comunicazione visiva efficace, sono qui per affiancarti.
        </p>

      </div>
    </section>
  );
}
