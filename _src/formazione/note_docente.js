/* Note del formatore per aula e videoconferenza (regola dei 30 secondi).
   Ogni diapositiva riceve quattro sezioni:
   [TITOLO E VISUAL] · [GRAFICO / INFOGRAFICA] · [DINAMICA D'AULA – entro 30 s] · [SCRIPT DEL FORMATORE]
   Le domande sono generate dai contenuti della diapositiva (dati normativi e tecnici presenti nel testo),
   quindi la risposta corretta è sempre quella riportata nel materiale del corso.
   © 2026 dr. Jonathan D'Eugenio */
'use strict';

const UNITA = 'ore|giorni|mesi|anni|minuti|secondi|kWh|kWp|kW|MWh|MW|mg\\/Nm³|µg\\/m³|mg\\/m³|mg\\/kg|g\\/h|kg\\/h|kg|tonnellate|m²|m³|m|cm|mm|€\\/MWh|euro|€|°C|dB\\(A\\)|dB|lavoratori|quote|%';
const RE_TOK = [
  new RegExp('(?<![\\w.,])(\\d{1,3}(?:\\.\\d{3})*(?:,\\d+)?)\\s?(' + UNITA + ')(?![\\wà-ù])', 'g'),
  /\bartt?\.\s?\d+(?:-(?:bis|ter|quater|quinquies|sexies|septies|octies|novies|decies|undecies|duodecies|terdecies|quaterdecies|quinquiesdecies|sexiesdecies))?(?:\.\d+)?/g,
  /\b(?:D\.lgs\.|D\.M\.|D\.P\.R\.|L\.|D\.L\.)\s?\d+\/\d{4}/g,
  /\b(?:Reg\.|Dir\.)\s(?:\((?:UE|CE)\)\s)?\d{2,4}\/\d{1,4}/g,
  /\bUNI(?:\sCEI)?(?:\sEN)?(?:\sISO)?(?:\/IEC)?\s\d{3,5}(?:-\d)?/g,
  /\bH\d{3}\b/g
];
const classe = t => { for (let k = 0; k < RE_TOK.length; k++) { RE_TOK[k].lastIndex = 0; const m = RE_TOK[k].exec(t); if (m && m[0] === t) return k === 0 ? 'n:' + m[2] : 'r' + k; } return null; };
const frasi = s => [s.lead, ...(s.punti || []), s.appro].filter(Boolean).flatMap(x => String(x).split(/(?<=[.;:])\s+(?=[A-ZÀ-Ù])/)).map(x => x.trim()).filter(x => x.length > 25 && x.length < 260);
const tokens = f => { const o = []; RE_TOK.forEach(re => { re.lastIndex = 0; let m; while ((m = re.exec(f))) o.push(m[0]); }); return [...new Set(o)]; };
// generatore deterministico (stessa diapositiva → stessa domanda a ogni rigenerazione)
const hash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const ordina = (a, seme) => a.map((x, i) => [hash(seme + i + x), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);

const NEAR = /(infortun|incident|guast|sversament|cadut|ribaltament|schiacciament|esposizion|intossica|ustion|scivol|investiment|superament|emergenz|perdita|rottura)/i;

function preparaCorso(C) {
  const corpus = {};
  C.moduli.forEach(m => m.schermate.forEach(s => frasi(s).forEach(f => tokens(f).forEach(t => { const c = classe(t); if (c) (corpus[c] = corpus[c] || new Set()).add(t); }))));
  return corpus;
}

function domandaFlash(sc, corpus, seme) {
  for (const f of ordina(frasi(sc), seme)) for (const t of ordina(tokens(f), seme)) {
    const c = classe(t); if (!c) continue;
    const alt = ordina([...(corpus[c] || [])].filter(x => x !== t && !f.includes(x)), seme).slice(0, 2);
    if (alt.length < 2) continue;
    const opz = ordina([t, ...alt], seme + 'o');
    return { testo: f.replace(t, '______'), opz, giusta: t, frase: f };
  }
  return null;
}

const descriviVisual = (nomeFoto, catalogo, incendio) => {
  if (incendio) return 'Nessuna fotografia (argomento incendio/esplosione): la diapositiva usa solo schemi tecnici, tabelle e riferimenti normativi.';
  if (!nomeFoto) return 'Diapositiva con infografica a punti numerati e schema grafico; nessuna fotografia pertinente disponibile in libreria.';
  const d = catalogo && catalogo[nomeFoto];
  return 'Fotografia: ' + (d ? d : nomeFoto) + '. Richiamare l’immagine per ancorare il concetto alla realtà operativa.';
};

const GRAFICO = {
  grafico: s => ({ flusso: 'Diagramma di flusso a fasi numerate con tempi normativi.', calcolo: 'Simulazione di calcolo con tabella di casi e confronto con il limite.', soglie: 'Scala a zone con soglie normative e indicazione delle misure per ciascuna zona.', intervalli: 'Grafico a intervalli (minimo–massimo) per confronto immediato.' })[s.grafico.tipo],
  testo: s => `Infografica a ${(s.punti || []).length} punti numerati, con riferimento normativo in evidenza${s.appro ? ' e riquadro di approfondimento' : ''}.`,
  articolo: () => 'Testo normativo commentato, con evidenziazione progressiva dei commi.',
  matrice: () => 'Matrice di rischio P × D a 4 × 4 con scala cromatica dei livelli e criteri di accettabilità.',
  vf: s => `Tabella di ${(s.voci || []).length} affermazioni da qualificare come vere o false.`,
  abbina: s => `Schema di associazione a due colonne (${(s.coppie || []).length} coppie).`,
  caso: () => 'Scenario operativo con opzioni di scelta e feedback motivato.',
  pittogrammi: () => 'Pittogrammi ufficiali (UNI EN ISO 7010 / CLP) con significato e forma.',
  definizioni: () => 'Glossario a schede con le definizioni normative.',
  verifica: () => 'Domande di verifica intermedia a risposta multipla.'
};

function dinamica(sc, corpus, seme, incendio) {
  const r = [];
  if (sc.t === 'caso' && sc.scena) {
    r.push(`Analisi di un caso (near miss): leggere lo scenario e chiedere all’aula, prima di mostrare le opzioni: «Che cosa fareste voi, e chi avvisereste?». Raccogliere due o tre risposte, poi votare per alzata di mano o sondaggio (${(sc.opz || []).length} opzioni).`);
    return r;
  }
  if (sc.t === 'grafico') {
    const g = sc.grafico;
    if (g.tipo === 'calcolo') r.push('Stima dell’aula: prima di mostrare la tabella, chiedere ai partecipanti di stimare il risultato del primo caso; confrontare le stime con il calcolo e commentare l’effetto della variabile modificata.');
    if (g.tipo === 'flusso') r.push('Ricostruzione guidata: chiedere all’aula di indicare, prima di mostrarle, la fase successiva e il relativo termine; in videoconferenza usare la chat.');
    if (g.tipo === 'soglie') r.push('Collocazione in scala: proporre tre valori (sotto, tra e sopra le soglie) e far indicare all’aula la zona e le misure conseguenti.');
    if (g.tipo === 'intervalli') r.push('Confronto: chiedere quale voce ritengono più grave o più lunga e perché; poi commentare gli intervalli reali.');
    return r;
  }
  if (sc.t === 'vf') { r.push('Votazione rapida per ogni affermazione: pollice su / pollice giù in aula, oppure sondaggio Vero/Falso in videoconferenza. Commentare le affermazioni con maggior disaccordo.'); return r; }
  if (sc.t === 'abbina') { r.push('Chiedere a un partecipante (o alla chat) di proporre le associazioni una alla volta; l’aula conferma o corregge prima della soluzione.'); return r; }
  const q = domandaFlash(sc, corpus, seme);
  if (q) r.push(`Domanda flash (entro 30 s, a voce o con sondaggio): «${q.testo}» Opzioni: ${q.opz.map((o, i) => String.fromCharCode(65 + i) + ') ' + o).join('; ')}. Risposta: ${q.giusta}.`);
  if ((sc.punti || []).length >= 3 && !incendio) r.push(`Sondaggio di contesto: «Quale di questi punti è più critico nella vostra azienda?» (${sc.punti.length} opzioni, una per punto). Partire dal punto più votato per l’approfondimento.`);
  if (NEAR.test((sc.tit || '') + ' ' + (sc.lead || '') + ' ' + (sc.punti || []).join(' '))) r.push('Near miss: chiedere se qualcuno ha assistito a un quasi-incidente o a una situazione anomala legata a questo tema; analizzarne in 2 minuti cause e misure che l’avrebbero evitato.');
  if (!r.length) r.push(`Domanda aperta all’aula: «Come si applica “${sc.tit}” nella vostra realtà lavorativa? Chi ne è responsabile?»`);
  return r;
}

function script(sc) {
  if (sc.nar && sc.nar.length > 60) return sc.nar;
  const p = [sc.lead, ...(sc.punti || [])].filter(Boolean);
  return p.length ? p.join(' ') : (sc.scena || '');
}

/* note complete di una diapositiva */
function noteDiapositiva(sc, opz) {
  const { corpus, seme, foto, catalogo, incendio, extra } = opz;
  const out = [];
  out.push('[TITOLO E VISUAL]\n' + (sc.tit || '') + '\n' + descriviVisual(foto, catalogo, incendio));
  out.push('[GRAFICO / INFOGRAFICA]\n' + ((GRAFICO[sc.t] || GRAFICO.testo)(sc)));
  out.push('[DINAMICA D’AULA – entro 30 secondi]\n' + dinamica(sc, corpus, seme, incendio).map(x => '• ' + x).join('\n'));
  out.push('[SCRIPT DEL FORMATORE]\n' + script(sc) + (extra ? '\n\n' + extra : ''));
  const rif = [sc.appro ? 'Approfondimento: ' + sc.appro : '', (sc.rif || sc.art) ? 'Riferimenti: ' + (sc.art || sc.rif) : ''].filter(Boolean).join('\n');
  if (rif) out.push('[RIFERIMENTI]\n' + rif);
  return out.join('\n\n');
}

module.exports = { preparaCorso, noteDiapositiva, domandaFlash };
