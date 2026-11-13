from def_ import *
ALLERGENI=flusso("Diagramma · Il controllo degli allergeni nel ciclo produttivo","Reg. (UE) 1169/2011, art. 9 e Allegato II · Reg. (CE) 852/2004",
 "Selezionare ciascuna fase per visualizzare i controlli da applicare.",[
 ("Ricevimento",None,"Verifica delle specifiche e delle etichette delle materie prime; aggiornamento della matrice degli allergeni a ogni cambio di fornitore o ricetta."),
 ("Stoccaggio",None,"Separazione fisica e identificazione degli ingredienti allergenici; contenitori chiusi e posizionati in basso."),
 ("Preparazione",None,"Pianificazione delle lavorazioni dal prodotto privo di allergeni a quello che li contiene; utensili e superfici dedicati o sanificati."),
 ("Sanificazione",None,"Procedure di pulizia validate e verificate, con registrazione; attenzione alle polveri disperse (farine, frutta a guscio)."),
 ("Informazione al consumatore",None,"Etichetta o documentazione aggiornata con gli allergeni evidenziati; personale formato a rispondere alle richieste."),
 ("Gestione delle non conformità",None,"Blocco del prodotto, valutazione del rischio, eventuale ritiro o richiamo e notifica all’autorità.")],
 "Diagramma interattivo. Si selezioni ciascuna fase del ciclo produttivo per visualizzare i controlli da applicare per la gestione degli allergeni: ricevimento, stoccaggio, preparazione, sanificazione, informazione al consumatore e gestione delle non conformità.")
RICHIAMO=flusso("Diagramma · Ritiro e richiamo di un prodotto non sicuro","Reg. (CE) 178/2002, artt. 18–19",
 "Selezionare ciascuna fase della procedura.",[
 ("Individuazione",None,"Segnalazione interna, da fornitore, cliente o autorità di un prodotto che può non essere conforme ai requisiti di sicurezza."),
 ("Valutazione e blocco","immediato","Valutazione del rischio, identificazione dei lotti coinvolti tramite la rintracciabilità e blocco delle giacenze."),
 ("Ritiro","immediato","Ritiro dal mercato dei lotti non sicuri non più sotto il controllo diretto dell’operatore."),
 ("Informazione",None,"Informazione immediata all’autorità competente e, se il prodotto può aver raggiunto il consumatore, richiamo con informazione efficace."),
 ("Verifica e chiusura",None,"Bilancio di massa dei quantitativi recuperati, destinazione del prodotto, analisi delle cause e azioni correttive.")],
 "Diagramma interattivo. Si selezioni ciascuna fase della procedura di ritiro e richiamo di un alimento non sicuro: individuazione, valutazione e blocco, ritiro, informazione all’autorità e ai consumatori, verifica e chiusura.")
TARIFFA=intervalli("Grafico interattivo · Tariffa premio per classe di potenza","D.M. MASE 7 dicembre 2023, n. 414, Allegato 1",
 "Selezionare ciascuna classe di potenza: l’intervallo va dalla parte fissa al tetto massimo della tariffa premio.","Tariffa premio (€/MWh), prima del fattore correttivo zonale","€/MWh",130,13,[
 ("Impianti fino a 200 kW",80,120,"#0f5c6b","Parte fissa 80 €/MWh più una parte variabile legata al prezzo zonale, fino a un massimo di 120 €/MWh."),
 ("Da 200 a 600 kW",70,110,"#2b7a8a","Parte fissa 70 €/MWh, fino a un massimo di 110 €/MWh."),
 ("Oltre 600 kW",60,100,"#5a9aa6","Parte fissa 60 €/MWh, fino a un massimo di 100 €/MWh. Per il fotovoltaico si aggiunge il fattore correttivo zonale: +4 €/MWh al Centro, +10 €/MWh al Nord.")],
 "Grafico interattivo. Si selezioni ciascuna classe di potenza per visualizzare l’intervallo della tariffa premio sull’energia condivisa: dalla parte fissa, che decresce con la potenza dell’impianto, al tetto massimo. Per gli impianti fotovoltaici si aggiunge un fattore correttivo zonale per le Regioni del Centro e del Nord.")
