function _1021_(lines) {

    let tickets = [[100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0], [1, 0], [0.5, 0], [0.25, 0], [0.10, 0], [0.05, 0], [0.01, 0]];

    let num = parseFloat(lines.shift());
    
    for (let index = 0; index < tickets.length; index++) {
        let el = tickets[index];
        el[1] = parseInt(num / el[0]);
        num = (num % el[0]).toFixed(2);
    }

    let res = 'NOTAS:\n';
    
    for (let index = 0; index < 6; index++) {
        let el = tickets[index];
        res += el[1] + ' nota(s) de R$ ' + el[0].toFixed(2) + '\n';
    }

    res += 'MOEDAS:\n';

    for (let index = 6; index < tickets.length; index++) {
        let el = tickets[index];
        res += el[1] + ' moeda(s) de R$ ' + el[0].toFixed(2);
        if (index < tickets.length - 1) {
            res += '\n';
        }
    }

    return res;
}

//console.log(_1021_(lines));

module.exports = _1021_;