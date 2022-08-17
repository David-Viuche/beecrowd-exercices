let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let data = lines.shift().split(' ');

let a = parseInt(data[0]);
let b = parseInt(data[1]);
let c = parseInt(data[2]);

function higherAB(a, b) {
    return (a + b + Math.abs(a - b)) / 2;
}

let aux = higherAB(a, b);

console.log(higherAB(aux, c) + " eh o maior");