/* Generatore del Registro delle presenze dei corsi ASTRA (aula e videoconferenza sincrona) – © 2026 dr. Jonathan D'Eugenio
   Uso: node genera_registro.js [ID ...]   (senza argomenti: tutti i corsi con modalità in aula o in videoconferenza) */
const fs = require('fs'), path = require('path');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, BorderStyle,
  Header, Footer, PageNumber, ImageRun, VerticalAlign, PageBreak, TableLayoutType, PageOrientation, HeightRule } = require('docx');
global.window = {}; eval(fs.readFileSync('/home/claude/astra-portale/sito/assets/data.js', 'utf8')); const D = window.ASTRA;
const OUT = path.join(__dirname, 'registri'); fs.mkdirSync(OUT, { recursive: true });
const LOGO = fs.readFileSync('/home/claude/astra-portale/loghi/astra_logo_4K.png');
const { sezioneFirme } = require('./firme.js');
const FM = 'Eras Medium ITC', FB = 'Eras Bold ITC', PETROLIO = '0F3C47', GRIGIO = '3E4F56', ROSSO = 'C81F26';
const BORDO = { style: BorderStyle.SINGLE, size: 2, color: '7F9CA4' };           // 1/4 pt
const BORDI = { top: BORDO, bottom: BORDO, left: BORDO, right: BORDO };
const W = 16838 - 2 * 1000;                                                        // A4 orizzontale, margini laterali 1000 DXA
const AMB = { sicurezza: 'Salute e sicurezza sul lavoro', ambiente: 'Ambiente', energia: 'Energia', haccp: 'Igiene degli alimenti' };
const MAXG = 8;                                                                    // ore massime per giornata (Accordo 2025)
const RIGHE = 20;                                                                  // partecipanti per foglio

const r = (t, o = {}) => new TextRun({ text: t, font: o.b ? FB : FM, size: o.s || 18, color: o.c || '1A2A30' });
const par = (figli, o = {}) => new Paragraph({ alignment: o.al || AlignmentType.JUSTIFIED, spacing: { before: o.sb || 0, after: o.sa ?? 100, line: 276 }, keepNext: !!o.kn,
  children: Array.isArray(figli) ? figli : [r(figli, o)] });
const titolo = (t, sotto, pb = true) => [new Paragraph({ keepNext: true, pageBreakBefore: pb, spacing: { before: 120, after: sotto ? 20 : 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ROSSO, space: 3 } }, children: [new TextRun({ text: t, font: FB, size: 24, color: PETROLIO })] })]
  .concat(sotto ? [new Paragraph({ keepNext: true, spacing: { after: 120 }, children: [r(sotto, { c: GRIGIO, s: 18 })] })] : []);
