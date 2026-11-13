/* Scelta delle immagini pertinenti per corso e per schermata – © 2026 dr. Jonathan D'Eugenio
   Catalogo (contenuto verificato visivamente):
   haccp, haccp2 = alimenti freschi · energia, energia3 = fotovoltaico · energia2 = eolico
   laboratorio, hero2 = laboratorio chimico · ambiente, ambiente2, ambiente3 = ambiente (simbolica)
   chi = tecnico della prevenzione con progetti · aula, cta, hero3 = aula di formazione · aziende = riunione di lavoro
   sicurezza2 = lavorazione del legno con DPI · hero1, sicurezza = cantiere edile · sicurezza3 = macchina movimento terra */
const NUOVE = ['emissioni_camino', 'emissioni_impianto', 'emissioni_industria', 'verniciatura', 'verniciatura2', 'saldatura', 'saldatura2', 'depuratore', 'depuratore2', 'rifiuti_pericolosi', 'abbandono_rifiuti', 'sversamento', 'bonifica_sversamento', 'bonifica', 'bonifica2', 'stoccaggio_chimici', 'defibrillatore', 'agricoltura', 'amianto', 'giustizia', 'campionamento_acque', 'analisi_campione', 'biogas', 'condominio_ftv', 'discarica', 'sorveglianza_sanitaria', 'lavori_quota'];
const UTENTE = ['inc_esodo', 'inc_estintore', 'inc_esercitazione', 'inc_impianto', 'inc_vigile', 'inc_segnaletica', 'atex_cartello', 'atex_simbolo', 'inf_atex_triangolo', 'atex_fiamma', 'rumore_otoprotettori', 'rumore_orecchio', 'dpi_udito', 'inf_rumore_db', 'vibrazioni_hav', 'vibrazioni_smerigliatrice', 'inf_vibrazioni_wbv', 'inf_vibrazioni_hav', 'cem_misura', 'cem_antenne', 'cem_campo', 'inf_cem_effetti', 'inf_cem_livelli', 'roa_occhio', 'roa_saldatura', 'inf_roa_occhio', 'inf_roa_spettro', 'saldatura3', 'chimico_laboratorio', 'chimico_clp', 'chimico_dpi', 'chimico_etichette', 'adr_etichette', 'rifiuti_contenitori', 'rifiuti_kit', 'rifiuti_deposito', 'rifiuti_deposito_temp', 'rifiuti_selezione', 'rentri_digitale', 'fir_digitale', 'rentri_logo', 'emissioni_fumi', 'emissioni_camino2', 'emissioni_campionamento', 'inf_particolato', 'inf_emissioni_concentrazioni', 'co2', 'energia_verde', 'rinnovabili', 'sostenibilita', 'iso14001', 'iso45001', 'sicurezza_cubi'];
const CATALOGO = [...UTENTE, ...NUOVE, 'haccp', 'haccp2', 'energia', 'energia2', 'energia3', 'laboratorio', 'hero2', 'ambiente', 'ambiente2', 'ambiente3', 'chi', 'aula', 'cta', 'hero3', 'aziende', 'sicurezza2', 'hero1', 'sicurezza', 'sicurezza3'];
// immagini ammesse per ciascun corso (le prime sono le predefinite)
const AMMESSE = {
  ALL: ['haccp2', 'haccp'],
  CER: ['energia3', 'energia', 'energia2'],
  CFP: ['co2', 'energia', 'rinnovabili', 'energia2', 'energia3', 'energia_verde'],
  DIAG: ['energia', 'energia3', 'energia2', 'chi'],
  ESG: ['sostenibilita', 'energia_verde', 'rinnovabili', 'aziende', 'co2', 'chi'],
  CHIM: ['chimico_laboratorio', 'chimico_clp', 'laboratorio', 'chimico_dpi', 'hero2', 'chimico_etichette'],
  REACH: ['chimico_clp', 'laboratorio', 'chimico_laboratorio', 'hero2', 'chimico_etichette'],
  EMI: ['emissioni_fumi', 'emissioni_campionamento', 'emissioni_camino2', 'ambiente3', 'emissioni_industria', 'chi'],
  LEG: ['ambiente', 'ambiente2', 'ambiente3', 'chi'],
  'LEG-AMB': ['ambiente', 'ambiente2', 'ambiente3', 'chi'],
  REATI: ['ambiente', 'ambiente2', 'aziende', 'chi'],
  RENTRI: ['rentri_logo', 'rentri_digitale', 'fir_digitale', 'rifiuti_selezione', 'rifiuti_deposito', 'chi'],
  RIF: ['rifiuti_deposito', 'rifiuti_selezione', 'rifiuti_contenitori', 'ambiente2', 'rifiuti_kit', 'chi'],
  SCA: ['ambiente', 'ambiente3', 'ambiente2', 'chi'],
  DL: ['chi', 'aziende', 'aula', 'hero3', 'cta'],
  DIR: ['chi', 'aziende', 'aula', 'hero3', 'cta'],
  'LAV-GEN': ['chi', 'aula', 'sicurezza2', 'hero3', 'aziende'],
  'LAV-AGG': ['chi', 'aula', 'sicurezza2', 'cta', 'aziende'],
  'LAV-SPEC-B': ['aziende', 'aula', 'chi', 'cta', 'hero3'],
  'RSPP-A': ['chi', 'aziende', 'aula', 'hero3', 'cta'],
  'RSPP-AGG': ['chi', 'aula', 'aziende', 'hero3', 'cta']
};

