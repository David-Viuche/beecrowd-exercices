function _1002_(lines) {
    var n = 3.14159;
    raio = parseFloat(lines.shift());
    var area = (Math.pow(raio,2)) * n;
    return 'A='+area.toFixed(4);
}

//console.log(_1002_(lines));

module.exports = _1002_;