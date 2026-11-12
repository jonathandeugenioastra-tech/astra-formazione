const { chromium, devices } = require('playwright'); const fs=require('fs');
(async () => { const b = await chromium.launch(); const B = process.argv[2]; let ko = 0;
const ok = (c, m) => { console.log((c ? '[OK ] ' : '[KO ] ') + m); if (!c) ko++; };
for (const [n, dev] of [['smartphone', devices['iPhone 13']], ['computer', { viewport: { width: 1366, height: 900 } }]]) {
 const ctx = await b.newContext(dev); const p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
 await p.goto(B); await p.waitForTimeout(2500); await p.reload(); await p.waitForTimeout(1500); // service worker attivo come nell'app
 const h1 = async () => (await p.textContent('#app h1').catch(() => '')).trim();
 // 1. card corsi in home
 const cards = await p.$$eval('#app a.corso', a => a.map(x => x.getAttribute('href')));
 for (const href of cards.slice(0, 4)) { await p.goto(B); await p.waitForTimeout(800); await p.click(`#app a.corso[href="${href}"] >> nth=0`); await p.waitForTimeout(1500);
   ok(/#\/corso\//.test(p.url()) && !/Astra Academy/.test(await h1()), `${n} home › ${href} → ${(await h1()).slice(0, 50)}`); }
 // 2. aggiunta al carrello e iscrizione
 await p.goto(B + 'corsi/preposti/'); await p.waitForTimeout(1500);
 ok(/Preposti/.test(await h1()), `${n} apertura diretta corsi/preposti/ → ${(await h1()).slice(0,40)}`);
 const add = await p.$('#app .acquisto button:has-text("arrello")'); ok(!!add, `${n} pulsante aggiungi al carrello presente`);
 if (add) { await add.click(); await p.waitForTimeout(800); }
 await p.goto(B + '#/carrello'); await p.waitForTimeout(1200);
 ok((await p.textContent('#app')).includes('Preposti'), `${n} il corso è nel carrello`);
 // 3. tutte le pagine statiche
 for (const d of ['catalogo/', 'calendario/', 'aziende/', 'condizioni/', 'privacy/', 'verifica-attestato/', 'contatti/']) { await p.goto(B + d); await p.waitForTimeout(1000);
   ok(!/Astra Academy\s*Alta formazione/.test(await h1()), `${n} ${d} → ${(await h1()).slice(0, 45)}`); }
 // 4. catalogo › scheda
 await p.goto(B + '#/catalogo'); await p.waitForTimeout(1200); await p.click('#app a.corso >> nth=5'); await p.waitForTimeout(1500);
 ok(/#\/corso\//.test(p.url()), `${n} catalogo › scheda → ${(await h1()).slice(0, 50)}`);
 // 5. calendario › iscrizione
 await p.goto(B + '#/calendario'); await p.waitForTimeout(1200); await p.click('.edizione .btn >> nth=0'); await p.waitForTimeout(1500);
 ok(/#\/corso\//.test(p.url()), `${n} calendario › Iscrizione → ${(await h1()).slice(0, 50)}`);
 // 6. tutte le 68 schede statiche
 const D = await p.evaluate(() => window.ASTRA.corsi.map(c => c.id)); let bad = [];
 const dirs = fs.readdirSync('/tmp/claude-0/out/corsi');
 for (const d of dirs) { await p.goto(B + 'corsi/' + d + '/'); await p.waitForTimeout(250); if (!/#\/corso\//.test(p.url())) bad.push(d); }
 ok(bad.length === 0 && dirs.length === D.length, `${n} ${dirs.length} schede statiche aprono la scheda corso${bad.length ? ' — KO: ' + bad.join(',') : ''}`);
 ok(err.length === 0, `${n} nessun errore JavaScript ${err.slice(0,2).join(' | ')}`);
 await ctx.close(); }
console.log(ko ? 'ESITI KO: ' + ko : 'TUTTO OK'); await b.close(); })();
