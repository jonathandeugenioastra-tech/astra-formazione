# Avanzamento arricchimento (obiettivo: voce ≈ 40–50%, attesa dopo la voce ≤ ~1 min per schermata)
Misura: node /tmp/claude-0/nar/misura.js <CORSO>  (copia in estensioni/misura.js)
| Corso | Ore | Schermate | Voce | Stato |
|---|---|---|---|---|
| ALL | 4 | 87 | 39% | testi completati 12/11/2026; audio nel lotto 1 (GENERA_NARRAZIONE_LOTTO_1) |
| CER | 4 | 65 | 37% | testi completati 12/11/2026; audio nel lotto 2 (81k caratteri) |
| EMI | 4 | 64 | 34% | testi completati 12/11/2026; audio nel lotto 2 (75k caratteri) |
| REATI | 4 | 47 | 23% | in corso: aggiornato al D.lgs. 81/2026 e al D.L. 116/2025; altre lezioni da aggiungere |
| RENTRI, SCA | 4 | – | – | da fare (gruppo 1) |
| CFP, CHIM, DIAG, ESG, LEG-AMB, REACH, RIF | 8 | – | – | da fare (gruppo 2) |
| LAV-AGG 6 h, LAV-GEN 4 h, LAV-SPEC-B 4 h | – | – | – | da fare (gruppo 3) |
| DIR 12 h, DL 16 h | – | – | – | da fare (gruppo 4) |
| RSPP-A 28 h, RSPP-AGG 40 h | – | – | – | da fare (gruppo 5) |
Lotto 1 audio: pronuncia (INAIL fonetico, sigle per esteso) 118 schermate + ALL 71 schermate.
Pendenti tecnici: dopo l'audio → importa_audio_azure.py, riallinea, build_scorm (foto per tema, intestazione, tempi proporzionali alla voce), collaudo, consegna Desktop, demo sito, cartella autore.

Regola immagini (12/11/2026): argomenti incendio/esplosione e corsi AI-1/2/3 senza fotografie (foto_corsi.js: INCENDIO, SENZA_FOTO).

