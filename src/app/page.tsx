import { siteConfig } from "@/lib/site";

// Sprint 1, ticket «Home del portfolio»: sostituisci questo contenuto con la tua home.
export default function HomePage() {
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">{siteConfig.name}</h1>
      <p className="text-lg">{siteConfig.description}</p>
      <p className="text-sm opacity-70">
        Questo è il punto di partenza. Apri la board del progetto su GitHub e prendi il primo
        ticket.
      </p>
    </main>
  );
}
