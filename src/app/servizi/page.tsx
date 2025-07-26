import Link from "next/link";

const servizi = [
  {
    titolo: "Audit di immagine aziendale",
    descrizione:
      "Analisi approfondita dell’immagine esterna e interna dell’azienda per allineare percezione e valori.",
  },
  {
    titolo: "Consulenza per executive",
    descrizione:
      "Supporto personalizzato per manager e dirigenti per costruire una presenza autorevole e coerente.",
  },
  {
    titolo: "Uniformità del team",
    descrizione:
      "Progettazione e implementazione di dress code e linee guida per un’immagine coordinata e professionale.",
  },
  {
    titolo: "Formazione sull’immagine",
    descrizione:
      "Workshop e seminari per migliorare comunicazione non verbale, postura e stile personale nel contesto lavorativo.",
  },
  {
    titolo: "Personal branding visivo",
    descrizione:
      "Strategie per valorizzare l’immagine personale in modo autentico e allineato agli obiettivi professionali.",
  },
  {
    titolo: "Consulenza per eventi aziendali",
    descrizione:
      "Supporto nella preparazione dell’immagine per conferenze, meeting e occasioni pubbliche di rilievo.",
  },
];


export default function ServiziPage() {
  return (
    <section className="py-15 px-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12"> Servizi </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {servizi.map((servizio, index) => (
          <div
            key={index}
            className="bg-sky-50 rounded-2xl text-center shadow-md min-h-[300px] p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {servizio.titolo}
              </h3>
              <p className="text-gray-700 mb-6">{servizio.descrizione}</p>
            </div>
            <Link
              href="/contatti" className="mt-auto inline-block bg-sky-200 text-gray-900 text-center font-bold px-5 py-2 rounded-full text-sm hover:bg-orange-200 transition">
              Contattami
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}