// corsi in aula e in videoconferenza (slide PowerPoint): dove la raccolta non ha immagini specifiche si usano solo immagini neutre (tecnico, aula)
const NEUTRE = ['chi', 'aula', 'aziende', 'hero3', 'cta'];
Object.assign(AMMESSE, {
  'AI-1': ['inc_impianto', 'inc_estintore', 'inc_esercitazione', 'inc_vigile'], 'AI-2': ['inc_impianto', 'inc_estintore', 'inc_esercitazione', 'inc_vigile'], 'AI-3': ['inc_impianto', 'inc_estintore', 'inc_esercitazione', 'inc_vigile'], 'PS-A': NEUTRE, 'PS-BC': NEUTRE,
  ATEX: ['atex_cartello', 'atex_fiamma', 'atex_simbolo', 'chi'], CONF: ['chi', 'aula', 'sicurezza2'], PES: ['chi', 'sicurezza2', 'aula'],
  CAR: ['chi', 'aula', 'sicurezza2'], CARRO: ['sicurezza', 'chi', 'aula'], CMM: ['sicurezza', 'chi', 'aula'], GRU: ['sicurezza', 'chi', 'aula'],
  MMT: ['sicurezza3', 'chi', 'aula'], PLE: ['hero1', 'chi', 'aula'], PONT: ['hero1', 'sicurezza', 'chi'], QUOTA: ['hero1', 'sicurezza', 'chi'],
  CSP: ['sicurezza', 'hero1', 'chi', 'aula'], 'CSP-AGG': ['sicurezza', 'hero1', 'chi', 'aula'], 'LAV-CANT': ['hero1', 'sicurezza', 'sicurezza3', 'chi', 'aula'],
  'PREP-CANT': ['sicurezza', 'hero1', 'chi', 'aula'], 'RSPP-B-SP3': ['sicurezza', 'hero1', 'sicurezza3', 'chi'],
  'LAV-SPEC-A': ['sicurezza2', 'chi', 'aula', 'hero2'], 'LAV-SPEC-M': ['sicurezza2', 'chi', 'aula', 'hero2'],
  PREP: ['chi', 'aziende', 'aula', 'sicurezza2'], 'PREP-AGG': ['chi', 'aziende', 'aula', 'sicurezza2'], DLSPP: ['chi', 'aziende', 'aula', 'hero3'],
  RLS: ['chi', 'aziende', 'aula', 'cta'], FORM: ['aula', 'hero3', 'cta'], 'RSPP-B': ['chi', 'aziende', 'aula', 'sicurezza2', 'hero2'],
  'RSPP-B-SP1': NEUTRE, 'RSPP-B-SP2': NEUTRE, 'RSPP-B-SP4': NEUTRE, 'RSPP-B-SP5': ['hero2', 'laboratorio', 'chi', 'aula'], 'RSPP-C': ['aula', 'aziende', 'chi', 'cta'],
  HACCP: ['haccp', 'haccp2'], 'HACCP-AGG': ['haccp2', 'haccp'], 'HACCP-R': ['haccp', 'haccp2'], ISO22: ['haccp', 'haccp2', 'aziende'],
  ISO14: ['iso14001', 'ambiente', 'ambiente2', 'aziende', 'chi'], AUD14: ['aziende', 'chi', 'ambiente'], RA: ['ambiente', 'ambiente2', 'chi', 'aziende'],
  BON: ['ambiente3', 'laboratorio', 'chi'], 'CAMP-ACQ': ['laboratorio', 'hero2', 'chi'], 'CAMP-RIF': ['laboratorio', 'hero2', 'chi'], CLASS: ['laboratorio', 'hero2', 'chi'],
  'MON-EMI': ['laboratorio', 'chi', 'ambiente3'], EGE: ['energia', 'energia2', 'energia3', 'aula'], ISO50: ['energia', 'energia2', 'aziende', 'chi']
});
// regole per argomento: si applicano solo se l’immagine è tra quelle ammesse o se l’argomento lo giustifica nei corsi di sicurezza
const REGOLE = [
  [/\b(alcol|stupefacent|psicotrop)/i, ['chi', 'aziende']],
  [/\b(chimic|sostanz|agenti chimici|cancerogen|mutagen|reprotossic|REACH|CLP|scheda di (dati di )?sicurezza|amianto|laboratorio)/i, ['laboratorio', 'hero2']],
  [/\b(cantier|ponteg|impalcat|cadut[ae] dall.alto|lavori in quota)/i, ['hero1', 'sicurezza']],
  [/\b(macchin[ae] movimento terra|escavator|scav)/i, ['sicurezza3']],
  [/\b(attrezzatur|macchin|legno|utensil|DPI|dispositiv[io] di protezione)/i, ['sicurezza2']],
  [/\b(fotovoltaic|solare|moduli|inverter|comunit. energetic|autoconsumo)/i, ['energia3', 'energia']],
  [/\b(eolic|rinnovabil|energia elettrica|diagnosi energetica)/i, ['energia2', 'energia']],
  [/\b(aliment|allergen|HACCP|ristorazion|cucina|glutine)/i, ['haccp2', 'haccp']],
  [/\b(formazion|addestrament|docent|aula|e-learning|apprendiment)/i, ['aula', 'hero3', 'cta']],
  [/\b(organizzazion|datore di lavoro|dirigent|deleg|modello organizzativo|appalt|riunion)/i, ['aziende', 'chi']],
  [/\b(rifiut|scaric|emission|ambient|acque|suolo|RENTRI)/i, ['ambiente2', 'ambiente', 'ambiente3']]
];
// regole specifiche (immagini di pubblico dominio verificate): valgono in ogni corso perché descrivono esattamente l’argomento della schermata
const UNIVERSALI = [
  [/\b(vibrazion[ei] trasmesse al corpo intero|corpo intero|WBV)/i, ['inf_vibrazioni_wbv']],
  [/\b(mano-braccio|HAV)\b/i, ['inf_vibrazioni_hav', 'vibrazioni_hav', 'vibrazioni_smerigliatrice']],
  [/\bvibrazion/i, ['vibrazioni_hav', 'inf_vibrazioni_hav', 'vibrazioni_smerigliatrice', 'inf_vibrazioni_wbv']],
  [/\b(rumor|otoprotett|ipoacusi|esposizione sonora|LEX,8h|dB\(A\))/i, ['rumore_otoprotettori', 'inf_rumore_db', 'dpi_udito', 'rumore_orecchio']],
  [/\b(campi elettromagnetici|CEM\b|elettromagnetic)/i, ['cem_misura', 'inf_cem_livelli', 'cem_antenne', 'inf_cem_effetti', 'cem_campo']],
  [/\b(radiazioni ottiche|ROA\b|laser|ultraviolett|raggi UV|infrarosso)/i, ['roa_occhio', 'inf_roa_occhio', 'roa_saldatura', 'inf_roa_spettro']],
  [/\b(ADR\b|trasporto (su strada )?(di|delle) merci pericolose)/i, ['adr_etichette']],
  [/\b(CLP\b|pittogramm[ai] di pericolo|etichettatura|indicazioni di pericolo|frasi H)/i, ['chimico_clp', 'chimico_etichette']],
  [/\b(rischio chimico|agenti chimici|valutazione del rischio chimico)/i, ['chimico_laboratorio', 'chimico_clp', 'chimico_etichette']],
  [/\b(tut[ae] di protezione|protezione delle vie respiratorie|respirator|DPI di III categoria)/i, ['chimico_dpi']],
  [/\b(RENTRI|registro elettronico|vidimazione digitale)/i, ['rentri_digitale', 'fir_digitale']],
  [/\b(FIR\b|formulari?o? di identificazione|formulario)/i, ['fir_digitale', 'rentri_digitale']],
  [/\b(raccolta differenziata|contenitori per (la raccolta|rifiuti)|selezione dei rifiuti|impianti? di (selezione|recupero))/i, ['rifiuti_selezione', 'rifiuti_contenitori']],
  [/\b(particolato|PM10|PM2,5|qualit. dell.aria)/i, ['inf_particolato']],
  [/\b(emissione e concentrazione|immissioni|ricadut[ae] al suolo)/i, ['inf_emissioni_concentrazioni']],
  [/\b(campionament[oi] (alle|delle) emissioni|misur[ae] alle emissioni|SME\b|sistemi di monitoraggio in continuo)/i, ['emissioni_campionamento']],
  [/\b(CO2|CO₂|carbon footprint|impronta di carbonio|gas (a effetto )?serra|GHG|decarbonizz)/i, ['co2']],
  [/\b(ESG\b|CSRD|ESRS|sostenibilit|rendicontazione di sostenibilit)/i, ['sostenibilita', 'energia_verde']],
  [/\b(ISO 14001|sistema di gestione ambientale)/i, ['iso14001']],
  [/\b(ISO 45001|SGSL|sistema di gestione (della|per la) salute e sicurezza)/i, ['iso45001']],
  [/\b(segnaletica di sicurezza|cartelli di sicurezza|UNI EN ISO 7010)/i, ['sicurezza_cubi']],
  [/\b(verniciat|prodotti vernicianti|cabin[ae] di verniciatura)/i, ['verniciatura', 'verniciatura2']],
  [/\b(saldat|fumi di saldatura)/i, ['saldatura', 'saldatura2', 'saldatura3']],
  [/\b(amianto|cemento-amianto)/i, ['amianto']],
  [/\b(depurat|acque reflue|fanghi di depurazione|trattamento delle acque)/i, ['depuratore', 'depuratore2']],
  [/\b(abbandon[oi] di rifiuti|discarica abusiva|traffico illecito|spedizion[ei] (illegal|transfrontalier))/i, ['abbandono_rifiuti']],
  [/\b(rifiuti pericolosi|deposito temporaneo|caratteristiche HP|classificazione (di un|dei) rifiut)/i, ['rifiuti_deposito', 'rifiuti_pericolosi', 'rifiuti_deposito_temp', 'rifiuti_kit']],
  [/\b(sversament|evento potenzialmente contaminante|panne)/i, ['sversamento', 'bonifica_sversamento']],
  [/\b(bonific|siti? contaminat|concentrazioni soglia|caratterizzazione del sito)/i, ['bonifica', 'bonifica2']],
  [/\b(campionament[oi] dell?e? acque|corpo idrico|corsi d.acqua|acque superficiali|scarich?[oi] idric)/i, ['campionamento_acque']],
  [/\b(analisi (delle|di) acque|campion[ei] d.acqua|autocontroll[oi] dell?o scaric)/i, ['analisi_campione']],
  [/\b(emission[ei] in atmosfera|camin[oi]|sistem[ia] di abbattimento|inquinamento atmosferico|medi impianti di combustione)/i, ['emissioni_industria', 'emissioni_fumi', 'emissioni_camino', 'emissioni_camino2', 'emissioni_impianto']],
  [/\b(stoccaggio (di|delle|dei) (sostanze|prodotti chimici|fusti|agenti chimici)|bacin[oi] di contenimento|serbatoi di sostanze)/i, ['stoccaggio_chimici']],
  [/\b(defibrillat|primo soccorso|addetti al primo)/i, ['defibrillatore']],
  [/\b(agricol|trattor)/i, ['agricoltura']],
  [/\b(biogas|biomass)/i, ['biogas']],
  [/\b(sorveglianza sanitaria|medico competente|visit[ae] medic|giudizi[oi] di idoneit)/i, ['sorveglianza_sanitaria']],
  [/\b(lavori in quota|cadut[ae] dall.alto|linea vita|anticaduta|imbracatur)/i, ['lavori_quota']],
  [/\b(condomin|gruppo di autoconsumatori)/i, ['condominio_ftv']],
  [/\b(discaric)/i, ['discarica']],
  [/\b(reat[oi]|delitt[oi]|codice penale|sentenz|Cassazione|procedimento penale|pubblico ministero|responsabilit. penale)/i, ['giustizia']]
];
// Argomento incendio/esplosione: fotografie fornite dal committente (nessuna immagine di repertorio), scelte per sotto-argomento
const INCENDIO = /(incend|antincend|\bfuoc|fiamm|combustion|esplosi|ATEX|resistenza al fuoco|compartiment|reazione al fuoco)/i;
const ANTINCENDIO = new Set(['AI-1', 'AI-2', 'AI-3']); // corsi per addetti antincendio: fotografia su ogni diapositiva
const FUOCO = [
  [/(ATEX|atmosfer[ae] esplosiv|esplosi|polveri combustibili|zone? (0|1|2|20|21|22)\b)/i, ['atex_cartello', 'atex_fiamma', 'inf_atex_triangolo', 'atex_simbolo']],
  [/(esodo|evacuazion|uscit[ae] di emergenza|piano di emergenza|allarme|scoperta di un incendio)/i, ['inc_esodo', 'inc_segnaletica']],
  [/(segnaletic|cartell)/i, ['inc_segnaletica']],
  [/(combustion|triangolo del fuoco|classi di fuoco|fiamm)/i, ['inc_vigile', 'inc_estintore']],
  [/(estintor|spegniment|idrant|nasp|sprinkler|mezzi di estinzione|estinguent|mezzi antincendio|impianti di estinzione)/i, ['inc_estintore', 'inc_esercitazione', 'inc_vigile']],
  [/(vigili del fuoco|squadra|esercitazion|prova pratica|addestrament)/i, ['inc_esercitazione', 'inc_vigile']],
  [/(valutazione del rischio|classificazione|livell[oi] di rischio|attivit. soggette|prevenzione incendi|misure preventive)/i, ['inc_impianto']],
  [/./, ['inc_impianto', 'inc_estintore', 'inc_esercitazione', 'inc_vigile']]
];
const univ = (t, usate) => { for (const [re, foto] of UNIVERSALI) if (re.test(t)) return foto[((usate[re] = (usate[re] || 0) + 1) - 1) % foto.length]; };
const fuoco = (t, usate) => { for (const [re, f] of FUOCO) if (re.test(t)) return f[((usate[re] = (usate[re] || 0) + 1) - 1) % f.length]; };
const NO = '-';
const GENERICHE = new Set([REGOLE[REGOLE.length - 1][0]]); // regola «ambiente»: immagini simboliche, ammesse solo per copertine e sezioni
const SICUREZZA = new Set(['DL', 'DIR', 'LAV-GEN', 'LAV-AGG', 'RSPP-A', 'RSPP-AGG', 'RSPP-B', 'RSPP-C', 'LAV-SPEC-A', 'LAV-SPEC-M', 'PREP', 'PREP-AGG', 'DLSPP', 'RLS']);
function scegli(C) {
  const tutto = ANTINCENDIO.has(C.id);
  const amm = AMMESSE[C.id] || ['chi', 'aula', 'aziende'];
  const sch = {}, mod = {}, usate = {};
  C.moduli.forEach((m, mi) => {
    const testoMod = m.titolo || '';
    mod[m.id] = (tutto || INCENDIO.test(testoMod)) ? (scegliUna(testoMod, [], C.id, usate, mi, true, true) || fuoco(testoMod, usate)) : scegliUna(testoMod, amm, C.id, usate, mi);
    m.schermate.forEach((s, si) => {
      // priorità al titolo; in subordine l’attacco della schermata; mai l’intero testo (troppi richiami incidentali)
      const tl = (s.tit || '') + ' ' + (s.lead || s.scena || '');
      if (INCENDIO.test(tl)) { sch[`${m.id}-${si}`] = univ(s.tit || '', usate) || fuoco(s.tit && INCENDIO.test(s.tit) ? s.tit : tl, usate); return; }
      if (tutto) { sch[`${m.id}-${si}`] = scegliUna(s.tit || '', [], C.id, usate, si, true, true) || scegliUna(s.lead || s.scena || '', [], C.id, usate, si, true, true) || fuoco(testoMod + ' ' + tl, usate); return; }
      // nelle schermate l’immagine compare solo se un criterio specifico ne garantisce la pertinenza; altrimenti trattazione solo testuale
      sch[`${m.id}-${si}`] = scegliUna(s.tit || '', amm, C.id, usate, mi * 7 + si, true, true) || scegliUna(s.lead || s.scena || '', amm, C.id, usate, mi * 7 + si, true, true) || NO;
    });
  });
  return { sch, mod, ammesse: amm };
}
function scegliUna(t, amm, id, usate, k, soloRegola, specifica) {
  for (const [re, foto] of UNIVERSALI) if (re.test(t)) return foto[((usate[re] = (usate[re] || 0) + 1) - 1) % foto.length];
  for (const [re, foto] of REGOLE) if (re.test(t)) {
    if (specifica && GENERICHE.has(re)) continue;
    const ok = foto.filter(f => amm.includes(f) || (SICUREZZA.has(id) && !/^(haccp|energia|ambiente)/.test(f) && !(amm === NEUTRE)));
    if (ok.length) { const f = ok[(usate[re] = (usate[re] || 0) + 1) % ok.length]; return f; }
  }
  return soloRegola ? null : amm[k % amm.length];
}
const DESCRIZIONI = { inc_esodo: 'segnale di uscita di emergenza in un ambiente interessato da incendio', inc_estintore: "operatore che aziona un estintore a polvere su un fuoco di prova", inc_esercitazione: "esercitazione pratica di spegnimento su vasca di prova con estintore", inc_impianto: "impianto industriale con elementi di rilevazione e protezione antincendio", inc_vigile: "operatore con dispositivi di protezione che interviene con una lancia su un incendio", inc_segnaletica: "cartelli della segnaletica antincendio (estintore, idrante, pulsante di allarme, rivelatore)", atex_cartello: "cartello di avvertimento «Rischio esplosione» in un impianto industriale", atex_simbolo: "segnale di pericolo di materiale esplosivo", inf_atex_triangolo: "schema del triangolo dell’esplosione: combustibile, comburente, sorgente di innesco", atex_fiamma: "marcatura Ex delle apparecchiature per atmosfere esplosive", rumore_otoprotettori: "lavoratore che indossa le cuffie antirumore", rumore_orecchio: "rappresentazione dell’onda sonora che raggiunge l’orecchio", dpi_udito: "casco con cuffie antirumore e occhiali di protezione", inf_rumore_db: "scala dei livelli sonori in decibel con sorgenti di esempio", vibrazioni_hav: "rappresentazione delle vibrazioni trasmesse al sistema mano-braccio", vibrazioni_smerigliatrice: "uso della smerigliatrice e distretti corporei esposti a vibrazioni", inf_vibrazioni_wbv: "infografica sulle vibrazioni trasmesse al corpo intero: sorgenti, effetti, prevenzione", inf_vibrazioni_hav: "infografica sulle vibrazioni trasmesse al sistema mano-braccio: utensili, effetti, prevenzione", cem_misura: "misura dei campi elettromagnetici con strumento portatile presso antenne", cem_antenne: "traliccio con antenne di telecomunicazione", cem_campo: "schema delle linee di campo", inf_cem_effetti: "infografica degli effetti diretti dell’esposizione ai campi elettromagnetici in funzione della frequenza", inf_cem_livelli: "infografica dei livelli di azione (LA) e dei valori limite di esposizione (VLE)", roa_occhio: "occhio esposto a radiazione luminosa", roa_saldatura: "lavorazione con emissione di radiazioni ottiche (saldatura e taglio)", inf_roa_occhio: "schema dell’occhio con penetrazione delle bande UV, visibile e IR", inf_roa_spettro: "spettro elettromagnetico con evidenza della luce visibile", saldatura3: "saldatore al lavoro con maschera di protezione", chimico_laboratorio: "analisi di laboratorio con pipetta e vetreria", chimico_clp: "provette di sostanze con pittogrammi di pericolo CLP", chimico_dpi: "operatori con tute di protezione chimica e maschere", chimico_etichette: "prodotti chimici con etichette e segnali di pericolo", adr_etichette: "etichette di pericolo ADR per il trasporto di merci pericolose", rifiuti_contenitori: "contenitori in plastica per lo stoccaggio dei rifiuti", rifiuti_kit: "fusti per rifiuti su vasca di contenimento", rifiuti_deposito: "area di deposito temporaneo dei rifiuti con contenitori identificati", rifiuti_deposito_temp: "gestione documentata del deposito temporaneo dei rifiuti", rifiuti_selezione: "operatore che registra i dati in un impianto di selezione dei rifiuti", rentri_digitale: "gestione digitale dei dati di tracciabilità dei rifiuti", fir_digitale: "compilazione del formulario di identificazione dei rifiuti in formato digitale", rentri_logo: "marchio del Registro elettronico nazionale per la tracciabilità dei rifiuti (RENTRI)", emissioni_fumi: "area industriale con emissioni in atmosfera", emissioni_camino2: "camino con pennacchio di emissione", emissioni_campionamento: "tecnico che esegue un campionamento al camino", inf_particolato: "schema del particolato primario e secondario", inf_emissioni_concentrazioni: "schema del percorso emissione–trasformazione–concentrazione in aria", co2: "simbolo dell’anidride carbonica in cielo", energia_verde: "energia da fonti rinnovabili (simbolica)", rinnovabili: "progettazione di impianti eolici e fotovoltaici (simbolica)", sostenibilita: "sostenibilità e transizione ecologica (simbolica)", iso14001: "sistema di gestione ambientale ISO 14001", iso45001: "sistema di gestione per la salute e sicurezza ISO 45001", sicurezza_cubi: "segnali di sicurezza e antincendio su cubi", sorveglianza_sanitaria: 'esame della vista nell’ambito della sorveglianza sanitaria', lavori_quota: 'lavoratore in copertura con casco, imbracatura e linea di ancoraggio', biogas: 'impianto di biogas', condominio_ftv: 'edificio residenziale con impianto fotovoltaico in copertura', discarica: 'discarica con compattatore', emissioni_camino: 'camino industriale con emissioni', emissioni_impianto: 'impianto industriale con camini', emissioni_industria: 'stabilimento industriale con emissioni in atmosfera', verniciatura: 'operatore in cabina di verniciatura con tuta e maschera', verniciatura2: 'cabina di verniciatura per autoveicoli', saldatura: 'saldatore con maschera di protezione', saldatura2: 'saldatura con DPI', depuratore: 'vasca di un impianto di depurazione', depuratore2: 'impianto di depurazione visto dall’alto', rifiuti_pericolosi: 'fusti di rifiuti pericolosi su pallet', abbandono_rifiuti: 'fusti di rifiuti abbandonati', sversamento: 'panne di contenimento di uno sversamento in un corso d’acqua', bonifica_sversamento: 'operatori in bonifica di uno sversamento', bonifica: 'campionamento di terreno contaminato', bonifica2: 'scavo di caratterizzazione del suolo', stoccaggio_chimici: 'magazzino di fusti di sostanze chimiche', defibrillatore: 'defibrillatore semiautomatico in teca', agricoltura: 'trattore al lavoro in campo', amianto: 'copertura in lastre di cemento-amianto', giustizia: 'Palazzo di Giustizia, sede della Corte di cassazione', campionamento_acque: 'tecnico che campiona le acque di un fiume', analisi_campione: 'tecnico che esamina un campione d’acqua', haccp: 'alimenti freschi in ambiente di preparazione', haccp2: 'alimenti freschi e materie prime', energia: 'impianto fotovoltaico', energia2: 'parco eolico', energia3: 'moduli fotovoltaici', laboratorio: 'laboratorio chimico', hero2: 'laboratorio chimico', ambiente: 'tema ambientale', ambiente2: 'tema ambientale', ambiente3: 'tema ambientale', chi: 'tecnico che consulta elaborati progettuali', aula: 'aula di formazione', cta: 'aula di formazione', hero3: 'aula di formazione', aziende: 'riunione di lavoro', sicurezza2: 'lavorazione del legno con DPI', hero1: 'cantiere edile', sicurezza: 'cantiere edile', sicurezza3: 'macchina movimento terra' };
module.exports = { UTENTE, DESCRIZIONI, scegli, NO, INCENDIO, AMMESSE, CATALOGO };
