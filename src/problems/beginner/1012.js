let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let data = lines.shift().split(' ');

let a = parseFloat(data[0]);
let b = parseFloat(data[1]);
let c = parseFloat(data[2]);

console.log(
    "TRIANGULO: " + ((a * b) / 2).toFixed(3) + "\n" +
    "CIRCULO: " + (3.14159 * Math.pow(c, 2)).toFixed(3) + "\n" +
    "TRAPEZIO: " + (((a + b) * c) / 2).toFixed(3) + "\n" +
    "QUADRADO: " + (b * b).toFixed(3) + "\n" +
    "RETANGULO: " + (a * b).toFixed(3)
);
