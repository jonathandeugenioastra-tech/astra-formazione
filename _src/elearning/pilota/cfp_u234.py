"""CFP riprogettato – Modulo 1 in quattro unità (U1 da u1.py, U2–U4 qui).
Dati verificati su fonti ufficiali al 15/11/2026: tabella MASE parametri standard nazionali 2021–2023
(gas naturale 2,019 t CO2/1.000 Sm³; PCI 8,499 Mcal/Sm³; GPL 3,026; gasolio riscaldamento 3,169; gasolio autotrazione 3,150;
benzina 3,152 t CO2/t); ISPRA Rapporto 430/2026 (consumi elettrici 2024: 192,6 g CO2/kWh); AIB European Residual Mixes 2025
(Italia 420,2 g CO2/kWh); Dir. (UE) 2018/2001 art. 19 (garanzie di origine: validità 12 mesi); Reg. (UE) 2024/573;
Dir. (UE) 2024/825; Raccomandazione (UE) 2025/1710 (VSME)."""
import json, runpy

ns = runpy.run_path('/tmp/claude-0/pilota/u1.py')
S1 = ns['S']

V = lambda tit, dom, soglia=6: {"t": "verifica", "tit": tit, "soglia": soglia, "domande": dom, "nar": "Verifica intermedia."}

