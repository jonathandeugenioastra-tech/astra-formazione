/* Corso – Campionamento delle acque reflue (4 ore)
   D.lgs. 152/2006, Parte III, Allegato 5 · APAT CNR IRSA 1030 Man 29/2003
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "CAMP-ACQ",
 "titolo": "Campionamento delle acque reflue",
 "sottotitolo": "Pozzetto, campionamento istantaneo e medio composito, conservazione e verbale",
 "ore": 4,
 "rif": "D.lgs. 152/2006, Parte III, Allegato 5 · APAT CNR IRSA 1030 Man 29/2003",
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
     "tit": "Campionamento delle acque reflue",
     "sott": "Corso di 4 ore",
     "nar": "Benvenuti al corso sul campionamento delle acque reflue: requisiti del pozzetto, campionamento istantaneo e medio composito, conservazione, trasporto e verbale.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Riconoscere i requisiti del punto di campionamento",
      "Scegliere tra campione istantaneo e medio composito",
      "Conservare e trasportare correttamente i campioni",
      "Redigere il verbale di campionamento"
     ],
     "nar": "Al termine saprai valutare il punto di prelievo, scegliere il tipo di campione, conservarlo e trasportarlo correttamente e redigere il verbale.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Campionamento degli scarichi",
   "min": 235,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Campionamento degli scarichi",
     "nar": "Modulo 1: campionamento degli scarichi.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Autorizzazione allo scarico e valori limite",
     "foto": false,
     "lead": "Tutti gli scarichi devono essere preventivamente autorizzati (art. 124), salvo le acque reflue domestiche in fognatura, ammesse secondo i regolamenti del gestore.",
     "punti": [
      "Autorizzazione rilasciata nell’ambito dell’AUA o dell’AIA, oppure dal gestore del servizio idrico per gli scarichi in fognatura secondo il regolamento",
      "Allegato 5 alla Parte III: Tabella 3 per scarichi in acque superficiali e in fognatura, Tabella 4 per scarichi sul suolo, Tabella 5 per sostanze pericolose",
      "Pozzetto di campionamento immediatamente a monte del punto di immissione, accessibile",
      "Autocontrolli e controlli dell’autorità; campionamento medio composito come riferimento per i controlli",
      "Divieto di diluizione degli scarichi con acque prelevate allo scopo"
     ],
     "appro": "Il punto di misura per la verifica del rispetto dei limiti è il pozzetto di campionamento: deve essere accessibile in sicurezza e rappresentativo dello scarico. Le autorizzazioni possono imporre limiti diversi per specifici parametri e frequenze di autocontrollo.",
     "rif": "D.lgs. 152/2006, artt. 101, 107, 124 e Allegato 5 alla Parte III",
     "nar": "Gli scarichi devono essere autorizzati, di norma nell’AUA o nell’AIA, mentre le acque domestiche in fognatura sono ammesse secondo il regolamento del gestore. I limiti sono nell’Allegato cinque: tabella tre per acque superficiali e fognatura, tabella quattro per il suolo. Il controllo avviene al pozzetto di campionamento. È vietato diluire gli scarichi.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Il punto di campionamento",
     "foto": false,
     "lead": "Il campione deve essere prelevato in un punto rappresentativo dello scarico, accessibile e sicuro.",
     "punti": [
      "Pozzetto immediatamente a monte del punto di immissione nel corpo recettore o in fognatura",
      "A valle di tutti i trattamenti e prima della miscelazione con altre acque (meteoriche, domestiche)",
      "Accessibilità per l’autorità di controllo; chiusino identificato e in buono stato",
      "Turbolenza sufficiente a garantire la miscelazione; assenza di ristagni e sedimenti",
      "Sicurezza: pozzetti profondi possono essere ambienti confinati o sospetti di inquinamento"
     ],
     "appro": "Se l’autorizzazione individua uno specifico pozzetto fiscale, il campionamento ai fini del controllo si esegue in quel punto. Prelievi in punti diversi possono essere utili per la gestione interna (efficienza dei trattamenti) ma non per la verifica di conformità.",
     "rif": "D.lgs. 152/2006, art. 101 e Allegato 5 alla Parte III",
     "nar": "Il campione si preleva al pozzetto immediatamente a monte dell’immissione, a valle dei trattamenti e prima della miscelazione con altre acque. Il pozzetto deve essere accessibile, identificato, con buona miscelazione e senza ristagni. Attenzione: un pozzetto profondo può essere un ambiente confinato.",
     "p": 1.6
    },
    {
     "t": "confronto",
     "tit": "Campione istantaneo e campione medio composito: criteri di scelta",
     "sx": {
      "ico": "FaDroplet",
      "tit": "Istantaneo",
      "voci": [
       "Un singolo prelievo in un momento",
       "Rappresenta la condizione di quell’istante",
       "Utile per scarichi discontinui o per parametri instabili",
       "Usato anche per controlli puntuali"
      ]
     },
     "dx": {
      "ico": "FaLayerGroup",
      "tit": "Medio composito",
      "voci": [
       "Più prelievi nel tempo riuniti",
       "Di norma su tre ore per i controlli dei limiti",
       "Proporzionale al tempo o alla portata",
       "Rappresenta il comportamento medio dello scarico"
      ]
     },
     "nar": "Il campione istantaneo è un singolo prelievo e rappresenta quel momento; è utile per scarichi discontinui o parametri instabili. Il campione medio composito unisce più prelievi nel tempo, di norma su tre ore per il controllo dei limiti, proporzionali al tempo o alla portata, e rappresenta il comportamento medio.",
     "p": 1.2
    },
    {
     "t": "testo",
     "tit": "Conservazione e trasporto",
     "foto": false,
     "lead": "Dal prelievo all’analisi il campione può alterarsi: contenitori, conservanti, temperatura e tempi sono definiti dai metodi analitici.",
     "punti": [
      "Contenitori: vetro per oli, idrocarburi e composti organici; polietilene per molti parametri inorganici",
      "Conservanti: ad esempio acidificazione per i metalli, secondo il metodo",
      "Refrigerazione tra circa 1 e 5 °C e protezione dalla luce, dove previsto",
      "Tempi massimi tra prelievo e analisi indicati dai metodi; parametri da misurare in campo (temperatura, pH quando richiesto)",
      "Etichettatura chiara: punto, data, ora, tipo di campione, parametri"
     ],
     "appro": "Il manuale APAT CNR IRSA 1030 riporta indicazioni generali su contenitori, conservazione e tempi; i metodi specifici dei singoli parametri prevalgono quando più restrittivi. Un campione arrivato fuori dai tempi può essere non idoneo.",
     "rif": "APAT CNR IRSA 1030 Man 29/2003",
     "nar": "Il campione può alterarsi: si usano contenitori adatti, vetro per gli organici e polietilene per molti inorganici, conservanti come l’acidificazione per i metalli, refrigerazione e protezione dalla luce, rispettando i tempi massimi. Alcuni parametri si misurano in campo. L’etichetta deve essere chiara.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Il verbale di campionamento",
     "foto": false,
     "lead": "Il verbale documenta le condizioni del prelievo e rende il risultato difendibile.",
     "punti": [
      "Identificazione dello scarico, del punto e dell’autorizzazione",
      "Data, ora di inizio e fine, tipo di campione (istantaneo o composito) e modalità",
      "Condizioni dello scarico e dell’impianto: attività in corso, portata stimata, anomalie",
      "Misure in campo, contenitori, conservanti, sigilli",
      "Firme di chi preleva e del rappresentante dell’impresa; catena di custodia"
     ],
     "appro": "Durante i controlli dell’autorità l’impresa ha diritto di assistere al campionamento e di ottenere un’aliquota nei casi previsti; è utile avere personale formato in grado di verificare la correttezza delle operazioni e di annotare osservazioni nel verbale.",
     "rif": "APAT CNR IRSA 1030 Man 29/2003 · D.lgs. 152/2006",
     "nar": "Il verbale identifica scarico e punto, riporta data, orari, tipo di campione, condizioni dell’impianto, misure in campo, contenitori, conservanti e sigilli, con le firme e la catena di custodia. Durante i controlli l’impresa può assistere e chiedere un’aliquota.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il campione delle 17:55",
     "scena": "Il tecnico di un laboratorio arriva alle 17:45 per un autocontrollo con campione medio composito di tre ore. Lo scarico funziona solo durante il turno, che termina alle 18:00. Propone di prelevare un campione istantaneo e scriverlo come composito.",
     "domanda": "Che cosa si deve fare?",
     "opz": [
      [
       "Accettare per non perdere la giornata",
       false,
       "No: si falsificherebbe il verbale."
      ],
      [
       "Rinviare il campionamento a un giorno in cui sia possibile il composito durante l’attività, oppure eseguire un istantaneo dichiarandolo come tale e valutando se è ammesso dall’autorizzazione",
       true,
       "Corretto: il tipo di campione deve essere quello reale."
      ],
      [
       "Prelevare acqua dal rubinetto",
       false,
       "No: non rappresenta lo scarico."
      ]
     ],
     "rif": "APAT CNR IRSA 1030 Man 29/2003 · D.lgs. 152/2006",
     "appro": "La pianificazione degli autocontrolli deve tenere conto degli orari di funzionamento dello scarico.",
     "nar": "Esercitazione: analizza il caso e scegli la risposta corretta, motivandola.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 3,
     "domande": [
      [
       "Il campione per il controllo dei limiti è di norma:",
       [
        "Medio composito su tre ore",
        "Istantaneo di un secondo",
        "Mensile",
        "Annuale"
       ],
       0,
       "Allegato 5."
      ],
      [
       "Per i metalli il campione si conserva di norma:",
       [
        "Acidificato secondo il metodo",
        "Al sole",
        "Con aggiunta di acqua",
        "Senza contenitore"
       ],
       0,
       "Conservazione."
      ],
      [
       "Il pozzetto si trova:",
       [
        "A valle dei trattamenti e prima della miscelazione",
        "Prima dei trattamenti",
        "Nel corpo recettore",
        "In ufficio"
       ],
       0,
       "Punto di campionamento."
      ],
      [
       "Il manuale di riferimento per il campionamento è:",
       [
        "APAT CNR IRSA 1030 Man 29/2003",
        "UNI 10802",
        "UNI EN 15259",
        "UNI EN 689"
       ],
       0,
       "Manuale."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 1.",
     "p": 1.4
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "Pozzetto rappresentativo, accessibile e sicuro",
      "Istantaneo o medio composito secondo lo scopo",
      "Contenitori, conservanti, temperatura, tempi",
      "Verbale completo e catena di custodia",
      "Assistenza ai controlli dell’autorità"
     ],
     "nar": "Concludiamo. Preleva nel punto giusto, scegli il tipo di campione corretto, conserva e trasporta secondo i metodi e documenta tutto nel verbale.",
     "p": 1
    }
   ]
  }
 ],
 "testFinale": {
  "domande": 15,
  "soglia": 70,
  "tentativi": 2,
  "banca": [
   [
    "Il campione medio composito è formato da:",
    [
     "Più prelievi nel tempo",
     "Un solo prelievo",
     "Acqua potabile",
     "Fanghi"
    ],
    0,
    "Tipi di campione."
   ],
   [
    "Il campione istantaneo rappresenta:",
    [
     "Le condizioni di quell’istante",
     "La media annuale",
     "La media mensile",
     "Nulla"
    ],
    0,
    "Tipi di campione."
   ],
   [
    "Un campione proporzionale alla portata:",
    [
     "Pesa i prelievi in base alla portata",
     "Ignora la portata",
     "È vietato",
     "È istantaneo"
    ],
    0,
    "Composito."
   ],
   [
    "Per oli e idrocarburi si usano contenitori in:",
    [
     "Vetro",
     "Carta",
     "Polietilene sempre",
     "Metallo arrugginito"
    ],
    0,
    "Contenitori."
   ],
   [
    "La refrigerazione dei campioni è di norma tra:",
    [
     "1 e 5 °C",
     "20 e 25 °C",
     "-20 e -10 °C",
     "40 e 50 °C"
    ],
    0,
    "Conservazione."
   ],
   [
    "Un campione analizzato oltre i tempi massimi:",
    [
     "Può essere non idoneo",
     "È sempre valido",
     "È migliore",
     "È obbligatorio"
    ],
    0,
    "Tempi."
   ],
   [
    "Il pH, quando richiesto, è opportuno misurarlo:",
    [
     "In campo",
     "Dopo un mese",
     "Mai",
     "Solo in ufficio"
    ],
    0,
    "Misure in campo."
   ],
   [
    "Un pozzetto profondo può essere:",
    [
     "Un ambiente confinato",
     "Sempre sicuro",
     "Un deposito di rifiuti",
     "Un locale tecnico"
    ],
    0,
    "Sicurezza."
   ],
   [
    "Il punto di controllo fiscale è indicato:",
    [
     "Nell’autorizzazione",
     "Dal laboratorio a caso",
     "Dal trasportatore",
     "Dal Comune sempre"
    ],
    0,
    "Pozzetto."
   ],
   [
    "Durante i controlli l’impresa:",
    [
     "Può assistere al campionamento",
     "Non può essere presente",
     "Deve lasciare lo stabilimento",
     "Deve fermare la produzione sempre"
    ],
    0,
    "Controlli."
   ],
   [
    "Nel verbale va indicato:",
    [
     "Il tipo di campione reale",
     "Un tipo qualsiasi",
     "Solo il nome del tecnico",
     "Nulla"
    ],
    0,
    "Verbale."
   ],
   [
    "Le acque meteoriche miscelate prima del pozzetto:",
    [
     "Alterano la rappresentatività dello scarico industriale",
     "Sono sempre ammesse",
     "Migliorano il campione",
     "Sono obbligatorie"
    ],
    0,
    "Punto di campionamento."
   ],
   [
    "La disciplina degli scarichi è nella Parte del D.lgs. 152/2006:",
    [
     "III",
     "IV",
     "V",
     "II"
    ],
    0,
    "Parte III."
   ],
   [
    "I limiti degli scarichi sono nell’:",
    [
     "Allegato 5 alla Parte III",
     "Allegato IV alla Parte V",
     "Allegato XXXVIII al D.lgs. 81/2008",
     "Allegato D alla Parte IV"
    ],
    0,
    "Allegato 5."
   ],
   [
    "L’etichetta del campione riporta:",
    [
     "Punto, data, ora, tipo di campione, parametri",
     "Solo il prezzo",
     "Solo il colore",
     "Nulla"
    ],
    0,
    "Etichettatura."
   ],
   [
    "La catena di custodia accompagna il campione:",
    [
     "Fino al laboratorio",
     "Solo in azienda",
     "Solo per i rifiuti",
     "Mai"
    ],
    0,
    "Catena di custodia."
   ],
   [
    "Dichiarare composito un campione istantaneo è:",
    [
     "Una falsificazione",
     "Una prassi corretta",
     "Indifferente",
     "Obbligatorio"
    ],
    0,
    "Caso."
   ],
   [
    "I prelievi in punti diversi dal pozzetto fiscale sono utili:",
    [
     "Per la gestione interna dei trattamenti",
     "Per la verifica di conformità",
     "Mai",
     "Solo per l’ARPA"
    ],
    0,
    "Punto di campionamento."
   ],
   [
    "La turbolenza nel pozzetto:",
    [
     "Favorisce la miscelazione e la rappresentatività",
     "Va eliminata",
     "È irrilevante",
     "Altera sempre il campione"
    ],
    0,
    "Punto di campionamento."
   ],
   [
    "I metodi specifici dei parametri, se più restrittivi:",
    [
     "Prevalgono sulle indicazioni generali",
     "Si ignorano",
     "Sono facoltativi",
     "Sono vietati"
    ],
    0,
    "Conservazione."
   ]
  ]
 }
};
