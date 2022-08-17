function _1004_(lines) {
    var a = parseInt(lines.shift());
    var b = parseInt(lines.shift());

    var PROD = a * b;

    return "PROD = " + PROD;
}

//console.log(_1004_(lines));

module.exports = _1004_;