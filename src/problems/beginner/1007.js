function _1007_(lines) {
    var a = parseInt(lines.shift());
    var b = parseInt(lines.shift());
    var c = parseInt(lines.shift());
    var d = parseInt(lines.shift());

    var res = (a * b) - (c * d);

    return "DIFERENCA = " + res;
}

//console.log(_1007_(lines));

module.exports = _1007_;