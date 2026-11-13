/* Generatore slide dei corsi ASTRA – © 2026 dr. Jonathan D'Eugenio
   Fonte unica: elearning/corsi/<ID>/corso.js (stessi contenuti dell'e-learning)
   Uso: node genera_slide.js LAV-GEN [ALTRO-ID ...] */
const fs = require('fs'), path = require('path');
const pptxgen = require('pptxgenjs');
const React = require('react'), RDS = require('react-dom/server'), sharp = require('sharp');
const FA = require('react-icons/fa6');
const SK = '/root/.claude/skills/synced/42984687-dbbf-4081-bd1d-7d44daefd9ba_7df5fb13-7c4b-446d-9807-c700f637dd6a/pptx';
const { applyTheme } = require(SK + '/scripts/apply_theme.js');
const ROOT = '/home/claude/astra-portale';

const FM = 'Eras Medium ITC', FB = 'Eras Bold ITC';
const THEME = { name: 'ASTRA Academy', headFontFace: FB, bodyFontFace: FM,
  colors: { dk1: '13232A', lt1: 'FFFFFF', dk2: '0F3C47', lt2: 'E9F2F4', accent1: 'C81F26', accent2: '0F3C47', accent3: '2E7D4F', accent4: 'F2B300', accent5: '1F5FA8', accent6: '5A6B72', hlink: '1F5FA8', folHlink: '5A6B72' } };
const PET = '0F3C47', ROS = 'C81F26', CHI = 'E9F2F4', TX = '13232A', GR = '3E4F56', GRC = '5A6B72';
const b64 = (f, t = 'png') => `image/${t};base64,` + fs.readFileSync(f).toString('base64');
const LOGO = b64(ROOT + '/loghi/astra_logo_4K.png'), JD = b64(ROOT + '/loghi/jd_logo_bianco_4K.png');
const TIMBRO = b64(ROOT + '/formazione/risorse/timbro_DEU.png'), TIMBRO_A = b64(ROOT + '/formazione/risorse/timbro_ASTRA_Srl_firma_DiDomenico.png');
const COPY = '© 2026 dr. Jonathan D\'Eugenio';
const ISO = JSON.parse(fs.readFileSync(ROOT + '/formazione/risorse/iso7010.json', 'utf8')).svg;

