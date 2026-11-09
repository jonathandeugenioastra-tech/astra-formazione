/* Generatore slide dei corsi ASTRA – © 2026 dr. Jonathan D'Eugenio
   Uso: node genera_slide.js LAV-GEN */
const fs = require('fs'), path = require('path');
const pptxgen = require('pptxgenjs');
const React = require('react'), RDS = require('react-dom/server'), sharp = require('sharp');
const FA = require('react-icons/fa6');
const SK = '/root/.claude/skills/synced/42984687-dbbf-4081-bd1d-7d44daefd9ba_7df5fb13-7c4b-446d-9807-c700f637dd6a/pptx';
const { applyTheme } = require(SK + '/scripts/apply_theme.js');
global.window = {}; eval(fs.readFileSync('/home/claude/astra-portale/sito/assets/data.js', 'utf8')); const D = window.ASTRA;

const THEME = { name: 'ASTRA Formazione', headFontFace: 'Eras Bold ITC', bodyFontFace: 'Eras Medium ITC',
  colors: { dk1: '13232A', lt1: 'FFFFFF', dk2: '0F3C47', lt2: 'E9F2F4', accent1: 'C81F26', accent2: '0F3C47', accent3: '2E7D4F', accent4: 'F2B300', accent5: '1F5FA8', accent6: '5A6B72', hlink: '1F5FA8', folHlink: '5A6B72' } };
const LOGO = 'image/png;base64,' + fs.readFileSync('/home/claude/astra-portale/loghi/astra_logo_4K.png').toString('base64');
const JD = 'image/png;base64,' + fs.readFileSync('/home/claude/astra-portale/loghi/jd_logo_bianco_4K.png').toString('base64');
const COPY = '© 2026 dr. Jonathan D\'Eugenio';
const icone = {};
async function ico(nome, col = 'FFFFFF') {
  const k = nome + col; if (icone[k]) return icone[k];
  const svg = RDS.renderToStaticMarkup(React.createElement(FA[nome], { color: '#' + col, size: 256 }));
  return icone[k] = 'image/png;base64,' + (await sharp(Buffer.from(svg)).png().toBuffer()).toString('base64');
}