AUTOC=calcolo("Simulazione · Quota di autoconsumo","D.lgs. 199/2021 · TIAD ARERA",
 "Modificare la produzione annua e l’energia consumata nelle stesse ore: il calcolo restituisce la quota di autoconsumo.",
 "Quota di autoconsumo = energia autoconsumata / energia prodotta × 100","Math.min(a, p) / p * 100",[("p","Energia prodotta nell’anno",20000,150000,1000,125000,"kWh"),("a","Consumi contemporanei alla produzione",0,150000,1000,93750,"kWh")],
 "Quota di autoconsumo","%",100,None,None,None,None,
 "Simulazione. Si modifichino l’energia prodotta e la parte dei consumi che avviene nelle stesse ore della produzione. Il rapporto tra energia autoconsumata ed energia prodotta è la quota di autoconsumo, che determina la convenienza economica dell’impianto. Si eseguano almeno tre simulazioni.")
PENE=intervalli("Grafico interattivo · Pene dei delitti contro l’ambiente","Codice penale, artt. 452-bis – 452-quaterdecies (L. 68/2015, D.lgs. 81/2026)",
 "Selezionare ciascun delitto per visualizzare la pena della reclusione prevista (senza aggravanti).","Reclusione (anni)","anni",16,8,[
 ("Impedimento del controllo",0.5,3,"#5a9aa6","Art. 452-septies: negare l’accesso, predisporre ostacoli o mutare artificiosamente lo stato dei luoghi."),
 ("Omessa bonifica",1,4,"#2b7a8a","Art. 452-terdecies: anche multa da 20.000 a 80.000 euro."),
 ("Traffico illecito di rifiuti",1,6,"#0f5c6b","Art. 452-quaterdecies: da 3 a 8 anni per rifiuti ad alta radioattività."),
 ("Inquinamento ambientale",2,6,"#E07000","Art. 452-bis: anche multa da 10.000 a 100.000 euro; aggravanti per aree protette, habitat, effetti durevoli."),
 ("Morte da inquinamento",5,12,"#C00000","Art. 452-ter: se dall’inquinamento o dal commercio di prodotti inquinanti deriva la morte di una persona."),
 ("Disastro ambientale",5,15,"#C81F26","Art. 452-quater: alterazione irreversibile o di eliminazione particolarmente onerosa di un ecosistema, offesa alla pubblica incolumità.")],
 "Grafico interattivo. Si selezioni ciascun delitto per visualizzare l’intervallo della pena della reclusione prevista dal codice penale, senza considerare le circostanze aggravanti. Il confronto evidenzia la gravità crescente, dall’impedimento del controllo al disastro ambientale.")
ESTINT=flusso("Diagramma · La procedura estintiva ambientale","D.lgs. 152/2006, artt. 318-bis – 318-septies",
 "Selezionare ciascuna fase della procedura.",[
 ("Accertamento",None,"Contravvenzione del D.lgs. 152/2006 senza danno o pericolo concreto e attuale di danno."),
 ("Prescrizione asseverata","termine tecnicamente necessario","Misure per eliminare la violazione; proroga per una sola volta, motivata, fino a sei mesi."),
 ("Verifica","entro 60 giorni","L’organo di vigilanza verifica l’adempimento dalla scadenza del termine."),
 ("Pagamento","entro 30 giorni","Somma pari a un quarto del massimo dell’ammenda."),
 ("Estinzione","entro 120 giorni","Comunicazione al pubblico ministero; il reato si estingue.")],
 "Diagramma interattivo. Si selezioni ciascuna fase della procedura di estinzione delle contravvenzioni ambientali: accertamento, prescrizione asseverata, verifica, pagamento ed estinzione, con i termini previsti.")
