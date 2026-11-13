/* Corso e-learning – Formazione generale dei lavoratori (4 ore)
   Accordo Stato-Regioni 17/04/2025 – art. 37 D.lgs. 81/2008
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l.
   Struttura: moduli → schermate. «p» = peso per il calcolo del tempo minimo di permanenza
   (i tempi di ciascun modulo sono fissati in «min» e la somma è pari a 240 minuti). */
window.CORSO = {
 "id": "LAV-GEN",
 "titolo": "Formazione generale dei lavoratori",
 "sottotitolo": "Concetti di rischio, organizzazione della prevenzione, diritti, doveri e sanzioni, organi di vigilanza",
 "ore": 4,
 "rif": "Art. 37 D.lgs. 81/2008 · Accordo Stato-Regioni 17 aprile 2025",
 "soglia": 70,
 "aggiornato": "2026-11",
 "moduli": [
  {
   "id": "M0",
   "titolo": "Introduzione al corso",
   "min": 5,
   "foto": "sicurezza2",
   "schermate": [
    {
     "t": "copertina",
     "tit": "Formazione generale dei lavoratori",
     "sott": "Corso e-learning · 4 ore · Accordo Stato-Regioni 17 aprile 2025",
     "nar": "Benvenuti al corso di formazione generale dei lavoratori. Nelle quattro ore del percorso sono trattati i contenuti previsti dall'articolo 37 del decreto legislativo 81 del 2008 e dall'Accordo Stato-Regioni del 17 aprile 2025. Il corso è erogato da ASTRA, centro di formazione AiFOS, e costituisce credito formativo permanente, valido in tutti i settori di attività.",
     "p": 1
    },
    {
     "t": "guida",
     "tit": "Articolazione e modalità di fruizione del corso",
     "voci": [
      [
       "FaClock",
       "Tempo minimo",
       "Ogni schermata ha un tempo minimo di permanenza. Il pulsante Avanti si attiva al termine del tempo e delle attività richieste."
      ],
      [
       "FaHandPointer",
       "Interazioni",
       "Alcuni contenuti si aprono con un clic: è necessario consultarli tutti per proseguire."
      ],
      [
       "FaVolumeHigh",
       "Narrazione",
       "Ogni schermata è commentata da una voce narrante; il testo è sempre disponibile nel riquadro Trascrizione."
      ],
      [
       "FaPenToSquare",
       "Esercitazioni",
       "Al termine di ogni modulo trovi esercitazioni e una verifica intermedia."
      ],
      [
       "FaUserCheck",
       "Presenza",
       "Durante la fruizione vengono richieste conferme di presenza: in assenza di risposta il conteggio del tempo è sospeso."
      ],
      [
       "FaAward",
       "Attestato",
       "Al superamento del test finale (70% di risposte corrette) l'attestato viene rilasciato con codice di verifica e QR."
      ]
     ],
     "nar": "Si illustrano preliminarmente le modalità di fruizione. Ciascuna schermata prevede un tempo minimo di permanenza: il pulsante Avanti si attiva al decorrere del tempo e al completamento delle attività richieste, quali la consultazione delle schede o la risposta alle esercitazioni. Il tempo è conteggiato soltanto mentre la finestra del corso è attiva. Periodicamente è richiesta la conferma della presenza; in assenza di risposta entro sessanta secondi, il conteggio è sospeso. Ogni modulo si conclude con esercitazioni e con una breve verifica; il percorso termina con il test finale, superato con almeno il settanta per cento di risposte corrette.",
     "p": 1.6
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Definire i concetti di pericolo, rischio, danno, prevenzione e protezione",
      "Descrivere l’organizzazione aziendale della prevenzione e i soggetti che vi concorrono",
      "Individuare diritti, doveri e responsabilità dei singoli soggetti e il relativo sistema sanzionatorio",
      "Identificare gli organi di vigilanza, controllo e assistenza e le rispettive modalità di intervento",
      "Riconoscere la segnaletica di sicurezza conforme alla norma UNI EN ISO 7010"
     ],
     "nar": "Si illustrano gli obiettivi formativi. Al termine del percorso il partecipante sarà in grado di distinguere il pericolo dal rischio e di individuare le misure generali di tutela; conoscerà l'attribuzione dei compiti nell'organizzazione aziendale della prevenzione, i diritti e i doveri dei lavoratori, il sistema sanzionatorio e gli organi preposti alla vigilanza. La formazione generale costituisce il primo segmento del percorso, che si completa con la formazione specifica sui rischi propri della mansione.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Concetti di rischio, danno, prevenzione e protezione",
   "min": 60,
   "foto": "sicurezza",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Concetti di rischio, danno, prevenzione e protezione",
     "nar": "Modulo uno. Il modulo definisce il lessico fondamentale della prevenzione: le nozioni di pericolo, rischio e danno, i criteri di stima del rischio, le misure di prevenzione e di protezione e l'ordine secondo cui esse si applicano.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "La salute e la sicurezza come valore giuridico e sociale",
     "lead": "La salute è uno stato di completo benessere fisico, mentale e sociale, non la semplice assenza di malattia o infermità.",
     "rif": "Art. 2, c. 1, lett. o) D.lgs. 81/2008",
     "punti": [
      "Il decreto adotta la definizione di salute dell'Organizzazione mondiale della sanità",
      "Tutela la persona nella sua interezza: corpo, mente, relazioni",
      "Riguarda tutti i lavoratori, indipendentemente dal contratto",
      "La sicurezza è un'attività organizzata, non un fatto episodico"
     ],
     "appro": "Il D.lgs. 9 aprile 2008, n. 81, detto Testo unico sulla salute e sicurezza sul lavoro, riunisce in un solo testo la disciplina della prevenzione. Si applica a tutti i settori di attività, privati e pubblici, e a tutte le tipologie di rischio (art. 3). Il principio guida è la prevenzione: anticipare il danno attraverso la valutazione dei rischi e la programmazione delle misure.",
     "nar": "Il decreto legislativo 81 del 2008 definisce la salute come uno stato di completo benessere fisico, mentale e sociale, non consistente soltanto in un'assenza di malattia o d'infermità. La definizione, mutuata dall'Organizzazione mondiale della sanità, ha portata ampia: la tutela della salute nei luoghi di lavoro investe pertanto anche l'organizzazione, i ritmi, le relazioni e lo stress. Il decreto si applica a tutti i settori di attività, pubblici e privati, e a tutti i lavoratori, indipendentemente dalla tipologia contrattuale.",
     "p": 1.2
    },
    {
     "t": "figure",
     "tit": "Il fenomeno in Italia: i dati INAIL 2025",
     "sott": "Relazione annuale INAIL 2025, presentata alla Camera dei deputati il 22 settembre 2026",
     "voci": [
      [
       "FaChartLine",
       "600 mila denunce di infortunio",
       "Più 1,2% sul 2024: 519 mila riguardano lavoratori e 81 mila studenti. In occasione di lavoro 414.917 casi; incidenza 1.720,4 ogni 100.000 occupati, meno 13,4% rispetto al 2019."
      ],
      [
       "FaSkullCrossbones",
       "1.198 casi mortali",
       "Meno 3,3% sul 2024. Tra i lavoratori, 890 decessi in occasione di lavoro e 299 in itinere."
      ],
      [
       "FaRoad",
       "Infortuni in itinere",
       "104.417 denunce (più 2,4%): il tragitto casa–lavoro è parte integrante del rischio professionale tutelato."
      ],
      [
       "FaGlobe",
       "Lavoratori nati all’estero",
       "24,3% degli infortuni in occasione di lavoro (19,4% nel 2021): la comprensione della lingua è essa stessa un fattore di sicurezza."
      ],
      [
       "FaBone",
       "98.312 malattie professionali",
       "Più 11,3% sul 2024, circa 63 mila lavoratori: tre denunce su quattro sono patologie del sistema muscolo-scheletrico."
      ],
      [
       "FaLungs",
       "Tumori, ipoacusie, apparato respiratorio",
       "Oltre 2.400 tumori professionali denunciati (due su tre di quelli riconosciuti sono correlati all’amianto), quasi 6 mila ipoacusie, quasi 2 mila malattie respiratorie."
      ]
     ],
     "appro": "L’incidenza (numero di infortuni ogni 100.000 occupati) è l’indicatore corretto per confrontare anni e settori, perché depura il dato dalle variazioni dell’occupazione: un aumento delle denunce in valore assoluto non significa necessariamente un peggioramento delle condizioni di lavoro. Per le malattie professionali l’INAIL attribuisce l’aumento anche a una maggiore emersione dei casi. La denuncia è distinta dal riconoscimento: al 30 aprile 2026 risultavano riconosciuti positivamente circa il 66% degli infortuni in occasione di lavoro denunciati nel 2025.",
     "rif": "INAIL, Relazione annuale 2025 (settembre 2026), pp. 5-12 e 66-75",
     "nar": "Prima di affrontare i concetti, è utile considerare il quadro statistico. Secondo la Relazione annuale INAIL 2025, nel 2025 sono state presentate circa seicentomila denunce di infortunio, con un incremento dell'1,2 per cento. I casi mortali sono stati 1.198, in calo del 3,3 per cento: 890 lavoratori hanno perso la vita in occasione di lavoro e 299 nel tragitto tra abitazione e luogo di lavoro. Quasi un infortunio su quattro riguarda lavoratori nati all'estero. Le denunce di malattia professionale hanno superato le 98 mila, per tre quarti a carico dell'apparato muscolo-scheletrico. A ciascun dato corrisponde una persona: la prevenzione costituisce perciò un obbligo giuridico e, al tempo stesso, morale.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lettura dei dati: denuncia, riconoscimento, incidenza",
     "foto": false,
     "lead": "Il dato statistico assume valenza prevenzionistica soltanto se interpretato con rigore metodologico, distinguendo denuncia, riconoscimento e indice di incidenza.",
     "punti": [
      "Denuncia: comunicazione all’INAIL dell’evento da parte del datore di lavoro (art. 53 D.P.R. 1124/1965), da non confondere con il riconoscimento dell’infortunio o della malattia",
      "Comunicazione a fini statistici e informativi degli infortuni con assenza di almeno un giorno, escluso quello dell’evento (art. 18, c. 1, lett. r, D.lgs. 81/2008)",
      "Incidenza: numero di casi ogni 100.000 occupati; consente di confrontare periodi e settori indipendentemente dal numero dei lavoratori",
      "In itinere: infortunio nel normale percorso di andata e ritorno tra abitazione e luogo di lavoro (art. 2, c. 3, D.P.R. 1124/1965)",
      "Mancati infortuni e incidenti senza danno sono la base della piramide: analizzarli consente di intervenire prima che si verifichi l’evento grave"
     ],
     "appro": "Esempio di lettura: se in un reparto di 200 addetti si verificano 4 infortuni in un anno, l’incidenza è 4/200 × 100.000 = 2.000 casi ogni 100.000 addetti, valore confrontabile con il dato nazionale (1.720,4 nel 2025 per gli infortuni in occasione di lavoro). Il confronto ha valore indicativo: i dati di settore e di dimensione aziendale sono più significativi del dato medio nazionale.",
     "rif": "D.P.R. 1124/1965, artt. 2 e 53 · D.lgs. 81/2008, art. 18, c. 1, lett. r)",
     "nar": "Il dato statistico assume valenza prevenzionistica soltanto se interpretato con rigore. La denuncia è la comunicazione dell'evento all'INAIL e non coincide con il riconoscimento. L'incidenza, ossia il numero di casi ogni centomila occupati, consente il confronto tra anni e settori differenti. L'infortunio in itinere è quello occorso nel normale percorso tra abitazione e luogo di lavoro. I mancati infortuni, infine, costituiscono la base della piramide: la loro analisi consente di intervenire prima che si verifichi l'evento grave.",
     "p": 1.3
    },
    {
     "t": "definizioni",
     "tit": "Le definizioni fondamentali",
     "sott": "Consultare ciascuna scheda per la definizione di legge",
     "voci": [
      [
       "r",
       "Pericolo",
       "Proprietà o qualità intrinseca di un determinato fattore avente il potenziale di causare danni."
      ],
      [
       "s",
       "Rischio",
       "Probabilità di raggiungimento del livello potenziale di danno nelle condizioni di impiego o di esposizione a un determinato fattore o agente, oppure alla loro combinazione."
      ],
      [
       "n",
       "Prevenzione",
       "Il complesso delle disposizioni o misure necessarie, anche secondo la particolarità del lavoro, l'esperienza e la tecnica, per evitare o diminuire i rischi professionali nel rispetto della salute della popolazione e dell'integrità dell'ambiente esterno."
      ],
      [
       "q",
       "Valutazione dei rischi",
       "Valutazione globale e documentata di tutti i rischi per la salute e sicurezza dei lavoratori presenti nell'organizzazione, finalizzata a individuare le misure di prevenzione e protezione e a elaborare il programma di miglioramento nel tempo."
      ]
     ],
     "nar": "Si esaminano le quattro definizioni fondamentali dell'articolo 2 del decreto. Il pericolo è la proprietà intrinseca di un determinato fattore avente il potenziale di causare danni: una lama è tagliente, un solvente è infiammabile, una tensione elettrica può folgorare. Il rischio è invece la probabilità che il danno potenziale si realizzi nelle concrete condizioni di impiego o di esposizione. La prevenzione è il complesso delle disposizioni e delle misure volte a evitare o a diminuire i rischi. La valutazione dei rischi, infine, è l'analisi globale e documentata di tutti i rischi presenti, dalla quale discendono le misure e il programma di miglioramento. Le singole schede riportano il testo integrale delle definizioni.",
     "p": 1.6
    },
    {
     "t": "confronto",
     "tit": "Pericolo e rischio: distinzione concettuale",
     "sx": {
      "ico": "FaTriangleExclamation",
      "tit": "Pericolo",
      "voci": [
       "È una proprietà intrinseca del fattore",
       "Sussiste indipendentemente dall’esposizione",
       "Si identifica",
       "Esempio: un acido corrosivo"
      ]
     },
     "dx": {
      "ico": "FaChartLine",
      "tit": "Rischio",
      "voci": [
       "Dipende dall’esposizione e dalle condizioni di impiego",
       "Può essere ridotto",
       "Si valuta e si gestisce",
       "Esempio: travasare l'acido senza guanti né occhiali"
      ]
     },
     "appro": "Due lavoratori che maneggiano la stessa sostanza pericolosa possono essere esposti a rischi molto diversi: chi lavora sotto cappa aspirante, con contenitori chiusi, guanti e occhiali, ha un rischio basso; chi travasa a mano in un locale non ventilato ha un rischio elevato. Il pericolo è lo stesso; cambia l'esposizione.",
     "nar": "Pericolo e rischio non sono sinonimi. Il pericolo è una qualità propria dell'agente: un acido è corrosivo tanto quando è custodito in un armadio quanto durante il travaso. Il rischio dipende invece dalle modalità di contatto con il pericolo: frequenza, durata e misure di protezione adottate. Ne consegue che il pericolo si identifica, mentre il rischio si valuta e si riduce. L'intero sistema della prevenzione opera sul rischio.",
     "p": 1.2
    },
    {
     "t": "testo",
     "tit": "Il danno: infortunio e malattia professionale",
     "lead": "Il danno è l’effetto lesivo che la concretizzazione del pericolo produce sull’integrità psicofisica della persona.",
     "punti": [
      "Infortunio sul lavoro: evento dovuto a causa violenta, avvenuto in occasione di lavoro, da cui deriva morte, inabilità permanente o temporanea superiore a tre giorni",
      "Malattia professionale: patologia contratta nell'esercizio e a causa delle lavorazioni, per esposizione prolungata a un agente",
      "Infortunio in itinere: avvenuto nel normale percorso tra abitazione e luogo di lavoro",
      "Tutela assicurativa obbligatoria: INAIL (D.P.R. 1124/1965)"
     ],
     "appro": "La causa violenta dell'infortunio è un fattore che agisce in modo rapido e concentrato nel tempo (un urto, una caduta, uno sforzo improvviso). La causa della malattia professionale agisce invece in modo lento e diluito: rumore, vibrazioni, polveri, agenti chimici e biologici, movimentazione ripetitiva dei carichi. L'elenco delle malattie per le quali è obbligatoria la denuncia è periodicamente aggiornato con decreto ministeriale.",
     "nar": "Il danno può manifestarsi in due forme. L'infortunio è un evento improvviso, determinato da causa violenta in occasione di lavoro, quale una caduta, un urto o un taglio. La malattia professionale si sviluppa invece gradualmente, per effetto dell'esposizione prolungata a un agente nocivo: il rumore che compromette l'udito, le polveri che colpiscono l'apparato respiratorio, i movimenti ripetitivi che sollecitano le articolazioni. È tutelato anche l'infortunio in itinere, occorso nel normale tragitto tra abitazione e luogo di lavoro. L'assicurazione obbligatoria contro gli infortuni e le malattie professionali è gestita dall'INAIL.",
     "p": 1.3
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Grafico interattivo · Livelli di esposizione al rumore",
     "rif": "D.lgs. 81/2008, artt. 189, 192, 193, 196",
     "lead": "Spostare il cursore sul livello di esposizione giornaliera: per ciascuna zona compaiono gli obblighi del datore di lavoro.",
     "grafico": {
      "tipo": "soglie",
      "variabile": "Livello di esposizione giornaliera LEX,8h",
      "unita": "dB(A)",
      "min": 70,
      "max": 95,
      "passo": 0.5,
      "iniziale": 78,
      "zone": [
       {
        "nome": "Sotto 80 dB(A)",
        "fino": 80,
        "colore": "#00B050",
        "testo": "Sotto il valore inferiore di azione: valutazione documentata e riduzione del rischio al minimo secondo il principio generale."
       },
       {
        "nome": "Azione inferiore",
        "fino": 85,
        "colore": "#C9A100",
        "testo": "Tra 80 e 85 dB(A): informazione e formazione, otoprotettori messi a disposizione, sorveglianza sanitaria su richiesta del lavoratore o se il medico ne conferma l’opportunità."
       },
       {
        "nome": "Azione superiore",
        "fino": 87,
        "colore": "#E07000",
        "testo": "Tra 85 e 87 dB(A): uso degli otoprotettori obbligatorio, programma di misure tecniche e organizzative, segnaletica e delimitazione delle aree, sorveglianza sanitaria."
       },
       {
        "nome": "Oltre 87 dB(A)",
        "fino": 95,
        "colore": "#C81F26",
        "testo": "87 dB(A) è il valore limite di esposizione, da non superare tenendo conto dell’attenuazione degli otoprotettori: in caso di superamento occorrono misure immediate."
       }
      ]
     },
     "nar": "Grafico interattivo. Si sposti il cursore lungo la scala del livello di esposizione giornaliera al rumore. Il decreto ottantuno fissa un valore inferiore di azione di ottanta decibel A, un valore superiore di azione di ottantacinque decibel A e un valore limite di ottantasette decibel A, quest’ultimo da verificare tenendo conto dell’attenuazione degli otoprotettori. Per ciascuna zona compaiono gli obblighi del datore di lavoro. Si esplorino tutte le zone.",
     "est": true,
     "ancora": "Il danno: infortunio e malattia professionale"
    },
    {
     "t": "matrice",
     "tit": "Stima del rischio: il modello R = P × D",
     "sott": "Selezionare almeno tre caselle della matrice per esaminare il livello di rischio e la priorità di intervento",
     "P": [
      "Improbabile",
      "Poco probabile",
      "Probabile",
      "Molto probabile"
     ],
     "D": [
      "Lieve",
      "Medio",
      "Grave",
      "Gravissimo"
     ],
     "nar": "Il metodo più diffuso per la stima del rischio è la matrice probabilità per danno. Alla probabilità che l'evento si verifichi e alla gravità del danno si attribuisce un valore da uno a quattro; il prodotto esprime il livello di rischio. Un valore basso consente interventi programmati nel tempo; un valore elevato impone interventi immediati. Si noti che un evento raro ma gravissimo e un evento frequente ma lieve possono presentare il medesimo livello di rischio, ed entrambi richiedono pertanto attenzione. La matrice si esamina selezionando almeno tre caselle.",
     "p": 1.6
    },
    {
     "t": "processo",
     "tit": "Le fasi della valutazione dei rischi",
     "passi": [
      [
       "Identificare i pericoli",
       "Luoghi, attrezzature, sostanze, organizzazione del lavoro, fattori ambientali"
      ],
      [
       "Individuare gli esposti",
       "Mansioni, gruppi omogenei, lavoratori particolarmente sensibili"
      ],
      [
       "Stimare i rischi",
       "Probabilità e gravità, misure già esistenti, esposizioni"
      ],
      [
       "Definire le misure",
       "Prevenzione, protezione collettiva e individuale, formazione"
      ],
      [
       "Programmare e verificare",
       "Responsabili, tempi, risorse, riesame periodico"
      ]
     ],
     "rif": "Artt. 28-29 D.lgs. 81/2008",
     "nar": "La valutazione dei rischi si articola secondo una sequenza logica: identificazione dei pericoli; individuazione dei lavoratori esposti, con particolare riguardo ai soggetti più sensibili, quali le lavoratrici in gravidanza, i giovani e i lavoratori con disabilità; stima del rischio; definizione delle misure di prevenzione e protezione; programmazione degli interventi, con indicazione di responsabili e tempi, e verifica della loro efficacia nel tempo. L'esito è formalizzato nel documento di valutazione dei rischi, il DVR.",
     "p": 1.3
    },
    {
     "t": "definizioni",
     "tit": "Prevenzione e protezione",
     "sott": "Due strategie complementari: consultare le schede",
     "voci": [
      [
       "P",
       "Prevenzione",
       "Agisce sulla probabilità: riduce la possibilità che l'evento dannoso si verifichi. Esempi: progettazione sicura, manutenzione, procedure, formazione."
      ],
      [
       "D",
       "Protezione",
       "Agisce sulla gravità: limita le conseguenze se l'evento si verifica. Esempi: ripari, parapetti, impianti di aspirazione, DPI."
      ],
      [
       "C",
       "Protezione collettiva",
       "Protegge contemporaneamente più persone e non dipende dal comportamento del singolo: parapetti, ripari fissi, ventilazione, insonorizzazione."
      ],
      [
       "I",
       "Protezione individuale",
       "Dispositivo indossato dal singolo lavoratore per proteggersi da uno o più rischi: guanti, occhiali, otoprotettori, imbracature (Titolo III, Capo II)."
      ]
     ],
     "nar": "Prevenzione e protezione sono strategie complementari. La prevenzione agisce sulla probabilità, rendendo meno probabile il verificarsi dell'evento: una macchina correttamente progettata, una manutenzione regolare, una procedura chiara, un lavoratore formato. La protezione agisce sulla gravità, limitando le conseguenze dell'evento qualora si verifichi. La protezione è collettiva quando tutela più persone senza dipendere dal comportamento del singolo; è individuale quando il lavoratore indossa un dispositivo di protezione. La protezione collettiva ha sempre la priorità.",
     "p": 1.3
    },
    {
     "t": "articolo",
     "tit": "Le misure generali di tutela",
     "art": "Art. 15 D.lgs. 81/2008",
     "sott": "Le principali misure, in sintesi",
     "commi": [
      [
       "a",
       "Valutazione di tutti i rischi per la salute e sicurezza"
      ],
      [
       "b",
       "Programmazione della prevenzione, integrando condizioni tecniche, produttive e organizzative"
      ],
      [
       "c",
       "Eliminazione dei rischi e, ove non possibile, loro riduzione al minimo in relazione al progresso tecnico"
      ],
      [
       "d",
       "Rispetto dei principi ergonomici nell'organizzazione del lavoro e nella scelta di attrezzature e metodi"
      ],
      [
       "e",
       "Riduzione dei rischi alla fonte"
      ],
      [
       "f",
       "Sostituzione di ciò che è pericoloso con ciò che non lo è, o lo è meno"
      ],
      [
       "g",
       "Limitazione al minimo del numero di lavoratori esposti al rischio"
      ],
      [
       "i",
       "Priorità delle misure di protezione collettiva rispetto a quelle individuali"
      ],
      [
       "l",
       "Controllo sanitario dei lavoratori in funzione dei rischi specifici"
      ],
      [
       "n",
       "Informazione e formazione adeguate per lavoratori, dirigenti, preposti e RLS"
      ],
      [
       "s",
       "Partecipazione e consultazione dei lavoratori e del loro rappresentante"
      ],
      [
       "t",
       "Programmazione delle misure per garantire il miglioramento nel tempo"
      ],
      [
       "u",
       "Misure di emergenza: primo soccorso, lotta antincendio, evacuazione, pericolo grave e immediato"
      ],
      [
       "z",
       "Regolare manutenzione di ambienti, attrezzature e impianti"
      ]
     ],
     "nota": "Comma 2: le misure relative alla sicurezza, all'igiene e alla salute durante il lavoro non devono in nessun caso comportare oneri finanziari per i lavoratori.",
     "nar": "L'articolo 15 enuncia le misure generali di tutela, che costituiscono i principi fondamentali della prevenzione. Il primo è la valutazione di tutti i rischi, con la conseguente programmazione della prevenzione. I rischi devono essere eliminati e, ove ciò non sia possibile, ridotti al minimo e alla fonte; ciò che è pericoloso deve essere sostituito con ciò che non lo è o lo è meno; il numero dei lavoratori esposti deve essere limitato al minimo; la protezione collettiva prevale su quella individuale. Completano il quadro il controllo sanitario, la formazione, la partecipazione dei lavoratori, le misure di emergenza e la manutenzione. Il comma 2 sancisce un principio essenziale: le misure di sicurezza non devono in alcun caso comportare oneri finanziari per i lavoratori.",
     "p": 2
    },
    {
     "t": "gerarchia",
     "tit": "La gerarchia delle misure",
     "voci": [
      "Eliminazione del pericolo",
      "Sostituzione",
      "Misure tecniche e protezione collettiva",
      "Misure organizzative e procedurali",
      "Dispositivi di protezione individuale"
     ],
     "nota": "Più si sale, più la misura è efficace e indipendente dal comportamento umano.",
     "appro": "Esempio: rischio di caduta dall'alto durante la pulizia dei lucernari. Eliminazione: pulizia dal basso con aste telescopiche. Sostituzione: lucernari autopulenti. Protezione collettiva: parapetti e reti anticaduta. Misura organizzativa: permesso di lavoro, lavoro in coppia, formazione. DPI: imbracatura con linea vita, solo se le misure precedenti non bastano.",
     "nar": "Le misure si applicano secondo un ordine prestabilito, denominato gerarchia. Al vertice si colloca l'eliminazione del pericolo: in assenza di pericolo non sussiste rischio. Seguono la sostituzione, ad esempio di una vernice a solvente con una vernice all'acqua; le misure tecniche e di protezione collettiva, quali i parapetti o l'aspirazione localizzata; le misure organizzative, ossia procedure, turni, permessi di lavoro e formazione. Alla base si collocano i dispositivi di protezione individuale, che rappresentano l'ultima barriera, poiché la loro efficacia dipende dalla corretta scelta, dall'uso e dalla manutenzione.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "I dispositivi di protezione individuale",
     "lead": "Qualsiasi attrezzatura destinata a essere indossata e tenuta dal lavoratore allo scopo di proteggerlo contro uno o più rischi.",
     "rif": "Artt. 74-79 D.lgs. 81/2008 · Regolamento (UE) 2016/425",
     "punti": [
      "Si usano quando i rischi non possono essere evitati o sufficientemente ridotti con misure tecniche, collettive od organizzative (art. 75)",
      "Devono essere marcati CE, adeguati al rischio e alle condizioni del luogo, ergonomici e adattabili all'utilizzatore",
      "Il datore di lavoro li fornisce gratuitamente, ne cura manutenzione e sostituzione e assicura formazione e, se necessario, addestramento",
      "Tre categorie: I rischi minimi, II rischi intermedi, III rischi che possono causare morte o danni irreversibili (con addestramento obbligatorio)",
      "Il lavoratore li utilizza correttamente, ne ha cura e segnala ogni difetto (art. 78)"
     ],
     "nar": "I dispositivi di protezione individuale, o DPI, sono le attrezzature destinate a essere indossate dal lavoratore allo scopo di proteggerlo contro uno o più rischi: elmetti, guanti, occhiali, otoprotettori, calzature, imbracature, facciali filtranti. Si impiegano quando i rischi non possono essere evitati o sufficientemente ridotti con altre misure. Devono recare la marcatura CE ed essere adeguati al rischio. Il datore di lavoro li fornisce gratuitamente e assicura la formazione e, per i DPI di terza categoria e per quelli dell'udito, l'addestramento. Il lavoratore è tenuto a utilizzarli correttamente, ad averne cura e a segnalarne senza indugio ogni difetto.",
     "p": 1.4
    },
    {
     "t": "iceberg",
     "tit": "Infortuni, incidenti e mancati infortuni",
     "livelli": [
      "Infortuni gravi e mortali",
      "Infortuni con lesioni lievi",
      "Incidenti con soli danni materiali",
      "Mancati infortuni e comportamenti non sicuri"
     ],
     "testo": "Ogni infortunio grave è preceduto da numerosi eventi senza conseguenze. Segnalarli consente di rimuovere le cause prima che si verifichi il danno.",
     "nar": "Gli studi sugli infortuni descrivono una piramide, o iceberg. Al vertice, visibili, si collocano gli infortuni gravi; al di sotto, un numero maggiore di infortuni lievi; ancora più in basso, numerosissimi incidenti con soli danni materiali; alla base, una grande quantità di mancati infortuni e di comportamenti non sicuri. Il mancato infortunio, in inglese near miss, è un evento che avrebbe potuto causare un danno senza tuttavia produrlo. Ogni near miss costituisce un'informazione preziosa: la sua segnalazione al preposto consente di rimuoverne le cause prima che si verifichi l'infortunio.",
     "p": 1.2
    },
    {
     "t": "testo",
     "tit": "Fattori di rischio: le tre grandi famiglie",
     "lead": "La valutazione ha carattere globale e documentato: comprende i rischi per la sicurezza, i rischi per la salute e i rischi trasversali di natura organizzativa.",
     "punti": [
      "Rischi per la sicurezza (infortunistici): strutture, macchine e attrezzature, impianti elettrici, incendio ed esplosione, cadute dall'alto, investimenti",
      "Rischi per la salute (igienico-ambientali): agenti chimici, cancerogeni, biologici, rumore, vibrazioni, microclima, radiazioni, campi elettromagnetici",
      "Rischi trasversali e organizzativi: organizzazione del lavoro, stress lavoro-correlato, lavoro notturno e a turni, ergonomia, videoterminali, movimentazione dei carichi",
      "Fattori personali: genere, età, provenienza da altri Paesi, tipologia contrattuale, gravidanza (art. 28, c. 1)"
     ],
     "nar": "I rischi si classificano in tre grandi famiglie. I rischi per la sicurezza, o infortunistici, possono determinare un infortunio: macchine, impianti elettrici, incendio, cadute. I rischi per la salute, o igienico-ambientali, derivano dall'esposizione ad agenti chimici, fisici e biologici e possono determinare malattie professionali. I rischi trasversali attengono all'organizzazione del lavoro: stress, turni, ritmi, ergonomia. L'articolo 28 impone inoltre di considerare i fattori individuali, quali il genere, l'età, la provenienza da altri Paesi, la tipologia contrattuale e lo stato di gravidanza.",
     "p": 1.3
    },
    {
     "t": "pittogrammi",
     "tit": "La segnaletica di sicurezza",
     "sott": "Pittogrammi ufficiali UNI EN ISO 7010 · Titolo V e Allegati XXIV-XXXII D.lgs. 81/2008 · Consultare ogni famiglia di segnali",
     "gruppi": [
      {
       "nome": "Avvertimento",
       "forma": "Triangolo, bordo nero, fondo giallo",
       "desc": "Avverte di un pericolo",
       "codici": [
        [
         "W001",
         "Pericolo generico"
        ],
        [
         "W012",
         "Pericolo elettricità"
        ],
        [
         "W021",
         "Materiale infiammabile"
        ],
        [
         "W016",
         "Sostanza tossica"
        ],
        [
         "W009",
         "Rischio biologico"
        ],
        [
         "W011",
         "Superficie scivolosa"
        ]
       ]
      },
      {
       "nome": "Divieto",
       "forma": "Cerchio, bordo e barra rossi, fondo bianco",
       "desc": "Vieta un comportamento che potrebbe causare pericolo",
       "codici": [
        [
         "P001",
         "Divieto generico"
        ],
        [
         "P002",
         "Vietato fumare"
        ],
        [
         "P003",
         "Vietato usare fiamme libere"
        ],
        [
         "P004",
         "Vietato il passaggio"
        ]
       ]
      },
      {
       "nome": "Prescrizione",
       "forma": "Cerchio, fondo azzurro, simbolo bianco",
       "desc": "Obbliga a un comportamento, ad esempio l'uso dei DPI",
       "codici": [
        [
         "M001",
         "Obbligo generico"
        ],
        [
         "M002",
         "Consultare le istruzioni"
        ],
        [
         "M003",
         "Protezione dell'udito"
        ],
        [
         "M004",
         "Protezione degli occhi"
        ],
        [
         "M008",
         "Calzature di sicurezza"
        ],
        [
         "M009",
         "Guanti di protezione"
        ],
        [
         "M010",
         "Indumenti protettivi"
        ],
        [
         "M014",
         "Casco di protezione"
        ],
        [
         "M016",
         "Maschera"
        ]
       ]
      },
      {
       "nome": "Salvataggio",
       "forma": "Quadrato o rettangolo, fondo verde",
       "desc": "Indica uscite, percorsi d'esodo e presidi di soccorso",
       "codici": [
        [
         "E001",
         "Uscita di emergenza (sinistra)"
        ],
        [
         "E002",
         "Uscita di emergenza (destra)"
        ],
        [
         "E003",
         "Pronto soccorso"
        ],
        [
         "E004",
         "Telefono di emergenza"
        ],
        [
         "E011",
         "Lavaocchi di emergenza"
        ]
       ]
      },
      {
       "nome": "Antincendio",
       "forma": "Quadrato o rettangolo, fondo rosso",
       "desc": "Indica ubicazione delle attrezzature antincendio",
       "codici": [
        [
         "F001",
         "Estintore"
        ],
        [
         "F002",
         "Idrante"
        ],
        [
         "F003",
         "Scala antincendio"
        ],
        [
         "F005",
         "Pulsante di allarme incendio"
        ]
       ]
      }
     ],
     "nar": "La segnaletica di sicurezza trasmette un messaggio mediante forme e colori standardizzati, comprensibili anche senza ricorrere alla lettura. I pittogrammi riprodotti sono quelli ufficiali della norma UNI EN ISO 7010. I segnali di avvertimento, triangolari, gialli con bordo nero, indicano un pericolo. I segnali di divieto sono rotondi, con bordo e barra rossi. I segnali di prescrizione, rotondi e azzurri, impongono un comportamento, come l'uso di un DPI. I segnali di salvataggio, verdi, indicano uscite, percorsi di esodo e presidi di primo soccorso. I segnali antincendio, rossi e quadrati, indicano estintori, idranti e pulsanti di allarme. Ciascuna famiglia di segnali può essere consultata singolarmente.",
     "p": 2
    },
    {
     "t": "vf",
     "tit": "Esercitazione 1 · Affermazioni vere o false",
     "sott": "Qualificare ciascuna affermazione come vera o falsa",
     "voci": [
      [
       "Pericolo e rischio sono sinonimi.",
       false,
       "Falso: il pericolo è una proprietà intrinseca del fattore, il rischio è la probabilità che il danno si realizzi nelle condizioni di esposizione."
      ],
      [
       "I DPI hanno la priorità sulle protezioni collettive.",
       false,
       "Falso: l'art. 15 stabilisce la priorità delle misure di protezione collettiva rispetto a quelle individuali."
      ],
      [
       "Le misure di sicurezza non devono comportare oneri finanziari per i lavoratori.",
       true,
       "Vero: lo stabilisce l'art. 15, comma 2."
      ],
      [
       "Un mancato infortunio non va segnalato, perché non ha causato danni.",
       false,
       "Falso: i mancati infortuni vanno segnalati per rimuovere le cause prima che accada un infortunio."
      ],
      [
       "La malattia professionale deriva da un'esposizione prolungata a un agente nocivo.",
       true,
       "Vero: a differenza dell'infortunio, la causa agisce in modo lento e diluito nel tempo."
      ]
     ],
     "nar": "Prima esercitazione. Ciascuna affermazione va qualificata come vera o falsa; a ogni risposta segue una spiegazione. Per proseguire è necessario rispondere a tutte le affermazioni.",
     "p": 1.5
    },
    {
     "t": "ordina",
     "tit": "Esercitazione 2 · Ordinamento delle misure di tutela",
     "sott": "Disporre le misure in ordine di efficacia decrescente mediante le frecce",
     "voci": [
      "Eliminazione del pericolo",
      "Sostituzione con ciò che è meno pericoloso",
      "Protezione collettiva",
      "Misure organizzative e procedurali",
      "Dispositivi di protezione individuale"
     ],
     "nar": "Seconda esercitazione. Le misure di tutela sono presentate in ordine casuale: occorre disporle dalla più efficace alla meno efficace mediante le frecce e quindi premere Verifica.",
     "p": 1.3
    },
    {
     "t": "caso",
     "tit": "Esercitazione 3 · Caso di studio",
     "scena": "In un'officina, durante la sbavatura dei pezzi con la mola, si sviluppano polveri metalliche e rumore elevato. Il responsabile propone di consegnare a tutti mascherine e cuffie e di non fare altro.",
     "domanda": "La proposta è conforme ai principi generali di tutela dell’art. 15?",
     "opz": [
      [
       "Sì, i DPI sono sufficienti e sono la soluzione più semplice",
       false,
       "No: i DPI sono l'ultima barriera. Prima vanno valutate misure alla fonte e collettive."
      ],
      [
       "No: occorre prima ridurre i rischi alla fonte (aspirazione localizzata, macchine meno rumorose, cabine), poi integrare con i DPI se necessario",
       true,
       "Corretto: riduzione alla fonte e protezione collettiva hanno la priorità; i DPI completano la protezione per il rischio residuo."
      ],
      [
       "No: basta spostare la lavorazione all'aperto",
       false,
       "Non è una soluzione valutata: sposterebbe il rischio senza ridurlo e potrebbe esporre altre persone."
      ]
     ],
     "nar": "Terza esercitazione: analisi di un caso. Esaminata la situazione descritta, si individui la risposta corretta alla luce della gerarchia delle misure appena trattata.",
     "p": 1.3
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del modulo 1",
     "voci": [
      "Il pericolo è una proprietà intrinseca; il rischio è una probabilità e si può ridurre",
      "R = P × D: la matrice orienta le priorità di intervento",
      "Prevenzione riduce la probabilità; protezione riduce la gravità",
      "Art. 15: eliminare, sostituire, proteggere collettivamente, organizzare, poi i DPI",
      "La segnaletica ISO 7010 comunica con forme e colori standardizzati"
     ],
     "nar": "In sintesi: il pericolo è una proprietà intrinseca, il rischio una probabilità che può essere ridotta. La matrice probabilità per danno orienta la definizione delle priorità. La prevenzione riduce la probabilità, la protezione la gravità. Le misure si applicano secondo la gerarchia dell'articolo 15, nella quale i DPI costituiscono l'ultima barriera. La segnaletica comunica mediante forme e colori standardizzati. Segue la verifica intermedia.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 5,
     "domande": [
      [
       "Il rischio è:",
       [
        "Una proprietà intrinseca di un fattore",
        "La probabilità di raggiungimento del livello potenziale di danno nelle condizioni di impiego o di esposizione",
        "Il danno subito",
        "Una misura di protezione"
       ],
       1,
       "Art. 2, c. 1, lett. s)."
      ],
      [
       "La protezione agisce principalmente su:",
       [
        "La probabilità dell'evento",
        "La gravità delle conseguenze",
        "Il costo delle misure",
        "Il numero dei lavoratori"
       ],
       1,
       "La prevenzione agisce sulla probabilità, la protezione sulla gravità."
      ],
      [
       "Quale misura viene prima nella gerarchia?",
       [
        "DPI",
        "Procedure",
        "Eliminazione del pericolo",
        "Segnaletica"
       ],
       2,
       "Eliminare il pericolo è sempre la prima opzione."
      ],
      [
       "Un segnale rotondo azzurro con simbolo bianco indica:",
       [
        "Un divieto",
        "Un obbligo (prescrizione)",
        "Un pericolo",
        "Un'uscita"
       ],
       1,
       "La prescrizione è rotonda con fondo azzurro."
      ],
      [
       "I DPI di terza categoria richiedono:",
       [
        "Solo la consegna",
        "Formazione e addestramento obbligatorio",
        "Nessun obbligo",
        "L'autorizzazione dell'ASL"
       ],
       1,
       "Art. 77, c. 5: addestramento obbligatorio per i DPI di III categoria e per i DPI dell'udito."
      ],
      [
       "L’indicatore corretto per confrontare l’andamento degli infortuni tra anni e settori è:",
       [
        "Il numero assoluto delle denunce",
        "L’incidenza, cioè il numero di casi ogni 100.000 occupati",
        "Il numero dei controlli ispettivi",
        "Il numero delle imprese attive"
       ],
       1,
       "L’incidenza depura il dato dalle variazioni dell’occupazione."
      ],
      [
       "Secondo l’INAIL, nel 2025 le malattie professionali denunciate sono in prevalenza:",
       [
        "Tumori",
        "Ipoacusie",
        "Patologie del sistema muscolo-scheletrico",
        "Malattie infettive"
       ],
       2,
       "Circa tre denunce su quattro (Relazione annuale INAIL 2025)."
      ]
     ],
     "nar": "Verifica intermedia del primo modulo. Sono proposte cinque domande; per proseguire occorrono almeno quattro risposte corrette. In caso contrario è possibile rivedere le spiegazioni e ripetere la verifica.",
     "p": 1.5
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Organizzazione della prevenzione aziendale",
   "min": 75,
   "foto": "chi",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Organizzazione della prevenzione aziendale",
     "nar": "Modulo due. La sicurezza è un sistema organizzato: il modulo esamina le figure previste dal decreto, le rispettive definizioni normative e i compiti, nonché gli strumenti mediante i quali la prevenzione è gestita in azienda.",
     "p": 0.6
    },
    {
     "t": "definizioni",
     "tit": "I soggetti: le definizioni di legge (1/2)",
     "sott": "Art. 2, comma 1, D.lgs. 81/2008 · Consultare tutte le schede",
     "voci": [
      [
       "a",
       "Lavoratore",
       "Persona che, indipendentemente dalla tipologia contrattuale, svolge un'attività lavorativa nell'ambito dell'organizzazione di un datore di lavoro pubblico o privato, con o senza retribuzione, anche al solo fine di apprendere un mestiere, un'arte o una professione, esclusi gli addetti ai servizi domestici e familiari. Sono equiparati, tra gli altri, i soci lavoratori, i tirocinanti, gli allievi degli istituti di istruzione quando utilizzano laboratori e attrezzature, i volontari nei casi previsti."
      ],
      [
       "b",
       "Datore di lavoro",
       "Il soggetto titolare del rapporto di lavoro con il lavoratore o, comunque, il soggetto che, secondo il tipo e l'assetto dell'organizzazione, ha la responsabilità dell'organizzazione stessa o dell'unità produttiva in quanto esercita i poteri decisionali e di spesa."
      ],
      [
       "d",
       "Dirigente",
       "Persona che, in ragione delle competenze professionali e di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, attua le direttive del datore di lavoro organizzando l'attività lavorativa e vigilando su di essa."
      ],
      [
       "e",
       "Preposto",
       "Persona che, in ragione delle competenze professionali e nei limiti di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, sovrintende alla attività lavorativa e garantisce l'attuazione delle direttive ricevute, controllandone la corretta esecuzione da parte dei lavoratori ed esercitando un funzionale potere di iniziativa."
      ]
     ],
     "appro": "Il principio di effettività (art. 299) stabilisce che le posizioni di garanzia del datore di lavoro, del dirigente e del preposto gravano anche su chi, pur senza investitura formale, esercita in concreto i poteri giuridici riferiti a tali soggetti.",
     "nar": "Le figure della prevenzione sono definite dall'articolo 2. Il lavoratore è la persona che, indipendentemente dalla tipologia contrattuale, svolge un'attività lavorativa nell'ambito dell'organizzazione di un datore di lavoro, anche senza retribuzione: sono equiparati, ad esempio, i tirocinanti e gli studenti quando utilizzano laboratori e attrezzature. Il datore di lavoro è il titolare del rapporto di lavoro o, comunque, il soggetto che ha la responsabilità dell'organizzazione in quanto esercita i poteri decisionali e di spesa. Il dirigente attua le direttive del datore di lavoro, organizzando l'attività lavorativa e vigilando su di essa. Il preposto sovrintende all'attività lavorativa, garantisce l'attuazione delle direttive ricevute e ne controlla la corretta esecuzione. Vale il principio di effettività dell'articolo 299: rileva la funzione concretamente esercitata, non soltanto la qualifica formale.",
     "p": 2
    },
    {
     "t": "definizioni",
     "tit": "I soggetti: le definizioni di legge (2/2)",
     "sott": "Art. 2, comma 1, D.lgs. 81/2008 · Consultare tutte le schede",
     "voci": [
      [
       "f",
       "RSPP",
       "Responsabile del servizio di prevenzione e protezione: persona in possesso delle capacità e dei requisiti professionali di cui all'art. 32, designata dal datore di lavoro, a cui risponde, per coordinare il servizio di prevenzione e protezione dai rischi."
      ],
      [
       "g",
       "ASPP",
       "Addetto al servizio di prevenzione e protezione: persona in possesso delle capacità e dei requisiti professionali di cui all'art. 32, facente parte del servizio."
      ],
      [
       "h",
       "Medico competente",
       "Medico in possesso di uno dei titoli e dei requisiti formativi e professionali di cui all'art. 38, che collabora con il datore di lavoro ai fini della valutazione dei rischi ed è nominato per effettuare la sorveglianza sanitaria."
      ],
      [
       "i",
       "RLS",
       "Rappresentante dei lavoratori per la sicurezza: persona eletta o designata per rappresentare i lavoratori per quanto concerne gli aspetti della salute e della sicurezza durante il lavoro."
      ],
      [
       "l",
       "SPP",
       "Servizio di prevenzione e protezione dai rischi: insieme delle persone, sistemi e mezzi esterni o interni all'azienda finalizzati all'attività di prevenzione e protezione dai rischi professionali."
      ],
      [
       "m",
       "Sorveglianza sanitaria",
       "Insieme degli atti medici finalizzati alla tutela dello stato di salute e sicurezza dei lavoratori, in relazione all'ambiente di lavoro, ai fattori di rischio professionali e alle modalità di svolgimento dell'attività lavorativa."
      ]
     ],
     "nar": "Si considerano quindi le figure tecniche. Il responsabile del servizio di prevenzione e protezione, o RSPP, è designato dal datore di lavoro e coordina il servizio, del quale fa parte l'addetto, o ASPP. Entrambi devono possedere i requisiti dell'articolo 32. Il medico competente collabora alla valutazione dei rischi ed effettua la sorveglianza sanitaria. Il rappresentante dei lavoratori per la sicurezza, o RLS, è eletto o designato per rappresentare i lavoratori in materia di salute e sicurezza. Il servizio di prevenzione e protezione è l'insieme delle persone, dei sistemi e dei mezzi finalizzati all'attività di prevenzione. La sorveglianza sanitaria è l'insieme degli atti medici finalizzati alla tutela della salute in relazione ai rischi professionali.",
     "p": 2
    },
    {
     "t": "definizioni",
     "tit": "Formazione, informazione, addestramento",
     "sott": "Art. 2, c. 1, lett. aa), bb), cc) · Tre attività diverse",
     "voci": [
      [
       "aa",
       "Formazione",
       "Processo educativo attraverso il quale trasferire ai lavoratori e agli altri soggetti del sistema di prevenzione conoscenze e procedure utili all'acquisizione di competenze per lo svolgimento in sicurezza dei rispettivi compiti in azienda e all'identificazione, riduzione e gestione dei rischi."
      ],
      [
       "bb",
       "Informazione",
       "Complesso delle attività dirette a fornire conoscenze utili all'identificazione, alla riduzione e alla gestione dei rischi in ambiente di lavoro."
      ],
      [
       "cc",
       "Addestramento",
       "Complesso delle attività dirette a fare apprendere ai lavoratori l'uso corretto di attrezzature, macchine, impianti, sostanze, dispositivi, anche di protezione individuale, e le procedure di lavoro."
      ]
     ],
     "appro": "L'informazione trasmette conoscenze (ad esempio un opuscolo sui rischi); la formazione costruisce competenze attraverso un processo educativo con verifica dell'apprendimento; l'addestramento si fa con la pratica, sotto la guida di una persona esperta, e riguarda l'uso concreto di attrezzature, DPI e procedure (art. 37, c. 5).",
     "nar": "Informazione, formazione e addestramento sono attività distinte. L'informazione trasmette conoscenze utili all'identificazione, alla riduzione e alla gestione dei rischi. La formazione è un processo educativo che trasferisce conoscenze e procedure utili all'acquisizione di competenze, quale il presente corso. L'addestramento consiste nell'apprendimento pratico dell'uso corretto di attrezzature, macchine, sostanze, DPI e procedure, ed è svolto da persona esperta sul luogo di lavoro.",
     "p": 1.4
    },
    {
     "t": "figure",
     "tit": "La mappa della prevenzione aziendale",
     "sott": "Consultare ciascuna figura",
     "voci": [
      [
       "FaUserTie",
       "Datore di lavoro",
       "Organizza il sistema di prevenzione, valuta i rischi, nomina RSPP e medico competente, designa gli addetti alle emergenze, fornisce DPI, formazione e informazione. È il principale garante della sicurezza."
      ],
      [
       "FaBriefcase",
       "Dirigente",
       "Attua le direttive del datore di lavoro, organizza l'attività e vigila, nei limiti dei poteri ricevuti. Condivide con il datore di lavoro gli obblighi dell'art. 18."
      ],
      [
       "FaUserGear",
       "Preposto",
       "Sovrintende al lavoro, controlla il rispetto delle disposizioni e dell'uso dei DPI, interviene sui comportamenti non conformi e, se necessario, interrompe l'attività (art. 19)."
      ],
      [
       "FaHelmetSafety",
       "Lavoratore",
       "Si prende cura della propria salute e sicurezza e di quella delle altre persone presenti; osserva le istruzioni, usa correttamente attrezzature e DPI, segnala i pericoli (art. 20)."
      ],
      [
       "FaClipboardCheck",
       "RSPP e SPP",
       "Consulente tecnico del datore di lavoro: individua e valuta i rischi, elabora misure e procedure, propone i programmi di formazione, partecipa alla riunione periodica (art. 33)."
      ],
      [
       "FaUserDoctor",
       "Medico competente",
       "Collabora alla valutazione dei rischi, programma ed effettua la sorveglianza sanitaria, esprime i giudizi di idoneità, visita gli ambienti di lavoro (art. 25)."
      ],
      [
       "FaPeopleGroup",
       "RLS",
       "Rappresenta i lavoratori, è consultato sulla valutazione dei rischi e sulle nomine, accede ai luoghi di lavoro e alla documentazione, può ricorrere alle autorità (art. 50)."
      ],
      [
       "FaFireExtinguisher",
       "Addetti alle emergenze",
       "Lavoratori designati e formati per la prevenzione incendi, l'evacuazione e il primo soccorso. Non possono rifiutare la designazione se non per giustificato motivo (art. 43)."
      ]
     ],
     "nar": "La mappa della prevenzione aziendale si articola come segue. Il datore di lavoro organizza il sistema ed è il primo garante. Dirigenti e preposti trasmettono le misure e ne controllano l'attuazione lungo la linea gerarchica. I lavoratori collaborano e osservano le disposizioni. Il servizio di prevenzione e protezione, coordinato dall'RSPP, fornisce consulenza tecnica. Il medico competente cura la sorveglianza sanitaria. L'RLS rappresenta i lavoratori. Gli addetti alle emergenze intervengono in caso di incendio, evacuazione e primo soccorso. Il ruolo di ciascuna figura è approfondito nella relativa scheda.",
     "p": 2
    },
    {
     "t": "articolo",
     "tit": "Gli obblighi non delegabili",
     "art": "Art. 17 D.lgs. 81/2008",
     "commi": [
      [
       "a",
       "La valutazione di tutti i rischi con la conseguente elaborazione del documento previsto dall'art. 28 (DVR)"
      ],
      [
       "b",
       "La designazione del responsabile del servizio di prevenzione e protezione dai rischi (RSPP)"
      ]
     ],
     "nota": "Sono gli unici due obblighi che il datore di lavoro non può trasferire ad altri: restano sempre a suo carico, in modo personale.",
     "appro": "La ratio è chiara: la valutazione dei rischi è l'atto fondativo di tutta la prevenzione aziendale e l'RSPP è il consulente di fiducia che affianca il datore di lavoro. Entrambi esprimono scelte organizzative di vertice, che non possono essere affidate a un delegato. L'omessa valutazione dei rischi e l'omessa nomina dell'RSPP sono punite con l'arresto o l'ammenda (art. 55).",
     "nar": "L'articolo 17 individua due obblighi che il datore di lavoro non può delegare in alcun caso: la valutazione di tutti i rischi, con l'elaborazione del relativo documento, e la designazione dell'RSPP. Si tratta delle scelte di vertice dell'organizzazione della sicurezza, che per tale ragione restano personali. Gli altri obblighi possono essere trasferiti mediante delega di funzioni, nei limiti e alle condizioni dell'articolo 16.",
     "p": 1.3
    },
    {
     "t": "articolo",
     "tit": "La delega di funzioni",
     "art": "Art. 16 D.lgs. 81/2008",
     "sott": "La delega è ammessa, se non espressamente esclusa, alle seguenti condizioni",
     "commi": [
      [
       "a",
       "Risulti da atto scritto recante data certa"
      ],
      [
       "b",
       "Il delegato possieda tutti i requisiti di professionalità ed esperienza richiesti dalla natura delle funzioni delegate"
      ],
      [
       "c",
       "Attribuisca al delegato tutti i poteri di organizzazione, gestione e controllo richiesti"
      ],
      [
       "d",
       "Attribuisca al delegato l'autonomia di spesa necessaria allo svolgimento delle funzioni"
      ],
      [
       "e",
       "Sia accettata dal delegato per iscritto"
      ],
      [
       "c. 2",
       "Alla delega deve essere data adeguata e tempestiva pubblicità"
      ],
      [
       "c. 3",
       "La delega non esclude l'obbligo di vigilanza del datore di lavoro sul corretto espletamento delle funzioni trasferite"
      ],
      [
       "c. 3-bis",
       "Il delegato può, previa intesa con il datore di lavoro, subdelegare specifiche funzioni alle medesime condizioni; il subdelegato non può a sua volta delegare"
      ]
     ],
     "nar": "L'articolo 16 disciplina la delega di funzioni. Ai fini della validità, la delega deve risultare da atto scritto recante data certa; il delegato deve possedere i requisiti di professionalità ed esperienza richiesti dalla natura delle funzioni delegate; devono essergli attribuiti tutti i poteri di organizzazione, gestione e controllo e l'autonomia di spesa necessaria; la delega deve essere accettata per iscritto e deve ricevere adeguata e tempestiva pubblicità. La delega non esclude l'obbligo di vigilanza del datore di lavoro in ordine al corretto espletamento delle funzioni trasferite. È ammessa una sola subdelega, alle medesime condizioni.",
     "p": 1.5
    },
    {
     "t": "articolo",
     "tit": "Gli obblighi del datore di lavoro e del dirigente",
     "art": "Art. 18 D.lgs. 81/2008",
     "sott": "Una selezione dei principali obblighi del comma 1",
     "commi": [
      [
       "a",
       "Nominare il medico competente per la sorveglianza sanitaria nei casi previsti"
      ],
      [
       "b",
       "Designare preventivamente i lavoratori incaricati di prevenzione incendi, evacuazione, salvataggio, primo soccorso e gestione dell'emergenza"
      ],
      [
       "b-bis",
       "Individuare il preposto o i preposti per le attività di vigilanza dell'art. 19"
      ],
      [
       "c",
       "Tenere conto, nell'affidare i compiti, delle capacità e delle condizioni dei lavoratori in rapporto alla salute e sicurezza"
      ],
      [
       "d",
       "Fornire idonei DPI, sentiti l'RSPP e il medico competente"
      ],
      [
       "e",
       "Consentire l'accesso alle zone a rischio grave e specifico ai soli lavoratori adeguatamente istruiti e addestrati"
      ],
      [
       "f",
       "Richiedere l'osservanza delle norme, delle disposizioni aziendali e dell'uso dei DPI"
      ],
      [
       "g",
       "Inviare i lavoratori alla visita medica entro le scadenze previste"
      ],
      [
       "l",
       "Adempiere agli obblighi di informazione, formazione e addestramento (artt. 36 e 37)"
      ],
      [
       "n",
       "Consentire ai lavoratori di verificare, mediante l'RLS, l'applicazione delle misure di sicurezza"
      ],
      [
       "o",
       "Consegnare tempestivamente all'RLS, su richiesta, copia del DVR"
      ],
      [
       "r",
       "Comunicare all'INAIL gli infortuni che comportano un'assenza dal lavoro di almeno un giorno, escluso quello dell'evento"
      ],
      [
       "t",
       "Adottare le misure di prevenzione incendi, evacuazione e pericolo grave e immediato"
      ],
      [
       "u",
       "Munire i lavoratori di tessera di riconoscimento in caso di appalto o subappalto"
      ],
      [
       "z",
       "Aggiornare le misure di prevenzione in relazione ai mutamenti organizzativi e produttivi"
      ],
      [
       "bb",
       "Vigilare affinché i lavoratori soggetti a sorveglianza sanitaria non siano adibiti alla mansione senza il giudizio di idoneità"
      ]
     ],
     "nota": "Comma 3-bis: datore di lavoro e dirigenti vigilano sull'adempimento degli obblighi di preposti, lavoratori, progettisti, fabbricanti, fornitori, installatori e medico competente.",
     "nar": "L'articolo 18 elenca gli obblighi del datore di lavoro e dei dirigenti, secondo le rispettive attribuzioni e competenze. Tra i principali: nominare il medico competente; designare gli addetti alle emergenze; individuare i preposti, obbligo introdotto nel 2021; fornire DPI idonei; consentire l'accesso alle zone che espongono a un rischio grave e specifico soltanto ai lavoratori adeguatamente istruiti; richiedere l'osservanza delle norme e l'uso dei DPI; inviare i lavoratori alla visita medica; assicurare informazione, formazione e addestramento; consegnare all'RLS copia del DVR; comunicare gli infortuni all'INAIL; adottare le misure di emergenza; aggiornare le misure in relazione ai mutamenti organizzativi. Il comma 3-bis stabilisce inoltre un obbligo di vigilanza sull'adempimento degli obblighi degli altri soggetti.",
     "p": 2.4
    },
    {
     "t": "articolo",
     "tit": "Gli obblighi del preposto",
     "art": "Art. 19 D.lgs. 81/2008",
     "sott": "Testo riformato dalla legge 17 dicembre 2021, n. 215",
     "commi": [
      [
       "a",
       "Sovrintendere e vigilare sull'osservanza degli obblighi di legge e delle disposizioni aziendali e sull'uso dei mezzi di protezione collettivi e dei DPI; in caso di comportamenti non conformi, intervenire per modificarli fornendo le necessarie indicazioni di sicurezza; in caso di mancata attuazione delle disposizioni o di persistenza dell'inosservanza, interrompere l'attività del lavoratore e informare i superiori diretti"
      ],
      [
       "b",
       "Verificare che soltanto i lavoratori che hanno ricevuto adeguate istruzioni accedano alle zone a rischio grave e specifico"
      ],
      [
       "c",
       "Richiedere l'osservanza delle misure per il controllo delle situazioni di rischio in caso di emergenza e dare istruzioni affinché i lavoratori abbandonino il posto di lavoro in caso di pericolo grave, immediato e inevitabile"
      ],
      [
       "d",
       "Informare il più presto possibile i lavoratori esposti al rischio di un pericolo grave e immediato"
      ],
      [
       "e",
       "Astenersi, salvo eccezioni motivate, dal richiedere di riprendere l'attività in una situazione di lavoro in cui persiste un pericolo grave e immediato"
      ],
      [
       "f",
       "Segnalare tempestivamente al datore di lavoro o al dirigente le deficienze dei mezzi, delle attrezzature e dei DPI e ogni altra condizione di pericolo"
      ],
      [
       "f-bis",
       "In caso di rilevazione di deficienze o di situazioni di pericolo, se necessario, interrompere temporaneamente l'attività e segnalare tempestivamente le non conformità"
      ],
      [
       "g",
       "Frequentare appositi corsi di formazione (art. 37): 12 ore, solo in presenza, aggiornamento biennale"
      ]
     ],
     "nar": "L'articolo 19, riformato nel 2021, ha rafforzato la funzione del preposto. Il preposto sovrintende e vigila sull'osservanza delle disposizioni e sull'uso dei dispositivi di protezione. In caso di comportamento non conforme, interviene impartendo le necessarie indicazioni di sicurezza; qualora la mancata attuazione persista, interrompe l'attività del lavoratore e informa i superiori diretti. Verifica che soltanto i lavoratori adeguatamente istruiti accedano alle zone a rischio grave e specifico; in caso di pericolo grave e immediato impartisce le istruzioni per l'abbandono del posto di lavoro; segnala le deficienze dei mezzi e dei DPI e, ove necessario, interrompe temporaneamente l'attività. Il preposto è tenuto a frequentare un corso di dodici ore, interamente in presenza, con aggiornamento biennale.",
     "p": 2
    },
    {
     "t": "articolo",
     "tit": "Gli obblighi dei lavoratori",
     "art": "Art. 20 D.lgs. 81/2008",
     "commi": [
      [
       "c. 1",
       "Ogni lavoratore deve prendersi cura della propria salute e sicurezza e di quella delle altre persone presenti sul luogo di lavoro, su cui ricadono gli effetti delle sue azioni o omissioni, conformemente alla sua formazione, alle istruzioni e ai mezzi forniti dal datore di lavoro"
      ],
      [
       "a",
       "Contribuire, insieme al datore di lavoro, ai dirigenti e ai preposti, all'adempimento degli obblighi previsti"
      ],
      [
       "b",
       "Osservare le disposizioni e le istruzioni impartite ai fini della protezione collettiva e individuale"
      ],
      [
       "c",
       "Utilizzare correttamente attrezzature di lavoro, sostanze e miscele pericolose, mezzi di trasporto e dispositivi di sicurezza"
      ],
      [
       "d",
       "Utilizzare in modo appropriato i dispositivi di protezione messi a disposizione"
      ],
      [
       "e",
       "Segnalare immediatamente le deficienze dei mezzi e dei dispositivi e qualsiasi condizione di pericolo, adoperandosi direttamente in caso di urgenza, nell'ambito delle proprie competenze, e informandone l'RLS"
      ],
      [
       "f",
       "Non rimuovere né modificare senza autorizzazione i dispositivi di sicurezza, di segnalazione o di controllo"
      ],
      [
       "g",
       "Non compiere di propria iniziativa operazioni o manovre che non sono di competenza o che possono compromettere la sicurezza"
      ],
      [
       "h",
       "Partecipare ai programmi di formazione e di addestramento organizzati dal datore di lavoro"
      ],
      [
       "i",
       "Sottoporsi ai controlli sanitari previsti dal decreto o disposti dal medico competente"
      ],
      [
       "c. 3",
       "Nei lavori in appalto o subappalto esporre la tessera di riconoscimento"
      ]
     ],
     "nar": "L'articolo 20 disciplina gli obblighi dei lavoratori. Il primo comma enuncia un principio generale: ciascun lavoratore deve prendersi cura della propria salute e sicurezza e di quella delle altre persone presenti sul luogo di lavoro, su cui ricadono gli effetti delle sue azioni od omissioni. Il lavoratore deve osservare le disposizioni impartite; utilizzare correttamente attrezzature, sostanze e DPI; segnalare immediatamente deficienze e situazioni di pericolo; non rimuovere né modificare i dispositivi di sicurezza; non compiere operazioni che non siano di sua competenza; partecipare ai programmi di formazione e sottoporsi ai controlli sanitari. Nei lavori in appalto deve esporre la tessera di riconoscimento.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "Componenti dell'impresa familiare e lavoratori autonomi",
     "rif": "Art. 21 D.lgs. 81/2008",
     "lead": "L’attività svolta in forma autonoma o nell’impresa familiare non è sottratta agli obblighi di tutela (art. 21 D.lgs. 81/2008).",
     "punti": [
      "Riguarda componenti dell'impresa familiare, lavoratori autonomi, coltivatori diretti, artigiani e piccoli commercianti, soci delle società semplici agricole",
      "Devono utilizzare attrezzature conformi al Titolo III e munirsi di DPI utilizzandoli conformemente",
      "Devono munirsi di tessera di riconoscimento quando operano in appalto o subappalto",
      "Hanno facoltà, a proprie spese, di beneficiare della sorveglianza sanitaria e di partecipare a corsi di formazione specifici"
     ],
     "nar": "L'articolo 21 riguarda i componenti dell'impresa familiare e i lavoratori autonomi, quali artigiani e piccoli commercianti. Anch'essi devono utilizzare attrezzature conformi, munirsi dei dispositivi di protezione individuale e utilizzarli correttamente, ed esporre la tessera di riconoscimento nell'ambito degli appalti. Hanno inoltre facoltà, con oneri a proprio carico, di beneficiare della sorveglianza sanitaria e di partecipare a corsi di formazione.",
     "p": 1.1
    },
    {
     "t": "processo",
     "tit": "Il documento di valutazione dei rischi",
     "rif": "Artt. 28-29 D.lgs. 81/2008",
     "passi": [
      [
       "Contenuti",
       "Relazione sulla valutazione e criteri adottati; misure di prevenzione, protezione e DPI; programma di miglioramento"
      ],
      [
       "Ruoli",
       "Procedure, ruoli dell'organizzazione e figure che provvedono alle misure; nominativi di RSPP, RLS e medico competente"
      ],
      [
       "Mansioni",
       "Individuazione delle mansioni che espongono a rischi specifici e richiedono capacità, esperienza, formazione e addestramento"
      ],
      [
       "Data certa",
       "Il DVR ha data certa, attestata dalla sottoscrizione di datore di lavoro, RSPP, RLS e medico competente"
      ],
      [
       "Aggiornamento",
       "Entro 30 giorni da modifiche significative, infortuni significativi, risultati della sorveglianza sanitaria o evoluzione della tecnica"
      ]
     ],
     "nar": "Il documento di valutazione dei rischi, o DVR, costituisce il fulcro della prevenzione aziendale. Contiene la relazione sulla valutazione e i criteri adottati, le misure di prevenzione e protezione e i DPI, il programma di miglioramento, le procedure e i ruoli, i nominativi dell'RSPP, dell'RLS e del medico competente, nonché l'individuazione delle mansioni che espongono a rischi specifici. Ha data certa, attestata dalla sottoscrizione del datore di lavoro, dell'RSPP, dell'RLS e del medico competente. Deve essere rielaborato entro trenta giorni in occasione di modifiche del processo produttivo o dell'organizzazione, a seguito di infortuni significativi o quando i risultati della sorveglianza sanitaria ne evidenzino la necessità.",
     "p": 1.6
    },
    {
     "t": "articolo",
     "tit": "Il servizio di prevenzione e protezione",
     "art": "Artt. 31-33 D.lgs. 81/2008",
     "sott": "Compiti del servizio (art. 33)",
     "commi": [
      [
       "a",
       "Individuare i fattori di rischio, valutare i rischi e individuare le misure per la sicurezza e la salubrità degli ambienti"
      ],
      [
       "b",
       "Elaborare le misure preventive e protettive e i sistemi di controllo"
      ],
      [
       "c",
       "Elaborare le procedure di sicurezza per le varie attività aziendali"
      ],
      [
       "d",
       "Proporre i programmi di informazione e formazione dei lavoratori"
      ],
      [
       "e",
       "Partecipare alle consultazioni in materia di tutela della salute e sicurezza e alla riunione periodica"
      ],
      [
       "f",
       "Fornire ai lavoratori le informazioni previste dall'art. 36"
      ]
     ],
     "nota": "I componenti del servizio sono tenuti al segreto sui processi lavorativi di cui vengono a conoscenza. Nei casi previsti dall'Allegato II il datore di lavoro può svolgere direttamente i compiti dell'RSPP, previa formazione specifica (art. 34).",
     "nar": "Il servizio di prevenzione e protezione può essere interno o esterno all'azienda. I suoi compiti, elencati dall'articolo 33, hanno natura tecnica e consultiva: individuare e valutare i rischi, elaborare le misure e le procedure di sicurezza, proporre i programmi di formazione, partecipare alla riunione periodica e fornire le informazioni ai lavoratori. Nei casi indicati dall'allegato secondo, il datore di lavoro può svolgere direttamente i compiti dell'RSPP, previa frequenza di una formazione specifica.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Il medico competente e la sorveglianza sanitaria",
     "rif": "Artt. 25, 38-41 D.lgs. 81/2008",
     "lead": "La sorveglianza sanitaria è effettuata dal medico competente nei casi previsti dalla normativa e quando il lavoratore ne fa richiesta, se correlata ai rischi lavorativi.",
     "punti": [
      "Visita preventiva, anche in fase preassuntiva, per valutare l'idoneità alla mansione",
      "Visita periodica, di norma una volta l'anno o con periodicità diversa stabilita dal medico in base alla valutazione dei rischi",
      "Visita su richiesta del lavoratore, se correlata ai rischi professionali",
      "Visita in occasione del cambio della mansione e alla cessazione del rapporto, nei casi previsti",
      "Visita precedente alla ripresa del lavoro dopo un'assenza per motivi di salute superiore a 60 giorni continuativi, se ritenuta necessaria dal medico",
      "Le visite non possono essere effettuate per accertare stati di gravidanza o negli altri casi vietati dalla legge"
     ],
     "appro": "Giudizi di idoneità (art. 41, c. 6): idoneità; idoneità parziale, temporanea o permanente, con prescrizioni o limitazioni; inidoneità temporanea, con indicazione dei limiti temporali; inidoneità permanente. Il giudizio è comunicato per iscritto al lavoratore e al datore di lavoro. Contro il giudizio è ammesso ricorso all'organo di vigilanza territorialmente competente entro 30 giorni dalla comunicazione. Il medico competente, tra l'altro, visita gli ambienti di lavoro almeno una volta l'anno o con cadenza diversa stabilita in base alla valutazione dei rischi (art. 25).",
     "nar": "Il medico competente collabora alla valutazione dei rischi ed effettua la sorveglianza sanitaria, che comprende diverse tipologie di visita: preventiva, anche in fase preassuntiva; periodica, di norma annuale; su richiesta del lavoratore; in occasione del cambio di mansione; alla cessazione del rapporto, nei casi previsti; precedente alla ripresa del lavoro dopo un'assenza per motivi di salute superiore a sessanta giorni continuativi. Al termine della visita il medico esprime per iscritto il giudizio di idoneità alla mansione, avverso il quale il lavoratore può proporre ricorso all'organo di vigilanza entro trenta giorni. Le visite non possono in alcun caso essere effettuate per accertare stati di gravidanza.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "La riunione periodica",
     "rif": "Art. 35 D.lgs. 81/2008",
     "lead": "Nelle aziende e unità produttive che occupano più di 15 lavoratori il datore di lavoro indice, almeno una volta all'anno, una riunione periodica.",
     "punti": [
      "Partecipano: datore di lavoro o suo rappresentante, RSPP, medico competente, RLS",
      "Si esaminano: il DVR, l'andamento di infortuni e malattie professionali e della sorveglianza sanitaria",
      "I criteri di scelta, le caratteristiche tecniche e l'efficacia dei DPI",
      "I programmi di informazione e formazione di dirigenti, preposti e lavoratori",
      "Si possono individuare codici di comportamento, buone prassi e obiettivi di miglioramento",
      "Della riunione è redatto un verbale a disposizione dei partecipanti"
     ],
     "nar": "Nelle aziende e unità produttive che occupano più di quindici lavoratori il datore di lavoro indice, almeno una volta all'anno, la riunione periodica, cui partecipano il datore di lavoro, l'RSPP, il medico competente e l'RLS. Sono esaminati il documento di valutazione dei rischi, l'andamento degli infortuni, delle malattie professionali e della sorveglianza sanitaria, l'efficacia dei DPI e i programmi di formazione; la riunione è altresì occasione per definire buone prassi e obiettivi di miglioramento. Della riunione è redatto verbale. Nelle realtà di minori dimensioni l'RLS può chiederne la convocazione in presenza di significative variazioni delle condizioni di rischio.",
     "p": 1.3
    },
    {
     "t": "articolo",
     "tit": "Informazione dei lavoratori",
     "art": "Art. 36 D.lgs. 81/2008",
     "sott": "Il datore di lavoro provvede affinché ciascun lavoratore riceva un'adeguata informazione",
     "commi": [
      [
       "a",
       "Sui rischi per la salute e sicurezza connessi all'attività dell'impresa in generale"
      ],
      [
       "b",
       "Sulle procedure di primo soccorso, lotta antincendio ed evacuazione"
      ],
      [
       "c",
       "Sui nominativi dei lavoratori incaricati di primo soccorso e prevenzione incendi"
      ],
      [
       "d",
       "Sui nominativi dell'RSPP, degli ASPP e del medico competente"
      ],
      [
       "c. 2",
       "Sui rischi specifici della mansione, sui pericoli delle sostanze pericolose (schede di sicurezza e norme di buona tecnica), sulle misure e attività di protezione e prevenzione adottate"
      ],
      [
       "c. 4",
       "Il contenuto dell'informazione deve essere facilmente comprensibile; per i lavoratori immigrati è preceduto dalla verifica della comprensione della lingua"
      ]
     ],
     "nar": "L'articolo 36 stabilisce che ciascun lavoratore riceva un'adeguata informazione: sui rischi connessi all'attività dell'impresa in generale e su quelli specifici della mansione, sulle sostanze pericolose impiegate, sulle procedure di primo soccorso, antincendio ed evacuazione, sui nominativi degli addetti alle emergenze, dell'RSPP e del medico competente. L'informazione deve essere facilmente comprensibile e, per i lavoratori provenienti da altri Paesi, è preceduta dalla verifica della comprensione della lingua.",
     "p": 1.3
    },
    {
     "t": "articolo",
     "tit": "Formazione dei lavoratori e dei loro rappresentanti",
     "art": "Art. 37 D.lgs. 81/2008 · Accordo Stato-Regioni 17/04/2025",
     "commi": [
      [
       "c. 1",
       "Formazione sufficiente e adeguata in merito ai concetti di rischio, danno, prevenzione, protezione, organizzazione della prevenzione aziendale, diritti e doveri dei soggetti, organi di vigilanza (lett. a) e ai rischi della mansione e del settore (lett. b)"
      ],
      [
       "c. 2",
       "Durata, contenuti minimi e modalità sono definiti dall'Accordo Stato-Regioni: oggi l'Accordo del 17 aprile 2025"
      ],
      [
       "c. 4",
       "La formazione avviene alla costituzione del rapporto di lavoro o all'inizio dell'utilizzo, al trasferimento o cambio di mansione, all'introduzione di nuove attrezzature, tecnologie o sostanze pericolose"
      ],
      [
       "c. 6",
       "La formazione è periodicamente ripetuta in relazione all'evoluzione dei rischi o all'insorgenza di nuovi rischi"
      ],
      [
       "c. 7-ter",
       "La formazione dei preposti si svolge interamente in presenza ed è ripetuta con cadenza almeno biennale"
      ],
      [
       "c. 10-11",
       "RLS: corso iniziale di almeno 32 ore, di cui 12 sui rischi specifici, con verifica di apprendimento; aggiornamento annuale di almeno 4 ore (15-50 lavoratori) o 8 ore (oltre 50)"
      ],
      [
       "c. 12",
       "La formazione è svolta in collaborazione con gli organismi paritetici, ove presenti nel settore e nel territorio, durante l'orario di lavoro e senza oneri per i lavoratori"
      ]
     ],
     "appro": "Lavoratori secondo l'Accordo 2025: formazione generale di 4 ore, credito formativo permanente, erogabile anche in e-learning; formazione specifica di 4, 8 o 12 ore secondo la classe di rischio (basso, medio, alto); aggiornamento di 6 ore ogni 5 anni. La formazione specifica per i rischi medio e alto non è erogabile in modalità e-learning.",
     "nar": "L'articolo 37 disciplina la formazione. Il datore di lavoro assicura a ciascun lavoratore una formazione sufficiente e adeguata, articolata in una parte generale, cui afferisce il presente corso, relativa ai concetti di rischio, all'organizzazione della prevenzione, ai diritti e doveri e agli organi di vigilanza, e in una parte specifica, relativa ai rischi della mansione e del settore. Durata e contenuti sono fissati dall'Accordo Stato-Regioni del 17 aprile 2025: quattro ore di formazione generale, da quattro a dodici ore di formazione specifica in funzione della classe di rischio, e un aggiornamento di sei ore ogni cinque anni. La formazione si svolge durante l'orario di lavoro, senza oneri per il lavoratore, in occasione dell'assunzione, del cambio di mansione e dell'introduzione di nuove attrezzature o sostanze.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "Tempi e modalità di svolgimento della formazione",
     "foto": false,
     "lead": "La formazione è un obbligo del datore di lavoro, si svolge durante l’orario di lavoro e non comporta oneri per il lavoratore (art. 37, c. 12).",
     "punti": [
      "In occasione della costituzione del rapporto di lavoro, del trasferimento o cambiamento di mansioni e dell’introduzione di nuove attrezzature, tecnologie o sostanze (art. 37, c. 4)",
      "La formazione generale costituisce credito formativo permanente; la specifica dipende dal settore e dalla mansione",
      "Verifica dell’apprendimento obbligatoria; per i lavoratori almeno 30 domande riferite all’intero percorso, generale più specifica (FAQ n. 52 del 27/03/2026)",
      "Frequenza minima del 90% del monte ore per accedere alla verifica finale",
      "Lavoratori stranieri: verifica preventiva della comprensione della lingua veicolare (art. 37, c. 13)",
      "Il datore di lavoro verifica l’efficacia della formazione durante lo svolgimento dell’attività lavorativa"
     ],
     "appro": "Le FAQ ministeriali n. 9 e n. 32 del 27/03/2026 chiariscono che, nel regime dell’Accordo 2025, la formazione va erogata in occasione dell’assunzione e non entro un termine successivo. I dati della formazione sono registrati nel fascicolo elettronico del lavoratore (art. 37, c. 14, come modificato dal D.L. 159/2025, convertito dalla L. 198/2025), che sostituisce il libretto formativo del cittadino.",
     "rif": "Art. 37, cc. 4, 12, 13, 14 D.lgs. 81/2008 · Accordo Stato-Regioni 17/04/2025, Parte I · FAQ Ministero del Lavoro 27/03/2026",
     "nar": "Si precisano tempi e modalità della formazione. Essa costituisce un obbligo del datore di lavoro, si svolge durante l'orario di lavoro e non comporta oneri per il lavoratore. Deve essere erogata all'atto dell'assunzione, del trasferimento o del cambio di mansione e in occasione dell'introduzione di nuove attrezzature o sostanze. L'ammissione alla verifica finale richiede la frequenza di almeno il novanta per cento del monte ore; per i lavoratori il test comprende almeno trenta domande sull'intero percorso. Per i lavoratori stranieri è preliminarmente verificata la comprensione della lingua. Il datore di lavoro verifica infine l'efficacia della formazione, ossia la sua effettiva traduzione in comportamenti sicuri.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Gestione delle emergenze",
     "rif": "Artt. 43-46 D.lgs. 81/2008 · D.M. 2 settembre 2021 · D.M. 388/2003",
     "punti": [
      "Il datore di lavoro organizza i rapporti con i servizi pubblici di primo soccorso, salvataggio, lotta antincendio e gestione dell'emergenza",
      "Designa e forma gli addetti; i lavoratori designati non possono rifiutare se non per giustificato motivo",
      "Informa i lavoratori esposti a pericolo grave e immediato e programma gli interventi per consentire loro di mettersi al sicuro",
      "Il piano di emergenza ed evacuazione indica percorsi, punti di raccolta, compiti e procedure; le esercitazioni sono periodiche",
      "Formazione degli addetti antincendio: livelli 1, 2 e 3 (D.M. 2 settembre 2021); primo soccorso: aziende di gruppo A, B e C (D.M. 388/2003)"
     ],
     "nar": "Ogni azienda deve essere in grado di gestire le situazioni di emergenza. Il datore di lavoro organizza i rapporti con i servizi pubblici di soccorso, designa gli addetti alla prevenzione incendi, all'evacuazione e al primo soccorso e ne cura la formazione. I lavoratori designati non possono rifiutare l'incarico se non per giustificato motivo. Il piano di emergenza indica i percorsi di esodo, i punti di raccolta e i compiti di ciascuno ed è verificato mediante esercitazioni periodiche. Ogni lavoratore è tenuto a conoscere il piano, i nominativi degli addetti e il punto di raccolta.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Il rappresentante dei lavoratori per la sicurezza",
     "rif": "Artt. 47-49 D.lgs. 81/2008",
     "punti": [
      "L'RLS è istituito in tutte le aziende o unità produttive",
      "Fino a 15 lavoratori: eletto direttamente dai lavoratori al loro interno, oppure individuato per più aziende nell'ambito territoriale o del comparto (RLST, art. 48)",
      "Oltre 15 lavoratori: eletto o designato dai lavoratori nell'ambito delle rappresentanze sindacali in azienda; in assenza, eletto dai lavoratori al loro interno",
      "Numero minimo: 1 fino a 200 lavoratori; 3 da 201 a 1.000; 6 oltre 1.000",
      "RLS di sito produttivo nei contesti con più aziende e rischi interferenti (porti, grandi cantieri, centri intermodali, art. 49)",
      "Formazione: 32 ore iniziali e aggiornamento annuale (art. 37, c. 10-11)"
     ],
     "nar": "Il rappresentante dei lavoratori per la sicurezza è previsto in tutte le aziende. Nelle aziende che occupano fino a quindici lavoratori è eletto direttamente dai lavoratori al loro interno oppure è individuato a livello territoriale o di comparto, assumendo in tal caso la denominazione di RLST, rappresentante territoriale. Nelle aziende con più di quindici lavoratori è eletto o designato nell'ambito delle rappresentanze sindacali; in loro assenza, è eletto dai lavoratori. Il numero minimo è di un rappresentante fino a duecento lavoratori, tre fino a mille e sei oltre i mille. Nei siti produttivi complessi, quali porti e grandi cantieri, è previsto l'RLS di sito produttivo.",
     "p": 1.5
    },
    {
     "t": "articolo",
     "tit": "Le attribuzioni dell'RLS",
     "art": "Art. 50 D.lgs. 81/2008",
     "commi": [
      [
       "a",
       "Accede ai luoghi di lavoro in cui si svolgono le lavorazioni"
      ],
      [
       "b",
       "È consultato preventivamente e tempestivamente in ordine alla valutazione dei rischi, all'individuazione, programmazione, realizzazione e verifica della prevenzione"
      ],
      [
       "c",
       "È consultato sulla designazione di RSPP, ASPP, addetti alle emergenze e del medico competente"
      ],
      [
       "d",
       "È consultato in merito all'organizzazione della formazione"
      ],
      [
       "e",
       "Riceve le informazioni e la documentazione aziendale inerente alla valutazione dei rischi e alle misure di prevenzione"
      ],
      [
       "h",
       "Promuove l'elaborazione, l'individuazione e l'attuazione delle misure di prevenzione"
      ],
      [
       "l",
       "Partecipa alla riunione periodica"
      ],
      [
       "n",
       "Avverte il responsabile dell'azienda dei rischi individuati nel corso della sua attività"
      ],
      [
       "o",
       "Può fare ricorso alle autorità competenti qualora ritenga che le misure adottate non siano idonee a garantire la sicurezza e la salute"
      ],
      [
       "c. 2",
       "Deve disporre del tempo necessario, senza perdita di retribuzione, e dei mezzi e spazi necessari; non può subire pregiudizio a causa dello svolgimento della propria attività"
      ],
      [
       "c. 6",
       "È tenuto al segreto in ordine ai processi lavorativi e al rispetto della riservatezza sul DVR"
      ]
     ],
     "nar": "L'articolo 50 definisce le attribuzioni dell'RLS. Il rappresentante accede ai luoghi di lavoro; è consultato preventivamente sulla valutazione dei rischi, sulla designazione dell'RSPP, del medico competente e degli addetti alle emergenze e sull'organizzazione della formazione; riceve la documentazione aziendale, compresa copia del DVR; partecipa alla riunione periodica; formula proposte e osservazioni e, qualora ritenga le misure non idonee, può fare ricorso alle autorità competenti. Deve disporre del tempo e dei mezzi necessari, senza perdita di retribuzione, e non può subire pregiudizio alcuno a causa dello svolgimento della propria attività. È tenuto al segreto sui processi lavorativi.",
     "p": 1.7
    },
    {
     "t": "abbina",
     "tit": "Esercitazione 4 · Attribuzione dei compiti ai soggetti della prevenzione",
     "sott": "Associare a ciascuna figura il compito corretto",
     "coppie": [
      [
       "Datore di lavoro",
       "Valuta i rischi ed elabora il DVR (obbligo non delegabile)"
      ],
      [
       "Preposto",
       "Interrompe l'attività del lavoratore se l'inosservanza persiste"
      ],
      [
       "Medico competente",
       "Esprime il giudizio di idoneità alla mansione"
      ],
      [
       "RLS",
       "È consultato preventivamente sulla valutazione dei rischi"
      ],
      [
       "RSPP",
       "Coordina il servizio di prevenzione e protezione"
      ],
      [
       "Lavoratore",
       "Segnala immediatamente le condizioni di pericolo"
      ]
     ],
     "nar": "Quarta esercitazione. A ciascuna figura della prevenzione va associato, mediante il menu a tendina, il compito corrispondente; completati gli abbinamenti, si preme Verifica.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione 5 · Caso di studio",
     "scena": "Marco, preposto di un magazzino, nota che un carrellista sta movimentando un bancale senza cintura di sicurezza e a velocità elevata. Lo richiama una prima volta, ma dopo pochi minuti il comportamento si ripete.",
     "domanda": "Quale condotta impone a Marco l’art. 19 D.lgs. 81/2008?",
     "opz": [
      [
       "Nulla: ha già richiamato il lavoratore una volta",
       false,
       "No: l'obbligo del preposto non si esaurisce nel primo richiamo."
      ],
      [
       "Interrompere l'attività del lavoratore e informare i superiori diretti",
       true,
       "Corretto: se l'inosservanza persiste, il preposto interrompe l'attività del lavoratore e informa i superiori diretti (art. 19, c. 1, lett. a)."
      ],
      [
       "Annotare l'episodio e parlarne alla riunione periodica dell'anno successivo",
       false,
       "No: la vigilanza del preposto richiede un intervento immediato."
      ],
      [
       "Sostituirsi al lavoratore e guidare lui il carrello",
       false,
       "No: il preposto non deve sostituirsi al lavoratore, ma far rispettare le disposizioni."
      ]
     ],
     "nar": "Quinta esercitazione: analisi di un caso. Esaminata la situazione del preposto Marco, si individui la condotta conforme all'articolo 19, come riformato nel 2021.",
     "p": 1.3
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del modulo 2",
     "voci": [
      "Le figure della prevenzione sono definite dall'art. 2 e operano secondo il principio di effettività",
      "Valutazione dei rischi e nomina dell'RSPP sono obblighi non delegabili (art. 17)",
      "La delega di funzioni richiede atto scritto con data certa, poteri, autonomia di spesa e accettazione (art. 16)",
      "Il preposto vigila, interviene e, se necessario, interrompe l'attività (art. 19)",
      "Il lavoratore si prende cura di sé e degli altri (art. 20)",
      "Informazione, formazione, sorveglianza sanitaria, riunione periodica, emergenze e RLS completano il sistema"
     ],
     "nar": "In sintesi: le figure della prevenzione sono definite dall'articolo 2 e rileva la funzione concretamente esercitata. La valutazione dei rischi e la designazione dell'RSPP non sono delegabili; gli altri obblighi possono essere delegati alle condizioni dell'articolo 16. Il preposto vigila, interviene e, ove necessario, interrompe l'attività. Il lavoratore ha cura della propria salute e sicurezza e di quella altrui. Informazione, formazione, sorveglianza sanitaria, riunione periodica, gestione delle emergenze e rappresentanza dei lavoratori completano il sistema. Segue la verifica intermedia.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 5,
     "domande": [
      [
       "Quali sono gli obblighi del datore di lavoro non delegabili (art. 17)?",
       [
        "Fornitura dei DPI e formazione",
        "Valutazione dei rischi con elaborazione del DVR e designazione dell'RSPP",
        "Nomina del medico competente e degli addetti antincendio",
        "Riunione periodica e informazione"
       ],
       1,
       "Art. 17, c. 1, lett. a) e b)."
      ],
      [
       "La delega di funzioni deve risultare:",
       [
        "Da un accordo verbale",
        "Da atto scritto recante data certa, accettato per iscritto dal delegato",
        "Da una comunicazione all'ASL",
        "Dal DVR"
       ],
       1,
       "Art. 16, c. 1, lett. a) ed e)."
      ],
      [
       "Il preposto, se l'inosservanza del lavoratore persiste:",
       [
        "Lo segnala all'INAIL",
        "Interrompe l'attività del lavoratore e informa i superiori diretti",
        "Lo sanziona economicamente",
        "Non deve fare nulla"
       ],
       1,
       "Art. 19, c. 1, lett. a), come modificato dalla L. 215/2021."
      ],
      [
       "Nelle aziende fino a 15 lavoratori l'RLS è:",
       [
        "Nominato dal datore di lavoro",
        "Eletto direttamente dai lavoratori al loro interno o individuato a livello territoriale (RLST)",
        "Designato dall'ASL",
        "Sempre il preposto"
       ],
       1,
       "Art. 47, c. 3."
      ],
      [
       "La visita medica per il rientro dopo un'assenza per motivi di salute è prevista dopo:",
       [
        "Più di 10 giorni",
        "Più di 30 giorni",
        "Più di 60 giorni continuativi, se ritenuta necessaria dal medico",
        "Qualsiasi assenza"
       ],
       2,
       "Art. 41, c. 2, lett. e-ter)."
      ],
      [
       "La formazione dei lavoratori deve essere erogata:",
       [
        "Entro 60 giorni dall’assunzione",
        "In occasione della costituzione del rapporto di lavoro",
        "Entro un anno",
        "Solo su richiesta dell’RLS"
       ],
       1,
       "Art. 37, c. 4; FAQ n. 9 e 32 del 27/03/2026."
      ],
      [
       "Per accedere alla verifica finale occorre una frequenza minima del:",
       [
        "50%",
        "75%",
        "90%",
        "100%"
       ],
       2,
       "Accordo Stato-Regioni 17/04/2025, Parte I."
      ]
     ],
     "nar": "Verifica intermedia del secondo modulo. Sono proposte cinque domande; per proseguire occorrono almeno quattro risposte corrette.",
     "p": 1.5
    }
   ]
  },
  {
   "id": "M3",
   "titolo": "Diritti, doveri e sanzioni per i vari soggetti aziendali",
   "min": 65,
   "foto": "hero1",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 3",
     "sott": "Diritti, doveri e sanzioni per i vari soggetti aziendali",
     "nar": "Modulo tre. Definite le figure della prevenzione, il modulo approfondisce i diritti dei lavoratori, i doveri dei singoli soggetti e il sistema delle responsabilità e delle sanzioni.",
     "p": 0.6
    },
    {
     "t": "figure",
     "tit": "I diritti dei lavoratori",
     "sott": "Consultare ciascun diritto",
     "voci": [
      [
       "FaGraduationCap",
       "Formazione e informazione",
       "Ricevere formazione, informazione e addestramento adeguati, durante l'orario di lavoro e senza oneri (artt. 36-37)."
      ],
      [
       "FaShieldHalved",
       "Protezione",
       "Ricevere gratuitamente DPI idonei e lavorare in ambienti e con attrezzature conformi (artt. 15, 18, 63-71, 77)."
      ],
      [
       "FaStethoscope",
       "Sorveglianza sanitaria",
       "Essere sottoposto alle visite previste, richiedere una visita se correlata ai rischi e ricorrere contro il giudizio di idoneità (art. 41)."
      ],
      [
       "FaPeopleGroup",
       "Rappresentanza",
       "Eleggere o designare l'RLS e verificare, tramite l'RLS, l'applicazione delle misure di sicurezza (artt. 18, 47, 50)."
      ],
      [
       "FaPersonRunning",
       "Allontanamento",
       "Allontanarsi dal posto di lavoro in caso di pericolo grave, immediato e inevitabile, senza subire pregiudizio (art. 44)."
      ],
      [
       "FaUserShield",
       "Tutela da ritorsioni",
       "Non subire pregiudizi per aver segnalato pericoli o per aver adottato misure in caso di pericolo grave (art. 44)."
      ]
     ],
     "nar": "Il lavoratore è titolare di diritti precisi in materia di sicurezza: ricevere formazione e informazione durante l'orario di lavoro e senza oneri; ricevere gratuitamente i dispositivi di protezione e operare con attrezzature conformi; essere sottoposto alla sorveglianza sanitaria e proporre ricorso avverso il giudizio di idoneità; eleggere il proprio rappresentante per la sicurezza; allontanarsi in caso di pericolo grave e immediato; non subire ritorsioni per aver segnalato un pericolo. Ciascun diritto è approfondito nella relativa scheda.",
     "p": 1.6
    },
    {
     "t": "diritto",
     "tit": "Il diritto di allontanarsi dal pericolo",
     "rif": "Art. 44 D.lgs. 81/2008",
     "testo": "Il lavoratore che, in caso di pericolo grave, immediato e che non può essere evitato, si allontana dal posto di lavoro o da una zona pericolosa, non può subire pregiudizio alcuno e deve essere protetto da qualsiasi conseguenza dannosa.",
     "appro": "Il comma 2 aggiunge che il lavoratore che, in caso di pericolo grave e immediato e nell'impossibilità di contattare il competente superiore gerarchico, prende misure per evitare le conseguenze di tale pericolo, non può subire pregiudizio per tale azione, a meno che non abbia commesso una grave negligenza. Collegati: art. 18, c. 1, lett. h) e m); art. 19, c. 1, lett. c) ed e); art. 43.",
     "nar": "L'articolo 44 tutela un diritto fondamentale. In presenza di un pericolo grave, immediato e che non può essere evitato, il lavoratore che si allontana dal posto di lavoro o da una zona pericolosa non può subire pregiudizio alcuno. Qualora, nell'impossibilità di contattare il superiore gerarchico, adotti egli stesso misure per evitare le conseguenze del pericolo, non può essere penalizzato, salvo che abbia commesso una grave negligenza. A tale diritto corrispondono gli obblighi del datore di lavoro e del preposto di impartire le istruzioni per l'abbandono del posto di lavoro e di astenersi dal richiedere la ripresa dell'attività finché il pericolo persiste.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "La posizione di garanzia",
     "lead": "La titolarità di poteri organizzativi comporta l’obbligo giuridico di impedire l’evento lesivo (art. 40, cpv., c.p.).",
     "punti": [
      "Art. 40, c. 2 codice penale: non impedire un evento che si ha l'obbligo giuridico di impedire equivale a cagionarlo",
      "Art. 2087 codice civile: l'imprenditore adotta le misure che, secondo la particolarità del lavoro, l'esperienza e la tecnica, sono necessarie a tutelare l'integrità fisica e la personalità morale dei prestatori di lavoro",
      "Datore di lavoro, dirigente e preposto sono titolari di posizioni di garanzia, ciascuno nei limiti dei propri poteri",
      "Principio di effettività (art. 299): rileva chi esercita in concreto i poteri, anche senza investitura formale",
      "Il comportamento imprudente del lavoratore esclude la responsabilità del garante solo se abnorme, eccezionale e imprevedibile"
     ],
     "nar": "La comprensione del sistema delle responsabilità presuppone la nozione di posizione di garanzia. Il codice penale stabilisce che non impedire un evento che si ha l'obbligo giuridico di impedire equivale a cagionarlo. Il codice civile, all'articolo 2087, obbliga l'imprenditore ad adottare tutte le misure necessarie a tutelare l'integrità fisica e la personalità morale dei prestatori di lavoro. Datore di lavoro, dirigente e preposto sono titolari di posizioni di garanzia, ciascuno nei limiti dei propri poteri. Secondo la giurisprudenza, la condotta imprudente del lavoratore esclude la responsabilità del garante soltanto se abnorme, eccezionale e imprevedibile.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "La condotta del lavoratore e l’area di rischio",
     "foto": false,
     "lead": "L’imprudenza del lavoratore esclude la responsabilità datoriale soltanto entro limiti rigorosi, definiti dalla giurisprudenza di legittimità.",
     "punti": [
      "La condotta del lavoratore interrompe il nesso causale solo se è abnorme, cioè se attiva un rischio eccentrico o esorbitante rispetto all’area di rischio governata dal garante",
      "Non basta che la condotta sia imprudente o imprevedibile: l’errore del lavoratore rientra tra i rischi che la prevenzione deve governare",
      "Cass. pen., Sez. IV, n. 10460/2025: apprendista che pulisce un filtro con il boccaporto aperto secondo una prassi consolidata; la prassi tollerata non esonera il datore di lavoro",
      "Cass. pen., Sez. IV, n. 23320/2025: caduta in un’area di cantiere non delimitata; l’omessa delimitazione fonda la responsabilità del garante",
      "Le prassi scorrette tollerate dall’organizzazione sono, in giudizio, una prova della colpa di chi doveva vigilare"
     ],
     "appro": "Il principio dell’area di rischio supera la nozione tradizionale di condotta «eccezionale e imprevedibile»: ciò che rileva è se il comportamento del lavoratore, pur imprudente, si colloca all’interno dell’attività lavorativa assegnata e dei rischi che il garante era chiamato a prevenire. Se sì, l’evento resta imputabile a chi aveva l’obbligo di impedirlo (art. 40, c. 2, c.p.). La condotta può assumere rilievo, sul piano civilistico, come concorso di colpa.",
     "rif": "Art. 40, c. 2, c.p. · art. 2087 c.c. · Cass. pen., Sez. IV, nn. 10460/2025 e 23320/2025",
     "nar": "Si pone di frequente la questione se il datore di lavoro risponda dell'imprudenza del lavoratore. La Corte di Cassazione ha fissato un criterio rigoroso: la condotta del lavoratore esclude la responsabilità del garante soltanto se abnorme, ossia se introduce un rischio del tutto estraneo all'attività affidata. L'errore commesso nello svolgimento della propria mansione rientra invece tra i rischi che la prevenzione è chiamata a governare. Nel 2025, ad esempio, la Corte ha confermato la responsabilità per l'infortunio di un apprendista che puliva un filtro con il boccaporto aperto, secondo una prassi tollerata in azienda.",
     "p": 1.5
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il neoassunto e la troncatrice",
     "scena": "Un neoassunto viene affiancato per due giorni a un collega esperto e poi lasciato a usare da solo una troncatrice. Non ha ricevuto la formazione specifica né l’addestramento sull’uso della macchina. Durante un taglio si ferisce gravemente alla mano, rimuovendo con le dita un pezzo incastrato senza fermare la lama.",
     "domanda": "Come valuta la situazione la giurisprudenza (Cass. pen., Sez. IV, n. 22843/2025)?",
     "opz": [
      [
       "La condotta del lavoratore è abnorme: il datore di lavoro non risponde",
       false,
       "No: il gesto è un errore tipico durante l’uso della macchina, quindi rientra nell’area di rischio governata dal datore di lavoro."
      ],
      [
       "L’affiancamento a un collega esperto non sostituisce formazione, informazione e addestramento (artt. 36, 37, 73): il datore di lavoro risponde dell’infortunio",
       true,
       "Corretto: in assenza di formazione la condotta imprudente non è abnorme, e l’affiancamento informale non adempie agli obblighi formativi."
      ],
      [
       "Risponde solo il collega che lo ha affiancato",
       false,
       "No: gli obblighi formativi gravano sul datore di lavoro e sui dirigenti; il collega non è titolare della posizione di garanzia sulla formazione."
      ]
     ],
     "appro": "L’addestramento (art. 2, c. 1, lett. cc) è svolto da persona esperta e sul luogo di lavoro, ma è un segmento formale e tracciato del percorso: integra la formazione, non la sostituisce. Per le attrezzature che richiedono conoscenze particolari l’art. 73, c. 4 impone formazione, informazione e addestramento adeguati e specifici.",
     "rif": "Artt. 2, 36, 37, 73 D.lgs. 81/2008 · Cass. pen., Sez. IV, n. 22843/2025",
     "nar": "Esercitazione. Esaminato il caso del neoassunto e della troncatrice, si individui la risposta corretta alla luce del criterio dell'area di rischio appena illustrato.",
     "p": 1.3
    },
    {
     "t": "confronto",
     "tit": "Responsabilità penale, civile e amministrativa",
     "sx": {
      "ico": "FaGavel",
      "tit": "Persona fisica",
      "voci": [
       "Contravvenzioni del D.lgs. 81/2008: arresto o ammenda",
       "Reati del codice penale: omicidio colposo (art. 589) e lesioni personali colpose (art. 590), aggravati dalla violazione delle norme di prevenzione",
       "Responsabilità civile: risarcimento del danno",
       "Responsabilità disciplinare del lavoratore"
      ]
     },
     "dx": {
      "ico": "FaBuilding",
      "tit": "Ente (impresa)",
      "voci": [
       "D.lgs. 231/2001, art. 25-septies: responsabilità amministrativa per omicidio colposo e lesioni gravi o gravissime commessi con violazione delle norme di sicurezza",
       "Sanzioni pecuniarie e interdittive",
       "Esimente: adozione ed efficace attuazione di un modello di organizzazione e gestione conforme all'art. 30",
       "Azione di regresso dell'INAIL"
      ]
     },
     "nar": "La violazione delle norme di sicurezza può generare diverse forme di responsabilità. La persona fisica risponde delle contravvenzioni previste dal decreto, punite con l'arresto o con l'ammenda, e, in caso di infortunio, dei delitti di omicidio colposo o di lesioni personali colpose, aggravati dalla violazione delle norme per la prevenzione degli infortuni. Si aggiungono la responsabilità civile, con l'obbligo di risarcimento del danno, e la responsabilità disciplinare del lavoratore. L'ente risponde, ai sensi del decreto legislativo 231 del 2001, dei reati di omicidio colposo e di lesioni gravi o gravissime commessi con violazione delle norme di sicurezza; tale responsabilità può essere esclusa mediante l'adozione e l'efficace attuazione di un modello di organizzazione e gestione conforme all'articolo 30.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Il modello di organizzazione e gestione",
     "rif": "Art. 2, c. 1, lett. dd) e art. 30 D.lgs. 81/2008",
     "lead": "Un modello adottato ed efficacemente attuato ha efficacia esimente della responsabilità amministrativa dell'ente.",
     "punti": [
      "Assicura il rispetto degli standard tecnico-strutturali di attrezzature, impianti, luoghi di lavoro, agenti chimici, fisici e biologici",
      "Copre valutazione dei rischi, emergenze, appalti, riunioni periodiche, consultazione degli RLS, sorveglianza sanitaria, formazione, vigilanza, documentazione e verifiche periodiche",
      "Prevede un sistema disciplinare idoneo a sanzionare il mancato rispetto delle misure",
      "Si presume conforme, per le parti corrispondenti, se definito secondo le Linee guida UNI-INAIL o la norma UNI EN ISO 45001"
     ],
     "nar": "Il modello di organizzazione e gestione è definito dall'articolo 2 e disciplinato dall'articolo 30. Si tratta di un sistema volto ad assicurare l'adempimento di tutti gli obblighi di sicurezza: dagli standard tecnico-strutturali di attrezzature e luoghi di lavoro alla valutazione dei rischi, dalla gestione delle emergenze agli appalti, dalla formazione alla vigilanza. Deve prevedere idonei sistemi di registrazione, verifiche periodiche e un sistema disciplinare. Se adottato ed efficacemente attuato, ha efficacia esimente della responsabilità prevista dal decreto 231. Si presume conforme, per le parti corrispondenti, se definito secondo le linee guida UNI-INAIL o la norma UNI EN ISO 45001.",
     "p": 1.3
    },
    {
     "t": "figure",
     "tit": "Il sistema sanzionatorio del D.lgs. 81/2008",
     "sott": "Titolo I, Capo IV · Consultare ciascun soggetto",
     "voci": [
      [
       "FaUserTie",
       "Datore di lavoro e dirigente (art. 55)",
       "Sanzioni penali (arresto o ammenda) e amministrative per la violazione dei rispettivi obblighi; la pena dell'arresto è prevista, ad esempio, per l'omessa valutazione dei rischi e l'omessa nomina dell'RSPP."
      ],
      [
       "FaUserGear",
       "Preposto (art. 56)",
       "Arresto o ammenda per la violazione degli obblighi dell'art. 19, compreso il mancato intervento sui comportamenti non conformi."
      ],
      [
       "FaUserDoctor",
       "Medico competente (art. 58)",
       "Arresto o ammenda per la violazione degli obblighi dell'art. 25 e di quelli relativi alla sorveglianza sanitaria."
      ],
      [
       "FaHelmetSafety",
       "Lavoratori (art. 59)",
       "Arresto fino a un mese o ammenda per la violazione degli obblighi dell'art. 20, c. 2 (ad esempio mancato uso dei DPI, rimozione dei dispositivi di sicurezza); sanzione amministrativa per la mancata esposizione della tessera di riconoscimento."
      ],
      [
       "FaToolbox",
       "Lavoratori autonomi (art. 60)",
       "Arresto o ammenda per la violazione degli obblighi dell'art. 21."
      ],
      [
       "FaIndustry",
       "Progettisti, fabbricanti, fornitori, installatori (art. 57)",
       "Sanzioni per la violazione dei principi generali di prevenzione e per la messa a disposizione di prodotti non conformi."
      ]
     ],
     "appro": "Gli importi delle ammende e delle sanzioni amministrative sono rivalutati periodicamente (art. 306, c. 4-bis). Il decreto distingue le sanzioni per ciascun soggetto in proporzione ai poteri e alle responsabilità.",
     "nar": "Il decreto prevede sanzioni per ciascun soggetto, in proporzione ai poteri attribuiti. Datori di lavoro e dirigenti rispondono con l'arresto o con l'ammenda della violazione dei propri obblighi; l'arresto è previsto, ad esempio, per l'omessa valutazione dei rischi. I preposti rispondono della violazione dell'articolo 19, il medico competente di quella dell'articolo 25. Sono sanzionabili anche i lavoratori: l'articolo 59 prevede l'arresto fino a un mese o l'ammenda per chi, ad esempio, non utilizza i DPI o rimuove i dispositivi di sicurezza. Sono altresì sanzionati i lavoratori autonomi e i progettisti, fabbricanti e fornitori di prodotti non conformi. Gli importi sono periodicamente rivalutati.",
     "p": 1.7
    },
    {
     "t": "processo",
     "tit": "La prescrizione: dall'accertamento all'estinzione",
     "rif": "D.lgs. 758/1994 · Art. 301 D.lgs. 81/2008",
     "passi": [
      [
       "Accertamento",
       "L'organo di vigilanza rileva una contravvenzione punita con l'arresto alternativo all'ammenda o con la sola ammenda"
      ],
      [
       "Prescrizione",
       "Impartisce una prescrizione con le misure da adottare e un termine per la regolarizzazione"
      ],
      [
       "Verifica",
       "Accerta se la violazione è stata eliminata nel termine indicato"
      ],
      [
       "Pagamento",
       "Il contravventore è ammesso a pagare, entro 30 giorni, una somma pari a un quarto del massimo dell'ammenda"
      ],
      [
       "Estinzione",
       "Adempimento e pagamento estinguono il reato; in caso contrario il procedimento penale prosegue"
      ]
     ],
     "nar": "Per le contravvenzioni in materia di sicurezza opera un istituto specifico, la prescrizione, disciplinato dal decreto legislativo 758 del 1994. Accertata la violazione, l'organo di vigilanza impartisce una prescrizione che indica le misure da adottare e il termine per l'adempimento. Se il contravventore regolarizza nei termini e versa, entro trenta giorni, una somma pari a un quarto del massimo dell'ammenda, il reato si estingue; in caso contrario il procedimento penale prosegue. L'istituto è finalizzato a conseguire la messa in sicurezza, prima ancora che la sanzione.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Molestie e violenza nei luoghi di lavoro",
     "rif": "Convenzione ILO n. 190 (L. 15 gennaio 2021, n. 4) · Art. 28 D.lgs. 81/2008",
     "lead": "Ogni persona ha diritto a un mondo del lavoro libero da violenza e molestie, comprese quelle di genere.",
     "punti": [
      "Violenza e molestie: comportamenti, pratiche o minacce che si prefiggono, causano o possono comportare un danno fisico, psicologico, sessuale o economico",
      "Il datore di lavoro ne tiene conto nella valutazione dei rischi, anche come fattori di stress lavoro-correlato",
      "Canali di segnalazione: preposto, datore di lavoro, RLS, procedure aziendali e, ove previsti, canali riservati",
      "Chi segnala in buona fede deve essere protetto da ritorsioni"
     ],
     "nar": "La Convenzione dell'Organizzazione internazionale del lavoro numero 190, ratificata dall'Italia con la legge numero 4 del 2021, riconosce il diritto di ogni persona a un mondo del lavoro libero da violenza e molestie, ossia da comportamenti, pratiche o minacce che provocano o possono provocare un danno fisico, psicologico, sessuale o economico. Tali fenomeni costituiscono un rischio da considerare nella valutazione, anche quale fattore di stress lavoro-correlato. Chi li subisce o vi assiste deve poterli segnalare in condizioni di sicurezza, tramite il preposto, il datore di lavoro, l'RLS o i canali previsti, senza subire ritorsioni.",
     "p": 1.2
    },
    {
     "t": "vf",
     "tit": "Esercitazione 6 · Affermazioni vere o false",
     "sott": "Qualificare ciascuna affermazione come vera o falsa",
     "voci": [
      [
       "Il lavoratore non può mai essere sanzionato penalmente.",
       false,
       "Falso: l'art. 59 prevede l'arresto fino a un mese o l'ammenda per la violazione degli obblighi dell'art. 20."
      ],
      [
       "Il lavoratore che si allontana in caso di pericolo grave, immediato e inevitabile non può subire pregiudizio.",
       true,
       "Vero: art. 44, comma 1."
      ],
      [
       "La delega di funzioni esclude ogni obbligo di vigilanza del datore di lavoro.",
       false,
       "Falso: art. 16, comma 3: la delega non esclude l'obbligo di vigilanza."
      ],
      [
       "Un modello organizzativo efficacemente attuato può esimere l'ente dalla responsabilità del D.lgs. 231/2001.",
       true,
       "Vero: art. 30 D.lgs. 81/2008."
      ],
      [
       "Con la prescrizione il reato si estingue se il contravventore regolarizza e paga la somma prevista.",
       true,
       "Vero: procedura del D.lgs. 758/1994."
      ],
      [
       "L'RLS può subire pregiudizi a causa della propria attività di rappresentanza.",
       false,
       "Falso: art. 50, comma 2."
      ]
     ],
     "nar": "Sesta esercitazione. Ciascuna affermazione va qualificata come vera o falsa; a ogni risposta segue una spiegazione.",
     "p": 1.5
    },
    {
     "t": "caso",
     "tit": "Esercitazione 7 · Caso di studio",
     "scena": "Durante un travaso in reparto si sviluppa improvvisamente un forte odore di gas e un collega accusa capogiri. Il capo reparto è in un altro stabilimento e non risponde al telefono.",
     "domanda": "Quale condotta risulta conforme alla normativa?",
     "opz": [
      [
       "Continuare il lavoro finché il capo reparto non risponde",
       false,
       "No: in caso di pericolo grave e immediato non si attende."
      ],
      [
       "Allontanarsi dalla zona, dare l'allarme secondo il piano di emergenza, aiutare il collega senza esporsi a rischi e avvisare gli addetti alle emergenze",
       true,
       "Corretto: art. 44 e art. 43: allontanarsi, attivare l'emergenza e adottare misure per evitare le conseguenze, senza grave negligenza."
      ],
      [
       "Aprire tutte le valvole per far defluire il gas",
       false,
       "No: manovre non di competenza possono aggravare il pericolo (art. 20, lett. g)."
      ],
      [
       "Riprendere un video da inviare al capo reparto",
       false,
       "No: la priorità è mettersi al sicuro e attivare l'emergenza."
      ]
     ],
     "nar": "Settima esercitazione: analisi di un caso relativo alla gestione di un pericolo grave e immediato. Si individui la condotta corretta.",
     "p": 1.2
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del modulo 3",
     "voci": [
      "Il lavoratore ha diritto a formazione, protezione, sorveglianza sanitaria, rappresentanza e allontanamento dal pericolo",
      "Datore di lavoro, dirigente e preposto sono garanti, ciascuno nei limiti dei propri poteri",
      "Responsabilità penale, civile, disciplinare e responsabilità dell'ente ex D.lgs. 231/2001",
      "Sanzioni per tutti i soggetti, lavoratori compresi (artt. 55-60)",
      "La prescrizione del D.lgs. 758/1994 punta alla regolarizzazione"
     ],
     "nar": "In sintesi: il lavoratore è titolare di diritti precisi, tra cui quello di allontanarsi in presenza di pericolo grave. Datore di lavoro, dirigenti e preposti sono titolari di posizioni di garanzia. Le violazioni comportano responsabilità penali, civili, disciplinari e, per l'ente, amministrative. Le sanzioni riguardano tutti i soggetti, lavoratori compresi. La prescrizione consente l'estinzione del reato previa regolarizzazione. Segue la verifica intermedia.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 3",
     "soglia": 5,
     "domande": [
      [
       "L'art. 59 prevede, per il lavoratore che non usa i DPI:",
       [
        "Nessuna sanzione",
        "Arresto fino a un mese o ammenda",
        "Il licenziamento automatico",
        "Solo un richiamo verbale"
       ],
       1,
       "Art. 59, c. 1, lett. a)."
      ],
      [
       "Il D.lgs. 231/2001 riguarda:",
       [
        "La segnaletica",
        "La responsabilità amministrativa degli enti per reati commessi nel loro interesse o vantaggio, tra cui omicidio colposo e lesioni gravi per violazione delle norme di sicurezza",
        "Il rischio chimico",
        "Le visite mediche"
       ],
       1,
       "Art. 25-septies D.lgs. 231/2001."
      ],
      [
       "Secondo l'art. 2087 c.c. l'imprenditore deve tutelare:",
       [
        "Solo l'integrità fisica",
        "L'integrità fisica e la personalità morale dei lavoratori",
        "Solo i beni aziendali",
        "Solo i dirigenti"
       ],
       1,
       "Art. 2087 codice civile."
      ],
      [
       "Nella procedura di prescrizione la somma da pagare è pari a:",
       [
        "Il doppio del minimo dell'ammenda",
        "Un quarto del massimo dell'ammenda",
        "L'intero massimo",
        "Nulla"
       ],
       1,
       "D.lgs. 758/1994, art. 21."
      ],
      [
       "La Convenzione ILO n. 190 riguarda:",
       [
        "L'orario di lavoro",
        "L'eliminazione della violenza e delle molestie nel mondo del lavoro",
        "Le macchine",
        "La prevenzione incendi"
       ],
       1,
       "Ratificata con L. 4/2021."
      ],
      [
       "La condotta imprudente del lavoratore esclude la responsabilità del datore di lavoro quando:",
       [
        "È sempre sufficiente",
        "Attiva un rischio eccentrico ed esorbitante rispetto all’area di rischio governata dal garante",
        "Il lavoratore è esperto",
        "L’infortunio è lieve"
       ],
       1,
       "Cass. pen., Sez. IV, n. 10460/2025."
      ],
      [
       "L’affiancamento informale a un collega esperto:",
       [
        "Sostituisce la formazione specifica",
        "Non sostituisce formazione, informazione e addestramento",
        "È vietato",
        "Sostituisce l’addestramento ma non la formazione"
       ],
       1,
       "Cass. pen., Sez. IV, n. 22843/2025."
      ]
     ],
     "nar": "Verifica intermedia del terzo modulo: occorrono almeno quattro risposte corrette su cinque.",
     "p": 1.5
    }
   ]
  },
  {
   "id": "M4",
   "titolo": "Organi di vigilanza, controllo e assistenza",
   "min": 35,
   "foto": "chi",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 4",
     "sott": "Organi di vigilanza, controllo e assistenza",
     "nar": "Modulo quattro. Il modulo esamina gli organi preposti alla vigilanza sull'applicazione delle norme di sicurezza e i soggetti che svolgono attività di assistenza a imprese e lavoratori.",
     "p": 0.6
    },
    {
     "t": "figure",
     "tit": "Organi di vigilanza e soggetti di assistenza",
     "sott": "Art. 13 D.lgs. 81/2008 e altre norme · Consultare ciascun ente",
     "voci": [
      [
       "FaHospital",
       "ASL – Servizi di prevenzione",
       "Vigilanza sull'applicazione della legislazione in materia di salute e sicurezza nei luoghi di lavoro (art. 13, c. 1): ispezioni, prescrizioni, inchieste infortuni, pareri."
      ],
      [
       "FaScaleBalanced",
       "Ispettorato nazionale del lavoro",
       "Vigilanza in materia di salute e sicurezza, con competenze estese a tutti i settori in coordinamento con le ASL; vigilanza sul lavoro irregolare e provvedimenti di sospensione (art. 14)."
      ],
      [
       "FaFire",
       "Vigili del fuoco",
       "Vigilanza sull'applicazione della normativa di prevenzione incendi, controlli e pareri sulle attività soggette."
      ],
      [
       "FaUmbrella",
       "INAIL",
       "Assicurazione obbligatoria contro infortuni e malattie professionali, prestazioni, ricerca, prevenzione, incentivi e assistenza alle imprese."
      ],
      [
       "FaHandshake",
       "Organismi paritetici (art. 51)",
       "Costituiti dalle associazioni dei datori di lavoro e dei lavoratori: supporto alle imprese, formazione, buone prassi, asseverazione dei modelli organizzativi."
      ],
      [
       "FaBuildingColumns",
       "Regioni e Comitati",
       "Programmazione e coordinamento delle attività di prevenzione; Comitato regionale di coordinamento (art. 7) e Commissione consultiva permanente (art. 6)."
      ]
     ],
     "nar": "L'articolo 13 affida la vigilanza sull'applicazione della normativa in materia di salute e sicurezza principalmente alle aziende sanitarie locali, mediante i rispettivi servizi di prevenzione. L'Ispettorato nazionale del lavoro esercita competenze in materia di sicurezza in tutti i settori, in coordinamento con le ASL, e vigila sul lavoro irregolare. I Vigili del fuoco vigilano in materia di prevenzione incendi. L'INAIL gestisce l'assicurazione obbligatoria e svolge attività di prevenzione, ricerca e sostegno alle imprese. Gli organismi paritetici, costituiti dalle associazioni dei datori di lavoro e dei lavoratori, supportano le imprese nella formazione e nell'individuazione di buone prassi. Le Regioni programmano e coordinano la prevenzione. Il ruolo di ciascun ente è approfondito nella relativa scheda.",
     "p": 2
    },
    {
     "t": "testo",
     "tit": "Funzioni e poteri dell'organo di vigilanza",
     "lead": "Gli ispettori delle ASL e dell'Ispettorato del lavoro operano con la qualifica di ufficiali di polizia giudiziaria.",
     "punti": [
      "Accedono ai luoghi di lavoro in qualsiasi momento, anche senza preavviso",
      "Esaminano documenti (DVR, nomine, attestati di formazione, verbali, registri) e ascoltano lavoratori e RLS",
      "Impartiscono prescrizioni e disposizioni e riferiscono all'autorità giudiziaria",
      "Svolgono inchieste sugli infortuni e sulle malattie professionali",
      "Forniscono anche informazione e assistenza a imprese e lavoratori, al di fuori dell'attività di vigilanza"
     ],
     "nar": "Il personale ispettivo degli organi di vigilanza riveste la qualifica di ufficiale di polizia giudiziaria. Può accedere ai luoghi di lavoro in qualsiasi momento, anche senza preavviso, esaminare la documentazione, quale il DVR, le nomine e gli attestati di formazione, e assumere informazioni dai lavoratori e dal loro rappresentante. Impartisce prescrizioni, svolge le inchieste sugli infortuni e riferisce all'autorità giudiziaria. Le ASL svolgono inoltre attività di informazione e assistenza a favore di imprese e lavoratori. Nel corso dell'ispezione è doveroso collaborare e fornire informazioni veritiere.",
     "p": 1.5
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Diagramma · La prescrizione dell’organo di vigilanza",
     "rif": "D.lgs. 758/1994, artt. 20–24",
     "lead": "Selezionare ciascuna fase della procedura di estinzione delle contravvenzioni in materia di sicurezza.",
     "grafico": {
      "tipo": "flusso",
      "passi": [
       {
        "nome": "Accertamento",
        "tempo": null,
        "testo": "L’organo di vigilanza accerta una contravvenzione e ne dà notizia al pubblico ministero."
       },
       {
        "nome": "Prescrizione",
        "tempo": "termine tecnicamente necessario",
        "testo": "Impartisce una prescrizione per eliminare la violazione, con un termine prorogabile una volta, su richiesta motivata, fino a sei mesi."
       },
       {
        "nome": "Verifica",
        "tempo": "entro 60 giorni",
        "testo": "Entro sessanta giorni dalla scadenza del termine verifica l’adempimento."
       },
       {
        "nome": "Pagamento",
        "tempo": "entro 30 giorni",
        "testo": "Il contravventore è ammesso a pagare un quarto del massimo dell’ammenda."
       },
       {
        "nome": "Estinzione",
        "tempo": null,
        "testo": "Adempimento e pagamento estinguono la contravvenzione; l’esito è comunicato al pubblico ministero."
       }
      ]
     },
     "nar": "Diagramma interattivo. Si selezioni ciascuna fase della procedura con cui le contravvenzioni in materia di salute e sicurezza possono estinguersi: accertamento, prescrizione, verifica, pagamento ed estinzione.",
     "est": true,
     "ancora": "Funzioni e poteri dell'organo di vigilanza"
    },
    {
     "t": "testo",
     "tit": "Il provvedimento di sospensione dell'attività",
     "rif": "Art. 14 D.lgs. 81/2008",
     "lead": "Misura cautelare finalizzata al contrasto del lavoro irregolare e delle violazioni gravi in materia di salute e sicurezza (art. 14 D.lgs. 81/2008).",
     "punti": [
      "Presupposti: lavoratori non risultanti dalla documentazione obbligatoria in misura pari o superiore alla soglia di legge, oppure gravi violazioni in materia di sicurezza individuate dall'Allegato I",
      "Riguarda la parte dell'attività interessata dalle violazioni",
      "Durante la sospensione l'impresa non può contrattare con la pubblica amministrazione",
      "Revoca: regolarizzazione dei lavoratori, ripristino delle condizioni di sicurezza e pagamento di una somma aggiuntiva",
      "Esempi di gravi violazioni (Allegato I): mancata elaborazione del DVR, mancata formazione e addestramento, mancata fornitura dei DPI contro le cadute dall'alto, mancata protezione contro il rischio di seppellimento o di elettrocuzione"
     ],
     "nar": "L'articolo 14 disciplina il provvedimento di sospensione dell'attività imprenditoriale. L'Ispettorato del lavoro e, per le materie di competenza, le ASL lo adottano in presenza di lavoratori irregolari oltre la soglia di legge oppure di gravi violazioni in materia di sicurezza, quali la mancata elaborazione del DVR, l'omessa formazione e addestramento o l'assenza di protezioni contro le cadute dall'alto. La sospensione riguarda la parte dell'attività interessata dalle violazioni ed è revocata soltanto a seguito della regolarizzazione, del ripristino delle condizioni di sicurezza e del pagamento di una somma aggiuntiva.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Patente a crediti e novità del D.L. 159/2025",
     "foto": false,
     "lead": "Il sistema dei controlli è stato rafforzato, in particolare nei cantieri, mediante la qualificazione delle imprese e la tracciabilità dei lavoratori.",
     "punti": [
      "Patente a crediti (art. 27, come sostituito dal D.L. 19/2024, conv. L. 56/2024): dal 1° ottobre 2024 imprese e lavoratori autonomi che operano nei cantieri temporanei o mobili devono possederla; si parte da 30 crediti e occorrono almeno 15 crediti per operare",
      "I crediti sono decurtati a seguito di provvedimenti definitivi per violazioni in materia di salute e sicurezza e per infortuni gravi imputabili",
      "Badge di cantiere con codice univoco anticontraffazione (art. 3 D.L. 159/2025): la piena operatività è subordinata al decreto ministeriale attuativo (Circolare INL n. 1/2026)",
      "Fascicolo elettronico del lavoratore: raccoglie i dati della formazione (art. 37, c. 14)",
      "Aggiornamento dell’RLS anche nelle imprese con meno di 15 lavoratori, secondo la contrattazione collettiva (art. 37, c. 11)"
     ],
     "appro": "La patente a crediti è rilasciata in formato digitale dall’Ispettorato Nazionale del Lavoro tramite il portale dedicato; le regole di attribuzione e decurtazione dei crediti sono definite dall’art. 27 e dal D.M. 18 settembre 2024, n. 132. Operare in cantiere senza patente o con meno di 15 crediti comporta una sanzione amministrativa e l’esclusione dalla partecipazione ai lavori pubblici per sei mesi.",
     "rif": "Art. 27 D.lgs. 81/2008 · D.L. 19/2024 conv. L. 56/2024 · D.M. 132/2024 · D.L. 159/2025 conv. L. 198/2025 · Circolare INL n. 1/2026",
     "nar": "Il sistema dei controlli è stato rafforzato negli ultimi anni. Dal primo ottobre 2024 le imprese e i lavoratori autonomi che operano nei cantieri devono essere in possesso della patente a crediti: il punteggio iniziale è di trenta crediti e ne occorrono almeno quindici per operare; i crediti sono decurtati a seguito di violazioni definitivamente accertate o di infortuni gravi. Il decreto-legge 159 del 2025 ha introdotto il badge di cantiere con codice anticontraffazione, la cui piena operatività è subordinata al decreto attuativo, e il fascicolo elettronico del lavoratore, che raccoglie la formazione svolta.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Gli organismi paritetici e il sistema di assistenza",
     "rif": "Art. 51 D.lgs. 81/2008 · Art. 2, c. 1, lett. ee)",
     "punti": [
      "Sono costituiti a iniziativa di una o più associazioni dei datori e dei prestatori di lavoro comparativamente più rappresentative sul piano nazionale",
      "Sono sede privilegiata per la programmazione della formazione, l'elaborazione e la raccolta di buone prassi, il supporto alle imprese",
      "Possono effettuare sopralluoghi nei luoghi di lavoro per le finalità di supporto e rilasciare l'asseverazione dell'adozione dei modelli organizzativi",
      "La formazione dei lavoratori è svolta in collaborazione con gli organismi paritetici, ove presenti nel settore e nel territorio (art. 37, c. 12)",
      "Comunicano annualmente all'INAIL i dati delle imprese aderenti e dei RLST"
     ],
     "nar": "Alla vigilanza si affianca l'assistenza. Gli organismi paritetici sono costituiti dalle associazioni dei datori di lavoro e dei lavoratori comparativamente più rappresentative. Costituiscono la sede privilegiata per la programmazione della formazione, la raccolta delle buone prassi e il sostegno alle imprese; possono effettuare sopralluoghi di supporto e asseverare l'adozione dei modelli organizzativi. La formazione dei lavoratori si svolge in collaborazione con gli organismi paritetici, ove presenti nel settore e nel territorio.",
     "p": 1.2
    },
    {
     "t": "testo",
     "tit": "Norme tecniche, buone prassi e linee guida",
     "rif": "Art. 2, c. 1, lett. u), v), z)",
     "punti": [
      "Norma tecnica: specifica tecnica approvata e pubblicata da un organismo di normalizzazione internazionale, europeo o nazionale, la cui osservanza non è obbligatoria (UNI, EN, ISO)",
      "Buone prassi: soluzioni organizzative o procedurali coerenti con la normativa e con le norme di buona tecnica, adottate volontariamente, validate dalla Commissione consultiva permanente",
      "Linee guida: atti di indirizzo e coordinamento per l'applicazione della normativa, predisposti da ministeri, regioni, INAIL e approvati in Conferenza Stato-Regioni",
      "Responsabilità sociale delle imprese (lett. ff): integrazione volontaria delle preoccupazioni sociali e ambientali nelle attività commerciali e nei rapporti con le parti interessate"
     ],
     "nar": "Il modulo si conclude con gli strumenti di riferimento definiti dall'articolo 2. La norma tecnica, ad esempio una norma UNI o ISO, è una specifica tecnica approvata da un organismo di normalizzazione: la sua osservanza non è obbligatoria, ma esprime lo stato dell'arte. Le buone prassi sono soluzioni organizzative o procedurali adottate volontariamente e validate dalla Commissione consultiva permanente. Le linee guida sono atti di indirizzo approvati in sede di Conferenza Stato-Regioni. La responsabilità sociale delle imprese consiste nell'integrazione volontaria delle preoccupazioni sociali e ambientali nelle attività aziendali.",
     "p": 1.2
    },
    {
     "t": "abbina",
     "tit": "Esercitazione 8 · Attribuzione delle competenze agli enti",
     "sott": "Associare a ciascun ente la funzione principale",
     "coppie": [
      [
       "ASL – Servizio di prevenzione",
       "Vigilanza sull'applicazione delle norme di salute e sicurezza"
      ],
      [
       "Vigili del fuoco",
       "Vigilanza sulla prevenzione incendi"
      ],
      [
       "INAIL",
       "Assicurazione obbligatoria contro infortuni e malattie professionali"
      ],
      [
       "Organismi paritetici",
       "Supporto alle imprese e collaborazione nella formazione"
      ],
      [
       "Ispettorato del lavoro",
       "Sospensione dell'attività per lavoro irregolare o gravi violazioni"
      ]
     ],
     "nar": "Ottava esercitazione. A ciascun ente va associata la rispettiva funzione principale; completati gli abbinamenti, si preme Verifica.",
     "p": 1.3
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del modulo 4 e del corso",
     "voci": [
      "La vigilanza spetta principalmente alle ASL, con l'Ispettorato del lavoro e i Vigili del fuoco per le rispettive competenze",
      "Gli ispettori sono ufficiali di polizia giudiziaria e possono accedere senza preavviso",
      "L'art. 14 consente di sospendere l'attività in caso di lavoro irregolare o gravi violazioni",
      "INAIL e organismi paritetici assistono imprese e lavoratori",
      "La formazione generale è un credito permanente: ora prosegue con la formazione specifica sui rischi della tua mansione"
     ],
     "nar": "Il corso volge al termine. La vigilanza spetta principalmente alle ASL, unitamente all'Ispettorato del lavoro e ai Vigili del fuoco per le rispettive competenze. Il personale ispettivo può accedere ai luoghi di lavoro in qualsiasi momento. L'articolo 14 consente la sospensione dell'attività in caso di lavoro irregolare o di gravi violazioni. INAIL e organismi paritetici assistono imprese e lavoratori. La formazione generale completata costituisce credito formativo permanente; il percorso prosegue con la formazione specifica sui rischi propri della mansione. Segue il test finale.",
     "p": 1.2
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 4",
     "soglia": 5,
     "domande": [
      [
       "Chi svolge principalmente la vigilanza sull'applicazione delle norme di sicurezza (art. 13)?",
       [
        "Il Comune",
        "L'ASL, con i propri servizi di prevenzione",
        "La Camera di commercio",
        "L'Agenzia delle entrate"
       ],
       1,
       "Art. 13, c. 1."
      ],
      [
       "Gli ispettori possono accedere ai luoghi di lavoro:",
       [
        "Solo con preavviso di 7 giorni",
        "In qualsiasi momento, anche senza preavviso",
        "Solo su richiesta del datore di lavoro",
        "Solo dopo un infortunio"
       ],
       1,
       "Sono ufficiali di polizia giudiziaria."
      ],
      [
       "Il provvedimento di sospensione dell'attività è previsto da:",
       [
        "Art. 14 D.lgs. 81/2008",
        "Art. 2087 c.c.",
        "Art. 44 D.lgs. 81/2008",
        "D.M. 388/2003"
       ],
       0,
       "Art. 14 D.lgs. 81/2008."
      ],
      [
       "L'osservanza di una norma tecnica UNI o ISO è:",
       [
        "Sempre obbligatoria",
        "Non obbligatoria, salvo richiamo di legge, ma rappresenta lo stato dell'arte",
        "Vietata",
        "Obbligatoria solo per il lavoratore"
       ],
       1,
       "Art. 2, c. 1, lett. u)."
      ],
      [
       "Gli organismi paritetici sono costituiti da:",
       [
        "L'INAIL",
        "Associazioni dei datori di lavoro e dei lavoratori comparativamente più rappresentative",
        "Le ASL",
        "I Comuni"
       ],
       1,
       "Art. 2, c. 1, lett. ee) e art. 51."
      ],
      [
       "Per operare nei cantieri temporanei o mobili, la patente a crediti richiede un punteggio minimo di:",
       [
        "5 crediti",
        "15 crediti",
        "30 crediti",
        "50 crediti"
       ],
       1,
       "Art. 27 D.lgs. 81/2008: si parte da 30 crediti, minimo 15 per operare."
      ],
      [
       "I dati sulla formazione del lavoratore sono registrati nel:",
       [
        "Libretto sanitario",
        "Fascicolo elettronico del lavoratore",
        "Registro infortuni",
        "DUVRI"
       ],
       1,
       "Art. 37, c. 14, come modificato dal D.L. 159/2025."
      ]
     ],
     "nar": "Ultima verifica intermedia: occorrono almeno quattro risposte corrette su cinque. Superata la verifica, è possibile accedere al test finale.",
     "p": 1.5
    }
   ]
  }
 ],
 "testFinale": {
  "domande": 30,
  "soglia": 70,
  "tentativi": 3,
  "banca": [
   [
    "Che cosa si intende per «pericolo»?",
    [
     "La probabilità che si verifichi un danno",
     "La proprietà o qualità intrinseca di un determinato fattore avente il potenziale di causare danni",
     "Il danno effettivamente subito",
     "La misura adottata per ridurre il rischio"
    ],
    1
   ],
   [
    "Come si stima il rischio?",
    [
     "Sommando probabilità e gravità",
     "Combinando la probabilità e la gravità del danno (R = P × D)",
     "Contando gli infortuni dell'anno precedente",
     "Valutando solo la gravità del danno"
    ],
    1
   ],
   [
    "Secondo l'art. 15, qual è la prima misura da adottare?",
    [
     "Fornire i DPI",
     "Eliminare il rischio e, ove non possibile, ridurlo al minimo",
     "Affiggere la segnaletica",
     "Effettuare le visite mediche"
    ],
    1
   ],
   [
    "I dispositivi di protezione individuale si utilizzano:",
    [
     "Sempre, al posto delle protezioni collettive",
     "Quando i rischi non possono essere evitati o sufficientemente ridotti con misure tecniche, collettive od organizzative",
     "Solo durante le ispezioni",
     "Solo su richiesta del lavoratore"
    ],
    1
   ],
   [
    "Qual è la differenza tra infortunio e malattia professionale?",
    [
     "Nessuna",
     "L'infortunio deriva da una causa violenta, la malattia professionale da un'esposizione prolungata",
     "La malattia professionale avviene solo fuori dal lavoro",
     "L'infortunio riguarda solo i dirigenti"
    ],
    1
   ],
   [
    "Un mancato infortunio (near miss) deve essere:",
    [
     "Ignorato, perché non ha causato danni",
     "Segnalato, per eliminare le cause prima che accada un infortunio",
     "Comunicato solo all'INAIL",
     "Registrato solo se ci sono testimoni"
    ],
    1
   ],
   [
    "Quali sono gli obblighi non delegabili del datore di lavoro?",
    [
     "La fornitura dei DPI e la formazione",
     "La valutazione dei rischi con elaborazione del DVR e la designazione dell'RSPP",
     "La nomina del medico competente",
     "La gestione delle emergenze"
    ],
    1
   ],
   [
    "Chi sovrintende all'attività lavorativa e ne controlla la corretta esecuzione?",
    [
     "Il medico competente",
     "Il preposto",
     "L'RLS",
     "L'addetto antincendio"
    ],
    1
   ],
   [
    "Il rappresentante dei lavoratori per la sicurezza è:",
    [
     "Nominato dall'organo di vigilanza",
     "Eletto o designato per rappresentare i lavoratori sugli aspetti di salute e sicurezza",
     "Il sostituto del datore di lavoro",
     "Il medico che effettua le visite"
    ],
    1
   ],
   [
    "Chi effettua la sorveglianza sanitaria?",
    [
     "L'RSPP",
     "Il medico competente",
     "Il preposto",
     "L'RLS"
    ],
    1
   ],
   [
    "Un segnale rotondo con bordo e barra rossi indica:",
    [
     "Un obbligo",
     "Un divieto",
     "Una via di fuga",
     "Un'attrezzatura antincendio"
    ],
    1
   ],
   [
    "Un segnale quadrato con fondo verde indica:",
    [
     "Un divieto",
     "Un pericolo",
     "Salvataggio o soccorso",
     "Un obbligo"
    ],
    2
   ],
   [
    "Un segnale triangolare giallo con bordo nero indica:",
    [
     "Un obbligo",
     "Un avvertimento di pericolo",
     "Un'uscita di emergenza",
     "Un estintore"
    ],
    1
   ],
   [
    "Quale tra questi è un obbligo del lavoratore (art. 20)?",
    [
     "Redigere il DVR",
     "Segnalare immediatamente le deficienze dei mezzi e le condizioni di pericolo",
     "Nominare il medico competente",
     "Scegliere i DPI da acquistare"
    ],
    1
   ],
   [
    "Il lavoratore può rimuovere un dispositivo di sicurezza se rallenta il lavoro?",
    [
     "Sì, se lo autorizza un collega",
     "No, non può rimuoverlo né modificarlo senza autorizzazione",
     "Sì, se è esperto",
     "Sì, durante gli straordinari"
    ],
    1
   ],
   [
    "In caso di pericolo grave, immediato e inevitabile il lavoratore:",
    [
     "Deve restare al proprio posto",
     "Può allontanarsi senza subire pregiudizio",
     "Deve chiedere il permesso scritto",
     "Deve attendere l'organo di vigilanza"
    ],
    1
   ],
   [
    "Il lavoratore può essere sanzionato se non rispetta i propri obblighi?",
    [
     "No, mai",
     "Sì, l'art. 59 prevede sanzioni anche per i lavoratori",
     "Solo se è un dirigente",
     "Solo se lavora in un cantiere"
    ],
    1
   ],
   [
    "Quale ente svolge principalmente la vigilanza sull'applicazione delle norme di sicurezza?",
    [
     "L'Agenzia delle entrate",
     "Il servizio di prevenzione dell'ASL",
     "Il Comune",
     "La Camera di commercio"
    ],
    1
   ],
   [
    "Che cosa prevede la procedura di prescrizione del D.lgs. 758/1994?",
    [
     "La chiusura immediata dell'azienda",
     "Un termine per regolarizzare e l'estinzione del reato con il pagamento in misura ridotta",
     "Il licenziamento del preposto",
     "L'annullamento della formazione"
    ],
    1
   ],
   [
    "La Convenzione ILO n. 190 riguarda:",
    [
     "Il rischio chimico",
     "L'eliminazione della violenza e delle molestie nel mondo del lavoro",
     "La segnaletica stradale",
     "Le macchine"
    ],
    1
   ],
   [
    "La delega di funzioni (art. 16) richiede:",
    [
     "Un accordo verbale",
     "Atto scritto con data certa, requisiti del delegato, poteri, autonomia di spesa e accettazione scritta",
     "L'autorizzazione dell'INAIL",
     "Il parere del medico competente"
    ],
    1
   ],
   [
    "Il preposto, se l'inosservanza del lavoratore persiste, deve:",
    [
     "Ignorarla",
     "Interrompere l'attività del lavoratore e informare i superiori diretti",
     "Sanzionarlo con una multa",
     "Sostituirsi al lavoratore"
    ],
    1
   ],
   [
    "La riunione periodica (art. 35) è obbligatoria nelle aziende con:",
    [
     "Più di 5 lavoratori",
     "Più di 15 lavoratori",
     "Più di 50 lavoratori",
     "Più di 200 lavoratori"
    ],
    1
   ],
   [
    "Contro il giudizio di idoneità del medico competente è ammesso ricorso:",
    [
     "Al datore di lavoro entro 10 giorni",
     "All'organo di vigilanza territorialmente competente entro 30 giorni",
     "Al giudice di pace entro 1 anno",
     "Non è ammesso ricorso"
    ],
    1
   ],
   [
    "La formazione dei lavoratori si svolge:",
    [
     "Fuori dall'orario di lavoro e a spese del lavoratore",
     "Durante l'orario di lavoro e senza oneri per i lavoratori",
     "Solo su richiesta del lavoratore",
     "Solo dopo un infortunio"
    ],
    1
   ],
   [
    "L'aggiornamento della formazione dei lavoratori (Accordo 2025) è di:",
    [
     "2 ore ogni anno",
     "6 ore ogni 5 anni",
     "12 ore ogni 3 anni",
     "Non è previsto"
    ],
    1
   ],
   [
    "Le misure di sicurezza possono comportare costi a carico dei lavoratori?",
    [
     "Sì, per i DPI",
     "No, in nessun caso (art. 15, c. 2)",
     "Sì, per la formazione",
     "Solo per i lavoratori autonomi"
    ],
    1
   ],
   [
    "La definizione di salute del D.lgs. 81/2008 è:",
    [
     "Assenza di malattia",
     "Stato di completo benessere fisico, mentale e sociale, non consistente solo in un'assenza di malattia o d'infermità",
     "Idoneità alla mansione",
     "Assenza di infortuni"
    ],
    1
   ],
   [
    "L'addestramento consiste in:",
    [
     "Un opuscolo informativo",
     "Attività dirette a far apprendere l'uso corretto di attrezzature, macchine, sostanze, DPI e procedure di lavoro",
     "Una riunione sindacale",
     "La visita medica"
    ],
    1
   ],
   [
    "Nelle aziende fino a 200 lavoratori il numero minimo di RLS è:",
    [
     "Nessuno",
     "1",
     "3",
     "6"
    ],
    1
   ],
   [
    "Nel 2025 i casi mortali denunciati all’INAIL sono stati circa:",
    [
     "120",
     "600",
     "1.200",
     "12.000"
    ],
    2,
    "1.198 casi (Relazione annuale INAIL 2025)."
   ],
   [
    "L’infortunio in itinere è quello che avviene:",
    [
     "Durante una trasferta all’estero",
     "Nel normale percorso di andata e ritorno tra abitazione e luogo di lavoro",
     "Durante la pausa pranzo in azienda",
     "Solo con mezzi aziendali"
    ],
    1,
    "Art. 2, c. 3, D.P.R. 1124/1965."
   ],
   [
    "La comunicazione all’INAIL a fini statistici riguarda gli infortuni che comportano un’assenza di almeno:",
    [
     "Un giorno, escluso quello dell’evento",
     "Tre giorni",
     "Sette giorni",
     "Trenta giorni"
    ],
    0,
    "Art. 18, c. 1, lett. r)."
   ],
   [
    "La formazione generale dei lavoratori:",
    [
     "Va ripetuta ogni anno",
     "Costituisce credito formativo permanente",
     "Vale solo nel settore in cui è svolta",
     "È facoltativa"
    ],
    1,
    "Accordo Stato-Regioni 17/04/2025."
   ],
   [
    "Per i lavoratori stranieri, prima della formazione, occorre:",
    [
     "Tradurre il DVR",
     "Verificare la comprensione della lingua veicolare",
     "Ottenere il nulla osta dell’ASL",
     "Nulla di particolare"
    ],
    1,
    "Art. 37, c. 13."
   ],
   [
    "La verifica di efficacia della formazione spetta:",
    [
     "Al docente",
     "Al datore di lavoro, durante lo svolgimento dell’attività lavorativa",
     "All’INAIL",
     "Al lavoratore"
    ],
    1,
    "Accordo Stato-Regioni 17/04/2025."
   ],
   [
    "Una prassi scorretta tollerata in azienda:",
    [
     "Esonera il datore di lavoro",
     "Non esonera il garante, che doveva impedirla",
     "Diventa una procedura valida",
     "Riguarda solo il lavoratore"
    ],
    1,
    "Cass. pen., Sez. IV, n. 10460/2025."
   ],
   [
    "Il preposto che rileva comportamenti non conformi e persistenti:",
    [
     "Non può intervenire",
     "Interrompe l’attività del lavoratore e informa i superiori diretti",
     "Licenzia il lavoratore",
     "Informa solo l’RLS"
    ],
    1,
    "Art. 19, c. 1, lett. a)."
   ],
   [
    "La patente a crediti è richiesta a:",
    [
     "Tutte le imprese industriali",
     "Imprese e lavoratori autonomi che operano nei cantieri temporanei o mobili",
     "Solo agli uffici",
     "Solo alle imprese pubbliche"
    ],
    1,
    "Art. 27 D.lgs. 81/2008."
   ],
   [
    "Il principio di effettività (art. 299) stabilisce che:",
    [
     "Conta solo la nomina formale",
     "Le posizioni di garanzia gravano anche su chi esercita in concreto i poteri",
     "Il preposto non ha responsabilità",
     "Il dirigente è sempre esonerato"
    ],
    1,
    "Art. 299 D.lgs. 81/2008."
   ],
   [
    "Il diritto di allontanarsi dal posto di lavoro in caso di pericolo grave, immediato e inevitabile è previsto:",
    [
     "Dall’art. 44",
     "Dall’art. 2087 c.c. soltanto",
     "Dal CCNL",
     "Non è previsto"
    ],
    0,
    "Art. 44 D.lgs. 81/2008."
   ],
   [
    "Il dato statistico sugli infortuni dei lavoratori nati all’estero (24,3% nel 2025) sottolinea l’importanza:",
    [
     "Della sorveglianza sanitaria",
     "Della verifica della comprensione della lingua nella formazione",
     "Del badge di cantiere",
     "Dei DPI di terza categoria"
    ],
    1,
    "Art. 37, c. 13."
   ],
   [
    "Il «mancato infortunio» (near miss) è:",
    [
     "Un infortunio non denunciato",
     "Un evento che avrebbe potuto causare un danno ma non lo ha causato",
     "Un infortunio in itinere",
     "Una malattia professionale"
    ],
    1,
    "È la base della piramide degli eventi e va analizzato."
   ],
   [
    "Il badge di cantiere con codice anticontraffazione è stato introdotto da:",
    [
     "D.lgs. 106/2009",
     "D.L. 159/2025",
     "L. 215/2021",
     "D.P.R. 177/2011"
    ],
    1,
    "Art. 3 D.L. 159/2025, conv. L. 198/2025."
   ]
  ]
 }
};
