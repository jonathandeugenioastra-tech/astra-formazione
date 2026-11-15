import sys; sys.path.insert(0,'/tmp/claude-0/rip'); from est import *
C='LAV-GEN'
E(C,'M1-N1','Esercitazione 1 · Affermazioni vere o false',[CL("Pericolo o rischio?","Seleziona un’affermazione, poi la colonna corretta.",["Pericolo","Rischio"],[
 ["Il solvente infiammabile contenuto nella tanica",0,"È una proprietà intrinseca del prodotto: è un pericolo."],
 ["La probabilità che un operatore si ustioni pulendo il forno ancora caldo",1,"Combina probabilità e gravità del danno: è un rischio."],
 ["La lama della troncatrice",0,"È la fonte potenziale di danno: è un pericolo."],
 ["La possibilità di cadere usando una scala instabile per due ore al giorno",1,"Dipende dall’esposizione e dalle condizioni d’uso: è un rischio."],
 ["Il rumore prodotto dal compressore",0,"È un agente fisico che può causare danno: è un pericolo."],
 ["La perdita di udito attesa per chi lavora otto ore vicino al compressore senza protezioni",1,"Tiene conto di esposizione e conseguenze: è un rischio."]],
 "Sei affermazioni. Distingui i pericoli, cioè le proprietà che possono causare un danno, dai rischi, cioè la probabilità che il danno si verifichi nelle condizioni di lavoro.","Art. 2, c. 1, lett. r) e s), D.lgs. 81/2008")])
E(C,'M2-N1','Esercitazione 5 · Caso di studio',[SC("Il primo giorno in reparto","Sei al primo giorno in un magazzino. Il preposto ti affida al collega più esperto, ma il collega deve uscire per un’urgenza e ti dice di iniziare a usare il transpallet elettrico da solo.",[
 ("Che cosa fai?",[["Inizi: il collega ha detto che è semplice",False,"Non hai ricevuto addestramento sull’attrezzatura: non puoi usarla."],["Non usi il transpallet e informi il preposto che non sei stato ancora addestrato",True,"Corretto: l’uso delle attrezzature richiede formazione e addestramento adeguati (artt. 37 e 73)."],["Lo usi solo per spostamenti brevi",False,"La durata non cambia l’obbligo di addestramento."]]),
 ("Il preposto ti chiede di aiutare a scaricare i colli a mano. Uno pesa molto più degli altri. Che cosa fai?",[["Lo sollevi da solo per non rallentare il lavoro",False,"La movimentazione manuale dei carichi va fatta secondo le procedure: chiedi aiuto o un ausilio."],["Chiedi aiuto o usi un ausilio, come ti è stato spiegato nella formazione",True,"Corretto: usi i mezzi messi a disposizione e segnali le difficoltà."],["Lo lasci dov’è senza dire nulla",False,"Le situazioni di pericolo vanno segnalate al preposto."]]),
 ("A fine turno noti che l’estintore vicino all’uscita è coperto da bancali. Che cosa fai?",[["Niente: non è compito tuo",False,"Il lavoratore segnala le deficienze dei mezzi e dei dispositivi (art. 20)."],["Lo segnali al preposto",True,"Corretto: segnalare subito le condizioni di pericolo è un obbligo del lavoratore."],["Lo sposti in un altro punto del reparto",False,"Non si modificano i presidi di emergenza: si segnala il problema."]])],
 "Nel primo giorno contano tre regole: non usare attrezzature senza addestramento, seguire le procedure, segnalare ciò che non va.","Il primo giorno di lavoro in magazzino. Tre situazioni concrete: decidi come comportarti.","Artt. 20, 37 e 73 D.lgs. 81/2008")])