CLASSRIF=flusso("Diagramma · La classificazione di un rifiuto","Decisione 2014/955/UE · Reg. (UE) 1357/2014 · Linee guida SNPA (Delibera 105/2021)",
 "Selezionare ciascuna fase della procedura di classificazione.",[
 ("Origine",None,"Individuazione del processo che ha generato il rifiuto e del capitolo dell’elenco europeo (EER) pertinente."),
 ("Codice",None,"Scelta del codice a sei cifre: voce assoluta pericolosa, assoluta non pericolosa oppure voce a specchio."),
 ("Caratterizzazione",None,"Per le voci a specchio: composizione da schede di sicurezza, conoscenza del processo e analisi chimiche."),
 ("Caratteristiche HP",None,"Confronto con i criteri delle caratteristiche di pericolo HP1–HP15 del Reg. (UE) 1357/2014."),
 ("Attribuzione e verifica","a ogni variazione del processo","Attribuzione del codice e delle HP, documentazione e verifica periodica.")],
 "Diagramma interattivo. Si selezioni ciascuna fase della procedura di classificazione di un rifiuto: origine, scelta del codice, caratterizzazione, valutazione delle caratteristiche di pericolo, attribuzione e verifica.")
SCARICO=flusso("Diagramma · L’autorizzazione allo scarico","D.lgs. 152/2006, artt. 101, 124 · D.P.R. 59/2013",
 "Selezionare ciascuna fase.",[
 ("Classificazione",None,"Individuazione del tipo di acque (domestiche, assimilate, industriali, meteoriche) e del recettore (fognatura, acque superficiali, suolo)."),
 ("Domanda",None,"Domanda all’autorità competente o tramite AUA al SUAP, con caratteristiche quali-quantitative e sistemi di trattamento."),
 ("Autorizzazione","4 anni (15 se in AUA)","Titolo con valori limite, prescrizioni e frequenza degli autocontrolli; il rinnovo si chiede un anno prima della scadenza."),
 ("Esercizio e controlli",None,"Pozzetto di campionamento accessibile, autocontrolli, manutenzione degli impianti di trattamento, registrazioni."),
 ("Modifiche",None,"Le modifiche che variano le caratteristiche dello scarico richiedono una nuova autorizzazione o un aggiornamento.")],
 "Diagramma interattivo. Si selezioni ciascuna fase del percorso autorizzativo di uno scarico: classificazione delle acque e del recettore, domanda, autorizzazione, esercizio e controlli, modifiche.")
SVHC=soglie("Grafico interattivo · SVHC negli articoli","Reg. (CE) 1907/2006, artt. 7 e 33",
 "Spostare il cursore sulla concentrazione di una sostanza dell’elenco delle candidate in un articolo.",
 "Concentrazione della SVHC nell’articolo (% in peso)","%",0,0.5,0.01,0.05,[
 ("Sotto lo 0,1%",0.1,V,"Nessun obbligo di comunicazione ai sensi dell’art. 33, salvo altre restrizioni applicabili."),
 ("Pari o superiore allo 0,1%",0.5,A,"Obbligo di fornire ai destinatari, e su richiesta ai consumatori entro 45 giorni, le informazioni per un uso sicuro (almeno il nome della sostanza); notifica all’ECHA se oltre 1 t/anno per produttore o importatore; comunicazione alla banca dati SCIP.")],
 "Grafico interattivo. Si sposti il cursore sulla concentrazione di una sostanza estremamente preoccupante in un articolo. Alla soglia dello zero virgola uno per cento in peso scattano gli obblighi di comunicazione lungo la catena di approvvigionamento e verso i consumatori, che devono ricevere le informazioni entro quarantacinque giorni dalla richiesta.")
CO2E=calcolo("Simulazione · Emissioni indirette da energia elettrica","UNI EN ISO 14064-1:2019 · GHG Protocol, Scope 2",
 "Modificare il consumo annuo di energia elettrica e il fattore di emissione: il calcolo restituisce le emissioni in tonnellate di CO₂ equivalente.",
 "Emissioni (t CO₂e) = consumo (kWh) × fattore (kg CO₂e/kWh) / 1.000","e * f / 1000",[("e","Consumo annuo di energia elettrica",10000,2000000,10000,450000,"kWh"),("f","Fattore di emissione (fonte ufficiale dell’anno)",0.05,0.6,0.01,0.25,"kg/kWh")],
 "Emissioni indirette","t CO₂e",1200,None,None,None,None,
 "Simulazione. Si modifichino il consumo annuo di energia elettrica e il fattore di emissione, che va tratto da fonti ufficiali per l’anno di riferimento. Il prodotto, diviso per mille, restituisce le emissioni indirette in tonnellate di anidride carbonica equivalente. Si osservi l’effetto della scelta del fattore, che distingue il metodo basato sulla localizzazione da quello basato sul mercato.")
