
function _1044_(lines) {

	let data = lines.shift().split(' ');

	let a = parseInt(data[0])
	let b = parseInt(data[1])

	if (a % b == 0 || b % a == 0) {
		return 'Sao Multiplos'
	}

	return 'Nao sao Multiplos'
}

//console.log(_1044_(lines));

module.exports = _1044_;