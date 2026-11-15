# copia nei corsi target le estensioni originali di altri corsi la cui ancora esiste nel target
import sys, os, json, re
sys.path.insert(0,'/tmp/claude-0/rip'); from est import _moduli
B='/home/claude/astra-portale/elearning/estensioni'
def titoli_est(c):
    t=set()
    for f in os.listdir(f'{B}/{c}'):
        if f.endswith('.json'):
            for s in json.load(open(f'{B}/{c}/{f}'))['schermate']: t.add(s.get('tit'))
    return t
for T in sys.argv[1:]:
    mods=_moduli(T); gia=titoli_est(T); n=0
    for S in sorted(os.listdir(B)):
        if S==T or not os.path.isdir(f'{B}/{S}'): continue
        for f in sorted(os.listdir(f'{B}/{S}')):
            if not f.endswith('.json') or '-Z-' in f or re.match(r'M\d-[SD]\d',f): continue
            E=json.load(open(f'{B}/{S}/{f}'))
            if not re.search(r'-(Z|N|R)\d', f) and not re.search(r'-Z\d', f): continue
            m=mods.get(E['dopo'])
            if not m: continue
            nuove=[s for s in E['schermate'] if s.get('tit') not in gia and s['t']!='testo' and s['t']!='grafico']
            if not nuove: continue
            json.dump({"dopo":E['dopo'],"schermate":nuove},open(f'{B}/{T}/{m}-Z-{S}-{f}','w'),ensure_ascii=False,indent=1)
            for s in nuove: gia.add(s.get('tit'))
            n+=1; print(T,'←',S,f,[s['tit'] for s in nuove])
    print(T,n,'file copiati')
