export default function ChiSonoPage() {
  return (
    <section className="flex flex-col">

      {/* Sezione 1 – Missione */}
      <div className=" text-gray-800 py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">La mia missione</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Supporto aziende e professionisti nel costruire un’immagine coerente, credibile e strategica.
          Perché il modo in cui ci presentiamo influisce direttamente sulla fiducia, sulla leadership e sul business.
        </p>
      </div>

      {/* Sezione 2 – Percorso professionale */}
      <div className="bg-sky-100 text-gray-900 py-20 px-6 text-left">
        <h2 className="text-4xl font-semibold mb-4">Un percorso tra comunicazione e brand identity</h2>
        <p className="max-w-2xl mr-auto text-lg">
          Dopo una formazione in ambito comunicazione e marketing, ho deciso di specializzarmi nell'immagine professionale.
          Collaboro con aziende, executive e team HR per allineare presenza, stile e valori aziendali.
        </p>
      </div>

      {/* Sezione 3 – Filosofia di stile */}
      <div className="text-gray-900 py-20 px-6 text-right">
        <h2 className="text-4xl font-semibold mb-4">L'immagine come asset strategico</h2>
        <p className="max-w-2xl ml-auto text-lg">
          L’immagine non è solo estetica: è un linguaggio visivo che comunica fiducia, autorevolezza e cultura aziendale.
          Per questo, ogni intervento è pensato come parte integrante della strategia di branding.
        </p>
      </div>

      {/* Sezione 4 – Il mio approccio */}
      <div className="bg-sky-100 text-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Un approccio professionale e personalizzato</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Ogni realtà aziendale ha dinamiche, valori e obiettivi unici.
          Il mio metodo si basa su analisi, ascolto e interventi concreti per costruire una presenza efficace e coerente.
        </p>
      </div>

    </section>
  );
}
