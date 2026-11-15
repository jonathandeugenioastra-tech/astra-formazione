/* Corso – Atmosfere esplosive (ATEX) (8 ore)
   Titolo XI e Allegati XLIX, L, LI D.lgs. 81/2008 · Direttiva 2014/34/UE (D.lgs. 85/2016) · CEI EN IEC 60079-10-1 e 60079-10-2
   Contenuti: © 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l. */
const T = (tit, lead, punti, appro, rif, nar, p = 1.6) => ({ t: 'testo', tit, foto: false, lead, punti, appro, rif, nar, p });
const K = (tit, scena, domanda, opz, rif, appro) => ({ t: 'caso', tit, scena, domanda, opz, rif, appro, nar: 'Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.', p: 1.4 });
window.CORSO = {
 "id": "ATEX",
 "titolo": "Atmosfere esplosive (ATEX)",
 "sottotitolo": "Valutazione, classificazione delle zone, apparecchiature e misure di protezione contro le esplosioni",
 "ore": 8,
 "rif": "Titolo XI D.lgs. 81/2008 · Direttiva 2014/34/UE · CEI EN IEC 60079-10-1 · CEI EN IEC 60079-10-2",
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
     "tit": "Atmosfere esplosive (ATEX)",
     "sott": "Corso di 8 ore",
     "nar": "Benvenuti al corso sulle atmosfere esplosive. Tratteremo i fenomeni fisici dell’esplosione, gli obblighi del Titolo undici del decreto 81, la classificazione delle zone, le apparecchiature e le misure di protezione.",
     "p": 1
    },
    {
     "t": "obiettivi",
     "tit": "Obiettivi formativi",
     "voci": [
      "Comprendere come si forma un’atmosfera esplosiva e quali sono le sorgenti di innesco",
      "Conoscere gli obblighi del Titolo XI e i contenuti del documento sulla protezione contro le esplosioni",
      "Leggere la classificazione delle zone per gas e polveri",
      "Interpretare la marcatura ATEX e scegliere apparecchiature idonee",
      "Applicare le misure organizzative: permessi di lavoro, manutenzione, formazione"
     ],
     "nar": "Al termine saprai come si forma un’atmosfera esplosiva, quali obblighi impone il Titolo undici, come si leggono la classificazione delle zone e la marcatura delle apparecchiature e quali misure tecniche e organizzative adottare.",
     "p": 1
    }
   ]
  },
  {
   "id": "M1",
   "titolo": "Fenomeni e normativa",
   "min": 235,
   "foto": "sicurezza",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 1",
     "sott": "Fenomeni e normativa",
     "nar": "Primo modulo: i fenomeni dell’esplosione e la normativa.",
     "p": 0.6
    },
    {
     "t": "testo",
     "tit": "Che cos’è un’atmosfera esplosiva",
     "foto": false,
     "lead": "È una miscela con l’aria, a condizioni atmosferiche, di sostanze infiammabili allo stato di gas, vapori, nebbie o polveri in cui, dopo l’accensione, la combustione si propaga all’insieme della miscela incombusta (art. 288 D.lgs. 81/2008).",
     "punti": [
      "Sostanze: gas (metano, idrogeno, GPL), vapori di liquidi infiammabili (solventi, carburanti), nebbie (oli nebulizzati), polveri combustibili (legno, farine, zucchero, polimeri, metalli)",
      "Condizioni atmosferiche: pressioni e temperature prossime a quelle ambiente",
      "Esplosione: combustione rapidissima con aumento improvviso di pressione e temperatura",
      "Pentagono dell’esplosione delle polveri: combustibile, comburente, innesco, dispersione e confinamento",
      "Settori tipici: verniciatura, chimica, alimentare, legno, depositi di carburanti, trattamento rifiuti, impianti biogas, ricarica batterie"
     ],
     "appro": "Rispetto all’incendio, l’esplosione richiede che il combustibile sia miscelato con l’aria in concentrazioni comprese tra i limiti di esplodibilità e che la miscela sia accesa da una sorgente efficace. Le polveri possono dare esplosioni secondarie molto distruttive quando la prima onda di pressione solleva gli strati depositati.",
     "rif": "Art. 288 D.lgs. 81/2008",
     "nar": "Un’atmosfera esplosiva è una miscela con l’aria di gas, vapori, nebbie o polveri combustibili in cui, dopo l’accensione, la combustione si propaga a tutta la miscela. Riguarda molti settori: verniciatura, chimica, alimentare, legno, carburanti, rifiuti, biogas. Per le polveri si parla di pentagono dell’esplosione: servono anche dispersione e confinamento.",
     "p": 1.6
    },
    {
     "t": "definizioni",
     "tit": "I parametri di esplodibilità",
     "sott": "Consultare ciascuna scheda",
     "voci": [
      [
       "L",
       "LIE e LSE",
       "Limiti inferiore e superiore di esplodibilità: concentrazioni tra le quali la miscela con l’aria può esplodere."
      ],
      [
       "P",
       "Punto di infiammabilità",
       "Temperatura minima alla quale un liquido emette vapori in quantità sufficiente a formare una miscela infiammabile."
      ],
      [
       "A",
       "Temperatura di accensione",
       "Temperatura minima di una superficie calda che accende spontaneamente la miscela."
      ],
      [
       "E",
       "Energia minima di accensione",
       "Energia minima di una scintilla capace di accendere la miscela; per l’idrogeno è molto bassa."
      ],
      [
       "K",
       "Kst e Pmax",
       "Indice di esplosività e pressione massima di esplosione delle polveri, misurati in laboratorio."
      ]
     ],
     "nar": "Alcuni parametri caratterizzano le sostanze: i limiti inferiore e superiore di esplodibilità, il punto di infiammabilità dei liquidi, la temperatura di accensione, l’energia minima di accensione e, per le polveri, l’indice di esplosività e la pressione massima. Apri le schede.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Le sorgenti di innesco",
     "foto": false,
     "lead": "La norma tecnica individua tredici tipi di sorgenti di innesco da considerare nella valutazione.",
     "punti": [
      "Superfici calde, fiamme e gas caldi, scintille di origine meccanica",
      "Materiale elettrico, correnti elettriche vaganti, protezione catodica",
      "Elettricità statica: travasi, nastri, tubazioni in plastica, indumenti, persone",
      "Fulmini, onde elettromagnetiche a radiofrequenza, radiazioni ottiche, radiazioni ionizzanti, ultrasuoni",
      "Compressione adiabatica e onde d’urto, reazioni esotermiche compresa l’autoaccensione delle polveri"
     ],
     "appro": "La UNI EN 1127-1 elenca le sorgenti di innesco e i principi di prevenzione e protezione. L’elettricità statica è una causa frequente e sottovalutata: la messa a terra e il collegamento equipotenziale di contenitori, tubazioni e attrezzature durante i travasi è una misura essenziale.",
     "rif": "UNI EN 1127-1 · CEI CLC/TR 60079-32-1",
     "nar": "La norma tecnica considera tredici tipi di sorgenti di innesco: superfici calde, fiamme, scintille meccaniche, materiale elettrico, correnti vaganti, elettricità statica, fulmini, radiofrequenze, radiazioni, ultrasuoni, compressione adiabatica e reazioni esotermiche. L’elettricità statica è spesso sottovalutata: durante i travasi servono messa a terra e collegamenti equipotenziali.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Il Titolo XI del D.lgs. 81/2008",
     "foto": false,
     "lead": "Il Titolo XI attua la direttiva 1999/92/CE sulla protezione dei lavoratori esposti al rischio di atmosfere esplosive.",
     "punti": [
      "Art. 289: prevenzione e protezione: impedire la formazione di atmosfere esplosive, evitarne l’accensione, attenuare gli effetti",
      "Art. 290: valutazione dei rischi di esplosione: probabilità e durata delle atmosfere esplosive, sorgenti di innesco, impianti, sostanze, entità degli effetti",
      "Art. 293 e Allegato XLIX: ripartizione in zone delle aree in cui possono formarsi atmosfere esplosive",
      "Art. 294: documento sulla protezione contro le esplosioni, parte del documento di valutazione dei rischi",
      "Art. 294-bis: informazione e formazione dei lavoratori; Allegato L: prescrizioni minime; Allegato LI: segnale di avvertimento"
     ],
     "appro": "Il datore di lavoro, quando più imprese operano nello stesso luogo, coordina le misure (art. 292). Le aree classificate sono segnalate agli accessi con il segnale triangolare giallo con la sigla «EX» (Allegato LI).",
     "rif": "Artt. 287-297 e Allegati XLIX, L, LI D.lgs. 81/2008",
     "nar": "Il Titolo undici del decreto 81 impone di impedire la formazione di atmosfere esplosive, evitarne l’accensione e attenuarne gli effetti. Il datore di lavoro valuta il rischio di esplosione, suddivide le aree in zone, redige il documento sulla protezione contro le esplosioni, informa e forma i lavoratori. Gli accessi alle aree classificate sono segnalati con il triangolo giallo con la sigla EX.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Il documento sulla protezione contro le esplosioni",
     "foto": false,
     "lead": "Il documento sulla protezione contro le esplosioni (DPCE) dimostra che i rischi sono stati individuati e valutati e che sono state adottate misure adeguate.",
     "punti": [
      "Individuazione e valutazione dei rischi di esplosione",
      "Misure adeguate per raggiungere gli obiettivi del Titolo XI",
      "Classificazione dei luoghi in zone secondo l’Allegato XLIX",
      "Luoghi in cui si applicano le prescrizioni minime dell’Allegato L",
      "Progettazione, impiego e manutenzione sicuri di luoghi e attrezzature, compresi i dispositivi di allarme"
     ],
     "appro": "Il documento è elaborato prima dell’inizio del lavoro ed è riveduto quando i luoghi di lavoro, le attrezzature o l’organizzazione del lavoro subiscono modifiche, ampliamenti o trasformazioni rilevanti. Può essere integrato con altri documenti di valutazione o con il rapporto di sicurezza degli stabilimenti a rischio di incidente rilevante.",
     "rif": "Art. 294 D.lgs. 81/2008",
     "nar": "Il documento sulla protezione contro le esplosioni contiene la valutazione dei rischi, le misure adottate, la classificazione delle zone, i luoghi in cui si applicano le prescrizioni minime e le regole per progettazione, uso e manutenzione sicuri. Si redige prima dell’inizio del lavoro e si aggiorna a ogni modifica rilevante.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "La direttiva 2014/34/UE: apparecchi e sistemi di protezione",
     "foto": false,
     "lead": "La direttiva 2014/34/UE, attuata in Italia dal D.lgs. 85/2016, regola la costruzione e l’immissione sul mercato degli apparecchi destinati ad atmosfere potenzialmente esplosive.",
     "punti": [
      "Gruppo I: apparecchi per miniere; gruppo II: apparecchi per le altre attività di superficie",
      "Categorie del gruppo II: 1 (livello di protezione molto elevato), 2 (elevato), 3 (normale)",
      "Lettere G (gas, vapori, nebbie) e D (polveri)",
      "Riguarda apparecchi elettrici e non elettrici, componenti, sistemi di protezione e dispositivi di sicurezza",
      "Marcatura CE, marcatura specifica «Ex» nell’esagono, dichiarazione UE di conformità e istruzioni"
     ],
     "appro": "La direttiva 2014/34/UE si rivolge ai fabbricanti; il Titolo XI si rivolge agli utilizzatori. Il collegamento tra le due è l’Allegato L, parte B, che indica le categorie di apparecchi da usare in ciascuna zona.",
     "rif": "Direttiva 2014/34/UE · D.lgs. 85/2016 · Allegato L D.lgs. 81/2008",
     "nar": "La direttiva 2014/34 regola gli apparecchi destinati ad atmosfere potenzialmente esplosive. Il gruppo uno riguarda le miniere, il gruppo due le altre attività. Le categorie uno, due e tre indicano livelli di protezione decrescenti; le lettere G e D indicano gas o polveri. Gli apparecchi portano la marcatura CE e il simbolo Ex nell’esagono. L’Allegato L collega le categorie alle zone.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · Il travaso del solvente",
     "scena": "In un reparto di verniciatura un operatore travasa acetone da un fusto metallico a una tanica in plastica non conduttiva, con il fusto appoggiato su un bancale in legno. Indossa scarpe con suola isolante.",
     "domanda": "Qual è il principale pericolo e come si previene?",
     "opz": [
      [
       "Nessun pericolo: non ci sono fiamme",
       false,
       "No: l’elettricità statica può generare scintille capaci di accendere i vapori."
      ],
      [
       "Accumulo di cariche elettrostatiche e scarica nei vapori: usare contenitori conduttivi, collegare a terra fusto e contenitore, calzature antistatiche, travaso in area ventilata e classificata con attrezzature idonee",
       true,
       "Corretto: controllo delle cariche elettrostatiche."
      ],
      [
       "Basta aprire una finestra",
       false,
       "No: la ventilazione aiuta ma non elimina il pericolo di scariche."
      ]
     ],
     "rif": "UNI EN 1127-1 · CEI CLC/TR 60079-32-1 · Allegato L D.lgs. 81/2008",
     "appro": "L’acetone ha un punto di infiammabilità inferiore alla temperatura ambiente: i suoi vapori sono presenti durante qualunque travaso.",
     "nar": "Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.",
     "p": 1.4
    },
    {
     "t": "verifica",
     "tit": "Verifica intermedia · Modulo 1",
     "soglia": 4,
     "domande": [
      [
       "Il Titolo XI del D.lgs. 81/2008 riguarda:",
       [
        "Il rumore",
        "Le atmosfere esplosive",
        "I videoterminali",
        "I cantieri"
       ],
       1,
       "Artt. 287-297."
      ],
      [
       "Il LIE è:",
       [
        "La concentrazione minima perché la miscela possa esplodere",
        "La temperatura di accensione",
        "La pressione massima",
        "Un tipo di apparecchio"
       ],
       0,
       "Parametri."
      ],
      [
       "Il documento sulla protezione contro le esplosioni è previsto dall’articolo:",
       [
        "290",
        "294",
        "71",
        "28"
       ],
       1,
       "Art. 294."
      ],
      [
       "L’elettricità statica è una sorgente di innesco?",
       [
        "Sì",
        "No",
        "Solo per le polveri",
        "Solo all’aperto"
       ],
       0,
       "UNI EN 1127-1."
      ],
      [
       "Gli apparecchi di categoria 1 hanno un livello di protezione:",
       [
        "Normale",
        "Elevato",
        "Molto elevato",
        "Nessuno"
       ],
       2,
       "Direttiva 2014/34/UE."
      ]
     ],
     "nar": "Verifica intermedia sul primo modulo.",
     "p": 1.4
    }
   ]
  },
  {
   "id": "M2",
   "titolo": "Classificazione e misure",
   "min": 240,
   "foto": "sicurezza3",
   "schermate": [
    {
     "t": "sezione",
     "tit": "Modulo 2",
     "sott": "Classificazione delle zone, apparecchiature e misure",
     "nar": "Secondo modulo: classificazione delle zone, apparecchiature e misure.",
     "p": 0.6
    },
    {
     "t": "confronto",
     "tit": "Le zone per gas e per polveri",
     "sx": {
      "ico": "FaWind",
      "tit": "Gas, vapori, nebbie",
      "voci": [
       "Zona 0: presente in permanenza, per lunghi periodi o frequentemente",
       "Zona 1: probabile nel funzionamento normale occasionalmente",
       "Zona 2: non probabile nel funzionamento normale; se si verifica, persiste per breve tempo"
      ]
     },
     "dx": {
      "ico": "FaCloud",
      "tit": "Polveri combustibili",
      "voci": [
       "Zona 20: nube presente in permanenza, per lunghi periodi o frequentemente",
       "Zona 21: nube probabile nel funzionamento normale occasionalmente",
       "Zona 22: nube non probabile; se si verifica, persiste per breve tempo"
      ]
     },
     "nar": "L’Allegato quarantanove definisce le zone. Per gas, vapori e nebbie: zona zero con atmosfera esplosiva presente in permanenza o frequentemente, zona uno probabile occasionalmente durante il funzionamento normale, zona due non probabile e di breve durata. Per le polveri le zone corrispondenti sono la venti, la ventuno e la ventidue.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Criteri di classificazione delle zone",
     "foto": false,
     "lead": "La classificazione dei luoghi si basa sull’individuazione delle sorgenti di emissione, sul loro grado e sulla ventilazione.",
     "punti": [
      "Sorgenti di emissione: punti da cui può uscire la sostanza (flange, tenute, sfiati, aperture di serbatoi, punti di carico)",
      "Grado di emissione: continuo, primo (occasionale nel funzionamento normale), secondo (raro e di breve durata)",
      "Ventilazione: grado di diluizione e disponibilità; influisce sul tipo e sull’estensione della zona",
      "Estensione delle zone calcolata con i metodi delle norme CEI EN IEC 60079-10-1 (gas) e 60079-10-2 (polveri) e delle guide CEI",
      "Strati di polvere: spessore, frequenza della pulizia, possibilità di sollevamento"
     ],
     "appro": "La classificazione è un’attività tecnica che richiede dati sulle sostanze, sugli impianti e sulla ventilazione. Il risultato è riportato su planimetrie e sezioni con l’indicazione del tipo e dell’estensione delle zone, che fanno parte del documento sulla protezione contro le esplosioni.",
     "rif": "Allegato XLIX D.lgs. 81/2008 · CEI EN IEC 60079-10-1 · CEI EN IEC 60079-10-2",
     "nar": "Per classificare le zone si individuano le sorgenti di emissione, come flange, tenute e sfiati, se ne stabilisce il grado, continuo, primo o secondo, e si valuta la ventilazione. Le norme 60079-10-1 per i gas e 60079-10-2 per le polveri forniscono i metodi di calcolo. Il risultato è riportato su planimetrie allegate al documento.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Zone e categorie di apparecchi",
     "foto": false,
     "lead": "L’Allegato L, parte B, stabilisce quali categorie di apparecchi si possono usare in ciascuna zona.",
     "punti": [
      "Zona 0 o zona 20: apparecchi di categoria 1",
      "Zona 1 o zona 21: apparecchi di categoria 1 o 2",
      "Zona 2 o zona 22: apparecchi di categoria 1, 2 o 3",
      "La lettera G o D deve corrispondere alla natura dell’atmosfera (gas o polveri)",
      "Gli apparecchi devono essere adatti anche al gruppo di gas o polvere e alla classe di temperatura richiesti"
     ],
     "appro": "Gli apparecchi già in uso prima dell’applicazione della direttiva ATEX devono soddisfare le prescrizioni minime dell’Allegato L e la loro idoneità va valutata nel documento sulla protezione contro le esplosioni.",
     "rif": "Allegato L, parte B, D.lgs. 81/2008",
     "nar": "L’Allegato L stabilisce che nelle zone zero e venti si usano apparecchi di categoria uno; nelle zone uno e ventuno di categoria uno o due; nelle zone due e ventidue di categoria uno, due o tre. La lettera G o D deve corrispondere al tipo di atmosfera e l’apparecchio deve essere adatto al gruppo e alla classe di temperatura.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Leggere la marcatura ATEX",
     "foto": false,
     "lead": "La marcatura riassume le caratteristiche di sicurezza dell’apparecchio: va confrontata con la classificazione della zona.",
     "punti": [
      "Simbolo Ex nell’esagono, gruppo (II) e categoria con lettera: ad esempio II 2 G o II 3 D",
      "Modo di protezione: ad esempio «d» (custodia a prova di esplosione), «e» (sicurezza aumentata), «i» (sicurezza intrinseca), «t» (protezione mediante custodie per polveri)",
      "Gruppo di gas IIA, IIB, IIC (IIC il più severo, ad esempio idrogeno e acetilene); gruppo di polveri IIIA, IIIB, IIIC",
      "Classe di temperatura per i gas da T1 (450 °C) a T6 (85 °C): la temperatura superficiale massima deve essere inferiore alla temperatura di accensione della sostanza",
      "Livello di protezione delle apparecchiature (EPL): Ga, Gb, Gc per i gas; Da, Db, Dc per le polveri"
     ],
     "appro": "Esempio: «II 2 G Ex db IIB T4 Gb» indica un apparecchio del gruppo II, categoria 2, per gas, con custodia a prova di esplosione, adatto ai gas del gruppo IIB e a sostanze con temperatura di accensione superiore a 135 °C, livello di protezione Gb: idoneo alla zona 1 per sostanze compatibili con questi limiti.",
     "rif": "Direttiva 2014/34/UE · serie CEI EN IEC 60079",
     "nar": "La marcatura si legge così: simbolo Ex, gruppo e categoria con la lettera G o D, modo di protezione, gruppo di gas o di polveri, classe di temperatura e livello di protezione. Per esempio, due due G Ex db due B T4 Gb indica un apparecchio per gas, di categoria due, adatto alla zona uno per sostanze del gruppo due B con temperatura di accensione superiore a centotrentacinque gradi.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Misure tecniche di prevenzione e protezione",
     "foto": false,
     "lead": "Le misure si scelgono secondo la gerarchia del Titolo XI: evitare la formazione dell’atmosfera esplosiva, evitarne l’accensione, limitarne gli effetti.",
     "punti": [
      "Prevenzione della formazione: sostituzione delle sostanze, sistemi chiusi, ventilazione, aspirazione localizzata, inertizzazione, pulizia delle polveri",
      "Controllo delle sorgenti di innesco: apparecchi conformi alla zona, messa a terra ed equipotenzialità, controllo delle temperature, utensili adatti",
      "Protezione costruttiva: sistemi di sfogo dell’esplosione (venting), soppressione, resistenza alla pressione",
      "Isolamento dell’esplosione: barriere, valvole e sistemi che impediscono la propagazione tra parti dell’impianto",
      "Rilevatori di gas e sistemi di allarme e di blocco"
     ],
     "appro": "I sistemi di protezione dalle esplosioni sono regolati da norme della serie UNI EN 14491 (sfoghi per polveri), UNI EN 14994 (sfoghi per gas), UNI EN 14373 (soppressione) e UNI EN 15089 (isolamento). La scelta dipende dai parametri di esplosività della sostanza e dalle caratteristiche dell’impianto.",
     "rif": "Art. 289 e Allegato L D.lgs. 81/2008 · UNI EN 1127-1 · UNI EN 14491 · UNI EN 14373 · UNI EN 15089",
     "nar": "Le misure tecniche seguono una gerarchia: prima si impedisce la formazione dell’atmosfera esplosiva con sistemi chiusi, ventilazione, inertizzazione e pulizia; poi si eliminano le sorgenti di innesco con apparecchi idonei, messa a terra e controllo delle temperature; infine si limitano gli effetti con sfoghi, soppressione e isolamento dell’esplosione.",
     "p": 1.6
    },
    {
     "t": "testo",
     "tit": "Misure organizzative",
     "foto": false,
     "lead": "Le misure tecniche funzionano solo se sostenute da un’organizzazione adeguata.",
     "punti": [
      "Permesso di lavoro per gli interventi nelle zone classificate, in particolare per i lavori a caldo e con attrezzature non idonee",
      "Bonifica e verifica dell’assenza di atmosfera esplosiva prima di lavori pericolosi, monitoraggio durante il lavoro",
      "Manutenzione e verifiche delle apparecchiature e degli impianti secondo le norme (ad esempio CEI EN IEC 60079-17)",
      "Verifiche periodiche degli impianti elettrici nei luoghi con pericolo di esplosione (D.P.R. 462/2001)",
      "Pulizia programmata delle polveri, controllo degli accessi, divieto di fumo e di fiamme libere, segnaletica"
     ],
     "appro": "Gli impianti elettrici nei luoghi con pericolo di esplosione sono soggetti a verifica periodica biennale secondo il D.P.R. 462/2001. Le modifiche agli apparecchi certificati, anche piccole riparazioni, possono comprometterne la protezione: le riparazioni seguono le norme specifiche e le istruzioni del fabbricante.",
     "rif": "Allegato L D.lgs. 81/2008 · D.P.R. 462/2001 · CEI EN IEC 60079-17 · CEI EN IEC 60079-19",
     "nar": "Le misure organizzative comprendono il permesso di lavoro nelle zone classificate, la bonifica e il monitoraggio prima e durante i lavori pericolosi, la manutenzione e le verifiche delle apparecchiature, le verifiche biennali degli impianti elettrici e la pulizia programmata delle polveri, con controllo degli accessi e segnaletica.",
     "p": 1.6
    },
    {
     "t": "caso",
     "tit": "Esercitazione · La saldatura sul silo di farina",
     "scena": "Il manutentore deve saldare una staffa sul fianco di un silo di farina classificato all’esterno come zona 22. Propone di farlo «velocemente durante la pausa».",
     "domanda": "Come si deve procedere?",
     "opz": [
      [
       "Saldare durante la pausa: il silo è fermo",
       false,
       "No: polvere depositata e interna al silo possono accendersi."
      ],
      [
       "Permesso di lavoro a caldo: fermata e svuotamento o messa in sicurezza del silo, pulizia accurata delle polveri depositate, protezione delle aperture, verifica, sorveglianza antincendio durante e dopo il lavoro",
       true,
       "Corretto: i lavori a caldo in zone classificate richiedono la rimozione delle condizioni di pericolo."
      ],
      [
       "Bagnare il silo e saldare",
       false,
       "No: non è una misura idonea né sufficiente."
      ]
     ],
     "rif": "Allegato L D.lgs. 81/2008 · art. 294",
     "appro": "Le esplosioni secondarie dovute alla polvere depositata sulle strutture sono spesso più distruttive della prima: la pulizia è una misura di prevenzione fondamentale.",
     "nar": "Esercitazione: analizza il caso, discuti in gruppo e scegli la risposta corretta.",
     "p": 1.4
    },
    {
     "t": "testo",
     "tit": "Informazione, formazione e coordinamento",
     "foto": false,
     "lead": "Il Titolo XI richiede formazione specifica per i lavoratori che operano in aree con atmosfere esplosive.",
     "punti": [
      "Formazione su zone, misure di protezione, comportamenti e procedure di emergenza (art. 294-bis)",
      "Riconoscimento del segnale EX e dei limiti delle aree classificate",
      "Uso di indumenti e calzature antistatici dove previsti dalla valutazione",
      "Coordinamento tra datori di lavoro quando più imprese operano nello stesso luogo (art. 292)",
      "Informazione delle imprese esterne su zone, divieti e permessi di lavoro"
     ],
     "appro": "Le imprese esterne che lavorano in aree classificate devono ricevere le informazioni contenute nel documento sulla protezione contro le esplosioni pertinenti al loro intervento, e utilizzare attrezzature idonee. Il coordinamento è parte degli obblighi dell’art. 26.",
     "rif": "Artt. 26, 292, 294-bis D.lgs. 81/2008",
     "nar": "I lavoratori delle aree classificate ricevono formazione specifica su zone, misure, comportamenti ed emergenze. Devono riconoscere il segnale EX e usare indumenti e calzature antistatici dove previsto. Quando più imprese lavorano nello stesso luogo, i datori di lavoro si coordinano e le imprese esterne ricevono le informazioni sulle zone e sui permessi.",
     "p": 1.6
    },
    {
     "t": "sintesi",
     "tit": "Sintesi del corso",
     "voci": [
      "Atmosfera esplosiva: miscela con aria tra LIE e LSE",
      "Tredici tipi di sorgenti di innesco, elettricità statica compresa",
      "Titolo XI: valutazione, zone, DPCE, formazione",
      "Zone 0-1-2 per gas, 20-21-22 per polveri",
      "Categorie 1-2-3 e marcatura: gruppo, temperatura, EPL",
      "Prevenzione, protezione e permessi di lavoro"
     ],
     "nar": "Concludiamo. Ricorda: l’atmosfera esplosiva si previene, le sorgenti di innesco si controllano, le zone si rispettano, gli apparecchi si scelgono leggendo la marcatura e i lavori pericolosi si autorizzano con il permesso di lavoro.",
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
    "La definizione di atmosfera esplosiva è nell’articolo:",
    [
     "288",
     "28",
     "71",
     "180"
    ],
    0,
    "Art. 288."
   ],
   [
    "L’LSE è:",
    [
     "Il limite superiore di esplodibilità",
     "Una classe di temperatura",
     "Un gruppo di gas",
     "Un tipo di zona"
    ],
    0,
    "Parametri."
   ],
   [
    "Il punto di infiammabilità riguarda:",
    [
     "I liquidi",
     "I metalli",
     "I gas inerti",
     "L’acqua"
    ],
    0,
    "Parametri."
   ],
   [
    "Per le polveri, oltre al triangolo del fuoco, servono:",
    [
     "Dispersione e confinamento",
     "Solo l’umidità",
     "Il vento",
     "La luce"
    ],
    0,
    "Pentagono."
   ],
   [
    "Le sorgenti di innesco sono elencate nella norma:",
    [
     "UNI EN 1127-1",
     "UNI EN 361",
     "UNI EN 689",
     "UNI EN 131"
    ],
    0,
    "Sorgenti."
   ],
   [
    "La zona 0 indica atmosfera esplosiva per gas:",
    [
     "Presente in permanenza o frequentemente",
     "Rara",
     "Assente",
     "Solo di notte"
    ],
    0,
    "Allegato XLIX."
   ],
   [
    "La zona 22 riguarda:",
    [
     "Gas, rara",
     "Polveri, non probabile e di breve durata",
     "Polveri, permanente",
     "Liquidi"
    ],
    1,
    "Allegato XLIX."
   ],
   [
    "Nella zona 1 si possono usare apparecchi di categoria:",
    [
     "Solo 3",
     "1 o 2",
     "Solo 1",
     "Qualsiasi"
    ],
    1,
    "Allegato L, parte B."
   ],
   [
    "Nella zona 20 si usano apparecchi di categoria:",
    [
     "1",
     "2",
     "3",
     "Qualsiasi"
    ],
    0,
    "Allegato L, parte B."
   ],
   [
    "La lettera D nella marcatura indica:",
    [
     "Gas",
     "Polveri",
     "Doppio isolamento",
     "Durata"
    ],
    1,
    "Marcatura."
   ],
   [
    "Il gruppo di gas più severo è:",
    [
     "IIA",
     "IIB",
     "IIC",
     "I"
    ],
    2,
    "Gruppi di gas."
   ],
   [
    "La classe di temperatura T6 corrisponde a una temperatura superficiale massima di:",
    [
     "450 °C",
     "200 °C",
     "135 °C",
     "85 °C"
    ],
    3,
    "Classi di temperatura."
   ],
   [
    "La classe di temperatura T4 corrisponde a:",
    [
     "135 °C",
     "300 °C",
     "100 °C",
     "450 °C"
    ],
    0,
    "Classi di temperatura."
   ],
   [
    "Il modo di protezione «d» indica:",
    [
     "Custodia a prova di esplosione",
     "Sicurezza intrinseca",
     "Sicurezza aumentata",
     "Immersione in olio"
    ],
    0,
    "Modi di protezione."
   ],
   [
    "Il modo di protezione «i» indica:",
    [
     "Sicurezza intrinseca",
     "Isolamento",
     "Incapsulamento",
     "Inertizzazione"
    ],
    0,
    "Modi di protezione."
   ],
   [
    "L’EPL Gb è adatto alla zona:",
    [
     "0",
     "1",
     "20",
     "22 soltanto"
    ],
    1,
    "EPL."
   ],
   [
    "La direttiva 2014/34/UE è attuata in Italia dal:",
    [
     "D.lgs. 85/2016",
     "D.lgs. 81/2008",
     "D.P.R. 462/2001",
     "D.M. 37/2008"
    ],
    0,
    "Direttiva ATEX prodotti."
   ],
   [
    "Il documento sulla protezione contro le esplosioni si aggiorna:",
    [
     "Mai",
     "In caso di modifiche rilevanti",
     "Ogni 10 anni soltanto",
     "Solo su richiesta dell’INAIL"
    ],
    1,
    "Art. 294."
   ],
   [
    "Il segnale di avvertimento per le aree ATEX è:",
    [
     "Triangolo giallo con «EX»",
     "Cerchio blu",
     "Quadrato verde",
     "Cerchio rosso barrato"
    ],
    0,
    "Allegato LI."
   ],
   [
    "La classificazione delle zone per i gas segue la norma:",
    [
     "CEI EN IEC 60079-10-1",
     "CEI 64-8",
     "UNI EN 2",
     "UNI 9795"
    ],
    0,
    "Classificazione."
   ],
   [
    "La classificazione delle zone per le polveri segue la norma:",
    [
     "CEI EN IEC 60079-10-2",
     "UNI EN 361",
     "CEI 11-27",
     "UNI EN 1838"
    ],
    0,
    "Classificazione."
   ],
   [
    "Un grado di emissione «secondo» indica un’emissione:",
    [
     "Continua",
     "Occasionale nel funzionamento normale",
     "Rara e di breve durata",
     "Permanente"
    ],
    2,
    "Gradi di emissione."
   ],
   [
    "La ventilazione influisce su:",
    [
     "Tipo ed estensione delle zone",
     "Nulla",
     "Solo il rumore",
     "Solo il microclima"
    ],
    0,
    "Classificazione."
   ],
   [
    "L’inertizzazione è una misura di:",
    [
     "Prevenzione della formazione dell’atmosfera esplosiva",
     "Protezione dell’udito",
     "Segnalazione",
     "Primo soccorso"
    ],
    0,
    "Misure tecniche."
   ],
   [
    "Lo sfogo dell’esplosione (venting) è una misura:",
    [
     "Di protezione costruttiva",
     "Di prevenzione",
     "Organizzativa",
     "Sanitaria"
    ],
    0,
    "Misure tecniche."
   ],
   [
    "Gli impianti elettrici nei luoghi con pericolo di esplosione sono verificati:",
    [
     "Ogni 2 anni (D.P.R. 462/2001)",
     "Ogni 10 anni",
     "Mai",
     "Ogni mese"
    ],
    0,
    "D.P.R. 462/2001."
   ],
   [
    "I lavori a caldo in zona classificata richiedono:",
    [
     "Nessuna precauzione",
     "Permesso di lavoro e rimozione delle condizioni di pericolo",
     "Solo l’estintore",
     "Solo la presenza del preposto"
    ],
    1,
    "Misure organizzative."
   ],
   [
    "L’informazione e formazione dei lavoratori ATEX è prevista dall’articolo:",
    [
     "294-bis",
     "37 soltanto",
     "73",
     "169"
    ],
    0,
    "Art. 294-bis."
   ],
   [
    "Durante il travaso di liquidi infiammabili occorre:",
    [
     "Usare contenitori non conduttivi",
     "Collegare a terra ed equipotenzializzare i contenitori",
     "Agitare il liquido",
     "Lavorare al buio"
    ],
    1,
    "Elettricità statica."
   ],
   [
    "Le esplosioni secondarie di polveri sono causate da:",
    [
     "Polvere depositata sollevata dalla prima esplosione",
     "Umidità",
     "Rumore",
     "Illuminazione"
    ],
    0,
    "Polveri."
   ]
  ]
 }
};
