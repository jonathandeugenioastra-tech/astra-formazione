/* Formazione ASTRA – logica del sito · © 2026 dr. Jonathan D'Eugenio */
(function () {
  'use strict';
  const D = window.ASTRA, A = D.azienda;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $('#app');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const euro = n => { const v = Math.round(Number(n) * 100) / 100, [i, d] = v.toFixed(2).split('.');
    return '€ ' + i.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (d !== '00' ? ',' + d : ''); };
  const MESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
  const MOD = {
    EL: { nome: 'E-learning', breve: 'E-learning', desc: 'Piattaforma online, quando vuoi, con tracciamento SCORM' },
    VCS: { nome: 'Videoconferenza sincrona', breve: 'Videoconferenza', desc: 'Lezione in diretta con docente, webcam attiva e registro presenze' },
    P: { nome: 'Aula', breve: 'Aula', desc: 'In aula presso la sede ASTRA o presso il cliente previo accordo' }
  };
  const corso = id => D.corsi.find(c => c.id === id);
  const slug = c => c.titolo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const urlCorso = c => 'corsi/' + slug(c) + '/';
  window.ASTRA_slug = slug;
  const amb = k => D.ambiti[k];

  /* ---------- Icone ---------- */
  const I = {
    freccia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    orologio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cerca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    carrello: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    tel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    su: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>',
    ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17l9-10"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    cestino: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/></svg>',
    aula: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="3"/><path d="M3 20a5 5 0 0 1 10 0M14 5h7v8h-5"/></svg>',
    utenti: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14a5 5 0 0 1 5 5"/></svg>',
    calendario: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    scudo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
    campana: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/></svg>',
    grafico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/></svg>',
    lab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/></svg>'
  };

  /* ---------- Foto (srcset 1280 / 2560 / 3840) ---------- */
  function foto(slot, cls = '', sizes = '100vw', eager = false) {
    const f = D.foto[slot];
    if (!f) return '';
    const b = 'img/' + f.file;
    const ws = [640, 1024, 1600, 2560, 3840].filter(w => w <= (f.w || 2560));
    return `<picture><source type="image/webp" srcset="${ws.map(w => `${b}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}"><img class="${cls}" src="${b}-1280.jpg" srcset="${b}-1280.jpg 1280w, ${b}-2560.jpg 2560w" sizes="${sizes}" alt="${esc(f.alt)}" width="${f.w || 3840}" height="${f.h || 2160}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`;
  }

  /* ---------- Carrello (memoria del browser, solo comodità) ---------- */
  const CK = 'astra-carrello-v1';
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem(CK) || '[]') || []; } catch (e) { cart = []; }
  const salva = () => { try { localStorage.setItem(CK, JSON.stringify(cart)); } catch (e) { } aggiornaBadge(); };
  function aggiungi(id, mod, qta, ed = null) {
    const r = cart.find(x => x.id === id && x.mod === mod && (x.ed || null) === (ed || null));
    if (r) r.qta += qta; else cart.push({ id, mod, qta, ed: ed || null });
    salva();
    toast(`${esc(corso(id).titolo)} aggiunto (${qta} ${qta > 1 ? 'posti' : 'posto'})`, '#/carrello', 'Vai al carrello');
  }
  function aggiornaBadge() {
    const n = cart.reduce((s, x) => s + x.qta, 0), b = $('#badge');
    if (!b) return;
    b.textContent = n; b.classList.toggle('on', n > 0);
    const bt = $('#badge-tab'); if (bt) { bt.textContent = n; bt.classList.toggle('on', n > 0); }
    $('#btn-carrello').setAttribute('aria-label', `Carrello, ${n} ${n === 1 ? 'posto' : 'posti'}`);
  }
  const SCONTI = [[20, 15], [10, 10], [5, 5]];
  const scontoPer = q => (SCONTI.find(([s]) => q >= s) || [0, 0])[1];

  /* ---------- Toast ---------- */
  let tt;
  function toast(msg, href, lab) {
    const t = $('#toast');
    t.innerHTML = I.ok + `<span>${msg}</span>` + (href ? `<a href="${href}">${lab} →</a>` : '');
    t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 4200);
  }

  /* ---------- Componenti ---------- */
  const chips = mods => ['EL', 'VCS', 'P'].filter(m => mods.includes(m)).map(m =>
    `<span class="chip ${m}" title="${MOD[m].nome}">${m}</span>`).join('') + (mods.length === 1 && mods[0] === 'P' ? '<span class="chip aula-sola">Solo in aula</span>' : '');
  const RPF = D.rpf, telRPF = RPF.tel.replace(/\s/g, '');
  const nonAmmesse = c => ['EL', 'VCS'].filter(m => !c.mod.includes(m));
  const testoNonAmmesse = c => { const n = nonAmmesse(c); if (!n.length) return '';
    const norma = c.ambito === 'sicurezza' || c.id.startsWith('HACCP');
    return (n.length === 2 ? `E-learning e videoconferenza non sono ${norma ? 'ammessi dalla normativa' : 'previsti'}` : `${MOD[n[0]].nome} non è ${norma ? 'ammess' + (n[0] === 'EL' ? 'o' : 'a') + ' dalla normativa' : 'previst' + (n[0] === 'EL' ? 'o' : 'a') + ', in ragione delle esercitazioni pratiche'}`) +
      ' per questo corso: ' + (c.mod.includes('VCS') ? 'si svolge in videoconferenza oppure in aula' : 'si svolge in aula') +
      ', presso la sede ASTRA nelle date a calendario o presso il cliente previo accordo preventivo.'; };
  const SEZ = c => [['pres', 'Presentazione'], ['dest', 'Destinatari'], ['req', 'Requisiti'], ['obj', 'Obiettivi'], ['prog', 'Programma'], ['dati', 'Dati del corso'], ['met', 'Metodologia'], ['ver', 'Verifica'], ['att', 'Attestato'], ['doc2', 'Docenti']].concat(c.mod.includes('VCS') || c.mod.includes('EL') ? [['tec', 'Requisiti tecnici']] : []).concat([['ed', 'Edizioni']]);
  const ABIL = c => c.tipo === 'Abilitazione' || c.id === 'CONF';
  const NOTA_ORE = c => ABIL(c) ? 'Articolazione oraria conforme all\'Accordo Stato-Regioni del 17 aprile 2025. Il modulo pratico rispetta il rapporto istruttore/discenti di 1 a 6.'
    : ['AI-1', 'AI-2', 'AI-3'].includes(c.id) ? 'Ripartizione tra teoria ed esercitazioni pratiche conforme all\'Allegato III del D.M. 2 settembre 2021.'
    : ['PS-A', 'PS-BC'].includes(c.id) ? 'Articolazione in moduli A, B e C conforme agli Allegati 3 e 4 del D.M. 388/2003.'
    : 'La durata complessiva corrisponde a quella prevista dalla norma di riferimento; ove la norma non stabilisce la ripartizione oraria dei singoli moduli, questa è definita nel documento progettuale ASTRA.';
  const METODO = c => (ABIL(c) || c.mod.length === 1 && c.mod[0] === 'P'
    ? 'Lezioni frontali con supporti multimediali, alternate a esercitazioni pratiche svolte in presenza in condizioni di sicurezza, con attrezzature e dispositivi conformi.'
    : 'Metodo didattico interattivo, orientato al coinvolgimento dei partecipanti e alla discussione di casi di studio, con lezioni frontali, esercitazioni e confronto con il docente.')
    + ' Il numero massimo di partecipanti per edizione è di 30 per le sessioni teoriche. La lingua di erogazione è l\'italiano; per i lavoratori stranieri è preliminarmente verificata la comprensione della lingua.';
  const VERIFICA = c => 'L\'ammissione alla verifica finale è subordinata alla frequenza di almeno il 90% del monte ore. ' + (ABIL(c)
    ? 'Al termine del modulo teorico è somministrato un questionario a risposta multipla, il cui superamento consente l\'accesso al modulo pratico; la verifica finale consiste in una prova pratica e in un colloquio.'
    : ['AI-1', 'AI-2', 'AI-3', 'PS-A', 'PS-BC', 'QUOTA', 'PES'].includes(c.id) ? 'La verifica consiste in un test scritto e in una prova pratica.'
    : 'La verifica consiste in un test a risposta multipla, superato con almeno il 70% di risposte corrette, oppure in un colloquio. Nei corsi in videoconferenza la verifica si svolge in diretta sulla piattaforma.');
  const ATTESTATO = c => c.ambito === 'haccp' && c.id.startsWith('HACCP') ? 'Al superamento della verifica finale è rilasciato l\'attestato di formazione previsto dalla disciplina della Regione Abruzzo, con validità triennale dalla data del rilascio.'
    : c.ambito === 'sicurezza' ? 'Al superamento della verifica finale è rilasciato l\'attestato di frequenza con verifica dell\'apprendimento, emesso da AiFOS tramite il Centro di Formazione ASTRA S.r.l. e registrato nel registro nazionale della formazione. L\'attestato ha validità su tutto il territorio nazionale ed è verificabile mediante QR code.'
    : 'Al superamento della verifica finale è rilasciato l\'attestato di frequenza con verifica dell\'apprendimento emesso da ASTRA S.r.l., verificabile mediante QR code.';
  const DOCENTI = c => c.ambito === 'sicurezza' ? 'I docenti possiedono i requisiti di qualificazione previsti dal Decreto Interministeriale 6 marzo 2013 e una documentata esperienza professionale nelle materie trattate.' + (ABIL(c) ? ' Gli istruttori delle esercitazioni pratiche possiedono esperienza professionale pratica almeno triennale nell\'uso delle attrezzature o nelle tecniche oggetto del corso.' : '')
    : 'I docenti sono professionisti del settore, tecnici e chimici con esperienza pluriennale nella consulenza e nelle attività del laboratorio accreditato ASTRA Studio Chimico Associato.';
  const boxRPF = (extra = '') => `<div class="box-rpf ${extra}"><span class="k">Corsi in aula presso il cliente</span>
      <span>Date, sede e numero di partecipanti si definiscono con un accordo preventivo. Contatta:</span>
      <b>${esc(RPF.nome)}</b><span class="r">${esc(RPF.ruolo)} – Responsabile del progetto formativo</span>
      <a class="btn btn-petrolio" href="tel:${telRPF}">${I.tel} ${RPF.tel}</a></div>`;
  const cardCorso = (c, i = 0) => {
    const a = amb(c.ambito);
    return `<a class="corso rivela ritardo-${i % 4}" href="${urlCorso(c)}">
      <span class="fascia" style="background:${a.colore}"></span>
      <div class="in">
        <div class="meta"><span class="chip amb" style="background:${a.colore}">${esc(a.nome)}</span><span class="codice">${c.id}</span></div>
        <h3>${esc(c.titolo)}</h3>
        <div class="chips">${chips(c.mod)}</div>
        <span class="ore">${I.orologio}${c.ore} ore · ${esc(c.tipo)}</span>
      </div>
      <div class="piede"><span class="prezzo">${euro(c.prezzo)}<small>a partecipante · IVA esclusa · indicativo</small></span><span class="freccia">${I.freccia}</span></div>
    </a>`;
  };
  /* immagine della pagina corso: alterna le varianti dell'area, diverse da quella della home */
  const fotoArea = c => { const v = [c.ambito + '2', c.ambito + '3'].filter(k => D.foto[k]); if (!v.length) return c.ambito;
    const i = D.corsi.filter(x => x.ambito === c.ambito).indexOf(c); return v[i % v.length]; };
  const testa = (titolo, sotto, briciola, slot) => `
    <section class="testa-pagina">${slot ? foto(slot, 'sfondo', '100vw', true) : ''}
      <div class="wrap">
        <nav class="briciole" aria-label="Percorso"><a href="#/">Home</a><span aria-hidden="true">›</span>${briciola || `<b>${esc(titolo)}</b>`}</nav>
        <h1>${esc(titolo)}</h1>${sotto ? `<p>${sotto}</p>` : ''}
      </div>
    </section>`;
  const legendaMod = `<div class="legenda" aria-label="Legenda"><b>Legenda:</b>
    <span><span class="chip EL">EL</span> e-learning</span>
    <span><span class="chip VCS">VCS</span> videoconferenza sincrona</span>
    <span><span class="chip P">P</span> presenza</span>
    <span><span class="chip aula-sola">Solo in aula</span> e-learning e videoconferenza non ammessi</span></div>`;
  const dataBreve = s => { const d = new Date(s + 'T00:00'); return { g: d.getDate(), m: MESI[d.getMonth()].slice(0, 3), mese: MESI[d.getMonth()], a: d.getFullYear(), d }; };
  const periodo = e => { const d = dataBreve(e.data), f = dataBreve(e.fine); return e.data === e.fine ? dataLunga(e.data) : (d.m === f.m ? `dal ${d.g} al ${f.g} ${f.mese} ${f.a}` : `dal ${d.g} ${d.mese} al ${f.g} ${f.mese} ${f.a}`); };
  const dataLunga = s => { const d = dataBreve(s); return `${d.g} ${d.mese} ${d.a}`; };
  const statoPosti = n => n === 0 ? ['#EE0000', 'Esaurito'] : n <= 5 ? ['#FFC000', `Ultimi ${n} posti`] : ['#00B050', `${n} posti liberi`];

  /* ================= PAGINE ================= */
  const P = {};

  /* ---------- Home ---------- */
  P.home = () => {
    const prossime = D.edizioni.filter(e => e.posti > 0).slice(0, 4);
    const nCorsi = D.corsi.length;
    const anni = new Date().getFullYear() - 1987;
    const evid = ['PREP', 'DL', 'LAV-AGG', 'AI-2', 'CAMP-RIF', 'RENTRI', 'RSPP-AGG', 'CAR'].map(corso);
    return `
    <section class="hero" aria-label="Presentazione">
      ${['hero1', 'hero2', 'hero3'].filter(s => D.foto[s]).map((s, i) => `<div class="slide${i ? '' : ' on'}">${foto(s, '', '100vw', i === 0)}</div>`).join('')}
      <div class="wrap">
        <div>
          <span class="occhiello">Centro di Formazione AiFOS · Teramo</span>
          <h1 class="slogan"><span class="marchio">Astra<i>.</i></span><span class="claim">La tua Academy digitale, semplice e veloce.</span></h1>
          <p class="sotto">Corsi di salute e sicurezza sul lavoro, ambiente, energia e igiene degli alimenti, in aula, in videoconferenza e in e-learning, con durata, contenuti e modalità previsti dalla normativa di riferimento di ciascun corso.</p>
          <form class="cerca-hero" role="search" id="cerca-hero">
            <label>${I.cerca}<span class="sr">Cerca un corso</span><input name="q" placeholder="Titolo o codice del corso" autocomplete="off"></label>
            <button class="btn btn-rosso">Cerca</button>
          </form>
          <div class="cta">
            <a class="btn btn-vetro" href="#/catalogo">Tutti i corsi ${I.freccia}</a>
            <a class="btn btn-vetro" href="#/aziende">Servizi per le aziende</a>
          </div>
        </div>
        <aside class="hero-card" aria-labelledby="h-prox">
          <h2 id="h-prox"><span class="live" aria-hidden="true"></span>Prossime edizioni</h2>
          <ol>${prossime.map(e => { const c = corso(e.corso), d = dataBreve(e.data); return `
            <li><a href="${urlCorso(c)}"><span class="data-box"><b>${d.g}</b><span>${d.m}</span></span>
              <span><span class="t">${esc(e.titolo || c.titolo)}</span><br><span class="m">${MOD[e.mod].breve} · ${esc(e.sede)} · ${c.ore} h</span></span></a></li>`; }).join('')}
          </ol>
          <a class="btn btn-vetro btn-s" style="margin-top:14px;width:100%" href="#/calendario">Calendario delle edizioni</a>
        </aside>
      </div>
      <div class="punti" role="tablist" aria-label="Immagini">${['hero1', 'hero2', 'hero3'].filter(s => D.foto[s]).map((s, i) => `<button role="tab" aria-label="Immagine ${i + 1}" class="${i ? '' : 'on'}" data-i="${i}"></button>`).join('')}</div>
    </section>

    <section class="banda-cerca" aria-labelledby="h-cerca"><div class="wrap"><h2 id="h-cerca">Cerca tra tutti i corsi</h2>${cercaAvanzata()}</div></section>

    <section class="numeri" aria-label="ASTRA in numeri">
      <div class="wrap">
        <div class="numero rivela"><b data-conta="${anni}">0</b><span>anni di consulenza alle imprese, dal 1987</span></div>
        <div class="numero rivela ritardo-1"><b data-conta="${D.laboratorio.analisiAnno}" data-suffisso="+">0</b><span>analisi l'anno nel laboratorio accreditato</span></div>
        <div class="numero rivela ritardo-2"><b data-conta="${nCorsi}">0</b><span>corsi a catalogo in 4 aree tematiche</span></div>
        <div class="numero rivela ritardo-3"><b data-conta="3">0</b><span>modalità di erogazione: aula, videoconferenza, e-learning</span></div>
      </div>
    </section>

    <section class="sez">
      <div class="wrap">
        <div class="intest rivela"><div><span class="k">Le aree</span><h2>Aree formative</h2>
          <p>Formazione in materia di salute e sicurezza sul lavoro, tutela dell'ambiente, gestione dell'energia e igiene degli alimenti.</p></div>
          <a class="btn btn-bordo" href="#/catalogo">Catalogo completo ${I.freccia}</a></div>
        <div class="ambiti">${Object.entries(D.ambiti).map(([k, a], i) => `
          <a class="ambito rivela ritardo-${i}" href="#/catalogo?ambito=${k}">${foto(k, '', '(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw')}
            <div class="in"><span class="tag" style="background:${a.colore}">${D.corsi.filter(c => c.ambito === k).length} corsi</span>
              <h3>${esc(a.nome)}</h3><p>${esc(a.rif)}</p>
              <span class="vai">Consulta i corsi ${I.freccia}</span></div></a>`).join('')}
        </div>
      </div>
    </section>

    <section class="sez grigia">
      <div class="wrap">
        <div class="intest rivela"><div><span class="k">Didattica</span><h2>Modalità di erogazione</h2>
          <p>Per ciascun corso sono proposte esclusivamente le modalità di erogazione ammesse dalla normativa vigente.</p></div></div>
        <div class="modalita">
          ${[['EL', I.laptop, ['Accesso 24 ore su 24 da computer', 'Tracciamento dei tempi e test finale', 'Tutor disponibile via email e telefono']],
          ['VCS', I.video, ['Docente in diretta e interazione', 'Webcam attiva e registro delle presenze', 'Accesso solo da computer o tablet']],
          ['P', I.aula, ['Aula ASTRA a Teramo nelle date a calendario', 'Presso il cliente previo accordo preventivo', `Info corsi in azienda: ${RPF.tel}`]]].map(([m, ico, li], i) => `
          <article class="mod-card rivela ritardo-${i}"><span class="mod-ico">${ico}</span><span class="chip ${m}" style="width:max-content">${m}</span>
            <h3>${MOD[m].nome}</h3><p>${MOD[m].desc}.</p><ul>${li.map(x => `<li>${x}</li>`).join('')}</ul></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="sez">
      <div class="wrap">
        <div class="intest rivela"><div><span class="k">Selezione</span><h2>Corsi in evidenza</h2></div>
          <a class="btn btn-bordo" href="#/catalogo">Vedi tutti ${I.freccia}</a></div>
        <div class="griglia home-evid">${evid.map(cardCorso).join('')}</div>
        ${legendaMod}
      </div>
    </section>

    <section class="sez grigia">
      <div class="wrap split">
        <div class="foto-tonda rivela">${foto('aziende', '', '(max-width:1024px) 100vw, 50vw')}
          <div class="flottante"><b>-15%</b><span>sconto indicativo da 20 partecipanti, con assegnazione dei posti ai dipendenti</span></div></div>
        <div class="rivela ritardo-1">
          <div class="intest" style="margin-bottom:0"><div><span class="k">Per le aziende</span><h2>Gestione centralizzata della formazione del personale</h2></div></div>
          <ul class="elenco-check">
            <li><span class="ico">${I.utenti}</span><div><b>Acquisto di più posti</b><span>L'azienda acquista i posti necessari e li assegna ai dipendenti indicandone nominativo e codice fiscale.</span></div></li>
            <li><span class="ico">${I.grafico}</span><div><b>Avanzamento in tempo reale</b><span>Il referente aziendale monitora lo stato di avanzamento di ciascun partecipante e scarica gli attestati.</span></div></li>
            <li><span class="ico">${I.campana}</span><div><b>Scadenzario automatico</b><span>Promemoria a 120, 60 e 30 giorni dalla scadenza degli aggiornamenti.</span></div></li>
          </ul>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:30px"><a class="btn btn-rosso" href="#/aziende">Modalità del servizio</a><a class="btn btn-bordo" href="#/area-azienda">Dimostrazione dell'area azienda</a></div>
        </div>
      </div>
    </section>

    <section class="sez">
      <div class="wrap">
        <div class="intest rivela"><div><span class="k">Normativa e news</span><h2>Aggiornamenti normativi</h2></div><a class="btn btn-bordo" href="#/normativa">Tutte le news ${I.freccia}</a></div>
        <div class="news">${D.news.slice(0, 3).map((n, i) => notizia(n, i)).join('')}</div>
      </div>
    </section>

    <section class="sez grigia" style="padding-top:72px;padding-bottom:72px">
      <div class="wrap">
        <div class="intest rivela"><div><span class="k">Qualità certificata</span><h2>Sistemi di gestione e accreditamenti</h2></div></div>
        <div class="cert">${certificazioni()}</div>
      </div>
    </section>

    <section class="sez" style="padding-top:72px">
      <div class="wrap"><div class="cta-banda rivela">${foto('cta', '', '100vw')}
        <div><h2>Piani formativi aziendali</h2><p>ASTRA analizza mansioni, rischi e scadenze e predispone un calendario formativo dedicato, erogabile anche presso la sede del cliente.</p></div>
        <div class="azioni"><a class="btn btn-bianco" href="#/contatti">Richiesta di preventivo</a><a class="btn btn-vetro" href="tel:${A.telefoni[0].replace(/\s/g, '')}">${I.tel} ${A.telefoni[0]}</a></div>
      </div></div>
    </section>`;
  };

  const notizia = (n, i = 0) => { const a = amb(n.area); return `
    <article class="notizia rivela ritardo-${i % 3}"><span class="area" style="color:${a.colore}">${esc(a.nome)}</span>
      <h3>${esc(n.titolo)}</h3><p>${esc(n.testo)}</p><span class="rif">Riferimento: ${esc(n.rif)}</span></article>`; };
  const certificazioni = () => [
    ['UNI EN ISO 9001', 'Sistema di gestione per la qualità'],
    ['UNI EN ISO 14001', 'Sistema di gestione ambientale'],
    ['UNI ISO 45001', 'Salute e sicurezza sul lavoro'],
    ['UNI/PdR 125', 'Parità di genere']].map(([t, d], i) => `<div class="rivela ritardo-${i}"><span class="sigillo">${I.scudo}</span><b>${t}</b><span>${d}</span></div>`).join('');

  /* ---------- Destinatari e durate (ricerca avanzata) ---------- */
  const FIG = [
    ['lav', 'Lavoratori', /^LAV-/], ['prep', 'Preposti', /^PREP/], ['dir', 'Dirigenti', /^DIR$/], ['dl', 'Datori di lavoro / DL-SPP', /^(DL|DLSPP)$/],
    ['rspp', 'RSPP / ASPP', /^RSPP-/], ['rls', 'RLS', /^RLS$/], ['ai', 'Addetti antincendio', /^AI-/], ['ps', 'Addetti primo soccorso', /^PS-/],
    ['attr', 'Operatori di attrezzature (carrelli, PLE, gru, MMT)', /^(CAR|PLE|GRU|MMT)$/], ['quota', 'Lavori in quota e ambienti confinati', /^(QUOTA|CONF)$/],
    ['ele', 'Addetti ai lavori elettrici', /^PES$/], ['hse', 'HSE manager e tecnici della prevenzione', /^(ATEX|CHIM|CONF|FORM|REACH|RSPP-AGG)$/], ['form', 'Formatori per la sicurezza', /^FORM$/],
    ['amb', 'Responsabili e tecnici ambientali', /^(LEG-AMB|RA|RIF|RENTRI|CLASS|CAMP-RIF|CAMP-ACQ|EMI|MON-EMI|SCA|BON|REATI|REACH)$/],
    ['aud', 'Auditor e sistemi di gestione', /^(ISO14|AUD14|ISO50|ISO22)$/], ['ege', 'Energy manager ed EGE', /^(EGE|ISO50|DIAG|CER)$/], ['esg', 'Sustainability / ESG manager', /^(ESG|CFP)$/],
    ['ali', 'Alimentaristi', /^(HACCP|HACCP-AGG|ALL)$/], ['rhaccp', 'Responsabili HACCP e qualità alimentare', /^(HACCP-R|ISO22|ALL)$/]];
  const figDi = c => FIG.filter(f => f[2].test(c.id)).map(f => f[0]);
  const DUR = [['4', 'Fino a 4 ore', o => o <= 4], ['8', 'Da 5 a 8 ore', o => o > 4 && o <= 8], ['16', 'Da 9 a 16 ore', o => o > 8 && o <= 16], ['99', 'Oltre 16 ore', o => o > 16]];
  const cercaAvanzata = (dark) => `
    <form class="cerca-av${dark ? ' scura' : ''}" id="cerca-av" role="search" aria-label="Ricerca avanzata dei corsi">
      <label><span>Chi seguirà il corso?</span><select name="fig"><option value="">Tutte le figure</option>${FIG.map(f => `<option value="${f[0]}">${esc(f[1])}</option>`).join('')}</select></label>
      <label><span>Base o aggiornamento?</span><select name="tipo"><option value="">Tutte le tipologie</option>${['Base', 'Aggiornamento', 'Abilitazione', 'Specialistico'].map(t => `<option>${t}</option>`).join('')}</select></label>
      <label><span>Area formativa</span><select name="ambito"><option value="">Tutte le aree</option>${Object.entries(D.ambiti).map(([k, a]) => `<option value="${k}">${esc(a.nome)}</option>`).join('')}</select></label>
      <label><span>Online o in presenza?</span><select name="mod"><option value="">Tutte le modalità</option>${Object.entries(MOD).map(([k, m]) => `<option value="${k}">${esc(m.breve)}</option>`).join('')}</select></label>
      <label><span>Durata</span><select name="dur"><option value="">Qualsiasi</option>${DUR.map(d => `<option value="${d[0]}">${d[1]}</option>`).join('')}</select></label>
      <label class="q"><span>Parola chiave</span><input name="q" type="search" placeholder="Titolo, codice o norma"></label>
      <button class="btn btn-rosso">${I.cerca} Cerca</button>
    </form>`;

  /* ---------- Catalogo ---------- */
  let F = { ambito: [], mod: [], tipo: [], fig: [], dur: [], q: '', ord: 'rilevanza' };
  P.catalogo = (par) => {
    F = { ambito: par.ambito ? [par.ambito] : [], mod: par.mod ? [par.mod] : [], tipo: par.tipo ? [par.tipo] : [], fig: par.fig ? [par.fig] : [], dur: par.dur ? [par.dur] : [], q: par.q || '', ord: 'rilevanza' };
    const conta = (k, v) => D.corsi.filter(c => k === 'mod' ? c.mod.includes(v) : k === 'fig' ? figDi(c).includes(v) : k === 'dur' ? DUR.find(d => d[0] === v)[2](c.ore) : c[k] === v).length;
    const tipi = [...new Set(D.corsi.map(c => c.tipo))];
    return testa('Catalogo corsi', 'Elenco dei corsi con durata, modalità di erogazione ammesse e prezzo indicativo, consultabile per area, modalità e tipologia.', null, 'aula') + `
    <div class="wrap filtri-wrap">
      <form class="filtri" id="filtri" aria-label="Filtri">
        <label class="campo">Cerca<input name="q" type="search" value="${esc(F.q)}" placeholder="Titolo o codice"></label>
        <button type="button" class="btn btn-bordo btn-s filtri-toggle" aria-expanded="false">Filtri: area, modalità, tipologia, durata, destinatari</button>
        <div class="filtri-corpo"><fieldset><legend>Area</legend>${Object.entries(D.ambiti).map(([k, a]) => `
          <label class="opz"><input type="checkbox" name="ambito" value="${k}" ${F.ambito.includes(k) ? 'checked' : ''}><span class="pallino" style="background:${a.colore}"></span>${esc(a.nome)}<span class="n">${conta('ambito', k)}</span></label>`).join('')}</fieldset>
        <fieldset><legend>Modalità</legend>${Object.entries(MOD).map(([k, m]) => `
          <label class="opz"><input type="checkbox" name="mod" value="${k}" ${F.mod.includes(k) ? 'checked' : ''}><span class="chip ${k}">${k}</span>${m.breve}<span class="n">${conta('mod', k)}</span></label>`).join('')}</fieldset>
        <fieldset><legend>Tipo</legend>${tipi.map(t => `
          <label class="opz"><input type="checkbox" name="tipo" value="${t}" ${F.tipo.includes(t) ? 'checked' : ''}>${t}<span class="n">${conta('tipo', t)}</span></label>`).join('')}</fieldset>
        <fieldset><legend>Durata</legend>${DUR.map(d => `
          <label class="opz"><input type="checkbox" name="dur" value="${d[0]}" ${F.dur.includes(d[0]) ? 'checked' : ''}>${d[1]}<span class="n">${conta('dur', d[0])}</span></label>`).join('')}</fieldset>
        <fieldset><legend>Destinatari</legend>${FIG.map(f => `
          <label class="opz"><input type="checkbox" name="fig" value="${f[0]}" ${F.fig.includes(f[0]) ? 'checked' : ''}>${esc(f[1])}<span class="n">${conta('fig', f[0])}</span></label>`).join('')}</fieldset>
        <button type="reset" class="btn btn-bordo btn-s">Azzera filtri</button></div>
      </form>
      <div>
        <div class="barra-risultati"><span class="n" id="n-ris" aria-live="polite"></span>
          <label class="ordina">Ordina per <select id="ord"><option value="rilevanza">Rilevanza</option><option value="prezzo">Prezzo crescente</option><option value="ore">Durata</option><option value="titolo">Titolo A–Z</option></select></label></div>
        <div class="griglia" id="ris"></div>
        ${legendaMod}
      </div>
    </div>`;
  };
  function filtraCatalogo() {
    const q = F.q.trim().toLowerCase();
    let l = D.corsi.filter(c =>
      (!F.ambito.length || F.ambito.includes(c.ambito)) &&
      (!F.mod.length || F.mod.some(m => c.mod.includes(m))) &&
      (!F.tipo.length || F.tipo.includes(c.tipo)) &&
      (!F.fig.length || figDi(c).some(f => F.fig.includes(f))) &&
      (!F.dur.length || DUR.some(d => F.dur.includes(d[0]) && d[2](c.ore))) &&
      (!q || (c.titolo + ' ' + c.id + ' ' + c.dest).toLowerCase().includes(q)));
    if (F.ord === 'prezzo') l.sort((a, b) => a.prezzo - b.prezzo);
    if (F.ord === 'ore') l.sort((a, b) => a.ore - b.ore);
    if (F.ord === 'titolo') l.sort((a, b) => a.titolo.localeCompare(b.titolo, 'it'));
    $('#n-ris').textContent = `${l.length} ${l.length === 1 ? 'corso' : 'corsi'}`;
    $('#ris').innerHTML = l.length ? l.map(cardCorso).join('') : `<div class="vuoto" style="grid-column:1/-1"><b>Nessun corso trovato.</b><br>Prova a togliere qualche filtro o <a href="#/contatti">chiedici un corso su misura</a>.</div>`;
    rivela();
  }
  function montaCatalogo() {
    const f = $('#filtri');
    const leggi = () => {
      const fd = new FormData(f);
      F.ambito = fd.getAll('ambito'); F.mod = fd.getAll('mod'); F.tipo = fd.getAll('tipo'); F.fig = fd.getAll('fig'); F.dur = fd.getAll('dur'); F.q = fd.get('q') || '';
      filtraCatalogo();
    };
    $('.filtri-toggle', f).addEventListener('click', e => { const o = f.classList.toggle('aperti'); e.currentTarget.setAttribute('aria-expanded', o); });
    f.addEventListener('input', leggi);
    f.addEventListener('submit', e => { e.preventDefault(); leggi(); });
    f.addEventListener('reset', () => setTimeout(leggi));
    $('#ord').addEventListener('change', e => { F.ord = e.target.value; filtraCatalogo(); });
    filtraCatalogo();
  }

  /* ---------- Dettaglio corso ---------- */
  P.corso = (par, id) => {
    const c = corso(id);
    if (!c) return P.nonTrovata();
    const a = amb(c.ambito);
    const ed = D.edizioni.filter(e => e.corso === c.id);
    const correlati = D.corsi.filter(x => x.ambito === c.ambito && x.id !== c.id).slice(0, 3);
    const primo = ['EL', 'VCS', 'P'].find(m => c.mod.includes(m));
    const edP = ed.filter(e => e.mod === 'P' && e.posti > 0);
    return testa(c.titolo, `${esc(a.nome)} · ${c.ore} ore · ${esc(c.tipo)} · codice ${c.id}`,
      `<a href="#/catalogo">Catalogo</a><span aria-hidden="true">›</span><a href="#/catalogo?ambito=${c.ambito}">${esc(a.nome)}</a><span aria-hidden="true">›</span><b>${esc(c.titolo)}</b>`, fotoArea(c)) + `
    <div class="wrap dettaglio">
      <div class="scheda">
        <nav class="indice-scheda" aria-label="Indice della scheda">${SEZ(c).map(([k, t]) => `<button type="button" data-sez="${k}">${t}</button>`).join('')}</nav>
        <section class="box rivela" id="s-pres"><h2>Presentazione del corso</h2><p>${esc(c.pres)}</p></section>
        <section class="box rivela" id="s-dest"><h2>Destinatari</h2><p>${esc(c.dest)}</p></section>
        <section class="box rivela" id="s-req"><h2>Requisiti di accesso</h2><p>${esc(c.req)}</p></section>
        <section class="box rivela" id="s-obj"><h2>Obiettivi del corso</h2><p>Il corso si pone l'obiettivo di:</p><ul class="elenco">${c.obj.map(o => `<li>${esc(o.charAt(0).toLowerCase() + o.slice(1))};</li>`).join('').replace(/;<\/li>$/, '.</li>')}</ul></section>
        <section class="box rivela" id="s-prog"><h2>Programma e articolazione oraria</h2>
          <div class="tab-wrap"><table class="t prog"><thead><tr><th>Modulo</th><th>Contenuti</th><th>Ore</th></tr></thead><tbody>
            ${c.moduli.map(m => `<tr><td><b>${esc(m.t)}</b></td><td><ul class="elenco stretto">${m.c.map(x => `<li>${esc(x)}</li>`).join('')}</ul></td><td class="c"><b>${m.ore}</b></td></tr>`).join('')}
            <tr class="totale"><td colspan="2"><b>Durata complessiva</b></td><td class="c"><b>${c.ore}</b></td></tr></tbody></table></div>
          <p class="nota-tab">${NOTA_ORE(c)}</p></section>
        <section class="box rivela" id="s-dati"><h2>Dati del corso</h2>
          <div class="tab-wrap"><table class="t"><tbody>
            <tr><th scope="row">Codice</th><td>${c.id}</td></tr>
            <tr><th scope="row">Area</th><td>${esc(a.nome)}</td></tr>
            <tr><th scope="row">Tipologia</th><td>${esc(c.tipo)}</td></tr>
            <tr><th scope="row">Durata</th><td>${c.ore} ore</td></tr>
            <tr><th scope="row">Modalità ammesse</th><td><div class="chips" style="display:flex;gap:6px;flex-wrap:wrap">${chips(c.mod)}</div></td></tr>
            ${nonAmmesse(c).length ? `<tr><th scope="row">${c.ambito === 'sicurezza' || c.id.startsWith('HACCP') ? 'Modalità non ammesse' : 'Modalità non previste'}</th><td>${nonAmmesse(c).map(m => MOD[m].nome).join(' e ')}</td></tr>` : ''}
            ${c.mod.includes('P') ? `<tr><th scope="row">Sede dell'aula</th><td>Sede ASTRA di Teramo nelle date a calendario, oppure presso la sede del cliente previo accordo preventivo (${esc(RPF.nome)}, ${esc(RPF.ruolo)}, tel. ${RPF.tel})</td></tr>` : ''}
            <tr><th scope="row">Aggiornamento</th><td>${c.agg === '—' ? 'Non previsto dalla normativa' : esc(c.agg)}</td></tr>
            <tr><th scope="row">Riferimenti normativi</th><td>${esc(c.rif)}</td></tr>
          </tbody></table></div>${legendaMod}</section>
        <section class="box rivela" id="s-met"><h2>Metodologia didattica</h2><p>${METODO(c)}</p></section>
        <section class="box rivela" id="s-doc"><h2>Documentazione</h2><p>Ai partecipanti è fornito il materiale didattico in formato digitale. Per ogni edizione il soggetto formatore conserva il documento progettuale, il registro delle presenze, il verbale della verifica finale e copia degli attestati, per un periodo non inferiore a dieci anni.</p></section>
        <section class="box rivela" id="s-ver"><h2>Verifica dell'apprendimento</h2><p>${VERIFICA(c)}</p></section>
        <section class="box rivela" id="s-att"><h2>Attestato</h2><p>${ATTESTATO(c)}</p></section>
        <section class="box rivela" id="s-doc2"><h2>Docenti</h2><p>${DOCENTI(c)}</p></section>
        <section class="box rivela" id="s-gra"><h2>Valutazione del gradimento</h2><p>Al termine del corso è richiesto ai partecipanti di esprimere una valutazione sulla qualità dell'intervento formativo, sui contenuti, sui docenti e sull'organizzazione, mediante un questionario anonimo. Gli esiti sono utilizzati nel processo di miglioramento continuo del sistema di gestione per la qualità UNI EN ISO 9001.</p></section>
        ${c.mod.includes('VCS') || c.mod.includes('EL') ? `<section class="box rivela" id="s-tec"><h2>Requisiti tecnici</h2><ul class="elenco">
          ${c.mod.includes('VCS') ? `<li><b>Videoconferenza sincrona:</b> connessione Internet stabile (consigliata banda larga o fibra); computer o tablet dotato di webcam, microfono e uscita audio funzionanti. La webcam deve restare attiva per l'intera durata del corso ai fini dell'identificazione e del tracciamento della presenza; non è ammessa la partecipazione da smartphone.</li>` : ''}
          ${c.mod.includes('EL') ? `<li><b>E-learning:</b> computer o tablet con browser aggiornato e connessione Internet; la piattaforma registra tempi di fruizione, accessi ed esiti delle verifiche intermedie e finali.</li>` : ''}</ul></section>` : ''}
        <section class="box rivela" id="s-ed"><h2>Prossime edizioni</h2>${ed.length ? ed.map(edizione).join('') : `<p>Non sono presenti edizioni a calendario. ${c.mod.includes('EL') ? 'Il corso è fruibile in e-learning a decorrere dall\'iscrizione.' : '<a href="#/contatti?corso=' + c.id + '">È possibile richiedere la prossima data</a> presso la sede ASTRA, oppure un\'edizione presso la sede del cliente previo accordo preventivo (tel. ' + RPF.tel + ').'}</p>`}</section>
      </div>
      <aside>
        <form class="box acquisto" id="acquisto" data-id="${c.id}">
          <div class="top"><span class="prezzo">${euro(c.prezzo)}<small>a partecipante · IVA esclusa · prezzo indicativo</small></span></div>
          <div class="corpo">
            <fieldset style="border:0;margin:0;padding:0"><legend class="b" style="color:var(--petrolio);margin-bottom:10px">Modalità</legend>
              ${testoNonAmmesse(c) ? `<div class="avviso giallo" style="margin-bottom:10px">${I.info}<span>${testoNonAmmesse(c)}</span></div>` : ''}
              <div class="scelte">${['EL', 'VCS'].filter(m => c.mod.includes(m)).map(m => `
                <label class="scelta"><input type="radio" name="mod" value="${m}" ${m === primo ? 'checked' : ''}>
                  <span><span class="t">${MOD[m].nome}</span><span class="d">${MOD[m].desc}</span></span></label>`).join('')}
                ${c.mod.includes('P') ? `
                <label class="scelta"><input type="radio" name="mod" value="P" ${primo === 'P' ? 'checked' : ''}>
                  <span><span class="t">In aula presso ASTRA</span><span class="d">Sede ASTRA di Teramo, nelle date a calendario</span></span></label>
                <div class="date-aula" id="date-aula">${edP.length ? `<label class="campo">Data dell'edizione<select name="ed">${edP.map(e => `<option value="${e.data}">${periodo(e)} · ${esc(e.orario)}</option>`).join('')}<option value="">Altra data, da concordare</option></select></label>`
                  : `<p>Nessuna edizione in aula a calendario: la segreteria ti propone la prima data utile.</p><input type="hidden" name="ed" value="">`}</div>
                <label class="scelta"><input type="radio" name="mod" value="PC">
                  <span><span class="t">In aula presso la sede del cliente</span><span class="d">Previo accordo preventivo su date, sede e partecipanti</span></span></label>` : ''}
              </div></fieldset>
            <div id="blocco-acq" style="display:flex;flex-direction:column;gap:16px">
            <div><span class="b" style="display:block;color:var(--petrolio);margin-bottom:10px" id="lbl-q">Numero di partecipanti</span>
              <div class="qta" role="group" aria-labelledby="lbl-q"><button type="button" data-d="-1" aria-label="Diminuisci">−</button><input name="qta" type="number" min="1" max="500" value="1" inputmode="numeric" aria-label="Partecipanti"><button type="button" data-d="1" aria-label="Aumenta">+</button></div></div>
            <div class="avviso blu">${I.info}<span id="nota-sconto">Da 5 partecipanti sconto del 5%, da 10 del 10%, da 20 del 15% (indicativo).</span></div>
            ${c.nota ? `<div class="avviso giallo">${I.info}<span>${esc(c.nota)}</span></div>` : ''}
            <button class="btn btn-rosso" style="width:100%">${I.carrello} Aggiungi al carrello</button>
            </div>
            ${c.mod.includes('P') ? boxRPF('nascosto') : ''}
          </div>
        </form>
      </aside>
    </div>
    ${correlati.length ? `<section class="sez grigia" style="padding-top:64px"><div class="wrap"><div class="intest"><div><span class="k">Nella stessa area</span><h2>Potrebbero interessarti</h2></div></div><div class="griglia">${correlati.map(cardCorso).join('')}</div></div></section>` : ''}`;
  };
  function montaCorso() {
    const f = $('#acquisto'); if (!f) return;
    const q = f.qta;
    const agg = () => { const n = Math.max(1, Math.min(500, parseInt(q.value) || 1)); q.value = n;
      const s = scontoPer(n), c = corso(f.dataset.id);
      $('#nota-sconto').innerHTML = s ? `<b>Sconto ${s}%</b> per ${n} partecipanti: ${euro(c.prezzo * n * (1 - s / 100))} invece di ${euro(c.prezzo * n)} (IVA esclusa).` : 'Da 5 partecipanti sconto del 5%, da 10 del 10%, da 20 del 15% (indicativo).'; };
    $$('.qta button', f).forEach(b => b.addEventListener('click', () => { q.value = (parseInt(q.value) || 1) + +b.dataset.d; agg(); }));
    q.addEventListener('input', agg); q.addEventListener('change', agg);
    $$('.indice-scheda button').forEach(b => b.addEventListener('click', () => { const t = $('#s-' + b.dataset.sez); t && window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 150, behavior: 'smooth' }); }));
    const aggiornaMod = () => { const m = (f.querySelector('input[name="mod"]:checked') || {}).value;
      const da = $('#date-aula'); if (da) da.hidden = m !== 'P';
      $('#blocco-acq').hidden = m === 'PC';
      const b = $('.box-rpf', f); if (b) b.classList.toggle('nascosto', m !== 'PC'); };
    $$('input[name="mod"]', f).forEach(r => r.addEventListener('change', aggiornaMod)); aggiornaMod();
    f.addEventListener('submit', e => { e.preventDefault(); agg(); const m = f.querySelector('input[name="mod"]:checked').value;
      if (m === 'PC') return; aggiungi(f.dataset.id, m, parseInt(q.value), m === 'P' && f.ed ? f.ed.value : null); });
    $$('.edizione a[data-mod]').forEach(a => a.addEventListener('click', e => { e.preventDefault();
      const r = f.querySelector(`input[name="mod"][value="${a.dataset.mod}"]`); if (r) { r.checked = true; aggiornaMod(); }
      if (a.dataset.mod === 'P' && f.ed && a.dataset.data) f.ed.value = a.dataset.data;
      f.scrollIntoView({ behavior: 'smooth', block: 'center' }); }));
  }

  /* ---------- Calendario ---------- */
  const edizione = e => {
    const c = corso(e.corso), d = dataBreve(e.data), [col, lab] = statoPosti(e.posti), f = dataBreve(e.fine);
    return `<div class="edizione"><span class="data-box"><b>${d.g}</b><span>${d.m}</span></span>
      <div><h3>${esc(e.titolo || c.titolo)}</h3><div class="m"><span class="chip ${e.mod}">${e.mod}</span><span>${periodo(e)}</span><span>${esc(e.orario)}</span><span>${esc(e.sede)}</span><span>${c.ore} h</span></div></div>
      <span class="posti"><i style="background:${col}"></i>${lab}</span>
      ${e.posti ? `<a class="btn btn-petrolio btn-s" href="#/corso/${c.id}" data-mod="${e.mod}" data-data="${e.data}">Iscrizione</a>` : `<a class="btn btn-bordo btn-s" href="#/contatti?corso=${c.id}">Lista d'attesa</a>`}</div>`;
  };
  P.calendario = () => {
    const per = {};
    D.edizioni.forEach(e => { const d = dataBreve(e.data), k = `${d.mese} ${d.a}`; (per[k] = per[k] || []).push(e); });
    return testa('Calendario corsi', 'Edizioni programmate in aula e in videoconferenza. I corsi in e-learning sono fruibili in qualsiasi momento a decorrere dall\'iscrizione.', null, 'hero2') + `
    <div class="wrap" style="padding-top:28px;padding-bottom:96px">
      <div class="avviso giallo" style="margin-top:12px">${I.info}<span>Date e disponibilità sono <b>indicative</b> e vanno confermate dalla segreteria al momento dell'iscrizione.</span></div>
      <div class="legenda"><b>Legenda posti:</b><span><i style="width:10px;height:10px;border-radius:50%;background:#00B050;display:inline-block"></i>disponibili</span><span><i style="width:10px;height:10px;border-radius:50%;background:#FFC000;display:inline-block"></i>ultimi posti (5 o meno)</span><span><i style="width:10px;height:10px;border-radius:50%;background:#EE0000;display:inline-block"></i>esaurito</span><span><span class="chip VCS">VCS</span> videoconferenza</span><span><span class="chip P">P</span> presenza</span></div>
      ${Object.entries(per).map(([m, l]) => `<div class="mese rivela"><h2>${m.charAt(0).toUpperCase() + m.slice(1)}</h2>${l.map(edizione).join('')}</div>`).join('')}
    </div>`;
  };

  /* ---------- Carrello ---------- */
  let tipoCliente = 'azienda';
  P.carrello = () => {
    if (!cart.length) return testa('Carrello') + `<div class="wrap" style="padding:56px 24px 96px"><div class="vuoto"><b style="font-size:20px;color:var(--petrolio)">Il carrello è vuoto.</b><p style="margin:10px 0 20px">Selezionare un corso dal catalogo e indicare il numero di partecipanti.</p><a class="btn btn-rosso" href="#/catalogo">Vai al catalogo</a></div></div>`;
    return testa('Carrello e richiesta d\'iscrizione', null) + `
    <div class="wrap carrello">
      <div>
        <div class="passi" aria-label="Passaggi"><span class="passo on"><b>1</b>Corsi</span><span class="passo on"><b>2</b>Dati</span><span class="passo"><b>3</b>Conferma</span></div>
        <div class="box" id="righe"></div>
        <form class="box" id="dati" style="margin-top:20px">
          <h2>Dati per l'iscrizione</h2>
          <div class="tipo-cliente" role="radiogroup" aria-label="Tipo di cliente" style="margin-bottom:18px">
            <label class="scelta"><input type="radio" name="tipo" value="azienda" ${tipoCliente === 'azienda' ? 'checked' : ''}><span><span class="t">Azienda o ente</span><span class="d">Fattura all'azienda, posti da assegnare</span></span></label>
            <label class="scelta"><input type="radio" name="tipo" value="privato" ${tipoCliente === 'privato' ? 'checked' : ''}><span><span class="t">Privato</span><span class="d">Iscrizione personale</span></span></label>
          </div>
          <div class="form-griglia" id="campi"></div>
          <div style="display:flex;flex-direction:column;gap:12px;margin-top:18px">
            <label class="spunta"><input type="checkbox" required name="privacy"><span>Ho letto l'<a href="#/privacy">informativa sul trattamento dei dati personali</a>.</span></label>
            <label class="spunta"><input type="checkbox" required name="cond"><span>Accetto le condizioni di iscrizione (prezzi e date da confermare da parte della segreteria).</span></label>
          </div>
          <div class="avviso blu" style="margin-top:18px">${I.info}<span>In questa anteprima la richiesta viene preparata come email alla segreteria. Il pagamento online (carta, bonifico, PayPal) sarà attivo nel portale definitivo.</span></div>
          <button class="btn btn-rosso" style="margin-top:18px">${I.mail} Invia la richiesta d'iscrizione</button>
        </form>
      </div>
      <aside class="box riepilogo acquisto" style="padding:0"><div class="top"><h2 style="color:#fff;font-size:20px;margin:0">Riepilogo</h2></div><div class="corpo" id="riep"></div></aside>
    </div>`;
  };
  const campiCliente = t => (t === 'azienda' ? [
    ['ragione', 'Ragione sociale', 'text', 1, 'tutta'], ['piva', 'Partita IVA', 'text', 1], ['cf', 'Codice fiscale azienda', 'text', 0],
    ['sdi', 'Codice destinatario SDI o PEC', 'text', 1], ['ateco', 'Codice ATECO', 'text', 0], ['ref', 'Referente', 'text', 1], ['email', 'Email', 'email', 1], ['tel', 'Telefono', 'tel', 1]
  ] : [
    ['nome', 'Nome e cognome', 'text', 1, 'tutta'], ['cf', 'Codice fiscale', 'text', 1], ['email', 'Email', 'email', 1], ['tel', 'Telefono', 'tel', 1], ['comune', 'Comune di residenza', 'text', 0]
  ]).map(([n, l, ty, r, cl]) => `<label class="campo ${cl || ''}"><span>${l}${r ? '' : ' <span style="font-family:var(--f);font-weight:400;color:var(--testo-3)">(facoltativo)</span>'}</span><input name="${n}" type="${ty}" ${r ? 'required' : ''} autocomplete="on"></label>`).join('');
  function calcoli() {
    const righe = cart.map(r => { const c = corso(r.id), lordo = c.prezzo * r.qta, s = scontoPer(r.qta); return { ...r, c, lordo, s, netto: lordo * (1 - s / 100) }; });
    const imp = righe.reduce((s, r) => s + r.netto, 0), lordo = righe.reduce((s, r) => s + r.lordo, 0);
    return { righe, lordo, sconto: lordo - imp, imp, iva: imp * .22, tot: imp * 1.22 };
  }
  function disegnaCarrello() {
    const k = calcoli();
    $('#righe').innerHTML = `<h2>Corsi selezionati</h2>` + k.righe.map((r, i) => `
      <div class="riga"><div><h3><a href="#/corso/${r.id}">${esc(r.c.titolo)}</a></h3><div class="m"><span class="chip ${r.mod}">${r.mod}</span>${r.mod === 'P' ? 'Aula presso ASTRA – ' + (r.ed ? dataLunga(r.ed) : 'data da concordare') : MOD[r.mod].breve} · ${r.c.ore} h · ${euro(r.c.prezzo)} a posto${r.s ? ` · <b style="color:var(--amb)">sconto ${r.s}%</b>` : ''}</div></div>
        <div class="qta" role="group" aria-label="Partecipanti"><button type="button" data-i="${i}" data-d="-1" aria-label="Diminuisci">−</button><input value="${r.qta}" data-i="${i}" type="number" min="1" aria-label="Partecipanti"><button type="button" data-i="${i}" data-d="1" aria-label="Aumenta">+</button></div>
        <b style="color:var(--petrolio);min-width:90px;text-align:right">${euro(r.netto)}</b>
        <button class="togli" data-x="${i}" aria-label="Rimuovi ${esc(r.c.titolo)}">${I.cestino}</button></div>`).join('');
    $('#riep').innerHTML = `<dl><dt>Partecipanti</dt><dd>${cart.reduce((s, x) => s + x.qta, 0)}</dd>
      <dt>Totale listino</dt><dd>${euro(k.lordo)}</dd>
      ${k.sconto ? `<dt>Sconto quantità</dt><dd style="color:var(--amb)">− ${euro(k.sconto)}</dd>` : ''}
      <dt>Imponibile</dt><dd>${euro(k.imp)}</dd><dt>IVA 22%</dt><dd>${euro(k.iva)}</dd>
      <dt class="tot">Totale</dt><dd class="tot">${euro(k.tot)}</dd></dl>
      <div class="avviso giallo">${I.info}<span>Prezzi <b>indicativi</b>. La segreteria conferma importi, eventuale esenzione IVA e date prima del pagamento.</span></div>`;
  }
  function montaCarrello() {
    if (!$('#righe')) return;
    disegnaCarrello();
    $('#campi').innerHTML = campiCliente(tipoCliente);
    $('#righe').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.x != null) { cart.splice(+b.dataset.x, 1); salva(); if (!cart.length) return route(); }
      else { const r = cart[+b.dataset.i]; r.qta = Math.max(1, r.qta + +b.dataset.d); salva(); }
      disegnaCarrello();
    });
    $('#righe').addEventListener('change', e => { if (e.target.dataset.i == null) return; cart[+e.target.dataset.i].qta = Math.max(1, parseInt(e.target.value) || 1); salva(); disegnaCarrello(); });
    $$('input[name="tipo"]').forEach(r => r.addEventListener('change', () => { tipoCliente = r.value; $('#campi').innerHTML = campiCliente(tipoCliente); }));
    $('#dati').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target), k = calcoli();
      const dati = [...fd.entries()].filter(([n]) => !['privacy', 'cond'].includes(n)).map(([n, v]) => `${n}: ${v}`).join('\n');
      const corsi = k.righe.map(r => `- ${r.c.id} ${r.c.titolo} – ${r.mod === 'P' ? 'Aula presso ASTRA, ' + (r.ed ? dataLunga(r.ed) : 'data da concordare') : MOD[r.mod].nome} – ${r.qta} partecipanti – ${euro(r.netto)}`).join('\n');
      const corpo = `Richiesta d'iscrizione dal sito\n\nCORSI\n${corsi}\n\nImponibile ${euro(k.imp)} – Totale con IVA ${euro(k.tot)} (indicativo)\n\nDATI\n${dati}`;
      location.href = `mailto:${A.email}?subject=${encodeURIComponent('Richiesta iscrizione corsi')}&body=${encodeURIComponent(corpo)}`;
      toast('Si sta aprendo il programma di posta con la richiesta già compilata');
    });
  }

  /* ---------- Aziende ---------- */
  P.aziende = () => testa('Soluzioni per le aziende', 'Piani formativi, acquisto di posti da assegnare ai dipendenti, corsi presso la sede del cliente e scadenzario della formazione.', null, 'aziende') + `
    <section class="sez"><div class="wrap">
      <div class="intest rivela"><div><span class="k">Come funziona</span><h2>Dall'iscrizione all'attestato: le fasi del servizio</h2></div></div>
      <ol class="flusso">
        <li class="rivela"><b>Acquisto dei posti</b><span>Selezione del corso, della modalità di erogazione e del numero di partecipanti, con fatturazione unica all'azienda.</span></li>
        <li class="rivela ritardo-1"><b>Assegnazione dei partecipanti</b><span>Inserimento di nominativo, codice fiscale e indirizzo email dall'area azienda, anche mediante file CSV.</span></li>
        <li class="rivela ritardo-2"><b>Fruizione del corso</b><span>I partecipanti ricevono le credenziali della piattaforma o il collegamento alla videoconferenza.</span></li>
        <li class="rivela ritardo-3"><b>Rilascio dell'attestato</b><span>Al superamento della verifica finale l'attestato è disponibile nell'area azienda, con QR code di verifica.</span></li>
      </ol>
    </div></section>
    <section class="sez grigia"><div class="wrap split">
      <div class="rivela"><div class="intest" style="margin-bottom:0"><div><span class="k">Servizi</span><h2>Servizi a supporto delle imprese</h2></div></div>
        <ul class="elenco-check">
          <li><span class="ico">${I.doc}</span><div><b>Analisi dei fabbisogni formativi</b><span>Individuazione degli obblighi formativi a partire dal documento di valutazione dei rischi e dalle mansioni.</span></div></li>
          <li><span class="ico">${I.aula}</span><div><b>Corsi in azienda</b><span>Edizioni dedicate presso la tua sede, previo accordo preventivo, con prove pratiche sulle tue attrezzature. Contatta ${esc(RPF.nome)}, ${esc(RPF.ruolo)}: <a href="tel:${telRPF}">${RPF.tel}</a>.</span></div></li>
          <li><span class="ico">${I.calendario}</span><div><b>Scadenzario della formazione</b><span>Promemoria automatici a 120, 60 e 30 giorni dalla scadenza.</span></div></li>
          <li><span class="ico">${I.lab}</span><div><b>Consulenza e laboratorio</b><span>Valutazione dei rischi, monitoraggi ambientali e analisi nel laboratorio accreditato ACCREDIA.</span></div></li>
        </ul></div>
      <div class="foto-tonda rivela ritardo-1">${foto('laboratorio', '', '(max-width:1024px) 100vw, 50vw')}<div class="flottante"><b>${(D.laboratorio.analisiAnno / 1000).toFixed(0)}k+</b><span>analisi l'anno nel laboratorio ${esc(D.laboratorio.ragioneSociale)}</span></div></div>
    </div></section>
    <section class="sez"><div class="wrap">
      <div class="intest rivela"><div><span class="k">Sconti quantità</span><h2>Condizioni per più partecipanti</h2><p>Riduzioni indicative applicate automaticamente nel carrello per ciascun corso.</p></div></div>
      <div class="tab-wrap rivela" style="max-width:720px"><table class="t"><thead><tr><th>Partecipanti per corso</th><th>Sconto</th></tr></thead><tbody>
        <tr><td>da 1 a 4</td><td class="c">—</td></tr><tr><td>da 5 a 9</td><td class="c">5%</td></tr><tr><td>da 10 a 19</td><td class="c">10%</td></tr><tr><td>20 e oltre</td><td class="c">15%</td></tr></tbody></table></div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:32px"><a class="btn btn-rosso" href="#/area-azienda">Dimostrazione dell'area azienda</a><a class="btn btn-bordo" href="#/contatti">Richiesta di piano formativo</a></div>
    </div></section>`;

  /* ---------- Area azienda (dimostrativa) ---------- */
  const DIP = [
    ['Rossi Mario', 'Magazziniere', 'LAV-AGG', 'EL', 'ok', 100, '2031-03-12'],
    ['Bianco Luca', 'Capo reparto', 'PREP-AGG', 'VCS', 'corso', 50, '2026-12-20'],
    ['Verdi Anna', 'Impiegata', 'LAV-AGG', 'EL', 'corso', 35, '2027-01-15'],
    ['Neri Paolo', 'Carrellista', 'CAR', 'P', 'att', 0, '2026-12-02'],
    ['Gialli Sara', 'Addetta antincendio', 'AI-2', 'P', 'sca', 0, '2026-11-30'],
    ['Russo Marco', 'Operaio', 'LAV-SPEC-M', 'VCS', 'ok', 100, '2031-06-04'],
    ['Esposito Giulia', 'Addetta primo soccorso', 'PS-BC', 'P', 'att', 0, '2027-01-20'],
    ['Ferrari Luigi', 'RLS', 'RLS', 'VCS', 'sca', 0, '2026-12-31']
  ];
  const ST = { ok: 'Completato', corso: 'In corso', att: 'Da iniziare', sca: 'In scadenza' };
  let vista = 'dip';
  P['area-azienda'] = () => testa('Area azienda', 'Anteprima dimostrativa dell\'area riservata al referente aziendale: dati inventati.', null, null) + `
    <div class="wrap dash">
      <nav aria-label="Sezioni area azienda">
        ${[['dip', I.utenti, 'Dipendenti'], ['posti', I.carrello, 'Posti acquistati'], ['scad', I.campana, 'Scadenzario'], ['att', I.doc, 'Attestati']].map(([k, ic, t]) => `<button data-v="${k}" aria-pressed="${vista === k}">${ic}${t}</button>`).join('')}
      </nav>
      <div>
        <div class="avviso giallo" style="margin-bottom:20px">${I.info}<span><b>Dimostrazione.</b> Nomi, corsi e date sono inventati. Nel portale definitivo i dati arrivano da WooCommerce e dalla piattaforma Moodle.</span></div>
        <div class="kpi">
          <div><b data-conta="24">0</b><span>posti acquistati</span></div>
          <div><b data-conta="18">0</b><span>posti assegnati</span></div>
          <div><b data-conta="11">0</b><span>attestati rilasciati</span></div>
          <div><b data-conta="2" style="color:var(--rosso)">0</b><span>scadenze entro 60 giorni</span></div>
        </div>
        <div class="box" id="vista"></div>
      </div>
    </div>`;
  function disegnaVista() {
    const v = $('#vista'); if (!v) return;
    $$('.dash nav button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === vista));
    const stato = s => `<span class="stato ${s}">${ST[s]}</span>`;
    if (vista === 'dip') v.innerHTML = `<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:16px"><h2 style="margin:0">Dipendenti e avanzamento</h2><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-bordo btn-s" type="button" data-demo>Importa CSV</button><button class="btn btn-petrolio btn-s" type="button" data-demo>+ Assegna posto</button></div></div>
      <div class="tab-wrap"><table class="t"><thead><tr><th>Dipendente</th><th>Mansione</th><th>Corso</th><th>Modalità</th><th>Avanzamento</th><th>Stato</th></tr></thead><tbody>
      ${DIP.map(d => `<tr><td>${d[0]}</td><td>${d[1]}</td><td>${esc(corso(d[2]).titolo)}</td><td class="c"><span class="chip ${d[3]}">${d[3]}</span></td><td class="c"><div style="display:flex;gap:8px;align-items:center"><span class="barra-prog" style="flex:1"><i style="width:${d[5]}%"></i></span><b style="font-size:13px;min-width:38px">${d[5]}%</b></div></td><td class="c">${stato(d[4])}</td></tr>`).join('')}</tbody></table></div>
      <div class="legenda"><b>Legenda:</b><span><span class="chip EL">EL</span> e-learning</span><span><span class="chip VCS">VCS</span> videoconferenza sincrona</span><span><span class="chip P">P</span> presenza</span></div>`;
    if (vista === 'posti') v.innerHTML = `<h2>Pacchetti di posti</h2><div class="tab-wrap"><table class="t"><thead><tr><th>Ordine</th><th>Corso</th><th>Modalità</th><th>Acquistati</th><th>Assegnati</th><th>Liberi</th></tr></thead><tbody>
      ${[['#1042', 'LAV-AGG', 'EL', 10, 8], ['#1042', 'PREP-AGG', 'VCS', 4, 3], ['#1057', 'AI-2', 'P', 4, 3], ['#1063', 'PS-BC', 'P', 6, 4]].map(r => `<tr><td class="c">${r[0]}</td><td>${esc(corso(r[1]).titolo)}</td><td class="c"><span class="chip ${r[2]}">${r[2]}</span></td><td class="c">${r[3]}</td><td class="c">${r[4]}</td><td class="c"><b>${r[3] - r[4]}</b></td></tr>`).join('')}</tbody></table></div>`;
    if (vista === 'scad') { const l = DIP.slice().sort((a, b) => a[6].localeCompare(b[6]));
      v.innerHTML = `<h2>Scadenzario della formazione</h2><div class="tab-wrap"><table class="t"><thead><tr><th>Dipendente</th><th>Obbligo</th><th>Scadenza</th><th>Giorni</th><th>Promemoria</th></tr></thead><tbody>
      ${l.map(d => { const g = Math.round((new Date(d[6]) - new Date()) / 864e5), col = g < 30 ? '#EE0000' : g < 60 ? '#FFC000' : g < 120 ? '#FFFF00' : '#00B050', tc = g < 30 || g >= 120 ? '#fff' : '#2a1d00';
        return `<tr><td>${d[0]}</td><td>${esc(corso(d[2]).titolo)}</td><td class="c">${dataLunga(d[6])}</td><td class="c"><span class="stato" style="background:${col};color:${tc}">${g}</span></td><td class="c">${g < 120 ? 'Inviato' : 'Programmato'}</td></tr>`; }).join('')}</tbody></table></div>
      <div class="legenda"><b>Legenda giorni alla scadenza:</b><span class="stato" style="background:#EE0000;color:#fff">meno di 30</span><span class="stato" style="background:#FFC000;color:#2a1d00">30–59</span><span class="stato" style="background:#FFFF00;color:#2a1d00">60–119</span><span class="stato" style="background:#00B050;color:#fff">120 e oltre</span></div>`; }
    if (vista === 'att') v.innerHTML = `<h2>Attestati disponibili</h2><div class="tab-wrap"><table class="t"><thead><tr><th>Codice</th><th>Dipendente</th><th>Corso</th><th>Data</th><th>File</th></tr></thead><tbody>
      ${DIP.filter(d => d[4] === 'ok').map((d, i) => `<tr><td class="c">AST-2026-00012${3 + i}</td><td>${d[0]}</td><td>${esc(corso(d[2]).titolo)}</td><td class="c">05/11/2026</td><td class="c"><button class="btn btn-bordo btn-s" type="button" data-demo>PDF</button></td></tr>`).join('')}</tbody></table></div>`;
  }
  function montaArea() {
    if (!$('#vista')) return;
    $('.dash nav').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; vista = b.dataset.v; disegnaVista(); });
    $('#vista').addEventListener('click', e => { if (e.target.closest('[data-demo]')) toast('Funzione disponibile nel portale definitivo'); });
    disegnaVista();
  }

  /* ---------- Normativa ---------- */
  P.normativa = () => testa('Normativa e news', 'Aggiornamenti su obblighi formativi, sicurezza, ambiente, energia e igiene degli alimenti.', null, 'sicurezza') + `
    <div class="wrap" style="display:grid;grid-template-columns:minmax(0,1fr);gap:32px;padding-top:48px;padding-bottom:96px">
      <div class="news">${D.news.map(notizia).join('')}</div>
      <div class="box rivela"><h2>Periodicità degli aggiornamenti</h2>
        <div class="tab-wrap"><table class="t"><thead><tr><th>Figura</th><th>Ore di aggiornamento</th><th>Ogni</th><th>Riferimento</th></tr></thead><tbody>
        ${[['Lavoratori', '6', '5 anni', 'ASR 17/04/2025'], ['Preposti', '6', '2 anni', 'ASR 17/04/2025'], ['Dirigenti', '6', '5 anni', 'ASR 17/04/2025'], ['Datori di lavoro', '6', '5 anni', 'ASR 17/04/2025'], ['Datore di lavoro RSPP', '8', '5 anni', 'ASR 17/04/2025'], ['RSPP', '40', '5 anni', 'ASR 17/04/2025'], ['ASPP', '20', '5 anni', 'ASR 17/04/2025'], ['RLS', '4 / 8', '1 anno', 'D.lgs. 81/2008 art. 37'], ['Operatori attrezzature', '4', '5 anni', 'ASR 17/04/2025'], ['Addetti antincendio', '2 / 5 / 8', '5 anni', 'D.M. 2/9/2021'], ['Addetti primo soccorso', '4 / 6', '3 anni', 'D.M. 388/2003'], ['Alimentaristi (Abruzzo)', '4', '3 anni', 'DGR 463/2007']].map(r => `<tr><td>${r[0]}</td><td class="c">${r[1]}</td><td class="c">${r[2]}</td><td class="c">${r[3]}</td></tr>`).join('')}</tbody></table></div>
        <p style="font-size:13px;margin-top:12px;text-align:left"><b>Legenda:</b> ASR = Accordo Stato-Regioni · RLS = Rappresentante dei lavoratori per la sicurezza · RSPP / ASPP = Responsabile / Addetto del servizio di prevenzione e protezione · DGR = Delibera di Giunta regionale. Per RLS 4 ore nelle aziende da 15 a 50 lavoratori, 8 ore oltre 50.</p></div>
    </div>`;

  /* ---------- Verifica attestato ---------- */
  P.attestato = par => testa('Verifica attestato', 'Inserire il codice riportato sull\'attestato oppure inquadrare il QR code: la pagina mostra l\'esito della verifica.') + `
    <div class="wrap" style="max-width:880px;padding-top:40px;padding-bottom:96px">
      <form id="verifica" class="box" style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end">
        <label class="campo" style="flex:1 1 320px">Codice attestato<input name="c" value="${esc(par.codice || '')}" placeholder="es. AST-2026-000123" style="letter-spacing:.04em;font-size:17px;height:52px"></label>
        <button class="btn btn-petrolio" style="height:52px">Verifica</button>
      </form>
      <p style="font-size:13px;color:var(--testo-3);margin-top:10px">Prova con il codice di esempio AST-2026-000123 (dati inventati).</p>
      <div id="esito" aria-live="polite" style="margin-top:20px"></div>
      <p style="font-size:13px;color:var(--testo-3);margin-top:20px">Per tutela della riservatezza la pagina mostra solo i dati necessari alla verifica: il codice fiscale è parzialmente oscurato.</p>
    </div>`;
  function montaAttestato() {
    const f = $('#verifica'); if (!f) return;
    const v = () => { const c = f.c.value.trim().toUpperCase(); if (!c) return;
      $('#esito').innerHTML = c === 'AST-2026-000123' ? `<section class="box" style="padding:0;overflow:hidden;border-color:#9ED4B0"><div style="background:#00B050;color:#fff;padding:14px 20px;display:flex;gap:10px;align-items:center" class="b"><span style="width:22px;height:22px">${I.ok}</span>Attestato valido</div>
        <table class="t"><tbody><tr><th scope="row">Corsista</th><td>Mario Rossi · codice fiscale RSS***********3S</td></tr><tr><th scope="row">Corso</th><td>Lavoratori – Aggiornamento (6 ore)</td></tr><tr><th scope="row">Modalità</th><td>E-learning</td></tr><tr><th scope="row">Completato il</th><td>05/11/2026</td></tr><tr><th scope="row">Prossimo aggiornamento entro</th><td>05/11/2031</td></tr><tr><th scope="row">Rilasciato da</th><td>AiFOS – tramite il Centro di Formazione ASTRA S.r.l.</td></tr></tbody></table></section>`
        : `<div class="avviso rosso">${I.info}<span><b>Codice non trovato.</b> Controlla di averlo scritto correttamente o contatta la segreteria.</span></div>`; };
    f.addEventListener('submit', e => { e.preventDefault(); v(); });
    if (f.c.value) v();
  }

  /* ---------- Chi siamo ---------- */
  P['chi-siamo'] = () => testa('Chi siamo', 'Dal 1987 al fianco delle imprese per sicurezza, ambiente, energia e qualità. La mission: dare certezze.', null, 'chi') + `
    <section class="sez"><div class="wrap split">
      <div class="rivela">
        <div class="intest" style="margin-bottom:18px"><div><span class="k">La nostra storia</span><h2>${esc(A.ragioneSociale)}</h2></div></div>
        <p style="color:var(--testo-2);text-align:justify;font-size:17px">ASTRA nasce a Teramo nel 1987 per offrire alle imprese un unico interlocutore su salute e sicurezza sul lavoro, tutela dell'ambiente, energia e qualità. Accanto alla società di consulenza opera ${esc(D.laboratorio.ragioneSociale)}, laboratorio di analisi attivo dal ${D.laboratorio.fondazione} e accreditato ACCREDIA, che esegue oltre ${D.laboratorio.analisiAnno.toLocaleString('it-IT')} analisi l'anno su acque, alimenti, aria, rifiuti e ambienti di lavoro.</p>
        <p style="color:var(--testo-2);text-align:justify;font-size:17px;margin-top:14px">Come <b>Centro di Formazione AiFOS</b>, ASTRA organizza ed eroga i corsi secondo i programmi e le procedure dell'associazione: gli attestati di salute e sicurezza sono rilasciati da AiFOS e registrati nel registro nazionale della formazione.</p>
        <div style="display:flex;gap:18px;align-items:center;margin-top:28px;flex-wrap:wrap"><img src="loghi/astra_logo.svg" alt="ASTRA" style="height:64px"><img src="loghi/aifos_logo.svg" alt="AiFOS – Centro di Formazione" style="height:60px"></div>
      </div>
      <div class="foto-tonda rivela ritardo-1">${foto('laboratorio', '', '(max-width:1024px) 100vw, 50vw')}<div class="flottante"><b>1987</b><span>anno di fondazione di ASTRA S.r.l. a Teramo</span></div></div>
    </div></section>
    <section class="sez grigia"><div class="wrap">
      <div class="intest rivela"><div><span class="k">Le persone</span><h2>Responsabile della formazione</h2></div></div>
      <div class="rivela" style="display:flex;gap:24px;align-items:center;background:var(--petrolio);color:#fff;border-radius:22px;padding:28px;max-width:760px;flex-wrap:wrap">
        <img src="loghi/jd_logo_bianco.svg" alt="Logo JD – Jonathan D'Eugenio" style="width:120px;height:120px">
        <div><b style="font-size:22px;display:block">${esc(D.rpf.nome)}</b><span class="b" style="color:var(--chiaro);font-size:15.5px;display:block">${esc(D.rpf.qualifica)}</span><a class="b" style="color:#fff;display:inline-flex;gap:8px;align-items:center;margin-top:8px" href="tel:${telRPF}"><span style="width:18px;height:18px;display:inline-flex">${I.tel}</span>${RPF.tel}</a></div>
      </div>
    </div></section>
    <section class="sez"><div class="wrap">
      <div class="intest rivela"><div><span class="k">Qualità</span><h2>Certificazioni e accreditamenti</h2></div></div>
      <div class="cert">${certificazioni()}</div>
      <div class="tab-wrap rivela" style="margin-top:28px"><table class="t"><tbody>
        <tr><th scope="row">Laboratorio</th><td>${esc(D.laboratorio.accredia)}</td></tr>
        <tr><th scope="row">Autocontrollo alimentare</th><td>${esc(D.laboratorio.registroAlimentare)}</td></tr>
      </tbody></table></div>
    </div></section>`;

  /* ---------- Contatti ---------- */
  P.contatti = par => {
    const c = par.corso && corso(par.corso);
    const ind = `${A.indirizzo}, ${A.cap} ${A.comune} (${A.provincia})`;
    return testa('Contatti', 'Per informazioni sui corsi, richieste di preventivo o assistenza sulla piattaforma è possibile utilizzare il modulo seguente o i recapiti indicati.', null, null) + `
    <div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:32px;padding-top:48px;padding-bottom:96px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="tab-wrap"><table class="t"><tbody>
          <tr><th scope="row">Sede</th><td>${esc(ind)}</td></tr>
          <tr><th scope="row">Telefono</th><td>${A.telefoni.map(t => `<a href="tel:${t.replace(/\s/g, '')}">${t}</a>`).join(' · ')}</td></tr>
          <tr><th scope="row">Fax</th><td>${A.fax}</td></tr>
          <tr><th scope="row">Email</th><td><a href="mailto:${A.email}">${A.email}</a></td></tr>
          <tr><th scope="row">PEC</th><td><a href="mailto:${A.pec}">${A.pec}</a></td></tr>
          <tr><th scope="row">Corsi in aula presso il cliente</th><td>${esc(RPF.nome)} – ${esc(RPF.ruolo)} · <a href="tel:${telRPF}">${RPF.tel}</a></td></tr>
          <tr><th scope="row">Orari</th><td>${esc(A.orari)}</td></tr>
          <tr><th scope="row">Dati societari</th><td>P.IVA e C.F. ${A.piva}</td></tr>
        </tbody></table></div>
        <a class="btn btn-bordo" target="_blank" rel="noopener" href="https://www.openstreetmap.org/search?query=${encodeURIComponent(ind)}">${I.pin} Apri la sede sulla mappa</a>
      </div>
      <form class="box" id="contatto" style="display:flex;flex-direction:column;gap:14px">
        <h2 style="margin:0">Richiesta di informazioni</h2>
        <label class="campo">Nome e cognome<input name="nome" required autocomplete="name"></label>
        <label class="campo"><span>Azienda <span style="font-family:var(--f);font-weight:400;color:var(--testo-3)">(facoltativo)</span></span><input name="azienda" autocomplete="organization"></label>
        <label class="campo">Email<input name="email" type="email" required autocomplete="email"></label>
        <label class="campo">Argomento<select name="arg"><option>Informazioni su un corso</option><option ${c ? 'selected' : ''}>Preventivo o corso in azienda</option><option>Assistenza piattaforma</option><option>Attestati</option><option>Consulenza o analisi di laboratorio</option></select></label>
        <label class="campo">Messaggio<textarea name="msg" rows="5" required>${c ? `Vorrei informazioni sul corso ${c.id} – ${c.titolo}.` : ''}</textarea></label>
        <label class="spunta"><input type="checkbox" required><span>Ho letto l'<a href="#/privacy">informativa privacy</a>.</span></label>
        <button class="btn btn-rosso" style="align-self:flex-start">${I.mail} Invia</button>
      </form>
    </div>`;
  };
  function montaContatti() {
    const f = $('#contatto'); if (!f) return;
    f.addEventListener('submit', e => { e.preventDefault();
      const b = `Nome: ${f.nome.value}\nAzienda: ${f.azienda.value}\nEmail: ${f.email.value}\n\n${f.msg.value}`;
      location.href = `mailto:${A.email}?subject=${encodeURIComponent(f.arg.value)}&body=${encodeURIComponent(b)}`;
      toast('Si sta aprendo il programma di posta con il messaggio già compilato'); });
  }

  /* ---------- Privacy, crediti, legenda ---------- */
  P.privacy = () => testa('Informativa privacy') + `<div class="wrap" style="max-width:900px;padding-top:40px;padding-bottom:96px"><div class="box">
    <div class="avviso giallo" style="margin-bottom:18px">${I.info}<span>Testo di base da completare e approvare a cura del titolare del trattamento prima della pubblicazione.</span></div>
    <h2>Titolare del trattamento</h2><p>${esc(A.ragioneSociale)} – ${esc(A.indirizzo)}, ${A.cap} ${A.comune} (${A.provincia}) – P.IVA ${A.piva} – PEC ${A.pec}.</p>
    <h2 style="margin-top:22px">Dati trattati e finalità</h2><p>Dati anagrafici e di contatto, codice fiscale, dati dell'azienda di appartenenza e della mansione, dati di frequenza e di superamento dei corsi, per: iscrizione ai corsi, erogazione della formazione, rilascio e registrazione degli attestati, adempimenti fiscali e risposta alle richieste inviate dal sito.</p>
    <h2 style="margin-top:22px">Base giuridica</h2><p>Esecuzione del contratto, adempimento di obblighi di legge (D.lgs. 81/2008 e normativa fiscale), consenso per la newsletter.</p>
    <h2 style="margin-top:22px">Conservazione</h2><p>I dati relativi alla formazione sono conservati per il periodo necessario a dimostrare l'adempimento degli obblighi formativi; i dati fiscali per 10 anni.</p>
    <h2 style="margin-top:22px">Diritti</h2><p>Accesso, rettifica, cancellazione, limitazione, portabilità e opposizione (artt. 15–22 Reg. UE 2016/679), scrivendo a ${A.pec}. È possibile proporre reclamo al Garante per la protezione dei dati personali.</p>
    <h2 style="margin-top:22px">Cookie</h2><p>Questo sito non usa cookie di profilazione. Il carrello è conservato solo nel browser dell'utente.</p></div></div>`;
  P.crediti = () => testa('Crediti delle immagini', 'Fotografie da Unsplash e Pixabay, pubblicate con le rispettive licenze che ne consentono l\'uso gratuito anche commerciale.') + `<div class="wrap" style="max-width:960px;padding-top:40px;padding-bottom:96px"><div class="box"><ul class="crediti" style="list-style:none;margin:0;padding:0">
    ${Object.values(D.foto).filter((f, i, a) => a.findIndex(x => x.file === f.file) === i).map(f => `<li><b>${esc(f.titolo)}</b><br>Licenza: ${f.licUrl ? `<a href="${f.licUrl}" target="_blank" rel="noopener">${esc(f.licenza)}</a>` : esc(f.licenza)} · <a href="${f.pagina}" target="_blank" rel="noopener">Fonte</a></li>`).join('')}
    </ul></div></div>`;
  P.legenda = () => testa('Legenda delle sigle') + `<div class="wrap" style="max-width:960px;padding-top:40px;padding-bottom:96px"><div class="tab-wrap"><table class="t"><thead><tr><th>Sigla</th><th>Significato</th></tr></thead><tbody>
    ${[['AiFOS', 'Associazione italiana formatori ed operatori della sicurezza sul lavoro'], ['ASPP', 'Addetto del servizio di prevenzione e protezione'], ['ASR', 'Accordo Stato-Regioni'], ['ATECO', 'Classificazione delle attività economiche'], ['CER', 'Comunità energetica rinnovabile'], ['D.lgs.', 'Decreto legislativo'], ['D.M.', 'Decreto ministeriale'], ['DGR', 'Delibera di Giunta regionale'], ['DPI', 'Dispositivi di protezione individuale'], ['DVR', 'Documento di valutazione dei rischi'], ['EGE', 'Esperto in gestione dell\'energia'], ['EL', 'E-learning'], ['ESG', 'Ambiente, sociale e governance'], ['HACCP', 'Analisi dei pericoli e punti critici di controllo'], ['P', 'Presenza (aula)'], ['PES / PAV / PEI', 'Persona esperta / avvertita / idonea ai lavori elettrici'], ['PLE', 'Piattaforma di lavoro mobile elevabile'], ['RENTRI', 'Registro elettronico nazionale per la tracciabilità dei rifiuti'], ['RLS', 'Rappresentante dei lavoratori per la sicurezza'], ['RPF', 'Responsabile del progetto formativo'], ['RSPP', 'Responsabile del servizio di prevenzione e protezione'], ['SCORM', 'Standard per il tracciamento dei corsi e-learning'], ['SDI', 'Sistema di interscambio per la fattura elettronica'], ['TPALL', 'Tecnico della prevenzione nell\'ambiente e nei luoghi di lavoro'], ['VCS', 'Videoconferenza sincrona']].map(r => `<tr><td class="c"><b>${r[0]}</b></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div></div>`;
  P.app = () => testa('App ASTRA Formazione', 'L\'applicazione per smartphone consente di consultare il catalogo, il calendario delle edizioni e l\'area riservata, con impaginazione dedicata ai dispositivi mobili.') + `
    <div class="wrap" style="padding-top:40px;padding-bottom:96px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:20px;align-items:start">
      <section class="box"><h2>Android</h2><ol class="elenco"><li>Aprire il sito con Google Chrome dallo smartphone.</li><li>Premere il pulsante <b>Installa l'app</b> qui sotto oppure, dal menu ⋮ di Chrome, la voce <b>Installa app</b>.</li><li>Confermare: l'icona ASTRA compare tra le applicazioni e si apre a schermo intero.</li></ol>
        <button class="btn btn-rosso" id="btn-inst-android" type="button" style="margin-top:16px">Installa l'app</button><p id="inst-esito" style="font-size:13px;color:var(--testo-3);margin-top:10px"></p></section>
      <section class="box"><h2>iPhone e iPad</h2><ol class="elenco"><li>Aprire il sito con <b>Safari</b>.</li><li>Toccare il pulsante <b>Condividi</b> (quadrato con freccia verso l'alto).</li><li>Selezionare <b>Aggiungi alla schermata Home</b> e confermare con <b>Aggiungi</b>.</li></ol></section>
      <section class="box" style="text-align:center"><h2>Dal computer</h2><p>Inquadrare il codice con la fotocamera dello smartphone per aprire il sito e installare l'app.</p><div id="qr" style="display:grid;place-items:center;margin-top:16px;min-height:200px"></div></section>
      <section class="box"><h2>Pubblicazione negli store</h2><p>La stessa applicazione è predisposta per la pubblicazione su App Store e Google Play. La pubblicazione richiede gli account sviluppatore intestati ad ASTRA S.r.l. e la revisione da parte di Apple e Google.</p></section>
    </div>`;
  P.nonTrovata = () => testa('Pagina non trovata') + `<div class="wrap" style="padding:56px 24px 96px"><div class="vuoto"><b>La pagina richiesta non esiste.</b><br><br><a class="btn btn-rosso" href="#/">Torna alla home</a></div></div>`;

  /* ---------- Installazione app ---------- */
  let promptInst = null;
  const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const iOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const INST = 'astra-app-installata';
  const giaInstallata = () => { try { return localStorage.getItem(INST) === '1'; } catch (e) { return false; } };
  const segnaInstallata = () => { try { localStorage.setItem(INST, '1'); } catch (e) { } nascondiInstalla(); };
  function nascondiInstalla() { $('#btn-app').hidden = true; $('#installa').hidden = true; document.documentElement.classList.add('app-installata'); }
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); promptInst = e;
    /* se il browser propone l'installazione, l'app non è (più) installata */
    try { localStorage.removeItem(INST); } catch (er) { } $('#btn-app').hidden = false; document.documentElement.classList.remove('app-installata'); mostraBanner(); });
  addEventListener('appinstalled', segnaInstallata);
  const ICO_SHARE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i-in"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
  const ICO_PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="i-in"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg>';
  function guida() {
    const g = $('#guida'), ios = iOS;
    $('#guida-passi').innerHTML = standalone() ? '<li>L\'app risulta già installata su questo dispositivo.</li>' : ios
      ? `<li><span class="n">1</span><span class="tx">Toccare il pulsante <b>Condividi</b> ${ICO_SHARE} nella barra di Safari</span></li><li><span class="n">2</span><span class="tx">Scorrere e scegliere <b>Aggiungi alla schermata Home</b> ${ICO_PLUS}</span></li><li><span class="n">3</span><span class="tx">Toccare <b>Aggiungi</b> in alto a destra</span></li>`
      : innerWidth > 900 ? `<li><span class="tx">Inquadrare il codice con la fotocamera dello smartphone</span></li><li><div id="qr-guida" class="qr-guida"></div></li>`
      : `<li><span class="n">1</span><span class="tx">Toccare il menu <b>⋮</b> in alto a destra di Chrome</span></li><li><span class="n">2</span><span class="tx">Scegliere <b>Installa app</b> oppure <b>Aggiungi a schermata Home</b></span></li><li><span class="n">3</span><span class="tx">Confermare con <b>Installa</b></span></li>`;
    $('#guida-freccia').className = 'guida-freccia ' + (ios && !standalone() ? 'giu' : (!ios && innerWidth <= 900 && !standalone() ? 'su' : 'no'));
    g.hidden = false; document.body.style.overflow = 'hidden';
    if ($('#qr-guida')) qr($('#qr-guida'), 220);
  }
  function installa() {
    $('#installa').hidden = true;
    if (promptInst) { promptInst.prompt(); promptInst.userChoice.then(r => { if (r.outcome === 'accepted') toast('App ASTRA installata'); }).finally(() => { promptInst = null; }); }
    else guida();
  }
  function qr(el, size) {
    const go = () => { el.innerHTML = ''; new QRCode(el, { text: location.href.split('#')[0] + '#/app', width: size, height: size, colorDark: '#0F3C47', colorLight: '#FFFFFF', correctLevel: 1 }); };
    if (window.QRCode) return go();
    if (!qr.p) qr.p = new Promise((ok, ko) => { const sc = document.createElement('script'); sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'; sc.onload = ok; sc.onerror = ko; document.head.appendChild(sc); });
    qr.p.then(go).catch(() => { el.textContent = location.host; });
  }
  function mostraBanner() {
    let visto = false; try { visto = localStorage.getItem('astra-inst-no') === '1'; } catch (e) { }
    if (visto || standalone() || giaInstallata() || innerWidth > 900 || location.hash.startsWith('#/app')) return;
    const b = $('#installa');

    b.hidden = false;
  }
  function montaApp() {
    const b = $('#btn-inst-android');
    b && b.addEventListener('click', installa);
    const q = $('#qr'); if (q) qr(q, 200);
  }
  $('#inst-ok').addEventListener('click', installa);
  $('#btn-app').addEventListener('click', installa);
  $('#guida-x').addEventListener('click', () => { $('#guida').hidden = true; document.body.style.overflow = ''; });
  $('#guida').addEventListener('click', e => { if (e.target.id === 'guida') { $('#guida').hidden = true; document.body.style.overflow = ''; } });
  if (standalone()) segnaInstallata();
  else if (giaInstallata()) nascondiInstalla();
  if (!standalone() && navigator.getInstalledRelatedApps) navigator.getInstalledRelatedApps().then(l => { if (l && l.length) segnaInstallata(); }).catch(() => { });
  if (innerWidth > 900 && $('#qr-footer')) { const o = new IntersectionObserver(es => { if (es[0].isIntersecting) { qr($('#qr-footer'), 96); o.disconnect(); } }); o.observe($('#qr-footer')); }
  $('#inst-x').addEventListener('click', () => { $('#installa').hidden = true; try { localStorage.setItem('astra-inst-no', '1'); } catch (e) { } });
  if (standalone()) document.documentElement.classList.add('standalone');
  setTimeout(mostraBanner, 2500);

  /* ================= ROUTER ================= */
  const MONTA = { app: montaApp, catalogo: montaCatalogo, corso: montaCorso, carrello: montaCarrello, 'area-azienda': montaArea, attestato: montaAttestato, contatti: montaContatti };
  const TITOLI = { app: 'App per smartphone', home: 'Formazione ASTRA – Sicurezza, ambiente, energia e HACCP a Teramo', catalogo: 'Catalogo corsi', calendario: 'Calendario corsi', carrello: 'Carrello', aziende: 'Soluzioni per le aziende', 'area-azienda': 'Area azienda', normativa: 'Normativa e news', attestato: 'Verifica attestato', 'chi-siamo': 'Chi siamo', contatti: 'Contatti', privacy: 'Informativa privacy', crediti: 'Crediti delle immagini', legenda: 'Legenda delle sigle' };
  let heroT;
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const [pag, arg] = (path || 'home').split('/');
    const par = Object.fromEntries(new URLSearchParams(qs || ''));
    const fn = P[pag] || P.nonTrovata;
    clearInterval(heroT);
    app.innerHTML = fn(par, arg && decodeURIComponent(arg));
    app.style.animation = 'none'; void app.offsetWidth; app.style.animation = '';
    document.title = pag === 'corso' && corso(arg) ? `${corso(arg).titolo} – Corso ${corso(arg).ore} ore – Formazione ASTRA Teramo` : (pag === 'home' ? TITOLI.home : `${TITOLI[pag] || 'Pagina non trovata'} – Formazione ASTRA`);
    $$('nav.menu a').forEach(a => { if (a.getAttribute('href').slice(2).split('?')[0] === pag) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $$('.tabbar [data-tab]').forEach(t => t.classList.toggle('on', t.dataset.tab === (pag || 'home')));
    if (pag === 'app') $('#installa').hidden = true;
    chiudiMenu();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    (MONTA[pag] || (() => { }))();
    if (pag === 'home' || !h) montaHome();
    rivela(); contatori();
  }
  function montaHome() {
    const f = $('#cerca-hero');
    f && f.addEventListener('submit', e => { e.preventDefault(); location.hash = '#/catalogo?q=' + encodeURIComponent(f.q.value); });
    const fa = $('#cerca-av');
    fa && fa.addEventListener('submit', e => { e.preventDefault(); const p = new URLSearchParams(); new FormData(fa).forEach((v, k) => { if (v) p.set(k, v); }); location.hash = '#/catalogo' + (p.toString() ? '?' + p : ''); });
    const sl = $$('.hero .slide'), pt = $$('.hero .punti button');
    if (sl.length < 2) return;
    let i = 0;
    const vai = n => { sl[i].classList.remove('on'); pt[i].classList.remove('on'); i = n; sl[i].classList.add('on'); void pt[i].offsetWidth; pt[i].classList.add('on'); };
    const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ridotto) heroT = setInterval(() => vai((i + 1) % sl.length), 7000);
    pt.forEach((b, n) => b.addEventListener('click', () => { clearInterval(heroT); vai(n); }));
  }

  /* ---------- Animazioni ---------- */
  let io;
  function rivela() {
    if (!('IntersectionObserver' in window)) { $$('.rivela').forEach(e => e.classList.add('vista')); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vista'); io.unobserve(e.target); } }), { rootMargin: '0px 0px 12% 0px', threshold: 0 });
    $$('.rivela:not(.vista)').forEach(e => io.observe(e));
  }
  function contatori() {
    const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parti = el => { const fine = +el.dataset.conta, suf = el.dataset.suffisso || '';
      if (ridotto) { el.innerHTML = fine.toLocaleString('it-IT') + (suf ? `<small>${suf}</small>` : ''); return; }
      const t0 = performance.now(), dur = 1600;
      const step = t => { const p = Math.min(1, (t - t0) / dur), v = Math.round(fine * (1 - Math.pow(1 - p, 3)));
        el.innerHTML = v.toLocaleString('it-IT') + (suf ? `<small>${suf}</small>` : ''); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step); };
    const els = $$('[data-conta]');
    if (!('IntersectionObserver' in window)) return els.forEach(parti);
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { parti(e.target); o.unobserve(e.target); } }), { threshold: .4 });
    els.forEach(e => o.observe(e));
  }

  /* ---------- Menu mobile, scroll ---------- */
  const menu = $('nav.menu');
  function chiudiMenu() { menu.classList.remove('aperto'); $('#hamb').setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  $('#hamb').addEventListener('click', () => { menu.classList.add('aperto'); $('#hamb').setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; });
  $('#chiudi-menu').addEventListener('click', chiudiMenu);
  $('#tab-menu').addEventListener('click', () => { menu.classList.add('aperto'); document.body.style.overflow = 'hidden'; });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') chiudiMenu(); });
  const testata = $('header.testata'), su = $('#su'), pl = $('#prog');
  addEventListener('scroll', () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    testata.classList.toggle('scesa', y > 40); su.classList.toggle('on', y > 700);
    pl.style.width = (h > 0 ? y / h * 100 : 0) + '%';
  }, { passive: true });
  su.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Avvio ---------- */
  $('#anno').textContent = '2026';
  aggiornaBadge();
  if (!location.hash && window.ASTRA_ROTTA) history.replaceState(null, '', location.pathname + location.search + '#/' + window.ASTRA_ROTTA);
  addEventListener('hashchange', route);
  route();
})();
