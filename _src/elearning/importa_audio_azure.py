"""Importa la narrazione generata con Azure (voce Giuseppe) e calcola i tempi delle frasi
© 2026 dr. Jonathan D'Eugenio – ASTRA S.r.l.
Uso: python3 importa_audio_azure.py LAV-GEN file_scaricato.json
Il file contiene {chiave_schermata: mp3_base64}. Per ogni schermata si salva un MP3 unico
(lettura fluida, senza tagli tra le frasi) e si ricavano gli istanti di inizio delle frasi
dalle pause del parlato, per sincronizzare sottotitoli e animazioni."""
import base64, hashlib, json, os, re, subprocess, sys

ID, SRC = sys.argv[1], sys.argv[2]
BASE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(BASE, 'audio-cache'); os.makedirs(CACHE, exist_ok=True)
VOCE = 'azure:it-IT-GiuseppeMultilingualNeural'

js = subprocess.run(['node', '-e', f"global.window={{}};eval(require('fs').readFileSync('{os.path.join(BASE,'corsi',ID,'corso.js')}','utf8'));process.stdout.write(JSON.stringify(window.CORSO))"], capture_output=True, text=True, check=True).stdout
C = json.loads(js)
testi = {}
for m in C['moduli']:
    for i, s in enumerate(m['schermate']):
        if s.get('nar'): testi[f"{m['id']}-{i}"] = s['nar']
tf = C['testFinale']
testi['TF-0'] = f"Si accede al test finale. Il test comprende {tf['domande']} domande estratte casualmente, con le risposte in ordine casuale. Il superamento richiede almeno il {tf['soglia']} per cento di risposte corrette. Sono disponibili {tf['tentativi']} tentativi."

def frasi(t): return [x.strip() for x in re.findall(r'[^.!?;]+[.!?;]*', t) if x.strip()]
def durata(f): return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], capture_output=True, text=True).stdout.strip())
def silenzi(f):
    e = subprocess.run(['ffmpeg', '-hide_banner', '-i', f, '-af', 'silencedetect=noise=-38dB:d=0.18', '-f', 'null', '-'], capture_output=True, text=True).stderr
    ini = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', e)]
    fin = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', e)]
    return list(zip(ini, fin))

dati = json.load(open(SRC))
fa = os.path.join(BASE, 'corsi', ID, 'audio.json')
out = json.load(open(fa)) if os.path.exists(fa) else {'voce': VOCE, 'schermate': {}}  # si aggiungono le voci nuove a quelle già presenti
for k, b64 in dati.items():
    raw = base64.b64decode(b64)
    h = 'gz-' + hashlib.sha1(raw).hexdigest()[:14]
    f = os.path.join(CACHE, h + '.mp3')
    open(f, 'wb').write(raw)
    d = durata(f)
    fr = frasi(testi.get(k, ''))
    n = len(fr)
    # pause interne (esclusi inizio e fine), le n-1 più lunghe separano le frasi
    sil = [(a, b) for a, b in silenzi(f) if a > 0.3 and b < d - 0.3]
    scelte = sorted(sorted(sil, key=lambda x: x[1] - x[0], reverse=True)[:max(0, n - 1)])
    if len(scelte) == n - 1:
        inizi = [0.0] + [round(max(0, b - 0.08), 2) for a, b in scelte]
    else:  # ripiego proporzionale al numero di caratteri
        tot = sum(len(x) for x in fr) or 1; acc = 0; inizi = []
        for x in fr: inizi.append(round(d * acc / tot, 2)); acc += len(x)
    out['schermate'][k] = {'f': h + '.mp3', 'd': round(d, 2), 'frasi': [{'t': t, 's': s} for t, s in zip(fr, inizi)]}
json.dump(out, open(os.path.join(BASE, 'corsi', ID, 'audio.json'), 'w'), ensure_ascii=False)
tot = sum(v['d'] for v in out['schermate'].values())
print(f"{VOCE}: {len(out['schermate'])} schermate, {tot/60:.1f} minuti di narrazione")
