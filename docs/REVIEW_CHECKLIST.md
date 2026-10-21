# Checklist di code review

È la stessa lista che usa il mentor per ogni PR. Usala anche tu per rileggere il tuo codice prima di chiedere la review.

Nei commenti usiamo tre etichette:

- **da sistemare**: blocca il merge;
- **suggerimento**: miglioramento facoltativo, puoi discuterlo;
- **bravo**: qualcosa fatto bene, da ripetere.

## 1. La PR

- [ ] Risolve un solo ticket e rispetta i criteri di accettazione
- [ ] Il template è compilato: si capisce cosa cambia e come testarlo
- [ ] I commit seguono Conventional Commits

## 2. Il codice

- [ ] Nomi chiari, che spiegano l'intenzione
- [ ] Niente codice morto, `console.log` o commenti superati
- [ ] Componenti piccoli, con una responsabilità
- [ ] Server Component di default; `"use client"` solo dove serve davvero
- [ ] Tipi espliciti dove aiutano, niente `any`

## 3. Accessibilità e HTML

- [ ] Un solo `h1` per pagina, titoli in ordine
- [ ] Elementi semantici (`nav`, `main`, `article`, `button`, non `div` cliccabili)
- [ ] Immagini con `alt` sensato (vuoto se decorative)
- [ ] Navigabile da tastiera, con focus visibile

## 4. SEO

- [ ] Titolo e descrizione unici per pagina
- [ ] URL canonico corretto
- [ ] Pagina presente in sitemap, se deve essere indicizzata
- [ ] Dati strutturati validi, se presenti

## 5. Performance

- [ ] Immagini con `next/image`, dimensioni corrette e priorità sull'immagine LCP
- [ ] Nessun JavaScript lato client non necessario
- [ ] Niente spostamenti di layout (spazio riservato per immagini ed embed)
- [ ] Numeri Lighthouse prima/dopo, se la PR tocca le pagine

## 6. Test e sicurezza

- [ ] La logica nuova ha test
- [ ] Input dell'utente validati lato server
- [ ] Nessun segreto nel codice o nei log
