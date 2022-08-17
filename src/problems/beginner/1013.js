function higherAB(a, b) {
    return (a + b + Math.abs(a - b)) / 2;
}

function _1013_(lines) {
    let data = lines.shift().split(' ');

    let a = parseInt(data[0]);
    let b = parseInt(data[1]);
    let c = parseInt(data[2]);

    let aux = higherAB(a, b);

    return higherAB(aux, c) + " eh o maior";
}

//console.log(_1013_(lines));

module.exports = _1013_;