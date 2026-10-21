# 0001. Next.js, TypeScript e Supabase come base del progetto

- **Data:** da compilare nel kickoff
- **Stato:** accettata

## Contesto

Il prodotto ha un'interfaccia curata (le pagine dei casi studio), una parte server (lettura delle API di GitHub, chiamate al modello AI) e dei dati da salvare (utenti, repository, casi studio). Deve andare online gratis e chi lo sviluppa conosce bene il frontend ma non ancora il backend.

## Opzioni considerate

1. **React con Vite + backend separato (Express o Spring Boot):** separazione netta, ma due progetti, due linguaggi o due deploy da gestire fin dal primo giorno.
2. **Next.js con App Router + Supabase:** un solo progetto e un solo linguaggio (TypeScript) dall'interfaccia al server; Supabase offre database Postgres, login con GitHub e storage in un unico servizio con piano gratuito; deploy semplice su Vercel.
3. **Next.js + database gestito a mano (Postgres su un altro servizio + libreria di autenticazione):** più controllo, ma molta più configurazione.

## Decisione

Usiamo Next.js con App Router, TypeScript, Tailwind CSS e Supabase.

## Conseguenze

- Un solo linguaggio riduce il carico mentre si impara il backend.
- Le pagine sono Server Component di default: meno JavaScript nel browser.
- Dipendiamo dai piani gratuiti di Vercel e Supabase: Supabase mette in pausa i progetti inattivi e serve un modo per tenerlo attivo.
- Next.js cambia spesso: la documentazione ufficiale ha la precedenza su tutorial e AI.
