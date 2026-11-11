/* Generatore pagine statiche per motori di ricerca – © 2026 dr. Jonathan D'Eugenio */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const SRC = process.env.SRC || require('path').resolve(__dirname, '..'), OUT = process.argv[2] || '/home/claude/astra-formazione';
const SITE = process.env.SITE || 'https://jonathandeugenioastra-tech.github.io/astra-formazione/';
const LOCAL = 'http://localhost:8765/index.html';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const taglia = (s, n = 158) => s.length > n ? s.slice(0, s.lastIndexOf(' ', n - 1)) + '…' : s;
function copia(a, b) { for (const f of fs.readdirSync(a)) { if (['.git', '_src', '.github', 'node_modules', '_PUBBLICAZIONE'].includes(f) || /^(desktop\.ini|Thumbs\.db)$/i.test(f) || f.startsWith('~$')) continue; const x = path.join(a, f), y = path.join(b, f); if (fs.statSync(x).isDirectory()) { fs.mkdirSync(y, { recursive: true }); copia(x, y); } else fs.copyFileSync(x, y); } }
(async () => {
  try { require('child_process').execSync('git -C ' + OUT + ' pull --ff-only -q', { stdio: 'ignore' }); } catch (e) { }
  /* fonte unica: ramo «sorgenti» (cartella autore, area autore e pagina di gestione scrivono tutti lì) */
  for (const f of fs.readdirSync(OUT)) if (f !== '.git') fs.rmSync(path.join(OUT, f), { recursive: true, force: true });
  copia(SRC, OUT);
  const tpl = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
  global.window = {}; eval(fs.readFileSync(path.join(SRC, 'assets/data.js'), 'utf8')); eval(fs.readFileSync(path.join(SRC, 'assets/listino.js'), 'utf8')); const D = window.ASTRA;
  const slug = c => c.titolo.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const amb = { sicurezza: 'Salute e sicurezza sul lavoro', ambiente: 'Ambiente', energia: 'Energia', haccp: 'Igiene degli alimenti' };
  const pagine = [
    { rotta: '', dir: '', titolo: 'Formazione ASTRA – Corsi sicurezza sul lavoro, ambiente, energia e HACCP a Teramo', desc: 'ASTRA S.r.l., Centro di Formazione AiFOS a Teramo: corsi di salute e sicurezza sul lavoro, ambiente, energia e igiene degli alimenti in aula, videoconferenza ed e-learning, conformi all\'Accordo Stato-Regioni 2025.', prio: '1.0' },
    { rotta: 'catalogo', dir: 'catalogo/', titolo: 'Catalogo corsi – Formazione ASTRA Teramo', desc: 'Catalogo dei corsi ASTRA: lavoratori, preposti, dirigenti, datori di lavoro, RSPP, RLS, antincendio, primo soccorso, attrezzature, rifiuti, RENTRI, campionamento UNI 10802, energia e HACCP.', prio: '0.9' },
    { rotta: 'calendario', dir: 'calendario/', titolo: 'Calendario corsi in aula e videoconferenza – Formazione ASTRA', desc: 'Calendario delle edizioni dei corsi ASTRA in aula a Teramo e in videoconferenza sincrona.', prio: '0.8' },
    { rotta: 'aziende', dir: 'aziende/', titolo: 'Formazione per le aziende – ASTRA Teramo', desc: 'Piani formativi aziendali, acquisto di posti per i dipendenti, corsi presso la sede del cliente e scadenzario della formazione.', prio: '0.8' },
    { rotta: 'normativa', dir: 'normativa/', titolo: 'Normativa e aggiornamenti sulla formazione – ASTRA', desc: 'Accordo Stato-Regioni 2025, periodicità degli aggiornamenti e novità normative su sicurezza, ambiente, energia e HACCP.', prio: '0.7' },
    { rotta: 'chi-siamo', dir: 'chi-siamo/', titolo: 'Chi siamo – ASTRA S.r.l. Centro di Formazione AiFOS Teramo', desc: 'ASTRA S.r.l., dal 1987 consulenza e formazione su sicurezza, ambiente, energia e qualità a Teramo, con laboratorio accreditato ACCREDIA.', prio: '0.7' },
    { rotta: 'contatti', dir: 'contatti/', titolo: 'Contatti – Formazione ASTRA Teramo', desc: 'Sede ASTRA S.r.l. in Via Potito Randi 6, Teramo. Telefono 0861 413103, email info@astrastudio.it.', prio: '0.7' },
    { rotta: 'attestato', dir: 'verifica-attestato/', titolo: 'Verifica attestato – Formazione ASTRA', desc: 'Verifica della validità degli attestati rilasciati da ASTRA tramite codice o QR code.', prio: '0.5' },
    { rotta: 'app', dir: 'app-smartphone/', titolo: 'App ASTRA Formazione per smartphone', desc: 'Installazione dell\'app ASTRA Formazione su iPhone e Android.', prio: '0.5' },
    { rotta: 'legenda', dir: 'legenda/', titolo: 'Legenda delle sigle – Formazione ASTRA', desc: 'Significato delle sigle utilizzate nella formazione per la salute e sicurezza sul lavoro.', prio: '0.3' },
    { rotta: 'privacy', dir: 'privacy/', titolo: 'Informativa privacy – ASTRA S.r.l.', desc: 'Informativa sul trattamento dei dati personali di ASTRA S.r.l.', prio: '0.2' }
  ];
  const slugs = new Set();
  for (const c of D.corsi) {
    const s = slug(c); if (slugs.has(s)) throw new Error('slug duplicato ' + s); slugs.add(s);
    const modi = { EL: 'online', VCS: 'online', P: 'onsite' };
    const ld = { '@context': 'https://schema.org', '@type': 'Course', name: c.titolo, description: c.pres, courseCode: c.id, inLanguage: 'it', url: SITE + 'corsi/' + s + '/',
      provider: { '@type': 'Organization', name: 'ASTRA S.r.l.', sameAs: 'https://www.astrastudio.it' }, timeRequired: 'PT' + c.ore + 'H', educationalLevel: c.tipo, about: amb[c.ambito],
      offers: [{ '@type': 'Offer', category: 'Paid', price: c.prezzo, priceCurrency: 'EUR' }],
      hasCourseInstance: [...new Set(c.mod.map(m => modi[m]))].map(m => ({ '@type': 'CourseInstance', courseMode: m, courseWorkload: 'PT' + c.ore + 'H', ...(m === 'onsite' ? { location: { '@type': 'Place', name: 'ASTRA S.r.l.', address: 'Via Potito Randi 6, 64100 Teramo (TE)' } } : {}) })) };
    pagine.push({ rotta: 'corso/' + c.id, dir: 'corsi/' + s + '/', titolo: `${c.titolo} – Corso ${c.ore} ore – Formazione ASTRA Teramo`, desc: taglia(`${c.titolo}: corso di ${c.ore} ore (${c.rif}). ${c.pres}`), ld, prio: '0.8' });
  }
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.addInitScript(() => { try { localStorage.setItem('astra-inst-no', '1'); localStorage.removeItem('astra-carrello-v1'); } catch (e) { } });
  for (const pg of pagine) {
    await p.goto(LOCAL + '#/' + pg.rotta); await p.reload(); await p.waitForTimeout(350);
    const html = await p.evaluate(() => { document.querySelectorAll('.rivela').forEach(e => e.classList.add('vista'));
      document.querySelectorAll('[data-conta]').forEach(e => { e.innerHTML = (+e.dataset.conta).toLocaleString('it-IT') + (e.dataset.suffisso ? '<small>' + e.dataset.suffisso + '</small>' : ''); });
      return document.querySelector('#app').innerHTML; });
    const prof = pg.dir.split('/').filter(Boolean).length, base = prof ? '../'.repeat(prof) : '';
    const url = SITE + pg.dir;
    let h = tpl
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(pg.titolo)}</title>${base ? `\n<base href="${base}">` : ''}`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(pg.desc)}">`)
      .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
      .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`)
      .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(pg.titolo)}">`)
      .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(pg.desc)}">`)
      .replace('<main id="app" tabindex="-1"></main>', `<main id="app" tabindex="-1">${html}</main>`)
      .replace('<script src="assets/data.js"></script>', `<script>window.ASTRA_ROTTA = ${JSON.stringify(pg.rotta)};</script>\n<script src="assets/data.js"></script>`);
    if (pg.ld) h = h.replace('</head>', `<script type="application/ld+json">${JSON.stringify(pg.ld)}</script>\n</head>`);
    fs.mkdirSync(path.join(OUT, pg.dir), { recursive: true });
    fs.writeFileSync(path.join(OUT, pg.dir, 'index.html'), h);
  }
  await b.close();
  const oggi = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + pagine.map(pg => `  <url><loc>${SITE}${pg.dir}</loc><lastmod>${oggi}</lastmod><priority>${pg.prio}</priority></url>`).join('\n') + `\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /gestione/\n\nSitemap: ${SITE}sitemap.xml\n`);
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  fs.writeFileSync(path.join(OUT, '404.html'), `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>Formazione ASTRA</title><meta name="robots" content="noindex"><script src="${SITE}assets/data.js"></script><script src="${SITE}assets/listino.js"></script><script>
(function(){var S='${SITE}',m=location.pathname.match(/\\/corsi\\/([^/]+)\\/?$/),c=null;
if(m&&window.ASTRA){var sl=function(c){return c.titolo.normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')};c=window.ASTRA.corsi.filter(function(x){return sl(x)===m[1]})[0];}
location.replace(c?S+'#/corso/'+c.id:S);})();</script></head><body><a href="${SITE}">Formazione ASTRA</a></body></html>`);
  console.log('pagine generate:', pagine.length);
})();
