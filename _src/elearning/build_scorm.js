/* Costruzione pacchetto SCORM 1.2 – © 2026 dr. Jonathan D'Eugenio
   Uso: node build_scorm.js LAV-GEN  →  dist/LAV-GEN/ (cartella) + dist/SCORM_LAV-GEN.zip */
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const React = require('react'), RDS = require('react-dom/server'), fa = require('react-icons/fa6'), sharp = require('sharp');
const id = process.argv[2] || 'LAV-GEN';
const BASE = __dirname, ROOT = path.join(BASE, '..'), SRC = path.join(BASE, 'corsi', id), OUT = path.join(BASE, 'dist', id);
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
const mk = d => fs.mkdirSync(path.join(OUT, d), { recursive: true });
['player', 'dati', 'img', 'loghi', 'fonts'].forEach(mk);

global.window = {}; eval(fs.readFileSync(path.join(SRC, 'corso.js'), 'utf8')); const C = window.CORSO;

/* controllo durate */
let tot = 0; C.moduli.forEach(m => { tot += m.min; });
if (tot !== C.ore * 60) throw new Error(`Somma moduli ${tot} min ≠ ${C.ore * 60} min`);
const parole = C.moduli.flatMap(m => m.schermate).reduce((a, s) => a + (s.nar || '').split(/\s+/).length, 0);
console.log(`Moduli: ${C.moduli.length} · schermate: ${C.moduli.reduce((a, m) => a + m.schermate.length, 0)} · durata ${tot} min · narrazione ${parole} parole`);

