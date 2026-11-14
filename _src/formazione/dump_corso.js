/* Esporta in JSON il corso e le fotografie scelte, per la dispensa – © 2026 dr. Jonathan D'Eugenio */
const fs = require('fs'); const ROOT = '/home/claude/astra-portale';
const FC = require(ROOT + '/elearning/foto_corsi.js');
const id = process.argv[2]; global.window = {}; eval(fs.readFileSync(`${ROOT}/elearning/corsi/${id}/corso.js`, 'utf8'));
const C = window.CORSO, S = FC.scegli(C);
process.stdout.write(JSON.stringify({ C, mod: S.mod, sch: S.sch }));