E(C,'M3-N1','Esercitazione 7 · Caso di studio',[
 CL("Diritto o obbligo del lavoratore?","Seleziona una voce, poi la colonna corretta.",["Diritto del lavoratore","Obbligo del lavoratore"],[
  ["Allontanarsi dal posto di lavoro in caso di pericolo grave, immediato e inevitabile",0,"È il diritto previsto dall’art. 44."],
  ["Utilizzare correttamente i dispositivi di protezione messi a disposizione",1,"È un obbligo dell’art. 20."],
  ["Ricevere una formazione sufficiente e adeguata",0,"È garantito dall’art. 37."],
  ["Non rimuovere né modificare i dispositivi di sicurezza senza autorizzazione",1,"È un obbligo dell’art. 20."],
  ["Eleggere o designare il rappresentante dei lavoratori per la sicurezza",0,"È previsto dall’art. 47."],
  ["Partecipare ai programmi di formazione e addestramento organizzati dal datore di lavoro",1,"È un obbligo dell’art. 20."],
  ["Chiedere la visita medica se correlata ai rischi lavorativi",0,"Il lavoratore può chiederla, se il medico competente la ritiene correlata ai rischi (art. 41)."],
  ["Segnalare immediatamente le deficienze dei mezzi e dei dispositivi",1,"È un obbligo dell’art. 20."]],
  "Otto voci. Distingui i diritti del lavoratore dai suoi obblighi.","Artt. 20, 37, 41, 44 e 47 D.lgs. 81/2008"),
 SC("La protezione rimossa","In reparto, un collega ha rimosso il carter di protezione di una pressa «perché rallenta il lavoro». Il preposto passa e se ne accorge.",[
  ("Che cosa deve fare il preposto?",[["Lasciare correre se la produzione è in ritardo",False,"Il preposto deve intervenire: non può tollerare comportamenti pericolosi."],["Fermare l’attività, far rimontare il carter e richiamare il lavoratore",True,"Corretto: il preposto interviene per modificare il comportamento e, se necessario, interrompe l’attività (art. 19)."],["Annotarlo e parlarne a fine mese",False,"L’intervento deve essere immediato."]]),
  ("Il collega dice che lo ha fatto «per tutti». Che conseguenze rischia?",[["Nessuna: il datore di lavoro risponde di tutto",False,"Anche il lavoratore ha obblighi e risponde delle proprie violazioni (artt. 20 e 59)."],["Sanzioni previste per i lavoratori e provvedimenti disciplinari",True,"Corretto: rimuovere i dispositivi di sicurezza è vietato al lavoratore e sanzionato."],["Solo un richiamo verbale",False,"La legge prevede sanzioni specifiche per il lavoratore."]]),
  ("Che cosa fa il preposto dopo l’intervento?",[["Segnala il problema ai superiori, perché valutino la causa",True,"Corretto: il preposto segnala le non conformità; se il carter rallenta davvero il lavoro, va valutata una soluzione sicura."],["Nulla: il problema è risolto",False,"Se la causa resta, il comportamento si ripeterà: serve una segnalazione."],["Toglie la pressa dal reparto",False,"Non è una decisione del preposto: si segnala il problema."]])],
  "Il preposto vigila, interviene e segnala; il lavoratore non rimuove le protezioni. Ognuno risponde dei propri obblighi.","Un caso classico di protezione rimossa. Mettiti nei panni del preposto.","Artt. 19, 20 e 59 D.lgs. 81/2008"),
 AP("La sicurezza nella tua azienda","Indica che cosa conosci già della tua organizzazione della prevenzione.",["So chi è il mio preposto","So chi è l’RSPP","So chi è il medico competente","So chi è il mio RLS","Conosco gli addetti alle emergenze del mio reparto","So dove si trovano estintori e uscite","So a chi segnalare un pericolo"],"Una situazione di pericolo che hai notato e a chi la segnaleresti","Es.: cavo elettrico danneggiato vicino alla macchina 3: lo segnalerei al preposto",
  "Porta quanto hai visto nella tua azienda. Indica chi conosci tra i soggetti della prevenzione e descrivi una situazione di pericolo che segnaleresti, scrivendo a chi.",4)])
E(C,'M4-N1','Esercitazione 8 · Attribuzione delle competenze agli enti',[CL("Chi interviene?","Seleziona una situazione, poi l’ente competente.",["ASL","Ispettorato nazionale del lavoro","Vigili del fuoco","INAIL"],[
 ["Indagine su una malattia professionale segnalata dal medico",0,"Le indagini sulle malattie professionali sono svolte dai servizi di prevenzione delle ASL.","Corretto."],
 ["Verifica del lavoro irregolare e sospensione dell’attività per lavoratori in nero",1,"L’Ispettorato nazionale del lavoro adotta i provvedimenti dell’art. 14.","Corretto."],
 ["Controllo del certificato di prevenzione incendi",2,"La prevenzione incendi è competenza dei vigili del fuoco.","Corretto."],
 ["Denuncia dell’infortunio e indennizzo al lavoratore",3,"L’INAIL gestisce l’assicurazione obbligatoria contro gli infortuni.","Corretto."],
 ["Vigilanza sulla sicurezza in un cantiere edile",1,"Nei cantieri vigila anche l’Ispettorato nazionale del lavoro, oltre all’ASL.","Corretto: l’INL ha competenza anche nei cantieri."],
 ["Incentivi alle imprese per progetti di miglioramento della sicurezza (bandi ISI)",3,"I bandi ISI sono finanziati dall’INAIL.","Corretto."]],
 "Sei situazioni. Assegna ciascuna all’ente che interviene.","Artt. 13 e 14 D.lgs. 81/2008")])
