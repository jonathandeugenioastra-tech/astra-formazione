/* Generazione della narrazione con voce neurale Azure AI Speech – © 2026 dr. Jonathan D'Eugenio
   Uso:  AZURE_SPEECH_KEY=... AZURE_SPEECH_REGION=westeurope node tts_azure.js LAV-GEN [voce]
   Voce predefinita: it-IT-IsabellaMultilingualNeural (alternative: it-IT-GiuseppeMultilingualNeural, it-IT-DiegoNeural, it-IT-IsabellaNeural)
   Una traccia MP3 per frase (sincronizzazione esatta di sottotitoli e animazioni), con cache:
   le frasi già sintetizzate non vengono rigenerate (nessun costo aggiuntivo). */
const fs = require('fs'), path = require('path'), crypto = require('crypto'), { execFileSync } = require('child_process');
const id = process.argv[2] || 'LAV-GEN', VOCE = process.argv[3] || process.env.AZURE_VOICE || 'it-IT-IsabellaMultilingualNeural';
const KEY = process.env.AZURE_SPEECH_KEY, REG = process.env.AZURE_SPEECH_REGION || 'westeurope';
const BASE = __dirname, CACHE = path.join(BASE, 'audio-cache'), OUTF = path.join(BASE, 'corsi', id, 'audio.json');
fs.mkdirSync(CACHE, { recursive: true });
global.window = {}; eval(fs.readFileSync(path.join(BASE, 'corsi', id, 'corso.js'), 'utf8')); const C = window.CORSO;

/* pronuncia: espansioni per una lettura naturale (solo per la voce, non per i testi a video) */
const PRON = [[/\bD\.lgs\.?/g, 'decreto legislativo'], [/\bart\.\s?/gi, 'articolo '], [/\bc\.\s?(\d)/g, 'comma $1'], [/\bINAIL\b/g, 'Inàil'], [/\bISO\b/g, 'iso'], [/\bUNI\b/g, 'uni'], [/\bILO\b/g, 'ilo'], [/\bCE\b/g, 'ci e']];
const pron = t => PRON.reduce((s, [a, b]) => s.replace(a, b), t);
const xml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const frasi = t => (t.match(/[^.!?;]+[.!?;]*/g) || [t]).map(s => s.trim()).filter(Boolean);
const durata = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();

const sintetizza = async (testo, file) => {
  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="it-IT"><voice name="${VOCE}"><mstts:express-as style="narration-professional"><prosody rate="-4%">${xml(pron(testo))}</prosody></mstts:express-as></voice></speak>`;
  for (let t = 1; t <= 4; t++) {
    const r = await fetch(`https://${REG}.tts.speech.microsoft.com/cognitiveservices/v1`, { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': KEY, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-48khz-192kbitrate-mono-mp3', 'User-Agent': 'ASTRA-elearning' }, body: ssml });
    if (r.ok) { fs.writeFileSync(file, Buffer.from(await r.arrayBuffer())); return; }
    if (r.status === 429 || r.status >= 500) { await new Promise(s => setTimeout(s, 1500 * t)); continue; }
    throw new Error(`Azure ${r.status}: ${await r.text()}`);
  }
  throw new Error('Azure: troppi tentativi falliti');
};

(async () => {
  if (!KEY) { console.error('Manca AZURE_SPEECH_KEY'); process.exit(1); }
  const out = { voce: VOCE, schermate: {} }; let car = 0, nuove = 0;
  const lista = [];
  C.moduli.forEach(m => m.schermate.forEach((s, i) => lista.push([`${m.id}-${i}`, s.nar])));
  lista.push(['TF-0', `Sei arrivato al test finale. Il test comprende ${C.testFinale.domande} domande estratte casualmente, con risposte in ordine casuale. Per superarlo occorre rispondere correttamente ad almeno il ${C.testFinale.soglia} per cento delle domande. Hai a disposizione ${C.testFinale.tentativi} tentativi.`]);
  for (const [k, nar] of lista) {
    if (!nar) continue;
    out.schermate[k] = [];
    for (const f of frasi(nar)) {
      const h = crypto.createHash('sha1').update(VOCE + '|' + pron(f)).digest('hex').slice(0, 16), file = path.join(CACHE, h + '.mp3');
      if (!fs.existsSync(file)) { await sintetizza(f, file); nuove++; car += f.length; process.stdout.write('.'); }
      out.schermate[k].push({ f: h + '.mp3', d: +durata(file).toFixed(2), t: f });
    }
  }
  fs.writeFileSync(OUTF, JSON.stringify(out));
  const tot = Object.values(out.schermate).flat().reduce((a, x) => a + x.d, 0);
  console.log(`\nVoce ${VOCE}: ${nuove} frasi nuove (${car} caratteri fatturabili), narrazione totale ${(tot / 60).toFixed(1)} min → ${OUTF}`);
})().catch(e => { console.error(e.message); process.exit(1); });
