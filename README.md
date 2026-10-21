<!--
  Questo README è il biglietto da visita del progetto: è la prima cosa che legge un recruiter.
  Si completa sprint dopo sprint. Le sezioni con [DA COMPLETARE] le scrivi tu man mano.
-->

# Case Study Builder

> Trasforma i progetti a cui hai contribuito in casi studio pronti per il tuo portfolio.

**Sito live:** [DA COMPLETARE dopo il primo deploy] · ![CI](https://github.com/OWNER/case-study-builder/actions/workflows/ci.yml/badge.svg)

<!-- Nome provvisorio: il nome definitivo si sceglie al kickoff. -->

## Il problema

Chi lavora su progetti di gruppo (all'ITS, in un bootcamp, in tirocinio) ha difficoltà a mostrare il proprio contributo. Un recruiter che apre GitHub vede repository caricati da altri e non capisce cosa ha fatto la singola persona. Design, flussi e scelte di interfaccia spesso non lasciano traccia nei commit.

## Come funziona

1. Accedi con il tuo account GitHub.
2. Scegli un repository a cui hai lavorato.
3. Racconti il tuo contributo: ruolo, aree, link a pull request, file o progetti Figma.
4. L'app legge il repository e unisce queste informazioni con quello che hai scritto.
5. L'AI prepara la bozza del caso studio: problema, ruolo, cosa hai costruito, scelte, cosa hai imparato.
6. Correggi la bozza e la pubblichi come pagina del tuo portfolio.

## Stack

- [Next.js](https://nextjs.org) (App Router), React e TypeScript
- Tailwind CSS
- Supabase: database Postgres e login con GitHub
- API di un modello AI per le bozze
- Vitest e Testing Library per i test unitari, Playwright per i test end-to-end
- GitHub Actions per la CI, Vercel per il deploy

## Stato del progetto

| Sprint | Obiettivo                                      | Stato    |
| ------ | ---------------------------------------------- | -------- |
| 1      | Fondamenta, design system, home e primo deploy | In corso |
| 2      | Primo caso studio scritto a mano               | Da fare  |
| 3      | Login con GitHub                               | Da fare  |
| 4      | Dati e repository                              | Da fare  |
| 5      | Il contributo dell'utente                      | Da fare  |
| 6      | L'AI: la prima bozza                           | Da fare  |
| 7      | Editor e pubblicazione                         | Da fare  |
| 8      | Qualità: test e CI                             | Da fare  |
| 9      | Valutazione e produzione                       | Da fare  |
| 10     | Portfolio e colloqui                           | Da fare  |

## Architettura

[DA COMPLETARE] Come è organizzato il codice e perché. Un diagramma semplice aiuta molto.

```
src/
  app/          pagine e layout (App Router)
  components/   componenti riutilizzabili
  lib/          dati, tipi e funzioni di supporto
e2e/            test end-to-end
docs/adr/       decisioni tecniche
```

## Decisioni tecniche

Le scelte importanti sono documentate in [`docs/adr`](docs/adr): cosa si è deciso, quali alternative c'erano e perché.

## Avvio in locale

Serve Node.js 22 (vedi `.nvmrc`).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Il sito è su [http://localhost:3000](http://localhost:3000).

## Script

| Comando            | Cosa fa                                            |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Server di sviluppo                                 |
| `npm run build`    | Build di produzione                                |
| `npm run check`    | Lint, tipi, formattazione e test, prima di ogni PR |
| `npm test`         | Test unitari                                       |
| `npm run test:e2e` | Test end-to-end (prima: `npx playwright install`)  |
| `npm run format`   | Formatta il codice con Prettier                    |

## Come lavoro

Ogni modifica passa da un ticket, un branch e una pull request con code review. Il flusso è descritto in [CONTRIBUTING.md](CONTRIBUTING.md).

## Dove sbaglia e perché

[DA COMPLETARE dallo sprint 6] Esempi di bozze sbagliate dell'AI e la loro causa.

## Cosa ho imparato

[DA COMPLETARE nello sprint 10] 3–5 punti concreti. È la sezione da cui partono le domande nei colloqui.

---

Progetto realizzato nel percorso [Full Cycle](https://full-cycle-beta.vercel.app), con code review di un mentor.
