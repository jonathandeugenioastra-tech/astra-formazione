/* Corso – Rischio chimico, cancerogeno, mutageno e reprotossico (8 ore)
   Titolo IX, Capi I e II, D.lgs. 81/2008 (come modificato dal D.lgs. 135/2024) · Reg. (CE) 1272/2008 (CLP) · Reg. (CE) 1907/2006 (REACH) · UNI EN 689
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "CHIM",
 "titolo": "Rischio chimico, cancerogeno e mutageno",
 "sottotitolo": "Classificazione, valutazione, misura dell’esposizione e misure di prevenzione",
 "ore": 8,
 "rif": "Titolo IX D.lgs. 81/2008 · D.lgs. 135/2024 · Reg. (CE) 1272/2008 · Reg. (CE) 1907/2006 · UNI EN 689",
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
     "tit": "Rischio chimico, cancerogeno e mutageno",
     "sott": "Corso di 8 ore",
     "nar": "Benvenuti al corso sul rischio chimico, cancerogeno, mutageno e reprotossico. Sono trattate la classificazione e la comunicazione del pericolo, la valutazione e la misura dell’esposizione, le misure di prevenzione e protezione.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Leggere etichette, pittogrammi e schede di dati di sicurezza",
      "Conoscere gli obblighi del Titolo IX e di REACH e CLP",
      "Impostare la valutazione del rischio chimico e la strategia di misura UNI EN 689",
      "Applicare gli obblighi specifici per cancerogeni, mutageni e reprotossici",
      "Scegliere misure tecniche, organizzative e DPI secondo la gerarchia"
     ],
     "nar": "Al termine del corso il partecipante sarà in grado di leggere etichette e schede di dati di sicurezza, conoscerà gli obblighi di legge e saprà impostare la valutazione e la misura dell’esposizione, scegliendo le misure di prevenzione secondo l’ordine gerarchico.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Classificazione e comunicazione del pericolo",
   "min": 175,
   "foto": "sicurezza",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Classificazione e comunicazione del pericolo",
     "nar": "Primo modulo: classificazione e comunicazione del pericolo.",
     "p": 0.6
    },
    {
     "t": "definizioni",
     "tit": "Agenti chimici: le definizioni",
     "sott": "Art. 222 D.lgs. 81/2008 · Consultare tutte le schede",
     "voci": [
      [
       "a",
       "Agente chimico",
       "Tutti gli elementi o composti chimici, sia da soli sia nei loro miscugli, allo stato naturale o ottenuti, utilizzati o smaltiti, compreso lo smaltimento come rifiuti, mediante qualsiasi attività lavorativa."
      ],
      [
       "b",
       "Agente chimico pericoloso",
       "Agente classificato come pericoloso ai sensi del Regolamento CLP, oppure che, pur non classificato, può comportare un rischio per le sue proprietà o per il modo in cui è utilizzato, compresi quelli con un valore limite di esposizione professionale."
      ],
      [
       "d",
       "Valore limite di esposizione professionale",
       "Il limite della concentrazione media ponderata nel tempo di un agente chimico nell'aria all'interno della zona di respirazione di un lavoratore in relazione a un determinato periodo di riferimento (Allegato XXXVIII)."
      ],
      [
       "e",
       "Valore limite biologico",
       "Il limite della concentrazione del relativo agente, di un suo metabolita o di un indicatore di effetto nell'appropriato mezzo biologico (Allegato XXXIX)."
      ]
     ],
     "nar": "Il Titolo nove del decreto disciplina gli agenti chimici. È agente chimico qualsiasi sostanza o miscela utilizzata o prodotta durante il lavoro, compresi i rifiuti. È pericoloso quando è classificato tale dal regolamento CLP, oppure quando, pur non classificato, comporta un rischio per le sue proprietà o per le modalità d'uso, come i fumi di saldatura o le polveri. Il valore limite di esposizione professionale indica la concentrazione massima nell'aria respirata; il valore limite biologico riguarda la concentrazione nel sangue o nelle urine.",
     "p": 1.7
    },
    {
     "t": "testo",
     "tit": "Il regolamento CLP: classi e categorie di pericolo",
     "foto": false,
     "lead": "Il regolamento (CE) 1272/2008 (CLP) armonizza nell’Unione la classificazione, l’etichettatura e l’imballaggio di sostanze e miscele, sulla base del sistema mondiale GHS.",
     "punti": [
      "Pericoli fisici: esplosivi, gas e liquidi infiammabili, comburenti, gas sotto pressione, corrosivi per i metalli e altri",
      "Pericoli per la salute: tossicità acuta, corrosione e irritazione, sensibilizzazione, mutagenicità, cancerogenicità, tossicità per la riproduzione, tossicità specifica per organi bersaglio, pericolo in caso di aspirazione",
      "Pericoli per l’ambiente: acquatico e per lo strato di ozono; dal 2023 nuove classi per interferenti endocrini e sostanze persistenti e mobili",
      "Categorie: 1A e 1B per cancerogeni, mutageni e reprotossici accertati o presunti; 2 per sospetti",
      "Indicazioni di pericolo (frasi H), consigli di prudenza (frasi P), avvertenza «Pericolo» o «Attenzione», nove pittogrammi"
     ],
     "appro": "Il regolamento delegato (UE) 2023/707 ha introdotto nuove classi di pericolo (interferenza con il sistema endocrino, persistenza, bioaccumulo e mobilità), applicate progressivamente secondo le date transitorie. Le frasi H340, H350 e H360 identificano rispettivamente mutageni, cancerogeni e reprotossici di categoria 1A o 1B.",
     "rif": "Reg. (CE) 1272/2008 · Reg. delegato (UE) 2023/707",
     "nar": "Il regolamento CLP armonizza classificazione ed etichettatura. Classifica i pericoli fisici, per la salute e per l’ambiente, in categorie: per cancerogeni, mutageni e reprotossici la categoria uno A o uno B indica effetti accertati o presunti, la due sospetti. L’etichetta riporta frasi H, frasi P, avvertenza e pittogrammi. Le frasi H340, H350 e H360 indicano mutageni, cancerogeni e reprotossici di categoria uno.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le nuove classi di pericolo: interferenti endocrini, PBT e PMT",
     "lead": "Il Regolamento delegato (UE) 2023/707 ha introdotto nel CLP sei nuove classi di pericolo per la salute e l’ambiente.",
     "punti": [
      "Interferenti endocrini per la salute umana (ED HH) e per l’ambiente (ED ENV), in categorie 1 e 2",
      "Sostanze persistenti, bioaccumulabili e tossiche (PBT) e molto persistenti e molto bioaccumulabili (vPvB)",
      "Sostanze persistenti, mobili e tossiche (PMT) e molto persistenti e molto mobili (vPvM)",
      "Nuove indicazioni di pericolo con codici EUH dedicati",
      "Applicazione progressiva: sostanze già sul mercato dal 1° novembre 2026, miscele già sul mercato dal 1° maggio 2028"
     ],
     "appro": "Le nuove classi incidono su etichette, schede di dati di sicurezza e valutazione dei rischi, oltre che sulla classificazione dei rifiuti contenenti tali sostanze.",
     "rif": "Reg. (CE) 1272/2008 (CLP) · Reg. delegato (UE) 2023/707",
     "nar": "Il regolamento CLP classifica le sostanze e le miscele secondo classi di pericolo fisico, per la salute e per l’ambiente. Il regolamento delegato duemilaventitré barra settecentosette ha aggiunto sei nuove classi, che l’Unione europea ha introdotto per prima a livello mondiale. Due riguardano gli interferenti endocrini, cioè sostanze che alterano il sistema ormonale: per la salute umana, con la sigla ED HH, e per l’ambiente, con la sigla ED ENV, ciascuna articolata in categoria uno, accertata o presunta, e categoria due, sospetta. Le altre riguardano proprietà ambientali di lungo periodo: sostanze persistenti, bioaccumulabili e tossiche, molto persistenti e molto bioaccumulabili, persistenti, mobili e tossiche, molto persistenti e molto mobili. Queste ultime sono particolarmente rilevanti per la contaminazione delle acque, perché le sostanze mobili attraversano facilmente i sistemi di depurazione. A ciascuna classe corrisponde una nuova indicazione di pericolo con codice EUH. L’applicazione è progressiva: per le sostanze già presenti sul mercato le nuove classi si applicano dal primo novembre duemilaventisei, per le miscele già presenti dal primo maggio duemilaventotto. Ne derivano aggiornamenti di etichette e schede di dati di sicurezza, che vanno recepiti nella valutazione del rischio chimico.",
     "est": true,
     "ancora": "Il regolamento CLP: classi e categorie di pericolo"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Indicazione di pericolo o consiglio di prudenza?",
     "lead": "Seleziona una frase, poi la colonna.",
     "colonne": [
      "Indicazione di pericolo (H)",
      "Consiglio di prudenza (P)"
     ],
     "schede": [
      [
       "Provoca gravi ustioni cutanee e gravi lesioni oculari",
       0,
       "Descrive il pericolo: H314.",
       "Corretto."
      ],
      [
       "Indossare guanti protettivi",
       1,
       "È un comportamento da seguire: P280.",
       "Corretto."
      ],
      [
       "Liquido e vapori facilmente infiammabili",
       0,
       "H225.",
       "Corretto."
      ],
      [
       "Tenere lontano da fonti di calore e scintille",
       1,
       "P210.",
       "Corretto."
      ],
      [
       "Può provocare il cancro",
       0,
       "H350.",
       "Corretto."
      ],
      [
       "In caso di contatto con gli occhi sciacquare accuratamente",
       1,
       "P305+P351+P338.",
       "Corretto."
      ]
     ],
     "nar": "Sei frasi di un’etichetta. Distingui le indicazioni di pericolo dai consigli di prudenza.",
     "rif": "Reg. (CE) 1272/2008, Allegati III e IV",
     "est": true,
     "ancora": "Il regolamento CLP: classi e categorie di pericolo"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Classe vecchia o nuova?",
     "lead": "Seleziona una classe di pericolo, poi la colonna.",
     "colonne": [
      "Classi introdotte nel 2023",
      "Classi già presenti"
     ],
     "schede": [
      [
       "Interferenti endocrini per la salute umana",
       0,
       "Introdotta dal Reg. delegato (UE) 2023/707.",
       "Corretto."
      ],
      [
       "Persistenti, mobili e tossiche (PMT)",
       0,
       "Nuova classe.",
       "Corretto."
      ],
      [
       "Persistenti, bioaccumulabili e tossiche (PBT)",
       0,
       "Diventa classe di pericolo del CLP con il regolamento del 2023.",
       "Corretto."
      ],
      [
       "Tossicità per la riproduzione",
       1,
       "Era già presente.",
       "Corretto."
      ],
      [
       "Sensibilizzazione cutanea",
       1,
       "Era già presente.",
       "Corretto."
      ],
      [
       "Interferenti endocrini per l’ambiente",
       0,
       "Nuova classe.",
       "Corretto."
      ]
     ],
     "nar": "Sei classi di pericolo. Distingui quelle introdotte nel duemilaventitré da quelle già presenti nel CLP.",
     "rif": "Reg. delegato (UE) 2023/707",
     "est": true,
     "ancora": "Le nuove classi di pericolo: interferenti endocrini, PBT e PMT"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La classificazione delle miscele",
     "lead": "Le miscele si classificano con i dati sulla miscela stessa, con i principi ponte o, più spesso, con metodi di calcolo basati sui componenti.",
     "punti": [
      "Primo livello: dati di prova sulla miscela, se disponibili e pertinenti",
      "Principi ponte: estrapolazione da miscele simili già sperimentate",
      "Metodo di calcolo: somma dei componenti classificati confrontata con limiti di concentrazione",
      "Tossicità acuta: stima della tossicità acuta della miscela (ATEmix)",
      "Pericoli per l’ambiente acquatico: metodo della sommatoria con i fattori M"
     ],
     "appro": "Ogni cambio di formula, anche di un solo componente, richiede di rivalutare la classificazione, l’etichetta, la scheda di dati di sicurezza e la notifica UFI.",
     "rif": "Reg. (CE) 1272/2008 (CLP), artt. 9 e 10 e Allegato I",
     "nar": "La classificazione di una miscela segue un ordine stabilito dal regolamento CLP. Se esistono dati di prova sulla miscela stessa, pertinenti e affidabili, si usano per primi, salvo per alcune classi come cancerogenicità, mutagenicità e tossicità per la riproduzione, che si valutano sui componenti. Se la miscela non è stata sperimentata ma esistono dati su miscele simili, si applicano i principi ponte, come la diluizione, l’appartenenza allo stesso lotto o la concentrazione di miscele molto pericolose. Nella maggior parte dei casi si applicano i metodi di calcolo: per molte classi di pericolo si sommano le concentrazioni dei componenti classificati e si confrontano con i limiti generici o specifici di concentrazione. Per la tossicità acuta si calcola la stima della tossicità acuta della miscela a partire dai valori dei componenti. Per i pericoli per l’ambiente acquatico si usa il metodo della sommatoria, in cui i componenti molto tossici pesano di più grazie ai fattori moltiplicatori. Ogni modifica della formula, anche di un solo componente o di una concentrazione, richiede di rivalutare la classificazione, l’etichetta, la scheda di dati di sicurezza e la notifica ai centri antiveleni con il relativo codice UFI.",
     "est": true,
     "ancora": "Il regolamento CLP: classi e categorie di pericolo"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Classificare una miscela con il metodo di calcolo",
     "lead": "Corrosione e irritazione cutanea di un detergente.",
     "passi": [
      [
       "I componenti",
       "La miscela contiene il 3% di un componente Skin Corr. 1 e l’8% di un componente Skin Irrit. 2.",
       "3% Corr. 1 · 8% Irrit. 2"
      ],
      [
       "Corrosione",
       "Si classifica Skin Corr. 1 se la somma dei componenti corrosivi è almeno il 5%.",
       "3% < 5% → non corrosiva"
      ],
      [
       "Irritazione",
       "Si classifica Skin Irrit. 2 se 10 × (corrosivi) + (irritanti) è almeno il 10%.",
       "10 × 3 + 8 = 38% ≥ 10%"
      ],
      [
       "Il risultato",
       "La miscela è classificata irritante per la pelle, categoria 2.",
       "Skin Irrit. 2 · H315"
      ],
      [
       "L’etichetta",
       "Pittogramma GHS07, avvertenza «Attenzione».",
       "GHS07 · Attenzione"
      ]
     ],
     "nar": "Classifichiamo un detergente con il metodo di calcolo. Contiene il tre per cento di un componente corrosivo e l’otto per cento di un irritante. Per la corrosione servirebbe almeno il cinque per cento di componenti corrosivi: non basta. Per l’irritazione si somma dieci volte la quota dei corrosivi più quella degli irritanti: trenta più otto fa trentotto, oltre la soglia del dieci per cento. La miscela è quindi irritante per la pelle, categoria due, con il punto esclamativo e l’avvertenza «Attenzione».",
     "rif": "Reg. (CE) 1272/2008, Allegato I, punto 3.2.3",
     "est": true,
     "ancora": "La classificazione delle miscele"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Quale pittogramma?",
     "lead": "Seleziona un pericolo, poi il pittogramma corretto.",
     "colonne": [
      "GHS02 · fiamma",
      "GHS05 · corrosione",
      "GHS06 · teschio",
      "GHS07 · punto esclamativo",
      "GHS08 · pericolo per la salute",
      "GHS09 · ambiente"
     ],
     "schede": [
      [
       "Liquido infiammabile, categoria 2",
       0,
       "La fiamma indica gas, liquidi e solidi infiammabili.",
       "Corretto."
      ],
      [
       "Corrosione cutanea, categoria 1",
       1,
       "La corrosione vale per pelle, occhi e metalli.",
       "Corretto."
      ],
      [
       "Tossicità acuta per inalazione, categoria 2",
       2,
       "Il teschio indica la tossicità acuta di categoria 1, 2 o 3.",
       "Corretto."
      ],
      [
       "Irritazione cutanea, categoria 2",
       3,
       "Il punto esclamativo indica irritazione e pericoli minori.",
       "Corretto."
      ],
      [
       "Cancerogenicità, categoria 1B",
       4,
       "La sagoma con la stella indica i pericoli gravi a lungo termine.",
       "Corretto."
      ],
      [
       "Pericoloso per l’ambiente acquatico, cronico 2",
       5,
       "Albero e pesce indicano il pericolo per l’ambiente acquatico.",
       "Corretto."
      ],
      [
       "Sensibilizzazione delle vie respiratorie",
       4,
       "È un pericolo grave per la salute.",
       "Corretto."
      ],
      [
       "Tossicità acuta per ingestione, categoria 4",
       3,
       "La categoria 4 usa il punto esclamativo.",
       "Corretto."
      ]
     ],
     "nar": "Otto pericoli classificati secondo il CLP. Associa a ciascuno il pittogramma corretto.",
     "rif": "Reg. (CE) 1272/2008, Allegato V",
     "est": true,
     "ancora": "Il regolamento CLP: classi e categorie di pericolo"
    },
    {
     "t": "testo",
     "foto": "hero2",
     "tit": "Etichettatura e scheda di dati di sicurezza",
     "rif": "Regolamento (CE) 1272/2008 (CLP) · Regolamento (CE) 1907/2006 (REACH), Allegato II",
     "lead": "L'etichetta sintetizza i pericoli; la scheda di dati di sicurezza, in 16 sezioni, fornisce le informazioni complete per l'uso sicuro.",
     "punti": [
      "Pittogrammi di pericolo: rombi con bordo rosso",
      "Avvertenza: «Pericolo» o «Attenzione»",
      "Indicazioni di pericolo (H) e consigli di prudenza (P)",
      "Scheda: sez. 2 pericoli, sez. 4 primo soccorso, sez. 7 manipolazione e stoccaggio, sez. 8 esposizione e DPI, sez. 10 stabilità e reattività",
      "La scheda deve essere disponibile ai lavoratori e aggiornata"
     ],
     "nar": "L'etichetta dei prodotti chimici riporta i pittogrammi di pericolo, l'avvertenza, le indicazioni di pericolo con la lettera H e i consigli di prudenza con la lettera P. La scheda di dati di sicurezza, organizzata in sedici sezioni, fornisce tutte le informazioni: le più utili per chi lavora sono la sezione sui pericoli, quella sul primo soccorso, quella sulla manipolazione e sullo stoccaggio e quella sulla protezione individuale. La scheda deve essere sempre disponibile e aggiornata.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le novità dell’Allegato II: Regolamento (UE) 2020/878",
     "lead": "Dal 1° gennaio 2023 tutte le schede di dati di sicurezza devono seguire il formato aggiornato dal Regolamento (UE) 2020/878.",
     "punti": [
      "Sezione 1: possibilità di indicare il codice UFI della miscela",
      "Sezioni 2, 11 e 12: informazioni sulle proprietà di interferenza endocrina",
      "Sezione 3: limiti di concentrazione specifici, fattori M e stime della tossicità acuta",
      "Informazioni specifiche per le nanoforme nelle sezioni pertinenti",
      "Sezione 9 ristrutturata per stato fisico e proprietà di sicurezza"
     ],
     "appro": "Una scheda redatta secondo il formato precedente è oggi non conforme: è un elemento da verificare all’arrivo di ogni nuova SDS.",
     "rif": "Reg. (CE) 1907/2006, art. 31 e Allegato II · Reg. (UE) 2020/878",
     "nar": "Il formato e i contenuti della scheda di dati di sicurezza sono stabiliti dall’Allegato secondo del regolamento REACH, modificato dal regolamento europeo duemilaventi barra ottocentosettantotto. Dal primo gennaio duemilaventitré tutte le schede devono essere conformi alla nuova versione. Le novità principali sono diverse. Nella sezione uno è possibile indicare il codice UFI, l’identificatore unico di formula che consente ai centri antiveleni di riconoscere esattamente la miscela. Nelle sezioni due, undici e dodici vanno riportate le informazioni sulle proprietà di interferenza endocrina delle sostanze presenti. Nella sezione tre si indicano, quando disponibili, i limiti di concentrazione specifici, i fattori moltiplicatori per la tossicità acquatica e le stime della tossicità acuta. Sono richieste informazioni specifiche per le nanoforme. La sezione nove, sulle proprietà fisiche e chimiche, è stata ristrutturata per renderla coerente con le classi di pericolo fisico. All’arrivo di una nuova scheda conviene quindi verificare la data di revisione e la conformità al formato vigente: una scheda redatta secondo il formato precedente non è conforme e va richiesta aggiornata al fornitore, annotando la richiesta.",
     "est": true,
     "ancora": "Etichettatura e scheda di dati di sicurezza"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il codice UFI e la notifica ai centri antiveleni",
     "lead": "Le miscele pericolose per la salute o per i pericoli fisici sono notificate all’ECHA e identificate in etichetta con un codice UFI.",
     "punti": [
      "Allegato VIII del CLP: notifica armonizzata a livello europeo tramite il portale ECHA",
      "Obbligo per importatori e utilizzatori a valle che immettono miscele sul mercato",
      "UFI: codice alfanumerico di 16 caratteri riportato in etichetta",
      "Applicazione completa per usi di consumo, professionali e industriali dal 1° gennaio 2025",
      "In Italia le informazioni sono rese disponibili ai centri antiveleni tramite l’Istituto superiore di sanità"
     ],
     "appro": "In caso di intossicazione, il codice UFI comunicato al centro antiveleni consente di identificare la composizione esatta della miscela.",
     "rif": "Reg. (CE) 1272/2008 (CLP), art. 45 e Allegato VIII",
     "nar": "Quando una persona viene esposta accidentalmente a una miscela pericolosa, il centro antiveleni deve conoscerne rapidamente la composizione. L’articolo quarantacinque e l’Allegato otto del regolamento CLP hanno armonizzato a livello europeo la notifica delle informazioni sulle miscele classificate pericolose per la salute o per i pericoli fisici. Gli importatori e gli utilizzatori a valle che immettono sul mercato queste miscele presentano la notifica attraverso il portale dell’Agenzia europea per le sostanze chimiche, indicando composizione, classificazione, etichettatura e usi. A ogni miscela è associato un identificatore unico di formula, il codice UFI, composto da sedici caratteri alfanumerici, che va riportato sull’etichetta, di norma vicino agli identificatori del prodotto. Il codice collega in modo univoco il prodotto in commercio alla composizione notificata. Gli obblighi si sono applicati gradualmente e dal primo gennaio duemilaventicinque riguardano tutte le miscele, per usi di consumo, professionali e industriali. In caso di intossicazione, comunicare al centro antiveleni il codice UFI riportato sull’etichetta consente di identificare la composizione esatta e di orientare rapidamente il trattamento.",
     "est": true,
     "ancora": "Etichettatura e scheda di dati di sicurezza"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il detergente importato",
     "scena": "Un’impresa importa dalla Svizzera un detergente classificato corrosivo e lo vende a imprese di pulizia italiane.",
     "decisioni": [
      {
       "dom": "Chi deve notificare la miscela?",
       "opz": [
        [
         "L’importatore, prima dell’immissione sul mercato",
         true,
         "Corretto: l’obbligo spetta a importatori e utilizzatori a valle che immettono miscele sul mercato."
        ],
        [
         "Il fabbricante svizzero",
         false,
         "Fuori dall’Unione l’obbligo ricade sull’importatore."
        ],
        [
         "I clienti",
         false,
         "Non sono tenuti."
        ]
       ]
      },
      {
       "dom": "Dove si notifica?",
       "opz": [
        [
         "Tramite il portale dell’ECHA, nel formato armonizzato dell’Allegato VIII",
         true,
         "Corretto."
        ],
        [
         "Con una e-mail all’ASL",
         false,
         "Non è la procedura prevista."
        ],
        [
         "Non serve, è un uso professionale",
         false,
         "Anche le miscele per uso professionale vanno notificate."
        ]
       ]
      },
      {
       "dom": "Che cosa compare sull’etichetta?",
       "opz": [
        [
         "Il codice UFI di 16 caratteri",
         true,
         "Corretto: collega il prodotto alle informazioni per i centri antiveleni."
        ],
        [
         "Il numero di telefono dell’importatore al posto del pittogramma",
         false,
         "Il pittogramma resta obbligatorio."
        ],
        [
         "Nulla di nuovo",
         false,
         "Serve il codice UFI."
        ]
       ]
      }
     ],
     "chiusura": "Notifica armonizzata tramite ECHA prima dell’immissione e codice UFI in etichetta: così i centri antiveleni possono rispondere rapidamente in caso di esposizione.",
     "nar": "Un detergente importato da vendere in Italia. Verifica gli obblighi.",
     "rif": "Reg. (CE) 1272/2008, art. 45 e Allegato VIII",
     "est": true,
     "ancora": "Il codice UFI e la notifica ai centri antiveleni"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Etichetta e scheda di uno sgrassante",
     "lead": "Un reparto di manutenzione usa un nuovo sgrassante a base di solventi.",
     "dossier": [
      [
       "Pittogrammi",
       "GHS02, GHS07, GHS09"
      ],
      [
       "Avvertenza",
       "Pericolo"
      ],
      [
       "Indicazioni H",
       "H225 liquido e vapori facilmente infiammabili; H315 provoca irritazione cutanea; H336 può provocare sonnolenza o vertigini; H411 tossico per gli organismi acquatici con effetti di lunga durata"
      ],
      [
       "Consigli P",
       "P210 tenere lontano da fonti di calore e scintille; P280 indossare guanti e protezione per gli occhi"
      ],
      [
       "Uso",
       "pulizia di pezzi meccanici a pennello, in un locale piccolo"
      ]
     ],
     "compiti": [
      {
       "q": "Spiega in parole semplici i pericoli del prodotto per gli addetti.",
       "min": 6,
       "modello": "Prende fuoco molto facilmente e i vapori possono incendiarsi; irrita la pelle; respirare i vapori può dare sonnolenza e vertigini; è dannoso per l’ambiente acquatico e non va disperso negli scarichi.",
       "criteri": [
        "Ho spiegato il pericolo di incendio",
        "Ho spiegato gli effetti su pelle e sistema nervoso",
        "Ho indicato il pericolo per l’ambiente"
       ]
      },
      {
       "q": "Quali sezioni della scheda consulti e per che cosa?",
       "min": 6,
       "modello": "Sezione 7 per lo stoccaggio e le incompatibilità; sezione 8 per i valori limite, i controlli tecnici e i DPI, come il tipo di guanto e di filtro; sezione 5 e 6 per incendio e sversamenti; sezione 13 per lo smaltimento; sezione 4 per il primo soccorso.",
       "criteri": [
        "Ho indicato le sezioni 7 e 8",
        "Ho indicato le sezioni per le emergenze",
        "Ho indicato la sezione 13"
       ]
      },
      {
       "q": "Quali misure proponi per l’uso nel locale piccolo?",
       "min": 7,
       "modello": "Valutare la sostituzione con un prodotto a base acquosa; se non possibile, aspirazione localizzata o banco aspirato e ventilazione; quantità minime al posto di lavoro in contenitori chiusi ed etichettati; nessuna fonte di innesco; guanti adatti secondo la sezione 8 e occhiali; formazione degli addetti.",
       "criteri": [
        "Ho considerato la sostituzione",
        "Ho previsto ventilazione e controllo delle fonti di innesco",
        "Ho indicato i DPI secondo la sezione 8"
       ]
      }
     ],
     "nar": "Nel laboratorio interpreti l’etichetta di uno sgrassante e la sua scheda di dati di sicurezza. Spiega i pericoli agli addetti, individua le sezioni da consultare e proponi le misure per l’uso in un locale piccolo, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1272/2008 · Reg. (UE) 2020/878",
     "est": true,
     "ancora": "Etichettatura e scheda di dati di sicurezza"
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
     "nar": "Si esamina ora la lettura di una scheda di dati di sicurezza, articolata in sedici sezioni. La seconda indica la classificazione e i pericoli; la settima le modalità di manipolazione e stoccaggio; l’ottava i valori limite e i dispositivi di protezione, compresi il materiale dei guanti e il tipo di filtro. Le sezioni quattro, cinque e sei indicano le misure da adottare in caso di emergenza. Per un diluente facilmente infiammabile e nocivo per inalazione occorrono lo stoccaggio in armadio per infiammabili, l’aspirazione localizzata e i guanti specificati nella scheda, non guanti generici.",
     "p": 1.5
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · La scheda che non convince",
     "lead": "Controlli la scheda di dati di sicurezza di una vernice ricevuta da un nuovo fornitore.",
     "dossier": [
      [
       "Data di revisione",
       "2017"
      ],
      [
       "Formato",
       "sezioni conformi al vecchio Allegato II"
      ],
      [
       "Sezione 3",
       "componenti senza intervalli di concentrazione"
      ],
      [
       "Sezione 8",
       "«usare DPI adeguati», nessun valore limite e nessun tipo di guanto"
      ],
      [
       "Lingua",
       "in parte in inglese"
      ]
     ],
     "compiti": [
      {
       "q": "Elenca le carenze della scheda.",
       "min": 6,
       "modello": "Scheda datata e non aggiornata al Reg. (UE) 2020/878; composizione incompleta; sezione 8 generica, senza valori limite né indicazioni concrete su guanti e protezione respiratoria; scheda non interamente in italiano.",
       "criteri": [
        "Ho rilevato la data e il formato",
        "Ho rilevato la sezione 3 incompleta",
        "Ho rilevato la sezione 8 generica e la lingua"
       ]
      },
      {
       "q": "Che cosa chiedi al fornitore e perché?",
       "min": 5,
       "modello": "Una scheda aggiornata, conforme all’Allegato II modificato, in lingua italiana, con composizione e sezione 8 complete: il fornitore è obbligato a fornirla e l’utilizzatore ne ha bisogno per valutare il rischio.",
       "criteri": [
        "Ho chiesto la scheda aggiornata in italiano",
        "Ho motivato con l’obbligo del fornitore"
       ]
      },
      {
       "q": "Nel frattempo come gestisci il prodotto?",
       "min": 6,
       "modello": "Si sospende l’introduzione o la si limita con misure prudenziali: uso in cabina aspirata, DPI scelti sui componenti noti, quantità minime; si registra la richiesta e si aggiorna la valutazione appena arriva la scheda corretta.",
       "criteri": [
        "Ho previsto misure prudenziali",
        "Ho previsto la registrazione della richiesta",
        "Ho previsto l’aggiornamento della valutazione"
       ]
      }
     ],
     "nar": "Il laboratorio ti chiede di valutare la qualità di una scheda di dati di sicurezza. Individua le carenze, decidi che cosa chiedere al fornitore e come gestire il prodotto nel frattempo, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Art. 31 Reg. (CE) 1907/2006 · Reg. (UE) 2020/878",
     "est": true,
     "ancora": "Esempio applicativo: leggere la scheda di dati di sicurezza"
    },
    {
     "t": "testo",
     "tit": "Il regolamento REACH e gli obblighi dell’utilizzatore",
     "foto": false,
     "lead": "Il regolamento (CE) 1907/2006 (REACH) disciplina registrazione, valutazione, autorizzazione e restrizione delle sostanze chimiche.",
     "punti": [
      "Registrazione presso l’ECHA delle sostanze fabbricate o importate in quantità pari o superiori a 1 tonnellata/anno",
      "Sostanze estremamente preoccupanti (SVHC) nell’elenco delle sostanze candidate; obbligo di informazione nella catena di approvvigionamento",
      "Autorizzazione (Allegato XIV): uso consentito solo se autorizzato; restrizioni (Allegato XVII): limiti o divieti per determinati usi",
      "Scheda di dati di sicurezza (art. 31 e Allegato II) e, per le sostanze registrate, scenari di esposizione allegati (SDS estesa)",
      "L’utilizzatore a valle verifica che il proprio uso sia coperto dagli scenari di esposizione e applica le misure indicate"
     ],
     "appro": "Le informazioni della SDS estesa (condizioni operative, misure di gestione del rischio, DNEL) sono un input importante per la valutazione dei rischi del Titolo IX, ma non la sostituiscono: la valutazione considera le condizioni reali di lavoro e i valori limite di esposizione professionale.",
     "rif": "Reg. (CE) 1907/2006, artt. 31, 37, 56, 67 e Allegati II, XIV, XVII",
     "nar": "Il regolamento REACH prevede la registrazione delle sostanze, l’elenco delle sostanze estremamente preoccupanti, l’autorizzazione per quelle dell’Allegato quattordici e le restrizioni dell’Allegato diciassette. Per le sostanze registrate la scheda di sicurezza estesa contiene gli scenari di esposizione: l’utilizzatore verifica che il suo uso sia coperto e applica le misure indicate.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La restrizione sui diisocianati: formazione obbligatoria",
     "lead": "Dal 24 agosto 2023 l’uso professionale e industriale di prodotti con diisocianati oltre lo 0,1% richiede una formazione specifica.",
     "punti": [
      "Voce 74 dell’Allegato XVII del REACH, introdotta dal Reg. (UE) 2020/1149",
      "Si applica a sostanze e miscele con diisocianati in concentrazione superiore allo 0,1% in peso",
      "Prodotti tipici: schiume poliuretaniche, adesivi, sigillanti, vernici e rivestimenti bicomponenti",
      "Tre livelli di formazione in funzione dell’uso, con rinnovo almeno ogni cinque anni",
      "Etichetta del fornitore con la dicitura sull’obbligo di formazione"
     ],
     "appro": "I diisocianati sono tra le principali cause di asma professionale: la restrizione si affianca ai nuovi valori limite della Direttiva (UE) 2024/869.",
     "rif": "Reg. (CE) 1907/2006, Allegato XVII, voce 74 · Reg. (UE) 2020/1149",
     "nar": "I diisocianati sono sostanze usate per produrre poliuretani e sono contenuti in molte schiume, adesivi, sigillanti, vernici e rivestimenti bicomponenti. Sono sensibilizzanti respiratori e cutanei e rappresentano una delle principali cause di asma professionale in Europa. Per questo il regolamento europeo duemilaventi barra millecentoquarantanove ha introdotto la voce settantaquattro dell’Allegato diciassette del regolamento REACH: dal ventiquattro agosto duemilaventitré i diisocianati, da soli o in miscele, in concentrazione superiore allo zero virgola uno per cento in peso, possono essere usati da utilizzatori industriali e professionali solo dopo una formazione specifica sull’uso sicuro. La formazione è articolata in tre livelli in funzione dell’attività: un livello generale, uno intermedio per usi come la spruzzatura in ambienti ventilati e uno avanzato per gli usi più critici, ad esempio la spruzzatura all’aperto o con temperature elevate. Va rinnovata almeno ogni cinque anni e il datore di lavoro deve documentarla. Il fornitore indica l’obbligo sull’imballaggio. La restrizione si affianca ai nuovi valori limite di esposizione per i diisocianati introdotti dalla direttiva duemilaventiquattro barra ottocentosessantanove.",
     "est": true,
     "ancora": "Il regolamento REACH e gli obblighi dell’utilizzatore"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "La schiuma poliuretanica in cantiere",
     "scena": "Un’impresa di serramenti usa schiume poliuretaniche monocomponenti con diisocianati oltre lo 0,1% per sigillare gli infissi.",
     "decisioni": [
      {
       "dom": "Che cosa serve prima dell’uso professionale?",
       "opz": [
        [
         "Nulla di particolare",
         false,
         "La restrizione della voce 74 impone una formazione specifica."
        ],
        [
         "La formazione specifica sull’uso sicuro dei diisocianati, completata con esito positivo",
         true,
         "Corretto: è obbligatoria dal 24 agosto 2023."
        ],
        [
         "Solo il certificato medico",
         false,
         "Non sostituisce la formazione."
        ]
       ]
      },
      {
       "dom": "Ogni quanto si rinnova la formazione?",
       "opz": [
        [
         "Almeno ogni cinque anni",
         true,
         "Corretto."
        ],
        [
         "Ogni anno",
         false,
         "La periodicità minima è quinquennale."
        ],
        [
         "Mai",
         false,
         "Va rinnovata."
        ]
       ]
      },
      {
       "dom": "Un nuovo addetto non ha ancora la formazione. Che cosa fai?",
       "opz": [
        [
         "Lo fai lavorare affiancato",
         false,
         "L’uso professionale richiede la formazione completata."
        ],
        [
         "Non lo adibisci all’uso finché non completa la formazione, e lo documenti",
         true,
         "Corretto: l’impresa deve poter dimostrare la formazione."
        ],
        [
         "Gli dai un DPI in più",
         false,
         "Non sostituisce la formazione."
        ]
       ]
      }
     ],
     "chiusura": "Formazione specifica prima dell’uso, rinnovo almeno quinquennale e documentazione: la restrizione sui diisocianati si applica a ogni utilizzatore professionale.",
     "nar": "Schiume con diisocianati usate in cantiere. Verifica gli obblighi.",
     "rif": "Reg. (CE) 1907/2006, Allegato XVII, voce 74",
     "est": true,
     "ancora": "La restrizione sui diisocianati: formazione obbligatoria"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Articoli con SVHC: art. 33 e banca dati SCIP",
     "lead": "Chi fornisce articoli contenenti sostanze estremamente preoccupanti oltre lo 0,1% in peso ha obblighi di comunicazione lungo la catena.",
     "punti": [
      "Art. 33 c. 1: informazioni al destinatario sull’uso sicuro, almeno il nome della sostanza",
      "Art. 33 c. 2: risposta gratuita al consumatore che lo richiede entro 45 giorni",
      "Art. 7 c. 2: notifica all’ECHA oltre 1 tonnellata/anno, entro 6 mesi dall’inclusione nell’elenco",
      "Banca dati SCIP: notifica all’ECHA degli articoli con SVHC dal 5 gennaio 2021",
      "La soglia dello 0,1% si applica a ciascun articolo che compone un oggetto complesso"
     ],
     "appro": "L’elenco delle sostanze candidate è aggiornato due volte l’anno: ogni aggiornamento richiede di verificare di nuovo i propri articoli.",
     "rif": "Reg. (CE) 1907/2006, artt. 7, 33 e 59 · Dir. 2008/98/CE, art. 9 · Corte di giustizia UE, C-106/14",
     "nar": "Le sostanze estremamente preoccupanti, indicate con la sigla SVHC, sono incluse dall’Agenzia europea per le sostanze chimiche nell’elenco delle sostanze candidate all’autorizzazione, aggiornato di norma due volte l’anno. Anche chi non produce sostanze ma fornisce articoli ha obblighi precisi. L’articolo trentatré stabilisce che il fornitore di un articolo contenente una sostanza dell’elenco in concentrazione superiore allo zero virgola uno per cento in peso deve fornire al destinatario le informazioni sufficienti per un uso sicuro, comprendenti almeno il nome della sostanza; se il destinatario è un consumatore, l’informazione va fornita gratuitamente su richiesta entro quarantacinque giorni. L’articolo sette impone inoltre ai produttori e agli importatori di articoli di notificare all’Agenzia la presenza della sostanza oltre la soglia, quando la quantità complessiva supera una tonnellata all’anno, entro sei mesi dall’inclusione nell’elenco. La direttiva quadro sui rifiuti ha aggiunto, dal cinque gennaio duemilaventuno, la notifica alla banca dati SCIP, per rendere l’informazione disponibile anche agli operatori del riciclo. La Corte di giustizia ha chiarito che la soglia si applica a ciascun articolo componente di un oggetto complesso, non all’oggetto nel suo insieme.",
     "est": true,
     "ancora": "Il regolamento REACH e gli obblighi dell’utilizzatore"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "La domanda del cliente",
     "scena": "Un cliente privato chiede a un’impresa che vende cavi elettrici se contengono sostanze estremamente preoccupanti. Un plastificante dell’elenco delle candidate è presente allo 0,3% in peso.",
     "decisioni": [
      {
       "dom": "L’impresa deve rispondere?",
       "opz": [
        [
         "Sì: gratuitamente, entro 45 giorni, almeno con il nome della sostanza",
         true,
         "Corretto: art. 33, comma 2."
        ],
        [
         "No, è un segreto commerciale",
         false,
         "L’informazione è dovuta."
        ],
        [
         "Solo se il cliente è un’impresa",
         false,
         "Il diritto vale anche per il consumatore."
        ]
       ]
      },
      {
       "dom": "E verso i clienti professionali?",
       "opz": [
        [
         "Deve informarli già alla fornitura, con le informazioni per l’uso sicuro",
         true,
         "Corretto: art. 33, comma 1."
        ],
        [
         "Solo su richiesta",
         false,
         "Per i destinatari professionali l’obbligo è automatico."
        ],
        [
         "Mai",
         false,
         "È un obbligo."
        ]
       ]
      },
      {
       "dom": "Quale altro adempimento riguarda il fornitore di articoli con SVHC oltre lo 0,1%?",
       "opz": [
        [
         "La notifica alla banca dati SCIP dell’ECHA",
         true,
         "Corretto: prevista dalla direttiva quadro sui rifiuti."
        ],
        [
         "La registrazione della sostanza",
         false,
         "Riguarda fabbricanti e importatori."
        ],
        [
         "Nessuno",
         false,
         "C’è la notifica SCIP."
        ]
       ]
      }
     ],
     "chiusura": "Informare i clienti professionali, rispondere al consumatore entro 45 giorni e notificare in SCIP: sono gli obblighi di chi fornisce articoli con sostanze estremamente preoccupanti.",
     "nar": "Un cliente chiede delle sostanze nei cavi. Rispondi correttamente.",
     "rif": "Art. 33 Reg. (CE) 1907/2006 · art. 9 Dir. 2008/98/CE",
     "est": true,
     "ancora": "Articoli con SVHC: art. 33 e banca dati SCIP"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Scenari di esposizione e SDS estesa",
     "lead": "Per le sostanze registrate oltre 10 tonnellate all’anno e classificate pericolose, la scheda di dati di sicurezza è accompagnata dagli scenari di esposizione.",
     "punti": [
      "Lo scenario descrive condizioni operative e misure di gestione del rischio per un uso identificato",
      "SDS estesa: scheda più allegato con gli scenari pertinenti",
      "L’utilizzatore a valle verifica che il proprio uso e le proprie condizioni rientrino nello scenario",
      "Entro 12 mesi dalla ricezione: adeguarsi, chiedere al fornitore di includere l’uso o redigere una propria valutazione",
      "Notifica all’ECHA se si prepara una propria relazione sulla sicurezza chimica (art. 38)"
     ],
     "appro": "Lo scenario di esposizione è anche una fonte utile per la valutazione del rischio chimico: indica ventilazione, durate e DPI considerati sicuri.",
     "rif": "Reg. (CE) 1907/2006, artt. 14, 31, 37 e 38",
     "nar": "Quando una sostanza è registrata in quantità pari o superiore a dieci tonnellate all’anno e risponde ai criteri di pericolo, il registrante elabora una relazione sulla sicurezza chimica e descrive, per ogni uso identificato, uno scenario di esposizione. Lo scenario indica le condizioni operative, come durata, frequenza, quantità e temperatura, e le misure di gestione del rischio, come ventilazione localizzata e dispositivi di protezione individuale, che garantiscono un controllo adeguato dei rischi. Gli scenari pertinenti sono allegati alla scheda di dati di sicurezza, che prende il nome di scheda estesa. L’utilizzatore a valle che la riceve ha obblighi precisi: verificare che il proprio uso sia coperto e che le proprie condizioni rientrino in quelle descritte. Se non è così, entro dodici mesi deve adeguare le proprie condizioni, chiedere al fornitore di includere il proprio uso oppure redigere una propria relazione sulla sicurezza chimica, notificandolo all’Agenzia ai sensi dell’articolo trentotto. Lo scenario è anche una fonte utile per la valutazione del rischio chimico prevista dal testo unico: i parametri di ventilazione, le durate e i dispositivi indicati come sicuri si confrontano con la situazione reale del reparto.",
     "est": true,
     "ancora": "Il regolamento REACH e gli obblighi dell’utilizzatore"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · L’uso rientra nello scenario?",
     "lead": "Confronti lo scenario di esposizione di un solvente con l’uso reale in reparto.",
     "dossier": [
      [
       "Scenario",
       "applicazione a pennello; aspirazione localizzata; durata massima 4 ore al giorno; guanti in gomma nitrilica"
      ],
      [
       "Uso reale",
       "applicazione a spruzzo, senza aspirazione, per circa 6 ore al giorno"
      ],
      [
       "DPI",
       "guanti in lattice"
      ]
     ],
     "compiti": [
      {
       "q": "L’uso è coperto dallo scenario? Motiva.",
       "min": 6,
       "modello": "No: cambia la tecnica, da pennello a spruzzo, manca l’aspirazione, la durata supera le 4 ore e i guanti non sono quelli indicati. Le condizioni operative e le misure di gestione del rischio non corrispondono.",
       "criteri": [
        "Ho confrontato tecnica e durata",
        "Ho rilevato l’assenza di aspirazione",
        "Ho rilevato i guanti non conformi"
       ]
      },
      {
       "q": "Quali opzioni ha l’utilizzatore a valle?",
       "min": 7,
       "modello": "Adeguare l’uso alle condizioni dello scenario, ad esempio introducendo aspirazione, limitando la durata e usando i guanti indicati; oppure chiedere al fornitore di includere l’uso; oppure redigere una propria relazione sulla sicurezza chimica e notificarla all’ECHA, salvo esenzioni.",
       "criteri": [
        "Ho indicato l’adeguamento",
        "Ho indicato la richiesta al fornitore",
        "Ho indicato la relazione dell’utilizzatore a valle"
       ]
      },
      {
       "q": "Che cosa documenti nella valutazione dei rischi?",
       "min": 5,
       "modello": "Il confronto con lo scenario, l’opzione scelta, le misure adottate e i tempi; l’aggiornamento della scheda di reparto e la formazione degli addetti.",
       "criteri": [
        "Ho documentato confronto e scelta",
        "Ho previsto la scheda di reparto e la formazione"
       ]
      }
     ],
     "nar": "Nel laboratorio confronti lo scenario di esposizione di un solvente con l’uso reale. Valuta se l’uso è coperto, individua le opzioni dell’utilizzatore a valle e indica che cosa documentare, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Art. 37 Reg. (CE) 1907/2006",
     "est": true,
     "ancora": "Scenari di esposizione e SDS estesa"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "A chi spetta l’obbligo?",
     "lead": "Seleziona un obbligo REACH, poi il soggetto tenuto.",
     "colonne": [
      "Fabbricante o importatore",
      "Utilizzatore a valle",
      "Fornitore di articoli"
     ],
     "schede": [
      [
       "Registrare la sostanza prodotta oltre 1 t/anno",
       0,
       "La registrazione spetta a chi fabbrica o importa.",
       "Corretto."
      ],
      [
       "Verificare che il proprio uso rientri negli scenari di esposizione",
       1,
       "È l’obbligo tipico dell’utilizzatore a valle.",
       "Corretto."
      ],
      [
       "Comunicare la presenza di SVHC oltre lo 0,1% negli articoli",
       2,
       "Art. 33 del REACH.",
       "Corretto."
      ],
      [
       "Applicare le misure di gestione del rischio della SDS estesa",
       1,
       "L’utilizzatore attua le misure indicate.",
       "Corretto."
      ],
      [
       "Preparare il fascicolo e la relazione sulla sicurezza chimica",
       0,
       "Spetta al dichiarante, oltre 10 t/anno.",
       "Corretto."
      ],
      [
       "Rispondere al consumatore entro 45 giorni",
       2,
       "Art. 33, comma 2.",
       "Corretto."
      ]
     ],
     "nar": "Sei obblighi del REACH. Individua il soggetto a cui spettano.",
     "rif": "Reg. (CE) 1907/2006, artt. 6, 14, 33 e 37",
     "est": true,
     "ancora": "Il regolamento REACH e gli obblighi dell’utilizzatore"
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
     "nar": "Esercitazione. Un detergente concentrato è stato travasato in una bottiglia d’acqua: si individui la condotta corretta.",
     "p": 1.2
    },
    {
     "foto": false,
     "t": "applica",
     "tit": "Gli agenti chimici della tua azienda",
     "lead": "Fai un primo inventario degli agenti chimici.",
     "voci": [
      "Ho l’elenco dei prodotti in uso",
      "Ogni prodotto ha la scheda aggiornata",
      "I contenitori sono tutti etichettati",
      "Ci sono travasi in contenitori anonimi",
      "Esistono schede di reparto per gli addetti",
      "Ci sono prodotti con diisocianati",
      "Ci sono agenti cancerogeni o mutageni"
     ],
     "campo": "Il prodotto più critico e perché",
     "esempio": "Es.: diluente nitro usato a spruzzo senza aspirazione",
     "min": 3,
     "nar": "Fai un primo inventario degli agenti chimici della tua azienda e indica il prodotto più critico.",
     "est": true,
     "ancora": "Esercitazione · Il travaso nella bottiglia"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Ripasso · Classificazione e informazione",
     "voci": [
      [
       "Un pittogramma GHS07 può indicare la tossicità acuta di categoria 4.",
       true,
       "Vero: la categoria 4 usa il punto esclamativo."
      ],
      [
       "La scheda di dati di sicurezza si può fornire solo in inglese.",
       false,
       "Falso: va fornita nella lingua dello Stato membro."
      ],
      [
       "Il codice UFI ha 16 caratteri.",
       true,
       "Vero."
      ],
      [
       "L’utilizzatore a valle deve registrare le sostanze che acquista.",
       false,
       "Falso: la registrazione spetta a fabbricanti e importatori."
      ]
     ],
     "nar": "Ripasso: quattro affermazioni su classificazione e informazione.",
     "rif": "Reg. (CE) 1272/2008 · Reg. (CE) 1907/2006",
     "est": true,
     "ancora": "Esercitazione · Il travaso nella bottiglia"
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 4,
     "domande": [
      [
       "Il regolamento CLP è il:",
       [
        "Reg. (CE) 1272/2008",
        "Reg. (CE) 1907/2006",
        "Reg. (UE) 2016/425",
        "D.lgs. 81/2008"
       ],
       0,
       "CLP."
      ],
      [
       "La frase H350 indica:",
       [
        "Può provocare il cancro",
        "Liquido infiammabile",
        "Nocivo se ingerito",
        "Corrosivo per i metalli"
       ],
       0,
       "CLP."
      ],
      [
       "I pittogrammi CLP sono:",
       [
        "5",
        "9",
        "12",
        "20"
       ],
       1,
       "CLP."
      ],
      [
       "Le misure di primo soccorso sono nella sezione SDS:",
       [
        "2",
        "4",
        "8",
        "14"
       ],
       1,
       "Allegato II REACH."
      ],
      [
       "Le sostanze dell’Allegato XIV REACH richiedono:",
       [
        "Autorizzazione",
        "Nessun obbligo",
        "Solo etichetta",
        "Solo registrazione"
       ],
       0,
       "REACH."
      ]
     ],
     "nar": "Verifica intermedia sul primo modulo.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Valutazione e misura dell’esposizione",
   "min": 180,
   "foto": "sicurezza3",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Valutazione e misura dell’esposizione",
     "nar": "Secondo modulo: valutazione e misura dell’esposizione.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "La valutazione del rischio chimico (Capo I)",
     "foto": false,
     "lead": "Il datore di lavoro determina se sono presenti agenti chimici pericolosi e valuta i rischi per la sicurezza e la salute (art. 223).",
     "punti": [
      "Proprietà pericolose e informazioni della SDS",
      "Livello, modo e durata dell’esposizione; quantità impiegate; circostanze di lavoro",
      "Valori limite di esposizione professionale e biologici",
      "Effetti delle misure preventive adottate; conclusioni della sorveglianza sanitaria",
      "Attività di manutenzione e pulizia, in cui l’esposizione può essere elevata"
     ],
     "appro": "Se la valutazione dimostra un rischio «basso per la sicurezza e irrilevante per la salute» (art. 224, c. 2) non si applicano gli artt. 225, 226, 229 e 230. Per giungere a questa conclusione si usano modelli di stima riconosciuti e, quando necessario, misurazioni. Le misurazioni sono comunque obbligatorie, salvo che si possa dimostrare con altri mezzi il conseguimento di un adeguato livello di prevenzione (art. 225, c. 2).",
     "rif": "Artt. 222-225 D.lgs. 81/2008",
     "nar": "Il datore di lavoro valuta il rischio chimico considerando proprietà pericolose, livello e durata dell’esposizione, quantità, valori limite, effetto delle misure e risultati della sorveglianza sanitaria, comprese manutenzioni e pulizie. Se il rischio risulta basso per la sicurezza e irrilevante per la salute, alcuni obblighi non si applicano. Le misurazioni sono di regola necessarie.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Rischio «basso per la sicurezza» e «irrilevante per la salute»",
     "lead": "L’art. 224 c. 2 consente di non applicare alcune misure specifiche quando la valutazione dimostra un rischio basso per la sicurezza e irrilevante per la salute.",
     "punti": [
      "Valutazione basata su tipo, quantità e frequenza di esposizione, proprietà pericolose e condizioni d’uso",
      "Misure generali dell’art. 224 c. 1 sempre applicate",
      "Se il rischio è basso e irrilevante: non si applicano gli artt. 225, 226, 229, 230",
      "Altrimenti: misure specifiche, emergenze, sorveglianza sanitaria e cartelle di rischio",
      "Agenti cancerogeni e mutageni: il Capo II si applica sempre, senza soglia di irrilevanza"
     ],
     "appro": "La conclusione di irrilevanza va motivata nel DVR con criteri espliciti, ad esempio con modelli di stima e, se necessario, misure.",
     "rif": "D.lgs. 81/2008, artt. 223 e 224",
     "nar": "La valutazione del rischio chimico considera le proprietà pericolose degli agenti, le informazioni delle schede di dati di sicurezza, il livello, il tipo e la durata dell’esposizione, le circostanze in cui si svolge il lavoro, comprese le quantità, i valori limite e gli effetti delle misure adottate. L’articolo duecentoventiquattro impone sempre misure generali di prevenzione: progettazione e organizzazione del lavoro, attrezzature idonee, riduzione al minimo del numero di lavoratori esposti, della durata e dell’intensità dell’esposizione, quantità di agenti limitate a quanto necessario, igiene e metodi di lavoro appropriati. Il comma due prevede però una possibilità importante: se la valutazione dimostra che, in relazione al tipo e alle quantità degli agenti e alle modalità e frequenze di esposizione, il rischio è basso per la sicurezza e irrilevante per la salute, e che le misure generali sono sufficienti, non si applicano le misure specifiche dell’articolo duecentoventicinque, le disposizioni sugli incidenti e le emergenze, la sorveglianza sanitaria e le cartelle sanitarie e di rischio. La conclusione va motivata con criteri espliciti, ad esempio con un modello di stima a indici e, se necessario, con misure. Per gli agenti cancerogeni e mutageni del Capo secondo questa soglia non esiste.",
     "est": true,
     "ancora": "La valutazione del rischio chimico (Capo I)"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il laboratorio di controllo qualità",
     "scena": "In un laboratorio di controllo qualità si usano piccole quantità di acetone e acidi diluiti per pochi minuti al giorno, sotto cappa.",
     "decisioni": [
      {
       "dom": "Il rischio può essere «irrilevante per la salute»?",
       "opz": [
        [
         "Sì, se la valutazione su quantità, frequenza, proprietà e condizioni d’uso lo dimostra e viene documentata",
         true,
         "Corretto: la conclusione va motivata nel documento."
        ],
        [
         "Sì, sempre, perché sono quantità piccole",
         false,
         "La conclusione deve essere motivata."
        ],
        [
         "No, mai in un laboratorio",
         false,
         "Dipende dalla valutazione."
        ]
       ]
      },
      {
       "dom": "Se il rischio è irrilevante, che cosa si applica comunque?",
       "opz": [
        [
         "Le misure generali dell’art. 224, comma 1",
         true,
         "Corretto: valgono sempre."
        ],
        [
         "Nessuna misura",
         false,
         "Le misure generali si applicano sempre."
        ],
        [
         "La sorveglianza sanitaria",
         false,
         "Non è obbligatoria in caso di rischio irrilevante."
        ]
       ]
      },
      {
       "dom": "Il laboratorio introduce un solvente classificato tossico per la riproduzione. Che cosa cambia?",
       "opz": [
        [
         "Nulla",
         false,
         "Cambia l’ambito di applicazione."
        ],
        [
         "Si applica il Capo II: sostituzione, sistema chiuso o esposizione al livello più basso possibile, registro degli esposti",
         true,
         "Corretto: dopo il D.lgs. 135/2024 i reprotossici 1A e 1B rientrano nel Capo II."
        ],
        [
         "Basta un guanto in più",
         false,
         "Non basta."
        ]
       ]
      }
     ],
     "chiusura": "Il rischio irrilevante va dimostrato e documentato, le misure generali valgono sempre, e un agente reprotossico porta la valutazione nel Capo II.",
     "nar": "Un laboratorio con piccole quantità di prodotti. Valuta il livello di rischio.",
     "rif": "Artt. 223-224 e 234 D.lgs. 81/2008",
     "est": true,
     "ancora": "Rischio «basso per la sicurezza» e «irrilevante per la salute»"
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
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: da ppm a mg/m³",
     "lead": "I valori limite si esprimono in mg/m³ o in ppm: saper convertire le unità evita errori nel confronto con le misure.",
     "punti": [
      "mg/m³ = ppm × M / 24,06 a 20 °C e 101,3 kPa (M = massa molare in g/mol)",
      "Toluene: 50 ppm × 92,14 / 24,06 ≈ 191,5 mg/m³",
      "Il valore coincide con il valore limite di 192 mg/m³ dell’Allegato XXXVIII",
      "Conversione inversa: ppm = mg/m³ × 24,06 / M",
      "Per polveri e fibre non si usano le ppm: mg/m³ o fibre/cm³"
     ],
     "appro": "Il volume molare di 24,06 litri vale a 20 °C; a 25 °C si usa 24,45 litri. Le condizioni di riferimento vanno sempre dichiarate.",
     "rif": "D.lgs. 81/2008, Allegato XXXVIII · UNI EN 689:2019",
     "nar": "I valori limite di esposizione professionale per gas e vapori sono espressi sia in milligrammi per metro cubo sia in parti per milione, cioè in volume. Per confrontare correttamente una misura con il valore limite occorre saper passare da un’unità all’altra. La relazione è semplice: la concentrazione in milligrammi per metro cubo è pari alla concentrazione in parti per milione moltiplicata per la massa molare della sostanza, espressa in grammi per mole, e divisa per il volume molare dell’aria, che a venti gradi e alla pressione di centouno virgola tre chilopascal vale ventiquattro virgola zero sei litri. Prendiamo il toluene, con massa molare di novantadue virgola quattordici. Cinquanta parti per milione corrispondono a cinquanta per novantadue virgola quattordici diviso ventiquattro virgola zero sei, cioè circa centonovantuno virgola cinque milligrammi per metro cubo: il valore coincide, arrotondato, con il valore limite di centonovantadue milligrammi per metro cubo dell’Allegato trentotto. La conversione inversa si ottiene moltiplicando i milligrammi per metro cubo per ventiquattro virgola zero sei e dividendo per la massa molare. Per polveri e fibre le parti per milione non hanno senso: si usano i milligrammi per metro cubo o le fibre per centimetro cubo. Le condizioni di riferimento vanno sempre dichiarate nel rapporto di misura.",
     "est": true,
     "ancora": "Valori limite e misurazioni dell’esposizione"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Da ppm a mg/m³ per l’acetone",
     "lead": "Verifica di un valore limite.",
     "passi": [
      [
       "Il dato",
       "Valore limite dell’acetone: 500 ppm.",
       "500 ppm"
      ],
      [
       "La massa molare",
       "Acetone: 58,08 g/mol.",
       "M = 58,08"
      ],
      [
       "Il calcolo",
       "mg/m³ = 500 × 58,08 / 24,06.",
       "≈ 1.207 mg/m³"
      ],
      [
       "Il confronto",
       "L’Allegato XXXVIII riporta 1.210 mg/m³: la differenza dipende dagli arrotondamenti.",
       "≈ 1.210 mg/m³"
      ],
      [
       "L’uso pratico",
       "Una misura di 300 mg/m³ corrisponde a circa 124 ppm, cioè circa un quarto del limite.",
       "300 mg/m³ ≈ 124 ppm"
      ]
     ],
     "nar": "Convertiamo il valore limite dell’acetone. Cinquecento ppm per una massa molare di cinquantotto virgola zero otto, diviso ventiquattro virgola zero sei, fanno circa milleduecentosette milligrammi per metro cubo, in linea con i milleduecentodieci dell’Allegato. Una misura di trecento milligrammi per metro cubo corrisponde a circa centoventiquattro ppm, circa un quarto del limite.",
     "rif": "Allegato XXXVIII D.lgs. 81/2008",
     "est": true,
     "ancora": "Valori limite e misurazioni dell’esposizione"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · L’esposizione media ponderata di un verniciatore",
     "lead": "Calcola l’esposizione a toluene di un verniciatore in una giornata tipo.",
     "dossier": [
      [
       "Fase 1",
       "2 ore di verniciatura in cabina: 150 mg/m³"
      ],
      [
       "Fase 2",
       "4 ore di preparazione dei pezzi: 60 mg/m³"
      ],
      [
       "Fase 3",
       "2 ore di imballaggio, nessuna esposizione"
      ],
      [
       "Valore limite",
       "toluene 192 mg/m³ (50 ppm) su 8 ore"
      ],
      [
       "Massa molare",
       "92,14 g/mol"
      ]
     ],
     "compiti": [
      {
       "q": "Calcola la concentrazione media ponderata sulle 8 ore.",
       "min": 6,
       "modello": "(150 × 2 + 60 × 4 + 0 × 2) / 8 = (300 + 240) / 8 = 67,5 mg/m³.",
       "criteri": [
        "Ho moltiplicato concentrazioni e durate",
        "Ho diviso per 8 ore",
        "Ho ottenuto 67,5 mg/m³"
       ]
      },
      {
       "q": "Confronta il risultato con il valore limite e interpretalo.",
       "min": 6,
       "modello": "67,5 / 192 ≈ 0,35: l’esposizione è circa il 35% del valore limite. È inferiore al limite, ma non trascurabile: la conformità va verificata con una strategia di misura secondo la UNI EN 689 e le misure vanno mantenute.",
       "criteri": [
        "Ho calcolato il rapporto con il limite",
        "Ho evitato di concludere con una sola stima",
        "Ho richiamato la UNI EN 689"
       ]
      },
      {
       "q": "Converti il valore in ppm.",
       "min": 5,
       "modello": "ppm = mg/m³ × 24,06 / M = 67,5 × 24,06 / 92,14 ≈ 17,6 ppm.",
       "criteri": [
        "Ho usato la formula inversa",
        "Ho ottenuto circa 17,6 ppm"
       ]
      }
     ],
     "nar": "Nel laboratorio calcoli l’esposizione media ponderata di un verniciatore esposto a toluene in tre fasi della giornata. Calcola il valore sulle otto ore, confrontalo con il limite e convertilo in ppm, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Allegato XXXVIII D.lgs. 81/2008 · UNI EN 689",
     "est": true,
     "ancora": "Esempio applicativo: da ppm a mg/m³"
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Simulazione · Concentrazione media ponderata su 8 ore",
     "rif": "D.lgs. 81/2008, Allegato XXXVIII · UNI EN 689:2018",
     "lead": "Modificare concentrazioni e durate di due fasi di lavoro con toluene: il calcolo restituisce la media ponderata sulle 8 ore confrontata con il VLEP di 192 mg/m³.",
     "grafico": {
      "tipo": "calcolo",
      "formula_testo": "C(8h) = (C₁·t₁ + C₂·t₂) / 8 h",
      "formula": "(a*t + b*(8-t)) / 8",
      "ingressi": [
       {
        "id": "a",
        "nome": "Concentrazione in fase di verniciatura",
        "min": 0,
        "max": 600,
        "passo": 10,
        "val": 300,
        "unita": "mg/m³"
       },
       {
        "id": "t",
        "nome": "Durata della fase di verniciatura",
        "min": 0.5,
        "max": 8,
        "passo": 0.5,
        "val": 3,
        "unita": "h"
       },
       {
        "id": "b",
        "nome": "Concentrazione nel resto del turno",
        "min": 0,
        "max": 200,
        "passo": 5,
        "val": 40,
        "unita": "mg/m³"
       }
      ],
      "risultato": "Media ponderata su 8 ore",
      "unita": "mg/m³",
      "scala": 400,
      "limite": 192,
      "limite_testo": "VLEP toluene",
      "testo_ok": "Esposizione media inferiore al VLEP a 8 ore: verificare comunque i limiti di breve termine e la variabilità.",
      "testo_sup": "Esposizione media superiore al VLEP: misure di prevenzione immediate."
     },
     "nar": "Simulazione. Si modifichino la concentrazione di toluene durante la fase di verniciatura, la durata della fase e la concentrazione nel resto del turno. Il calcolo restituisce la concentrazione media ponderata sulle otto ore, che si confronta con il valore limite di esposizione professionale del toluene, pari a centonovantadue milligrammi per metro cubo. Si osservi come una fase breve ma intensa possa determinare il superamento del limite. Si eseguano almeno tre simulazioni.",
     "est": true,
     "ancora": "Valori limite e misurazioni dell’esposizione"
    },
    {
     "t": "testo",
     "tit": "La UNI EN 689: strategia di misura",
     "rif": "UNI EN 689:2018 · art. 225 D.lgs. 81/2008",
     "lead": "La norma definisce come dimostrare la conformità ai valori limite.",
     "punti": [
      "Caratterizzazione di base e gruppi di esposizione similare (SEG)",
      "Test preliminare con 3-5 misure; test statistico con almeno 6 misure",
      "Conformità, non conformità, necessità di ulteriori misure",
      "Rivalutazione periodica in funzione del livello di esposizione",
      "Incertezza e prestazioni dei metodi: UNI EN 482"
     ],
     "nar": "La norma UNI EN seicentoottantanove guida la misura dell'esposizione: caratterizzazione di base, gruppi di esposizione similare, test preliminare con tre-cinque misure o test statistico con almeno sei, e rivalutazione periodica.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il test statistico e la rivalutazione periodica",
     "lead": "Con almeno sei misure la UNI EN 689 prevede un test statistico sul gruppo di esposizione similare e indica le cadenze di rivalutazione.",
     "punti": [
      "Almeno 6 misure sul gruppo di esposizione similare (SEG)",
      "Verifica della distribuzione lognormale delle misure",
      "Conformità se il limite di confidenza superiore UTL 95,70 è inferiore al valore limite",
      "Rivalutazione periodica in funzione del rapporto tra media geometrica e valore limite",
      "Indicazione dell’Allegato I: da 12 mesi (esposizioni vicine al limite) a 36 mesi (esposizioni molto basse)"
     ],
     "appro": "La rivalutazione è anticipata in caso di modifiche del processo, delle sostanze o delle misure di controllo.",
     "rif": "UNI EN 689:2019, §§ 5.5 e 6, Allegati F e I · D.lgs. 81/2008, art. 225",
     "nar": "Quando il test preliminare, basato su tre-cinque misure, non consente di concludere, la norma UNI EN seicentoottantanove prevede il test statistico. Si eseguono almeno sei misure rappresentative sul gruppo di esposizione similare, cioè sui lavoratori che svolgono compiti analoghi con esposizioni simili. Si verifica che le misure siano compatibili con una distribuzione lognormale e si calcola il limite superiore di tolleranza al novantacinque per cento con confidenza del settanta per cento, indicato come UTL novantacinque settanta: se è inferiore al valore limite, l’esposizione è conforme; se lo supera, l’esposizione non è conforme e occorrono misure di controllo. Il test statistico non è definito con meno di sei misure. Dopo una valutazione conforme si programma la rivalutazione periodica. L’Allegato informativo I della norma suggerisce la cadenza in funzione del rapporto tra la media geometrica delle misure e il valore limite: circa dodici mesi quando il rapporto supera la metà, diciotto mesi tra un quarto e la metà, ventiquattro mesi tra un decimo e un quarto, trentasei mesi sotto un decimo. La rivalutazione va anticipata quando cambiano il processo, le sostanze o le misure di controllo.",
     "est": true,
     "ancora": "La UNI EN 689: strategia di misura"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · La silice nel laboratorio del marmo",
     "lead": "Imposti la strategia di misura della silice cristallina respirabile in un laboratorio che taglia e lucida lastre di marmo e quarzo agglomerato.",
     "dossier": [
      [
       "Agente",
       "silice cristallina respirabile, valore limite 0,1 mg/m³ (Allegato XLIII)"
      ],
      [
       "Mansioni",
       "3 addetti al taglio, 2 alla lucidatura, 1 addetto all’ufficio tecnico"
      ],
      [
       "Misure precedenti",
       "taglio: 0,012 · 0,018 · 0,025 mg/m³"
      ],
      [
       "Presidi",
       "taglio ad acqua solo su una macchina; pulizia a secco con scopa"
      ]
     ],
     "compiti": [
      {
       "q": "Definisci i gruppi di esposizione similare e il metodo di campionamento.",
       "min": 6,
       "modello": "Due gruppi distinti: taglio e lucidatura; l’addetto dell’ufficio tecnico va valutato a parte. Campionamento personale della frazione respirabile, con selettore ciclonico, rappresentativo dell’intero turno, con analisi della silice cristallina secondo metodi riconosciuti.",
       "criteri": [
        "Ho separato taglio e lucidatura",
        "Ho indicato il campionamento personale della frazione respirabile",
        "Ho considerato la durata del turno"
       ]
      },
      {
       "q": "Interpreta le misure del taglio.",
       "min": 6,
       "modello": "Il 10% del valore limite è 0,01 mg/m³: tutte e tre le misure lo superano, quindi il test preliminare non dimostra la conformità; nessuna supera il limite. Si passa al test statistico con almeno sei misure. Trattandosi di un cancerogeno, l’esposizione va comunque ridotta al livello più basso tecnicamente possibile.",
       "criteri": [
        "Ho applicato il test preliminare",
        "Ho indicato il test statistico",
        "Ho richiamato il principio del minimo tecnicamente possibile"
       ]
      },
      {
       "q": "Quali misure proponi subito?",
       "min": 6,
       "modello": "Taglio ad acqua su tutte le macchine; aspirazione localizzata sulla lucidatura; pulizia a umido o con aspiratori di classe H, mai a secco; separazione delle aree; protezione respiratoria adeguata nelle fasi critiche; registro degli esposti e sorveglianza sanitaria.",
       "criteri": [
        "Ho previsto lavorazioni ad umido",
        "Ho vietato la pulizia a secco",
        "Ho previsto registro e sorveglianza"
       ]
      }
     ],
     "nar": "Nel laboratorio imposti la strategia di misura della silice cristallina in un laboratorio del marmo. Definisci i gruppi e il campionamento, interpreta le misure e proponi le misure immediate, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "UNI EN 689 · Allegati XLII e XLIII D.lgs. 81/2008",
     "est": true,
     "ancora": "La UNI EN 689: strategia di misura"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Ogni quanto rimisurare?",
     "lead": "La rivalutazione periodica secondo la UNI EN 689.",
     "passi": [
      [
       "Il risultato",
       "Il test statistico conclude per la conformità del gruppo di esposizione similare.",
       "Conformità"
      ],
      [
       "La media geometrica",
       "La media geometrica delle misure è 0,3 volte il valore limite.",
       "MG = 0,3 × VL"
      ],
      [
       "L’intervallo",
       "Con MG tra 0,25 e 0,5 VL la norma suggerisce una nuova misura entro 18 mesi.",
       "18 mesi"
      ],
      [
       "I confronti",
       "Sotto 0,1 VL: 36 mesi; tra 0,1 e 0,25: 24 mesi; da 0,5 VL in su: 12 mesi.",
       "36 · 24 · 18 · 12 mesi"
      ],
      [
       "Le eccezioni",
       "Ogni modifica di processo, prodotto o misure richiede una nuova valutazione, indipendentemente dalla scadenza.",
       "Modifiche → nuova valutazione"
      ]
     ],
     "nar": "Vediamo la rivalutazione periodica. Il gruppo è conforme e la media geometrica delle misure vale zero virgola tre volte il valore limite. In questa fascia la norma suggerisce di rimisurare entro diciotto mesi; sotto un decimo del limite si arriva a trentasei mesi, mentre da metà del limite in su si scende a dodici. Qualsiasi modifica del processo richiede comunque una nuova valutazione.",
     "rif": "UNI EN 689:2019, Allegato I",
     "est": true,
     "ancora": "Il test statistico e la rivalutazione periodica"
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Grafico interattivo · Test preliminare della UNI EN 689",
     "rif": "UNI EN 689:2018, punto 5.5.2 e Allegato F",
     "lead": "Spostare il cursore sull’indice di esposizione I = C / VLEP del campione più elevato, nel caso di tre misure.",
     "grafico": {
      "tipo": "soglie",
      "variabile": "Indice di esposizione massimo (3 misure)",
      "unita": "",
      "min": 0,
      "max": 1.5,
      "passo": 0.01,
      "iniziale": 0.05,
      "zone": [
       {
        "nome": "Conformità",
        "fino": 0.1,
        "colore": "#00B050",
        "testo": "Con tre misure tutte inferiori a 0,1 VLEP, il test preliminare indica conformità. Con quattro o cinque misure le soglie sono 0,15 e 0,2."
       },
       {
        "nome": "Nessuna decisione",
        "fino": 1,
        "colore": "#C9A100",
        "testo": "Nessuna misura supera il VLEP ma almeno una è superiore alla soglia: occorrono almeno sei misure e il test statistico."
       },
       {
        "nome": "Non conformità",
        "fino": 1.5,
        "colore": "#C81F26",
        "testo": "Almeno una misura supera il VLEP: situazione non conforme, misure di prevenzione immediate e nuova valutazione."
       }
      ]
     },
     "nar": "Grafico interattivo. Si sposti il cursore sull’indice di esposizione, cioè sul rapporto tra la concentrazione misurata e il valore limite di esposizione professionale, per il campione più elevato. Nel test preliminare con tre misure, se tutte sono inferiori a un decimo del valore limite si conclude per la conformità; se una supera il valore limite, la situazione è non conforme; negli altri casi occorrono almeno sei misure e il test statistico. Si esplorino le tre zone.",
     "est": true,
     "ancora": "La UNI EN 689: strategia di misura"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Quale allegato del D.lgs. 81/2008?",
     "lead": "Seleziona un riferimento, poi l’allegato.",
     "colonne": [
      "XXXVIII · valori limite professionali",
      "XXXIX · valori limite biologici",
      "XLII · lavorazioni cancerogene",
      "XLIII · valori limite di cancerogeni e mutageni"
     ],
     "schede": [
      [
       "Valore limite del toluene",
       0,
       "Allegato XXXVIII.",
       "Corretto."
      ],
      [
       "Piombo nel sangue",
       1,
       "Allegato XXXIX.",
       "Corretto."
      ],
      [
       "Lavori che espongono a polvere di silice cristallina respirabile",
       2,
       "Allegato XLII.",
       "Corretto."
      ],
      [
       "Valore limite del benzene",
       3,
       "Allegato XLIII.",
       "Corretto."
      ],
      [
       "Lavori che espongono a polveri di legno duro",
       2,
       "Allegato XLII.",
       "Corretto."
      ],
      [
       "Valore limite dell’acetone",
       0,
       "Allegato XXXVIII.",
       "Corretto."
      ]
     ],
     "nar": "Sei riferimenti normativi. Individua l’allegato del Titolo IX che li contiene.",
     "rif": "D.lgs. 81/2008, Titolo IX",
     "est": true,
     "ancora": "La UNI EN 689: strategia di misura"
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
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Il test preliminare dei verniciatori",
     "lead": "Valuti le misure di un gruppo di esposizione similare di tre verniciatori.",
     "dossier": [
      [
       "Agente",
       "toluene, valore limite 192 mg/m³"
      ],
      [
       "Misure personali su 8 ore",
       "12 mg/m³ · 15 mg/m³ · 21 mg/m³"
      ],
      [
       "Gruppo",
       "3 verniciatori con stessi compiti, cabina e prodotti"
      ]
     ],
     "compiti": [
      {
       "q": "Applica il test preliminare con tre misure.",
       "min": 6,
       "modello": "Il 10% del valore limite è 19,2 mg/m³. Una misura, 21 mg/m³, supera questa soglia: il test preliminare non dimostra la conformità. Nessuna misura supera il valore limite, quindi non c’è non conformità.",
       "criteri": [
        "Ho calcolato il 10% del limite",
        "Ho confrontato le tre misure",
        "Ho distinto mancata conformità e non conformità"
       ]
      },
      {
       "q": "Che cosa fai ora?",
       "min": 6,
       "modello": "Si passa al test statistico raccogliendo almeno sei misure sul gruppo, si verifica la distribuzione lognormale e si confronta il limite di confidenza superiore con il valore limite. Nel frattempo si mantengono le misure di prevenzione.",
       "criteri": [
        "Ho indicato almeno sei misure",
        "Ho richiamato la verifica statistica",
        "Ho previsto il mantenimento delle misure"
       ]
      },
      {
       "q": "Il gruppo è davvero omogeneo? Che cosa controlli?",
       "min": 5,
       "modello": "Che i tre lavoratori svolgano compiti, durate e processi analoghi e che una misura non sia anomala per una condizione particolare; se un lavoratore ha un profilo diverso, il gruppo va ridefinito.",
       "criteri": [
        "Ho verificato compiti e durate",
        "Ho considerato le misure anomale",
        "Ho previsto la ridefinizione del gruppo"
       ]
      }
     ],
     "nar": "Nel laboratorio applichi il test preliminare della UNI EN 689 a tre misure di toluene. Verifica il risultato, decidi i passi successivi e controlla l’omogeneità del gruppo, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "UNI EN 689:2019",
     "est": true,
     "ancora": "Esempio applicativo: il test preliminare della UNI EN 689"
    },
    {
     "t": "testo",
     "tit": "Cancerogeni, mutageni e reprotossici: il Capo II dopo il D.lgs. 135/2024",
     "foto": false,
     "lead": "Il D.lgs. 135/2024, che recepisce la direttiva (UE) 2022/431, ha esteso il Capo II del Titolo IX alle sostanze tossiche per la riproduzione e ai medicinali pericolosi.",
     "punti": [
      "Campo di applicazione: agenti cancerogeni e mutageni di categoria 1A e 1B, sostanze tossiche per la riproduzione di categoria 1A e 1B, lavorazioni dell’Allegato XLII",
      "Obbligo prioritario di sostituzione; se tecnicamente impossibile, sistema chiuso; altrimenti riduzione dell’esposizione al livello più basso tecnicamente possibile",
      "Valori limite dell’Allegato XLIII, aggiornati con le nuove sostanze e i nuovi limiti europei",
      "Registro di esposizione e cartelle sanitarie, sorveglianza sanitaria specifica",
      "Formazione specifica per i lavoratori addetti alla manipolazione dei medicinali pericolosi"
     ],
     "appro": "Per le sostanze reprotossiche prive di soglia si applica il principio della riduzione al minimo; per quelle con soglia la riduzione deve essere tale da non superare i valori limite. Le donne in gravidanza e in allattamento sono tutelate anche dal D.lgs. 151/2001.",
     "rif": "Titolo IX, Capo II e Allegati XLII, XLIII D.lgs. 81/2008 · D.lgs. 135/2024 · D.lgs. 151/2001",
     "nar": "Il decreto 135 del 2024 ha esteso il Capo due ai reprotossici e ai medicinali pericolosi. Si applica a cancerogeni, mutageni e reprotossici di categoria uno A e uno B e alle lavorazioni dell’Allegato quarantadue. L’obbligo prioritario è la sostituzione; poi il sistema chiuso; poi la riduzione al livello più basso possibile. Ci sono valori limite specifici, registro degli esposti e sorveglianza sanitaria.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Capo I o Capo II?",
     "lead": "Seleziona un agente, poi il capo del Titolo IX che si applica.",
     "colonne": [
      "Capo I · agenti chimici",
      "Capo II · cancerogeni, mutageni, reprotossici"
     ],
     "schede": [
      [
       "Toluene usato come diluente",
       0,
       "Non è classificato cancerogeno né reprotossico di categoria 1.",
       "Corretto."
      ],
      [
       "Benzene",
       1,
       "Cancerogeno di categoria 1A.",
       "Corretto."
      ],
      [
       "Formaldeide",
       1,
       "Cancerogena di categoria 1B.",
       "Corretto."
      ],
      [
       "Polvere di silice cristallina respirabile da lavorazioni",
       1,
       "Lavorazione dell’Allegato XLII.",
       "Corretto."
      ],
      [
       "Acetone",
       0,
       "Agente chimico del Capo I.",
       "Corretto."
      ],
      [
       "Composti del piombo tossici per la riproduzione",
       1,
       "Dopo il D.lgs. 135/2024 i reprotossici 1A e 1B rientrano nel Capo II.",
       "Corretto."
      ],
      [
       "Idrossido di sodio",
       0,
       "Corrosivo: Capo I.",
       "Corretto."
      ],
      [
       "Polveri di legno duro",
       1,
       "Lavorazione dell’Allegato XLII.",
       "Corretto."
      ]
     ],
     "nar": "Otto agenti. Indica se la valutazione rientra nel Capo I o nel Capo II del Titolo IX.",
     "rif": "D.lgs. 81/2008, Titolo IX, Capi I e II",
     "est": true,
     "ancora": "Cancerogeni, mutageni e reprotossici: il Capo II dopo il D.lgs. 135/2024"
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
     "foto": false,
     "t": "testo",
     "tit": "Piombo e diisocianati: la Direttiva (UE) 2024/869",
     "lead": "La Direttiva (UE) 2024/869 abbassa i valori limite del piombo e introduce per la prima volta valori limite per i diisocianati.",
     "punti": [
      "Piombo inorganico: valore limite di 0,03 mg/m³ come media su 8 ore",
      "Valore limite biologico del piombo nel sangue: 15 µg/100 ml",
      "Diisocianati: 6 µg NCO/m³ su 8 ore e 12 µg NCO/m³ per esposizioni di breve durata",
      "Valori transitori meno restrittivi fino al 31 dicembre 2028",
      "Recepimento entro il 9 aprile 2026 negli Allegati XXXVIII, XXXIX e XLIII del D.lgs. 81/2008"
     ],
     "appro": "Per le lavoratrici in età fertile la direttiva raccomanda attenzione specifica all’esposizione al piombo, tossico per la riproduzione.",
     "rif": "Dir. (UE) 2024/869 · D.lgs. 81/2008, Titolo IX, Allegati XXXVIII, XXXIX e XLIII",
     "nar": "La direttiva europea duemilaventiquattro barra ottocentosessantanove ha modificato le direttive sugli agenti chimici e sugli agenti cancerogeni, mutageni e reprotossici con due interventi di grande rilievo pratico. Per il piombo inorganico e i suoi composti il valore limite di esposizione professionale scende a zero virgola zero tre milligrammi per metro cubo, come media ponderata su otto ore, e il valore limite biologico, misurato nel sangue, scende a quindici microgrammi per cento millilitri; fino al trentuno dicembre duemilaventotto valgono valori transitori meno restrittivi. Per i diisocianati, sensibilizzanti respiratori, vengono introdotti per la prima volta valori limite: sei microgrammi di gruppi isocianato per metro cubo su otto ore e dodici microgrammi per le esposizioni di breve durata, anche in questo caso con valori transitori più elevati fino alla fine del duemilaventotto. Il termine di recepimento era fissato al nove aprile duemilaventisei; i valori confluiscono negli allegati del Titolo nono del testo unico. Per le imprese interessate, come fonderie, riciclo di batterie, verniciatura e produzione di poliuretani, ne derivano la revisione della valutazione, la pianificazione di nuove misure e, spesso, il rafforzamento delle misure tecniche.",
     "est": true,
     "ancora": "Cancerogeni, mutageni e reprotossici: obblighi specifici"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Il piombo nel sangue",
     "lead": "Confronto con il nuovo valore limite biologico.",
     "passi": [
      [
       "Il risultato",
       "Il monitoraggio biologico di un addetto alla fusione rileva 22 µg di piombo per 100 ml di sangue.",
       "22 µg/100 ml"
      ],
      [
       "Il riferimento",
       "Il nuovo valore limite biologico è di 15 µg/100 ml.",
       "22 > 15"
      ],
      [
       "La lettura",
       "Il valore è superato: l’esposizione non è adeguatamente controllata.",
       "Superamento"
      ],
      [
       "Le azioni",
       "Il medico competente informa il lavoratore e il datore di lavoro; si rivedono misure tecniche e igieniche, come l’aspirazione e il divieto di mangiare in reparto.",
       "Rivalutazione delle misure"
      ],
      [
       "La verifica",
       "Nuovo monitoraggio dopo gli interventi per verificarne l’efficacia.",
       "Controllo di efficacia"
      ]
     ],
     "nar": "Un addetto alla fusione ha ventidue microgrammi di piombo per cento millilitri di sangue. Il nuovo valore limite biologico è quindici: il valore è superato e l’esposizione non è sotto controllo. Il medico competente informa lavoratore e datore di lavoro, si rivedono aspirazione e misure igieniche, come il divieto di mangiare in reparto, e si ripete il monitoraggio per verificare l’efficacia degli interventi.",
     "rif": "Dir. (UE) 2024/869 · Allegato XXXIX D.lgs. 81/2008",
     "est": true,
     "ancora": "Piombo e diisocianati: la Direttiva (UE) 2024/869"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il registro degli esposti",
     "scena": "Un’impresa di galvanica usa un bagno con un sale di nichel classificato cancerogeno di categoria 1A. Non ha mai istituito il registro degli esposti.",
     "decisioni": [
      {
       "dom": "Che cosa fai per primo?",
       "opz": [
        [
         "Verifichi se l’agente può essere sostituito o il processo chiuso",
         true,
         "Corretto: la sostituzione è l’obbligo prioritario."
        ],
        [
         "Istituisci il registro e basta",
         false,
         "Il registro non sostituisce la riduzione dell’esposizione."
        ],
        [
         "Nulla, il bagno è sempre stato così",
         false,
         "Gli obblighi valgono anche per i processi esistenti."
        ]
       ]
      },
      {
       "dom": "Chi va iscritto nel registro?",
       "opz": [
        [
         "I lavoratori per i quali la valutazione ha evidenziato un’esposizione",
         true,
         "Corretto: art. 243."
        ],
        [
         "Tutti i dipendenti",
         false,
         "Solo gli esposti."
        ],
        [
         "Nessuno, se usano i DPI",
         false,
         "I DPI non escludono l’esposizione."
        ]
       ]
      },
      {
       "dom": "Per quanto si conservano registro e cartelle?",
       "opz": [
        [
         "Almeno 40 anni dalla cessazione dell’esposizione",
         true,
         "Corretto."
        ],
        [
         "5 anni",
         false,
         "Il periodo è molto più lungo."
        ],
        [
         "Fino al licenziamento",
         false,
         "Non è così."
        ]
       ]
      }
     ],
     "chiusura": "Sostituire o chiudere il processo, iscrivere gli esposti nel registro, conservare registro e cartelle per almeno quarant’anni: sono gli obblighi specifici per gli agenti cancerogeni.",
     "nar": "Un bagno galvanico con un agente cancerogeno. Metti in regola l’impresa.",
     "rif": "Artt. 235, 236 e 243 D.lgs. 81/2008",
     "est": true,
     "ancora": "Cancerogeni, mutageni e reprotossici: obblighi specifici"
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
     "nar": "Esercitazione. Esaminato il caso proposto, si individui la risposta corretta, valutando la motivazione di ciascuna alternativa.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Valutare il rischio chimico di una galvanica",
     "lead": "Imposta la valutazione del rischio chimico di una piccola galvanica con 8 addetti.",
     "dossier": [
      [
       "Agenti",
       "acido solforico (corrosivo); idrossido di sodio (corrosivo); solfato di nichel (cancerogeno 1A, sensibilizzante); sgrassante con solventi (infiammabile)"
      ],
      [
       "Processi",
       "sgrassaggio, decapaggio, nichelatura in vasche aperte, risciacqui"
      ],
      [
       "Presidi",
       "aspirazione a bordo vasca solo sulla nichelatura; guanti generici"
      ]
     ],
     "compiti": [
      {
       "q": "Classifica gli agenti e indica quale capo del Titolo IX si applica a ciascuno.",
       "min": 7,
       "modello": "Acido solforico e idrossido di sodio: agenti chimici pericolosi, Capo I, con rischio di corrosione per contatto e aerosol. Sgrassante: Capo I, con pericolo di incendio e di effetti sul sistema nervoso. Solfato di nichel: cancerogeno 1A, Capo II, con obblighi di sostituzione, sistema chiuso o esposizione minima, e registro degli esposti.",
       "criteri": [
        "Ho distinto Capo I e Capo II",
        "Ho considerato sicurezza e salute",
        "Ho indicato il registro per il nichel"
       ],
       "minc": 120
      },
      {
       "q": "Proponi le misure secondo la gerarchia.",
       "min": 8,
       "modello": "Valutare la sostituzione del processo al nichel o la riduzione dei componenti pericolosi; coperture delle vasche e aspirazione a bordo vasca su tutte le vasche che emettono aerosol; automazione delle movimentazioni; separazione dei reparti; procedure di dosaggio con sistemi chiusi; guanti specifici secondo le schede, visiere e grembiuli; docce e lavaocchi; divieto di mangiare e fumare.",
       "criteri": [
        "Ho seguito l’ordine della gerarchia",
        "Ho previsto aspirazione e coperture",
        "Ho previsto DPI specifici e presidi di emergenza"
       ],
       "minc": 150
      },
      {
       "q": "Quali obblighi di sorveglianza e registrazione individui?",
       "min": 5,
       "modello": "Sorveglianza sanitaria per gli esposti non irrilevanti; registro degli esposti al nichel e cartelle conservate almeno 40 anni; misure ambientali e personali secondo la UNI EN 689; informazione e formazione specifiche.",
       "criteri": [
        "Ho indicato la sorveglianza sanitaria",
        "Ho indicato registro e conservazione",
        "Ho previsto misure e formazione"
       ]
      }
     ],
     "nar": "Nel laboratorio imposti la valutazione del rischio chimico di una piccola galvanica. Classifica gli agenti, proponi le misure secondo la gerarchia e individua gli obblighi di sorveglianza e registrazione, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "D.lgs. 81/2008, Titolo IX",
     "est": true,
     "ancora": "Esercitazione · Silice cristallina in un laboratorio di marmo"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Ripasso · Valutazione ed esposizione",
     "voci": [
      [
       "Con tre misure tutte inferiori al 10% del valore limite il test preliminare dimostra la conformità.",
       true,
       "Vero: UNI EN 689."
      ],
      [
       "La media ponderata si calcola dividendo per le ore effettive di esposizione.",
       false,
       "Falso: si riferisce alle 8 ore."
      ],
      [
       "I reprotossici di categoria 1A e 1B rientrano nel Capo II.",
       true,
       "Vero: dopo il D.lgs. 135/2024."
      ],
      [
       "Il rischio irrilevante per la salute esclude anche le misure generali.",
       false,
       "Falso: le misure generali si applicano sempre."
      ]
     ],
     "nar": "Ripasso: quattro affermazioni su valutazione ed esposizione.",
     "rif": "D.lgs. 81/2008, Titolo IX · UNI EN 689",
     "est": true,
     "ancora": "Esercitazione · Silice cristallina in un laboratorio di marmo"
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 3,
     "domande": [
      [
       "La valutazione del rischio chimico è prevista dall’articolo:",
       [
        "223",
        "28 soltanto",
        "181",
        "271"
       ],
       0,
       "Art. 223."
      ],
      [
       "La strategia di misura dell’esposizione per inalazione è descritta dalla norma:",
       [
        "UNI EN 689",
        "UNI EN 1838",
        "UNI EN 361",
        "UNI EN 3-7"
       ],
       0,
       "UNI EN 689."
      ],
      [
       "Per i cancerogeni l’obbligo prioritario è:",
       [
        "La sostituzione",
        "I DPI",
        "La segnaletica",
        "La sorveglianza sanitaria"
       ],
       0,
       "Capo II."
      ],
      [
       "Il D.lgs. 135/2024 ha esteso il Capo II a:",
       [
        "Sostanze tossiche per la riproduzione",
        "Agenti fisici",
        "Videoterminali",
        "Rumore"
       ],
       0,
       "D.lgs. 135/2024."
      ]
     ],
     "nar": "Verifica intermedia sul secondo modulo.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M3",
   "titolo": "Misure di prevenzione e protezione",
   "min": 120,
   "foto": "sicurezza2",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 3",
     "sott": "Misure di prevenzione e protezione",
     "nar": "Terzo modulo: le misure di prevenzione e protezione.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "La gerarchia delle misure (art. 225)",
     "foto": false,
     "lead": "Le misure si scelgono in ordine di priorità: si agisce prima sulla fonte, poi sull’ambiente, infine sulla persona.",
     "punti": [
      "Sostituzione dell’agente pericoloso con uno non pericoloso o meno pericoloso",
      "Progettazione dei processi e controlli tecnici: sistemi chiusi, automazione, aspirazione localizzata alla fonte",
      "Misure di protezione collettiva: ventilazione generale, separazione delle lavorazioni",
      "Misure organizzative: riduzione del numero di esposti e della durata, procedure, igiene, pulizia",
      "Dispositivi di protezione individuale quando l’esposizione non può essere prevenuta con altri mezzi"
     ],
     "appro": "La sostituzione va valutata considerando anche i rischi dei sostituti: un solvente meno tossico ma più infiammabile può spostare il problema. Le misure tecniche vanno verificate nel tempo con controlli di efficienza e manutenzione programmata.",
     "rif": "Art. 225 D.lgs. 81/2008",
     "nar": "Le misure seguono una gerarchia: prima la sostituzione, poi sistemi chiusi e aspirazione alla fonte, poi ventilazione e separazione, quindi misure organizzative come riduzione degli esposti e della durata, e solo infine i dispositivi di protezione individuale. La sostituzione va valutata anche per i rischi dei sostituti.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Quale livello della gerarchia?",
     "lead": "Seleziona una misura, poi il livello della gerarchia.",
     "colonne": [
      "Sostituzione",
      "Misura tecnica",
      "Protezione collettiva",
      "Misura organizzativa",
      "DPI"
     ],
     "schede": [
      [
       "Vernice a base acquosa al posto di quella a solvente",
       0,
       "Elimina o riduce il pericolo alla fonte.",
       "Corretto."
      ],
      [
       "Travaso in circuito chiuso con pompa",
       1,
       "È un controllo tecnico.",
       "Corretto."
      ],
      [
       "Ventilazione generale del reparto",
       2,
       "Protegge tutti i presenti.",
       "Corretto."
      ],
      [
       "Riduzione del numero di addetti presenti durante la miscelazione",
       3,
       "È organizzativa.",
       "Corretto."
      ],
      [
       "Semimaschera con filtro A2",
       4,
       "È l’ultima barriera.",
       "Corretto."
      ],
      [
       "Aspirazione localizzata sulla pesatura",
       1,
       "Capta l’inquinante alla fonte.",
       "Corretto."
      ],
      [
       "Turnazione per ridurre la durata dell’esposizione",
       3,
       "È organizzativa.",
       "Corretto."
      ],
      [
       "Detergente non classificato al posto di uno corrosivo",
       0,
       "È una sostituzione.",
       "Corretto."
      ]
     ],
     "nar": "Otto misure contro il rischio chimico. Collocale nella gerarchia, dalla sostituzione ai dispositivi di protezione individuale.",
     "rif": "Art. 225 D.lgs. 81/2008",
     "est": true,
     "ancora": "La gerarchia delle misure (art. 225)"
    },
    {
     "t": "testo",
     "tit": "L’aspirazione localizzata",
     "foto": false,
     "lead": "L’aspirazione localizzata cattura l’inquinante vicino alla sorgente, prima che raggiunga la zona respiratoria.",
     "punti": [
      "Cappa il più vicino possibile alla sorgente e orientata nel verso di emissione",
      "Velocità di cattura adeguata al tipo di emissione; cappe chiuse o semichiuse più efficaci delle aperte",
      "Condotti, filtri e ventilatore dimensionati; aria di reintegro per non ridurre le prestazioni",
      "Verifiche periodiche: velocità all’imbocco, depressione, stato dei filtri, registrazione",
      "Formazione degli operatori al corretto posizionamento dei bracci aspiranti"
     ],
     "appro": "Un braccio aspirante posizionato a 50 cm dalla sorgente anziché a 20 cm può perdere gran parte della capacità di cattura: la distanza è il fattore più critico. Le misure di esposizione dopo l’installazione dimostrano l’efficacia dell’impianto.",
     "rif": "Art. 225 e Allegato IV D.lgs. 81/2008",
     "nar": "L’aspirazione localizzata cattura l’inquinante vicino alla sorgente. La cappa va il più vicino possibile e orientata nel verso di emissione; condotti, filtri e ventilatore vanno dimensionati e verificati periodicamente. La distanza è il fattore più critico: un braccio lasciato troppo lontano perde gran parte dell’efficacia.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "La cappa che non aspira",
     "scena": "Gli addetti alla miscelazione lamentano odore di solvente nonostante la cappa. La cappa è a 80 cm dal punto di miscelazione e il filtro non viene cambiato da due anni.",
     "decisioni": [
      {
       "dom": "Qual è il problema principale?",
       "opz": [
        [
         "La distanza della cappa dalla sorgente e il filtro intasato riducono la velocità di cattura",
         true,
         "Corretto: l’efficacia cala rapidamente con la distanza e con le perdite di carico."
        ],
        [
         "Gli addetti sono troppo sensibili",
         false,
         "L’odore segnala una captazione insufficiente."
        ],
        [
         "Serve solo profumare l’ambiente",
         false,
         "Non elimina l’esposizione."
        ]
       ]
      },
      {
       "dom": "Che cosa fai?",
       "opz": [
        [
         "Avvicini la cappa alla sorgente, la chiudi parzialmente e sostituisci il filtro",
         true,
         "Corretto: cappe vicine e semichiuse sono più efficaci."
        ],
        [
         "Aumenti solo la ventilazione generale",
         false,
         "Diluisce ma non capta alla fonte."
        ],
        [
         "Dai mascherine e lasci tutto com’è",
         false,
         "I DPI vengono dopo le misure tecniche."
        ]
       ]
      },
      {
       "dom": "Come verifichi che funzioni?",
       "opz": [
        [
         "Misurando la velocità di cattura e programmando verifiche periodiche e manutenzione",
         true,
         "Corretto: le prestazioni vanno verificate nel tempo."
        ],
        [
         "Chiedendo se c’è ancora odore",
         false,
         "Non è una verifica affidabile."
        ],
        [
         "Non serve verificarla",
         false,
         "Le prestazioni vanno controllate."
        ]
       ]
      }
     ],
     "chiusura": "Cappa vicina alla sorgente, preferibilmente chiusa o semichiusa, filtri mantenuti e prestazioni misurate: così l’aspirazione localizzata protegge davvero.",
     "nar": "Un’aspirazione che non funziona bene. Trova la causa e intervieni.",
     "rif": "Art. 225 D.lgs. 81/2008",
     "est": true,
     "ancora": "L’aspirazione localizzata"
    },
    {
     "t": "testo",
     "tit": "DPI per il rischio chimico",
     "foto": false,
     "lead": "I DPI per il rischio chimico si scelgono in base agli agenti, alle concentrazioni e alle condizioni d’uso indicate nella sezione 8 della SDS.",
     "punti": [
      "Protezione respiratoria (UNI EN 529): facciali filtranti, semimaschere e maschere con filtri per gas e vapori (A, B, E, K) o per particelle (P1, P2, P3), apparecchi isolanti",
      "Guanti di protezione chimica (UNI EN ISO 374): materiale e tempo di permeazione indicati per la sostanza",
      "Occhiali a mascherina e visiere per schizzi; indumenti di protezione chimica di tipo adeguato",
      "Prova di tenuta del facciale, sostituzione dei filtri secondo istruzioni, addestramento per i DPI di III categoria",
      "Igiene: rimozione e smaltimento dei DPI contaminati, divieto di mangiare e fumare nelle aree di lavoro"
     ],
     "appro": "Un guanto «generico» in nitrile non protegge da tutti i solventi: alcuni lo attraversano in pochi minuti. La SDS indica materiale, spessore e tempo di permeazione; in caso di miscele si consultano i dati del fabbricante del guanto.",
     "rif": "Artt. 74-79, 225 D.lgs. 81/2008 · UNI EN 529 · UNI EN ISO 374 · Reg. (CE) 1907/2006, Allegato II, sezione 8",
     "nar": "I dispositivi si scelgono in base alla sezione otto della scheda di sicurezza: respiratori con filtri adatti, come A per i vapori organici o P3 per le particelle, guanti di materiale e tempo di permeazione indicati, occhiali e indumenti adeguati. Serve la prova di tenuta e l’addestramento. Un guanto in nitrile generico non protegge da tutti i solventi.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Filtri per le vie respiratorie: tipi e colori",
     "lead": "I filtri antigas e antipolvere si scelgono in base al contaminante, identificato da una lettera e da un colore normalizzati.",
     "punti": [
      "Tipo A (marrone): gas e vapori organici con punto di ebollizione superiore a 65 °C",
      "Tipo B (grigio): gas e vapori inorganici; tipo E (giallo): gas acidi come l’anidride solforosa",
      "Tipo K (verde): ammoniaca e derivati; tipo AX (marrone): organici bassobollenti",
      "Tipo P (bianco): particelle, nelle classi P1, P2 e P3",
      "Classi 1, 2, 3 di capacità per i filtri antigas; filtri combinati per esposizioni miste"
     ],
     "appro": "Il facciale filtrante non protegge in carenza di ossigeno: in ambienti confinati o con ossigeno insufficiente servono apparecchi isolanti.",
     "rif": "UNI EN 14387 · UNI EN 143 · UNI EN 149 · D.lgs. 81/2008, artt. 76-78",
     "nar": "La protezione delle vie respiratorie dai contaminanti chimici richiede la scelta del filtro corretto. Le norme tecniche identificano ogni tipo con una lettera e un colore. Il tipo A, marrone, è destinato a gas e vapori organici con punto di ebollizione superiore a sessantacinque gradi, come molti solventi. Il tipo B, grigio, protegge da gas e vapori inorganici come cloro e acido solfidrico. Il tipo E, giallo, è destinato ai gas acidi come l’anidride solforosa. Il tipo K, verde, protegge da ammoniaca e derivati organici dell’ammoniaca. Il tipo AX, anch’esso marrone, è destinato ai composti organici bassobollenti. Il tipo P, bianco, protegge dalle particelle, nelle classi P uno, P due e P tre di efficienza crescente. I filtri antigas sono inoltre classificati per capacità in classi uno, due e tre. Per esposizioni miste a vapori e polveri si usano filtri combinati, come A due P tre. Il filtro va sostituito secondo le indicazioni del fabbricante e del programma aziendale, non solo quando si avverte l’odore. Va ricordato che i dispositivi a filtro non proteggono in carenza di ossigeno: negli ambienti confinati servono apparecchi isolanti.",
     "est": true,
     "ancora": "DPI per il rischio chimico"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Leggere la marcatura di un guanto chimico",
     "lead": "La UNI EN ISO 374-1 e il tempo di permeazione.",
     "passi": [
      [
       "La marcatura",
       "Il guanto riporta il tipo e le lettere dei prodotti di prova.",
       "Tipo A, B o C"
      ],
      [
       "Il livello",
       "Il livello di prestazione dipende dal tempo di permeazione: livello 2 oltre 30 minuti, livello 6 oltre 480 minuti.",
       "2 → >30 min · 6 → >480 min"
      ],
      [
       "I tipi",
       "Tipo A: almeno 6 prodotti con livello 2; tipo B: almeno 3; tipo C: almeno 1 prodotto con livello 1, oltre 10 minuti.",
       "A · B · C"
      ],
      [
       "La scelta",
       "Si confronta il prodotto usato con quelli di prova e con le indicazioni della sezione 8 della scheda.",
       "Guanto adatto al prodotto"
      ],
      [
       "L’uso",
       "Il guanto si sostituisce prima del tempo di permeazione e subito se danneggiato o contaminato all’interno.",
       "Sostituzione programmata"
      ]
     ],
     "nar": "Leggiamo la marcatura di un guanto chimico. Il tipo, A, B o C, indica quanti prodotti di prova supera e a quale livello. Il livello dipende dal tempo di permeazione: il livello due supera i trenta minuti, il livello sei i quattrocentottanta. Il guanto si sceglie confrontando il prodotto usato con la sezione otto della scheda, e si sostituisce prima del tempo di permeazione.",
     "rif": "UNI EN ISO 374-1",
     "est": true,
     "ancora": "DPI per il rischio chimico"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Scegliere il filtro per la verniciatura a spruzzo",
     "lead": "Dal contaminante al filtro.",
     "passi": [
      [
       "I contaminanti",
       "Vapori di toluene e xilene, punto di ebollizione superiore a 65 °C, e nebbie di vernice.",
       "Vapori organici + particelle"
      ],
      [
       "Il tipo per i vapori",
       "Tipo A, colore marrone.",
       "Filtro A"
      ],
      [
       "Il filtro per le particelle",
       "Le nebbie di vernice richiedono un filtro antiparticolato, ad esempio P2.",
       "Filtro P2"
      ],
      [
       "Il filtro combinato",
       "Si usa un filtro combinato A2P2 su semimaschera o maschera intera.",
       "A2P2"
      ],
      [
       "L’uso",
       "Prova di tenuta, sostituzione dei filtri secondo le istruzioni del fabbricante e conservazione in contenitore chiuso.",
       "Tenuta e sostituzione"
      ]
     ],
     "nar": "Scegliamo il filtro per la verniciatura a spruzzo. Ci sono vapori di toluene e xilene, che bollono sopra i sessantacinque gradi, e nebbie di vernice. Per i vapori serve il tipo A, marrone; per le nebbie un filtro antiparticolato, ad esempio P due. Si usa quindi un filtro combinato A due P due, con prova di tenuta e sostituzione secondo le istruzioni del fabbricante.",
     "rif": "UNI EN 14387 · UNI EN 529",
     "est": true,
     "ancora": "Filtri per le vie respiratorie: tipi e colori"
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
     "nar": "Si propone un esempio di documento di valutazione dei rischi per una falegnameria con sei addetti. Si parte dal ciclo produttivo: sezionatura, piallatura, assemblaggio, levigatura, verniciatura e spedizione. Si individuano quindi le mansioni e i rischi principali: tagli sulle macchine, rumore, polveri di legno duro, classificate come cancerogene, solventi, incendio ed esplosione delle polveri, movimentazione manuale dei carichi. Ciascun rischio è oggetto di valutazione specifica e le misure sono ordinate per priorità, a partire dall’aspirazione alla fonte e dai ripari delle macchine.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · La scheda di rischio del verniciatore",
     "lead": "Completa la scheda di valutazione del rischio chimico per il verniciatore della falegnameria.",
     "dossier": [
      [
       "Prodotti",
       "fondo e finitura poliuretanici bicomponenti con diisocianati; diluente a base di acetato di butile e xilene"
      ],
      [
       "Modalità",
       "spruzzo in cabina con velo d’acqua, 3 ore al giorno"
      ],
      [
       "Altre esposizioni",
       "polveri di legno duro dalla levigatura, 2 ore al giorno"
      ],
      [
       "Presidi",
       "cabina; semimaschera con filtro A2P2; guanti in lattice"
      ]
     ],
     "compiti": [
      {
       "q": "Individua gli agenti, i pericoli e il capo del Titolo IX applicabile.",
       "min": 7,
       "modello": "Diisocianati: sensibilizzanti respiratori e cutanei, Capo I con restrizione REACH e formazione obbligatoria. Solventi: infiammabili ed effetti sul sistema nervoso, Capo I. Polveri di legno duro: lavorazione dell’Allegato XLII, Capo II, con valore limite dell’Allegato XLIII.",
       "criteri": [
        "Ho individuato i diisocianati come sensibilizzanti",
        "Ho individuato le polveri di legno duro nel Capo II",
        "Ho considerato l’infiammabilità"
       ],
       "minc": 120
      },
      {
       "q": "Valuta l’adeguatezza dei presidi e proponi miglioramenti.",
       "min": 8,
       "modello": "La cabina va verificata nella velocità dell’aria; il filtro A2P2 è adatto ai vapori organici e alle nebbie, ma con i diisocianati occorre valutare un apparecchio a ventilazione assistita o isolante; i guanti in lattice non sono adatti: servono guanti resistenti ai prodotti secondo la scheda, ad esempio in nitrile o butile; per la levigatura aspirazione localizzata sulle macchine.",
       "criteri": [
        "Ho criticato i guanti in lattice",
        "Ho valutato la protezione respiratoria con i diisocianati",
        "Ho previsto aspirazione sulla levigatura"
       ],
       "minc": 150
      },
      {
       "q": "Quali obblighi di sorveglianza e formazione aggiungi?",
       "min": 5,
       "modello": "Sorveglianza sanitaria per sensibilizzanti e polveri di legno; iscrizione nel registro degli esposti per le polveri di legno duro; formazione specifica sui diisocianati con rinnovo almeno quinquennale; formazione sull’uso dei DPI con addestramento.",
       "criteri": [
        "Ho previsto sorveglianza e registro",
        "Ho previsto la formazione sui diisocianati",
        "Ho previsto l’addestramento ai DPI"
       ]
      }
     ],
     "nar": "Il laboratorio ti chiede di completare la scheda di rischio chimico del verniciatore di una falegnameria. Individua agenti e pericoli, valuta i presidi e proponi miglioramenti, poi indica sorveglianza e formazione. Confronta ogni risposta con la soluzione di riferimento.",
     "rif": "D.lgs. 81/2008, Titolo IX · Reg. (CE) 1907/2006, Allegato XVII, voce 74",
     "est": true,
     "ancora": "Esempio applicativo: il DVR di una falegnameria con 6 addetti"
    },
    {
     "t": "testo",
     "tit": "Emergenze, sorveglianza sanitaria e informazione",
     "foto": false,
     "lead": "Il Titolo IX richiede di prepararsi agli incidenti, di sorvegliare la salute e di informare e formare i lavoratori.",
     "punti": [
      "Procedure per incidenti ed emergenze (art. 226): sversamenti, rilasci, incendi; kit di assorbimento, docce e lavaocchi",
      "Sorveglianza sanitaria (art. 229) per gli esposti ad agenti chimici pericolosi per la salute, salvo rischio irrilevante",
      "Monitoraggio biologico quando esiste un valore limite biologico (Allegato XXXIX)",
      "Informazione e formazione (art. 227): agenti presenti, rischi, valori limite, misure, uso dei DPI, procedure di emergenza",
      "Accesso alle schede di dati di sicurezza e loro aggiornamento"
     ],
     "appro": "Le cartelle sanitarie e di rischio degli esposti a cancerogeni, mutageni e reprotossici sono conservate per il periodo previsto dalla norma, che per i cancerogeni arriva a quarant’anni dalla cessazione dell’esposizione. I casi di neoplasia di sospetta origine professionale sono segnalati secondo l’art. 244.",
     "rif": "Artt. 226, 227, 229, 243, 244 D.lgs. 81/2008",
     "nar": "Il Titolo nove richiede procedure per incidenti ed emergenze, con kit di assorbimento, docce e lavaocchi; sorveglianza sanitaria degli esposti; monitoraggio biologico dove esiste un valore limite biologico; informazione e formazione su agenti, rischi, misure e dispositivi. Le cartelle degli esposti a cancerogeni si conservano a lungo.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Sorveglianza sanitaria ed esposizione a cancerogeni",
     "lead": "Per gli esposti a cancerogeni e mutageni il D.lgs. 81/2008 prevede la sorveglianza sanitaria e un registro di esposizione conservato a lungo.",
     "punti": [
      "Sorveglianza sanitaria per gli esposti ad agenti chimici pericolosi non irrilevanti (art. 229)",
      "Registro degli esposti ad agenti cancerogeni e mutageni (art. 243)",
      "Cartelle sanitarie e di rischio conservate per almeno 40 anni dalla cessazione dell’esposizione",
      "Comunicazione dei dati del registro all’INAIL e alle ASL competenti",
      "Informazione dei lavoratori sui risultati anonimi collettivi e sul significato degli accertamenti"
     ],
     "appro": "Gli effetti dei cancerogeni possono manifestarsi decenni dopo l’esposizione: la conservazione documentale è essenziale per il riconoscimento delle malattie professionali.",
     "rif": "D.lgs. 81/2008, artt. 229, 230, 243 e 244",
     "nar": "Quando la valutazione non conclude per un rischio irrilevante per la salute, i lavoratori esposti ad agenti chimici pericolosi sono sottoposti alla sorveglianza sanitaria dell’articolo duecentoventinove: visita preventiva, visite periodiche, di norma annuali o con la periodicità stabilita dal medico competente, e visita alla cessazione del rapporto di lavoro, quando il medico ne ravvisa l’opportunità, con le indicazioni sulla prosecuzione dei controlli. Per gli agenti cancerogeni e mutageni le tutele sono più ampie. L’articolo duecentoquarantatré prevede che i lavoratori esposti siano iscritti in un registro, nel quale sono riportati l’attività svolta, l’agente utilizzato e, ove noto, il valore dell’esposizione. Il registro è istituito e aggiornato dal datore di lavoro, che ne cura la tenuta per il tramite del medico competente, e i dati sono comunicati all’INAIL e all’azienda sanitaria competente. Le cartelle sanitarie e di rischio sono conservate per almeno quarant’anni dalla cessazione di ogni attività che espone ad agenti cancerogeni. La ragione è semplice: gli effetti possono manifestarsi molti anni dopo, e la documentazione è indispensabile per ricostruire l’esposizione e per il riconoscimento della malattia professionale.",
     "est": true,
     "ancora": "Emergenze, sorveglianza sanitaria e informazione"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il lavaocchi chiuso nel magazzino",
     "scena": "Durante un sopralluogo trovi il lavaocchi del reparto acidi dietro una scaffalatura, con la valvola bloccata. Gli addetti dicono che nessuno l’ha mai usato.",
     "decisioni": [
      {
       "dom": "Che cosa fai subito?",
       "opz": [
        [
         "Liberi l’accesso, verifichi il funzionamento e segnali il guasto per la riparazione immediata",
         true,
         "Corretto: un presidio di emergenza deve essere sempre accessibile e funzionante."
        ],
        [
         "Nulla, tanto non si usa",
         false,
         "Serve proprio quando accade l’incidente."
        ],
        [
         "Lo togli per fare spazio",
         false,
         "È un presidio obbligatorio in caso di rischio di schizzi."
        ]
       ]
      },
      {
       "dom": "Come eviti che si ripeta?",
       "opz": [
        [
         "Controlli periodici registrati e segnaletica",
         true,
         "Corretto: la verifica periodica mantiene l’efficienza."
        ],
        [
         "Una circolare una tantum",
         false,
         "Non basta."
        ],
        [
         "Un nuovo lavaocchi in ufficio",
         false,
         "Deve essere vicino al punto di rischio."
        ]
       ]
      },
      {
       "dom": "Un addetto riceve uno schizzo di acido negli occhi. Che cosa si fa?",
       "opz": [
        [
         "Lavaggio immediato e prolungato con acqua, poi soccorso sanitario con la scheda di sicurezza",
         true,
         "Corretto: il lavaggio immediato riduce il danno."
        ],
        [
         "Si aspetta il medico",
         false,
         "Ogni secondo conta."
        ],
        [
         "Si neutralizza con una base",
         false,
         "È pericoloso."
        ]
       ]
      }
     ],
     "chiusura": "Presidi di emergenza accessibili e verificati, lavaggio immediato e soccorso con la scheda di sicurezza: le procedure dell’art. 226 funzionano solo se preparate prima.",
     "nar": "Un lavaocchi inutilizzabile nel reparto acidi. Intervieni.",
     "rif": "Art. 226 D.lgs. 81/2008",
     "est": true,
     "ancora": "Sorveglianza sanitaria ed esposizione a cancerogeni"
    },
    {
     "foto": false,
     "t": "abbina",
     "tit": "Esercitazione · Filtri e contaminanti",
     "sott": "Associare a ciascun tipo di filtro il contaminante corretto",
     "coppie": [
      [
       "A (marrone)",
       "Vapori organici con ebollizione oltre 65 °C"
      ],
      [
       "B (grigio)",
       "Gas e vapori inorganici"
      ],
      [
       "E (giallo)",
       "Gas acidi, come l’anidride solforosa"
      ],
      [
       "K (verde)",
       "Ammoniaca e derivati"
      ],
      [
       "P (bianco)",
       "Particelle"
      ]
     ],
     "nar": "Esercitazione. Si associ a ciascun tipo di filtro il contaminante per cui è destinato.",
     "est": true,
     "ancora": "Emergenze, sorveglianza sanitaria e informazione"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Esercitazione · Rischio chimico",
     "sott": "Qualificare ciascuna affermazione come vera o falsa",
     "voci": [
      [
       "Con almeno sei misure la UNI EN 689 prevede il test statistico con UTL 95,70.",
       true,
       "Vero."
      ],
      [
       "Per gli agenti cancerogeni si può concludere per un rischio irrilevante per la salute.",
       false,
       "Falso: la soglia di irrilevanza dell’art. 224 non si applica al Capo II."
      ],
      [
       "50 ppm di toluene corrispondono a circa 192 mg/m³.",
       true,
       "Vero, a 20 °C e 101,3 kPa."
      ],
      [
       "Le cartelle sanitarie degli esposti a cancerogeni si conservano per almeno 40 anni.",
       true,
       "Vero: art. 243."
      ],
      [
       "Dal 24 agosto 2023 i prodotti con diisocianati oltre lo 0,1% richiedono formazione specifica.",
       true,
       "Vero: voce 74 dell’Allegato XVII REACH."
      ]
     ],
     "nar": "Esercitazione. Si stabilisca se ciascuna affermazione sul rischio chimico è vera o falsa.",
     "est": true,
     "ancora": "Emergenze, sorveglianza sanitaria e informazione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le nuove edizioni delle norme CEI EN IEC 60079",
     "lead": "Le norme sugli impianti elettrici nei luoghi con pericolo di esplosione sono state aggiornate: le edizioni precedenti restano utilizzabili solo fino alla fine dei periodi di coesistenza.",
     "punti": [
      "Classificazione dei luoghi per gas: CEI EN IEC 60079-10-1, edizione 2021",
      "Progettazione e installazione degli impianti: CEI EN IEC 60079-14:2024, coesistenza con l’edizione 2014 fino al 4 ottobre 2027",
      "Verifica e manutenzione: CEI EN IEC 60079-17:2024, coesistenza fino al 5 gennaio 2027",
      "Rilevatori di gas infiammabili: CEI EN IEC 60079-29-0, coesistenza fino al 31 gennaio 2029",
      "Il documento sulla protezione contro le esplosioni si aggiorna a ogni modifica rilevante"
     ],
     "appro": "Le verifiche degli impianti elettrici nelle zone classificate sono biennali ai sensi del D.P.R. 462/2001 e si integrano con le ispezioni periodiche della 60079-17.",
     "rif": "D.lgs. 81/2008, Titolo XI e Allegato XLIX · CEI EN IEC 60079-10-1, -14, -17, -29-0 · D.P.R. 462/2001",
     "nar": "Il Titolo undicesimo del testo unico impone al datore di lavoro di classificare le aree in cui possono formarsi atmosfere esplosive e di redigere il documento sulla protezione contro le esplosioni. Per farlo si utilizzano le norme tecniche della serie sessantamilasettantanove, recentemente aggiornate. La classificazione dei luoghi con presenza di gas, vapori e nebbie si esegue con la norma sessantamilasettantanove dieci uno, nell’edizione del duemilaventuno, che stima la portata di rilascio, il grado di diluizione e la disponibilità della ventilazione per definire il tipo e l’estensione delle zone. La progettazione e l’installazione degli impianti elettrici seguono la nuova edizione duemilaventiquattro della parte quattordici, che coesiste con quella del duemilaquattordici fino al quattro ottobre duemilaventisette. La verifica e la manutenzione seguono la nuova parte diciassette, con coesistenza fino al cinque gennaio duemilaventisette. Per i rilevatori di gas infiammabili è stata pubblicata la nuova parte ventinove zero, che coesisterà con la precedente fino al trentuno gennaio duemilaventinove. Alla scadenza dei periodi di coesistenza le nuove edizioni diventano lo stato dell’arte. Il documento va aggiornato a ogni modifica rilevante, e gli impianti nelle zone classificate sono soggetti a verifica biennale secondo il decreto del Presidente della Repubblica quattrocentosessantadue del duemilauno.",
     "est": true,
     "ancora": "Emergenze, sorveglianza sanitaria e informazione"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Quale zona?",
     "lead": "Seleziona una situazione, poi la zona di pericolo per gas e vapori.",
     "colonne": [
      "Zona 0",
      "Zona 1",
      "Zona 2"
     ],
     "schede": [
      [
       "Interno di un serbatoio di solvente, sopra il liquido",
       0,
       "Atmosfera esplosiva presente continuamente o per lunghi periodi.",
       "Corretto."
      ],
      [
       "Intorno a una bocca di riempimento aperta durante i travasi",
       1,
       "Atmosfera esplosiva probabile durante il normale funzionamento.",
       "Corretto."
      ],
      [
       "Intorno a flange e valvole in buono stato",
       2,
       "Atmosfera esplosiva improbabile e, se si forma, di breve durata.",
       "Corretto."
      ],
      [
       "Interno di una cabina di verniciatura durante la spruzzatura",
       1,
       "Probabile durante il normale funzionamento.",
       "Corretto."
      ],
      [
       "Locale pompe ben ventilato, con perdite solo in caso di guasto",
       2,
       "Formazione solo in caso di anomalia, di breve durata.",
       "Corretto."
      ],
      [
       "Spazio di testa di un fusto aperto di solvente",
       0,
       "Presenza continua.",
       "Corretto."
      ]
     ],
     "nar": "Sei situazioni con gas e vapori infiammabili. Assegna la zona di pericolo secondo la classificazione dei luoghi.",
     "rif": "Allegato XLIX D.lgs. 81/2008 · CEI EN IEC 60079-10-1",
     "est": true,
     "ancora": "Le nuove edizioni delle norme CEI EN IEC 60079"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Lo sversamento in magazzino",
     "lead": "In magazzino un carrellista fora un fusto da 200 litri di solvente facilmente infiammabile: il liquido si sparge sul pavimento.",
     "dossier": [
      [
       "Prodotto",
       "H225, H336, H411"
      ],
      [
       "Luogo",
       "magazzino chiuso, vicino a una caricabatterie dei carrelli"
      ],
      [
       "Presenti",
       "due addetti; kit di assorbimento in reparto"
      ]
     ],
     "compiti": [
      {
       "q": "Quali azioni immediate?",
       "min": 6,
       "modello": "Dare l’allarme, allontanare le persone non necessarie, eliminare le fonti di innesco, come la ricarica dei carrelli, senza azionare interruttori nella zona dei vapori se non previsto dalla procedura; ventilare; contenere lo sversamento con barriere per evitare che raggiunga tombini e scarichi.",
       "criteri": [
        "Ho previsto allarme e allontanamento",
        "Ho eliminato le fonti di innesco",
        "Ho previsto il contenimento lontano dagli scarichi"
       ]
      },
      {
       "q": "Chi interviene, con quali DPI e materiali?",
       "min": 6,
       "modello": "Gli addetti formati alle emergenze, con protezione respiratoria adeguata o, se la concentrazione è elevata, apparecchi isolanti; guanti resistenti al solvente; materiale assorbente non combustibile; utensili antiscintilla; contenitori per i residui.",
       "criteri": [
        "Ho limitato l’intervento agli addetti formati",
        "Ho indicato DPI adeguati",
        "Ho indicato materiali e attrezzi antiscintilla"
       ]
      },
      {
       "q": "Che cosa si fa dopo l’emergenza?",
       "min": 5,
       "modello": "Il materiale assorbito è un rifiuto pericoloso da classificare e gestire; si analizzano le cause, ad esempio la viabilità dei carrelli e la protezione dei fusti; si aggiornano procedure e valutazione dei rischi; si informano e si formano gli addetti.",
       "criteri": [
        "Ho gestito i residui come rifiuto pericoloso",
        "Ho previsto l’analisi delle cause",
        "Ho previsto l’aggiornamento di procedure e valutazione"
       ]
      }
     ],
     "nar": "Il laboratorio simula lo sversamento di un solvente infiammabile in magazzino. Indica le azioni immediate, chi interviene con quali dispositivi e che cosa fare dopo l’emergenza, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Art. 226 D.lgs. 81/2008",
     "est": true,
     "ancora": "Emergenze, sorveglianza sanitaria e informazione"
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La sostituzione del solvente",
     "scena": "Un reparto di sgrassaggio usa un solvente classificato H350. Il fornitore propone un sostituto non classificato cancerogeno ma con punto di infiammabilità più basso.",
     "domanda": "Come si procede?",
     "opz": [
      [
       "Si sostituisce subito senza ulteriori valutazioni",
       false,
       "No: la sostituzione va valutata anche per i nuovi rischi."
      ],
      [
       "Si valuta la sostituzione: efficacia tecnica, pericoli del nuovo prodotto (infiammabilità, ATEX), esposizione; si aggiornano DVR e procedure, si informano i lavoratori; la sostituzione resta l’obiettivo prioritario per il cancerogeno",
       true,
       "Corretto: sostituzione obbligata ma consapevole."
      ],
      [
       "Si continua con il cancerogeno usando i DPI",
       false,
       "No: per i cancerogeni la sostituzione è prioritaria quando tecnicamente possibile."
      ]
     ],
     "rif": "Artt. 225, 235 D.lgs. 81/2008 · Titolo XI",
     "appro": "La sostituzione di un cancerogeno è un obbligo quando tecnicamente possibile (art. 235); la scelta del sostituto deve evitare di introdurre rischi non controllati.",
     "nar": "Esercitazione. Esaminato il caso proposto, si individui la risposta corretta, valutando la motivazione di ciascuna alternativa.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "applica",
     "tit": "Il tuo piano di miglioramento per il rischio chimico",
     "lead": "Scegli le azioni prioritarie per la tua organizzazione.",
     "voci": [
      "Sostituire un prodotto pericoloso",
      "Installare o migliorare un’aspirazione",
      "Aggiornare le schede di dati di sicurezza",
      "Preparare le schede di reparto",
      "Misurare l’esposizione secondo la UNI EN 689",
      "Rivedere la scelta dei guanti",
      "Classificare le zone ATEX",
      "Esercitare la squadra sugli sversamenti"
     ],
     "campo": "L’azione numero uno, chi la guida ed entro quando",
     "esempio": "Es.: aspirazione sulla miscelazione, responsabile manutenzione, entro marzo",
     "min": 3,
     "nar": "Scegli le azioni prioritarie contro il rischio chimico nella tua azienda e indica l’azione numero uno, chi la guida ed entro quando.",
     "est": true,
     "ancora": "Esercitazione · La sostituzione del solvente"
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "CLP: classi, categorie, frasi H e P, pittogrammi",
      "REACH: SDS, scenari di esposizione, SVHC, autorizzazione e restrizioni",
      "Valutazione (art. 223) e misurazioni secondo UNI EN 689",
      "Capo II: cancerogeni, mutageni e reprotossici, sostituzione prioritaria",
      "Gerarchia delle misure e aspirazione alla fonte",
      "DPI scelti sulla sezione 8 della SDS; emergenze e sorveglianza"
     ],
     "nar": "In sintesi, occorre consultare sempre etichetta e scheda di dati di sicurezza, valutare e misurare l’esposizione con metodo, sostituire gli agenti cancerogeni ove possibile, captare gli inquinanti alla fonte e scegliere i dispositivi di protezione sulla base della scheda.",
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
    "Il Titolo IX del D.lgs. 81/2008 riguarda:",
    [
     "Le sostanze pericolose",
     "Il rumore",
     "I cantieri",
     "I videoterminali"
    ],
    0,
    "Titolo IX."
   ],
   [
    "Il regolamento REACH è il:",
    [
     "Reg. (CE) 1907/2006",
     "Reg. (CE) 1272/2008",
     "Reg. (UE) 2016/425",
     "D.lgs. 152/2006"
    ],
    0,
    "REACH."
   ],
   [
    "Le frasi H descrivono:",
    [
     "I pericoli",
     "I consigli di prudenza",
     "Il fornitore",
     "La quantità"
    ],
    0,
    "CLP."
   ],
   [
    "Le frasi P descrivono:",
    [
     "I consigli di prudenza",
     "I pericoli",
     "La composizione",
     "I valori limite"
    ],
    0,
    "CLP."
   ],
   [
    "Un cancerogeno di categoria 1A è:",
    [
     "Accertato per l’uomo",
     "Sospetto",
     "Non classificato",
     "Irritante"
    ],
    0,
    "CLP."
   ],
   [
    "La frase H360 indica:",
    [
     "Può nuocere alla fertilità o al feto",
     "Altamente infiammabile",
     "Irritante per gli occhi",
     "Esplosivo"
    ],
    0,
    "CLP."
   ],
   [
    "I DPI e i controlli dell’esposizione sono nella sezione SDS:",
    [
     "8",
     "2",
     "11",
     "15"
    ],
    0,
    "SDS."
   ],
   [
    "La SDS estesa contiene:",
    [
     "Gli scenari di esposizione",
     "Il prezzo",
     "Il DVR",
     "Il registro esposti"
    ],
    0,
    "REACH."
   ],
   [
    "Le restrizioni REACH sono nell’Allegato:",
    [
     "XVII",
     "XIV",
     "II",
     "I"
    ],
    0,
    "REACH."
   ],
   [
    "Il rischio «basso per la sicurezza e irrilevante per la salute» è previsto dall’articolo:",
    [
     "224, c. 2",
     "28",
     "71",
     "190"
    ],
    0,
    "Art. 224."
   ],
   [
    "Le misurazioni dell’esposizione sono previste dall’articolo:",
    [
     "225, c. 2",
     "18",
     "46",
     "82"
    ],
    0,
    "Art. 225."
   ],
   [
    "I valori limite di esposizione professionale per gli agenti chimici sono nell’Allegato:",
    [
     "XXXVIII",
     "IV",
     "IX",
     "L"
    ],
    0,
    "Allegato XXXVIII."
   ],
   [
    "I valori limite per cancerogeni e mutageni sono nell’Allegato:",
    [
     "XLIII",
     "XXXVIII",
     "XLII",
     "XXV"
    ],
    0,
    "Allegato XLIII."
   ],
   [
    "Le lavorazioni cancerogene (ad esempio polveri di legno duro) sono nell’Allegato:",
    [
     "XLII",
     "XLIII",
     "XXXIX",
     "XLIV"
    ],
    0,
    "Allegato XLII."
   ],
   [
    "La UNI EN 689 confronta le misure con:",
    [
     "Il valore limite di esposizione professionale",
     "Il prezzo della sostanza",
     "Il numero di lavoratori",
     "Il rumore"
    ],
    0,
    "UNI EN 689."
   ],
   [
    "Nella UNI EN 689 i campionamenti sono preferibilmente:",
    [
     "Personali, nella zona respiratoria",
     "Solo ambientali in un angolo",
     "Solo all’esterno",
     "Facoltativi"
    ],
    0,
    "UNI EN 689."
   ],
   [
    "Per i cancerogeni, se la sostituzione non è possibile, si usa:",
    [
     "Il sistema chiuso",
     "Solo la segnaletica",
     "Solo i DPI",
     "Nulla"
    ],
    0,
    "Art. 235."
   ],
   [
    "Il registro di esposizione è previsto per:",
    [
     "Gli esposti a cancerogeni, mutageni e reprotossici",
     "Tutti i lavoratori",
     "Solo i dirigenti",
     "Solo gli RLS"
    ],
    0,
    "Art. 243."
   ],
   [
    "Il D.lgs. 135/2024 recepisce la direttiva:",
    [
     "(UE) 2022/431",
     "2014/34/UE",
     "89/391/CEE",
     "(UE) 2016/425"
    ],
    0,
    "D.lgs. 135/2024."
   ],
   [
    "Il primo livello della gerarchia delle misure è:",
    [
     "La sostituzione",
     "I DPI",
     "La segnaletica",
     "La formazione"
    ],
    0,
    "Art. 225."
   ],
   [
    "Il fattore più critico per l’efficacia di un braccio aspirante è:",
    [
     "La distanza dalla sorgente",
     "Il colore",
     "La lunghezza del condotto soltanto",
     "L’orario"
    ],
    0,
    "Aspirazione localizzata."
   ],
   [
    "Il filtro P3 protegge da:",
    [
     "Particelle",
     "Vapori organici",
     "Ammoniaca",
     "Ossigeno carente"
    ],
    0,
    "UNI EN 529."
   ],
   [
    "La norma dei guanti di protezione chimica è la:",
    [
     "UNI EN ISO 374",
     "UNI EN 388",
     "UNI EN 361",
     "UNI EN 166"
    ],
    0,
    "Guanti."
   ],
   [
    "Un guanto in nitrile generico:",
    [
     "Protegge da tutti i solventi",
     "Può essere attraversato rapidamente da alcuni solventi",
     "È sempre il migliore",
     "Non serve"
    ],
    1,
    "Permeazione."
   ],
   [
    "Le procedure di emergenza per incidenti chimici sono previste dall’articolo:",
    [
     "226",
     "18",
     "37",
     "71"
    ],
    0,
    "Art. 226."
   ],
   [
    "Il monitoraggio biologico si effettua quando esiste:",
    [
     "Un valore limite biologico",
     "Un DPI",
     "Un preposto",
     "Un appalto"
    ],
    0,
    "Allegato XXXIX."
   ],
   [
    "La silice cristallina respirabile è:",
    [
     "Un agente cancerogeno (lavorazione dell’Allegato XLII)",
     "Innocua",
     "Solo irritante",
     "Un gas"
    ],
    0,
    "Allegato XLII."
   ],
   [
    "Durante manutenzioni e pulizie l’esposizione chimica:",
    [
     "Può essere elevata e va valutata",
     "È sempre nulla",
     "Non va considerata",
     "È irrilevante"
    ],
    0,
    "Art. 223."
   ],
   [
    "L’informazione e formazione sul rischio chimico è prevista dall’articolo:",
    [
     "227",
     "169",
     "195",
     "258"
    ],
    0,
    "Art. 227."
   ],
   [
    "La sostituzione di un cancerogeno con un prodotto più infiammabile richiede:",
    [
     "La valutazione dei nuovi rischi",
     "Nessuna valutazione",
     "Solo un nuovo DPI",
     "L’autorizzazione dell’INAIL"
    ],
    0,
    "Sostituzione consapevole."
   ]
  ]
 }
};
