function _1015_(lines) {
    let data = lines.shift().split(' ');

    let x1 = parseFloat(data[0]);
    let y1 = parseFloat(data[1]);

    data = lines.shift().split(' ');

    let x2 = parseFloat(data[0]);
    let y2 = parseFloat(data[1]);

    return (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4);
}

//console.log(_1015_(lines));

module.exports = _1015_;