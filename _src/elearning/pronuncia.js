/* Pronuncia per la sintesi vocale: sigle lette per esteso (singolare/plurale, articoli adeguati) e termini
   da pronunciare in modo naturale. Si applica solo alla voce; testi a video e sottotitoli mantengono le sigle.
   © 2026 dr. Jonathan D'Eugenio */
// sigla: [genere, singolare, plurale, numero predefinito senza articolo]
const SIGLE = {
  RSPP: ['m', 'responsabile del servizio di prevenzione e protezione', 'responsabili del servizio di prevenzione e protezione', 's'],
  ASPP: ['m', 'addetto al servizio di prevenzione e protezione', 'addetti al servizio di prevenzione e protezione', 'p'],
  RLST: ['m', 'rappresentante dei lavoratori per la sicurezza territoriale', 'rappresentanti dei lavoratori per la sicurezza territoriali', 's'],
  RLS: ['m', 'rappresentante dei lavoratori per la sicurezza', 'rappresentanti dei lavoratori per la sicurezza', 's'],
  DVR: ['m', 'documento di valutazione dei rischi', 'documenti di valutazione dei rischi', 's'],
  DUVRI: ['m', 'documento unico di valutazione dei rischi da interferenze', 'documenti unici di valutazione dei rischi da interferenze', 's'],
  DPI: ['m', 'dispositivo di protezione individuale', 'dispositivi di protezione individuale', 'p'],
  ASL: ['f', 'azienda sanitaria locale', 'aziende sanitarie locali', 'p'],
  AUA: ['f', 'autorizzazione unica ambientale', 'autorizzazioni uniche ambientali', 's'],
  AIA: ['f', 'autorizzazione integrata ambientale', 'autorizzazioni integrate ambientali', 's'],
  PMI: ['f', 'piccola o media impresa', 'piccole e medie imprese', 'p'],
  SUAP: ['m', 'sportello unico per le attività produttive', 'sportelli unici per le attività produttive', 's'],
  MUD: ['m', 'modello unico di dichiarazione ambientale', 'modelli unici di dichiarazione ambientale', 's'],
  SDS: ['f', 'scheda di dati di sicurezza', 'schede di dati di sicurezza', 's'],
  VIA: ['f', 'valutazione di impatto ambientale', 'valutazioni di impatto ambientale', 's'],
  VAS: ['f', 'valutazione ambientale strategica', 'valutazioni ambientali strategiche', 's']
};
const AP = "['’]";
// preposizione articolata → [preposizione semplice, numero]
const PRE = { "l": ['', 's'], 'il': ['', 's'], 'lo': ['', 's'], 'la': ['', 's'], 'i': ['', 'p'], 'gli': ['', 'p'], 'le': ['', 'p'],
  'un': ['un', 's'], 'uno': ['un', 's'], 'una': ['un', 's'],
  ...Object.fromEntries(['di', 'a', 'da', 'in', 'su'].flatMap(p => { const b = { di: 'de', a: 'a', da: 'da', in: 'ne', su: 'su' }[p];
    return [[b + 'll', [p, 's']], [b + 'l', [p, 's']], [b + 'llo', [p, 's']], [b + 'lla', [p, 's']], [b + 'i', [p, 'p']], [b + 'gli', [p, 'p']], [b + 'lle', [p, 'p']]]; })) };
const art = (prep, num, gen, parola) => {
  const voc = /^[aeiouàèéìòù]/i.test(parola), sz = /^(s[^aeiou]|z|gn|ps|x)/i.test(parola);
  if (prep === 'un') return gen === 'f' ? (voc ? "un'" : 'una ') : (sz ? 'uno ' : 'un ');
  let a = num === 'p' ? (gen === 'f' ? 'le' : (voc || sz ? 'gli' : 'i')) : (voc ? "l'" : gen === 'f' ? 'la' : sz ? 'lo' : 'il');
  if (!prep) return a.endsWith("'") ? a : a + ' ';
  const b = { di: 'de', a: 'a', da: 'da', in: 'ne', su: 'su' }[prep];
  const fuso = a === 'il' ? b + 'l' : a === 'i' ? b + 'i' : b + (a.startsWith('l') ? 'l' + a : a);
  return fuso.endsWith("'") ? fuso : fuso + ' ';
};
const SPECIALI = [[/\bRSPP e ASPP\b/g, 'responsabili e addetti del servizio di prevenzione e protezione'], [/\bRSPP e (gli )?ASPP\b/g, 'responsabili e addetti del servizio di prevenzione e protezione'],
  [/\bregolamento DPI\b/g, 'regolamento sui dispositivi di protezione individuale'], [/\bdatori di lavoro RSPP\b/g, 'datori di lavoro che svolgono i compiti del servizio di prevenzione e protezione'],
  [/\bdatore di lavoro RSPP\b/g, 'datore di lavoro che svolge i compiti del servizio di prevenzione e protezione']];
const pronuncia = t => {
  let s = t; for (const [a, b] of SPECIALI) s = s.replace(a, b);
  for (const [sig, [gen, sing, plur, def]] of Object.entries(SIGLE)) {
    // forma «espansione, o SIGLA,» → si legge una sola volta
    s = s.replace(new RegExp(`,\\s*o ${sig}\\s*,`, 'g'), '').replace(new RegExp(`,\\s*o ${sig}(?=[;.:])`, 'g'), '').replace(new RegExp(`\\s*\\(${sig}\\)`, 'g'), '');
    s = s.replace(new RegExp(`\\b(?:([A-Za-z]+)(?:${AP}|\\s+))?${sig}\\b`, 'g'), (m, w) => {
      const k = w && w.toLowerCase();
      if (k && PRE[k]) {
        const [prep, num] = PRE[k], esp = num === 'p' ? plur : sing, out = art(prep, num, gen, esp) + esp;
        return /^[A-Z]/.test(w) ? out[0].toUpperCase() + out.slice(1) : out;
      }
      return (w ? m.slice(0, m.length - sig.length) : '') + (def === 'p' ? plur : sing);
    });
  }
  return s.replace(/\bUNI-INAIL\b/g, 'uni ⟦INAIL⟧').replace(/(?<!⟦)\bINAIL\b(?!⟧)/g, '⟦INAIL⟧').replace(/\bD\.lgs\.?/g, 'decreto legislativo').replace(/\bart\.\s?/gi, 'articolo ').replace(/\bc\.\s?(\d)/g, 'comma $1').replace(/\bISO\b/g, 'iso').replace(/\bUNI\b/g, 'uni').replace(/\bILO\b/g, 'ilo').replace(/\bCE\b/g, 'ci e');
};
/* marcatori fonetici: si sostituiscono dopo l'escape XML, nel testo SSML */
const FONEMI = { INAIL: '<phoneme alphabet="ipa" ph="iˈnail">Inail</phoneme>' };
const ssmlFonemi = x => x.replace(/⟦(\w+)⟧/g, (m, k) => FONEMI[k] || k);
if (typeof module !== 'undefined') module.exports = { pronuncia, SIGLE, ssmlFonemi, FONEMI };
