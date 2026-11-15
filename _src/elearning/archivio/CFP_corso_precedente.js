/* Corso – Carbon footprint di organizzazione e di prodotto (8 ore)
   UNI EN ISO 14064-1:2019 · UNI EN ISO 14067:2018 · GHG Protocol
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
window.CORSO = {
 "id": "CFP",
 "titolo": "Carbon footprint di organizzazione e di prodotto",
 "sottotitolo": "Quantificazione e rendicontazione delle emissioni di gas a effetto serra",
 "ore": 8,
 "rif": "UNI EN ISO 14064-1:2019 · UNI EN ISO 14067:2018 · GHG Protocol",
 "soglia": 70,
 "aggiornato": "2026-11",
 "moduli": [
  {
   "id": "M0",
   "titolo": "Introduzione",
   "min": 5,
   "foto": "energia2",
   "schermate": [
    {
     "t": "copertina",
     "tit": "Carbon footprint di organizzazione e di prodotto",
     "sott": "Corso di 8 ore",
     "nar": "Benvenuti al corso sulla carbon footprint: inventario delle emissioni di gas a effetto serra di un’organizzazione secondo la ISO 14064-1 e il GHG Protocol, e impronta climatica di prodotto secondo la ISO 14067.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Conoscere gas serra, potenziali di riscaldamento globale e principi di rendicontazione",
      "Definire confini organizzativi e operativi e categorie di emissione",
      "Calcolare le emissioni con dati di attività e fattori di emissione",
      "Impostare la carbon footprint di prodotto e la sua verifica"
     ],
     "nar": "Al termine del corso il partecipante conoscerà i principi della contabilità dei gas a effetto serra e sarà in grado di definire i confini, di calcolare le emissioni di organizzazione e di prodotto e di predisporre la verifica.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Carbon footprint di organizzazione",
   "min": 235,
   "foto": "energia2",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Carbon footprint di organizzazione",
     "nar": "Modulo 1: carbon footprint di organizzazione.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Gas a effetto serra e CO₂ equivalente",
     "foto": false,
     "lead": "La carbon footprint esprime le emissioni di gas a effetto serra in tonnellate di CO₂ equivalente (tCO₂e).",
     "punti": [
      "Gas considerati: anidride carbonica (CO₂), metano (CH₄), protossido di azoto (N₂O), idrofluorocarburi (HFC), perfluorocarburi (PFC), esafluoruro di zolfo (SF₆), trifluoruro di azoto (NF₃)",
      "Potenziale di riscaldamento globale (GWP) a 100 anni, dai rapporti di valutazione dell’IPCC",
      "Conversione: massa del gas × GWP = tCO₂e",
      "Le perdite di gas refrigeranti (HFC) possono pesare molto per GWP elevati",
      "Indicazione della fonte dei GWP utilizzati (ad esempio IPCC AR5 o AR6)"
     ],
     "appro": "I valori di GWP cambiano tra un rapporto IPCC e l’altro: la scelta va dichiarata e mantenuta coerente nel tempo, ricalcolando l’anno base se cambia.",
     "rif": "UNI EN ISO 14064-1:2019 · IPCC Assessment Reports",
     "nar": "La carbon footprint si esprime in tonnellate di CO₂ equivalente. Si considerano anidride carbonica, metano, protossido di azoto e gas fluorurati, convertiti con il potenziale di riscaldamento globale a cento anni dei rapporti IPCC. Le perdite di gas refrigeranti possono pesare molto. La fonte dei coefficienti va dichiarata.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Gas fluorurati: il Regolamento (UE) 2024/573",
     "lead": "Gli idrofluorocarburi usati come refrigeranti hanno potenziali di riscaldamento globale molto elevati: il nuovo regolamento ne prevede l’eliminazione progressiva.",
     "punti": [
      "Riduzione progressiva degli HFC immessi sul mercato fino all’azzeramento nel 2050",
      "Nuovi divieti di immissione sul mercato per apparecchiature con gas ad alto GWP",
      "Controlli delle perdite a partire da 5 t di CO₂ equivalente: ogni 12 mesi",
      "Da 50 t: ogni 6 mesi; da 500 t: ogni 3 mesi; frequenze dimezzate con sistema di rilevamento",
      "Ogni intervento è comunicato alla Banca dati F-gas entro 30 giorni dall’impresa certificata (D.P.R. 146/2018)"
     ],
     "appro": "Le perdite di refrigerante sono emissioni dirette di Scope 1: si stimano dai reintegri registrati moltiplicati per il GWP del gas.",
     "rif": "Reg. (UE) 2024/573 · D.P.R. 16 novembre 2018, n. 146",
     "nar": "Gli idrofluorocarburi, usati come refrigeranti negli impianti di condizionamento e refrigerazione, sono gas fluorurati con un potenziale di riscaldamento globale da centinaia a migliaia di volte superiore a quello dell’anidride carbonica. Il regolamento europeo duemilaventiquattro barra cinquecentosettantatré ha abrogato il precedente regolamento del duemilaquattordici e prevede la riduzione progressiva delle quantità immesse sul mercato fino all’azzeramento nel duemilacinquanta, oltre a nuovi divieti di immissione sul mercato di apparecchiature che usano gas ad alto potenziale. Per gli operatori delle apparecchiature restano centrali i controlli delle perdite, eseguiti da personale certificato: ogni dodici mesi per le apparecchiature che contengono gas in quantità pari o superiore a cinque tonnellate di anidride carbonica equivalente, ogni sei mesi da cinquanta tonnellate, ogni tre mesi da cinquecento tonnellate; con un sistema di rilevamento delle perdite le frequenze si dimezzano. Ogni intervento viene comunicato alla Banca dati nazionale, entro trenta giorni, dall’impresa certificata che lo esegue, come prevede il decreto del Presidente della Repubblica centoquarantasei del duemiladiciotto: questa comunicazione assolve l’obbligo di tenuta del registro, mentre la vecchia dichiarazione annuale non è più prevista. Nell’inventario delle emissioni le perdite sono emissioni dirette di Scope uno: si stimano dai reintegri di refrigerante moltiplicati per il potenziale di riscaldamento del gas.",
     "est": true,
     "ancora": "Gas a effetto serra e CO₂ equivalente"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Il potenziale di riscaldamento globale (GWP)",
     "lead": "Per sommare gas diversi si moltiplica la massa di ciascun gas per il suo potenziale di riscaldamento globale su 100 anni.",
     "punti": [
      "CO₂: GWP pari a 1 per definizione",
      "Metano: 28 secondo il quinto rapporto IPCC (AR5); circa 27-30 nel sesto (AR6), distinguendo l’origine fossile",
      "Protossido di azoto: 265 (AR5); 273 (AR6)",
      "Gas fluorurati: da centinaia a decine di migliaia, secondo il composto",
      "Indicare sempre il rapporto IPCC usato e mantenerlo coerente nel tempo"
     ],
     "appro": "Cambiare la serie di GWP modifica i risultati: in caso di aggiornamento conviene ricalcolare anche l’anno base per mantenere confrontabile la serie storica.",
     "rif": "IPCC, Fifth e Sixth Assessment Report · UNI EN ISO 14064-1:2019 · GHG Protocol",
     "nar": "Le emissioni di gas serra si esprimono in tonnellate di anidride carbonica equivalente, per poter sommare gas che hanno effetti diversi sul clima. La conversione si ottiene moltiplicando la massa emessa di ciascun gas per il suo potenziale di riscaldamento globale, che esprime quanto calore quel gas trattiene nell’atmosfera rispetto alla stessa massa di anidride carbonica, di norma su un orizzonte di cento anni. L’anidride carbonica ha per definizione un potenziale pari a uno. Il metano ha un potenziale di ventotto secondo il quinto rapporto di valutazione del gruppo intergovernativo sul cambiamento climatico, e di circa ventisette-trenta nel sesto rapporto, che distingue il metano di origine fossile da quello biogenico. Il protossido di azoto ha un potenziale di duecentosessantacinque nel quinto rapporto e di duecentosettantatré nel sesto. I gas fluorurati hanno potenziali che vanno da alcune centinaia a decine di migliaia, secondo il composto. Nella rendicontazione bisogna indicare quale serie di valori si è usata e mantenerla coerente nel tempo, perché cambiare serie modifica i risultati anche a parità di emissioni fisiche. Quando si passa a una serie aggiornata conviene ricalcolare anche l’anno base, per mantenere confrontabile l’andamento.",
     "est": true,
     "ancora": "Gas a effetto serra e CO₂ equivalente"
    },
    {
     "t": "testo",
     "tit": "Principi e confini dell’inventario",
     "foto": false,
     "lead": "L’inventario segue principi di rendicontazione e confini definiti in modo trasparente.",
     "punti": [
      "Principi: pertinenza, completezza, coerenza, accuratezza, trasparenza",
      "Confini organizzativi: approccio del controllo (operativo o finanziario) o della quota azionaria",
      "Confini operativi (ISO 14064-1): emissioni dirette (categoria 1) e indirette (categorie 2-6)",
      "GHG Protocol: scope 1 (dirette), scope 2 (energia acquistata), scope 3 (altre indirette, quindici categorie)",
      "Anno base e politica di ricalcolo in caso di cambiamenti significativi"
     ],
     "appro": "La ISO 14064-1 suddivide le emissioni indirette in categorie: energia importata (2), trasporti (3), prodotti usati dall’organizzazione (4), uso dei prodotti dell’organizzazione (5), altre fonti (6). Le emissioni indirette significative vanno identificate con criteri documentati.",
     "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol Corporate Standard",
     "nar": "L’inventario rispetta i principi di pertinenza, completezza, coerenza, accuratezza e trasparenza. I confini organizzativi si basano sul controllo o sulla quota azionaria; quelli operativi distinguono le emissioni dirette dalle indirette, nelle sei categorie della ISO 14064 o negli scope uno, due e tre del GHG Protocol. Si fissa un anno base.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le categorie di emissione della UNI EN ISO 14064-1",
     "lead": "La ISO 14064-1:2018 classifica le emissioni dell’organizzazione in sei categorie, più dettagliate degli Scope del GHG Protocol.",
     "punti": [
      "Categoria 1: emissioni e rimozioni dirette",
      "Categoria 2: emissioni indirette da energia importata",
      "Categoria 3: emissioni indirette da trasporto",
      "Categoria 4: emissioni indirette da prodotti utilizzati dall’organizzazione",
      "Categorie 5 e 6: uso dei prodotti dell’organizzazione e altre fonti"
     ],
     "appro": "Le emissioni indirette si includono quando sono significative, secondo criteri definiti e documentati dall’organizzazione.",
     "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol, Corporate Standard",
     "nar": "La norma ISO quattordicimilasessantaquattro, parte prima, nell’edizione del duemiladiciotto recepita in Italia nel duemiladiciannove, specifica i principi e i requisiti per quantificare e rendicontare le emissioni e le rimozioni di gas serra a livello di organizzazione. A differenza del GHG Protocol, che usa tre Scope, la norma classifica le emissioni in sei categorie. La categoria uno comprende le emissioni e le rimozioni dirette, da fonti possedute o controllate, come combustione e perdite di refrigeranti. La categoria due comprende le emissioni indirette da energia importata, in particolare l’energia elettrica. La categoria tre riguarda le emissioni indirette da trasporto, sia delle merci in ingresso e uscita sia delle persone. La categoria quattro le emissioni indirette dai prodotti utilizzati dall’organizzazione, come materie prime, beni strumentali e servizi. La categoria cinque riguarda l’uso dei prodotti dell’organizzazione e il loro fine vita, la sei le altre fonti. La norma richiede di includere le emissioni indirette significative, secondo criteri di significatività definiti e documentati, come entità, influenza, rischio e richieste delle parti interessate. La corrispondenza con gli Scope è semplice: la categoria uno equivale allo Scope uno, la due allo Scope due, le altre allo Scope tre.",
     "est": true,
     "ancora": "Principi e confini dell’inventario"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Confini organizzativi e anno base",
     "lead": "Prima di calcolare occorre stabilire quali entità e impianti includere e quale anno usare come riferimento per misurare la riduzione.",
     "punti": [
      "Approccio del controllo operativo: si includono le attività di cui si gestiscono le politiche operative",
      "Approccio del controllo finanziario o della quota di partecipazione al capitale",
      "Scelta documentata e applicata in modo coerente a tutte le entità",
      "Anno base: primo anno con dati affidabili e completi, riferimento per gli obiettivi",
      "Politica di ricalcolo: acquisizioni, cessioni, cambi di metodo o errori significativi"
     ],
     "appro": "Senza una politica di ricalcolo dell’anno base, una cessione di stabilimento può apparire come una riduzione delle emissioni che in realtà non è avvenuta.",
     "rif": "GHG Protocol, Corporate Standard, capitoli 3 e 5 · UNI EN ISO 14064-1:2019, § 5",
     "nar": "Prima di raccogliere i dati occorre definire i confini dell’inventario. I confini organizzativi stabiliscono quali società, stabilimenti e attività includere. Il GHG Protocol e la norma ISO quattordicimilasessantaquattro propongono due approcci. Con l’approccio del controllo, che può essere operativo o finanziario, si includono il cento per cento delle emissioni delle attività controllate; con il controllo operativo, il più usato, si considerano le attività di cui l’organizzazione ha l’autorità di introdurre e attuare le politiche operative. Con l’approccio della quota di partecipazione si include una quota delle emissioni proporzionale alla partecipazione al capitale. La scelta va documentata e applicata in modo coerente. Si definisce poi l’anno base, cioè il primo anno per cui sono disponibili dati affidabili e completi, che diventa il riferimento per gli obiettivi di riduzione. Occorre anche una politica di ricalcolo: in caso di acquisizioni, cessioni, esternalizzazioni, cambi di metodo o scoperta di errori significativi, l’anno base va ricalcolato quando la variazione supera una soglia di significatività stabilita. Senza questa regola, la cessione di uno stabilimento potrebbe apparire come una riduzione delle emissioni che in realtà non è avvenuta, e il confronto nel tempo perderebbe significato.",
     "est": true,
     "ancora": "Principi e confini dell’inventario"
    },
    {
     "t": "confronto",
     "tit": "Emissioni Scope 2: metodo location-based e metodo market-based",
     "sx": {
      "ico": "FaMapLocationDot",
      "tit": "Location-based",
      "voci": [
       "Fattore medio della rete elettrica nazionale",
       "Riflette il mix del territorio",
       "Indipendente dai contratti",
       "Sempre calcolabile"
      ]
     },
     "dx": {
      "ico": "FaFileContract",
      "tit": "Market-based",
      "voci": [
       "Fattore legato agli acquisti contrattuali",
       "Considera garanzie di origine e contratti",
       "Usa il residual mix in assenza di strumenti",
       "Rendicontato insieme al location-based"
      ]
     },
     "nar": "Lo scope due si calcola in due modi: location-based, con il fattore medio della rete nazionale, e market-based, con i fattori dei contratti di acquisto, comprese le garanzie di origine, o il residual mix. Il GHG Protocol chiede di rendicontarli entrambi.",
     "p": 1.2
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "I fattori di emissione per l’energia elettrica",
     "lead": "Per lo Scope 2 si usano fattori nazionali ufficiali per il metodo location-based e il residual mix per il metodo market-based.",
     "punti": [
      "Location-based: fattore ISPRA per i consumi elettrici, 199,6 gCO₂/kWh nel 2025 (stima preliminare)",
      "Considerando tutti i gas serra: 201,0 gCO₂eq/kWh nel 2025 (194,0 nel 2024)",
      "Market-based: energia coperta da garanzie di origine rinnovabili a emissioni nulle",
      "Energia non coperta da garanzie: residual mix AIB, 420,2 gCO₂/kWh per l’Italia nel 2025",
      "Fattori aggiornati ogni anno: indicare sempre fonte ed edizione"
     ],
     "appro": "Il residual mix è più alto del fattore medio nazionale perché esclude l’energia rinnovabile già «venduta» con le garanzie di origine.",
     "rif": "ISPRA, Rapporto 430/2026 · AIB, European Residual Mixes 2025 (26 maggio 2026) · GHG Protocol, Scope 2 Guidance",
     "nar": "Le emissioni di Scope due derivano dall’energia elettrica acquistata e si calcolano con due metodi, da rendicontare entrambi. Il metodo location-based usa il fattore medio della rete in cui avviene il consumo. In Italia il riferimento è il rapporto dell’ISPRA sul settore elettrico, aggiornato ogni anno: per i consumi elettrici il fattore di anidride carbonica stimato per il duemilaventicinque è di centonovantanove virgola sei grammi per chilowattora, mentre considerando tutti i gas serra è di duecentouno grammi di anidride carbonica equivalente, contro centonovantaquattro nel duemilaventiquattro. Il metodo market-based riflette invece le scelte contrattuali dell’impresa: l’energia coperta da garanzie di origine rinnovabili è conteggiata a emissioni nulle, mentre all’energia non coperta si applica il residual mix, pubblicato dall’associazione europea degli enti di emissione. Per l’Italia il residual mix del duemilaventicinque è di quattrocentoventi virgola due grammi di anidride carbonica per chilowattora. È più alto del fattore medio perché esclude l’energia rinnovabile i cui attributi sono già stati venduti con le garanzie di origine. Ne consegue che un’impresa senza garanzie di origine ha emissioni market-based più alte di quelle location-based. Fonte ed edizione dei fattori vanno sempre dichiarate.",
     "est": true,
     "ancora": "Emissioni Scope 2: metodo location-based e metodo market-based"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Esempio applicativo: Scope 1 dal gas naturale",
     "lead": "Le emissioni dirette da combustione si calcolano moltiplicando il dato di attività per il fattore di emissione nazionale del combustibile.",
     "punti": [
      "Dato di attività: 100.000 Sm³ di gas naturale da fatture e contatori",
      "Fattore di emissione nazionale: 2,026 t CO₂ ogni 1.000 Sm³",
      "Emissioni: 100.000 / 1.000 × 2,026 = 202,6 t CO₂",
      "Energia: 100.000 Sm³ × 8,519 Mcal/Sm³ di potere calorifico inferiore",
      "Per le emissioni 2024 vale la tabella 2021-2023: 2,019 t CO₂ ogni 1.000 Sm³"
     ],
     "appro": "Per GPL e gasoli i fattori nazionali sono espressi per tonnellata: GPL 3,026 t CO₂/t; gasolio da riscaldamento 3,169 t CO₂/t; gasolio per autotrazione 3,150 t CO₂/t.",
     "rif": "Tabella dei parametri standard nazionali (MASE/ISPRA) · UNI EN ISO 14064-1:2019",
     "nar": "Vediamo un esempio di calcolo delle emissioni dirette di Scope uno. Uno stabilimento ha consumato nell’anno centomila standard metri cubi di gas naturale, dato ricavato dalle fatture e verificato con i contatori. Per l’Italia si usa il fattore della tabella dei parametri standard nazionali pubblicata dal Ministero dell’ambiente e dall’ISPRA, aggiornata ogni anno: per il gas naturale è di due virgola zero ventisei tonnellate di anidride carbonica ogni mille standard metri cubi. Il calcolo è immediato: centomila diviso mille fa cento, moltiplicato per due virgola zero ventisei dà duecentodue virgola sei tonnellate di anidride carbonica. Se serve il dato energetico, si moltiplica il volume per il potere calorifico inferiore, pari a otto virgola cinquecentodiciannove megacalorie per standard metro cubo. Attenzione all’anno di riferimento: per le emissioni del duemilaventiquattro vale ancora la tabella del triennio precedente, con un fattore di due virgola zero diciannove. Per gli altri combustibili i fattori sono espressi per tonnellata: tre virgola zero ventisei per il GPL, tre virgola centosessantanove per il gasolio da riscaldamento, tre virgola centocinquanta per il gasolio per autotrazione. Nel rapporto si indicano sempre dato di attività, fattore, fonte ed edizione.",
     "est": true,
     "ancora": "Emissioni Scope 2: metodo location-based e metodo market-based"
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: il calcolo delle emissioni di uno stabilimento",
     "foto": false,
     "lead": "Calcoliamo le emissioni dirette e indirette energetiche di una piccola azienda.",
     "punti": [
      "Gas naturale: 120.000 Sm³ × fattore di emissione dell’inventario nazionale (circa 1,98 kgCO₂/Sm³) ≈ 238 tCO₂",
      "Gasolio dei mezzi: 15.000 litri × circa 2,65 kgCO₂/l ≈ 40 tCO₂",
      "Perdita di refrigerante R410A: 3 kg × GWP circa 2.088 ≈ 6,3 tCO₂e",
      "Energia elettrica: 800 MWh × fattore location-based della rete nazionale (dato ISPRA dell’anno) → emissioni indirette categoria 2",
      "Totale e incidenza per categoria; incertezza e qualità dei dati"
     ],
     "appro": "I fattori indicati sono valori di ordine di grandezza a scopo didattico: nel calcolo reale si usano i fattori della tabella dei parametri standard nazionali (ISPRA/MASE) dell’anno di riferimento e i GWP del rapporto IPCC prescelto, citandone la fonte.",
     "rif": "UNI EN ISO 14064-1:2019 · Tabella parametri standard nazionali (ISPRA/MASE)",
     "nar": "Si propone un esempio di calcolo. Centoventimila metri cubi di gas naturale, per circa 1,98 chili di CO₂ ciascuno, corrispondono a circa 238 tonnellate; quindicimila litri di gasolio a circa 40; tre chili di refrigerante R410A a circa 6 tonnellate equivalenti. L’energia elettrica si moltiplica per il fattore della rete nazionale dell’anno. Nel calcolo effettivo si impiegano i fattori ufficiali dell’anno di riferimento, citandone la fonte.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Dati di attività, fattori di emissione e qualità dei dati",
     "foto": false,
     "lead": "L’affidabilità dell’inventario dipende dalla qualità dei dati di attività e dei fattori scelti.",
     "punti": [
      "Dati di attività primari: bollette, letture dei contatori, fatture dei carburanti, registri F-gas",
      "Fattori di emissione: inventario nazionale (ISPRA), banche dati riconosciute, dati specifici dei fornitori",
      "Scope 3: dati dei fornitori, metodi basati sulla spesa o sulle quantità, fattori di banche dati di ciclo di vita",
      "Valutazione dell’incertezza e piano di miglioramento dei dati",
      "Archiviazione delle evidenze per la verifica"
     ],
     "appro": "Per lo scope 3 è frequente iniziare con stime basate sulla spesa e migliorare progressivamente con dati primari dai fornitori più rilevanti: la priorità va alle categorie più significative.",
     "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol Scope 3 Standard",
     "nar": "L’affidabilità dipende da dati di attività primari, come bollette, contatori, fatture e registri dei gas fluorurati, e da fattori di emissione riconosciuti. Per lo scope tre si parte spesso da stime sulla spesa e si migliora con dati dei fornitori principali. Si valuta l’incertezza e si conservano le evidenze.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "grafico",
     "tit": "Simulazione · Emissioni indirette da energia elettrica",
     "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol, Scope 2",
     "lead": "Modificare il consumo annuo di energia elettrica e il fattore di emissione: il calcolo restituisce le emissioni in tonnellate di CO₂ equivalente.",
     "grafico": {
      "tipo": "calcolo",
      "formula_testo": "Emissioni (t CO₂e) = consumo (kWh) × fattore (kg CO₂e/kWh) / 1.000",
      "formula": "e * f / 1000",
      "ingressi": [
       {
        "id": "e",
        "nome": "Consumo annuo di energia elettrica",
        "min": 10000,
        "max": 2000000,
        "passo": 10000,
        "val": 450000,
        "unita": "kWh"
       },
       {
        "id": "f",
        "nome": "Fattore di emissione (fonte ufficiale dell’anno)",
        "min": 0.05,
        "max": 0.6,
        "passo": 0.01,
        "val": 0.25,
        "unita": "kg/kWh"
       }
      ],
      "risultato": "Emissioni indirette",
      "unita": "t CO₂e",
      "scala": 1200
     },
     "nar": "Simulazione. Si modifichino il consumo annuo di energia elettrica e il fattore di emissione, che va tratto da fonti ufficiali per l’anno di riferimento. Il prodotto, diviso per mille, restituisce le emissioni indirette in tonnellate di anidride carbonica equivalente. Si osservi l’effetto della scelta del fattore, che distingue il metodo basato sulla localizzazione da quello basato sul mercato.",
     "est": true,
     "ancora": "Dati di attività, fattori di emissione e qualità dei dati"
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 3,
     "domande": [
      [
       "La norma per l’inventario di organizzazione è la:",
       [
        "UNI EN ISO 14064-1",
        "UNI EN ISO 14067",
        "UNI EN ISO 50001",
        "UNI EN ISO 14001"
       ],
       0,
       "ISO 14064-1."
      ],
      [
       "Lo scope 1 comprende:",
       [
        "Le emissioni dirette",
        "L’energia acquistata",
        "I viaggi dei fornitori",
        "Nulla"
       ],
       0,
       "GHG Protocol."
      ],
      [
       "La CO₂ equivalente si ottiene moltiplicando la massa del gas per:",
       [
        "Il GWP",
        "Il LIE",
        "Il prezzo",
        "La densità"
       ],
       0,
       "GWP."
      ],
      [
       "Il market-based dello scope 2 considera:",
       [
        "I contratti e le garanzie di origine",
        "Solo il mix nazionale",
        "Solo il gas",
        "Nulla"
       ],
       0,
       "Scope 2."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 1.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Carbon footprint di prodotto e rendicontazione",
   "min": 240,
   "foto": "energia3",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Carbon footprint di prodotto e rendicontazione",
     "nar": "Modulo 2: carbon footprint di prodotto e rendicontazione.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "La carbon footprint di prodotto (ISO 14067)",
     "foto": false,
     "lead": "La carbon footprint di prodotto (CFP) quantifica le emissioni di gas serra lungo il ciclo di vita di un prodotto, con l’approccio della valutazione del ciclo di vita.",
     "punti": [
      "Unità funzionale o unità dichiarata: ad esempio 1 kg di prodotto o un servizio definito",
      "Confini del sistema: dalla culla al cancello (cradle-to-gate) o dalla culla alla tomba (cradle-to-grave)",
      "Fasi: materie prime, produzione, trasporti, uso, fine vita",
      "Regole di allocazione per coprodotti e riciclo",
      "Regole di categoria di prodotto (PCR) quando disponibili"
     ],
     "appro": "La ISO 14067 si basa sulle norme della serie ISO 14040/14044 per la valutazione del ciclo di vita. Le comunicazioni pubbliche della CFP richiedono trasparenza su ipotesi, confini e limitazioni, e possono richiedere una verifica di parte terza.",
     "rif": "UNI EN ISO 14067:2018 · UNI EN ISO 14040 · UNI EN ISO 14044",
     "nar": "La carbon footprint di prodotto quantifica le emissioni lungo il ciclo di vita, secondo la ISO 14067. Si definiscono l’unità funzionale e i confini, dalla culla al cancello o alla tomba, si considerano materie prime, produzione, trasporti, uso e fine vita, con regole di allocazione e, se esistono, regole di categoria di prodotto.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Unità funzionale, confini e regole di categoria",
     "lead": "La carbon footprint di prodotto si calcola con l’approccio del ciclo di vita: le scelte di unità funzionale e confini determinano il risultato.",
     "punti": [
      "Unità funzionale: la prestazione di riferimento, ad esempio 1 kg di prodotto o 1 anno di servizio",
      "Confini: dalla culla al cancello o dalla culla alla tomba",
      "Regole di categoria di prodotto (PCR) per rendere confrontabili prodotti simili",
      "Allocazione dei carichi tra coprodotti secondo criteri fisici o economici",
      "Carbonio biogenico e variazioni d’uso del suolo documentati separatamente"
     ],
     "appro": "Due carbon footprint sono confrontabili solo se usano la stessa unità funzionale, gli stessi confini e le stesse regole di categoria.",
     "rif": "UNI EN ISO 14067:2018 · UNI EN ISO 14040 e 14044",
     "nar": "La carbon footprint di un prodotto misura le emissioni e le rimozioni di gas serra lungo il suo ciclo di vita, secondo la norma ISO quattordicimilasessantasette, che si basa sulla metodologia della valutazione del ciclo di vita delle norme quattordicimilaquaranta e quattordicimilaquarantaquattro. Il primo passo è definire l’unità funzionale, cioè la prestazione a cui riferire il risultato: un chilogrammo di prodotto, un imballaggio che contiene un litro, un anno di utilizzo. Poi si stabiliscono i confini del sistema: dalla culla al cancello, cioè dall’estrazione delle materie prime all’uscita dallo stabilimento, oppure dalla culla alla tomba, includendo distribuzione, uso e fine vita. Per rendere confrontabili prodotti della stessa categoria esistono regole di categoria di prodotto, che fissano unità funzionale, confini e dati da usare. Quando un processo genera più coprodotti, gli impatti vanno ripartiti con criteri di allocazione, preferibilmente fisici, come la massa, o economici. Le emissioni e rimozioni di carbonio biogenico e quelle dovute al cambiamento d’uso del suolo vanno documentate separatamente. Due carbon footprint possono essere confrontate solo se adottano la stessa unità funzionale, gli stessi confini e le stesse regole: diversamente il confronto è fuorviante e può costituire un’asserzione ambientale ingannevole.",
     "est": true,
     "ancora": "La carbon footprint di prodotto (ISO 14067)"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "La verifica di parte terza: livelli di garanzia",
     "lead": "La verifica indipendente rende credibile un inventario o una carbon footprint; la ISO 14064-3 ne definisce principi e procedure.",
     "punti": [
      "Garanzia ragionevole: livello elevato, conclusione espressa in forma positiva",
      "Garanzia limitata: livello inferiore, conclusione espressa in forma negativa",
      "Soglia di rilevanza (materialità) concordata prima della verifica",
      "Campionamento di dati, calcoli, fattori e documenti di supporto",
      "Dichiarazione di verifica che indica perimetro, periodo, criteri e livello di garanzia"
     ],
     "appro": "Il verificatore deve essere indipendente e competente; per le dichiarazioni pubbliche è preferibile un organismo accreditato secondo la ISO 14065.",
     "rif": "UNI EN ISO 14064-3:2019 · UNI EN ISO 14065",
     "nar": "Un inventario dei gas serra o una carbon footprint di prodotto acquistano credibilità quando sono verificati da una parte terza indipendente. La norma ISO quattordicimilasessantaquattro, parte terza, specifica i principi e i requisiti per la verifica e la validazione delle dichiarazioni sui gas serra. Il primo elemento da concordare è il livello di garanzia. Con la garanzia ragionevole il verificatore svolge un lavoro esteso ed esprime una conclusione in forma positiva, ad esempio che la dichiarazione è corretta in tutti gli aspetti significativi. Con la garanzia limitata il lavoro è meno approfondito e la conclusione è espressa in forma negativa: non sono emersi elementi che facciano ritenere la dichiarazione non corretta. Prima della verifica si concorda anche la soglia di rilevanza, cioè l’entità degli errori considerata significativa. Il verificatore esamina a campione i dati di attività, i fattori di emissione, i calcoli e i documenti di supporto, e valuta i sistemi di controllo dei dati. L’esito è una dichiarazione di verifica che indica perimetro, periodo, criteri applicati e livello di garanzia. Per le dichiarazioni destinate al pubblico è preferibile un organismo accreditato secondo la norma ISO quattordicimilasessantacinque, che garantisce competenza e indipendenza del verificatore.",
     "est": true,
     "ancora": "La carbon footprint di prodotto (ISO 14067)"
    },
    {
     "t": "testo",
     "tit": "Esempio applicativo: CFP di un imballaggio dalla culla al cancello",
     "foto": false,
     "lead": "Struttura semplificata del calcolo per una scatola in cartone.",
     "punti": [
      "Unità dichiarata: 1 scatola da 450 g",
      "Materie prime: carta da riciclo e carta vergine con fattori di banca dati di ciclo di vita",
      "Trasporto delle materie prime: tonnellate-chilometro × fattore del mezzo",
      "Produzione: quota di energia elettrica e gas dello stabilimento allocata per massa prodotta",
      "Risultato in kgCO₂e per scatola con analisi dei contributi e della sensibilità"
     ],
     "appro": "L’analisi dei contributi mostra dove intervenire (ad esempio la quota di fibra vergine o il mix energetico); l’analisi di sensibilità verifica quanto il risultato dipende dalle ipotesi più incerte.",
     "rif": "UNI EN ISO 14067:2018",
     "nar": "Si consideri una scatola in cartone, dalla culla al cancello: l’unità dichiarata è una scatola da quattrocentocinquanta grammi; si sommano materie prime, trasporti e quota di energia dello stabilimento, allocata in base alla massa. Il risultato, espresso in chili di CO₂ equivalente, è accompagnato dall’analisi dei contributi e della sensibilità.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Rendicontazione, verifica e riduzione",
     "foto": false,
     "lead": "Un inventario credibile è rendicontato in modo trasparente, verificato e usato per ridurre le emissioni.",
     "punti": [
      "Rapporto: confini, metodologie, fattori e GWP, risultati per categoria, incertezza, esclusioni",
      "Verifica di parte terza secondo la UNI EN ISO 14064-3 da organismi accreditati (ISO 14065)",
      "Piano di riduzione: efficienza energetica, elettrificazione, rinnovabili, gestione dei refrigeranti, logistica, fornitori",
      "Obiettivi coerenti con la scienza climatica e monitoraggio annuale",
      "Compensazione con crediti di carbonio solo per le emissioni residue e con trasparenza"
     ],
     "appro": "Le dichiarazioni di «neutralità climatica» richiedono particolare cautela: la normativa europea sulla tutela dei consumatori ha ristretto le asserzioni ambientali generiche e basate solo sulla compensazione. La priorità è la riduzione effettiva.",
     "rif": "UNI EN ISO 14064-3 · ISO 14065 · Direttiva (UE) 2024/825",
     "nar": "L’inventario si rendiconta in modo trasparente, si verifica secondo la ISO 14064-3 con organismi accreditati e si usa per ridurre le emissioni: efficienza, elettrificazione, rinnovabili, refrigeranti, logistica e fornitori. La compensazione vale solo per le emissioni residue; le asserzioni di neutralità climatica richiedono cautela.",
     "p": 1.6
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Scope 3: categorie e fattori di conversione",
     "lead": "Lo Scope 3 comprende le emissioni indirette della catena del valore, suddivise dal GHG Protocol in 15 categorie.",
     "punti": [
      "A monte: beni e servizi acquistati, beni strumentali, energia, trasporti, rifiuti, viaggi, pendolarismo",
      "A valle: trasporto e distribuzione, lavorazione e uso dei prodotti venduti, fine vita, investimenti",
      "Metodi: dati primari dei fornitori, metodi basati sulla massa o sulla spesa",
      "Fattori DESNZ 2026: plastiche medie 3.170,5 kgCO₂e/t; trasporto su mezzo pesante 0,10356 kgCO₂e/t·km",
      "Priorità alle categorie più rilevanti, con miglioramento progressivo della qualità dei dati"
     ],
     "appro": "I fattori DESNZ sono riferiti al Regno Unito: quando esistono fattori nazionali o dati primari specifici sono preferibili.",
     "rif": "GHG Protocol, Corporate Value Chain (Scope 3) Standard · DESNZ, GHG Conversion Factors 2026",
     "nar": "Per molte imprese manifatturiere lo Scope tre rappresenta la quota maggiore delle emissioni, perché include tutta la catena del valore. Il GHG Protocol lo suddivide in quindici categorie. A monte troviamo i beni e servizi acquistati, i beni strumentali, le attività legate ai combustibili e all’energia non comprese negli Scope uno e due, il trasporto e la distribuzione in ingresso, i rifiuti generati, i viaggi di lavoro e il pendolarismo dei dipendenti. A valle ci sono il trasporto e la distribuzione dei prodotti venduti, la loro lavorazione e il loro uso, il trattamento a fine vita, i beni in leasing, i franchising e gli investimenti. I metodi di calcolo vanno dai dati primari forniti dai fornitori, i più accurati, ai metodi basati sulla massa dei materiali o sulla spesa. Tra le banche dati di fattori più usate c’è quella del governo britannico, aggiornata nel duemilaventisei: ad esempio tremilacentosettanta chilogrammi di anidride carbonica equivalente per tonnellata di plastiche medie e zero virgola centotré chilogrammi per tonnellata chilometro trasportata con un mezzo pesante medio. Sono fattori riferiti al Regno Unito, da sostituire quando sono disponibili dati nazionali o primari. Conviene partire dalle categorie più rilevanti e migliorare progressivamente la qualità dei dati.",
     "est": true,
     "ancora": "Rendicontazione, verifica e riduzione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Obiettivi di riduzione: lo standard SBTi Net-Zero 2.0",
     "lead": "La Science Based Targets initiative valida obiettivi di riduzione coerenti con la scienza del clima; la versione 2.0 dello standard net-zero aggiorna i requisiti.",
     "punti": [
      "Obiettivi a breve termine, a 5 anni, obbligatori per Scope 1 e Scope 2",
      "Per le imprese di categoria A obiettivi anche sullo Scope 3",
      "Obiettivi a lungo termine e net-zero facoltativi",
      "Piano di transizione e rendicontazione annuale dei progressi",
      "Versione 1 utilizzabile per nuovi obiettivi fino alla fine del 2027"
     ],
     "appro": "Dal 2028 gli obiettivi per il ciclo 2030-2035 si fissano con la versione 2.0; la compensazione con crediti non sostituisce la riduzione delle emissioni.",
     "rif": "SBTi, Corporate Net-Zero Standard, versione 2.0",
     "nar": "Misurare le emissioni serve a ridurle. La Science Based Targets initiative è un’iniziativa volontaria internazionale che valida obiettivi di riduzione delle emissioni coerenti con gli scenari climatici. La versione due punto zero dello standard per le imprese prevede obiettivi a breve termine, su un orizzonte di cinque anni, obbligatori per le emissioni di Scope uno e di Scope due; per le imprese classificate in categoria A sono richiesti obiettivi anche sullo Scope tre. Gli obiettivi a lungo termine e l’impegno net-zero diventano facoltativi. Lo standard richiede un piano di transizione e la rendicontazione annuale dei progressi. La versione uno resta utilizzabile per fissare nuovi obiettivi fino alla fine del duemilaventisette; dal duemilaventotto gli obiettivi per il ciclo duemilatrenta duemilatrentacinque si fissano con la nuova versione. Un principio resta fermo: la compensazione con crediti di carbonio non sostituisce la riduzione delle emissioni della propria attività e della catena del valore. Per una piccola impresa, anche senza validazione formale, adottare la stessa logica, con anno base, obiettivo, azioni e monitoraggio annuale, rende credibile l’impegno verso clienti e finanziatori.",
     "est": true,
     "ancora": "Rendicontazione, verifica e riduzione"
    },
    {
     "foto": false,
     "t": "abbina",
     "tit": "Esercitazione · Fattori e fonti",
     "sott": "Associare a ciascun dato la fonte corretta",
     "coppie": [
      [
       "Fattore Scope 2 location-based in Italia",
       "Rapporto ISPRA sul settore elettrico"
      ],
      [
       "Residual mix per il metodo market-based",
       "AIB – European Residual Mixes"
      ],
      [
       "Fattore del gas naturale (2,026 t CO₂/1.000 Sm³)",
       "Tabella dei parametri standard nazionali"
      ],
      [
       "Fattori per Scope 3 di materiali e trasporti",
       "DESNZ – GHG Conversion Factors"
      ],
      [
       "Obiettivi di riduzione validati",
       "Science Based Targets initiative"
      ]
     ],
     "nar": "Esercitazione. Si associ a ciascun dato la fonte corretta.",
     "est": true,
     "ancora": "Rendicontazione, verifica e riduzione"
    },
    {
     "foto": false,
     "t": "caso",
     "tit": "Caso di studio · Le garanzie di origine",
     "scena": "Un’impresa consuma 1.000 MWh di energia elettrica e non acquista garanzie di origine. Il fornitore dichiara un mix medio nazionale. Il responsabile vuole riportare solo il valore location-based, più basso.",
     "domanda": "Qual è l’approccio corretto?",
     "opz": [
      [
       "Riportare solo il location-based, più favorevole",
       false,
       "No: il GHG Protocol richiede la doppia rendicontazione."
      ],
      [
       "Riportare entrambi i metodi: location-based con il fattore ISPRA e market-based con il residual mix, più alto in assenza di garanzie",
       true,
       "Corretto: doppia rendicontazione dello Scope 2."
      ],
      [
       "Considerare l’energia a emissioni nulle",
       false,
       "No: senza garanzie di origine non è possibile."
      ]
     ],
     "rif": "GHG Protocol, Scope 2 Guidance · ISPRA · AIB",
     "appro": "Il residual mix esclude gli attributi rinnovabili già venduti con le garanzie di origine.",
     "nar": "Caso di studio. Si scelga come rendicontare lo Scope 2 in assenza di garanzie di origine.",
     "est": true,
     "ancora": "Rendicontazione, verifica e riduzione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "CBAM: il meccanismo di adeguamento del carbonio alle frontiere",
     "lead": "Dal 1° gennaio 2026 il CBAM è entrato nel periodo definitivo: gli importatori di alcune merci acquistano certificati corrispondenti alle emissioni incorporate.",
     "punti": [
      "Merci interessate: ferro e acciaio, alluminio, cemento, fertilizzanti, idrogeno, energia elettrica",
      "Soglia «de minimis» di 50 tonnellate all’anno per ferro e acciaio, alluminio, fertilizzanti e cemento",
      "Solo dichiaranti CBAM autorizzati possono importare oltre soglia",
      "Acquisto dei certificati dal 1° febbraio 2027 per le importazioni del 2026",
      "Prima dichiarazione annuale e restituzione dei certificati entro il 30 settembre 2027"
     ],
     "appro": "Dal 2027 il dichiarante deve detenere ogni trimestre certificati pari ad almeno il 50% delle emissioni incorporate nelle merci importate dall’inizio dell’anno.",
     "rif": "Reg. (UE) 2023/956, come modificato dal Reg. (UE) 2025/2083, e atti di esecuzione",
     "nar": "Il meccanismo di adeguamento del carbonio alle frontiere, in sigla CBAM, applica alle importazioni di alcune merci un costo del carbonio equivalente a quello sostenuto dai produttori europei nel sistema di scambio delle quote di emissione. Dopo la fase transitoria di sola rendicontazione, dal primo gennaio duemilaventisei il meccanismo è entrato nel periodo definitivo. Le merci interessate sono ferro e acciaio, alluminio, cemento, fertilizzanti, idrogeno ed energia elettrica, compresi alcuni prodotti derivati. Il regolamento duemilaventicinque barra duemilaottantatré ha introdotto una soglia de minimis di cinquanta tonnellate all’anno per ferro e acciaio, alluminio, fertilizzanti e cemento, che esenta la maggior parte dei piccoli importatori. Oltre la soglia, solo un dichiarante CBAM autorizzato può importare. I certificati relativi alle importazioni del duemilaventisei si acquistano a partire dal primo febbraio duemilaventisette, e la prima dichiarazione annuale, con la restituzione dei certificati, va presentata entro il trenta settembre duemilaventisette. Dal duemilaventisette il dichiarante deve inoltre detenere, alla fine di ogni trimestre, certificati pari ad almeno la metà delle emissioni incorporate nelle merci importate. Per l’impresa importatrice diventa essenziale ottenere dai fornitori extra europei i dati effettivi sulle emissioni.",
     "est": true,
     "ancora": "Rendicontazione, verifica e riduzione"
    },
    {
     "foto": false,
     "t": "testo",
     "tit": "Le asserzioni ambientali: Direttiva (UE) 2024/825",
     "lead": "La direttiva sulla responsabilizzazione dei consumatori per la transizione verde vieta le asserzioni ambientali generiche e non dimostrate.",
     "punti": [
      "Vietate le asserzioni generiche come «ecologico» o «green» senza eccellenza ambientale riconosciuta",
      "Vietati i marchi di sostenibilità non basati su un sistema di certificazione o non istituiti da autorità pubbliche",
      "Vietato dichiarare un prodotto neutrale per il clima sulla base della compensazione delle emissioni",
      "Asserzioni su prestazioni future solo con un piano di attuazione dettagliato e verificato",
      "Recepimento entro il 27 marzo 2026; applicazione dal 27 settembre 2026"
     ],
     "appro": "Ogni asserzione ambientale deve essere specifica, verificabile e riferita al prodotto o all’attività interessata, con dati disponibili su richiesta.",
     "rif": "Dir. (UE) 2024/825 · D.lgs. 206/2005 (Codice del consumo), pratiche commerciali scorrette",
     "nar": "Il greenwashing, cioè la comunicazione ambientale ingannevole, è oggi oggetto di regole specifiche. La direttiva europea duemilaventiquattro barra ottocentoventicinque modifica la disciplina delle pratiche commerciali sleali e introduce divieti precisi. Sono vietate le asserzioni ambientali generiche, come ecologico, verde o rispettoso dell’ambiente, quando l’impresa non è in grado di dimostrare un’eccellenza riconosciuta della prestazione ambientale. Sono vietati i marchi di sostenibilità che non si basano su un sistema di certificazione con verifica indipendente o che non sono istituiti da autorità pubbliche. È vietato affermare che un prodotto ha un impatto neutro, ridotto o positivo sul clima sulla base della compensazione delle emissioni con crediti di carbonio. Le asserzioni su prestazioni ambientali future, come diventeremo neutrali entro il duemilatrenta, sono ammesse solo se accompagnate da un piano di attuazione dettagliato e realistico, con obiettivi misurabili e verificato da un esperto indipendente. Gli Stati membri dovevano recepire la direttiva entro il ventisette marzo duemilaventisei, con applicazione dal ventisette settembre duemilaventisei. Per l’impresa il criterio pratico è chiaro: ogni asserzione deve essere specifica, verificabile e riferita al prodotto o all’attività, con i dati disponibili su richiesta.",
     "est": true,
     "ancora": "Rendicontazione, verifica e riduzione"
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Lo scope 3 dimenticato",
     "scena": "Un’azienda di arredamento dichiara una carbon footprint di 900 tCO₂e, calcolata solo su gas, gasolio ed energia elettrica, e la usa in una gara per dimostrare di essere «a basso impatto».",
     "domanda": "Che cosa non va?",
     "opz": [
      [
       "Nulla: scope 1 e 2 bastano sempre",
       false,
       "No: per un’impresa manifatturiera lo scope 3 è spesso prevalente."
      ],
      [
       "L’inventario esclude le emissioni indirette potenzialmente significative (materie prime come pannelli e vernici, trasporti, uso e fine vita): occorre dichiarare confini ed esclusioni, valutare la significatività dello scope 3 ed evitare affermazioni fuorvianti",
       true,
       "Corretto: completezza e trasparenza."
      ],
      [
       "Basta compensare 900 tonnellate",
       false,
       "No: non risolve il problema di completezza."
      ]
     ],
     "rif": "UNI EN ISO 14064-1:2019 · Direttiva (UE) 2024/825",
     "appro": "Le esclusioni sono ammesse solo se giustificate e dichiarate; le affermazioni comparative richiedono basi omogenee.",
     "nar": "Esercitazione. Esaminato il caso proposto, si individui la risposta corretta, valutando la motivazione di ciascuna alternativa.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 2",
     "soglia": 3,
     "domande": [
      [
       "La CFP di prodotto segue la norma:",
       [
        "UNI EN ISO 14067",
        "UNI EN ISO 14064-1",
        "UNI CEI 11339",
        "UNI 10802"
       ],
       0,
       "ISO 14067."
      ],
      [
       "«Dalla culla al cancello» significa:",
       [
        "Fino all’uscita dallo stabilimento",
        "Fino allo smaltimento",
        "Solo la produzione",
        "Solo il trasporto"
       ],
       0,
       "Confini."
      ],
      [
       "La verifica degli inventari segue la:",
       [
        "UNI EN ISO 14064-3",
        "UNI EN ISO 19011 soltanto",
        "UNI EN 689",
        "UNI EN 15259"
       ],
       0,
       "Verifica."
      ],
      [
       "La compensazione con crediti di carbonio:",
       [
        "Riguarda solo le emissioni residue",
        "Sostituisce la riduzione",
        "È obbligatoria",
        "Non esiste"
       ],
       0,
       "Riduzione."
      ]
     ],
     "nar": "Verifica intermedia sul modulo 2.",
     "p": 1.4
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "tCO₂e e GWP dichiarati",
      "Confini organizzativi e operativi; scope 1, 2, 3",
      "Location-based e market-based",
      "Dati di attività e fattori ufficiali",
      "CFP di prodotto e ciclo di vita",
      "Verifica, riduzione e asserzioni corrette"
     ],
     "nar": "In sintesi, un inventario credibile presenta confini chiari, dati e fattori documentati, include le emissioni indirette significative, è sottoposto a verifica ed è impiegato per conseguire riduzioni effettive delle emissioni.",
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
    "L’unità di misura della carbon footprint è:",
    [
     "tCO₂e",
     "kWh",
     "mg/Nm³",
     "dB(A)"
    ],
    0,
    "CO₂e."
   ],
   [
    "Il metano è un gas a effetto serra?",
    [
     "Sì",
     "No",
     "Solo se brucia",
     "Solo in ambienti chiusi"
    ],
    0,
    "Gas serra."
   ],
   [
    "Il GWP più usato si riferisce a un orizzonte di:",
    [
     "100 anni",
     "1 anno",
     "10 anni",
     "1000 anni"
    ],
    0,
    "GWP."
   ],
   [
    "Lo scope 2 riguarda:",
    [
     "L’energia acquistata",
     "Le emissioni dirette",
     "I rifiuti",
     "I fornitori"
    ],
    0,
    "Scope."
   ],
   [
    "Lo scope 3 comprende:",
    [
     "Le altre emissioni indirette della catena del valore",
     "Solo i combustibili",
     "Solo l’energia elettrica",
     "Nulla"
    ],
    0,
    "Scope."
   ],
   [
    "Le categorie di scope 3 del GHG Protocol sono:",
    [
     "15",
     "3",
     "6",
     "10"
    ],
    0,
    "Scope 3."
   ],
   [
    "Nella ISO 14064-1 la categoria 1 comprende:",
    [
     "Le emissioni dirette",
     "Il trasporto",
     "L’uso dei prodotti",
     "L’energia importata"
    ],
    0,
    "Categorie."
   ],
   [
    "L’approccio del controllo operativo riguarda:",
    [
     "I confini organizzativi",
     "Il calcolo dei GWP",
     "La verifica",
     "Il trasporto"
    ],
    0,
    "Confini."
   ],
   [
    "L’anno base serve a:",
    [
     "Confrontare l’andamento delle emissioni",
     "Fissare i prezzi",
     "Scegliere i fornitori",
     "Nulla"
    ],
    0,
    "Anno base."
   ],
   [
    "Il residual mix si usa nel metodo:",
    [
     "Market-based",
     "Location-based",
     "Spend-based",
     "Nessuno"
    ],
    0,
    "Scope 2."
   ],
   [
    "Le perdite di gas refrigeranti sono emissioni:",
    [
     "Dirette",
     "Indirette da energia",
     "Di scope 3 sempre",
     "Non contabilizzate"
    ],
    0,
    "F-gas."
   ],
   [
    "I fattori di emissione nazionali per i combustibili sono pubblicati da:",
    [
     "ISPRA e Ministero dell’ambiente",
     "INAIL",
     "ARERA",
     "ENEA soltanto"
    ],
    0,
    "Fattori."
   ],
   [
    "L’unità funzionale è un concetto della:",
    [
     "CFP di prodotto",
     "Inventario di organizzazione",
     "Verifica",
     "Politica ambientale"
    ],
    0,
    "ISO 14067."
   ],
   [
    "«Dalla culla alla tomba» include:",
    [
     "Uso e fine vita del prodotto",
     "Solo la produzione",
     "Solo le materie prime",
     "Solo il trasporto"
    ],
    0,
    "Confini."
   ],
   [
    "Le norme sulla valutazione del ciclo di vita sono:",
    [
     "UNI EN ISO 14040 e 14044",
     "UNI EN ISO 9001",
     "UNI CEI 11339",
     "UNI EN 689"
    ],
    0,
    "LCA."
   ],
   [
    "Gli organismi di verifica dei GHG sono accreditati secondo la:",
    [
     "ISO 14065",
     "ISO 17025",
     "ISO 9001",
     "ISO 45001"
    ],
    0,
    "Verifica."
   ],
   [
    "Le esclusioni dall’inventario sono ammesse se:",
    [
     "Giustificate e dichiarate",
     "Mai",
     "Sempre",
     "Solo per lo scope 1"
    ],
    0,
    "Completezza."
   ],
   [
    "L’analisi di sensibilità serve a:",
    [
     "Valutare quanto il risultato dipende dalle ipotesi",
     "Aumentare le emissioni",
     "Scegliere il verificatore",
     "Nulla"
    ],
    0,
    "CFP."
   ],
   [
    "La direttiva che restringe le asserzioni ambientali generiche è la:",
    [
     "(UE) 2024/825",
     "2014/34/UE",
     "(UE) 2022/431",
     "2004/35/CE"
    ],
    0,
    "Asserzioni."
   ],
   [
    "La priorità di una strategia climatica è:",
    [
     "La riduzione effettiva delle emissioni",
     "La sola compensazione",
     "La comunicazione",
     "Nessuna"
    ],
    0,
    "Riduzione."
   ]
  ]
 }
};
