
function _1041_(lines) {

	let data = lines.shift().split(' ');

	let x = parseFloat(data[0]).toFixed(1);
	let y = parseFloat(data[1]).toFixed(1);

	if (x == 0.0 && y == 0.0) {
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

	if (x == 0.0) {
		return 'Eixo X';
	}

	if (y == 0.0) {
		return 'Eixo Y';
	}

	return 'Q2';
}

//console.log(_1041_(lines));

module.exports = _1041_;