13/11/2026 – Lotto A audio importato (Giuseppe): completi ALL, CFP, CHIM, DIAG, DIR, DL, ESG, LAV-AGG, LAV-GEN, LAV-SPEC-B, LEG-AMB, REACH, RENTRI, RIF, RSPP-A, RSPP-AGG, SCA.
Gli MP3 nuovi (216) sono archiviati sul PC in «_narrazione/voci_lotto_A.tar» (ALL ricodificato 64 kbit/s mono); prima di ricostruire questi corsi estrarli in elearning/audio-cache.
Da generare (lotto B): CER (66 schermate), EMI (64), REATI.
14/11/2026 – Lotto B audio importato (CER, EMI, REATI): tutti i 20 corsi e-learning hanno la narrazione completa.
MP3 lotto B (181, 64 kbit/s mono) archiviati sul PC in «_narrazione/voci_lotto_B.tar».
14/11/2026 – RENTRI: 19 schermate nuove (riforma art. 188-bis L. 199/2025, esclusioni, xFIR e fine doppio binario L. 26/2026, modalità di sicurezza D.D. 25/2026 e 319/2025, termini art. 15 D.M. 59/2023, D.D. 210/2026, deleghe, sanzioni art. 258, classificazione EER, deposito temporaneo, art. 188). Voce: lotto C (17.042 caratteri) da generare.
Stima lezioni ancora da scrivere per voce ≈50% del tempo: circa 3.200 su 20 corsi.
14/11/2026 (sera) – Regola del committente: nessuna consegna parziale; voce generata in un’unica volta a fine lavoro (piano Azure da adeguare al momento, con conferma del committente).
- CER: aggiunta M2-28 (modifiche PNRR 2025-2026: D.M. 127/2025, D.L. 19/2026 art. 27).
- LAV-GEN: aggiunte 6 lezioni (Costituzione e art. 2087 c.c.; rischi di gruppi particolari art. 28; categorie DPI Reg. 2016/425 e art. 78; visite e giudizio di idoneità artt. 41-42; addetti emergenze D.M. 388/2003 e D.M. 2/9/2021; denuncia e comunicazione infortuni). Prossimi: preposto (L. 215/2021), sospensione art. 14, INL/ASL, appalti art. 26, lavoro agile, esercitazioni.
- LAV-GEN: +5 (preposto L. 215/2021, sospensione art. 14, appalti art. 26, organi di vigilanza, VF).
- 14/11/2026 – Fonte interna: knowledge base e check list della HSE & ESG Suite (kb_seed.json, SEED T_AMB/T_SSL/T_CHK) copiate in _interno/fonti_suite; usate come traccia, con verifica dei riferimenti (alcune voci della check list riportano periodicità superate dall’Accordo 2025 e dal D.M. 2/9/2021).
- LAV-SPEC-B: +19 schermate (scale portatili, impianto di terra e D.P.R. 462/2001, marcatura CE e Reg. 2023/1230, scaffalature UNI EN 15635, colori e forme della segnaletica, PMV/PPD, illuminazione UNI EN 12464-1, spinta e traino, valori di azione del rumore, legionella, SDS, DPI artt. 77-78, prove di evacuazione, cassetta di pronto soccorso, gestanti D.lgs. 151/2001, RLS; VF, abbinamento, caso). Voce 19% (misura dopo riallineamento).
- LEG-AMB, RIF, SCA: riuso delle lezioni già verificate (EMI, REATI, RENTRI) per ancore comuni (strumento /tmp/claude-0/riuso/copia.js, file *-R<n>.json con campo «origine»); schermata base dei delitti di LEG-AMB sostituita con la versione aggiornata al D.lgs. 81/2026; nuove lezioni: artt. 9 e 41 Cost., principi, AUA, AIA e IED 2.0, valutazione della conformità, gerarchia, sottoprodotti ed end of waste, urbani e speciali, scarico o rifiuto liquido, autorizzazione e campionamento, rumore esterno, prima pioggia, sanzioni scarichi, fognatura. LEG-AMB 15%, RIF 7%, SCA 4%.
- 14/11/2026 (notte) – Riuso tra corsi della sicurezza: LAV-GEN e LAV-SPEC-B → LAV-AGG, DL, DIR (ancore mappate); nuove lezioni DL (fonti tecniche e interpelli, indicatori proattivi, vigilanza sui delegati, modello art. 30, prescrizione D.lgs. 758/1994, riunione periodica, idoneità e costi sicurezza art. 26, D.M. 1/9/2021, data certa e aggiornamento DVR, lavoro notturno, accesso RLS ai documenti, documentazione della formazione) → copiate in DIR, RSPP-A, RSPP-AGG. Misure: LAV-AGG 10%, DL 6%, DIR 7%, RSPP-A 3%, RSPP-AGG 2%. RIF 8% (HP, voci a specchio, MUD 2026, Albo, terre e rocce, flussi particolari).
- CHIM/REACH (nuove classi CLP, diisocianati voce 74, art. 224 c. 2, conversione ppm, UNI EN 689 test statistico e rivalutazione, Dir. 2024/869, filtri respiratori, registro esposti; rappresentante esclusivo, art. 33 e SCIP, microplastiche, Reg. 2020/878, UFI); CFP/ESG/DIAG con i dati verificati della knowledge base della suite (F-gas 2024/573, ISPRA 2025 e residual mix AIB, parametri standard nazionali, Scope 3 DESNZ 2026, SBTi 2.0, Omnibus e VSME, CBAM, EUDR, EED 2023/1791 non recepita, energy manager, ISO 50006/50015).
- Riuso esteso (RSPP-AGG → DL, DIR, RSPP-A, LAV-AGG, LAV-SPEC-B, CHIM); nuove lezioni DL (accomodamenti ragionevoli, art. 42, incentivi INAIL, leadership visibile), RSPP-AGG (lavoro agile, alcol e sostanze, aggressioni, burnout ICD-11), ESG (VSME B3-B7, Dir. 2024/825, Tassonomia), DIAG (motori IE, aria compressa, CAR), SCA (campionamento, trattamenti, prelievi e riuso, Dir. 2024/3019) ed esercitazioni. Collaudo di costruzione SCORM: LEG-AMB, RSPP-AGG, CFP senza errori.
- 14/11/2026 (sera, seconda sessione) – RSPP-AGG (preposto, patente a crediti, responsabilità RSPP, addestramento, ambienti confinati, lavori elettrici, cadute, codice prevenzione incendi, D.P.R. 151/2011, riunioni brevi), REACH (Allegato XIV, scenari di esposizione, miscele), RSPP-A (Infor.MO, malattie professionali, MOC, lavoratori stranieri), DIAG (Allegato 2, soggetti certificati, VAN/TIR), ESG (doppia materialità, VSME B8-B11), CFP (GWP, confini e anno base), REATI (whistleblowing), LEG-AMB (VIA, Seveso, odori), RIF (ADR, amianto, rifiuti sanitari); riuso esteso.
- 15/11/2026 – Lotto D: 233 testi unici (469 schermate) generati con Azure S0 dal cellulare (pagina temporanea su GitHub Pages, rimossa), importati e ricodificati a 64 kbit/s mono; 20 SCORM ricostruiti, collaudati e completati sul PC con le voci dei lotti A e B (controllo: tutti COMPLETI); slide, PDF e dispense consegnati nelle cartelle dei corsi. Narrazione mancante: 0.
