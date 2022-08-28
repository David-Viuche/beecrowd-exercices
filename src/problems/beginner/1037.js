function _1037_(lines) {

    let num = parseFloat(lines.shift());

    if (num >= 0 && num <= 25) {
        return 'Intervalo [0,25]'
    }

    if (num > 25 && num <= 50) {
        return 'Intervalo (25,50]'
    }

    if (num > 50 && num <= 75) {
        return 'Intervalo (50,75]'
    }

    if (num > 75 && num <= 100) {
        return 'Intervalo (75,100]'
    }

    return 'Fora de intervalo'
}

//console.log(_1037_(lines));

module.exports = _1037_;