# ───────────────────────────── UNITÀ 2 ─────────────────────────────
S2 = [
 {"t": "sezione", "tit": "Unità 2", "sott": "Confini e categorie dell’inventario", "nar": "Unità due. Confini e categorie dell’inventario."},
 {"t": "testo", "tit": "Il gruppo con tre stabilimenti", "lead": "Prima di contare le emissioni bisogna decidere che cosa appartiene all’inventario.",
  "punti": ["Stabilimento A: di proprietà, gestito da te", "Stabilimento B: società partecipata al 40%, gestita da un socio", "Magazzino C: in affitto, gestito dal tuo personale", "La risposta dipende dall’approccio di consolidamento scelto"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "La tua azienda ha tre siti. Lo stabilimento A è di proprietà e lo gestisci tu. Lo stabilimento B appartiene a una società in cui hai il quaranta per cento, ma la gestisce un altro socio. Il magazzino C è in affitto, e dentro lavora il tuo personale. Quali emissioni entrano nel tuo inventario? Non c’è una risposta unica: dipende da come scegli di consolidare i dati. In questa unità impari a tracciare i confini, a collocare ogni emissione nella categoria giusta e a fissare l’anno con cui confrontarti."},
 {"t": "testo", "tit": "I cinque principi dell’inventario", "lead": "Ogni scelta dell’inventario si giudica su cinque principi.",
  "punti": ["Pertinenza: dati e metodi adatti a chi userà l’inventario", "Completezza: tutte le emissioni significative entro i confini", "Coerenza: stessi metodi nel tempo, per poter confrontare gli anni", "Accuratezza: ridurre errori e incertezze per quanto possibile", "Trasparenza: ipotesi, fonti e metodi dichiarati e verificabili"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "La norma UNI EN ISO quattordicimilasessantaquattro, parte uno, chiede che l’inventario rispetti cinque principi. Pertinenza: i dati e i metodi devono servire a chi userà i risultati, che sia un cliente, una banca o la direzione. Completezza: dentro i confini non mancano emissioni significative. Coerenza: usi gli stessi metodi anno dopo anno, altrimenti i confronti non reggono. Accuratezza: riduci gli errori e l’incertezza per quanto è ragionevole. Trasparenza: scrivi ipotesi, fonti e metodi in modo che un verificatore possa ripercorrere il calcolo. Ogni volta che dovrai scegliere, chiediti quale di questi principi stai proteggendo."},
 {"t": "confronto", "tit": "Due modi di consolidare",
  "sx": {"ico": "FaBuilding", "tit": "Approccio del controllo", "voci": ["Includi il 100% delle emissioni dei siti che controlli", "Controllo operativo: hai l’autorità di gestire le attività", "Controllo finanziario: indirizzi le politiche economiche", "Nulla dei siti che non controlli, anche se ne hai una quota"]},
  "dx": {"ico": "FaChartPie", "tit": "Approccio della quota", "voci": ["Includi le emissioni in proporzione alla quota posseduta", "Partecipata al 40% → 40% delle sue emissioni", "Riflette la proprietà economica", "Richiede dati da tutte le partecipate"]},
  "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Per decidere che cosa entra nell’inventario scegli un approccio di consolidamento e lo applichi in modo coerente. Con l’approccio del controllo includi il cento per cento delle emissioni dei siti che controlli, e niente di quelli che non controlli. Il controllo può essere operativo, se hai l’autorità di gestire le attività, oppure finanziario. Con l’approccio della quota includi le emissioni in proporzione alla partecipazione: di una società di cui possiedi il quaranta per cento, conti il quaranta per cento delle emissioni. Nella maggior parte delle piccole e medie imprese il controllo operativo è la scelta più semplice e più facile da documentare."},
 {"t": "testo", "tit": "Le sei categorie della UNI EN ISO 14064-1", "lead": "Dentro i confini, ogni emissione va in una delle sei categorie.",
  "punti": ["1 · Emissioni e rimozioni dirette", "2 · Indirette da energia importata", "3 · Indirette da trasporto", "4 · Indirette da prodotti usati dall’organizzazione", "5 · Indirette associate all’uso dei prodotti dell’organizzazione", "6 · Indirette da altre fonti"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Una volta tracciati i confini organizzativi, definisci quelli operativi: quali emissioni consideri. La norma le divide in sei categorie. La prima sono le emissioni dirette: caldaie, forni, veicoli, perdite di refrigerante. La seconda sono le emissioni indirette dell’energia che acquisti, soprattutto l’energia elettrica. La terza riguarda i trasporti: merci in entrata e in uscita, viaggi di lavoro, spostamenti dei dipendenti. La quarta comprende i prodotti e i servizi che usi: materie prime, imballaggi, rifiuti che conferisci. La quinta riguarda l’uso e il fine vita dei prodotti che vendi. La sesta raccoglie tutto il resto. Le prime due vanno sempre quantificate; per le altre si valuta la significatività."},
 {"t": "testo", "tit": "Categorie ISO e Scope del GHG Protocol", "lead": "Molti clienti chiedono i dati in Scope: le due classificazioni si corrispondono.",
  "punti": ["Categoria 1 ≈ Scope 1", "Categoria 2 ≈ Scope 2", "Categorie 3–6 ≈ Scope 3 (15 categorie del GHG Protocol)", "Trasporti e viaggi (cat. 3) ≈ Scope 3, categorie 4, 6, 7 e 9", "Acquisti, beni strumentali e rifiuti (cat. 4) ≈ Scope 3, categorie 1, 2, 3, 5 e 8"], "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol Corporate Value Chain (Scope 3) Standard",
  "nar": "Molti questionari dei clienti non parlano di categorie ma di Scope, secondo il GHG Protocol. Le due classificazioni si corrispondono. La categoria uno equivale allo Scope uno, la categoria due allo Scope due. Le categorie dalla tre alla sei coprono lo Scope tre, che il GHG Protocol divide in quindici categorie: dagli acquisti di beni e servizi ai trasporti, dai rifiuti al fine vita dei prodotti venduti. La corrispondenza è utile per rispondere ai questionari, ma non è una tabella ufficiale: nel tuo rapporto dichiari quale classificazione usi e la mantieni."},
 {"t": "classifica", "tit": "Ogni fonte nella sua categoria", "lead": "Seleziona una fonte, poi la categoria ISO corretta.",
  "colonne": ["1 · Dirette", "2 · Energia importata", "3 · Trasporti", "4 · Prodotti usati"],
  "schede": [["Gas naturale della caldaia", 0, "La combustione avviene in un tuo impianto: è un’emissione diretta.", "Corretto: combustione in un impianto dell’organizzazione."],
             ["Energia elettrica acquistata dalla rete", 1, "L’energia elettrica è prodotta altrove: è un’emissione indiretta da energia importata.", "Corretto: categoria 2, Scope 2."],
             ["Gasolio dei furgoni aziendali", 0, "I furgoni sono tuoi: la combustione è un’emissione diretta.", "Corretto: veicoli dell’organizzazione, categoria 1."],
             ["Corriere esterno per le spedizioni ai clienti", 2, "Il mezzo non è tuo: è un’emissione indiretta da trasporto.", "Corretto: trasporto affidato a terzi."],
             ["Acciaio acquistato come materia prima", 3, "Le emissioni nascono dalla produzione dell’acciaio presso il fornitore: categoria 4.", "Corretto: prodotti usati dall’organizzazione."],
             ["Perdita di refrigerante dal chiller", 0, "Il gas esce da un tuo impianto: è un’emissione diretta.", "Corretto: categoria 1."],
             ["Viaggi in aereo dei commerciali", 2, "Il mezzo non è tuo: rientra nei trasporti, categoria 3.", "Corretto: viaggi di lavoro."],
             ["Rifiuti conferiti a un impianto di trattamento", 3, "Il trattamento è un servizio che acquisti: categoria 4.", "Corretto: servizi usati dall’organizzazione."]],
  "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Otto fonti di emissione di una piccola impresa manifatturiera. Colloca ciascuna nella categoria corretta. Se sbagli, il riscontro ti spiega il criterio."},
 {"t": "testo", "tit": "L’anno base e quando ricalcolarlo", "lead": "L’anno base è il riferimento per misurare i progressi.",
  "punti": ["Scegli un anno con dati affidabili e rappresentativi", "Ricalcoli se cambiano i confini: acquisizioni, cessioni, esternalizzazioni", "Ricalcoli se cambiano i metodi o i fattori in modo significativo", "Ricalcoli se scopri errori significativi", "Fissa e dichiara una soglia di significatività (per esempio il 5%)"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Per dire che le tue emissioni sono diminuite ti serve un punto di partenza: l’anno base. Sceglilo tra gli anni con dati completi e affidabili, evitando anni anomali per fermi produttivi o eventi eccezionali. L’anno base non è intoccabile. Lo ricalcoli quando cambiano i confini, per esempio se acquisisci o cedi uno stabilimento; quando cambi metodi o fattori in modo significativo; quando scopri un errore rilevante. Per non ricalcolare a ogni piccola variazione, fissa una soglia di significatività, per esempio il cinque per cento delle emissioni, e scrivila nel rapporto."},
 {"t": "caso", "tit": "Caso · La cessione dello stabilimento B",
  "scena": "Anno base 2022: 1.000 t CO₂e, di cui 300 t dallo stabilimento B. Nel 2025 l’azienda cede lo stabilimento B; le emissioni 2025 sono 720 t CO₂e. La soglia di significatività dichiarata è il 5%.",
  "domanda": "Come presenti l’andamento rispetto all’anno base?",
  "opz": [["Riduzione del 28%: da 1.000 a 720 t", False, "Così attribuisci alle tue azioni un calo dovuto solo alla cessione: il confronto non è coerente."],
          ["Ricalcolo l’anno base a 700 t senza lo stabilimento B: le emissioni sono aumentate di circa il 3%", True, "Corretto: la cessione supera la soglia del 5% e cambia i confini. Con l’anno base ricalcolato a 700 t, le 720 t del 2025 indicano un aumento di circa il 3%."],
          ["Non presento il confronto finché non ho un nuovo anno base", False, "Non serve un nuovo anno base: si ricalcola quello esistente togliendo il sito ceduto."]],
  "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Un caso reale di ricalcolo. Leggi i dati e scegli come presentare l’andamento delle emissioni rispetto all’anno base."},
 {"t": "testo", "tit": "Emissioni indirette significative ed esclusioni", "lead": "Le categorie dalla 3 alla 6 si quantificano se sono significative.",
  "punti": ["Definisci criteri di significatività: entità, influenza, rischi e opportunità, richieste dei portatori di interesse", "Documenta i criteri e applicali a ogni fonte", "Le esclusioni vanno giustificate nel rapporto", "Inizia dalle fonti più rilevanti: spesso acquisti di materie prime e trasporti"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Le emissioni indirette delle categorie dalla tre alla sei sono spesso le più grandi, ma anche le più difficili da stimare. La norma ti chiede di definire criteri per stabilire quali sono significative: quanto pesano, quanto puoi influire su di esse, quali rischi e opportunità comportano, che cosa ti chiedono clienti e finanziatori. Applichi i criteri a ogni fonte, quantifichi quelle significative e giustifichi per iscritto quelle escluse. In una manifattura le prime candidate sono quasi sempre le materie prime acquistate e i trasporti."},
 {"t": "scenario", "tit": "Traccia i confini del gruppo",
  "scena": "Il tuo gruppo ha tre siti: lo stabilimento A, di proprietà e gestito da te; lo stabilimento B, partecipato al 40% e gestito da un socio; il magazzino C, in affitto e gestito dal tuo personale. Il cliente chiede un inventario con l’approccio del controllo operativo.",
  "decisioni": [
   {"dom": "Lo stabilimento A rientra nei confini?", "opz": [["Sì, al 100%", True, "Corretto: hai il controllo operativo, quindi includi tutte le sue emissioni."], ["Sì, ma solo per lo Scope 1", False, "Il controllo operativo porta nell’inventario tutte le emissioni del sito, dirette e indirette da energia."], ["No, conta solo il magazzino", False, "Lo stabilimento A è il tuo sito principale e lo gestisci tu: rientra al 100%."]]},
   {"dom": "E lo stabilimento B, partecipato al 40%?", "opz": [["Sì, al 40%", False, "Questo è l’approccio della quota. Con il controllo operativo un sito gestito da altri resta fuori."], ["No: non hai il controllo operativo", True, "Corretto: lo gestisce il socio. Puoi citarlo nel rapporto, ma le sue emissioni non entrano nell’inventario."], ["Sì, al 100%", False, "Non hai il controllo operativo: il sito resta fuori dai confini."]]},
   {"dom": "Il magazzino C, in affitto ma gestito dal tuo personale?", "opz": [["No, perché non è di proprietà", False, "Conta chi gestisce le attività, non chi è il proprietario dell’immobile."], ["Sì, al 100%: lo gestisci tu", True, "Corretto: il controllo operativo dipende dalla gestione, non dalla proprietà."], ["Sì, ma solo l’energia elettrica", False, "Se hai il controllo operativo includi tutte le emissioni del sito."]]}],
  "chiusura": "Con il controllo operativo contano la gestione e l’autorità di decidere, non la proprietà dei muri o delle quote. Scrivi la scelta nel rapporto e applicala ogni anno.", "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Il cliente ti chiede l’inventario con l’approccio del controllo operativo. Decidi, sito per sito, che cosa entra nei confini."},
 {"t": "vf", "tit": "Ripasso · Unità 1", "voci": [
   ["Le perdite di refrigerante di un impianto aziendale sono emissioni di Scope 2.", False, "Falso: il gas esce da un impianto dell’organizzazione, quindi è Scope 1."],
   ["Passando dalla serie AR5 alla serie AR6 si ricalcola anche l’anno base.", True, "Vero: così la serie storica resta confrontabile."],
   ["Un impianto da 60 t CO₂e senza sistema di rilevamento si controlla ogni 6 mesi.", True, "Vero: da 50 t CO₂e il controllo è semestrale."]],
  "nar": "Ripasso. Tre affermazioni sull’unità precedente: indica se sono vere o false."},
 {"t": "applica", "tit": "I confini della tua organizzazione", "lead": "Scegli l’approccio e indica le fonti indirette che ritieni significative.",
  "voci": ["Uso il controllo operativo", "Uso il controllo finanziario", "Uso l’approccio della quota", "Trasporti delle merci", "Viaggi di lavoro e pendolarismo", "Materie prime acquistate", "Imballaggi", "Rifiuti conferiti", "Uso e fine vita dei prodotti venduti"],
  "campo": "Siti inclusi nei confini e anno base proposto", "esempio": "Es.: stabilimento di Teramo e magazzino di Atessa; anno base 2024", "min": 3,
  "nar": "Applica quello che hai visto alla tua organizzazione. Indica l’approccio di consolidamento, le fonti indirette che ritieni significative, i siti inclusi e l’anno base che proporresti."},
 {"t": "sintesi", "tit": "Sintesi e cosa fare da domani", "voci": ["Scegli l’approccio di consolidamento e scrivilo nel rapporto", "Elenca i siti inclusi e le fonti per ciascuna delle sei categorie", "Fissa l’anno base e la soglia di significatività per il ricalcolo"],
  "nar": "Tre azioni da portare in azienda. Primo: scegli l’approccio di consolidamento e scrivilo. Secondo: elenca i siti inclusi e, per ciascuno, le fonti di emissione nelle sei categorie. Terzo: fissa l’anno base e la soglia oltre la quale lo ricalcolerai. Nella prossima unità passerai ai numeri: dati di attività e fattori di emissione."},
 V("Verifica intermedia · Unità 2", [
   ["Con l’approccio del controllo operativo, un sito in affitto gestito dal tuo personale:", ["Rientra al 100% nei confini", "Rientra in proporzione all’affitto", "Resta fuori dai confini"], 0, "Conta la gestione, non la proprietà."],
   ["Con l’approccio della quota, di una partecipata al 30% si includono:", ["Il 30% delle sue emissioni", "Il 100% delle sue emissioni", "Nessuna emissione"], 0, "Le emissioni si includono in proporzione alla quota."],
   ["L’energia elettrica acquistata dalla rete rientra nella categoria ISO:", ["2 · Indirette da energia importata", "1 · Dirette", "4 · Prodotti usati"], 0, "Corrisponde allo Scope 2."],
   ["Il trasporto delle merci affidato a un corriere rientra nella categoria:", ["3 · Indirette da trasporto", "1 · Dirette", "2 · Energia importata"], 0, "Il mezzo non appartiene all’organizzazione."],
   ["Quale di questi è un principio dell’inventario?", ["Trasparenza", "Riservatezza", "Rapidità"], 0, "I principi sono pertinenza, completezza, coerenza, accuratezza e trasparenza."],
   ["L’anno base si ricalcola quando:", ["Una cessione supera la soglia di significatività", "Le emissioni aumentano", "Cambia il responsabile dell’inventario"], 0, "Il ricalcolo segue cambi di confini, metodi o errori significativi."],
   ["Le emissioni indirette escluse dall’inventario:", ["Vanno giustificate nel rapporto", "Non vanno menzionate", "Si stimano a forfait"], 0, "La trasparenza richiede di motivare le esclusioni."],
   ["Le categorie ISO dalla 3 alla 6 corrispondono, nel GHG Protocol, a:", ["Scope 3", "Scope 2", "Scope 1"], 0, "Sono le altre emissioni indirette."]])]

# ───────────────────────────── UNITÀ 3 ─────────────────────────────
S3 = [
 {"t": "sezione", "tit": "Unità 3", "sott": "Dati di attività e fattori di emissione", "nar": "Unità tre. Dati di attività e fattori di emissione."},
 {"t": "testo", "tit": "Dalle bollette alle tonnellate", "lead": "Emissioni = dato di attività × fattore di emissione.",
  "punti": ["Dato di attività: quanto hai consumato o prodotto", "Fattore di emissione: quanto emette ogni unità di attività", "Fonte, edizione e anno di ogni fattore sempre dichiarati", "La qualità del risultato dipende dalla qualità dei dati"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Sulla tua scrivania hai le bollette del gas, le fatture dell’energia elettrica, le schede carburante dei mezzi. Sono la materia prima del calcolo. Ogni emissione si ottiene moltiplicando un dato di attività, cioè quanto hai consumato, per un fattore di emissione, cioè quanto emette ogni unità consumata. La formula è semplice: la difficoltà sta nello scegliere dati affidabili e fattori corretti per l’anno di riferimento. In questa unità impari a farlo per i combustibili e per l’energia elettrica."},
 {"t": "testo", "tit": "Da dove prendere i dati di attività", "lead": "Più il dato è vicino alla misura, più l’inventario è affidabile.",
  "punti": ["Misure dirette: contatori fiscali e misuratori di processo", "Documenti contabili: fatture, bollette, schede carburante", "Stime documentate: solo quando mancano misure e documenti", "Stesso periodo per tutti i dati: l’anno solare di rendicontazione", "Conserva le evidenze: il verificatore le chiederà"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "I dati di attività hanno una gerarchia di qualità. In cima ci sono le misure dirette: i contatori fiscali del gas e dell’energia elettrica, i misuratori di processo. Poi vengono i documenti contabili: fatture, bollette, schede carburante. Le stime vanno usate solo quando mancano misure e documenti, e il metodo va spiegato. Controlla che tutti i dati coprano lo stesso periodo, di solito l’anno solare: una bolletta a cavallo d’anno va ripartita. E conserva ogni evidenza, perché un verificatore partirà proprio da lì."},
 {"t": "testo", "tit": "I fattori nazionali dei combustibili", "lead": "Per l’Italia si usa la tabella dei parametri standard nazionali pubblicata dal Ministero dell’ambiente.",
  "punti": ["Gas naturale: 2,019 t CO₂ ogni 1.000 Sm³ (PCI 8,499 Mcal/Sm³)", "GPL: 3,026 t CO₂/t", "Gasolio per riscaldamento: 3,169 t CO₂/t", "Gasolio per autotrazione: 3,150 t CO₂/t", "Benzina: 3,152 t CO₂/t", "Valori della tabella 2021–2023, per le emissioni 2024: usa sempre la tabella in vigore per l’anno di rendicontazione"], "rif": "MASE · Tabella parametri standard nazionali 2021–2023",
  "nar": "Per i combustibili usati in Italia la fonte di riferimento è la tabella dei parametri standard nazionali, pubblicata dal Ministero dell’ambiente con i dati dell’ISPRA. Ogni anno esce una nuova edizione, basata sulla media dei tre anni precedenti. Nella tabella duemilaventuno, duemilaventitré, valida per le emissioni del duemilaventiquattro, il gas naturale vale due virgola zero diciannove tonnellate di anidride carbonica ogni mille standard metri cubi. Il GPL vale tre virgola zero ventisei tonnellate per tonnellata, il gasolio per riscaldamento tre virgola centosessantanove, il gasolio per autotrazione tre virgola centocinquanta. Regola d’oro: usa sempre l’edizione valida per l’anno che stai rendicontando, e scrivila nel rapporto."},
 {"t": "esempio", "tit": "Esempio guidato · Lo Scope 1 di uno stabilimento", "lead": "Gas naturale e gasolio dei mezzi, con i fattori nazionali.",
  "passi": [["Dati di attività", "Dalle fatture: 120.000 Sm³ di gas naturale; dalle schede carburante: 18 t di gasolio per autotrazione.", "120.000 Sm³ · 18 t"],
            ["Gas naturale", "Volume diviso mille, per il fattore nazionale.", "120.000 ÷ 1.000 × 2,019 = 242,3 t CO₂"],
            ["Gasolio dei mezzi", "Massa per il fattore nazionale.", "18 × 3,150 = 56,7 t CO₂"],
            ["Totale combustione", "Si sommano le due voci; le perdite di refrigerante si aggiungono a parte.", "242,3 + 56,7 = 299,0 t CO₂"]],
  "rif": "MASE · Tabella parametri standard nazionali 2021–2023",
  "nar": "Calcoliamo lo Scope uno da combustione di uno stabilimento. Dalle fatture risultano centoventimila standard metri cubi di gas naturale. Dividi per mille e moltiplichi per due virgola zero diciannove: duecentoquarantadue virgola tre tonnellate di anidride carbonica. Dalle schede carburante risultano diciotto tonnellate di gasolio: per tre virgola centocinquanta fanno cinquantasei virgola sette tonnellate. In totale, duecentonovantanove tonnellate. Se nell’anno ci sono state perdite di refrigerante, le aggiungi come hai imparato nella prima unità."},
 {"t": "grafico", "tit": "Calcola lo Scope 1 da combustione", "lead": "Modifica i consumi e osserva come cambia il totale.", "rif": "MASE · Tabella parametri standard nazionali 2021–2023",
  "grafico": {"tipo": "calcolo", "formula_testo": "t CO₂ = Sm³ × 2,019 / 1.000 + t gasolio × 3,150 + t GPL × 3,026",
   "ingressi": [{"id": "g", "nome": "Gas naturale", "min": 0, "max": 400000, "passo": 5000, "val": 120000, "unita": "Sm³"}, {"id": "d", "nome": "Gasolio per autotrazione", "min": 0, "max": 100, "passo": 1, "val": 18, "unita": "t"}, {"id": "l", "nome": "GPL", "min": 0, "max": 50, "passo": 1, "val": 0, "unita": "t"}],
   "risultati": [{"nome": "Scope 1 da combustione", "formula": "g*2.019/1000 + d*3.150 + l*3.026"}, {"nome": "Energia del gas naturale", "formula": "g*8.499/1000", "unita": "Gcal"}],
   "quote": [{"nome": "Gas naturale", "formula": "g*2.019/1000"}, {"nome": "Gasolio", "formula": "d*3.150"}, {"nome": "GPL", "formula": "l*3.026"}], "unita": "t CO₂", "scala": 1200},
  "nar": "Prova a cambiare i consumi di gas naturale, gasolio e GPL. Il calcolatore applica i fattori della tabella nazionale e mostra anche l’energia del gas, utile per gli indicatori energetici."},
 {"t": "testo", "tit": "Lo Scope 2 con il metodo location-based", "lead": "Si usa il fattore medio della rete elettrica in cui consumi l’energia.",
  "punti": ["Italia, consumi elettrici 2024: 192,6 g CO₂/kWh", "Fonte: ISPRA, Rapporto 430/2026", "Calcolo: kWh × 0,1926 / 1.000 = t CO₂", "Riflette il mix medio nazionale, indipendentemente dal contratto di fornitura"], "rif": "ISPRA · Rapporto 430/2026 · GHG Protocol Scope 2 Guidance",
  "nar": "Per l’energia elettrica il GHG Protocol prevede due metodi. Il primo, basato sulla localizzazione, usa il fattore medio della rete su cui consumi l’energia. Per l’Italia il dato ufficiale lo pubblica l’ISPRA: nel rapporto quattrocentotrenta del duemilaventisei, il fattore per i consumi elettrici del duemilaventiquattro è centonovantadue virgola sei grammi di anidride carbonica per chilowattora. Se lo stabilimento consuma seicentomila chilowattora, le emissioni sono circa centoquindici virgola sei tonnellate. Questo metodo racconta la rete in cui operi, indipendentemente dal contratto che hai firmato."},
 {"t": "testo", "tit": "Lo Scope 2 con il metodo market-based", "lead": "Si usano i fattori degli strumenti contrattuali che hai acquistato.",
  "punti": ["Garanzie di origine annullate a tuo nome: energia rinnovabile a emissioni zero", "Garanzia di origine: rilasciata in Italia dal GSE, valida 12 mesi dalla produzione", "Consumi non coperti: si usa il mix residuale (Italia 2025: 420,2 g CO₂/kWh, AIB)", "Il GHG Protocol chiede di riportare entrambi i metodi"], "rif": "GHG Protocol Scope 2 Guidance · Dir. (UE) 2018/2001, art. 19 · AIB European Residual Mixes 2025",
  "nar": "Il secondo metodo, basato sul mercato, usa i fattori degli strumenti contrattuali che hai scelto. In Europa lo strumento principale è la garanzia di origine: in Italia la rilascia il GSE, vale dodici mesi dalla produzione e deve essere annullata a nome di chi consuma. L’energia coperta da garanzie di origine rinnovabili ha emissioni zero. Per i consumi non coperti non si usa la media di rete, ma il mix residuale, cioè quello che resta dopo aver tolto l’energia venduta con garanzie: per l’Italia, nel duemilaventicinque, l’AIB indica quattrocentoventi virgola due grammi per chilowattora. Il GHG Protocol chiede di riportare sempre entrambi i risultati."},
 {"t": "grafico", "tit": "Location-based e market-based a confronto", "lead": "Cambia i consumi e la quota coperta da garanzie di origine.", "rif": "ISPRA · Rapporto 430/2026 · AIB 2025",
  "grafico": {"tipo": "calcolo", "formula_testo": "Location = kWh × 0,1926 / 1.000 · Market = kWh × (1 − quota GO) × 0,4202 / 1.000",
   "ingressi": [{"id": "e", "nome": "Energia elettrica consumata", "min": 50000, "max": 2000000, "passo": 10000, "val": 600000, "unita": "kWh"}, {"id": "q", "nome": "Quota coperta da garanzie di origine", "min": 0, "max": 100, "passo": 5, "val": 50, "unita": "%"}],
   "risultati": [{"nome": "Metodo location-based", "formula": "e*0.1926/1000"}, {"nome": "Metodo market-based", "formula": "e*(1-q/100)*0.4202/1000"}], "unita": "t CO₂", "scala": 1000},
  "nar": "Confronta i due metodi. Con seicentomila chilowattora e metà dei consumi coperti da garanzie di origine, il metodo di mercato dà circa centoventisei tonnellate, più del metodo di rete. Prova a portare la quota al cento per cento, poi a zero, e osserva perché il mix residuale pesa più della media nazionale."},
 {"t": "classifica", "tit": "Quale fattore usare?", "lead": "Seleziona una situazione, poi il fattore corretto.",
  "colonne": ["Fattore medio di rete (ISPRA)", "Zero emissioni (garanzie di origine annullate)", "Mix residuale"],
  "schede": [["Calcolo Scope 2 con il metodo location-based", 0, "Il metodo di rete usa sempre il fattore medio nazionale, qualunque sia il contratto.", "Corretto."],
             ["Market-based: energia coperta da garanzie di origine rinnovabili annullate a tuo nome", 1, "Le garanzie annullate a tuo nome ti attribuiscono energia rinnovabile a emissioni zero.", "Corretto."],
             ["Market-based: energia senza garanzie di origine", 2, "Senza strumenti contrattuali, nel metodo di mercato si usa il mix residuale.", "Corretto."],
             ["Market-based: offerta «verde» senza garanzie di origine annullate", 2, "Senza garanzie annullate a tuo nome l’offerta non soddisfa i criteri di qualità: si usa il mix residuale.", "Corretto."]],
  "rif": "GHG Protocol Scope 2 Guidance",
  "nar": "Quattro situazioni reali. Per ciascuna scegli il fattore corretto."},
 {"t": "testo", "tit": "Qualità dei dati e incertezza", "lead": "Ogni dato ha un’incertezza: dichiararla rende il risultato credibile.",
  "punti": ["Valuta l’incertezza di dati di attività e fattori", "Le misure fiscali hanno incertezze basse; le stime più alte", "Concentra il miglioramento sulle fonti più grandi e più incerte", "Documenta in un piano di gestione dei dati chi raccoglie cosa, quando e da quale fonte"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Nessun inventario è esatto al chilogrammo. Ogni dato ha un’incertezza: un contatore fiscale è molto preciso, una stima sui chilometri percorsi molto meno. La norma ti chiede di valutare l’incertezza e di lavorare per ridurla dove conta di più, cioè sulle fonti più grandi e meno precise. Lo strumento pratico è un piano di gestione dei dati: per ogni voce scrivi chi raccoglie il dato, con quale frequenza, da quale documento e con quale fattore. Il prossimo anno ti farà risparmiare giorni di lavoro."},
 {"t": "scenario", "tit": "L’offerta di energia verde",
  "scena": "Un fornitore ti propone un contratto di «energia 100% verde» per lo stabilimento, che consuma 600.000 kWh all’anno. Il prezzo è vantaggioso. Devi preparare l’inventario dell’anno.",
  "decisioni": [
   {"dom": "Che cosa chiedi al fornitore prima di firmare?", "opz": [["Basta la dicitura «100% verde» in contratto", False, "La dicitura commerciale non basta: servono garanzie di origine annullate a nome tuo."], ["Che le garanzie di origine siano annullate a nome della tua azienda, per l’energia e il periodo di fornitura", True, "Corretto: solo così l’energia ti viene attribuita come rinnovabile."], ["Un attestato generico sul mix del fornitore", False, "Il mix medio del fornitore non ti attribuisce l’energia rinnovabile: servono garanzie annullate a tuo nome."]]},
   {"dom": "Con le garanzie annullate, come calcoli lo Scope 2?", "opz": [["Solo market-based: zero emissioni", False, "Il GHG Protocol chiede di riportare entrambi i metodi."], ["Location-based con il fattore ISPRA e market-based a zero, riportati entrambi", True, "Corretto: circa 115,6 t con il metodo di rete e zero con il metodo di mercato."], ["Solo location-based", False, "Così non valorizzi la scelta contrattuale: riporta entrambi i risultati."]]},
   {"dom": "Il marketing vuole scrivere «stabilimento a zero emissioni». Che cosa rispondi?", "opz": [["Va bene: lo Scope 2 market-based è zero", False, "Lo Scope 1 dello stabilimento resta: gas naturale, gasolio, refrigeranti."], ["No: è un’asserzione generica e incompleta; si può dire che l’energia elettrica acquistata è coperta da garanzie di origine rinnovabili", True, "Corretto: un’asserzione precisa e verificabile, senza estendere il risultato a tutto lo stabilimento."], ["Va bene se si aggiunge un asterisco", False, "Un asterisco non rende corretta un’asserzione falsa nella sostanza."]]}],
  "chiusura": "Le garanzie di origine cambiano il risultato market-based, non quello location-based né lo Scope 1. Comunica esattamente ciò che hai fatto, con i numeri.", "rif": "GHG Protocol Scope 2 Guidance · Dir. (UE) 2024/825",
  "nar": "Un fornitore ti propone energia cento per cento verde. Decidi come valutare l’offerta, come calcolare lo Scope due e come comunicare il risultato."},
 {"t": "vf", "tit": "Ripasso · Unità 1 e 2", "voci": [
   ["Con il controllo operativo, una partecipata al 40% gestita da un socio entra nell’inventario al 40%.", False, "Falso: con il controllo operativo resta fuori. Al 40% entrerebbe con l’approccio della quota."],
   ["Il GWP dell’HFC-134a nel sesto rapporto IPCC è 1.530.", True, "Vero."],
   ["La cessione di uno stabilimento oltre la soglia di significatività richiede il ricalcolo dell’anno base.", True, "Vero: cambiano i confini."]],
  "nar": "Ripasso. Tre affermazioni sulle unità precedenti: vere o false?"},
 {"t": "sintesi", "tit": "Sintesi e cosa fare da domani", "voci": ["Raccogli fatture e letture dei contatori dell’anno solare", "Usa la tabella dei parametri standard nazionali valida per l’anno di rendicontazione", "Calcola lo Scope 2 con entrambi i metodi e verifica le garanzie di origine"],
  "nar": "Tre azioni. Primo: raccogli fatture e letture dei contatori dell’anno solare, ripartendo le bollette a cavallo d’anno. Secondo: usa la tabella nazionale valida per l’anno che rendiconti e scrivi l’edizione. Terzo: calcola lo Scope due con entrambi i metodi e verifica che le garanzie di origine siano annullate a tuo nome. Nella prossima unità metterai tutto insieme in un inventario completo."},
 V("Verifica intermedia · Unità 3", [
   ["Le emissioni si calcolano come:", ["Dato di attività × fattore di emissione", "Dato di attività + fattore di emissione", "Fattore di emissione ÷ dato di attività"], 0, "È la formula di base."],
   ["Con il fattore 2,019 t CO₂ ogni 1.000 Sm³, 50.000 Sm³ di gas naturale emettono:", ["100,95 t CO₂", "2.019 t CO₂", "10,1 t CO₂"], 0, "50.000 ÷ 1.000 × 2,019 = 100,95."],
   ["Per i combustibili in Italia si usa:", ["La tabella dei parametri standard nazionali valida per l’anno", "Un fattore europeo medio", "Il fattore indicato dal fornitore, senza fonte"], 0, "La tabella è pubblicata dal Ministero dell’ambiente con i dati ISPRA."],
   ["Il metodo location-based usa:", ["Il fattore medio della rete nazionale", "Le garanzie di origine", "Il mix residuale"], 0, "Riflette la rete in cui consumi."],
   ["Nel metodo market-based, l’energia senza garanzie di origine si calcola con:", ["Il mix residuale", "Il fattore zero", "Il fattore medio di rete"], 0, "Il mix residuale esclude l’energia già venduta con garanzie."],
   ["Le garanzie di origine in Italia sono rilasciate da:", ["GSE", "ISPRA", "ARERA"], 0, "Il GSE gestisce il sistema delle garanzie di origine."],
   ["Il GHG Protocol chiede di riportare lo Scope 2:", ["Con entrambi i metodi", "Solo con il metodo market-based", "Solo con il metodo location-based"], 0, "È il dual reporting."],
   ["Per migliorare la qualità dei dati conviene partire da:", ["Le fonti più grandi e più incerte", "Le fonti più piccole", "Le fonti già misurate"], 0, "Il miglioramento ha più effetto dove l’incertezza pesa di più."]])]

# ───────────────────────────── UNITÀ 4 ─────────────────────────────
S4 = [
 {"t": "sezione", "tit": "Unità 4", "sott": "L’inventario di uno stabilimento", "nar": "Unità quattro. L’inventario di uno stabilimento."},
 {"t": "testo", "tit": "Mettiamo tutto insieme", "lead": "Un inventario completo, dal dato grezzo al rapporto.",
  "punti": ["Confini: approccio, siti, periodo", "Scope 1: combustione e perdite di refrigerante", "Scope 2: location-based e market-based", "Fonti indirette significative", "Rapporto, verifica e comunicazione"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Hai tutti gli elementi. In questa unità costruisci l’inventario di uno stabilimento dall’inizio alla fine: confini, Scope uno, Scope due, scelta delle fonti indirette. Poi vedrai che cosa deve contenere il rapporto, come funziona la verifica di parte terza e quali regole valgono quando comunichi i risultati a clienti e consumatori."},
 {"t": "esempio", "tit": "Esempio guidato · L’inventario dello stabilimento", "lead": "Un’impresa metalmeccanica con un solo stabilimento, anno 2024, controllo operativo.",
  "passi": [["Combustione", "120.000 Sm³ di gas naturale e 18 t di gasolio per i mezzi.", "242,3 + 56,7 = 299,0 t CO₂"],
            ["Perdite di refrigerante", "Reintegro di 3 kg di HFC-134a (GWP 1.530, AR6).", "3 × 1.530 = 4.590 kg = 4,6 t CO₂e"],
            ["Scope 1", "Somma di combustione e perdite.", "299,0 + 4,6 = 303,6 t CO₂e"],
            ["Scope 2", "600.000 kWh; metà coperti da garanzie di origine.", "Location: 115,6 t · Market: 300.000 × 0,4202 / 1.000 = 126,1 t"],
            ["Totale Scope 1 + 2", "Si riportano entrambi i totali, indicando il metodo.", "Location: 303,6 + 115,6 ≈ 419,1 t CO₂e · Market: 303,6 + 126,1 ≈ 429,6 t CO₂e (valori non arrotondati)"]],
  "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol",
  "nar": "Ecco l’inventario di un’impresa metalmeccanica con un solo stabilimento. La combustione di gas naturale e gasolio vale duecentonovantanove tonnellate. Il reintegro di tre chilogrammi di HFC centotrentaquattro a aggiunge quattro virgola sei tonnellate equivalenti: lo Scope uno è trecentotré virgola sei. L’energia elettrica, seicentomila chilowattora, vale centoquindici virgola sei tonnellate con il metodo di rete. Con il metodo di mercato, metà dei consumi è coperta da garanzie di origine e l’altra metà si calcola con il mix residuale: centoventisei virgola una tonnellate. Il totale degli Scope uno e due è quindi circa quattrocentodiciannove tonnellate con il metodo di rete e circa quattrocentotrenta con il metodo di mercato."},
 {"t": "grafico", "tit": "Simula l’inventario dello stabilimento", "lead": "Cambia consumi, perdite e garanzie di origine: l’inventario si aggiorna.", "rif": "MASE 2021–2023 · ISPRA 430/2026 · AIB 2025 · IPCC AR6",
  "grafico": {"tipo": "calcolo", "formula_testo": "Scope 1 + Scope 2, con i fattori verificati delle unità precedenti",
   "ingressi": [{"id": "g", "nome": "Gas naturale", "min": 0, "max": 400000, "passo": 5000, "val": 120000, "unita": "Sm³"}, {"id": "d", "nome": "Gasolio per autotrazione", "min": 0, "max": 100, "passo": 1, "val": 18, "unita": "t"}, {"id": "h", "nome": "Reintegro HFC-134a", "min": 0, "max": 30, "passo": 1, "val": 3, "unita": "kg"}, {"id": "e", "nome": "Energia elettrica", "min": 0, "max": 2000000, "passo": 10000, "val": 600000, "unita": "kWh"}, {"id": "q", "nome": "Quota coperta da garanzie di origine", "min": 0, "max": 100, "passo": 5, "val": 50, "unita": "%"}],
   "risultati": [{"nome": "Totale Scope 1 + 2 (location)", "formula": "g*2.019/1000 + d*3.150 + h*1.530 + e*0.1926/1000"}, {"nome": "Totale Scope 1 + 2 (market)", "formula": "g*2.019/1000 + d*3.150 + h*1.530 + e*(1-q/100)*0.4202/1000"}],
   "quote": [{"nome": "Gas naturale", "formula": "g*2.019/1000"}, {"nome": "Gasolio", "formula": "d*3.150"}, {"nome": "Refrigerante", "formula": "h*1.530"}, {"nome": "Energia elettrica (location)", "formula": "e*0.1926/1000"}], "unita": "t CO₂e", "scala": 1500},
  "nar": "Ora è il tuo inventario. Modifica i consumi, le perdite e la quota di garanzie di origine, e guarda quale voce pesa di più. Su quella voce concentrerai il piano di riduzione."},
 {"t": "testo", "tit": "Che cosa contiene il rapporto", "lead": "Il rapporto deve permettere a chiunque di ripercorrere il calcolo.",
  "punti": ["Organizzazione, responsabile e periodo di rendicontazione", "Confini organizzativi e operativi, con l’approccio scelto", "Emissioni per categoria e per gas, in t CO₂e", "Anno base, criteri di ricalcolo ed eventuali ricalcoli", "Metodi, fattori, fonti, edizioni e serie di GWP", "Esclusioni motivate e valutazione dell’incertezza"], "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Il rapporto è il documento che presenti a clienti, banche e verificatori. Deve contenere chi è l’organizzazione, chi è responsabile e quale periodo copre. Poi i confini, con l’approccio scelto; le emissioni divise per categoria e per gas; l’anno base e gli eventuali ricalcoli. Per ogni voce indichi metodo, fattore, fonte ed edizione, oltre alla serie di potenziali di riscaldamento usata. Chiudono il rapporto le esclusioni motivate e la valutazione dell’incertezza. Regola pratica: un collega esterno, leggendolo, deve poter rifare i tuoi conti."},
 {"t": "testo", "tit": "La verifica di parte terza", "lead": "Un organismo indipendente controlla l’inventario secondo la UNI EN ISO 14064-3.",
  "punti": ["Garanzia limitata: «non sono emersi elementi che facciano ritenere…»", "Garanzia ragionevole: dichiarazione positiva, controlli più estesi", "In Italia gli organismi di verifica sono accreditati da Accredia", "La verifica non è obbligatoria, ma spesso la chiedono clienti e finanziatori"], "rif": "UNI EN ISO 14064-3:2019",
  "nar": "Molti clienti non si accontentano del tuo calcolo: chiedono che un organismo indipendente lo verifichi, secondo la UNI EN ISO quattordicimilasessantaquattro, parte tre. I livelli di garanzia sono due. Con la garanzia limitata il verificatore dichiara che non sono emersi elementi per ritenere l’inventario non corretto. Con la garanzia ragionevole fa controlli più estesi e rilascia una dichiarazione positiva. In Italia gli organismi di verifica sono accreditati da Accredia. Prepararsi significa avere confini scritti, evidenze ordinate e fattori documentati."},
 {"t": "testo", "tit": "Comunicare i risultati senza greenwashing", "lead": "Dal 27 settembre 2026 valgono nuovi divieti sulle asserzioni ambientali verso i consumatori.",
  "punti": ["Vietate le asserzioni ambientali generiche non dimostrate («green», «eco», «sostenibile»)", "Vietato dichiarare un prodotto a impatto neutro o ridotto sul clima sulla base della compensazione delle emissioni", "Ammesse asserzioni precise e verificabili, con dati e perimetro", "Riferimenti: Dir. (UE) 2024/825, recepita con il D.lgs. 30/2026 nel Codice del consumo"], "rif": "Dir. (UE) 2024/825 · D.lgs. 30/2026",
  "nar": "Con i numeri in mano, la tentazione è comunicarli in modo efficace. Attenzione alle nuove regole. La direttiva europea duemilaventiquattro barra ottocentoventicinque, recepita in Italia con il decreto legislativo trenta del duemilaventisei, si applica dal ventisette settembre duemilaventisei. Vieta verso i consumatori le asserzioni ambientali generiche non dimostrate e le affermazioni che un prodotto ha un impatto neutro o ridotto sul clima grazie alla compensazione delle emissioni. Restano possibili le asserzioni precise e verificabili: che cosa hai misurato, su quale perimetro, con quale risultato."},
 {"t": "scenario", "tit": "Il rapporto da controllare",
  "scena": "Ricevi la bozza dell’inventario 2024 preparata da un collega: Scope 1 con il fattore del gas naturale della tabella 2017; Scope 2 solo market-based; nessuna indicazione della serie di GWP; la frase «azienda carbon neutral» in copertina.",
  "decisioni": [
   {"dom": "Il fattore del gas naturale:", "opz": [["Va bene: le differenze tra edizioni sono piccole", False, "Anche piccole differenze cambiano il risultato e la coerenza: si usa l’edizione valida per l’anno."], ["Va sostituito con quello della tabella valida per le emissioni 2024 (2,019)", True, "Corretto: tabella 2021–2023, valida per le emissioni 2024."], ["Va sostituito con un fattore europeo medio", False, "Per l’Italia la fonte è la tabella nazionale."]]},
   {"dom": "Lo Scope 2 solo market-based:", "opz": [["Va integrato con il risultato location-based", True, "Corretto: il GHG Protocol chiede entrambi i metodi."], ["Va bene così", False, "Manca il risultato location-based."], ["Va sostituito con il location-based", False, "Non si sostituisce: si riportano entrambi."]]},
   {"dom": "La frase «azienda carbon neutral»:", "opz": [["Si toglie, e si riportano le emissioni misurate con il perimetro e il metodo", True, "Corretto: è un’asserzione generica e, se basata su crediti di compensazione per i prodotti, vietata verso i consumatori."], ["Si lascia se l’azienda ha acquistato crediti di compensazione", False, "La compensazione non rende neutrale l’azienda e, per i prodotti, non può fondare asserzioni verso i consumatori."], ["Si sposta in quarta pagina", False, "Il problema è il contenuto, non la posizione."]]}],
  "chiusura": "Un rapporto credibile usa fattori dell’anno giusto, riporta entrambi i metodi per lo Scope 2, dichiara la serie di GWP e comunica solo ciò che può dimostrare.", "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol · Dir. (UE) 2024/825",
  "nar": "Un collega ti consegna la bozza dell’inventario. Trova e correggi gli errori, uno alla volta."},
 {"t": "testo", "tit": "Perché te lo chiedono i clienti", "lead": "Anche se la tua impresa non ha obblighi di rendicontazione, i dati ti vengono richiesti lungo la filiera.",
  "punti": ["Gli obblighi della direttiva CSRD riguardano ormai solo le imprese di grandi dimensioni", "Le grandi imprese chiedono ai fornitori dati su energia ed emissioni", "Per le PMI la Commissione ha raccomandato uno standard volontario: il VSME", "Raccomandazione (UE) 2025/1710: il modulo base comprende energia ed emissioni di Scope 1 e 2"], "rif": "Raccomandazione (UE) 2025/1710",
  "nar": "Dopo le semplificazioni europee del duemilaventicinque e del duemilaventisei, gli obblighi di rendicontazione di sostenibilità riguardano solo le imprese di grandi dimensioni. Ma sono proprio loro a chiedere i dati ai fornitori, per calcolare il proprio Scope tre. Per le piccole e medie imprese la Commissione europea ha raccomandato uno standard volontario, il VSME, con la raccomandazione duemilaventicinque barra millesettecentodieci: il modulo base comprende energia ed emissioni di Scope uno e due. Con l’inventario che hai costruito in queste unità, hai già i numeri per rispondere."},
 {"t": "applica", "tit": "Il piano del tuo primo inventario", "lead": "Prepara il piano di lavoro: chi raccoglie quali dati e da quali fonti.",
  "voci": ["Fatture del gas naturale", "Letture dei contatori elettrici", "Schede carburante dei mezzi", "Comunicazioni degli interventi sugli impianti con gas fluorurati", "Contratti di fornitura elettrica e garanzie di origine", "Dati di acquisto delle materie prime", "Dati dei trasporti in entrata e in uscita", "Formulari dei rifiuti"],
  "campo": "Responsabili e scadenze della raccolta dati", "esempio": "Es.: ufficio acquisti, fatture gas ed energia entro il 31 gennaio; manutenzione, interventi F-gas entro il 15 febbraio", "min": 4,
  "nar": "Ultima attività: prepara il piano del tuo primo inventario. Indica le fonti dati disponibili in azienda e scrivi chi le raccoglierà ed entro quando. Il tutor potrà commentare il tuo piano."},
 {"t": "vf", "tit": "Ripasso · Unità 1, 2 e 3", "voci": [
   ["Il metodo market-based usa il mix residuale per l’energia senza garanzie di origine.", True, "Vero."],
   ["Le emissioni indirette escluse dall’inventario non vanno menzionate.", False, "Falso: le esclusioni vanno motivate nel rapporto."],
   ["Le perdite di refrigerante si stimano dai reintegri moltiplicati per il GWP.", True, "Vero."]],
  "nar": "Ripasso finale. Tre affermazioni sulle unità precedenti."},
 {"t": "sintesi", "tit": "Sintesi del modulo", "voci": ["Gas, GWP e serie dichiarata", "Confini, sei categorie e anno base", "Fattori nazionali e Scope 2 con due metodi", "Rapporto, verifica e comunicazione corretta"],
  "nar": "Hai completato il modulo sulla carbon footprint di organizzazione. Sai convertire i gas in anidride carbonica equivalente, tracciare i confini, scegliere i fattori ufficiali, calcolare lo Scope due con i due metodi, preparare un rapporto verificabile e comunicarlo senza asserzioni ingannevoli. Il prossimo modulo è dedicato alla carbon footprint di prodotto."},
 V("Verifica intermedia · Unità 4", [
   ["Nell’esempio, lo Scope 1 vale 303,6 t CO₂e. Con lo Scope 2 location-based di 115,6 t il totale è:", ["419,2 t CO₂e", "303,6 t CO₂e", "188,0 t CO₂e"], 0, "303,6 + 115,6 = 419,2."],
   ["Un reintegro di 3 kg di HFC-134a (GWP 1.530) vale:", ["4,59 t CO₂e", "1,53 t CO₂e", "459 t CO₂e"], 0, "3 × 1.530 = 4.590 kg."],
   ["Il rapporto deve indicare:", ["Fattori, fonti ed edizioni usati", "Solo il totale delle emissioni", "Solo le emissioni dirette"], 0, "La trasparenza richiede di poter ripercorrere il calcolo."],
   ["La verifica di parte terza dell’inventario segue la:", ["UNI EN ISO 14064-3", "UNI EN ISO 14001", "UNI EN ISO 50001"], 0, "È la norma sulla validazione e verifica."],
   ["Con la garanzia ragionevole il verificatore:", ["Rilascia una dichiarazione positiva dopo controlli estesi", "Non controlla le evidenze", "Si limita a leggere il rapporto"], 0, "È il livello di garanzia più elevato."],
   ["Dal 27 settembre 2026, verso i consumatori, è vietato dichiarare un prodotto a impatto neutro sul clima:", ["Sulla base della compensazione delle emissioni", "Sulla base di misure verificate", "In nessun caso si possono dare informazioni sul clima"], 0, "Lo vieta la Dir. (UE) 2024/825."],
   ["Lo standard volontario raccomandato alle PMI per la rendicontazione di sostenibilità è il:", ["VSME", "ESRS E1 obbligatorio", "EMAS"], 0, "Raccomandazione (UE) 2025/1710."],
   ["Una bozza di inventario 2024 con il fattore del gas della tabella 2017:", ["Va corretta con la tabella valida per le emissioni 2024", "Va bene se la differenza è piccola", "Va corretta con un fattore europeo"], 0, "Si usa l’edizione valida per l’anno di rendicontazione."]])]

src = open('/home/claude/astra-portale/elearning/dist/CFP/dati/corso.js').read()
pre = src[:src.index('{')]; C = json.loads(src[src.index('{'):src.rindex('}') + 1])
M0 = C['moduli'][0]
C['id'] = 'CFP-PILOTA'; C['titolo'] = 'Carbon footprint di organizzazione – Modulo 1 riprogettato'; C['ore'] = 4
for s in S1:
    if s.get('t') == 'sezione': s['tit'] = 'Unità 1'
C['moduli'] = [dict(M0, min=0) if False else M0,
               {"id": "M1", "titolo": "Gas serra e CO₂ equivalente", "min": 60, "foto": "energia2", "schermate": S1},
               {"id": "M2", "titolo": "Confini e categorie dell’inventario", "min": 57, "foto": "energia", "schermate": S2},
               {"id": "M3", "titolo": "Dati di attività e fattori di emissione", "min": 61, "foto": "energia3", "schermate": S3},
               {"id": "M4", "titolo": "L’inventario di uno stabilimento", "min": 60, "foto": "rinnovabili", "schermate": S4}]
C['moduli'][0]['min'] = 2
open('/tmp/claude-0/pilota/corso.js', 'w').write(pre + json.dumps(C, ensure_ascii=False) + ';\n')
print('schermate', [len(m['schermate']) for m in C['moduli']], 'minuti', sum(m['min'] for m in C['moduli']))
nar = sum(len(s.get('nar', '')) for m in C['moduli'] for s in m['schermate'])
print('caratteri di narrazione', nar)

# ── integrazioni per portare il coefficiente di dilatazione k vicino a 1,3 (contenuti attivi, non attese) ──
def ins(S, dopo_tit, nuove):
    i = next(k for k, s in enumerate(S) if s.get('tit') == dopo_tit)
    S[i + 1:i + 1] = nuove

ins(S2, "Categorie ISO e Scope del GHG Protocol", [
 {"t": "testo", "tit": "Le 15 categorie dello Scope 3", "lead": "Il GHG Protocol divide le altre emissioni indirette in 15 categorie: 8 a monte e 7 a valle.",
  "punti": ["A monte: 1 beni e servizi acquistati · 2 beni strumentali · 3 attività legate a combustibili ed energia · 4 trasporto e distribuzione a monte", "5 rifiuti generati · 6 viaggi di lavoro · 7 pendolarismo dei dipendenti · 8 beni in leasing a monte", "A valle: 9 trasporto e distribuzione a valle · 10 trasformazione dei prodotti venduti · 11 uso dei prodotti venduti", "12 fine vita dei prodotti venduti · 13 beni in leasing a valle · 14 franchising · 15 investimenti"], "rif": "GHG Protocol Corporate Value Chain (Scope 3) Standard",
  "nar": "Lo Scope tre è spesso la parte più grande della carbon footprint. Il GHG Protocol lo divide in quindici categorie. Otto stanno a monte, cioè prima che il prodotto esca dal tuo cancello: dagli acquisti di beni e servizi ai beni strumentali, dalle attività legate ai combustibili ai trasporti in entrata, dai rifiuti ai viaggi di lavoro, fino al pendolarismo dei dipendenti e ai beni in leasing. Sette stanno a valle: trasporto dei prodotti venduti, loro trasformazione, uso, fine vita, beni dati in leasing, franchising e investimenti. Per una manifattura le categorie più pesanti sono quasi sempre la prima, la quarta e la nona."},
 {"t": "classifica", "tit": "Le fonti nelle categorie dello Scope 3", "lead": "Seleziona una fonte, poi la categoria dello Scope 3.",
  "colonne": ["1 · Beni e servizi acquistati", "4 · Trasporto a monte", "6–7 · Viaggi e pendolarismo", "12 · Fine vita dei prodotti venduti"],
  "schede": [["Lamiere d’acciaio acquistate", 0, "Sono beni acquistati: categoria 1.", "Corretto."], ["Servizio di pulizia dei locali", 0, "Anche i servizi acquistati rientrano nella categoria 1.", "Corretto."], ["Trasporto delle materie prime pagato dall’azienda", 1, "È un trasporto in entrata pagato da te: categoria 4.", "Corretto."], ["Treno per una trasferta commerciale", 2, "È un viaggio di lavoro: categoria 6.", "Corretto."], ["Auto dei dipendenti per venire al lavoro", 2, "È pendolarismo: categoria 7.", "Corretto."], ["Smaltimento a fine vita delle macchine vendute ai clienti", 3, "Riguarda i prodotti venduti a fine vita: categoria 12.", "Corretto."]],
  "rif": "GHG Protocol Scope 3 Standard",
  "nar": "Sei fonti di emissione indirette. Collocale nella categoria corretta dello Scope tre."}])
ins(S2, "Caso · La cessione dello stabilimento B", [
 {"t": "caso", "tit": "Caso · Il trasporto esternalizzato",
  "scena": "Fino al 2024 le consegne ai clienti erano fatte con furgoni propri (40 t CO₂e nella categoria 1). Dal 2025 le consegne sono affidate a un corriere. Soglia di significatività dichiarata: 5% di 1.000 t CO₂e.",
  "domanda": "Come tratti le emissioni delle consegne nel 2025?",
  "opz": [["Le escludi: non sono più tue", False, "Le emissioni non spariscono: passano tra le indirette da trasporto."], ["Le sposti dalla categoria 1 alla categoria 3 e valuti il ricalcolo dell’anno base rispetto alla soglia", True, "Corretto: lo spostamento vale 40 t, cioè il 4% del totale: sotto la soglia del 5% non serve ricalcolare, ma lo spostamento va spiegato nel rapporto."], ["Le lasci nella categoria 1 per coerenza con gli anni precedenti", False, "La categoria dipende da chi possiede e gestisce il mezzo: ora è un servizio acquistato."]],
  "rif": "UNI EN ISO 14064-1:2019 · GHG Protocol",
  "nar": "Un altro cambiamento frequente: il trasporto affidato all’esterno. Leggi il caso e decidi come trattarlo."}])
ins(S3, "Da dove prendere i dati di attività", [
 {"t": "caso", "tit": "Caso · La bolletta a cavallo d’anno",
  "scena": "La bolletta del gas copre il periodo dal 15 dicembre 2023 al 14 gennaio 2024 (31 giorni): 3.100 Sm³. Stai preparando l’inventario 2024 e non hai letture intermedie del contatore.",
  "domanda": "Quanti Sm³ attribuisci al 2024?",
  "opz": [["3.100 Sm³: la bolletta è stata pagata nel 2024", False, "Conta il periodo di consumo, non la data di pagamento."], ["Circa 1.400 Sm³: 14 giorni su 31, in proporzione ai giorni", True, "Corretto: 3.100 × 14 ÷ 31 ≈ 1.400 Sm³. In mancanza di letture si ripartisce per giorni e si dichiara il metodo."], ["Nessuno: la bolletta riguarda soprattutto il 2023", False, "Una parte del consumo ricade nel 2024 e va contata."]],
  "rif": "UNI EN ISO 14064-1:2019",
  "nar": "Un problema concreto di ogni inventario: le bollette che non coincidono con l’anno solare. Scegli come ripartire il consumo."}])
ins(S3, "Lo Scope 2 con il metodo market-based", [
 {"t": "vf", "tit": "Le garanzie di origine", "voci": [
   ["Una garanzia di origine vale 12 mesi dalla produzione dell’energia.", True, "Vero: lo prevede l’articolo 19 della Dir. (UE) 2018/2001."],
   ["Le garanzie di origine riducono le emissioni calcolate con il metodo location-based.", False, "Falso: incidono solo sul metodo market-based."],
   ["Le garanzie devono essere annullate a nome dell’organizzazione che dichiara il consumo.", True, "Vero: altrimenti l’energia rinnovabile potrebbe essere contata due volte."]],
  "rif": "Dir. (UE) 2018/2001, art. 19 · GHG Protocol Scope 2 Guidance",
  "nar": "Verifica subito di aver capito come funzionano le garanzie di origine."}])
ins(S4, "Comunicare i risultati senza greenwashing", [
 {"t": "classifica", "tit": "Asserzioni ammesse e vietate", "lead": "Seleziona un’asserzione rivolta ai consumatori, poi la colonna corretta.",
  "colonne": ["Ammessa: precisa e verificabile", "Vietata"],
  "schede": [["«Prodotto a impatto climatico zero grazie ai crediti di carbonio acquistati»", 1, "Un impatto neutro basato sulla compensazione è vietato verso i consumatori.", "Corretto: è vietata."],
             ["«Imballaggio eco-friendly», senza altre informazioni", 1, "È un’asserzione generica non dimostrata.", "Corretto: è vietata."],
             ["«Emissioni di Scope 1 e 2 dello stabilimento ridotte del 18% tra il 2022 e il 2025, inventario verificato secondo la UNI EN ISO 14064-3»", 0, "È precisa, delimitata e verificabile.", "Corretto: è ammessa."],
             ["«Il 50% dell’energia elettrica dello stabilimento è coperta da garanzie di origine rinnovabili (2025)»", 0, "Indica che cosa, quanto e quando: è verificabile.", "Corretto: è ammessa."],
             ["«Azienda green»", 1, "È un’asserzione generica senza prove.", "Corretto: è vietata."],
             ["«Carbon footprint: 2,4 kg CO₂e per unità, dalla culla al cancello, studio UNI EN ISO 14067 verificato»", 0, "Riporta valore, confini, metodo e verifica.", "Corretto: è ammessa."]],
  "rif": "Dir. (UE) 2024/825 · D.lgs. 30/2026",
  "nar": "Sei asserzioni rivolte ai consumatori. Stabilisci quali sono ammesse e quali sono vietate dalle nuove regole."}])
ins(S4, "La verifica di parte terza", [
 {"t": "caso", "tit": "Caso · Il livello di garanzia",
  "scena": "Un grande cliente chiede ai fornitori un inventario di Scope 1 e 2 «verificato da parte terza» per il prossimo questionario. È la tua prima verifica e hai poco tempo.",
  "domanda": "Quale livello di garanzia proponi, salvo diversa richiesta del cliente?",
  "opz": [["Garanzia limitata, secondo la UNI EN ISO 14064-3, da un organismo accreditato", True, "Corretto: è il livello più comune per la prima verifica; se il cliente chiede la garanzia ragionevole, servono controlli più estesi e più tempo."], ["Un’autodichiarazione firmata dal legale rappresentante", False, "Il cliente ha chiesto una verifica di parte terza: l’autodichiarazione non basta."], ["Una verifica interna dell’ufficio qualità", False, "Una verifica interna non è indipendente."]],
  "rif": "UNI EN ISO 14064-3:2019",
  "nar": "Un cliente ti chiede un inventario verificato. Scegli che cosa proporre."}])

C['moduli'][2]['schermate'] = S2; C['moduli'][3]['schermate'] = S3; C['moduli'][4]['schermate'] = S4
open('/tmp/claude-0/pilota/corso.js', 'w').write(pre + json.dumps(C, ensure_ascii=False) + ';\n')
print('dopo le integrazioni', [len(m['schermate']) for m in C['moduli']])
