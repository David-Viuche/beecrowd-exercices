function _1018_(lines) {

    let tickets = [[100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0], [1, 0]];

    let num = parseInt(lines.shift());
    let res = num + '\n';

    for (let index = 0; index < tickets.length; index++) {
        let el = tickets[index];
        el[1] = parseInt(num / el[0]);
        num = num % el[0];
    }

    for (let index = 0; index < tickets.length; index++) {
        let el = tickets[index];
        res += el[1] + ' nota(s) de R$ ' + el[0] + ',00';
        if (index < tickets.length - 1) {
            res += '\n';
        }
    }

    return res;
}

//console.log(_1018_(lines));

module.exports = _1018_;