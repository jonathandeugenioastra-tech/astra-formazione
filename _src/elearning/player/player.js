/* ASTRA e-learning player (SCORM 1.2) – © 2026 dr. Jonathan D'Eugenio
   Tempo minimo per schermata, interazioni obbligatorie, narrazione, controllo di presenza,
   verifiche intermedie e test finale. Tracciamento su LMS (SCORM 1.2) o in locale. */
(function () {
  'use strict';
  const C = window.CORSO, ICO = window.ICONE || {}, ISO = window.ISO7010 || {};
  const $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ico = (n, cl = '') => (ICO[n] || '').replace('<svg', `<svg aria-hidden="true" class="${cl}"`);
  const L = i => String.fromCharCode(97 + i);

  /* ───────── SCORM 1.2 ───────── */
  const SC = (() => {
    let api = null;
    for (let w = window, n = 0; w && n < 12; n++) { try { if (w.API) { api = w.API; break; } } catch (e) {} if (w === w.parent) break; w = w.parent; }
    if (!api) try { if (window.opener && window.opener.API) api = window.opener.API; } catch (e) {}
    const ok = !!api && api.LMSInitialize('') + '' === 'true';
    return {
      lms: ok,
      get: k => ok ? api.LMSGetValue(k) : null,
      set: (k, v) => ok && api.LMSSetValue(k, String(v)),
      commit: () => ok && api.LMSCommit(''),
      fine: () => ok && api.LMSFinish('')
    };
  })();
  const qs = new URLSearchParams(location.search);
  const ANTEPRIMA = !SC.lms && qs.has('anteprima');
  const FATTORE = ANTEPRIMA ? 1 / 40 : 1; // in anteprima i tempi sono ridotti per la revisione dei contenuti

  /* ───────── elenco schermate e tempi minimi ───────── */
  const S = [];
  C.moduli.forEach((m, mi) => {
    const tot = m.schermate.reduce((a, s) => a + (s.p || 1), 0);
    let somma = 0;
    m.schermate.forEach((s, si) => {
      let sec = Math.round((m.min * 60) * (s.p || 1) / tot / 5) * 5;
      if (si === m.schermate.length - 1) sec = m.min * 60 - somma;
      somma += sec;
      S.push(Object.assign({}, s, { mi, si, mod: m, sec }));
    });
  });
  S.push({ t: 'testfinale', tit: 'Test finale di apprendimento', mi: C.moduli.length, mod: { id: 'TF', titolo: 'Test finale' }, sec: 0, nar: 'Sei arrivato al test finale. Il test comprende ' + C.testFinale.domande + ' domande estratte casualmente, con risposte in ordine casuale. Per superarlo occorre rispondere correttamente ad almeno il ' + C.testFinale.soglia + ' per cento delle domande. Hai a disposizione ' + C.testFinale.tentativi + ' tentativi.' });
  const TOT_SEC = S.reduce((a, s) => a + s.sec, 0);

  /* ───────── stato ───────── */
  const K = 'astra-el-' + C.id;
  let st = { t: S.map(() => 0), d: S.map(() => 0), c: 0, tf: { n: 0, best: 0, ok: 0 } };
  const carica = () => {
    let raw = SC.lms ? SC.get('cmi.suspend_data') : (() => { try { return localStorage.getItem(K); } catch (e) { return null; } })();
    if (!raw) return;
    try {
      const o = JSON.parse(raw);
      if (o.t && o.t.length) { o.t.forEach((v, i) => { if (i < S.length) st.t[i] = parseInt(v, 36) || 0; }); }
      if (o.d) [...o.d].forEach((v, i) => { if (i < S.length) st.d[i] = +v; });
      st.c = Math.min(o.c || 0, S.length - 1); if (o.tf) st.tf = o.tf;
    } catch (e) {}
  };
  const salva = (commit) => {
    const raw = JSON.stringify({ t: st.t.map(v => Math.floor(v).toString(36)), d: st.d.join(''), c: st.c, tf: st.tf });
    if (SC.lms) { SC.set('cmi.suspend_data', raw); SC.set('cmi.core.lesson_location', st.c); if (commit) SC.commit(); }
    else try { localStorage.setItem(K, raw); } catch (e) {}
  };
  carica();
  if (SC.lms) { const s = SC.get('cmi.core.lesson_status'); if (!s || s === 'not attempted') SC.set('cmi.core.lesson_status', 'incomplete'); }
  const t0 = Date.now();

  /* ───────── interfaccia ───────── */
  document.title = C.titolo + ' · ASTRA e-learning';
  document.body.innerHTML = `
  <div id="app">
    <header class="testata">
      <div class="logo"><img src="loghi/astra.svg" alt="ASTRA"></div>
      <div class="tit"><small>${esc(C.rif)}</small><span id="h-tit">${esc(C.titolo)}</span></div>
      <div class="azioni">
        <button class="ico-btn" id="b-ind" title="Indice del corso" aria-label="Indice del corso">${ico('FaListUl')}</button>
        <button class="ico-btn on" id="b-sott" title="Sottotitoli" aria-label="Sottotitoli">${ico('FaClosedCaptioning')}</button>
        <button class="ico-btn" id="b-tr" title="Trascrizione del commento" aria-label="Trascrizione">${ico('FaAlignLeft')}</button>
        <button class="ico-btn on" id="b-aud" title="Narrazione attiva" aria-label="Narrazione">${ico('FaVolumeHigh')}</button>
      </div>
    </header>
    <div class="avanz"><i id="avz"></i></div>
    <main class="palco-wrap"><div class="palco-col"><div class="palco" id="palco"></div><div class="sottotit vuoto" id="sott" aria-live="polite"></div></div></main>
    <footer class="comandi">
      <div class="sx"><div class="firma"><img src="loghi/jd.svg" alt="J.D'"><span>© 2026 dr. Jonathan D'Eugenio · ASTRA S.r.l.</span></div></div>
      <div class="centro">
        <button class="nav-btn" id="b-ind2" aria-label="Indietro">${ico('FaArrowLeft')}<span class="tx">Indietro</span></button>
        <div class="timer" id="timer" title="Tempo minimo di permanenza"><svg viewBox="0 0 52 52"><circle class="bg" cx="26" cy="26" r="22"/><circle class="fg" cx="26" cy="26" r="22" stroke-dasharray="138.2" stroke-dashoffset="138.2"/></svg><span>0:00</span></div>
        <button class="nav-btn av" id="b-av" aria-label="Avanti"><span class="tx">Avanti</span>${ico('FaArrowRight')}</button>
      </div>
      <div class="dx"><span class="req" id="req"></span><span class="pos" id="pos"></span></div>
    </footer>
  </div>
  <aside class="pannello sx indice" id="p-ind"><h3>Indice del corso</h3><div class="cont" id="ind"></div></aside>
  <aside class="pannello dx trascr" id="p-tr"><h3>Trascrizione</h3><div class="cont" id="tr"></div></aside>
  <div class="ov" id="ov-pres"><div class="box"><h3>Conferma la tua presenza</h3><p>Per garantire la tracciabilità della fruizione prevista dall'Accordo Stato-Regioni, premi il pulsante con il codice indicato.</p><div class="codice" id="pres-cod"></div><div id="pres-bt" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"></div><div class="count" id="pres-cnt"></div></div></div>
  <div class="ov" id="ov-msg"><div class="box"><h3 id="msg-t"></h3><p id="msg-p"></p><button class="btn prim" id="msg-ok">Ho capito</button></div></div>
  ${ANTEPRIMA ? '<div class="badge-ant">Anteprima di revisione · tempi ridotti</div>' : ''}`;

  const palco = $('#palco'), bAv = $('#b-av'), bInd = $('#b-ind2'), req = $('#req');
  const msg = (t, p) => { $('#msg-t').textContent = t; $('#msg-p').textContent = p; $('#ov-msg').classList.add('on'); };
  $('#msg-ok').onclick = () => $('#ov-msg').classList.remove('on');

  /* ───────── narrazione: voce professionale pre-registrata (MP3 per frase) con sottotitoli;
     in assenza dei file audio si usa la migliore voce neurale disponibile nel sistema ───────── */
  const tts = window.speechSynthesis, AUD = window.AUDIO || null, player = new Audio();
  player.preload = 'auto';
  let audio = true, voce = null, narFine = true, narInizio = 0, narDur = 1, narGen = 0, sott = true;
  try { const a = localStorage.getItem('astra-el-audio'); if (a === '0') audio = false; if (localStorage.getItem('astra-el-sott') === '0') sott = false; } catch (e) {}
  const scegliVoce = () => {
    if (!tts) return;
    const v = tts.getVoices().filter(x => /^it/i.test(x.lang));
    voce = v.find(x => /natural|online/i.test(x.name) && /isabella|elsa|diego|giuseppe/i.test(x.name)) || v.find(x => /natural|online|neural/i.test(x.name)) || v.find(x => /google/i.test(x.name)) || v[0] || null;
  };
  if (tts) { scegliVoce(); tts.onvoiceschanged = scegliVoce; }
  const durata = t => Math.max(4, t.split(/\s+/).length / 2.55);
  const chiave = s => s.mod.id === 'TF' ? 'TF-0' : `${s.mod.id}-${s.si}`;
  const sottotitolo = t => { const el = $('#sott'); el.textContent = t || ''; el.classList.toggle('vuoto', !t); };
  const parla = (testo, onSegno) => {
    const gen = ++narGen; zitto(gen);
    const tracce = AUD && AUD.schermate[chiave(S[st.c])];
    const frasi = tracce ? tracce.map(x => x.t) : (testo.match(/[^.!?;]+[.!?;]*/g) || [testo]).map(f => f.trim());
    narDur = tracce ? tracce.reduce((a, x) => a + x.d, 0) : durata(testo); narInizio = Date.now(); narFine = false;
    $('#tr').innerHTML = frasi.map((f, i) => `<p data-i="${i}">${esc(f)}</p>`).join('');
    const evid = i => { $$('#tr p').forEach(p => p.classList.toggle('att', +p.dataset.i === i)); sottotitolo(frasi[i]); };
    const fine = () => { if (gen !== narGen) return; narFine = true; sottotitolo(''); aggiorna(); };
    if (!audio) { sottotitolo(''); const tm = setTimeout(fine, ANTEPRIMA ? 300 : narDur * 1000 * 0.6); timersSch.push(tm); return; }
    let i = 0;
    if (tracce) {
      const via = () => {
        if (gen !== narGen) return;
        if (i >= tracce.length) return fine();
        evid(i); player.src = 'audio/' + tracce[i].f;
        player.onended = () => { if (gen !== narGen) return; i++; if (onSegno) onSegno(i / tracce.length); setTimeout(via, 180); };
        player.onerror = () => { i++; via(); };
        player.play().catch(() => fine());
      };
      return via();
    }
    if (!tts) return fine();
    const via = () => {
      if (gen !== narGen) return;
      if (i >= frasi.length) return fine();
      const u = new SpeechSynthesisUtterance(frasi[i]);
      u.lang = 'it-IT'; if (voce) u.voice = voce; u.rate = 1; u.pitch = 1;
      evid(i);
      u.onend = () => { if (gen !== narGen) return; i++; if (onSegno) onSegno(i / frasi.length); via(); };
      u.onerror = () => fine();
      tts.speak(u);
    };
    via();
  };
  function zitto(gen) { if (gen === undefined) narGen++; if (tts) tts.cancel(); try { player.pause(); } catch (e) {} }
  $('#b-aud').onclick = () => {
    audio = !audio; $('#b-aud').classList.toggle('on', audio);
    try { localStorage.setItem('astra-el-audio', audio ? '1' : '0'); } catch (e) {}
    if (!audio) { zitto(); narFine = true; aggiorna(); } else parla(S[st.c].nar || '', progRivela);
  };
  $('#b-aud').classList.toggle('on', audio);
  const pann = id => { const p = $(id), ap = !p.classList.contains('aperto'); $$('.pannello').forEach(x => x.classList.remove('aperto')); p.classList.toggle('aperto', ap); };
  $('#b-ind').onclick = () => { indice(); pann('#p-ind'); };
  $('#b-tr').onclick = () => pann('#p-tr');
  const applicaSott = () => { $('#b-sott').classList.toggle('on', sott); document.body.classList.toggle('no-sott', !sott); };
  $('#b-sott').onclick = () => { sott = !sott; try { localStorage.setItem('astra-el-sott', sott ? '1' : '0'); } catch (e) {} applicaSott(); };
  applicaSott();

  /* ───────── rivelazione progressiva sincronizzata con la narrazione ───────── */
  let rivela = [], timersSch = [];
  const progRivela = frac => { const n = Math.ceil(frac * rivela.length + 0.0001); rivela.slice(0, n).forEach(el => mostra(el)); };
  const mostra = el => {
    if (el.classList.contains('vis')) return;
    el.classList.add('vis');
    const sc = el.closest('.scroll'); if (sc && el.offsetTop > sc.scrollTop + sc.clientHeight - el.offsetHeight) sc.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
    $$('.commi li.corrente', palco).forEach(x => x.classList.remove('corrente')); if (el.matches('.commi li')) el.classList.add('corrente');
  };
  const avviaRivela = () => {
    rivela = $$('.an,.an-s', palco);
    const fisso = rivela.filter(el => el.dataset.subito !== undefined); fisso.forEach(mostra);
    rivela = rivela.filter(el => el.dataset.subito === undefined);
    const passo = ANTEPRIMA ? 90 : Math.min(1400, Math.max(220, (narDur * 1000 * 0.7) / Math.max(1, rivela.length)));
    rivela.forEach((el, i) => timersSch.push(setTimeout(() => mostra(el), 150 + i * passo)));
  };

  /* ───────── vincoli di completamento ───────── */
  let obbligo = null; // {fatto:()=>bool, testo:''}
  const completo = i => st.d[i] === 1;
  const tempoOk = i => st.t[i] >= S[i].sec * FATTORE;
  const verifica = () => {
    const i = st.c, s = S[i];
    if (completo(i)) return true;
    const ok = tempoOk(i) && (!obbligo || obbligo.fatto()) && (narFine || !audio || ANTEPRIMA) && s.t !== 'testfinale';
    if (ok) { st.d[i] = 1; salva(true); indice(); }
    return ok;
  };
  const aggiorna = () => {
    const i = st.c, s = S[i], fatto = verifica();
    bAv.disabled = !fatto || i >= S.length - 1;
    bAv.classList.toggle('pronto', fatto && i < S.length - 1);
    bInd.disabled = i === 0;
    const rest = Math.max(0, Math.ceil(s.sec * FATTORE - st.t[i]));
    const tm = $('#timer'), fg = $('.fg', tm), frac = s.sec ? Math.min(1, st.t[i] / (s.sec * FATTORE)) : 1;
    fg.style.strokeDashoffset = 138.2 * (1 - (completo(i) ? 1 : frac));
    tm.classList.toggle('fatto', completo(i) || rest === 0);
    $('span', tm).textContent = completo(i) ? '✓' : `${Math.floor(rest / 60)}:${String(rest % 60).padStart(2, '0')}`;
    let r = '';
    if (!completo(i) && s.t !== 'testfinale') {
      if (obbligo && !obbligo.fatto()) r = obbligo.testo;
      else if (rest > 0) r = 'Tempo minimo di permanenza in corso';
      else if (!narFine && audio) r = 'Attendi la fine della narrazione';
    }
    req.textContent = r;
    const fatti = S.slice(0, -1).reduce((a, x, k) => a + (completo(k) ? x.sec : Math.min(st.t[k], x.sec)), 0);
    $('#avz').style.width = (100 * fatti / TOT_SEC).toFixed(2) + '%';
    $('#pos').textContent = `${i + 1} / ${S.length}`;
  };

  /* ───────── conteggio del tempo e presenza ───────── */
  let ultimoInput = Date.now(), inPausa = false, prossimaPres = Date.now() + rnd(9, 14) * 60000, presTimer = null;
  function rnd(a, b) { return a + Math.random() * (b - a); }
  ['pointerdown', 'keydown', 'wheel', 'touchstart', 'mousemove'].forEach(e => addEventListener(e, () => { ultimoInput = Date.now(); }, { passive: true }));
  const presenza = () => {
    if (ANTEPRIMA || inPausa) return;
    inPausa = true; zitto();
    const cod = String(Math.floor(rnd(10, 99))), alt = new Set([cod]); while (alt.size < 4) alt.add(String(Math.floor(rnd(10, 99))));
    $('#pres-cod').textContent = cod;
    $('#pres-bt').innerHTML = [...alt].sort(() => Math.random() - .5).map(c => `<button class="btn ${c === cod ? '' : ''}" data-c="${c}">${c}</button>`).join('');
    $('#ov-pres').classList.add('on');
    let sec = 60; $('#pres-cnt').textContent = `Tempo per rispondere: ${sec} s`;
    presTimer = setInterval(() => { sec--; $('#pres-cnt').textContent = sec > 0 ? `Tempo per rispondere: ${sec} s` : 'Conteggio del tempo sospeso: premi il codice corretto per riprendere.'; if (sec <= 0) clearInterval(presTimer); }, 1000);
    $$('#pres-bt button').forEach(b => b.onclick = () => {
      if (b.dataset.c !== cod) { b.disabled = true; return; }
      clearInterval(presTimer); $('#ov-pres').classList.remove('on'); inPausa = false; ultimoInput = Date.now();
      prossimaPres = Date.now() + rnd(9, 14) * 60000;
      if (SC.lms) { SC.set('cmi.comments', 'Presenza confermata ' + new Date().toISOString()); SC.commit(); }
      if (S[st.c].nar && audio && !narFine) parla(S[st.c].nar, progRivela);
    });
  };
  let tick = Date.now();
  setInterval(() => {
    const now = Date.now(), dt = Math.min(2, (now - tick) / 1000); tick = now;
    if (document.visibilityState !== 'visible' || inPausa) return;
    if (now - ultimoInput > 5 * 60000 && !ANTEPRIMA) { presenza(); return; }
    if (now > prossimaPres && !completo(st.c)) { presenza(); return; }
    if (!completo(st.c)) st.t[st.c] = Math.min(st.t[st.c] + dt, 99999);
    aggiorna();
  }, 1000);
  setInterval(() => salva(true), 30000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') { salva(true); zitto(); } });

  /* ───────── indice ───────── */
  const indice = () => {
    let h = '', mi = -1;
    S.forEach((s, i) => {
      if (s.mi !== mi) { if (mi >= 0) h += '</div>'; mi = s.mi; h += `<div class="m"><b>${esc(s.mod.titolo)}</b>`; }
      const acc = i === 0 || completo(i - 1) || completo(i);
      h += `<button data-i="${i}" class="${i === st.c ? 'cur' : ''} ${completo(i) ? 'ok' : ''}" ${acc ? '' : 'disabled'}><i>${completo(i) ? '✓' : ''}</i>${esc(s.tit || s.mod.titolo)}</button>`;
    });
    $('#ind').innerHTML = h + '</div>';
    $$('#ind button').forEach(b => b.onclick = () => { vai(+b.dataset.i); pann('#p-ind'); });
  };

  /* ───────── rendering ───────── */
  const testa = (s, extra = '') => `<div class="sch-testa an" data-subito><div><div class="mod">${esc(s.mod.id === 'M0' ? 'Introduzione' : s.mod.id === 'TF' ? 'Verifica finale' : 'Modulo ' + s.mod.id.slice(1) + ' · ' + s.mod.titolo)}</div><h2>${esc(s.tit)}</h2>${s.sott ? `<div class="sott">${esc(s.sott)}</div>` : ''}</div>${s.rif ? `<div class="rif">${esc(s.rif)}</div>` : ''}${extra}</div>`;
  const foto = n => `img/${n}.jpg`;
  const FOTO = ['sicurezza', 'sicurezza2', 'sicurezza3', 'hero1', 'chi', 'aziende'];
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const svgISO = c => ISO[c] || '';
  const coloriLiv = v => v <= 2 ? ['#00A050', 'Basso', 'Rischio accettabile: mantenere le misure e verificarle nel tempo.'] : v <= 4 ? ['#C9A100', 'Medio-basso', 'Interventi da programmare nel medio periodo, con verifiche periodiche.'] : v <= 8 ? ['#E07000', 'Medio-alto', 'Interventi da programmare con urgenza, nel breve periodo.'] : ['#C81F26', 'Alto', 'Interventi immediati: il rischio non è accettabile.'];

  const R = {
    copertina: s => `<div class="schermata full"><div class="foto" style="background-image:url(${foto(s.mod.foto)})"></div><div class="velo"></div>
      <div class="loghi an" data-subito><span class="bianco"><img src="loghi/astra.svg" alt="ASTRA"></span><img class="jd" src="loghi/jd.svg" alt="J.D'"></div>
      <div class="contenuto"><div class="kicker an">${esc(C.rif)}</div><h1 class="an">${esc(s.tit)}</h1><p class="an">${esc(C.sottotitolo)}</p></div></div>`,
    sezione: s => `<div class="schermata full"><div class="foto" style="background-image:url(${foto(s.mod.foto)})"></div><div class="velo"></div>
      <div class="num">${esc(s.mod.id.slice(1))}</div>
      <div class="contenuto"><div class="kicker an">${esc(s.tit)} · ${s.mod.min} minuti</div><h1 class="an">${esc(s.sott)}</h1><p class="an">${s.mod.schermate.length - 1} schermate · esercitazioni e verifica intermedia</p></div></div>`,
    guida: s => `<div class="schermata">${testa(s)}<div class="corpo"><div class="guida">${s.voci.map(v => `<div class="g an"><div class="cerchio">${ico(v[0])}</div><b>${esc(v[1])}</b><p>${esc(v[2])}</p></div>`).join('')}</div></div></div>`,
    obiettivi: s => `<div class="schermata">${testa(s)}<div class="corpo"><ul class="check">${s.voci.map(v => `<li class="an">${ico('FaCircleCheck')}<span>${esc(v)}</span></li>`).join('')}</ul></div></div>`,
    sintesi: s => `<div class="schermata">${testa(s)}<div class="corpo sintesi-wrap"><ul class="check">${s.voci.map(v => `<li class="an">${ico('FaCircleCheck')}<span>${esc(v)}</span></li>`).join('')}</ul><div class="badge an-s"><div><div><b>${esc(s.mod.id.slice(1))}</b><span>modulo<br>completato</span></div></div></div></div></div>`,
    testo: s => `<div class="schermata">${testa(s)}<div class="corpo testo-foto"><figure class="foto-sl an" data-subito><img src="img/${FOTO[(s.mi * 7 + s.si) % FOTO.length]}.jpg" alt=""></figure><div class="scroll">${s.lead ? `<p class="lead an">${esc(s.lead)}</p>` : ''}<ul class="punti">${s.punti.map((p, i) => `<li class="an"><span class="n">${i + 1}</span><span>${esc(p)}</span></li>`).join('')}</ul></div></div></div>`,
    definizioni: s => `<div class="schermata">${testa(s)}<div class="corpo"><div class="def-griglia" style="grid-template-columns:repeat(${s.voci.length > 4 ? 3 : 2},1fr)">${s.voci.map((v, i) => `<div class="def an-s" data-i="${i}" role="button" tabindex="0" aria-label="${esc(v[1])}"><div class="in"><div class="fr"><span class="lett">${/^[a-z]{1,2}$/.test(v[0]) ? 'Art. 2 · lett. ' + esc(v[0]) + ')' : esc(v[0])}</span><span class="ter">${esc(v[1])}</span><span class="clic">${ico('FaHandPointer')} Apri</span></div><div class="re"><div class="ter">${esc(v[1])}</div><p>${esc(v[2])}</p></div></div></div>`).join('')}</div></div></div>`,
    articolo: s => `<div class="schermata">${testa(Object.assign({}, s, { rif: '' }))}<div class="corpo art"><div class="targa an" data-subito><div><div class="num">${esc(s.art)}</div>${s.sott ? `<div class="sott">${esc(s.sott)}</div>` : ''}</div>${s.nota ? `<div class="nota">${esc(s.nota)}</div>` : ''}</div><div class="scroll"><ul class="commi">${s.commi.map(c => `<li class="an"><span class="l">${esc(c[0])}${/^[a-z]/.test(c[0]) && c[0].length < 7 && !/^c\./.test(c[0]) ? ')' : ''}</span><span>${esc(c[1])}</span></li>`).join('')}</ul></div></div></div>`,
    figure: s => `<div class="schermata">${testa(s)}<div class="corpo"><div class="fig-griglia ${s.voci.length % 3 === 0 && s.voci.length < 8 ? 'tre' : ''}">${s.voci.map((v, i) => `<button class="fig an-s" data-i="${i}"><span class="cerchio">${ico(v[0])}</span><b>${esc(v[1])}</b></button>`).join('')}</div><div class="dettaglio an" id="det">${ico('FaHandPointer')}<div><b>Seleziona una scheda</b>Per proseguire è necessario consultare tutte le schede.</div></div></div></div>`,
    gerarchia: s => `<div class="schermata">${testa(s)}<div class="corpo ger-lato"><div class="ger">${s.voci.map((v, i) => { const w = 100 - i * 11, col = ['#00703b', '#2E8B57', '#1F5FA8', '#C77700', '#C81F26'][i]; return `<div class="liv an" style="width:${w}%;background:${col}"><span>${i + 1}. ${esc(v)}</span><span>${['massima efficacia', '', '', '', 'ultima barriera'][i]}</span></div>`; }).join('')}</div><div class="freccia-ger an"><span>Più efficace<br>indipendente dal comportamento</span><svg viewBox="0 0 40 300" style="height:calc(30*var(--u));width:auto;flex:none"><defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#00703b"/><stop offset="1" stop-color="#C81F26"/></linearGradient></defs><path d="M20 0 L36 26 H26 V300 H14 V26 H4 Z" fill="url(#gg)"/></svg><span>Meno efficace<br>dipende dalla persona</span>${s.nota ? `<p style="margin:2cqh 0 0;font-family:var(--f);color:var(--testo-2);font-size:calc(1.9*var(--u));line-height:1.4">${esc(s.nota)}</p>` : ''}</div></div></div>`,
    matrice: s => `<div class="schermata">${testa(s)}<div class="corpo mat"><div class="asse">PROBABILITÀ (P)</div><div class="grid">${[3, 2, 1, 0].map(p => `<div class="et">${p + 1} · ${esc(s.P[p])}</div>` + [0, 1, 2, 3].map(d => { const v = (p + 1) * (d + 1); return `<button class="cella an-s" data-v="${v}" data-p="${p}" data-d="${d}" style="background:${coloriLiv(v)[0]}">${v}</button>`; }).join('')).join('')}<div></div>${s.D.map((d, i) => `<div class="et">${i + 1} · ${esc(d)}</div>`).join('')}</div>
      <div class="esito an" id="esito"><div class="val">R = P × D</div><p>Seleziona una casella: P indica la probabilità, D la gravità del danno (magnitudo).</p><p style="margin-top:2cqh;font-family:var(--fb);color:var(--petrolio)">DANNO (D) sull'asse orizzontale</p></div></div></div>`,
    processo: s => `<div class="schermata">${testa(s)}<div class="corpo proc" style="grid-template-columns:repeat(${s.passi.length},1fr)">${s.passi.map((p, i) => `<div class="passo an"><span class="n">${i + 1}</span><b>${esc(p[0])}</b><p>${esc(p[1])}</p></div>`).join('')}</div></div>`,
    confronto: s => `<div class="schermata">${testa(s)}<div class="corpo conf"><div class="lato a an"><div class="t">${ico(s.sx.ico)}${esc(s.sx.tit)}</div><ul>${s.sx.voci.map(v => `<li>${esc(v)}</li>`).join('')}</ul></div><div class="vs an-s">VS</div><div class="lato b an"><div class="t">${ico(s.dx.ico)}${esc(s.dx.tit)}</div><ul>${s.dx.voci.map(v => `<li>${esc(v)}</li>`).join('')}</ul></div></div></div>`,
    iceberg: s => `<div class="schermata">${testa(s)}<div class="corpo ice"><div class="pir">${s.livelli.map((l, i) => `<div class="an" style="width:${40 + i * 20}%;background:${['#C81F26', '#E07000', '#C9A100', '#2E8B57'][i]}">${esc(l)}</div>`).join('')}</div><div><p class="lead an">${esc(s.testo)}</p><ul class="punti"><li class="an"><span class="n">!</span><span>Segnala ogni mancato infortunio al preposto o secondo la procedura aziendale.</span></li><li class="an"><span class="n">?</span><span>Ogni segnalazione è un'occasione per individuare e rimuovere le cause.</span></li></ul></div></div></div>`,
    diritto: s => `<div class="schermata">${testa(Object.assign({}, s, { rif: '' }))}<div class="corpo dir"><div class="icona an-s">${ico('FaPersonRunning')}</div><blockquote class="an">${esc(s.testo)}<cite>${esc(s.rif)}</cite></blockquote></div></div>`,
    pittogrammi: s => `<div class="schermata">${testa(s)}<div class="corpo pit"><div class="tab">${s.gruppi.map((g, i) => `<button class="an" data-i="${i}"><i class="forma" style="background:${['#F9A800', '#C81F26', '#1F5FA8', '#00A050', '#C81F26'][i]};${i === 0 ? 'clip-path:polygon(50% 0,100% 100%,0 100%)' : i < 3 ? 'border-radius:50%' : 'border-radius:3px'}"></i>${esc(g.nome)}</button>`).join('')}</div><div class="pann an" id="pann"><div class="vuoto">Seleziona una famiglia di segnali a sinistra.<br>Per proseguire è necessario consultarle tutte.</div></div></div></div>`,
    vf: s => `<div class="schermata">${testa(s)}<div class="corpo"><div class="scroll"><div class="vf">${s.voci.map((v, i) => `<div class="r an" data-i="${i}"><p>${esc(v[0])}</p><div class="bt"><button data-v="1">Vero</button><button data-v="0">Falso</button></div><div class="spieg">${esc(v[2])}</div></div>`).join('')}</div></div></div></div>`,
    ordina: s => `<div class="schermata">${testa(s)}<div class="corpo"><div class="ord" id="ord"></div><div style="margin-top:2cqh;display:flex;gap:1.4cqh;align-items:center"><button class="btn prim" id="ver">Verifica</button><span class="fb" id="fb" style="margin:0"></span></div></div></div>`,
    caso: s => `<div class="schermata">${testa(s)}<div class="corpo caso"><div class="scena an" data-subito><span class="tag">Caso pratico</span><p>${esc(s.scena)}</p></div><div><p class="dom an">${esc(s.domanda)}</p><div class="opz">${s.opz.map((o, i) => `<button class="an" data-i="${i}"><span class="lt">${L(i).toUpperCase()}</span><span>${esc(o[0])}</span></button>`).join('')}</div><div class="fb" id="fb"></div></div></div></div>`,
    abbina: s => { const dest = shuffle(s.coppie.map(c => c[1])); return `<div class="schermata">${testa(s)}<div class="corpo"><div class="abb">${s.coppie.map((c, i) => `<div class="r an" data-i="${i}"><b>${esc(c[0])}</b><select aria-label="${esc(c[0])}"><option value="">Seleziona il compito…</option>${dest.map(d => `<option>${esc(d)}</option>`).join('')}</select></div>`).join('')}</div><div style="margin-top:1.8cqh;display:flex;gap:1.4cqh;align-items:center"><button class="btn prim" id="ver">Verifica</button><span class="fb" id="fb" style="margin:0"></span></div></div></div>`; },
    verifica: s => `<div class="schermata">${testa(s, `<div class="rif">Soglia: ${s.soglia}/${s.domande.length}</div>`)}<div class="corpo"><div class="scroll"><div class="ver" id="ver-q"></div><div style="margin:1.8cqh 0 1cqh;display:flex;gap:1.4cqh;align-items:center"><button class="btn prim" id="ver">Conferma le risposte</button></div><div id="ver-es"></div></div></div></div>`,
    testfinale: s => `<div class="schermata">${testa(s)}<div class="corpo tf" id="tf"></div></div>`
  };

  /* ───────── comportamenti interattivi ───────── */
  const B = {
    definizioni: (s, el) => {
      const viste = new Set();
      $$('.def', el).forEach(d => { const apri = () => { d.classList.toggle('aperta'); d.classList.add('vista'); viste.add(d.dataset.i); aggiorna(); }; d.onclick = apri; d.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); apri(); } }; });
      obbligo = { fatto: () => viste.size >= s.voci.length, testo: 'Apri tutte le schede per proseguire' };
    },
    figure: (s, el) => {
      const viste = new Set();
      $$('.fig', el).forEach(b => b.onclick = () => {
        const v = s.voci[b.dataset.i]; viste.add(b.dataset.i);
        $$('.fig', el).forEach(x => x.classList.remove('attiva')); b.classList.add('attiva', 'vista');
        const d = $('#det', el); d.innerHTML = `${ico(v[0])}<div><b>${esc(v[1])}</b>${esc(v[2])}</div>`; d.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 400, easing: 'ease-out' });
        aggiorna();
      });
      obbligo = { fatto: () => viste.size >= s.voci.length, testo: 'Consulta tutte le schede per proseguire' };
    },
    matrice: (s, el) => {
      const sel = new Set();
      $$('.cella', el).forEach(c => c.onclick = () => {
        sel.add(c.dataset.v + '-' + c.dataset.p); $$('.cella', el).forEach(x => x.classList.remove('sel')); c.classList.add('sel');
        const v = +c.dataset.v, [col, liv, txt] = coloriLiv(v);
        $('#esito', el).innerHTML = `<div class="val">${v}</div><span class="liv" style="background:${col}">Rischio ${liv}</span><p><b>P = ${+c.dataset.p + 1}</b> (${esc(s.P[c.dataset.p])}) × <b>D = ${+c.dataset.d + 1}</b> (${esc(s.D[c.dataset.d])})</p><p style="margin-top:1.4cqh">${txt}</p>`;
        aggiorna();
      });
      obbligo = { fatto: () => sel.size >= 3, testo: 'Seleziona almeno tre caselle della matrice' };
    },
    pittogrammi: (s, el) => {
      const viste = new Set();
      $$('.tab button', el).forEach(b => b.onclick = () => {
        const g = s.gruppi[b.dataset.i]; viste.add(b.dataset.i);
        $$('.tab button', el).forEach(x => x.classList.remove('attiva')); b.classList.add('attiva', 'vista');
        $('#pann', el).innerHTML = `<div class="descr"><b>${esc(g.nome)}</b> · ${esc(g.forma)}. ${esc(g.desc)}.</div><div class="segni">${g.codici.map((c, k) => `<div class="segno" style="animation:entra .5s ${k * 70}ms both"><div class="svg">${svgISO(c[0])}</div><span>${esc(c[1])}</span><small>ISO 7010 – ${c[0]}</small></div>`).join('')}</div>`;
        aggiorna();
      });
      obbligo = { fatto: () => viste.size >= s.gruppi.length, testo: 'Consulta tutte le famiglie di segnali' };
    },
    vf: (s, el) => {
      const risp = {};
      $$('.vf .r', el).forEach(r => $$('button', r).forEach(b => b.onclick = () => {
        const i = r.dataset.i, v = b.dataset.v === '1', ok = v === s.voci[i][1];
        $$('button', r).forEach(x => { x.disabled = true; x.classList.toggle('sc', x === b); });
        r.classList.add(ok ? 'ok' : 'ko'); risp[i] = ok; aggiorna();
      }));
      obbligo = { fatto: () => Object.keys(risp).length >= s.voci.length, testo: 'Rispondi a tutte le affermazioni' };
    },
    ordina: (s, el) => {
      let ord = shuffle(s.voci); while (ord.join() === s.voci.join()) ord = shuffle(s.voci);
      let ok = false;
      const disegna = () => {
        $('#ord', el).innerHTML = ord.map((v, i) => `<div class="r"><span class="n">${i + 1}</span><span>${esc(v)}</span><button data-i="${i}" data-d="-1" aria-label="Sposta su" ${i === 0 ? 'disabled' : ''}>${ico('FaArrowUp')}</button><button data-i="${i}" data-d="1" aria-label="Sposta giù" ${i === ord.length - 1 ? 'disabled' : ''}>${ico('FaArrowDown')}</button></div>`).join('');
        $$('#ord button', el).forEach(b => b.onclick = () => { if (ok) return; const i = +b.dataset.i, j = i + +b.dataset.d; [ord[i], ord[j]] = [ord[j], ord[i]]; disegna(); });
      };
      disegna();
      $('#ver', el).onclick = () => {
        const righe = $$('#ord .r', el); let giuste = 0;
        ord.forEach((v, i) => { const g = v === s.voci[i]; giuste += g; righe[i].classList.add(g ? 'ok' : 'ko'); });
        const fb = $('#fb', el);
        if (giuste === ord.length) { ok = true; fb.className = 'fb ok'; fb.textContent = 'Corretto: hai ricostruito la gerarchia delle misure di tutela.'; $('#ver', el).disabled = true; }
        else { fb.className = 'fb ko'; fb.textContent = `${giuste} su ${ord.length} nella posizione corretta. Riordina e verifica di nuovo.`; setTimeout(() => righe.forEach(r => r.classList.remove('ok', 'ko')), 1600); }
        aggiorna();
      };
      obbligo = { fatto: () => ok, testo: 'Ordina correttamente le misure e premi Verifica' };
    },
    caso: (s, el) => {
      let ok = false;
      $$('.opz button', el).forEach(b => b.onclick = () => {
        const o = s.opz[b.dataset.i], fb = $('#fb', el);
        b.classList.add(o[1] ? 'ok' : 'ko'); fb.className = 'fb ' + (o[1] ? 'ok' : 'ko'); fb.textContent = o[2];
        if (o[1]) { ok = true; $$('.opz button', el).forEach(x => x.disabled = true); } else b.disabled = true;
        aggiorna();
      });
      obbligo = { fatto: () => ok, testo: 'Individua la risposta corretta' };
    },
    abbina: (s, el) => {
      let ok = false;
      $('#ver', el).onclick = () => {
        let g = 0; const righe = $$('.abb .r', el);
        righe.forEach((r, i) => { const v = $('select', r).value, k = v === s.coppie[i][1]; g += k; r.classList.remove('ok', 'ko'); r.classList.add(k ? 'ok' : 'ko'); });
        const fb = $('#fb', el);
        if (g === s.coppie.length) { ok = true; fb.className = 'fb ok'; fb.textContent = 'Tutti gli abbinamenti sono corretti.'; $('#ver', el).disabled = true; $$('select', el).forEach(x => x.disabled = true); }
        else { fb.className = 'fb ko'; fb.textContent = `${g} abbinamenti corretti su ${s.coppie.length}: correggi quelli evidenziati in rosso.`; }
        aggiorna();
      };
      obbligo = { fatto: () => ok, testo: 'Completa correttamente tutti gli abbinamenti' };
    },
    verifica: (s, el) => {
      let ok = false;
      const disegna = () => {
        const dom = s.domande.map(d => { const o = shuffle(d[1].map((t, i) => [t, i])); return { q: d[0], o, k: o.findIndex(x => x[1] === d[2]), sp: d[3] }; });
        $('#ver-q', el).className = 'ver';
        $('#ver-q', el).innerHTML = dom.map((d, i) => `<div class="q"><p>${i + 1}. ${esc(d.q)}</p>${d.o.map((o, j) => `<label><input type="radio" name="q${i}" value="${j}"><span>${esc(o[0])}</span></label>`).join('')}<div class="sp">${esc(d.sp || '')}</div></div>`).join('');
        $('#ver-es', el).innerHTML = '';
        $('#ver', el).textContent = 'Conferma le risposte'; $('#ver', el).disabled = false;
        $('#ver', el).onclick = () => {
          const qq = $$('.ver .q', el), sc = dom.map((d, i) => { const r = $(`input[name=q${i}]:checked`, qq[i]); return r ? +r.value : -1; });
          if (sc.includes(-1)) { msg('Risposte incomplete', 'Rispondi a tutte le domande prima di confermare.'); return; }
          let g = 0; dom.forEach((d, i) => { const labs = $$('label', qq[i]); labs[d.k].classList.add('ok'); if (sc[i] !== d.k) labs[sc[i]].classList.add('ko'); else g++; $$('input', qq[i]).forEach(x => x.disabled = true); });
          $('#ver-q', el).classList.add('corretta');
          ok = g >= s.soglia;
          $('#ver-es', el).innerHTML = `<div class="esito-box ${ok ? 'ok' : 'ko'}"><b>${g}/${dom.length}</b> ${ok ? 'Verifica superata. Puoi proseguire.' : 'Verifica non superata: rivedi le spiegazioni e ripeti.'}</div>`;
          if (!ok) { $('#ver', el).textContent = 'Ripeti la verifica'; $('#ver', el).onclick = disegna; } else $('#ver', el).disabled = true;
          if (SC.lms) { const n = +SC.get('cmi.interactions._count') || 0; SC.set(`cmi.interactions.${n}.id`, s.mod.id + '-verifica'); SC.set(`cmi.interactions.${n}.type`, 'performance'); SC.set(`cmi.interactions.${n}.result`, ok ? 'correct' : 'wrong'); SC.set(`cmi.interactions.${n}.student_response`, g + '/' + dom.length); SC.commit(); }
          aggiorna();
          $('#ver-es', el).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        };
      };
      disegna();
      obbligo = { fatto: () => ok, testo: `Supera la verifica (almeno ${s.soglia} risposte corrette)` };
    },
    testfinale: (s, el) => testFinale(el)
  };

  /* ───────── test finale ───────── */
  const testFinale = el => {
    const T = C.testFinale, box = $('#tf', el);
    const tuttoFatto = S.slice(0, -1).every((x, i) => completo(i));
    const pannelloInfo = extra => `<div class="info"><div class="big">${T.domande}</div><p>domande estratte casualmente da una banca di ${T.banca.length} quesiti, con risposte in ordine casuale.</p><p>Soglia di superamento: <b style="color:#fff">${T.soglia}%</b> (almeno ${Math.ceil(T.domande * T.soglia / 100)} risposte corrette).</p><p>Tentativi disponibili: <b style="color:#fff">${Math.max(0, T.tentativi - st.tf.n)}</b> di ${T.tentativi}.</p>${extra || ''}</div>`;
    if (st.tf.ok) return fine(box);
    if (!tuttoFatto && !ANTEPRIMA) { box.innerHTML = pannelloInfo() + `<div class="dom"><p class="q">Il test finale si sblocca al completamento di tutte le schermate del corso.</p><p style="font-size:calc(2.2*var(--u));color:var(--testo-2)">Usa l'indice per individuare le schermate non ancora completate.</p></div>`; return; }
    if (st.tf.n >= T.tentativi) { box.innerHTML = pannelloInfo() + `<div class="dom"><p class="q">Hai esaurito i tentativi disponibili.</p><p style="font-size:calc(2.2*var(--u));color:var(--testo-2)">Contatta il responsabile del progetto formativo, dr. Jonathan D'Eugenio, per concordare la ripetizione del percorso.</p></div>`; return; }
    box.innerHTML = pannelloInfo() + `<div class="dom"><p class="q">Quando sei pronto, avvia il test. Una volta avviato, rispondi a tutte le domande in sequenza.</p><div><button class="btn prim" id="tf-go">Avvia il test finale</button></div></div>`;
    $('#tf-go', el).onclick = () => {
      st.tf.n++; salva(true);
      const dom = shuffle(T.banca).slice(0, T.domande).map(d => { const o = shuffle(d[1].map((t, i) => [t, i])); return { q: d[0], o, k: o.findIndex(x => x[1] === d[2]) }; });
      const risp = []; let i = 0;
      const mostraQ = () => {
        const d = dom[i];
        box.innerHTML = pannelloInfo(`<p style="margin-top:auto">Domanda <b style="color:#fff">${i + 1}</b> di ${dom.length}</p>`) + `<div class="dom"><div class="prog"><i style="width:${100 * i / dom.length}%"></i></div><p class="q">${i + 1}. ${esc(d.q)}</p><div class="opz">${d.o.map((o, j) => `<button data-j="${j}"><span class="lt">${L(j).toUpperCase()}</span><span>${esc(o[0])}</span></button>`).join('')}</div></div>`;
        $$('.opz button', box).forEach(b => b.onclick = () => { risp[i] = +b.dataset.j; i++; i < dom.length ? mostraQ() : esito(); });
      };
      const esito = () => {
        const g = dom.reduce((a, d, k) => a + (risp[k] === d.k), 0), perc = Math.round(100 * g / dom.length), ok = perc >= T.soglia;
        st.tf.best = Math.max(st.tf.best, perc); if (ok) { st.tf.ok = 1; st.d[S.length - 1] = 1; }
        if (SC.lms) {
          dom.forEach((d, k) => { const n = +SC.get('cmi.interactions._count') || 0; SC.set(`cmi.interactions.${n}.id`, 'TF' + st.tf.n + '-' + (k + 1)); SC.set(`cmi.interactions.${n}.type`, 'choice'); SC.set(`cmi.interactions.${n}.student_response`, L(risp[k])); SC.set(`cmi.interactions.${n}.correct_responses.0.pattern`, L(d.k)); SC.set(`cmi.interactions.${n}.result`, risp[k] === d.k ? 'correct' : 'wrong'); });
          SC.set('cmi.core.score.min', 0); SC.set('cmi.core.score.max', 100); SC.set('cmi.core.score.raw', st.tf.best);
          SC.set('cmi.core.lesson_status', ok ? 'passed' : (st.tf.n >= T.tentativi ? 'failed' : 'incomplete'));
        }
        salva(true); indice(); aggiorna();
        if (ok) return fine(box, perc);
        box.innerHTML = pannelloInfo() + `<div class="dom"><div class="esito-box ko"><b>${g}/${dom.length} · ${perc}%</b> Test non superato.</div><p style="font-size:calc(2.2*var(--u));color:var(--testo-2)">${st.tf.n < T.tentativi ? 'Ripassa i contenuti del corso con l\'indice e ripeti il test.' : 'Hai esaurito i tentativi disponibili: contatta il responsabile del progetto formativo.'}</p>${st.tf.n < T.tentativi ? '<div><button class="btn prim" id="tf-rip">Ripeti il test</button></div>' : ''}</div>`;
        const r = $('#tf-rip', box); if (r) r.onclick = () => testFinale(el);
      };
      mostraQ();
    };
  };
  const fine = (box, perc) => {
    box.parentNode.classList.remove('tf');
    box.className = 'corpo fine';
    box.innerHTML = `<div><h2 class="an vis">Corso completato</h2><p class="an vis">Hai superato il test finale${perc ? ` con il <b>${perc}%</b> di risposte corrette` : ''}. La piattaforma registra l'esito e genera l'attestato di frequenza con verifica dell'apprendimento, dotato di codice univoco e QR di verifica, archiviato nell'area riservata.</p><p class="an vis">La formazione generale costituisce credito formativo permanente. Il percorso prosegue con la formazione specifica sui rischi della mansione.</p></div>
      <div class="att an-s vis"><b style="color:var(--petrolio);font-size:calc(2.4*var(--u))">${esc(C.titolo)}</b><span style="color:var(--testo-3);font-size:calc(1.9*var(--u))">${C.ore} ore · ${esc(C.rif)}</span><span style="font-size:calc(1.9*var(--u));color:var(--testo-2)">Responsabile del progetto formativo<br><b>dr. Jonathan D'Eugenio</b></span><img class="timbro" onerror="this.remove()" src="img/timbro.png" alt="Timbro e firma del responsabile del progetto formativo"></div>`;
    if (SC.lms) { SC.set('cmi.core.lesson_status', 'passed'); SC.commit(); }
  };

  /* ───────── navigazione ───────── */
  let dir = 1;
  const vai = (i, d) => {
    if (i < 0 || i >= S.length) return;
    if (i > st.c && !completo(st.c) && !(i <= st.c + 1 && completo(st.c))) return;
    if (i > 0 && !completo(i - 1) && !completo(i)) return;
    dir = d || (i >= st.c ? 1 : -1);
    st.c = i; salva(false); disegna();
  };
  const disegna = () => {
    timersSch.forEach(clearTimeout); timersSch = []; zitto(); obbligo = null; narFine = !audio;
    const s = S[st.c], vecchia = $('.schermata', palco);
    const html = (R[s.t] || R.testo)(s);
    const tmp = document.createElement('div'); tmp.innerHTML = html; const nuova = tmp.firstElementChild;
    nuova.classList.add('entra'); if (dir < 0) nuova.classList.add('indietro');
    if (!nuova.classList.contains('full')) nuova.insertAdjacentHTML('beforeend', `<div class="piede-sl"><span>${esc(C.id)} · ${esc(C.titolo)}</span><span>© 2026 dr. Jonathan D'Eugenio</span><span>${st.c + 1} / ${S.length}</span></div><img class="logo-sl" src="loghi/astra.svg" alt="">`);
    if (s.appro) nuova.insertAdjacentHTML('beforeend', `<button class="appro-btn" id="b-appro">${ico('FaBookOpen')} Approfondimento normativo</button><div class="appro" id="appro"><button class="chiudi" aria-label="Chiudi">${ico('FaXmark')}</button><h3>Approfondimento</h3><p>${esc(s.appro)}</p></div>`);
    $$('.schermata.esce', palco).forEach(x => x.remove());
    if (vecchia) { vecchia.classList.add('esce'); setTimeout(() => vecchia.remove(), 300); }
    palco.appendChild(nuova);
    if (s.appro) { $('#b-appro', nuova).onclick = () => $('#appro', nuova).classList.add('aperto'); $('.appro .chiudi', nuova).onclick = () => $('#appro', nuova).classList.remove('aperto'); }
    if (B[s.t]) B[s.t](s, nuova);
    if (s.nar) parla(s.nar, completo(st.c) ? null : progRivela); else { narFine = true; sottotitolo(''); }
    if (completo(st.c)) $$('.an,.an-s', nuova).forEach(mostra); else avviaRivela();
    if (completo(st.c) && audio) narFine = true;
    $('#h-tit').textContent = s.mod.id === 'TF' ? C.titolo : s.mod.titolo;
    window.scrollTo(0, 0);
    aggiorna(); indice();
  };
  bAv.onclick = () => { if (completo(st.c)) vai(st.c + 1, 1); };
  bInd.onclick = () => vai(st.c - 1, -1);
  addEventListener('keydown', e => { if (e.target.closest('select,input')) return; if (e.key === 'ArrowRight' && !bAv.disabled) bAv.click(); if (e.key === 'ArrowLeft' && !bInd.disabled) bInd.click(); });

  /* avvio: la narrazione richiede un gesto dell'utente */
  const avvio = document.createElement('div'); avvio.className = 'ov on';
  avvio.innerHTML = `<div class="box"><h3>${st.c > 0 ? 'Bentornato' : 'Benvenuto'}</h3><p>${st.c > 0 ? 'Riprendi il corso dal punto in cui lo hai lasciato.' : 'Il corso è commentato da una voce narrante. Puoi disattivarla in qualsiasi momento con il pulsante audio.'}</p><button class="btn prim" id="go">${st.c > 0 ? 'Riprendi il corso' : 'Inizia il corso'}</button></div>`;
  document.body.appendChild(avvio);
  $('#go').onclick = () => { avvio.remove(); ultimoInput = Date.now(); disegna(); };

  let chiuso = false;
  const chiudi = () => {
    if (chiuso) return; chiuso = true;
    salva(false);
    if (SC.lms) { const s = Math.round((Date.now() - t0) / 1000); SC.set('cmi.core.session_time', `${String(Math.floor(s / 3600)).padStart(4, '0')}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`); SC.set('cmi.core.exit', st.tf.ok ? '' : 'suspend'); SC.commit(); SC.fine(); }
  };
  addEventListener('pagehide', chiudi); addEventListener('beforeunload', chiudi);
  window.ASTRA_EL = { S, st, TOT_SEC, vai, anteprima: ANTEPRIMA };
})();
