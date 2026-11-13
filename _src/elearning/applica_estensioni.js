/* Inserisce nel corso le schermate di arricchimento (estensioni/<CORSO>/*.json). Idempotente.
   Uso: node applica_estensioni.js CORSO   – © 2026 dr. Jonathan D'Eugenio */
const fs = require('fs'), path = require('path'); const ID = process.argv[2];
const f = path.join(__dirname, 'corsi', ID, 'corso.js'); const src = fs.readFileSync(f, 'utf8');
const head = (src.match(/^\/\*[\s\S]*?\*\/\s*/) || [''])[0];
global.window = {}; eval(src); const C = window.CORSO;
C.moduli.forEach(m => { m.schermate = m.schermate.filter(s => !s.est); });
const dir = path.join(__dirname, 'estensioni', ID); let n = 0, car = 0;
if (fs.existsSync(dir)) for (const nome of fs.readdirSync(dir).filter(x => x.endsWith('.json')).sort((a, b) => a.localeCompare(b, 'it', { numeric: true }))) {
  const E = JSON.parse(fs.readFileSync(path.join(dir, nome), 'utf8')); const mid = nome.split('-')[0];
  const m = C.moduli.find(x => x.id === mid); if (!m) throw new Error(nome + ': modulo ' + mid + ' assente');
  let i = m.schermate.findIndex(s => s.tit === E.dopo); if (i < 0) throw new Error(nome + ': schermata «' + E.dopo + '» non trovata');
  // dopo le estensioni già inserite a seguito della stessa schermata
  while (i + 1 < m.schermate.length && m.schermate[i + 1].est && m.schermate[i + 1].ancora === E.dopo) i++;
  const nuove = E.schermate.map(s => Object.assign({ foto: false }, s, { est: true, ancora: E.dopo }));
  m.schermate.splice(i + 1, 0, ...nuove); n += nuove.length; car += nuove.reduce((a, s) => a + (s.nar || '').length, 0);
}
fs.writeFileSync(f, head + 'window.CORSO = ' + JSON.stringify(C, null, 1) + ';\n');
console.log(`${ID}: ${n} schermate di arricchimento, ${car} caratteri di narrazione`);
