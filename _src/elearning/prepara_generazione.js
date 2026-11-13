/* Prepara la pagina GENERA_NARRAZIONE_GIUSEPPE.html con i testi da sintetizzare (già adattati per la pronuncia).
   Uso: node prepara_generazione.js elenco.json uscita.html   (elenco: {CORSO: {chiave: testo}})  – © 2026 dr. Jonathan D'Eugenio */
const fs = require('fs'), path = require('path'); const { pronuncia } = require('./pronuncia.js');
const [, , IN, OUT] = process.argv; const D = JSON.parse(fs.readFileSync(IN, 'utf8'));
const V = {}; let n = 0, c = 0;
for (const [id, o] of Object.entries(D)) { V[id] = {}; for (const [k, t] of Object.entries(o)) { V[id][k] = pronuncia(t); n++; c += t.length; } }
let h = fs.readFileSync(path.join(__dirname, 'modello_generazione.html'), 'utf8');
h = h.replace('__N__', n).replace('__C__', Math.round(c / 1000) * 1000 > 999 ? (Math.round(c / 1000) * 1000).toLocaleString('it-IT') : c).replace('__CORSI__', Object.keys(D).length).replace('__DATI__', JSON.stringify(V).replace(/<\//g, '<\\/'));
fs.writeFileSync(OUT, h); console.log(`${n} schermate, ${c} caratteri, ${Object.keys(D).length} corsi → ${OUT}`);
