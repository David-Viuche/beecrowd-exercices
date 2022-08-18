function _1019_(lines) {
    let seg = parseInt(lines.shift());

    let hora = parseInt(seg / 3600);
    seg = seg % 3600
    let minuto = parseInt(seg / 60);
    seg = seg % 60
    let segundo = parseInt(seg);

    return hora + ":" + minuto + ":" + segundo;
}

//console.log(_1019_(lines));

module.exports = _1019_;