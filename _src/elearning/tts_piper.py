"""Narrazione del corso con voce neurale libera Piper (modello it_IT-paola-medium)
© 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l.
Uso: python3 tts_piper.py LAV-GEN
Genera una traccia MP3 per frase (stesso formato di tts_azure.js: corsi/<ID>/audio.json),
con cache: le frasi già sintetizzate non vengono rigenerate."""
import hashlib, json, os, re, subprocess, sys, wave, tempfile
from piper import PiperVoice
from piper.config import SynthesisConfig

ID = sys.argv[1] if len(sys.argv) > 1 else 'LAV-GEN'
BASE = os.path.dirname(os.path.abspath(__file__))
MODELLO = os.path.join(BASE, 'voce', 'it_IT-paola-medium.onnx')
VOCE = 'piper:it_IT-paola-medium'
CACHE = os.path.join(BASE, 'audio-cache'); os.makedirs(CACHE, exist_ok=True)

# lettura del contenuto del corso (file JavaScript con window.CORSO = {...})
js = subprocess.run(['node', '-e', f"global.window={{}};eval(require('fs').readFileSync('{os.path.join(BASE,'corsi',ID,'corso.js')}','utf8'));process.stdout.write(JSON.stringify(window.CORSO))"], capture_output=True, text=True, check=True).stdout
C = json.loads(js)

PRON = [(r'\bD\.lgs\.?', 'decreto legislativo'), (r'\bart\.\s?', 'articolo '), (r'\bc\.\s?(\d)', r'comma \1'),
        (r'\bINAIL\b', 'Inàil'), (r'\bISO\b', 'iso'), (r'\bUNI\b', 'uni'), (r'\bILO\b', 'ilo'), (r'\bCE\b', 'ci e'),
        (r'\bRSPP\b', 'erre esse pi pi'), (r'\bASPP\b', 'a esse pi pi'), (r'\bRLST\b', 'erre elle esse ti'), (r'\bRLS\b', 'erre elle esse'),
        (r'\bDVR\b', 'di vu erre'), (r'\bDPI\b', 'di pi i'), (r'\bASL\b', 'a esse elle'), (r'\bSPP\b', 'esse pi pi'), (r'\bOMS\b', 'o emme esse'),
        (r'\bnear miss\b', 'nir miss'), (r'\be-learning\b', 'i lerning')]
def pron(t):
    for a, b in PRON: t = re.sub(a, b, t)
    return t
def frasi(t): return [s.strip() for s in re.findall(r'[^.!?;]+[.!?;]*', t) if s.strip()]

voce = PiperVoice.load(MODELLO)
cfg = SynthesisConfig(length_scale=1.06, noise_scale=0.62, noise_w_scale=0.75)
def durata(f): return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], capture_output=True, text=True).stdout.strip())

lista = []
for m in C['moduli']:
    for i, s in enumerate(m['schermate']): lista.append((f"{m['id']}-{i}", s.get('nar', '')))
tf = C['testFinale']
lista.append(('TF-0', f"Sei arrivato al test finale. Il test comprende {tf['domande']} domande estratte casualmente, con risposte in ordine casuale. Per superarlo occorre rispondere correttamente ad almeno il {tf['soglia']} per cento delle domande. Hai a disposizione {tf['tentativi']} tentativi."))

out = {'voce': VOCE, 'schermate': {}}; nuove = 0
for k, nar in lista:
    if not nar: continue
    out['schermate'][k] = []
    for f in frasi(nar):
        h = hashlib.sha1((VOCE + '|' + pron(f)).encode()).hexdigest()[:16]
        mp3 = os.path.join(CACHE, h + '.mp3')
        if not os.path.exists(mp3):
            with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp: wavp = tmp.name
            with wave.open(wavp, 'wb') as w: voce.synthesize_wav(pron(f), w, syn_config=cfg)
            # pulizia: silenzi agli estremi, equalizzazione leggera, normalizzazione del volume (−16 LUFS)
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wavp, '-af',
                            'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,highpass=f=70,equalizer=f=3000:t=q:w=1:g=2,loudnorm=I=-16:TP=-1.5:LRA=7',
                            '-ar', '44100', '-ac', '1', '-b:a', '112k', mp3], check=True)
            os.remove(wavp); nuove += 1
            print('.', end='', flush=True)
        out['schermate'][k].append({'f': h + '.mp3', 'd': round(durata(mp3), 2), 't': f})
json.dump(out, open(os.path.join(BASE, 'corsi', ID, 'audio.json'), 'w'), ensure_ascii=False)
tot = sum(x['d'] for v in out['schermate'].values() for x in v)
print(f"\n{VOCE}: {nuove} frasi nuove, narrazione totale {tot/60:.1f} min")
