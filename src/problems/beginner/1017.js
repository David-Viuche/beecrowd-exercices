function _1017_(lines) {

    let time = parseInt(lines.shift());
    let vel = parseInt(lines.shift());

    return ((vel * time) / 12).toFixed(3);
}

//console.log(_1017_(lines));

module.exports = _1017_;