let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let kmTra = parseInt(data[0]);
let consum = parseFloat(data[1]);

console.log((kmTra / consum).toFixed(3) + ' km/l');