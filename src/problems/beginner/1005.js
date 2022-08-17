function _1005_(lines) {
    var a = parseFloat(lines.shift());
    var b = parseFloat(lines.shift());
    var res = ((a * 3.5) + (b * 7.5)) / 11;

    return "MEDIA = " + res.toFixed(5);
}

//console.log(_1005_(lines));

module.exports = _1005_;