const cache = {};
async function ico(nome, col = 'FFFFFF') {
  const k = nome + col; if (cache[k]) return cache[k];
  if (!FA[nome]) throw new Error('Icona mancante ' + nome);
  const svg = RDS.renderToStaticMarkup(React.createElement(FA[nome], { color: '#' + col, size: 256 }));
  return cache[k] = 'image/png;base64,' + (await sharp(Buffer.from(svg)).png().toBuffer()).toString('base64');
}
async function pitto(cod) {
  const k = 'iso' + cod; if (cache[k]) return cache[k];
  return cache[k] = 'image/png;base64,' + (await sharp(Buffer.from(ISO[cod]), { density: 300, limitInputPixels: false }).resize({ width: 600, height: 600, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()).toString('base64');
}
/* foto ritagliata esattamente al rapporto del riquadro (w × h in pollici): nessuna deformazione in PowerPoint né in PDF */
async function foto(nome, w = 4.6, h = 5.625) {
  const k = 'f' + nome + w.toFixed(3) + 'x' + h.toFixed(3); if (cache[k]) return cache[k];
  const W = 1800, H = Math.round(W * h / w);
  const buf = await sharp(path.join(ROOT, 'sito/img', nome + '-2560.jpg')).resize({ width: W, height: H, fit: 'cover', position: 'attention' }).jpeg({ quality: 84 }).toBuffer();
  return cache[k] = { data: 'image/jpeg;base64,' + buf.toString('base64'), r: w / h };
}
/* dimensione del carattere che fa stare il testo nel riquadro (stima prudente per Eras) */
function fsz(testo, w, h, max = 16, min = 8, k = 0.53) {
  const t = Array.isArray(testo) ? testo : [testo];
  for (let s = max; s >= min; s -= 0.5) {
    const cpl = Math.max(4, Math.floor(w * 72 / (s * k)));
    const righe = t.reduce((a, x) => a + Math.max(1, Math.ceil(String(x).length / cpl)), 0);
    if (righe * s * 1.22 / 72 + (t.length - 1) * s * 0.35 / 72 <= h) return s;
  }
  return min;
}
/* rimescolamento riproducibile per le esercitazioni */
function mescola(a, seme) { const r = [...a]; let x = seme >>> 0; for (let i = r.length - 1; i > 0; i--) { x = (x * 1103515245 + 12345) >>> 0; const j = x % (i + 1); [r[i], r[j]] = [r[j], r[i]]; } return r; }
function spezzaLen(a, n, max) { const tot = a.reduce((x, c) => x + c[1].length, 0); const k = Math.max(Math.ceil(a.length / n), Math.ceil(tot / max)); const out = []; let cur = [], acc = 0; const obi = tot / k;
  for (const c of a) { if (cur.length && (acc + c[1].length / 2 > obi || cur.length >= n) && out.length < k - 1) { out.push(cur); cur = []; acc = 0; } cur.push(c); acc += c[1].length; } out.push(cur); return out; }
const lettera = i => String.fromCharCode(65 + i);
const spezza = (a, n) => { const out = []; const k = Math.ceil(a.length / n); const sz = Math.ceil(a.length / k); for (let i = 0; i < a.length; i += sz) out.push(a.slice(i, i + sz)); return out; };

async function genera(id) {
  global.window = {}; eval(fs.readFileSync(path.join(ROOT, 'elearning/corsi', id, 'corso.js'), 'utf8')); const C = window.CORSO;
  const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; pres.author = 'dr. Jonathan D\'Eugenio'; pres.company = 'ASTRA S.r.l.'; pres.title = C.titolo; pres.subject = C.rif;
  pres.theme = { headFontFace: FB, bodyFontFace: FM };

  /* ---------- layout ---------- */
  pres.defineSlideMaster({ title: 'Titolo', background: { color: PET }, objects: [
    { image: { x: 8.25, y: 0.35, w: 1.35, h: 1.35, data: JD } },
    { rect: { x: 0.6, y: 1.62, w: 1.0, h: 0.06, fill: { color: ROS } } },
    { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 1.8, w: 8.6, h: 1.45, fontSize: 36, fontFace: FB, color: 'FFFFFF', valign: 'top', align: 'left', margin: 0 }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: 0.6, y: 3.3, w: 8.6, h: 0.9, fontSize: 15, fontFace: FM, color: 'CFE3E8', valign: 'top', margin: 0 }, text: '' } },
    { text: { text: COPY + ' · ASTRA S.r.l. – Centro di formazione AiFOS', options: { x: 0.6, y: 5.12, w: 7, h: 0.28, fontSize: 9, fontFace: FM, color: 'BFD8DE', margin: 0 } } }] });
  pres.defineSlideMaster({ title: 'Sezione', background: { color: PET }, objects: [
    { placeholder: { options: { name: 'body', type: 'body', x: 0.6, y: 1.5, w: 4.2, h: 0.45, fontSize: 15, fontFace: FB, color: 'FF9A9E', margin: 0 }, text: '' } },
    { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 2.0, w: 4.5, h: 2.2, fontSize: 28, fontFace: FB, color: 'FFFFFF', valign: 'top', align: 'left', margin: 0 }, text: '' } },
    { text: { text: COPY, options: { x: 0.6, y: 5.12, w: 4, h: 0.28, fontSize: 9, fontFace: FM, color: 'BFD8DE', margin: 0 } } }],
    slideNumber: { x: 4.6, y: 5.12, w: 0.5, h: 0.28, fontSize: 9, fontFace: FM, color: 'BFD8DE', align: 'right' } });
  for (const [nome, fz] of [['Contenuto', 22], ['Contenuto lungo', 17]])   pres.defineSlideMaster({ title: nome, background: { color: 'FFFFFF' }, margin: [0.5, 0.5, 0.6, 0.5], objects: [
    { rect: { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: PET } } },
    { placeholder: { options: { name: 'title', type: 'title', x: 0.5, y: 0.28, w: 7.7, h: 0.62, fontSize: fz, fontFace: FB, color: PET, valign: 'middle', align: 'left', margin: 0 }, text: '' } },
    { image: { x: 8.5, y: 0.36, w: 1.0, h: 1.0 * 459 / 1066, data: LOGO } },
    { rect: { x: 0.5, y: 5.08, w: 9.0, h: 0.01, fill: { color: 'C9D6DA' } } },
    { text: { text: COPY, options: { x: 0.5, y: 5.17, w: 3.5, h: 0.25, fontSize: 8, fontFace: FM, color: GRC, margin: 0 } } },
    { text: { text: C.titolo, options: { x: 4.0, y: 5.17, w: 4.85, h: 0.25, fontSize: 8, fontFace: FM, color: GRC, align: 'right', margin: 0 } } }],
    slideNumber: { x: 8.95, y: 5.17, w: 0.55, h: 0.25, fontSize: 8, fontFace: FM, color: GRC, align: 'right' } });

  let sez = 'Introduzione';
  const nuova = (tit) => { const s = pres.addSlide({ masterName: tit.length > 50 ? 'Contenuto lungo' : 'Contenuto', sectionTitle: sez }); s.addText(ricco(tit), { placeholder: 'title' }); return s; };
  const card = (s, x, y, w, h, fill = CHI, line) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: line || fill, width: 0.75 }, rectRadius: 0.08 });
  /* testo interamente in Eras: pedici chimici come pedice tipografico, simboli non presenti in Eras sostituiti */
  const SUB = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
  const pulisci = t => String(t).replace(/\s*→\s*/g, ' › ').replace(/[▲▼]\s*/g, '');
  const runs = (t, op = {}) => { const out = []; let buf = '', sub = false;
    for (const ch of pulisci(t)) { if (/[ΣψΔλρσμ]/.test(ch) && !/µ/.test(ch)) { if (buf) out.push({ text: buf, options: { ...op, ...(sub ? { subscript: true } : {}) } }); buf = ''; sub = false; out.push({ text: ch, options: { ...op, fontFace: 'Cambria Math' } }); continue; } const isS = ch in SUB; if (isS !== sub && buf) { out.push({ text: buf, options: { ...op, ...(sub ? { subscript: true } : {}) } }); buf = ''; } sub = isS; buf += isS ? SUB[ch] : ch; }
    if (buf || !out.length) out.push({ text: buf, options: { ...op, ...(sub ? { subscript: true } : {}) } });
    if (op.breakLine) out.slice(0, -1).forEach(r => { r.options = { ...r.options }; delete r.options.breakLine; });
    if (op.bullet) out.slice(1).forEach(r => { r.options = { ...r.options }; delete r.options.bullet; delete r.options.paraSpaceAfter; });
    return out; };
  const ricco = t => typeof t === 'string' ? (/[₀-₉→▲▼ΣψΔλρσ]/.test(t) ? runs(t) : t) : Array.isArray(t) ? t.flatMap(r => typeof r === 'string' ? runs(r) : /[₀-₉→▲▼ΣψΔλρσ]/.test(r.text || '') ? runs(r.text, r.options || {}) : [r]) : t;
  const txt = (s, t, o) => s.addText(ricco(t), { isTextBox: true, margin: 0, valign: 'top', fontSize: 13, fontFace: FM, color: TX, ...o });
  const tb = (s, t, o) => txt(s, t, { fontFace: FB, color: PET, ...o });
  const cerchio = async (s, x, y, d, nome, fill = PET, col = 'FFFFFF') => { s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } }); s.addImage({ data: await ico(nome, col), x: x + d * 0.26, y: y + d * 0.26, w: d * 0.48, h: d * 0.48 }); };
  const badge = (s, t, x, y, d, fill = ROS) => { s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } }); txt(s, t, { x: x - 0.1, y, w: d + 0.2, h: d, align: 'center', valign: 'middle', fontSize: fsz(t, d, d * 0.6, d * 26, 7, 0.62), fontFace: FB, color: 'FFFFFF' }); };
  const rif = (s, r) => { if (r) txt(s, r, { x: 0.5, y: 0.9, w: 7.7, h: 0.28, fontSize: fsz(r, 7.7, 0.26, 10.5, 7, 0.56), fontFace: FB, color: ROS }); };
  const elenco = (s, voci, x, y, w, h, o = {}) => { const f = o.fontSize || fsz(voci, w - 0.25, h, 15, 9); txt(s, voci.map((v, i) => ({ text: v, options: { bullet: { indent: 14 }, breakLine: i < voci.length - 1, paraSpaceAfter: f * 0.45 } })), { x, y, w, h, fontSize: f, ...o }); };
  const ND = require('./note_docente.js'), FC = require(ROOT + '/elearning/foto_corsi.js'), CTX = { M: null, si: 0 };
  let CORPUS_ND = null;
  const note = (s, sc, extra) => {
    CORPUS_ND = CORPUS_ND || ND.preparaCorso(C);
    const k = CTX.M ? `${CTX.M.id}-${CTX.si}` : '', f = CTX.M ? SCELTA.sch[k] : null;
    const incendio = FC.INCENDIO.test((sc.tit || '') + ' ' + (sc.lead || '')) || f === '-' && /^AI-/.test(C.id);
    s.addNotes(ND.noteDiapositiva(sc, { corpus: CORPUS_ND, seme: C.id + k, foto: f && f !== '-' ? f : null, catalogo: FC.DESCRIZIONI, incendio, extra }));
  };
  const Y0 = (sc) => (sc.rif || sc.art || sc.sott) ? 1.3 : 1.15, HMAX = 4.95;

  let nm = 0, ne = 0, nt = 0;
  const SCELTA = require(ROOT + '/elearning/foto_corsi.js').scegli(C); // immagini pertinenti al corso e alla slide
  for (const [mi, M] of C.moduli.entries()) {
    sez = M.id === 'M0' ? 'Introduzione' : M.titolo; pres.addSection({ title: sez });
    for (const [si, sc] of M.schermate.entries()) {
      CTX.M = M; CTX.si = si;
      const t = sc.t; let s;
      if (t === 'copertina') {
        s = pres.addSlide({ masterName: 'Titolo', sectionTitle: sez });
        s.addText(ricco(sc.tit), { placeholder: 'title' }); s.addText(ricco(`${C.sottotitolo || sc.sott || ''}\n${C.ore} ore · ${C.rif}`), { placeholder: 'body' }); note(s, sc); continue;
      }
      if (t === 'sezione') {
        nm++; s = pres.addSlide({ masterName: 'Sezione', sectionTitle: sez });
        s.addText(`${(sc.tit && /^(Modulo|Unità|UD)/.test(sc.tit) ? sc.tit : "Modulo " + nm).toUpperCase()} · ${M.min} MINUTI`, { placeholder: 'body' }); s.addText(sc.sott || M.titolo, { placeholder: 'title' });
        const nmF = SCELTA.mod[M.id] || M.foto;
        const obT = String(sc.nar || '').replace(/^(Modulo|Unità|Parte)[^.]*\.\s*/, '').trim(), ob = (obT.match(/^[^.]+\./) || [''])[0];
        const rc = {}; M.schermate.forEach(x => String(x.rif || x.art || '').split('·').map(r => r.trim().replace(/,\s*(artt?\.|Allegat|Titolo|Capo|Parte|c\.).*$/, '')).filter(r => r.length > 4 && r.length < 60).forEach(r => rc[r] = (rc[r] || 0) + 1));
        const rifs = Object.entries(rc).sort((a, b) => b[1] - a[1]).slice(0, 4).map(x => x[0]);
        if (ob.length > 30 && !ob.toLowerCase().includes(String(sc.sott || M.titolo).toLowerCase())) txt(s, [{ text: 'OBIETTIVO DIDATTICO', options: { fontFace: FB, fontSize: 9.5, color: 'FFD27A', breakLine: true } }, { text: ob, options: { fontFace: FB, fontSize: (sc.sott || M.titolo).length > 45 ? fsz(ob, 4.6, 0.7, 10, 8) : fsz(ob, 4.6, 1.1, 12, 8.5), color: 'FFFFFF' } }], (sc.sott || M.titolo).length > 45 ? { x: 0.55, y: 4.3, w: 4.6, h: 0.85 } : { x: 0.55, y: 3.75, w: 4.6, h: 1.25 });
        if (nmF && nmF !== '-') { const f = await foto(nmF, 4.6, 5.625); s.addImage({ data: f.data, x: 5.4, y: 0, w: 4.6, h: 5.625 }); }
        else if (rifs.length) { // argomenti senza fotografia (incendio): tabella dei riferimenti normativi del modulo
          s.addText('RIFERIMENTI NORMATIVI DEL MODULO', { x: 5.7, y: 1.2, w: 4, h: 0.35, fontFace: FB, fontSize: 11, color: 'FFD27A' });
          s.addTable(rifs.map((r, k) => [{ text: String(k + 1), options: { fontFace: FB, color: 'FFFFFF', fill: { color: 'C81F26' }, align: 'center' } }, { text: r, options: { fontFace: FB, color: 'FFFFFF' } }]), { x: 5.7, y: 1.65, w: 3.9, colW: [0.4, 3.5], fontSize: 11, border: { type: 'solid', pt: 0.25, color: '5A9AA6' }, valign: 'middle', rowH: 0.45 });
        }
        note(s, sc); continue;
      }
      const y0 = Y0(sc);
      if (t === 'articolo' && (sc.commi.length > 9 || sc.commi.reduce((a, c) => a + c[1].length, 0) > 1250)) {
        const parti = spezzaLen(sc.commi, 9, 1100);
        for (const [pi, parte] of parti.entries()) {
          s = nuova(`${sc.tit} (${pi + 1}/${parti.length})`); rif(s, sc.art);
          await articolo(s, { ...sc, commi: parte, nota: pi === parti.length - 1 ? sc.nota : null, sott: sc.sott });
          note(s, sc);
        }
        continue;
      }
      s = nuova(sc.tit); rif(s, sc.art || sc.rif);
      if (sc.sott && !['articolo'].includes(t)) txt(s, sc.sott, { x: 0.5, y: (sc.rif || sc.art) ? 1.12 : 0.9, w: 7.7, h: 0.25, fontSize: 10.5, color: GRC });
      const yS = sc.sott && (sc.rif || sc.art) ? 1.45 : y0;

      if (t === 'guida') {
        const fG = Math.min(...sc.voci.map(v => fsz(v[2], 2.5, 0.78, 11, 8)));
        for (const [k, [ic, ti, de]] of sc.voci.entries()) { const x = 0.5 + (k % 3) * 3.05, y = 1.2 + Math.floor(k / 3) * 1.9;
          card(s, x, y, 2.9, 1.75); await cerchio(s, x + 0.18, y + 0.2, 0.6, ic, k % 2 ? ROS : PET);
          tb(s, ti, { x: x + 0.92, y: y + 0.2, w: 1.85, h: 0.6, valign: 'middle', fontSize: 13 });
          txt(s, de, { x: x + 0.2, y: y + 0.9, w: 2.5, h: 0.78, fontSize: fG, color: GR }); }
        note(s, sc);
      } else if (t === 'obiettivi') {
        const n = sc.voci.length, h = Math.min(0.7, (HMAX - 1.2) / n - 0.08);
        const fO = Math.min(...sc.voci.map(v => fsz(v, 8, h, 14, 9)));
        sc.voci.forEach((v, k) => { const y = 1.2 + k * (h + 0.08); card(s, 0.5, y, 9, h); badge(s, String(k + 1), 0.65, y + (h - 0.42) / 2, 0.42);
          txt(s, v, { x: 1.3, y, w: 8, h, valign: 'middle', fontSize: fO }); });
        note(s, sc);
      } else if (t === 'grafico') {
        const g = sc.grafico; let y = yS;
        const leadA = (sc.lead || '').replace(/^(Selezionare|Modificare|Spostare)[^.]*[.:]\s*/, '').replace(/^[^:]*il grafico mostra /i, 'Il grafico mostra ');
        if (leadA) { txt(s, leadA, { x: 0.5, y, w: 9, h: 0.55, fontSize: fsz(leadA, 9, 0.55, 13, 9) }); y += 0.65; }
        const fN = v => Number(v).toLocaleString('it-IT', { maximumFractionDigits: 2 });
        if (g.tipo === 'flusso') {
          const n = g.passi.length, per = n > 4 ? Math.ceil(n / 2) : n, w = (9 - (per - 1) * 0.3) / per, h = 1.25;
          g.passi.forEach((p, k) => { const r = Math.floor(k / per), c = k % per, x = 0.5 + c * (w + 0.3), yy = y + r * (h + 0.35);
            card(s, x, yy, w, h); badge(s, String(k + 1), x + 0.1, yy + 0.1, 0.36, k % 2 ? ROS : PET);
            tb(s, p.nome, { x: x + 0.52, y: yy + 0.08, w: w - 0.6, h: 0.45, valign: 'middle', fontSize: fsz(p.nome, w - 0.6, 0.45, 12, 8) });
            if (p.tempo) txt(s, p.tempo, { x: x + 0.12, y: yy + 0.6, w: w - 0.24, h: 0.55, fontSize: 9.5, color: ROS });
            if (c < per - 1 && k < n - 1) s.addShape(pres.shapes.RIGHT_ARROW, { x: x + w + 0.05, y: yy + h / 2 - 0.1, w: 0.2, h: 0.2, fill: { color: PET }, line: { color: PET } }); });
        } else if (g.tipo === 'calcolo') {
          tb(s, g.formula_testo, { x: 0.5, y, w: 9, h: 0.4, fontSize: 13 }); y += 0.5;
          const f = new Function(...g.ingressi.map(i => i.id), 'return (' + g.formula + ');');
          const casi = [g.ingressi.map(i => i.val), g.ingressi.map((i, k) => k === g.ingressi.length - 1 ? i.min : i.val), g.ingressi.map((i, k) => k === g.ingressi.length - 1 ? i.max : i.val)];
          const rows = [[...g.ingressi.map(i => `${i.nome} (${i.unita || ''})`), `${g.risultato} (${g.unita || ''})`, g.limite ? 'Esito' : ''].filter(x => x !== '').map(t => ({ text: t, options: { bold: true, color: 'FFFFFF', fill: { color: PET }, fontFace: FB } }))];
          casi.forEach(c => { const r = f(...c); rows.push([...c.map(fN), fN(r), ...(g.limite ? [r > g.limite ? 'superiore al limite' : 'entro il limite'] : [])].map(t => ({ text: String(t) }))); });
          s.addTable(rows, { x: 0.5, y, w: 9, fontSize: 11, fontFace: FM, color: TX, border: { type: 'solid', pt: 0.25, color: 'B9CDD2' }, align: 'center', valign: 'middle' });
          txt(s, 'Esercizio in aula: far stimare ai partecipanti il risultato prima di mostrarlo; in e-learning il calcolo è interattivo.', { x: 0.5, y: HMAX - 0.35, w: 9, h: 0.3, fontSize: 9.5, color: GRC });
        } else if (g.tipo === 'soglie') {
          const x0 = 0.6, W = 8.8, X = v => x0 + (v - g.min) / (g.max - g.min) * W, lim = [g.min, ...g.zone.map(z => z.fino)];
          g.zone.forEach((z, k) => { const a = X(lim[k]), b = X(Math.min(z.fino, g.max));
            s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: a, y: y + 0.3, w: Math.max(0.05, b - a), h: 0.6, fill: { color: z.colore.replace('#', '') }, line: { color: 'FFFFFF', width: 1 }, rectRadius: 0.08 });
            txt(s, z.nome, { x: a, y: y + 0.3, w: b - a, h: 0.6, align: 'center', valign: 'middle', fontFace: FB, fontSize: 10, color: 'FFFFFF' });
            txt(s, z.testo, { x: a, y: y + 1.25, w: b - a, h: 1.6, fontSize: fsz(z.testo, b - a, 1.6, 10, 7), color: TX });
            if (z.fino < g.max) txt(s, `${fN(z.fino)} ${g.unita}`, { x: b - 0.6, y: y + 0.92, w: 1.2, h: 0.28, align: 'center', fontSize: 9.5, fontFace: FB, color: PET }); });
          txt(s, g.variabile, { x: 0.5, y, w: 9, h: 0.28, fontSize: 10.5, fontFace: FB, color: PET });
        } else if (g.tipo === 'intervalli') {
          const x0 = 3.6, W = 5.7, X = v => x0 + v / g.max * W, r = Math.min(0.45, (HMAX - y - 0.5) / g.voci.length);
          for (let k = 0; k <= g.tacche; k++) { const v = g.max * k / g.tacche; s.addShape(pres.shapes.LINE, { x: X(v), y, w: 0, h: r * g.voci.length, line: { color: 'D3E2E6', width: 0.5 } }); txt(s, fN(v), { x: X(v) - 0.3, y: y + r * g.voci.length + 0.02, w: 0.6, h: 0.25, align: 'center', fontSize: 9, color: GRC }); }
          g.voci.forEach((v, k) => { const yy = y + k * r + r / 2, col = (v.colore || '#0f5c6b').replace('#', '');
            txt(s, v.nome, { x: 0.5, y: yy - r / 2, w: 3, h: r, align: 'right', valign: 'middle', fontSize: fsz(v.nome, 3, r, 11, 8) });
            s.addShape(pres.shapes.LINE, { x: X(v.da), y: yy, w: Math.max(0.01, X(v.a) - X(v.da)), h: 0, line: { color: col, width: 5 } });
            [v.da, v.a].forEach(q => s.addShape(pres.shapes.OVAL, { x: X(q) - 0.07, y: yy - 0.07, w: 0.14, h: 0.14, fill: { color: col }, line: { color: col } })); });
          txt(s, g.unita, { x: 5.5, y: y + r * g.voci.length + 0.28, w: 3.8, h: 0.25, align: 'right', fontSize: 9, color: GRC });
        }
        note(s, sc, g.tipo === 'flusso' ? g.passi.map((p, k) => `${k + 1}. ${p.nome}${p.tempo ? ' (' + p.tempo + ')' : ''}: ${p.testo}`).join('\n') : g.tipo === 'intervalli' ? g.voci.map(v => `${v.nome}: ${fN(v.da)}–${fN(v.a)} ${g.unita_breve || ''}. ${v.testo}`).join('\n') : '');
      } else if (t === 'testo') {
        // foto solo se pertinente: indicata nella schermata (sc.foto) o, per i corsi che lo prevedono, a rotazione (C.fotoTesto)
        const nomeF = SCELTA.sch[`${M.id}-${si}`] || null; const nomeFOk = nomeF === "-" ? null : nomeF; // immagine solo se pertinente (foto_corsi.js) const nomeFOk = nomeF === '-' ? null : nomeF;
        const f = nomeFOk ? { nome: nomeFOk } : null;
        let y = yS; const W = f ? 5.75 : 9;
        if (sc.lead) { const fl = fsz(sc.lead, W - 0.4, 1.0, 14, 10); const hl = Math.min(1.1, Math.max(0.55, Math.ceil(sc.lead.length / Math.floor((W - 0.4) * 72 / (fl * 0.53))) * fl * 1.25 / 72 + 0.22));
          card(s, 0.5, y, W, hl, PET); txt(s, sc.lead, { x: 0.7, y: y + 0.1, w: W - 0.4, h: hl - 0.2, valign: 'middle', fontSize: fl, fontFace: FB, color: 'FFFFFF' }); y += hl + 0.15; }
        if (sc.punti) { if (f) elenco(s, sc.punti, 0.5, y, W, HMAX - y);
          else { // senza foto: punti in schede a due colonne, più leggibili
            const n = sc.punti.length, cols = n > 3 ? 2 : 1, per = Math.ceil(n / cols), cw = (9 - (cols - 1) * 0.2) / cols, ch = (HMAX - y - (per - 1) * 0.1) / per;
            const fP = Math.min(...sc.punti.map(v => fsz(v, cw - 0.32, ch - 0.06, 13, 8)));
            sc.punti.forEach((v, k) => { const c = Math.floor(k / per), r = k % per, x = 0.5 + c * (cw + 0.2), yy = y + r * (ch + 0.1);
              card(s, x, yy, cw, ch); s.addShape(pres.shapes.RECTANGLE, { x, y: yy + 0.08, w: 0.06, h: ch - 0.16, fill: { color: k % 2 ? ROS : PET }, line: { color: k % 2 ? ROS : PET } });
              txt(s, v, { x: x + 0.2, y: yy, w: cw - 0.32, h: ch, valign: 'middle', fontSize: fP }); }); } }
        if (f) { const pw = 3.0, ph = HMAX - yS, fc = await foto(f.nome, pw, ph); s.addImage({ data: fc.data, x: 6.5, y: yS, w: pw, h: ph }); }
        note(s, sc);
      } else if (t === 'definizioni') {
        const n = sc.voci.length, cols = n <= 4 ? 2 : n <= 6 ? 3 : 2, rows = Math.ceil(n / cols), gw = 0.18, w = (9 - (cols - 1) * gw) / cols, h = (HMAX - yS - (rows - 1) * 0.15) / rows;
        const fT = Math.min(...sc.voci.map(v => fsz(v[1], w - 0.8, 0.42, 14, 9))), fD = Math.min(...sc.voci.map(v => fsz(v[2], w - 0.36, h - 0.75, 12.5, 7.5)));
        for (const [k, [le, ti, de]] of sc.voci.entries()) { const x = 0.5 + (k % cols) * (w + gw), y = yS + Math.floor(k / cols) * (h + 0.15);
          card(s, x, y, w, h); badge(s, le, x + 0.15, y + 0.14, 0.42, k % 2 ? ROS : PET);
          tb(s, ti, { x: x + 0.68, y: y + 0.14, w: w - 0.8, h: 0.42, valign: 'middle', fontSize: fT });
          txt(s, de, { x: x + 0.18, y: y + 0.65, w: w - 0.36, h: h - 0.75, fontSize: fD }); }
        note(s, sc, sc.voci.map(([le, ti]) => `${ti}: lett. ${le})`).join(' · ').replace(/lett\. ([A-Z])\)/g, ''));
      } else if (t === 'confronto') {
        for (const [k, z] of [sc.sx, sc.dx].entries()) { const x = 0.5 + k * 4.6, h = HMAX - yS;
          card(s, x, yS, 4.4, h, k ? 'FDECEC' : CHI); await cerchio(s, x + 0.25, yS + 0.2, 0.7, z.ico, k ? ROS : PET);
          tb(s, z.tit, { x: x + 1.1, y: yS + 0.2, w: 3.1, h: 0.7, valign: 'middle', fontSize: fsz(z.tit, 3.1, 0.7, 17, 10) });
          elenco(s, z.voci, x + 0.3, yS + 1.1, 3.85, h - 1.25); }
        note(s, sc);
      } else if (t === 'matrice') {
        const col = v => v <= 2 ? ['ACF86E', TX] : v <= 4 ? ['FFFF00', TX] : v <= 8 ? ['FFC000', 'FFFFFF'] : v <= 12 ? ['EE0000', 'FFFFFF'] : ['C00000', 'FFFFFF'];
        const cx = 1.55, cy = yS + 0.3, cw = 0.95, ch = 0.72;
        for (let r = 0; r < 4; r++) { const p = 4 - r; txt(s, `${p} · ${sc.P[p - 1]}`, { x: 0.25, y: cy + r * (ch + 0.06), w: 1.25, h: ch, valign: 'middle', align: 'right', fontSize: 8.5, color: GR });
          for (let q = 0; q < 4; q++) { const d = q + 1, v = p * d, [f, c] = col(v);
            s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx + q * (cw + 0.06), y: cy + r * (ch + 0.06), w: cw, h: ch, fill: { color: f }, line: { color: 'FFFFFF' }, rectRadius: 0.1, shadow: { type: 'outer', color: '7F9CA4', blur: 3, offset: 1.5, angle: 90, opacity: 0.35 } });
            txt(s, String(v), { x: cx + q * (cw + 0.06), y: cy + r * (ch + 0.06), w: cw, h: ch, align: 'center', valign: 'middle', fontSize: 18, fontFace: FB, color: c }); } }
        for (let q = 0; q < 4; q++) txt(s, `${q + 1} · ${sc.D[q]}`, { x: cx + q * (cw + 0.06), y: cy + 4 * (ch + 0.06), w: cw, h: 0.3, align: 'center', fontSize: 8.5, color: GR });
        tb(s, 'Probabilità (P)', { x: 0.25, y: cy - 0.28, w: 1.3, h: 0.28, fontSize: 9, align: 'right' });
        tb(s, 'Danno (D) ›', { x: cx, y: cy + 4 * (ch + 0.06) + 0.25, w: 4 * cw, h: 0.25, fontSize: 9, align: 'center' });
        const leg = [[[1, 2], 'ACF86E', TX, 'Basso', 'Interventi da programmare nel medio-lungo termine'], [[3, 4], 'FFFF00', TX, 'Medio-basso', 'Interventi da programmare nel medio termine'], [[6, 8], 'FFC000', 'FFFFFF', 'Medio', 'Interventi da programmare nel breve termine'], [[9, 12], 'EE0000', 'FFFFFF', 'Alto', 'Interventi urgenti'], [[16, 16], 'C00000', 'FFFFFF', 'Molto alto', 'Interventi immediati']];
        tb(s, 'Legenda: R = P × D e priorità di intervento', { x: 5.85, y: yS + 0.02, w: 3.65, h: 0.3, fontSize: 11 });
        leg.forEach(([[a, b], f, c, n, d], k) => { const y = yS + 0.4 + k * 0.66;
          s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.85, y, w: 0.85, h: 0.56, fill: { color: f }, line: { color: f }, rectRadius: 0.08 });
          txt(s, a === b ? String(a) : `${a}–${b}`, { x: 5.85, y, w: 0.85, h: 0.56, align: 'center', valign: 'middle', fontSize: 12, fontFace: FB, color: c });
          tb(s, n, { x: 6.82, y, w: 2.7, h: 0.25, fontSize: 11 }); txt(s, d, { x: 6.82, y: y + 0.26, w: 2.7, h: 0.3, fontSize: 9, color: GR }); });
        note(s, sc, 'Indicazioni per il docente: proporre ai partecipanti alcuni esempi tratti dalla propria realtà lavorativa e collocarli nella matrice.');
      } else if (t === 'processo' && sc.passi.length > 4) {
        const n = sc.passi.length, h = (HMAX - yS) / n - 0.08;
        const fT = Math.min(...sc.passi.map(v => fsz(v[0], 2.2, h, 14, 9))), fD = Math.min(...sc.passi.map(v => fsz(v[1], 5.65, h - 0.04, 12.5, 8)));
        for (const [k, [ti, de]] of sc.passi.entries()) { const y = yS + k * (h + 0.08);
          card(s, 0.5, y, 9, h); badge(s, String(k + 1), 0.62, y + (h - 0.44) / 2, 0.44);
          tb(s, ti, { x: 1.25, y, w: 2.2, h, valign: 'middle', fontSize: fT });
          s.addShape(pres.shapes.LINE, { x: 3.55, y: y + 0.1, w: 0, h: h - 0.2, line: { color: 'A9BEC4', width: 0.75 } });
          txt(s, de, { x: 3.7, y, w: 5.65, h, valign: 'middle', fontSize: fD, color: GR }); }
        note(s, sc);
      } else if (t === 'processo') {
        const n = sc.passi.length, gw = 0.28, w = (9 - (n - 1) * gw) / n, h = HMAX - yS - 0.1;
        const fT = Math.min(...sc.passi.map(v => fsz(v[0], w - 0.36, 0.62, 14, 9))), fD = Math.min(...sc.passi.map(v => fsz(v[1], w - 0.36, h - 1.6, 12, 8)));
        for (const [k, [ti, de]] of sc.passi.entries()) { const x = 0.5 + k * (w + gw);
          card(s, x, yS + 0.05, w, h); badge(s, String(k + 1), x + 0.18, yS + 0.22, 0.55);
          tb(s, ti, { x: x + 0.18, y: yS + 0.9, w: w - 0.36, h: 0.62, fontSize: fT });
          txt(s, de, { x: x + 0.18, y: yS + 1.55, w: w - 0.36, h: h - 1.6, fontSize: fD, color: GR });
          if (k < n - 1) s.addImage({ data: await ico('FaChevronRight', ROS), x: x + w + 0.03, y: yS + 0.35, w: 0.22, h: 0.22 }); }
        note(s, sc);
      } else if (t === 'articolo') {
        await articolo(s, sc); note(s, sc);
      } else if (t === 'gerarchia') {
        const n = sc.voci.length, hh = Math.min(0.6, (HMAX - yS - 0.8) / n - 0.08);
        tb(s, 'Più efficace', { x: 0.5, y: yS, w: 2, h: 0.25, fontSize: 9, color: '2E7D4F' });
        sc.voci.forEach((v, j) => { const w = 8.4 - j * (6.2 / Math.max(1, n - 1)) * 0.75, x = 0.5 + (9 - w) / 2, y = yS + 0.32 + j * (hh + 0.08);
          const f = ['0F3C47', '1C5563', '2B6E7E', '4F8794', ROS][Math.round(j * 4 / Math.max(1, n - 1))];
          s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: hh, fill: { color: f }, line: { color: f }, rectRadius: 0.1, shadow: { type: 'outer', color: '7F9CA4', blur: 3, offset: 1.5, angle: 90, opacity: 0.35 } });
          txt(s, `${j + 1}. ${v}`, { x, y, w, h: hh, align: 'center', valign: 'middle', fontSize: 14, fontFace: FB, color: 'FFFFFF' }); });
        if (sc.nota) txt(s, sc.nota, { x: 0.5, y: HMAX - 0.4, w: 9, h: 0.38, align: 'center', valign: 'middle', fontSize: 11.5, color: GR });
        note(s, sc);
      } else if (t === 'iceberg') {
        const fI = Math.min(...sc.livelli.map((l, j) => fsz(l, 2.0 + j * 1.15 - 0.2, 0.7, 12, 8)));
        sc.livelli.forEach((l, j) => { const w = 2.0 + j * 1.15, x = 0.5 + (5.2 - w) / 2, y = yS + j * 0.88;
          const [f, c] = [['C00000', 'FFFFFF'], ['EE0000', 'FFFFFF'], ['FFC000', 'FFFFFF'], ['FFFF00', TX]][j] || ['ACF86E', TX];
          s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.76, fill: { color: f }, line: { color: f }, rectRadius: 0.08 });
          txt(s, l, { x: x + 0.1, y, w: w - 0.2, h: 0.76, align: 'center', valign: 'middle', fontSize: fI, fontFace: FB, color: c }); });
        card(s, 5.95, yS, 3.55, 3.45, PET); await cerchio(s, 6.2, yS + 0.25, 0.65, 'FaBullhorn', ROS);
        txt(s, sc.testo, { x: 6.2, y: yS + 1.05, w: 3.05, h: 2.25, fontSize: fsz(sc.testo, 3.05, 2.25, 15, 10), fontFace: FB, color: 'FFFFFF' });
        note(s, sc);
      } else if (t === 'pittogrammi') {
        const g = sc.gruppi, w = (9 - (g.length - 1) * 0.15) / g.length;
        const fDs = Math.min(...g.map(gr => fsz(gr.desc, w - 0.24, 0.65, 9.5, 7.5)));
        for (const [k, gr] of g.entries()) { const x = 0.5 + k * (w + 0.15), h = HMAX - yS;
          card(s, x, yS, w, h); tb(s, gr.nome, { x: x + 0.12, y: yS + 0.12, w: w - 0.24, h: 0.32, align: 'center', fontSize: 13 });
          txt(s, gr.forma, { x: x + 0.12, y: yS + 0.45, w: w - 0.24, h: 0.42, align: 'center', fontSize: 8.5, color: GR });
          const cods = gr.codici.slice(0, 6), d = 0.62, cc = 2, gx = (w - cc * d) / (cc + 1);
          for (const [j, [cod]] of cods.entries()) s.addImage({ data: await pitto(cod), x: x + gx + (j % cc) * (d + gx), y: yS + 0.95 + Math.floor(j / cc) * (d + 0.1), w: d, h: d });
          txt(s, gr.desc, { x: x + 0.12, y: HMAX - 0.75, w: w - 0.24, h: 0.65, align: 'center', valign: 'bottom', fontSize: fDs, color: GR }); }
        note(s, sc);
        for (const gr of g) { const ss = nuova(`${sc.tit}: ${gr.nome.toLowerCase()}`); rif(ss, 'Pittogrammi UNI EN ISO 7010 · ' + gr.forma);
          const n = gr.codici.length, cols = n <= 4 ? n : n <= 6 ? 3 : 5, rows = Math.ceil(n / cols), w2 = (9 - (cols - 1) * 0.2) / cols, h2 = (HMAX - 1.3 - (rows - 1) * 0.15) / rows, d = Math.min(1.2, h2 - 0.75, w2 - 0.45);
          const fN = Math.min(...gr.codici.map(v => fsz(v[1], w2 - 0.2, h2 - d - 0.3, 12, 8)));
          for (const [j, [cod, nome]] of gr.codici.entries()) { const x = 0.5 + (j % cols) * (w2 + 0.2), y = 1.3 + Math.floor(j / cols) * (h2 + 0.15);
            card(ss, x, y, w2, h2); ss.addImage({ data: await pitto(cod), x: x + (w2 - d) / 2, y: y + 0.12, w: d, h: d });
            tb(ss, nome, { x: x + 0.1, y: y + d + 0.18, w: w2 - 0.2, h: h2 - d - 0.25, align: 'center', fontSize: fN });
            txt(ss, cod, { x: x + w2 - 0.65, y: y + 0.08, w: 0.55, h: 0.2, align: 'right', fontSize: 7.5, color: GRC }); }
          ss.addNotes(`${gr.nome}: ${gr.desc}. Forma e colore: ${gr.forma}. Pittogrammi: ${gr.codici.map(([c, n]) => `${c} ${n}`).join('; ')}.`); }
      } else if (t === 'vf') {
        ne++; const h = Math.min(0.68, (HMAX - yS) / sc.voci.length - 0.08);
        const fA = Math.min(...sc.voci.map(([a]) => fsz(a, 6.6, h, 13, 8.5)));
        sc.voci.forEach(([a], k) => { const y = yS + k * (h + 0.08); card(s, 0.5, y, 9, h); badge(s, String(k + 1), 0.62, y + (h - 0.38) / 2, 0.38, PET);
          txt(s, a, { x: 1.15, y, w: 6.6, h, valign: 'middle', fontSize: fA });
          ['V', 'F'].forEach((l, q) => { s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.0 + q * 0.7, y: y + (h - 0.4) / 2, w: 0.55, h: 0.4, fill: { color: 'FFFFFF' }, line: { color: PET, width: 1 }, rectRadius: 0.06 }); txt(s, l, { x: 8.0 + q * 0.7, y: y + (h - 0.4) / 2, w: 0.55, h: 0.4, align: 'center', valign: 'middle', fontSize: 12, fontFace: FB, color: PET }); }); });
        note(s, sc); await soluzioni(sc.tit, sc.voci.map(([a, v, sp]) => [a, v ? 'VERO' : 'FALSO', sp]));
      } else if (t === 'ordina') {
        const mix = mescola(sc.voci, id.length * 97 + si * 13 + mi);
        mix.forEach((v, k) => { const y = yS + k * 0.66; card(s, 1.5, y, 7, 0.56); badge(s, lettera(k), 1.62, y + 0.08, 0.4, PET); txt(s, v, { x: 2.2, y, w: 6.1, h: 0.56, valign: 'middle', fontSize: 13 }); });
        note(s, sc); await soluzioni(sc.tit, sc.voci.map((v, k) => [`${k + 1}° posto`, `${lettera(mix.indexOf(v))} – ${v}`, '']), ['Posizione', 'Misura', '']);
      } else if (t === 'caso') {
        card(s, 0.5, yS, 9, 1.35, PET); await cerchio(s, 0.7, yS + 0.32, 0.7, 'FaBookOpenReader', ROS);
        txt(s, sc.scena, { x: 1.6, y: yS + 0.12, w: 7.7, h: 1.12, valign: 'middle', fontSize: fsz(sc.scena, 7.7, 1.12, 13, 9), color: 'FFFFFF' });
        tb(s, sc.domanda, { x: 0.5, y: yS + 1.48, w: 9, h: 0.4, valign: 'middle', fontSize: fsz(sc.domanda, 9, 0.4, 14, 9) });
        const n = sc.opz.length, h = Math.min(0.75, (HMAX - yS - 1.98) / n - 0.08);
        const fOp = Math.min(...sc.opz.map(([o]) => fsz(o, 8.1, h, 13, 8.5)));
        sc.opz.forEach(([o], k) => { const y = yS + 1.98 + k * (h + 0.08); card(s, 0.5, y, 9, h); badge(s, lettera(k), 0.62, y + (h - 0.4) / 2, 0.4, PET); txt(s, o, { x: 1.2, y, w: 8.1, h, valign: 'middle', fontSize: fOp }); });
        note(s, sc); const kk = sc.opz.findIndex(o => o[1]); await soluzioni(sc.tit, [[sc.domanda, `Risposta ${lettera(kk)}`, sc.opz[kk][2]], ...sc.opz.map(([o, ok, sp], k) => ok ? null : [`Risposta ${lettera(k)}`, 'Non corretta', sp]).filter(Boolean)]);
      } else if (t === 'abbina') {
        const dx = mescola(sc.coppie.map(c => c[1]), id.length * 31 + si * 7 + mi), n = sc.coppie.length, h = Math.min(0.62, (HMAX - yS) / n - 0.07);
        const fCa = Math.min(...sc.coppie.map(([a]) => fsz(a, 2.65, h, 12.5, 8.5))), fCb = Math.min(...dx.map(b => fsz(b, 5.15, h, 12, 8)));
        sc.coppie.forEach(([a], k) => { const y = yS + k * (h + 0.07); card(s, 0.5, y, 2.9, h, PET); txt(s, `${k + 1}. ${a}`, { x: 0.65, y, w: 2.65, h, valign: 'middle', fontSize: fCa, fontFace: FB, color: 'FFFFFF' }); });
        dx.forEach((b, k) => { const y = yS + k * (h + 0.07); card(s, 3.65, y, 5.85, h); badge(s, lettera(k), 3.75, y + (h - 0.36) / 2, 0.36, ROS); txt(s, b, { x: 4.25, y, w: 5.15, h, valign: 'middle', fontSize: fCb }); });
        note(s, sc); await soluzioni(sc.tit, sc.coppie.map(([a, b], k) => [`${k + 1}. ${a}`, `${lettera(dx.indexOf(b))} – ${b}`, '']), ['Soggetto', 'Abbinamento corretto', '']);
      } else if (t === 'sintesi') {
        const n = sc.voci.length, h = Math.min(0.68, (HMAX - yS) / n - 0.08);
        const fV = Math.min(...sc.voci.map(v => fsz(v, 8.1, h, 14, 9)));
        for (const [k, v] of sc.voci.entries()) { const y = yS + k * (h + 0.08); card(s, 0.5, y, 9, h); await cerchio(s, 0.62, y + (h - 0.42) / 2, 0.42, 'FaCheck', '2E7D4F'); txt(s, v, { x: 1.25, y, w: 8.1, h, valign: 'middle', fontSize: fV }); }
        note(s, sc);
      } else if (t === 'verifica') {
        const parti = spezza(sc.domande, 3);
        for (const [pi, parte] of parti.entries()) { const ss = pi ? nuova(`${sc.tit} (${pi + 1}/${parti.length})`) : s;
          if (!pi && parti.length > 1) { /* titolo già impostato */ }
          const h = (HMAX - yS) / parte.length - 0.1;
          parte.forEach(([q, opz], k) => { const n = pi * Math.ceil(sc.domande.length / parti.length) + k + 1, y = yS + k * (h + 0.1);
            card(ss, 0.5, y, 9, h); tb(ss, `${n}. ${q}`, { x: 0.65, y: y + 0.06, w: 8.7, h: 0.32, fontSize: fsz(q, 8.5, 0.32, 12.5, 9) });
            opz.forEach((o, j) => txt(ss, `${String.fromCharCode(97 + j)}) ${o}`, { x: 0.8 + (j % 2) * 4.35, y: y + 0.42 + Math.floor(j / 2) * ((h - 0.48) / 2), w: 4.2, h: (h - 0.48) / 2, valign: 'middle', fontSize: fsz(o, 4.0, (h - 0.48) / 2, 11, 7.5), color: GR })); });
          if (pi) ss.addNotes(`Verifica intermedia: domande ${pi * Math.ceil(sc.domande.length / parti.length) + 1}–${pi * Math.ceil(sc.domande.length / parti.length) + parte.length}.`); }
        note(s, sc, `Superamento: almeno ${sc.soglia} risposte corrette su ${sc.domande.length}.`);
        await soluzioni(sc.tit, sc.domande.map(([q, opz, k, sp], i) => [`${i + 1}. ${q}`, `${String.fromCharCode(97 + k)}) ${opz[k]}`, sp || '']));
      } else if (t === 'figure') {
        const n = sc.voci.length, cols = n > 6 ? 4 : n > 4 ? 3 : 2, rows = Math.ceil(n / cols), gw = 0.15, w = (9 - (cols - 1) * gw) / cols, h = (HMAX - yS - (rows - 1) * 0.12) / rows;
        const fT = Math.min(...sc.voci.map(v => fsz(v[1], w - 0.8, 0.55, 12.5, 8))), fD = Math.min(...sc.voci.map(v => fsz(v[2], w - 0.28, h - 0.8, 11, 7)));
        for (const [k, [ic, ti, de]] of sc.voci.entries()) { const x = 0.5 + (k % cols) * (w + gw), y = yS + Math.floor(k / cols) * (h + 0.12);
          card(s, x, y, w, h); await cerchio(s, x + 0.12, y + 0.12, 0.5, ic, k % 2 ? ROS : PET);
          tb(s, ti, { x: x + 0.7, y: y + 0.1, w: w - 0.8, h: 0.55, valign: 'middle', fontSize: fT });
          txt(s, de, { x: x + 0.14, y: y + 0.72, w: w - 0.28, h: h - 0.8, fontSize: fD, color: GR }); }
        note(s, sc);
      } else if (t === 'diritto') {
        card(s, 0.5, yS, 9, HMAX - yS - 0.05, PET); await cerchio(s, 0.9, yS + 0.5, 1.1, 'FaPersonRunning', ROS);
        txt(s, sc.testo, { x: 2.4, y: yS + 0.3, w: 6.8, h: HMAX - yS - 0.8, valign: 'middle', fontSize: fsz(sc.testo, 6.8, HMAX - yS - 0.8, 19, 11), fontFace: FB, color: 'FFFFFF' });
        note(s, sc);
      } else throw new Error('Tipo di schermata non gestito: ' + t);
    }
  }

  async function articolo(s, sc) {
    const y0 = 1.3; const commi = sc.commi, hasNota = !!sc.nota, two = commi.length > 5, cols = two ? 2 : 1;
    const per = Math.ceil(commi.length / cols), w = (9 - (cols - 1) * 0.2) / cols, hNota = hasNota ? 0.62 : 0, H = HMAX - y0 - hNota - (hasNota ? 0.1 : 0);
    const h = H / per - 0.07;
    const fCm = Math.min(...commi.map(([le, te]) => fsz(te, w - (le.length > 2 ? 0.62 : 0.42) - 0.3, h - 0.04, 12, 7)));
    commi.forEach(([le, te], k) => { const c = Math.floor(k / per), r = k % per, x = 0.5 + c * (w + 0.2), y = y0 + r * (h + 0.07);
      card(s, x, y, w, h); const bw = le.length > 2 ? 0.62 : 0.42;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.1, y: y + (h - 0.34) / 2, w: bw, h: 0.34, fill: { color: ROS }, line: { color: ROS }, rectRadius: 0.06 });
      txt(s, le, { x: x + 0.1, y: y + (h - 0.34) / 2, w: bw, h: 0.34, align: 'center', valign: 'middle', fontSize: 9.5, fontFace: FB, color: 'FFFFFF' });
      txt(s, te, { x: x + bw + 0.2, y, w: w - bw - 0.3, h, valign: 'middle', fontSize: fCm }); });
    if (hasNota) { card(s, 0.5, HMAX - hNota, 9, hNota, PET); txt(s, sc.nota, { x: 0.7, y: HMAX - hNota, w: 8.6, h: hNota, valign: 'middle', fontSize: fsz(sc.nota, 8.6, hNota - 0.06, 11.5, 8), fontFace: FB, color: 'FFFFFF' }); }
  }

  async function soluzioni(tit, righe, intest = ['Domanda / affermazione', 'Risposta corretta', 'Spiegazione']) {
    const parti = spezza(righe, 6);
    for (const [pi, parte] of parti.entries()) {
      const s = nuova(`Soluzioni · ${tit.replace(/^Esercitazione \d+ · |^Verifica intermedia · /, '')}${parti.length > 1 ? ` (${pi + 1}/${parti.length})` : ''}`);
      const conSp = parte.some(r => r[2]), cw = conSp ? [3.4, 2.1, 3.5] : [4.2, 4.8];
      const hdr = (conSp ? intest : intest.slice(0, 2)).map(t => ({ text: t, options: { fontFace: FB, color: 'FFFFFF', fill: { color: PET }, valign: 'middle' } }));
      const rows = [hdr, ...parte.map(r => (conSp ? r : r.slice(0, 2)).map((c, j) => { const op = { fontFace: j === 1 ? FB : FM, color: j === 1 ? '2E7D4F' : TX, valign: 'middle' }; return { text: /[₀-₉→▲▼ΣψΔλρσμ]/.test(String(c)) ? runs(String(c), { fontFace: op.fontFace, color: op.color }) : c, options: op }; }))];
      const tot = parte.reduce((a, r) => a + r.join(' ').length, 0);
      s.addTable(rows, { x: 0.5, y: 1.2, w: 9, colW: cw, fontSize: tot > 900 ? 8 : tot > 600 ? 9 : 10, border: { type: 'solid', pt: 0.25, color: 'A9BEC4' }, margin: [3, 5, 3, 5], autoPage: false });
      s.addNotes('Diapositiva riservata al docente: mostrarla dopo che i partecipanti hanno risposto, commentando ciascuna soluzione.');
    }
  }

  /* ---------- test finale e chiusura ---------- */
  sez = 'Conclusione'; pres.addSection({ title: sez });
  let s = pres.addSlide({ masterName: 'Sezione', sectionTitle: sez }); s.addText('CONCLUSIONE', { placeholder: 'body' }); s.addText('Test finale e attestato', { placeholder: 'title' });
  if (!Object.values(SCELTA.mod).every(x => x === '-')) { const f = await foto('aula', 4.6, 5.625); s.addImage({ data: f.data, x: 5.4, y: 0, w: 4.6, h: 5.625 }); }
  const tf = C.testFinale;
  s.addNotes(`Il test finale comprende ${tf.domande} domande a risposta multipla. Per superarlo occorre almeno il ${tf.soglia}% di risposte corrette. In e-learning sono disponibili ${tf.tentativi} tentativi; in aula, in caso di esito negativo, il test può essere ripetuto una volta.`);
  s = nuova('Come si conclude il corso');
  const fine = [['FaClockRotateLeft', 'Frequenza', 'Completamento di tutti i moduli e frequenza di almeno il 90% del monte ore'], ['FaListCheck', 'Test finale', `${tf.domande} domande a risposta multipla; superamento con almeno il ${tf.soglia}% di risposte corrette`], ['FaCertificate', 'Attestato', 'Rilasciato al superamento del test, con codice univoco e QR code di verifica']];
  for (const [k, [ic, ti, de]] of fine.entries()) { const x = 0.5 + k * 3.07; card(s, x, 1.25, 2.86, 3.6); await cerchio(s, x + 0.98, 1.5, 0.9, ic, k === 1 ? ROS : PET);
    tb(s, ti, { x: x + 0.2, y: 2.55, w: 2.46, h: 0.45, align: 'center', fontSize: 15 }); txt(s, de, { x: x + 0.22, y: 3.1, w: 2.42, h: 1.6, align: 'center', fontSize: 12, color: GR }); }
  s.addNotes('Ricordare ai partecipanti di compilare il questionario di gradimento al termine del corso.');
  s = nuova('Grazie per l\'attenzione');
  txt(s, 'ASTRA S.r.l. – Centro di formazione AiFOS · Via Potito Randi, 6 – 64100 Teramo', { x: 0.5, y: 0.95, w: 9, h: 0.3, fontSize: 11, color: GR });
  { const L = 'DCE3E6', y = 1.55, h = 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h, fill: { color: 'FFFFFF' }, line: { color: L, width: 0.25 } });
    s.addShape(pres.shapes.LINE, { x: 5, y, w: 0, h, line: { color: L, width: 0.25 } });
    const col = (x, ti, no, qu) => { tb(s, ti, { x, y: y + 0.15, w: 4.5, h: 0.3, align: 'center', fontSize: 12 });
      txt(s, no, { x, y: y + 0.45, w: 4.5, h: 0.28, align: 'center', fontSize: 12 }); txt(s, qu, { x, y: y + 0.73, w: 4.5, h: 0.25, align: 'center', fontSize: 9.5, color: GR }); };
    col(0.5, 'Il Responsabile del progetto formativo', 'dr. Jonathan D\'Eugenio', 'TPALL · HSE Manager');
    col(5, 'Il soggetto formatore', 'ASTRA S.r.l. – dott. Alfio Di Domenico', 'Centro di formazione AiFOS');
    const dw = 2.1, dh = dw * 2376 / 2713; s.addImage({ data: TIMBRO, x: 0.5 + (4.5 - dw) / 2, y: y + 0.5, w: dw, h: dh });
    const aw = 3.2, ah = aw * 1116 / 2583; s.addImage({ data: TIMBRO_A, x: 5 + (4.5 - aw) / 2, y: y + 0.72, w: aw, h: ah }); }
  s.addNotes('Ringraziare i partecipanti e ricordare la compilazione del questionario di gradimento.');

  const OUT = path.join(ROOT, 'formazione/slide'); fs.mkdirSync(OUT, { recursive: true });
  const f = path.join(OUT, `Slide_${id}.pptx`);
  await pres.writeFile({ fileName: f }); await applyTheme(f, THEME);
  /* il simbolo degli elenchi puntati usa Eras (altrimenti il PDF ricorre a un carattere di sistema) */
  { const JSZip = require('/opt/npm-tools/node_modules/jszip'), z = await JSZip.loadAsync(fs.readFileSync(f));
    for (const n of Object.keys(z.files).filter(n => /^ppt\/(slides|slideLayouts|slideMasters)\/[^/]+\.xml$/.test(n))) {
      const x = await z.file(n).async('string'), y = x.replace(/<a:buChar /g, '<a:buFont typeface="' + FM + '"/><a:buChar ').replace(/<a:buFont typeface="[^"]*"[^>]*\/><a:buFont /g, '<a:buFont ');
      if (y !== x) z.file(n, y); }
    fs.writeFileSync(f, await z.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })); }
  console.log(f);
}
(async () => { for (const id of (process.argv.length > 2 ? process.argv.slice(2) : ['LAV-GEN'])) await genera(id); })().catch(e => { console.error(e); process.exit(1); });
