function _1014_(lines) {
    let kmTra = parseInt(lines[0]);
    let consum = parseFloat(lines[1]);

    return (kmTra / consum).toFixed(3) + ' km/l';
}

//console.log(_1014_(lines));

module.exports = _1014_;