PAYBACK=calcolo("Simulazione · Tempo di ritorno di un intervento di efficienza","UNI CEI EN 16247-1 · D.lgs. 102/2014",
 "Modificare investimento, energia risparmiata e prezzo dell’energia: il calcolo restituisce il tempo di ritorno semplice.",
 "Tempo di ritorno (anni) = investimento / (energia risparmiata × prezzo)","i / (r * p)",[("i","Investimento",2000,200000,1000,24000,"€"),("r","Energia elettrica risparmiata",5000,400000,1000,60000,"kWh/anno"),("p","Prezzo dell’energia",0.08,0.35,0.01,0.2,"€/kWh")],
 "Tempo di ritorno semplice","anni",10,3,"3 anni","Tempo di ritorno inferiore a 3 anni: intervento generalmente prioritario.","Tempo di ritorno superiore a 3 anni: valutare con VAN e TIR e con eventuali incentivi.",
 "Simulazione. Si modifichino l’investimento, l’energia risparmiata ogni anno e il prezzo dell’energia, ad esempio per l’installazione di un inverter su un motore. Il rapporto tra investimento e risparmio annuo è il tempo di ritorno semplice, primo indicatore per ordinare gli interventi individuati nella diagnosi. Per decisioni definitive si usano il valore attuale netto e il tasso interno di rendimento.")
RENTRI_CAL=flusso("Diagramma · Il calendario di iscrizione al RENTRI","D.M. MASE 4 aprile 2023, n. 59, art. 13",
 "Selezionare ciascuna finestra di iscrizione.",[
 ("Primo gruppo","15/12/2024 – 13/02/2025","Produttori di rifiuti speciali pericolosi e non pericolosi con più di 50 dipendenti; gestori di rifiuti (trasportatori, impianti, intermediari)."),
 ("Secondo gruppo","15/06/2025 – 14/08/2025","Produttori di rifiuti speciali con più di 10 e fino a 50 dipendenti."),
 ("Terzo gruppo","15/12/2025 – 13/02/2026","Tutti gli altri produttori obbligati, compresi quelli con non più di 10 dipendenti produttori di rifiuti pericolosi."),
 ("Dopo l’iscrizione",None,"Registro cronologico in formato digitale e, dal 13 febbraio 2026, formulario digitale; contributo annuo e deleghe agli operatori.")],
 "Diagramma interattivo. Si selezioni ciascuna finestra del calendario di iscrizione al registro elettronico nazionale per la tracciabilità dei rifiuti, distinta in base alla categoria e al numero di dipendenti dei produttori.")
RISK_INC=flusso("Diagramma · La valutazione del rischio di incendio","D.M. 3 settembre 2021, Allegato I · D.lgs. 81/2008, art. 46",
 "Selezionare ciascuna fase della valutazione (schema tecnico, senza immagini).",[
 ("Pericoli di incendio",None,"Individuazione di materiali combustibili e infiammabili, sorgenti di innesco e lavorazioni pericolose."),
 ("Contesto e occupanti",None,"Descrizione dell’ambiente, del numero e delle caratteristiche delle persone presenti, comprese quelle con esigenze speciali."),
 ("Valutazione qualitativa o quantitativa",None,"Stima delle conseguenze sugli occupanti e sui beni, con i criteri del D.M. 3 settembre 2021 e, ove previsto, del Codice di prevenzione incendi (D.M. 3 agosto 2015)."),
 ("Misure",None,"Misure tecniche (compartimentazione, rilevazione, estinzione, vie d’esodo) e gestionali (D.M. 2 settembre 2021: gestione della sicurezza in esercizio e in emergenza)."),
 ("Revisione","a ogni modifica significativa","Aggiornamento in caso di modifiche dell’attività, dei materiali, del layout o degli occupanti.")],
 "Diagramma interattivo. Si selezioni ciascuna fase della valutazione del rischio di incendio: individuazione dei pericoli, descrizione del contesto e degli occupanti, valutazione, misure tecniche e gestionali e revisione.")
