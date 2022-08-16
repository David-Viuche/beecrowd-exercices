let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let name = lines.shift();
let salary = parseFloat(lines.shift());
let sales = parseFloat(lines.shift());

let totalSalary = (salary + (sales * 0.15)).toFixed(2);

console.log("TOTAL = R$ "+totalSalary);
