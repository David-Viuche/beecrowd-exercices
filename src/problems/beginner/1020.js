function _1020_(lines) {
    let days = parseInt(lines.shift());

    let years = parseInt(days / 365);
    days = days % 365
    let months = parseInt(days / 30);
    days = days % 30
    days = parseInt(days);

    return years + ' ano(s)\n' + months + ' mes(es)\n' + days + ' dia(s)';
}

//console.log(_1020_(lines));

module.exports = _1020_;