function cella(testo, o = {}) {
  return new TableCell({ width: { size: o.w, type: WidthType.DXA }, borders: BORDI, verticalAlign: VerticalAlign.CENTER, columnSpan: o.span,
    margins: { top: o.mt ?? 50, bottom: o.mt ?? 50, left: 90, right: 90 },
    shading: o.scura ? { type: ShadingType.CLEAR, color: 'auto', fill: PETROLIO } : (o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined),
    children: (Array.isArray(testo) ? testo : [testo]).map(t => t instanceof Paragraph ? t : new Paragraph({ alignment: o.al || AlignmentType.LEFT, spacing: { after: 0, line: 252 },
      children: [new TextRun({ text: String(t), font: (o.scura || o.b) ? FB : FM, size: o.s || 17, color: o.scura ? 'FFFFFF' : '1A2A30' })] })) });
}
const tab = (larg, righe) => new Table({ width: { size: larg.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: larg, layout: TableLayoutType.FIXED, rows: righe });
const scala = (pesi) => { const s = pesi.reduce((a, b) => a + b, 0); const l = pesi.map(x => Math.floor(W * x / s)); l[l.length - 1] += W - l.reduce((a, b) => a + b, 0); return l; };
const intest = (larg, voci) => new TableRow({ tableHeader: true, cantSplit: true, children: voci.map((v, i) => cella(v, { w: larg[i], scura: true, al: AlignmentType.CENTER })) });
const vuota = (larg, n, h = 500) => new TableRow({ cantSplit: true, height: { value: h, rule: HeightRule.ATLEAST },
  children: larg.map((w, i) => cella(i === 0 ? String(n) : '', { w, mt: 10, al: i === 0 ? AlignmentType.CENTER : AlignmentType.LEFT })) });
const anag = (coppie, k = 4200) => tab([k, W - k], coppie.map(([a, b]) => new TableRow({ cantSplit: true, children: [cella(a, { w: k, scura: true }), cella(b, { w: W - k })] })));
const ore = h => String(h).replace('.', ',');

/* ripartizione dei moduli nelle giornate (max 8 ore ciascuna), in ordine di programma */
function giornate(c) {
  const g = []; let cur = { ore: 0, arg: [] };
  for (const m of c.moduli) {
    let resto = m.ore;
    while (resto > 1e-9) {
      if (cur.ore >= MAXG - 1e-9) { g.push(cur); cur = { ore: 0, arg: [] }; }
      const q = Math.min(resto, MAXG - cur.ore);
      cur.arg.push(`${m.t}${q < m.ore - 1e-9 ? ` (${ore(+q.toFixed(2))} h di ${ore(m.ore)})` : ''}`); cur.ore += q; resto -= q;
    }
  }
  if (cur.ore > 0) g.push(cur);
  return g;
}

function documento(c) {
  const A = D.azienda, R = D.rpf, AIF = c.ambito === 'sicurezza', G = giornate(c);
  const vcs = c.mod.includes('VCS'), aula = c.mod.includes('P');
  const corpo = [];
  // ---------- Frontespizio e dati dell'edizione ----------
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 160 }, children: [new ImageRun({ type: 'png', data: LOGO, transformation: { width: 200, height: Math.round(200 * 459 / 1066) } })] }));
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: 'REGISTRO DELLE PRESENZE', font: FB, size: 36, color: PETROLIO })] }));
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: c.titolo, font: FB, size: 28, color: ROSSO })] }));
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 }, children: [new TextRun({ text: `Codice ${c.id} · ${c.ore} ore · ${AMB[c.ambito]} · ${c.rif}`, font: FM, size: 19, color: GRIGIO })] }));
  const modi = [aula ? '☐ Aula presso la sede ASTRA   ☐ Aula presso la sede del cliente' : '', vcs ? '☐ Videoconferenza sincrona' : ''].filter(Boolean).join('   ');
  corpo.push(anag([
    ...(AIF ? [['Soggetto formatore', 'AiFOS – Associazione Italiana Formatori ed Operatori della Sicurezza sul Lavoro'], ['Centro di formazione', `${A.ragioneSociale} – ${A.ruolo}`]] : [['Soggetto formatore', A.ragioneSociale]]),
    ['Codice dell\'edizione' + (AIF ? ' (AiFOS)' : ''), ''],
    ['Modalità di erogazione', modi],
    ['Sede di svolgimento / piattaforma', ''],
    ['Date di svolgimento', ''],
    ['Durata del corso', `${ore(c.ore)} ore in ${G.length} ${G.length === 1 ? 'giornata' : 'giornate'} (massimo ${MAXG} ore al giorno)`],
    ['Responsabile del progetto formativo', `${R.nome} – ${R.qualifica}`],
    ['Docenti', ''], ['Tutor / co-docente', ''],
    ['Frequenza minima', `90% del monte ore (${ore(+(c.ore * 0.9).toFixed(2))} ore) per l'ammissione alla verifica finale`]]));
  corpo.push(par([r('Istruzioni di compilazione. ', { b: true, c: PETROLIO }), r(`Il registro è compilato in ogni sua parte con penna indelebile, senza cancellature né spazi vuoti (le righe non utilizzate si annullano con un tratto). Ogni partecipante firma all'ingresso e all'uscita indicando l'orario; ritardi e uscite anticipate sono annotati e concorrono al calcolo della frequenza. Il docente firma ogni giornata indicando gli argomenti trattati. ${vcs ? 'Nelle edizioni in videoconferenza sincrona le firme sono sostituite dal report degli accessi e delle uscite generato dalla piattaforma (identificazione del partecipante, orari di collegamento, webcam attiva), che si allega al registro; il docente compila comunque i fogli giornalieri. ' : ''}Il registro è conservato per almeno dieci anni con il documento progettuale, il verbale della verifica finale e copia degli attestati.`)], { sb: 200 }));

  // ---------- Anagrafica dei partecipanti ----------
  corpo.push(...titolo('Anagrafica dei partecipanti', 'Dati necessari al rilascio dell\'attestato e alla registrazione della formazione'));
  const la = scala([0.45, 2.1, 2.1, 1.35, 2.2, 2.6, 2.9]);
  corpo.push(tab(la, [intest(la, ['N.', 'Cognome', 'Nome', 'Data di nascita', 'Luogo di nascita', 'Codice fiscale', 'Azienda e mansione']),
    ...Array.from({ length: RIGHE }, (_, i) => vuota(la, i + 1, 400))]));

  // ---------- Fogli giornalieri ----------
  const lf = scala([0.45, 3.4, 2.4, 0.95, 2.4, 0.95]);
  G.forEach((g, i) => {
      corpo.push(...titolo(`Giornata ${i + 1} di ${G.length} – ${ore(+g.ore.toFixed(2))} ore`, 'Foglio presenze giornaliero'));
    const k = scala([1.2, 1.6, 1.0, 1.2, 1.0, 2.0]);
    corpo.push(tab(k, [new TableRow({ cantSplit: true, children: [cella('Data', { w: k[0], scura: true }), cella('', { w: k[1] }), cella('Orario', { w: k[2], scura: true }), cella('dalle ______ alle ______', { w: k[3] }), cella('Docente', { w: k[4], scura: true }), cella('', { w: k[5] })] }),
      new TableRow({ cantSplit: true, children: [cella('Argomenti trattati', { w: k[0], scura: true }), cella(g.arg.map(a => new Paragraph({ spacing: { after: 0, line: 252 }, children: [r('– ' + a, { s: 17 })] })), { w: W - k[0], span: 5 })] }),
      new TableRow({ cantSplit: true, children: [cella('Firma del docente', { w: k[0], scura: true }), cella('', { w: k[1] + k[2] + k[3], span: 3 }), cella('Firma del tutor', { w: k[4], scura: true }), cella('', { w: k[5] })], height: { value: 520, rule: HeightRule.ATLEAST } })]));
    corpo.push(new Paragraph({ spacing: { after: 80 }, children: [r(' ', { s: 8 })] }));
    corpo.push(tab(lf, [intest(lf, ['N.', 'Cognome e nome', 'Firma all\'ingresso', 'Ora', 'Firma all\'uscita', 'Ora']),
      ...Array.from({ length: RIGHE }, (_, n) => vuota(lf, n + 1, 320))]));
  });

  // ---------- Riepilogo della frequenza e della verifica ----------
  corpo.push(...titolo('Riepilogo della frequenza e della verifica finale', `Ammissione con frequenza pari ad almeno il 90% del monte ore (${ore(+(c.ore * 0.9).toFixed(2))} ore su ${ore(c.ore)})`));
  const lr = scala([0.45, 3.3, 2.6, 1.2, 1.2, 1.5, 1.6, 1.6]);
  corpo.push(tab(lr, [intest(lr, ['N.', 'Cognome e nome', 'Codice fiscale', 'Ore frequentate', 'Frequenza %', 'Ammesso alla verifica', 'Esito della verifica', 'Codice attestato']),
    ...Array.from({ length: RIGHE }, (_, n) => vuota(lr, n + 1, 380))]));
  corpo.push(par([r('Dichiarazione. ', { b: true, c: PETROLIO }), r(`Il responsabile del progetto formativo dichiara che il corso si è svolto secondo il documento progettuale ${c.id}, che le presenze riportate corrispondono alla frequenza effettiva e che la verifica finale si è svolta secondo le modalità previste.`)], { sb: 240, kn: true }));
  corpo.push(...sezioneFirme(W, `${A.comune}, ____________________`, AIF));

  const piede = new Footer({ children: [new Paragraph({ tabStops: [{ type: 'right', position: W }], children: [
    new TextRun({ text: '© 2026 dr. Jonathan D\'Eugenio', font: FM, size: 16, color: GRIGIO }), new TextRun({ text: '\t', font: FM, size: 16 }),
    new TextRun({ children: ['Pag. ', PageNumber.CURRENT, ' di ', PageNumber.TOTAL_PAGES], font: FM, size: 16, color: GRIGIO })] })] });
  const testata = new Header({ children: [new Paragraph({ tabStops: [{ type: 'right', position: W }], border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: '7F9CA4', space: 4 } }, children: [
    new ImageRun({ type: 'png', data: LOGO, transformation: { width: 84, height: Math.round(84 * 459 / 1066) } }), new TextRun({ text: '\t', font: FM }),
    new TextRun({ text: `Registro delle presenze · ${c.id} · ${c.titolo} · Rev. 00`, font: FM, size: 16, color: GRIGIO })] })] });
  return new Document({ creator: 'dr. Jonathan D\'Eugenio', title: `Registro delle presenze – ${c.titolo}`,
    styles: { default: { document: { run: { font: FM, size: 18 } } } },
    sections: [{ properties: { titlePage: true, page: { size: { width: 11906, height: 16838, orientation: PageOrientation.LANDSCAPE }, margin: { top: 1000, bottom: 800, left: 1000, right: 1000, header: 400, footer: 400 } } },
      headers: { default: testata, first: new Header({ children: [new Paragraph('')] }) },
      footers: { default: piede, first: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '© 2026 dr. Jonathan D\'Eugenio', font: FM, size: 16, color: GRIGIO })] })] }) },
      children: corpo }] });
}

(async () => {
  const ids = process.argv.slice(2);
  const lista = (ids.length ? D.corsi.filter(c => ids.includes(c.id)) : D.corsi).filter(c => c.mod.includes('P') || c.mod.includes('VCS'));
  for (const c of lista) { const f = path.join(OUT, `Registro_presenze_${c.id}.docx`); fs.writeFileSync(f, await Packer.toBuffer(documento(c))); console.log(c.id, giornate(c).length); }
})();
