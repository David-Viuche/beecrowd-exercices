function _1011_(lines) {

    let radius = parseInt(lines.shift());

    let volume = (4 / 3) * 3.14159 * Math.pow(radius, 3);

    return "VOLUME = " + volume.toFixed(3);
}

//console.log(_1011_(lines));

module.exports = _1011_;