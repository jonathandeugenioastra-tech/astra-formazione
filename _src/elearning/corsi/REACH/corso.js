/* Corso – REACH e CLP per le imprese (8 ore)
   Reg. (CE) 1907/2006 (REACH) · Reg. (CE) 1272/2008 (CLP) · Reg. (UE) 2024/2865
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "REACH",
 "titolo": "REACH e CLP per le imprese",
 "sottotitolo": "Ruoli, obblighi, restrizioni, autorizzazioni, classificazione ed SDS",
 "ore": 8,
 "rif": "Reg. (CE) 1907/2006 (REACH) · Reg. (CE) 1272/2008 (CLP) · Reg. (UE) 2024/2865",
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
     "tit": "REACH e CLP per le imprese",
     "sott": "Corso di 8 ore",
     "nar": "Benvenuti al corso sui regolamenti REACH e CLP: ruoli e obblighi lungo la catena di approvvigionamento, registrazione, restrizioni, autorizzazioni, classificazione, etichettatura e schede di dati di sicurezza.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Identificare il proprio ruolo e gli obblighi REACH",
      "Gestire SVHC, restrizioni e autorizzazioni",
      "Applicare classificazione ed etichettatura CLP",
      "Verificare e usare le schede di dati di sicurezza"
     ],
     "nar": "Al termine del corso il partecipante sarà in grado di identificare il ruolo dell’impresa nella catena di approvvigionamento e i relativi obblighi, di gestire sostanze estremamente preoccupanti, restrizioni e autorizzazioni, di applicare le regole CLP e di verificare le schede di dati di sicurezza.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Regolamento REACH",
   "min": 235,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Regolamento REACH",
     "nar": "Modulo 1: regolamento REACH.",
     "p": 0.6
    },
    {
     "t": "definizioni",
     "tit": "I ruoli nel REACH",
     "sott": "Reg. (CE) 1907/2006, art. 3 · apri ciascuna scheda",
     "voci": [
      [
       "F",
       "Fabbricante",
       "Persona stabilita nell’Unione che fabbrica una sostanza nell’Unione."
      ],
      [
       "I",
       "Importatore",
       "Persona stabilita nell’Unione responsabile dell’importazione."
      ],
      [
       "U",
       "Utilizzatore a valle",
       "Chi usa una sostanza, in quanto tale o in miscela, nell’esercizio delle attività industriali o professionali (es. formulatori, utilizzatori finali)."
      ],
      [
       "D",
       "Distributore",
       "Chi immagazzina e immette sul mercato una sostanza o miscela per conto terzi, senza usarla."
      ],
      [
       "R",
       "Rappresentante esclusivo",
       "Persona nell’Unione nominata da un fabbricante extra-UE per adempiere agli obblighi degli importatori."
      ]
     ],
     "nar": "Il primo passo consiste nell’identificare il proprio ruolo: fabbricante, importatore, utilizzatore a valle, distributore o rappresentante esclusivo di un fabbricante extraeuropeo. Gli obblighi variano in funzione del ruolo; le schede di approfondimento ne illustrano i dettagli.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Qual è il ruolo nel REACH?",
     "lead": "Seleziona un’impresa, poi il suo ruolo.",
     "colonne": [
      "Fabbricante",
      "Importatore",
      "Utilizzatore a valle",
      "Distributore",
      "Produttore di articoli"
     ],
     "schede": [
      [
       "Produce nell’Unione un solvente per la vendita",
       0,
       "Fabbrica la sostanza nell’Unione.",
       "Corretto."
      ],
      [
       "Acquista una resina dalla Cina e la porta in Italia",
       1,
       "Introduce la sostanza nel territorio doganale dell’Unione.",
       "Corretto."
      ],
      [
       "Usa una vernice acquistata in Italia per verniciare mobili",
       2,
       "Usa una miscela nell’esercizio dell’attività.",
       "Corretto."
      ],
      [
       "Rivende detergenti senza modificarli",
       3,
       "Immagazzina e immette sul mercato senza usare.",
       "Corretto."
      ],
      [
       "Fabbrica cavi elettrici con un rivestimento in PVC",
       4,
       "Produce articoli.",
       "Corretto."
      ],
      [
       "Formula una colla miscelando sostanze acquistate in Italia",
       2,
       "Il formulatore è un utilizzatore a valle.",
       "Corretto."
      ],
      [
       "Importa smartphone completi",
       1,
       "Importa articoli: per gli articoli valgono gli obblighi dell’art. 7 e 33.",
       "Corretto."
      ],
      [
       "Usa un lubrificante per le proprie macchine",
       2,
       "È utilizzatore a valle.",
       "Corretto."
      ]
     ],
     "nar": "Otto imprese. Individua il ruolo di ciascuna nel regolamento REACH: da questo dipendono gli obblighi.",
     "rif": "Reg. (CE) 1907/2006, art. 3",
     "est": true,
     "ancora": "I ruoli nel REACH"
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
     "t": "scenario",
     "tit": "L’uso che lo scenario non prevede",
     "scena": "Un’impresa riceve la SDS estesa di una sostanza registrata: il suo uso, la nebulizzazione per la pulizia di stampi, non compare tra gli usi identificati.",
     "decisioni": [
      {
       "dom": "Entro quando deve agire?",
       "opz": [
        [
         "Entro 12 mesi dalla ricezione della SDS estesa",
         true,
         "Corretto: è il termine per adeguarsi o scegliere un’altra strada."
        ],
        [
         "Entro 5 anni",
         false,
         "Il termine è molto più breve."
        ],
        [
         "Non deve fare nulla",
         false,
         "L’uso non coperto va gestito."
        ]
       ]
      },
      {
       "dom": "Quali opzioni ha?",
       "opz": [
        [
         "Adeguare l’uso, chiedere al fornitore di includerlo o preparare una propria relazione sulla sicurezza chimica",
         true,
         "Corretto: sono le opzioni dell’art. 37."
        ],
        [
         "Solo cambiare fornitore",
         false,
         "È possibile ma non è l’unica opzione."
        ],
        [
         "Continuare senza modifiche",
         false,
         "Non è conforme."
        ]
       ]
      },
      {
       "dom": "Che cosa comunica all’ECHA se prepara la propria relazione?",
       "opz": [
        [
         "Le informazioni previste dall’art. 38, salvo esenzioni come quantità inferiori a 1 t/anno",
         true,
         "Corretto."
        ],
        [
         "Nulla",
         false,
         "Ci sono obblighi di comunicazione."
        ],
        [
         "Solo il nome dell’impresa",
         false,
         "Non basta."
        ]
       ]
      }
     ],
     "chiusura": "Un uso non coperto dallo scenario si gestisce entro dodici mesi: adeguandosi, chiedendo al fornitore di includerlo o con una propria valutazione comunicata all’ECHA.",
     "nar": "Un uso non previsto nella SDS estesa. Decidi come procedere.",
     "rif": "Reg. (CE) 1907/2006, artt. 37 e 38",
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
     "t": "testo",
     "tit": "La registrazione",
     "foto": false,
     "lead": "Il principio «no data, no market»: le sostanze fabbricate o importate in quantità pari o superiori a 1 tonnellata all’anno per dichiarante devono essere registrate presso l’ECHA.",
     "punti": [
      "Dossier tecnico con informazioni crescenti per fasce di tonnellaggio (1, 10, 100, 1000 t/anno)",
      "Relazione sulla sicurezza chimica per quantità pari o superiori a 10 t/anno, con scenari di esposizione per le sostanze pericolose",
      "Condivisione dei dati tra dichiaranti della stessa sostanza (SIEF), registrazione congiunta",
      "Esenzioni e regimi particolari: polimeri (registrazione dei monomeri), intermedi, sostanze in articoli in alcuni casi",
      "Gli utilizzatori a valle verificano che i loro usi siano coperti dalle registrazioni dei fornitori"
     ],
     "appro": "Un utilizzatore a valle che importa direttamente una miscela da un paese extra-UE diventa importatore delle sostanze contenute, con i relativi obblighi di registrazione: è una situazione frequente e spesso sottovalutata.",
     "rif": "Reg. (CE) 1907/2006, artt. 6-24",
     "nar": "Le sostanze fabbricate o importate in quantità pari ad almeno una tonnellata all’anno devono essere registrate presso l’ECHA, secondo il principio per cui, in assenza di dati, non è consentita l’immissione sul mercato. Il contenuto del fascicolo cresce con il tonnellaggio; a partire da dieci tonnellate è richiesta la relazione sulla sicurezza chimica. Si osservi che chi importa direttamente una miscela da un Paese extraeuropeo assume la qualifica di importatore.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il rappresentante esclusivo del fabbricante extra-UE",
     "lead": "Un fabbricante stabilito fuori dall’Unione può nominare un rappresentante esclusivo che adempie agli obblighi di registrazione al posto degli importatori.",
     "punti": [
      "Art. 8 REACH: nomina con accordo scritto, rappresentante stabilito nell’UE",
      "Il rappresentante registra le sostanze e assume gli obblighi degli importatori",
      "Gli importatori coperti sono considerati utilizzatori a valle",
      "Il rappresentante conserva l’elenco dei clienti importatori e le quantità",
      "Senza rappresentante: ogni importatore registra le quantità oltre 1 tonnellata/anno"
     ],
     "appro": "Prima di importare direttamente da un fornitore extra-UE conviene verificare se esiste un rappresentante esclusivo e se la propria importazione è coperta dalla sua registrazione.",
     "rif": "Reg. (CE) 1907/2006 (REACH), artt. 5, 6 e 8",
     "nar": "Il regolamento REACH impone la registrazione delle sostanze fabbricate o importate nell’Unione in quantità pari o superiori a una tonnellata all’anno per ciascun fabbricante o importatore, secondo il principio senza dati, nessun mercato. Quando la sostanza proviene da un fabbricante stabilito fuori dall’Unione, gli obblighi ricadono sugli importatori. L’articolo otto offre però un’alternativa: il fabbricante extra europeo può nominare, con un accordo scritto, una persona fisica o giuridica stabilita nell’Unione come proprio rappresentante esclusivo. Il rappresentante esclusivo registra la sostanza e assume tutti gli obblighi che spetterebbero agli importatori; gli importatori coperti dall’accordo sono considerati utilizzatori a valle e non devono registrare. Il rappresentante deve avere un’adeguata conoscenza della gestione pratica delle sostanze e conservare informazioni aggiornate sulle quantità importate e sui clienti, oltre alla scheda di dati di sicurezza aggiornata. Per l’impresa che importa direttamente da un fornitore extra europeo è quindi essenziale verificare, prima dell’acquisto, se esiste un rappresentante esclusivo e se la propria importazione rientra nella copertura della sua registrazione. In caso contrario, oltre la tonnellata annua, la registrazione è a carico dell’importatore.",
     "est": true,
     "ancora": "La registrazione"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il fornitore con il rappresentante esclusivo",
     "scena": "Un fabbricante indiano dichiara di avere un rappresentante esclusivo nell’Unione che copre le importazioni della tua impresa per una sostanza.",
     "decisioni": [
      {
       "dom": "Che cosa verifichi?",
       "opz": [
        [
         "Che il rappresentante abbia registrato la sostanza e che la tua impresa sia nel suo elenco di importatori coperti, con le quantità",
         true,
         "Corretto: senza copertura l’obbligo resta all’importatore."
        ],
        [
         "Solo la fattura",
         false,
         "Non dimostra la copertura."
        ],
        [
         "Nulla, basta la dichiarazione",
         false,
         "Va verificata."
        ]
       ]
      },
      {
       "dom": "Se sei coperto, che ruolo hai?",
       "opz": [
        [
         "Utilizzatore a valle",
         true,
         "Corretto: gli importatori coperti sono considerati utilizzatori a valle."
        ],
        [
         "Importatore con obbligo di registrare",
         false,
         "La registrazione è del rappresentante."
        ],
        [
         "Distributore",
         false,
         "Non è il caso."
        ]
       ]
      },
      {
       "dom": "Le quantità importate crescono oltre la fascia registrata. Che cosa fai?",
       "opz": [
        [
         "Lo comunichi al rappresentante perché aggiorni la registrazione",
         true,
         "Corretto: la registrazione deve coprire le quantità."
        ],
        [
         "Nulla",
         false,
         "La copertura potrebbe non bastare."
        ],
        [
         "Registri tu la differenza",
         false,
         "Si coordina con il rappresentante."
        ]
       ]
      }
     ],
     "chiusura": "Con un rappresentante esclusivo l’importatore diventa utilizzatore a valle, ma deve verificare registrazione, copertura e quantità.",
     "nar": "Un fornitore extra-UE con rappresentante esclusivo. Verifica la tua posizione.",
     "rif": "Reg. (CE) 1907/2006, art. 8",
     "est": true,
     "ancora": "Il rappresentante esclusivo del fabbricante extra-UE"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Serve registrare?",
     "lead": "Un’impresa italiana importa da fuori Unione le seguenti merci ogni anno.",
     "dossier": [
      [
       "Sostanza A",
       "0,6 t come tale"
      ],
      [
       "Sostanza B",
       "15 t come tale, classificata pericolosa"
      ],
      [
       "Miscela M",
       "20 t di una miscela che contiene il 40% della sostanza C"
      ],
      [
       "Rappresentante esclusivo",
       "nessuno"
      ]
     ],
     "compiti": [
      {
       "q": "Calcola le tonnellate annue per sostanza.",
       "min": 5,
       "modello": "A: 0,6 t. B: 15 t. C: 20 × 0,40 = 8 t, perché per le miscele si conta la quantità di ciascuna sostanza contenuta.",
       "criteri": [
        "Ho calcolato 8 t per la sostanza C",
        "Ho considerato le sostanze in miscela"
       ]
      },
      {
       "q": "Quali sostanze vanno registrate e con quali requisiti?",
       "min": 7,
       "modello": "A: sotto 1 t, nessuna registrazione. B: registrazione nella fascia 10-100 t con relazione sulla sicurezza chimica e, essendo pericolosa, scenari di esposizione. C: registrazione nella fascia 1-10 t. Le registrazioni si fanno tramite il SIEF della sostanza, con condivisione dei dati.",
       "criteri": [
        "Ho escluso A",
        "Ho indicato la relazione per B",
        "Ho indicato la fascia di C e il SIEF"
       ]
      },
      {
       "q": "Quale alternativa riduce gli oneri dell’importatore?",
       "min": 5,
       "modello": "Chiedere al fabbricante extra-UE di nominare un rappresentante esclusivo che registri le sostanze: l’importatore diventa utilizzatore a valle. In alternativa acquistare da un importatore che ha già registrato.",
       "criteri": [
        "Ho proposto il rappresentante esclusivo",
        "Ho spiegato il cambio di ruolo"
       ]
      }
     ],
     "nar": "Nel laboratorio verifichi gli obblighi di registrazione di un importatore. Calcola le tonnellate per sostanza, stabilisci che cosa registrare e individua un’alternativa che riduca gli oneri, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1907/2006, artt. 6, 8, 10 e 14",
     "est": true,
     "ancora": "La registrazione"
    },
    {
     "t": "testo",
     "tit": "SVHC, elenco di sostanze candidate e articoli",
     "foto": false,
     "lead": "Le sostanze estremamente preoccupanti (SVHC) sono identificate e inserite nell’elenco di sostanze candidate all’autorizzazione.",
     "punti": [
      "Criteri: CMR di categoria 1A o 1B, PBT, vPvB, interferenti endocrini e sostanze di pari preoccupazione",
      "Obbligo di fornire la SDS per le sostanze in elenco",
      "Articoli: obbligo di informazione (art. 33) se una SVHC è presente in concentrazione superiore allo 0,1% in peso",
      "Notifica all’ECHA (art. 7, c. 2) per quantità superiori a 1 t/anno in articoli, oltre lo 0,1%",
      "Banca dati SCIP per gli articoli con SVHC, prevista dalla direttiva quadro sui rifiuti"
     ],
     "appro": "L’elenco delle sostanze candidate è aggiornato più volte l’anno: le imprese che producono o importano articoli devono monitorarlo e chiedere ai fornitori dichiarazioni aggiornate. Su richiesta di un consumatore l’informazione va fornita entro 45 giorni.",
     "rif": "Reg. (CE) 1907/2006, artt. 7, 33, 57, 59 · Direttiva 2008/98/CE",
     "nar": "Le sostanze estremamente preoccupanti sono inserite nell’elenco delle candidate. Se sono presenti negli articoli oltre lo 0,1 per cento in peso, scatta l’obbligo di informazione lungo la catena e, su richiesta, verso i consumatori entro quarantacinque giorni; oltre una tonnellata l’anno serve la notifica all’ECHA. L’elenco si aggiorna più volte l’anno.",
     "p": 1.6
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
     "ancora": "SVHC, elenco di sostanze candidate e articoli"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Lo 0,1% nell’articolo complesso",
     "lead": "Un’impresa importa biciclette. Le manopole contengono un plastificante dell’elenco delle sostanze candidate.",
     "dossier": [
      [
       "Bicicletta",
       "15 kg"
      ],
      [
       "Manopole",
       "2 manopole da 120 g ciascuna"
      ],
      [
       "SVHC",
       "0,3 g in ciascuna manopola"
      ],
      [
       "Importazioni annue",
       "10.000 biciclette"
      ]
     ],
     "compiti": [
      {
       "q": "Calcola la concentrazione e stabilisci se si applica l’art. 33.",
       "min": 6,
       "modello": "Ogni manopola è un articolo: 0,3 / 120 = 0,25%, oltre lo 0,1%. Si applica l’art. 33 anche se rispetto alla bicicletta intera la concentrazione sarebbe minima: la soglia si calcola su ogni articolo componente.",
       "criteri": [
        "Ho calcolato lo 0,25%",
        "Ho applicato la soglia al componente",
        "Ho concluso che l’art. 33 si applica"
       ]
      },
      {
       "q": "Serve la notifica all’ECHA dell’art. 7, comma 2?",
       "min": 6,
       "modello": "Quantità annua di SVHC: 10.000 biciclette × 2 manopole × 0,3 g = 6 kg, molto sotto 1 t: la notifica dell’art. 7, comma 2, non è dovuta. Resta la notifica alla banca dati SCIP.",
       "criteri": [
        "Ho calcolato 6 kg",
        "Ho confrontato con 1 t",
        "Ho ricordato la SCIP"
       ]
      },
      {
       "q": "Quali informazioni fornisci e a chi?",
       "min": 5,
       "modello": "Ai clienti professionali, alla fornitura, il nome della sostanza e le informazioni per l’uso sicuro; ai consumatori che lo chiedono, gratuitamente entro 45 giorni; la notifica SCIP all’ECHA prima dell’immissione sul mercato.",
       "criteri": [
        "Ho indicato i clienti professionali",
        "Ho indicato i consumatori",
        "Ho indicato la SCIP"
       ]
      }
     ],
     "nar": "Nel laboratorio applichi la soglia dello zero virgola uno per cento a un articolo complesso, una bicicletta. Calcola la concentrazione, verifica la notifica e indica le informazioni da fornire, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1907/2006, artt. 7 e 33 · Corte di giustizia UE, C-106/14",
     "est": true,
     "ancora": "SVHC, elenco di sostanze candidate e articoli"
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
     "t": "grafico",
     "tit": "Grafico interattivo · SVHC negli articoli",
     "rif": "Reg. (CE) 1907/2006, artt. 7 e 33",
     "lead": "Spostare il cursore sulla concentrazione di una sostanza dell’elenco delle candidate in un articolo.",
     "grafico": {
      "tipo": "soglie",
      "variabile": "Concentrazione della SVHC nell’articolo (% in peso)",
      "unita": "%",
      "min": 0,
      "max": 0.5,
      "passo": 0.01,
      "iniziale": 0.05,
      "zone": [
       {
        "nome": "Sotto lo 0,1%",
        "fino": 0.1,
        "colore": "#00B050",
        "testo": "Nessun obbligo di comunicazione ai sensi dell’art. 33, salvo altre restrizioni applicabili."
       },
       {
        "nome": "Pari o superiore allo 0,1%",
        "fino": 0.5,
        "colore": "#E07000",
        "testo": "Obbligo di fornire ai destinatari, e su richiesta ai consumatori entro 45 giorni, le informazioni per un uso sicuro (almeno il nome della sostanza); notifica all’ECHA se oltre 1 t/anno per produttore o importatore; comunicazione alla banca dati SCIP."
       }
      ]
     },
     "nar": "Grafico interattivo. Si sposti il cursore sulla concentrazione di una sostanza estremamente preoccupante in un articolo. Alla soglia dello zero virgola uno per cento in peso scattano gli obblighi di comunicazione lungo la catena di approvvigionamento e verso i consumatori, che devono ricevere le informazioni entro quarantacinque giorni dalla richiesta.",
     "est": true,
     "ancora": "SVHC, elenco di sostanze candidate e articoli"
    },
    {
     "t": "testo",
     "tit": "Autorizzazione e restrizioni",
     "foto": false,
     "lead": "Autorizzazione e restrizione sono gli strumenti con cui il REACH limita le sostanze più pericolose.",
     "punti": [
      "Autorizzazione (Allegato XIV): dopo la «data di scadenza» la sostanza può essere usata solo per usi autorizzati",
      "Gli utilizzatori a valle di usi autorizzati notificano l’uso all’ECHA e rispettano le condizioni dell’autorizzazione",
      "Restrizioni (Allegato XVII): condizioni o divieti di fabbricazione, immissione sul mercato o uso di determinate sostanze",
      "Esempi di voci dell’Allegato XVII: diisocianati (obbligo di formazione per gli utilizzatori), microplastiche aggiunte intenzionalmente (voce 78), piombo in alcuni articoli",
      "Monitoraggio degli aggiornamenti e verifica della conformità di prodotti e processi"
     ],
     "appro": "La restrizione sui diisocianati (voce 74) richiede dal 2023 una formazione specifica per gli utilizzatori industriali e professionali di prodotti con concentrazione superiore allo 0,1%, rinnovata almeno ogni cinque anni.",
     "rif": "Reg. (CE) 1907/2006, Titoli VII e VIII, Allegati XIV e XVII · Reg. (UE) 2020/1149 · Reg. (UE) 2023/2055",
     "nar": "L’autorizzazione riguarda le sostanze dell’Allegato quattordici: dopo la data di scadenza si usano solo per usi autorizzati. Le restrizioni dell’Allegato diciassette limitano o vietano usi specifici, come per i diisocianati, che richiedono formazione degli utilizzatori, o le microplastiche aggiunte intenzionalmente. Gli aggiornamenti vanno monitorati.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La restrizione sulle microplastiche aggiunte intenzionalmente",
     "lead": "Il Regolamento (UE) 2023/2055 ha introdotto la voce 78 dell’Allegato XVII sulle microparticelle di polimeri sintetici.",
     "punti": [
      "Microparticelle di polimeri sintetici di dimensione inferiore a 5 mm, insolubili e non degradabili",
      "Divieto di immissione sul mercato come tali o in miscele in concentrazione pari o superiore allo 0,01% in peso",
      "In vigore dal 17 ottobre 2023, con periodi transitori per alcuni usi",
      "Esempi: glitter sfusi, microsfere nei cosmetici, granuli di intaso per superfici sportive",
      "Obblighi di istruzioni e di comunicazione annuale all’ECHA per gli usi in deroga"
     ],
     "appro": "La restrizione si affianca al Regolamento (UE) 2025/2365 sulla prevenzione delle perdite di pellet di plastica lungo la catena di approvvigionamento.",
     "rif": "Reg. (CE) 1907/2006, Allegato XVII, voce 78 · Reg. (UE) 2023/2055 · Reg. (UE) 2025/2365",
     "nar": "Le microplastiche aggiunte intenzionalmente ai prodotti si disperdono nell’ambiente e non possono essere recuperate. Il regolamento europeo duemilaventitré barra duemilacinquantacinque ha introdotto la voce settantotto dell’Allegato diciassette del regolamento REACH, che riguarda le microparticelle di polimeri sintetici: particelle di dimensione inferiore a cinque millimetri, insolubili e non biodegradabili secondo i criteri del regolamento. Dal diciassette ottobre duemilaventitré è vietato immetterle sul mercato come tali o in miscele in cui siano presenti in concentrazione pari o superiore allo zero virgola zero uno per cento in peso, quando sono aggiunte per conferire una caratteristica ricercata. Il divieto ha colpito subito, ad esempio, i glitter sfusi e le microsfere nei cosmetici da risciacquo, mentre per altri usi sono previsti periodi transitori, come per i granuli di intaso delle superfici sportive sintetiche. Alcuni usi sono esentati, ad esempio nei siti industriali, ma con obblighi di istruzioni per l’uso e di comunicazione annuale all’Agenzia europea per le sostanze chimiche. Per le imprese che producono o trasformano materie plastiche si aggiunge il regolamento duemilaventicinque barra duemilatrecentosessantacinque sulla prevenzione delle perdite di pellet.",
     "est": true,
     "ancora": "Autorizzazione e restrizioni"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Verificare le restrizioni su articoli",
     "lead": "Un’impresa progetta e vende accessori di abbigliamento e oggetti in gomma per il pubblico.",
     "dossier": [
      [
       "Prodotto 1",
       "fibbie metalliche per cinture, a contatto prolungato con la pelle"
      ],
      [
       "Prodotto 2",
       "impugnature in gomma per utensili da giardino"
      ],
      [
       "Prodotto 3",
       "portachiavi per bambini in plastica morbida"
      ],
      [
       "Fornitori",
       "extra-UE, senza dichiarazioni"
      ]
     ],
     "compiti": [
      {
       "q": "Individua le restrizioni da verificare per ogni prodotto.",
       "min": 7,
       "modello": "Fibbie: rilascio di nichel, voce 27, con limite di 0,5 µg/cm² per settimana per il contatto prolungato. Impugnature: idrocarburi policiclici aromatici, voce 50, limite di 1 mg/kg per ciascuno degli otto IPA nei componenti a contatto con la pelle per il pubblico. Portachiavi: ftalati, voce 51, e, se considerati giocattoli, limiti più severi; IPA a 0,5 mg/kg per i giocattoli.",
       "criteri": [
        "Ho indicato il nichel",
        "Ho indicato gli IPA con i limiti",
        "Ho considerato gli ftalati"
       ],
       "minc": 120
      },
      {
       "q": "Come organizzi i controlli sui fornitori?",
       "min": 6,
       "modello": "Capitolato con le restrizioni applicabili; dichiarazioni di conformità; rapporti di prova di laboratori accreditati su campioni rappresentativi; controlli a campione sui lotti; azioni in caso di non conformità.",
       "criteri": [
        "Ho previsto capitolato e dichiarazioni",
        "Ho previsto prove di laboratorio",
        "Ho previsto controlli sui lotti"
       ]
      },
      {
       "q": "Che cosa fai se un lotto di fibbie supera il limite del nichel?",
       "min": 5,
       "modello": "Si blocca il lotto, non si immette sul mercato, si informa il fornitore, si valutano richiamo o ritiro se già venduto e si rafforzano i controlli; si documenta tutto.",
       "criteri": [
        "Ho bloccato il lotto",
        "Ho considerato il ritiro",
        "Ho previsto la documentazione"
       ]
      }
     ],
     "nar": "Nel laboratorio verifichi le restrizioni dell’Allegato diciassette su tre articoli. Individua le restrizioni applicabili, organizza i controlli sui fornitori e decidi come gestire una non conformità, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1907/2006, Allegato XVII, voci 27, 50 e 51",
     "est": true,
     "ancora": "Autorizzazione e restrizioni"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "I glitter del negozio di bricolage",
     "scena": "Un negozio di articoli per il fai da te vende glitter sfusi in plastica per decorazioni e chiede se può continuare.",
     "decisioni": [
      {
       "dom": "I glitter sfusi rientrano nella restrizione?",
       "opz": [
        [
         "Sì: sono microplastiche aggiunte intenzionalmente immesse sul mercato come tali, vietate dal 17 ottobre 2023",
         true,
         "Corretto."
        ],
        [
         "No, sono un prodotto decorativo",
         false,
         "L’uso decorativo non li esclude."
        ],
        [
         "Solo se venduti online",
         false,
         "Il canale non conta."
        ]
       ]
      },
      {
       "dom": "Che cosa può vendere in alternativa?",
       "opz": [
        [
         "Glitter non coperti dalla definizione, ad esempio solubili, biodegradabili secondo i criteri o di origine naturale non modificata chimicamente",
         true,
         "Corretto: occorre verificare la documentazione del fornitore."
        ],
        [
         "Gli stessi glitter in confezioni più piccole",
         false,
         "La restrizione resta."
        ],
        [
         "Qualsiasi glitter etichettato «eco»",
         false,
         "Un’etichetta non basta."
        ]
       ]
      },
      {
       "dom": "Come si tutela il negozio?",
       "opz": [
        [
         "Chiedendo ai fornitori dichiarazioni e documentazione sulla conformità",
         true,
         "Corretto."
        ],
        [
         "Ignorando la restrizione",
         false,
         "Espone a sanzioni."
        ],
        [
         "Togliendo l’etichetta",
         false,
         "Non cambia la sostanza."
        ]
       ]
      }
     ],
     "chiusura": "Le microplastiche aggiunte intenzionalmente sono vietate come tali: chi vende prodotti alternativi deve averne la documentazione dal fornitore.",
     "nar": "Un negozio vende glitter in plastica. Verifica la restrizione.",
     "rif": "Reg. (UE) 2023/2055",
     "est": true,
     "ancora": "La restrizione sulle microplastiche aggiunte intenzionalmente"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le sostanze dell’Allegato XIV: uso autorizzato e obblighi a valle",
     "lead": "Le sostanze incluse nell’Allegato XIV non possono essere usate dopo la «data di scadenza» senza un’autorizzazione rilasciata dalla Commissione.",
     "punti": [
      "Sostanze estremamente preoccupanti prioritarie trasferite dall’elenco delle candidate all’Allegato XIV",
      "Data di scadenza: dopo di essa uso e immissione sul mercato solo se autorizzati",
      "Autorizzazione per usi specifici, con revisione periodica e condizioni",
      "Utilizzatore a valle: rispetta le condizioni dell’autorizzazione del fornitore",
      "Notifica all’ECHA entro 3 mesi dalla prima fornitura della sostanza autorizzata (art. 66)"
     ],
     "appro": "Il numero di autorizzazione compare in etichetta: va verificato che il proprio uso rientri tra quelli autorizzati al fornitore.",
     "rif": "Reg. (CE) 1907/2006, artt. 56, 58, 60, 65 e 66 e Allegato XIV",
     "nar": "L’autorizzazione è il meccanismo con cui il regolamento REACH sostituisce progressivamente le sostanze estremamente preoccupanti. Tra le sostanze dell’elenco delle candidate, l’Agenzia europea per le sostanze chimiche individua quelle prioritarie, che la Commissione inserisce nell’Allegato quattordici. Per ciascuna è fissata una data di scadenza: dopo quella data la sostanza non può essere immessa sul mercato né usata, salvo che per un uso specifico sia stata rilasciata un’autorizzazione. L’autorizzazione è concessa dalla Commissione per usi determinati, quando i rischi sono adeguatamente controllati oppure quando i benefici socioeconomici prevalgono e non esistono alternative idonee; prevede condizioni di uso e un periodo di revisione. Gli utilizzatori a valle possono usare la sostanza nell’ambito dell’autorizzazione rilasciata a un attore a monte della loro catena, rispettandone le condizioni. Il numero di autorizzazione deve comparire sull’etichetta, e l’utilizzatore a valle deve notificare l’uso all’Agenzia entro tre mesi dalla prima fornitura, secondo l’articolo sessantasei. Per l’impresa questo significa verificare che il proprio uso rientri effettivamente tra quelli autorizzati e pianificare per tempo la sostituzione delle sostanze destinate all’Allegato quattordici.",
     "est": true,
     "ancora": "Autorizzazione e restrizioni"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "La cromatura con triossido di cromo",
     "scena": "Un’impresa di cromatura decorativa acquista triossido di cromo da un fornitore titolare di un’autorizzazione per il suo uso.",
     "decisioni": [
      {
       "dom": "Può continuare a usarlo?",
       "opz": [
        [
         "Sì, se il suo uso rientra in quello autorizzato e rispetta le condizioni dell’autorizzazione",
         true,
         "Corretto: gli utilizzatori a valle possono avvalersi dell’autorizzazione del fornitore."
        ],
        [
         "Sì, sempre",
         false,
         "Servono uso coperto e condizioni rispettate."
        ],
        [
         "No, mai",
         false,
         "È possibile se coperto."
        ]
       ]
      },
      {
       "dom": "Quale adempimento verso l’ECHA?",
       "opz": [
        [
         "Notificare l’uso entro tre mesi dalla prima fornitura",
         true,
         "Corretto: art. 66."
        ],
        [
         "Nessuno",
         false,
         "La notifica è obbligatoria."
        ],
        [
         "Registrare la sostanza",
         false,
         "Non spetta all’utilizzatore a valle."
        ]
       ]
      },
      {
       "dom": "Quali condizioni sono tipiche in questi casi?",
       "opz": [
        [
         "Misure di controllo dell’esposizione, monitoraggio dell’aria e biologico, e attenzione alle alternative",
         true,
         "Corretto."
        ],
        [
         "Solo l’etichetta",
         false,
         "Le condizioni sono più ampie."
        ],
        [
         "Nessuna",
         false,
         "L’autorizzazione ha condizioni."
        ]
       ]
      }
     ],
     "chiusura": "Uso coperto e condizioni rispettate, notifica entro tre mesi, monitoraggio e ricerca di alternative: sono gli obblighi a valle delle sostanze soggette ad autorizzazione.",
     "nar": "Una cromatura usa una sostanza soggetta ad autorizzazione. Verifica gli obblighi.",
     "rif": "Reg. (CE) 1907/2006, artt. 56 e 66",
     "est": true,
     "ancora": "Le sostanze dell’Allegato XIV: uso autorizzato e obblighi a valle"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "Autorizzazione o restrizione?",
     "lead": "Seleziona una caratteristica, poi lo strumento REACH.",
     "colonne": [
      "Autorizzazione (Allegato XIV)",
      "Restrizione (Allegato XVII)"
     ],
     "schede": [
      [
       "Dopo la data di scadenza la sostanza si usa solo per usi autorizzati",
       0,
       "È il meccanismo dell’autorizzazione.",
       "Corretto."
      ],
      [
       "Limita il contenuto di nichel rilasciato dagli articoli a contatto con la pelle",
       1,
       "È una restrizione.",
       "Corretto."
      ],
      [
       "L’utilizzatore a valle notifica all’ECHA l’uso entro tre mesi dalla prima fornitura",
       0,
       "Art. 66.",
       "Corretto."
      ],
      [
       "Vieta le microplastiche aggiunte intenzionalmente oltre una certa concentrazione",
       1,
       "Voce dell’Allegato XVII.",
       "Corretto."
      ],
      [
       "Riguarda sostanze estremamente preoccupanti prioritarie",
       0,
       "Le SVHC prioritarie passano all’Allegato XIV.",
       "Corretto."
      ],
      [
       "Impone la formazione per l’uso professionale dei diisocianati",
       1,
       "Voce 74 dell’Allegato XVII.",
       "Corretto."
      ]
     ],
     "nar": "Sei caratteristiche. Distingui quelle dell’autorizzazione da quelle delle restrizioni.",
     "rif": "Reg. (CE) 1907/2006, Titoli VII e VIII",
     "est": true,
     "ancora": "Autorizzazione e restrizioni"
    },
    {
     "t": "caso",
     "tit": "Esercitazione · L’importazione diretta",
     "scena": "Un’azienda italiana, per risparmiare, acquista direttamente da un produttore asiatico 5 tonnellate l’anno di una vernice contenente un solvente non registrato.",
     "domanda": "Quali obblighi nascono?",
     "opz": [
      [
       "Nessuno: è un utilizzatore a valle",
       false,
       "No: importando dall’esterno dell’Unione diventa importatore."
      ],
      [
       "L’azienda è importatrice delle sostanze contenute oltre la soglia di 1 t/anno: deve registrarle o ottenere che il fabbricante extra-UE nomini un rappresentante esclusivo; deve inoltre garantire SDS ed etichettatura conformi",
       true,
       "Corretto: artt. 6 e 8 REACH."
      ],
      [
       "Basta tradurre l’etichetta",
       false,
       "No: la registrazione resta necessaria."
      ]
     ],
     "rif": "Reg. (CE) 1907/2006, artt. 3, 6, 8",
     "appro": "La soglia di 1 t/anno si calcola per ciascuna sostanza contenuta nella miscela importata.",
     "nar": "Esercitazione. Esaminato il caso proposto, si individui la risposta corretta, valutando la motivazione di ciascuna alternativa.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · La mappa REACH della tua impresa",
     "lead": "Prepari la mappa REACH di un’impresa che produce adesivi.",
     "dossier": [
      [
       "Acquisti",
       "12 sostanze da fornitori italiani; 2 sostanze importate dalla Corea, 4 e 25 t l’anno"
      ],
      [
       "Prodotti",
       "adesivi per l’industria e per il fai da te"
      ],
      [
       "Contenuti",
       "un adesivo contiene diisocianati allo 0,5%"
      ]
     ],
     "compiti": [
      {
       "q": "Indica i ruoli dell’impresa e gli obblighi principali.",
       "min": 7,
       "modello": "Utilizzatore a valle e formulatore per le sostanze acquistate in Italia: verificare gli usi negli scenari, preparare SDS e scenari per i clienti. Importatore per le due sostanze coreane: registrazione nelle fasce 1-10 e 100-1000 t, salvo rappresentante esclusivo. Fornitore di miscele: classificazione, etichettatura, notifica ai centri antiveleni e UFI.",
       "criteri": [
        "Ho indicato i ruoli",
        "Ho indicato la registrazione",
        "Ho indicato gli obblighi del formulatore"
       ]
      },
      {
       "q": "Quali obblighi speciali derivano dall’adesivo con diisocianati?",
       "min": 5,
       "modello": "Restrizione della voce 74: etichetta con l’avviso sulla formazione per gli usi professionali e industriali; per il fai da te verificare le condizioni di vendita al pubblico previste dalle norme; formazione degli utilizzatori professionali.",
       "criteri": [
        "Ho richiamato la voce 74",
        "Ho distinto professionale e pubblico"
       ]
      },
      {
       "q": "Quali sono le priorità dei prossimi sei mesi?",
       "min": 5,
       "modello": "Verificare le registrazioni delle importazioni o nominare il rappresentante esclusivo; controllare SDS e scenari in entrata e in uscita; aggiornare etichette e notifiche; monitorare l’elenco delle candidate per le sostanze usate.",
       "criteri": [
        "Ho previsto le registrazioni",
        "Ho previsto SDS ed etichette",
        "Ho previsto il monitoraggio delle SVHC"
       ]
      }
     ],
     "nar": "Nel laboratorio prepari la mappa REACH di un’impresa che produce adesivi. Individua ruoli e obblighi, gli obblighi legati ai diisocianati e le priorità dei prossimi sei mesi, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1907/2006 · Reg. (CE) 1272/2008",
     "est": true,
     "ancora": "Esercitazione · L’importazione diretta"
    },
    {
     "foto": false,
     "t": "applica",
     "tit": "Il REACH nella tua impresa",
     "lead": "Verifica la tua posizione rispetto al REACH.",
     "voci": [
      "Conosco il mio ruolo per ogni prodotto",
      "Importo sostanze o miscele da fuori Unione",
      "Ricevo SDS estese con scenari",
      "Verifico gli usi negli scenari",
      "Fornisco articoli con SVHC",
      "Controllo le restrizioni sui prodotti"
     ],
     "campo": "L’obbligo REACH più urgente per te",
     "esempio": "Es.: verificare la registrazione della resina importata",
     "min": 3,
     "nar": "Verifica la posizione della tua impresa rispetto al REACH e indica l’obbligo più urgente.",
     "est": true,
     "ancora": "Esercitazione · L’importazione diretta"
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Ripasso · REACH",
     "voci": [
      [
       "La registrazione è obbligatoria da 1 t/anno per fabbricante o importatore.",
       true,
       "Vero."
      ],
      [
       "La soglia dello 0,1% per le SVHC si calcola sull’articolo complesso intero.",
       false,
       "Falso: si calcola su ogni articolo componente."
      ],
      [
       "L’importatore coperto da un rappresentante esclusivo è un utilizzatore a valle.",
       true,
       "Vero."
      ],
      [
       "Le restrizioni dell’Allegato XVII riguardano solo le sostanze, non gli articoli.",
       false,
       "Falso: molte restrizioni riguardano articoli."
      ]
     ],
     "nar": "Ripasso: quattro affermazioni sul REACH.",
     "rif": "Reg. (CE) 1907/2006",
     "est": true,
     "ancora": "Esercitazione · L’importazione diretta"
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 3,
     "domande": [
      [
       "Le sostanze si registrano a partire da:",
       [
        "1 t/anno",
        "100 kg/anno",
        "10 t/anno",
        "1000 t/anno"
       ],
       0,
       "Registrazione."
      ],
      [
       "L’obbligo di informazione per le SVHC negli articoli scatta oltre:",
       [
        "0,1% in peso",
        "1%",
        "10%",
        "50%"
       ],
       0,
       "Art. 33."
      ],
      [
       "Le restrizioni sono nell’Allegato:",
       [
        "XVII",
        "XIV",
        "II",
        "VI"
       ],
       0,
       "Restrizioni."
      ],
      [
       "Chi importa direttamente una miscela da un paese extra-UE è:",
       [
        "Importatore",
        "Solo distributore",
        "Utilizzatore a valle soltanto",
        "Esente"
       ],
       0,
       "Ruoli."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 1.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Regolamento CLP e SDS",
   "min": 240,
   "foto": "laboratorio",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Regolamento CLP e SDS",
     "nar": "Modulo 2: regolamento CLP e SDS.",
     "p": 0.6
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
     "t": "esempio",
     "tit": "Esempio guidato · Quale categoria di liquido infiammabile?",
     "lead": "I criteri del punto di infiammabilità e del punto di ebollizione.",
     "passi": [
      [
       "Categoria 1",
       "Punto di infiammabilità sotto 23 °C e punto iniziale di ebollizione fino a 35 °C.",
       "H224"
      ],
      [
       "Categoria 2",
       "Punto di infiammabilità sotto 23 °C e punto iniziale di ebollizione oltre 35 °C.",
       "H225"
      ],
      [
       "Categoria 3",
       "Punto di infiammabilità tra 23 e 60 °C.",
       "H226"
      ],
      [
       "Il caso",
       "Un diluente ha punto di infiammabilità di 12 °C e punto di ebollizione di 110 °C.",
       "Categoria 2 · H225"
      ],
      [
       "L’etichetta",
       "Pittogramma GHS02, avvertenza «Pericolo».",
       "GHS02 · Pericolo"
      ]
     ],
     "nar": "Classifichiamo un liquido infiammabile. Sotto i ventitré gradi di punto di infiammabilità si è in categoria uno o due, a seconda che il punto di ebollizione sia fino a trentacinque gradi o superiore; tra ventitré e sessanta gradi si è in categoria tre. Un diluente con infiammabilità a dodici gradi ed ebollizione a centodieci è in categoria due, con H duecentoventicinque, fiamma e avvertenza «Pericolo».",
     "rif": "Reg. (CE) 1272/2008, Allegato I, punto 2.6",
     "est": true,
     "ancora": "Il regolamento CLP: classi e categorie di pericolo"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Classificare una miscela per l’ambiente",
     "lead": "Classifichi per i pericoli per l’ambiente acquatico una miscela antivegetativa.",
     "dossier": [
      [
       "Componente P",
       "2%, Aquatic Chronic 1, fattore M = 1"
      ],
      [
       "Componente Q",
       "4%, Aquatic Chronic 2"
      ],
      [
       "Altri componenti",
       "non classificati per l’ambiente"
      ],
      [
       "Regole di somma",
       "Chronic 1 se Σ(C1 × M) ≥ 25%; Chronic 2 se Σ(C1 × M × 10) + Σ C2 ≥ 25%; Chronic 3 se Σ(C1 × M × 100) + Σ(C2 × 10) + Σ C3 ≥ 25%"
      ]
     ],
     "compiti": [
      {
       "q": "Applica il metodo della somma con M = 1.",
       "min": 7,
       "modello": "Chronic 1: 2 × 1 = 2%, sotto 25%. Chronic 2: 2 × 1 × 10 + 4 = 24%, sotto 25%. Chronic 3: 2 × 1 × 100 + 4 × 10 = 240%, oltre 25%. La miscela è Aquatic Chronic 3, H412, senza pittogramma.",
       "criteri": [
        "Ho applicato le tre somme in ordine",
        "Ho ottenuto Chronic 3",
        "Ho indicato H412 senza pittogramma"
       ]
      },
      {
       "q": "Che cosa cambia se il fattore M del componente P è 10?",
       "min": 6,
       "modello": "Chronic 1: 2 × 10 = 20%, sotto 25%. Chronic 2: 2 × 10 × 10 + 4 = 204%, oltre 25%. La miscela è Aquatic Chronic 2, H411, con pittogramma GHS09.",
       "criteri": [
        "Ho ricalcolato con M = 10",
        "Ho ottenuto Chronic 2",
        "Ho indicato il pittogramma GHS09"
       ]
      },
      {
       "q": "Dove si trova il fattore M e perché è importante?",
       "min": 5,
       "modello": "In sezione 3 della SDS del fornitore, come previsto dal Reg. (UE) 2020/878, oppure nella classificazione armonizzata. Moltiplica il peso dei componenti molto tossici: ignorarlo porta a sottovalutare la classificazione.",
       "criteri": [
        "Ho indicato la sezione 3",
        "Ho spiegato l’effetto del fattore M"
       ]
      }
     ],
     "nar": "Nel laboratorio classifichi una miscela per i pericoli per l’ambiente acquatico con il metodo della somma. Applica le regole con due diversi fattori M e spiega il ruolo del fattore, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1272/2008, Allegato I, punto 4.1.3.5",
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
     "tit": "L’etichetta CLP e le novità della revisione",
     "foto": false,
     "lead": "L’etichetta comunica i pericoli in modo standardizzato e deve essere leggibile e completa.",
     "punti": [
      "Elementi: identificatori del prodotto, nome e recapiti del fornitore, quantità nominale, pittogrammi, avvertenza, frasi H, frasi P, informazioni supplementari",
      "Lingua dello Stato membro in cui il prodotto è immesso sul mercato",
      "Identificatore unico di formula (UFI) per le miscele pericolose notificate ai centri antiveleni (Allegato VIII)",
      "Revisione del CLP con il Reg. (UE) 2024/2865: requisiti minimi di leggibilità (dimensioni dei caratteri), etichette pieghevoli, vendite a distanza, ricariche",
      "Applicazione scaglionata delle nuove disposizioni secondo le date del regolamento"
     ],
     "appro": "Le date di applicazione delle varie parti della revisione del CLP sono differenziate: prima di riprogettare le etichette occorre verificare quali disposizioni sono già applicabili al proprio prodotto. Le sostanze e miscele già immesse sul mercato possono beneficiare di periodi transitori.",
     "rif": "Reg. (CE) 1272/2008, Titolo III e Allegato VIII · Reg. (UE) 2024/2865",
     "nar": "L’etichetta CLP riporta identificatori, fornitore, quantità, pittogrammi, avvertenza, frasi H e P, nella lingua del Paese. Le miscele pericolose notificate ai centri antiveleni hanno il codice UFI. La revisione del 2024 introduce requisiti di leggibilità e regole per vendite a distanza e ricariche, con applicazione scaglionata.",
     "p": 1.6
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
     "ancora": "L’etichetta CLP e le novità della revisione"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "Il prodotto venduto online",
     "scena": "Un’impresa vende online un disincrostante classificato Skin Corr. 1. La pagina del prodotto mostra solo foto, prezzo e descrizione commerciale.",
     "decisioni": [
      {
       "dom": "La pagina è conforme?",
       "opz": [
        [
         "No: chi vende a distanza deve indicare i pericoli prima dell’acquisto, come pittogrammi, avvertenza e indicazioni di pericolo",
         true,
         "Corretto: il CLP richiede le informazioni sui pericoli anche nella pubblicità e nelle vendite a distanza."
        ],
        [
         "Sì, l’etichetta è sulla confezione",
         false,
         "Il consumatore deve conoscere i pericoli prima di acquistare."
        ],
        [
         "Sì, se c’è il link alla SDS",
         false,
         "Non basta."
        ]
       ]
      },
      {
       "dom": "Che cosa aggiungi alla pagina?",
       "opz": [
        [
         "Pittogramma, avvertenza, indicazioni di pericolo e, se previsto, informazioni supplementari, coerenti con l’etichetta",
         true,
         "Corretto."
        ],
        [
         "Una frase «maneggiare con cura»",
         false,
         "È generica."
        ],
        [
         "Nulla",
         false,
         "Le informazioni sono obbligatorie."
        ]
       ]
      },
      {
       "dom": "Chi controlla la coerenza tra pagina, etichetta e SDS?",
       "opz": [
        [
         "Un responsabile interno con una procedura di revisione a ogni aggiornamento",
         true,
         "Corretto."
        ],
        [
         "Il fornitore del sito web",
         false,
         "La responsabilità è dell’impresa."
        ],
        [
         "Nessuno",
         false,
         "Serve un controllo."
        ]
       ]
      }
     ],
     "chiusura": "Nella vendita a distanza i pericoli vanno mostrati prima dell’acquisto, coerenti con etichetta e SDS e aggiornati a ogni revisione.",
     "nar": "Un prodotto pericoloso venduto online. Verifica la pagina.",
     "rif": "Reg. (CE) 1272/2008, art. 48, come modificato dal Reg. (UE) 2024/2865",
     "est": true,
     "ancora": "L’etichetta CLP e le novità della revisione"
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
     "tit": "Laboratorio · La notifica ai centri antiveleni",
     "lead": "Un formulatore immette sul mercato italiano un nuovo detergente classificato Skin Corr. 1.",
     "dossier": [
      [
       "Uso",
       "professionale"
      ],
      [
       "Composizione",
       "4 componenti, uno con identità riservata dal fornitore"
      ],
      [
       "Mercati",
       "Italia, poi Francia"
      ],
      [
       "Etichetta",
       "in preparazione"
      ]
     ],
     "compiti": [
      {
       "q": "Chi notifica, quando e con quali informazioni?",
       "min": 6,
       "modello": "Il formulatore, come utilizzatore a valle che immette la miscela sul mercato, prima dell’immissione, tramite il portale ECHA nel formato armonizzato: identificazione, classificazione ed etichetta, composizione con concentrazioni, informazioni tossicologiche, categoria di prodotto EuPCS e UFI.",
       "criteri": [
        "Ho indicato chi e quando",
        "Ho indicato il portale e il formato",
        "Ho elencato le informazioni"
       ]
      },
      {
       "q": "Come gestisci il componente con identità riservata?",
       "min": 5,
       "modello": "Si chiede al fornitore di comunicare le informazioni direttamente all’ECHA o di fornire il suo UFI di miscela in miscela, così che la notifica sia completa senza rivelare l’identità al formulatore.",
       "criteri": [
        "Ho proposto la comunicazione del fornitore",
        "Ho citato l’UFI della miscela in miscela"
       ]
      },
      {
       "q": "Che cosa cambia per l’etichetta e per la Francia?",
       "min": 6,
       "modello": "Il codice UFI di 16 caratteri va riportato sull’etichetta, in genere vicino alle informazioni supplementari; per la Francia serve la notifica anche per quello Stato membro e l’etichetta in lingua francese. Ogni modifica significativa della composizione richiede l’aggiornamento della notifica e, se necessario, un nuovo UFI.",
       "criteri": [
        "Ho indicato l’UFI in etichetta",
        "Ho considerato lingua e Stato membro",
        "Ho previsto gli aggiornamenti"
       ]
      }
     ],
     "nar": "Nel laboratorio prepari la notifica ai centri antiveleni di un nuovo detergente. Indica chi notifica e con quali informazioni, come gestire un componente riservato e che cosa cambia per etichetta e mercati esteri, poi confronta ogni risposta con la soluzione di riferimento.",
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
     "ancora": "L’etichetta CLP e le novità della revisione"
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
     "tit": "Verificare la qualità di una SDS",
     "foto": false,
     "lead": "L’utilizzatore deve ricevere SDS conformi e aggiornate e deve saperne verificare la qualità essenziale.",
     "punti": [
      "Formato con le 16 sezioni previste dall’Allegato II (come modificato dal Reg. (UE) 2020/878)",
      "Lingua italiana, data di revisione, coerenza tra classificazione (sezione 2) e composizione (sezione 3)",
      "Presenza degli scenari di esposizione allegati per le sostanze registrate pericolose oltre 10 t/anno",
      "Indicazioni concrete per DPI e controlli (sezione 8): materiale dei guanti, tipo di filtro",
      "Aggiornamento quando sono disponibili nuove informazioni sui pericoli o nuove restrizioni o autorizzazioni"
     ],
     "appro": "In caso di SDS incomplete o incoerenti l’utilizzatore chiede chiarimenti al fornitore; le informazioni carenti impediscono una corretta valutazione del rischio chimico ai sensi del Titolo IX del D.lgs. 81/2008.",
     "rif": "Reg. (CE) 1907/2006, art. 31 e Allegato II · Reg. (UE) 2020/878",
     "nar": "L’utilizzatore verifica che la scheda di sicurezza abbia sedici sezioni secondo il formato del 2020, sia in italiano, aggiornata, coerente tra classificazione e composizione, con gli scenari di esposizione quando dovuti e indicazioni concrete su dispositivi e controlli. Se è carente, chiede chiarimenti al fornitore.",
     "p": 1.6
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
     "ancora": "Verificare la qualità di una SDS"
    },
    {
     "foto": false,
     "t": "classifica",
     "tit": "In quale sezione della SDS?",
     "lead": "Seleziona un’informazione, poi la sezione della scheda.",
     "colonne": [
      "Sezione 2",
      "Sezione 3",
      "Sezione 7",
      "Sezione 8",
      "Sezione 9",
      "Sezione 14"
     ],
     "schede": [
      [
       "Pittogrammi e indicazioni di pericolo",
       0,
       "Identificazione dei pericoli.",
       "Corretto."
      ],
      [
       "Concentrazioni dei componenti e fattori M",
       1,
       "Composizione.",
       "Corretto."
      ],
      [
       "Incompatibilità di stoccaggio",
       2,
       "Manipolazione e immagazzinamento.",
       "Corretto."
      ],
      [
       "Tipo di guanto e di filtro respiratorio",
       3,
       "Controllo dell’esposizione e protezione individuale.",
       "Corretto."
      ],
      [
       "Punto di infiammabilità",
       4,
       "Proprietà fisiche e chimiche.",
       "Corretto."
      ],
      [
       "Numero ONU e classe ADR",
       5,
       "Informazioni sul trasporto.",
       "Corretto."
      ],
      [
       "Valori limite di esposizione professionale",
       3,
       "Sezione 8.",
       "Corretto."
      ],
      [
       "Stime della tossicità acuta dei componenti",
       1,
       "Con il Reg. (UE) 2020/878 vanno in sezione 3.",
       "Corretto."
      ]
     ],
     "nar": "Otto informazioni della scheda di dati di sicurezza. Indica in quale sezione si trovano.",
     "rif": "Reg. (UE) 2020/878",
     "est": true,
     "ancora": "Le novità dell’Allegato II: Regolamento (UE) 2020/878"
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · Coerenza tra sezioni della SDS",
     "lead": "Controlli la coerenza interna della scheda di un detergente industriale.",
     "dossier": [
      [
       "Sezione 2",
       "classificazione: Eye Irrit. 2 (H319)"
      ],
      [
       "Sezione 3",
       "12% di un componente classificato Eye Dam. 1 (H318); 5% di un tensioattivo Skin Irrit. 2"
      ],
      [
       "Sezione 9",
       "punto di infiammabilità: 45 °C"
      ],
      [
       "Sezione 14",
       "non soggetto ad ADR"
      ]
     ],
     "compiti": [
      {
       "q": "La classificazione per gli occhi è coerente con la composizione?",
       "min": 6,
       "modello": "No. Con il metodo di calcolo una miscela con almeno il 3% di componenti Eye Dam. 1 è classificata Eye Dam. 1, H318, salvo dati specifici. Con il 12% la classificazione corretta è Eye Dam. 1.",
       "criteri": [
        "Ho applicato la soglia del 3%",
        "Ho concluso Eye Dam. 1"
       ]
      },
      {
       "q": "Che cosa noti sul punto di infiammabilità?",
       "min": 6,
       "modello": "Un punto di infiammabilità di 45 °C rientra nei liquidi infiammabili di categoria 3, tra 23 e 60 °C: manca la classificazione H226, salvo deroghe per liquidi che non sostengono la combustione da dimostrare. Va verificata anche la coerenza con la sezione 14.",
       "criteri": [
        "Ho collegato 45 °C alla categoria 3",
        "Ho rilevato H226 mancante",
        "Ho considerato la sezione 14"
       ]
      },
      {
       "q": "Come procedi con il fornitore e internamente?",
       "min": 5,
       "modello": "Si segnalano per iscritto le incoerenze e si chiede una SDS corretta; nel frattempo si gestisce il prodotto secondo la classificazione più severa, con protezione degli occhi e misure contro l’incendio, e si aggiorna la valutazione dei rischi.",
       "criteri": [
        "Ho chiesto la correzione",
        "Ho adottato la classificazione più severa",
        "Ho aggiornato la valutazione"
       ]
      }
     ],
     "nar": "Nel laboratorio controlli la coerenza tra le sezioni della scheda di un detergente. Verifica la classificazione per gli occhi, il punto di infiammabilità e decidi come procedere, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1272/2008, Allegato I · Reg. (UE) 2020/878",
     "est": true,
     "ancora": "Verificare la qualità di una SDS"
    },
    {
     "t": "testo",
     "tit": "Controlli e sanzioni in Italia",
     "foto": false,
     "lead": "In Italia il Ministero della salute è l’autorità competente per REACH e CLP; i controlli sono svolti dalle autorità regionali e territoriali.",
     "punti": [
      "Autorità competente: Ministero della salute, con il supporto del Centro nazionale sostanze chimiche dell’Istituto superiore di sanità",
      "Piani di controllo nazionali e regionali su SDS, etichette, restrizioni, autorizzazioni",
      "Sanzioni per le violazioni REACH (D.lgs. 133/2009) e CLP (D.lgs. 186/2011)",
      "Collaborazione con le dogane per i prodotti importati",
      "Help desk nazionale REACH e CLP per le imprese"
     ],
     "appro": "Le violazioni più frequentemente rilevate riguardano SDS incomplete o non aggiornate, etichette non conformi e mancato rispetto delle restrizioni dell’Allegato XVII.",
     "rif": "D.lgs. 133/2009 · D.lgs. 186/2011",
     "nar": "In Italia l’autorità competente è il Ministero della salute, con il Centro nazionale sostanze chimiche. I controlli riguardano schede di sicurezza, etichette, restrizioni e autorizzazioni; le sanzioni sono previste dai decreti 133 del 2009 per il REACH e 186 del 2011 per il CLP. Esiste un help desk nazionale.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "vf",
     "tit": "Esercitazione · REACH e CLP",
     "sott": "Qualificare ciascuna affermazione come vera o falsa",
     "voci": [
      [
       "L’obbligo di informazione dell’art. 33 scatta oltre lo 0,1% in peso di una SVHC nell’articolo.",
       true,
       "Vero."
      ],
      [
       "Il consumatore che chiede informazioni su una SVHC deve ricevere risposta entro 45 giorni.",
       true,
       "Vero: art. 33 c. 2."
      ],
      [
       "Il rappresentante esclusivo può essere stabilito fuori dall’Unione europea.",
       false,
       "Falso: deve essere stabilito nell’UE (art. 8)."
      ],
      [
       "Il codice UFI è composto da 16 caratteri alfanumerici.",
       true,
       "Vero."
      ],
      [
       "Una SDS nel formato precedente al Reg. (UE) 2020/878 è ancora conforme.",
       false,
       "Falso: dal 1° gennaio 2023 vale il nuovo formato."
      ]
     ],
     "nar": "Esercitazione. Si stabilisca se ciascuna affermazione su REACH e CLP è vera o falsa.",
     "est": true,
     "ancora": "Controlli e sanzioni in Italia"
    },
    {
     "foto": false,
     "t": "scenario",
     "tit": "L’ispezione sulle schede di sicurezza",
     "scena": "Durante un controllo sul REACH e sul CLP, gli ispettori chiedono a un distributore di prodotti chimici le SDS di dieci prodotti e le prove della loro trasmissione ai clienti.",
     "decisioni": [
      {
       "dom": "Che cosa mostri?",
       "opz": [
        [
         "Le SDS aggiornate in italiano e le evidenze dell’invio ai clienti alla prima fornitura e dopo ogni revisione",
         true,
         "Corretto: il distributore deve trasmettere le SDS lungo la catena."
        ],
        [
         "Solo le fatture",
         false,
         "Non dimostrano l’invio delle SDS."
        ],
        [
         "Le SDS del fornitore in inglese",
         false,
         "Vanno in italiano."
        ]
       ]
      },
      {
       "dom": "Una SDS è del 2018 e il fornitore ha emesso una revisione nel 2024 che non hai trasmesso. Che cosa rischi?",
       "opz": [
        [
         "Una sanzione per la mancata trasmissione delle informazioni aggiornate",
         true,
         "Corretto: le violazioni sono sanzionate dal D.lgs. 133/2009."
        ],
        [
         "Nulla, la vecchia scheda va bene",
         false,
         "La revisione va trasmessa."
        ],
        [
         "Solo un richiamo verbale",
         false,
         "Sono previste sanzioni."
        ]
       ]
      },
      {
       "dom": "Come eviti il problema in futuro?",
       "opz": [
        [
         "Un sistema che registra versioni e invii delle SDS e avvisa i clienti a ogni revisione",
         true,
         "Corretto."
        ],
        [
         "Inviare le SDS solo su richiesta",
         false,
         "L’obbligo è automatico."
        ],
        [
         "Pubblicarle sul sito e basta",
         false,
         "Va dimostrato l’invio ai clienti."
        ]
       ]
      }
     ],
     "chiusura": "SDS aggiornate, in italiano, trasmesse ai clienti a ogni revisione e con prova dell’invio: è ciò che gli ispettori verificano presso i distributori.",
     "nar": "Un controllo sulle schede di sicurezza presso un distributore. Prepara le evidenze.",
     "rif": "Art. 31 Reg. (CE) 1907/2006 · D.lgs. 133/2009",
     "est": true,
     "ancora": "Controlli e sanzioni in Italia"
    },
    {
     "t": "caso",
     "tit": "Esercitazione · L’etichetta in inglese",
     "scena": "Un distributore italiano riceve fusti di detergente industriale con etichetta solo in inglese e SDS in inglese del 2018.",
     "domanda": "Che cosa deve fare prima della rivendita?",
     "opz": [
      [
       "Rivendere così com’è",
       false,
       "No: etichetta e SDS devono essere in italiano e aggiornate."
      ],
      [
       "Chiedere al fornitore SDS in italiano conforme al formato vigente, etichettare in italiano secondo il CLP (con UFI se richiesto) e verificare la notifica ai centri antiveleni",
       true,
       "Corretto: obblighi del distributore."
      ],
      [
       "Tradurre solo la sezione 1",
       false,
       "No: non è sufficiente."
      ]
     ],
     "rif": "Reg. (CE) 1272/2008 · Reg. (CE) 1907/2006, art. 31",
     "appro": "Il distributore che modifica l’etichetta o immette il prodotto con il proprio nome assume gli obblighi del fornitore per le informazioni comunicate.",
     "nar": "Esercitazione. Esaminato il caso proposto, si individui la risposta corretta, valutando la motivazione di ciascuna alternativa.",
     "p": 1.4
    },
    {
     "foto": false,
     "t": "laboratorio",
     "tit": "Laboratorio · L’etichetta di una nuova miscela",
     "lead": "Prepari l’etichetta di una miscela sgrassante da vendere a utilizzatori professionali.",
     "dossier": [
      [
       "Componente X",
       "20%, stima della tossicità acuta orale 500 mg/kg"
      ],
      [
       "Altri componenti",
       "non classificati per la tossicità acuta"
      ],
      [
       "Classificazione già determinata",
       "liquido infiammabile categoria 3; irritazione cutanea categoria 2"
      ],
      [
       "Confezione",
       "5 litri"
      ]
     ],
     "compiti": [
      {
       "q": "La miscela è classificata per tossicità acuta orale? Calcola l’ATEmix.",
       "min": 6,
       "modello": "ATEmix = 100 / (20 / 500) = 2.500 mg/kg. È oltre 2.000 mg/kg, quindi la miscela non è classificata per tossicità acuta orale.",
       "criteri": [
        "Ho applicato la formula",
        "Ho ottenuto 2.500 mg/kg",
        "Ho confrontato con 2.000"
       ]
      },
      {
       "q": "Elenca gli elementi dell’etichetta.",
       "min": 7,
       "modello": "Identificatore del prodotto e UFI; nome, indirizzo e telefono del fornitore; quantità nominale; pittogrammi GHS02 e GHS07; avvertenza «Attenzione»; H226 e H315; consigli di prudenza pertinenti, ad esempio P210, P280, P302+P352; in lingua italiana.",
       "criteri": [
        "Ho indicato i pittogrammi corretti",
        "Ho indicato l’avvertenza «Attenzione»",
        "Ho indicato frasi H e P in italiano"
       ]
      },
      {
       "q": "Quali errori eviti?",
       "min": 5,
       "modello": "Etichetta solo in inglese; avvertenza «Pericolo» non coerente con le categorie; pittogrammi ridondanti; mancanza dell’UFI; dimensioni non leggibili; informazioni non coerenti con la SDS.",
       "criteri": [
        "Ho indicato la lingua",
        "Ho indicato la coerenza con la SDS",
        "Ho indicato UFI e leggibilità"
       ]
      }
     ],
     "nar": "Nel laboratorio prepari l’etichetta di una nuova miscela sgrassante. Calcola la stima della tossicità acuta, elenca gli elementi dell’etichetta e gli errori da evitare, poi confronta ogni risposta con la soluzione di riferimento.",
     "rif": "Reg. (CE) 1272/2008, artt. 17 e 18 e Allegato I",
     "est": true,
     "ancora": "Esercitazione · L’etichetta in inglese"
    },
    {
     "foto": false,
     "t": "applica",
     "tit": "Le etichette e le schede della tua impresa",
     "lead": "Verifica la gestione di etichette e schede di sicurezza.",
     "voci": [
      "Tutti i prodotti hanno SDS in italiano",
      "Le SDS sono aggiornate",
      "Le etichette sono coerenti con le SDS",
      "Le miscele immesse sul mercato sono notificate",
      "L’UFI è in etichetta",
      "Esiste un sistema di invio delle SDS ai clienti"
     ],
     "campo": "Il controllo che farai per primo",
     "esempio": "Es.: confronto tra sezione 2 e sezione 3 delle dieci SDS più usate",
     "min": 3,
     "nar": "Verifica come la tua impresa gestisce etichette e schede di sicurezza e indica il primo controllo che farai.",
     "est": true,
     "ancora": "Esercitazione · L’etichetta in inglese"
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 3,
     "domande": [
      [
       "Le SDS hanno:",
       [
        "16 sezioni",
        "10 sezioni",
        "20 sezioni",
        "5 sezioni"
       ],
       0,
       "Allegato II."
      ],
      [
       "L’UFI riguarda:",
       [
        "Le miscele pericolose notificate ai centri antiveleni",
        "I rifiuti",
        "Le emissioni",
        "I DPI"
       ],
       0,
       "UFI."
      ],
      [
       "L’autorità competente REACH in Italia è:",
       [
        "Il Ministero della salute",
        "L’INAIL",
        "L’ARPA",
        "Il Comune"
       ],
       0,
       "Autorità."
      ],
      [
       "Le sanzioni CLP sono nel:",
       [
        "D.lgs. 186/2011",
        "D.lgs. 152/2006",
        "D.lgs. 81/2008",
        "D.P.R. 59/2013"
       ],
       0,
       "Sanzioni."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 2.",
     "p": 1.4
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "Ruoli REACH e obblighi conseguenti",
      "Registrazione, SVHC e articoli",
      "Autorizzazione e restrizioni",
      "Classificazione ed etichettatura CLP e revisione 2024",
      "SDS di qualità e controlli"
     ],
     "nar": "In sintesi, occorre identificare il proprio ruolo, monitorare sostanze estremamente preoccupanti, restrizioni e autorizzazioni, curare etichette e schede di sicurezza e verificare la qualità delle informazioni ricevute.",
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
    "Il regolamento REACH è il:",
    [
     "Reg. (CE) 1907/2006",
     "Reg. (CE) 1272/2008",
     "Reg. (UE) 2016/425",
     "Reg. (CE) 852/2004"
    ],
    0,
    "REACH."
   ],
   [
    "L’agenzia europea per le sostanze chimiche è:",
    [
     "ECHA",
     "EFSA",
     "EMA",
     "EEA"
    ],
    0,
    "ECHA."
   ],
   [
    "La relazione sulla sicurezza chimica è richiesta da:",
    [
     "10 t/anno",
     "1 t/anno",
     "100 kg/anno",
     "Sempre"
    ],
    0,
    "Registrazione."
   ],
   [
    "Il distributore:",
    [
     "Immagazzina e immette sul mercato senza usare",
     "Fabbrica sostanze",
     "Importa sempre",
     "Non ha obblighi"
    ],
    0,
    "Ruoli."
   ],
   [
    "Il rappresentante esclusivo è nominato da:",
    [
     "Un fabbricante extra-UE",
     "L’ECHA",
     "Il Ministero",
     "Il distributore"
    ],
    0,
    "Ruoli."
   ],
   [
    "Le SVHC sono inserite:",
    [
     "Nell’elenco delle sostanze candidate",
     "Nell’Allegato XVII",
     "Nel MUD",
     "Nel RENTRI"
    ],
    0,
    "SVHC."
   ],
   [
    "Su richiesta di un consumatore le informazioni sulle SVHC negli articoli vanno fornite entro:",
    [
     "45 giorni",
     "7 giorni",
     "1 anno",
     "Mai"
    ],
    0,
    "Art. 33."
   ],
   [
    "La banca dati SCIP riguarda:",
    [
     "Gli articoli contenenti SVHC",
     "I rifiuti urbani",
     "Le emissioni",
     "Le SDS"
    ],
    0,
    "SCIP."
   ],
   [
    "Le sostanze soggette ad autorizzazione sono nell’Allegato:",
    [
     "XIV",
     "XVII",
     "II",
     "VIII"
    ],
    0,
    "Autorizzazione."
   ],
   [
    "Per i diisocianati la restrizione prevede:",
    [
     "Formazione degli utilizzatori",
     "Nessun obbligo",
     "Solo l’etichetta",
     "Il divieto totale"
    ],
    0,
    "Voce 74."
   ],
   [
    "La voce 78 dell’Allegato XVII riguarda:",
    [
     "Le microplastiche aggiunte intenzionalmente",
     "Il piombo nei giocattoli",
     "L’amianto",
     "Il benzene"
    ],
    0,
    "Microplastiche."
   ],
   [
    "Il regolamento CLP è il:",
    [
     "Reg. (CE) 1272/2008",
     "Reg. (CE) 1907/2006",
     "Reg. (UE) 2017/997",
     "Reg. (UE) 1169/2011"
    ],
    0,
    "CLP."
   ],
   [
    "La revisione del CLP è il:",
    [
     "Reg. (UE) 2024/2865",
     "Reg. (UE) 2020/878",
     "Reg. (UE) 2023/707 soltanto",
     "Reg. (CE) 1221/2009"
    ],
    0,
    "Revisione."
   ],
   [
    "Il formato vigente delle SDS deriva dal:",
    [
     "Reg. (UE) 2020/878",
     "Reg. (UE) 2016/425",
     "D.lgs. 81/2008",
     "Reg. (CE) 852/2004"
    ],
    0,
    "SDS."
   ],
   [
    "Le notifiche ai centri antiveleni sono disciplinate dall’Allegato del CLP:",
    [
     "VIII",
     "I",
     "XVII",
     "XIV"
    ],
    0,
    "Allegato VIII."
   ],
   [
    "L’etichetta deve essere nella lingua:",
    [
     "Dello Stato membro di immissione sul mercato",
     "Del fabbricante",
     "Inglese sempre",
     "Qualsiasi"
    ],
    0,
    "Etichetta."
   ],
   [
    "Le sanzioni REACH in Italia sono nel:",
    [
     "D.lgs. 133/2009",
     "D.lgs. 186/2011",
     "D.lgs. 81/2008",
     "D.lgs. 152/2006"
    ],
    0,
    "Sanzioni."
   ],
   [
    "Il supporto tecnico al Ministero della salute è fornito da:",
    [
     "Centro nazionale sostanze chimiche dell’ISS",
     "INAIL",
     "ENEA",
     "ISPRA soltanto"
    ],
    0,
    "Autorità."
   ],
   [
    "L’utilizzatore a valle deve verificare che:",
    [
     "I propri usi siano coperti dagli scenari di esposizione",
     "Il prezzo sia basso",
     "Il fornitore sia italiano",
     "Nulla"
    ],
    0,
    "Utilizzatore."
   ],
   [
    "Una SDS del 2018 mai aggiornata:",
    [
     "Va verificata e se necessario aggiornata dal fornitore",
     "È sempre valida",
     "Va buttata",
     "Non serve"
    ],
    0,
    "SDS."
   ]
  ]
 }
};
