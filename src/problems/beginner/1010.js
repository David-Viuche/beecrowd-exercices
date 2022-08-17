function _1010_(lines) {
    let totalSale = 0;

    let product = lines.shift().split(' ');
    totalSale += parseFloat(product[1]) * parseFloat(product[2]);

    product = lines.shift().split(' ');
    totalSale += parseFloat(product[1]) * parseFloat(product[2]);

    return "VALOR A PAGAR: R$ " + totalSale.toFixed(2);
}

//console.log(_1010_(lines));

module.exports = _1010_;