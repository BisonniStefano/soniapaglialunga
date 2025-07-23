import { Button } from "@/components/ui/button";

export default function ContattiPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contatti</h1>
      <p className="mt-4">
        Puoi contattarmi via email all’indirizzo: <a className="text-pink-600 underline" href="mailto:info@consulente.it">info@consulente.it</a>
      </p>
      <Button>Contattami</Button>
    </main>
  );
}
