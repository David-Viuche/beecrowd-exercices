function _1035_(lines) {

    let [a, b, c, d] = lines.shift().split(' ');

    let res = 'Valores nao aceitos';

    if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 == 0) {
        res = 'Valores aceitos';
    }

    return res;
}

//console.log(_1035_(lines));

module.exports = _1035_;