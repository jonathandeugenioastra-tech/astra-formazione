/* Corso – RSPP e ASPP · Modulo B comune a tutti i settori (48 ore)
   Art. 32 D.lgs. 81/2008 · Accordo Stato-Regioni 17/04/2025, Parte II, punto 5.3 (UD1-UD12)
   Erogazione in presenza o videoconferenza sincrona – non e-learning
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "RSPP-B",
 "titolo": "RSPP e ASPP – Modulo B comune",
 "sottotitolo": "Individuazione e valutazione dei rischi specifici e delle relative misure tecniche, organizzative e procedurali di prevenzione e protezione",
 "ore": 48,
 "rif": "Art. 32 D.lgs. 81/2008 · Accordo Stato-Regioni 17 aprile 2025, Parte II, punto 5.3",
 "soglia": 70,
 "aggiornato": "2026-11",
 "moduli": [
  {
   "id": "M0",
   "titolo": "Introduzione",
   "min": 10,
   "foto": "aziende",
   "schermate": [
    {
     "t": "copertina",
     "tit": "RSPP e ASPP – Modulo B comune",
     "sott": "Corso di 48 ore · aula e videoconferenza sincrona",
     "nar": "Benvenuti al Modulo B comune a tutti i settori. Il modulo, di quarantotto ore, è dedicato alla natura dei rischi presenti nei luoghi di lavoro e alle relative misure. È propedeutico al Modulo C e ai moduli di specializzazione e si conclude con un test e una simulazione.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Applicare tecniche specifiche di valutazione dei rischi e di analisi degli incidenti",
      "Analizzare processi produttivi, ambienti e luoghi di lavoro",
      "Valutare rischio incendio, atmosfere esplosive, rischi infortunistici, ergonomici e psicosociali",
      "Valutare agenti fisici, chimici, cancerogeni, amianto e biologici",
      "Gestire attività particolari e rischi da alcol e sostanze"
     ],
     "nar": "Al termine del modulo saprai applicare le tecniche specifiche di valutazione per ciascuna famiglia di rischio previste dalle dodici unità didattiche dell'Accordo e individuare le misure tecniche, organizzative e procedurali.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "UD1 · Tecniche specifiche di valutazione dei rischi e analisi degli incidenti",
   "min": 300,
   "foto": "sicurezza",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD1",
     "sott": "Tecniche specifiche di valutazione dei rischi e analisi degli incidenti",
     "nar": "Unità didattica uno. Le tecniche di valutazione dei rischi e di analisi degli incidenti.",
     "p": 0.6
    },
    {
     "t": "confronto",
     "tit": "Tecniche di analisi del rischio",
     "rif": "UNI ISO 31000 · IEC 31010 · UNI EN ISO 12100",
     "sx": {
      "ico": "FaMagnifyingGlass",
      "tit": "Tecniche di identificazione",
      "voci": [
       "Check list e sopralluoghi strutturati",
       "Analisi per mansione e per fase (job safety analysis)",
       "What-if e brainstorming strutturato",
       "HAZOP per i processi",
       "UNI EN ISO 12100 per le macchine"
      ]
     },
     "dx": {
      "ico": "FaChartLine",
      "tit": "Tecniche di stima",
      "voci": [
       "Matrici P × D con criteri espliciti",
       "Indici specifici (NIOSH, OCRA, indici chimici)",
       "Albero dei guasti e albero degli eventi",
       "Analisi delle barriere (bow-tie)",
       "Misurazioni strumentali secondo norma"
      ]
     },
     "nar": "La valutazione utilizza tecniche di identificazione, come check list, analisi per mansione, what-if e HAZOP, e tecniche di stima, come le matrici, gli indici specifici, gli alberi dei guasti e degli eventi e l'analisi delle barriere. Le norme UNI ISO 31000 e IEC 31010 offrono il quadro di riferimento generale.",
     "p": 1.6
    },
    {
     "t": "processo",
     "tit": "L'analisi di un infortunio o di un quasi incidente",
     "rif": "Art. 18, c. 1, lett. r) D.lgs. 81/2008 · modello Infor.MO (INAIL)",
     "passi": [
      [
       "Raccolta",
       "Sopralluogo, testimonianze, documenti, foto, condizioni ambientali"
      ],
      [
       "Ricostruzione",
       "Sequenza degli eventi e attività al momento dell'evento"
      ],
      [
       "Cause",
       "Fattori tecnici, organizzativi, ambientali, comportamentali; albero delle cause"
      ],
      [
       "Misure",
       "Azioni correttive sulle cause profonde, non sul solo comportamento"
      ],
      [
       "Restituzione",
       "Comunicazione ai lavoratori, aggiornamento del DVR, verifica dell'efficacia"
      ]
     ],
     "nar": "L'analisi di un evento parte dalla raccolta dei fatti, ricostruisce la sequenza, individua le cause tecniche, organizzative, ambientali e comportamentali con strumenti come l'albero delle cause o il modello Infor.MO, definisce azioni correttive sulle cause profonde e restituisce i risultati ai lavoratori.",
     "p": 1.5
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Analisi delle cause",
     "scena": "Un magazziniere cade da uno scaffale su cui era salito per prelevare un collo. La scala a castello del reparto era fuori servizio da due settimane; la segnalazione era stata fatta al preposto.",
     "domanda": "Qual è la conclusione corretta dell'analisi?",
     "opz": [
      [
       "Errore del lavoratore: va richiamato",
       false,
       "No: ci si ferma al comportamento senza indagare le cause."
      ],
      [
       "Cause concorrenti: attrezzatura indisponibile, segnalazione non gestita, pressione sui tempi; azioni su manutenzione, gestione delle segnalazioni e vigilanza del preposto",
       true,
       "Corretto: si agisce sulle cause organizzative."
      ],
      [
       "Evento imprevedibile",
       false,
       "No: la condizione era nota."
      ]
     ],
     "nar": "Esercitazione. Una caduta da uno scaffale: individua le cause profonde.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Il processo di gestione del rischio (UNI ISO 31000)",
     "foto": false,
     "lead": "La valutazione dei rischi dell’art. 28 si inserisce in un processo più ampio di gestione del rischio, descritto dalla UNI ISO 31000 e supportato dalle tecniche della IEC 31010.",
     "punti": [
      "Definizione del contesto e dei criteri: obiettivi, parti interessate, criteri di accettabilità",
      "Identificazione dei pericoli e delle situazioni pericolose",
      "Analisi: cause, conseguenze, probabilità, efficacia delle misure esistenti",
      "Ponderazione: confronto con i criteri e definizione delle priorità",
      "Trattamento, monitoraggio e riesame, comunicazione e consultazione lungo tutto il processo"
     ],
     "appro": "L’art. 28, c. 2, lett. a) richiede che il DVR specifichi i criteri adottati per la valutazione, che devono essere semplici, brevi e comprensibili. Esplicitare i criteri (scale di probabilità e di danno, soglie di accettabilità, tempi di intervento per classe) rende la valutazione ripetibile, verificabile e confrontabile nel tempo. La UNI EN ISO 45001 (punto 6.1.2) richiede metodi proattivi di identificazione dei pericoli e di valutazione dei rischi.",
     "rif": "Art. 28 D.lgs. 81/2008 · UNI ISO 31000:2018 · IEC 31010:2019 · UNI EN ISO 45001:2023",
     "nar": "La valutazione dei rischi si inserisce nel processo di gestione del rischio descritto dalla norma UNI ISO 31000: si definiscono il contesto e i criteri, si identificano i pericoli, si analizzano cause, conseguenze e probabilità, si ponderano i risultati per stabilire le priorità, si trattano i rischi e si monitora. Il DVR deve rendere espliciti i criteri adottati: è ciò che rende la valutazione ripetibile e verificabile.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Matrici di rischio: criteri espliciti e limiti del metodo",
     "foto": false,
     "lead": "La matrice probabilità × danno è lo strumento più diffuso, ma è affidabile solo se le scale sono definite con criteri osservabili.",
     "punti": [
      "Probabilità: definita con criteri verificabili (eventi già accaduti, quasi incidenti, frequenza dell’esposizione, efficacia delle barriere), non con aggettivi",
      "Danno: definito sulla natura e reversibilità degli effetti (lesione reversibile in pochi giorni, inabilità temporanea, invalidità permanente, decesso)",
      "Il prodotto di scale ordinali non è una misura: due rischi con lo stesso indice possono richiedere priorità diverse (ad esempio P = 4, D = 1 e P = 1, D = 4)",
      "Regola prudente: a parità di indice, priorità al danno più grave e irreversibile",
      "Per i rischi normati (rumore, vibrazioni, chimico, MMC, ROA, CEM) la stima segue i metodi e i valori di riferimento di legge e delle norme tecniche, non la matrice generica"
     ],
     "appro": "La letteratura scientifica sui metodi di analisi del rischio ha evidenziato i limiti delle matrici: compressione dell’informazione, ambiguità nella classificazione di eventi a bassa probabilità e alta gravità, rischio di attribuire la stessa priorità a situazioni diverse. Il valutatore compensa questi limiti dichiarando i criteri, motivando le attribuzioni e trattando separatamente i rischi con conseguenze catastrofiche.",
     "rif": "Art. 28, c. 2, lett. a) D.lgs. 81/2008 · IEC 31010:2019, tecnica B.10",
     "nar": "La matrice probabilità per danno funziona solo se le scale sono definite con criteri osservabili: per la probabilità, eventi accaduti, quasi incidenti, frequenza dell’esposizione; per il danno, la natura e la reversibilità degli effetti. Attenzione al limite principale: moltiplicare scale ordinali non produce una misura. Un rischio frequente e lieve e uno raro ma mortale possono avere lo stesso indice, ma non la stessa priorità.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: l’albero dei guasti",
     "foto": false,
     "lead": "L’albero dei guasti (Fault Tree Analysis) scompone un evento indesiderato nelle combinazioni di cause che lo producono, collegate da porte logiche.",
     "punti": [
      "Evento di vertice: caduta del carico dal carroponte durante la movimentazione",
      "Porta OR: cedimento dell’accessorio di sollevamento (A) oppure imbracatura errata non rilevata (B)",
      "B è una porta AND: errore di imbracatura (B1) e mancato controllo prima del sollevamento (B2)",
      "Probabilità annue stimate: A = 0,01; B1 = 0,05; B2 = 0,10 → B = 0,05 × 0,10 = 0,005; vertice ≈ 0,01 + 0,005 = 0,015",
      "Lettura: il contributo maggiore viene dall’accessorio; le misure prioritarie sono la verifica trimestrale e lo scarto degli accessori, poi la check list di imbracatura"
     ],
     "appro": "Per eventi rari la probabilità di una porta OR si approssima con la somma, quella di una porta AND con il prodotto, se gli eventi sono indipendenti. L’ipotesi di indipendenza va verificata: un’unica causa comune (ad esempio la mancanza di formazione) può influenzare più eventi di base. L’albero degli eventi (Event Tree Analysis) segue invece la logica opposta: dall’evento iniziatore alle possibili conseguenze in funzione del successo o del fallimento delle barriere.",
     "rif": "IEC 61025 · IEC 31010:2019 · Allegato VI D.lgs. 81/2008",
     "nar": "Vediamo un albero dei guasti. L’evento di vertice è la caduta del carico dal carroponte. Può accadere per cedimento dell’accessorio oppure per un’imbracatura errata non rilevata, che a sua volta richiede due condizioni insieme: l’errore e il mancato controllo. Con le probabilità stimate, il contributo maggiore viene dall’accessorio. L’albero ci dice dove intervenire per primo: verifiche e scarto degli accessori, poi il controllo dell’imbracatura.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Bow-tie: le barriere preventive e mitigative",
     "foto": false,
     "lead": "Il diagramma a farfalla collega le cause di un evento critico alle sue conseguenze e mostra le barriere che lo prevengono e quelle che ne limitano gli effetti.",
     "punti": [
      "Evento critico: contatto tra carrello elevatore e pedone in magazzino",
      "Cause: percorsi non separati, scarsa visibilità agli incroci, velocità eccessiva, distrazione",
      "Barriere preventive: separazione fisica dei percorsi, specchi e sistemi di rilevamento di prossimità, limitatori di velocità, formazione e abilitazione",
      "Barriere mitigative: indumenti ad alta visibilità, primo soccorso, piano di emergenza",
      "Fattori di degrado delle barriere: manutenzione carente dei sistemi di rilevamento, aree di stoccaggio che invadono i percorsi, pressione sui tempi"
     ],
     "appro": "Il bow-tie è utile per comunicare il rischio a direzione e lavoratori e per costruire indicatori: ogni barriera critica deve avere un responsabile, un criterio di efficacia e un controllo periodico. È coerente con la gerarchia delle misure dell’art. 15: le barriere tecniche e collettive sono più affidabili di quelle comportamentali.",
     "rif": "IEC 31010:2019 · art. 15 D.lgs. 81/2008 · Allegato IV, punto 1.4",
     "nar": "Il diagramma a farfalla mette al centro l’evento critico, ad esempio il contatto tra un carrello e un pedone. A sinistra ci sono le cause e le barriere che lo prevengono: separazione dei percorsi, specchi, limitatori di velocità, formazione. A destra le conseguenze e le barriere che le limitano: alta visibilità, primo soccorso. Ogni barriera critica deve avere un responsabile e un controllo periodico, perché le barriere si degradano.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Indicatori infortunistici: frequenza e gravità (UNI 7249)",
     "foto": false,
     "lead": "Per confrontare l’andamento infortunistico nel tempo e con il settore si usano indici normalizzati sulle ore lavorate.",
     "punti": [
      "Indice di frequenza: IF = numero di infortuni × 1.000.000 / ore lavorate",
      "Indice di gravità: IG = giornate di assenza × 1.000 / ore lavorate",
      "Esempio: 3 infortuni, 120 giornate perse, 400.000 ore lavorate in un anno → IF = 7,5; IG = 0,30",
      "Indicatori proattivi: quasi incidenti segnalati, osservazioni di sicurezza, azioni chiuse nei tempi, formazione erogata",
      "Gli indicatori reattivi misurano il passato; quelli proattivi misurano la salute del sistema di prevenzione"
     ],
     "appro": "La UNI 7249:2007 definisce i criteri di calcolo degli indici infortunistici. Con numeri piccoli (poche decine di lavoratori) gli indici annuali oscillano molto: è preferibile osservare medie mobili su più anni e affiancare indicatori proattivi. La UNI EN ISO 45001 (punto 9.1) richiede di stabilire che cosa monitorare e misurare e con quali metodi.",
     "rif": "UNI 7249:2007 · UNI EN ISO 45001:2023, punto 9.1",
     "nar": "Per misurare l’andamento infortunistico si usano due indici. L’indice di frequenza è il numero di infortuni per un milione di ore lavorate; l’indice di gravità è il numero di giornate perse per mille ore lavorate. Con tre infortuni, centoventi giornate perse e quattrocentomila ore, l’indice di frequenza vale sette virgola cinque e quello di gravità zero virgola trenta. Accanto a questi indicatori del passato servono indicatori proattivi, come i quasi incidenti segnalati e le azioni chiuse nei tempi.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Scegliere la tecnica di analisi",
     "scena": "Un’azienda chimica introduce un nuovo reattore discontinuo con riscaldamento, aggiunta di reagenti e scarico in serbatoio. Occorre individuare in modo sistematico le deviazioni di processo che possono causare sovrapressioni o rilasci.",
     "domanda": "Quale tecnica è la più adatta?",
     "opz": [
      [
       "Una check list generica di reparto",
       false,
       "Insufficiente: non esplora sistematicamente le deviazioni dei parametri di processo."
      ],
      [
       "L’analisi HAZOP, con parole guida (più, meno, nessuno, inverso…) applicate ai parametri del processo per ciascun nodo dell’impianto",
       true,
       "Corretto: l’HAZOP (IEC 61882) è la tecnica di riferimento per i processi continui e discontinui."
      ],
      [
       "Il metodo NIOSH",
       false,
       "No: riguarda la movimentazione manuale dei carichi."
      ]
     ],
     "rif": "IEC 61882 · IEC 31010:2019 · Titolo XI D.lgs. 81/2008",
     "appro": "L’HAZOP si svolge in gruppo multidisciplinare (processo, manutenzione, strumentazione, sicurezza) e produce un registro di deviazioni, cause, conseguenze, salvaguardie esistenti e raccomandazioni.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: stimare un rischio con la matrice",
     "foto": false,
     "lead": "La matrice probabilità × danno è uno strumento di priorità, non un calcolo esatto: serve a decidere dove intervenire prima.",
     "punti": [
      "Situazione: taglio di film e reggette con cutter a lama fissa durante il disimballo, più volte al giorno",
      "Probabilità (P): tagli già avvenuti nel reparto, gesto ripetuto e frequente: P = 3 (probabile) su una scala da 1 a 4",
      "Danno (D): lesioni da taglio alle mani, generalmente reversibili: D = 2 (medio) su una scala da 1 a 4",
      "Rischio: R = 3 × 2 = 6, livello rilevante; priorità di intervento a breve termine",
      "Misure: cutter con lama retrattile automatica o di sicurezza, guanti antitaglio di livello adeguato (UNI EN 388), istruzione sul verso di taglio; nuova stima attesa: P = 1, R = 2"
     ],
     "appro": "La riduzione del rischio è più efficace quando agisce sulla probabilità con misure tecniche (attrezzo intrinsecamente sicuro) anziché affidarsi solo ai comportamenti. La stima deve essere ripetuta dopo l’intervento per verificarne l’efficacia: è la logica del miglioramento continuo (art. 28, c. 2, lett. c).",
     "rif": "Art. 28, c. 2 D.lgs. 81/2008 · UNI EN 388",
     "nar": "Facciamo un esempio con la matrice. Il taglio di film e reggette con un cutter tradizionale avviene più volte al giorno e ha già causato piccoli tagli: la probabilità è tre su quattro. Il danno è una lesione alle mani generalmente reversibile: due su quattro. Il rischio vale sei, quindi l’intervento va programmato a breve. La misura più efficace è tecnica: un cutter con lama retrattile automatica. Dopo l’intervento la probabilità scende a uno e il rischio a due.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: l’analisi di un quasi incidente",
     "foto": false,
     "lead": "Un collo cade da uno scaffale e sfiora un addetto. Nessuno si fa male: è il momento migliore per capire perché è successo e intervenire.",
     "punti": [
      "Perché è caduto il collo? Era appoggiato in bilico sul bordo del ripiano",
      "Perché era in bilico? Il ripiano era pieno e il collo è stato aggiunto in sporgenza",
      "Perché il ripiano era pieno? Gli spazi di stoccaggio non sono dimensionati sui picchi di arrivo della merce",
      "Perché non è stato segnalato prima? Non esiste un canale semplice per segnalare le anomalie senza timore di rimprovero",
      "Azioni: riorganizzazione delle ubicazioni, portata e carico dei ripiani indicati, reti anticaduta sul retro, procedura di segnalazione dei quasi incidenti e restituzione degli esiti ai lavoratori"
     ],
     "appro": "Il metodo dei «cinque perché» porta dall’evento visibile alle cause organizzative, che sono quelle su cui si interviene in modo duraturo. Il modello INAIL «Infor.MO» classifica i fattori causali in sei categorie: attività dell’infortunato, attività di terzi, utensili, macchine e impianti, materiali, ambiente, DPI e abbigliamento. L’analisi si concentra sui fatti e sulle cause, non sulla ricerca del colpevole: è la condizione perché le persone segnalino.",
     "rif": "Art. 18, c. 1, lett. r) · art. 35 D.lgs. 81/2008 · UNI EN ISO 45001, punto 10.2",
     "nar": "Facciamo un esempio di analisi. Un collo cade da uno scaffale e sfiora un collega, senza conseguenze. Chiediamoci perché, più volte. Il collo era in bilico perché il ripiano era pieno; il ripiano era pieno perché gli spazi non sono dimensionati sui picchi di arrivo; nessuno ha segnalato prima perché manca un canale semplice e sereno di segnalazione. Le azioni efficaci agiscono su queste cause organizzative: ubicazioni, portate indicate, reti anticaduta e una procedura di segnalazione dei quasi incidenti.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Lettura dei dati: denuncia, riconoscimento, incidenza",
     "foto": false,
     "lead": "I dati statistici sono uno strumento di prevenzione solo se si leggono con il metodo corretto.",
     "punti": [
      "Denuncia: comunicazione all’INAIL dell’evento da parte del datore di lavoro (art. 53 D.P.R. 1124/1965), da non confondere con il riconoscimento dell’infortunio o della malattia",
      "Comunicazione a fini statistici e informativi degli infortuni con assenza di almeno un giorno, escluso quello dell’evento (art. 18, c. 1, lett. r, D.lgs. 81/2008)",
      "Incidenza: numero di casi ogni 100.000 occupati; consente di confrontare periodi e settori indipendentemente dal numero dei lavoratori",
      "In itinere: infortunio nel normale percorso di andata e ritorno tra abitazione e luogo di lavoro (art. 2, c. 3, D.P.R. 1124/1965)",
      "Mancati infortuni e incidenti senza danno sono la base della piramide: analizzarli consente di intervenire prima che si verifichi l’evento grave"
     ],
     "appro": "Esempio di lettura: se in un reparto di 200 addetti si verificano 4 infortuni in un anno, l’incidenza è 4/200 × 100.000 = 2.000 casi ogni 100.000 addetti, valore confrontabile con il dato nazionale (1.720,4 nel 2025 per gli infortuni in occasione di lavoro). Il confronto ha valore indicativo: i dati di settore e di dimensione aziendale sono più significativi del dato medio nazionale.",
     "rif": "D.P.R. 1124/1965, artt. 2 e 53 · D.lgs. 81/2008, art. 18, c. 1, lett. r)",
     "nar": "Per usare i dati come strumento di prevenzione occorre leggerli correttamente. La denuncia è la comunicazione dell’evento all’INAIL e non coincide con il riconoscimento. L’incidenza, cioè il numero di casi ogni centomila occupati, permette di confrontare anni e settori diversi. L’infortunio in itinere è quello che avviene nel normale percorso tra casa e lavoro. Infine, i mancati infortuni sono la base della piramide: analizzarli consente di intervenire prima che accada l’evento grave.",
     "p": 1.3
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
     "nar": "Prima di entrare nei concetti, guardiamo i numeri. Secondo la Relazione annuale INAIL 2025, nel 2025 sono state presentate circa seicentomila denunce di infortunio, con un aumento dell’1,2 per cento. I casi mortali sono stati 1.198, in calo del 3,3 per cento: 890 lavoratori hanno perso la vita in occasione di lavoro e 299 nel tragitto casa–lavoro. Quasi un infortunio su quattro riguarda lavoratori nati all’estero. Le denunce di malattia professionale sono state oltre 98 mila, e tre su quattro riguardano l’apparato muscolo-scheletrico. Dietro ogni numero c’è una persona: per questo la prevenzione è un dovere giuridico e morale.",
     "p": 1.6
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD1",
     "voci": [
      "Gestione del rischio: contesto, identificazione, analisi, ponderazione, trattamento, monitoraggio (UNI ISO 31000)",
      "Matrici: criteri espliciti; priorità al danno grave e irreversibile",
      "Albero dei guasti e degli eventi; bow-tie e barriere",
      "Indici di frequenza e di gravità (UNI 7249) e indicatori proattivi",
      "HAZOP per i processi"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 1.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD1",
     "soglia": 4,
     "domande": [
      [
       "L’indice di frequenza secondo la UNI 7249 è:",
       [
        "Infortuni × 1.000 / ore lavorate",
        "Infortuni × 1.000.000 / ore lavorate",
        "Giornate perse × 1.000 / ore lavorate",
        "Infortuni / lavoratori"
       ],
       1,
       "UNI 7249:2007."
      ],
      [
       "In un albero dei guasti, eventi indipendenti collegati da una porta AND hanno probabilità pari:",
       [
        "Alla somma",
        "Al prodotto",
        "Alla media",
        "Al massimo"
       ],
       1,
       "Regola del prodotto."
      ],
      [
       "Nel bow-tie le barriere mitigative agiscono:",
       [
        "Prima dell’evento critico",
        "Dopo l’evento critico, sulle conseguenze",
        "Solo sulla probabilità",
        "Non esistono"
       ],
       1,
       "Lato destro del diagramma."
      ],
      [
       "Il DVR deve specificare i criteri adottati per la valutazione:",
       [
        "No",
        "Sì, semplici, brevi e comprensibili",
        "Solo per le aziende oltre 50 lavoratori",
        "Solo su richiesta dell’ASL"
       ],
       1,
       "Art. 28, c. 2, lett. a)."
      ],
      [
       "La tecnica di riferimento per le deviazioni di processo è:",
       [
        "HAZOP",
        "NIOSH",
        "OCRA",
        "Kirkpatrick"
       ],
       0,
       "IEC 61882."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 1.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "UD2 · Organizzazione dei processi produttivi e del lavoro",
   "min": 240,
   "foto": "aziende",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD2",
     "sott": "Organizzazione dei processi produttivi e del lavoro",
     "nar": "Unità didattica due. L'organizzazione dei processi produttivi e del lavoro come fattore di rischio.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Processi, flussi e interferenze",
     "rif": "Artt. 15, 26, 28 D.lgs. 81/2008 · UNI EN ISO 45001, punto 8.1",
     "lead": "La conoscenza del processo produttivo è il presupposto di ogni valutazione: materiali, macchine, flussi, tempi, persone.",
     "punti": [
      "Mappatura dei processi: input, trasformazioni, output, sottoprodotti e rifiuti",
      "Lay-out e flussi di materiali, persone, mezzi: separazione dei percorsi",
      "Turni, lavoro notturno, straordinari (D.lgs. 66/2003)",
      "Manutenzione ordinaria e straordinaria, fermate, avviamenti: fasi a maggior rischio",
      "Appalti e interferenze; gestione del cambiamento"
     ],
     "nar": "Per valutare i rischi bisogna conoscere il processo: materiali, macchine, flussi, tempi e persone. Le fasi di manutenzione, fermata e avviamento sono quelle a maggior rischio; turni, lavoro notturno, appalti e cambiamenti organizzativi vanno gestiti come fattori di rischio.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "La gestione del cambiamento",
     "rif": "UNI EN ISO 45001, punto 8.1.3 · art. 29, c. 3 D.lgs. 81/2008",
     "lead": "Ogni modifica di processo, attrezzatura, sostanza, organizzazione o persone richiede una valutazione preventiva.",
     "punti": [
      "Identificazione della modifica e dei rischi introdotti",
      "Valutazione prima dell'attuazione, con consultazione",
      "Aggiornamento di procedure, formazione, DPI e DVR",
      "Verifica dopo l'avvio",
      "Permesso di lavoro per le attività non routinarie"
     ],
     "nar": "La gestione del cambiamento impone di valutare ogni modifica prima di attuarla, aggiornare procedure, formazione e documento e verificare dopo l'avvio. Per le attività non routinarie si usa il permesso di lavoro.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Lean, just in time e sicurezza",
     "foto": false,
     "lead": "I modelli organizzativi snelli riducono scorte, attese e sprechi: possono migliorare la sicurezza oppure intensificare il lavoro, a seconda di come sono progettati.",
     "punti": [
      "Le 5S (separare, ordinare, pulire, standardizzare, sostenere) riducono inciampi, ingombri e ricerche di attrezzi: sono anche uno strumento di prevenzione",
      "Il lavoro standardizzato rende esplicite le sequenze e i punti chiave di sicurezza",
      "La riduzione dei buffer aumenta la pressione temporale e gli interventi su macchine in marcia per non fermare il flusso",
      "La saturazione dei tempi riduce i micro-recuperi: aumentano i rischi da sovraccarico biomeccanico e lo stress",
      "Il RSPP partecipa alla riprogettazione dei processi per valutarne gli effetti prima della loro introduzione (art. 33)"
     ],
     "appro": "La valutazione del rischio da movimenti ripetitivi (UNI ISO 11228-3, metodo OCRA) considera esplicitamente la frequenza delle azioni e i tempi di recupero: un intervento di bilanciamento della linea che aumenta le azioni al minuto senza recuperi può trasformare una postazione accettabile in una postazione a rischio. Il cambiamento organizzativo è una «modifica del processo produttivo o dell’organizzazione del lavoro significativa ai fini della salute e sicurezza» (art. 29, c. 3).",
     "rif": "Artt. 29, c. 3, 33 D.lgs. 81/2008 · UNI ISO 11228-3",
     "nar": "I modelli di produzione snella possono aiutare la sicurezza: le 5S riducono ingombri e inciampi, il lavoro standardizzato rende espliciti i punti chiave. Ma possono anche intensificare il lavoro: meno scorte significa più pressione sui tempi e più interventi su macchine in marcia per non fermare il flusso, e la saturazione dei tempi riduce le pause di recupero. Per questo il cambiamento organizzativo va valutato prima di essere introdotto.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lavoro agile, telelavoro e lavoro da remoto",
     "foto": false,
     "lead": "Il lavoro a distanza sposta la prestazione fuori dai luoghi aziendali, ma non sospende la tutela della salute e sicurezza.",
     "punti": [
      "Lavoro agile (L. 81/2017, artt. 18-23): accordo individuale, informativa scritta almeno annuale sui rischi generali e specifici, cooperazione del lavoratore",
      "Telelavoro: si applicano le disposizioni del Titolo VII sui videoterminali (art. 3, c. 10 D.lgs. 81/2008); il datore di lavoro può accedere al luogo della prestazione nei limiti di legge e dell’accordo",
      "Tutela INAIL anche per gli infortuni in itinere verso il luogo scelto, se dettato da esigenze connesse alla prestazione o di conciliazione (art. 23 L. 81/2017)",
      "Rischi tipici: postura e postazione non ergonomica, isolamento, iperconnessione, confini incerti tra lavoro e vita privata",
      "Diritto alla disconnessione: definito nell’accordo individuale (art. 19 L. 81/2017)"
     ],
     "appro": "L’informativa sul lavoro agile deve essere specifica e comprensibile: indicazioni sulla scelta del luogo (illuminazione, microclima, sicurezza elettrica), sull’allestimento della postazione e sulle pause, sui rischi da uso prolungato dei dispositivi portatili. Il Protocollo nazionale sul lavoro in modalità agile del 7 dicembre 2021 ha fornito linee di indirizzo per la contrattazione collettiva.",
     "rif": "L. 81/2017, artt. 18-23 · art. 3, c. 10 D.lgs. 81/2008 · Protocollo nazionale sul lavoro agile 7/12/2021",
     "nar": "Il lavoro a distanza non sospende la tutela. Nel lavoro agile il datore di lavoro consegna un’informativa scritta almeno annuale sui rischi, e il lavoratore coopera all’attuazione delle misure. Nel telelavoro si applicano le regole sui videoterminali. L’INAIL tutela anche gli infortuni nel tragitto verso il luogo scelto, se giustificato. I rischi tipici sono la postazione non ergonomica, l’isolamento e l’iperconnessione: per questo l’accordo deve prevedere il diritto alla disconnessione.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Nuove tecnologie: robot collaborativi, automazione e intelligenza artificiale",
     "foto": false,
     "lead": "L’automazione elimina molti compiti pericolosi, ma introduce nuove interfacce tra persone e macchine e nuovi modi di guasto.",
     "punti": [
      "Robot industriali e collaborativi: UNI EN ISO 10218-1 e 10218-2 (edizione 2025), che integrano i requisiti per le applicazioni collaborative (limitazione di potenza e forza, monitoraggio di velocità e separazione)",
      "Regolamento (UE) 2023/1230: requisiti per i componenti di sicurezza basati su software, per le macchine con comportamento evolutivo e per la protezione da manomissioni informatiche",
      "Regolamento (UE) 2024/1689 sull’intelligenza artificiale: i sistemi di IA usati come componenti di sicurezza di macchine sono classificati ad alto rischio",
      "Rischi organizzativi: dequalificazione, monitoraggio dei lavoratori, carico cognitivo, ritmi imposti dalla macchina",
      "Manutenzione e risoluzione dei guasti: le fasi non automatiche sono quelle a maggior rischio"
     ],
     "appro": "La valutazione di un’applicazione collaborativa riguarda l’intera cella (robot, utensile, pezzo, layout), non il solo robot: un robot «collaborativo» con un utensile tagliente non è sicuro per definizione. Il controllo a distanza dei lavoratori resta disciplinato dall’art. 4 della L. 300/1970.",
     "rif": "UNI EN ISO 10218-1 e 10218-2 · Reg. (UE) 2023/1230 · Reg. (UE) 2024/1689 · art. 4 L. 300/1970",
     "nar": "L’automazione elimina molti compiti pericolosi, ma crea nuove interfacce tra persone e macchine. Le norme sui robot industriali, aggiornate nel 2025, comprendono i requisiti per le applicazioni collaborative. Il Regolamento macchine e il Regolamento sull’intelligenza artificiale introducono requisiti per il software di sicurezza e per i sistemi autonomi. Ricordate: si valuta l’intera applicazione, non solo il robot. Un robot collaborativo con un utensile tagliente non è sicuro per definizione.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Manutenzione e gestione del cambiamento",
     "foto": false,
     "lead": "La manutenzione è la fase in cui le protezioni vengono rimosse e le procedure ordinarie non si applicano: per questo è tra le più critiche.",
     "punti": [
      "Manutenzione ordinaria, straordinaria, programmata, predittiva e su guasto (UNI EN 13306)",
      "Messa in sicurezza: sezionamento delle energie (elettrica, pneumatica, idraulica, gravitazionale), blocco con lucchetto personale e cartellino, verifica dell’assenza di energia, dissipazione delle energie residue",
      "Permesso di lavoro per le attività a rischio elevato; coordinamento con le imprese esterne (art. 26)",
      "Gestione del cambiamento: ogni modifica di impianti, sostanze, procedure o organizzazione viene valutata prima dell’attuazione, con il coinvolgimento del RSPP",
      "Le fermate programmate concentrano molte imprese e attività interferenti: richiedono pianificazione dedicata"
     ],
     "appro": "L’art. 71, c. 4 obbliga il datore di lavoro ad assicurare che le attrezzature siano oggetto di idonea manutenzione e che siano curati la tenuta e l’aggiornamento del registro di controllo, ove previsto. La procedura di sezionamento e blocco (lockout-tagout) è un caso tipico di misura che va descritta, addestrata e verificata: la sola formazione teorica non è sufficiente.",
     "rif": "Art. 71, c. 4 D.lgs. 81/2008 · UNI EN 13306 · UNI EN ISO 45001:2023, punto 8.1.3",
     "nar": "La manutenzione è una fase critica, perché le protezioni vengono rimosse. La messa in sicurezza richiede di sezionare tutte le energie, bloccarle con un lucchetto personale, verificare che siano assenti e dissipare quelle residue. Le attività a rischio elevato richiedono un permesso di lavoro. Ogni cambiamento di impianti, sostanze o procedure va valutato prima di essere attuato: è la gestione del cambiamento.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La modifica della linea",
     "scena": "Per aumentare la produttività, il responsabile di produzione fa rimuovere un riparo fisso che rallentava il carico manuale dei pezzi e porta la cadenza da 6 a 9 pezzi al minuto. Il RSPP ne viene a conoscenza un mese dopo.",
     "domanda": "Quale valutazione è corretta?",
     "opz": [
      [
       "La modifica è legittima perché decisa da un dirigente",
       false,
       "No: la rimozione di un riparo e l’aumento della cadenza sono modifiche significative che richiedono una valutazione preventiva."
      ],
      [
       "È una modifica significativa ai fini della sicurezza: occorre ripristinare la protezione, rielaborare la valutazione (rischio meccanico e movimenti ripetitivi) entro 30 giorni e introdurre una procedura di gestione del cambiamento",
       true,
       "Corretto: art. 29, c. 3; la rimozione dei ripari configura anche violazione dell’art. 71."
      ],
      [
       "Basta informare i lavoratori della nuova cadenza",
       false,
       "No: l’informazione non sostituisce la valutazione e le misure tecniche."
      ]
     ],
     "rif": "Artt. 29, c. 3, 33, 71 D.lgs. 81/2008 · UNI ISO 11228-3",
     "appro": "La gestione del cambiamento è un requisito della UNI EN ISO 45001 (punto 8.1.3): le modifiche temporanee e permanenti vanno pianificate e valutate prima dell’attuazione.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Permessi di lavoro e lavori a rischio elevato",
     "foto": false,
     "lead": "Alcune attività richiedono un’autorizzazione scritta che verifica, prima dell’inizio, la presenza di tutte le condizioni di sicurezza: è il permesso di lavoro.",
     "punti": [
      "Lavori a caldo (saldatura, taglio, molatura) in aree con materiali combustibili o atmosfere potenzialmente esplosive",
      "Accesso ad ambienti sospetti di inquinamento o confinati (D.P.R. 177/2011)",
      "Lavori elettrici sotto tensione o in prossimità di parti attive (CEI 11-27)",
      "Interventi di manutenzione con rimozione delle protezioni, previa messa in sicurezza con sezionamento e lucchettaggio",
      "Il permesso indica rischi, misure, DPI, durata, responsabili, firme di emissione, accettazione e chiusura"
     ],
     "appro": "Il preposto è spesso chi verifica in campo che le condizioni scritte nel permesso siano reali (isolamenti, bonifiche, misure dell’atmosfera, presenza del sorvegliante, estintori). Un permesso firmato senza sopralluogo è un documento, non una misura di sicurezza.",
     "rif": "Art. 66 e Titolo XI D.lgs. 81/2008 · D.P.R. 177/2011 · CEI 11-27",
     "nar": "Alcuni lavori richiedono un permesso di lavoro scritto: i lavori a caldo, l’accesso agli ambienti confinati, i lavori elettrici, la manutenzione con rimozione delle protezioni. Il permesso indica rischi, misure, dispositivi, responsabili e durata. Il preposto verifica sul posto che le condizioni scritte siano reali: un permesso firmato senza sopralluogo è solo un pezzo di carta.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Dalla direttiva macchine al Regolamento (UE) 2023/1230",
     "foto": false,
     "lead": "Il fabbricante garantisce la sicurezza di progetto; il datore di lavoro garantisce la sicurezza d’uso. Le due responsabilità non si sostituiscono.",
     "punti": [
      "Macchine immesse sul mercato: marcatura CE, dichiarazione CE di conformità, istruzioni in lingua italiana (Direttiva 2006/42/CE, recepita dal D.lgs. 17/2010)",
      "Dal 20 gennaio 2027 si applica il Regolamento (UE) 2023/1230, direttamente vincolante in tutti gli Stati membri; introduce requisiti per software di sicurezza, sistemi autonomi e cibersicurezza",
      "Attrezzature messe a disposizione prima delle direttive di prodotto o non soggette a esse: requisiti generali dell’Allegato V (art. 70, c. 2)",
      "Il datore di lavoro sceglie attrezzature adeguate al lavoro, le installa e le mantiene secondo le istruzioni e ne verifica l’efficienza (art. 71)",
      "Modifiche sostanziali a una macchina possono configurare una nuova immissione sul mercato, con i relativi obblighi del fabbricante"
     ],
     "appro": "Esempio: una pressa acquistata nel 1995 e priva di ripari interbloccati non può essere usata finché non è adeguata almeno all’Allegato V; la presenza della marcatura CE su una macchina recente non esonera il datore di lavoro dal valutare i rischi dell’installazione e dell’uso concreto (art. 71, c. 1-2). Chi vende, noleggia o concede in uso attrezzature non conformi è soggetto alle sanzioni dell’art. 72.",
     "rif": "Artt. 69-72 e Allegato V D.lgs. 81/2008 · D.lgs. 17/2010 · Regolamento (UE) 2023/1230",
     "nar": "Il sistema delle macchine si regge su due responsabilità distinte: il fabbricante garantisce la sicurezza di progetto con la marcatura CE e le istruzioni; il datore di lavoro garantisce la sicurezza dell’uso. Dal 20 gennaio 2027 la direttiva macchine sarà sostituita dal Regolamento europeo 2023/1230, che introduce requisiti anche per il software di sicurezza e i sistemi autonomi. Le attrezzature più datate devono rispettare almeno i requisiti dell’Allegato V del decreto 81.",
     "p": 1.4
    },
    {
     "t": "caso",
     "tit": "Esercitazione · L’interblocco escluso",
     "scena": "Su una linea di confezionamento il riparo interbloccato si apre spesso per rimuovere gli scarti. Per non rallentare la produzione un operatore ha fissato con nastro adesivo un magnete sul sensore; il caporeparto lo sa e tollera la prassi.",
     "domanda": "Qual è la valutazione corretta?",
     "opz": [
      [
       "La prassi è accettabile se l’operatore è esperto",
       false,
       "No: l’esperienza non sostituisce la protezione; la manomissione è vietata e la prassi tollerata fonda la responsabilità di chi doveva vigilare."
      ],
      [
       "Il lavoratore viola l’art. 20; il preposto deve intervenire, interrompere l’attività e segnalare (art. 19); il datore di lavoro deve eliminare la causa con una soluzione tecnica (ad esempio un sistema di espulsione degli scarti)",
       true,
       "Corretto: ciascun soggetto ha un obbligo proprio; la soluzione stabile è tecnica, perché la frequenza degli accessi rivela un difetto del processo."
      ],
      [
       "Basta affiggere un cartello di divieto",
       false,
       "No: la segnaletica non sostituisce le misure tecniche e organizzative (art. 161)."
      ]
     ],
     "rif": "Artt. 18, 19, 20 D.lgs. 81/2008",
     "nar": "Esercitazione: l’interblocco escluso con un magnete. Valuta gli obblighi di ciascun soggetto.",
     "p": 1.3
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD2",
     "voci": [
      "Lean e JIT: 5S e lavoro standardizzato utili; attenzione a saturazione e pressione temporale",
      "Lavoro agile: informativa annuale, disconnessione, tutela INAIL",
      "Robot collaborativi e IA: si valuta l’intera applicazione",
      "Manutenzione: sezionamento, blocco, verifica, permessi",
      "Gestione del cambiamento: valutazione prima della modifica"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 2.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD2",
     "soglia": 4,
     "domande": [
      [
       "Nel lavoro agile l’informativa sui rischi è consegnata:",
       [
        "Una sola volta",
        "Almeno annualmente, in forma scritta",
        "Solo a voce",
        "Mai"
       ],
       1,
       "Art. 22 L. 81/2017."
      ],
      [
       "Al telelavoro si applicano le disposizioni:",
       [
        "Del Titolo VII sui videoterminali",
        "Del Titolo IV sui cantieri",
        "Solo del codice civile",
        "Nessuna"
       ],
       0,
       "Art. 3, c. 10."
      ],
      [
       "Le norme sui robot industriali e collaborativi sono:",
       [
        "UNI EN ISO 10218-1 e -2",
        "UNI EN 131",
        "UNI EN 689",
        "UNI 7249"
       ],
       0,
       "Edizione 2025."
      ],
      [
       "Dopo una modifica significativa del processo il DVR va rielaborato entro:",
       [
        "7 giorni",
        "30 giorni",
        "6 mesi",
        "1 anno"
       ],
       1,
       "Art. 29, c. 3."
      ],
      [
       "Nella procedura di sezionamento e blocco, dopo l’apposizione del lucchetto si deve:",
       [
        "Riavviare la macchina",
        "Verificare l’assenza di energia e dissipare le energie residue",
        "Togliere il cartellino",
        "Informare l’INAIL"
       ],
       1,
       "Lockout-tagout."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 2.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M3",
   "titolo": "UD3 · Ambiente e luoghi di lavoro",
   "min": 240,
   "foto": "aziende",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD3",
     "sott": "Ambiente e luoghi di lavoro",
     "nar": "Unità didattica tre. I requisiti dei luoghi di lavoro e i rischi connessi all'ambiente.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Requisiti dei luoghi di lavoro",
     "rif": "Titolo II e Allegato IV D.lgs. 81/2008",
     "lead": "L'Allegato IV fissa i requisiti di stabilità, dimensioni, aerazione, illuminazione, vie di circolazione e uscite.",
     "punti": [
      "Altezza, cubatura e superficie dei locali; deroghe dell'organo di vigilanza",
      "Pavimenti, pareti, finestre, porte e portoni",
      "Vie di circolazione, scale fisse, vie e uscite di emergenza",
      "Aerazione, microclima, illuminazione naturale e artificiale",
      "Servizi igienico-assistenziali; locali di riposo; luoghi all'aperto",
      "Manutenzione, pulizia e controllo dei dispositivi di sicurezza (art. 64)"
     ],
     "nar": "L'Allegato quattro fissa i requisiti dei luoghi di lavoro: dimensioni, pavimenti, porte, vie di circolazione e di emergenza, aerazione, microclima, illuminazione, servizi. L'articolo sessantaquattro impone manutenzione, pulizia e controllo dei dispositivi di sicurezza.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Microclima e illuminazione",
     "rif": "UNI EN ISO 7730 · UNI EN ISO 7243 · UNI EN 12464-1",
     "lead": "Il microclima si valuta con indici diversi negli ambienti moderati e severi; l'illuminazione secondo il compito visivo.",
     "punti": [
      "Ambienti moderati: PMV e PPD (UNI EN ISO 7730)",
      "Ambienti severi caldi: WBGT (UNI EN ISO 7243) e PHS (UNI EN ISO 7933)",
      "Ambienti severi freddi: IREQ (UNI EN ISO 11079)",
      "Stress termico da caldo all'aperto: protocolli e ordinanze regionali",
      "Illuminazione: illuminamento mantenuto, uniformità, abbagliamento (UNI EN 12464-1)"
     ],
     "nar": "Il microclima si valuta con il PMV e il PPD negli ambienti moderati, con il WBGT e il PHS negli ambienti caldi severi, con l'IREQ nel freddo. L'illuminazione si valuta secondo la norma UNI EN 12464-1, considerando illuminamento, uniformità e abbagliamento.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il sopralluogo dei luoghi di lavoro",
     "foto": false,
     "lead": "L’Allegato IV fissa i requisiti dei luoghi di lavoro; il sopralluogo li verifica in modo sistematico.",
     "punti": [
      "Strutture: stabilità e solidità adeguate al tipo di impiego; carichi ammessi sui solai e sui soppalchi indicati",
      "Altezze, cubature e superfici minime per le aziende industriali: 3 m di altezza netta, 10 m³ e 2 m² per lavoratore, salvo deroghe motivate (Allegato IV, punto 1.2)",
      "Pavimenti: privi di protuberanze, cavità o piani inclinati pericolosi; antisdrucciolevoli dove necessario; aperture protette",
      "Parapetti: altezza utile di almeno 1 m, con corrente intermedio e fermapiede, sulle aperture e sui bordi con dislivello",
      "Vie e uscite di emergenza: in numero, dimensione e distribuzione adeguati, sgombre, segnalate e illuminate anche in assenza di alimentazione ordinaria"
     ],
     "appro": "I locali sotterranei o semisotterranei non possono essere destinati al lavoro, salvo particolari esigenze tecniche o quando le lavorazioni non danno luogo a emissioni nocive, con il rispetto dei requisiti di aerazione, illuminazione e microclima e la comunicazione o l’autorizzazione dell’organo di vigilanza (art. 65). Le vie di esodo si progettano secondo il D.M. 3 settembre 2021 o, per le attività soggette, secondo il Codice di prevenzione incendi (D.M. 3 agosto 2015).",
     "rif": "Artt. 63-65 e Allegato IV D.lgs. 81/2008 · D.M. 3 settembre 2021",
     "nar": "Il sopralluogo verifica in modo sistematico i requisiti dell’Allegato quattro: strutture e carichi ammessi, altezze e superfici minime, pavimenti senza irregolarità pericolose, parapetti alti almeno un metro con corrente intermedio e fermapiede, vie e uscite di emergenza sgombre, segnalate e illuminate. I locali sotterranei non possono essere usati per il lavoro, salvo eccezioni motivate e la comunicazione all’organo di vigilanza.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Microclima: comfort e stress termico",
     "foto": false,
     "lead": "Il microclima si valuta in modo diverso negli ambienti moderati, dove l’obiettivo è il comfort, e negli ambienti severi, dove l’obiettivo è la tutela della salute.",
     "punti": [
      "Ambienti moderati: indici PMV e PPD (UNI EN ISO 7730); obiettivo PMV tra −0,5 e +0,5, con meno del 10% di insoddisfatti",
      "Parametri: temperatura dell’aria, temperatura media radiante, umidità relativa, velocità dell’aria, attività metabolica, isolamento del vestiario",
      "Ambienti severi caldi: indice WBGT (UNI EN ISO 7243) per lo screening; modello PHS (UNI EN ISO 7933) per l’analisi",
      "Ambienti severi freddi: indice IREQ (UNI EN ISO 11079)",
      "Caldo estremo all’aperto: rimodulazione degli orari, pause in zone ombreggiate, acqua, sorveglianza dei lavoratori fragili, sistemi di allerta"
     ],
     "appro": "Esempio: un ufficio con temperatura dell’aria di 26 °C, umidità relativa del 60%, attività sedentaria e abbigliamento estivo può risultare nella zona di comfort, mentre lo stesso ambiente con abbigliamento invernale porta il PMV oltre +1. Il microclima severo è valutato dall’art. 181 come agente fisico; per il caldo estremo le ordinanze regionali e i protocolli nazionali definiscono misure organizzative nelle giornate a rischio elevato.",
     "rif": "Art. 180-181 e Allegato IV, punto 1.9 D.lgs. 81/2008 · UNI EN ISO 7730, 7243, 7933, 11079",
     "nar": "Il microclima si valuta con metodi diversi. Negli ambienti moderati, come gli uffici, si usano gli indici PMV e PPD, con l’obiettivo di meno del dieci per cento di insoddisfatti. Negli ambienti severi caldi si usa l’indice WBGT per lo screening e il modello PHS per l’analisi; negli ambienti freddi l’indice IREQ. Per il caldo estremo all’aperto servono misure organizzative: orari rimodulati, pause all’ombra, acqua e attenzione ai lavoratori più fragili.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Illuminazione dei luoghi di lavoro",
     "foto": false,
     "lead": "L’illuminazione incide sulla sicurezza, sulla fatica visiva e sull’errore umano. I luoghi di lavoro dispongono, per quanto possibile, di sufficiente luce naturale (Allegato IV, punto 1.10).",
     "punti": [
      "Illuminamento medio mantenuto per compito visivo (UNI EN 12464-1:2021): ad esempio 500 lx per scrittura e lettura negli uffici, valori maggiori per lavori di precisione",
      "Uniformità, controllo dell’abbagliamento (UGR) e resa dei colori adeguati al compito",
      "Illuminazione di sicurezza delle vie di esodo in caso di mancanza dell’alimentazione ordinaria (UNI EN 1838)",
      "Effetto stroboscopico con macchine rotanti e sorgenti a frequenza di rete: va evitato",
      "Esterni: UNI EN 12464-2 per i luoghi di lavoro all’aperto"
     ],
     "appro": "La misurazione dell’illuminamento si esegue con luxmetro su una griglia di punti del piano di lavoro, secondo i criteri della norma. Il passaggio a sorgenti LED ha ridotto i consumi ma richiede attenzione a sfarfallio, temperatura di colore e abbagliamento.",
     "rif": "Allegato IV, punto 1.10 D.lgs. 81/2008 · UNI EN 12464-1:2021 · UNI EN 1838",
     "nar": "L’illuminazione incide sulla sicurezza e sulla fatica visiva. La norma UNI EN 12464-1 indica gli illuminamenti per compito, ad esempio cinquecento lux per la lettura e la scrittura negli uffici, e i requisiti di uniformità, abbagliamento e resa dei colori. Le vie di esodo devono avere un’illuminazione di sicurezza che funzioni anche senza alimentazione ordinaria.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il soppalco di magazzino",
     "scena": "In un magazzino è stato realizzato un soppalco metallico per lo stoccaggio di scatole. Non è indicata la portata, il bordo è protetto solo su due lati e l’accesso avviene con una scala portatile appoggiata.",
     "domanda": "Quali misure sono necessarie?",
     "opz": [
      [
       "Nessuna, se il soppalco è stato acquistato da un fornitore qualificato",
       false,
       "No: il datore di lavoro risponde dei requisiti dei luoghi di lavoro e del loro uso."
      ],
      [
       "Indicare la portata in modo visibile, verificare la stabilità con documentazione tecnica, completare i parapetti con fermapiede su tutti i lati aperti, realizzare un accesso sicuro (scala fissa con corrimano) e un sistema di carico protetto",
       true,
       "Corretto: Allegato IV, punti 1.1 e 1.7; art. 113 per le scale."
      ],
      [
       "Vietare l’accesso alle donne",
       false,
       "No: la misura è discriminatoria e non risolve il rischio."
      ]
     ],
     "rif": "Allegato IV, punti 1.1, 1.3, 1.7 D.lgs. 81/2008 · art. 113",
     "appro": "Il carico e lo scarico dei materiali dal soppalco richiedono un varco protetto (cancelletto basculante o sistema equivalente) che non lasci mai il bordo aperto.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Scale portatili: scelta e uso",
     "foto": false,
     "lead": "La scala è un’attrezzatura di lavoro: si usa solo quando l’uso di attrezzature più sicure non è giustificato, per la breve durata dell’impiego o per le caratteristiche del sito (art. 111, c. 3).",
     "punti": [
      "Conformità alla UNI EN 131 (scale portatili), con libretto di istruzioni",
      "Appoggio su base stabile e piana; scala inclinata con piede a circa un quarto della lunghezza dalla parete",
      "Per l’accesso a un livello superiore la scala sporge a sufficienza oltre il piano di arrivo (in pratica circa 1 m), salvo altri dispositivi che garantiscano una presa sicura (art. 113)",
      "Tre punti di contatto; non si lavora sugli ultimi gradini e non si trasportano carichi che impediscono una presa sicura",
      "Scale doppie: catena o dispositivo contro l’apertura; non si usano come scale semplici"
     ],
     "appro": "L’art. 113 disciplina scale fisse e portatili: le scale semplici portatili devono essere provviste di dispositivi antisdrucciolevoli alle estremità inferiori e di ganci di trattenuta o appoggi antisdrucciolevoli alle estremità superiori, quando necessario per assicurare la stabilità. Le cadute da scala sono tra le dinamiche ricorrenti degli infortuni gravi nei lavori di manutenzione.",
     "rif": "Artt. 111, 113 D.lgs. 81/2008 · UNI EN 131",
     "nar": "La scala portatile è un’attrezzatura e si usa solo per lavori brevi o quando non si possono usare attrezzature più sicure. Deve essere conforme alla norma tecnica, appoggiata su base stabile, con il piede a circa un quarto della lunghezza dalla parete, e sporgere a sufficienza oltre il piano di arrivo, in pratica circa un metro. Si mantengono sempre tre punti di contatto e non si sale sugli ultimi gradini.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Circolazione, pedoni e rampe",
     "foto": false,
     "lead": "Il rischio di investimento dei pedoni è il principale rischio per terzi nell’uso dei carrelli: la prevenzione è prima di tutto organizzativa.",
     "punti": [
      "Percorsi pedonali separati e segnalati; attraversamenti definiti; specchi e sistemi di segnalazione agli incroci e alle uscite dalle scaffalature",
      "Velocità adeguata, precedenza ai pedoni, segnalazione acustica agli incroci e nelle zone a scarsa visibilità",
      "Con carico che ostruisce la visuale: marcia in retromarcia o con l’aiuto di un segnalatore",
      "Rampe: con carico si sale in avanti e si scende in retromarcia, sempre con il carico a monte; mai curvare in pendenza",
      "Sosta: forche abbassate a terra, freno di stazionamento inserito, chiave rimossa; mai parcheggiare davanti a uscite di emergenza, estintori o quadri elettrici"
     ],
     "appro": "L’Allegato IV, punto 1.4 richiede che le vie di circolazione siano dimensionate in funzione dei mezzi di trasporto e dei pedoni e che vi sia una distanza di sicurezza sufficiente tra le vie dei veicoli e le porte, i passaggi e le scale. Il trasporto di persone sulle forche o sul carrello non previsto per il trasporto di passeggeri è vietato.",
     "rif": "Allegato IV, punto 1.4 e Allegato VI D.lgs. 81/2008",
     "nar": "Il principale rischio per gli altri è l’investimento dei pedoni. Servono percorsi separati, attraversamenti definiti, specchi e segnali agli incroci. Si guida a velocità adeguata, dando la precedenza ai pedoni. Se il carico copre la visuale si procede in retromarcia o con un segnalatore. Sulle rampe il carico sta sempre a monte: si sale in avanti e si scende in retromarcia. In sosta forche a terra, freno inserito e chiave tolta.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: prese multiple, prolunghe e verifiche dell’impianto",
     "foto": false,
     "lead": "Negli uffici e negli esercizi commerciali gran parte degli eventi elettrici nasce da un uso scorretto di prese, adattatori e prolunghe.",
     "punti": [
      "Non collegare prese multiple in cascata e non superare la potenza indicata sulla presa multipla: il sovraccarico surriscalda i conduttori ed è una causa frequente di incendio",
      "Usare solo apparecchi marcati CE e prese multiple conformi; non usare adattatori che mettono in contatto spine e prese di sistemi diversi senza continuità del conduttore di protezione",
      "Prima dell’uso, controllo visivo di cavi, spine e involucri: isolamento integro, nessuna parte attiva accessibile; un apparecchio danneggiato va messo fuori servizio e segnalato",
      "Le prolunghe avvolte sul rocchetto si srotolano completamente prima dell’uso con carichi elevati",
      "L’impianto di messa a terra è soggetto a verifica periodica ogni 5 anni, ogni 2 anni nei cantieri, nei locali a uso medico e negli ambienti a maggior rischio in caso di incendio (D.P.R. 462/2001)"
     ],
     "appro": "L’art. 80 obbliga il datore di lavoro a prendere le misure necessarie affinché i lavoratori siano salvaguardati dai rischi di natura elettrica connessi all’impiego dei materiali, delle apparecchiature e degli impianti, compresi i contatti diretti e indiretti, l’innesco di incendi e i fenomeni elettrici anomali. L’art. 86 prevede che gli impianti e i dispositivi di protezione dalle scariche atmosferiche siano periodicamente controllati e verificati secondo le indicazioni delle norme di buona tecnica e la normativa vigente (D.P.R. 462/2001).",
     "rif": "Artt. 80-86 D.lgs. 81/2008 · D.P.R. 462/2001, artt. 4 e 7",
     "nar": "Vediamo un esempio pratico, molto comune negli uffici. Le prese multiple non vanno mai collegate una dentro l’altra e non bisogna superare la potenza indicata: il sovraccarico surriscalda i cavi ed è una causa frequente di incendio. Prima di usare un apparecchio, controlla che cavi e spine siano integri; se sono danneggiati, l’apparecchio va messo fuori servizio e segnalato. Le prolunghe avvolte sul rocchetto vanno srotolate del tutto quando alimentano carichi elevati. Infine, l’impianto di messa a terra deve essere verificato periodicamente, di norma ogni cinque anni.",
     "p": 1.3
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD3",
     "voci": [
      "Allegato IV: strutture, altezze e superfici, pavimenti, parapetti, vie di esodo",
      "Locali sotterranei: divieto salvo eccezioni (art. 65)",
      "Microclima: PMV/PPD negli ambienti moderati; WBGT, PHS, IREQ negli ambienti severi",
      "Illuminazione: UNI EN 12464-1, illuminazione di sicurezza UNI EN 1838"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 3.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD3",
     "soglia": 4,
     "domande": [
      [
       "L’altezza netta minima dei locali delle aziende industriali è di:",
       [
        "2,4 m",
        "2,7 m",
        "3 m",
        "4 m"
       ],
       2,
       "Allegato IV, punto 1.2."
      ],
      [
       "Negli ambienti moderati si usa l’indice:",
       [
        "WBGT",
        "PMV",
        "IREQ",
        "LEX,8h"
       ],
       1,
       "UNI EN ISO 7730."
      ],
      [
       "L’indice WBGT serve a valutare:",
       [
        "Gli ambienti severi caldi",
        "Il rumore",
        "L’illuminazione",
        "Le vibrazioni"
       ],
       0,
       "UNI EN ISO 7243."
      ],
      [
       "Per scrittura e lettura negli uffici la UNI EN 12464-1 indica circa:",
       [
        "100 lx",
        "300 lx",
        "500 lx",
        "2.000 lx"
       ],
       2,
       "Illuminamento medio mantenuto."
      ],
      [
       "I parapetti hanno un’altezza utile di almeno:",
       [
        "0,6 m",
        "0,9 m",
        "1 m",
        "1,5 m"
       ],
       2,
       "Allegato IV."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 3.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M4",
   "titolo": "UD4 · Rischio incendio, atmosfere esplosive e gestione delle emergenze",
   "min": 300,
   "foto": "sicurezza2",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD4",
     "sott": "Rischio incendio, atmosfere esplosive e gestione delle emergenze",
     "nar": "Unità didattica quattro. Rischio incendio, atmosfere esplosive e gestione delle emergenze.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Valutazione del rischio di incendio",
     "rif": "D.M. 3 settembre 2021 · D.M. 3 agosto 2015 (Codice di prevenzione incendi) · D.P.R. 151/2011",
     "lead": "Il D.M. 3 settembre 2021 fissa i criteri generali per la valutazione del rischio e le misure nei luoghi di lavoro.",
     "punti": [
      "Individuazione dei pericoli: materiali combustibili, sorgenti di innesco",
      "Descrizione del contesto e degli occupanti",
      "Misure di prevenzione, protezione e gestionali",
      "Luoghi a basso rischio: criteri semplificati; altri: Codice di prevenzione incendi",
      "Attività soggette ai controlli dei Vigili del fuoco (D.P.R. 151/2011)",
      "Controlli e manutenzione (D.M. 1 settembre 2021); addetti (D.M. 2 settembre 2021)"
     ],
     "nar": "La valutazione del rischio di incendio segue il decreto del tre settembre duemilaventuno: pericoli, contesto, occupanti, misure di prevenzione, protezione e gestione. Per i luoghi non a basso rischio si applica il Codice di prevenzione incendi; le attività dell'allegato del decreto centocinquantuno sono soggette ai controlli dei Vigili del fuoco.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Atmosfere esplosive",
     "rif": "Titolo XI D.lgs. 81/2008 · CEI EN IEC 60079-10-1 e 60079-10-2 · Direttiva 2014/34/UE",
     "lead": "Dove possono formarsi atmosfere esplosive il datore di lavoro classifica le zone e redige il documento sulla protezione contro le esplosioni.",
     "punti": [
      "Gas, vapori, nebbie: zone 0, 1, 2; polveri: zone 20, 21, 22",
      "Misure: prevenire la formazione, evitare l'innesco, attenuare gli effetti",
      "Apparecchi e sistemi di protezione conformi alla Direttiva ATEX",
      "Segnale di avvertimento «EX»",
      "Documento sulla protezione contro le esplosioni (art. 294), parte del DVR"
     ],
     "nar": "Dove possono formarsi atmosfere esplosive si classificano le zone, zero, uno e due per gas e vapori, venti, ventuno e ventidue per le polveri, si adottano misure per prevenire la formazione e l'innesco e attenuare gli effetti, e si redige il documento sulla protezione contro le esplosioni.",
     "p": 1.5
    },
    {
     "t": "processo",
     "tit": "Pianificare l'emergenza",
     "rif": "Artt. 43-46 D.lgs. 81/2008 · D.M. 2 settembre 2021 · D.M. 388/2003",
     "passi": [
      [
       "Scenari",
       "Incendio, esplosione, rilascio, infortunio grave, eventi naturali"
      ],
      [
       "Organizzazione",
       "Coordinatore, addetti, comunicazioni, rapporti con i soccorsi"
      ],
      [
       "Procedure",
       "Allarme, evacuazione, punto di raccolta, persone con esigenze speciali"
      ],
      [
       "Mezzi",
       "Presidi, impianti, illuminazione di sicurezza, primo soccorso"
      ],
      [
       "Prove",
       "Esercitazioni almeno annuali e riesame del piano"
      ]
     ],
     "nar": "Il piano di emergenza parte dagli scenari, definisce organizzazione, procedure e mezzi e si verifica con le esercitazioni periodiche.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "La valutazione del rischio di incendio: il quadro normativo",
     "foto": false,
     "lead": "Il rischio di incendio si valuta per tutti i luoghi di lavoro (art. 46) secondo i criteri del D.M. 3 settembre 2021; per le attività soggette ai controlli dei Vigili del fuoco si applicano anche le regole tecniche.",
     "punti": [
      "D.P.R. 151/2011: 80 attività soggette, suddivise nelle categorie A, B e C in base al rischio; SCIA antincendio e controlli dei Vigili del fuoco",
      "Codice di prevenzione incendi (D.M. 3 agosto 2015): approccio prestazionale, strategie antincendio (reazione e resistenza al fuoco, esodo, gestione, controllo, rivelazione, ecc.)",
      "D.M. 3 settembre 2021: criteri generali per la progettazione, la realizzazione e l’esercizio della sicurezza antincendio dei luoghi di lavoro a basso rischio",
      "D.M. 1 settembre 2021: controlli e manutenzione di impianti, attrezzature e altri sistemi di sicurezza antincendio, con tecnici qualificati",
      "D.M. 2 settembre 2021: gestione in esercizio ed emergenza, formazione degli addetti"
     ],
     "appro": "La valutazione considera i pericoli di incendio (materiali combustibili, sorgenti di innesco, comburenti), gli occupanti esposti (numero, familiarità con i luoghi, capacità di esodo), le misure di prevenzione, protezione e gestione. L’esito orienta la scelta del livello di formazione degli addetti e il contenuto del piano di emergenza.",
     "rif": "Art. 46 D.lgs. 81/2008 · D.P.R. 151/2011 · D.M. 3 agosto 2015 · D.M. 1, 2 e 3 settembre 2021",
     "nar": "Il rischio di incendio si valuta in tutti i luoghi di lavoro. Il decreto del Presidente della Repubblica 151 del 2011 elenca le ottanta attività soggette ai controlli dei Vigili del fuoco, divise in tre categorie. Il Codice di prevenzione incendi del 2015 propone un approccio per strategie. I tre decreti del settembre 2021 disciplinano rispettivamente i controlli e la manutenzione, la gestione e la formazione, e i criteri per i luoghi di lavoro a basso rischio.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il carico di incendio specifico",
     "foto": false,
     "lead": "Il carico di incendio specifico esprime l’energia termica potenzialmente rilasciata dai materiali combustibili per unità di superficie.",
     "punti": [
      "Formula generale: qf = Σ (gi · Hi · mi · ψi) / A, con gi massa del materiale, Hi potere calorifico inferiore, mi fattore di partecipazione alla combustione, ψi fattore di limitazione della partecipazione",
      "Esempio: archivio di 100 m² con 2.000 kg di carta e cartone (H ≈ 17 MJ/kg) e 300 kg di plastiche (H ≈ 40 MJ/kg)",
      "Con mi = 1 e ψi = 1 (stima cautelativa): qf = (2.000 × 17 + 300 × 40) / 100 = (34.000 + 12.000) / 100 = 460 MJ/m²",
      "Il valore di progetto si ottiene con i coefficienti di sicurezza del Codice (rischio di incendio, misure di protezione) e orienta la classe di resistenza al fuoco",
      "Ridurre il carico (archiviazione digitale, contenitori metallici, compartimentazione) è una misura di prevenzione"
     ],
     "appro": "Il calcolo segue il Codice di prevenzione incendi (D.M. 3 agosto 2015, capitolo S.2, resistenza al fuoco), che definisce anche il carico di incendio specifico di progetto qf,d tramite i fattori δq1, δq2 e δn. L’esempio è didattico: i poteri calorifici reali e i fattori di partecipazione si ricavano dalle tabelle normative e dai dati dei materiali.",
     "rif": "D.M. 3 agosto 2015, capitolo S.2",
     "nar": "Il carico di incendio specifico misura l’energia che i materiali combustibili possono rilasciare per metro quadrato. In un archivio di cento metri quadrati con duemila chili di carta e trecento chili di plastica, in via cautelativa si ottengono circa quattrocentosessanta megajoule al metro quadrato. Il valore di progetto si calcola con i coefficienti del Codice di prevenzione incendi e orienta la resistenza al fuoco. Ridurre il carico, ad esempio con l’archiviazione digitale, è una misura di prevenzione.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Atmosfere esplosive: classificazione delle zone e apparecchiature",
     "foto": false,
     "lead": "Il datore di lavoro valuta i rischi derivanti da atmosfere esplosive, ripartisce le aree in zone e redige il documento sulla protezione contro le esplosioni (artt. 289-294).",
     "punti": [
      "Gas, vapori e nebbie: zona 0 (presenza continua o per lunghi periodi), zona 1 (probabile in funzionamento normale), zona 2 (improbabile e di breve durata) – CEI EN IEC 60079-10-1",
      "Polveri combustibili: zone 20, 21 e 22 con la stessa logica – CEI EN IEC 60079-10-2",
      "Apparecchiature (Direttiva 2014/34/UE, D.lgs. 85/2016): categoria 1 per zone 0 e 20; categoria 2 per zone 1 e 21; categoria 3 per zone 2 e 22",
      "Misure: evitare la formazione dell’atmosfera esplosiva, evitare l’innesco, limitare gli effetti (sfogo, soppressione, isolamento)",
      "Segnalazione delle aree con il cartello triangolare «EX» (Allegato LI); formazione specifica dei lavoratori"
     ],
     "appro": "Il documento sulla protezione contro le esplosioni (DPCE) fa parte del DVR e va aggiornato in caso di modifiche significative (art. 294). Le polveri si caratterizzano con parametri di esplosività: pressione massima, costante Kst (classi St1, St2, St3), energia minima di accensione, temperatura minima di accensione della nube e dello strato.",
     "rif": "Titolo XI e Allegati XLIX-LI D.lgs. 81/2008 · CEI EN IEC 60079-10-1 e 60079-10-2 · D.lgs. 85/2016",
     "nar": "Per le atmosfere esplosive il datore di lavoro classifica le aree in zone. Per gas e vapori, zona zero se l’atmosfera è presente in modo continuo, zona uno se è probabile durante il normale funzionamento, zona due se è improbabile e di breve durata. Per le polveri, zone venti, ventuno e ventidue. Le apparecchiature devono essere della categoria adeguata alla zona. La strategia è evitare la formazione dell’atmosfera, evitare l’innesco e limitare gli effetti.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La pulizia con aria compressa",
     "scena": "In un reparto di levigatura di pannelli di legno, a fine turno gli addetti puliscono macchine e travi con la pistola ad aria compressa, sollevando nubi di polvere. Nel reparto sono presenti motori elettrici di tipo ordinario.",
     "domanda": "Qual è il problema principale e come si risolve?",
     "opz": [
      [
       "Nessun problema: la polvere di legno non brucia",
       false,
       "No: le polveri di legno sono combustibili e possono formare atmosfere esplosive."
      ],
      [
       "La pulizia con aria compressa disperde la polvere depositata creando una nube potenzialmente esplosiva; va sostituita con aspirazione certificata per polveri combustibili, con programma di pulizia che impedisca gli accumuli, e va aggiornata la classificazione delle zone",
       true,
       "Corretto: gli strati di polvere sono la principale sorgente di esplosioni secondarie."
      ],
      [
       "Basta far indossare le mascherine",
       false,
       "No: il DPI riguarda l’inalazione, non il rischio di esplosione."
      ]
     ],
     "rif": "Artt. 289-294 D.lgs. 81/2008 · CEI EN IEC 60079-10-2",
     "appro": "Le polveri di legno duro sono anche cancerogene: l’aria compressa aumenta l’esposizione per inalazione, oltre al rischio di esplosione.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Emergenze e primo soccorso: che cosa prevede la norma",
     "foto": false,
     "lead": "Ogni azienda organizza la gestione delle emergenze, designa gli addetti e ne cura la formazione (artt. 43-46).",
     "punti": [
      "Prevenzione incendi e gestione della sicurezza antincendio: D.M. 1, 2 e 3 settembre 2021 (controlli, gestione in esercizio ed emergenza, criteri di progettazione)",
      "Piano di emergenza obbligatorio nei luoghi con almeno 10 lavoratori, nei luoghi aperti al pubblico con più di 50 persone presenti e nelle attività soggette al controllo dei Vigili del fuoco",
      "Esercitazione antincendio e di evacuazione almeno una volta l’anno",
      "Primo soccorso (D.M. 388/2003): aziende classificate nei gruppi A, B e C; cassetta di pronto soccorso nei gruppi A e B, pacchetto di medicazione nel gruppo C",
      "Ogni lavoratore conosce i percorsi di esodo, il punto di raccolta, i numeri di emergenza (112) e i nominativi degli addetti"
     ],
     "appro": "Il D.M. 2 settembre 2021 disciplina la gestione della sicurezza antincendio in esercizio e in emergenza e la formazione degli addetti (livelli 1, 2 e 3 in funzione del livello di rischio), con aggiornamento quinquennale. Il D.M. 388/2003 classifica le aziende in tre gruppi in base all’attività, al numero dei lavoratori e all’indice infortunistico di inabilità permanente, e stabilisce contenuti e durata della formazione degli addetti al primo soccorso (12 ore per il gruppo A, 8 per i gruppi B e C) con aggiornamento triennale almeno per la parte pratica.",
     "rif": "Artt. 43-46 D.lgs. 81/2008 · D.M. 1, 2 e 3 settembre 2021 · D.M. 388/2003",
     "nar": "Ogni azienda deve organizzare la gestione delle emergenze. Il piano di emergenza è obbligatorio nei luoghi con almeno dieci lavoratori, in quelli aperti al pubblico con più di cinquanta persone e nelle attività soggette ai controlli dei Vigili del fuoco. L’esercitazione di evacuazione si svolge almeno una volta l’anno. Per il primo soccorso le aziende sono classificate nei gruppi A, B e C. Ogni lavoratore deve conoscere i percorsi di esodo, il punto di raccolta, il numero unico di emergenza 112 e i nomi degli addetti.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Gli addetti antincendio: il D.M. 2 settembre 2021",
     "foto": false,
     "lead": "Il D.M. 2 settembre 2021 disciplina la gestione della sicurezza antincendio in esercizio e in emergenza e la formazione degli addetti, in funzione del livello di rischio dell’attività.",
     "punti": [
      "Livello 1 (rischio basso): corso di 4 ore; aggiornamento quinquennale di 2 ore",
      "Livello 2 (rischio medio): corso di 8 ore; aggiornamento quinquennale di 5 ore",
      "Livello 3 (rischio elevato): corso di 16 ore; aggiornamento quinquennale di 8 ore; idoneità tecnica rilasciata dai Vigili del fuoco per le attività dell’Allegato IV",
      "Il D.M. 1 settembre 2021 disciplina i controlli e la manutenzione degli impianti e dei presidi antincendio; il D.M. 3 settembre 2021 i criteri generali di progettazione",
      "Numero degli addetti adeguato a turni, assenze e articolazione dei luoghi, valutato nel piano di emergenza"
     ],
     "appro": "Il livello di rischio si ricava dalla valutazione del rischio di incendio (art. 46 D.lgs. 81/2008) e dalle regole tecniche applicabili. I corsi comprendono una parte pratica sull’uso degli estintori e, per i livelli superiori, degli idranti. La programmazione deve tenere conto della scadenza quinquennale degli aggiornamenti.",
     "rif": "Art. 46 D.lgs. 81/2008 · D.M. 1, 2 e 3 settembre 2021",
     "nar": "Il decreto del 2 settembre 2021 disciplina la gestione antincendio e la formazione degli addetti in tre livelli. Il livello uno, per il rischio basso, prevede quattro ore; il livello due otto ore; il livello tre sedici ore, con l’idoneità tecnica rilasciata dai Vigili del fuoco per le attività previste. L’aggiornamento è quinquennale. Il numero degli addetti deve coprire i turni e le assenze.",
     "p": 1.5
    },
    {
     "t": "caso",
     "tit": "Esercitazione · L’allarme in ufficio",
     "scena": "In un ufficio al secondo piano suona l’allarme antincendio. Una collega propone di prendere l’ascensore per fare prima; un’altra vuole salvare il lavoro al computer e recuperare la borsa.",
     "domanda": "Qual è il comportamento corretto?",
     "opz": [
      [
       "Usare l’ascensore, che è più rapido",
       false,
       "No: in caso di incendio l’ascensore non va mai usato, salvo quelli antincendio dedicati ai soccorritori; può bloccarsi o portare al piano dell’incendio."
      ],
      [
       "Interrompere il lavoro, lasciare gli oggetti personali, seguire i percorsi di esodo e le indicazioni degli addetti fino al punto di raccolta",
       true,
       "Corretto: si esce con calma lungo le vie di esodo, senza tornare indietro, e ci si presenta al punto di raccolta per l’appello."
      ],
      [
       "Attendere in ufficio istruzioni telefoniche",
       false,
       "No: all’allarme si avvia l’evacuazione secondo il piano di emergenza."
      ]
     ],
     "rif": "Art. 43 D.lgs. 81/2008 · D.M. 2 settembre 2021",
     "nar": "Esercitazione: suona l’allarme antincendio in ufficio. Scegli il comportamento corretto.",
     "p": 1.2
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD4",
     "voci": [
      "Quadro antincendio: D.P.R. 151/2011, Codice 2015, D.M. 1-2-3 settembre 2021",
      "Carico di incendio specifico e riduzione dei combustibili",
      "ATEX: zone 0-1-2 e 20-21-22, categorie 1-2-3, DPCE",
      "Polveri: evitare gli strati e la dispersione"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 4.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD4",
     "soglia": 4,
     "domande": [
      [
       "Le attività soggette ai controlli dei Vigili del fuoco sono elencate nel:",
       [
        "D.P.R. 151/2011",
        "D.M. 388/2003",
        "D.lgs. 105/2015",
        "D.M. 37/2008"
       ],
       0,
       "Allegato I del D.P.R. 151/2011."
      ],
      [
       "La zona 1 indica un’atmosfera esplosiva per gas:",
       [
        "Presente in modo continuo",
        "Probabile durante il funzionamento normale",
        "Improbabile e di breve durata",
        "Assente"
       ],
       1,
       "CEI EN IEC 60079-10-1."
      ],
      [
       "Nelle zone 1 e 21 si usano apparecchiature di categoria:",
       [
        "1",
        "2",
        "3",
        "Qualsiasi"
       ],
       1,
       "Direttiva 2014/34/UE."
      ],
      [
       "Con 2.000 kg di carta (17 MJ/kg) in 100 m², senza altri materiali e con coefficienti unitari, il carico specifico è:",
       [
        "17 MJ/m²",
        "170 MJ/m²",
        "340 MJ/m²",
        "3.400 MJ/m²"
       ],
       2,
       "2.000 × 17 / 100."
      ],
      [
       "I controlli e la manutenzione dei presidi antincendio sono disciplinati dal:",
       [
        "D.M. 1 settembre 2021",
        "D.M. 2 settembre 2021",
        "D.M. 3 settembre 2021",
        "D.P.R. 462/2001"
       ],
       0,
       "Tecnici manutentori qualificati."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 4.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M5",
   "titolo": "UD5 · Rischi infortunistici",
   "min": 300,
   "foto": "sicurezza3",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD5",
     "sott": "Rischi infortunistici: macchine, attrezzature, impianti, cadute dall'alto, trasporti",
     "nar": "Unità didattica cinque. I rischi infortunistici.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Macchine e attrezzature di lavoro",
     "rif": "Titolo III D.lgs. 81/2008 · Reg. (UE) 2023/1230 · Direttiva 2006/42/CE · Allegati V, VI, VII",
     "lead": "Le attrezzature devono essere conformi, idonee, installate e usate secondo le istruzioni, mantenute e verificate.",
     "punti": [
      "Macchine marcate CE: Direttiva 2006/42/CE; dal 20 gennaio 2027 Reg. (UE) 2023/1230",
      "Attrezzature non marcate: requisiti dell'Allegato V",
      "Controlli iniziali e periodici (art. 71, c. 8); verifiche dell'Allegato VII (D.M. 11 aprile 2011)",
      "Abilitazione degli operatori per le attrezzature dell'Accordo 2025",
      "Modifiche sostanziali e nuova marcatura"
     ],
     "nar": "Le macchine marcate seguono la direttiva macchine, sostituita dal regolamento europeo duemilaventitré milleduecentotrenta che si applicherà dal venti gennaio duemilaventisette; quelle non marcate i requisiti dell'Allegato cinque. Le attrezzature vanno controllate e, quelle dell'Allegato sette, sottoposte a verifiche periodiche; per alcune serve l'abilitazione degli operatori.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Rischio elettrico",
     "rif": "Artt. 80-87 D.lgs. 81/2008 · CEI 64-8 · CEI 11-27:2025 · D.P.R. 462/2001",
     "lead": "Impianti e apparecchiature devono essere progettati, realizzati e mantenuti a regola d'arte; i lavori elettrici richiedono personale qualificato.",
     "punti": [
      "Contatti diretti e indiretti; archi elettrici; incendi di origine elettrica",
      "Dichiarazione di conformità (D.M. 37/2008) e verifiche degli impianti di terra e di protezione dalle scariche atmosferiche (D.P.R. 462/2001)",
      "Lavori fuori tensione, in prossimità e sotto tensione: persone esperte e avvertite (CEI 11-27:2025)",
      "Protezione contro le scariche atmosferiche: valutazione secondo CEI EN 62305-2"
     ],
     "nar": "Il rischio elettrico si gestisce con impianti a regola d'arte, dichiarati conformi e verificati periodicamente, e con lavori elettrici affidati a persone esperte e avvertite secondo la norma CEI undici ventisette.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Cadute dall'alto, movimentazione con mezzi, circolazione",
     "rif": "Titolo IV, Capo II D.lgs. 81/2008 · artt. 111-115 · D.L. 159/2025",
     "lead": "Le cadute dall'alto e gli incidenti con veicoli e carrelli sono tra le prime cause di infortuni gravi e mortali.",
     "punti": [
      "Lavoro in quota: altezza superiore a 2 m; priorità alle protezioni collettive",
      "Sistemi anticaduta: trattenuta, posizionamento, accesso con funi, arresto caduta, ancoraggi sicuri",
      "Scale portatili conformi alla UNI EN 131",
      "Viabilità interna: separazione pedoni-mezzi, segnaletica, velocità",
      "Carrelli elevatori: abilitazione, controlli, carichi"
     ],
     "nar": "Le cadute dall'alto e gli incidenti con veicoli sono tra le principali cause di infortuni gravi. Nel lavoro in quota si privilegiano le protezioni collettive; i sistemi anticaduta devono essere collegati ad ancoraggi sicuri. La viabilità interna separa pedoni e mezzi.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Effetti della corrente elettrica e misure di protezione",
     "foto": false,
     "lead": "Gli effetti della corrente sul corpo umano dipendono dall’intensità, dal tempo di passaggio e dal percorso; le misure di protezione agiscono sui contatti diretti e indiretti.",
     "punti": [
      "Effetti (IEC/TS 60479-1): percezione, tetanizzazione muscolare, arresto respiratorio, fibrillazione ventricolare, ustioni",
      "Contatto diretto: con parti normalmente in tensione; protezione con isolamento, involucri, barriere, distanziamento",
      "Contatto indiretto: con masse andate in tensione per un guasto; protezione con messa a terra coordinata con l’interruzione automatica dell’alimentazione",
      "Interruttore differenziale ad alta sensibilità (30 mA): protezione addizionale contro i contatti diretti e indiretti",
      "Ambienti particolari: cantieri, luoghi conduttori ristretti, locali medici, ambienti a maggior rischio in caso di incendio (CEI 64-8)"
     ],
     "appro": "Il datore di lavoro prende le misure necessarie affinché i lavoratori siano salvaguardati dai rischi di natura elettrica (art. 80) e garantisce che impianti e apparecchiature siano progettati, realizzati e mantenuti secondo le norme di buona tecnica (artt. 81-82). Gli impianti si considerano realizzati a regola d’arte se conformi alle norme CEI (L. 186/1968); la dichiarazione di conformità è disciplinata dal D.M. 37/2008.",
     "rif": "Artt. 80-86 D.lgs. 81/2008 · L. 186/1968 · D.M. 37/2008 · CEI 64-8 · IEC/TS 60479-1",
     "nar": "Gli effetti della corrente dipendono da intensità, tempo e percorso: si va dalla semplice percezione alla tetanizzazione, all’arresto respiratorio e alla fibrillazione ventricolare. Si distinguono i contatti diretti, con parti normalmente in tensione, e indiretti, con masse andate in tensione per un guasto. Contro i primi servono isolamento e involucri; contro i secondi la messa a terra coordinata con l’interruzione automatica. L’interruttore differenziale da trenta milliampere è una protezione addizionale molto efficace.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lavori elettrici e lavori in prossimità di linee elettriche",
     "foto": false,
     "lead": "I lavori elettrici si eseguono secondo la CEI EN 50110-1 e la CEI 11-27:2025, da persone esperte (PES), avvertite (PAV) o idonee ai lavori sotto tensione (PEI).",
     "punti": [
      "Lavori fuori tensione: sezionare, prevenire la richiusura, verificare l’assenza di tensione, mettere a terra e in cortocircuito, proteggere dalle parti attive adiacenti",
      "Lavori sotto tensione in bassa tensione: consentiti solo a personale idoneo e con procedure e attrezzature specifiche (art. 82)",
      "Distanze minime da linee elettriche aeree per lavori non elettrici (Allegato IX): 3 m fino a 1 kV; 3,5 m da 1 a 30 kV; 5 m da 30 a 132 kV; 7 m oltre 132 kV",
      "Gru, PLE, pompe per calcestruzzo e autocarri con cassone ribaltabile sono le attrezzature più esposte al contatto con linee aeree",
      "Ruoli della CEI 11-27:2025: unità responsabile dell’impianto, persona preposta alla conduzione dell’attività lavorativa, persona responsabile dell’impianto"
     ],
     "appro": "Se le distanze dell’Allegato IX non possono essere rispettate occorre concordare con l’esercente la messa fuori tensione della linea o adottare protezioni (barriere, segregazioni) idonee (art. 83). Il contatto con linee aeree è una delle dinamiche ricorrenti degli infortuni mortali con attrezzature di sollevamento.",
     "rif": "Artt. 82-83 e Allegato IX D.lgs. 81/2008 · CEI EN 50110-1 · CEI 11-27:2025",
     "nar": "I lavori elettrici seguono le norme CEI e sono riservati a persone esperte, avvertite o idonee ai lavori sotto tensione. I lavori fuori tensione richiedono cinque operazioni: sezionare, impedire la richiusura, verificare l’assenza di tensione, mettere a terra e in cortocircuito, proteggersi dalle parti adiacenti. Per i lavori non elettrici vicino a linee aeree valgono distanze minime: tre metri fino a mille volt, fino a sette metri oltre centotrentadue chilovolt. Gru e piattaforme sono le attrezzature più esposte.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Stabilità dei carrelli elevatori e delle gru: principi",
     "foto": false,
     "lead": "Il ribaltamento è la dinamica tipica degli infortuni mortali con mezzi di sollevamento e trasporto: la stabilità dipende dall’equilibrio dei momenti.",
     "punti": [
      "Carrello elevatore: il momento del carico rispetto all’asse delle ruote anteriori deve restare inferiore al momento stabilizzante del carrello; aumentando il baricentro del carico (distanza dalle forche) la portata diminuisce",
      "La targhetta e il diagramma di carico indicano la portata in funzione dell’altezza di sollevamento e della distanza del baricentro",
      "Stabilità laterale: curve a velocità elevata, carichi sollevati in marcia, pendenze trasversali",
      "Gru: il limitatore di momento interviene al raggiungimento del momento massimo; stabilizzatori estesi e appoggiati su terreno idoneo con piastre di ripartizione",
      "Sistemi di trattenuta dell’operatore (cinture, cabine chiuse) per ridurre le conseguenze del ribaltamento"
     ],
     "appro": "Esempio: un carrello con portata nominale di 2.500 kg a 500 mm di baricentro, se il carico ha baricentro a 700 mm, presenta una portata ridotta secondo il diagramma del fabbricante; il conducente deve saperlo leggere. Le norme di prodotto di riferimento sono la UNI EN ISO 3691-1:2020 per i carrelli industriali e la UNI EN 1459 per i carrelli a braccio telescopico; per l’uso sicuro degli apparecchi di sollevamento la UNI ISO 12480-1:2024.",
     "rif": "Artt. 71, 73 D.lgs. 81/2008 · UNI EN ISO 3691-1:2020 · UNI ISO 12480-1:2024",
     "nar": "Il ribaltamento è la dinamica tipica degli infortuni mortali con carrelli e gru. Il carrello resta stabile finché il momento del carico non supera il momento stabilizzante: per questo, se il carico ha il baricentro più lontano dalle forche, la portata diminuisce, come indica il diagramma di carico. Per le gru il limitatore di momento interviene al limite e gli stabilizzatori devono poggiare su terreno idoneo. I sistemi di trattenuta dell’operatore riducono le conseguenze del ribaltamento.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Sistemi di protezione contro le cadute dall’alto",
     "foto": false,
     "lead": "Per i lavori in quota la scelta dei sistemi segue l’ordine dell’art. 111: protezioni collettive, poi sistemi che impediscono la caduta, infine sistemi di arresto.",
     "punti": [
      "Dispositivi di ancoraggio: UNI EN 795 (tipi A-E); linee di ancoraggio flessibili (tipo C) e rigide (tipo D)",
      "Imbracature (UNI EN 361), cordini e assorbitori (UNI EN 354 e 355), dispositivi retrattili (UNI EN 360), connettori (UNI EN 362)",
      "Sistemi di trattenuta: impediscono di raggiungere il bordo; sistemi di posizionamento: sostengono l’operatore; sistemi di arresto: arrestano una caduta in corso",
      "Verifica periodica dei DPI anticaduta da parte di persona competente secondo le istruzioni del fabbricante (in genere almeno annuale)",
      "Piano di soccorso per il recupero rapido dell’operatore sospeso"
     ],
     "appro": "Le coperture degli edifici devono spesso essere dotate di sistemi di ancoraggio permanenti secondo le disposizioni regionali sulle misure preventive e protettive per l’accesso, il transito e l’esecuzione dei lavori in quota. La scelta del sistema richiede il calcolo del tirante d’aria e la verifica del fattore di caduta.",
     "rif": "Artt. 107-116 D.lgs. 81/2008 · UNI EN 795, 361, 354, 355, 360, 362",
     "nar": "Per i lavori in quota si scelgono prima le protezioni collettive, poi i sistemi che impediscono la caduta, come la trattenuta, e solo da ultimo quelli che la arrestano. Gli ancoraggi seguono la norma UNI EN 795; imbracature, cordini, assorbitori e retrattili hanno le loro norme. I dispositivi anticaduta si verificano periodicamente e il piano di soccorso deve essere pronto prima di iniziare.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La gru e la linea aerea",
     "scena": "Un’impresa deve scaricare con una gru su autocarro materiale edile in un cortile attraversato da una linea elettrica aerea a 15 kV, a circa 4 m dalla traiettoria del braccio in massima estensione.",
     "domanda": "Che cosa deve fare il preposto prima di iniziare?",
     "opz": [
      [
       "Iniziare con prudenza, perché 4 m sono sufficienti",
       false,
       "No: la distanza va mantenuta in ogni posizione del braccio e del carico, considerando oscillazioni e sbandamenti; 4 m dalla traiettoria non garantiscono 3,5 m da ogni parte della gru e del carico."
      ],
      [
       "Verificare il rispetto della distanza di 3,5 m (Allegato IX) in ogni configurazione, considerando oscillazioni del carico; se non garantita, chiedere all’esercente la messa fuori tensione o realizzare protezioni idonee, delimitare l’area e designare un segnalatore",
       true,
       "Corretto: art. 83 e Allegato IX."
      ],
      [
       "Far indossare all’operatore guanti isolanti",
       false,
       "No: il DPI non è una misura adeguata per il contatto di una gru con una linea a 15 kV."
      ]
     ],
     "rif": "Art. 83 e Allegato IX D.lgs. 81/2008",
     "appro": "Il contatto della gru con la linea mette in tensione l’intera macchina: chi tocca la gru o il carico, o si trova vicino ai punti di appoggio, è esposto a tensioni di contatto e di passo.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Ripari e dispositivi di protezione: come funzionano",
     "foto": false,
     "lead": "La protezione dalle parti mobili si realizza con ripari e dispositivi progettati secondo le norme armonizzate; il lavoratore non li rimuove né li modifica (art. 20, c. 2, lett. e).",
     "punti": [
      "Ripari fissi: si rimuovono solo con attrezzi; si usano dove l’accesso non è frequente",
      "Ripari mobili interbloccati: l’apertura arresta il movimento pericoloso e impedisce il riavvio (UNI EN ISO 14119)",
      "Dispositivi sensibili: barriere fotoelettriche, tappeti sensibili, comandi a due mani; la distanza di installazione dipende dal tempo di arresto della macchina (UNI EN ISO 13855)",
      "Distanze di sicurezza per impedire il raggiungimento delle zone pericolose con gli arti (UNI EN ISO 13857)",
      "Manomettere un interblocco (ad esempio con un magnete o una seconda chiave) annulla la protezione: è vietato e configura una violazione dell’art. 20"
     ],
     "appro": "La UNI EN ISO 12100 stabilisce il metodo di riduzione del rischio in tre fasi: progettazione intrinsecamente sicura, misure di protezione, informazioni per l’uso. Le misure organizzative e i DPI intervengono solo sul rischio residuo. L’arresto di emergenza non è una misura di protezione: è una misura complementare che non sostituisce ripari e dispositivi.",
     "rif": "Art. 20, c. 2, lett. e) · Allegato V D.lgs. 81/2008 · UNI EN ISO 12100, 13855, 13857, 14119",
     "nar": "Le parti mobili delle macchine si proteggono con ripari e dispositivi. I ripari fissi si tolgono solo con attrezzi; quelli mobili interbloccati fermano la macchina quando si aprono e ne impediscono il riavvio. Le barriere fotoelettriche vanno installate a una distanza calcolata in base al tempo di arresto. Manomettere un interblocco, ad esempio con un magnete, annulla la protezione ed è vietato: è una delle cause più frequenti di infortuni gravi alle mani.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Controlli e verifiche periodiche delle attrezzature",
     "foto": false,
     "lead": "Le attrezzature soggette a influssi che possono provocare deterioramenti sono sottoposte a controlli periodici; quelle dell’Allegato VII anche a verifiche periodiche da parte di soggetti pubblici o abilitati.",
     "punti": [
      "Controlli (art. 71, c. 8): eseguiti da persona competente secondo le istruzioni del fabbricante, le norme di buona tecnica o i codici di buona prassi; i risultati si registrano e si conservano almeno per gli ultimi tre anni (art. 71, c. 9)",
      "Verifiche periodiche (art. 71, c. 11): per le attrezzature dell’Allegato VII (apparecchi di sollevamento, PLE, carrelli telescopici, apparecchi a pressione, ponti sollevatori…) con la periodicità ivi indicata",
      "Prima verifica: INAIL entro 45 giorni dalla richiesta; verifiche successive: ASL/ARPA o soggetti abilitati (D.M. 11 aprile 2011)",
      "Le attrezzature dell’Allegato VII vanno denunciate all’INAIL alla messa in servizio",
      "Il verbale di verifica va conservato e reso disponibile agli organi di vigilanza"
     ],
     "appro": "La periodicità dipende dal tipo di attrezzatura, dal settore d’impiego e dall’anno di fabbricazione: ad esempio i ponti mobili sviluppabili su carro ad azionamento motorizzato (PLE) sono soggetti a verifica annuale. Il controllo quotidiano prima dell’uso, previsto dalle istruzioni, resta a carico dell’operatore e non sostituisce né il controllo periodico né la verifica.",
     "rif": "Art. 71, cc. 8, 9, 11 e Allegato VII D.lgs. 81/2008 · D.M. 11 aprile 2011",
     "nar": "Le attrezzature si deteriorano e vanno quindi controllate. I controlli periodici sono eseguiti da persona competente secondo le istruzioni del fabbricante e registrati. Le attrezzature dell’Allegato sette, come gru, piattaforme elevabili e apparecchi a pressione, sono anche sottoposte a verifiche periodiche: la prima è eseguita dall’INAIL, le successive dalle ASL o da soggetti abilitati. Il controllo prima dell’uso resta comunque un compito dell’operatore.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Accessori di sollevamento: verifiche e scarto",
     "foto": false,
     "lead": "Funi, catene, brache e ganci sono parte integrante della sicurezza del sollevamento: il loro cedimento causa la caduta del carico.",
     "punti": [
      "Verifica trimestrale delle funi e delle catene degli apparecchi di sollevamento, con annotazione (Allegato VI, punto 3.1.2)",
      "Ogni accessorio riporta la portata (WLL) e la marcatura del fabbricante",
      "Con brache a più bracci la portata diminuisce all’aumentare dell’angolo al vertice: oltre 120° non si solleva",
      "Criteri di scarto: rotture di fili, deformazioni, corrosione, allungamenti, ganci senza dispositivo di chiusura efficiente",
      "Nessuno deve sostare o transitare sotto il carico sospeso"
     ],
     "appro": "Esempio: una braca a due bracci con portata 2 t per ramo, con angolo al vertice di 60°, ha una portata complessiva di circa 2 × 2 × cos 30° ≈ 3,46 t; a 120° si riduce a 2 × 2 × cos 60° = 2 t. I fabbricanti forniscono tabelle di portata con coefficienti cautelativi, che prevalgono sul calcolo teorico. Il segnalatore usa i gesti convenzionali dell’Allegato XXXII.",
     "rif": "Allegato VI, punto 3.1 e Allegato XXXII D.lgs. 81/2008 · UNI ISO 12480-1:2024",
     "nar": "Gli accessori di sollevamento devono essere controllati: funi e catene degli apparecchi di sollevamento si verificano ogni tre mesi. Con le brache a più bracci la portata diminuisce quando l’angolo tra i rami aumenta, e oltre centoventi gradi non si solleva. Nessuno deve mai trovarsi sotto un carico sospeso.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: leggere il diagramma di carico",
     "foto": false,
     "lead": "La portata nominale è riferita a un baricentro del carico standard (ad esempio 500 mm dalla faccia delle forche); se il baricentro è più lontano la portata effettiva diminuisce.",
     "punti": [
      "Dati: portata nominale 2.500 kg con baricentro a 500 mm; distanza tra asse anteriore e faccia delle forche 400 mm",
      "Carico ingombrante con baricentro a 700 mm dalla faccia delle forche",
      "Stima per equilibrio dei momenti: 2.500 × (400 + 500) / (400 + 700) ≈ 2.045 kg",
      "Il valore corretto è sempre quello del diagramma del fabbricante, che tiene conto anche dell’altezza di sollevamento e degli accessori montati",
      "Con accessori (pinze, traslatori, prolunghe) la portata residua è indicata su una targhetta specifica"
     ],
     "appro": "Il principio fisico è l’equilibrio dei momenti rispetto all’asse delle ruote anteriori: il momento ribaltante del carico non deve superare il momento stabilizzante del carrello. Allontanare il carico, sollevarlo in marcia, frenare bruscamente o curvare velocemente riducono il margine di stabilità. Le norme di prodotto sono la UNI EN ISO 3691-1:2020 per i carrelli industriali e la serie UNI EN ISO 3691-2 per i carrelli a braccio telescopico.",
     "rif": "Art. 71 D.lgs. 81/2008 · UNI EN ISO 3691-1:2020 · Accordo 2025, punto 8.3.4",
     "nar": "Leggiamo un diagramma di carico. Un carrello ha una portata nominale di duemilacinquecento chili con il baricentro del carico a cinquecento millimetri. Se il carico è ingombrante e il suo baricentro è a settecento millimetri, la portata diminuisce: con l’equilibrio dei momenti si stima circa duemila chili. Il valore da usare è però sempre quello del diagramma del fabbricante, che considera anche l’altezza e gli accessori.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il tirante d’aria",
     "foto": false,
     "lead": "Un sistema di arresto caduta funziona solo se, durante l’arresto, il lavoratore non urta il suolo o un ostacolo. Lo spazio libero necessario sotto l’ancoraggio si chiama tirante d’aria.",
     "punti": [
      "Lunghezza del cordino: 2,0 m",
      "Allungamento dell’assorbitore di energia: fino a 1,75 m (UNI EN 355)",
      "Distanza tra l’attacco dorsale dell’imbracatura e i piedi: circa 1,5 m",
      "Margine di sicurezza: 1,0 m",
      "Tirante d’aria richiesto ≈ 2,0 + 1,75 + 1,5 + 1,0 = 6,25 m sotto il punto di ancoraggio: con altezze inferiori il sistema non protegge e occorre un dispositivo retrattile o una trattenuta"
     ],
     "appro": "Il calcolo va eseguito con i dati del fabbricante del sistema effettivamente utilizzato. L’ordine delle misure per i lavori in quota è fissato dall’art. 111: priorità alle protezioni collettive (parapetti, reti), poi ai sistemi di posizionamento e trattenuta che impediscono la caduta, solo da ultimo all’arresto caduta. Dopo l’arresto il lavoratore va soccorso rapidamente: la sospensione inerte nell’imbracatura può causare la sindrome da sospensione; il piano di soccorso deve essere predisposto prima dell’inizio del lavoro.",
     "rif": "Artt. 107, 111, 115 D.lgs. 81/2008 · UNI EN 355, UNI EN 361, UNI EN 795",
     "nar": "Un sistema di arresto caduta funziona solo se c’è abbastanza spazio libero sotto il lavoratore. Sommando due metri di cordino, fino a un metro e settantacinque di allungamento dell’assorbitore, circa un metro e mezzo di distanza tra l’attacco dorsale e i piedi e un metro di margine, servono oltre sei metri sotto l’ancoraggio. Se lo spazio è minore il sistema non protegge: occorre un dispositivo retrattile o, meglio, un sistema che impedisca la caduta. E prima di iniziare deve essere pronto il piano di soccorso.",
     "p": 1.5
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD5",
     "voci": [
      "Effetti della corrente; contatti diretti e indiretti; differenziale 30 mA",
      "Lavori elettrici: CEI EN 50110-1, CEI 11-27:2025; distanze dell’Allegato IX",
      "Stabilità di carrelli e gru: diagramma di carico, limitatore di momento",
      "Cadute dall’alto: ordine dell’art. 111, norme sui sistemi anticaduta, piano di soccorso"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 5.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD5",
     "soglia": 4,
     "domande": [
      [
       "La protezione dai contatti indiretti si realizza principalmente con:",
       [
        "Isolamento delle parti attive",
        "Messa a terra coordinata con l’interruzione automatica",
        "Cartelli",
        "Guanti"
       ],
       1,
       "CEI 64-8."
      ],
      [
       "La distanza minima da una linea aerea a 15 kV per lavori non elettrici è:",
       [
        "1 m",
        "3 m",
        "3,5 m",
        "7 m"
       ],
       2,
       "Allegato IX."
      ],
      [
       "Aumentando la distanza del baricentro del carico dalle forche, la portata del carrello:",
       [
        "Aumenta",
        "Diminuisce",
        "Non varia",
        "Raddoppia"
       ],
       1,
       "Diagramma di carico."
      ],
      [
       "Gli ancoraggi per i sistemi anticaduta sono disciplinati dalla norma:",
       [
        "UNI EN 795",
        "UNI EN 689",
        "UNI EN 12464-1",
        "UNI 7249"
       ],
       0,
       "Tipi A-E."
      ],
      [
       "I lavori elettrici sotto tensione sono riservati a:",
       [
        "Chiunque",
        "Persone idonee (PEI) con procedure e attrezzature specifiche",
        "RLS",
        "Preposti"
       ],
       1,
       "Art. 82; CEI 11-27."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 5.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M6",
   "titolo": "UD6 · Rischi ergonomici e legati all'organizzazione del lavoro",
   "min": 240,
   "foto": "sicurezza2",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD6",
     "sott": "Rischi di natura ergonomica e legati all'organizzazione del lavoro",
     "nar": "Unità didattica sei. I rischi ergonomici e organizzativi.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Movimentazione manuale dei carichi e sovraccarico biomeccanico",
     "rif": "Titolo VI e Allegato XXXIII D.lgs. 81/2008 · ISO 11228-1, -2, -3 · UNI EN 1005",
     "lead": "Le patologie muscolo-scheletriche sono le più denunciate tra le malattie professionali.",
     "punti": [
      "Sollevamento e trasporto: ISO 11228-1 (metodo NIOSH revisionato)",
      "Traino e spinta: ISO 11228-2",
      "Movimenti ripetitivi dell'arto superiore: ISO 11228-3 (OCRA)",
      "Posture: ISO 11226 e UNI EN 1005-4",
      "Misure: ausili, riprogettazione, rotazione, pause, formazione e addestramento"
     ],
     "nar": "Le patologie muscolo-scheletriche sono le malattie professionali più denunciate. Si valutano con le norme della serie ISO undicimiladuecentoventotto per sollevamento, traino e spinta e movimenti ripetitivi, e con la ISO undicimiladuecentoventisei per le posture.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Videoterminali, orari e lavoro agile",
     "rif": "Titolo VII D.lgs. 81/2008 · D.lgs. 66/2003 · L. 81/2017",
     "lead": "L'organizzazione del lavoro incide sul carico fisico e mentale.",
     "punti": [
      "Videoterminalisti: almeno 20 ore settimanali; pause; sorveglianza sanitaria",
      "Orari, riposi, lavoro notturno (D.lgs. 66/2003)",
      "Lavoro agile: informativa scritta sui rischi; diritto alla disconnessione",
      "Lavoro in solitudine: procedure di contatto e allarme"
     ],
     "nar": "Videoterminali, orari, lavoro notturno, lavoro agile e lavoro in solitudine sono fattori organizzativi da valutare con misure specifiche.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Movimenti ripetitivi degli arti superiori: il metodo OCRA",
     "foto": false,
     "lead": "Il sovraccarico biomeccanico degli arti superiori si valuta secondo la UNI ISO 11228-3, che indica il metodo OCRA come metodo preferenziale per la valutazione dettagliata.",
     "punti": [
      "Fattori di rischio: frequenza delle azioni tecniche, forza, posture e movimenti incongrui, stereotipia, carenza di periodi di recupero, fattori complementari (vibrazioni, guanti, freddo)",
      "Check list OCRA (screening): fino a 7,5 verde; 7,6–11 giallo; 11,1–14 rosso lieve; 14,1–22,5 rosso medio; oltre 22,5 viola",
      "Indice OCRA: rapporto tra azioni tecniche effettivamente svolte e azioni raccomandate nel turno",
      "Interventi: riduzione delle azioni tecniche, ausili per la forza, riprogettazione delle postazioni, pause e rotazioni su compiti con diverso impegno",
      "Sorveglianza sanitaria per i livelli di rischio non accettabili; esiti da utilizzare nel riesame della valutazione"
     ],
     "appro": "Le patologie muscolo-scheletriche degli arti superiori (sindrome del tunnel carpale, epicondiliti, tendiniti della spalla) sono tra le più denunciate all’INAIL: nel 2025 le patologie muscolo-scheletriche hanno rappresentato circa tre denunce di malattia professionale su quattro. La norma tecnica ISO/TR 12295 fornisce indicazioni per l’applicazione delle norme della serie 11228 e per la stima rapida del rischio.",
     "rif": "Titolo VI e Allegato XXXIII D.lgs. 81/2008 · UNI ISO 11228-3 · ISO/TR 12295 · INAIL, Relazione annuale 2025",
     "nar": "Il sovraccarico degli arti superiori si valuta con la norma UNI ISO 11228-3 e il metodo OCRA. Si considerano frequenza delle azioni, forza, posture incongrue, mancanza di pause di recupero e fattori complementari. La check list OCRA classifica il rischio in fasce: verde fino a sette virgola cinque, poi giallo, rosso e viola. Gli interventi riducono le azioni, introducono ausili per la forza, riprogettano le postazioni e organizzano pause e rotazioni.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Traino, spinta e posture di lavoro",
     "foto": false,
     "lead": "La movimentazione manuale comprende anche traino e spinta (UNI ISO 11228-2) e le posture statiche o incongrue (UNI ISO 11226, UNI EN 1005-4).",
     "punti": [
      "Traino e spinta: si misurano con dinamometro la forza iniziale e la forza di mantenimento e si confrontano con i valori raccomandati per distanza, frequenza e altezza delle mani",
      "Fattori: peso e ruote dei carrelli, stato dei pavimenti, pendenze, soglie e ostacoli",
      "Posture statiche: tronco flesso oltre 20°, braccia sopra la spalla, collo in estensione o flessione prolungata sono condizioni da limitare per durata",
      "Misure: carrelli con ruote di diametro adeguato e manutenzione, pavimenti regolari, piani di lavoro regolabili, alternanza posturale",
      "MMC in sanità: movimentazione dei pazienti con metodi dedicati (ad esempio MAPO) e ausili"
     ],
     "appro": "Esempio: un carrello per la distribuzione interna con forza iniziale misurata di 320 N supera i valori raccomandati per molte condizioni di spinta; sostituire le ruote e ridurre il carico porta la forza sotto 200 N. Il datore di lavoro adotta misure organizzative e mezzi appropriati, in particolare attrezzature meccaniche, per evitare la MMC (art. 168).",
     "rif": "Artt. 167-169 D.lgs. 81/2008 · UNI ISO 11228-2 · UNI ISO 11226 · UNI EN 1005-4",
     "nar": "La movimentazione manuale comprende anche traino e spinta, che si valutano misurando con un dinamometro la forza iniziale e di mantenimento. Contano il peso, le ruote, i pavimenti, le pendenze. Anche le posture statiche o incongrue, come il tronco flesso o le braccia sopra le spalle, vanno limitate nel tempo. Le misure sono tecniche: ruote adeguate, pavimenti regolari, piani regolabili, alternanza posturale.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La linea di confezionamento",
     "scena": "Su una linea di confezionamento un’addetta esegue 48 azioni tecniche al minuto per 7 ore, con una pausa di 10 minuti e la mensa. La check list OCRA restituisce un punteggio di 16,5.",
     "domanda": "Come si interpreta il risultato e che cosa si fa?",
     "opz": [
      [
       "Rischio accettabile, nessun intervento",
       false,
       "No: 16,5 ricade nella fascia rossa media."
      ],
      [
       "Rischio elevato (fascia rossa media): occorrono riprogettazione del compito e della postazione, introduzione di pause di recupero distribuite e rotazioni su compiti meno impegnativi, sorveglianza sanitaria e nuova valutazione dopo l’intervento",
       true,
       "Corretto: le misure prioritarie agiscono su frequenza, forza e recupero."
      ],
      [
       "Basta fornire un polsino elastico",
       false,
       "No: non è una misura di prevenzione efficace."
      ]
     ],
     "rif": "Artt. 168-169 D.lgs. 81/2008 · UNI ISO 11228-3",
     "appro": "Il riesame dopo l’intervento verifica l’efficacia: se l’indice non scende nella fascia accettabile, si interviene ulteriormente sul ciclo di lavoro.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: regolare la postazione al videoterminale",
     "foto": false,
     "lead": "Un videoterminalista utilizza il VDT in modo sistematico o abituale per almeno 20 ore settimanali, dedotte le interruzioni (art. 173). La postazione si regola sulla persona, non il contrario.",
     "punti": [
      "Sedile: altezza regolabile, piedi appoggiati al pavimento o su poggiapiedi, schienale che sostiene la zona lombare, avambracci appoggiati sul piano",
      "Schermo: di fronte all’operatore, bordo superiore all’altezza degli occhi o leggermente più in basso, a una distanza di circa 50–70 cm",
      "Illuminazione: schermo perpendicolare alle finestre, senza riflessi né abbagliamenti; tende regolabili",
      "Pause: 15 minuti ogni 120 minuti di applicazione continuativa, salvo diversa disciplina della contrattazione collettiva (art. 175, c. 3)",
      "Sorveglianza sanitaria: visita con periodicità biennale per gli idonei con prescrizioni o limitazioni e per chi ha compiuto 50 anni, quinquennale negli altri casi (art. 176, c. 3)"
     ],
     "appro": "L’Allegato XXXIV fissa i requisiti minimi di attrezzature (schermo, tastiera, piano di lavoro, sedile), ambiente (spazio, illuminazione, rumore, microclima, radiazioni) e interfaccia elaboratore–uomo. Le pause non sono cumulabili all’inizio o al termine dell’orario di lavoro e consistono in un cambiamento di attività. Il lavoratore ha diritto a dispositivi speciali di correzione visiva quando l’esito della visita ne evidenzi la necessità e non sia possibile utilizzare i dispositivi normali (art. 176, c. 6).",
     "rif": "Artt. 173-176 e Allegato XXXIV D.lgs. 81/2008",
     "nar": "Ecco come regolare correttamente la postazione al videoterminale. Il sedile va regolato in altezza in modo che i piedi poggino bene a terra e lo schienale sostenga la zona lombare. Lo schermo va posto di fronte, con il bordo superiore all’altezza degli occhi o poco sotto, a circa cinquanta–settanta centimetri. Lo schermo deve essere perpendicolare alle finestre, per evitare riflessi. Ogni centoventi minuti di lavoro continuativo spetta una pausa di quindici minuti, intesa come cambiamento di attività. La visita medica è biennale dopo i cinquant’anni o in caso di prescrizioni, altrimenti quinquennale.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il calcolo dell’indice di sollevamento",
     "foto": false,
     "lead": "La valutazione del sollevamento si basa sulla norma UNI ISO 11228-1 (Allegato XXXIII): si confronta il peso sollevato con il peso limite raccomandato per quella specifica operazione.",
     "punti": [
      "Situazione: un addetto di magazzino solleva scatole da 12 kg da un bancale a 25 cm da terra e le deposita su un ripiano a 100 cm, circa una volta al minuto, per meno di un’ora",
      "Dati: distanza orizzontale del carico dal corpo 40 cm; rotazione del tronco circa 30°; presa buona",
      "Fattori: altezza 0,85 · dislocazione 0,88 · distanza orizzontale 0,63 · asimmetria 0,90 · frequenza 0,94 · presa 1,00",
      "Peso limite raccomandato = 25 kg × 0,85 × 0,88 × 0,63 × 0,90 × 0,94 × 1,00 ≈ 10 kg",
      "Indice di sollevamento = 12 kg ÷ 10 kg ≈ 1,2: valore superiore a 1, l’operazione va riprogettata",
      "Interventi: avvicinare il carico al corpo, sollevare il bancale con un tavolo elevatore, eliminare la rotazione, ridurre il peso dei colli"
     ],
     "appro": "L’indice di sollevamento è il rapporto tra il peso effettivamente sollevato e il peso limite raccomandato, ottenuto moltiplicando una massa di riferimento per fattori di riduzione che tengono conto della geometria e della frequenza del gesto. Con indice fino a 1 il rischio è accettabile per la popolazione lavorativa di riferimento; oltre 1 occorrono interventi di riprogettazione, sorveglianza sanitaria e formazione mirata. La massa di riferimento dipende dalla popolazione tutelata: nella prassi italiana si adottano valori diversi per genere ed età. Le patologie muscolo-scheletriche rappresentano circa tre denunce su quattro di malattia professionale (Relazione annuale INAIL 2025).",
     "rif": "Artt. 167-169 e Allegato XXXIII D.lgs. 81/2008 · UNI ISO 11228-1",
     "nar": "Facciamo un esempio di calcolo. Un addetto solleva scatole da dodici chili da un bancale a venticinque centimetri da terra e le deposita su un ripiano a un metro, circa una volta al minuto. Il carico è tenuto a quaranta centimetri dal corpo e c’è una rotazione del tronco di circa trenta gradi. Moltiplicando la massa di riferimento per i fattori di riduzione si ottiene un peso limite raccomandato di circa dieci chili. Il rapporto tra dodici e dieci dà un indice di sollevamento di uno virgola due: superiore a uno, quindi l’operazione va riprogettata. Ad esempio, si può sollevare il bancale con un tavolo elevatore, avvicinare il carico al corpo ed eliminare la rotazione.",
     "p": 1.6
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD6",
     "voci": [
      "MMC: sollevamento (11228-1), traino e spinta (11228-2), movimenti ripetitivi (11228-3, OCRA)",
      "Posture: UNI ISO 11226, UNI EN 1005-4",
      "Misure tecniche prima di quelle organizzative; sorveglianza sanitaria",
      "Videoterminali, orari e lavoro agile"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 6.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD6",
     "soglia": 4,
     "domande": [
      [
       "Il metodo indicato dalla UNI ISO 11228-3 per la valutazione dettagliata dei movimenti ripetitivi è:",
       [
        "NIOSH",
        "OCRA",
        "Snook-Ciriello",
        "WBGT"
       ],
       1,
       "UNI ISO 11228-3."
      ],
      [
       "Un punteggio della check list OCRA di 6 indica una fascia:",
       [
        "Verde",
        "Gialla",
        "Rossa",
        "Viola"
       ],
       0,
       "Fino a 7,5."
      ],
      [
       "Traino e spinta si valutano secondo la norma:",
       [
        "UNI ISO 11228-2",
        "UNI EN 689",
        "UNI EN 795",
        "UNI 7249"
       ],
       0,
       "Forze iniziali e di mantenimento."
      ],
      [
       "La misura prioritaria per evitare la MMC secondo l’art. 168 è:",
       [
        "La cintura lombare",
        "L’uso di attrezzature meccaniche e misure organizzative",
        "La sola formazione",
        "La visita medica"
       ],
       1,
       "Art. 168."
      ],
      [
       "Nel 2025 le patologie muscolo-scheletriche sono state, tra le malattie professionali denunciate, circa:",
       [
        "Una su dieci",
        "Tre su quattro",
        "La metà",
        "Nessuna"
       ],
       1,
       "INAIL, Relazione annuale 2025."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 6.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M7",
   "titolo": "UD7 · Rischi di natura psico-sociale",
   "min": 180,
   "foto": "chi",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD7",
     "sott": "Rischi di natura psico-sociale",
     "nar": "Unità didattica sette. I rischi psicosociali.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Stress lavoro-correlato, violenza e molestie",
     "rif": "Art. 28, c. 1-bis D.lgs. 81/2008 · Accordo europeo 8/10/2004 · Convenzione ILO n. 190 (L. 4/2021)",
     "lead": "I rischi psicosociali si valutano con metodi strutturati e si prevengono con misure organizzative.",
     "punti": [
      "Stress lavoro-correlato: valutazione preliminare con eventi sentinella e indicatori di contenuto e contesto; valutazione approfondita se necessaria (metodologia INAIL)",
      "Violenza da terzi e aggressioni: analisi degli episodi, misure ambientali, procedurali, formative",
      "Molestie e violenza di genere: politiche, canali di segnalazione, tutela da ritorsioni",
      "Burn-out e tecnostress: carichi, ruoli, disconnessione"
     ],
     "nar": "Lo stress lavoro-correlato si valuta con una fase preliminare basata su eventi sentinella e indicatori di contenuto e di contesto, e con una fase approfondita quando necessaria. La violenza da terzi e le molestie richiedono analisi degli episodi, misure ambientali e organizzative, canali di segnalazione e tutela da ritorsioni.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "La valutazione approfondita: lo strumento indicatore INAIL",
     "foto": false,
     "lead": "Quando la valutazione preliminare rileva elementi di rischio e le azioni correttive risultano inefficaci, si procede alla valutazione approfondita della percezione soggettiva dei lavoratori.",
     "punti": [
      "Questionario strumento indicatore adattato dall’INAIL dai Management Standards britannici: 35 domande in 7 dimensioni",
      "Dimensioni: domanda, controllo, supporto del management, supporto dei colleghi, relazioni, ruolo, cambiamento",
      "Somministrazione anonima per gruppi omogenei, con restituzione degli esiti e condivisione delle misure",
      "Focus group e interviste per approfondire le criticità emerse",
      "Piano di interventi: organizzazione del lavoro, chiarezza dei ruoli, comunicazione, formazione dei responsabili, gestione dei conflitti"
     ],
     "appro": "La metodologia INAIL (edizione aggiornata 2017) prevede il coinvolgimento del medico competente, dell’RSPP e dell’RLS e richiede che i gruppi omogenei abbiano una numerosità sufficiente a garantire l’anonimato. La norma UNI ISO 45003 fornisce linee guida per la gestione dei rischi psicosociali nel sistema di gestione.",
     "rif": "Art. 28, c. 1-bis D.lgs. 81/2008 · INAIL, Metodologia 2017 · UNI ISO 45003",
     "nar": "Quando la valutazione preliminare evidenzia problemi e le misure non funzionano, si passa alla valutazione approfondita. Lo strumento proposto dall’INAIL è un questionario di trentacinque domande su sette dimensioni: domanda, controllo, supporto dei responsabili e dei colleghi, relazioni, ruolo e cambiamento. Si somministra in forma anonima per gruppi omogenei, si restituiscono gli esiti e si condividono le misure.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Burnout, mobbing e straining",
     "foto": false,
     "lead": "I fenomeni di disagio lavorativo hanno definizioni diverse e diverse conseguenze giuridiche.",
     "punti": [
      "Burnout: fenomeno occupazionale classificato nell’ICD-11 (codice QD85), derivante da stress cronico sul lavoro non gestito con successo: esaurimento, distanziamento mentale, ridotta efficacia professionale",
      "Mobbing: condotte vessatorie sistematiche e prolungate nel tempo, con intento persecutorio, che causano un danno alla salute o alla personalità del lavoratore (elaborazione giurisprudenziale)",
      "Straining: azione ostile anche isolata ma con effetti durevoli (ad esempio un demansionamento punitivo)",
      "Fondamento della tutela: art. 2087 c.c. (integrità fisica e personalità morale)",
      "Prevenzione: organizzazione chiara, gestione dei conflitti, canali di segnalazione, formazione dei responsabili"
     ],
     "appro": "La giurisprudenza di legittimità ha riconosciuto la responsabilità del datore di lavoro, ai sensi dell’art. 2087 c.c., anche quando l’ambiente lavorativo stressogeno sia fonte di danno alla salute, a prescindere dalla qualificazione delle condotte come mobbing. Per il RSPP il punto rilevante è la prevenzione organizzativa, non la qualificazione giuridica.",
     "rif": "Art. 2087 c.c. · art. 28 D.lgs. 81/2008 · OMS, ICD-11 (QD85)",
     "nar": "Burnout, mobbing e straining sono fenomeni diversi. Il burnout è classificato dall’Organizzazione mondiale della sanità come fenomeno occupazionale legato allo stress cronico non gestito. Il mobbing è una serie di condotte vessatorie sistematiche e prolungate; lo straining un’azione ostile anche isolata ma con effetti durevoli. Il fondamento della tutela è l’articolo 2087 del codice civile; per il RSPP conta soprattutto la prevenzione organizzativa.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Aggressioni al personale: il caso della sanità e dei servizi al pubblico",
     "foto": false,
     "lead": "La violenza di terzi è un rischio professionale da valutare e prevenire, soprattutto nei settori a contatto con il pubblico.",
     "punti": [
      "Sanità: Raccomandazione del Ministero della Salute n. 8/2007 per prevenire gli atti di violenza a danno degli operatori sanitari",
      "L. 113/2020: misure per la sicurezza degli esercenti le professioni sanitarie e socio-sanitarie, osservatorio nazionale, aggravanti per le lesioni",
      "Misure strutturali: layout delle aree di attesa, vie di fuga, pulsanti di allarme, videosorveglianza nel rispetto delle norme",
      "Misure organizzative: personale adeguato nei turni critici, presenza di vigilanza, procedure di gestione dell’utente aggressivo, segnalazione degli eventi",
      "Formazione alla de-escalation e supporto psicologico dopo l’evento"
     ],
     "appro": "La segnalazione sistematica degli episodi (anche verbali) consente di conoscere il fenomeno e di valutare l’efficacia delle misure. La Convenzione ILO n. 190 include la violenza di terzi nel proprio campo di applicazione.",
     "rif": "Raccomandazione Ministero della Salute n. 8/2007 · L. 113/2020 · Convenzione ILO n. 190 · art. 28 D.lgs. 81/2008",
     "nar": "La violenza di terzi è un rischio da valutare, soprattutto nella sanità e nei servizi al pubblico. Il Ministero della Salute ha emanato una raccomandazione specifica nel 2007 e la legge 113 del 2020 ha introdotto misure per la sicurezza degli operatori sanitari. Le misure riguardano gli spazi, gli allarmi, l’organizzazione dei turni, le procedure di gestione dell’utente aggressivo, la formazione alla de-escalation e il supporto dopo l’evento.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Lo stress lavoro-correlato: il metodo INAIL",
     "foto": false,
     "lead": "La valutazione dello stress lavoro-correlato è obbligatoria per tutte le aziende (art. 28, c. 1-bis) e si svolge secondo le indicazioni della Commissione consultiva permanente del 18 novembre 2010, attuate dalla metodologia INAIL.",
     "punti": [
      "Valutazione preliminare: indicatori oggettivi e verificabili, per gruppi omogenei di lavoratori",
      "Eventi sentinella: infortuni, assenze per malattia, turnover, procedimenti e sanzioni, segnalazioni del medico competente, lamentele formalizzate",
      "Fattori di contenuto (ambiente, carichi e ritmi, orario e turni, corrispondenza competenze–mansioni) e di contesto (ruolo, autonomia, conflitti, comunicazione, sviluppo di carriera)",
      "Se emergono elementi di rischio e le misure correttive risultano inefficaci, si procede alla valutazione approfondita con il coinvolgimento dei lavoratori (questionari, focus group)",
      "Partecipano il datore di lavoro, l’RSPP, il medico competente e l’RLS"
     ],
     "appro": "L’Accordo europeo dell’8 ottobre 2004, recepito con l’Accordo interconfederale del 9 giugno 2008, definisce lo stress come una condizione accompagnata da sofferenze o disfunzioni fisiche, psichiche, psicologiche o sociali, conseguente al fatto che le persone non si sentono in grado di corrispondere alle richieste o alle aspettative riposte in loro. La norma UNI ISO 45003 fornisce linee guida per la gestione dei rischi psicosociali.",
     "rif": "Art. 28, c. 1-bis D.lgs. 81/2008 · Indicazioni Commissione consultiva 18/11/2010 · INAIL, Metodologia per la valutazione e gestione del rischio stress lavoro-correlato · UNI ISO 45003",
     "nar": "La valutazione dello stress lavoro-correlato è obbligatoria per tutte le aziende. La metodologia INAIL prevede una fase preliminare con indicatori oggettivi, come infortuni, assenze, turnover e segnalazioni del medico competente, e l’esame dei fattori di contenuto e di contesto del lavoro. Se emergono elementi di rischio e le misure non sono efficaci, si passa a una valutazione approfondita con il coinvolgimento diretto dei lavoratori.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Violenza e molestie nel mondo del lavoro: la Convenzione ILO n. 190",
     "foto": false,
     "lead": "La Convenzione ILO n. 190 del 2019, ratificata dall’Italia con la L. 4/2021, riconosce il diritto di ogni persona a un mondo del lavoro libero da violenza e molestie, comprese quelle di genere.",
     "punti": [
      "Violenza e molestie: comportamenti, pratiche o minacce che mirano a provocare o provocano un danno fisico, psicologico, sessuale o economico",
      "Ambito ampio: luoghi di lavoro, spostamenti, comunicazioni anche digitali, alloggi forniti dal datore di lavoro, eventi sociali legati al lavoro",
      "Il datore di lavoro tiene conto della violenza e delle molestie e dei rischi psicosociali connessi nella gestione della salute e sicurezza",
      "Misure: politica aziendale, valutazione dei rischi (ad esempio lavoro a contatto con il pubblico, lavoro isolato, turni notturni), procedure di segnalazione riservate, formazione",
      "Settori esposti: sanità, servizi sociali, commercio, trasporti, sportelli al pubblico, vigilanza"
     ],
     "appro": "La violenza di terzi (utenti, clienti, pazienti) è un rischio da valutare nel DVR ai sensi dell’art. 28: le misure includono l’organizzazione degli spazi, i sistemi di allarme, la presenza di più operatori, la formazione alla gestione delle situazioni conflittuali e il supporto dopo un evento.",
     "rif": "Convenzione ILO n. 190/2019 · L. 15 gennaio 2021, n. 4 · art. 28 D.lgs. 81/2008",
     "nar": "La Convenzione dell’Organizzazione internazionale del lavoro numero 190, ratificata dall’Italia nel 2021, riconosce il diritto a un lavoro libero da violenza e molestie. L’ambito è ampio: comprende i luoghi di lavoro, gli spostamenti, le comunicazioni digitali e gli eventi legati al lavoro. Il datore di lavoro deve valutare questi rischi, soprattutto nel lavoro a contatto con il pubblico, isolato o notturno, e predisporre procedure di segnalazione riservate.",
     "p": 1.5
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD7",
     "voci": [
      "Stress lavoro-correlato: valutazione preliminare e approfondita (strumento indicatore INAIL, 7 dimensioni)",
      "Burnout (ICD-11 QD85), mobbing, straining; art. 2087 c.c.",
      "Violenza di terzi: Raccomandazione n. 8/2007, L. 113/2020, Convenzione ILO 190"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 7.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD7",
     "soglia": 3,
     "domande": [
      [
       "Lo strumento indicatore INAIL per la valutazione approfondita comprende:",
       [
        "10 domande",
        "35 domande in 7 dimensioni",
        "100 domande",
        "Un colloquio individuale"
       ],
       1,
       "Metodologia INAIL."
      ],
      [
       "Il burnout è classificato nell’ICD-11 come:",
       [
        "Malattia psichiatrica",
        "Fenomeno occupazionale",
        "Infortunio",
        "Malattia infettiva"
       ],
       1,
       "QD85."
      ],
      [
       "Il fondamento civilistico della tutela contro il mobbing è:",
       [
        "Art. 2087 c.c.",
        "Art. 590 c.p.",
        "Art. 71 D.lgs. 81/2008",
        "D.P.R. 177/2011"
       ],
       0,
       "Integrità fisica e personalità morale."
      ],
      [
       "La legge sulla sicurezza degli esercenti le professioni sanitarie è la:",
       [
        "L. 113/2020",
        "L. 215/2021",
        "L. 81/2017",
        "L. 68/1999"
       ],
       0,
       "L. 113/2020."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 7.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M8",
   "titolo": "UD8 · Agenti fisici",
   "min": 300,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD8",
     "sott": "Agenti fisici",
     "nar": "Unità didattica otto. Gli agenti fisici.",
     "p": 0.6
    },
    {
     "t": "articolo",
     "tit": "Rumore: valori di azione e limite",
     "art": "Artt. 188-198 D.lgs. 81/2008",
     "commi": [
      [
       "VIA",
       "Valori inferiori di azione: LEX,8h = 80 dB(A); ppeak = 135 dB(C)"
      ],
      [
       "VSA",
       "Valori superiori di azione: LEX,8h = 85 dB(A); ppeak = 137 dB(C)"
      ],
      [
       "VLE",
       "Valori limite di esposizione: LEX,8h = 87 dB(A); ppeak = 140 dB(C), tenendo conto dei DPI"
      ],
      [
       "Misura",
       "UNI EN ISO 9612; incertezza di misura; personale qualificato"
      ],
      [
       "Misure",
       "Riduzione alla fonte, isolamento, organizzazione, otoprotettori, segnaletica, sorveglianza sanitaria"
      ]
     ],
     "nar": "Per il rumore il decreto fissa valori inferiori di azione a ottanta decibel A, superiori a ottantacinque, e limite a ottantasette, tenendo conto dei DPI. La misura segue la norma UNI EN ISO novemilaseicentododici, con la relativa incertezza.",
     "p": 1.5
    },
    {
     "t": "definizioni",
     "tit": "Gli altri agenti fisici",
     "sott": "Titolo VIII D.lgs. 81/2008 · Consultare tutte le schede",
     "voci": [
      [
       "Vib",
       "Vibrazioni",
       "Mano-braccio: azione 2,5 m/s², limite 5 m/s²; corpo intero: azione 0,5 m/s², limite 1 m/s² (art. 201)."
      ],
      [
       "CEM",
       "Campi elettromagnetici",
       "Valori di azione e limite (Capo IV); attenzione ai portatori di dispositivi medici impiantabili."
      ],
      [
       "ROA",
       "Radiazioni ottiche artificiali",
       "Laser, UV, saldatura: valori limite dell'Allegato XXXVII."
      ],
      [
       "Clima",
       "Microclima",
       "Ambienti moderati e severi; stress termico."
      ],
      [
       "RI",
       "Radiazioni ionizzanti",
       "D.lgs. 101/2020: esperto di radioprotezione; radon nei luoghi di lavoro (300 Bq/m³)."
      ]
     ],
     "nar": "Gli altri agenti fisici comprendono vibrazioni, con valori di azione e limite per il sistema mano-braccio e per il corpo intero, campi elettromagnetici, radiazioni ottiche artificiali, microclima e radiazioni ionizzanti, disciplinate dal decreto centouno del duemilaventi, compreso il radon nei luoghi di lavoro.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il livello di esposizione giornaliera",
     "foto": false,
     "lead": "Il livello di esposizione giornaliera LEX,8h riporta a 8 ore le diverse esposizioni della giornata, con somma energetica.",
     "punti": [
      "Mansione: 4 ore a 85 dB(A) alla pressa e 2 ore a 91 dB(A) alla smerigliatura; il resto del turno in zona silenziosa",
      "LEX,8h = 10 · log [ (4/8) · 10^8,5 + (2/8) · 10^9,1 ] ≈ 86,7 dB(A)",
      "Confronto: supera il valore superiore di azione di 85 dB(A) e resta sotto il valore limite di 87 dB(A), che si verifica tenendo conto dell’attenuazione dei DPI",
      "Conseguenze: uso obbligatorio degli otoprotettori (art. 193), programma di misure tecniche e organizzative (art. 192), segnalazione e delimitazione delle aree, sorveglianza sanitaria (art. 196)",
      "Osservazione: le 2 ore di smerigliatura «pesano» più delle 4 ore alla pressa, perché la scala dei decibel è logaritmica: +3 dB equivalgono al raddoppio dell’energia"
     ],
     "appro": "I valori del Capo II del Titolo VIII sono: valori inferiori di azione 80 dB(A) e 135 dB(C) di picco; valori superiori di azione 85 dB(A) e 137 dB(C); valori limite 87 dB(A) e 140 dB(C) (art. 189). La misurazione segue la UNI EN ISO 9612. Un intervento alla fonte che riduce di 6 dB(A) il rumore della smerigliatura (da 91 a 85) porterebbe l’esposizione a circa 85 dB(A): è l’esempio di come la riduzione alla fonte sia più efficace del solo DPI.",
     "rif": "Artt. 189-196 D.lgs. 81/2008 · UNI EN ISO 9612",
     "nar": "Calcoliamo un’esposizione al rumore. Un addetto lavora quattro ore a 85 decibel e due ore a 91. Poiché la scala è logaritmica, i livelli non si sommano in modo aritmetico ma energetico: il risultato riportato a otto ore è circa 86,7 decibel. Si supera quindi il valore superiore di azione di 85, e gli otoprotettori diventano obbligatori insieme alla sorveglianza sanitaria e a un programma di riduzione. Notate che le due ore di smerigliatura pesano più delle quattro alla pressa: ogni tre decibel in più raddoppia l’energia sonora.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: l’esposizione a vibrazioni mano-braccio",
     "foto": false,
     "lead": "L’esposizione giornaliera alle vibrazioni A(8) si calcola dal valore di accelerazione dell’utensile e dalla durata effettiva di impugnatura.",
     "punti": [
      "Utensile: smerigliatrice angolare con accelerazione totale di 5 m/s²",
      "Tempo effettivo di impugnatura: 2 ore al giorno (non la durata del turno)",
      "A(8) = 5 · √(2/8) = 2,5 m/s²: si raggiunge il valore d’azione per il sistema mano-braccio",
      "Valore limite giornaliero mano-braccio: 5 m/s²; per il corpo intero: valore d’azione 0,5 m/s² e valore limite 1,0 m/s² (art. 201)",
      "Misure: utensili a basse vibrazioni, manutenzione, impugnature antivibranti, riduzione dei tempi, guanti antivibranti certificati, sorveglianza sanitaria"
     ],
     "appro": "La radice quadrata deriva dal criterio di equivalenza energetica: dimezzare il tempo di esposizione riduce A(8) di circa il 30%. I valori di emissione dichiarati dal fabbricante sono ottenuti in condizioni di prova e possono sottostimare l’esposizione reale: la valutazione può basarsi su misure (UNI EN ISO 5349) o su banche dati riconosciute.",
     "rif": "Artt. 199-205 D.lgs. 81/2008 · UNI EN ISO 5349-1 e 5349-2",
     "nar": "Vediamo ora le vibrazioni. Una smerigliatrice con un’accelerazione di cinque metri al secondo quadrato, impugnata per due ore al giorno, dà un’esposizione giornaliera di due virgola cinque, pari al valore d’azione. Attenzione: si considera il tempo effettivo di impugnatura, non la durata del turno. Al raggiungimento del valore d’azione scattano le misure tecniche e organizzative e la sorveglianza sanitaria.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Campi elettromagnetici e radiazioni ottiche artificiali",
     "foto": false,
     "lead": "I Capi IV e V del Titolo VIII disciplinano i campi elettromagnetici e le radiazioni ottiche artificiali, con valori limite di esposizione e valori di azione.",
     "punti": [
      "CEM (Capo IV, come modificato dal D.lgs. 159/2016): valori limite per gli effetti sanitari e sensoriali, livelli di azione; attenzione ai portatori di dispositivi medici impiantabili attivi, lavoratori particolarmente sensibili",
      "Sorgenti tipiche: saldatrici a resistenza, forni a induzione, magnetizzatori, risonanza magnetica, trasmettitori radio",
      "ROA (Capo V): radiazioni ultraviolette, visibili e infrarosse da sorgenti artificiali (saldatura ad arco, lampade UV, laser)",
      "Laser: classificazione UNI EN 60825-1 (classi 1, 1M, 2, 2M, 3R, 3B, 4); per le classi 3B e 4 servono misure specifiche e un addetto alla sicurezza laser",
      "Radiazione solare: rischio da valutare per i lavori all’aperto ai sensi dell’art. 28, anche se non rientra nel Capo V"
     ],
     "appro": "Le banche dati e le guide europee e nazionali (ad esempio la guida non vincolante della Commissione europea sulla Direttiva 2013/35/UE) consentono spesso di valutare i CEM senza misure per le sorgenti di uso comune, limitando le misurazioni ai casi in cui i livelli di azione possono essere superati.",
     "rif": "Titolo VIII, Capi IV e V D.lgs. 81/2008 · D.lgs. 159/2016 · Direttiva 2013/35/UE · UNI EN 60825-1",
     "nar": "I campi elettromagnetici e le radiazioni ottiche artificiali hanno capi specifici nel decreto 81. Per i campi elettromagnetici attenzione ai portatori di dispositivi impiantabili, come i pacemaker, che sono lavoratori particolarmente sensibili. Per le radiazioni ottiche le sorgenti tipiche sono la saldatura ad arco, le lampade ultraviolette e i laser, classificati dalla norma UNI EN 60825-1. La radiazione solare va comunque valutata per i lavori all’aperto.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Radiazioni ionizzanti e radon",
     "foto": false,
     "lead": "Le radiazioni ionizzanti sono disciplinate dal D.lgs. 101/2020, che ha recepito la Direttiva 2013/59/Euratom e comprende anche l’esposizione al radon nei luoghi di lavoro.",
     "punti": [
      "Radon: livello di riferimento di 300 Bq/m³ in termini di concentrazione media annua per i luoghi di lavoro",
      "Misurazioni obbligatorie nei luoghi di lavoro sotterranei, nei luoghi a piano terra o semisotterranei situati nelle aree prioritarie individuate dalle Regioni e negli stabilimenti termali",
      "Superamento del livello di riferimento: azioni di rimedio e, se persistente, valutazione delle dosi da parte di un esperto in radioprotezione",
      "Pratiche con sorgenti di radiazioni: esperto di radioprotezione, classificazione dei lavoratori (esposti di categoria A e B) e delle aree, sorveglianza dosimetrica e medica",
      "Materiali NORM: industrie che trattano materiali con radionuclidi naturali (ad esempio alcune lavorazioni di sabbie, fosfati, cementi)"
     ],
     "appro": "Le aree prioritarie per il radon sono individuate dalle Regioni secondo i criteri del D.lgs. 101/2020 e del Piano nazionale d’azione per il radon. Il radon è la seconda causa di tumore polmonare dopo il fumo di tabacco.",
     "rif": "D.lgs. 101/2020, artt. 12, 16-18 e Titolo XI · Direttiva 2013/59/Euratom",
     "nar": "Le radiazioni ionizzanti sono disciplinate dal decreto legislativo 101 del 2020, che comprende anche il radon. Il livello di riferimento nei luoghi di lavoro è di trecento becquerel per metro cubo come media annua. Le misurazioni sono obbligatorie nei luoghi sotterranei, in quelli a piano terra nelle aree prioritarie e negli stabilimenti termali. Se il livello è superato si adottano azioni di rimedio. Il radon è la seconda causa di tumore polmonare dopo il fumo.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: scegliere guanti e otoprotettori",
     "foto": false,
     "lead": "Un DPI protegge solo se è adatto al rischio specifico, alla persona e al lavoro da svolgere (art. 76). La scelta si basa sui dati tecnici, non sull’aspetto.",
     "punti": [
      "Guanti chimici (UNI EN ISO 374-1): il tipo A, B o C indica il numero di sostanze di prova superate; per ciascuna sostanza conta il tempo di permeazione (livello 6 = oltre 480 minuti)",
      "Il materiale si sceglie sulla sostanza (nitrile, butile, neoprene, laminati): il guanto adatto a un solvente può essere inadatto a un altro; il riferimento è la sezione 8 della SDS",
      "Otoprotettori: si valuta l’attenuazione (SNR o valori H, M, L) rispetto al livello misurato; l’obiettivo è un livello effettivo all’orecchio tra circa 70 e 80 dB(A) (UNI EN 458)",
      "Una protezione eccessiva isola il lavoratore e gli impedisce di percepire segnali di allarme e comunicazioni: anche la sovraprotezione è un errore di scelta",
      "DPI di III categoria (anticaduta, respiratori, otoprotettori) richiedono addestramento obbligatorio (art. 77, c. 5)"
     ],
     "appro": "Il Regolamento (UE) 2016/425 classifica i DPI in tre categorie in funzione del rischio. Il datore di lavoro fornisce i DPI, ne cura la manutenzione e la sostituzione, li destina a uso personale e informa preliminarmente il lavoratore dei rischi dai quali il DPI lo protegge (art. 77). Il lavoratore li utilizza conformemente all’informazione, alla formazione e all’addestramento ricevuti, ne ha cura e segnala difetti e inconvenienti (art. 78).",
     "rif": "Artt. 74-79 D.lgs. 81/2008 · Reg. (UE) 2016/425 · UNI EN ISO 374-1 · UNI EN 458",
     "nar": "Il dispositivo di protezione deve essere adatto al rischio specifico. Per i guanti chimici conta il materiale e il tempo di permeazione per la sostanza utilizzata: un guanto adatto a un solvente può essere inutile per un altro, e il riferimento è la scheda di sicurezza. Per gli otoprotettori l’obiettivo è un livello all’orecchio tra settanta e ottanta decibel: proteggere troppo isola il lavoratore e gli impedisce di sentire allarmi e comunicazioni.",
     "p": 1.5
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD8",
     "voci": [
      "Rumore: LEX,8h, valori di azione e limite, somma energetica",
      "Vibrazioni: A(8), valori di azione e limite per mano-braccio e corpo intero",
      "CEM e ROA: Capi IV e V, portatori di dispositivi impiantabili, classi laser",
      "Radiazioni ionizzanti e radon: D.lgs. 101/2020, 300 Bq/m³"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 8.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD8",
     "soglia": 4,
     "domande": [
      [
       "Il livello di riferimento per il radon nei luoghi di lavoro è:",
       [
        "100 Bq/m³",
        "300 Bq/m³",
        "1.000 Bq/m³",
        "3.000 Bq/m³"
       ],
       1,
       "D.lgs. 101/2020."
      ],
      [
       "I lavoratori portatori di dispositivi medici impiantabili attivi, rispetto ai CEM, sono:",
       [
        "Esclusi dalla valutazione",
        "Lavoratori particolarmente sensibili",
        "Esposti di categoria A",
        "Non rilevanti"
       ],
       1,
       "Capo IV."
      ],
      [
       "La classificazione dei laser segue la norma:",
       [
        "UNI EN 60825-1",
        "UNI EN 689",
        "CEI 64-8",
        "UNI EN 795"
       ],
       0,
       "Classi 1-4."
      ],
      [
       "Il valore superiore di azione per il rumore è:",
       [
        "80 dB(A)",
        "85 dB(A)",
        "87 dB(A)",
        "90 dB(A)"
       ],
       1,
       "Art. 189."
      ],
      [
       "Con 5 m/s² per 2 ore, A(8) vale:",
       [
        "1,25 m/s²",
        "2,5 m/s²",
        "5 m/s²",
        "10 m/s²"
       ],
       1,
       "5 × √(2/8)."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 8.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M9",
   "titolo": "UD9 · Agenti chimici, cancerogeni e mutageni, amianto",
   "min": 300,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD9",
     "sott": "Agenti chimici, cancerogeni e mutageni, amianto",
     "nar": "Unità didattica nove. Agenti chimici, cancerogeni, mutageni e amianto.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Agenti chimici pericolosi",
     "rif": "Titolo IX, Capo I D.lgs. 81/2008 · Reg. (CE) 1272/2008 (CLP) · Reg. (CE) 1907/2006 (REACH) · UNI EN 689",
     "lead": "La valutazione considera proprietà pericolose, informazioni della scheda di sicurezza, livello, tipo e durata dell'esposizione, valori limite.",
     "punti": [
      "Classificazione ed etichettatura CLP; schede di dati di sicurezza (Allegato II REACH)",
      "Rischio basso per la sicurezza e irrilevante per la salute: misure generali",
      "Altrimenti: misure specifiche, misurazioni (UNI EN 689), sorveglianza sanitaria, cartella",
      "Valori limite di esposizione professionale (Allegato XXXVIII) e biologici (Allegato XXXIX)"
     ],
     "nar": "La valutazione del rischio chimico considera le proprietà pericolose secondo il regolamento CLP, le schede di sicurezza, le modalità di esposizione e i valori limite. Se il rischio non è basso per la sicurezza e irrilevante per la salute servono misure specifiche, misurazioni secondo la UNI EN 689 e sorveglianza sanitaria.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Cancerogeni, mutageni, reprotossici e amianto",
     "rif": "Titolo IX, Capi II e III D.lgs. 81/2008 · D.lgs. 213/2025",
     "lead": "Per gli agenti cancerogeni, mutageni e reprotossici vale il principio di sostituzione e il registro degli esposti.",
     "punti": [
      "Sostituzione; ciclo chiuso; riduzione al minimo del numero di esposti",
      "Registro di esposizione e cartelle sanitarie",
      "Polveri di legno duro, silice cristallina respirabile, gas di scarico diesel tra gli agenti dell'Allegato XLII",
      "Amianto: valore limite 0,01 fibre/cm³ (D.lgs. 213/2025); notifica, piano di lavoro, imprese iscritte all'Albo"
     ],
     "nar": "Per cancerogeni, mutageni e reprotossici vale il principio di sostituzione, con riduzione degli esposti e registro di esposizione. Per l'amianto il decreto duecentotredici del duemilaventicinque ha portato il valore limite a zero virgola zero uno fibre per centimetro cubo.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: leggere la scheda di dati di sicurezza",
     "foto": false,
     "lead": "La scheda di dati di sicurezza (SDS) è redatta in 16 sezioni secondo l’Allegato II del Regolamento REACH, nel formato del Regolamento (UE) 2020/878.",
     "punti": [
      "Sezione 2: classificazione ed elementi dell’etichetta (pittogrammi, avvertenza, indicazioni di pericolo H, consigli P)",
      "Sezione 7: manipolazione e immagazzinamento (incompatibilità, ventilazione, temperature)",
      "Sezione 8: controllo dell’esposizione e protezione individuale (valori limite, DPI con il materiale dei guanti e il filtro del respiratore)",
      "Sezione 4 e 5: primo soccorso e lotta antincendio; sezione 6: misure in caso di rilascio accidentale",
      "Sezione 11: informazioni tossicologiche (effetti acuti, sensibilizzazione, cancerogenicità)"
     ],
     "appro": "Esempio: un diluente con H225 (liquido e vapori facilmente infiammabili), H336 (può provocare sonnolenza o vertigini) e H373 (può provocare danni agli organi in caso di esposizione prolungata o ripetuta) richiede: stoccaggio in armadio per infiammabili, lontano da fonti di innesco; aspirazione localizzata durante l’uso; guanti del materiale indicato in sezione 8 (non un guanto qualsiasi); respiratore con filtro per vapori organici (tipo A) se la ventilazione non è sufficiente. Il datore di lavoro rende disponibili le SDS ai lavoratori (art. 227).",
     "rif": "Reg. (CE) 1907/2006 (REACH), art. 31 e Allegato II · Reg. (UE) 2020/878 · Reg. (CE) 1272/2008 (CLP) · art. 227 D.lgs. 81/2008",
     "nar": "Vediamo come leggere una scheda di dati di sicurezza. È divisa in sedici sezioni. La seconda indica la classificazione e i pericoli; la settima come manipolare e stoccare il prodotto; l’ottava i valori limite e i dispositivi di protezione, compreso il materiale dei guanti e il tipo di filtro. Le sezioni quattro, cinque e sei spiegano cosa fare in caso di emergenza. Per un diluente facilmente infiammabile e nocivo per inalazione servono stoccaggio in armadio per infiammabili, aspirazione localizzata e i guanti indicati nella scheda, non guanti qualsiasi.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Valori limite e misurazioni dell’esposizione",
     "foto": false,
     "lead": "Il rischio chimico si governa confrontando l’esposizione dei lavoratori con i valori limite di esposizione professionale.",
     "punti": [
      "Valori limite di esposizione professionale: Allegato XXXVIII; valori limite biologici: Allegato XXXIX",
      "Per gli agenti cancerogeni e mutageni: valori limite dell’Allegato XLIII e obbligo di ridurre l’esposizione al livello più basso tecnicamente possibile",
      "Misurazioni secondo la UNI EN 689: campionamenti personali rappresentativi, gruppi di esposizione similare, confronto statistico con il valore limite",
      "Rischio «basso per la sicurezza e irrilevante per la salute»: se la valutazione lo dimostra, non si applicano alcune misure specifiche (art. 224, c. 2)",
      "Superamento del valore limite: il datore di lavoro identifica le cause e adotta immediatamente le misure di prevenzione e protezione (art. 225, c. 8)"
     ],
     "appro": "Il valore limite è espresso come media ponderata nel tempo su 8 ore (TWA) e, per alcune sostanze, come limite per brevi esposizioni di 15 minuti (STEL). Il confronto con i valori limite non è l’unico strumento: la valutazione considera anche le proprietà pericolose, le quantità, le modalità d’uso e l’efficacia delle misure (art. 223).",
     "rif": "Artt. 223-225 e Allegati XXXVIII, XXXIX, XLIII D.lgs. 81/2008 · UNI EN 689",
     "nar": "Il rischio chimico si governa confrontando l’esposizione dei lavoratori con i valori limite fissati dagli allegati del decreto 81. Le misurazioni si eseguono secondo la norma UNI EN 689, con campionamenti personali e un confronto statistico con il limite. Per i cancerogeni l’esposizione va ridotta al livello più basso tecnicamente possibile. Se il valore limite è superato, il datore di lavoro deve individuarne subito le cause e intervenire.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il test preliminare della UNI EN 689",
     "foto": false,
     "lead": "La UNI EN 689:2018 definisce la strategia per verificare la conformità ai valori limite per inalazione: si costituiscono gruppi di esposizione similare e si eseguono misure personali rappresentative.",
     "punti": [
      "Gruppo di esposizione similare: lavoratori con profilo di esposizione analogo per compiti, durata, processi e misure",
      "Test preliminare con 3 misure: se tutte inferiori al 10% del valore limite, conformità",
      "Con 4 misure il criterio è il 15%, con 5 misure il 20% del valore limite",
      "Se una misura supera il valore limite: non conformità e misure immediate",
      "Negli altri casi si passa al test statistico (almeno 6 misure): conformità se la probabilità di superamento è inferiore al 5% con confidenza del 70%"
     ],
     "appro": "Esempio: per un solvente con valore limite di 50 mg/m³, tre misure di 2,1, 3,4 e 4,0 mg/m³ sono tutte inferiori a 5 mg/m³ (10% del limite): il gruppo è conforme. Se la terza fosse stata 7,0 mg/m³, il test preliminare non sarebbe concluso e occorrerebbe passare al test statistico. La norma richiede anche la rivalutazione periodica, con intervallo stabilito in funzione dell’esito del confronto.",
     "rif": "Art. 225 D.lgs. 81/2008 · UNI EN 689:2018",
     "nar": "La norma UNI EN 689 indica come verificare il rispetto dei valori limite. Si costituiscono gruppi di lavoratori con esposizione simile e si eseguono misure personali. Nel test preliminare, con tre misure tutte sotto il dieci per cento del limite, il gruppo è conforme; con quattro misure la soglia è il quindici per cento, con cinque il venti per cento. Se una misura supera il limite c’è non conformità; negli altri casi si passa al test statistico con almeno sei misure.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Cancerogeni, mutageni e reprotossici: obblighi specifici",
     "foto": false,
     "lead": "Il Capo II del Titolo IX, esteso agli agenti tossici per la riproduzione dal D.lgs. 135/2024, impone una gerarchia di misure più stringente di quella degli agenti chimici.",
     "punti": [
      "Sostituzione dell’agente con uno non pericoloso o meno pericoloso, se tecnicamente possibile (art. 235)",
      "Se non sostituibile: produzione e uso in sistema chiuso; altrimenti riduzione dell’esposizione al livello più basso tecnicamente possibile",
      "Valutazione dell’esposizione con misurazioni; valori limite dell’Allegato XLIII",
      "Registro di esposizione dei lavoratori e cartelle sanitarie e di rischio, conservate anche dopo la cessazione dell’esposizione; comunicazioni all’INAIL",
      "Aree delimitate, accesso limitato, divieto di fumare, mangiare e bere; mezzi di protezione e igiene personale"
     ],
     "appro": "L’Allegato XLII elenca sostanze, miscele e processi cancerogeni (ad esempio i lavori che espongono a polveri di legno duro o a silice cristallina respirabile prodotta da un procedimento di lavorazione). Il registro e le cartelle sono conservati per lunghi periodi in ragione della latenza delle patologie. Per l’amianto si applica la disciplina specifica del Capo III, con il valore limite di 0,01 fibre/cm³ introdotto dal D.lgs. 213/2025.",
     "rif": "Titolo IX, Capi II e III e Allegati XLII, XLIII D.lgs. 81/2008 · D.lgs. 135/2024 · D.lgs. 213/2025",
     "nar": "Per i cancerogeni, i mutageni e, dal 2024, anche per i tossici per la riproduzione, la gerarchia delle misure è più severa. Prima di tutto si sostituisce l’agente, se tecnicamente possibile. Altrimenti si lavora in sistema chiuso, e se neppure questo è possibile si riduce l’esposizione al livello più basso tecnicamente possibile. Sono previsti il registro degli esposti, le cartelle sanitarie e le comunicazioni all’INAIL, oltre ad aree delimitate e ad accesso limitato.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Amianto: procedure, notifiche e piano di lavoro",
     "foto": false,
     "lead": "L’amianto è un cancerogeno certo: la maggior parte dei tumori professionali riconosciuti è ancora correlata all’amianto.",
     "punti": [
      "Valore limite di esposizione ridotto a 0,01 fibre/cm³ (D.lgs. 213/2025, di recepimento della Direttiva (UE) 2023/2668)",
      "Notifica all’organo di vigilanza prima dell’inizio dei lavori (art. 250)",
      "Piano di lavoro per demolizione o rimozione, trasmesso all’organo di vigilanza almeno 30 giorni prima dell’inizio dei lavori (art. 256)",
      "Lavori di bonifica eseguiti da imprese iscritte all’Albo nazionale gestori ambientali (categoria 10)",
      "Chiunque individui materiali sospetti durante un lavoro interrompe l’attività e informa il preposto"
     ],
     "appro": "Secondo la Relazione annuale INAIL 2025, dei 1.033 tumori professionali definiti positivamente nel 2025 due su tre sono correlati all’amianto: il lungo periodo di latenza rende ancora attuale un rischio vietato dal 1992 (L. 257/1992). Le attività con esposizioni sporadiche e di debole intensità (ESEDI) sono escluse da alcuni obblighi, ma non dalla valutazione dei rischi e dalle misure di protezione.",
     "rif": "Titolo IX, Capo III D.lgs. 81/2008 · D.lgs. 213/2025 · L. 257/1992 · INAIL, Relazione annuale 2025",
     "nar": "L’amianto è un cancerogeno certo e, a distanza di oltre trent’anni dal divieto, è ancora la causa di due tumori professionali riconosciuti su tre. Il valore limite è stato ridotto a 0,01 fibre per centimetro cubo. Prima dei lavori occorre la notifica all’organo di vigilanza; per la rimozione serve un piano di lavoro trasmesso almeno trenta giorni prima, e la bonifica è riservata alle imprese iscritte all’Albo dei gestori ambientali. Se durante un lavoro si trovano materiali sospetti, ci si ferma e si avvisa il preposto.",
     "p": 1.5
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Silice cristallina in un laboratorio di marmo",
     "scena": "In un laboratorio di lavorazione di lastre in agglomerato di quarzo le operazioni di taglio e levigatura si svolgono a secco con utensili portatili. Il datore di lavoro fornisce maschere FFP2.",
     "domanda": "Qual è la valutazione corretta?",
     "opz": [
      [
       "Le FFP2 sono sufficienti",
       false,
       "No: la silice cristallina respirabile da processo è cancerogena; la priorità sono le misure alla fonte e la valutazione dell’esposizione."
      ],
      [
       "Si applica il Capo II (silice cristallina respirabile da procedimento di lavorazione, Allegato XLII): lavorazioni a umido e aspirazione alla fonte, misurazioni dell’esposizione, registro degli esposti, sorveglianza sanitaria; i DPI respiratori di classe adeguata integrano le misure",
       true,
       "Corretto: gli agglomerati di quarzo possono contenere percentuali molto elevate di silice cristallina."
      ],
      [
       "Basta lavorare all’aperto",
       false,
       "No: non è una misura valutata e può esporre altre persone."
      ]
     ],
     "rif": "Titolo IX, Capo II e Allegati XLII, XLIII D.lgs. 81/2008",
     "appro": "Il valore limite per la silice cristallina respirabile è indicato nell’Allegato XLIII; la silicosi resta una malattia professionale grave e irreversibile.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Fumi di saldatura e radiazioni ottiche",
     "foto": false,
     "lead": "La saldatura espone contemporaneamente a fumi metallici, gas, radiazioni ottiche, rischio elettrico, incendio e ustioni.",
     "punti": [
      "I fumi di saldatura sono classificati dalla IARC come cancerogeni per l’uomo (gruppo 1, Monografia 118, 2018)",
      "Misure: aspirazione localizzata alla fonte (torce aspiranti, bracci aspiranti), ventilazione generale, respiratori con filtro antipolvere adeguato quando necessari",
      "Radiazioni ultraviolette e infrarosse dell’arco: maschere con filtri di grado adeguato al processo e alla corrente, schermi per i lavoratori vicini (Titolo VIII, Capo V)",
      "Prevenzione incendi: allontanamento dei materiali combustibili, permesso di lavoro a caldo, estintore a portata di mano, sorveglianza dopo il termine del lavoro",
      "Bombole: stoccaggio in posizione verticale e assicurate, separazione tra comburenti e infiammabili, valvole antiritorno di fiamma"
     ],
     "appro": "La saldatura di acciai inossidabili espone anche al cromo esavalente, cancerogeno con valore limite specifico nell’Allegato XLIII. La scelta del grado di protezione dei filtri per la saldatura si basa sulla UNI EN 169 e sulla UNI EN ISO 16321-1:2025 per la protezione degli occhi e del viso.",
     "rif": "Titolo VIII, Capo V e Titolo IX, Capo II D.lgs. 81/2008 · IARC, Monografia 118 · UNI EN ISO 16321-1:2025",
     "nar": "La saldatura espone a più rischi insieme. I fumi di saldatura sono classificati dalla IARC come cancerogeni certi, per questo l’aspirazione alla fonte è la misura principale. L’arco emette radiazioni ultraviolette e infrarosse: servono maschere con filtri adeguati e schermi per chi lavora vicino. Prima di saldare si allontanano i materiali combustibili e, al termine, si sorveglia la zona. Le bombole si tengono in piedi, fissate e separate per tipo di gas.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il DVR di una falegnameria con 6 addetti",
     "foto": false,
     "lead": "Il DVR si costruisce partendo dal ciclo produttivo e dalle mansioni, non da un modello generico.",
     "punti": [
      "Ciclo: ricevimento del legname, sezionatura e squadratura, piallatura, foratura, assemblaggio, levigatura, verniciatura a spruzzo in cabina, imballaggio e spedizione",
      "Mansioni: macchinista (sezionatrice, pialla, toupie), assemblatore, verniciatore, magazziniere-carrellista; ufficio",
      "Rischi principali: tagli e amputazioni sulle macchine; rumore (misurazione obbligatoria se si superano 80 dB(A)); polveri di legno duro, cancerogene (Allegato XLII); solventi e vernici; incendio ed esplosione delle polveri (ATEX); MMC; vibrazioni",
      "Valutazioni specifiche allegate: rumore (UNI EN ISO 9612), vibrazioni, agenti chimici e cancerogeni (con misure UNI EN 689), MMC, incendio, ATEX, stress lavoro-correlato",
      "Programma di miglioramento con priorità: aspirazione centralizzata e cappe alle macchine, ripari regolabili, filtro con pannelli di sfogo, armadio per infiammabili, sorveglianza sanitaria"
     ],
     "appro": "Le polveri di legno duro rientrano tra i processi dell’Allegato XLII: si applica il Capo II del Titolo IX con valore limite di 2 mg/m³ (frazione inalabile, Allegato XLIII), registro degli esposti e sorveglianza sanitaria. La sola presenza di cancerogeni esclude l’uso delle procedure standardizzate. Il DVR deve avere data certa, attestabile anche con la sottoscrizione del datore di lavoro, dell’RSPP, dell’RLS e del medico competente (art. 28, c. 2).",
     "rif": "Artt. 17, 28, 29 e Allegati XLII, XLIII D.lgs. 81/2008 · D.I. 30 novembre 2012",
     "nar": "Facciamo un esempio di DVR per una falegnameria con sei addetti. Si parte dal ciclo produttivo: sezionatura, piallatura, assemblaggio, levigatura, verniciatura e spedizione. Poi si individuano le mansioni e i rischi principali: tagli sulle macchine, rumore, polveri di legno duro, che sono cancerogene, solventi, incendio ed esplosione delle polveri, movimentazione dei carichi. Ogni rischio ha la sua valutazione specifica e le misure si ordinano per priorità, partendo dall’aspirazione alla fonte e dai ripari delle macchine.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il travaso nella bottiglia",
     "scena": "Per comodità un collega ha travasato un detergente alcalino concentrato in una bottiglia d’acqua minerale senza etichetta, lasciandola sul banco di lavoro.",
     "domanda": "Che cosa occorre fare?",
     "opz": [
      [
       "Lasciarla: tutti in reparto sanno cosa contiene",
       false,
       "No: un contenitore alimentare senza etichetta può causare ingestioni accidentali e uso improprio."
      ],
      [
       "Metterla in sicurezza, segnalare al preposto e usare contenitori idonei ed etichettati secondo il CLP; non usare mai contenitori alimentari",
       true,
       "Corretto: i recipienti usati sul luogo di lavoro per sostanze pericolose devono essere etichettati (Allegato XXVI); i contenitori alimentari sono vietati per i prodotti chimici."
      ],
      [
       "Scrivere il nome a penna sulla bottiglia",
       false,
       "Non basta: servono pittogrammi e indicazioni di pericolo; resta vietato l’uso di contenitori alimentari."
      ]
     ],
     "rif": "Artt. 223-225 e Allegato XXVI D.lgs. 81/2008 · Reg. (CE) 1272/2008",
     "nar": "Esercitazione: un detergente concentrato travasato in una bottiglia d’acqua. Scegli la condotta corretta.",
     "p": 1.2
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD9",
     "voci": [
      "SDS: sezioni 2, 7, 8, 11",
      "UNI EN 689: gruppi di esposizione similare, test preliminare, test statistico",
      "Cancerogeni, mutageni, reprotossici: sostituzione, sistema chiuso, livello più basso possibile, registro",
      "Amianto: valore limite 0,01 f/cm³, notifica, piano di lavoro"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 9.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD9",
     "soglia": 4,
     "domande": [
      [
       "Nel test preliminare con 3 misure la conformità si ha se tutte sono inferiori al:",
       [
        "5% del limite",
        "10% del limite",
        "50% del limite",
        "100% del limite"
       ],
       1,
       "UNI EN 689:2018."
      ],
      [
       "Per i cancerogeni la prima misura è:",
       [
        "Il DPI",
        "La sostituzione dell’agente, se tecnicamente possibile",
        "La formazione",
        "La segnaletica"
       ],
       1,
       "Art. 235."
      ],
      [
       "Il D.lgs. 135/2024 ha esteso le tutele del Capo II agli agenti:",
       [
        "Biologici",
        "Tossici per la riproduzione",
        "Fisici",
        "Infiammabili"
       ],
       1,
       "Reprotossici."
      ],
      [
       "La silice cristallina respirabile da procedimento di lavorazione è:",
       [
        "Irrilevante",
        "Cancerogena (Allegato XLII)",
        "Un agente biologico",
        "Un gas"
       ],
       1,
       "Allegato XLII."
      ],
      [
       "Nella SDS le informazioni tossicologiche sono nella sezione:",
       [
        "2",
        "8",
        "11",
        "14"
       ],
       2,
       "Reg. (UE) 2020/878."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 9.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M10",
   "titolo": "UD10 · Agenti biologici",
   "min": 180,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD10",
     "sott": "Agenti biologici",
     "nar": "Unità didattica dieci. Gli agenti biologici.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Classificazione e misure",
     "rif": "Titolo X e Allegati XLIV-XLVII D.lgs. 81/2008 · Linee guida legionellosi 2015",
     "lead": "Gli agenti biologici sono classificati in quattro gruppi in base a infettività, patogenicità, trasmissibilità e disponibilità di profilassi.",
     "punti": [
      "Uso deliberato (laboratori, biotecnologie) ed esposizione potenziale (sanità, rifiuti, agricoltura)",
      "Gruppi 1-4; livelli di contenimento",
      "Misure igieniche, DPI, vaccinazioni, registro degli esposti per i gruppi 3 e 4",
      "Legionella negli impianti idrici e aeraulici: valutazione e controllo"
     ],
     "nar": "Gli agenti biologici sono classificati in quattro gruppi. La valutazione distingue l'uso deliberato dall'esposizione potenziale e porta a misure di contenimento, igieniche, DPI, vaccinazioni e, per i gruppi tre e quattro, al registro degli esposti. Negli impianti idrici e aeraulici va gestito il rischio legionella.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Agenti biologici: gruppi e livelli di contenimento",
     "foto": false,
     "lead": "Gli agenti biologici sono classificati in quattro gruppi in base alla capacità di causare malattia, di propagarsi nella comunità e alla disponibilità di profilassi e terapie (art. 268 e Allegato XLVI).",
     "punti": [
      "Gruppo 1: poche probabilità di causare malattie",
      "Gruppo 2: può causare malattie e costituire un rischio per i lavoratori; poco probabile la propagazione; disponibili profilassi o terapie",
      "Gruppo 3: può causare malattie gravi; può propagarsi nella comunità; di norma disponibili profilassi o terapie",
      "Gruppo 4: malattie gravi, elevato rischio di propagazione, di norma non disponibili profilassi o terapie",
      "Livelli di contenimento 2, 3 e 4 per laboratori e processi industriali (Allegati XLVII e XLVIII)"
     ],
     "appro": "Si distingue l’uso deliberato di agenti biologici (laboratori, biotecnologie) dall’esposizione potenziale (sanità, zootecnia, trattamento dei rifiuti e delle acque reflue, servizi di pulizia). L’uso di agenti dei gruppi 2, 3 e 4 richiede una comunicazione all’organo di vigilanza; per il gruppo 4 è necessaria l’autorizzazione del Ministero della Salute (art. 269-270).",
     "rif": "Titolo X e Allegati XLVI-XLVIII D.lgs. 81/2008",
     "nar": "Gli agenti biologici sono classificati in quattro gruppi: dal gruppo uno, che ha poche probabilità di causare malattie, al gruppo quattro, che causa malattie gravi con elevato rischio di propagazione e senza terapie disponibili. A ciascun gruppo corrispondono livelli di contenimento. Si distingue l’uso deliberato, come nei laboratori, dall’esposizione potenziale, come nella sanità, nella zootecnia o nel trattamento dei rifiuti.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Legionella, vaccinazioni e ferite da taglienti",
     "foto": false,
     "lead": "Alcuni rischi biologici hanno una disciplina specifica che il RSPP deve conoscere.",
     "punti": [
      "Legionella: Linee guida per la prevenzione e il controllo della legionellosi (Conferenza Stato-Regioni, 7 maggio 2015): valutazione del rischio degli impianti idrici e aeraulici, piano di controllo, campionamenti",
      "Acque destinate al consumo umano: il D.lgs. 18/2023 include la Legionella nella valutazione e gestione del rischio dei sistemi di distribuzione interni prioritari",
      "Vaccinazioni: il datore di lavoro, su conforme parere del medico competente, mette a disposizione vaccini efficaci per i lavoratori non immuni (art. 279)",
      "Ferite da taglienti nel settore ospedaliero e sanitario: Capo X-bis (D.lgs. 19/2014), dispositivi medici con meccanismi di protezione, divieto di reincappucciamento, procedure post-esposizione",
      "Igiene: lavaggio delle mani, DPI, gestione dei rifiuti sanitari a rischio infettivo"
     ],
     "appro": "Il rischio Legionella va considerato nei luoghi di lavoro con impianti di nebulizzazione, torri evaporative, docce e reti idriche con ristagni (strutture ricettive, sanitarie, sportive, industrie). La valutazione compete al gestore della struttura e coinvolge figure tecniche competenti.",
     "rif": "Art. 279 e Capo X-bis D.lgs. 81/2008 · D.lgs. 19/2014 · Linee guida legionellosi 7/5/2015 · D.lgs. 18/2023",
     "nar": "Alcuni rischi biologici hanno regole specifiche. Per la Legionella si applicano le Linee guida nazionali del 2015 e, per l’acqua potabile, il decreto 18 del 2023. Il datore di lavoro, su parere del medico competente, mette a disposizione vaccini efficaci per i lavoratori non immuni. Nel settore sanitario le ferite da taglienti sono prevenute con dispositivi dotati di protezione e con il divieto di reincappucciare gli aghi.",
     "p": 1.6
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD10",
     "voci": [
      "Quattro gruppi di agenti biologici; livelli di contenimento",
      "Uso deliberato ed esposizione potenziale",
      "Legionella: Linee guida 2015 e D.lgs. 18/2023",
      "Vaccinazioni (art. 279) e taglienti (Capo X-bis)"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 10.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD10",
     "soglia": 3,
     "domande": [
      [
       "Gli agenti biologici del gruppo 4 sono caratterizzati da:",
       [
        "Poche probabilità di causare malattie",
        "Malattie gravi, elevato rischio di propagazione, di norma senza profilassi o terapie",
        "Assenza di rischio",
        "Solo rischio per gli animali"
       ],
       1,
       "Art. 268."
      ],
      [
       "I vaccini per i lavoratori non immuni sono messi a disposizione su parere:",
       [
        "Dell’RLS",
        "Del medico competente",
        "Dell’ASL",
        "Del RSPP"
       ],
       1,
       "Art. 279."
      ],
      [
       "Le Linee guida nazionali sulla legionellosi sono del:",
       [
        "2001",
        "2015",
        "2023",
        "2026"
       ],
       1,
       "Conferenza Stato-Regioni 7/5/2015."
      ],
      [
       "Nel settore sanitario il reincappucciamento degli aghi è:",
       [
        "Raccomandato",
        "Vietato",
        "Facoltativo",
        "Obbligatorio"
       ],
       1,
       "Capo X-bis."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 10.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M11",
   "titolo": "UD11 · Rischi connessi ad attività particolari",
   "min": 180,
   "foto": "hero1",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD11",
     "sott": "Rischi connessi ad attività particolari",
     "nar": "Unità didattica undici. I rischi connessi ad attività particolari.",
     "p": 0.6
    },
    {
     "t": "definizioni",
     "tit": "Attività particolari",
     "sott": "Consultare tutte le schede",
     "voci": [
      [
       "177",
       "Ambienti confinati",
       "D.P.R. 177/2011: qualificazione delle imprese, procedure, formazione di 12 ore (Accordo 2025), addestramento e recupero."
      ],
      [
       "IV",
       "Cantieri",
       "Titolo IV: PSC, POS, coordinatori, patente a crediti, badge di cantiere (D.L. 159/2025)."
      ],
      [
       "Gest",
       "Lavoratrici gestanti",
       "D.lgs. 151/2001: valutazione dei rischi per la gravidanza e l'allattamento; lavori vietati."
      ],
      [
       "Min",
       "Minori",
       "L. 977/1967 e D.lgs. 345/1999: lavori vietati e sorveglianza."
      ],
      [
       "Sol",
       "Lavoro isolato e trasferte",
       "Procedure di contatto, dispositivi uomo a terra, guida di veicoli."
      ]
     ],
     "nar": "Alcune attività richiedono attenzioni particolari: ambienti confinati, cantieri, lavoratrici gestanti, minori, lavoro isolato e trasferte, ciascuna con disciplina specifica.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Ambienti confinati: qualificazione delle imprese e formazione",
     "foto": false,
     "lead": "Nei lavori in ambienti sospetti di inquinamento o confinati (silos, cisterne, vasche, fosse, pozzi) gli infortuni sono spesso plurimi: chi interviene senza procedura diventa la seconda vittima.",
     "punti": [
      "Qualificazione delle imprese (D.P.R. 177/2011): personale con esperienza almeno triennale in misura non inferiore al 30% della forza lavoro; preposto con esperienza triennale",
      "Informazione, formazione e addestramento specifici, con verifica di apprendimento e aggiornamento; uso di DPI, strumentazione e attrezzature idonei",
      "Procedura di lavoro specifica, comprensiva della fase di soccorso e di coordinamento con il Servizio sanitario e i Vigili del fuoco",
      "Nel caso di appalto: rappresentante del datore di lavoro committente che vigila sull’intera durata delle attività",
      "Accordo Stato-Regioni 2025: corso autonomo di 12 ore (4 teoriche e 8 pratiche) solo in presenza, aggiornamento quinquennale di almeno 4 ore di pratica"
     ],
     "appro": "Prima dell’ingresso: isolamento e bonifica dell’ambiente, misurazione dell’atmosfera (ossigeno, infiammabili, tossici) con strumenti tarati, ventilazione, permesso di lavoro, sorvegliante esterno in contatto continuo, sistema di recupero predisposto. La norma UNI 11958:2024 fornisce criteri per l’identificazione dei pericoli e la valutazione dei rischi in questi ambienti.",
     "rif": "Artt. 66 e 121 D.lgs. 81/2008 · D.P.R. 177/2011 · Accordo Stato-Regioni 17/04/2025, Parte II, punto 7 · UNI 11958:2024",
     "nar": "Negli ambienti confinati, come silos, cisterne e vasche, gli infortuni coinvolgono spesso più persone, perché chi entra a soccorrere senza procedure diventa a sua volta vittima. Il decreto 177 del 2011 consente questi lavori solo a imprese qualificate, con almeno il trenta per cento di personale esperto e un preposto con esperienza triennale. Servono una procedura scritta, compresa la fase di soccorso, la misurazione dell’atmosfera prima dell’ingresso e un sorvegliante esterno. L’Accordo del 2025 prevede un corso specifico di dodici ore, solo in presenza.",
     "p": 1.5
    },
    {
     "t": "testo",
     "tit": "Attività su strada: segnaletica temporanea e formazione",
     "foto": false,
     "lead": "I lavori in presenza di traffico veicolare espongono al rischio di investimento: il D.I. 22 gennaio 2019 disciplina i criteri di apposizione della segnaletica stradale e la formazione degli addetti.",
     "punti": [
      "Ambito: attività lavorative che si svolgono in presenza di traffico veicolare (cantieri stradali, manutenzione del verde, soccorso stradale)",
      "Formazione specifica: 8 ore per i lavoratori, 12 ore per i preposti, con aggiornamento quadriennale",
      "Procedure di installazione, spostamento e rimozione della segnaletica, con la sequenza prevista e le distanze di preavviso",
      "Indumenti ad alta visibilità di classe adeguata (UNI EN ISO 20471)",
      "Coordinamento con gli enti proprietari e con le forze di polizia per la gestione del traffico"
     ],
     "appro": "Le procedure si integrano con il Codice della strada e il relativo Regolamento di attuazione (D.P.R. 495/1992) e con il disciplinare tecnico sugli schemi segnaletici. Il rischio di investimento riguarda anche il personale che opera ai margini della carreggiata per brevi interventi.",
     "rif": "D.I. 22 gennaio 2019 · art. 161, c. 2-bis D.lgs. 81/2008 · D.P.R. 495/1992 · UNI EN ISO 20471",
     "nar": "I lavori in presenza di traffico espongono al rischio di investimento. Il decreto interministeriale del 22 gennaio 2019 disciplina le procedure per installare, spostare e rimuovere la segnaletica e la formazione: otto ore per i lavoratori e dodici per i preposti, con aggiornamento ogni quattro anni. Servono indumenti ad alta visibilità della classe adeguata.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Ponteggi: autorizzazione, PiMUS e regole di montaggio",
     "foto": false,
     "lead": "Il ponteggio è un’opera provvisionale che si monta, si usa e si smonta secondo regole precise: le cadute dall’alto sono la prima causa di morte nelle costruzioni.",
     "punti": [
      "Ponteggi metallici fissi: autorizzazione ministeriale e libretto con schemi tipo (art. 131); oltre i 20 m di altezza o fuori dagli schemi tipo serve un progetto firmato da ingegnere o architetto abilitato (art. 133)",
      "PiMUS: piano di montaggio, uso e smontaggio redatto da persona competente (art. 134 e Allegato XXII), disponibile in cantiere",
      "Montaggio, trasformazione e smontaggio sotto la diretta sorveglianza di un preposto, da parte di lavoratori formati con il corso specifico dell’Allegato XXI (art. 136)",
      "Parapetti con corrente superiore a non meno di 1 m dal piano di calpestio e tavola fermapiede alta non meno di 15 cm (art. 126)",
      "Distanza tra impalcato e opera servita non superiore a 20 cm; verifica del ponteggio dopo intemperie o lunghe interruzioni (art. 137)"
     ],
     "appro": "Esempio di controllo prima dell’uso: ancoraggi presenti secondo il libretto; basette su elementi di ripartizione; impalcati completi e fissati; parapetti e fermapiede su tutti i lati aperti; scale di accesso interne con botole; cartellonistica con i carichi ammessi. Ogni anomalia si segnala al preposto e il ponteggio non si usa finché non è ripristinato.",
     "rif": "Artt. 122-138 e Allegati XVIII, XXI, XXII D.lgs. 81/2008",
     "nar": "Il ponteggio si monta e si usa secondo regole precise. Deve essere autorizzato dal Ministero e montato secondo il libretto; oltre i venti metri o fuori dagli schemi tipo serve un progetto. Il piano di montaggio, uso e smontaggio, detto PiMUS, deve essere disponibile in cantiere. Il montaggio avviene sotto la sorveglianza di un preposto, con lavoratori formati. I parapetti hanno il corrente superiore ad almeno un metro e la tavola fermapiede alta almeno quindici centimetri.",
     "p": 1.5
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La trincea per la tubazione",
     "scena": "Per posare una tubazione si scava una trincea profonda 1,8 m in terreno sabbioso. Per fare prima, il terreno di scavo viene accumulato sul ciglio e gli addetti scendono senza armature, dato che «si tratta solo di un’ora».",
     "domanda": "Quali violazioni sono presenti?",
     "opz": [
      [
       "Nessuna: la durata breve giustifica l’assenza di armature",
       false,
       "No: il franamento è improvviso e la durata non riduce il rischio di seppellimento."
      ],
      [
       "Oltre 1,5 m di profondità occorrono armature o pareti inclinate secondo la natura del terreno (art. 119); è vietato depositare materiali presso il ciglio (art. 120)",
       true,
       "Corretto: entrambe le condotte espongono al seppellimento; inoltre va garantita una via di uscita sicura e il controllo delle pareti dopo piogge."
      ],
      [
       "Basta che gli addetti indossino il casco",
       false,
       "No: il casco non protegge dal seppellimento; servono misure collettive."
      ]
     ],
     "rif": "Artt. 118-121 D.lgs. 81/2008",
     "nar": "Esercitazione: la trincea senza armature. Individua le violazioni.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Amianto: procedure, notifiche e piano di lavoro",
     "foto": false,
     "lead": "L’amianto è un cancerogeno certo: la maggior parte dei tumori professionali riconosciuti è ancora correlata all’amianto.",
     "punti": [
      "Valore limite di esposizione ridotto a 0,01 fibre/cm³ (D.lgs. 213/2025, di recepimento della Direttiva (UE) 2023/2668)",
      "Notifica all’organo di vigilanza prima dell’inizio dei lavori (art. 250)",
      "Piano di lavoro per demolizione o rimozione, trasmesso all’organo di vigilanza almeno 30 giorni prima dell’inizio dei lavori (art. 256)",
      "Lavori di bonifica eseguiti da imprese iscritte all’Albo nazionale gestori ambientali (categoria 10)",
      "Chiunque individui materiali sospetti durante un lavoro interrompe l’attività e informa il preposto"
     ],
     "appro": "Secondo la Relazione annuale INAIL 2025, dei 1.033 tumori professionali definiti positivamente nel 2025 due su tre sono correlati all’amianto: il lungo periodo di latenza rende ancora attuale un rischio vietato dal 1992 (L. 257/1992). Le attività con esposizioni sporadiche e di debole intensità (ESEDI) sono escluse da alcuni obblighi, ma non dalla valutazione dei rischi e dalle misure di protezione.",
     "rif": "Titolo IX, Capo III D.lgs. 81/2008 · D.lgs. 213/2025 · L. 257/1992 · INAIL, Relazione annuale 2025",
     "nar": "L’amianto è un cancerogeno certo e, a distanza di oltre trent’anni dal divieto, è ancora la causa di due tumori professionali riconosciuti su tre. Il valore limite è stato ridotto a 0,01 fibre per centimetro cubo. Prima dei lavori occorre la notifica all’organo di vigilanza; per la rimozione serve un piano di lavoro trasmesso almeno trenta giorni prima, e la bonifica è riservata alle imprese iscritte all’Albo dei gestori ambientali. Se durante un lavoro si trovano materiali sospetti, ci si ferma e si avvisa il preposto.",
     "p": 1.5
    },
    {
     "t": "sintesi",
     "tit": "Sintesi della UD11",
     "voci": [
      "Ambienti confinati: D.P.R. 177/2011, procedure, soccorso, corso di 12 ore",
      "Attività su strada: D.I. 22 gennaio 2019, formazione 8/12 ore",
      "Altre attività particolari: rifiuti, lavori isolati, lavori notturni"
     ],
     "nar": "Ricapitoliamo i contenuti dell’unità didattica 11.",
     "p": 1
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD11",
     "soglia": 3,
     "domande": [
      [
       "La formazione per i lavoratori addetti alla segnaletica stradale dura:",
       [
        "4 ore",
        "8 ore",
        "16 ore",
        "32 ore"
       ],
       1,
       "D.I. 22 gennaio 2019."
      ],
      [
       "Nei lavori in ambienti confinati il personale esperto è almeno il:",
       [
        "10%",
        "30%",
        "50%",
        "100%"
       ],
       1,
       "D.P.R. 177/2011."
      ],
      [
       "Gli indumenti ad alta visibilità sono disciplinati dalla norma:",
       [
        "UNI EN ISO 20471",
        "UNI EN 361",
        "UNI EN 166",
        "UNI EN 388"
       ],
       0,
       "Classi 1-3."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 11.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M12",
   "titolo": "UD12 · Rischi connessi all'assunzione di sostanze stupefacenti, psicotrope e alcol",
   "min": 110,
   "foto": "chi",
   "schermate": [
    {
     "t": "sezione",
     "tit": "UD12",
     "sott": "Rischi connessi all'assunzione di sostanze stupefacenti, psicotrope e alcol",
     "nar": "Unità didattica dodici. Alcol e sostanze stupefacenti e psicotrope.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Alcol, sostanze e mansioni a rischio",
     "rif": "Art. 41, c. 4 D.lgs. 81/2008 · L. 125/2001 · Intesa Stato-Regioni 16/03/2006 · Intesa 30/10/2007",
     "lead": "Per le mansioni che comportano rischi per terzi sono previsti divieti e accertamenti.",
     "punti": [
      "Divieto di assunzione e somministrazione di alcol nelle attività dell'Intesa 16/03/2006",
      "Accertamenti di assenza di tossicodipendenza per le mansioni dell'Intesa 30/10/2007",
      "Ruolo del medico competente e dei preposti",
      "Prevenzione: informazione, procedure, programmi di supporto"
     ],
     "nar": "Per le mansioni a rischio per terzi vigono il divieto di alcol e gli accertamenti di assenza di tossicodipendenza, secondo le intese Stato-Regioni. Medico competente e preposti hanno un ruolo centrale, accanto a informazione e programmi di supporto.",
     "p": 1.3
    },
    {
     "t": "testo",
     "tit": "Alcol e sostanze: quadro normativo e controlli",
     "foto": false,
     "lead": "Per le mansioni che comportano rischi per la sicurezza, l’incolumità o la salute dei terzi la legge prevede divieti e controlli specifici.",
     "punti": [
      "Alcol: divieto di assunzione e somministrazione di bevande alcoliche nelle attività lavorative ad elevato rischio di infortuni o per la sicurezza di terzi (art. 15 L. 125/2001); elenco delle mansioni nell’Intesa Stato-Regioni del 16 marzo 2006",
      "Controlli alcolimetrici: effettuati dal medico competente o dai medici del lavoro dei servizi per la prevenzione",
      "Sostanze stupefacenti e psicotrope: accertamenti per le mansioni dell’Intesa del 30 ottobre 2007, con le procedure dell’Accordo del 18 settembre 2008",
      "Esito positivo: inidoneità temporanea alla mansione a rischio e invio ai servizi competenti; tutela della riservatezza",
      "La sorveglianza sanitaria comprende la verifica di assenza di condizioni di alcol dipendenza e di assunzione di sostanze nei casi previsti (art. 41, c. 4)"
     ],
     "appro": "Le mansioni dell’elenco comprendono, tra le altre, la conduzione di veicoli e attrezzature che richiedono abilitazione, i lavori in quota, le mansioni sanitarie, le attività nei cantieri. La politica aziendale su alcol e sostanze deve unire prevenzione, controlli e percorsi di supporto, nel rispetto della dignità e della riservatezza dei lavoratori.",
     "rif": "Art. 41, c. 4 D.lgs. 81/2008 · L. 125/2001, art. 15 · Intesa Stato-Regioni 16/03/2006 · Intesa 30/10/2007 · Accordo 18/09/2008",
     "nar": "Per le mansioni a rischio per la sicurezza propria e di terzi la legge vieta l’assunzione di alcol durante il lavoro e prevede controlli. L’elenco delle mansioni per l’alcol è nell’Intesa del 2006; per le sostanze stupefacenti nell’Intesa del 2007, con le procedure di accertamento del 2008. In caso di esito positivo il lavoratore è temporaneamente non idoneo alla mansione a rischio e viene indirizzato ai servizi competenti, sempre nel rispetto della riservatezza.",
     "p": 1.6
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · UD12",
     "soglia": 3,
     "domande": [
      [
       "Il divieto di assunzione di alcolici nelle attività ad elevato rischio è previsto da:",
       [
        "Art. 15 L. 125/2001",
        "Art. 2087 c.c.",
        "D.M. 388/2003",
        "D.lgs. 66/2003"
       ],
       0,
       "L. 125/2001."
      ],
      [
       "L’elenco delle mansioni a rischio per l’alcol è nell’Intesa Stato-Regioni del:",
       [
        "16 marzo 2006",
        "17 aprile 2025",
        "21 dicembre 2011",
        "22 febbraio 2012"
       ],
       0,
       "Intesa 16/03/2006."
      ],
      [
       "In caso di positività all’accertamento per sostanze il lavoratore:",
       [
        "Viene licenziato",
        "È temporaneamente non idoneo alla mansione a rischio e inviato ai servizi competenti",
        "Continua a lavorare",
        "Viene segnalato ai Carabinieri"
       ],
       1,
       "Accordo 18/09/2008."
      ]
     ],
     "nar": "Verifica intermedia dell’unità didattica 12.",
     "p": 1.4
    },
    {
     "t": "caso",
     "tit": "Simulazione finale · Valutazione integrata",
     "scena": "Un'azienda di verniciatura industriale di componenti metallici, 45 addetti su due turni: sgrassaggio con solventi, cabina di verniciatura a spruzzo, forno di essiccazione, movimentazione con carroponte e carrelli, manutenzioni affidate a ditte esterne.",
     "domanda": "Quale impostazione della valutazione è corretta per l'RSPP?",
     "opz": [
      [
       "Solo il rischio chimico, perché è il prevalente",
       false,
       "No: la valutazione riguarda tutti i rischi."
      ],
      [
       "Valutazione integrata: chimico (UNI EN 689) e cancerogeni se presenti, ATEX nelle cabine e nel forno, incendio, rumore, MMC, attrezzature e abilitazioni, turni, interferenze con DUVRI, emergenze; programma di misure con priorità",
       true,
       "Corretto: è l'impostazione richiesta dalla simulazione del Modulo B."
      ],
      [
       "Utilizzare un modello standard di settore",
       false,
       "No: la valutazione deve riflettere la realtà aziendale."
      ]
     ],
     "nar": "Simulazione finale. Imposta la valutazione integrata dei rischi di un'azienda di verniciatura industriale.",
     "p": 1.6
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del Modulo B",
     "voci": [
      "Tecniche di valutazione e analisi degli incidenti",
      "Processi, ambienti, incendio, ATEX, emergenze",
      "Rischi infortunistici, ergonomici, organizzativi e psicosociali",
      "Agenti fisici, chimici, cancerogeni, amianto, biologici",
      "Attività particolari; alcol e sostanze"
     ],
     "nar": "Concludiamo il Modulo B: hai affrontato le dodici unità didattiche previste dall'Accordo, dalle tecniche di valutazione ai rischi specifici. Ora affronta il test finale e la simulazione.",
     "p": 1
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
    "Il Modulo B comune dura:",
    [
     "48 ore",
     "24 ore",
     "28 ore",
     "40 ore"
    ],
    0
   ],
   [
    "Le unità didattiche del Modulo B comune sono:",
    [
     "12",
     "5",
     "4",
     "8"
    ],
    0
   ],
   [
    "La verifica finale del Modulo B prevede:",
    [
     "Test e simulazione",
     "Solo colloquio",
     "Nessuna verifica",
     "Solo presenza"
    ],
    0
   ],
   [
    "La norma quadro sulla gestione del rischio è la:",
    [
     "UNI ISO 31000",
     "UNI EN ISO 9612",
     "UNI EN 689",
     "UNI EN 131"
    ],
    0
   ],
   [
    "La valutazione dei rischi delle macchine in progettazione segue la:",
    [
     "UNI EN ISO 12100",
     "UNI EN ISO 7730",
     "UNI EN 12464-1",
     "ISO 11228-3"
    ],
    0
   ],
   [
    "L'analisi di un infortunio deve individuare:",
    [
     "Le cause tecniche, organizzative e comportamentali",
     "Solo il colpevole",
     "Solo il costo",
     "Solo la data"
    ],
    0
   ],
   [
    "Le fasi a maggior rischio di un processo sono spesso:",
    [
     "Manutenzione, fermata, avviamento",
     "La pausa pranzo",
     "La produzione a regime",
     "Il controllo qualità"
    ],
    0
   ],
   [
    "Il permesso di lavoro si usa per:",
    [
     "Attività non routinarie a rischio",
     "Le ferie",
     "La formazione generale",
     "Le visite mediche"
    ],
    0
   ],
   [
    "I requisiti dei luoghi di lavoro sono nell':",
    [
     "Allegato IV",
     "Allegato VII",
     "Allegato XXXIII",
     "Allegato XLII"
    ],
    0
   ],
   [
    "Il comfort termico negli ambienti moderati si valuta con:",
    [
     "PMV e PPD",
     "WBGT",
     "IREQ",
     "LEX,8h"
    ],
    0
   ],
   [
    "L'illuminazione dei posti di lavoro interni segue la:",
    [
     "UNI EN 12464-1",
     "UNI EN ISO 9612",
     "UNI EN 1005-4",
     "UNI EN 62305"
    ],
    0
   ],
   [
    "I criteri per la valutazione del rischio di incendio sono nel:",
    [
     "D.M. 3 settembre 2021",
     "D.M. 388/2003",
     "D.P.R. 177/2011",
     "D.lgs. 66/2003"
    ],
    0
   ],
   [
    "Le zone ATEX per le polveri sono:",
    [
     "20, 21, 22",
     "0, 1, 2",
     "A, B, C",
     "1, 2, 3"
    ],
    0
   ],
   [
    "Il documento sulla protezione contro le esplosioni è previsto dall':",
    [
     "Art. 294",
     "Art. 28",
     "Art. 71",
     "Art. 190"
    ],
    0
   ],
   [
    "Dal 20 gennaio 2027 le macchine sono disciplinate dal:",
    [
     "Reg. (UE) 2023/1230",
     "Reg. (UE) 2016/425",
     "Reg. (CE) 1907/2006",
     "Reg. (CE) 852/2004"
    ],
    0
   ],
   [
    "Le verifiche degli impianti di terra sono disciplinate dal:",
    [
     "D.P.R. 462/2001",
     "D.M. 388/2003",
     "D.lgs. 151/2001",
     "D.M. 11 aprile 2011"
    ],
    0
   ],
   [
    "I lavori elettrici sono disciplinati dalla norma:",
    [
     "CEI 11-27",
     "CEI 64-8",
     "CEI EN 62305",
     "UNI EN 131"
    ],
    0
   ],
   [
    "Il lavoro in quota è definito oltre:",
    [
     "2 metri",
     "1 metro",
     "5 metri",
     "50 cm"
    ],
    0
   ],
   [
    "Il sollevamento manuale dei carichi si valuta con la:",
    [
     "ISO 11228-1",
     "ISO 11228-3",
     "UNI EN ISO 7243",
     "UNI EN 689"
    ],
    0
   ],
   [
    "I movimenti ripetitivi si valutano con la:",
    [
     "ISO 11228-3",
     "ISO 11228-1",
     "ISO 2631",
     "UNI EN 12464-1"
    ],
    0
   ],
   [
    "È videoterminalista chi usa il VDT per almeno:",
    [
     "20 ore settimanali",
     "10 ore settimanali",
     "40 ore settimanali",
     "2 ore al giorno"
    ],
    0
   ],
   [
    "La Convenzione ILO n. 190 riguarda:",
    [
     "Violenza e molestie nel mondo del lavoro",
     "Il rumore",
     "L'amianto",
     "Gli ambienti confinati"
    ],
    0
   ],
   [
    "Il valore superiore di azione per il rumore è:",
    [
     "85 dB(A)",
     "80 dB(A)",
     "87 dB(A)",
     "90 dB(A)"
    ],
    0
   ],
   [
    "Il valore limite di esposizione al rumore tiene conto:",
    [
     "Dell'attenuazione dei DPI",
     "Solo del rumore ambientale",
     "Del rumore di fondo notturno",
     "Di nulla"
    ],
    0
   ],
   [
    "Il valore limite per le vibrazioni mano-braccio è:",
    [
     "5 m/s²",
     "2,5 m/s²",
     "1 m/s²",
     "10 m/s²"
    ],
    0
   ],
   [
    "Il livello di riferimento per il radon nei luoghi di lavoro è:",
    [
     "300 Bq/m³",
     "100 Bq/m³",
     "1000 Bq/m³",
     "50 Bq/m³"
    ],
    0
   ],
   [
    "Il regolamento sulla classificazione ed etichettatura è il:",
    [
     "Reg. (CE) 1272/2008",
     "Reg. (CE) 1907/2006",
     "Reg. (UE) 2016/425",
     "Reg. (UE) 2023/1230"
    ],
    0
   ],
   [
    "La strategia di misura dell'esposizione ad agenti chimici segue la:",
    [
     "UNI EN 689",
     "UNI EN ISO 9612",
     "ISO 11228",
     "UNI EN 1005"
    ],
    0
   ],
   [
    "Il valore limite per l'amianto è:",
    [
     "0,01 fibre/cm³",
     "0,1 fibre/cm³",
     "1 fibra/cm³",
     "0,5 fibre/cm³"
    ],
    0
   ],
   [
    "Per i cancerogeni il primo principio è:",
    [
     "La sostituzione",
     "Il DPI",
     "La segnaletica",
     "La sorveglianza"
    ],
    0
   ],
   [
    "Gli agenti biologici sono classificati in:",
    [
     "4 gruppi",
     "2 gruppi",
     "6 gruppi",
     "3 gruppi"
    ],
    0
   ],
   [
    "Il registro degli esposti ad agenti biologici è previsto per i gruppi:",
    [
     "3 e 4",
     "1 e 2",
     "Solo 1",
     "Nessuno"
    ],
    0
   ],
   [
    "Gli ambienti confinati sono disciplinati dal:",
    [
     "D.P.R. 177/2011",
     "D.M. 388/2003",
     "D.lgs. 151/2001",
     "D.P.R. 462/2001"
    ],
    0
   ],
   [
    "La tutela delle lavoratrici gestanti è nel:",
    [
     "D.lgs. 151/2001",
     "D.lgs. 66/2003",
     "D.lgs. 101/2020",
     "D.P.R. 177/2011"
    ],
    0
   ],
   [
    "Il divieto di alcol nelle attività a rischio per terzi deriva da:",
    [
     "L. 125/2001 e Intesa 16/03/2006",
     "D.lgs. 231/2001",
     "D.M. 388/2003",
     "Reg. CLP"
    ],
    0
   ],
   [
    "Gli accertamenti di assenza di tossicodipendenza riguardano:",
    [
     "Le mansioni dell'Intesa 30/10/2007",
     "Tutti i lavoratori",
     "Solo i dirigenti",
     "Nessuno"
    ],
    0
   ],
   [
    "La patente a crediti riguarda:",
    [
     "Imprese e autonomi nei cantieri",
     "I carrellisti",
     "Gli RLS",
     "Gli alimentaristi"
    ],
    0
   ],
   [
    "Le radiazioni ionizzanti sono disciplinate dal:",
    [
     "D.lgs. 101/2020",
     "D.lgs. 81/2008 Titolo VIII Capo V",
     "D.M. 388/2003",
     "D.P.R. 177/2011"
    ],
    0
   ],
   [
    "Lo stress lavoro-correlato si valuta in prima fase con:",
    [
     "Eventi sentinella e indicatori di contenuto e contesto",
     "Solo questionari ai dirigenti",
     "Analisi del sangue",
     "Misure strumentali"
    ],
    0
   ],
   [
    "La gestione del cambiamento richiede:",
    [
     "Valutazione preventiva della modifica",
     "Valutazione dopo un anno",
     "Nessuna valutazione",
     "Solo l'acquisto"
    ],
    0
   ],
   [
    "L’indice di frequenza secondo la UNI 7249 è:",
    [
     "Infortuni × 1.000 / ore lavorate",
     "Infortuni × 1.000.000 / ore lavorate",
     "Giornate perse × 1.000 / ore lavorate",
     "Infortuni / lavoratori"
    ],
    1,
    "UNI 7249:2007."
   ],
   [
    "In un albero dei guasti, eventi indipendenti collegati da una porta AND hanno probabilità pari:",
    [
     "Alla somma",
     "Al prodotto",
     "Alla media",
     "Al massimo"
    ],
    1,
    "Regola del prodotto."
   ],
   [
    "Nel lavoro agile l’informativa sui rischi è consegnata:",
    [
     "Una sola volta",
     "Almeno annualmente, in forma scritta",
     "Solo a voce",
     "Mai"
    ],
    1,
    "Art. 22 L. 81/2017."
   ],
   [
    "Al telelavoro si applicano le disposizioni:",
    [
     "Del Titolo VII sui videoterminali",
     "Del Titolo IV sui cantieri",
     "Solo del codice civile",
     "Nessuna"
    ],
    0,
    "Art. 3, c. 10."
   ],
   [
    "L’altezza netta minima dei locali delle aziende industriali è di:",
    [
     "2,4 m",
     "2,7 m",
     "3 m",
     "4 m"
    ],
    2,
    "Allegato IV, punto 1.2."
   ],
   [
    "Negli ambienti moderati si usa l’indice:",
    [
     "WBGT",
     "PMV",
     "IREQ",
     "LEX,8h"
    ],
    1,
    "UNI EN ISO 7730."
   ],
   [
    "Le attività soggette ai controlli dei Vigili del fuoco sono elencate nel:",
    [
     "D.P.R. 151/2011",
     "D.M. 388/2003",
     "D.lgs. 105/2015",
     "D.M. 37/2008"
    ],
    0,
    "Allegato I del D.P.R. 151/2011."
   ],
   [
    "La zona 1 indica un’atmosfera esplosiva per gas:",
    [
     "Presente in modo continuo",
     "Probabile durante il funzionamento normale",
     "Improbabile e di breve durata",
     "Assente"
    ],
    1,
    "CEI EN IEC 60079-10-1."
   ],
   [
    "La protezione dai contatti indiretti si realizza principalmente con:",
    [
     "Isolamento delle parti attive",
     "Messa a terra coordinata con l’interruzione automatica",
     "Cartelli",
     "Guanti"
    ],
    1,
    "CEI 64-8."
   ],
   [
    "La distanza minima da una linea aerea a 15 kV per lavori non elettrici è:",
    [
     "1 m",
     "3 m",
     "3,5 m",
     "7 m"
    ],
    2,
    "Allegato IX."
   ],
   [
    "Il metodo indicato dalla UNI ISO 11228-3 per la valutazione dettagliata dei movimenti ripetitivi è:",
    [
     "NIOSH",
     "OCRA",
     "Snook-Ciriello",
     "WBGT"
    ],
    1,
    "UNI ISO 11228-3."
   ],
   [
    "Un punteggio della check list OCRA di 6 indica una fascia:",
    [
     "Verde",
     "Gialla",
     "Rossa",
     "Viola"
    ],
    0,
    "Fino a 7,5."
   ],
   [
    "Lo strumento indicatore INAIL per la valutazione approfondita comprende:",
    [
     "10 domande",
     "35 domande in 7 dimensioni",
     "100 domande",
     "Un colloquio individuale"
    ],
    1,
    "Metodologia INAIL."
   ],
   [
    "Il burnout è classificato nell’ICD-11 come:",
    [
     "Malattia psichiatrica",
     "Fenomeno occupazionale",
     "Infortunio",
     "Malattia infettiva"
    ],
    1,
    "QD85."
   ],
   [
    "I lavoratori portatori di dispositivi medici impiantabili attivi, rispetto ai CEM, sono:",
    [
     "Esclusi dalla valutazione",
     "Lavoratori particolarmente sensibili",
     "Esposti di categoria A",
     "Non rilevanti"
    ],
    1,
    "Capo IV."
   ],
   [
    "Nel test preliminare con 3 misure la conformità si ha se tutte sono inferiori al:",
    [
     "5% del limite",
     "10% del limite",
     "50% del limite",
     "100% del limite"
    ],
    1,
    "UNI EN 689:2018."
   ],
   [
    "Per i cancerogeni la prima misura è:",
    [
     "Il DPI",
     "La sostituzione dell’agente, se tecnicamente possibile",
     "La formazione",
     "La segnaletica"
    ],
    1,
    "Art. 235."
   ],
   [
    "Gli agenti biologici del gruppo 4 sono caratterizzati da:",
    [
     "Poche probabilità di causare malattie",
     "Malattie gravi, elevato rischio di propagazione, di norma senza profilassi o terapie",
     "Assenza di rischio",
     "Solo rischio per gli animali"
    ],
    1,
    "Art. 268."
   ],
   [
    "I vaccini per i lavoratori non immuni sono messi a disposizione su parere:",
    [
     "Dell’RLS",
     "Del medico competente",
     "Dell’ASL",
     "Del RSPP"
    ],
    1,
    "Art. 279."
   ],
   [
    "La formazione per i lavoratori addetti alla segnaletica stradale dura:",
    [
     "4 ore",
     "8 ore",
     "16 ore",
     "32 ore"
    ],
    1,
    "D.I. 22 gennaio 2019."
   ],
   [
    "Nei lavori in ambienti confinati il personale esperto è almeno il:",
    [
     "10%",
     "30%",
     "50%",
     "100%"
    ],
    1,
    "D.P.R. 177/2011."
   ],
   [
    "Il divieto di assunzione di alcolici nelle attività ad elevato rischio è previsto da:",
    [
     "Art. 15 L. 125/2001",
     "Art. 2087 c.c.",
     "D.M. 388/2003",
     "D.lgs. 66/2003"
    ],
    0,
    "L. 125/2001."
   ],
   [
    "L’elenco delle mansioni a rischio per l’alcol è nell’Intesa Stato-Regioni del:",
    [
     "16 marzo 2006",
     "17 aprile 2025",
     "21 dicembre 2011",
     "22 febbraio 2012"
    ],
    0,
    "Intesa 16/03/2006."
   ]
  ]
 }
};
