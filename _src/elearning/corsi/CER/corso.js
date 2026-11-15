/* Corso – Fotovoltaico, autoconsumo e comunità energetiche rinnovabili (4 ore)
   D.lgs. 199/2021 · D.M. 7 dicembre 2023, n. 414 · TIAD ARERA
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "CER",
 "titolo": "Fotovoltaico, autoconsumo e comunità energetiche rinnovabili",
 "sottotitolo": "Configurazioni di autoconsumo diffuso, costituzione e incentivi",
 "ore": 4,
 "rif": "D.lgs. 199/2021 · D.M. 7 dicembre 2023, n. 414 · TIAD ARERA",
 "soglia": 70,
 "aggiornato": "2026-11",
 "moduli": [
  {
   "id": "M0",
   "titolo": "Introduzione",
   "min": 5,
   "foto": "energia3",
   "schermate": [
    {
     "t": "copertina",
     "tit": "Fotovoltaico, autoconsumo e comunità energetiche rinnovabili",
     "sott": "Corso di 4 ore",
     "nar": "Benvenuti al corso su fotovoltaico, autoconsumo e comunità energetiche rinnovabili: come funzionano l’autoconsumo e le configurazioni di autoconsumo diffuso, come si costituisce una comunità energetica e quali incentivi prevede il decreto 414 del 2023.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Conoscere i principi dell’autoconsumo fotovoltaico",
      "Distinguere le configurazioni di autoconsumo diffuso",
      "Conoscere costituzione e governance di una CER",
      "Valutare benefici e incentivi di una configurazione"
     ],
     "nar": "Al termine del corso il partecipante sarà in grado di distinguere le configurazioni di autoconsumo, di conoscere i requisiti per la costituzione di una comunità energetica e di stimarne i benefici economici.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Fotovoltaico e autoconsumo",
   "min": 115,
   "foto": "energia3",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Fotovoltaico e autoconsumo",
     "nar": "Modulo 1: fotovoltaico e autoconsumo.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "L’impianto fotovoltaico: elementi essenziali",
     "foto": false,
     "lead": "Un impianto fotovoltaico converte la radiazione solare in energia elettrica e la immette nella rete interna dell’utente o nella rete pubblica.",
     "punti": [
      "Componenti: moduli, inverter, quadri e protezioni, contatori di produzione e di scambio",
      "Potenza di picco (kWp) e producibilità annua: in Italia centrale indicativamente 1.200-1.400 kWh per kWp",
      "Iter: titolo abilitativo semplificato per molti impianti su edifici, connessione con il gestore di rete, registrazione su Gaudì di Terna",
      "Requisiti di connessione: norme CEI 0-21 (bassa tensione) e CEI 0-16 (media tensione)",
      "Sicurezza: rischio elettrico in corrente continua, prevenzione incendi delle coperture, lavori in quota"
     ],
     "appro": "Per gli impianti fotovoltaici su coperture di attività soggette ai controlli di prevenzione incendi si applicano le indicazioni della guida tecnica dei Vigili del fuoco; la manutenzione richiede personale qualificato secondo la CEI 11-27.",
     "rif": "D.lgs. 199/2021 · CEI 0-21 · CEI 0-16 · guida VV.F. sugli impianti fotovoltaici",
     "nar": "Un impianto fotovoltaico è costituito da moduli, inverter, protezioni e contatori. La potenza si esprime in chilowatt di picco: nell’Italia centrale la produzione è indicativamente compresa tra milleduecento e millequattrocento chilowattora per chilowatt all’anno. La connessione avviene secondo le norme CEI e l’impianto è registrato sul sistema Gaudì. Particolare attenzione richiedono gli aspetti di sicurezza: corrente continua, rischio di incendio, lavori in quota.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La radiazione solare e la producibilità",
     "lead": "L’energia prodotta da un impianto dipende dalla radiazione solare disponibile nel sito e dall’orientamento dei moduli.",
     "punti": [
      "Irraggiamento: potenza solare per unità di superficie, in condizioni di cielo sereno vicina a 1.000 W/m² a mezzogiorno",
      "Irradiazione: energia raccolta in un periodo, espressa in kWh/m² al giorno o all’anno",
      "In Italia l’orientamento ottimale è verso sud, con inclinazione indicativamente tra 25° e 35°",
      "Orientamenti est-ovest producono meno in totale ma distribuiscono meglio la produzione nella giornata",
      "Strumento di stima: PVGIS della Commissione europea, con dati climatici del sito"
     ],
     "appro": "Per l’autoconsumo non conta solo l’energia annua: un impianto orientato a est-ovest può coprire meglio i consumi del mattino e del pomeriggio di un’attività produttiva.",
     "rif": "PVGIS – Commissione europea, Centro comune di ricerca",
     "nar": "L’energia prodotta da un impianto fotovoltaico dipende innanzitutto dalla radiazione solare disponibile nel sito. Occorre distinguere due grandezze. L’irraggiamento è la potenza solare che incide sull’unità di superficie, misurata in watt per metro quadrato: in condizioni di cielo sereno, a mezzogiorno, si avvicina a mille watt per metro quadrato, valore assunto come riferimento per le prove dei moduli. L’irradiazione è invece l’energia raccolta in un certo periodo, espressa in chilowattora per metro quadrato al giorno o all’anno, ed è la grandezza da cui dipende la produzione annua. Alle latitudini italiane l’orientamento che massimizza la produzione è verso sud, con un’inclinazione indicativamente compresa tra venticinque e trentacinque gradi. Orientamenti diversi comportano una riduzione della produzione totale, ma possono essere vantaggiosi: un impianto con falde esposte a est e a ovest produce meno nell’arco dell’anno, ma distribuisce meglio la produzione nella giornata, coprendo i consumi del mattino e del tardo pomeriggio. Per stimare la producibilità di un sito si utilizza comunemente PVGIS, lo strumento del Centro comune di ricerca della Commissione europea, che impiega dati climatici storici e consente di simulare orientamenti, inclinazioni e perdite di sistema.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Celle e moduli: tecnologie e prestazioni",
     "lead": "Il modulo fotovoltaico è formato da celle di silicio collegate in serie e protette da vetro, incapsulante e cornice.",
     "punti": [
      "Silicio monocristallino: tecnologia prevalente, con varianti ad alta efficienza (PERC, TOPCon, eterogiunzione)",
      "Efficienza dei moduli commerciali: indicativamente intorno al 20–23%",
      "Moduli bifacciali: producono anche dal lato posteriore, utili su superfici chiare o strutture sollevate",
      "Potenza nominale (Wp) misurata in condizioni standard: 1.000 W/m², 25 °C, spettro AM 1,5",
      "Degrado: perdita di prestazioni nel tempo, garantita dai costruttori con valori annui contenuti"
     ],
     "appro": "La potenza di picco è un valore di laboratorio: in esercizio i moduli lavorano a temperature più elevate e con irraggiamenti variabili, per cui la potenza istantanea è normalmente inferiore.",
     "rif": "Norme CEI EN 61215 e CEI EN 61730 (qualificazione e sicurezza dei moduli)",
     "nar": "Il modulo fotovoltaico è costituito da celle di silicio collegate elettricamente in serie e protette da un vetro frontale, da un materiale incapsulante, da un foglio posteriore o da un secondo vetro e da una cornice. La tecnologia oggi prevalente è il silicio monocristallino, con diverse varianti ad alta efficienza, indicate con sigle come PERC, TOPCon ed eterogiunzione, che differiscono per la struttura della cella. L’efficienza dei moduli commerciali, cioè la quota della radiazione incidente convertita in energia elettrica, è indicativamente compresa tra il venti e il ventitré per cento. I moduli bifacciali producono energia anche dal lato posteriore, sfruttando la luce riflessa dal suolo o dalla copertura: sono vantaggiosi su superfici chiare o su strutture sollevate. La potenza nominale, espressa in watt di picco, è misurata in condizioni standard di prova: irraggiamento di mille watt per metro quadrato, temperatura della cella di venticinque gradi e spettro solare di riferimento. In esercizio i moduli lavorano a temperature più elevate e con irraggiamenti variabili, per cui la potenza istantanea è normalmente inferiore a quella di picco. Nel tempo le prestazioni si riducono lentamente per effetto del degrado, che i costruttori garantiscono entro valori annui contenuti. I moduli devono essere qualificati secondo le norme tecniche di prestazione e di sicurezza.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "L’inverter e la gestione dell’energia",
     "lead": "L’inverter converte la corrente continua dei moduli in corrente alternata e gestisce il punto di lavoro dell’impianto.",
     "punti": [
      "Conversione da corrente continua ad alternata, sincronizzata con la rete",
      "Inseguimento del punto di massima potenza (MPPT) al variare di irraggiamento e temperatura",
      "Configurazioni: inverter di stringa, centralizzati, microinverter od ottimizzatori sui singoli moduli",
      "Protezioni di interfaccia: distacco dalla rete in caso di anomalie, secondo le regole tecniche di connessione",
      "Monitoraggio: dati di produzione e allarmi, base per la manutenzione"
     ],
     "appro": "Ottimizzatori e microinverter riducono l’effetto di ombreggiamenti parziali e di moduli con orientamenti diversi, a fronte di un costo maggiore e di più componenti da manutenere.",
     "rif": "Norme CEI 0-21 e CEI 0-16 · CEI EN 62109",
     "nar": "L’inverter è il componente che converte la corrente continua prodotta dai moduli in corrente alternata, sincronizzata con la rete elettrica, ed è in un certo senso il cervello dell’impianto. Una delle sue funzioni principali è l’inseguimento del punto di massima potenza: poiché la potenza erogata dai moduli varia con l’irraggiamento e la temperatura, l’inverter adegua continuamente tensione e corrente di lavoro per estrarre la massima potenza disponibile. Esistono diverse configurazioni. Gli inverter di stringa ricevono più stringhe di moduli collegati in serie e sono la soluzione più diffusa negli impianti su edifici. Gli inverter centralizzati sono impiegati negli impianti di grande taglia. I microinverter, montati su ciascun modulo, e gli ottimizzatori di potenza consentono di gestire separatamente i singoli moduli, riducendo le perdite dovute a ombreggiamenti parziali o a moduli con orientamenti diversi, a fronte di un costo maggiore e di un numero più elevato di componenti. L’inverter integra inoltre le protezioni di interfaccia, che distaccano l’impianto dalla rete in caso di anomalie secondo le regole tecniche di connessione, e fornisce i dati di monitoraggio della produzione e gli allarmi, che costituiscono la base per una manutenzione efficace.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Perdite di sistema e rendimento complessivo",
     "lead": "Tra l’energia teoricamente disponibile e quella effettivamente prodotta intervengono numerose perdite, sintetizzate dal rendimento di sistema.",
     "punti": [
      "Temperatura: la potenza dei moduli diminuisce all’aumentare della temperatura delle celle",
      "Ombreggiamenti e sporcamento: riducono la radiazione utile, anche in modo sproporzionato",
      "Perdite nei cavi, nell’inverter e per disaccoppiamento tra moduli",
      "Indice di prestazione (Performance Ratio): rapporto tra energia prodotta e energia teorica",
      "Nei sistemi ben progettati il rendimento complessivo si colloca indicativamente tra il 75% e l’85%"
     ],
     "appro": "Un’ombra su poche celle può ridurre la produzione dell’intera stringa: per questo il rilievo degli ostacoli (camini, antenne, alberi, edifici) è una fase essenziale del progetto.",
     "rif": "CEI EN 61724-1 (monitoraggio delle prestazioni)",
     "nar": "Tra l’energia solare teoricamente disponibile e quella effettivamente immessa nell’impianto elettrico intervengono numerose perdite. La prima è dovuta alla temperatura: la potenza dei moduli diminuisce all’aumentare della temperatura delle celle, che nelle giornate estive può superare ampiamente quella dell’aria; per questo una buona ventilazione posteriore dei moduli migliora la produzione. La seconda riguarda gli ombreggiamenti e lo sporcamento: un’ombra che interessa poche celle può ridurre in modo sproporzionato la produzione dell’intera stringa, mentre polvere, foglie e depositi riducono la radiazione utile. Si aggiungono le perdite nei cavi, nella conversione dell’inverter e per il disaccoppiamento tra moduli con caratteristiche leggermente diverse. L’insieme di queste perdite è sintetizzato dall’indice di prestazione, in inglese performance ratio, definito come rapporto tra l’energia effettivamente prodotta e quella che l’impianto avrebbe prodotto in condizioni ideali con la stessa radiazione. Nei sistemi ben progettati e mantenuti questo indice si colloca indicativamente tra il settantacinque e l’ottantacinque per cento. Il suo monitoraggio nel tempo permette di individuare anomalie, come stringhe guaste o sporcamento eccessivo. Il rilievo accurato degli ostacoli presenti sulla copertura e nei dintorni è quindi una fase essenziale della progettazione.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Dimensionare l’impianto sui consumi",
     "lead": "Il dimensionamento corretto parte dall’analisi dei consumi orari, non dalla superficie disponibile.",
     "punti": [
      "Dati orari o quartorari di prelievo: disponibili dal distributore, anche tramite il portale dei consumi",
      "Profilo di carico: giorni feriali e festivi, stagionalità, turni di lavoro",
      "Confronto ora per ora tra produzione stimata e prelievi: quota autoconsumata e quota immessa",
      "Un impianto sovradimensionato immette molta energia a valore inferiore; uno sottodimensionato lascia risparmi non sfruttati",
      "Considerare l’evoluzione dei consumi: elettrificazione di calore e mobilità, ampliamenti"
     ],
     "appro": "Con l’autoconsumo diffuso l’energia immessa non è più necessariamente un sottoprodotto: se condivisa in una configurazione incentivata, anche un impianto più grande dei consumi propri può risultare conveniente.",
     "rif": "D.lgs. 199/2021 · TIAD ARERA",
     "nar": "Il dimensionamento corretto di un impianto fotovoltaico parte dall’analisi dei consumi, non dalla superficie disponibile sulla copertura. Il primo passo è ottenere i dati di prelievo orari o quartorari, che il distributore rende disponibili anche attraverso il portale dei consumi. Questi dati permettono di ricostruire il profilo di carico: la differenza tra giorni feriali e festivi, l’andamento stagionale, l’effetto dei turni di lavoro e dei periodi di chiusura. Il secondo passo è il confronto, ora per ora, tra la produzione stimata dell’impianto e i prelievi: la quota di produzione che coincide con i consumi è autoconsumata e vale il costo evitato dell’energia acquistata, mentre la quota eccedente viene immessa in rete. Un impianto sovradimensionato rispetto ai consumi immette una quota elevata di energia, valorizzata a un prezzo inferiore; un impianto sottodimensionato lascia invece risparmi non sfruttati. Occorre inoltre considerare l’evoluzione dei consumi: l’elettrificazione del riscaldamento con pompe di calore, la mobilità elettrica e gli ampliamenti produttivi possono aumentare i prelievi negli anni. Con le configurazioni di autoconsumo diffuso, infine, l’energia immessa può essere condivisa e incentivata: in questi casi anche un impianto più grande dei consumi propri può risultare conveniente.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Indicatori: autoconsumo e autosufficienza",
     "lead": "Due indicatori distinti descrivono il rapporto tra impianto e consumi e vanno sempre letti insieme.",
     "punti": [
      "Quota di autoconsumo: energia autoconsumata diviso energia prodotta",
      "Quota di autosufficienza: energia autoconsumata diviso energia consumata",
      "Un impianto piccolo ha alta quota di autoconsumo ma bassa autosufficienza",
      "Un impianto grande ha alta autosufficienza ma bassa quota di autoconsumo",
      "L’accumulo e lo spostamento dei carichi aumentano entrambi gli indicatori"
     ],
     "appro": "Spostare i carichi programmabili nelle ore di produzione, come lavaggi, ricariche di veicoli elettrici o produzione di acqua calda, è spesso la misura più economica per aumentare l’autoconsumo.",
     "rif": "CEI EN 61724-1 · prassi di analisi energetica",
     "nar": "Il rapporto tra un impianto fotovoltaico e i consumi del sito è descritto da due indicatori distinti, che vanno sempre letti insieme. La quota di autoconsumo è il rapporto tra l’energia autoconsumata e l’energia prodotta: indica quanta parte della produzione viene utilizzata direttamente nel sito. La quota di autosufficienza è il rapporto tra l’energia autoconsumata e l’energia consumata: indica quanta parte del fabbisogno viene coperta dall’impianto. I due indicatori variano in modo opposto con la taglia dell’impianto. Un impianto piccolo rispetto ai consumi ha una quota di autoconsumo molto elevata, perché quasi tutta la produzione viene utilizzata, ma una bassa autosufficienza. Un impianto grande ha un’autosufficienza elevata, ma una quota di autoconsumo più bassa, perché una parte rilevante della produzione viene immessa in rete. Esistono misure che aumentano entrambi gli indicatori. La prima è l’accumulo, che sposta l’energia prodotta di giorno verso le ore serali. La seconda, spesso la più economica, è lo spostamento dei carichi programmabili nelle ore di produzione: lavaggi, ricarica dei veicoli elettrici, produzione di acqua calda con pompe di calore, cicli di lavorazione differibili. Un’analisi dei carichi può quindi migliorare il risultato economico senza modificare l’impianto.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "foto": false,
     "t": "esempio",
     "tit": "Esempio guidato · Autoconsumo e autosufficienza",
     "lead": "Due indicatori che si confondono spesso.",
     "passi": [
      [
       "Dati dell’anno",
       "Produzione dell’impianto 60.000 kWh; consumi dell’azienda 100.000 kWh; energia prodotta e consumata in sito 39.000 kWh.",
       "P = 60.000 · C = 100.000 · Autoconsumata = 39.000 kWh"
      ],
      [
       "Autoconsumo",
       "Quota della produzione consumata in sito.",
       "39.000 ÷ 60.000 = 65%"
      ],
      [
       "Autosufficienza",
       "Quota dei consumi coperta dall’impianto.",
       "39.000 ÷ 100.000 = 39%"
      ],
      [
       "Energia immessa in rete",
       "Produzione non consumata in sito.",
       "60.000 − 39.000 = 21.000 kWh"
      ],
      [
       "Lettura",
       "Un impianto più grande aumenta l’autosufficienza ma, senza accumulo o spostamento dei carichi, riduce l’autoconsumo.",
       "Si dimensiona sui consumi contemporanei alla produzione"
      ]
     ],
     "nar": "Due indicatori che si confondono spesso. L’impianto produce sessantamila chilowattora; l’azienda ne consuma centomila; trentanovemila sono prodotti e consumati in sito. L’autoconsumo è la quota della produzione usata in sito: trentanovemila su sessantamila, il sessantacinque per cento. L’autosufficienza è la quota dei consumi coperta dall’impianto: trentanovemila su centomila, il trentanove per cento. Il resto della produzione, ventunomila chilowattora, va in rete. Ingrandire l’impianto aumenta l’autosufficienza, ma senza accumulo o spostamento dei carichi riduce l’autoconsumo.",
     "rif": "CEI 0-21 · ARERA",
     "est": true,
     "ancora": "Indicatori: autoconsumo e autosufficienza"
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Calcola autoconsumo e autosufficienza",
     "lead": "Modifica produzione, consumi e quota consumata in sito.",
     "rif": "Elaborazione didattica",
     "grafico": {
      "tipo": "calcolo",
      "formula_testo": "Autoconsumo = E autoconsumata / Produzione · Autosufficienza = E autoconsumata / Consumi",
      "ingressi": [
       {
        "id": "p",
        "nome": "Produzione annua",
        "min": 5000,
        "max": 300000,
        "passo": 5000,
        "val": 60000,
        "unita": "kWh"
       },
       {
        "id": "c",
        "nome": "Consumi annui",
        "min": 10000,
        "max": 500000,
        "passo": 5000,
        "val": 100000,
        "unita": "kWh"
       },
       {
        "id": "q",
        "nome": "Quota della produzione consumata in sito",
        "min": 10,
        "max": 100,
        "passo": 5,
        "val": 65,
        "unita": "%"
       }
      ],
      "risultati": [
       {
        "nome": "Autosufficienza",
        "formula": "Math.min(100, p*q/c)",
        "unita": "%"
       },
       {
        "nome": "Energia immessa in rete",
        "formula": "p*(1-q/100)",
        "unita": "kWh"
       }
      ],
      "unita": "%",
      "scala": 100
     },
     "nar": "Prova a cambiare la dimensione dell’impianto e la quota consumata in sito. Osserva come varia l’autosufficienza e quanta energia finisce in rete.",
     "est": true,
     "ancora": "Indicatori: autoconsumo e autosufficienza"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il fotovoltaico dell’officina",
     "scena": "Un’officina meccanica con 100.000 kWh di consumi annui, concentrati nei giorni feriali tra le 8 e le 17, valuta un impianto fotovoltaico sul tetto.",
     "decisioni": [
      {
       "dom": "Da dove parti?",
       "opz": [
        [
         "Dall’impianto più grande che entra nel tetto",
         false,
         "Senza analizzare i consumi rischi di immettere in rete gran parte della produzione."
        ],
        [
         "Dall’analisi dei consumi orari e dagli interventi di efficienza",
         true,
         "Corretto: prima si riducono i consumi, poi si dimensiona l’impianto sui consumi contemporanei."
        ],
        [
         "Dall’accumulo, perché aumenta sempre la convenienza",
         false,
         "L’accumulo va valutato dopo aver dimensionato l’impianto sui consumi."
        ]
       ]
      },
      {
       "dom": "L’analisi mostra consumi bassi nel fine settimana. Che cosa ne deduci?",
       "opz": [
        [
         "Nel fine settimana gran parte della produzione andrà in rete",
         true,
         "Corretto: è la produzione che non trova consumi contemporanei; si valorizza con il ritiro o con la condivisione."
        ],
        [
         "Il fine settimana non incide sul dimensionamento",
         false,
         "Incide sull’autoconsumo annuo."
        ],
        [
         "Conviene spegnere l’impianto nel fine settimana",
         false,
         "L’energia si può immettere e valorizzare."
        ]
       ]
      },
      {
       "dom": "Come valuti la convenienza?",
       "opz": [
        [
         "Con il solo prezzo dei moduli",
         false,
         "Servono costi, energia autoconsumata, energia immessa e manutenzione nel tempo."
        ],
        [
         "Con un piano economico su tutta la vita utile: risparmi in bolletta, ricavi dell’energia immessa, costi di manutenzione",
         true,
         "Corretto: indicatori come tempo di ritorno e valore attuale netto richiedono tutti i flussi."
        ],
        [
         "Con la potenza installata",
         false,
         "La potenza da sola non dice nulla sulla convenienza."
        ]
       ]
      }
     ],
     "chiusura": "Prima i consumi e l’efficienza, poi la dimensione dell’impianto, infine il piano economico completo: è la sequenza che evita impianti sovradimensionati.",
     "nar": "Un’officina valuta un impianto fotovoltaico. Prendi le decisioni nell’ordine giusto.",
     "rif": "D.lgs. 199/2021",
     "est": true,
     "ancora": "Indicatori: autoconsumo e autosufficienza"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "I sistemi di accumulo elettrochimico",
     "lead": "Le batterie aumentano l’autoconsumo, ma la loro convenienza va valutata caso per caso.",
     "punti": [
      "Tecnologia prevalente: litio ferro fosfato (LFP), per sicurezza e durata in cicli",
      "Capacità utile (kWh) e potenza (kW): da dimensionare sull’eccedenza giornaliera e sui consumi serali",
      "Rendimento di ciclo: una parte dell’energia accumulata si perde nella carica e scarica",
      "Durata: espressa in numero di cicli e anni, con riduzione progressiva della capacità",
      "Requisiti di sicurezza e di installazione: locale idoneo, ventilazione, prevenzione incendi"
     ],
     "appro": "Nelle attività con consumi concentrati nelle ore diurne l’accumulo aggiunge poco; è più utile dove i consumi serali sono rilevanti o dove serve continuità di alimentazione.",
     "rif": "CEI 0-21, allegati sui sistemi di accumulo · CEI EN 62619",
     "nar": "I sistemi di accumulo elettrochimico permettono di immagazzinare l’energia prodotta in eccesso durante il giorno e di utilizzarla nelle ore serali o notturne, aumentando l’autoconsumo e l’autosufficienza. La tecnologia oggi prevalente negli impianti stazionari è quella al litio ferro fosfato, apprezzata per la sicurezza e la durata in termini di cicli. Il dimensionamento richiede due grandezze: la capacità utile, in chilowattora, da commisurare all’energia eccedente nelle giornate tipiche e ai consumi serali, e la potenza, in chilowatt, che determina la velocità di carica e scarica. Occorre considerare il rendimento di ciclo, perché una parte dell’energia accumulata si perde nei processi di carica e scarica, e la durata, espressa in numero di cicli e in anni, durante i quali la capacità si riduce progressivamente. L’installazione deve rispettare requisiti di sicurezza: un locale idoneo, un’adeguata ventilazione, le distanze e le misure di prevenzione incendi indicate dal costruttore e dalle norme. La convenienza dell’accumulo va valutata caso per caso: nelle attività con consumi concentrati nelle ore diurne, che già autoconsumano gran parte della produzione, l’accumulo aggiunge poco; è invece più utile dove i consumi serali sono rilevanti, come nelle abitazioni, o dove è richiesta continuità di alimentazione.",
     "est": true,
     "ancora": "L’impianto fotovoltaico: elementi essenziali"
    },
    {
     "t": "testo",
     "tit": "Autoconsumo fisico e valore dell’energia",
     "foto": false,
     "lead": "L’energia prodotta e consumata nello stesso momento nel sito vale di più di quella ceduta alla rete.",
     "punti": [
      "Autoconsumo istantaneo: evita l’acquisto dell’energia e delle relative componenti di rete e oneri",
      "Energia immessa in rete: venduta a mercato o con ritiro dedicato (GSE)",
      "Quota di autoconsumo: dipende dalla coincidenza tra profilo di produzione e profilo di carico",
      "Accumulo: aumenta l’autoconsumo spostando l’energia nelle ore serali",
      "Lo scambio sul posto non è più disponibile per i nuovi impianti: le alternative sono il ritiro dedicato e l’autoconsumo diffuso"
     ],
     "appro": "Un’impresa che lavora di giorno, nei mesi estivi, può autoconsumare gran parte della produzione; una famiglia assente di giorno ne autoconsuma una quota minore. L’analisi dei consumi orari, disponibili dal distributore, è il punto di partenza.",
     "rif": "D.lgs. 199/2021 · delibere ARERA · regole GSE sul ritiro dedicato",
     "nar": "L’energia autoconsumata nello stesso momento vale di più di quella ceduta alla rete, perché evita l’acquisto e gli oneri. La quota di autoconsumo dipende dalla coincidenza tra produzione e consumi: un’impresa che lavora di giorno autoconsuma molto, una famiglia assente meno. L’accumulo aiuta a spostare l’energia alla sera.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "I regimi amministrativi per gli impianti",
     "lead": "Il D.lgs. 190/2024 ha riordinato i titoli necessari per realizzare impianti a fonti rinnovabili in tre regimi.",
     "punti": [
      "Attività libera: interventi di minore impatto, senza titolo abilitativo, salvo i vincoli applicabili",
      "Procedura abilitativa semplificata (PAS): presentata al Comune per impianti di taglia o impatto intermedi",
      "Autorizzazione unica: per gli impianti di maggiore dimensione o impatto, rilasciata da Regione o Stato",
      "Gli impianti fotovoltaici su coperture di edifici rientrano di norma nell’attività libera",
      "Restano da verificare vincoli paesaggistici, culturali, edilizi e di prevenzione incendi"
     ],
     "appro": "La qualificazione dell’intervento dipende da potenza, collocazione e vincoli: prima di progettare va verificato l’allegato del decreto che classifica gli interventi e la disciplina regionale delle aree idonee.",
     "rif": "D.lgs. 25 novembre 2024, n. 190",
     "nar": "Il decreto legislativo centonovanta del duemilaventiquattro ha riordinato i regimi amministrativi per la realizzazione degli impianti a fonti rinnovabili, riconducendoli a tre categorie. La prima è l’attività libera, che comprende gli interventi di minore impatto e non richiede alcun titolo abilitativo, fermi restando i vincoli eventualmente applicabili. La seconda è la procedura abilitativa semplificata, presentata al Comune, per gli impianti di taglia o di impatto intermedi. La terza è l’autorizzazione unica, rilasciata dalla Regione o, per gli impianti di maggiori dimensioni, dallo Stato, per gli interventi più rilevanti. Gli impianti fotovoltaici realizzati sulle coperture degli edifici rientrano di norma nell’attività libera, il che semplifica notevolmente l’iter per imprese e famiglie. La classificazione dipende però dalla potenza, dalla collocazione dell’impianto e dalla presenza di vincoli: prima di progettare occorre verificare l’allegato del decreto che classifica gli interventi, la disciplina regionale sulle aree idonee e gli eventuali vincoli paesaggistici, culturali ed edilizi. Restano inoltre applicabili le norme di prevenzione incendi quando l’impianto è installato su attività soggette ai controlli dei Vigili del fuoco. Una verifica preliminare accurata evita ritardi e contestazioni successive.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La connessione alla rete",
     "lead": "Per immettere energia in rete l’impianto deve essere connesso secondo le regole dell’ARERA e le norme tecniche del CEI.",
     "punti": [
      "Richiesta di connessione al gestore di rete secondo il Testo integrato delle connessioni attive (TICA)",
      "Preventivo con soluzione tecnica, costi e tempi; accettazione e realizzazione delle opere",
      "Regole tecniche: CEI 0-21 per la bassa tensione, CEI 0-16 per la media e alta tensione",
      "Registrazione dell’impianto sul sistema Gaudì di Terna",
      "Attivazione dei contratti per la valorizzazione dell’energia e per le eventuali configurazioni"
     ],
     "appro": "Per gli impianti di piccola taglia su utenze esistenti è previsto un iter semplificato con modello unico; i tempi di connessione vanno comunque considerati nel cronoprogramma.",
     "rif": "TICA – Deliberazione ARERA ARG/elt 99/08 e s.m.i. · CEI 0-21 · CEI 0-16",
     "nar": "Per immettere energia nella rete pubblica l’impianto deve essere connesso secondo le regole stabilite dall’Autorità di regolazione per energia reti e ambiente e le norme tecniche del Comitato elettrotecnico italiano. La procedura è disciplinata dal Testo integrato delle connessioni attive. Il produttore presenta la richiesta di connessione al gestore della rete, che elabora un preventivo con la soluzione tecnica, i costi e i tempi di realizzazione; il produttore lo accetta e, completate le opere, l’impianto viene connesso. Le regole tecniche da rispettare dipendono dal livello di tensione: la norma CEI zero ventuno per le connessioni in bassa tensione, la norma CEI zero sedici per quelle in media e alta tensione. Esse definiscono, tra l’altro, le caratteristiche dei sistemi di protezione di interfaccia e dei sistemi di misura. L’impianto deve inoltre essere registrato sul sistema Gaudì, l’anagrafe degli impianti di produzione gestita da Terna. Infine si attivano i contratti per la valorizzazione dell’energia immessa e, se previsto, per l’accesso alle configurazioni di autoconsumo diffuso. Per gli impianti di piccola taglia realizzati su utenze esistenti è previsto un iter semplificato con un modello unico, ma i tempi di connessione vanno comunque considerati nel cronoprogramma del progetto.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La valorizzazione dell’energia immessa",
     "lead": "L’energia non autoconsumata può essere venduta con il ritiro dedicato, sul mercato o condivisa in una configurazione di autoconsumo diffuso.",
     "punti": [
      "Ritiro dedicato (GSE): l’energia è acquistata dal GSE ai prezzi di mercato della zona, con procedura semplificata",
      "Vendita sul mercato tramite un operatore (trader) con contratto bilaterale",
      "Lo scambio sul posto non è disponibile per i nuovi impianti",
      "Condivisione in una CER o in un’altra configurazione: tariffa premio sull’energia condivisa e restituzione di componenti tariffarie",
      "Il valore dell’energia immessa è inferiore al costo evitato dell’energia autoconsumata"
     ],
     "appro": "Il prezzo dell’energia nelle ore centrali dei giorni soleggiati tende a ridursi per l’elevata produzione fotovoltaica: è un motivo in più per privilegiare l’autoconsumo e la condivisione.",
     "rif": "D.lgs. 387/2003, art. 13 (ritiro dedicato) · D.lgs. 199/2021 · D.M. 414/2023",
     "nar": "L’energia prodotta e non autoconsumata viene immessa in rete e può essere valorizzata in diversi modi. Il più semplice è il ritiro dedicato, gestito dal Gestore dei servizi energetici: il produttore cede l’energia al GSE, che la remunera ai prezzi di mercato della zona in cui si trova l’impianto, con una procedura semplificata adatta ai piccoli produttori. In alternativa l’energia può essere venduta sul mercato attraverso un operatore, con un contratto bilaterale. Lo scambio sul posto, che per molti anni ha consentito di compensare economicamente l’energia immessa con quella prelevata, non è più disponibile per i nuovi impianti. Una terza possibilità è la condivisione dell’energia all’interno di una comunità energetica rinnovabile o di un’altra configurazione di autoconsumo diffuso, che consente di ottenere, oltre alla vendita dell’energia, una tariffa premio sull’energia condivisa e la restituzione di alcune componenti tariffarie. In ogni caso il valore dell’energia immessa è inferiore al costo evitato dell’energia autoconsumata, che comprende anche gli oneri di rete e di sistema. Va inoltre considerato che nelle ore centrali delle giornate soleggiate i prezzi di mercato tendono a ridursi per l’elevata produzione fotovoltaica complessiva: un motivo in più per privilegiare l’autoconsumo e la condivisione.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Sicurezza elettrica degli impianti fotovoltaici",
     "lead": "Un impianto fotovoltaico è in tensione ogni volta che i moduli sono illuminati: il lato in corrente continua non può essere «spento» dal quadro.",
     "punti": [
      "Lato in corrente continua: tensioni di stringa elevate, presenti finché i moduli ricevono luce",
      "Rischio di arco elettrico in corrente continua in caso di connessioni difettose o danneggiate",
      "Lavori elettrici solo da personale con profilo adeguato (PES, PAV, PEI) secondo la norma CEI 11-27",
      "Sezionatori lato corrente continua e alternata, segnaletica e schemi aggiornati",
      "Lavori sulle coperture: rischio di caduta dall’alto, linee vita, parapetti, DPI anticaduta"
     ],
     "appro": "L’apertura dell’interruttore generale non elimina la tensione sui cavi tra moduli e inverter: chi interviene deve conoscere la configurazione dell’impianto e le procedure di messa in sicurezza.",
     "rif": "D.lgs. 81/2008, Titolo III, Capo III e Titolo IV · CEI 11-27 · CEI 64-8, parte 7-712",
     "nar": "Un impianto fotovoltaico presenta un rischio elettrico particolare: il lato in corrente continua, cioè i moduli e i cavi fino all’inverter, è in tensione ogni volta che i moduli ricevono luce, e non può essere disattivato semplicemente aprendo l’interruttore del quadro elettrico. Le tensioni di stringa possono essere elevate e la corrente continua, in caso di connessioni difettose o cavi danneggiati, può dare origine ad archi elettrici persistenti, potenziale causa di incendio. Per questo i lavori elettrici sugli impianti devono essere eseguiti esclusivamente da personale con il profilo adeguato, persona esperta, avvertita o idonea, secondo la norma CEI undici ventisette, nel rispetto delle disposizioni del decreto legislativo ottantuno del duemilaotto sugli impianti e le apparecchiature elettriche. L’impianto deve disporre di sezionatori sia sul lato in corrente continua sia su quello in corrente alternata, di segnaletica che indichi la presenza di un impianto fotovoltaico e di schemi aggiornati. Poiché gli impianti sono spesso installati sulle coperture, si aggiunge il rischio di caduta dall’alto: installazione e manutenzione richiedono linee vita, parapetti o dispositivi di protezione individuale anticaduta. Anche i Vigili del fuoco, in caso di intervento, devono poter identificare rapidamente l’impianto e i dispositivi di sezionamento.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Prevenzione incendi e coperture",
     "lead": "L’installazione di un impianto su un edificio soggetto ai controlli dei Vigili del fuoco richiede una valutazione specifica.",
     "punti": [
      "Riferimento: guida tecnica del Corpo nazionale dei Vigili del fuoco per l’installazione degli impianti fotovoltaici",
      "Valutazione dell’interazione tra impianto e struttura: reazione al fuoco della copertura, compartimentazioni",
      "Distanze da aperture, evacuatori di fumo e lucernari; percorsi per le squadre di soccorso",
      "Dispositivi di sezionamento facilmente accessibili e segnalati",
      "Aggiornamento della documentazione di prevenzione incendi quando l’impianto modifica le condizioni di sicurezza"
     ],
     "appro": "L’impianto fotovoltaico non è in sé un’attività soggetta, ma la sua installazione su un’attività soggetta può costituire una modifica rilevante ai fini della prevenzione incendi.",
     "rif": "D.P.R. 151/2011 · Guida tecnica dei Vigili del fuoco per gli impianti fotovoltaici",
     "nar": "Quando un impianto fotovoltaico viene installato sulla copertura di un edificio che ospita un’attività soggetta ai controlli di prevenzione incendi, è necessaria una valutazione specifica. L’impianto non costituisce di per sé un’attività soggetta, ma la sua installazione può modificare le condizioni di sicurezza dell’attività sottostante e configurarsi come modifica rilevante ai fini della prevenzione incendi, ai sensi del regolamento del duemilaundici. Il riferimento tecnico è la guida del Corpo nazionale dei Vigili del fuoco per l’installazione degli impianti fotovoltaici. La valutazione considera l’interazione tra impianto e struttura: la reazione al fuoco degli elementi della copertura, il mantenimento delle compartimentazioni, la distanza dei moduli da aperture, evacuatori di fumo e calore e lucernari, la presenza di percorsi che consentano alle squadre di soccorso di operare. Particolare importanza hanno i dispositivi di sezionamento, che devono essere facilmente accessibili, segnalati e indicati nelle planimetrie. Se l’impianto modifica le condizioni di sicurezza, la documentazione di prevenzione incendi va aggiornata secondo le procedure previste. Per un’impresa, coinvolgere il professionista antincendio fin dalla fase di progetto evita soluzioni da correggere a impianto già realizzato.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Manutenzione, monitoraggio e fine vita",
     "lead": "Un impianto fotovoltaico dura decenni: manutenzione e monitoraggio ne preservano la produzione, e a fine vita i moduli sono rifiuti da gestire correttamente.",
     "punti": [
      "Monitoraggio continuo della produzione e confronto con l’atteso; analisi degli allarmi dell’inverter",
      "Ispezioni periodiche: stato di moduli, connessioni, strutture, quadri e protezioni",
      "Termografia per individuare celle o connessioni surriscaldate; pulizia quando lo sporcamento è significativo",
      "Sostituzione dell’inverter prevista nel corso della vita utile",
      "Fine vita: i moduli sono rifiuti di apparecchiature elettriche ed elettroniche (RAEE)"
     ],
     "appro": "Per gli impianti incentivati il GSE prevede specifiche modalità di garanzia per la corretta gestione dei moduli a fine vita.",
     "rif": "D.lgs. 49/2014 (RAEE) · CEI EN 62446 · regole del GSE",
     "nar": "Un impianto fotovoltaico ha una vita utile di diversi decenni, durante i quali manutenzione e monitoraggio ne preservano la produzione e la sicurezza. Il monitoraggio continuo confronta la produzione effettiva con quella attesa e analizza gli allarmi dell’inverter: una riduzione anomala segnala guasti di stringa, ombreggiamenti nuovi o sporcamento. Le ispezioni periodiche verificano lo stato dei moduli, delle connessioni, delle strutture di sostegno, dei quadri e delle protezioni; la termografia consente di individuare celle o connessioni surriscaldate, potenziali punti di guasto o di innesco. La pulizia dei moduli si esegue quando lo sporcamento è significativo, con metodi che non danneggino le superfici e nel rispetto delle misure di sicurezza per i lavori in quota. Nel corso della vita utile è normalmente prevista la sostituzione dell’inverter, componente con durata inferiore a quella dei moduli. A fine vita, i moduli fotovoltaici sono rifiuti di apparecchiature elettriche ed elettroniche e vanno gestiti secondo il decreto legislativo quarantanove del duemilaquattordici, attraverso i sistemi di raccolta e trattamento previsti. Per gli impianti che beneficiano di incentivi, il Gestore dei servizi energetici prevede specifiche modalità di garanzia finanziaria per assicurare la corretta gestione dei moduli a fine vita.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Simulazione · Quota di autoconsumo",
     "rif": "D.lgs. 199/2021 · TIAD ARERA",
     "lead": "Modificare la produzione annua e l’energia consumata nelle stesse ore: il calcolo restituisce la quota di autoconsumo.",
     "grafico": {
      "tipo": "calcolo",
      "formula_testo": "Quota di autoconsumo = energia autoconsumata / energia prodotta × 100",
      "formula": "Math.min(a, p) / p * 100",
      "ingressi": [
       {
        "id": "p",
        "nome": "Energia prodotta nell’anno",
        "min": 20000,
        "max": 150000,
        "passo": 1000,
        "val": 125000,
        "unita": "kWh"
       },
       {
        "id": "a",
        "nome": "Consumi contemporanei alla produzione",
        "min": 0,
        "max": 150000,
        "passo": 1000,
        "val": 93750,
        "unita": "kWh"
       }
      ],
      "risultato": "Quota di autoconsumo",
      "unita": "%",
      "scala": 100
     },
     "nar": "Simulazione. Si modifichino l’energia prodotta e la parte dei consumi che avviene nelle stesse ore della produzione. Il rapporto tra energia autoconsumata ed energia prodotta è la quota di autoconsumo, che determina la convenienza economica dell’impianto. Si eseguano almeno tre simulazioni.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Verifiche strutturali delle coperture",
     "lead": "L’installazione di un impianto aggiunge carichi permanenti e modifica le azioni del vento e della neve sulla copertura.",
     "punti": [
      "Carico dei moduli e delle strutture di sostegno, indicativamente dell’ordine di 15–25 kg/m² per sistemi complanari",
      "Sistemi zavorrati: carichi concentrati più elevati, da verificare puntualmente",
      "Azioni del vento (sollevamento) e accumuli di neve secondo le Norme tecniche per le costruzioni",
      "Coperture esistenti: verifica dello stato di conservazione e della capacità portante residua",
      "Coperture in cemento-amianto: valutazione e bonifica prima di qualsiasi intervento"
     ],
     "appro": "Su coperture in cemento-amianto non si installano impianti senza preventiva valutazione e bonifica secondo la normativa specifica: le lavorazioni sul materiale possono liberare fibre pericolose.",
     "rif": "D.M. 17 gennaio 2018 (NTC 2018) · D.lgs. 81/2008, Titolo IX, Capo III",
     "nar": "L’installazione di un impianto fotovoltaico su una copertura esistente comporta conseguenze strutturali che devono essere valutate da un tecnico abilitato. I moduli e le strutture di sostegno aggiungono un carico permanente, che per i sistemi complanari alla copertura è indicativamente dell’ordine di quindici-venticinque chilogrammi per metro quadrato; i sistemi zavorrati, utilizzati sulle coperture piane per evitare forature, introducono carichi concentrati più elevati che vanno verificati puntualmente. Occorre inoltre considerare le azioni del vento, che possono generare forze di sollevamento sui moduli, e gli accumuli di neve, che i moduli possono modificare, secondo le Norme tecniche per le costruzioni del duemiladiciotto. Sulle coperture esistenti la verifica riguarda anche lo stato di conservazione degli elementi e la capacità portante residua, soprattutto negli edifici industriali datati. Un caso particolare è rappresentato dalle coperture in cemento-amianto, ancora presenti in molti capannoni: su di esse non si installano impianti senza una preventiva valutazione e, di norma, la bonifica, perché le lavorazioni sul materiale possono liberare fibre pericolose e sono soggette alla specifica disciplina di tutela dei lavoratori dall’amianto. La sostituzione di una copertura in amianto con una nuova copertura e un impianto fotovoltaico è spesso un intervento che unisce bonifica e produzione di energia.",
     "est": true,
     "ancora": "Manutenzione, monitoraggio e fine vita"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Documentazione e conformità dell’impianto",
     "lead": "Un impianto realizzato correttamente è accompagnato da una documentazione che ne attesta la conformità e ne consente la gestione.",
     "punti": [
      "Progetto dell’impianto, redatto da professionista abilitato quando previsto",
      "Dichiarazione di conformità dell’installatore, con allegati obbligatori",
      "Schemi elettrici, elenco dei componenti, certificati di moduli e inverter",
      "Verifiche iniziali e documentazione di collaudo; regolamento di esercizio con il gestore di rete",
      "Manuale d’uso e di manutenzione, con le istruzioni per il sezionamento in emergenza"
     ],
     "appro": "La dichiarazione di conformità è il documento con cui l’impresa installatrice attesta di aver realizzato l’impianto a regola d’arte; senza di essa l’impianto non può essere considerato conforme.",
     "rif": "D.M. 22 gennaio 2008, n. 37 · CEI EN 62446-1 · CEI 0-21",
     "nar": "Un impianto fotovoltaico realizzato correttamente è accompagnato da una documentazione che ne attesta la conformità e ne consente la gestione nel tempo. Il primo documento è il progetto, redatto da un professionista abilitato quando la potenza o le caratteristiche dell’impianto lo richiedono secondo il decreto ministeriale trentasette del duemilaotto. Il secondo è la dichiarazione di conformità rilasciata dall’impresa installatrice, con gli allegati obbligatori, con cui l’impresa attesta di aver realizzato l’impianto a regola d’arte; senza questo documento l’impianto non può essere considerato conforme. La documentazione comprende inoltre gli schemi elettrici, l’elenco dei componenti installati e i certificati di conformità dei moduli e degli inverter alle norme tecniche. La norma CEI EN sessantaduemilaquattrocentoquarantasei descrive le verifiche iniziali e la documentazione minima per gli impianti connessi alla rete. Per la connessione è previsto il regolamento di esercizio sottoscritto con il gestore di rete. Infine, il manuale d’uso e di manutenzione deve contenere le istruzioni per l’esercizio, la manutenzione e il sezionamento in caso di emergenza. Questa documentazione va conservata per tutta la vita dell’impianto e messa a disposizione del datore di lavoro, del responsabile della manutenzione e dei soccorritori.",
     "est": true,
     "ancora": "Manutenzione, monitoraggio e fine vita"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Altre fonti rinnovabili nelle configurazioni",
     "lead": "Accanto al fotovoltaico, nelle configurazioni di autoconsumo possono essere impiegate altre fonti rinnovabili, con profili di produzione diversi.",
     "punti": [
      "Mini eolico: produzione anche notturna e invernale, molto dipendente dalla ventosità del sito",
      "Mini idroelettrico: produzione continua dove esistono salti e portate idonei, con vincoli ambientali",
      "Biogas e biomasse: produzione programmabile, con requisiti di sostenibilità e di emissione",
      "La combinazione di fonti diverse migliora la copertura delle ore serali e invernali",
      "Il decreto prevede fattori e regole specifiche per ciascuna fonte"
     ],
     "appro": "La programmabilità è il vantaggio principale di biogas e idroelettrico rispetto al fotovoltaico: la produzione può seguire i consumi anziché la disponibilità del sole.",
     "rif": "D.lgs. 199/2021 · D.M. 414/2023",
     "nar": "Il fotovoltaico è la fonte più diffusa nelle configurazioni di autoconsumo, ma non l’unica ammessa. Il mini eolico produce energia anche nelle ore notturne e nei mesi invernali, ma la sua resa dipende fortemente dalla ventosità del sito, che va misurata prima dell’investimento, e richiede attenzione agli aspetti paesaggistici e acustici. Il mini idroelettrico, dove esistono salti e portate idonei, ad esempio lungo canali irrigui o acquedotti, garantisce una produzione relativamente continua, con vincoli legati alla tutela dei corpi idrici. Il biogas e le biomasse consentono una produzione programmabile, che può seguire i consumi anziché la disponibilità della fonte, ma devono rispettare requisiti di sostenibilità della materia prima e limiti di emissione in atmosfera. La combinazione di fonti con profili di produzione diversi migliora la copertura delle ore serali e dei mesi invernali, nei quali il fotovoltaico produce poco, e aumenta quindi l’energia condivisa. Il decreto ministeriale quattrocentoquattordici prevede regole specifiche per ciascuna fonte. Nella pratica, la maggior parte delle comunità parte dal fotovoltaico per la sua semplicità e diffusione, valutando in una seconda fase l’integrazione di altre fonti o di sistemi di accumulo per migliorare l’equilibrio tra produzione e consumi.",
     "est": true,
     "ancora": "Manutenzione, monitoraggio e fine vita"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Emissioni evitate e impronta ambientale del fotovoltaico",
     "lead": "Il beneficio ambientale di un impianto si misura con le emissioni evitate, considerando anche quelle legate alla sua produzione.",
     "punti": [
      "Emissioni evitate: energia prodotta moltiplicata per il fattore di emissione del sistema elettrico",
      "Fattore di emissione: da fonti ufficiali aggiornate (ad esempio i dati nazionali pubblicati da ISPRA)",
      "Analisi del ciclo di vita: emissioni di fabbricazione, trasporto, installazione e fine vita",
      "Tempo di ritorno energetico: anni necessari per produrre l’energia spesa per costruire l’impianto",
      "Comunicazione corretta: dati, fonti e metodo dichiarati, senza asserzioni generiche"
     ],
     "appro": "Il fattore di emissione del sistema elettrico si riduce negli anni con la crescita delle rinnovabili: va sempre indicato l’anno di riferimento del dato utilizzato.",
     "rif": "ISPRA – Fattori di emissione per la produzione e il consumo di energia elettrica in Italia · ISO 14040/14044",
     "nar": "Il beneficio ambientale di un impianto fotovoltaico si misura principalmente con le emissioni di gas a effetto serra evitate. Il calcolo moltiplica l’energia prodotta per il fattore di emissione del sistema elettrico, cioè la quantità di anidride carbonica equivalente associata a ogni chilowattora prelevato dalla rete. Il fattore va tratto da fonti ufficiali aggiornate, come i dati nazionali pubblicati dall’Istituto superiore per la protezione e la ricerca ambientale, indicando sempre l’anno di riferimento, perché il valore si riduce negli anni con la crescita delle rinnovabili. Una valutazione completa considera però l’intero ciclo di vita dell’impianto, secondo le norme sull’analisi del ciclo di vita: le emissioni legate alla fabbricazione dei moduli e degli altri componenti, al trasporto, all’installazione e alla gestione a fine vita. Un indicatore utile è il tempo di ritorno energetico, cioè il numero di anni necessari perché l’impianto produca l’energia spesa per costruirlo, che per gli impianti attuali è nell’ordine di pochi anni, a fronte di una vita utile di decenni. Nella comunicazione dei risultati, ad esempio nei rendiconti di sostenibilità, occorre dichiarare dati, fonti e metodo, evitando asserzioni generiche come impatto zero, che non sono supportate da un calcolo verificabile.",
     "est": true,
     "ancora": "Manutenzione, monitoraggio e fine vita"
    },
    {
     "foto": false,
     "t": "abbina",
     "tit": "Esercitazione · Grandezze e definizioni",
     "sott": "Associare a ciascuna grandezza la definizione corretta",
     "coppie": [
      [
       "Irraggiamento",
       "Potenza solare per unità di superficie (W/m²)"
      ],
      [
       "Irradiazione",
       "Energia solare raccolta in un periodo (kWh/m²)"
      ],
      [
       "Quota di autoconsumo",
       "Energia autoconsumata / energia prodotta"
      ],
      [
       "Performance Ratio",
       "Energia prodotta / energia teorica con la stessa radiazione"
      ],
      [
       "Valore attuale netto",
       "Flussi di cassa attualizzati meno l’investimento"
      ]
     ],
     "nar": "Esercitazione. Si associ a ciascuna grandezza la definizione corretta.",
     "est": true,
     "ancora": "Manutenzione, monitoraggio e fine vita"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Esercitazione · Affermazioni vere o false sul fotovoltaico",
     "sott": "Qualificare ciascuna affermazione come vera o falsa",
     "voci": [
      [
       "Aprendo l’interruttore generale si elimina la tensione sui cavi tra moduli e inverter.",
       false,
       "Falso: il lato in corrente continua resta in tensione finché i moduli sono illuminati."
      ],
      [
       "La quota di autosufficienza è il rapporto tra energia autoconsumata ed energia consumata.",
       true,
       "Vero."
      ],
      [
       "Gli impianti fotovoltaici su coperture rientrano di norma nell’attività libera secondo il D.lgs. 190/2024.",
       true,
       "Vero, salvo vincoli applicabili."
      ],
      [
       "Lo scambio sul posto è disponibile per i nuovi impianti.",
       false,
       "Falso."
      ],
      [
       "Un’ombra su poche celle può ridurre la produzione dell’intera stringa.",
       true,
       "Vero."
      ]
     ],
     "nar": "Esercitazione. Si stabilisca se ciascuna affermazione sul fotovoltaico è vera o falsa.",
     "est": true,
     "ancora": "Autoconsumo fisico e valore dell’energia"
    },
    {
     "t": "testo",
     "tit": "Fonti rinnovabili e autoconsumo",
     "foto": false,
     "lead": "Le fonti rinnovabili nello stabilimento riducono costi ed emissioni, soprattutto se l’energia è autoconsumata.",
     "punti": [
      "Fotovoltaico su coperture e aree pertinenziali; producibilità e profilo di produzione",
      "Autoconsumo istantaneo e accumuli elettrochimici",
      "Solare termico e biomasse dove compatibili con i vincoli ambientali",
      "Configurazioni di autoconsumo diffuso e comunità energetiche (D.lgs. 199/2021)",
      "Garanzie di origine e contratti di acquisto a lungo termine (PPA)"
     ],
     "appro": "La quota di autoconsumo dipende dalla coincidenza tra profilo di produzione e profilo di carico: un’analisi dei consumi orari permette di dimensionare correttamente impianto e accumulo.",
     "rif": "D.lgs. 199/2021 · UNI CEI EN 16247",
     "nar": "Le rinnovabili riducono costi ed emissioni soprattutto se l’energia è autoconsumata: fotovoltaico, accumuli, solare termico e biomasse dove compatibili, configurazioni di autoconsumo diffuso e comunità energetiche, garanzie di origine e contratti a lungo termine. La quota di autoconsumo dipende dalla coincidenza tra produzione e consumi.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: autoconsumo di un’officina",
     "foto": false,
     "lead": "Un’officina consuma 60 MWh l’anno, soprattutto nei giorni feriali dalle 8 alle 18, e installa un impianto da 40 kWp.",
     "punti": [
      "Produzione stimata: 40 kWp × 1.300 kWh/kWp ≈ 52 MWh/anno",
      "Autoconsumo stimato dal confronto dei profili orari: circa 60% della produzione ≈ 31 MWh",
      "Risparmio in bolletta con costo evitato di 0,20 €/kWh: circa 6.200 €/anno",
      "Energia immessa: circa 21 MWh, valorizzata con il ritiro dedicato o condivisa in una CER",
      "Con investimento di 48.000 € il tempo di ritorno semplice è di circa 6-7 anni, prima della valorizzazione dell’energia immessa"
     ],
     "appro": "I valori sono indicativi a scopo didattico: la producibilità reale dipende da esposizione, inclinazione e ombreggiamenti, e va stimata con strumenti come PVGIS della Commissione europea.",
     "rif": "Esempio didattico · PVGIS (Centro comune di ricerca, Commissione europea)",
     "nar": "Un’officina da sessanta megawattora installa quaranta chilowatt di picco: produce circa cinquantadue megawattora, ne autoconsuma circa il sessanta per cento, risparmiando circa seimiladuecento euro l’anno. Il resto si vende o si condivide in una comunità energetica. I valori sono indicativi e si stimano con strumenti come PVGIS.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le componenti della bolletta elettrica",
     "lead": "Per valutare il risparmio dell’autoconsumo occorre conoscere le voci della bolletta che l’energia autoprodotta permette di evitare.",
     "punti": [
      "Spesa per la materia energia: prezzo dell’energia e oneri di commercializzazione del venditore",
      "Spesa per il trasporto e la gestione del contatore: tariffe di trasmissione, distribuzione e misura",
      "Spesa per oneri di sistema: componenti a copertura di costi di interesse generale",
      "Imposte: accisa e IVA, con regimi diversi per uso domestico e non domestico",
      "Le quote proporzionali all’energia prelevata sono evitate dall’autoconsumo; le quote fisse e di potenza no"
     ],
     "appro": "Il «costo evitato» di un chilowattora autoconsumato è quindi pari alla somma delle sole componenti variabili con l’energia prelevata, non al costo medio della bolletta.",
     "rif": "Deliberazioni ARERA sulla struttura tariffaria · Bolletta 2.0",
     "nar": "Per valutare correttamente il risparmio ottenuto con l’autoconsumo occorre conoscere le voci della bolletta elettrica e capire quali vengono effettivamente evitate dall’energia autoprodotta. La bolletta è composta da quattro gruppi di voci. La spesa per la materia energia comprende il prezzo dell’energia e gli oneri di commercializzazione del venditore. La spesa per il trasporto e la gestione del contatore comprende le tariffe di trasmissione, di distribuzione e di misura, stabilite dall’ARERA. La spesa per oneri di sistema comprende componenti destinate a coprire costi di interesse generale del sistema elettrico. Infine vi sono le imposte, cioè l’accisa e l’IVA, con regimi diversi per gli usi domestici e non domestici. Ciascun gruppo comprende quote proporzionali all’energia prelevata, quote fisse e quote proporzionali alla potenza impegnata. L’autoconsumo evita soltanto le quote proporzionali all’energia prelevata, mentre le quote fisse e quelle legate alla potenza restano invariate. Ne deriva che il costo evitato di un chilowattora autoconsumato non coincide con il costo medio della bolletta, ottenuto dividendo l’importo totale per i chilowattora consumati, ma è pari alla somma delle sole componenti variabili. Utilizzare il costo medio porta a sovrastimare il risparmio, soprattutto per le utenze con quote fisse rilevanti.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Indicatori economici dell’investimento",
     "lead": "La convenienza di un impianto si valuta con indicatori che considerano l’intera vita utile e il valore del denaro nel tempo.",
     "punti": [
      "Tempo di ritorno semplice: investimento diviso risparmio annuo; facile ma approssimativo",
      "Valore attuale netto (VAN): somma dei flussi di cassa attualizzati meno l’investimento",
      "Tasso interno di rendimento (TIR): tasso che annulla il valore attuale netto",
      "Costo livellato dell’energia (LCOE): costo medio di ogni kWh prodotto sulla vita utile",
      "Includere manutenzione, sostituzione dell’inverter, degrado dei moduli, assicurazioni"
     ],
     "appro": "Un tempo di ritorno breve non garantisce da solo la convenienza: il valore attuale netto permette di confrontare alternative con durate e profili di flusso diversi.",
     "rif": "Prassi di valutazione degli investimenti energetici · UNI CEI EN 16247",
     "nar": "La convenienza economica di un impianto fotovoltaico si valuta con indicatori che considerano l’intera vita utile e il valore del denaro nel tempo. Il più semplice è il tempo di ritorno semplice, ottenuto dividendo l’investimento per il risparmio annuo: è facile da calcolare ma approssimativo, perché non considera ciò che accade dopo il recupero dell’investimento né il valore del denaro nel tempo. Il valore attuale netto è la somma dei flussi di cassa futuri, attualizzati con un tasso che rappresenta il costo del capitale, meno l’investimento iniziale: un valore positivo indica che l’investimento crea valore. Il tasso interno di rendimento è il tasso di attualizzazione che rende nullo il valore attuale netto e consente di confrontare l’investimento con rendimenti alternativi. Il costo livellato dell’energia rappresenta il costo medio di ogni chilowattora prodotto lungo la vita utile e si confronta direttamente con il costo evitato dell’energia acquistata. In tutti i casi l’analisi deve includere i costi di manutenzione, la sostituzione dell’inverter nel corso della vita utile, il degrado delle prestazioni dei moduli e le assicurazioni. Un tempo di ritorno breve non garantisce da solo la convenienza: il valore attuale netto consente di confrontare alternative con durate e profili di flusso diversi.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Efficienza energetica prima del fotovoltaico",
     "lead": "Ridurre i consumi è la misura con il miglior rapporto tra costo e beneficio e precede il dimensionamento dell’impianto.",
     "punti": [
      "Principio «l’efficienza energetica al primo posto», adottato dalla legislazione europea",
      "Diagnosi energetica: individua sprechi e interventi su illuminazione, motori, aria compressa, climatizzazione",
      "Ridurre i consumi prima di dimensionare l’impianto evita di sovradimensionarlo",
      "Interventi tipici: illuminazione a LED, inverter su motori e pompe, eliminazione delle perdite di aria compressa",
      "Monitoraggio dei consumi per verificare i risultati nel tempo"
     ],
     "appro": "Un kilowattora non consumato non va né prodotto né acquistato: per questo l’efficienza viene prima della produzione da fonti rinnovabili.",
     "rif": "Dir. (UE) 2023/1791 · D.lgs. 102/2014",
     "nar": "Prima di dimensionare un impianto fotovoltaico è opportuno ridurre i consumi, perché l’efficienza energetica offre generalmente il miglior rapporto tra costo e beneficio. La legislazione europea, in particolare la direttiva sull’efficienza energetica del duemilaventitré, ha adottato il principio dell’efficienza energetica al primo posto, secondo cui le misure di riduzione della domanda vanno considerate prima di quelle che aumentano l’offerta. Lo strumento di partenza è la diagnosi energetica, disciplinata in Italia dal decreto legislativo centodue del duemilaquattordici, che individua dove e come l’energia viene consumata e quali interventi sono convenienti. Gli interventi tipici in un’impresa riguardano l’illuminazione, con la sostituzione delle lampade tradizionali con sorgenti a LED; i motori e le pompe, con l’installazione di inverter che adeguano la velocità al carico; l’aria compressa, con l’eliminazione delle perdite e la riduzione della pressione; la climatizzazione, con regolazioni più efficienti. Ridurre i consumi prima di dimensionare l’impianto evita di sovradimensionarlo rispetto al fabbisogno futuro. Il monitoraggio dei consumi consente infine di verificare nel tempo i risultati degli interventi. Il principio è intuitivo: un chilowattora non consumato non va né prodotto né acquistato.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Pompe di calore, mobilità elettrica e autoconsumo",
     "lead": "L’elettrificazione dei consumi termici e dei trasporti aumenta i prelievi diurni e può migliorare la valorizzazione dell’impianto.",
     "punti": [
      "Pompe di calore: producono calore con un’efficienza molto superiore a quella delle resistenze elettriche",
      "Programmazione della produzione di acqua calda nelle ore di massima produzione fotovoltaica",
      "Accumulo termico: un serbatoio di acqua calda funziona come una batteria a basso costo",
      "Ricarica dei veicoli aziendali durante le ore di produzione, con gestione intelligente della potenza",
      "Attenzione alla potenza impegnata e al dimensionamento dei circuiti"
     ],
     "appro": "Spostare la produzione di acqua calda e la ricarica dei veicoli nelle ore di sole è spesso più economico che installare batterie elettrochimiche.",
     "rif": "D.lgs. 199/2021 · CEI 64-8, parte 7-722 (alimentazione dei veicoli elettrici)",
     "nar": "L’elettrificazione dei consumi termici e dei trasporti modifica il profilo dei consumi di imprese e famiglie e può migliorare sensibilmente la valorizzazione di un impianto fotovoltaico. Le pompe di calore producono calore con un’efficienza molto superiore a quella delle resistenze elettriche, perché trasferiscono calore dall’ambiente esterno anziché generarlo direttamente. Se la produzione di acqua calda viene programmata nelle ore di massima produzione fotovoltaica, l’energia autoconsumata aumenta. Un serbatoio di accumulo dell’acqua calda funziona di fatto come una batteria termica a basso costo: immagazzina l’energia del sole sotto forma di calore per utilizzarla nelle ore successive. Analogamente, la ricarica dei veicoli aziendali può essere concentrata nelle ore centrali della giornata, con sistemi di gestione intelligente della potenza che modulano la ricarica in base alla produzione disponibile. Questi interventi richiedono però attenzione alla potenza impegnata e al dimensionamento dei circuiti, che devono essere progettati secondo le norme tecniche, comprese quelle specifiche per l’alimentazione dei veicoli elettrici. In molti casi, spostare la produzione di acqua calda e la ricarica dei veicoli nelle ore di sole è più economico che installare un sistema di accumulo elettrochimico.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Fotovoltaico su parcheggi, aree industriali e agrivoltaico",
     "lead": "Oltre alle coperture degli edifici, gli impianti possono sfruttare superfici già trasformate o integrarsi con l’attività agricola.",
     "punti": [
      "Pensiline fotovoltaiche nei parcheggi: producono energia e proteggono i veicoli",
      "Aree industriali, cave dismesse, discariche chiuse: superfici già compromesse, spesso considerate idonee",
      "Agrivoltaico: impianti che consentono la prosecuzione dell’attività agricola sotto o tra i moduli",
      "Le Regioni individuano le aree idonee, con iter autorizzativi più rapidi",
      "Valutazione dei vincoli paesaggistici e del consumo di suolo"
     ],
     "appro": "Privilegiare superfici già impermeabilizzate o compromesse riduce il consumo di suolo agricolo e i tempi di autorizzazione.",
     "rif": "D.lgs. 199/2021, art. 20 · D.lgs. 190/2024 · disciplina regionale delle aree idonee",
     "nar": "Oltre alle coperture degli edifici, gli impianti fotovoltaici possono sfruttare altre superfici, con vantaggi e vincoli diversi. Le pensiline fotovoltaiche nei parcheggi producono energia e allo stesso tempo proteggono i veicoli dal sole e dalle intemperie, e possono essere abbinate a punti di ricarica. Le aree industriali, le cave dismesse e le discariche chiuse sono superfici già compromesse, che la normativa tende a considerare idonee e per le quali gli iter autorizzativi sono più rapidi. L’agrivoltaico è una soluzione in cui l’impianto consente la prosecuzione dell’attività agricola o zootecnica sotto o tra i moduli, ad esempio con strutture sopraelevate o con file distanziate, conciliando produzione energetica e uso agricolo del suolo. Il decreto legislativo centonovantanove del duemilaventuno ha previsto l’individuazione delle aree idonee, demandata alla disciplina regionale, nelle quali gli impianti beneficiano di procedure semplificate. In tutti i casi occorre valutare i vincoli paesaggistici e il consumo di suolo. Privilegiare superfici già impermeabilizzate o compromesse è una scelta coerente con la tutela del territorio e riduce i tempi di autorizzazione. Per una comunità energetica, la disponibilità di grandi coperture industriali o di parcheggi pubblici rappresenta spesso l’opportunità più concreta.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: stima della producibilità con PVGIS",
     "lead": "Un esempio guidato mostra i passaggi per stimare la produzione di un impianto e interpretarne i risultati.",
     "punti": [
      "Dati di ingresso: posizione del sito, potenza di picco 50 kWp, inclinazione 10°, orientamento sud-est",
      "Perdite di sistema stimate: 14%; tecnologia: silicio cristallino",
      "Risultato: produzione annua e mensile, con andamento stagionale",
      "Confronto mese per mese con i consumi: estate con eccedenze, inverno con copertura ridotta",
      "Esportazione dei dati orari per il confronto con il profilo di carico dell’impresa"
     ],
     "appro": "PVGIS fornisce stime basate su dati climatici storici: la produzione di un singolo anno può discostarsi sensibilmente dalla media, in più o in meno.",
     "rif": "PVGIS – Commissione europea, Centro comune di ricerca",
     "nar": "Si propone un esempio applicativo di stima della producibilità con PVGIS. Si consideri un impianto da cinquanta chilowatt di picco su una copertura industriale poco inclinata, con inclinazione di dieci gradi e orientamento sud-est. Il primo passaggio consiste nell’individuare il sito sulla mappa, così che lo strumento utilizzi i dati climatici di quella posizione. Si inseriscono quindi la potenza di picco, l’inclinazione, l’orientamento, la tecnologia dei moduli, in questo caso silicio cristallino, e le perdite di sistema stimate, ad esempio il quattordici per cento. Lo strumento restituisce la produzione annua attesa e la sua distribuzione mensile, che evidenzia il marcato andamento stagionale: nei mesi estivi la produzione è molto superiore a quella invernale. Il confronto mese per mese con i consumi dell’impresa mostra che in estate si producono eccedenze, da autoconsumare con accumuli o da condividere in una configurazione, mentre in inverno la copertura dei consumi è ridotta. Per un’analisi più accurata PVGIS consente di esportare dati orari da confrontare con il profilo di carico. Occorre infine ricordare che le stime si basano su dati climatici storici: la produzione di un singolo anno può discostarsi sensibilmente dalla media, in più o in meno, e il piano economico deve tenerne conto.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Lavori in quota nell’installazione e nella manutenzione",
     "lead": "L’installazione e la manutenzione degli impianti su copertura espongono i lavoratori al rischio di caduta dall’alto, principale causa di infortuni gravi nel settore.",
     "punti": [
      "Lavoro in quota: attività con rischio di caduta da una quota superiore a 2 m rispetto a un piano stabile",
      "Priorità alle protezioni collettive (parapetti, reti) rispetto ai dispositivi individuali",
      "Dispositivi di ancoraggio e linee vita conformi alle norme tecniche, con sistemi di arresto caduta",
      "Coperture non portanti e lucernari: rischio di sfondamento, da proteggere o segregare",
      "Piano di emergenza e di recupero del lavoratore sospeso all’imbracatura"
     ],
     "appro": "La sospensione inerte nell’imbracatura dopo una caduta può avere conseguenze gravi in tempi brevi: il recupero va pianificato prima dell’inizio dei lavori, non improvvisato.",
     "rif": "D.lgs. 81/2008, artt. 107, 111 e 115 · UNI EN 795 · UNI EN 363",
     "nar": "L’installazione e la manutenzione degli impianti fotovoltaici su copertura espongono i lavoratori al rischio di caduta dall’alto, che rappresenta la principale causa di infortuni gravi e mortali nei lavori edili. Il decreto legislativo ottantuno del duemilaotto definisce lavoro in quota l’attività che espone il lavoratore al rischio di caduta da una quota posta ad altezza superiore a due metri rispetto a un piano stabile. Il datore di lavoro deve scegliere attrezzature e misure adeguate, dando priorità alle protezioni collettive, come i parapetti provvisori lungo i bordi e le reti di sicurezza, rispetto ai dispositivi di protezione individuale. Quando le protezioni collettive non sono realizzabili, si impiegano sistemi di arresto caduta collegati a dispositivi di ancoraggio o a linee vita conformi alle norme tecniche, utilizzati da lavoratori formati e addestrati. Un pericolo specifico delle coperture industriali è lo sfondamento di superfici non portanti, come lucernari e lastre di copertura degradate: queste superfici vanno protette con coperture resistenti o segregate. Infine, l’uso dei sistemi di arresto caduta richiede un piano di emergenza e di recupero del lavoratore rimasto sospeso all’imbracatura, perché la sospensione inerte può avere conseguenze gravi in tempi brevi. Il recupero va pianificato prima dell’inizio dei lavori, con attrezzature e personale disponibili in cantiere.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Lavori elettrici e qualificazione del personale",
     "lead": "Gli interventi sugli impianti fotovoltaici comportano rischio elettrico anche in assenza di rete, perché i moduli esposti alla luce sono sempre in tensione.",
     "punti": [
      "I moduli generano tensione in corrente continua appena illuminati: non è possibile «spegnere» la stringa",
      "Lavori elettrici affidati a persone esperte (PES) o avvertite (PAV), designate dal datore di lavoro",
      "Lavori sotto tensione: consentiti solo nei casi e con le procedure previste, da personale idoneo",
      "Procedure: sezionamento, protezione contro la richiusura, verifica di assenza di tensione, messa a terra dove applicabile",
      "Arco elettrico in corrente continua: più persistente rispetto alla corrente alternata"
     ],
     "appro": "In corrente continua l’arco che si forma aprendo un connettore sotto carico non si estingue spontaneamente al passaggio per lo zero: i connettori non vanno mai scollegati con l’inverter in funzione.",
     "rif": "D.lgs. 81/2008, artt. 80–83 · CEI EN 50110-1 · CEI 11-27",
     "nar": "Gli interventi sugli impianti fotovoltaici comportano un rischio elettrico specifico: i moduli generano tensione in corrente continua non appena sono esposti alla luce, anche quando l’impianto è scollegato dalla rete. Non è quindi possibile togliere tensione a una stringa con il solo sezionamento lato rete, e questa caratteristica va tenuta presente in tutte le fasi di installazione, manutenzione e intervento in emergenza. Il decreto legislativo ottantuno del duemilaotto impone al datore di lavoro di valutare il rischio elettrico e di adottare misure tecniche e organizzative adeguate. Le norme CEI EN cinquantamilacentodieci e CEI undici-ventisette stabiliscono che i lavori elettrici siano affidati a persone esperte o avvertite, designate dal datore di lavoro sulla base di formazione ed esperienza; i lavori sotto tensione sono consentiti solo nei casi e con le procedure previste dalla legge e dalle norme, da personale riconosciuto idoneo. Le procedure di lavoro fuori tensione comprendono il sezionamento, la protezione contro la richiusura, la verifica dell’assenza di tensione e, dove applicabile, la messa a terra e in cortocircuito. Un aspetto peculiare riguarda l’arco elettrico: in corrente continua l’arco che si forma aprendo un connettore sotto carico non si estingue spontaneamente come in corrente alternata. Per questo i connettori delle stringhe non vanno mai scollegati con l’inverter in funzione.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: dimensionare un accumulo domestico",
     "lead": "Una famiglia con impianto da 6 kWp valuta un sistema di accumulo partendo dai propri dati di consumo.",
     "punti": [
      "Consumo annuo 4.000 kWh, di cui circa il 60% nelle ore serali e notturne",
      "Produzione annua stimata 7.800 kWh; autoconsumo istantaneo senza accumulo circa il 30% dei consumi",
      "Eccedenza diurna media in primavera-estate: 12–15 kWh al giorno",
      "Consumo serale medio: circa 6–7 kWh al giorno",
      "Capacità utile ragionevole: 6–8 kWh; oltre, la batteria resterebbe spesso non scaricata"
     ],
     "appro": "Un accumulo sovradimensionato non aumenta l’autoconsumo: la capacità utile va confrontata con il consumo serale, non con l’eccedenza di produzione.",
     "rif": "CEI 0-21 · Guida tecnica GSE sui sistemi di accumulo",
     "nar": "Si propone un esempio applicativo di dimensionamento di un sistema di accumulo domestico. Una famiglia dispone di un impianto fotovoltaico da sei chilowatt di picco, con una produzione annua stimata di circa settemilaottocento chilowattora. Il consumo annuo è di quattromila chilowattora, di cui circa il sessanta per cento concentrato nelle ore serali e notturne, quando l’impianto non produce. Senza accumulo, la quota dei consumi coperta direttamente dall’impianto è di circa il trenta per cento. Nei mesi primaverili ed estivi l’impianto genera in media un’eccedenza diurna di dodici-quindici chilowattora al giorno, mentre il consumo serale medio della famiglia è di circa sei-sette chilowattora. La capacità utile ragionevole dell’accumulo è quindi di sei-otto chilowattora: una batteria più grande verrebbe caricata completamente, ma resterebbe spesso parzialmente carica al mattino, perché i consumi serali non bastano a scaricarla. Con questa capacità la quota di consumi coperta dall’energia solare può salire indicativamente oltre il sessanta per cento nei mesi favorevoli, mentre in inverno l’accumulo resta poco utilizzato per la scarsa produzione. L’esempio mostra un principio generale: la capacità utile va confrontata con il consumo serale, non con l’eccedenza di produzione, e la valutazione economica deve considerare anche la durata attesa e il degrado della batteria.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Ombreggiamenti, orientamento e disaccoppiamento dei moduli",
     "lead": "La produzione reale di un impianto dipende dall’orientamento, dall’inclinazione e soprattutto dagli ombreggiamenti, anche parziali.",
     "punti": [
      "In Italia l’orientamento ottimale è verso sud, con inclinazione indicativa di 30–35°",
      "Orientamenti est-ovest: minore produzione annua, ma curva giornaliera più ampia e utile all’autoconsumo",
      "Ombreggiamento parziale: in una stringa il modulo più ombreggiato limita la corrente di tutti",
      "Diodi di bypass: escludono le sezioni ombreggiate, limitando le perdite e i punti caldi",
      "Ottimizzatori e microinverter: gestione modulo per modulo dove gli ombreggiamenti non sono evitabili"
     ],
     "appro": "Uno studio degli ombreggiamenti su base annua, con il percorso del sole nelle diverse stagioni, va eseguito prima di definire la disposizione dei moduli.",
     "rif": "CEI 82-25 · UNI/TS 11300-4",
     "nar": "La produzione reale di un impianto fotovoltaico dipende dall’orientamento, dall’inclinazione dei moduli e soprattutto dagli ombreggiamenti. In Italia l’orientamento che massimizza la produzione annua è verso sud, con un’inclinazione indicativa di trenta-trentacinque gradi. Gli impianti orientati a est e a ovest producono meno nell’arco dell’anno, ma distribuiscono la produzione su un intervallo più ampio della giornata, al mattino e nel tardo pomeriggio, e possono quindi favorire l’autoconsumo e la condivisione. Gli ombreggiamenti, anche parziali, hanno effetti più rilevanti di quanto si possa intuire: in una stringa i moduli sono collegati in serie e attraversati dalla stessa corrente, per cui il modulo più ombreggiato tende a limitare la corrente dell’intera stringa. I diodi di bypass, integrati nei moduli, escludono le sezioni ombreggiate, riducendo le perdite e prevenendo il surriscaldamento localizzato delle celle, noto come punto caldo. Dove gli ombreggiamenti di camini, antenne, alberi o edifici vicini non sono evitabili, si possono impiegare ottimizzatori di potenza o microinverter, che gestiscono ciascun modulo in modo indipendente. Prima di definire la disposizione dei moduli è quindi necessario uno studio degli ombreggiamenti su base annua, che consideri il percorso del sole nelle diverse stagioni.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: il ritorno dell’investimento di un’impresa",
     "lead": "Un’impresa di lavorazioni meccaniche valuta un impianto da 100 kWp con un’analisi economica semplificata.",
     "punti": [
      "Investimento indicativo: 110.000 €; produzione annua stimata 125.000 kWh",
      "Autoconsumo: 75% della produzione, pari a 93.750 kWh, a un costo evitato ipotizzato di 0,20 €/kWh",
      "Risparmio annuo da autoconsumo circa 18.750 €; energia immessa valorizzata separatamente",
      "Costi di esercizio (manutenzione, assicurazione, monitoraggio) ipotizzati in circa 1.500 € all’anno",
      "Tempo di ritorno semplice indicativo: circa 6 anni, prima di imposte e incentivi fiscali"
     ],
     "appro": "Il tempo di ritorno semplice non considera il valore del denaro nel tempo né il degrado dei moduli: per decisioni di investimento si usano valore attuale netto e tasso interno di rendimento.",
     "rif": "Esempio didattico · Indicatori economici del Modulo 1",
     "nar": "Si propone un esempio applicativo di analisi economica semplificata. Un’impresa di lavorazioni meccaniche valuta un impianto fotovoltaico da cento chilowatt di picco sulla copertura del capannone, con un investimento indicativo di centodiecimila euro e una produzione annua stimata di centoventicinquemila chilowattora. Poiché le lavorazioni si svolgono nelle ore diurne dei giorni feriali, la quota di autoconsumo stimata è del settantacinque per cento della produzione, pari a circa novantatremilasettecentocinquanta chilowattora all’anno. Ipotizzando un costo evitato dell’energia prelevata di zero virgola venti euro per chilowattora, comprensivo delle componenti variabili della bolletta, il risparmio annuo derivante dall’autoconsumo è di circa diciottomilasettecentocinquanta euro; l’energia immessa in rete è valorizzata separatamente. I costi di esercizio, che comprendono manutenzione, assicurazione e monitoraggio, sono ipotizzati in circa millecinquecento euro all’anno. Il tempo di ritorno semplice risulta quindi di circa sei anni, prima delle imposte e di eventuali agevolazioni fiscali. Questo indicatore è utile come prima stima, ma non considera il valore del denaro nel tempo, il degrado progressivo dei moduli, la sostituzione dell’inverter e la variabilità dei prezzi dell’energia. Per una decisione di investimento si utilizzano il valore attuale netto e il tasso interno di rendimento, con ipotesi prudenti e analisi di sensibilità.",
     "est": true,
     "ancora": "Esempio applicativo: autoconsumo di un’officina"
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 3,
     "domande": [
      [
       "La potenza di un impianto fotovoltaico si esprime in:",
       [
        "kWp",
        "kWh",
        "tCO₂e",
        "Sm³"
       ],
       0,
       "Potenza di picco."
      ],
      [
       "L’energia autoconsumata istantaneamente:",
       [
        "Evita l’acquisto e gli oneri di rete",
        "Vale meno di quella immessa",
        "Non ha valore",
        "È tassata due volte"
       ],
       0,
       "Autoconsumo."
      ],
      [
       "La connessione in bassa tensione segue la norma:",
       [
        "CEI 0-21",
        "CEI 0-16",
        "CEI 11-27",
        "CEI 64-8/7 soltanto"
       ],
       0,
       "Connessione."
      ],
      [
       "Un accumulo serve a:",
       [
        "Aumentare l’autoconsumo",
        "Ridurre la produzione",
        "Evitare la connessione",
        "Nulla"
       ],
       0,
       "Accumulo."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 1.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Comunità energetiche e incentivi",
   "min": 120,
   "foto": "energia",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Comunità energetiche e incentivi",
     "nar": "Modulo 2: comunità energetiche e incentivi.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Le configurazioni di autoconsumo diffuso",
     "foto": false,
     "lead": "Il D.lgs. 199/2021 e il D.M. 7 dicembre 2023, n. 414 disciplinano l’autoconsumo da fonti rinnovabili in forma diffusa.",
     "punti": [
      "Comunità energetica rinnovabile (CER): soggetto giuridico autonomo con partecipazione aperta e volontaria di persone, PMI, enti locali e altri soggetti",
      "Gruppo di autoconsumatori che agiscono collettivamente: nello stesso edificio o condominio",
      "Autoconsumatore individuale «a distanza» che utilizza la rete di distribuzione",
      "Ambito: punti di connessione sottesi alla stessa cabina primaria per la quota incentivata",
      "Energia condivisa: per ogni ora, il minimo tra energia immessa dagli impianti e prelevata dai consumatori della configurazione"
     ],
     "appro": "L’obiettivo principale della CER deve essere fornire benefici ambientali, economici o sociali ai membri o alle aree locali, non profitti finanziari. Per le imprese, la partecipazione non può costituire l’attività commerciale o industriale principale.",
     "rif": "D.lgs. 199/2021, artt. 30-32 · D.M. 7 dicembre 2023, n. 414 · TIAD ARERA",
     "nar": "Il decreto 199 del 2021 e il decreto 414 del 2023 disciplinano l’autoconsumo diffuso: la comunità energetica rinnovabile, il gruppo di autoconsumatori nello stesso edificio e l’autoconsumatore a distanza. Gli incentivi riguardano l’energia condivisa, cioè per ogni ora il minimo tra immessa e prelevata, sotto la stessa cabina primaria.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il quadro europeo dell’autoconsumo collettivo",
     "lead": "Le comunità energetiche nascono dal pacchetto europeo «Energia pulita per tutti gli europei», che ha riconosciuto ai cittadini un ruolo attivo nel sistema energetico.",
     "punti": [
      "Direttiva (UE) 2018/2001 (RED II): comunità di energia rinnovabile e autoconsumatori che agiscono collettivamente",
      "Direttiva (UE) 2019/944: comunità energetiche dei cittadini e clienti attivi",
      "Principio: partecipazione aperta e volontaria, controllo effettivo dei membri, benefici prima dei profitti",
      "Recepimento in Italia: D.lgs. 199/2021 (RED II) e D.lgs. 210/2021 (mercato elettrico)",
      "Regolazione tecnica ed economica: ARERA (TIAD); incentivi: D.M. 414/2023, gestiti dal GSE"
     ],
     "appro": "Le comunità energetiche dei cittadini possono includere anche fonti non rinnovabili e hanno regole diverse dalle comunità di energia rinnovabile; il corso si concentra su queste ultime, che accedono agli incentivi.",
     "rif": "Dir. (UE) 2018/2001 · Dir. (UE) 2019/944 · D.lgs. 199/2021 · D.lgs. 210/2021",
     "nar": "Le comunità energetiche nascono dal pacchetto legislativo europeo noto come «Energia pulita per tutti gli europei», che ha riconosciuto ai cittadini, alle imprese e agli enti locali un ruolo attivo nel sistema energetico, non più soltanto come consumatori ma anche come produttori. Due direttive costituiscono il fondamento. La direttiva duemilauno del duemiladiciotto, nota come seconda direttiva sulle energie rinnovabili, ha introdotto le comunità di energia rinnovabile e gli autoconsumatori di energia rinnovabile che agiscono collettivamente. La direttiva novecentoquarantaquattro del duemiladiciannove, sul mercato interno dell’energia elettrica, ha introdotto le comunità energetiche dei cittadini e la figura del cliente attivo. I principi comuni sono la partecipazione aperta e volontaria, il controllo effettivo da parte dei membri e la prevalenza dei benefici ambientali, economici e sociali rispetto ai profitti finanziari. In Italia le direttive sono state recepite rispettivamente dal decreto legislativo centonovantanove e dal decreto legislativo duecentodieci del duemilaventuno. La regolazione tecnica ed economica è affidata all’ARERA con il testo integrato dell’autoconsumo diffuso, mentre gli incentivi sono disciplinati dal decreto ministeriale quattrocentoquattordici del duemilaventitré e gestiti dal Gestore dei servizi energetici. Il corso si concentra sulle comunità di energia rinnovabile, che accedono agli incentivi.",
     "est": true,
     "ancora": "Le configurazioni di autoconsumo diffuso"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le configurazioni previste dal TIAD",
     "lead": "Il Testo integrato dell’autoconsumo diffuso dell’ARERA disciplina diverse configurazioni, accomunate dal concetto di energia autoconsumata virtualmente attraverso la rete.",
     "punti": [
      "Gruppo di autoconsumatori di energia rinnovabile che agiscono collettivamente (stesso edificio o condominio)",
      "Comunità energetica rinnovabile (CER) e comunità energetica dei cittadini",
      "Autoconsumatore individuale di energia rinnovabile «a distanza» che utilizza la rete di distribuzione",
      "Autoconsumatore a distanza con linea diretta e altre configurazioni minori",
      "Modello «virtuale»: i contatori restano separati; la condivisione si calcola ora per ora sui dati di misura"
     ],
     "appro": "Il modello virtuale non richiede di modificare gli impianti elettrici dei partecipanti: ciascuno mantiene il proprio contratto di fornitura e libera scelta del venditore.",
     "rif": "TIAD – Deliberazione ARERA 727/2022/R/eel e s.m.i. · D.lgs. 199/2021, artt. 30–32",
     "nar": "Il testo integrato dell’autoconsumo diffuso, adottato dall’ARERA con la deliberazione settecentoventisette del duemilaventidue e successivamente aggiornato, disciplina diverse configurazioni, accomunate dal concetto di energia autoconsumata virtualmente attraverso la rete pubblica. Le principali sono quattro. Il gruppo di autoconsumatori di energia rinnovabile che agiscono collettivamente riunisce soggetti che si trovano nello stesso edificio o condominio. La comunità energetica rinnovabile è un soggetto giuridico autonomo che può riunire membri distribuiti sul territorio. L’autoconsumatore individuale a distanza è un unico soggetto che produce energia in un sito e la consuma in un altro, utilizzando la rete di distribuzione. Esistono poi configurazioni minori, come l’autoconsumatore a distanza con linea diretta. Tutte si basano su un modello virtuale: gli impianti elettrici e i contatori dei partecipanti restano separati, ciascuno mantiene il proprio contratto di fornitura e la libera scelta del venditore, e la condivisione viene calcolata ora per ora a partire dai dati di misura dell’energia immessa e prelevata. Questo modello consente di costituire una configurazione senza modificare gli impianti esistenti dei partecipanti, con evidenti vantaggi pratici rispetto a soluzioni basate su reti private.",
     "est": true,
     "ancora": "Le configurazioni di autoconsumo diffuso"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il perimetro della cabina primaria",
     "lead": "Per accedere alla tariffa premio sull’energia condivisa, impianti e consumatori devono essere collegati alla rete sottesa alla stessa cabina primaria.",
     "punti": [
      "Cabina primaria: impianto di trasformazione tra alta e media tensione che alimenta una porzione di territorio",
      "Il GSE pubblica una mappa interattiva delle aree sottese alle cabine primarie",
      "Una CER può comprendere membri in aree di cabine diverse, ma l’incentivo si calcola per ciascuna cabina",
      "La verifica si effettua con il codice del punto di prelievo (POD) di ogni partecipante",
      "Comuni diversi possono ricadere nella stessa cabina e uno stesso Comune in più cabine"
     ],
     "appro": "La verifica della cabina primaria è il primo controllo da fare quando si raccolgono le adesioni: un membro esterno al perimetro partecipa alla comunità ma non genera energia condivisa incentivata con gli impianti di un’altra cabina.",
     "rif": "D.M. 414/2023 · Regole operative del GSE · TIAD ARERA",
     "nar": "Il criterio territoriale che determina l’accesso agli incentivi è la cabina primaria. Si tratta dell’impianto di trasformazione che collega la rete di alta tensione a quella di media tensione e che alimenta una porzione di territorio; tutte le utenze e gli impianti collegati alla rete a valle di quella cabina si dicono sottesi alla stessa cabina primaria. Per ottenere la tariffa premio sull’energia condivisa, l’impianto di produzione e i consumatori con cui l’energia viene condivisa devono essere sottesi alla medesima cabina. Il Gestore dei servizi energetici pubblica una mappa interattiva che consente di individuare le aree di ciascuna cabina; la verifica puntuale si effettua con il codice del punto di prelievo di ogni partecipante, riportato in bolletta. Una comunità energetica può comprendere membri collegati a cabine diverse, ma l’energia condivisa incentivata si calcola separatamente per ciascuna cabina. Occorre inoltre considerare che i confini delle cabine non coincidono con quelli amministrativi: Comuni diversi possono ricadere nella stessa cabina e uno stesso Comune può essere servito da più cabine. Per questo la verifica della cabina primaria è il primo controllo da eseguire quando si raccolgono le adesioni dei futuri membri e si valuta la collocazione degli impianti.",
     "est": true,
     "ancora": "Le configurazioni di autoconsumo diffuso"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Requisiti degli impianti",
     "lead": "Non ogni impianto può accedere agli incentivi della comunità: il decreto stabilisce requisiti di potenza, di data e di nuova realizzazione.",
     "punti": [
      "Impianti alimentati da fonti rinnovabili, di potenza singola non superiore a 1 MW",
      "Impianti nuovi o potenziamenti, entrati in esercizio dopo l’entrata in vigore del D.lgs. 199/2021",
      "Impianti nella disponibilità della comunità, anche di proprietà di un produttore terzo",
      "Rispetto dei requisiti costruttivi e di tutela ambientale previsti dalle regole operative",
      "Gli impianti già esistenti possono partecipare con limiti, senza tariffa premio sulla loro energia"
     ],
     "appro": "Per gli impianti realizzati prima della costituzione della comunità è essenziale che la loro entrata in esercizio sia successiva alla costituzione o che ricorrano le condizioni previste dalle regole operative: la sequenza delle date va pianificata.",
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023 · Regole operative del GSE",
     "nar": "Non ogni impianto può accedere agli incentivi previsti per le configurazioni di autoconsumo diffuso. Il decreto legislativo centonovantanove e il decreto ministeriale quattrocentoquattordici stabiliscono requisiti precisi. Gli impianti devono essere alimentati da fonti rinnovabili, con una potenza singola non superiore a un megawatt. Devono essere impianti nuovi o potenziamenti di impianti esistenti, limitatamente alla potenza aggiunta, entrati in esercizio dopo l’entrata in vigore del decreto legislativo centonovantanove del duemilaventuno. Gli impianti devono essere nella disponibilità della comunità: possono essere di sua proprietà oppure di un produttore terzo che li mette a disposizione, anche ricevendo un corrispettivo. Devono inoltre rispettare i requisiti costruttivi e di tutela ambientale previsti dalle regole operative del Gestore dei servizi energetici. Gli impianti già esistenti al momento dell’entrata in vigore del decreto possono partecipare alla configurazione entro determinati limiti, ma la loro energia non dà diritto alla tariffa premio. Un aspetto delicato riguarda la sequenza temporale: le regole operative stabiliscono condizioni sulla relazione tra la data di entrata in esercizio dell’impianto e quella di costituzione della comunità. Per questo la pianificazione delle date è parte integrante della progettazione di una configurazione.",
     "est": true,
     "ancora": "Le configurazioni di autoconsumo diffuso"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Comunità di energia rinnovabile e comunità energetica dei cittadini",
     "lead": "Le due figure hanno origine in direttive diverse e rispondono a regole diverse su membri, fonti e perimetro.",
     "punti": [
      "Comunità di energia rinnovabile (CER): solo fonti rinnovabili, membri vicini agli impianti, accesso agli incentivi del D.M. 414/2023",
      "Comunità energetica dei cittadini (CEC): può includere fonti non rinnovabili e svolgere più attività nel settore elettrico",
      "CEC: membri persone fisiche, piccole imprese, enti; controllo da parte di soggetti che non svolgono attività energetica su larga scala",
      "Entrambe: partecipazione aperta e volontaria, benefici prima dei profitti",
      "La scelta dipende dalle attività che si intendono svolgere e dall’accesso agli incentivi"
     ],
     "appro": "Nella pratica italiana la grande maggioranza delle iniziative assume la forma di comunità di energia rinnovabile, proprio per l’accesso alla tariffa premio sull’energia condivisa.",
     "rif": "D.lgs. 199/2021, art. 31 · D.lgs. 210/2021, art. 14",
     "nar": "Il legislatore europeo ha introdotto due figure di comunità energetica, con origini e regole diverse. La comunità di energia rinnovabile deriva dalla seconda direttiva sulle rinnovabili ed è stata recepita in Italia dal decreto legislativo centonovantanove del duemilaventuno: utilizza esclusivamente fonti rinnovabili, i suoi membri devono essere situati in prossimità degli impianti e può accedere agli incentivi del decreto ministeriale quattrocentoquattordici. La comunità energetica dei cittadini deriva invece dalla direttiva sul mercato elettrico ed è stata recepita dal decreto legislativo duecentodieci del duemilaventuno: può includere anche fonti non rinnovabili e può svolgere più attività nel settore elettrico, come la fornitura, la distribuzione, l’aggregazione o i servizi di efficienza energetica. Anche nella comunità energetica dei cittadini il controllo spetta a membri che non svolgono attività energetica su larga scala. Entrambe le figure si basano sulla partecipazione aperta e volontaria e sulla prevalenza dei benefici ambientali, economici e sociali rispetto ai profitti. La scelta tra le due forme dipende dalle attività che si intendono svolgere e dall’accesso agli incentivi. Nella pratica italiana la grande maggioranza delle iniziative assume la forma di comunità di energia rinnovabile, proprio per la possibilità di ottenere la tariffa premio sull’energia condivisa.",
     "est": true,
     "ancora": "Requisiti degli impianti"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il percorso di costituzione passo per passo",
     "lead": "La nascita di una comunità segue una sequenza ordinata di fasi tecniche, giuridiche e amministrative.",
     "punti": [
      "1. Studio di fattibilità: cabina primaria, superfici, profili di consumo, piano economico",
      "2. Aggregazione dei membri: informazione, raccolta delle adesioni e dei codici POD",
      "3. Costituzione del soggetto giuridico: atto costitutivo, statuto, regolamento",
      "4. Realizzazione e connessione degli impianti, nel rispetto della sequenza delle date",
      "5. Richiesta di accesso al servizio sul portale del GSE e avvio della gestione"
     ],
     "appro": "Le fasi non sono rigidamente sequenziali: la raccolta delle adesioni e lo studio di fattibilità si alimentano a vicenda, ma la costituzione va formalizzata prima dell’entrata in esercizio degli impianti nei casi previsti.",
     "rif": "D.lgs. 199/2021 · D.M. 414/2023 · Regole operative del GSE",
     "nar": "La costituzione di una comunità energetica rinnovabile segue una sequenza ordinata di fasi tecniche, giuridiche e amministrative. La prima è lo studio di fattibilità: si verifica la cabina primaria di riferimento, si individuano le superfici disponibili per gli impianti, si raccolgono i profili di consumo dei potenziali membri e si elabora il piano economico. La seconda è l’aggregazione dei membri: si informano cittadini, imprese ed enti, anche con incontri pubblici, e si raccolgono le adesioni con i codici dei punti di prelievo, necessari per le verifiche. La terza è la costituzione del soggetto giuridico, con l’atto costitutivo, lo statuto conforme ai requisiti di legge e il regolamento interno. La quarta è la realizzazione e la connessione degli impianti, che deve rispettare la sequenza delle date prevista dalle regole operative. La quinta è la richiesta di accesso al servizio di autoconsumo diffuso sul portale del Gestore dei servizi energetici, seguita dall’avvio della gestione ordinaria. Le fasi non sono rigidamente sequenziali: la raccolta delle adesioni e lo studio di fattibilità si alimentano a vicenda. Tuttavia la costituzione della comunità va formalizzata prima dell’entrata in esercizio degli impianti nei casi previsti, perché un errore nella sequenza può precludere l’accesso alla tariffa.",
     "est": true,
     "ancora": "Requisiti degli impianti"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "L’accumulo nelle configurazioni di autoconsumo",
     "lead": "Un sistema di accumulo può aumentare l’energia condivisa spostando nelle ore serali la produzione eccedente.",
     "punti": [
      "Accumulo associato all’impianto: l’energia immessa durante la scarica può contribuire alla condivisione",
      "Utile quando la comunità ha consumi serali rilevanti e produzione diurna eccedente",
      "Va valutato il costo dell’accumulo rispetto all’incremento di tariffa premio ottenuto",
      "Regole di misura e di computo definite dalla regolazione e dalle regole operative",
      "Alternativa spesso più economica: aumentare i membri con consumi diurni"
     ],
     "appro": "Prima di investire in un accumulo conviene simulare, con i dati orari reali, l’incremento effettivo di energia condivisa nelle diverse stagioni.",
     "rif": "TIAD ARERA · Regole operative del GSE",
     "nar": "Nelle configurazioni di autoconsumo diffuso un sistema di accumulo associato all’impianto di produzione può aumentare l’energia condivisa. Durante le ore centrali della giornata, quando la produzione supera i consumi dei membri, l’accumulo immagazzina l’energia eccedente; nelle ore serali, quando la produzione si annulla e i consumi delle famiglie crescono, l’accumulo la restituisce alla rete, e l’energia immessa durante la scarica può contribuire alla condivisione secondo le regole di misura e di computo stabilite dalla regolazione e dalle regole operative. L’accumulo è utile soprattutto quando la comunità ha consumi serali rilevanti e una produzione diurna eccedente rispetto ai consumi dei membri nelle stesse ore. La sua convenienza va però valutata confrontando il costo dell’investimento e della sostituzione nel tempo con l’incremento di tariffa premio effettivamente ottenuto. Prima di decidere è opportuno simulare, con i dati orari reali dei membri, l’incremento di energia condivisa nelle diverse stagioni. Spesso esiste un’alternativa più economica: aumentare la quota di membri con consumi diurni, come attività commerciali, uffici e piccole imprese, oppure incentivare lo spostamento dei carichi dei membri esistenti nelle ore di produzione.",
     "est": true,
     "ancora": "Requisiti degli impianti"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Informare e coinvolgere i cittadini",
     "lead": "Il successo di una comunità dipende dalla fiducia e dalla partecipazione consapevole dei membri.",
     "punti": [
      "Incontri pubblici con informazioni chiare su benefici, costi, impegni e diritti",
      "Materiali comprensibili: esempi numerici prudenti, nessuna promessa di risparmio garantito",
      "Trasparenza su chi realizza gli impianti, chi li possiede e come si ripartiscono i benefici",
      "Coinvolgimento delle scuole e delle associazioni del territorio",
      "Rendiconto periodico ai membri sull’energia condivisa e sui benefici erogati"
     ],
     "appro": "Promesse eccessive di risparmio generano delusione e recessi: è preferibile presentare stime prudenti, spiegando le variabili da cui dipendono i risultati.",
     "rif": "D.lgs. 199/2021, art. 31 · D.lgs. 206/2005 (pratiche commerciali)",
     "nar": "Il successo di una comunità energetica dipende in larga misura dalla fiducia e dalla partecipazione consapevole dei membri. La fase di informazione merita quindi la stessa cura della progettazione tecnica. Gli incontri pubblici devono fornire informazioni chiare sui benefici attesi, sui costi, sugli impegni richiesti ai membri e sui loro diritti, compreso quello di recesso. I materiali informativi devono essere comprensibili, con esempi numerici prudenti e senza promesse di risparmio garantito: la tariffa premio dipende dall’energia effettivamente condivisa e dai prezzi di mercato, che non sono prevedibili con certezza. Occorre essere trasparenti su chi realizza gli impianti, chi ne è proprietario, quali corrispettivi riceve l’eventuale produttore terzo e come vengono ripartiti i benefici. Il coinvolgimento delle scuole e delle associazioni del territorio favorisce la diffusione delle informazioni e la consapevolezza energetica. Una volta avviata la comunità, il rendiconto periodico ai membri sull’energia condivisa, sui benefici erogati e sui costi sostenuti rafforza la fiducia. L’esperienza mostra che le promesse eccessive di risparmio generano delusione e recessi, mentre stime prudenti, accompagnate dalla spiegazione delle variabili da cui dipendono i risultati, costruiscono comunità stabili nel tempo.",
     "est": true,
     "ancora": "Requisiti degli impianti"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: la condivisione in una giornata tipo",
     "lead": "Una tabella oraria semplificata mostra come si accumula l’energia condivisa nell’arco di una giornata feriale di primavera.",
     "punti": [
      "Ore 8–10: produzione 30 kWh, prelievi dei membri 45 kWh → condivisi 30 kWh",
      "Ore 10–14: produzione 140 kWh, prelievi 90 kWh → condivisi 90 kWh, eccedenza 50 kWh",
      "Ore 14–18: produzione 70 kWh, prelievi 80 kWh → condivisi 70 kWh",
      "Ore 18–22: produzione 0 kWh, prelievi 110 kWh → condivisi 0 kWh",
      "Totale: prodotti 240 kWh, condivisi 190 kWh (79% della produzione)"
     ],
     "appro": "La percentuale di energia condivisa varia molto con la stagione e con il giorno della settimana: nei festivi, se i membri sono soprattutto attività produttive, la condivisione crolla.",
     "rif": "TIAD ARERA · D.M. 414/2023",
     "nar": "Si propone un esempio applicativo semplificato della condivisione in una giornata feriale di primavera, raggruppando le ore in fasce. Tra le otto e le dieci l’impianto produce trenta chilowattora e i membri ne prelevano quarantacinque: l’energia condivisa è pari alla produzione, cioè trenta chilowattora. Tra le dieci e le quattordici la produzione sale a centoquaranta chilowattora, mentre i prelievi sono novanta: l’energia condivisa è di novanta chilowattora e i restanti cinquanta costituiscono un’eccedenza, venduta ma non incentivata. Tra le quattordici e le diciotto la produzione è di settanta chilowattora e i prelievi di ottanta: si condividono settanta chilowattora. Tra le diciotto e le ventidue la produzione è nulla e, nonostante prelievi elevati, la condivisione è zero. Nel totale della giornata l’impianto produce duecentoquaranta chilowattora, di cui centonovanta condivisi, pari al settantanove per cento della produzione. Nella realtà il calcolo è eseguito ora per ora e non per fasce, e la percentuale varia molto con la stagione e con il giorno della settimana: nei giorni festivi, se i membri sono soprattutto attività produttive, la condivisione può ridursi drasticamente. L’esempio mostra anche dove intervenire: l’eccedenza delle ore centrali e i consumi serali indicano l’utilità di nuovi membri diurni o di un accumulo.",
     "est": true,
     "ancora": "Requisiti degli impianti"
    },
    {
     "t": "confronto",
     "tit": "Comunità energetica rinnovabile e gruppo di autoconsumatori: criteri di scelta",
     "sx": {
      "ico": "FaPeopleGroup",
      "tit": "Comunità energetica rinnovabile",
      "voci": [
       "Soggetto giuridico autonomo",
       "Membri diversi nell’area della cabina primaria",
       "Partecipazione aperta e volontaria",
       "Benefici per membri e territorio"
      ]
     },
     "dx": {
      "ico": "FaBuilding",
      "tit": "Gruppo di autoconsumatori",
      "voci": [
       "Nello stesso edificio o condominio",
       "Nessun nuovo soggetto giuridico necessario",
       "Mandato a un referente",
       "Regolamento interno di riparto"
      ]
     },
     "nar": "La comunità energetica è un soggetto giuridico autonomo, con membri diversi sotto la stessa cabina primaria e partecipazione aperta. Il gruppo di autoconsumatori riguarda un solo edificio o condominio e opera con un referente e un regolamento di riparto, senza creare un nuovo soggetto.",
     "p": 1.2
    },
    {
     "t": "testo",
     "tit": "Costituzione e governance della CER",
     "foto": false,
     "lead": "La CER è un soggetto di diritto autonomo che deve rispettare requisiti precisi.",
     "punti": [
      "Forme giuridiche: associazione, cooperativa, fondazione, ente del terzo settore, consorzio o altra forma con statuto conforme",
      "Membri ammessi: persone fisiche, PMI, enti territoriali e autorità locali, enti di ricerca, religiosi e del terzo settore; il controllo resta ai membri non professionali del settore energetico",
      "Per le imprese la partecipazione non può costituire l’attività commerciale o industriale principale",
      "Impianti: di proprietà della CER o nella sua disponibilità, anche realizzati da un produttore terzo; nuovi impianti secondo le regole del decreto",
      "Referente verso il GSE, contratto di mandato e regolamento di riparto dei benefici"
     ],
     "appro": "Lo statuto deve indicare come oggetto sociale prevalente i benefici ambientali, economici o sociali per membri e territorio e garantire il diritto di recesso dei membri. Il GSE verifica i requisiti in fase di accesso agli incentivi.",
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023 · regole operative GSE",
     "nar": "La comunità energetica si costituisce come associazione, cooperativa, fondazione, ente del terzo settore o altra forma conforme. Possono aderire persone fisiche, PMI, enti locali e altri soggetti; per le imprese la partecipazione non può essere l’attività principale. Gli impianti possono essere realizzati anche da un produttore terzo. Servono referente, mandato e regolamento di riparto.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Lo statuto e il regolamento della comunità",
     "lead": "I documenti fondativi della comunità devono rispettare i requisiti di legge e definire in modo chiaro diritti e doveri dei membri.",
     "punti": [
      "Oggetto sociale prevalente: benefici ambientali, economici o sociali per membri e territorio",
      "Partecipazione aperta e volontaria; diritto di recesso con le modalità stabilite",
      "Controllo esercitato dai membri ammessi; esclusione dei soggetti per cui l’energia è attività principale",
      "Regolamento interno: riparto dei benefici, costi di gestione, rapporti con il produttore terzo",
      "Individuazione del referente verso il GSE e mandato per la gestione dei rapporti"
     ],
     "appro": "Un regolamento chiaro sul riparto dei benefici previene i conflitti: i membri devono sapere in anticipo come e quando riceveranno la loro quota.",
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023 · Regole operative del GSE",
     "nar": "I documenti fondativi della comunità energetica rinnovabile, cioè l’atto costitutivo, lo statuto e il regolamento interno, devono rispettare i requisiti di legge e definire in modo chiaro i diritti e i doveri dei membri. Lo statuto deve indicare come oggetto sociale prevalente il conseguimento di benefici ambientali, economici o sociali a favore dei membri o delle aree locali in cui la comunità opera, e non la realizzazione di profitti finanziari. Deve garantire una partecipazione aperta e volontaria e il diritto di recesso dei membri, con le modalità e gli eventuali corrispettivi stabiliti. Il controllo della comunità deve essere esercitato dai membri ammessi, con l’esclusione dei soggetti per i quali la produzione o la vendita di energia costituisce l’attività commerciale o industriale principale. Il regolamento interno disciplina gli aspetti operativi: i criteri di riparto dei benefici, i costi di gestione a carico della comunità, i rapporti con l’eventuale produttore terzo che mette a disposizione gli impianti, le modalità di rendicontazione. Occorre infine individuare il referente della configurazione verso il Gestore dei servizi energetici e conferirgli il mandato per la gestione dei rapporti. Un regolamento chiaro sul riparto dei benefici previene i conflitti: i membri devono sapere in anticipo come e quando riceveranno la propria quota.",
     "est": true,
     "ancora": "Costituzione e governance della CER"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Criteri di riparto dei benefici",
     "lead": "Il regolamento interno può adottare criteri diversi, purché trasparenti, coerenti con lo statuto e rispettosi dei vincoli del decreto.",
     "punti": [
      "Remunerazione degli impianti: quota ai produttori o al produttore terzo per l’investimento sostenuto",
      "Ripartizione ai consumatori in proporzione al contributo orario all’energia condivisa",
      "Quote fisse per membro, utili a coinvolgere famiglie con consumi ridotti",
      "Fondo per finalità sociali o per interventi di efficienza energetica sul territorio",
      "Copertura dei costi di gestione: misure, piattaforma, contabilità, assicurazioni"
     ],
     "appro": "Ripartire in base al contributo orario premia i membri che consumano nelle ore di produzione e incentiva lo spostamento dei carichi, migliorando i risultati di tutta la comunità.",
     "rif": "D.M. 414/2023 · Regole operative del GSE",
     "nar": "Il regolamento interno può adottare diversi criteri di riparto dei benefici, purché trasparenti, coerenti con lo statuto e rispettosi dei vincoli previsti dal decreto, in particolare quello relativo alle imprese. Una prima quota è di norma destinata alla remunerazione degli impianti, cioè dei produttori o del produttore terzo che ha sostenuto l’investimento. Una seconda quota viene ripartita tra i consumatori, spesso in proporzione al contributo orario di ciascuno all’energia condivisa: chi consuma nelle ore di produzione contribuisce di più alla condivisione e riceve una quota maggiore. Questo criterio ha anche un effetto educativo, perché incentiva i membri a spostare i carichi nelle ore di sole, migliorando il risultato dell’intera comunità. Alcune comunità prevedono quote fisse per membro, utili a coinvolgere famiglie con consumi ridotti. Una parte dei benefici può alimentare un fondo per finalità sociali, come il sostegno alle famiglie in povertà energetica, o per interventi di efficienza energetica sul territorio. Infine, il regolamento deve prevedere la copertura dei costi di gestione: acquisizione e trattamento dei dati di misura, piattaforma informatica, contabilità, adempimenti fiscali e assicurazioni. Trascurare questi costi è uno degli errori più frequenti nei piani economici delle comunità.",
     "est": true,
     "ancora": "Costituzione e governance della CER"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il ruolo degli enti locali e del terzo settore",
     "lead": "Comuni, parrocchie e associazioni sono spesso i promotori delle comunità, per la loro capacità di aggregare e per le superfici disponibili.",
     "punti": [
      "Enti locali: possono essere membri, mettere a disposizione coperture pubbliche e promuovere l’informazione",
      "Gli affidamenti e le concessioni devono rispettare le regole della contrattualistica pubblica",
      "Enti religiosi e del terzo settore: membri ammessi, con forte radicamento nella comunità locale",
      "Contrasto alla povertà energetica tramite quote destinate alle famiglie vulnerabili",
      "Funzione di garanzia: il soggetto pubblico rafforza la fiducia dei cittadini nella comunità"
     ],
     "appro": "La partecipazione di un ente locale non trasforma la comunità in un ente pubblico: restano la natura privatistica e l’autonomia, ma l’ente deve rispettare le proprie regole di trasparenza e di gestione del patrimonio.",
     "rif": "D.lgs. 199/2021, art. 31 · D.lgs. 36/2023 (codice dei contratti pubblici)",
     "nar": "Gli enti locali, gli enti religiosi e le organizzazioni del terzo settore sono spesso i promotori delle comunità energetiche, grazie alla loro capacità di aggregare i cittadini e alla disponibilità di superfici adatte agli impianti. Un Comune può essere membro della comunità, mettere a disposizione le coperture degli edifici pubblici e promuovere l’informazione ai cittadini e alle imprese. Gli affidamenti di servizi, le concessioni di superfici e la scelta di eventuali partner devono però rispettare le regole della contrattualistica pubblica, oggi contenute nel codice dei contratti pubblici del duemilaventitré, e le norme sulla gestione del patrimonio pubblico. Gli enti religiosi e del terzo settore sono membri ammessi e portano un forte radicamento nella comunità locale. Uno degli obiettivi più significativi di queste comunità è il contrasto alla povertà energetica, attraverso quote dei benefici destinate alle famiglie vulnerabili. Il soggetto pubblico svolge anche una funzione di garanzia, rafforzando la fiducia dei cittadini nell’iniziativa. Occorre però chiarire che la partecipazione di un ente locale non trasforma la comunità in un ente pubblico: essa mantiene la propria natura privatistica e la propria autonomia, mentre l’ente partecipante continua a rispettare le proprie regole di trasparenza e di gestione.",
     "est": true,
     "ancora": "Costituzione e governance della CER"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il piano economico di una comunità",
     "lead": "Prima di costituire una comunità è necessario un piano economico che stimi ricavi, costi e rischi nell’arco dei vent’anni di incentivazione.",
     "punti": [
      "Ricavi: vendita dell’energia immessa, tariffa premio, restituzione delle componenti tariffarie",
      "Costi di investimento: impianti, connessioni, progettazione, costituzione della comunità",
      "Costi ricorrenti: manutenzione, assicurazioni, gestione dei dati, contabilità, referente",
      "Variabili critiche: energia condivisa, prezzo zonale, adesioni e recessi dei membri",
      "Analisi di sensibilità: scenari con condivisione e prezzi più bassi del previsto"
     ],
     "appro": "La variabile più incerta è l’energia condivisa, che dipende dal comportamento dei membri: stimarla con i dati orari reali di un campione di membri riduce sensibilmente il rischio di sovrastima.",
     "rif": "D.M. 414/2023 · TIAD ARERA",
     "nar": "Prima di costituire una comunità energetica è necessario predisporre un piano economico che stimi ricavi, costi e rischi nell’arco dei vent’anni di incentivazione. I ricavi sono di tre tipi: la vendita dell’energia immessa, la tariffa premio sull’energia condivisa e la restituzione delle componenti tariffarie. I costi di investimento comprendono gli impianti, le connessioni alla rete, la progettazione e gli oneri di costituzione della comunità. I costi ricorrenti comprendono la manutenzione degli impianti, le assicurazioni, la gestione dei dati di misura, la contabilità e gli adempimenti, e l’eventuale compenso del referente o del gestore. Alcune variabili sono critiche. La più incerta è l’energia condivisa, che dipende dal profilo orario dei consumi dei membri e dal loro comportamento; seguono il prezzo zonale dell’energia, che influenza sia la vendita sia la parte variabile della tariffa, e la stabilità della compagine, perché adesioni e recessi modificano la condivisione. Per questo il piano deve includere un’analisi di sensibilità, con scenari in cui l’energia condivisa e i prezzi risultano inferiori al previsto. Una buona pratica consiste nello stimare la condivisione utilizzando i dati orari reali di un campione rappresentativo di membri, anziché profili standard, riducendo sensibilmente il rischio di sovrastima.",
     "est": true,
     "ancora": "Costituzione e governance della CER"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Gli errori più frequenti nella progettazione",
     "lead": "Molte comunità incontrano difficoltà per errori evitabili nella fase di progettazione.",
     "punti": [
      "Membri e impianti in cabine primarie diverse, scoperti dopo la costituzione",
      "Compagine sbilanciata: solo consumi serali, energia condivisa molto inferiore alle attese",
      "Sequenza delle date errata tra costituzione della comunità ed entrata in esercizio degli impianti",
      "Costi di gestione non considerati nel piano economico",
      "Statuto non conforme ai requisiti: membri non ammessi in posizione di controllo"
     ],
     "appro": "Una lista di controllo preliminare con cabina primaria, profili orari, date, statuto e piano economico riduce la maggior parte di questi rischi.",
     "rif": "D.lgs. 199/2021 · D.M. 414/2023 · Regole operative del GSE",
     "nar": "L’esperienza dei primi anni di applicazione mostra che molte comunità incontrano difficoltà a causa di errori evitabili nella fase di progettazione. Il primo errore riguarda il perimetro: membri e impianti collegati a cabine primarie diverse, circostanza scoperta solo dopo la costituzione, con la conseguenza che una parte dell’energia non risulta condivisa ai fini dell’incentivo. Il secondo riguarda la composizione della compagine: una comunità formata solo da famiglie con consumi prevalentemente serali condivide poca energia rispetto alla produzione fotovoltaica diurna, e i benefici risultano molto inferiori alle attese. Il terzo errore riguarda la sequenza delle date: le regole operative stabiliscono condizioni sulla relazione tra la costituzione della comunità e l’entrata in esercizio degli impianti, e un errore può precludere l’accesso alla tariffa. Il quarto è l’omissione dei costi di gestione nel piano economico. Il quinto riguarda lo statuto: requisiti non rispettati, come la presenza di membri non ammessi in posizione di controllo, possono comportare il diniego dell’incentivo in sede di verifica. Una lista di controllo preliminare, che verifichi cabina primaria, profili orari dei membri, date, conformità dello statuto e piano economico, riduce la maggior parte di questi rischi e dovrebbe precedere ogni costituzione.",
     "est": true,
     "ancora": "Costituzione e governance della CER"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: una comunità promossa da un Comune",
     "lead": "Un piccolo Comune promuove una comunità con impianti sulle coperture pubbliche e l’adesione di famiglie, attività commerciali e una scuola.",
     "punti": [
      "Impianti: 120 kWp sul polo scolastico e 60 kWp sul magazzino comunale, nella stessa cabina primaria",
      "Membri: Comune, scuola, 80 famiglie, 12 attività commerciali, una parrocchia",
      "Consumi diurni della scuola e delle attività commerciali: buona condivisione nei giorni feriali",
      "Riparto: remunerazione degli impianti, quote ai membri, fondo per famiglie in difficoltà",
      "Criticità: estate con scuola chiusa e minore condivisione; da compensare con nuove adesioni"
     ],
     "appro": "L’esempio è didattico: le scelte reali dipendono dai dati orari dei membri, dalle regole della contrattualistica pubblica e dalla disciplina vigente degli incentivi.",
     "rif": "D.lgs. 199/2021 · D.M. 414/2023 · D.lgs. 36/2023",
     "nar": "Si propone un esempio applicativo. Un piccolo Comune decide di promuovere una comunità energetica rinnovabile, realizzando due impianti fotovoltaici sulle coperture pubbliche: centoventi chilowatt di picco sul polo scolastico e sessanta chilowatt sul magazzino comunale, entrambi sottesi alla stessa cabina primaria. Aderiscono il Comune, la scuola, ottanta famiglie, dodici attività commerciali e la parrocchia. La scuola e le attività commerciali hanno consumi concentrati nelle ore diurne dei giorni feriali e garantiscono una buona condivisione dell’energia prodotta. Il regolamento interno prevede tre destinazioni dei benefici: la remunerazione degli impianti realizzati dal Comune, le quote ai membri in proporzione al contributo orario alla condivisione e un fondo destinato alle famiglie in difficoltà economica. L’analisi evidenzia però una criticità: nei mesi estivi la scuola è chiusa proprio quando la produzione è massima, e la condivisione si riduce. Per compensare, la comunità promuove l’adesione di attività con consumi estivi, come strutture turistiche e attività artigianali. L’esempio è didattico: le scelte reali dipendono dai dati orari dei membri, dalle regole della contrattualistica pubblica per le scelte del Comune e dalla disciplina vigente degli incentivi.",
     "est": true,
     "ancora": "Gli errori più frequenti nella progettazione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: una comunità in un’area industriale",
     "lead": "In una zona industriale più piccole e medie imprese costituiscono una comunità sfruttando le coperture dei capannoni.",
     "punti": [
      "Membri: PMI della zona industriale; le grandi imprese possono mettere impianti a disposizione come produttori terzi",
      "Elevata coincidenza tra produzione diurna e consumi delle lavorazioni",
      "Rischio: superamento della soglia di condivisione oltre la quale la tariffa eccedente va a consumatori diversi dalle imprese",
      "Soluzione: coinvolgere famiglie ed enti del territorio o prevedere finalità sociali",
      "Attenzione al periodo di chiusura estiva delle imprese"
     ],
     "appro": "Le comunità composte prevalentemente da imprese condividono molta energia, ma devono rispettare il vincolo di destinazione della tariffa eccedente previsto dal decreto.",
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023",
     "nar": "Si consideri un secondo esempio applicativo: in una zona industriale, diverse piccole e medie imprese costituiscono una comunità energetica rinnovabile sfruttando le ampie coperture dei capannoni. Le piccole e medie imprese sono membri ammessi; una grande impresa della zona, che non può essere membro con poteri di controllo, mette a disposizione un proprio impianto come produttore terzo, ricevendo un corrispettivo. La coincidenza tra la produzione fotovoltaica diurna e i consumi delle lavorazioni è elevata, e l’energia condivisa risulta una quota molto alta della produzione. Proprio questo elemento comporta un rischio: se l’energia condivisa supera la soglia del cinquantacinque per cento dell’energia immessa, la quota di tariffa relativa all’eccedenza deve essere destinata esclusivamente a consumatori diversi dalle imprese o a finalità sociali. La comunità può gestire questa situazione coinvolgendo famiglie ed enti del territorio, ad esempio i residenti delle aree vicine, oppure prevedendo nel regolamento destinazioni sociali per la quota eccedente. Un ulteriore aspetto da considerare è il periodo di chiusura estiva delle imprese, che coincide con la massima produzione: senza membri con consumi in quel periodo, la condivisione di agosto può ridursi drasticamente.",
     "est": true,
     "ancora": "Gli errori più frequenti nella progettazione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Diritti dei membri come clienti finali",
     "lead": "La partecipazione a una configurazione non limita i diritti dei membri come clienti del sistema elettrico.",
     "punti": [
      "Ciascun membro mantiene il proprio contratto di fornitura e la libera scelta del venditore",
      "Diritto di uscire dalla configurazione con le modalità stabilite dallo statuto e dal regolamento",
      "Tutele dei clienti finali previste dalla regolazione ARERA, comprese quelle per i clienti vulnerabili",
      "Diritto a informazioni chiare su benefici, costi e trattamento dei dati",
      "Trattamento dei dati di consumo nel rispetto del Reg. (UE) 2016/679"
     ],
     "appro": "I dati orari di consumo rivelano abitudini e presenze: il loro trattamento richiede base giuridica, informativa e misure di sicurezza adeguate.",
     "rif": "D.lgs. 199/2021, art. 31 · Reg. (UE) 2016/679",
     "nar": "La partecipazione a una comunità energetica o a un’altra configurazione di autoconsumo diffuso non limita i diritti dei membri come clienti del sistema elettrico. Ciascun membro mantiene il proprio contratto di fornitura con il venditore che ha scelto e può cambiarlo liberamente, perché la condivisione avviene in modo virtuale e non interferisce con la fornitura. Il membro ha il diritto di uscire dalla configurazione con le modalità stabilite dallo statuto e dal regolamento, che possono prevedere un preavviso e, nei casi previsti, un corrispettivo equo e proporzionato. Restano applicabili le tutele dei clienti finali previste dalla regolazione dell’ARERA, comprese quelle per i clienti vulnerabili. I membri hanno inoltre diritto a informazioni chiare sui benefici attesi, sui costi a carico della comunità e sul trattamento dei propri dati. Quest’ultimo aspetto merita attenzione: i dati orari di consumo rivelano abitudini e presenze nelle abitazioni e costituiscono dati personali. Il loro trattamento, necessario per il calcolo dell’energia condivisa e per il riparto dei benefici, richiede una base giuridica, un’informativa ai membri e misure di sicurezza adeguate, nel rispetto del regolamento europeo sulla protezione dei dati personali.",
     "est": true,
     "ancora": "Gli errori più frequenti nella progettazione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Verifiche del GSE e decadenza dagli incentivi",
     "lead": "Il GSE verifica i requisiti in fase di accesso e durante il periodo di incentivazione; le irregolarità possono comportare la decadenza.",
     "punti": [
      "Verifica documentale all’accesso: statuto, membri, impianti, date, cabina primaria",
      "Controlli successivi, anche con sopralluoghi sugli impianti",
      "Obbligo di comunicare tempestivamente variazioni di membri, impianti e referente",
      "Violazioni rilevanti: decadenza dagli incentivi e recupero delle somme erogate",
      "Conservazione ordinata della documentazione per tutta la durata dell’incentivo"
     ],
     "appro": "Molte contestazioni nascono da comunicazioni omesse o tardive, più che da irregolarità sostanziali: una gestione amministrativa accurata è parte integrante del progetto.",
     "rif": "D.M. 414/2023 · Regole operative del GSE · disciplina dei controlli del GSE",
     "nar": "Il Gestore dei servizi energetici verifica il rispetto dei requisiti sia in fase di accesso agli incentivi sia durante l’intero periodo di incentivazione. All’accesso esegue una verifica documentale dello statuto, della compagine dei membri, delle caratteristiche degli impianti, delle date rilevanti e dell’appartenenza alla cabina primaria. Durante il periodo di incentivazione può svolgere controlli successivi, anche con sopralluoghi presso gli impianti. Il referente della configurazione ha l’obbligo di comunicare tempestivamente le variazioni dei membri, degli impianti e dello stesso referente, nei tempi stabiliti dalle regole operative. Le violazioni rilevanti, come la mancanza dei requisiti dichiarati o la presentazione di dati non veritieri, possono comportare la decadenza dagli incentivi e il recupero delle somme già erogate, oltre alle eventuali ulteriori conseguenze previste dalla legge. L’esperienza mostra che molte contestazioni nascono da comunicazioni omesse o tardive, più che da irregolarità sostanziali. La documentazione deve quindi essere conservata in modo ordinato per tutta la durata dell’incentivo: atti costitutivi, verbali, adesioni e recessi, titoli abilitativi, documenti di connessione, comunicazioni con il Gestore. Una gestione amministrativa accurata è parte integrante del successo di una comunità, al pari della progettazione tecnica.",
     "est": true,
     "ancora": "Gli errori più frequenti nella progettazione"
    },
    {
     "foto": false,
     "t": "caso",
     "tit": "Caso di studio · Il membro fuori cabina",
     "scena": "Una comunità ha costituito l’associazione e raccolto 40 adesioni. Al momento della richiesta al GSE risulta che 12 famiglie sono collegate a una cabina primaria diversa da quella dell’unico impianto.",
     "domanda": "Qual è la conseguenza corretta?",
     "opz": [
      [
       "Le 12 famiglie devono essere escluse dalla comunità",
       false,
       "No: possono restare membri, ma non generano energia condivisa incentivata con quell’impianto."
      ],
      [
       "Restano membri, ma i loro prelievi non contribuiscono all’energia condivisa incentivata con l’impianto di un’altra cabina",
       true,
       "Corretto: l’incentivo si calcola per cabina primaria."
      ],
      [
       "Il GSE calcola comunque l’incentivo su tutti i membri",
       false,
       "No: il perimetro della cabina primaria è un requisito."
      ]
     ],
     "rif": "D.M. 414/2023 · Regole operative del GSE",
     "appro": "La verifica della cabina primaria va eseguita con il codice POD di ciascun aderente prima della costituzione; nuovi impianti nella seconda cabina permetterebbero di valorizzare anche quei membri.",
     "nar": "Caso di studio. Al momento della richiesta al Gestore dei servizi energetici, dodici famiglie di una comunità risultano collegate a una cabina primaria diversa da quella dell’unico impianto. Si individui la conseguenza corretta.",
     "est": true,
     "ancora": "Gli errori più frequenti nella progettazione"
    },
    {
     "t": "testo",
     "tit": "Incentivi per le CER e le altre configurazioni",
     "foto": false,
     "lead": "Il D.M. 414/2023 prevede due misure gestite dal GSE: una tariffa sull’energia condivisa e un contributo in conto capitale PNRR.",
     "punti": [
      "Tariffa incentivante per 20 anni sull’energia condivisa, per impianti rinnovabili fino a 1 MW: parte fissa decrescente con la potenza più parte variabile legata al prezzo zonale, con un tetto",
      "Maggiorazione per il fotovoltaico nelle regioni del Centro (Abruzzo compreso) e del Nord, per la minore producibilità",
      "Contributo PNRR fino al 40% dei costi ammissibili nei comuni fino a 50.000 abitanti: sportello chiuso il 30 novembre 2025, graduatorie in scorrimento",
      "Restituzione delle componenti tariffarie sull’energia autoconsumata secondo il TIAD dell’ARERA",
      "Termine attuale del meccanismo tariffario: 31 dicembre 2027 (o raggiungimento del contingente di 5 GW)"
     ],
     "appro": "Chi ottiene il contributo in conto capitale riceve una tariffa ridotta in proporzione. Per i progetti PNRR il GSE ha fissato al 31 dicembre 2027 il termine di fine lavori; le associazioni di categoria hanno chiesto la proroga del meccanismo: prima di progettare una configurazione va consultata la versione vigente delle regole operative.",
     "rif": "D.M. 7 dicembre 2023, n. 414 e D.M. 127/2025 · regole operative GSE · TIAD ARERA",
     "nar": "Il decreto 414 prevede una tariffa ventennale sull’energia condivisa per impianti fino a un megawatt, con una parte fissa, una variabile legata al prezzo zonale e una maggiorazione per il fotovoltaico al Centro e al Nord. Il contributo PNRR del quaranta per cento per i comuni fino a cinquantamila abitanti ha chiuso lo sportello a novembre 2025. Il meccanismo tariffario scade oggi a fine 2027: si verificano sempre le regole vigenti.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La struttura della tariffa premio",
     "lead": "La tariffa premio sull’energia condivisa ha una parte fissa, che decresce con la potenza dell’impianto, e una parte variabile legata al prezzo zonale.",
     "punti": [
      "Impianti fino a 200 kW: 80 €/MWh più max(0; 180 − prezzo zonale), con un tetto di 120 €/MWh",
      "Impianti tra 200 e 600 kW: 70 €/MWh più max(0; 180 − prezzo zonale), con un tetto di 110 €/MWh",
      "Impianti oltre 600 kW: 60 €/MWh più max(0; 180 − prezzo zonale), con un tetto di 100 €/MWh",
      "Fattore correttivo per il fotovoltaico: +4 €/MWh nelle regioni del Centro, +10 €/MWh in quelle del Nord",
      "Durata: 20 anni dalla data di entrata in esercizio commerciale dell’impianto"
     ],
     "appro": "La parte variabile cresce quando il prezzo zonale dell’energia è basso, garantendo una remunerazione complessiva più stabile; il tetto impedisce sovracompensazioni.",
     "rif": "D.M. 7 dicembre 2023, n. 414, Allegato 1",
     "nar": "La tariffa premio riconosciuta sull’energia condivisa ha una struttura in due parti. La prima è una parte fissa, che decresce all’aumentare della potenza dell’impianto: ottanta euro per megawattora per gli impianti fino a duecento chilowatt, settanta euro per quelli tra duecento e seicento chilowatt, sessanta euro per quelli oltre seicento chilowatt. La seconda è una parte variabile, pari alla differenza, se positiva, tra centottanta euro e il prezzo zonale orario dell’energia: quando il prezzo di mercato è basso, la parte variabile cresce, garantendo una remunerazione complessiva più stabile. La somma delle due parti non può superare un tetto, rispettivamente di centoventi, centodieci e cento euro per megawattora nelle tre fasce di potenza, così da evitare sovracompensazioni. Per gli impianti fotovoltaici è previsto un fattore correttivo che tiene conto della minore producibilità: più quattro euro per megawattora nelle regioni del Centro, tra cui l’Abruzzo, e più dieci euro in quelle del Nord. La tariffa è riconosciuta per vent’anni a partire dalla data di entrata in esercizio commerciale dell’impianto. Si osservi che la tariffa remunera esclusivamente l’energia condivisa, cioè la quota oraria di energia immessa che coincide con i prelievi dei membri sottesi alla stessa cabina primaria.",
     "est": true,
     "ancora": "Incentivi per le CER e le altre configurazioni"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: il calcolo della tariffa",
     "lead": "Un esempio numerico mostra come si determina la tariffa per un impianto fotovoltaico da 100 kW in Abruzzo.",
     "punti": [
      "Fascia di potenza: fino a 200 kW, parte fissa 80 €/MWh",
      "Prezzo zonale ipotizzato: 110 €/MWh; parte variabile: 180 − 110 = 70 €/MWh",
      "Somma 150 €/MWh, ridotta al tetto di 120 €/MWh",
      "Fattore correttivo Centro: +4 €/MWh; tariffa risultante: 124 €/MWh",
      "Con 60 MWh condivisi in un anno: circa 7.440 € di tariffa premio, oltre alla vendita dell’energia e alla restituzione delle componenti tariffarie"
     ],
     "appro": "I valori sono esemplificativi: il calcolo effettivo avviene ora per ora, con il prezzo zonale di ciascuna ora e l’energia condivisa misurata.",
     "rif": "D.M. 414/2023, Allegato 1 · Regole operative del GSE",
     "nar": "Si propone un esempio applicativo. Si consideri un impianto fotovoltaico da cento chilowatt, realizzato in Abruzzo e inserito in una comunità energetica rinnovabile. Poiché la potenza non supera duecento chilowatt, la parte fissa della tariffa è di ottanta euro per megawattora. Se in una certa ora il prezzo zonale dell’energia è di centodieci euro per megawattora, la parte variabile è pari a centottanta meno centodieci, cioè settanta euro. La somma, centocinquanta euro, supera il tetto previsto per questa fascia di potenza ed è quindi ridotta a centoventi euro. A questo valore si aggiunge il fattore correttivo per gli impianti fotovoltaici del Centro, pari a quattro euro, per una tariffa di centoventiquattro euro per megawattora. Se nell’anno l’energia condivisa dall’impianto con i membri della stessa cabina primaria è di sessanta megawattora, la tariffa premio complessiva è di circa settemilaquattrocentoquaranta euro. A questa somma si aggiungono il ricavo della vendita dell’energia immessa, ad esempio con il ritiro dedicato, e la restituzione delle componenti tariffarie prevista dall’ARERA. Occorre ricordare che il calcolo effettivo avviene ora per ora, con il prezzo zonale di ciascuna ora e l’energia condivisa misurata: l’esempio serve a comprendere il meccanismo, non a stimare con precisione un progetto reale.",
     "est": true,
     "ancora": "Incentivi per le CER e le altre configurazioni"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La destinazione dei benefici e il vincolo per le imprese",
     "lead": "Il decreto stabilisce regole sulla destinazione della tariffa per garantire che la comunità persegua benefici per il territorio.",
     "punti": [
      "La comunità distribuisce i benefici secondo il proprio regolamento interno",
      "Se l’energia condivisa supera il 55% di quella immessa, la quota di tariffa eccedente va destinata ai soli consumatori diversi dalle imprese o a finalità sociali",
      "Per gli impianti che beneficiano anche del contributo in conto capitale la soglia è più bassa",
      "Il regolamento deve essere trasparente: criteri di riparto, tempi, costi di gestione",
      "Le finalità sociali possono comprendere interventi a favore di famiglie in difficoltà o del territorio"
     ],
     "appro": "Il vincolo evita che la comunità diventi uno strumento di remunerazione delle sole imprese: i benefici devono ricadere anche su famiglie, enti e territorio.",
     "rif": "D.M. 414/2023 · Regole operative del GSE",
     "nar": "Il decreto ministeriale quattrocentoquattordici stabilisce alcune regole sulla destinazione della tariffa premio, per garantire che la comunità persegua effettivamente benefici ambientali, economici e sociali per i membri e per il territorio. La comunità distribuisce i benefici secondo il proprio regolamento interno, ma con un vincolo specifico: se l’energia condivisa supera il cinquantacinque per cento dell’energia immessa dagli impianti, la quota di tariffa premio relativa all’eccedenza deve essere destinata esclusivamente ai consumatori diversi dalle imprese oppure a finalità sociali con ricadute sul territorio. Per gli impianti che hanno beneficiato anche del contributo in conto capitale del Piano nazionale di ripresa e resilienza, la soglia è più bassa. Lo scopo del vincolo è evitare che la comunità diventi uno strumento di remunerazione delle sole imprese partecipanti. Il regolamento interno deve quindi essere trasparente e indicare i criteri di riparto, i tempi delle erogazioni, i costi di gestione a carico della comunità e le modalità di rendicontazione ai membri. Le finalità sociali possono comprendere, ad esempio, contributi alle famiglie in condizione di povertà energetica, interventi di efficienza negli edifici pubblici o iniziative per il territorio. Una progettazione attenta di questi aspetti rafforza anche la fiducia dei membri.",
     "est": true,
     "ancora": "Incentivi per le CER e le altre configurazioni"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La restituzione delle componenti tariffarie",
     "lead": "Oltre alla tariffa premio, l’ARERA riconosce un contributo per l’energia autoconsumata che non utilizza le reti di trasmissione.",
     "punti": [
      "Riconosce la restituzione di alcune componenti tariffarie di trasmissione e distribuzione non dovute",
      "Si calcola sull’energia autoconsumata, cioè la quota oraria condivisa nella configurazione",
      "Il valore unitario è definito e aggiornato periodicamente dall’ARERA",
      "È erogato dal GSE insieme alla tariffa premio, al referente della configurazione",
      "Ha un importo unitario inferiore alla tariffa premio, ma contribuisce al bilancio della comunità"
     ],
     "appro": "Il contributo deriva dal fatto che l’energia condivisa all’interno della stessa area evita in parte l’utilizzo delle reti a livelli di tensione superiori.",
     "rif": "TIAD – Deliberazione ARERA 727/2022/R/eel",
     "nar": "Oltre alla tariffa premio prevista dal decreto ministeriale, la regolazione dell’ARERA riconosce alle configurazioni di autoconsumo diffuso un contributo per la valorizzazione dell’energia autoconsumata. Il principio è il seguente: l’energia prodotta e consumata all’interno della stessa area, nella stessa ora, utilizza la rete di distribuzione locale ma evita in parte l’utilizzo delle reti a livelli di tensione superiori. Per questo l’Autorità riconosce la restituzione di alcune componenti tariffarie, relative alla trasmissione e a parte della distribuzione, che i consumatori hanno pagato in bolletta ma che non corrispondono a un effettivo utilizzo di quelle reti. Il contributo si calcola sull’energia autoconsumata, cioè sulla quota oraria di energia condivisa all’interno della configurazione, e il suo valore unitario è definito e aggiornato periodicamente dall’ARERA. Viene erogato dal Gestore dei servizi energetici insieme alla tariffa premio, al referente della configurazione, che poi lo ripartisce secondo il regolamento. L’importo unitario è sensibilmente inferiore a quello della tariffa premio, ma contribuisce al bilancio complessivo della comunità. Nella valutazione economica di un progetto occorre quindi considerare tre voci di ricavo: la vendita dell’energia immessa, la tariffa premio e la restituzione delle componenti tariffarie.",
     "est": true,
     "ancora": "Incentivi per le CER e le altre configurazioni"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il contributo in conto capitale del PNRR",
     "lead": "Il PNRR ha previsto un contributo a fondo perduto per gli impianti delle comunità nei comuni di minori dimensioni.",
     "punti": [
      "Contributo fino al 40% dei costi ammissibili per impianti in comuni fino a 50.000 abitanti",
      "Sportello di presentazione delle domande chiuso il 30 novembre 2025, con graduatorie in scorrimento",
      "Il contributo è cumulabile con la tariffa premio, che viene però ridotta in proporzione",
      "Termini di realizzazione e rendicontazione stabiliti dal GSE per i progetti ammessi",
      "Per i nuovi progetti occorre verificare la disponibilità di eventuali nuove misure"
     ],
     "appro": "Le misure di finanziamento cambiano nel tempo: prima di impostare un piano economico va sempre consultata la versione vigente delle regole operative e dei bandi del GSE.",
     "rif": "D.M. 414/2023 come modificato · PNRR, Missione 2 · Regole operative del GSE",
     "nar": "Il Piano nazionale di ripresa e resilienza ha previsto un contributo in conto capitale, a fondo perduto, per gli impianti delle comunità energetiche e dei gruppi di autoconsumatori realizzati nei comuni di minori dimensioni. Il contributo copre fino al quaranta per cento dei costi ammissibili e, a seguito delle modifiche intervenute, riguarda gli impianti nei comuni fino a cinquantamila abitanti. Lo sportello per la presentazione delle domande è stato chiuso il trenta novembre duemilaventicinque, con graduatorie gestite in scorrimento. Il contributo è cumulabile con la tariffa premio, che però viene ridotta in proporzione al contributo ottenuto, per evitare una doppia remunerazione dello stesso investimento. Per i progetti ammessi, il Gestore dei servizi energetici ha stabilito termini precisi di realizzazione e di rendicontazione, il cui mancato rispetto può comportare la perdita del contributo. Per i nuovi progetti occorre verificare la disponibilità di eventuali nuove misure di sostegno. Il quadro degli incentivi è infatti in continua evoluzione: le associazioni di categoria hanno chiesto la proroga del meccanismo tariffario oltre il duemilaventisette. Prima di impostare il piano economico di una configurazione va quindi sempre consultata la versione vigente delle regole operative e dei bandi pubblicati dal Gestore dei servizi energetici.",
     "est": true,
     "ancora": "Incentivi per le CER e le altre configurazioni"
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Grafico interattivo · Tariffa premio per classe di potenza",
     "rif": "D.M. MASE 7 dicembre 2023, n. 414, Allegato 1",
     "lead": "Selezionare ciascuna classe di potenza: l’intervallo va dalla parte fissa al tetto massimo della tariffa premio.",
     "grafico": {
      "tipo": "intervalli",
      "unita": "Tariffa premio (€/MWh), prima del fattore correttivo zonale",
      "unita_breve": "€/MWh",
      "max": 130,
      "tacche": 13,
      "voci": [
       {
        "nome": "Impianti fino a 200 kW",
        "da": 80,
        "a": 120,
        "colore": "#0f5c6b",
        "testo": "Parte fissa 80 €/MWh più una parte variabile legata al prezzo zonale, fino a un massimo di 120 €/MWh."
       },
       {
        "nome": "Da 200 a 600 kW",
        "da": 70,
        "a": 110,
        "colore": "#2b7a8a",
        "testo": "Parte fissa 70 €/MWh, fino a un massimo di 110 €/MWh."
       },
       {
        "nome": "Oltre 600 kW",
        "da": 60,
        "a": 100,
        "colore": "#5a9aa6",
        "testo": "Parte fissa 60 €/MWh, fino a un massimo di 100 €/MWh. Per il fotovoltaico si aggiunge il fattore correttivo zonale: +4 €/MWh al Centro, +10 €/MWh al Nord."
       }
      ]
     },
     "nar": "Grafico interattivo. Si selezioni ciascuna classe di potenza per visualizzare l’intervallo della tariffa premio sull’energia condivisa: dalla parte fissa, che decresce con la potenza dell’impianto, al tetto massimo. Per gli impianti fotovoltaici si aggiunge un fattore correttivo zonale per le Regioni del Centro e del Nord.",
     "est": true,
     "ancora": "Incentivi per le CER e le altre configurazioni"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il contributo PNRR dopo le modifiche 2025-2026",
     "lead": "Il D.M. 16 maggio 2025, n. 127, in vigore dal 26 giugno 2025, ha modificato il decreto CACER; il D.L. 19 febbraio 2026, n. 19 (art. 27) ha poi rimodulato la misura PNRR.",
     "punti": [
      "Contributo in conto capitale esteso agli impianti nei Comuni con popolazione inferiore a 50.000 abitanti (in precedenza 5.000)",
      "Lavori di realizzazione da completare entro il 30 giugno 2026",
      "Entrata in esercizio entro 24 mesi dal completamento dei lavori e comunque non oltre il 31 dicembre 2027",
      "Anticipazione richiedibile fino al 30% del contributo (in precedenza 10%)",
      "Domande al GSE chiuse il 30 novembre 2025; con la revisione del PNRR la dotazione è stata rideterminata e gli accordi di concessione si stipulano entro il 30 giugno 2026"
     ],
     "appro": "Le regole operative del GSE (aggiornate nel luglio 2025 e integrate nel 2026 per la cosiddetta Facility CACER) restano il riferimento per requisiti e rendicontazione: un progetto si imposta sempre sulla versione vigente pubblicata dal GSE.",
     "rif": "D.M. MASE 7 dicembre 2023, n. 414, art. 7 · D.M. MASE 16 maggio 2025, n. 127 · D.L. 19 febbraio 2026, n. 19, art. 27 · Regole operative GSE",
     "nar": "La misura del piano nazionale di ripresa e resilienza a sostegno delle comunità energetiche è stata modificata più volte. Il decreto ministeriale centoventisette del sedici maggio duemilaventicinque, in vigore dal ventisei giugno duemilaventicinque, ha innalzato da cinquemila a cinquantamila abitanti la soglia dei Comuni nei quali gli impianti possono accedere al contributo in conto capitale. Lo stesso decreto ha reso più flessibili i tempi: i lavori di realizzazione devono essere completati entro il trenta giugno duemilaventisei e l’impianto deve entrare in esercizio entro ventiquattro mesi dal completamento dei lavori, e comunque non oltre il trentuno dicembre duemilaventisette. È stata inoltre aumentata dal dieci al trenta per cento la quota del contributo che può essere richiesta come anticipazione. Lo sportello per le domande al Gestore dei servizi energetici si è chiuso il trenta novembre duemilaventicinque. Con la successiva revisione del piano, il decreto-legge diciannove del diciannove febbraio duemilaventisei, all’articolo ventisette, ha rimodulato la misura: la dotazione è stata rideterminata e gli accordi di concessione con i beneficiari devono essere stipulati entro il trenta giugno duemilaventisei. Le regole operative del Gestore restano il riferimento per requisiti e rendicontazione, e ogni progetto va impostato sulla versione vigente.",
     "est": true,
     "ancora": "Il contributo in conto capitale del PNRR"
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: l’energia condivisa in un’ora",
     "foto": false,
     "lead": "In una CER, alle 12 di un giorno feriale, l’impianto della CER immette 80 kWh, mentre i membri prelevano complessivamente 55 kWh.",
     "punti": [
      "Energia condivisa in quell’ora: minimo tra 80 e 55 = 55 kWh",
      "I 25 kWh eccedenti non generano tariffa premio: sono valorizzati come energia venduta",
      "Alle 20 l’impianto non produce: energia condivisa 0, anche se i prelievi sono alti",
      "La somma oraria su un anno determina l’energia incentivata",
      "Membri con prelievi diurni (imprese, scuole, uffici) aumentano la condivisione"
     ],
     "appro": "Il mix dei membri è decisivo: una CER composta solo da famiglie con consumi serali condivide poco; l’ingresso di PMI ed enti con consumi diurni migliora molto il risultato.",
     "rif": "D.lgs. 199/2021, art. 2 · TIAD ARERA",
     "nar": "Si consideri un’ora di esercizio: alle dodici l’impianto immette ottanta chilowattora e i membri ne prelevano cinquantacinque; l’energia condivisa corrisponde al valore minimo, cioè cinquantacinque. Alle venti l’impianto non produce e la condivisione è nulla. Ne deriva l’opportunità di un insieme di membri con consumi diurni, quali imprese, scuole e uffici.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il gruppo di autoconsumatori in condominio",
     "lead": "Nel condominio i residenti possono condividere l’energia di un impianto sulla copertura comune senza costituire una comunità.",
     "punti": [
      "Configurazione: gruppo di autoconsumatori che agiscono collettivamente nello stesso edificio",
      "Impianto sulle parti comuni, deliberato dall’assemblea condominiale secondo le regole del codice civile",
      "Ciascun condomino mantiene il proprio contatore e il proprio fornitore",
      "L’energia condivisa con le utenze dei condomini e con quelle comuni accede alla tariffa premio",
      "Un referente, spesso l’amministratore, gestisce i rapporti con il GSE"
     ],
     "appro": "Le utenze condominiali comuni, come illuminazione, ascensore e pompe, hanno consumi in parte diurni e contribuiscono alla condivisione anche quando i residenti sono assenti.",
     "rif": "D.lgs. 199/2021, art. 30 · TIAD ARERA · Codice civile, art. 1117 e seguenti",
     "nar": "Nel condominio i residenti possono condividere l’energia prodotta da un impianto installato sulla copertura comune senza costituire una comunità energetica, attraverso la configurazione del gruppo di autoconsumatori di energia rinnovabile che agiscono collettivamente. L’impianto viene realizzato sulle parti comuni dell’edificio, previa deliberazione dell’assemblea condominiale secondo le regole del codice civile sulle innovazioni e sulle parti comuni. Ciascun condomino che aderisce mantiene il proprio contatore, il proprio contratto di fornitura e la libera scelta del venditore: la condivisione si calcola virtualmente, ora per ora, sui dati di misura. L’energia condivisa con le utenze dei condomini aderenti e con le utenze condominiali comuni accede alla tariffa premio e alla restituzione delle componenti tariffarie, nei limiti previsti. Le utenze comuni, come l’illuminazione delle scale, l’ascensore e le pompe, hanno consumi in parte diurni e contribuiscono alla condivisione anche quando i residenti sono assenti per lavoro. Un referente, spesso l’amministratore di condominio, gestisce i rapporti con il Gestore dei servizi energetici e la ripartizione dei benefici secondo le regole stabilite dall’assemblea. Questa configurazione è particolarmente adatta ai condomini con coperture ampie e ben esposte.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "L’autoconsumatore a distanza per le imprese",
     "lead": "Un’impresa con più sedi può produrre energia in un sito e utilizzarla virtualmente in un altro sotteso alla stessa cabina primaria.",
     "punti": [
      "Configurazione: autoconsumatore individuale di energia rinnovabile «a distanza»",
      "Impianto su un sito dell’impresa (ad esempio un magazzino con ampia copertura), consumi in un altro sito",
      "Stesso soggetto titolare dei punti di prelievo e dell’impianto, o nella sua disponibilità",
      "Accesso a tariffa premio e restituzione delle componenti tariffarie sull’energia autoconsumata a distanza",
      "Utile quando il sito con consumi elevati non ha superfici adatte all’installazione"
     ],
     "appro": "Per le imprese la configurazione a distanza è spesso più semplice di una comunità, perché non richiede di costituire un soggetto giuridico con altri membri.",
     "rif": "D.lgs. 199/2021, art. 30 · TIAD ARERA · D.M. 414/2023",
     "nar": "Un’impresa con più sedi può sfruttare la configurazione dell’autoconsumatore individuale di energia rinnovabile a distanza. L’impresa realizza l’impianto in un sito con superfici adatte, ad esempio un magazzino con una copertura ampia e ben esposta, e utilizza virtualmente l’energia prodotta in un altro sito con consumi elevati, purché entrambi siano sottesi alla stessa cabina primaria per l’accesso agli incentivi. Il titolare dei punti di prelievo deve essere lo stesso soggetto che ha la disponibilità dell’impianto, eventualmente realizzato da un produttore terzo. Sull’energia autoconsumata a distanza, cioè sulla quota oraria di energia immessa nel sito di produzione che coincide con i prelievi del sito di consumo, si ottengono la tariffa premio e la restituzione delle componenti tariffarie, nei limiti previsti dal decreto. La configurazione è particolarmente utile quando il sito con i consumi maggiori, ad esempio uno stabilimento con coperture inadatte o vincolate, non può ospitare un impianto adeguato. Per le imprese, questa soluzione è spesso più semplice di una comunità energetica, perché non richiede di costituire un soggetto giuridico con altri membri né di condividere la governance, pur consentendo di valorizzare la produzione rinnovabile tra sedi diverse.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Dati di misura e gestione operativa",
     "lead": "Il funzionamento di una configurazione si basa sui dati orari di misura, che il GSE riceve dai gestori di rete.",
     "punti": [
      "I contatori elettronici misurano immissioni e prelievi con dettaglio orario o quartorario",
      "I gestori di rete trasmettono i dati al GSE, che calcola energia condivisa, tariffa e contributi",
      "Il referente riceve gli importi e i dati per la ripartizione ai membri",
      "Le piattaforme di gestione consentono ai membri di visualizzare i propri consumi e il contributo alla condivisione",
      "Comunicazioni al GSE: ingressi e uscite di membri, modifiche degli impianti"
     ],
     "appro": "La trasparenza dei dati è un fattore di successo: i membri che vedono il proprio contributo alla condivisione sono più motivati a spostare i consumi nelle ore di produzione.",
     "rif": "TIAD ARERA · Regole operative del GSE",
     "nar": "Il funzionamento di una configurazione di autoconsumo diffuso si basa interamente sui dati di misura. I contatori elettronici installati presso gli impianti e presso le utenze dei membri misurano le immissioni e i prelievi con dettaglio orario o quartorario. I gestori delle reti di distribuzione trasmettono questi dati al Gestore dei servizi energetici, che per ciascuna ora calcola l’energia condivisa all’interno della configurazione e, sulla base di essa, la tariffa premio e il contributo di restituzione delle componenti tariffarie. Gli importi vengono erogati al referente della configurazione insieme ai dati necessari alla ripartizione tra i membri secondo il regolamento interno. Molte comunità si dotano di una piattaforma di gestione che consente ai membri di visualizzare i propri consumi, il proprio contributo all’energia condivisa e i benefici maturati. Il referente deve inoltre comunicare al Gestore dei servizi energetici gli ingressi e le uscite dei membri e le modifiche degli impianti, nei tempi previsti dalle regole operative. La trasparenza dei dati è un fattore di successo: i membri che vedono il proprio contributo alla condivisione sono più motivati a spostare i consumi nelle ore di produzione, migliorando il risultato collettivo.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Garanzie di origine e contratti di lungo termine",
     "lead": "Accanto alle configurazioni di autoconsumo, le imprese possono documentare e acquistare energia rinnovabile con strumenti di mercato.",
     "punti": [
      "Garanzia di origine (GO): certificato elettronico che attesta la produzione di 1 MWh da fonte rinnovabile",
      "Rilasciata dal GSE ai produttori; può essere trasferita e annullata per dimostrare il consumo di energia rinnovabile",
      "Contratti di acquisto di lungo termine (PPA): fornitura di energia rinnovabile da un impianto specifico a prezzo concordato",
      "Utili per la rendicontazione delle emissioni indirette con il metodo basato sul mercato",
      "Non sostituiscono la riduzione dei consumi, che resta la prima misura"
     ],
     "appro": "Nella rendicontazione delle emissioni, l’energia coperta da garanzie di origine annullate può essere considerata a emissioni nulle nel metodo basato sul mercato, purché siano rispettati i criteri di qualità degli strumenti.",
     "rif": "D.lgs. 199/2021, art. 46 · GHG Protocol, Scope 2 Guidance",
     "nar": "Accanto all’autoconsumo e alle configurazioni di autoconsumo diffuso, le imprese possono documentare e acquistare energia rinnovabile attraverso strumenti di mercato. La garanzia di origine è un certificato elettronico che attesta che un megawattora di energia elettrica è stato prodotto da una fonte rinnovabile. È rilasciata dal Gestore dei servizi energetici ai produttori, può essere trasferita tra operatori e viene annullata quando si vuole dimostrare che una determinata quantità di energia consumata proviene da fonti rinnovabili, ad esempio nelle offerte di energia verde dei venditori. I contratti di acquisto di lungo termine, noti come PPA, prevedono invece la fornitura di energia rinnovabile prodotta da un impianto specifico, a un prezzo concordato per diversi anni: offrono stabilità dei costi e contribuiscono alla realizzazione di nuovi impianti. Questi strumenti sono rilevanti per la rendicontazione delle emissioni indirette legate all’energia acquistata: nel metodo basato sul mercato, l’energia coperta da garanzie di origine annullate può essere considerata a emissioni nulle, purché gli strumenti rispettino i criteri di qualità previsti. Occorre però ricordare che questi strumenti non sostituiscono la riduzione dei consumi, che resta la prima misura di un percorso di decarbonizzazione credibile.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "abbina",
     "tit": "Esercitazione · Configurazioni e caratteristiche",
     "sott": "Associare a ciascuna configurazione o elemento la caratteristica corretta",
     "coppie": [
      [
       "Comunità energetica rinnovabile",
       "Soggetto giuridico autonomo con membri distribuiti sul territorio"
      ],
      [
       "Gruppo di autoconsumatori",
       "Condomini o utenti dello stesso edificio"
      ],
      [
       "Autoconsumatore a distanza",
       "Stesso soggetto, impianto in un sito e consumi in un altro"
      ],
      [
       "Cabina primaria",
       "Perimetro per l’energia condivisa incentivata"
      ],
      [
       "Garanzia di origine",
       "Certificato di 1 MWh prodotto da fonte rinnovabile"
      ]
     ],
     "nar": "Esercitazione. Si associ a ciascuna configurazione o elemento la caratteristica corretta.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Quale configurazione?",
     "lead": "Seleziona una situazione, poi la configurazione di autoconsumo diffuso.",
     "colonne": [
      "Gruppo di autoconsumatori che agiscono collettivamente",
      "Autoconsumatore individuale a distanza",
      "Comunità energetica rinnovabile"
     ],
     "schede": [
      [
       "Condominio con impianto sul tetto che condivide l’energia tra gli appartamenti",
       0,
       "Gli autoconsumatori si trovano nello stesso edificio o condominio.",
       "Corretto."
      ],
      [
       "Impresa con impianto su un capannone e consumi in un altro sito dello stesso titolare",
       1,
       "Un unico cliente finale usa l’energia prodotta in un altro sito.",
       "Corretto."
      ],
      [
       "Cittadini, PMI e Comune che costituiscono un soggetto giuridico per condividere l’energia",
       2,
       "È una comunità energetica rinnovabile, soggetto giuridico autonomo.",
       "Corretto."
      ],
      [
       "Associazione di famiglie e parrocchia nella stessa cabina primaria",
       2,
       "Più soggetti diversi uniti in un soggetto giuridico: comunità energetica.",
       "Corretto."
      ],
      [
       "Palazzina di uffici con più clienti finali e un impianto comune",
       0,
       "Stesso edificio: gruppo di autoconsumatori.",
       "Corretto."
      ],
      [
       "Comune che usa l’energia di un suo impianto per alimentare un altro edificio comunale",
       1,
       "Stesso cliente finale, siti diversi: autoconsumo individuale a distanza.",
       "Corretto."
      ]
     ],
     "nar": "Sei situazioni reali. Assegna ciascuna alla configurazione di autoconsumo diffuso corretta.",
     "rif": "D.lgs. 199/2021 · TIAD (ARERA)",
     "est": true,
     "ancora": "Esercitazione · Configurazioni e caratteristiche"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Energia condivisa e incentivi",
     "voci": [
      [
       "L’energia condivisa si calcola ora per ora come minimo tra energia immessa e prelevata dai membri.",
       true,
       "Vero: è il criterio orario usato per gli incentivi."
      ],
      [
       "Per la tariffa premio, i punti di prelievo e gli impianti devono trovarsi sotto la stessa cabina primaria.",
       true,
       "Vero."
      ],
      [
       "Una comunità energetica può avere come scopo principale il profitto finanziario.",
       false,
       "Falso: lo scopo principale sono i benefici ambientali, economici e sociali per i membri e il territorio."
      ]
     ],
     "nar": "Tre affermazioni su energia condivisa e incentivi: vere o false?",
     "rif": "D.lgs. 199/2021",
     "est": true,
     "ancora": "Esercitazione · Configurazioni e caratteristiche"
    },
    {
     "foto": false,
     "t": "applica",
     "tit": "La configurazione adatta a te",
     "lead": "Valuta quale configurazione potrebbe interessare la tua organizzazione o il tuo territorio.",
     "voci": [
      "Ho una copertura adatta a un impianto",
      "Ho consumi in più siti dello stesso titolare",
      "Sono in un condominio o in un edificio con più utenti",
      "Il mio Comune promuove una comunità energetica",
      "Ho consumi diurni elevati",
      "Posso coinvolgere altre imprese della zona"
     ],
     "campo": "Configurazione che valuteresti e motivo",
     "esempio": "Es.: autoconsumo a distanza tra capannone e magazzino, stessa cabina primaria",
     "min": 2,
     "nar": "Valuta la tua situazione: spunta le condizioni che ti riguardano e scrivi quale configurazione di autoconsumo valuteresti, spiegando perché.",
     "est": true,
     "ancora": "Esercitazione · Configurazioni e caratteristiche"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Esercitazione · Affermazioni vere o false sugli incentivi",
     "sott": "Qualificare ciascuna affermazione come vera o falsa",
     "voci": [
      [
       "La tariffa premio si applica a tutta l’energia prodotta dall’impianto.",
       false,
       "Falso: si applica alla sola energia condivisa."
      ],
      [
       "Per gli impianti fino a 200 kW la parte fissa della tariffa è di 80 €/MWh.",
       true,
       "Vero."
      ],
      [
       "Il fattore correttivo per il fotovoltaico in Abruzzo è di +4 €/MWh.",
       true,
       "Vero: regioni del Centro."
      ],
      [
       "Il contributo in conto capitale lascia invariata la tariffa premio.",
       false,
       "Falso: la tariffa viene ridotta in proporzione."
      ],
      [
       "Una comunità formata solo da consumi serali condivide molta energia fotovoltaica.",
       false,
       "Falso: la produzione fotovoltaica è diurna."
      ]
     ],
     "nar": "Esercitazione. Si stabilisca se ciascuna affermazione sugli incentivi è vera o falsa.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Strategie per aumentare l’energia condivisa",
     "lead": "Poiché l’incentivo si calcola sull’energia condivisa ora per ora, la gestione dei consumi dei membri incide direttamente sui benefici della comunità.",
     "punti": [
      "Composizione equilibrata dei membri: famiglie, attività commerciali, uffici, enti con consumi diurni",
      "Spostamento dei carichi programmabili nelle ore di produzione: lavatrici, lavastoviglie, scaldacqua, ricarica dei veicoli",
      "Pompe di calore e accumuli termici gestiti in funzione della produzione",
      "Comunicazione ai membri delle fasce orarie più favorevoli, anche con avvisi giornalieri",
      "Riparto che premia il contributo orario alla condivisione"
     ],
     "appro": "Lo spostamento dei carichi è la misura più economica: non richiede investimenti, ma informazione e un riparto che renda visibile il beneficio per chi partecipa.",
     "rif": "TIAD ARERA · D.M. 414/2023",
     "nar": "Poiché la tariffa premio si calcola sull’energia condivisa ora per ora, la gestione dei consumi dei membri incide direttamente sui benefici della comunità. La prima strategia è la composizione equilibrata della compagine: accanto alle famiglie, che consumano soprattutto la sera, conviene coinvolgere attività commerciali, uffici, scuole ed enti con consumi concentrati nelle ore diurne. La seconda strategia è lo spostamento dei carichi programmabili nelle ore di produzione: lavatrici, lavastoviglie, scaldacqua elettrici e ricarica dei veicoli elettrici possono essere avviati nelle ore centrali della giornata, anche con semplici temporizzatori. La terza riguarda le pompe di calore e gli accumuli termici, che possono essere gestiti in funzione della produzione, immagazzinando calore o freddo quando l’energia è disponibile. La quarta è la comunicazione ai membri: molte comunità inviano avvisi giornalieri sulle fasce orarie più favorevoli, basati sulle previsioni meteorologiche. Infine, il regolamento interno può prevedere un riparto dei benefici che premi il contributo orario alla condivisione, rendendo visibile il vantaggio per chi modifica le proprie abitudini. Lo spostamento dei carichi è la misura più economica a disposizione di una comunità, perché non richiede investimenti, ma soltanto informazione, consapevolezza e regole di riparto coerenti.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il rapporto con il produttore terzo",
     "lead": "Gli impianti di una comunità possono essere realizzati e gestiti da un soggetto terzo, che li mette a disposizione della configurazione.",
     "punti": [
      "Il produttore terzo può non essere membro, ma resta soggetto alle istruzioni della comunità sull’impianto",
      "Contratto: durata, corrispettivo, manutenzione, assicurazione, responsabilità, uscita anticipata",
      "Corrispettivo: canone fisso, quota della tariffa premio o combinazione dei due",
      "La quota destinata al produttore va considerata nel piano economico e nel regolamento di riparto",
      "Verifica che la remunerazione non trasformi la comunità in uno strumento a scopo di profitto"
     ],
     "appro": "Il produttore terzo consente di realizzare impianti senza capitale iniziale dei membri, ma riduce la quota di benefici che resta alla comunità: la ripartizione va negoziata e resa trasparente.",
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023 · Regole operative del GSE",
     "nar": "Gli impianti di una comunità energetica rinnovabile non devono necessariamente appartenere alla comunità o ai suoi membri: possono essere realizzati e gestiti da un produttore terzo, che li mette a disposizione della configurazione. Il produttore terzo può anche non essere membro della comunità, ma l’impianto deve restare nella disponibilità e sotto il controllo della comunità secondo le regole del decreto e delle regole operative. Il rapporto è disciplinato da un contratto, che deve definire con precisione la durata, normalmente coerente con il periodo di incentivazione, il corrispettivo, gli obblighi di manutenzione e di assicurazione, le responsabilità in caso di guasti o di mancata produzione e le condizioni di uscita anticipata. Il corrispettivo può essere un canone fisso, una quota della tariffa premio o una combinazione dei due. La quota destinata al produttore va considerata nel piano economico e nel regolamento di riparto, perché riduce i benefici disponibili per i membri. Occorre inoltre verificare che la remunerazione del produttore non trasformi di fatto la comunità in uno strumento a scopo di profitto, in contrasto con la finalità prevalente di benefici ambientali, economici e sociali. Il produttore terzo consente di realizzare impianti senza capitale iniziale dei membri, ma la ripartizione dei benefici va negoziata e resa trasparente a tutti i partecipanti.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: il condominio con impianto comune",
     "lead": "Un condominio di 24 unità realizza un impianto da 30 kWp sulla copertura e costituisce un gruppo di autoconsumatori.",
     "punti": [
      "Produzione annua stimata: circa 36.000 kWh",
      "Aderiscono 18 condomini su 24, oltre alle utenze comuni (ascensore, illuminazione, pompe)",
      "Energia condivisa stimata: circa 40% della produzione, cioè 14.400 kWh",
      "Benefici annui: tariffa premio e restituzione delle componenti sull’energia condivisa, più valorizzazione dell’energia immessa",
      "Delibera assembleare: maggioranze del codice civile; ripartizione tra spese comuni e quote ai condomini aderenti"
     ],
     "appro": "I valori sono indicativi: la quota di energia condivisa dipende dai profili orari reali e va stimata con i dati di misura dei condomini prima della delibera.",
     "rif": "D.lgs. 199/2021, art. 30 · TIAD ARERA · Codice civile, artt. 1117–1139",
     "nar": "Si propone un esempio applicativo riferito a un condominio di ventiquattro unità abitative, che realizza un impianto fotovoltaico da trenta chilowatt di picco sulla copertura comune e costituisce un gruppo di autoconsumatori di energia rinnovabile che agiscono collettivamente. La produzione annua stimata è di circa trentaseimila chilowattora. Aderiscono diciotto condomini su ventiquattro, oltre alle utenze comuni dell’edificio, come l’ascensore, l’illuminazione delle parti comuni e le pompe dell’impianto idrico. Considerati i profili di consumo prevalentemente serali delle famiglie e quelli in parte diurni delle utenze comuni, l’energia condivisa è stimata in circa il quaranta per cento della produzione, cioè circa quattordicimilaquattrocento chilowattora all’anno. Su questa energia il condominio ottiene la tariffa premio e la restituzione delle componenti tariffarie; l’energia non condivisa viene immessa in rete e valorizzata separatamente. L’assemblea delibera la realizzazione dell’impianto con le maggioranze previste dal codice civile e stabilisce come ripartire i benefici, ad esempio destinandone una parte alla riduzione delle spese comuni e una parte ai condomini aderenti in proporzione al loro contributo orario. I valori dell’esempio sono indicativi: la quota di energia condivisa dipende dai profili orari reali e va stimata con i dati di misura dei condomini prima della delibera.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: il riparto annuale dei benefici",
     "lead": "Una comunità riceve nell’anno 30.000 € tra tariffa premio e restituzione delle componenti e li ripartisce secondo il proprio regolamento.",
     "punti": [
      "Costi di gestione della comunità (piattaforma, consulenze, assicurazione): 3.000 €",
      "Corrispettivo al produttore terzo previsto dal contratto: 9.000 €",
      "Fondo per finalità sociali del territorio (10% del residuo): 1.800 €",
      "Quota distribuita ai membri: 16.200 €, in proporzione al contributo orario all’energia condivisa",
      "Rendiconto annuale approvato dall’assemblea e comunicato a tutti i membri"
     ],
     "appro": "Un riparto proporzionale al contributo orario, anziché uguale per tutti, incentiva i comportamenti che aumentano la condivisione e risulta percepito come più equo.",
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023 · Statuto e regolamento della comunità",
     "nar": "Si propone un esempio applicativo del riparto annuale dei benefici. Una comunità energetica rinnovabile riceve dal Gestore dei servizi energetici, nel corso dell’anno, complessivamente trentamila euro tra tariffa premio e restituzione delle componenti tariffarie. Il regolamento interno, approvato dall’assemblea, stabilisce l’ordine delle destinazioni. In primo luogo si coprono i costi di gestione della comunità, che comprendono la piattaforma di monitoraggio, le consulenze amministrative e l’assicurazione, pari a tremila euro. In secondo luogo si versa al produttore terzo il corrispettivo previsto dal contratto, pari a novemila euro. Del residuo di diciottomila euro, il dieci per cento, cioè milleottocento euro, alimenta un fondo destinato a finalità sociali del territorio, ad esempio il sostegno alle famiglie in difficoltà economica. I restanti sedicimiladuecento euro sono distribuiti ai membri in proporzione al rispettivo contributo orario all’energia condivisa, calcolato sui dati di misura. Il rendiconto annuale, con il dettaglio delle entrate, delle spese e delle quote attribuite, viene approvato dall’assemblea e comunicato a tutti i membri. Un riparto proporzionale al contributo orario, anziché uguale per tutti, incentiva i comportamenti che aumentano la condivisione ed è generalmente percepito come più equo dai partecipanti.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Indicatori di monitoraggio della comunità",
     "lead": "Un insieme limitato di indicatori consente di valutare nel tempo l’andamento tecnico, economico e sociale della comunità.",
     "punti": [
      "Energia prodotta e energia condivisa, mensile e annuale",
      "Quota di condivisione: energia condivisa / energia immessa dagli impianti",
      "Benefici economici complessivi e per membro; costi di gestione in rapporto ai benefici",
      "Emissioni di gas a effetto serra evitate, con fattore di emissione e anno di riferimento dichiarati",
      "Numero di membri, ingressi e recessi; partecipazione alle assemblee"
     ],
     "appro": "Il confronto mese per mese della quota di condivisione rivela rapidamente l’effetto dell’ingresso di nuovi membri o delle campagne di spostamento dei carichi.",
     "rif": "TIAD ARERA · D.M. 414/2023 · GHG Protocol",
     "nar": "La gestione di una comunità energetica richiede un monitoraggio continuo, basato su un insieme limitato ma significativo di indicatori. Sul piano tecnico si osservano l’energia prodotta dagli impianti e l’energia condivisa, su base mensile e annuale, e la quota di condivisione, cioè il rapporto tra l’energia condivisa e l’energia immessa in rete dagli impianti della configurazione. Sul piano economico si considerano i benefici complessivi ricevuti e quelli attribuiti a ciascun membro, insieme ai costi di gestione in rapporto ai benefici, che misurano l’efficienza della struttura. Sul piano ambientale si calcolano le emissioni di gas a effetto serra evitate, dichiarando il fattore di emissione utilizzato e l’anno di riferimento. Sul piano sociale si osservano il numero dei membri, gli ingressi e i recessi e la partecipazione alle assemblee, che indicano il grado di coinvolgimento della comunità. Il confronto mese per mese della quota di condivisione è particolarmente utile: rivela rapidamente l’effetto dell’ingresso di nuovi membri, delle campagne di spostamento dei carichi o di un guasto agli impianti. Gli indicatori vanno presentati ai membri nel rendiconto periodico, con grafici semplici e commenti che spieghino le variazioni osservate.",
     "est": true,
     "ancora": "Esempio applicativo: l’energia condivisa in un’ora"
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La grande impresa e la CER",
     "scena": "Un’impresa con 400 dipendenti vuole realizzare sul proprio capannone un impianto da 900 kW e «fondare una CER» con i dipendenti residenti nei comuni vicini.",
     "domanda": "Quale impostazione è corretta?",
     "opz": [
      [
       "L’impresa diventa membro di controllo della CER",
       false,
       "No: le grandi imprese non sono tra i membri ammessi e il controllo spetta ai membri ammessi."
      ],
      [
       "Mettere l’impianto a disposizione della CER come produttore terzo; la CER è costituita e controllata dai membri ammessi",
       true,
       "Corretto: produttore terzo e membri ammessi."
      ],
      [
       "Non serve alcuna CER: basta cedere l’energia ai dipendenti",
       false,
       "No: la vendita diretta a terzi non è consentita fuori dalle regole."
      ]
     ],
     "rif": "D.lgs. 199/2021, art. 31 · D.M. 414/2023",
     "appro": "Il produttore terzo può ricevere un corrispettivo dalla CER per la messa a disposizione dell’impianto, secondo accordi privati.",
     "nar": "Esercitazione. Esaminato il caso proposto, si individui la risposta corretta, valutando la motivazione di ciascuna alternativa.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 3,
     "domande": [
      [
       "L’energia condivisa si calcola per ogni ora come:",
       [
        "Il minimo tra energia immessa e prelevata",
        "La somma",
        "La media mensile",
        "La produzione totale"
       ],
       0,
       "Definizione."
      ],
      [
       "La tariffa incentivante del D.M. 414/2023 dura:",
       [
        "20 anni",
        "5 anni",
        "10 anni",
        "30 anni"
       ],
       0,
       "Tariffa."
      ],
      [
       "Per la quota incentivata i punti di connessione devono essere sottesi alla stessa:",
       [
        "Cabina primaria",
        "Cabina secondaria sempre",
        "Regione",
        "Provincia"
       ],
       0,
       "Ambito."
      ],
      [
       "Il contributo PNRR riguarda comuni fino a:",
       [
        "50.000 abitanti",
        "5.000 abitanti soltanto",
        "500.000 abitanti",
        "Qualsiasi comune"
       ],
       0,
       "PNRR."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 2.",
     "p": 1.4
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "L’autoconsumo istantaneo vale più dell’energia immessa",
      "Configurazioni: CER, gruppo di autoconsumatori, autoconsumatore a distanza",
      "Energia condivisa oraria sotto la stessa cabina primaria",
      "CER: soggetto autonomo, membri ammessi, scopo non lucrativo prevalente",
      "Tariffa ventennale fino a 1 MW; contributo PNRR nei comuni fino a 50.000 abitanti",
      "Regole operative GSE da verificare sempre"
     ],
     "nar": "In sintesi, l’autoconsumo e le comunità energetiche consentono di valorizzare l’energia rinnovabile prodotta localmente; un progetto efficace muove dai profili orari dei consumi e dalle regole vigenti del GSE.",
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
    "Il decreto legislativo che disciplina le CER è il:",
    [
     "D.lgs. 199/2021",
     "D.lgs. 102/2014",
     "D.lgs. 81/2008",
     "D.lgs. 152/2006"
    ],
    0,
    "Norma."
   ],
   [
    "Il decreto ministeriale sugli incentivi alle CER è il:",
    [
     "D.M. 7 dicembre 2023, n. 414",
     "D.M. 10 marzo 1998",
     "D.M. 388/2003",
     "D.M. 11 gennaio 2017"
    ],
    0,
    "Incentivi."
   ],
   [
    "Gli incentivi alle CER sono gestiti dal:",
    [
     "GSE",
     "ENEA",
     "INAIL",
     "Comune"
    ],
    0,
    "GSE."
   ],
   [
    "La tariffa incentivante riguarda impianti fino a:",
    [
     "1 MW",
     "10 kW",
     "100 MW",
     "20 kW"
    ],
    0,
    "Tariffa."
   ],
   [
    "Il gruppo di autoconsumatori opera:",
    [
     "Nello stesso edificio o condominio",
     "In tutta la regione",
     "Solo in ambito agricolo",
     "Solo tra imprese"
    ],
    0,
    "Configurazioni."
   ],
   [
    "La CER deve avere come obiettivo principale:",
    [
     "Benefici ambientali, economici o sociali",
     "Profitti finanziari",
     "La vendita di energia all’estero",
     "Nessuno"
    ],
    0,
    "Scopo."
   ],
   [
    "Per un’impresa membro, la partecipazione alla CER:",
    [
     "Non può essere l’attività principale",
     "Deve essere l’attività principale",
     "È vietata alle PMI",
     "È obbligatoria"
    ],
    0,
    "Membri."
   ],
   [
    "Un produttore terzo può:",
    [
     "Mettere l’impianto nella disponibilità della CER",
     "Controllare la CER sempre",
     "Vendere energia ai membri fuori dalle regole",
     "Nulla"
    ],
    0,
    "Produttore terzo."
   ],
   [
    "L’energia immessa ma non condivisa:",
    [
     "È valorizzata come energia venduta",
     "Riceve la tariffa premio",
     "Va perduta",
     "È vietata"
    ],
    0,
    "Condivisione."
   ],
   [
    "Lo scambio sul posto per i nuovi impianti:",
    [
     "Non è più disponibile",
     "È obbligatorio",
     "È l’unica opzione",
     "Sostituisce le CER"
    ],
    0,
    "Autoconsumo."
   ],
   [
    "La producibilità di un impianto si può stimare con:",
    [
     "PVGIS",
     "Il DVR",
     "Il registro dei rifiuti",
     "Il MUD"
    ],
    0,
    "PVGIS."
   ],
   [
    "La maggiorazione della tariffa per il fotovoltaico si applica:",
    [
     "Nelle regioni del Centro e del Nord",
     "Solo al Sud",
     "Solo alle isole",
     "Mai"
    ],
    0,
    "Maggiorazione."
   ],
   [
    "Chi riceve il contributo in conto capitale PNRR:",
    [
     "Ha una tariffa ridotta in proporzione",
     "Ha una tariffa doppia",
     "Non ha alcuna tariffa",
     "Non può far parte di una CER"
    ],
    0,
    "Cumulo."
   ],
   [
    "Le componenti tariffarie restituite sull’energia autoconsumata sono disciplinate dal:",
    [
     "TIAD dell’ARERA",
     "D.lgs. 81/2008",
     "Codice civile",
     "Regolamento REACH"
    ],
    0,
    "ARERA."
   ],
   [
    "Membri con consumi diurni in una CER:",
    [
     "Aumentano l’energia condivisa",
     "La riducono",
     "Non contano",
     "Sono vietati"
    ],
    0,
    "Mix."
   ],
   [
    "Il registro degli impianti di produzione gestito da Terna si chiama:",
    [
     "Gaudì",
     "RENTRI",
     "SISTRI",
     "Portale ENEA"
    ],
    0,
    "Gaudì."
   ]
  ]
 }
};