async function genera(id) {
  const c = D.corsi.find(x => x.id === id), T = require('./contenuti/' + id + '.js');
  const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; pres.author = 'dr. Jonathan D\'Eugenio'; pres.company = 'ASTRA S.r.l.'; pres.title = c.titolo;
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  const C = pres.SchemeColor;
  // ---------- layout ----------
  pres.defineSlideMaster({ title: 'Titolo', background: { color: '0F3C47' }, objects: [
    { image: { x: 8.15, y: 0.35, w: 1.45, h: 1.45, data: JD } },
    { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 1.75, w: 8.8, h: 1.4, fontSize: 38, bold: true, color: C.background1, valign: 'bottom', align: 'left', margin: 0 }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: 0.6, y: 3.25, w: 8.8, h: 0.9, fontSize: 16, color: C.background2, valign: 'top', margin: 0 }, text: '' } },
    { text: { text: COPY, options: { x: 0.6, y: 5.1, w: 5, h: 0.3, fontSize: 10, color: 'BFD8DE', margin: 0 } } }] });
  pres.defineSlideMaster({ title: 'Sezione', background: { color: '0F3C47' }, objects: [
    { placeholder: { options: { name: 'body', type: 'body', x: 0.6, y: 1.55, w: 3, h: 0.5, fontSize: 16, bold: true, color: 'FF8A8E', margin: 0 }, text: '' } },
    { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 2.05, w: 8.8, h: 1.6, fontSize: 36, bold: true, color: C.background1, valign: 'top', align: 'left', margin: 0 }, text: '' } },
    { text: { text: COPY, options: { x: 0.6, y: 5.1, w: 5, h: 0.3, fontSize: 10, color: 'BFD8DE', margin: 0 } } }], slideNumber: { x: 9.0, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, color: 'BFD8DE', align: 'right' } });
  pres.defineSlideMaster({ title: 'Contenuto', background: { color: 'FFFFFF' }, margin: [0.5, 0.5, 0.6, 0.5], objects: [
    { placeholder: { options: { name: 'title', type: 'title', x: 0.5, y: 0.3, w: 7.6, h: 0.75, fontSize: 26, bold: true, color: C.text2, valign: 'middle', align: 'left', margin: 0 }, text: '' } },
    { image: { x: 8.45, y: 0.42, w: 1.05, h: 1.05 * 459 / 1066, data: LOGO } },
    { text: { text: COPY, options: { x: 0.5, y: 5.2, w: 4, h: 0.25, fontSize: 9, color: '5A6B72', margin: 0 } } },
    { text: { text: c.titolo, options: { x: 4.5, y: 5.2, w: 4.3, h: 0.25, fontSize: 9, color: '5A6B72', align: 'right', margin: 0 } } }],
    slideNumber: { x: 8.95, y: 5.2, w: 0.55, h: 0.25, fontSize: 9, color: '5A6B72', align: 'right' } });

  const nuova = (sez) => pres.addSlide({ masterName: 'Contenuto', sectionTitle: sez });
  const card = (s, x, y, w, h, fill = 'E9F2F4') => s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: fill }, rectRadius: 0.12, objectName: 'scheda' });
  const cerchio = async (s, x, y, d, nome, fill = '0F3C47', col = 'FFFFFF') => { s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } }); s.addImage({ data: await ico(nome, col), x: x + d * 0.25, y: y + d * 0.25, w: d * 0.5, h: d * 0.5 }); };
  const txt = (s, t, o) => s.addText(t, { isTextBox: true, margin: 0, valign: 'top', fontSize: 13, color: '13232A', ...o });

  // ---------- copertina ----------
  pres.addSection({ title: 'Introduzione' });
  let s = pres.addSlide({ masterName: 'Titolo', sectionTitle: 'Introduzione' });
  s.addText(c.titolo, { placeholder: 'title' });
  s.addText(`Corso di ${c.ore} ore · ${c.rif}`, { placeholder: 'body' });
  s.addNotes(`Benvenuti al corso ${c.titolo}. ${c.pres}`);
  // ---------- obiettivi e struttura ----------
  s = nuova('Introduzione'); s.addText('Obiettivi e struttura del corso', { placeholder: 'title' });
  card(s, 0.5, 1.3, 4.3, 3.65); txt(s, 'Obiettivi', { x: 0.75, y: 1.5, w: 3.8, h: 0.4, fontSize: 16, bold: true, color: '0F3C47' });
  txt(s, c.obj.map((o, i) => ({ text: o, options: { bullet: true, breakLine: i < c.obj.length - 1, paraSpaceAfter: 6 } })), { x: 0.75, y: 1.95, w: 3.85, h: 2.9, fontSize: 13 });
  T.sezioni.forEach((z, i) => { const y = 1.3 + i * 0.74; s.addShape(pres.shapes.OVAL, { x: 5.15, y: y + 0.07, w: 0.5, h: 0.5, fill: { color: 'C81F26' }, line: { color: 'C81F26' } });
    txt(s, String(i + 1), { x: 5.15, y: y + 0.07, w: 0.5, h: 0.5, align: 'center', valign: 'middle', fontSize: 15, bold: true, color: 'FFFFFF' });
    txt(s, z.titolo, { x: 5.85, y: y + 0.02, w: 3.65, h: 0.6, valign: 'middle', fontSize: 13, bold: true, color: '0F3C47' }); });
  s.addNotes('Il corso è organizzato in moduli. Al termine di ciascun modulo sono presenti domande di verifica intermedia; alla fine del corso si svolge il test finale di apprendimento.');

  // ---------- sezioni ----------
  for (const [i, z] of T.sezioni.entries()) {
    pres.addSection({ title: z.titolo });
    s = pres.addSlide({ masterName: 'Sezione', sectionTitle: z.titolo });
    s.addText(`MODULO ${i + 1}`, { placeholder: 'body' }); s.addText(z.titolo, { placeholder: 'title' });
    s.addNotes(`Modulo ${i + 1}: ${z.titolo}.`);
    for (const d of z.slide) {
      s = nuova(z.titolo); s.addText(d.titolo, { placeholder: 'title' }); s.addNotes(d.note || '');
      if (d.tipo === 'definizioni') {
        for (const [k, [ic, t, desc]] of d.voci.entries()) { const x = 0.5 + (k % 2) * 4.6, y = 1.3 + Math.floor(k / 2) * 1.85;
          card(s, x, y, 4.4, 1.7); await cerchio(s, x + 0.25, y + 0.25, 0.7, ic);
          txt(s, t, { x: x + 1.15, y: y + 0.25, w: 3.05, h: 0.4, fontSize: 16, bold: true, color: '0F3C47' });
          txt(s, desc, { x: x + 1.15, y: y + 0.68, w: 3.05, h: 0.95, fontSize: 12 }); }
      } else if (d.tipo === 'formula') {
        card(s, 0.5, 1.3, 4.4, 3.65, '0F3C47');
        txt(s, d.formula, { x: 0.5, y: 1.6, w: 4.4, h: 1.1, align: 'center', valign: 'middle', fontSize: 54, bold: true, color: 'FFFFFF' });
        d.spiega.forEach(([k, v], j) => { txt(s, [{ text: k + '  ', options: { bold: true, color: 'FF8A8E' } }, { text: v, options: { color: 'FFFFFF' } }], { x: 0.85, y: 3.0 + j * 0.55, w: 3.8, h: 0.45, fontSize: 14 }); });
        const col = [['ACF86E', 'FFFF00', 'FFC000'], ['FFFF00', 'FFC000', 'EE0000'], ['FFC000', 'EE0000', 'C00000']];
        txt(s, 'Matrice P × D', { x: 5.35, y: 1.3, w: 4, h: 0.35, fontSize: 14, bold: true, color: '0F3C47' });
        for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) { const v = (3 - r) * (q + 1), fc = col[2 - r][q];
          s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.85 + q * 1.0, y: 1.75 + r * 0.82, w: 0.92, h: 0.74, fill: { color: fc }, line: { color: 'FFFFFF' }, rectRadius: 0.08 });
          txt(s, String(v), { x: 5.85 + q * 1.0, y: 1.75 + r * 0.82, w: 0.92, h: 0.74, align: 'center', valign: 'middle', fontSize: 18, bold: true, color: ['EE0000', 'C00000', 'FFC000'].includes(fc) ? 'FFFFFF' : '13232A' }); }
        txt(s, 'P →', { x: 5.3, y: 1.75, w: 0.5, h: 2.4, valign: 'middle', fontSize: 12, color: '5A6B72' });
        txt(s, 'D →', { x: 5.85, y: 4.25, w: 2.9, h: 0.3, align: 'center', fontSize: 12, color: '5A6B72' });
        txt(s, d.testo, { x: 5.35, y: 4.55, w: 4.15, h: 0.5, fontSize: 11, color: '3E4F56' });
      } else if (d.tipo === 'gerarchia') {
        d.voci.forEach((v, j) => { const w = 8.6 - j * 1.2, x = 0.5 + (9 - w) / 2, y = 1.3 + j * 0.62;
          const f = ['0F3C47', '1C5563', '2B6E7E', '5A8C98', 'C81F26'][j];
          s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.52, fill: { color: f }, line: { color: f }, rectRadius: 0.1 });
          txt(s, `${j + 1}. ${v}`, { x, y, w, h: 0.52, align: 'center', valign: 'middle', fontSize: 14, bold: true, color: 'FFFFFF' }); });
        txt(s, d.nota, { x: 0.5, y: 4.55, w: 9, h: 0.4, align: 'center', fontSize: 12, color: '3E4F56' });
      } else if (d.tipo === 'confronto') {
        for (const [k, [ic, t, li]] of [d.sx, d.dx].entries()) { const x = 0.5 + k * 4.6;
          card(s, x, 1.3, 4.4, 3.65, k ? 'FDECEC' : 'E9F2F4'); await cerchio(s, x + 0.3, 1.5, 0.75, ic, k ? 'C81F26' : '0F3C47');
          txt(s, t, { x: x + 1.25, y: 1.55, w: 3, h: 0.65, valign: 'middle', fontSize: 16, bold: true, color: '0F3C47' });
          txt(s, li.map((l, j) => ({ text: l, options: { bullet: true, breakLine: j < li.length - 1, paraSpaceAfter: 8 } })), { x: x + 0.35, y: 2.5, w: 3.8, h: 2.35, fontSize: 13 }); }
      } else if (d.tipo === 'iceberg') {
        d.livelli.forEach((l, j) => { const w = 2.2 + j * 1.25, x = 0.5 + (5 - w) / 2, y = 1.35 + j * 0.85;
          const f = ['C00000', 'EE0000', 'FFC000', 'FFFF00'][j];
          s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.72, fill: { color: f }, line: { color: f }, rectRadius: 0.08 });
          txt(s, l, { x, y, w, h: 0.72, align: 'center', valign: 'middle', fontSize: 12, bold: true, color: j < 2 ? 'FFFFFF' : '13232A' }); });
        card(s, 5.8, 1.35, 3.7, 3.45); txt(s, d.testo, { x: 6.05, y: 1.6, w: 3.2, h: 3, valign: 'middle', fontSize: 15, color: '0F3C47' });
      } else if (d.tipo === 'figure') {
        const n = d.voci.length, cols = n > 6 ? 4 : 3, w = (9 - (cols - 1) * 0.2) / cols, rows = Math.ceil(n / cols), h = rows > 2 ? 1.1 : 1.7;
        for (const [k, [ic, t, desc]] of d.voci.entries()) { const x = 0.5 + (k % cols) * (w + 0.2), y = 1.3 + Math.floor(k / cols) * (h + 0.15);
          card(s, x, y, w, h); await cerchio(s, x + 0.18, y + 0.2, 0.55, ic, k % 2 ? 'C81F26' : '0F3C47');
          txt(s, t, { x: x + 0.85, y: y + 0.18, w: w - 1.0, h: 0.6, valign: 'middle', fontSize: 13, bold: true, color: '0F3C47' });
          txt(s, desc, { x: x + 0.18, y: y + 0.85, w: w - 0.36, h: h - 0.95, fontSize: 11, color: '3E4F56' }); }
      } else if (d.tipo === 'processo') {
        const n = d.passi.length, w = (9 - (n - 1) * 0.3) / n;
        for (const [k, [t, desc]] of d.passi.entries()) { const x = 0.5 + k * (w + 0.3);
          card(s, x, 1.45, w, 2.55); s.addShape(pres.shapes.OVAL, { x: x + 0.25, y: 1.65, w: 0.6, h: 0.6, fill: { color: 'C81F26' }, line: { color: 'C81F26' } });
          txt(s, String(k + 1), { x: x + 0.25, y: 1.65, w: 0.6, h: 0.6, align: 'center', valign: 'middle', fontSize: 18, bold: true, color: 'FFFFFF' });
          txt(s, t, { x: x + 0.25, y: 2.4, w: w - 0.5, h: 0.6, fontSize: 14, bold: true, color: '0F3C47' });
          txt(s, desc, { x: x + 0.25, y: 3.0, w: w - 0.5, h: 0.9, fontSize: 12, color: '3E4F56' });
          if (k < n - 1) s.addImage({ data: await ico('FaChevronRight', 'C81F26'), x: x + w + 0.03, y: 2.55, w: 0.24, h: 0.24 }); }
        if (d.nota) txt(s, d.nota, { x: 0.5, y: 4.3, w: 9, h: 0.6, fontSize: 12, color: '3E4F56', align: 'center' });
      } else if (d.tipo === 'trecolonne' || d.tipo === 'sanzioni') {
        for (const [k, [ic, t, desc]] of d.voci.entries()) { const x = 0.5 + k * 3.07;
          card(s, x, 1.3, 2.86, 3.65); await cerchio(s, x + 0.98, 1.55, 0.9, ic, k === 1 ? 'C81F26' : '0F3C47');
          txt(s, t, { x: x + 0.2, y: 2.6, w: 2.46, h: 0.65, align: 'center', valign: 'middle', fontSize: 15, bold: true, color: '0F3C47' });
          txt(s, desc, { x: x + 0.22, y: 3.3, w: 2.42, h: 1.55, align: 'center', fontSize: 12, color: '3E4F56' }); }
      } else if (d.tipo === 'segnaletica') {
        for (const [k, [col, forma, t, desc]] of d.voci.entries()) { const x = 0.5 + k * 1.84;
          card(s, x, 1.3, 1.7, 3.65);
          const sh = forma === 'cerchio' ? pres.shapes.OVAL : forma === 'triangolo' ? pres.shapes.ISOSCELES_TRIANGLE : pres.shapes.RECTANGLE;
          s.addShape(sh, { x: x + 0.35, y: 1.6, w: 1.0, h: 1.0, fill: { color: forma === 'cerchio' && col === 'C81F26' ? 'FFFFFF' : col }, line: { color: forma === 'triangolo' ? '13232A' : col, width: forma === 'cerchio' && col === 'C81F26' ? 6 : 1.5 } });
          txt(s, t, { x: x + 0.1, y: 2.85, w: 1.5, h: 0.4, align: 'center', fontSize: 13, bold: true, color: '0F3C47' });
          txt(s, desc, { x: x + 0.12, y: 3.3, w: 1.46, h: 1.55, align: 'center', fontSize: 11, color: '3E4F56' }); }
      } else if (d.tipo === 'elenco') {
        card(s, 0.5, 1.3, 2.3, 3.65, '0F3C47'); s.addImage({ data: await ico(d.icona, 'FFFFFF'), x: 1.05, y: 2.45, w: 1.2, h: 1.2 });
        txt(s, d.voci.map((v, j) => ({ text: v, options: { bullet: true, breakLine: j < d.voci.length - 1, paraSpaceAfter: 7 } })), { x: 3.1, y: 1.35, w: 6.4, h: 3.6, fontSize: 13 });
      } else if (d.tipo === 'diritto') {
        card(s, 0.5, 1.3, 9, 3.65, '0F3C47'); await cerchio(s, 0.9, 1.75, 1.1, 'FaPersonRunning', 'C81F26');
        txt(s, d.testo, { x: 2.4, y: 1.65, w: 6.7, h: 2.3, valign: 'middle', fontSize: 18, color: 'FFFFFF', bold: true });
        txt(s, d.rif, { x: 2.4, y: 4.1, w: 6.7, h: 0.4, fontSize: 13, color: 'FF8A8E' });
      }
    }
  }
  // ---------- chiusura ----------
  pres.addSection({ title: 'Verifica finale' });
  s = pres.addSlide({ masterName: 'Sezione', sectionTitle: 'Verifica finale' }); s.addText('CONCLUSIONE', { placeholder: 'body' }); s.addText('Verifica finale e attestato', { placeholder: 'title' });
  s = nuova('Verifica finale'); s.addText('Come si conclude il corso', { placeholder: 'title' });
  const fine = [['FaClockRotateLeft', 'Frequenza', 'Completamento di tutti i moduli e almeno il 90% del monte ore'], ['FaListCheck', 'Test finale', `${T.test.length} domande a risposta multipla: superamento con almeno il 70% di risposte corrette`], ['FaCertificate', 'Attestato', 'Rilasciato al superamento del test, con codice univoco e QR code di verifica']];
  for (const [k, [ic, t, desc]] of fine.entries()) { const x = 0.5 + k * 3.07; card(s, x, 1.3, 2.86, 3.65); await cerchio(s, x + 0.98, 1.55, 0.9, ic, k === 1 ? 'C81F26' : '0F3C47');
    txt(s, t, { x: x + 0.2, y: 2.6, w: 2.46, h: 0.5, align: 'center', fontSize: 15, bold: true, color: '0F3C47' }); txt(s, desc, { x: x + 0.22, y: 3.15, w: 2.42, h: 1.7, align: 'center', fontSize: 12, color: '3E4F56' }); }
  s.addNotes('Per ottenere l\'attestato è necessario completare tutti i moduli e superare il test finale. Al termine è richiesto di compilare il questionario di gradimento.');

  const f = path.join(__dirname, 'slide', `Slide_${id}.pptx`);
  await pres.writeFile({ fileName: f }); await applyTheme(f, THEME); console.log(f);
}
genera(process.argv[2] || 'LAV-GEN');
