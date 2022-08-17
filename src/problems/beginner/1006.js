function _1006_(lines) {
    var a = parseFloat(lines.shift());
    var b = parseFloat(lines.shift());
    var c = parseFloat(lines.shift());

    var res = (((a * 2) + (b * 3) + (c * 5)) / 10).toFixed(1);

    return "MEDIA = " + res;
}

//console.log(_1006_(lines));

module.exports = _1006_;