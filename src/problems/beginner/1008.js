function _1008_(lines) {
    var num = parseInt(lines.shift());
    var hours = parseInt(lines.shift());
    var priceHour = parseFloat(lines.shift());

    var salario = (hours * priceHour).toFixed(2);

    return "NUMBER = " + num + "\n" +
           "SALARY = U$ " + salario;
}

//console.log(_1008_(lines));

module.exports = _1008_;