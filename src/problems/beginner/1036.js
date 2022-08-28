function _1036_(lines) {

    let [a, b, c] = lines.shift().split(' ');

    let num1 = Math.pow(b, 2) - 4 * a * c;

    let num2 = 2 * a

    if (num1 < 0 || num2 === 0) {
        return 'Impossivel calcular'
    }

    let res = 'R1 = ' + ((-b + Math.sqrt(num1)) / num2).toFixed(5) + '\nR2 = ' + ((-b - Math.sqrt(num1)) / num2).toFixed(5);

    return res;
}

//console.log(_1036_(lines));

module.exports = _1036_;