/* Generatore del Documento progettuale dei corsi ASTRA – © 2026 dr. Jonathan D'Eugenio
   Uso: node genera_progetto.js LAV-GEN [ALTRO-ID ...]   (senza argomenti: tutti i corsi) */
const fs = require('fs'), path = require('path');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, BorderStyle,
  Header, Footer, PageNumber, ImageRun, HeadingLevel, LevelFormat, VerticalAlign, PageBreak, TableLayoutType } = require('docx');

global.window = {}; eval(fs.readFileSync('/home/claude/astra-portale/sito/assets/data.js', 'utf8')); const D = window.ASTRA;
const OUT = path.join(__dirname, 'progetti'); fs.mkdirSync(OUT, { recursive: true });
const LOGO = fs.readFileSync('/home/claude/astra-portale/loghi/astra_logo_4K.png');
const TIMBRO = fs.readFileSync('/home/claude/astra-portale/formazione/risorse/timbro_DEU.png'); // timbro e firma del RPF
const FM = 'Eras Medium ITC', FB = 'Eras Bold ITC', PETROLIO = '0F3C47', CHIARO = 'E9F2F4', GRIGIO = '3E4F56';
const BORDO = { style: BorderStyle.SINGLE, size: 2, color: '7F9CA4' };          // 1/4 pt
const BORDI = { top: BORDO, bottom: BORDO, left: BORDO, right: BORDO };
const MOD = { EL: 'E-learning', VCS: 'Videoconferenza sincrona', P: 'Aula (presenza)' };
const AMB = { sicurezza: 'Salute e sicurezza sul lavoro', ambiente: 'Ambiente', energia: 'Energia', haccp: 'Igiene degli alimenti' };
const W = 9638; // larghezza utile A4 con margini 2 cm (DXA)

const r = (t, o = {}) => new TextRun({ text: t, font: o.b ? FB : FM, size: o.s || 20, color: o.c || '1A2A30', ...o.x });
const p = (testo, o = {}) => new Paragraph({ alignment: o.al || AlignmentType.JUSTIFIED, spacing: { before: o.sb || 0, after: o.sa ?? 120, line: 288 },
  keepNext: !!o.kn, children: Array.isArray(testo) ? testo : [r(testo, o)] });
const titolo = (t, sotto) => [new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 320, after: sotto ? 40 : 160 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'C81F26', space: 4 } }, children: [new TextRun({ text: t, font: FB, size: 26, color: PETROLIO })] })]
  .concat(sotto ? [p(sotto, { c: GRIGIO, s: 19, sa: 160, kn: true })] : []);
const punto = (t) => new Paragraph({ numbering: { reference: 'punti', level: 0 }, alignment: AlignmentType.LEFT, spacing: { after: 60, line: 276 }, children: [r(t)] });

