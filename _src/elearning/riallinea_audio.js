/* Riallinea audio.json al corso.js dopo inserimenti/spostamenti di schermate: abbina le voci per testo narrato.
   Scrive l'elenco delle narrazioni mancanti in narrazioni/mancanti_<ID>.json  – © 2026 dr. Jonathan D'Eugenio
   Uso: node riallinea_audio.js ID */
const fs = require('fs'), path = require('path'); const ID = process.argv[2];
global.window = {}; eval(fs.readFileSync(path.join(__dirname, 'corsi', ID, 'corso.js'), 'utf8')); const C = window.CORSO;
const fa = path.join(__dirname, 'corsi', ID, 'audio.json'); const A = fs.existsSync(fa) ? JSON.parse(fs.readFileSync(fa, 'utf8')) : { voce: 'azure:it-IT-GiuseppeMultilingualNeural', schermate: {} };
const norm = t => t.replace(/\s+/g, ' ').trim();
const frasi = t => (t.match(/[^.!?;]+[.!?;]*/g) || []).map(x => x.trim()).filter(Boolean).join(' ');
const byTxt = {}; for (const [k, v] of Object.entries(A.schermate)) byTxt[norm(v.frasi.map(f => f.t).join(' '))] = v;
const testi = {}; for (const m of C.moduli) m.schermate.forEach((s, i) => { if (s.nar) testi[`${m.id}-${i}`] = s.nar; });
const tf = C.testFinale; testi['TF-0'] = `Si accede al test finale. Il test comprende ${tf.domande} domande estratte casualmente, con le risposte in ordine casuale. Il superamento richiede almeno il ${tf.soglia} per cento di risposte corrette. Sono disponibili ${tf.tentativi} tentativi.`;
const out = { voce: A.voce, schermate: {} }, manca = {};
for (const [k, t] of Object.entries(testi)) { const v = byTxt[norm(frasi(t))]; if (v) out.schermate[k] = v; else if (k === 'TF-0' && A.schermate['TF-0']) out.schermate[k] = A.schermate['TF-0']; else manca[k] = t; }
fs.writeFileSync(fa, JSON.stringify(out)); fs.writeFileSync(path.join(__dirname, 'narrazioni', 'mancanti_' + ID + '.json'), JSON.stringify(manca, null, 1));
console.log(`${ID}: ${Object.keys(out.schermate).length} voci riallineate, ${Object.keys(manca).length} da generare (${Object.values(manca).join(' ').length} caratteri)`);
