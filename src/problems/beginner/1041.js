
function _1041_(lines) {

	let [x, y] = lines.shift().split(' ');

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

	return 'Q2'
}

//console.log(_1041_(lines));

module.exports = _1041_;