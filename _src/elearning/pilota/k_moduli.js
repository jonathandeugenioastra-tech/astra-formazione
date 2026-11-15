const fs=require('fs');const P=fs.readFileSync('player/player.js','utf8');
const fa=P.slice(P.indexOf('const parole ='),P.indexOf('const base = m.schermate.map'));
const ATT={ grafico: 60, testo: 25, articolo: 40, caso: 60, vf: 60, abbina: 60, ordina: 60, matrice: 60, verifica: 90, pittogrammi: 60, definizioni: 45, figure: 45, esempio: 240, classifica: 300, scenario: 480, applica: 300 };
eval(fa.replace('const parole','var parole').replace('const attivita','var attivita'));
const dir=process.argv[2];global.window={};eval(fs.readFileSync(dir+'/dati/corso.js','utf8'));eval(fs.readFileSync(dir+'/dati/audio.js','utf8'));
let TV=0,TT=0;
window.CORSO.moduli.forEach(m=>{let v=0,a=0;m.schermate.forEach((s,si)=>{const au=window.AUDIO.schermate[m.id+'-'+si];const d=au?au.d:(s.nar||'').length/14;v+=d;a+=attivita(s)});TV+=v;TT+=m.min*60;
console.log(m.id,m.titolo.slice(0,40).padEnd(40),'min',m.min,'voce',(v/60).toFixed(1),'attività',(a/60).toFixed(1),'k',(m.min*60/(v+a)).toFixed(2),'voce%',(100*v/m.min/60).toFixed(0))});
console.log('voce totale min',(TV/60).toFixed(1),'su',TT/60,'=',(100*TV/TT).toFixed(1)+'%');
