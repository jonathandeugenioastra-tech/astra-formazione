/* Listino e calendario ASTRA – modificabile dalla pagina «gestione» · © 2026 dr. Jonathan D'Eugenio */
window.ASTRA_LISTINO = {
 "aggiornato": "2026-11-10",
 "prezzi": {
  "LAV-GEN": 30,
  "LAV-SPEC-B": 30,
  "LAV-SPEC-M": 80,
  "LAV-SPEC-A": 110,
  "LAV-AGG": 45,
  "PREP": 150,
  "PREP-AGG": 80,
  "DIR": 160,
  "DL": 220,
  "DLSPP": 140,
  "RSPP-A": 290,
  "RSPP-B": 590,
  "RSPP-C": 320,
  "RSPP-AGG": 390,
  "RLS": 320,
  "CAR": 190,
  "PLE": 190,
  "GRU": 220,
  "MMT": 220,
  "CONF": 240,
  "QUOTA": 160,
  "AI-1": 70,
  "AI-2": 130,
  "AI-3": 240,
  "PS-A": 190,
  "PS-BC": 150,
  "PES": 240,
  "ATEX": 180,
  "CHIM": 160,
  "FORM": 390,
  "LEG-AMB": 150,
  "RA": 390,
  "RIF": 150,
  "RENTRI": 80,
  "CLASS": 180,
  "CAMP-RIF": 200,
  "CAMP-ACQ": 90,
  "EMI": 80,
  "MON-EMI": 180,
  "SCA": 80,
  "BON": 180,
  "ISO14": 280,
  "AUD14": 290,
  "CFP": 180,
  "REATI": 80,
  "REACH": 160,
  "ESG": 180,
  "EGE": 690,
  "ISO50": 280,
  "DIAG": 160,
  "CER": 60,
  "HACCP": 50,
  "HACCP-AGG": 40,
  "HACCP-R": 240,
  "ALL": 60,
  "ISO22": 280
 },
 "nascosti": [],
 "sconti": [
  [
   5,
   5
  ],
  [
   10,
   10
  ],
  [
   20,
   15
  ]
 ],
 "edizioni": [
  {
   "corso": "PREP",
   "data": "2026-11-18",
   "fine": "2026-11-20",
   "mod": "VCS",
   "orario": "9:00 – 15:00",
   "sede": "Online",
   "posti": 8
  },
  {
   "corso": "RLS",
   "data": "2026-11-19",
   "fine": "2026-11-26",
   "mod": "VCS",
   "orario": "4 giornate · 9:00 – 18:00",
   "sede": "Online",
   "posti": 14
  },
  {
   "corso": "AI-2",
   "data": "2026-11-24",
   "fine": "2026-11-24",
   "mod": "P",
   "orario": "8:30 – 17:30",
   "sede": "ASTRA – Teramo",
   "posti": 5
  },
  {
   "corso": "PREP",
   "data": "2026-11-26",
   "fine": "2026-11-27",
   "mod": "P",
   "orario": "9:00 – 15:00",
   "sede": "ASTRA – Teramo",
   "posti": 6
  },
  {
   "corso": "CAR",
   "data": "2026-12-02",
   "fine": "2026-12-03",
   "mod": "P",
   "orario": "teoria e pratica",
   "sede": "ASTRA – Teramo",
   "posti": 3
  },
  {
   "corso": "HACCP",
   "data": "2026-12-04",
   "fine": "2026-12-04",
   "mod": "P",
   "orario": "14:00 – 19:00",
   "sede": "ASTRA – Teramo",
   "posti": 18
  },
  {
   "corso": "RSPP-AGG",
   "data": "2026-12-10",
   "fine": "2027-01-28",
   "mod": "VCS",
   "orario": "10 pomeriggi · 14:00 – 18:00",
   "sede": "Online",
   "posti": 12
  },
  {
   "corso": "ISO14",
   "data": "2026-12-15",
   "fine": "2026-12-18",
   "mod": "VCS",
   "orario": "14:00 – 18:00",
   "sede": "Online",
   "posti": 20
  },
  {
   "corso": "CONF",
   "data": "2026-12-16",
   "fine": "2026-12-17",
   "mod": "P",
   "orario": "8:30 – 15:00",
   "sede": "ASTRA – Teramo",
   "posti": 0
  },
  {
   "corso": "DL",
   "data": "2027-01-13",
   "fine": "2027-01-15",
   "mod": "VCS",
   "orario": "9:00 – 14:30",
   "sede": "Online",
   "posti": 20
  },
  {
   "corso": "PS-BC",
   "data": "2027-01-20",
   "fine": "2027-01-21",
   "mod": "P",
   "orario": "9:00 – 15:30",
   "sede": "ASTRA – Teramo",
   "posti": 10
  },
  {
   "corso": "PLE",
   "data": "2027-01-27",
   "fine": "2027-01-28",
   "mod": "P",
   "orario": "teoria e pratica",
   "sede": "ASTRA – Teramo",
   "posti": 6
  }
 ],
 "contatti": {
  "telefoni": [
   "0861 413103",
   "0861 212201"
  ],
  "email": "info@astrastudio.it",
  "pec": "astra@mypec.eu",
  "orari": "Lunedì – venerdì 9:00 – 18:00 · sabato e domenica reperibili per urgenze"
 },
 "avviso": "Prova di pubblicazione dalla cartella autore – 11/11/2026"
};
(function(){var D=window.ASTRA,L=window.ASTRA_LISTINO;if(!D||!L)return;D._tutti=D.corsi.slice();
for(var id in L.prezzi){var c=D.corsi.find(function(x){return x.id===id});if(c&&typeof L.prezzi[id]==='number')c.prezzo=L.prezzi[id];}
var h=L.nascosti||[];D.corsi=D.corsi.filter(function(c){return h.indexOf(c.id)<0});
if(L.edizioni)D.edizioni=L.edizioni.filter(function(e){return h.indexOf(e.corso)<0&&D.corsi.some(function(c){return c.id===e.corso})});
if(L.sconti)D.sconti=L.sconti.slice().sort(function(a,b){return b[0]-a[0]});
if(L.contatti)for(var k in L.contatti)if(L.contatti[k])D.azienda[k]=L.contatti[k];
D.avviso=L.avviso||'';})();
