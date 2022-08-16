var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = parseInt(lines.shift());
var hours = parseInt(lines.shift());
var priceHour = parseFloat(lines.shift());

var salario = (hours * priceHour).toFixed(2);

console.log("NUMBER = "+num);
console.log("SALARY = U$ "+salario);