function cella(testo, o = {}) {
  const scura = o.scura;
  return new TableCell({ width: { size: o.w, type: WidthType.DXA }, borders: BORDI, verticalAlign: VerticalAlign.CENTER,
    margins: { top: 70, bottom: 70, left: 110, right: 110 }, columnSpan: o.span,
    shading: scura ? { type: ShadingType.CLEAR, color: 'auto', fill: PETROLIO } : (o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined),
    children: (Array.isArray(testo) ? testo : [testo]).map(t => t instanceof Paragraph ? t : new Paragraph({ alignment: o.al || AlignmentType.LEFT, spacing: { after: 0, line: 264 },
      children: [new TextRun({ text: String(t), font: (scura || o.b) ? FB : FM, size: o.s || 18, color: scura ? 'FFFFFF' : '1A2A30' })] })) });
}
const tabella = (larg, righe) => new Table({ width: { size: larg.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: larg, layout: TableLayoutType.FIXED, rows: righe });
/* tabella anagrafica: voce su fondo scuro, dato su fondo bianco */
const anagrafica = (coppie) => tabella([3100, W - 3100], coppie.map(([k, v]) => new TableRow({ cantSplit: true, children: [cella(k, { w: 3100, scura: true }), cella(v, { w: W - 3100 })] })));

function documento(c) {
  const A = D.azienda, R = D.rpf, oggi = new Date();
  const ammesse = c.mod.map(m => MOD[m]).join(', ');
  const nonAmm = ['EL', 'VCS'].filter(m => !c.mod.includes(m)).map(m => MOD[m]);
  const abil = c.tipo === 'Abilitazione' || c.id === 'CONF';
  const corpo = [];
  // ---------- Frontespizio ----------
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 600, after: 400 }, children: [new ImageRun({ type: 'png', data: LOGO, transformation: { width: 260, height: Math.round(260 * 459 / 1066) } })] }));
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: 'DOCUMENTO PROGETTUALE', font: FB, size: 40, color: PETROLIO })] }));
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: c.titolo, font: FB, size: 34, color: 'C81F26' })] }));
  corpo.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 }, children: [new TextRun({ text: `Codice ${c.id} · ${c.ore} ore · ${AMB[c.ambito]}`, font: FM, size: 22, color: GRIGIO })] }));
  corpo.push(anagrafica([
    ['Soggetto formatore', `${A.ragioneSociale} – ${A.ruolo}`],
    ['Sede', `${A.indirizzo}, ${A.cap} ${A.comune} (${A.provincia})`],
    ['Responsabile del progetto formativo', `${R.nome} – ${R.qualifica}`],
    ['Riferimenti normativi', c.rif],
    ['Revisione', `Rev. 00 del ${oggi.toLocaleDateString('it-IT')}`]]));
  corpo.push(new Paragraph({ children: [new PageBreak()] }));
  // ---------- 1. Presentazione ----------
  corpo.push(...titolo('1. Presentazione e contesto normativo', 'Finalità del corso e quadro di riferimento'), p(c.pres));
  // ---------- 2. Destinatari e requisiti ----------
  corpo.push(...titolo('2. Destinatari e requisiti di accesso', 'Analisi dei fabbisogni formativi'),
    anagrafica([['Destinatari', c.dest], ['Requisiti di accesso', c.req], ['Numero massimo di partecipanti', abil ? '30 per la parte teorica; rapporto istruttore/discenti 1:6 per le esercitazioni pratiche' : '30 per edizione'], ['Lingua', 'Italiano; per i lavoratori stranieri è verificata preliminarmente la comprensione della lingua']]));
  // ---------- 3. Obiettivi ----------
  corpo.push(...titolo('3. Obiettivi formativi', 'Risultati di apprendimento attesi'), p('Al termine del corso il partecipante è in grado di:', { sa: 80 }), ...c.obj.map(o => punto(o.charAt(0).toLowerCase() + o.slice(1))));
  // ---------- 4. Programma ----------
  corpo.push(...titolo('4. Programma e articolazione oraria', 'Moduli, contenuti e durata'));
  const L = [2700, W - 2700 - 900, 900];
  const intest = new TableRow({ tableHeader: true, cantSplit: true, children: ['Modulo', 'Contenuti', 'Ore'].map((t, i) => cella(t, { w: L[i], scura: true, al: i === 2 ? AlignmentType.CENTER : AlignmentType.LEFT })) });
  const righe = c.moduli.map(m => new TableRow({ cantSplit: true, children: [cella(m.t, { w: L[0], b: true }),
    cella(m.c.map(x => new Paragraph({ numbering: { reference: 'punti', level: 0 }, spacing: { after: 20, line: 252 }, children: [new TextRun({ text: x, font: FM, size: 18 })] })), { w: L[1] }),
    cella(String(m.ore), { w: L[2], al: AlignmentType.CENTER })] }));
  righe.push(new TableRow({ cantSplit: true, children: [cella('Durata complessiva', { w: L[0] + L[1], span: 2, b: true, fill: CHIARO }), cella(String(c.ore), { w: L[2], al: AlignmentType.CENTER, b: true, fill: CHIARO })] }));
  corpo.push(tabella(L, [intest, ...righe]));
  corpo.push(p(abil ? 'Articolazione oraria conforme all\'Accordo Stato-Regioni del 17 aprile 2025.' : 'La durata complessiva corrisponde a quella prevista dalla norma di riferimento; ove la norma non stabilisce la ripartizione oraria dei singoli moduli, questa è definita nel presente documento.', { s: 17, c: GRIGIO, sb: 80, al: AlignmentType.LEFT }));
  // ---------- 5. Modalità ----------
  const modi = [['Modalità ammesse', ammesse]];
  if (nonAmm.length) modi.push(['Modalità non ammesse', nonAmm.join(' e ')]);
  if (c.mod.includes('P')) modi.push(['Sede delle lezioni in aula', `Sede ASTRA di ${A.comune} nelle date a calendario, oppure presso la sede del cliente previo accordo preventivo`]);
  if (c.mod.includes('VCS')) modi.push(['Videoconferenza sincrona', 'Docente in diretta; identificazione dei partecipanti; webcam attiva per l\'intera durata; registrazione automatica di accessi e uscite; partecipazione da computer o tablet (non da smartphone); interazione in tempo reale']);
  if (c.mod.includes('EL')) modi.push(['E-learning', 'Piattaforma Moodle con pacchetti SCORM; tracciamento di accessi, tempi di fruizione e avanzamento; fruizione sequenziale dei moduli; verifiche intermedie; controllo periodico di presenza attiva; tutor di contenuto e di processo raggiungibili via messaggistica, email e telefono; rilascio dell\'attestato solo al completamento di tutti i moduli e al superamento della verifica finale']);
  corpo.push(...titolo('5. Modalità di erogazione', 'Requisiti organizzativi e tecnici'), anagrafica(modi));
  // ---------- 6. Metodologia ----------
  corpo.push(...titolo('6. Metodologia didattica e materiali'),
    p(abil || (c.mod.length === 1 && c.mod[0] === 'P') ? 'Lezioni frontali con supporti multimediali alternate a esercitazioni pratiche in condizioni di sicurezza, con attrezzature e dispositivi conformi.' : 'Metodo didattico interattivo con lezioni frontali, discussione di casi di studio ed esercitazioni. In e-learning i contenuti sono organizzati in unità didattiche con verifiche intermedie.'),
    p('Ai partecipanti è fornito il materiale didattico in formato digitale (slide del corso e riferimenti normativi).'));
  // ---------- 7. Docenti ----------
  corpo.push(...titolo('7. Docenti e tutor'),
    p(c.ambito === 'sicurezza' ? 'I docenti possiedono i requisiti di qualificazione previsti dal Decreto Interministeriale 6 marzo 2013 e documentata esperienza nelle materie trattate.' + (abil ? ' Gli istruttori delle esercitazioni pratiche possiedono esperienza professionale pratica almeno triennale.' : '') : 'I docenti sono professionisti del settore con esperienza pluriennale nella consulenza e nelle attività del laboratorio accreditato ASTRA Studio Chimico Associato.'),
    anagrafica([['Docente', '______________________________'], ['Tutor', '______________________________']]));
  // ---------- 8. Verifica ----------
  corpo.push(...titolo('8. Frequenza e verifica dell\'apprendimento'),
    p('L\'ammissione alla verifica finale è subordinata alla frequenza di almeno il 90% del monte ore. ' + (abil ? 'Al termine del modulo teorico è somministrato un questionario a risposta multipla, il cui superamento consente l\'accesso al modulo pratico; la verifica finale consiste in una prova pratica e in un colloquio.' : 'La verifica consiste in un test a risposta multipla con soglia di superamento del 70% di risposte corrette; in caso di esito negativo il test può essere ripetuto una volta dopo un nuovo studio dei contenuti.')),
    p('Al termine del corso è somministrato un questionario anonimo di valutazione del gradimento.'));
  // ---------- 9. Attestato ----------
  corpo.push(...titolo('9. Attestato, registrazione e conservazione'),
    p('Al superamento della verifica finale è rilasciato l\'attestato di frequenza con verifica dell\'apprendimento, recante: dati anagrafici e codice fiscale del partecipante, denominazione del soggetto formatore, titolo e durata del corso, riferimenti normativi, modalità di erogazione, periodo di svolgimento, esito della verifica, codice univoco e QR code di verifica.'),
    p('Il soggetto formatore conserva per almeno dieci anni il presente documento progettuale, il registro delle presenze (o i report della piattaforma), il verbale della verifica finale e copia degli attestati.'));
  // ---------- 10. Privacy ----------
  corpo.push(...titolo('10. Trattamento dei dati personali'),
    p(`I dati dei partecipanti sono trattati da ${A.ragioneSociale} in qualità di titolare ai sensi del Reg. UE 2016/679 per l'erogazione del corso, il rilascio e la registrazione dell'attestato e gli adempimenti di legge. L'iscrizione è subordinata alla presa visione dell'informativa.`));
  // ---------- Legenda e firma ----------
  corpo.push(...titolo('Legenda delle sigle'), anagrafica([['ASR', 'Accordo Stato-Regioni'], ['D.lgs.', 'Decreto legislativo'], ['D.I.', 'Decreto interministeriale'], ['SCORM', 'Standard per il tracciamento dei corsi e-learning'], ['RPF', 'Responsabile del progetto formativo']]));
  corpo.push(new Paragraph({ spacing: { before: 480 }, keepNext: true, children: [r(`${A.comune}, ${oggi.toLocaleDateString('it-IT')}`)] }));
  corpo.push(tabella([W / 2, W / 2], [new TableRow({ cantSplit: true, children: [cella([new Paragraph({ children: [r('Il Responsabile del progetto formativo', { b: true })] }), new Paragraph({ children: [r(R.nome)] }), new Paragraph({ spacing: { before: 120 }, children: [new ImageRun({ type: 'png', data: TIMBRO, transformation: { width: 150, height: Math.round(150 * 262 / 314) }, altText: { name: 'Timbro e firma', title: 'Timbro e firma', description: "Timbro e firma del dr. Jonathan D'Eugenio" } })] })], { w: W / 2 }),
    cella([new Paragraph({ children: [r('Timbro del soggetto formatore', { b: true })] }), new Paragraph({ spacing: { before: 760 }, children: [r(' ')] })], { w: W / 2 })] })]));

  const piede = new Footer({ children: [new Paragraph({ alignment: AlignmentType.LEFT, tabStops: [{ type: 'right', position: W }], children: [
    new TextRun({ text: '© 2026 dr. Jonathan D\'Eugenio', font: FM, size: 16, color: GRIGIO }), new TextRun({ text: '\t', font: FM, size: 16 }),
    new TextRun({ children: ['Pag. ', PageNumber.CURRENT, ' di ', PageNumber.TOTAL_PAGES], font: FM, size: 16, color: GRIGIO })] })] });
  const testata = new Header({ children: [new Paragraph({ tabStops: [{ type: 'right', position: W }], border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: '7F9CA4', space: 4 } }, children: [
    new ImageRun({ type: 'png', data: LOGO, transformation: { width: 96, height: Math.round(96 * 459 / 1066) } }), new TextRun({ text: '\t', font: FM }),
    new TextRun({ text: `Documento progettuale · ${c.id} · Rev. 00`, font: FM, size: 16, color: GRIGIO })] })] });
  const frontePiede = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '© 2026 dr. Jonathan D\'Eugenio', font: FM, size: 16, color: GRIGIO })] })] });

  return new Document({
    creator: 'dr. Jonathan D\'Eugenio', title: `Documento progettuale – ${c.titolo}`,
    styles: { default: { document: { run: { font: FM, size: 20 } }, heading1: { run: { font: FB, size: 26, color: PETROLIO }, paragraph: { spacing: { before: 320, after: 120 }, keepNext: true } } } },
    numbering: { config: [{ reference: 'punti', levels: [{ level: 0, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } }, run: { font: FM } } }] }] },
    sections: [{ properties: { titlePage: true, page: { margin: { top: 1300, bottom: 1000, left: 1134, right: 1134, header: 500, footer: 480 } } },
      headers: { default: testata, first: new Header({ children: [new Paragraph('')] }) }, footers: { default: piede, first: frontePiede }, children: corpo }]
  });
}

(async () => {
  const ids = process.argv.slice(2); const lista = ids.length ? D.corsi.filter(c => ids.includes(c.id)) : D.corsi;
  for (const c of lista) { const f = path.join(OUT, `Documento_progettuale_${c.id}.docx`); fs.writeFileSync(f, await Packer.toBuffer(documento(c))); console.log(f); }
})();
