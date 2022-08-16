var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());

var res = ((a*3.5) + (b*7.5))/11;

console.log("MEDIA = "+res.toFixed(5));