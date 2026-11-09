/* Test di apprendimento: Word (aula) + GIFT (import Moodle) – © 2026 dr. Jonathan D'Eugenio
   Uso: node genera_test.js LAV-GEN */
const fs = require('fs'), path = require('path');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, BorderStyle, Header, Footer, PageNumber, ImageRun, PageBreak, TableLayoutType, VerticalAlign } = require('docx');
global.window = {}; eval(fs.readFileSync('/home/claude/astra-portale/sito/assets/data.js', 'utf8')); const D = window.ASTRA;
const id = process.argv[2] || 'LAV-GEN', c = D.corsi.find(x => x.id === id), T = require('./contenuti/' + id + '.js');
/* risposte mescolate in modo riproducibile: la chiave del Word e il file Moodle coincidono */
let seme = [...id].reduce((a, ch) => a * 31 + ch.charCodeAt(0), 7) >>> 0; const rnd = () => (seme = (seme * 1103515245 + 12345) >>> 0) / 4294967296;
T.test = T.test.map(([q, opz, k]) => { const ord = opz.map((o, i) => [o, i]); for (let i = ord.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ord[i], ord[j]] = [ord[j], ord[i]]; }
  return [q, ord.map(x => x[0]), ord.findIndex(x => x[1] === k)]; });
const OUT = path.join(__dirname, 'test'); fs.mkdirSync(OUT, { recursive: true });
const LOGO = fs.readFileSync('/home/claude/astra-portale/loghi/astra_logo_4K.png');
const FM = 'Eras Medium ITC', FB = 'Eras Bold ITC', W = 9638, BO = { style: BorderStyle.SINGLE, size: 2, color: '7F9CA4' }, BB = { top: BO, bottom: BO, left: BO, right: BO };
const r = (t, o = {}) => new TextRun({ text: t, font: o.b ? FB : FM, size: o.s || 20, color: o.c || '1A2A30' });
const cell = (t, w, o = {}) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: BB, verticalAlign: VerticalAlign.CENTER, margins: { top: 60, bottom: 60, left: 100, right: 100 },
  shading: o.scura ? { type: ShadingType.CLEAR, color: 'auto', fill: '0F3C47' } : undefined,
  children: [new Paragraph({ alignment: o.al || AlignmentType.LEFT, children: [new TextRun({ text: t, font: o.scura ? FB : FM, size: 18, color: o.scura ? 'FFFFFF' : '1A2A30' })] })] });
const L = String.fromCharCode;

const corpo = [
  new Paragraph({ children: [new TextRun({ text: 'TEST DI APPRENDIMENTO', font: FB, size: 32, color: '0F3C47' })], spacing: { after: 60 } }),
  new Paragraph({ children: [r(`${c.titolo} · ${c.ore} ore · codice ${c.id}`, { c: 'C81F26', b: true })], spacing: { after: 200 } }),
  new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [2800, W - 2800], layout: TableLayoutType.FIXED, rows: [['Cognome e nome', ''], ['Codice fiscale', ''], ['Data', ''], ['Esito', `Superato con almeno ${Math.ceil(T.test.length * 0.7)} risposte corrette su ${T.test.length} (70%)`]].map(([a, b]) => new TableRow({ children: [cell(a, 2800, { scura: true }), cell(b, W - 2800)] })) }),
  new Paragraph({ spacing: { before: 200, after: 160 }, alignment: AlignmentType.JUSTIFIED, children: [r('Per ciascuna domanda barrare una sola risposta. Non sono ammesse correzioni.', { s: 18, c: '3E4F56' })] })];
T.test.forEach(([q, opz], i) => {
  corpo.push(new Paragraph({ keepNext: true, spacing: { before: 140, after: 60 }, children: [r(`${i + 1}. ${q}`, { b: true })] }));
  opz.forEach((o, j) => corpo.push(new Paragraph({ keepNext: j < opz.length - 1, indent: { left: 360 }, spacing: { after: 30 }, children: [r(`☐  ${L(97 + j)}) ${o}`, { s: 19 })] })));
});
corpo.push(new Paragraph({ children: [new PageBreak()] }), new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: 'CHIAVE DI CORREZIONE – riservata al docente', font: FB, size: 24, color: '0F3C47' })] }));
const cw = [1200, 1200, 1200, 1200, 1200, 1200, 1200, W - 8400];
const righe = []; for (let i = 0; i < T.test.length; i += 7) righe.push(new TableRow({ children: Array.from({ length: 8 }, (_, k) => { const n = i + k; return k < 7 && n < T.test.length ? cell(`${n + 1} – ${L(97 + T.test[n][2])}`, cw[k], { al: AlignmentType.CENTER }) : cell('', cw[k]); }) }));
corpo.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cw, layout: TableLayoutType.FIXED, rows: righe }));

const doc = new Document({ creator: 'dr. Jonathan D\'Eugenio', title: 'Test di apprendimento – ' + c.titolo, styles: { default: { document: { run: { font: FM, size: 20 } } } },
  sections: [{ properties: { page: { margin: { top: 1300, bottom: 1000, left: 1134, right: 1134, header: 500, footer: 480 } } },
    headers: { default: new Header({ children: [new Paragraph({ tabStops: [{ type: 'right', position: W }], children: [new ImageRun({ type: 'png', data: LOGO, transformation: { width: 96, height: 41 } }), new TextRun({ text: '\t' }), new TextRun({ text: `Test di apprendimento · ${c.id}`, font: FM, size: 16, color: '3E4F56' })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ tabStops: [{ type: 'right', position: W }], children: [new TextRun({ text: '© 2026 dr. Jonathan D\'Eugenio', font: FM, size: 16, color: '3E4F56' }), new TextRun({ text: '\t' }), new TextRun({ children: ['Pag. ', PageNumber.CURRENT, ' di ', PageNumber.TOTAL_PAGES], font: FM, size: 16, color: '3E4F56' })] })] }) },
    children: corpo }] });
(async () => {
  const f = path.join(OUT, `Test_${id}.docx`); fs.writeFileSync(f, await Packer.toBuffer(doc)); console.log(f);
  const esc = s => s.replace(/([~=#{}:\\])/g, '\\$1');
  const gift = `// Test di apprendimento – ${c.titolo} (${c.id}) – © 2026 dr. Jonathan D'Eugenio\n$CATEGORY: $course$/ASTRA/${c.id}\n\n` +
    T.test.map(([q, opz, k], i) => `::${c.id}-${String(i + 1).padStart(2, '0')}::${esc(q)} {\n` + opz.map((o, j) => `  ${j === k ? '=' : '~'}${esc(o)}`).join('\n') + '\n}\n').join('\n');
  fs.writeFileSync(path.join(OUT, `Test_${id}_Moodle.gift.txt`), gift); console.log('GIFT ok');
})();
