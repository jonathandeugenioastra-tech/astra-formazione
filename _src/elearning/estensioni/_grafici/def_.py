# definizioni dei grafici dinamici: (corso, modulo, ancora-prefisso, schermata)
V,G,A,R,RS,VI='#00B050','#C9A100','#E07000','#C81F26','#C00000','#7030A0'
def soglie(tit,rif,lead,var,unita,mn,mx,passo,ini,zone,nar):
  return {"t":"grafico","tit":tit,"rif":rif,"lead":lead,"grafico":{"tipo":"soglie","variabile":var,"unita":unita,"min":mn,"max":mx,"passo":passo,"iniziale":ini,"zone":[{"nome":n,"fino":f,"colore":c,"testo":t} for n,f,c,t in zone]},"nar":nar}
def calcolo(tit,rif,lead,ft,f,ing,ris,un,scala,lim,limt,ok,sup,nar):
  g={"tipo":"calcolo","formula_testo":ft,"formula":f,"ingressi":[{"id":a,"nome":b,"min":c,"max":d,"passo":e,"val":v,"unita":u} for a,b,c,d,e,v,u in ing],"risultato":ris,"unita":un,"scala":scala}
  if lim: g.update({"limite":lim,"limite_testo":limt,"testo_ok":ok,"testo_sup":sup})
  return {"t":"grafico","tit":tit,"rif":rif,"lead":lead,"grafico":g,"nar":nar}
def flusso(tit,rif,lead,passi,nar):
  return {"t":"grafico","tit":tit,"rif":rif,"lead":lead,"grafico":{"tipo":"flusso","passi":[{"nome":n,"tempo":t,"testo":x} for n,t,x in passi]},"nar":nar}
def intervalli(tit,rif,lead,unita,ub,mx,tacche,voci,nar):
  return {"t":"grafico","tit":tit,"rif":rif,"lead":lead,"grafico":{"tipo":"intervalli","unita":unita,"unita_breve":ub,"max":mx,"tacche":tacche,"voci":[{"nome":n,"da":a,"a":b,"colore":c,"testo":t} for n,a,b,c,t in voci]},"nar":nar}

RUMORE=soglie("Grafico interattivo · Livelli di esposizione al rumore","D.lgs. 81/2008, artt. 189, 192, 193, 196",
 "Spostare il cursore sul livello di esposizione giornaliera: per ciascuna zona compaiono gli obblighi del datore di lavoro.",
 "Livello di esposizione giornaliera LEX,8h","dB(A)",70,95,0.5,78,[
 ("Sotto 80 dB(A)",80,V,"Sotto il valore inferiore di azione: valutazione documentata e riduzione del rischio al minimo secondo il principio generale."),
 ("Azione inferiore",85,G,"Tra 80 e 85 dB(A): informazione e formazione, otoprotettori messi a disposizione, sorveglianza sanitaria su richiesta del lavoratore o se il medico ne conferma l’opportunità."),
 ("Azione superiore",87,A,"Tra 85 e 87 dB(A): uso degli otoprotettori obbligatorio, programma di misure tecniche e organizzative, segnaletica e delimitazione delle aree, sorveglianza sanitaria."),
 ("Oltre 87 dB(A)",95,R,"87 dB(A) è il valore limite di esposizione, da non superare tenendo conto dell’attenuazione degli otoprotettori: in caso di superamento occorrono misure immediate.")],
 "Grafico interattivo. Si sposti il cursore lungo la scala del livello di esposizione giornaliera al rumore. Il decreto ottantuno fissa un valore inferiore di azione di ottanta decibel A, un valore superiore di azione di ottantacinque decibel A e un valore limite di ottantasette decibel A, quest’ultimo da verificare tenendo conto dell’attenuazione degli otoprotettori. Per ciascuna zona compaiono gli obblighi del datore di lavoro. Si esplorino tutte le zone.")
VIBR=soglie("Grafico interattivo · Vibrazioni trasmesse al sistema mano-braccio","D.lgs. 81/2008, art. 201",
 "Spostare il cursore sul valore di esposizione giornaliera A(8) per visualizzare gli obblighi corrispondenti.",
 "Esposizione giornaliera A(8) mano-braccio","m/s²",0,8,0.1,1.5,[
 ("Sotto l’azione",2.5,V,"Sotto 2,5 m/s²: valutazione documentata e riduzione del rischio al minimo."),
 ("Valore d’azione",5,A,"Tra 2,5 e 5 m/s²: programma di misure tecniche e organizzative, informazione e formazione, sorveglianza sanitaria dei lavoratori esposti."),
 ("Oltre 5 m/s²",8,R,"5 m/s² è il valore limite giornaliero: non deve essere superato; se superato, misure immediate per riportare l’esposizione al di sotto.")],
 "Grafico interattivo. Si sposti il cursore sul valore di esposizione giornaliera alle vibrazioni trasmesse al sistema mano-braccio, normalizzato a otto ore. Il valore d’azione è di due virgola cinque metri al secondo quadrato e il valore limite di cinque metri al secondo quadrato. Per il corpo intero i valori corrispondenti sono zero virgola cinque e uno virgola zero. Si esplorino tutte le zone.")
