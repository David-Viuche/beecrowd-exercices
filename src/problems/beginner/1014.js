let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let kmTra = parseInt(lines[0]);
let consum = parseFloat(lines[1]);

console.log((kmTra / consum).toFixed(3) + ' km/l');