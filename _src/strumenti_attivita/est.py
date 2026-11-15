import json, os
BASE='/home/claude/astra-portale/elearning/estensioni'
def E(corso, nome, dopo, sch):
    os.makedirs(f'{BASE}/{corso}', exist_ok=True)
    json.dump({"dopo": dopo, "schermate": sch}, open(f'{BASE}/{corso}/{nome}.json','w'), ensure_ascii=False, indent=1)
def CL(tit, lead, colonne, schede, nar, rif=""):
    return {"t":"classifica","tit":tit,"lead":lead,"colonne":colonne,"schede":[[a,b,c,d if d else "Corretto."] for a,b,c,d in [x if len(x)==4 else (x[0],x[1],x[2],None) for x in schede]],"nar":nar,"rif":rif}
def SC(tit, scena, decisioni, chiusura, nar, rif=""):
    return {"t":"scenario","tit":tit,"scena":scena,"decisioni":[{"dom":d,"opz":o} for d,o in decisioni],"chiusura":chiusura,"nar":nar,"rif":rif}
def ES(tit, lead, passi, nar, rif=""):
    return {"t":"esempio","tit":tit,"lead":lead,"passi":passi,"nar":nar,"rif":rif}
def AP(tit, lead, voci, campo, esempio, nar, mn=3):
    return {"t":"applica","tit":tit,"lead":lead,"voci":voci,"campo":campo,"esempio":esempio,"min":mn,"nar":nar}
def VF(tit, voci, nar, rif=""):
    return {"t":"vf","tit":tit,"voci":voci,"nar":nar,"rif":rif}
def CA(tit, scena, domanda, opz, nar, rif=""):
    return {"t":"caso","tit":tit,"scena":scena,"domanda":domanda,"opz":opz,"nar":nar,"rif":rif}
def LB(tit, lead, dossier, compiti, nar, rif="", chiusura=None):
    d={"t":"laboratorio","tit":tit,"lead":lead,"dossier":dossier,"compiti":[{"q":c[0],"min":c[1],"modello":c[2],"criteri":c[3],**({"traccia":c[4]} if len(c)>4 and c[4] else {}),**({"minc":c[5]} if len(c)>5 else {})} for c in compiti],"nar":nar,"rif":rif}
    if chiusura: d["chiusura"]=chiusura
    return d
import json as _json, os as _os
_CACHE={}
def _moduli(corso):
    if corso not in _CACHE:
        s=open(f'/home/claude/astra-portale/elearning/corsi/{corso}/corso.js',encoding='utf8').read()
        s=s[s.index('window.CORSO = ')+len('window.CORSO = '):].rstrip().rstrip(';')
        C=_json.loads(s); _CACHE[corso]={}
        for m in C['moduli']:
            for x in m['schermate']: _CACHE[corso].setdefault(x.get('tit'),m['id'])
    return _CACHE[corso]
def EA(corsi, nome, dopo, sch):
    """scrive l'estensione in ogni corso che contiene l'ancora, nel modulo corretto"""
    for c in corsi:
        m=_moduli(c).get(dopo)
        if m: E(c, f'{m}-{nome}', dopo, sch)
