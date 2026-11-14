"""Dispensa per i corsisti (aula e videoconferenza) dal contenuto del corso – © 2026 dr. Jonathan D'Eugenio
Uso: python3 genera_dispensa.py ID [ID ...]"""
import json, subprocess, sys, os, re, io
import reportlab.rl_config as _rc
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
pdfmetrics.registerFont(TTFont('EM', '/root/.fonts/ERASMD.TTF')); pdfmetrics.registerFont(TTFont('EB', '/root/.fonts/ERASBD.TTF'))
for b, i, n in ((0, 0, 'EM'), (1, 0, 'EB'), (0, 1, 'EM'), (1, 1, 'EB')): addMapping('EM', b, i, n); addMapping('em', b, i, n)
_rc.canvas_basefontname = 'EM'
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
                                Image, KeepTogether, PageBreak, ListFlowable, ListItem, NextPageTemplate, CondPageBreak)
from PIL import Image as PI
ROOT = '/home/claude/astra-portale'
pdfmetrics.registerFont(TTFont('EM', '/root/.fonts/ERASMD.TTF')); _rc.canvas_basefontname = 'EM'; pdfmetrics.registerFont(TTFont('EB', '/root/.fonts/ERASBD.TTF'))
PET, ROS, CHI, TX, GR = colors.HexColor('#0F3C47'), colors.HexColor('#C81F26'), colors.HexColor('#E9F2F4'), colors.HexColor('#13232A'), colors.HexColor('#5A6B72')
st = lambda n, **k: ParagraphStyle(n, **{'fontName': 'EM', 'fontSize': 9.5, 'leading': 13.5, 'textColor': TX, 'alignment': TA_JUSTIFY, **k})
S_BODY = st('b'); S_LEAD = st('l', fontName='EB', fontSize=10, leading=14, textColor=PET)
S_H1 = st('h1', fontName='EB', fontSize=16, leading=20, textColor=PET, alignment=TA_LEFT, spaceAfter=2)
S_H1S = st('h1s', fontSize=10.5, leading=14, textColor=GR, alignment=TA_LEFT, spaceAfter=8)
S_H2 = st('h2', fontName='EB', fontSize=12, leading=15, textColor=PET, alignment=TA_LEFT, spaceBefore=10, spaceAfter=4)
S_RIF = st('r', fontSize=8.5, leading=11.5, textColor=GR, alignment=TA_LEFT)
S_BOX = st('x', fontSize=9, leading=12.5)
S_TAB = st('t', fontSize=8.75, leading=11.5, alignment=TA_LEFT)
S_TABB = st('tb', fontName='EB', fontSize=8.75, leading=11.5, alignment=TA_LEFT, textColor=colors.white)
SUB = str.maketrans({'₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'})
def E(s):
    s = (str(s) if s is not None else '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('→', '–')
    return re.sub(r'[₀-₉]+', lambda m: '<sub>' + m.group(0).translate(SUB) + '</sub>', s)
def B(t): return f'<font name="EB">{E(t)}</font>'
FOTO_DIR = [ROOT + '/sito/img', ROOT + '/_interno/foto_utente']
def foto(nome, w):
    if not nome or nome == '-': return None
    for d in FOTO_DIR:
        p = f'{d}/{nome}-2560.jpg'
        if os.path.exists(p):
            im = PI.open(p).convert('RGB'); r = im.height / im.width; im.thumbnail((1400, 1400)); b = io.BytesIO(); im.save(b, 'JPEG', quality=85); b.seek(0)
            return Image(b, width=w, height=w * r)
    return None
def box(contenuto, fondo=CHI, bordo=PET):
    t = Table([[contenuto]], colWidths=[170 * mm]); t.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), fondo), ('LINEBEFORE', (0, 0), (0, -1), 3, bordo), ('LEFTPADDING', (0, 0), (-1, -1), 8), ('RIGHTPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 6)])); return t
def tabella(righe, larg, testa=True):
    dati = [[Paragraph(E(c), S_TABB if (testa and i == 0) else S_TAB) for c in r] for i, r in enumerate(righe)]
    t = Table(dati, colWidths=larg, repeatRows=1 if testa else 0)
    s = [('GRID', (0, 0), (-1, -1), 0.25, colors.HexColor('#9FB3BA')), ('VALIGN', (0, 0), (-1, -1), 'TOP'), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]
    if testa: s.append(('BACKGROUND', (0, 0), (-1, 0), PET))
    t.setStyle(TableStyle(s)); return t
def elenco(voci, num=True):
    return ListFlowable([ListItem(Paragraph(v, S_BODY), leftIndent=14, bulletFontName='EB') for v in voci], bulletType='1' if num else 'bullet', bulletFontName='EB', bulletFontSize=9, bulletColor=ROS, leftIndent=14, start=1 if num else None)
SOL = []
def schermata(s, nf, out, nmod):
    t = s['t']; tit = s.get('tit', '')
    if t in ('copertina', 'sezione'): return
    blocco = [Paragraph(E(tit), S_H2)]
    rif = s.get('rif') or s.get('art')
    if t in ('testo', 'grafico'):
        f = foto(nf, 62 * mm) if nf and nf != '-' else None
        testo = []
        if s.get('lead') and not re.match(r'^(Selezionare|Modificare|Spostare|Esplorare)', s['lead']): testo.append(Paragraph(E(s['lead']), S_LEAD)); testo.append(Spacer(0, 3))
        if s.get('punti'): testo.append(elenco([E(p) for p in s['punti']]))
        if t == 'grafico':
            g = s['grafico']
            nb = lambda x: ('%g' % x).replace('.', ',') if isinstance(x, (int, float)) else str(x)
            W = (lambda a, b: a if not f else b)
            if g['tipo'] == 'flusso':
                tempi = any(p.get('tempo') for p in g.get('passi', []))
                testo.append(tabella([['Fase', 'Contenuto'] + (['Termine'] if tempi else [])] + [[f'{i+1}. ' + p.get('nome', ''), p.get('testo', '')] + ([p.get('tempo') or ''] if tempi else []) for i, p in enumerate(g.get('passi', []))],
                                     (W([40 * mm, 95 * mm, 35 * mm], [28 * mm, 54 * mm, 24 * mm]) if tempi else W([45 * mm, 125 * mm], [32 * mm, 74 * mm]))))
            elif g['tipo'] == 'soglie':
                prec = g.get('min', 0); righe = [['Zona', 'Intervallo' + (f' ({g["unita"]})' if g.get('unita') else ''), 'Significato e misure']]
                for z in g.get('zone', []): righe.append([z.get('nome', ''), f'{nb(prec)} – {nb(z.get("fino", ""))}', z.get('testo', '')]); prec = z.get('fino', prec)
                testo.append(Paragraph(B('Grandezza: ') + E(g.get('variabile', '')), S_BODY)); testo.append(tabella(righe, W([35 * mm, 30 * mm, 105 * mm], [24 * mm, 22 * mm, 60 * mm])))
            elif g['tipo'] == 'intervalli':
                testo.append(Paragraph(B('Grandezza: ') + E(g.get('unita', '')), S_BODY))
                testo.append(tabella([['Voce', 'Da', 'A', 'Nota']] + [[v.get('nome', ''), nb(v.get('da', '')), nb(v.get('a', '')), v.get('testo', '')] for v in g.get('voci', [])], W([45 * mm, 15 * mm, 15 * mm, 95 * mm], [28 * mm, 12 * mm, 12 * mm, 54 * mm])))
            elif g['tipo'] == 'calcolo':
                if g.get('formula_testo'): testo.append(box(Paragraph(B('Formula: ') + E(g['formula_testo']), S_BOX)) if not f else Paragraph(B('Formula: ') + E(g['formula_testo']), S_BODY))
                testo.append(tabella([['Dato di ingresso', 'Valore di esempio', 'Campo di variazione']] + [[i.get('nome', ''), f'{nb(i.get("val", ""))} {i.get("unita", "")}', f'{nb(i.get("min", ""))} – {nb(i.get("max", ""))} {i.get("unita", "")}'] for i in g.get('ingressi', [])], W([80 * mm, 40 * mm, 50 * mm], [50 * mm, 28 * mm, 28 * mm])))
                testo.append(Paragraph('Esercizio: ripetere il calcolo variando un dato di ingresso alla volta e annotare come cambia «' + E(g.get('risultato', 'il risultato')) + '».', S_BODY))
        if f:
            tb = Table([[testo, f]], colWidths=[106 * mm, 64 * mm]); tb.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (0, 0), 6)])); blocco.append(tb)
        else: blocco += testo
    elif t == 'obiettivi' or t == 'sintesi': blocco.append(elenco([E(v) for v in s['voci']], num=(t == 'obiettivi')))
    elif t == 'definizioni': blocco.append(tabella([['Termine', 'Definizione']] + [[v[1], v[2]] for v in s['voci']], [45 * mm, 125 * mm]))
    elif t in ('figure', 'guida'): blocco.append(tabella([['Voce', 'Descrizione']] + [[v[1], v[2]] for v in s['voci']], [45 * mm, 125 * mm]))
    elif t == 'processo': blocco.append(tabella([['Fase', 'Azione']] + [[f'{i+1}. {p[0]}', p[1]] for i, p in enumerate(s['passi'])], [40 * mm, 130 * mm]))
    elif t == 'confronto': blocco.append(tabella([[s['sx']['tit'], s['dx']['tit']]] + [[a, b] for a, b in zip(s['sx']['voci'] + [''] * 20, s['dx']['voci'] + [''] * 20) if a or b], [85 * mm, 85 * mm]))
    elif t == 'articolo':
        blocco.append(Paragraph(B(s.get('art', '')) + (' · ' + E(s['sott']) if s.get('sott') else ''), S_BODY))
        blocco.append(tabella([['', 'Contenuto']] + [[c[0], c[1]] for c in s.get('commi', [])], [12 * mm, 158 * mm]))
        if s.get('nota'): blocco.append(box(Paragraph(E(s['nota']), S_BOX)))
    elif t in ('gerarchia', 'ordina', 'iceberg'):
        blocco.append(elenco([E(v) for v in (s.get('voci') or s.get('livelli') or [])]))
        if s.get('nota') or s.get('testo'): blocco.append(box(Paragraph(E(s.get('nota') or s.get('testo')), S_BOX)))
    elif t == 'diritto': blocco.append(box(Paragraph(E(s.get('testo', '')), S_BOX)))
    elif t == 'matrice':
        blocco.append(Paragraph('Il rischio si stima come prodotto R = P × D, con probabilità P e magnitudo del danno D su scala da 1 a 4.', S_BODY))
        blocco.append(tabella([['P \\ D'] + [f'{j+1} {d}' for j, d in enumerate(s['D'])]] + [[f'{4-i} {s["P"][3-i]}'] + [str((4 - i) * (j + 1)) for j in range(4)] for i in range(4)], [40 * mm] + [32.5 * mm] * 4))
    elif t == 'pittogrammi':
        blocco.append(tabella([['Famiglia', 'Forma e colore', 'Esempi']] + [[g['nome'], g['forma'], '; '.join(f'{c} {n}' for c, n in g['codici'])] for g in s['gruppi']], [30 * mm, 50 * mm, 90 * mm]))
    elif t == 'caso':
        blocco.append(box(Paragraph(B('Scenario. ') + E(s['scena']), S_BOX), fondo=colors.HexColor('#FFF6E0'), bordo=colors.HexColor('#F2B300')))
        blocco.append(Spacer(0, 4)); blocco.append(Paragraph(B(s['domanda']), S_BODY))
        blocco.append(ListFlowable([ListItem(Paragraph(E(o[0]), S_BODY)) for o in s['opz']], bulletType='A', bulletFontName='EB', leftIndent=14))
        SOL.append((tit, [f'Risposta corretta: {chr(65+i)}) {o[0]}. {o[2]}' for i, o in enumerate(s['opz']) if o[1]] + ([s['appro']] if s.get('appro') else [])))
    elif t == 'vf':
        blocco.append(Paragraph(E(s.get('sott', 'Qualificare ciascuna affermazione come vera o falsa')), S_BODY))
        blocco.append(tabella([['Affermazione', 'V', 'F']] + [[v[0], '', ''] for v in s['voci']], [150 * mm, 10 * mm, 10 * mm]))
        SOL.append((tit, [f'{i+1}. {v[2]}' for i, v in enumerate(s['voci'])]))
    elif t == 'abbina':
        import random; r = random.Random(tit); dx = [c[1] for c in s['coppie']]; r.shuffle(dx)
        blocco.append(Paragraph(E(s.get('sott', 'Associare gli elementi')), S_BODY))
        blocco.append(tabella([['Situazione', 'Azione (da associare)']] + [[f'{i+1}. {c[0]}', f'{chr(65+i)}) {dx[i]}'] for i, c in enumerate(s['coppie'])], [85 * mm, 85 * mm]))
        SOL.append((tit, [f'{i+1} → {chr(65+dx.index(c[1]))}) {c[1]}' for i, c in enumerate(s['coppie'])]))
    elif t == 'verifica':
        blocco.append(Paragraph(f'Verifica di apprendimento: {len(s["domande"])} domande; per il superamento occorrono almeno {s.get("soglia", "")} risposte corrette.', S_BODY))
        for i, d in enumerate(s['domande']):
            blocco.append(KeepTogether([Paragraph(B(f'{i+1}. ') + E(d[0]), S_BODY), ListFlowable([ListItem(Paragraph(E(o), S_BODY)) for o in d[1]], bulletType='a', bulletFontName='EM', bulletFontSize=9, leftIndent=14)]))
        SOL.append((tit, [f'{i+1}: {chr(97+d[2])}) {d[1][d[2]]}' + (f' – {d[3]}' if len(d) > 3 and d[3] else '') for i, d in enumerate(s['domande'])]))
    else:
        if s.get('voci'): blocco.append(elenco([E(v if isinstance(v, str) else ' – '.join(v[1:])) for v in s['voci']]))
    if s.get('appro') and t not in ('caso',): blocco.append(Spacer(0, 4)); blocco.append(box(Paragraph(B('Approfondimento. ') + E(s['appro']), S_BOX)))
    if rif and t != 'articolo': blocco.append(Spacer(0, 3)); blocco.append(Paragraph(B('Riferimenti: ') + E(rif), S_RIF))
    out.append(CondPageBreak(45 * mm)); out.append(KeepTogether(blocco[:3])); out += blocco[3:]
