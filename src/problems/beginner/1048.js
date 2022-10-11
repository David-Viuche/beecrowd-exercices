
function _1048_(lines) {
	let [num] = lines.shift().split(' ').map(e => parseFloat(e))

	let readjustmentP = 4

	const salaryAdjustment = [[0, 400.00, 15], [400.01, 800.00, 12], [800.01, 1200.00, 10], [1200.01, 2000.00, 7]]

	salaryAdjustment.forEach(e => {
		if (num >= e[0] && num <= e[1]) {
			return readjustmentP = e[2]
		}
	})

	let readjustment = (readjustmentP * num / 100).toFixed(2)

	let newSalary = (num + parseFloat(readjustment)).toFixed(2)

	return `Novo salario: ${newSalary}\nReajuste ganho: ${readjustment}\nEm percentual: ${readjustmentP} %`
}

//console.log(_1048_(lines));

module.exports = _1048_;