/* icone (Font Awesome Free 6, CC BY 4.0) */
const testo = fs.readFileSync(path.join(SRC, 'corso.js'), 'utf8') + fs.readFileSync(path.join(BASE, 'player/player.js'), 'utf8');
const nomi = [...new Set(testo.match(/Fa[A-Z][A-Za-z0-9]+/g))];
const icone = {};
nomi.forEach(n => { if (!fa[n]) { console.warn('Icona mancante:', n); return; } icone[n] = RDS.renderToStaticMarkup(React.createElement(fa[n])).replace(/ (stroke|fill)="currentColor"/g, '').replace(/ stroke-width="0"/, '').replace(/ height="1em" width="1em"/, '').replace(/ style="[^"]*"/, ''); });
fs.writeFileSync(path.join(OUT, 'dati/icone.js'), '/* Font Awesome Free 6 – CC BY 4.0 – fontawesome.com */\nwindow.ICONE=' + JSON.stringify(icone) + ';');

/* pittogrammi ISO 7010 (Wikimedia Commons, pubblico dominio) */
const iso = JSON.parse(fs.readFileSync(path.join(ROOT, 'formazione/risorse/iso7010.json'), 'utf8')).svg;
const isoPul = {}; Object.entries(iso).forEach(([k, v]) => { isoPul[k] = v.replace(/<\?xml[^>]*>/, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<title>[\s\S]*?<\/title>/, '').replace(/<svg /, `<svg role="img" aria-label="ISO 7010 ${k}" `).replace(/ width="[^"]*"/, '').replace(/ height="[^"]*"/, ''); });
// garantisce viewBox per gli SVG che dichiarano solo width/height
Object.entries(iso).forEach(([k, v]) => { if (!/viewBox/.test(isoPul[k])) { const w = (v.match(/width="([\d.]+)/) || [])[1], h = (v.match(/height="([\d.]+)/) || [])[1]; if (w && h) isoPul[k] = isoPul[k].replace('<svg ', `<svg viewBox="0 0 ${w} ${h}" `); } });
fs.writeFileSync(path.join(OUT, 'dati/iso7010.js'), '/* Pittogrammi UNI EN ISO 7010 – Wikimedia Commons – pubblico dominio */\nwindow.ISO7010=' + JSON.stringify(isoPul) + ';');

/* contenuti, player, font, loghi */
fs.copyFileSync(path.join(SRC, 'corso.js'), path.join(OUT, 'dati/corso.js'));
['player.js', 'player.css'].forEach(f => fs.copyFileSync(path.join(BASE, 'player', f), path.join(OUT, 'player', f)));
['Inter-400', 'Inter-500', 'Inter-600', 'Inter-700', 'InterTight-800'].forEach(f => fs.copyFileSync(path.join(ROOT, 'sito/fonts', f + '.woff2'), path.join(OUT, 'fonts', f + '.woff2')));
fs.copyFileSync(path.join(ROOT, 'sito/fonts/LICENZA-Inter-OFL.txt'), path.join(OUT, 'fonts/LICENZA-Inter-OFL.txt'));
fs.copyFileSync(path.join(ROOT, 'loghi/astra_logo.svg'), path.join(OUT, 'loghi/astra.svg'));
fs.copyFileSync(path.join(ROOT, 'loghi/jd_logo_bianco.svg'), path.join(OUT, 'loghi/jd.svg'));
fs.copyFileSync(path.join(ROOT, 'formazione/risorse/timbro_DEU.png'), path.join(OUT, 'img/timbro.png'));

(async () => {
  const foto = [...new Set(C.moduli.map(m => m.foto))];
  for (const f of foto) await sharp(path.join(ROOT, 'sito/img', f + '-2560.jpg')).resize({ width: 1920 }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(OUT, 'img', f + '.jpg'));

  const vers = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'index.html'), `<!doctype html>
<html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${C.titolo} · ASTRA e-learning</title><meta name="robots" content="noindex">
<meta name="author" content="dr. Jonathan D'Eugenio"><meta name="theme-color" content="#0B2A33">
<link rel="preload" href="fonts/Inter-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="player/player.css?v=${vers}"></head>
<body><noscript>Per seguire il corso è necessario abilitare JavaScript.</noscript>
<script src="dati/icone.js?v=${vers}"></script><script src="dati/iso7010.js?v=${vers}"></script><script src="dati/corso.js?v=${vers}"></script><script src="player/player.js?v=${vers}"></script>
</body></html>`);

  const files = [];
  (function walk(d) { fs.readdirSync(d).forEach(f => { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else files.push(path.relative(OUT, p).split(path.sep).join('/')); }); })(OUT);
  const x = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&apos;');
  fs.writeFileSync(path.join(OUT, 'imsmanifest.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="ASTRA-${id}" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata><schema>ADL SCORM</schema><schemaversion>1.2</schemaversion></metadata>
  <organizations default="ORG-${id}">
    <organization identifier="ORG-${id}">
      <title>${x(C.titolo)} – ASTRA</title>
      <item identifier="ITEM-${id}" identifierref="RES-${id}">
        <title>${x(C.titolo)} (${C.ore} ore)</title>
        <adlcp:masteryscore>${C.testFinale.soglia}</adlcp:masteryscore>
        <adlcp:typicallearningtime>${String(C.ore).padStart(2, '0')}:00:00</adlcp:typicallearningtime>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="RES-${id}" type="webcontent" adlcp:scormtype="sco" href="index.html">
${files.map(f => `      <file href="${x(f)}"/>`).join('\n')}
    </resource>
  </resources>
</manifest>`);
  fs.writeFileSync(path.join(OUT, 'LEGGIMI.txt'), `${C.titolo} – pacchetto SCORM 1.2\nASTRA S.r.l. – © 2026 dr. Jonathan D'Eugenio\nCaricamento in Moodle: Aggiungi attività > Pacchetto SCORM > carica SCORM_${id}.zip\nImpostazioni consigliate: Visualizzazione in nuova finestra; Tentativi 1; Metodo di valutazione: punteggio più alto; Forza nuovo tentativo: No.\nFonti grafiche: pittogrammi UNI EN ISO 7010 (Wikimedia Commons, pubblico dominio); icone Font Awesome Free 6 (CC BY 4.0); fotografie con licenza libera (Unsplash/Pixabay); carattere Inter (SIL OFL 1.1).\n`);
  const zip = path.join(BASE, 'dist', `SCORM_${id}.zip`); fs.rmSync(zip, { force: true });
  execSync(`cd "${OUT}" && zip -qrX "${zip}" .`);
  console.log('Pacchetto:', zip, (fs.statSync(zip).size / 1024 / 1024).toFixed(2), 'MB');
})();
