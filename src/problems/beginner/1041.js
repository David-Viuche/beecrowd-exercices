
function _1041_(lines) {

	let data = lines.shift().split(' ');

	let x = parseFloat(data[0]);
	let y = parseFloat(data[1]);

	if (x == 0 && y == 0) {
		return 'Origem';
	}

	if (x > 0 && y > 0) {
		return 'Q1';
	}

	if (x > 0 && y < 0) {
		return 'Q4';
	}

	if (x < 0 && y < 0) {
		return 'Q3';
	}

	if (x == 0) {
		return 'Eixo Y';
	}

	if (y == 0) {
		return 'Eixo X';
	}

	return 'Q2';
}

//console.log(_1041_(lines));

module.exports = _1041_;