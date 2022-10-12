
function _1051_(lines) {

	let salary = parseFloat(lines.shift());

	const range = [[4500.00, 28], [3000.00, 18], [2000.00, 8]]

	let salaryAux = 0

	let acc = 0

	if (salary < 2000) {
		return 'Isento'
	}

	range.forEach(rangeElement => {
		if(salary > rangeElement[0]){
			salaryAux = salary - rangeElement[0]
			let readjustment = ((salaryAux * rangeElement[1]) / 100).toFixed(2)
			acc = (parseFloat(acc) + parseFloat(readjustment)).toFixed(2)
			salary = rangeElement[0]
		}
	})

	return `R$ ${acc}`
}

//console.log(_1051_(lines));

module.exports = _1051_;