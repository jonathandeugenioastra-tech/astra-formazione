# Arricchimento dei corsi e-learning – metodo (dr. Jonathan D'Eugenio, novembre 2026)
Obiettivo: nessuna schermata ferma e muta. Ogni corso raggiunge le ore di legge con
- lezioni narrate (schermate «testo»: 4–6 punti che compaiono con la voce, narrazione 1.300–1.900 caratteri, circa 1,5–2 min);
- casi di studio, affermazioni vere o false, abbinamenti, verifiche;
- voce pari a circa il 50–60% del tempo del modulo; il resto in attività e lettura.
Registro: tecnico-scientifico, impersonale, fonti ufficiali; sigle scritte a video, lette per esteso dalla voce (pronuncia.js).
File: estensioni/<CORSO>/<MODULO>-<n>.json = { "dopo": "<titolo della schermata esistente>", "schermate": [ ... ] }
Applicazione: node applica_estensioni.js <CORSO>  (inserisce le schermate, idempotente: rimuove le estensioni precedenti)
Avanzamento: STATO.md

## Aggiornamento 13/11/2026 – interattività e visual
- Regola dei 30 secondi (player): al termine della voce, entro 20 s compare una «verifica immediata» generata dal testo della schermata (completamento di un dato normativo/tecnico, o ripasso di una schermata precedente del modulo); senza risposta per oltre 30 s il conteggio del tempo si sospende.
- Grafici dinamici: schermate `t:"grafico"` con `grafico.tipo` = `soglie` | `calcolo` | `flusso` | `intervalli`; ciascuno impone un’interazione obbligatoria (zone esplorate, tre simulazioni, fasi/voci consultate). File `Mx-9n.json` (generatore: /tmp/claude-0/gr/def2.py, da copiare in estensioni/_grafici quando definitivo).
- Copertine di modulo: obiettivo didattico (dalla narrazione della sezione) e riferimenti normativi più citati nel modulo.
- Aula e videoconferenza (formazione/note_docente.js): note del docente in quattro sezioni per ogni diapositiva: TITOLO E VISUAL, GRAFICO/INFOGRAFICA, DINAMICA D’AULA entro 30 s (domanda flash con risposta, sondaggio, near miss), SCRIPT DEL FORMATORE, più RIFERIMENTI.
- Incendi: nessuna fotografia; copertine con tabella dei riferimenti normativi e diagrammi tecnici.
- Fotografie: solo pubblico dominio o CC0 (nessun obbligo di attribuzione); nessun credito mostrato. Provenienza registrata solo in _interno/provenienza_immagini.json (non pubblicato).