IND689=soglie("Grafico interattivo · Test preliminare della UNI EN 689","UNI EN 689:2018, punto 5.5.2 e Allegato F",
 "Spostare il cursore sull’indice di esposizione I = C / VLEP del campione più elevato, nel caso di tre misure.",
 "Indice di esposizione massimo (3 misure)","",0,1.5,0.01,0.05,[
 ("Conformità",0.1,V,"Con tre misure tutte inferiori a 0,1 VLEP, il test preliminare indica conformità. Con quattro o cinque misure le soglie sono 0,15 e 0,2."),
 ("Nessuna decisione",1.0,G,"Nessuna misura supera il VLEP ma almeno una è superiore alla soglia: occorrono almeno sei misure e il test statistico."),
 ("Non conformità",1.5,R,"Almeno una misura supera il VLEP: situazione non conforme, misure di prevenzione immediate e nuova valutazione.")],
 "Grafico interattivo. Si sposti il cursore sull’indice di esposizione, cioè sul rapporto tra la concentrazione misurata e il valore limite di esposizione professionale, per il campione più elevato. Nel test preliminare con tre misure, se tutte sono inferiori a un decimo del valore limite si conclude per la conformità; se una supera il valore limite, la situazione è non conforme; negli altri casi occorrono almeno sei misure e il test statistico. Si esplorino le tre zone.")
TWA=calcolo("Simulazione · Concentrazione media ponderata su 8 ore","D.lgs. 81/2008, Allegato XXXVIII · UNI EN 689:2018",
 "Modificare concentrazioni e durate di due fasi di lavoro con toluene: il calcolo restituisce la media ponderata sulle 8 ore confrontata con il VLEP di 192 mg/m³.",
 "C(8h) = (C₁·t₁ + C₂·t₂) / 8 h","(a*t + b*(8-t)) / 8",[("a","Concentrazione in fase di verniciatura",0,600,10,300,"mg/m³"),("t","Durata della fase di verniciatura",0.5,8,0.5,3,"h"),("b","Concentrazione nel resto del turno",0,200,5,40,"mg/m³")],
 "Media ponderata su 8 ore","mg/m³",400,192,"VLEP toluene","Esposizione media inferiore al VLEP a 8 ore: verificare comunque i limiti di breve termine e la variabilità.","Esposizione media superiore al VLEP: misure di prevenzione immediate.",
 "Simulazione. Si modifichino la concentrazione di toluene durante la fase di verniciatura, la durata della fase e la concentrazione nel resto del turno. Il calcolo restituisce la concentrazione media ponderata sulle otto ore, che si confronta con il valore limite di esposizione professionale del toluene, pari a centonovantadue milligrammi per metro cubo. Si osservi come una fase breve ma intensa possa determinare il superamento del limite. Si eseguano almeno tre simulazioni.")
NIOSH=calcolo("Simulazione · Indice di sollevamento","UNI ISO 11228-1 · D.lgs. 81/2008, Allegato XXXIII",
 "Modificare il peso sollevato e il peso limite raccomandato calcolato per il compito: l’indice di sollevamento indica il livello di rischio.",
 "IS = peso sollevato / peso limite raccomandato","p / r",[("p","Peso effettivamente sollevato",2,30,0.5,15,"kg"),("r","Peso limite raccomandato (calcolato)",3,25,0.5,12,"kg")],
 "Indice di sollevamento","",3,1.0,"IS = 1","Indice non superiore a 1: rischio accettabile; sotto 0,85 area verde secondo il metodo.","Indice superiore a 1: rischio presente, interventi di riprogettazione e sorveglianza sanitaria; oltre 3 interventi prioritari.",
 "Simulazione. Si modifichino il peso effettivamente sollevato e il peso limite raccomandato, calcolato con i fattori del metodo in funzione di altezza, distanza, dislocazione, angolo, presa e frequenza. Il rapporto è l’indice di sollevamento: un valore superiore a uno indica la presenza di rischio e la necessità di interventi. Si eseguano almeno tre simulazioni.")
