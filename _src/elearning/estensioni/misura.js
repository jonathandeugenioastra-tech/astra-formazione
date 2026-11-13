const fs=require('fs');const ATT={testo:25,articolo:40,caso:60,vf:60,abbina:60,ordina:60,matrice:60,verifica:90,pittogrammi:60,definizioni:45,figure:45};
for(const id of process.argv.slice(2)){global.window={};eval(fs.readFileSync('corsi/'+id+'/corso.js','utf8'));const C=window.CORSO;const A=fs.existsSync('corsi/'+id+'/audio.json')?JSON.parse(fs.readFileSync('corsi/'+id+'/audio.json')).schermate:{};
let voce=0,nat=0,sil=[];C.moduli.forEach(m=>{const d=m.schermate.map((s,si)=>{const a=A[m.id+'-'+si];return a?a.d:(s.nar?s.nar.length/15.9:0)});const base=m.schermate.map((s,si)=>Math.max(20,d[si]+(ATT[s.t]||20)));const tot=base.reduce((a,b)=>a+b,0);
 m.schermate.forEach((s,si)=>{const sec=m.min*60*base[si]/tot;sil.push(sec-d[si]-(ATT[s.t]||20))});voce+=d.reduce((a,b)=>a+b,0);nat+=tot});
sil.sort((a,b)=>a-b);const T=C.moduli.reduce((a,m)=>a+m.min,0)*60;
console.log(id,'voce',(voce/T*100).toFixed(0)+'%','contenuto naturale',(nat/T*100).toFixed(0)+'%','attesa extra per schermata: mediana',(sil[sil.length>>1]/60).toFixed(1),'min, max',(sil[sil.length-1]/60).toFixed(1),'min');}
