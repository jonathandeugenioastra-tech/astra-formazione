# copie di estensioni condivise tra corsi con le stesse schermate di ancoraggio
cd /home/claude/astra-portale/elearning/estensioni
for f in REATI/M1-N3 REATI/M1-N4 REATI/M1-N5 REATI/M1-N7 RENTRI/M1-Z2 RENTRI/M1-Z4 RENTRI/M1-Z5 SCA/M1-Z2 SCA/M1-Z5; do cp $f.json LEG-AMB/M2-Z-$(echo $f|tr / -).json; done
cp EMI/M1-N1.json LEG-AMB/M1-Z-EMI-M1-N1.json
for f in RENTRI/M1-Z1 RENTRI/M1-Z2 RENTRI/M1-Z3 RENTRI/M1-Z4 RENTRI/M1-Z5 RENTRI/M1-Z9; do cp $f.json RIF/M1-Z-$(echo $f|tr / -).json; done
for f in RENTRI/M1-Z7 REATI/M1-N3 REATI/M1-N4 REATI/M1-N5; do cp $f.json RIF/M2-Z-$(echo $f|tr / -).json; done
for f in CHIM/M1-Z06 CHIM/M1-Z07 CHIM/M1-Z08 CHIM/M1-Z09; do cp $f.json REACH/M1-Z-$(echo $f|tr / -).json; done
for f in CHIM/M1-Z01 CHIM/M1-Z02 CHIM/M1-Z03 CHIM/M1-Z05 CHIM/M1-Z11 CHIM/M1-Z12; do cp $f.json REACH/M2-Z-$(echo $f|tr / -).json; done
python3 - <<'PY'
import json
d=json.load(open('CHIM/M1-Z04.json')); d['dopo']='L’etichetta CLP e le novità della revisione'
json.dump(d,open('REACH/M2-Z-CHIM-M1-Z04.json','w'),ensure_ascii=False,indent=1)
PY
for c in DIR DL; do cp LAV-AGG/M1-Z1.json $c/M1-Z-LAV-AGG-M1-Z1.json; cp LAV-AGG/M2-Z1.json $c/M1-Z-LAV-AGG-M2-Z1.json; cp LAV-AGG/M4-Z1.json $c/M2-Z-LAV-AGG-M4-Z1.json; cp REATI/M1-N5.json $c/M1-Z-REATI-M1-N5.json; done
cp LAV-AGG/M4-Z4.json DL/M4-Z-LAV-AGG-M4-Z4.json
