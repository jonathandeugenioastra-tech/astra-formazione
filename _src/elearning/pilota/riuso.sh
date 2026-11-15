# copie di estensioni condivise tra corsi con le stesse schermate di ancoraggio
cd /home/claude/astra-portale/elearning/estensioni
for f in REATI/M1-N3 REATI/M1-N4 REATI/M1-N5 REATI/M1-N7 RENTRI/M1-Z2 RENTRI/M1-Z4 RENTRI/M1-Z5 SCA/M1-Z2 SCA/M1-Z5; do cp $f.json LEG-AMB/M2-Z-$(echo $f|tr / -).json; done
cp EMI/M1-N1.json LEG-AMB/M1-Z-EMI-M1-N1.json
for f in RENTRI/M1-Z1 RENTRI/M1-Z2 RENTRI/M1-Z3 RENTRI/M1-Z4 RENTRI/M1-Z5 RENTRI/M1-Z9; do cp $f.json RIF/M1-Z-$(echo $f|tr / -).json; done
for f in RENTRI/M1-Z7 REATI/M1-N3 REATI/M1-N4 REATI/M1-N5; do cp $f.json RIF/M2-Z-$(echo $f|tr / -).json; done
