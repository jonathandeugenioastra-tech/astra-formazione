/* Area autore – gestione di corsi, prezzi, edizioni, notizie e dati societari
   © 2026 dr. Jonathan D'Eugenio – Progetto, contenuti e software del portale
   I dati sono modificati in una bozza locale (solo su questo dispositivo) e pubblicati
   sul sito tramite l'API di GitHub con il token personale dell'autore. */
window.ASTRA_AUTORE = function (root) {
  'use strict';
  const REPO = 'jonathandeugenioastra-tech/astra-formazione', RAMI = ['main', 'sorgenti'], PERCORSO = 'assets/data.js';
  const KB = 'astra-autore-bozza', KT = 'astra-autore-token';
  const $ = (s, el = root) => el.querySelector(s), $$ = (s, el = root) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clona = o => JSON.parse(JSON.stringify(o));
  const euro = n => '€ ' + Number(n || 0).toLocaleString('it-IT', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const MOD = { EL: 'E-learning', VCS: 'Videoconferenza sincrona', P: 'Aula (presenza)' };
  const TIPI = ['Base', 'Aggiornamento', 'Abilitazione', 'Specialistico'];
  const leggi = (k, d) => { try { const v = localStorage.getItem(k) ?? sessionStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const scrivi = (k, v, ricorda = true) => { try { (ricorda ? localStorage : sessionStorage).setItem(k, JSON.stringify(v)); } catch (e) { } };

  let ORIG = clona(window.ASTRA), B = leggi(KB, null) || clona(ORIG);
  let scheda = 'corsi', modifica = null, filtro = '';
  const salvaBozza = () => { scrivi(KB, B); segnaModifiche(); };
  const diverso = () => JSON.stringify(B) !== JSON.stringify(ORIG);
  const segnaModifiche = () => { const el = $('#aut-stato'); if (el) { const d = diverso(); el.textContent = d ? 'Bozza con modifiche non pubblicate' : 'Nessuna modifica rispetto al sito pubblicato'; el.className = 'aut-stato ' + (d ? 'mod' : 'ok'); } };

  /* ───────── stile ───────── */
  if (!document.getElementById('aut-css')) {
    const st = document.createElement('style'); st.id = 'aut-css';
    st.textContent = `
.aut{width:100%;max-width:1280px;margin:0 auto;padding:28px 24px 80px;min-width:0;overflow-wrap:anywhere}
.aut-tw{overflow-x:auto;max-width:100%}.aut-tw table{min-width:860px}
.aut-testa{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px}
.aut-testa h1{font-family:var(--ft);font-size:32px;color:var(--petrolio);margin:0;letter-spacing:-.02em}
.aut-testa p{margin:4px 0 0;color:var(--testo-2)}
.aut-stato{font-family:var(--fb);font-size:13px;padding:6px 12px;border-radius:999px;white-space:nowrap}
.aut-stato.ok{background:#EAF7F0;color:#0b5a32}.aut-stato.mod{background:#FFF4D6;color:#6b4a00}
.aut-tab{display:flex;gap:6px;border-bottom:1px solid var(--linea,#D5E2E6);margin-bottom:20px;overflow-x:auto}
.aut-tab button{padding:12px 16px;border:0;background:none;font:inherit;font-family:var(--fb);color:var(--testo-2);border-bottom:3px solid transparent;cursor:pointer;white-space:nowrap}
.aut-tab button.on{color:var(--petrolio);border-bottom-color:var(--rosso)}
.aut-barra{display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:14px}
.aut-barra input[type=search]{height:42px;border:1px solid #C9D7DB;border-radius:8px;padding:0 12px;font:inherit;min-width:280px}
.aut table{width:100%;border-collapse:collapse;background:#fff;font-size:14px}
.aut th,.aut td{border:.5px solid #C9D7DB;padding:8px 10px;vertical-align:middle}
.aut th{background:var(--petrolio);color:#fff;font-family:var(--fb);font-weight:400;text-align:center;white-space:nowrap}
.aut td.c{text-align:center;white-space:nowrap}.aut td.n{text-align:right;white-space:nowrap}
.aut tbody tr:nth-child(even){background:#F7FAFB}
.aut .azioni{display:flex;gap:6px;justify-content:center}
.aut .bt{height:34px;padding:0 12px;border-radius:6px;border:1px solid #C9D7DB;background:#fff;font:inherit;font-size:13px;font-family:var(--fb);color:var(--petrolio);cursor:pointer;white-space:nowrap}
.aut .bt:hover{border-color:var(--petrolio)}.aut .bt.p{background:var(--petrolio);color:#fff;border-color:var(--petrolio)}.aut .bt.r{background:var(--rosso);color:#fff;border-color:var(--rosso)}.aut .bt.e{color:#a3161c;border-color:#efb3b5}
.aut .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px 16px}
.aut .grid .s2{grid-column:span 2}.aut .grid .s4{grid-column:1/-1}
.aut label.f{display:flex;flex-direction:column;gap:6px;font-family:var(--fb);font-size:13px;color:var(--petrolio);min-width:0}
.aut label.f input,.aut label.f select,.aut label.f textarea{font:inherit;font-family:var(--f);font-size:14.5px;color:var(--testo);border:1px solid #C9D7DB;border-radius:8px;padding:9px 11px;background:#fff;width:100%;min-width:0}
.aut label.f textarea{min-height:88px;resize:vertical;line-height:1.5}
.aut label.f small{font-family:var(--f);color:var(--testo-3);font-size:12px}
.aut .chk{display:flex;gap:14px;flex-wrap:wrap;padding-top:4px}.aut .chk label{display:flex;gap:6px;align-items:center;font-family:var(--f);font-size:14px;color:var(--testo)}
.aut .riq{background:#fff;border:1px solid #D5E2E6;border-radius:10px;padding:20px;margin-bottom:16px}
.aut .riq h2{font-family:var(--fb);font-size:17px;color:var(--petrolio);margin:0 0 14px}
.aut .mod-r{display:grid;grid-template-columns:minmax(0,1fr) 90px 40px;gap:10px;align-items:start;border:1px solid #E2EBEE;border-radius:8px;padding:12px;margin-bottom:10px;background:#FBFDFD}
.aut .msg{padding:10px 14px;border-radius:8px;margin:10px 0;font-size:14px}
.aut .msg.ko{background:#FFF1F1;color:#8c1116;border:1px solid #F2B7B9}.aut .msg.ok{background:#EFFAF4;color:#0b5a32;border:1px solid #A8DDBF}.aut .msg.av{background:#FFF8E1;color:#6b4a00;border:1px solid #F1D38A}
.aut .piede-f{display:flex;gap:10px;justify-content:flex-end;padding:8px 0 4px}
.aut .leg{font-size:12.5px;color:var(--testo-3);margin-top:10px}
@media (max-width:900px){.aut .grid{grid-template-columns:1fr 1fr}.aut .grid .s2,.aut .grid .s4{grid-column:1/-1}.aut .barra input[type=search]{min-width:0;width:100%}}`;
    document.head.appendChild(st);
  }

  /* ───────── struttura ───────── */
  root.style.display = 'block'; root.style.minWidth = '0';
  const disegna = () => {
    root.innerHTML = `<div class="aut">
      <div class="aut-testa"><div><h1>Area autore</h1><p>Gestione del catalogo, dei prezzi, delle edizioni, delle notizie e dei dati societari del portale.</p></div><span id="aut-stato" class="aut-stato"></span></div>
      <nav class="aut-tab" role="tablist">${[['corsi', 'Corsi'], ['prezzi', 'Prezzi'], ['edizioni', 'Edizioni a calendario'], ['news', 'Notizie'], ['dati', 'Dati societari'], ['pubblica', 'Pubblicazione']].map(([k, t]) => `<button role="tab" data-s="${k}" class="${scheda === k ? 'on' : ''}">${t}</button>`).join('')}</nav>
      <div id="aut-corpo"></div></div>`;
    $$('.aut-tab button').forEach(b => b.onclick = () => { scheda = b.dataset.s; modifica = null; disegna(); });
    ({ corsi: vCorsi, prezzi: vPrezzi, edizioni: vEdizioni, news: vNews, dati: vDati, pubblica: vPubblica })[scheda]();
    segnaModifiche();
  };
  const corpo = h => { $('#aut-corpo').innerHTML = h; };
  const nomeArea = k => (B.ambiti[k] || {}).nome || k;

  /* ───────── corsi ───────── */
  const vCorsi = () => {
    if (modifica !== null) return eCorso();
    const q = filtro.toLowerCase();
    const l = B.corsi.map((c, i) => [c, i]).filter(([c]) => !q || (c.id + ' ' + c.titolo).toLowerCase().includes(q));
    corpo(`<div class="aut-barra"><input type="search" id="q" placeholder="Ricerca per codice o titolo" value="${esc(filtro)}"><div style="display:flex;gap:8px"><button class="bt p" id="nuovo">Nuovo corso</button></div></div>
      <div class="aut-tw"><table><thead><tr><th>Codice</th><th>Titolo</th><th>Area</th><th>Tipologia</th><th>Ore</th><th>Modalità</th><th>Prezzo</th><th>Azioni</th></tr></thead><tbody>
      ${l.map(([c, i]) => `<tr><td class="c">${esc(c.id)}</td><td>${esc(c.titolo)}</td><td class="c">${esc(nomeArea(c.ambito))}</td><td class="c">${esc(c.tipo)}</td><td class="c">${c.ore}</td><td class="c">${c.mod.join(' · ')}</td><td class="n">${euro(c.prezzo)}</td>
        <td><div class="azioni"><button class="bt" data-m="${i}">Modifica</button><button class="bt" data-d="${i}">Duplica</button><button class="bt e" data-x="${i}">Elimina</button></div></td></tr>`).join('')}
      </tbody></table></div><p class="leg">Legenda: EL = e-learning · VCS = videoconferenza sincrona · P = aula (presenza). Prezzi per partecipante, IVA esclusa. ${B.corsi.length} corsi a catalogo.</p>`);
    $('#q').oninput = e => { filtro = e.target.value; const p = e.target.selectionStart; vCorsi(); const n = $('#q'); n.focus(); n.setSelectionRange(p, p); };
    $('#nuovo').onclick = () => { modifica = -1; vCorsi(); };
    $$('[data-m]').forEach(b => b.onclick = () => { modifica = +b.dataset.m; vCorsi(); });
    $$('[data-d]').forEach(b => b.onclick = () => { const c = clona(B.corsi[+b.dataset.d]); c.id = c.id + '-COPIA'; c.titolo += ' (copia)'; B.corsi.splice(+b.dataset.d + 1, 0, c); salvaBozza(); modifica = +b.dataset.d + 1; vCorsi(); });
    $$('[data-x]').forEach(b => b.onclick = () => {
      const c = B.corsi[+b.dataset.x], ed = B.edizioni.filter(e => e.corso === c.id).length;
      if (!confirm(`Eliminare il corso ${c.id} – ${c.titolo}?${ed ? `\nSaranno eliminate anche ${ed} edizioni a calendario collegate.` : ''}`)) return;
      B.corsi.splice(+b.dataset.x, 1); B.edizioni = B.edizioni.filter(e => e.corso !== c.id); salvaBozza(); vCorsi();
    });
  };
  const vuoto = () => ({ id: '', ambito: 'sicurezza', tipo: 'Base', titolo: '', ore: 4, mod: ['P'], prezzo: 0, agg: '', rif: '', pres: '', dest: '', req: '', obj: [], moduli: [{ t: 'Modulo 1', ore: 4, c: [] }] });
  const eCorso = () => {
    const nuovo = modifica === -1, c = nuovo ? vuoto() : clona(B.corsi[modifica]);
    const area = Object.entries(B.ambiti).map(([k, a]) => `<option value="${k}" ${c.ambito === k ? 'selected' : ''}>${esc(a.nome)}</option>`).join('');
    const modulo = (m, i) => `<div class="mod-r" data-i="${i}"><div style="display:grid;gap:8px"><label class="f">Titolo del modulo<input name="mt" value="${esc(m.t)}"></label><label class="f">Contenuti <small>un argomento per riga</small><textarea name="mc">${esc((m.c || []).join('\n'))}</textarea></label></div><label class="f">Ore<input name="mo" type="number" min="0" step="0.5" value="${m.ore}"></label><button class="bt e" data-rm="${i}" title="Elimina il modulo" style="margin-top:22px">✕</button></div>`;
    corpo(`<form id="fc">
      <div class="riq"><h2>${nuovo ? 'Nuovo corso' : 'Modifica del corso ' + esc(c.id)}</h2><div class="grid">
        <label class="f">Codice<input name="id" value="${esc(c.id)}" required pattern="[A-Z0-9-]+" title="Lettere maiuscole, numeri e trattini"><small>es. PREP-AGG</small></label>
        <label class="f">Area<select name="ambito">${area}</select></label>
        <label class="f">Tipologia<select name="tipo">${TIPI.map(t => `<option ${c.tipo === t ? 'selected' : ''}>${t}</option>`).join('')}</select></label>
        <label class="f">Prezzo per partecipante (€, IVA esclusa)<input name="prezzo" type="number" min="0" step="1" value="${c.prezzo}"></label>
        <label class="f s4">Titolo<input name="titolo" value="${esc(c.titolo)}" required></label>
        <label class="f">Durata complessiva (ore)<input name="ore" type="number" min="0.5" step="0.5" value="${c.ore}" required></label>
        <div class="f s2"><span style="font-family:var(--fb);font-size:13px;color:var(--petrolio)">Modalità di erogazione ammesse</span><div class="chk">${Object.entries(MOD).map(([k, n]) => `<label><input type="checkbox" name="mod" value="${k}" ${c.mod.includes(k) ? 'checked' : ''}>${n}</label>`).join('')}</div></div>
        <label class="f">Aggiornamento<input name="agg" value="${esc(c.agg || '')}" placeholder="es. 6 ore ogni 5 anni"></label>
        <label class="f s4">Riferimenti normativi<input name="rif" value="${esc(c.rif || '')}"></label>
        <label class="f s4">Presentazione<textarea name="pres">${esc(c.pres || '')}</textarea></label>
        <label class="f s2">Destinatari<textarea name="dest">${esc(c.dest || '')}</textarea></label>
        <label class="f s2">Requisiti di accesso<textarea name="req">${esc(c.req || '')}</textarea></label>
        <label class="f s4">Obiettivi <small>un obiettivo per riga</small><textarea name="obj">${esc((c.obj || []).join('\n'))}</textarea></label>
        <label class="f s4">Nota (facoltativa)<input name="nota" value="${esc(c.nota || '')}"></label>
      </div></div>
      <div class="riq"><h2>Programma e articolazione oraria</h2><div id="moduli">${(c.moduli || []).map(modulo).join('')}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><button type="button" class="bt" id="addm">Aggiungi modulo</button><span id="somma" class="leg"></span></div></div>
      <div id="esito"></div>
      <div class="piede-f"><button type="button" class="bt" id="annulla">Annulla</button><button class="bt p">Salva nella bozza</button></div></form>`);
    const f = $('#fc');
    const somma = () => { const s = $$('[name=mo]', f).reduce((a, x) => a + (+x.value || 0), 0), o = +f.ore.value || 0; $('#somma').innerHTML = `Somma delle ore dei moduli: <b>${s}</b> su ${o} ${s === o ? '✓' : '<span style="color:#a3161c">– la somma deve coincidere con la durata complessiva</span>'}`; };
    const legaModuli = () => { $$('[data-rm]', f).forEach(b => b.onclick = () => { b.closest('.mod-r').remove(); somma(); }); $$('[name=mo]', f).forEach(x => x.oninput = somma); };
    legaModuli(); somma(); f.ore.oninput = somma;
    $('#addm').onclick = () => { const n = $$('.mod-r', f).length; $('#moduli').insertAdjacentHTML('beforeend', modulo({ t: `Modulo ${n + 1}`, ore: 0, c: [] }, n)); legaModuli(); somma(); };
    $('#annulla').onclick = () => { modifica = null; vCorsi(); };
    f.onsubmit = e => {
      e.preventDefault();
      const fd = new FormData(f), righe = s => String(s || '').split('\n').map(x => x.trim()).filter(Boolean);
      const n = { id: fd.get('id').trim().toUpperCase(), ambito: fd.get('ambito'), tipo: fd.get('tipo'), titolo: fd.get('titolo').trim(), ore: +fd.get('ore'), mod: fd.getAll('mod'), prezzo: +fd.get('prezzo'),
        agg: fd.get('agg').trim(), rif: fd.get('rif').trim(), pres: fd.get('pres').trim(), dest: fd.get('dest').trim(), req: fd.get('req').trim(), obj: righe(fd.get('obj')),
        moduli: $$('.mod-r', f).map(r => ({ t: $('[name=mt]', r).value.trim(), ore: +$('[name=mo]', r).value, c: righe($('[name=mc]', r).value) })) };
      const nota = fd.get('nota').trim(); if (nota) n.nota = nota;
      const old = nuovo ? null : B.corsi[modifica];
      Object.keys(old || {}).forEach(k => { if (!(k in n) && k !== 'nota') n[k] = old[k]; }); // conserva eventuali campi aggiuntivi
      const err = [], av = [];
      if (!/^[A-Z0-9-]+$/.test(n.id)) err.push('Il codice può contenere solo lettere maiuscole, numeri e trattini.');
      if (B.corsi.some((x, i) => x.id === n.id && i !== modifica)) err.push(`Il codice ${n.id} è già utilizzato da un altro corso.`);
      if (!n.titolo) err.push('Il titolo è obbligatorio.');
      if (!n.mod.length) err.push('Selezionare almeno una modalità di erogazione.');
      if (!(n.ore > 0)) err.push('La durata deve essere maggiore di zero.');
      const s = n.moduli.reduce((a, m) => a + m.ore, 0);
      if (n.moduli.length && s !== n.ore) err.push(`La somma delle ore dei moduli (${s}) non coincide con la durata complessiva (${n.ore}).`);
      if (n.tipo === 'Abilitazione' && (n.mod.includes('EL') || n.mod.includes('VCS'))) av.push('Per i corsi di abilitazione all\'uso delle attrezzature la formazione si svolge in presenza: verificare le modalità selezionate.');
      if (!n.dest) av.push('I destinatari non sono indicati.');
      if (!n.rif) av.push('I riferimenti normativi non sono indicati.');
      if (err.length) { $('#esito').innerHTML = `<div class="msg ko">${err.map(esc).join('<br>')}</div>`; $('#esito').scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
      if (old && old.id !== n.id) B.edizioni.forEach(e => { if (e.corso === old.id) e.corso = n.id; });
      if (nuovo) B.corsi.push(n); else B.corsi[modifica] = n;
      salvaBozza(); modifica = null; vCorsi();
      $('#aut-corpo').insertAdjacentHTML('afterbegin', `<div class="msg ok">Corso ${esc(n.id)} salvato nella bozza.${av.length ? '' : ''}</div>${av.length ? `<div class="msg av">${av.map(esc).join('<br>')}</div>` : ''}`);
    };
  };

  /* ───────── prezzi ───────── */
  const vPrezzi = () => {
    corpo(`<div class="riq"><h2>Variazione complessiva dei prezzi</h2><div style="display:flex;gap:10px;align-items:end;flex-wrap:wrap">
        <label class="f">Area<select id="pa"><option value="">Tutte le aree</option>${Object.entries(B.ambiti).map(([k, a]) => `<option value="${k}">${esc(a.nome)}</option>`).join('')}</select></label>
        <label class="f">Variazione percentuale<input id="pp" type="number" step="0.5" value="0" style="width:140px"></label>
        <label class="f">Arrotondamento<select id="pr"><option value="1">all'euro</option><option value="5">ai 5 euro</option><option value="10">ai 10 euro</option></select></label>
        <button class="bt p" id="applica">Applica</button></div></div>
      <div class="aut-tw"><table><thead><tr><th>Codice</th><th>Titolo</th><th>Area</th><th>Ore</th><th>Prezzo (€)</th><th>€/ora</th></tr></thead><tbody>
      ${B.corsi.map((c, i) => `<tr><td class="c">${esc(c.id)}</td><td>${esc(c.titolo)}</td><td class="c">${esc(nomeArea(c.ambito))}</td><td class="c">${c.ore}</td><td class="c"><input data-p="${i}" type="number" min="0" step="1" value="${c.prezzo}" style="width:110px;height:34px;border:1px solid #C9D7DB;border-radius:6px;text-align:right;padding:0 8px;font:inherit"></td><td class="n" data-h="${i}">${(c.prezzo / c.ore).toFixed(2)}</td></tr>`).join('')}
      </tbody></table></div><p class="leg">Le modifiche sono salvate automaticamente nella bozza. Prezzi per partecipante, IVA esclusa.</p>`);
    $$('[data-p]').forEach(x => x.oninput = () => { const i = +x.dataset.p; B.corsi[i].prezzo = Math.max(0, +x.value || 0); $(`[data-h="${i}"]`).textContent = (B.corsi[i].prezzo / B.corsi[i].ore).toFixed(2); salvaBozza(); });
    $('#applica').onclick = () => {
      const a = $('#pa').value, p = +$('#pp').value, r = +$('#pr').value; if (!p) return;
      const n = B.corsi.filter(c => !a || c.ambito === a).length;
      if (!confirm(`Applicare una variazione del ${p > 0 ? '+' : ''}${p}% a ${n} corsi?`)) return;
      B.corsi.forEach(c => { if (!a || c.ambito === a) c.prezzo = Math.max(0, Math.round(c.prezzo * (1 + p / 100) / r) * r); });
      salvaBozza(); vPrezzi();
    };
  };

  /* ───────── edizioni ───────── */
  const vEdizioni = () => {
    const opz = sel => B.corsi.map(c => `<option value="${c.id}" ${sel === c.id ? 'selected' : ''}>${esc(c.id)} – ${esc(c.titolo)}</option>`).join('');
    const ord = B.edizioni.map((e, i) => [e, i]).sort((a, b) => a[0].data.localeCompare(b[0].data));
    const titolo = id => (B.corsi.find(c => c.id === id) || {}).titolo || '— corso non presente a catalogo —';
    const dt = d => d ? new Date(d + 'T00:00').toLocaleDateString('it-IT') : '';
    corpo(`<div class="riq"><h2>Nuova edizione</h2><form id="fe" class="grid">
        <label class="f s2">Corso<select name="corso">${opz()}</select></label>
        <label class="f">Modalità<select name="mod"><option value="P">Aula (presenza)</option><option value="VCS">Videoconferenza sincrona</option></select></label>
        <label class="f">Sede<select name="sedeTipo"><option value="ASTRA – Teramo">ASTRA – Teramo</option><option value="Online">Online</option><option value="Sede del cliente">Sede del cliente</option></select></label>
        <label class="f">Data di inizio<input name="data" type="date" required></label>
        <label class="f">Data di fine<input name="fine" type="date"><small>facoltativa, per i corsi su più giornate</small></label>
        <label class="f">Orario<input name="orario" placeholder="9:00 – 13:00"></label>
        <label class="f">Posti disponibili<input name="posti" type="number" min="0" value="20"></label>
        <label class="f s4">Nota (facoltativa)<input name="nota" placeholder="es. 4 giornate, teoria e pratica"></label>
        <div class="s4" style="display:flex;justify-content:flex-end"><button class="bt p">Aggiungi al calendario</button></div></form></div>
      <div class="aut-tw"><table><thead><tr><th>Data</th><th>Corso</th><th>Modalità</th><th>Sede</th><th>Orario</th><th>Posti</th><th>Azioni</th></tr></thead><tbody>
      ${ord.map(([e, i]) => `<tr><td class="c">${dt(e.data)}${e.fine && e.fine !== e.data ? ' – ' + dt(e.fine) : ''}</td><td>${esc(e.corso)} – ${esc(titolo(e.corso))}</td><td class="c">${e.mod}</td><td class="c">${esc(e.sede)}</td><td class="c">${esc(e.orario || '')}</td>
        <td class="c"><input data-po="${i}" type="number" min="0" value="${e.posti}" style="width:76px;height:32px;border:1px solid #C9D7DB;border-radius:6px;text-align:center;font:inherit"></td><td><div class="azioni"><button class="bt e" data-xe="${i}">Elimina</button></div></td></tr>`).join('')}
      </tbody></table></div><p class="leg">Le edizioni con 0 posti sono mostrate come «Esaurito» con lista d'attesa. Le edizioni passate possono essere eliminate.</p>`);
    const f = $('#fe');
    f.mod.onchange = () => { f.sedeTipo.value = f.mod.value === 'VCS' ? 'Online' : 'ASTRA – Teramo'; };
    f.onsubmit = e => {
      e.preventDefault(); const fd = new FormData(f);
      const c = B.corsi.find(x => x.id === fd.get('corso'));
      if (c && !c.mod.includes(fd.get('mod'))) { alert(`La modalità selezionata non è ammessa per il corso ${c.id}.`); return; }
      const n = { corso: fd.get('corso'), data: fd.get('data'), mod: fd.get('mod'), orario: fd.get('orario').trim(), sede: fd.get('sedeTipo'), posti: +fd.get('posti') };
      if (fd.get('fine') && fd.get('fine') !== n.data) n.fine = fd.get('fine');
      if (fd.get('nota').trim()) n.nota = fd.get('nota').trim();
      B.edizioni.push(n); salvaBozza(); vEdizioni();
    };
    $$('[data-po]').forEach(x => x.oninput = () => { B.edizioni[+x.dataset.po].posti = Math.max(0, +x.value || 0); salvaBozza(); });
    $$('[data-xe]').forEach(b => b.onclick = () => { if (confirm('Eliminare questa edizione dal calendario?')) { B.edizioni.splice(+b.dataset.xe, 1); salvaBozza(); vEdizioni(); } });
  };

  /* ───────── notizie ───────── */
  const vNews = () => {
    const area = sel => Object.entries(B.ambiti).map(([k, a]) => `<option value="${k}" ${sel === k ? 'selected' : ''}>${esc(a.nome)}</option>`).join('');
    corpo(`<div class="riq"><h2>Nuova notizia</h2><form id="fn" class="grid">
        <label class="f">Area<select name="area">${area()}</select></label><label class="f s2">Titolo<input name="titolo" required></label><label class="f">Riferimento normativo<input name="rif"></label>
        <label class="f s4">Testo<textarea name="testo" required></textarea></label>
        <div class="s4" style="display:flex;justify-content:flex-end"><button class="bt p">Aggiungi in testa all'elenco</button></div></form></div>
      ${B.news.map((n, i) => `<div class="riq" data-n="${i}"><div class="grid"><label class="f">Area<select name="area">${area(n.area)}</select></label><label class="f s2">Titolo<input name="titolo" value="${esc(n.titolo)}"></label><label class="f">Riferimento<input name="rif" value="${esc(n.rif || '')}"></label>
        <label class="f s4">Testo<textarea name="testo">${esc(n.testo)}</textarea></label></div>
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px">${i ? `<button class="bt" data-su="${i}">Sposta in alto</button>` : ''}<button class="bt e" data-xn="${i}">Elimina</button></div></div>`).join('')}
      <p class="leg">Nella pagina iniziale sono mostrate le prime tre notizie dell'elenco.</p>`);
    $('#fn').onsubmit = e => { e.preventDefault(); const fd = new FormData(e.target); B.news.unshift({ area: fd.get('area'), titolo: fd.get('titolo').trim(), testo: fd.get('testo').trim(), rif: fd.get('rif').trim() }); salvaBozza(); vNews(); };
    $$('[data-n]').forEach(r => $$('input,select,textarea', r).forEach(x => x.oninput = x.onchange = () => { B.news[+r.dataset.n][x.name] = x.value; salvaBozza(); }));
    $$('[data-su]').forEach(b => b.onclick = () => { const i = +b.dataset.su;[B.news[i - 1], B.news[i]] = [B.news[i], B.news[i - 1]]; salvaBozza(); vNews(); });
    $$('[data-xn]').forEach(b => b.onclick = () => { if (confirm('Eliminare questa notizia?')) { B.news.splice(+b.dataset.xn, 1); salvaBozza(); vNews(); } });
  };

  /* ───────── dati societari ───────── */
  const vDati = () => {
    const ETI = { ragioneSociale: 'Ragione sociale', ruolo: 'Qualifica', indirizzo: 'Indirizzo', cap: 'CAP', comune: 'Comune', provincia: 'Provincia', piva: 'Partita IVA', cf: 'Codice fiscale', rea: 'Numero REA', capitale: 'Capitale sociale', fax: 'Fax', email: 'E-mail', pec: 'PEC', web: 'Sito web', orari: 'Orari', nome: 'Nominativo', qualifica: 'Qualifica', tel: 'Telefono', accredia: 'Accreditamento', registroAlimentare: 'Registro regionale', fondazione: 'Anno di fondazione', analisiAnno: 'Analisi annue', telefoni: 'Telefoni', certificazioni: 'Certificazioni' };
    const campi = (o, pref) => Object.entries(o).filter(([k, v]) => k !== 'daConfermare' && (typeof v === 'string' || typeof v === 'number' || Array.isArray(v))).map(([k, v]) => `<label class="f ${String(v).length > 60 ? 's2' : ''}"><span>${esc(ETI[k] || k)}</span><input data-o="${pref}" data-k="${k}" data-t="${Array.isArray(v) ? 'array' : typeof v}" value="${esc(Array.isArray(v) ? v.join(' · ') : v)}">${Array.isArray(v) ? '<small>valori separati da « · »</small>' : ''}</label>`).join('');
    corpo(`<div class="riq"><h2>Società</h2><div class="grid">${campi(B.azienda, 'azienda')}</div></div>
      <div class="riq"><h2>Responsabile del progetto formativo</h2><div class="grid">${campi(B.rpf, 'rpf')}</div></div>
      <div class="riq"><h2>Laboratorio</h2><div class="grid">${campi(B.laboratorio, 'laboratorio')}</div></div>
      <p class="leg">Le modifiche sono salvate automaticamente nella bozza.</p>`);
    $$('[data-o]').forEach(x => x.oninput = () => { const t = x.dataset.t; B[x.dataset.o][x.dataset.k] = t === 'number' ? +x.value : t === 'array' ? x.value.split('·').map(v => v.trim()).filter(Boolean) : x.value; salvaBozza(); });
  };

  /* ───────── pubblicazione ───────── */
  const datiJs = () => `/* Dati del portale ASTRA Formazione – © 2026 dr. Jonathan D'Eugenio
   Aggiornati dall'Area autore il ${new Date().toLocaleString('it-IT')} */
window.ASTRA = ${JSON.stringify(B, null, 2)};
`;
  const b64 = s => btoa(unescape(encodeURIComponent(s)));
  const vPubblica = () => {
    const tok = leggi(KT, '');
    const diff = (() => {
      const r = [], idO = new Map(ORIG.corsi.map(c => [c.id, c])), idB = new Map(B.corsi.map(c => [c.id, c]));
      B.corsi.forEach(c => { const o = idO.get(c.id); if (!o) r.push(`Nuovo corso: ${c.id} – ${c.titolo}`); else if (JSON.stringify(o) !== JSON.stringify(c)) r.push(`Corso modificato: ${c.id}${o.prezzo !== c.prezzo ? ` (prezzo ${euro(o.prezzo)} → ${euro(c.prezzo)})` : ''}`); });
      ORIG.corsi.forEach(c => { if (!idB.has(c.id)) r.push(`Corso eliminato: ${c.id} – ${c.titolo}`); });
      if (JSON.stringify(ORIG.edizioni) !== JSON.stringify(B.edizioni)) r.push(`Calendario: ${B.edizioni.length} edizioni (prima ${ORIG.edizioni.length})`);
      if (JSON.stringify(ORIG.news) !== JSON.stringify(B.news)) r.push(`Notizie: ${B.news.length} (prima ${ORIG.news.length})`);
      ['azienda', 'rpf', 'laboratorio'].forEach(k => { if (JSON.stringify(ORIG[k]) !== JSON.stringify(B[k])) r.push(`Dati modificati: ${k}`); });
      return r;
    })();
    corpo(`<div class="riq"><h2>Riepilogo delle modifiche</h2>${diff.length ? `<ul>${diff.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '<p>Nessuna modifica rispetto al sito pubblicato.</p>'}
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="bt" id="ant">Anteprima sul sito</button><button class="bt" id="scarica">Scarica il file dei dati</button><label class="bt" style="display:inline-flex;align-items:center">Importa un file dei dati<input type="file" id="imp" accept=".js,.json" hidden></label><button class="bt e" id="scarta">Annulla tutte le modifiche</button></div></div>
      <div class="riq"><h2>Pubblicazione sul sito</h2>
        <p style="margin-top:0">La pubblicazione richiede un token personale GitHub dell'autore con permesso di scrittura sul repository del portale (<i style="font-style:normal">Contents: Read and write</i>). Il token è conservato solo su questo dispositivo.</p>
        <div class="grid"><label class="f s2">Token personale GitHub<input id="tok" type="password" autocomplete="off" value="${esc(tok)}" placeholder="github_pat_…"></label>
          <label class="f">Conservazione<select id="ric"><option value="1">Ricorda su questo dispositivo</option><option value="0">Solo per questa sessione</option></select></label>
          <div class="f" style="justify-content:flex-end"><button class="bt r" id="pub" ${diff.length ? '' : 'disabled'}>Pubblica sul sito</button></div></div>
        <div id="esito-p"></div>
        <p class="leg">Il sito si aggiorna entro pochi minuti dalla pubblicazione. I dati sono salvati sia nel ramo pubblicato (main) sia nel ramo dei sorgenti (sorgenti).</p></div>`);
    $('#ant').onclick = () => { window.ASTRA_ANTEPRIMA = clona(B); alert('Anteprima: le pagine del sito mostreranno la bozza fino al ricaricamento della pagina.'); Object.assign(window.ASTRA, clona(B)); location.hash = '#/catalogo'; };
    $('#scarica').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([datiJs()], { type: 'text/javascript' })); a.download = 'data.js'; a.click(); };
    $('#imp').onchange = async e => { const t = await e.target.files[0].text(); try { const w = {}; new Function('window', t)(w); if (!w.ASTRA || !w.ASTRA.corsi) throw 0; B = w.ASTRA; salvaBozza(); vPubblica(); } catch (er) { alert('Il file selezionato non è un file dei dati valido.'); } };
    $('#scarta').onclick = () => { if (confirm('Annullare tutte le modifiche non pubblicate?')) { B = clona(ORIG); salvaBozza(); vPubblica(); } };
    $('#pub').onclick = async () => {
      const t = $('#tok').value.trim(), out = $('#esito-p');
      if (!t) { out.innerHTML = '<div class="msg ko">Inserire il token personale GitHub.</div>'; return; }
      try { localStorage.removeItem(KT); sessionStorage.removeItem(KT); } catch (e) { }
      scrivi(KT, t, $('#ric').value === '1');
      $('#pub').disabled = true; out.innerHTML = '<div class="msg av">Pubblicazione in corso…</div>';
      const H = { Authorization: 'Bearer ' + t, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
      const contenuto = b64(datiJs()), esiti = [];
      try {
        for (const ramo of RAMI) {
          const g = await fetch(`https://api.github.com/repos/${REPO}/contents/${PERCORSO}?ref=${ramo}`, { headers: H });
          if (g.status === 404 && ramo !== 'main') { esiti.push(`${ramo}: ramo non disponibile, saltato`); continue; }
          if (!g.ok) throw new Error(`lettura ${ramo}: ${g.status} ${(await g.json().catch(() => ({}))).message || ''}`);
          const sha = (await g.json()).sha;
          const p = await fetch(`https://api.github.com/repos/${REPO}/contents/${PERCORSO}`, { method: 'PUT', headers: H, body: JSON.stringify({ message: 'Area autore: aggiornamento di corsi, prezzi e calendario', content: contenuto, sha, branch: ramo }) });
          if (!p.ok) throw new Error(`scrittura ${ramo}: ${p.status} ${(await p.json().catch(() => ({}))).message || ''}`);
          esiti.push(`${ramo}: aggiornato`);
        }
        ORIG = clona(B); salvaBozza();
        out.innerHTML = `<div class="msg ok">Pubblicazione completata (${esiti.map(esc).join('; ')}). Il sito mostrerà i nuovi dati entro pochi minuti.</div>`;
      } catch (er) {
        out.innerHTML = `<div class="msg ko">Pubblicazione non riuscita: ${esc(er.message)}. Verificare il token e i permessi; in alternativa scaricare il file dei dati.</div>`;
        $('#pub').disabled = false;
      }
    };
  };

  disegna();
};
