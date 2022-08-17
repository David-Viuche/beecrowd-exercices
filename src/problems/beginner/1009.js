function _1009_(lines) {
    let name = lines.shift();
    let salary = parseFloat(lines.shift());
    let sales = parseFloat(lines.shift());

    let totalSalary = (salary + (sales * 0.15)).toFixed(2);

    return "TOTAL = R$ " + totalSalary;
}

//console.log(_1009_(lines));

module.exports = _1009_;