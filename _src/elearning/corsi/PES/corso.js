/* Corso – Lavori elettrici: formazione PES, PAV e idoneità ai lavori sotto tensione in BT (16 ore)
   Norma CEI 11-27:2025 (6ª ed.) · CEI EN 50110-1:2024 · artt. 80-87 e Allegato IX D.lgs. 81/2008 · D.M. 4 febbraio 2011
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
const T = (tit, lead, punti, appro, rif, nar, p = 1.6) => ({ t: 'testo', tit, foto: false, lead, punti, appro, rif, nar, p });
const K = (tit, scena, domanda, opz, rif, appro) => ({ t: 'caso', tit, scena, domanda, opz, rif, appro, nar: 'Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.', p: 1.4 });
window.CORSO = {
 "id": "PES",
 "titolo": "Lavori elettrici – PES, PAV e PEI",
 "sottotitolo": "Formazione per persone esperte, avvertite e idonee ai lavori sotto tensione in bassa tensione (CEI 11-27:2025)",
 "ore": 16,
 "rif": "CEI 11-27:2025 · CEI EN 50110-1:2024 · artt. 80-87 e Allegato IX D.lgs. 81/2008 · D.M. 4 febbraio 2011",
 "soglia": 70,
 "aggiornato": "2026-11",
 "moduli": [
  {
   "id": "M0",
   "titolo": "Introduzione",
   "min": 5,
   "foto": "sicurezza",
   "schermate": [
    {
     "t": "copertina",
     "tit": "Lavori elettrici – PES, PAV e PEI",
     "sott": "Corso di 16 ore · livelli 1A, 1B, 2A e 2B",
     "nar": "Benvenuti al corso sui lavori elettrici secondo la sesta edizione della norma CEI 11-27, pubblicata nel 2025 e allineata alla norma europea CEI EN 50110-1 del 2024. Il corso fornisce le conoscenze per il riconoscimento di persona esperta e avvertita e le basi per l’idoneità ai lavori sotto tensione in bassa tensione.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Conoscere gli effetti della corrente elettrica e dell’arco elettrico sul corpo umano",
      "Conoscere obblighi di legge, norme tecniche e figure organizzative della CEI 11-27:2025",
      "Pianificare e condurre lavori fuori tensione, in prossimità e sotto tensione",
      "Applicare le distanze e scegliere DPI e attrezzature isolanti",
      "Compilare la documentazione di lavoro e gestire le emergenze"
     ],
     "nar": "Al termine conoscerai gli effetti della corrente e dell’arco elettrico, le regole di legge e della norma, le figure organizzative, le procedure per i lavori fuori tensione, in prossimità e sotto tensione, le distanze, i dispositivi di protezione e la gestione delle emergenze.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Rischio elettrico e quadro normativo (livello 1A)",
   "min": 235,
   "foto": "sicurezza",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Rischio elettrico e quadro normativo",
     "nar": "Primo modulo: il rischio elettrico e il quadro normativo.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Gli effetti della corrente elettrica sul corpo umano",
     "foto": false,
     "lead": "La gravità degli effetti dipende dall’intensità della corrente che attraversa il corpo, dalla durata, dal percorso e dalla frequenza.",
     "punti": [
      "Soglia di percezione: correnti dell’ordine del mezzo milliampere in corrente alternata a 50 Hz",
      "Tetanizzazione: contrazione muscolare che può impedire di staccarsi dalla parte in tensione",
      "Arresto respiratorio e fibrillazione ventricolare: la corrente che attraversa il cuore può causare un’aritmia mortale",
      "Ustioni da effetto termico nei punti di ingresso e uscita e lungo il percorso interno",
      "Effetti indiretti: cadute dall’alto per lo spavento o la contrazione, ustioni da arco, lesioni oculari"
     ],
     "appro": "Le curve tempo-corrente della specifica IEC 60479-1 (recepita come CEI) suddividono gli effetti in zone, dalla semplice percezione alla fibrillazione ventricolare. L’intensità dipende dalla tensione di contatto e dall’impedenza del corpo, che diminuisce con la tensione, con la pelle bagnata e con l’ampiezza delle superfici di contatto. Per questo anche le tensioni ordinarie di 230 V possono essere mortali.",
     "rif": "CEI/IEC TS 60479-1 · art. 80 D.lgs. 81/2008",
     "nar": "Gli effetti della corrente dipendono da intensità, durata, percorso e frequenza. Si va dalla semplice percezione alla tetanizzazione, che impedisce di staccarsi, fino all’arresto respiratorio e alla fibrillazione ventricolare. Si aggiungono le ustioni e gli effetti indiretti come le cadute. Anche la tensione di 230 volt può essere mortale, soprattutto con la pelle bagnata.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Contatti diretti, contatti indiretti e arco elettrico",
     "foto": false,
     "lead": "Il rischio elettrico si manifesta in tre modi principali, ciascuno con misure di protezione specifiche.",
     "punti": [
      "Contatto diretto: con una parte normalmente in tensione (conduttore, morsetto); protezione con isolamento, involucri, barriere, distanza",
      "Contatto indiretto: con una massa andata in tensione per un guasto; protezione con messa a terra coordinata con interruttori automatici o differenziali",
      "Arco elettrico: scarica in aria con temperature elevatissime, onda di pressione, proiezione di metallo fuso e radiazione ultravioletta",
      "L’interruttore differenziale ad alta sensibilità (30 mA) è una protezione addizionale contro i contatti diretti",
      "Effetti dell’arco: ustioni gravi, lesioni agli occhi e all’udito, incendio degli indumenti"
     ],
     "appro": "La sesta edizione della CEI 11-27 introduce un allegato informativo sul rischio da arco elettrico: per i lavori sotto tensione e in prossimità occorre valutare il rischio di arco considerando tensione, corrente di cortocircuito presunta, distanza di lavoro e dispositivi di protezione installati. Il rapporto tecnico CEI TR 78-25 fornisce indicazioni sulla valutazione.",
     "rif": "CEI 11-27:2025, Allegato I · CEI TR 78-25 · CEI 64-8",
     "nar": "Il rischio elettrico si manifesta con il contatto diretto con parti in tensione, con il contatto indiretto con masse andate in tensione per un guasto, e con l’arco elettrico, che sviluppa temperature altissime, pressione e metallo fuso. La nuova edizione della norma introduce la valutazione del rischio da arco per i lavori sotto tensione e in prossimità.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Il quadro di legge: il Titolo III, Capo III del D.lgs. 81/2008",
     "foto": false,
     "lead": "Gli artt. 80-87 del D.lgs. 81/2008 disciplinano impianti e apparecchiature elettriche e i lavori sotto tensione e in prossimità.",
     "punti": [
      "Art. 80: il datore di lavoro valuta i rischi elettrici e adotta le misure per eliminarli o ridurli, comprese procedure di uso e manutenzione",
      "Art. 82: i lavori sotto tensione sono vietati, salvo nei casi e alle condizioni previste dalla stessa norma",
      "Art. 83 e Allegato IX: divieto di lavori non elettrici in prossimità di linee e impianti con parti attive non protette a distanze inferiori a quelle della Tabella 1",
      "Art. 86: verifiche periodiche degli impianti di messa a terra e di protezione dalle scariche atmosferiche (D.P.R. 462/2001)",
      "Art. 81: requisiti di sicurezza; la conformità alle norme tecniche CEI costituisce presunzione di regola d’arte"
     ],
     "appro": "L’art. 82 consente i lavori sotto tensione se le procedure adottate e le attrezzature sono conformi alle norme tecniche e, per i sistemi di categoria 0 e I, se eseguiti da personale riconosciuto idoneo dal datore di lavoro secondo le norme tecniche; per tensioni superiori a 1000 V servono aziende autorizzate dal Ministero del lavoro secondo il D.M. 4 febbraio 2011 e operatori abilitati.",
     "rif": "Artt. 80-87 e Allegato IX D.lgs. 81/2008 · D.M. 4 febbraio 2011 · D.P.R. 462/2001",
     "nar": "Il decreto 81 dedica gli articoli da 80 a 87 al rischio elettrico. Il datore di lavoro valuta i rischi; i lavori sotto tensione sono vietati salvo le condizioni dell’articolo 82; i lavori non elettrici vicino a parti attive devono rispettare le distanze dell’Allegato nove; gli impianti di terra si verificano periodicamente. Sopra i mille volt servono aziende autorizzate.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Le norme tecniche: CEI 11-27:2025 e CEI EN 50110-1:2024",
     "foto": false,
     "lead": "La CEI EN 50110-1 stabilisce i requisiti europei per l’esercizio degli impianti elettrici; la CEI 11-27 li completa per l’Italia con prescrizioni e indicazioni nazionali.",
     "punti": [
      "CEI EN 50110-1:2024: requisiti generali per l’esercizio in sicurezza degli impianti elettrici e per le attività lavorative su, con o in prossimità di essi",
      "CEI 11-27:2025, sesta edizione: adeguata alla nuova CEI EN 50110-1 e coordinata con il D.lgs. 81/2008",
      "Nuove denominazioni delle figure organizzative, definizioni di attività lavorativa, lavoro e sorveglianza, nuove regole per le distanze di lavoro",
      "Nuovi allegati informativi sul rischio da arco elettrico e sulle disposizioni per le emergenze",
      "Norme collegate: CEI 64-8 per gli impianti utilizzatori in bassa tensione, CEI EN 61243-3 per i rivelatori di tensione, norme sui DPI isolanti"
     ],
     "appro": "La norma si applica a tutti gli impianti elettrici, dall’altissima alla bassissima tensione, e alle attività lavorative elettriche e non elettriche svolte in prossimità di parti attive. Le qualifiche di persona esperta e avvertita riguardano solo l’ambito di applicazione della norma.",
     "rif": "CEI 11-27:2025 · CEI EN 50110-1:2024",
     "nar": "La norma europea CEI EN 50110-1 del 2024 stabilisce i requisiti per l’esercizio degli impianti e i lavori elettrici; la CEI 11-27, sesta edizione del 2025, la completa per l’Italia. Cambiano le denominazioni delle figure, le definizioni e le regole per le distanze; arrivano gli allegati sull’arco elettrico e sulle emergenze.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Le categorie dei sistemi elettrici e la terminologia",
     "foto": false,
     "lead": "Le misure di sicurezza dipendono dalla tensione nominale del sistema e dalla situazione delle parti attive.",
     "punti": [
      "Categoria 0: fino a 50 V in corrente alternata e 120 V in corrente continua",
      "Categoria I (bassa tensione): oltre la categoria 0 fino a 1000 V in c.a. e 1500 V in c.c.",
      "Categorie II e III: media e alta tensione, oltre 1000 V in c.a. (fino a 30 kV la II, oltre la III)",
      "Parte attiva: conduttore o parte conduttrice destinata a essere in tensione nel servizio ordinario",
      "Zona di lavoro sotto tensione e zona prossima: delimitate dalle distanze DL e DV definite dalla norma in funzione della tensione"
     ],
     "appro": "Le distanze DL (che delimita la zona di lavoro sotto tensione) e DV (che delimita la zona prossima) sono tabellate nella norma in base alla tensione nominale. Il lavoro elettrico è svolto a distanza inferiore o uguale a DV da parti attive accessibili, oppure su parti dell’impianto messe fuori tensione.",
     "rif": "CEI 11-27:2025 · CEI 64-8",
     "nar": "I sistemi elettrici sono classificati in categorie: categoria zero fino a 50 volt in alternata, categoria uno, la bassa tensione, fino a mille volt, e oltre le categorie due e tre di media e alta tensione. La norma definisce due distanze in funzione della tensione: DL delimita la zona di lavoro sotto tensione e DV la zona prossima.",
     "p": 1.6
    },
    {
     "t": "definizioni",
     "tit": "Le persone: PES, PAV, PEC e idoneità",
     "sott": "CEI 11-27:2025 · apri ciascuna scheda",
     "voci": [
      [
       "E",
       "PES – Persona esperta",
       "Persona con formazione, conoscenze ed esperienza tali da analizzare i rischi ed evitare i pericoli dell’elettricità."
      ],
      [
       "A",
       "PAV – Persona avvertita",
       "Persona adeguatamente avvisata da persone esperte, in grado di evitare i pericoli dell’elettricità."
      ],
      [
       "C",
       "PEC – Persona comune",
       "Persona né esperta né avvertita."
      ],
      [
       "I",
       "Idoneità ai lavori sotto tensione",
       "Riconoscimento distinto, attribuito per iscritto dal datore di lavoro a PES o PAV per specifici lavori sotto tensione in BT."
      ],
      [
       "S",
       "Attribuzione scritta",
       "Il datore di lavoro attribuisce per iscritto la qualifica e i tipi di lavoro; una persona può essere PES per un lavoro e PAV o PEC per un altro."
      ]
     ],
     "nar": "La norma distingue la persona esperta, che sa analizzare i rischi, la persona avvertita, istruita da persone esperte, e la persona comune. Le qualifiche sono attribuite per iscritto dal datore di lavoro per tipi di lavoro. L’idoneità ai lavori sotto tensione è un riconoscimento distinto. Apri le schede.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Formazione, attribuzione delle qualifiche e aggiornamento",
     "foto": false,
     "lead": "La formazione per i lavori elettrici è articolata in livelli; le qualifiche si attribuiscono sulla base di formazione, esperienza e caratteristiche personali.",
     "punti": [
      "Livello 1A: conoscenze teoriche; livello 1B: conoscenze e capacità operative per i lavori elettrici",
      "Livello 2A: conoscenze teoriche di base per i lavori sotto tensione; livello 2B: pratica delle tecniche di lavoro sotto tensione",
      "Il datore di lavoro attribuisce per iscritto le qualifiche PES e PAV e l’idoneità ai lavori sotto tensione, specificando i tipi di lavoro",
      "Le qualifiche possono essere revocate se vengono meno i requisiti",
      "Aggiornamento almeno ogni cinque anni, con contenuti adeguati all’ambito di attività"
     ],
     "appro": "La qualifica non deriva automaticamente dal corso: il datore di lavoro valuta anche l’esperienza maturata, le caratteristiche dell’impianto e le capacità della persona. La formazione deve essere documentata e comprendere una verifica dell’apprendimento.",
     "rif": "CEI 11-27:2025 · art. 82 e art. 37 D.lgs. 81/2008",
     "nar": "La formazione è articolata in livelli: 1A per le conoscenze teoriche, 1B per le capacità operative, 2A e 2B per i lavori sotto tensione. Le qualifiche di persona esperta e avvertita e l’idoneità sono attribuite per iscritto dal datore di lavoro, che valuta anche l’esperienza. L’aggiornamento è almeno quinquennale.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il neoassunto in manutenzione",
     "scena": "Un neoassunto con diploma di perito elettrotecnico ha appena concluso il corso PES. Il capo reparto lo invia da solo a sostituire un interruttore in un quadro di distribuzione in tensione «perché ormai è PES».",
     "domanda": "La decisione è corretta?",
     "opz": [
      [
       "Sì: il corso rende automaticamente PES e idoneo ai lavori sotto tensione",
       false,
       "No: la qualifica e l’idoneità sono attribuite per iscritto dal datore di lavoro valutando anche l’esperienza."
      ],
      [
       "No: servono l’attribuzione scritta della qualifica, la valutazione dell’esperienza e, per lavorare sotto tensione, l’idoneità specifica; il lavoro va pianificato e, se possibile, svolto fuori tensione",
       true,
       "Corretto: la priorità è il lavoro fuori tensione."
      ],
      [
       "Sì, se indossa i guanti",
       false,
       "No: i DPI non sostituiscono qualifica, idoneità e procedura."
      ]
     ],
     "rif": "CEI 11-27:2025 · art. 82 D.lgs. 81/2008",
     "appro": "Il lavoro fuori tensione resta la regola: il lavoro sotto tensione è ammesso solo nei casi previsti, con procedure, attrezzature e personale idoneo.",
     "nar": "Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 4,
     "domande": [
      [
       "La fibrillazione ventricolare può essere causata da:",
       [
        "Corrente che attraversa il cuore",
        "Il rumore",
        "Le vibrazioni",
        "La luce"
       ],
       0,
       "Effetti della corrente."
      ],
      [
       "I lavori sotto tensione sono regolati dall’articolo:",
       [
        "82",
        "18",
        "71",
        "113"
       ],
       0,
       "D.lgs. 81/2008."
      ],
      [
       "La bassa tensione (categoria I) in c.a. arriva fino a:",
       [
        "50 V",
        "400 V",
        "1000 V",
        "30 kV"
       ],
       2,
       "Categorie."
      ],
      [
       "La PAV è una persona:",
       [
        "Esperta",
        "Avvertita da persone esperte",
        "Comune",
        "Esterna"
       ],
       1,
       "CEI 11-27."
      ],
      [
       "Le qualifiche PES e PAV sono attribuite:",
       [
        "Automaticamente dal corso",
        "Per iscritto dal datore di lavoro",
        "Dall’INAIL",
        "Dal CEI"
       ],
       1,
       "CEI 11-27:2025."
      ]
     ],
     "nar": "Verifica intermedia sul primo modulo.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Organizzazione del lavoro elettrico (livelli 1A e 1B)",
   "min": 240,
   "foto": "sicurezza3",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Figure, pianificazione, documentazione e distanze",
     "nar": "Secondo modulo: l’organizzazione del lavoro elettrico.",
     "p": 0.6
    },
    {
     "t": "definizioni",
     "tit": "Le figure organizzative della CEI 11-27:2025",
     "sott": "Allineate alla CEI EN 50110-1:2024 · apri ciascuna scheda",
     "voci": [
      [
       "I",
       "GI – Gestore impianto",
       "Responsabile complessivo dell’esercizio sicuro dell’impianto; se assume anche il ruolo di RI deve essere PES."
      ],
      [
       "R",
       "RI – Responsabile impianto",
       "Persona designata a gestire in sicurezza l’impianto durante i lavori elettrici. Deve essere sempre PES."
      ],
      [
       "G",
       "GL – Gestore programmazione lavoro",
       "Pianifica e organizza i lavori elettrici prima del loro inizio."
      ],
      [
       "W",
       "RLE – Responsabile del lavoro elettrico",
       "Designato dal GL per gestire le attività e la sicurezza sul luogo di lavoro; deve essere PES e presente per tutta la durata del lavoro."
      ],
      [
       "L",
       "LAV – Lavoratore",
       "Esegue le attività lavorative nell’ambito dell’organizzazione del lavoro."
      ]
     ],
     "nar": "La sesta edizione ridefinisce le figure, allineandole alla norma europea: il gestore dell’impianto, il responsabile dell’impianto, il gestore della programmazione del lavoro, il responsabile del lavoro elettrico, che deve essere persona esperta e presente per tutto il lavoro, e il lavoratore. Apri le schede.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Pianificazione e comunicazioni tra le figure",
     "foto": false,
     "lead": "Ogni lavoro elettrico è preceduto da una pianificazione e da uno scambio di informazioni documentato tra chi gestisce l’impianto e chi esegue il lavoro.",
     "punti": [
      "Individuazione dell’impianto e delle parti su cui lavorare, sopralluogo e analisi dei rischi",
      "Scelta del metodo di lavoro: fuori tensione, in prossimità o sotto tensione",
      "Consegna e restituzione dell’impianto tra RI e RLE, con indicazione delle parti messe in sicurezza",
      "Piano di lavoro e piano di intervento quando necessari; comunicazioni scritte o registrate",
      "Coordinamento con altre imprese presenti e con il committente (art. 26 D.lgs. 81/2008)"
     ],
     "appro": "Le comunicazioni tra RI e RLE sono il punto critico di molti incidenti: una parte creduta fuori tensione e rialimentata da un altro operatore, o un sezionamento eseguito sul circuito sbagliato. Per questo la norma richiede scambi di informazioni chiari, identificabili e possibilmente documentati.",
     "rif": "CEI 11-27:2025 · CEI EN 50110-1:2024 · art. 26 D.lgs. 81/2008",
     "nar": "Ogni lavoro elettrico si pianifica: si individuano le parti, si analizzano i rischi, si sceglie il metodo di lavoro. Il responsabile dell’impianto consegna l’impianto al responsabile del lavoro elettrico indicando le parti messe in sicurezza, e alla fine lo riceve indietro. Le comunicazioni devono essere chiare e documentate: molti incidenti nascono da rialimentazioni impreviste.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Le distanze di lavoro della sesta edizione",
     "foto": false,
     "lead": "La norma introduce formule per le distanze minime di lavoro che tengono conto delle attrezzature e dei movimenti.",
     "punti": [
      "Lavoro all’interno della zona prossima: distanza minima DWL = DL + L + E",
      "Lavoro all’esterno della zona prossima: distanza minima DWV = DV + L + E",
      "L: lunghezza dell’attrezzo o dell’attrezzatura impiegata",
      "E: distanza ergonomica, con valore di riferimento di circa 0,1 m da adeguare all’attività",
      "Per i lavori non elettrici restano le distanze della Tabella 1 dell’Allegato IX del D.lgs. 81/2008"
     ],
     "appro": "Il calcolo si esegue con i valori di DL e DV tabellati nella norma per la tensione nominale effettiva dell’impianto, con la lunghezza reale degli attrezzi e con una stima prudente dei movimenti. Da questi valori derivano, ad esempio, la massima altezza di lavoro sotto una linea aerea o la posizione delle delimitazioni.",
     "rif": "CEI 11-27:2025 · Allegato IX D.lgs. 81/2008",
     "nar": "La sesta edizione introduce formule per le distanze minime di lavoro: dentro la zona prossima DL più la lunghezza dell’attrezzo più una distanza ergonomica, fuori dalla zona prossima DV più gli stessi termini. La distanza ergonomica vale circa dieci centimetri da adeguare. Per i lavori non elettrici restano le distanze dell’Allegato nove del decreto 81.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lavori non elettrici in prossimità di parti attive",
     "foto": false,
     "lead": "Molti infortuni elettrici colpiscono lavoratori non elettrici: gruisti, autisti di autogru, operatori di piattaforme, muratori, pittori.",
     "punti": [
      "Allegato IX, Tabella 1: distanze minime da linee con parti attive non protette: 3 m fino a 1 kV, 3,5 m fino a 30 kV, 5 m fino a 132 kV, 7 m oltre 132 kV",
      "Se non si possono rispettare: messa fuori tensione, protezioni isolanti o barriere, sorveglianza di PES o PAV secondo la norma",
      "Con sole persone comuni che usano attrezzi sotto linee: limiti di altezza di lavoro indicati dalla norma",
      "Il datore di lavoro documenta la valutazione delle distanze e delle condizioni di sicurezza, con il contributo di una PES",
      "Mezzi con bracci e cestelli: pianificazione del percorso e dell’area di lavoro, segnalazioni a terra"
     ],
     "appro": "L’art. 83 del D.lgs. 81/2008 vieta i lavori non elettrici a distanze inferiori a quelle della Tabella 1 salvo che vengano adottate disposizioni organizzative e procedurali idonee a proteggere i lavoratori, secondo le norme tecniche. La CEI 11-27 descrive queste disposizioni.",
     "rif": "Art. 83 e Allegato IX D.lgs. 81/2008 · CEI 11-27:2025",
     "nar": "Molti infortuni elettrici colpiscono chi non fa lavori elettrici, come gruisti e operatori di piattaforme. Le distanze minime dalle linee non protette sono di tre metri fino a mille volt, tre metri e mezzo fino a trenta chilovolt, cinque metri fino a centotrentadue e sette metri oltre. Se non si possono rispettare, servono fuori servizio, barriere o sorveglianza secondo la norma, e la valutazione documentata.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · L’autogru vicino alla linea",
     "scena": "Un’impresa deve sollevare con autogru dei pannelli in un cortile attraversato da una linea aerea a 15 kV. La distanza tra il braccio alla massima estensione e i conduttori sarebbe di circa 2 metri.",
     "domanda": "Come si procede?",
     "opz": [
      [
       "Si procede con attenzione: 2 metri bastano",
       false,
       "No: la distanza minima della Tabella 1 per tensioni fino a 30 kV è 3,5 m."
      ],
      [
       "Si valuta con una PES: richiesta di messa fuori servizio della linea al gestore, oppure riposizionamento dell’autogru o limitazione dell’estensione del braccio per rispettare la distanza; procedura scritta, sorveglianza e segnalazioni",
       true,
       "Corretto: art. 83, Allegato IX e CEI 11-27."
      ],
      [
       "Si isola il braccio con nastro adesivo",
       false,
       "No: non è una protezione idonea."
      ]
     ],
     "rif": "Art. 83 e Allegato IX D.lgs. 81/2008 · CEI 11-27:2025",
     "appro": "La messa fuori servizio di una linea della distribuzione pubblica si richiede al gestore della rete con adeguato anticipo.",
     "nar": "Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Documentazione dei lavori elettrici",
     "foto": false,
     "lead": "La documentazione rende tracciabili le decisioni e le comunicazioni ed è parte della sicurezza.",
     "punti": [
      "Piano di lavoro: descrizione dell’attività, metodo, misure di sicurezza, persone, attrezzature",
      "Piano di intervento per lavori complessi o con più squadre",
      "Documenti di consegna e restituzione dell’impianto tra RI e RLE",
      "Attestazioni di qualifica PES/PAV e di idoneità ai lavori sotto tensione",
      "Registrazione delle verifiche delle attrezzature isolanti e dei DPI"
     ],
     "appro": "La forma della documentazione è proporzionata alla complessità del lavoro: per un intervento semplice e ripetitivo può bastare una procedura standard con registrazione; per lavori su impianti complessi o con più imprese servono piani scritti e firmati.",
     "rif": "CEI 11-27:2025 · art. 80 D.lgs. 81/2008",
     "nar": "La documentazione rende tracciabili decisioni e comunicazioni: piano di lavoro, piano di intervento per lavori complessi, consegna e restituzione dell’impianto, attestazioni di qualifica e registrazione delle verifiche di attrezzature e dispositivi. La forma dipende dalla complessità del lavoro.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Emergenze e incidenti elettrici",
     "foto": false,
     "lead": "La sesta edizione introduce un allegato informativo sulle disposizioni per le emergenze.",
     "punti": [
      "Meccanismo di comunicazione per allertare i soccorsi e il responsabile dell’impianto",
      "Disponibilità degli schemi elettrici aggiornati",
      "Presidi di primo soccorso e antincendio adatti; persone formate al primo soccorso e alla rianimazione",
      "Soccorso all’infortunato solo dopo l’interruzione della tensione o con mezzi isolanti idonei",
      "Dopo l’evento: messa in sicurezza e, per quanto ragionevole, conservazione delle condizioni per l’analisi"
     ],
     "appro": "Su impianti in media e alta tensione il soccorritore non deve avvicinarsi all’infortunato finché il responsabile dell’impianto non conferma la messa fuori tensione e a terra. Sugli incendi di apparecchiature elettriche si usano estinguenti idonei (ad esempio anidride carbonica) e mai acqua su parti in tensione.",
     "rif": "CEI 11-27:2025, Allegato J · D.M. 388/2003",
     "nar": "La nuova norma prevede disposizioni per le emergenze: comunicazioni, schemi aggiornati, presidi di primo soccorso e antincendio, persone formate. L’infortunato si soccorre solo dopo aver tolto tensione o con mezzi isolanti. In media e alta tensione si aspetta la conferma del responsabile dell’impianto. Mai acqua su parti in tensione.",
     "p": 1.6
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 3,
     "domande": [
      [
       "Nella CEI 11-27:2025 il responsabile del lavoro elettrico (RLE):",
       [
        "Può essere una PEC",
        "Deve essere PES e presente per tutto il lavoro",
        "È sempre esterno",
        "Non è previsto"
       ],
       1,
       "Figure organizzative."
      ],
      [
       "La distanza minima per lavori non elettrici da linee fino a 1 kV è:",
       [
        "1 m",
        "3 m",
        "5 m",
        "7 m"
       ],
       1,
       "Allegato IX."
      ],
      [
       "Nella formula DWV = DV + L + E, L è:",
       [
        "La lunghezza dell’attrezzo",
        "La larghezza della linea",
        "Il limite di tensione",
        "Il lavoratore"
       ],
       0,
       "Distanze di lavoro."
      ],
      [
       "Il soccorso a un infortunato elettrico si presta:",
       [
        "Subito toccandolo",
        "Dopo l’interruzione della tensione o con mezzi isolanti idonei",
        "Solo con acqua",
        "Mai"
       ],
       1,
       "Emergenze."
      ]
     ],
     "nar": "Verifica intermedia sul secondo modulo.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M3",
   "titolo": "Lavori fuori tensione, in prossimità e sotto tensione (livelli 1B e 2A)",
   "min": 240,
   "foto": "sicurezza2",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 3",
     "sott": "Metodi di lavoro, DPI e attrezzature",
     "nar": "Terzo modulo: i metodi di lavoro, i dispositivi di protezione e le attrezzature.",
     "p": 0.6
    },
    {
     "t": "processo",
     "tit": "Lavoro fuori tensione: le cinque operazioni",
     "rif": "CEI EN 50110-1:2024 · CEI 11-27:2025",
     "passi": [
      [
       "Sezionare",
       "Separare completamente la parte di impianto da tutte le possibili fonti di alimentazione"
      ],
      [
       "Impedire la richiusura",
       "Blocchi meccanici, lucchetti, cartelli, rimozione di fusibili; custodia delle chiavi"
      ],
      [
       "Verificare l’assenza di tensione",
       "Con rivelatore idoneo, verificato prima e dopo su sorgente nota, su tutti i conduttori"
      ],
      [
       "Mettere a terra e in cortocircuito",
       "Dove previsto, con dispositivi idonei, prima verso terra e poi sui conduttori"
      ],
      [
       "Proteggere dalle parti adiacenti",
       "Barriere, schermi, ripari isolanti verso le parti che restano in tensione"
      ]
     ],
     "nar": "Il lavoro fuori tensione si basa su cinque operazioni: sezionare completamente, impedire la richiusura con blocchi e cartelli, verificare l’assenza di tensione con uno strumento controllato, mettere a terra e in cortocircuito dove previsto, e proteggersi dalle parti vicine che restano in tensione.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Errori tipici nella messa fuori tensione",
     "foto": false,
     "lead": "Gli incidenti nei lavori fuori tensione nascono quasi sempre da una delle cinque operazioni eseguita male o omessa.",
     "punti": [
      "Sezionamento del circuito sbagliato per schemi non aggiornati o etichette errate",
      "Alimentazioni di ritorno: gruppi elettrogeni, gruppi di continuità, impianti fotovoltaici, condensatori, doppie alimentazioni",
      "Verifica dell’assenza di tensione omessa o eseguita con strumento non idoneo o non verificato",
      "Richiusura da parte di un altro operatore per mancanza di blocchi e cartelli",
      "Messa a terra omessa sugli impianti dove la norma la richiede"
     ],
     "appro": "La verifica dell’assenza di tensione si esegue con rivelatori conformi alle norme (ad esempio CEI EN 61243-3 per la bassa tensione), controllandone il funzionamento su una sorgente nota prima e dopo l’uso. Un multimetro impostato sulla scala errata o con puntali danneggiati è una causa frequente di errore.",
     "rif": "CEI 11-27:2025 · CEI EN 61243-3",
     "nar": "Gli incidenti nei lavori fuori tensione nascono da operazioni sbagliate: circuito errato, alimentazioni di ritorno da gruppi elettrogeni, gruppi di continuità e fotovoltaico, verifica dell’assenza di tensione omessa o con strumento non idoneo, richiusura da parte di altri. Il rivelatore va verificato prima e dopo su una sorgente nota.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lavori in prossimità",
     "foto": false,
     "lead": "Il lavoro in prossimità si svolge nella zona prossima senza entrare nella zona di lavoro sotto tensione.",
     "punti": [
      "Si eseguono da PES o PAV, oppure da PEC sotto la sorveglianza di PES o PAV secondo quanto previsto dalla norma",
      "Protezioni: barriere, schermi, involucri, ripari isolanti, oppure mantenimento delle distanze con delimitazioni e sorveglianza",
      "Pianificazione dei movimenti e degli attrezzi per non invadere la zona DL",
      "Valutazione del rischio da arco elettrico e DPI adeguati",
      "Manovre di apparecchiature senza protezione contro l’arco: solo PES o PAV, con presenti solo le persone necessarie"
     ],
     "appro": "La sorveglianza ha lo scopo di prevenire comportamenti che potrebbero portare a un contatto con le parti attive: il sorvegliante non deve svolgere altre attività che lo distraggano.",
     "rif": "CEI 11-27:2025 · art. 83 D.lgs. 81/2008",
     "nar": "Il lavoro in prossimità si svolge nella zona prossima senza entrare nella zona di lavoro sotto tensione. Lo eseguono persone esperte o avvertite, o persone comuni sotto sorveglianza. Si usano barriere e ripari, si pianificano movimenti e attrezzi e si valuta il rischio da arco.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lavori sotto tensione in bassa tensione",
     "foto": false,
     "lead": "Il lavoro sotto tensione è un’eccezione regolata, ammessa solo alle condizioni dell’art. 82 e con personale idoneo.",
     "punti": [
      "Giustificazione: il lavoro sotto tensione si sceglie solo quando quello fuori tensione non è praticabile o comporta rischi maggiori",
      "Personale: PES o PAV con idoneità ai lavori sotto tensione attribuita per iscritto dal datore di lavoro",
      "Metodo a contatto in BT: guanti isolanti, elmetto dielettrico con visiera, indumenti adeguati, doppio isolamento dalle parti in tensione",
      "Attrezzi isolati e isolanti conformi alle norme (ad esempio CEI EN 60900), tappeti e coperture isolanti",
      "Area delimitata, condizioni ambientali idonee, nessuna persona non autorizzata nella zona"
     ],
     "appro": "Il doppio isolamento significa che tra l’operatore e le parti a potenziale diverso devono essere interposti due livelli di isolamento indipendenti (ad esempio guanti isolanti e attrezzo isolato, oppure guanti e copertura isolante). Le condizioni ambientali avverse (pioggia, scarsa visibilità) possono imporre la sospensione.",
     "rif": "Art. 82 D.lgs. 81/2008 · CEI 11-27:2025 · CEI EN 60900",
     "nar": "Il lavoro sotto tensione è un’eccezione: si sceglie solo quando quello fuori tensione non è praticabile. Serve personale con idoneità scritta. In bassa tensione, con il metodo a contatto, si usano guanti isolanti, elmetto dielettrico con visiera, indumenti adeguati e un doppio isolamento dalle parti in tensione, con attrezzi isolati conformi e area delimitata.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "DPI e attrezzature isolanti: scelta e verifiche",
     "foto": false,
     "lead": "DPI e attrezzature isolanti sono efficaci solo se adatti alla tensione, integri e verificati.",
     "punti": [
      "Guanti isolanti (CEI EN 60903): classe adeguata alla tensione; prova di gonfiaggio prima dell’uso; sovraguanti di protezione meccanica",
      "Elmetto dielettrico e visiera contro l’arco; indumenti con protezione dall’arco adeguata alla valutazione",
      "Attrezzi isolati e isolanti con marcatura del doppio triangolo e della tensione (CEI EN 60900)",
      "Rivelatori di tensione conformi e verificati; dispositivi di messa a terra e in cortocircuito",
      "Conservazione al riparo da raggi solari, calore, oli; verifiche periodiche documentate"
     ],
     "appro": "I guanti isolanti si controllano visivamente e con prova di gonfiaggio prima di ogni uso; sono soggetti a prove dielettriche periodiche secondo la norma di prodotto e le istruzioni del fabbricante. Un guanto con un piccolo foro perde la sua funzione protettiva.",
     "rif": "CEI EN 60903 · CEI EN 60900 · artt. 74-79 D.lgs. 81/2008",
     "nar": "Dispositivi e attrezzature isolanti funzionano solo se adatti alla tensione, integri e verificati. I guanti isolanti hanno classi per tensione e si provano gonfiandoli prima di ogni uso. Gli attrezzi isolati riportano il doppio triangolo e la tensione. Si conservano al riparo da sole, calore e oli e si verificano periodicamente.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · L’impianto fotovoltaico",
     "scena": "Bisogna sostituire un dispositivo di protezione nel quadro lato corrente continua di un impianto fotovoltaico sul tetto di un capannone. È giorno pieno. Il manutentore apre il sezionatore lato corrente alternata dell’inverter e inizia a lavorare.",
     "domanda": "Che cosa non è stato considerato?",
     "opz": [
      [
       "Nulla: l’impianto è sezionato",
       false,
       "No: i moduli producono tensione in corrente continua finché sono illuminati."
      ],
      [
       "Le stringhe restano in tensione lato corrente continua con il sole: occorre sezionare e bloccare anche il lato c.c., verificare l’assenza di tensione su tutti i poli e valutare le parti che restano attive; se non è possibile, applicare le regole del lavoro in prossimità o sotto tensione",
       true,
       "Corretto: le alimentazioni di ritorno e le sorgenti multiple sono un pericolo tipico."
      ],
      [
       "Basta lavorare con i guanti da lavoro",
       false,
       "No: i guanti da lavoro non sono isolanti."
      ]
     ],
     "rif": "CEI 11-27:2025 · CEI 64-8",
     "appro": "Negli impianti fotovoltaici e con sistemi di accumulo la presenza di più sorgenti va indicata negli schemi e sui quadri.",
     "nar": "Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M4",
   "titolo": "Parte pratica (livelli 1B e 2B)",
   "min": 240,
   "foto": "sicurezza2",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 4",
     "sott": "Esercitazioni pratiche",
     "nar": "Quarto modulo: le esercitazioni pratiche.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Esercitazione 1 · Messa fuori tensione e in sicurezza",
     "foto": false,
     "lead": "Obiettivo: eseguire le cinque operazioni su un quadro didattico.",
     "punti": [
      "Lettura dello schema e individuazione di tutte le sorgenti di alimentazione",
      "Sezionamento, blocco con lucchetto personale e cartello",
      "Verifica dell’assenza di tensione con rivelatore verificato prima e dopo su sorgente nota",
      "Applicazione di dispositivi di messa a terra e in cortocircuito ove previsto",
      "Restituzione dell’impianto con rimozione dei blocchi nella sequenza corretta"
     ],
     "appro": "Ogni partecipante esegue la sequenza completa; l’istruttore introduce errori nello schema o una seconda alimentazione per verificare la capacità di riconoscerli.",
     "rif": "CEI 11-27:2025 · CEI EN 50110-1:2024",
     "nar": "Prima esercitazione: la messa fuori tensione su un quadro didattico, con lettura dello schema, sezionamento e blocco, verifica dell’assenza di tensione, messa a terra e restituzione dell’impianto.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "Esercitazione 2 · Documentazione di lavoro",
     "foto": false,
     "lead": "Obiettivo: compilare la documentazione di un intervento.",
     "punti": [
      "Piano di lavoro per un intervento di manutenzione su un quadro di distribuzione",
      "Documento di consegna dell’impianto tra RI e RLE e successiva restituzione",
      "Valutazione semplificata del rischio da arco per l’intervento",
      "Scelta dei DPI e delle attrezzature",
      "Discussione delle soluzioni dei gruppi"
     ],
     "appro": "La compilazione si svolge in gruppi su casi reali o realistici proposti dall’istruttore; le soluzioni sono confrontate e discusse.",
     "rif": "CEI 11-27:2025",
     "nar": "Seconda esercitazione: la documentazione. In gruppo si compilano il piano di lavoro, la consegna e la restituzione dell’impianto, la valutazione semplificata del rischio da arco e la scelta dei dispositivi.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "Esercitazione 3 · DPI e attrezzi isolanti, lavoro sotto tensione in BT",
     "foto": false,
     "lead": "Obiettivo: verificare e usare DPI e attrezzature isolanti in una simulazione di lavoro sotto tensione in bassa tensione.",
     "punti": [
      "Prova di gonfiaggio dei guanti isolanti e controllo visivo di elmetto, visiera e indumenti",
      "Controllo di attrezzi isolati e coperture isolanti",
      "Simulazione di un intervento a contatto in BT su banco didattico con doppio isolamento",
      "Delimitazione dell’area e comunicazioni con l’assistente",
      "Prova di verifica finale con griglia di osservazione"
     ],
     "appro": "La simulazione si svolge su attrezzature didattiche in condizioni di sicurezza. L’idoneità ai lavori sotto tensione resta subordinata alla valutazione del datore di lavoro dopo la formazione e l’esperienza sul campo.",
     "rif": "Art. 82 D.lgs. 81/2008 · CEI 11-27:2025 · CEI EN 60903 · CEI EN 60900",
     "nar": "Terza esercitazione: dispositivi e attrezzi isolanti e simulazione di un lavoro sotto tensione in bassa tensione su banco didattico, con doppio isolamento, area delimitata e prova finale.",
     "p": 2
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "Prima scelta: lavoro fuori tensione con le cinque operazioni",
      "Figure CEI 11-27:2025: GI, RI, GL, RLE, LAV",
      "PES, PAV, PEC e idoneità attribuite per iscritto",
      "Distanze: DL, DV, DWL, DWV; Allegato IX per i lavori non elettrici",
      "Sotto tensione in BT: idoneità, doppio isolamento, DPI verificati",
      "Aggiornamento almeno ogni 5 anni"
     ],
     "nar": "Concludiamo. La prima scelta è sempre il lavoro fuori tensione. Conosci le figure, le qualifiche e le distanze, usa dispositivi verificati, documenta il lavoro e aggiorna la formazione almeno ogni cinque anni.",
     "p": 1
    }
   ]
  }
 ],
 "testFinale": {
  "domande": 30,
  "soglia": 70,
  "tentativi": 2,
  "banca": [
   [
    "La sesta edizione della CEI 11-27 è del:",
    [
     "2014",
     "2021",
     "2025",
     "2008"
    ],
    2,
    "CEI 11-27:2025."
   ],
   [
    "La CEI 11-27:2025 è allineata alla:",
    [
     "CEI EN 50110-1:2024",
     "CEI 64-8 soltanto",
     "UNI EN ISO 45001",
     "CEI EN 62305"
    ],
    0,
    "Norme."
   ],
   [
    "Il D.lgs. 81/2008 disciplina il rischio elettrico negli articoli:",
    [
     "80-87",
     "28-30",
     "105-117",
     "180-198"
    ],
    0,
    "Titolo III, Capo III."
   ],
   [
    "Sopra 1000 V i lavori sotto tensione sono eseguiti da:",
    [
     "Chiunque",
     "Aziende autorizzate secondo il D.M. 4 febbraio 2011",
     "Solo PEC",
     "Solo l’RSPP"
    ],
    1,
    "Art. 82."
   ],
   [
    "La categoria 0 arriva in c.a. fino a:",
    [
     "12 V",
     "50 V",
     "230 V",
     "1000 V"
    ],
    1,
    "Categorie."
   ],
   [
    "Il contatto indiretto avviene con:",
    [
     "Un conduttore in tensione",
     "Una massa andata in tensione per un guasto",
     "Una linea aerea",
     "Un fulmine"
    ],
    1,
    "Contatti."
   ],
   [
    "Il differenziale ad alta sensibilità ha corrente nominale di:",
    [
     "30 mA",
     "300 mA",
     "1 A",
     "10 A"
    ],
    0,
    "Protezione addizionale."
   ],
   [
    "L’arco elettrico provoca:",
    [
     "Solo rumore",
     "Ustioni gravi, lesioni agli occhi, onda di pressione",
     "Nessun effetto",
     "Solo scosse"
    ],
    1,
    "Arco."
   ],
   [
    "La PES è la persona:",
    [
     "Comune",
     "Esperta",
     "Avvertita",
     "Esterna"
    ],
    1,
    "Definizioni."
   ],
   [
    "Una persona può essere PES per un lavoro e PAV per un altro?",
    [
     "Sì",
     "No",
     "Solo nei cantieri",
     "Solo in AT"
    ],
    0,
    "Attribuzione per tipi di lavoro."
   ],
   [
    "L’idoneità ai lavori sotto tensione:",
    [
     "Coincide con la qualifica PES",
     "È un riconoscimento distinto attribuito per iscritto",
     "Non esiste",
     "È rilasciata dall’INAIL"
    ],
    1,
    "Idoneità."
   ],
   [
    "L’aggiornamento della formazione è almeno:",
    [
     "Annuale",
     "Quinquennale",
     "Decennale",
     "Non previsto"
    ],
    1,
    "CEI 11-27:2025."
   ],
   [
    "Il responsabile dell’impianto (RI) deve essere:",
    [
     "PEC",
     "PAV",
     "PES",
     "Esterno"
    ],
    2,
    "Figure."
   ],
   [
    "Il GL è il:",
    [
     "Gestore programmazione lavoro",
     "Gruista di linea",
     "Gestore del laboratorio",
     "Garante legale"
    ],
    0,
    "Figure."
   ],
   [
    "Il RLE deve essere presente:",
    [
     "Solo all’inizio",
     "Per tutta la durata del lavoro",
     "Mai",
     "Solo alla fine"
    ],
    1,
    "Figure."
   ],
   [
    "La distanza dell’Allegato IX per linee oltre 132 kV è:",
    [
     "3 m",
     "5 m",
     "7 m",
     "10 m"
    ],
    2,
    "Tabella 1."
   ],
   [
    "La distanza dell’Allegato IX per linee tra 1 e 30 kV è:",
    [
     "3 m",
     "3,5 m",
     "5 m",
     "7 m"
    ],
    1,
    "Tabella 1."
   ],
   [
    "Nella formula delle distanze di lavoro, E è:",
    [
     "La tensione",
     "La distanza ergonomica",
     "L’energia dell’arco",
     "L’esperienza"
    ],
    1,
    "CEI 11-27:2025."
   ],
   [
    "La prima delle cinque operazioni per il lavoro fuori tensione è:",
    [
     "Mettere a terra",
     "Sezionare",
     "Verificare l’assenza di tensione",
     "Proteggere dalle parti adiacenti"
    ],
    1,
    "CEI EN 50110-1."
   ],
   [
    "Il rivelatore di tensione va verificato:",
    [
     "Mai",
     "Su sorgente nota prima e dopo l’uso",
     "Una volta l’anno soltanto",
     "Solo se nuovo"
    ],
    1,
    "Verifica dell’assenza di tensione."
   ],
   [
    "Un esempio di alimentazione di ritorno è:",
    [
     "Un gruppo di continuità",
     "Una lampada",
     "Un interruttore aperto",
     "Un cavo scollegato"
    ],
    0,
    "Errori tipici."
   ],
   [
    "I moduli fotovoltaici illuminati:",
    [
     "Non producono tensione se l’inverter è sezionato",
     "Producono tensione in c.c. sul lato stringhe",
     "Sono sempre sicuri",
     "Producono solo c.a."
    ],
    1,
    "Fotovoltaico."
   ],
   [
    "Nel lavoro sotto tensione in BT a contatto si richiede:",
    [
     "Doppio isolamento dalle parti in tensione",
     "Nessun DPI",
     "Guanti da lavoro",
     "Solo la visiera"
    ],
    0,
    "CEI 11-27:2025."
   ],
   [
    "I guanti isolanti si controllano prima dell’uso con:",
    [
     "Prova di gonfiaggio e controllo visivo",
     "Lavaggio",
     "Nessun controllo",
     "Misura del peso"
    ],
    0,
    "CEI EN 60903."
   ],
   [
    "Gli attrezzi isolati per lavori sotto tensione in BT sono conformi alla norma:",
    [
     "CEI EN 60900",
     "CEI EN 60903",
     "UNI EN 388",
     "UNI EN 361"
    ],
    0,
    "Attrezzi isolati."
   ],
   [
    "La valutazione del rischio da arco è trattata nella CEI 11-27:2025 in:",
    [
     "Un allegato informativo dedicato",
     "Nessuna parte",
     "Solo in AT",
     "Nella CEI 64-8"
    ],
    0,
    "Allegato sull’arco."
   ],
   [
    "Le verifiche periodiche degli impianti di messa a terra sono disciplinate dal:",
    [
     "D.P.R. 462/2001",
     "D.M. 388/2003",
     "D.M. 2 settembre 2021",
     "D.P.R. 177/2011"
    ],
    0,
    "Art. 86."
   ],
   [
    "Su un incendio di apparecchiature elettriche in tensione non si usa:",
    [
     "Anidride carbonica",
     "Acqua",
     "Polvere",
     "Nessun estinguente"
    ],
    1,
    "Emergenze."
   ],
   [
    "Le persone comuni che lavorano in prossimità di parti attive:",
    [
     "Possono lavorare liberamente",
     "Lavorano secondo le regole della norma, ad esempio sotto sorveglianza di PES o PAV",
     "Non possono mai lavorare",
     "Devono essere PES"
    ],
    1,
    "Lavori in prossimità."
   ],
   [
    "La conformità degli impianti alle norme CEI:",
    [
     "È irrilevante",
     "Costituisce presunzione di regola d’arte",
     "È vietata",
     "Riguarda solo l’AT"
    ],
    1,
    "Art. 81."
   ],
   [
    "La messa a terra e in cortocircuito si esegue:",
    [
     "Prima del sezionamento",
     "Dopo la verifica dell’assenza di tensione, dove prevista",
     "Mai",
     "Solo in BT"
    ],
    1,
    "Cinque operazioni."
   ],
   [
    "Il soccorritore di un infortunato in MT attende:",
    [
     "Nulla",
     "La conferma di messa fuori tensione e a terra dal responsabile dell’impianto",
     "L’arrivo dell’INAIL",
     "Che l’infortunato si rialzi"
    ],
    1,
    "Emergenze."
   ]
  ]
 }
};
