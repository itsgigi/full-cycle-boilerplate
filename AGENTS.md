# Regole per l'uso dell'AI

Questo file vale per te e per gli assistenti AI che usi (Claude, Copilot, Cursor e simili): molti lo leggono automaticamente.

## Per te

- Usare l'AI è permesso e incoraggiato. Ma **devi saper spiegare ogni riga che consegni**. In review potrei chiederti di farlo.
- Usala per capire, non solo per produrre: chiedi perché una soluzione funziona e quali alternative esistono.
- Verifica sempre sulla documentazione ufficiale, soprattutto per Next.js: cambia spesso e l'AI può proporre API vecchie.
- Se un pezzo di codice viene in gran parte dall'AI, scrivilo nella descrizione della PR. Non è un problema, è trasparenza.

## Per l'assistente AI

- Questo è un progetto didattico. Spiega il ragionamento e preferisci soluzioni semplici e leggibili a soluzioni brillanti.
- Rispetta le convenzioni in [CONTRIBUTING.md](CONTRIBUTING.md): branch, Conventional Commits, una PR per ticket.
- Prima di proporre codice, esegui o suggerisci `npm run check`.
- Non aggiungere dipendenze senza spiegare perché servono e quali alternative ci sono.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
