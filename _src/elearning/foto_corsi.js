/* Scelta delle immagini pertinenti per corso e per schermata – © 2026 dr. Jonathan D'Eugenio
   Catalogo (contenuto verificato visivamente):
   haccp, haccp2 = alimenti freschi · energia, energia3 = fotovoltaico · energia2 = eolico
   laboratorio, hero2 = laboratorio chimico · ambiente, ambiente2, ambiente3 = ambiente (simbolica)
   chi = tecnico della prevenzione con progetti · aula, cta, hero3 = aula di formazione · aziende = riunione di lavoro
   sicurezza2 = lavorazione del legno con DPI · hero1, sicurezza = cantiere edile · sicurezza3 = macchina movimento terra */
const NUOVE = ['emissioni_camino', 'emissioni_impianto', 'emissioni_industria', 'verniciatura', 'verniciatura2', 'saldatura', 'saldatura2', 'depuratore', 'depuratore2', 'rifiuti_pericolosi', 'abbandono_rifiuti', 'sversamento', 'bonifica_sversamento', 'bonifica', 'bonifica2', 'stoccaggio_chimici', 'defibrillatore', 'agricoltura', 'amianto', 'giustizia', 'campionamento_acque', 'analisi_campione', 'biogas', 'condominio_ftv', 'discarica', 'sorveglianza_sanitaria', 'lavori_quota'];
const CATALOGO = [...NUOVE, 'haccp', 'haccp2', 'energia', 'energia2', 'energia3', 'laboratorio', 'hero2', 'ambiente', 'ambiente2', 'ambiente3', 'chi', 'aula', 'cta', 'hero3', 'aziende', 'sicurezza2', 'hero1', 'sicurezza', 'sicurezza3'];
// immagini ammesse per ciascun corso (le prime sono le predefinite)
const AMMESSE = {
  ALL: ['haccp2', 'haccp'],
  CER: ['energia3', 'energia', 'energia2'],
  CFP: ['energia', 'energia2', 'energia3', 'ambiente3'],
  DIAG: ['energia', 'energia3', 'energia2', 'chi'],
  ESG: ['energia', 'ambiente', 'aziende', 'chi'],
  CHIM: ['laboratorio', 'hero2', 'chi'],
  REACH: ['laboratorio', 'hero2', 'chi'],
  EMI: ['ambiente3', 'ambiente', 'ambiente2', 'chi'],
  LEG: ['ambiente', 'ambiente2', 'ambiente3', 'chi'],
  'LEG-AMB': ['ambiente', 'ambiente2', 'ambiente3', 'chi'],
  REATI: ['ambiente', 'ambiente2', 'aziende', 'chi'],
  RENTRI: ['ambiente2', 'ambiente', 'chi', 'aziende'],
  RIF: ['ambiente2', 'ambiente', 'ambiente3', 'chi'],
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
  'AI-1': NEUTRE, 'AI-2': NEUTRE, 'AI-3': NEUTRE, 'PS-A': NEUTRE, 'PS-BC': NEUTRE,
  ATEX: ['chi', 'hero2', 'aula'], CONF: ['chi', 'aula', 'sicurezza2'], PES: ['chi', 'sicurezza2', 'aula'],
  CAR: ['chi', 'aula', 'sicurezza2'], CARRO: ['sicurezza', 'chi', 'aula'], CMM: ['sicurezza', 'chi', 'aula'], GRU: ['sicurezza', 'chi', 'aula'],
  MMT: ['sicurezza3', 'chi', 'aula'], PLE: ['hero1', 'chi', 'aula'], PONT: ['hero1', 'sicurezza', 'chi'], QUOTA: ['hero1', 'sicurezza', 'chi'],
  CSP: ['sicurezza', 'hero1', 'chi', 'aula'], 'CSP-AGG': ['sicurezza', 'hero1', 'chi', 'aula'], 'LAV-CANT': ['hero1', 'sicurezza', 'sicurezza3', 'chi', 'aula'],
  'PREP-CANT': ['sicurezza', 'hero1', 'chi', 'aula'], 'RSPP-B-SP3': ['sicurezza', 'hero1', 'sicurezza3', 'chi'],
  'LAV-SPEC-A': ['sicurezza2', 'chi', 'aula', 'hero2'], 'LAV-SPEC-M': ['sicurezza2', 'chi', 'aula', 'hero2'],
  PREP: ['chi', 'aziende', 'aula', 'sicurezza2'], 'PREP-AGG': ['chi', 'aziende', 'aula', 'sicurezza2'], DLSPP: ['chi', 'aziende', 'aula', 'hero3'],
  RLS: ['chi', 'aziende', 'aula', 'cta'], FORM: ['aula', 'hero3', 'cta'], 'RSPP-B': ['chi', 'aziende', 'aula', 'sicurezza2', 'hero2'],
  'RSPP-B-SP1': NEUTRE, 'RSPP-B-SP2': NEUTRE, 'RSPP-B-SP4': NEUTRE, 'RSPP-B-SP5': ['hero2', 'laboratorio', 'chi', 'aula'], 'RSPP-C': ['aula', 'aziende', 'chi', 'cta'],
  HACCP: ['haccp', 'haccp2'], 'HACCP-AGG': ['haccp2', 'haccp'], 'HACCP-R': ['haccp', 'haccp2'], ISO22: ['haccp', 'haccp2', 'aziende'],
  ISO14: ['ambiente', 'ambiente2', 'aziende', 'chi'], AUD14: ['aziende', 'chi', 'ambiente'], RA: ['ambiente', 'ambiente2', 'chi', 'aziende'],
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
  [/\b(verniciat|prodotti vernicianti|cabin[ae] di verniciatura)/i, ['verniciatura', 'verniciatura2']],
  [/\b(saldat|fumi di saldatura)/i, ['saldatura', 'saldatura2']],
  [/\b(amianto|cemento-amianto)/i, ['amianto']],
  [/\b(depurat|acque reflue|fanghi di depurazione|trattamento delle acque)/i, ['depuratore', 'depuratore2']],
  [/\b(abbandon[oi] di rifiuti|discarica abusiva|traffico illecito|spedizion[ei] (illegal|transfrontalier))/i, ['abbandono_rifiuti']],
  [/\b(rifiuti pericolosi|deposito temporaneo|caratteristiche HP|classificazione (di un|dei) rifiut)/i, ['rifiuti_pericolosi']],
  [/\b(sversament|evento potenzialmente contaminante|panne)/i, ['sversamento', 'bonifica_sversamento']],
  [/\b(bonific|siti? contaminat|concentrazioni soglia|caratterizzazione del sito)/i, ['bonifica', 'bonifica2']],
  [/\b(campionament[oi] dell?e? acque|corpo idrico|corsi d.acqua|acque superficiali|scarich?[oi] idric)/i, ['campionamento_acque']],
  [/\b(analisi (delle|di) acque|campion[ei] d.acqua|autocontroll[oi] dell?o scaric)/i, ['analisi_campione']],
  [/\b(emission[ei] in atmosfera|camin[oi]|sistem[ia] di abbattimento|inquinamento atmosferico|medi impianti di combustione)/i, ['emissioni_industria', 'emissioni_camino', 'emissioni_impianto']],
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
// Argomento incendio/esplosione: nessuna immagine (trattazione esclusivamente tecnica e normativa)
const INCENDIO = /(incend|antincend|\bfuoc|fiamm|combustion|esplosi|ATEX|resistenza al fuoco|compartiment|reazione al fuoco)/i;
const SENZA_FOTO = new Set(['AI-1', 'AI-2', 'AI-3']); // corsi per addetti antincendio
const NO = '-';
const GENERICHE = new Set([REGOLE[REGOLE.length - 1][0]]); // regola «ambiente»: immagini simboliche, ammesse solo per copertine e sezioni
const SICUREZZA = new Set(['DL', 'DIR', 'LAV-GEN', 'LAV-AGG', 'RSPP-A', 'RSPP-AGG', 'RSPP-B', 'RSPP-C', 'LAV-SPEC-A', 'LAV-SPEC-M', 'PREP', 'PREP-AGG', 'DLSPP', 'RLS']);
function scegli(C) {
  const tutto = SENZA_FOTO.has(C.id);
  const amm = tutto ? [] : (AMMESSE[C.id] || ['chi', 'aula', 'aziende']);
  const sch = {}, mod = {}, usate = {};
  C.moduli.forEach((m, mi) => {
    const testoMod = m.titolo || '';
    mod[m.id] = (tutto || INCENDIO.test(testoMod)) ? NO : scegliUna(testoMod, amm, C.id, usate, mi);
    m.schermate.forEach((s, si) => {
      // priorità al titolo; in subordine l’attacco della schermata; mai l’intero testo (troppi richiami incidentali)
      if (tutto || INCENDIO.test((s.tit || '') + ' ' + (s.lead || s.scena || ''))) { sch[`${m.id}-${si}`] = NO; return; }
      // nelle schermate l’immagine compare solo se un criterio specifico ne garantisce la pertinenza; altrimenti trattazione solo testuale
      sch[`${m.id}-${si}`] = scegliUna(s.tit || '', amm, C.id, usate, mi * 7 + si, true, true) || scegliUna(s.lead || s.scena || '', amm, C.id, usate, mi * 7 + si, true, true) || NO;
    });
  });
  return { sch, mod, ammesse: amm };
}
function scegliUna(t, amm, id, usate, k, soloRegola, specifica) {
  for (const [re, foto] of UNIVERSALI) if (re.test(t)) return foto[(usate[re] = (usate[re] || 0) + 1) % foto.length];
  for (const [re, foto] of REGOLE) if (re.test(t)) {
    if (specifica && GENERICHE.has(re)) continue;
    const ok = foto.filter(f => amm.includes(f) || (SICUREZZA.has(id) && !/^(haccp|energia|ambiente)/.test(f) && !(amm === NEUTRE)));
    if (ok.length) { const f = ok[(usate[re] = (usate[re] || 0) + 1) % ok.length]; return f; }
  }
  return soloRegola ? null : amm[k % amm.length];
}
const DESCRIZIONI = { sorveglianza_sanitaria: 'esame della vista nell’ambito della sorveglianza sanitaria', lavori_quota: 'lavoratore in copertura con casco, imbracatura e linea di ancoraggio', biogas: 'impianto di biogas', condominio_ftv: 'edificio residenziale con impianto fotovoltaico in copertura', discarica: 'discarica con compattatore', emissioni_camino: 'camino industriale con emissioni', emissioni_impianto: 'impianto industriale con camini', emissioni_industria: 'stabilimento industriale con emissioni in atmosfera', verniciatura: 'operatore in cabina di verniciatura con tuta e maschera', verniciatura2: 'cabina di verniciatura per autoveicoli', saldatura: 'saldatore con maschera di protezione', saldatura2: 'saldatura con DPI', depuratore: 'vasca di un impianto di depurazione', depuratore2: 'impianto di depurazione visto dall’alto', rifiuti_pericolosi: 'fusti di rifiuti pericolosi su pallet', abbandono_rifiuti: 'fusti di rifiuti abbandonati', sversamento: 'panne di contenimento di uno sversamento in un corso d’acqua', bonifica_sversamento: 'operatori in bonifica di uno sversamento', bonifica: 'campionamento di terreno contaminato', bonifica2: 'scavo di caratterizzazione del suolo', stoccaggio_chimici: 'magazzino di fusti di sostanze chimiche', defibrillatore: 'defibrillatore semiautomatico in teca', agricoltura: 'trattore al lavoro in campo', amianto: 'copertura in lastre di cemento-amianto', giustizia: 'Palazzo di Giustizia, sede della Corte di cassazione', campionamento_acque: 'tecnico che campiona le acque di un fiume', analisi_campione: 'tecnico che esamina un campione d’acqua', haccp: 'alimenti freschi in ambiente di preparazione', haccp2: 'alimenti freschi e materie prime', energia: 'impianto fotovoltaico', energia2: 'parco eolico', energia3: 'moduli fotovoltaici', laboratorio: 'laboratorio chimico', hero2: 'laboratorio chimico', ambiente: 'tema ambientale', ambiente2: 'tema ambientale', ambiente3: 'tema ambientale', chi: 'tecnico che consulta elaborati progettuali', aula: 'aula di formazione', cta: 'aula di formazione', hero3: 'aula di formazione', aziende: 'riunione di lavoro', sicurezza2: 'lavorazione del legno con DPI', hero1: 'cantiere edile', sicurezza: 'cantiere edile', sicurezza3: 'macchina movimento terra' };
module.exports = { DESCRIZIONI, scegli, NO, INCENDIO, AMMESSE, CATALOGO };
