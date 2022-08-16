var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
raio = parseFloat(lines.shift());
var area = (Math.pow(raio,2)) * n;

console.log('A='+area.toFixed(4));