PIANO=[
 ("ALL","M1","Prevenire la contaminazione crociata",[ALLERGENI]),
 ("ALL","M2","Rintracciabilità, ritiro e richiamo",[RICHIAMO]),
 ("CER","M1","Autoconsumo fisico e valore dell",[AUTOC]),
 ("CER","M2","Incentivi per le CER e le altre",[TARIFFA]),
 ("REATI","M1","I delitti contro l’ambiente",[PENE]),
 ("REATI","M1","La procedura estintiva delle",[ESTINT]),
 ("CHIM","M2","La UNI EN 689: strategia di misura",[IND689]),
 ("CHIM","M2","Valori limite e misurazioni",[TWA]),
 ("RSPP-AGG","M2","Valori limite e misurazioni",[TWA,RUMORE,VIBR]),
 ("RSPP-AGG","M3","Esempio applicativo: il calcolo dell",[NIOSH]),
 ("RSPP-AGG","M5","Prevenzione incendi e emergenze",[RISK_INC]),
 ("LAV-SPEC-B","M2","La movimentazione manuale dei carichi",[NIOSH]),
 ("LAV-SPEC-B","M2","Esempio applicativo: il calcolo dell",[RUMORE,VIBR]),
 ("LAV-GEN","M1","Il danno: infortunio e malattia",[RUMORE]),
 ("LAV-GEN","M4","Funzioni e poteri dell'organo di vigilanza",[PRESCR758]),
 ("DL","M3","Il documento di valutazione dei rischi",[VDR]),
 ("DL","M4","Verificare l’efficacia della formazione",[KIRK]),
 ("DIR","M3","Il documento di valutazione dei rischi",[VDR]),
 ("DIR","M4","Verificare l’efficacia della formazione",[KIRK]),
 ("RSPP-A","M3","Indicatori infortunistici",[IF_IG]),
 ("RSPP-A","M3","Matrici di rischio",[VDR]),
 ("RSPP-A","M5","Verificare l’efficacia della formazione",[KIRK]),
 ("ESG","M2","Esempio applicativo: il tasso di infortuni",[IF_IG]),
 ("LAV-AGG","M2","Gli infortuni in Italia",[PRESCR758]),
 ("REACH","M1","SVHC, elenco di sostanze candidate",[SVHC]),
 ("RIF","M1","Rifiuti pericolosi: caratteristiche HP",[CLASSRIF]),
 ("LEG-AMB","M2","Rifiuti: definizioni e classificazione",[CLASSRIF]),
 ("RENTRI","M1","Il RENTRI: finalità, soggetti e calendario",[RENTRI_CAL]),
 ("SCA","M1","Autorizzazione allo scarico e valori limite",[SCARICO]),
 ("CFP","M1","Dati di attività, fattori di emissione",[CO2E]),
 ("DIAG","M2","Sistemi elettrici: motori, inverter",[PAYBACK]),
 ("AI-1","*","*",[RISK_INC]),
]
import json,os,subprocess
BASE='/home/claude/astra-portale/elearning'
num={}
for c,m,pref,sch in PIANO:
  w=json.loads(subprocess.check_output(['node','-e',f"const fs=require('fs');const w={{}};new Function('window',fs.readFileSync('{BASE}/corsi/{c}/corso.js','utf8'))(w);console.log(JSON.stringify(w.CORSO.moduli.map(m=>[m.id,m.schermate.filter(s=>!s.est).map(s=>s.tit)])))"]))
  if m=='*':
    m,tits=[x for x in w if x[0]!='M0'][0]; anc=[t for t in tits if t][1]
  else:
    tits=dict(w)[m]; anc=[t for t in tits if t and t.startswith(pref)]
    if not anc: print('ANCORA NON TROVATA',c,m,pref); continue
    anc=anc[0]
  k=num.get((c,m),90); num[(c,m)]=k+1
  os.makedirs(f'{BASE}/estensioni/{c}',exist_ok=True)
  json.dump({"dopo":anc,"schermate":sch},open(f'{BASE}/estensioni/{c}/{m}-{k}.json','w'),ensure_ascii=False,indent=1)
  print(c,m,k,'→',anc[:50])