def genera(id):
    global SOL; SOL = []
    d = json.loads(subprocess.check_output(['node', ROOT + '/formazione/dump_corso.js', id])); C = d['C']
    f = f'{ROOT}/formazione/dispense/3_Dispensa_{id}.pdf'
    def pagina(c, doc):
        c.saveState()
        if doc.page > 1:
            c.setFont('EB', 8); c.setFillColor(PET); c.drawString(20 * mm, 287 * mm, 'ASTRA Academy · Dispensa del corso'); c.setFont('EM', 8); c.drawRightString(190 * mm, 287 * mm, C['titolo'][:95])
            c.setStrokeColor(ROS); c.setLineWidth(0.8); c.line(20 * mm, 285 * mm, 190 * mm, 285 * mm)
        c.setFont('EM', 8); c.setFillColor(GR); c.drawString(20 * mm, 10 * mm, '© 2026 dr. Jonathan D\'Eugenio · ASTRA S.r.l.')
        if doc.page > 1: c.drawRightString(190 * mm, 10 * mm, f'Pag. {doc.page}')
        c.restoreState()
    doc = BaseDocTemplate(f, pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=18 * mm, bottomMargin=16 * mm, title=f'Dispensa – {C["titolo"]}', author="dr. Jonathan D'Eugenio")
    doc.addPageTemplates([PageTemplate('p', [Frame(20 * mm, 16 * mm, 170 * mm, 263 * mm, id='f')], onPage=pagina)])
    out = []
    logo = ROOT + '/loghi/astra_logo_4K.png'
    if os.path.exists(logo): im = PI.open(logo); out.append(Image(logo, width=60 * mm, height=60 * mm * im.height / im.width, hAlign='LEFT'))
    out += [Spacer(0, 30 * mm), Paragraph('DISPENSA DEL CORSO', st('k', fontName='EB', fontSize=10, textColor=ROS, alignment=TA_LEFT)), Spacer(0, 3),
            Paragraph(E(C['titolo']), st('tt', fontName='EB', fontSize=24, leading=29, textColor=PET, alignment=TA_LEFT)), Spacer(0, 6)]
    if C.get('sottotitolo'): out.append(Paragraph(E(C['sottotitolo']), S_H1S))
    out.append(Paragraph(B('Durata: ') + f'{C.get("ore", "")} ore' + ('  ·  ' + B('Riferimenti: ') + E(C['rif']) if C.get('rif') else ''), S_RIF))
    out += [Spacer(0, 12), box(Paragraph('Materiale informativo e formativo consegnato ai partecipanti. Riporta, modulo per modulo, i contenuti trattati in aula o in videoconferenza, le esercitazioni da svolgere e, in appendice, le relative soluzioni.', S_BOX)), PageBreak()]
    out.append(Paragraph('Indice dei moduli', S_H1)); out.append(elenco([E(f'{m.get("titolo", m["id"])}') + f' · {m.get("min", "")} min' for m in C['moduli']]))
    for nm, m in enumerate(C['moduli']):
        out.append(PageBreak()); out.append(Paragraph(f'Modulo {nm+1}', st('mk', fontName='EB', fontSize=9, textColor=ROS, alignment=TA_LEFT)))
        out.append(Paragraph(E(m.get('titolo', '')), S_H1))
        fm = foto(d['mod'].get(m['id']), 170 * mm)
        if fm: fm._restrictSize(170 * mm, 70 * mm); out.append(fm); out.append(Spacer(0, 6))
        for si, s in enumerate(m['schermate']): schermata(s, d['sch'].get(f'{m["id"]}-{si}'), out, nm)
    if SOL:
        out.append(PageBreak()); out.append(Paragraph('Appendice · Soluzioni delle esercitazioni', S_H1))
        for tit, righe in SOL: out.append(KeepTogether([Paragraph(E(tit), S_H2)] + [Paragraph(E(r), S_BODY) for r in righe]))
    from reportlab.pdfgen.canvas import Canvas
    import functools
    doc.build(out, canvasmaker=functools.partial(Canvas, initialFontName='EM', initialFontSize=9)); return f
for id in sys.argv[1:]: print(genera(id))
