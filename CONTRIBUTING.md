# Come si lavora su questo progetto

Lavoriamo come in un team: ogni modifica parte da un ticket e arriva su `main` solo dopo una code review.

## Il flusso

1. **Prendi un ticket** dalla board del progetto e spostalo in "In corso".
2. **Crea un branch** da `main` aggiornato:
   ```bash
   git switch main && git pull
   git switch -c feat/12-sitemap
   ```
3. **Lavora a piccoli commit**, ognuno con un messaggio chiaro.
4. **Prima della PR** esegui `npm run check` e rileggi tutto il diff.
5. **Apri la PR**, compila il template e collegala al ticket con `Closes #12`. Sposta il ticket in "In review".
6. **Rispondi ai commenti** con nuovi commit sullo stesso branch. Non chiudere la PR per aprirne un'altra.
7. **Merge** solo con review approvata e CI verde, usando "Squash and merge". Poi cancella il branch.

## Nomi dei branch

`tipo/numero-ticket-descrizione-breve`

| Tipo       | Quando                                        |
| ---------- | --------------------------------------------- |
| `feat`     | nuova funzionalità                            |
| `fix`      | correzione di un bug                          |
| `perf`     | miglioramento di performance                  |
| `refactor` | riorganizzazione senza cambiare comportamento |
| `test`     | aggiunta o modifica di test                   |
| `docs`     | solo documentazione                           |
| `chore`    | configurazione, dipendenze, CI                |

## Messaggi di commit

Seguiamo [Conventional Commits](https://www.conventionalcommits.org/it/v1.0.0/):

```
feat(blog): aggiungi la pagina del singolo articolo
fix(seo): correggi l'URL canonico delle pagine tradotte
perf(home): riduci il peso dell'immagine hero del 70%
```

Il messaggio dice **cosa** cambia; il **perché** va nel corpo del commit o nella PR.

## Regole

- Niente push diretti su `main`: è protetto.
- Una PR per ticket. Se diventa enorme, dividila.
- Non committare mai segreti: le chiavi vanno in `.env.local`, che è ignorato da Git.
- L'uso dell'AI è permesso, con le regole in [AGENTS.md](AGENTS.md).

## Se sei bloccato

Prova da solo per 30 minuti. Poi scrivi nel canale descrivendo:

1. cosa stai cercando di fare;
2. cosa hai provato;
3. l'errore esatto (testo, non screenshot) e dove compare.
