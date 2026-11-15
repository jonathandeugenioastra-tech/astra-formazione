/* Corso – Classificazione dei rifiuti e attribuzione dei codici EER (8 ore)
   Decisione 2014/955/UE · Reg. (UE) 1357/2014 · Reg. (UE) 2017/997 · Linee guida SNPA (D.D. 47/2021)
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "CLASS",
 "titolo": "Classificazione dei rifiuti e attribuzione dei codici EER",
 "sottotitolo": "Procedura, caratteristiche di pericolo ed esercitazioni sui rapporti di prova",
 "ore": 8,
 "rif": "Decisione 2014/955/UE · Reg. (UE) 1357/2014 · Reg. (UE) 2017/997 · Linee guida SNPA (D.D. 47/2021)",
 "soglia": 70,
 "aggiornato": "2026-11",
 "moduli": [
  {
   "id": "M0",
   "titolo": "Introduzione",
   "min": 5,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "copertina",
     "tit": "Classificazione dei rifiuti e codici EER",
     "sott": "Corso di 8 ore",
     "nar": "Benvenuti al corso sulla classificazione dei rifiuti: elenco europeo, voci a specchio, caratteristiche di pericolo e procedura delle linee guida SNPA, con esercitazioni su schede di sicurezza e rapporti di prova.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Applicare la procedura di attribuzione del codice EER",
      "Valutare le caratteristiche di pericolo HP1-HP15",
      "Usare SDS e rapporti di prova per la classificazione",
      "Documentare la classificazione in una relazione tecnica"
     ],
     "nar": "Al termine saprai attribuire il codice EER, valutare le caratteristiche di pericolo con le informazioni disponibili e documentare la classificazione.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Quadro normativo e procedura",
   "min": 235,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Quadro normativo e procedura",
     "nar": "Modulo 1: quadro normativo e procedura.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Rifiuti: definizioni e classificazione",
     "foto": false,
     "lead": "È rifiuto qualsiasi sostanza od oggetto di cui il detentore si disfi o abbia l’intenzione o abbia l’obbligo di disfarsi (art. 183).",
     "punti": [
      "Origine: rifiuti urbani e rifiuti speciali (art. 184); i rifiuti delle attività produttive sono di regola speciali",
      "Pericolosità: rifiuti pericolosi quando presentano una o più caratteristiche di pericolo HP1-HP15",
      "Elenco europeo dei rifiuti (EER): codici a sei cifre; voci assolute pericolose, voci non pericolose e voci «a specchio»",
      "Sottoprodotto (art. 184-bis): residuo che soddisfa tutte le condizioni previste e non è rifiuto",
      "Cessazione della qualifica di rifiuto (art. 184-ter): rifiuto sottoposto a recupero che soddisfa criteri specifici"
     ],
     "appro": "La qualificazione come sottoprodotto richiede condizioni cumulative: origine da un processo di produzione di cui non è scopo primario, certezza del riutilizzo, utilizzo diretto senza trattamenti diversi dalla normale pratica industriale, legalità dell’utilizzo. L’onere della prova grava su chi invoca la qualifica.",
     "rif": "D.lgs. 152/2006, artt. 183, 184, 184-bis, 184-ter · Decisione 2014/955/UE",
     "nar": "È rifiuto ciò di cui il detentore si disfa o ha l’obbligo di disfarsi. I rifiuti si distinguono per origine in urbani e speciali e per pericolosità. Si identificano con i codici a sei cifre dell’elenco europeo, che comprende voci pericolose, non pericolose e voci a specchio. Il sottoprodotto e la cessazione della qualifica di rifiuto richiedono condizioni precise.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "La struttura dell’elenco europeo dei rifiuti",
     "foto": false,
     "lead": "L’elenco europeo dei rifiuti (decisione 2014/955/UE) è organizzato in venti capitoli con codici a sei cifre.",
     "punti": [
      "Capitoli 01-12 e 17-20: rifiuti individuati in base all’attività o al processo che li genera",
      "Capitoli 13, 14 e 15: oli esauriti, solventi, imballaggi e altri rifiuti individuati per tipologia",
      "Capitolo 16: rifiuti non specificati altrimenti nell’elenco",
      "Codici «99»: «rifiuti non specificati altrimenti» di ciascun sottocapitolo, da usare solo come ultima scelta",
      "Asterisco: rifiuto pericoloso; voci a specchio: coppie di codici pericoloso / non pericoloso per lo stesso tipo di rifiuto"
     ],
     "appro": "La procedura dell’allegato alla decisione prevede di cercare prima il codice nei capitoli 01-12 e 17-20 in base all’attività, poi nei capitoli 13-15, poi nel capitolo 16 e solo infine nei codici 99 del capitolo corrispondente all’attività. Un impianto può produrre rifiuti di capitoli diversi.",
     "rif": "Decisione 2014/955/UE, Allegato",
     "nar": "L’elenco europeo dei rifiuti ha venti capitoli. Si cerca prima il codice in base all’attività nei capitoli da 01 a 12 e da 17 a 20, poi nei capitoli 13, 14 e 15, poi nel 16 e solo alla fine nei codici 99. L’asterisco indica i rifiuti pericolosi; le voci a specchio sono coppie pericoloso e non pericoloso.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Le linee guida SNPA sulla classificazione",
     "foto": false,
     "lead": "Le linee guida del Sistema nazionale per la protezione dell’ambiente, approvate con D.D. 47/2021, descrivono la procedura di classificazione.",
     "punti": [
      "Fase 1: identificazione del rifiuto e del processo; raccolta delle informazioni",
      "Fase 2: attribuzione del codice EER secondo la procedura della decisione",
      "Fase 3: per le voci a specchio, determinazione delle sostanze pericolose e valutazione delle caratteristiche HP",
      "Uso integrato di informazioni di processo, schede di dati di sicurezza, analisi chimiche e test",
      "Documentazione della classificazione e rivalutazione quando cambiano processo o materie prime"
     ],
     "appro": "Le linee guida chiariscono che non è richiesta la ricerca indiscriminata di tutte le sostanze possibili: le analisi vanno mirate sulla base della conoscenza del processo. In assenza di informazioni sufficienti si adotta un approccio cautelativo.",
     "rif": "Decreto direttoriale 9 agosto 2021, n. 47 · Linee guida SNPA",
     "nar": "Le linee guida SNPA descrivono la procedura: si identifica il rifiuto e il processo, si attribuisce il codice, e per le voci a specchio si individuano le sostanze pericolose e si valutano le caratteristiche HP, usando insieme informazioni di processo, schede di sicurezza e analisi mirate. La classificazione si documenta e si rivaluta quando cambia il processo.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Rifiuti pericolosi: caratteristiche HP e procedura di classificazione",
     "foto": false,
     "lead": "Un rifiuto è pericoloso se presenta una o più caratteristiche di pericolo HP1-HP15, definite dal regolamento (UE) 1357/2014 e, per l’ecotossicità HP14, dal regolamento (UE) 2017/997.",
     "punti": [
      "Voci assolute pericolose (con asterisco): il rifiuto è pericoloso senza ulteriori valutazioni",
      "Voci a specchio: occorre accertare se le sostanze pericolose presenti superano i valori soglia e i limiti di concentrazione",
      "Informazioni: processo che genera il rifiuto, schede di dati di sicurezza delle sostanze impiegate, analisi chimiche mirate",
      "Linee guida SNPA sulla classificazione dei rifiuti (approvate con D.D. 47/2021): procedura e criteri di valutazione",
      "Il produttore è responsabile della classificazione; il laboratorio fornisce dati analitici, la valutazione compete al produttore"
     ],
     "appro": "Le caratteristiche HP si valutano confrontando le concentrazioni delle sostanze con i limiti previsti, sommando dove richiesto le sostanze con la stessa indicazione di pericolo. Per HP14 si applicano i criteri del regolamento (UE) 2017/997. Il campionamento rappresentativo (UNI 10802) è premessa di un’analisi utile.",
     "rif": "Reg. (UE) 1357/2014 · Reg. (UE) 2017/997 · Decisione 2014/955/UE · D.D. 47/2021",
     "nar": "Un rifiuto è pericoloso se presenta una delle quindici caratteristiche di pericolo HP. Le voci con asterisco sono sempre pericolose; per le voci a specchio occorre verificare le sostanze presenti e le loro concentrazioni, usando informazioni di processo, schede di sicurezza e analisi. Le linee guida SNPA descrivono la procedura. La responsabilità della classificazione è del produttore.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Le soglie delle caratteristiche di pericolo per la salute",
     "foto": false,
     "lead": "Per diverse caratteristiche HP il regolamento (UE) 1357/2014 fissa limiti di concentrazione per singola sostanza o per sommatoria.",
     "punti": [
      "HP7 cancerogeno: una sostanza H350 ≥ 0,1% oppure H351 ≥ 1%",
      "HP10 tossico per la riproduzione: una sostanza H360 ≥ 0,3% oppure H361 ≥ 3%",
      "HP11 mutageno: una sostanza H340 ≥ 0,1% oppure H341 ≥ 1%",
      "HP13 sensibilizzante: una sostanza H317 o H334 ≥ 10%",
      "HP8 corrosivo: somma delle sostanze H314 ≥ 5%, con valori soglia di considerazione"
     ],
     "appro": "Per altre caratteristiche (HP4, HP5, HP6) si applicano limiti differenziati per categoria e valori soglia sotto i quali le sostanze non si considerano. Per HP14 si applica il metodo del regolamento (UE) 2017/997 con le sommatorie ponderate e i fattori M. La verifica si esegue sempre sul testo dei regolamenti.",
     "rif": "Reg. (UE) 1357/2014, Allegato · Reg. (UE) 2017/997",
     "nar": "Per alcune caratteristiche le soglie sono semplici: cancerogeno se una sostanza H350 supera lo 0,1 per cento o una H351 l’uno per cento; reprotossico con H360 allo 0,3 e H361 al tre; mutageno con H340 allo 0,1 e H341 all’uno; sensibilizzante con H317 o H334 al dieci; corrosivo con somma delle H314 al cinque per cento. Per le altre si seguono le regole del regolamento.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il codice del fango",
     "scena": "Un’azienda di trattamenti galvanici produce un fango dalla depurazione delle acque di processo. Il responsabile propone il codice 19 08 14 perché «è un fango di depurazione».",
     "domanda": "La scelta è corretta?",
     "opz": [
      [
       "Sì: tutti i fanghi di depurazione vanno nel capitolo 19",
       false,
       "No: si cerca prima nel capitolo dell’attività che genera il rifiuto."
      ],
      [
       "No: si cerca prima nel capitolo 11 (trattamento chimico superficiale dei metalli), dove sono previste voci a specchio per i fanghi da trattamento sul posto degli effluenti; poi si valutano le sostanze pericolose",
       true,
       "Corretto: priorità al capitolo dell’attività."
      ],
      [
       "Si usa un codice 99 per prudenza",
       false,
       "No: i codici 99 sono l’ultima scelta."
      ]
     ],
     "rif": "Decisione 2014/955/UE · Linee guida SNPA",
     "appro": "Il capitolo 19 riguarda i rifiuti prodotti da impianti di gestione dei rifiuti e di trattamento delle acque reflue fuori sito; per i reflui trattati nel luogo di produzione si valuta prima il capitolo dell’attività.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 3,
     "domande": [
      [
       "L’elenco europeo dei rifiuti è stabilito dalla:",
       [
        "Decisione 2014/955/UE",
        "Direttiva 2014/34/UE",
        "Decisione 2000/532/CE soltanto",
        "L. 68/2015"
       ],
       0,
       "EER."
      ],
      [
       "I codici «99» si usano:",
       [
        "Come ultima scelta",
        "Sempre per prudenza",
        "Mai",
        "Solo per i pericolosi"
       ],
       0,
       "Procedura."
      ],
      [
       "HP7 è attribuita se una sostanza H350 supera:",
       [
        "0,1%",
        "1%",
        "10%",
        "25%"
       ],
       0,
       "Reg. (UE) 1357/2014."
      ],
      [
       "Le linee guida SNPA sono state approvate con:",
       [
        "D.D. 47/2021",
        "D.M. 59/2023",
        "D.P.R. 120/2017",
        "D.lgs. 135/2024"
       ],
       0,
       "SNPA."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 1.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Esercitazioni",
   "min": 240,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Esercitazioni",
     "nar": "Modulo 2: esercitazioni.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Dalla scheda di dati di sicurezza al codice EER",
     "foto": false,
     "lead": "Per i rifiuti costituiti da prodotti non utilizzati o loro residui, la scheda di dati di sicurezza è la fonte principale di informazioni.",
     "punti": [
      "Sezione 2 e 3: classificazione della miscela e sostanze pericolose con concentrazioni e indicazioni di pericolo",
      "Sezione 9: proprietà fisiche (punto di infiammabilità per HP3, pH per orientare HP4/HP8)",
      "Sezione 13: considerazioni sullo smaltimento, a volte con indicazione di codici EER suggeriti",
      "Verifica: il rifiuto può differire dal prodotto per contaminazioni, diluizioni, invecchiamento",
      "Le indicazioni di codice della SDS non sostituiscono la valutazione del produttore del rifiuto"
     ],
     "appro": "Per un prodotto scaduto non utilizzato la classificazione del rifiuto coincide in genere con le proprietà della miscela; per residui di processo, invece, occorre considerare le trasformazioni subite e, se necessario, eseguire analisi.",
     "rif": "Reg. (CE) 1907/2006, Allegato II · Linee guida SNPA",
     "nar": "Per prodotti non utilizzati la scheda di sicurezza è la fonte principale: sezioni due e tre per pericoli e composizione, sezione nove per le proprietà fisiche, sezione tredici per lo smaltimento. Ma il rifiuto può differire dal prodotto, e i codici suggeriti dalla scheda non sostituiscono la valutazione del produttore.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: dal rapporto di prova alla caratteristica HP7",
     "foto": false,
     "lead": "Un fango contiene nichel: vediamo come si passa dal dato analitico alla valutazione di HP7.",
     "punti": [
      "Dato analitico: nichel totale 1500 mg/kg sul secco",
      "Ipotesi sul composto: in assenza di informazioni specifiche si considera un composto pertinente al processo, ad esempio l’ossido di nichel (H350i, cancerogeno 1A)",
      "Fattore di conversione nichel → ossido di nichel: 74,69 / 58,69 ≈ 1,27; concentrazione come NiO ≈ 1905 mg/kg = 0,19%",
      "Confronto con la soglia HP7 per H350: 0,1% → superata",
      "Conclusione: il rifiuto è pericoloso per HP7; si attribuisce la voce a specchio pericolosa"
     ],
     "appro": "La scelta del composto deve essere giustificata dalla conoscenza del processo (ad esempio sali solubili o ossidi), seguendo le indicazioni delle linee guida; ipotesi diverse possono portare a conclusioni diverse. Il dato va riferito alla stessa base (secco o tal quale) usata per la valutazione.",
     "rif": "Reg. (UE) 1357/2014 · Linee guida SNPA",
     "nar": "Vediamo un esempio. Un fango contiene millecinquecento milligrammi per chilo di nichel. Ipotizzando, in base al processo, l’ossido di nichel, cancerogeno di categoria uno A, si moltiplica per il fattore uno virgola ventisette e si ottiene circa lo 0,19 per cento. La soglia per H350 è lo 0,1 per cento: il rifiuto è pericoloso per HP7.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esercitazione · Lettura critica di un rapporto di prova",
     "foto": false,
     "lead": "Obiettivo: valutare se un rapporto di prova è idoneo per la classificazione.",
     "punti": [
      "Identificazione del campione, data e modalità di campionamento (UNI 10802) e verbale",
      "Parametri ricercati coerenti con il processo e con le sostanze pericolose attese",
      "Metodi analitici, limiti di quantificazione adeguati rispetto alle soglie HP",
      "Base di espressione dei risultati (secco / tal quale) e incertezza di misura",
      "Valutazione e conclusioni separate dai dati analitici; firma e responsabilità"
     ],
     "appro": "Un limite di quantificazione superiore alla soglia di interesse non consente di escludere la caratteristica di pericolo. In gruppo i partecipanti analizzano rapporti di prova reali anonimizzati e individuano le carenze.",
     "rif": "UNI 10802:2023 · Linee guida SNPA",
     "nar": "Esercitazione: lettura critica di un rapporto di prova. Si controllano campionamento e verbale, coerenza dei parametri con il processo, metodi e limiti di quantificazione rispetto alle soglie, base di espressione e incertezza, e la distinzione tra dati e conclusioni.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "La relazione di classificazione",
     "foto": false,
     "lead": "La classificazione va documentata in modo da poter essere verificata da terzi.",
     "punti": [
      "Descrizione del processo e del punto di produzione del rifiuto",
      "Percorso di attribuzione del codice EER secondo la procedura",
      "Informazioni usate: SDS, analisi, conoscenze di processo; ipotesi e loro giustificazione",
      "Valutazione di ciascuna caratteristica HP pertinente, con calcoli",
      "Conclusione, validità e criteri di rivalutazione"
     ],
     "appro": "La relazione è utile anche verso l’impianto di destinazione, che deve verificare l’ammissibilità del rifiuto, e verso gli organi di controllo. Va rivista quando cambiano materie prime, processo o risultati analitici.",
     "rif": "Linee guida SNPA · D.lgs. 152/2006, art. 184",
     "nar": "La classificazione si documenta con una relazione: processo, percorso di attribuzione del codice, informazioni usate e ipotesi, valutazione di ciascuna caratteristica di pericolo con i calcoli e conclusione, con i criteri per rivederla.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La vernice scaduta",
     "scena": "Un magazzino ha 20 latte di vernice a solvente scadute, mai aperte. La SDS indica: liquido infiammabile categoria 3 (H226), xilene 25% (H226, H312, H332, H315), H373.",
     "domanda": "Come si classifica il rifiuto?",
     "opz": [
      [
       "Non pericoloso: è un prodotto integro",
       false,
       "No: le proprietà pericolose della miscela restano."
      ],
      [
       "Rifiuto pericoloso: si attribuisce la voce assoluta o a specchio pertinente delle vernici e pitture di scarto contenenti solventi organici e si valutano almeno HP3 (infiammabile) e le altre caratteristiche in base alla SDS",
       true,
       "Corretto: la SDS consente la classificazione."
      ],
      [
       "Si usa il codice 16 03 06",
       false,
       "No: prima si valutano i capitoli pertinenti e la natura del rifiuto."
      ]
     ],
     "rif": "Decisione 2014/955/UE · Reg. (UE) 1357/2014",
     "appro": "Per le pitture e vernici di scarto il capitolo 08 prevede voci specifiche; HP3 si attribuisce ai liquidi con punto di infiammabilità inferiore a 60 °C.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 3,
     "domande": [
      [
       "Per prodotti scaduti non utilizzati la fonte principale è:",
       [
        "La SDS",
        "Il MUD",
        "Il formulario",
        "Il DVR"
       ],
       0,
       "SDS."
      ],
      [
       "Il fattore di conversione nichel → ossido di nichel è circa:",
       [
        "1,27",
        "0,5",
        "2,5",
        "10"
       ],
       0,
       "Esempio."
      ],
      [
       "Un limite di quantificazione superiore alla soglia:",
       [
        "Non permette di escludere la caratteristica",
        "Dimostra che il rifiuto non è pericoloso",
        "È irrilevante",
        "È obbligatorio"
       ],
       0,
       "Rapporti di prova."
      ],
      [
       "HP3 si attribuisce ai liquidi con punto di infiammabilità inferiore a:",
       [
        "60 °C",
        "100 °C",
        "20 °C",
        "0 °C"
       ],
       0,
       "Reg. (UE) 1357/2014."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 2.",
     "p": 1.4
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "Procedura di attribuzione del codice EER",
      "Voci assolute e a specchio",
      "Caratteristiche HP e soglie",
      "SDS, analisi e conoscenza del processo",
      "Relazione di classificazione e rivalutazione"
     ],
     "nar": "Concludiamo. Applica la procedura della decisione europea, valuta le caratteristiche di pericolo con dati adeguati, giustifica le ipotesi e documenta tutto in una relazione verificabile.",
     "p": 1
    }
   ]
  }
 ],
 "testFinale": {
  "domande": 20,
  "soglia": 70,
  "tentativi": 2,
  "banca": [
   [
    "I capitoli dell’EER sono:",
    [
     "20",
     "10",
     "15",
     "99"
    ],
    0,
    "EER."
   ],
   [
    "Il capitolo 16 contiene:",
    [
     "Rifiuti non specificati altrimenti nell’elenco",
     "Rifiuti urbani",
     "Rifiuti da costruzione",
     "Oli esauriti"
    ],
    0,
    "EER."
   ],
   [
    "I rifiuti da costruzione e demolizione sono nel capitolo:",
    [
     "17",
     "15",
     "20",
     "13"
    ],
    0,
    "EER."
   ],
   [
    "Gli imballaggi di scarto sono nel capitolo:",
    [
     "15",
     "17",
     "19",
     "02"
    ],
    0,
    "EER."
   ],
   [
    "I rifiuti urbani sono nel capitolo:",
    [
     "20",
     "16",
     "01",
     "12"
    ],
    0,
    "EER."
   ],
   [
    "L’ordine di ricerca dei capitoli inizia da:",
    [
     "01-12 e 17-20 in base all’attività",
     "16",
     "99",
     "13-15"
    ],
    0,
    "Procedura."
   ],
   [
    "Le caratteristiche di pericolo sono definite dal:",
    [
     "Reg. (UE) 1357/2014",
     "Reg. (CE) 1907/2006",
     "D.lgs. 81/2008",
     "Reg. (UE) 2016/425"
    ],
    0,
    "HP."
   ],
   [
    "HP14 è valutata con il:",
    [
     "Reg. (UE) 2017/997",
     "Reg. (CE) 852/2004",
     "D.M. 59/2023",
     "Reg. (UE) 1169/2011"
    ],
    0,
    "HP14."
   ],
   [
    "HP10 è attribuita con una sostanza H360 almeno al:",
    [
     "0,3%",
     "3%",
     "10%",
     "0,01%"
    ],
    0,
    "Soglie."
   ],
   [
    "HP11 è attribuita con una sostanza H341 almeno al:",
    [
     "1%",
     "0,1%",
     "10%",
     "25%"
    ],
    0,
    "Soglie."
   ],
   [
    "HP13 è attribuita con una sostanza H317 almeno al:",
    [
     "10%",
     "1%",
     "0,1%",
     "50%"
    ],
    0,
    "Soglie."
   ],
   [
    "HP8 è attribuita con somma delle sostanze H314 almeno al:",
    [
     "5%",
     "1%",
     "20%",
     "0,5%"
    ],
    0,
    "Soglie."
   ],
   [
    "La responsabilità della classificazione è:",
    [
     "Del produttore del rifiuto",
     "Del laboratorio",
     "Dell’impianto",
     "Dell’ARPA"
    ],
    0,
    "Responsabilità."
   ],
   [
    "Le analisi per la classificazione devono essere:",
    [
     "Mirate in base alla conoscenza del processo",
     "Indiscriminate su tutte le sostanze esistenti",
     "Facoltative sempre",
     "Eseguite solo dall’ARPA"
    ],
    0,
    "SNPA."
   ],
   [
    "Il campionamento dei rifiuti segue la norma:",
    [
     "UNI 10802",
     "UNI EN 15259",
     "UNI EN 689",
     "UNI EN ISO 14001"
    ],
    0,
    "Campionamento."
   ],
   [
    "La relazione di classificazione va rivista:",
    [
     "Quando cambiano processo, materie prime o risultati",
     "Mai",
     "Ogni 20 anni",
     "Solo su richiesta"
    ],
    0,
    "Rivalutazione."
   ],
   [
    "I codici suggeriti nella sezione 13 della SDS:",
    [
     "Non sostituiscono la valutazione del produttore",
     "Sono vincolanti",
     "Sono sempre corretti",
     "Sono vietati"
    ],
    0,
    "SDS."
   ],
   [
    "Una voce a specchio può essere:",
    [
     "Pericolosa o non pericolosa secondo le sostanze presenti",
     "Solo pericolosa",
     "Solo urbana",
     "Solo inerte"
    ],
    0,
    "Voci a specchio."
   ],
   [
    "Il risultato analitico va riferito:",
    [
     "Alla stessa base (secco o tal quale) della valutazione",
     "A una base qualsiasi",
     "Al peso dell’imballaggio",
     "Al volume del camion"
    ],
    0,
    "Base di espressione."
   ],
   [
    "Per i liquidi infiammabili la caratteristica è:",
    [
     "HP3",
     "HP7",
     "HP13",
     "HP14"
    ],
    0,
    "HP3."
   ]
  ]
 }
};
