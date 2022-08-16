let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let totalSale = 0;

lines.map(el => {
    let product = el.split(' ');
    totalSale += parseFloat(product[1]) * parseFloat(product[2]);
});

console.log("VALOR A PAGAR: R$ " + totalSale.toFixed(2));