IF_IG=calcolo("Simulazione · Indici di frequenza e di gravità","UNI 7249:2007",
 "Modificare il numero di infortuni e le ore lavorate: il calcolo restituisce l’indice di frequenza per milione di ore lavorate.",
 "IF = numero di infortuni × 1.000.000 / ore lavorate","n * 1000000 / (h * 1000)",[("n","Infortuni nell’anno",0,30,1,6,""),("h","Ore lavorate (migliaia)",50,1000,10,320,"migliaia h")],
 "Indice di frequenza","",60,None,None,None,None,
 "Simulazione. Si modifichino il numero di infortuni dell’anno e le ore lavorate. L’indice di frequenza esprime il numero di infortuni per un milione di ore lavorate e consente di confrontare nel tempo e tra aziende di dimensioni diverse. L’indice di gravità, analogamente, rapporta le giornate perse alle ore lavorate. Si eseguano almeno tre simulazioni.")
VDR=flusso("Diagramma · Il processo di valutazione dei rischi","D.lgs. 81/2008, artt. 17, 28, 29",
 "Selezionare ciascuna fase del processo per visualizzarne contenuti e soggetti coinvolti.",[
 ("Organizzazione",None,"Il datore di lavoro avvia la valutazione in collaborazione con RSPP e medico competente, previa consultazione del RLS (art. 29)."),
 ("Identificazione dei pericoli",None,"Analisi di luoghi, attrezzature, sostanze, organizzazione e gruppi di lavoratori esposti a rischi particolari."),
 ("Stima del rischio",None,"Valutazione di probabilità e danno, con criteri espliciti e metodi specifici per i rischi normati (rumore, chimico, MMC…)."),
 ("Misure e programma",None,"Individuazione delle misure di prevenzione e protezione e programma di miglioramento con ruoli e tempi (art. 28, c. 2)."),
 ("Documento",None,"Redazione del DVR con data certa, firmato dal datore di lavoro, RSPP, RLS e medico competente."),
 ("Rielaborazione","entro 30 giorni",
  "Aggiornamento in caso di modifiche significative, infortuni significativi o risultati della sorveglianza sanitaria (art. 29, c. 3).")],
 "Diagramma interattivo. Si selezioni ciascuna fase del processo di valutazione dei rischi: organizzazione, identificazione dei pericoli, stima del rischio, misure e programma di miglioramento, documento, rielaborazione. Per ciascuna fase compaiono i contenuti e i soggetti coinvolti.")
PRESCR758=flusso("Diagramma · La prescrizione dell’organo di vigilanza","D.lgs. 758/1994, artt. 20–24",
 "Selezionare ciascuna fase della procedura di estinzione delle contravvenzioni in materia di sicurezza.",[
 ("Accertamento",None,"L’organo di vigilanza accerta una contravvenzione e ne dà notizia al pubblico ministero."),
 ("Prescrizione","termine tecnicamente necessario","Impartisce una prescrizione per eliminare la violazione, con un termine prorogabile una volta, su richiesta motivata, fino a sei mesi."),
 ("Verifica","entro 60 giorni","Entro sessanta giorni dalla scadenza del termine verifica l’adempimento."),
 ("Pagamento","entro 30 giorni","Il contravventore è ammesso a pagare un quarto del massimo dell’ammenda."),
 ("Estinzione",None,"Adempimento e pagamento estinguono la contravvenzione; l’esito è comunicato al pubblico ministero.")],
 "Diagramma interattivo. Si selezioni ciascuna fase della procedura con cui le contravvenzioni in materia di salute e sicurezza possono estinguersi: accertamento, prescrizione, verifica, pagamento ed estinzione.")
KIRK=flusso("Diagramma · I quattro livelli di verifica dell’efficacia","Accordo Stato-Regioni 17 aprile 2025 · modello di Kirkpatrick",
 "Selezionare ciascun livello per visualizzarne strumenti e indicatori.",[
 ("Reazione","al termine del corso","Gradimento dei partecipanti: questionario su contenuti, docente, materiali e organizzazione."),
 ("Apprendimento","al termine del corso","Conoscenze e abilità acquisite: test di verifica, prove pratiche, simulazioni."),
 ("Comportamento","dopo alcune settimane","Trasferimento sul lavoro: osservazioni dei preposti, audit comportamentali, uso corretto dei DPI."),
 ("Risultati","nel medio periodo","Effetti sull’organizzazione: quasi incidenti segnalati, infortuni, non conformità, indicatori del sistema di gestione.")],
 "Diagramma interattivo. Si selezioni ciascun livello del modello di verifica dell’efficacia della formazione: reazione, apprendimento, comportamento e risultati, con gli strumenti e gli indicatori corrispondenti.")
