/**
 * Configurazione centrale del sito: nome, descrizione, URL e lingua.
 * Il nome è provvisorio: lo sceglie Lorenzo al kickoff.
 */
export const siteConfig = {
  name: "Case Study Builder",
  description:
    "Trasforma i progetti a cui hai contribuito in casi studio pronti per il tuo portfolio.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "it",
} as const;

/** Restituisce l'URL assoluto di un percorso, utile per canonical, sitemap e Open Graph. */
export function absoluteUrl(path = "/", baseUrl: string = siteConfig.url): string {
  return new URL(path, baseUrl).toString();
}
