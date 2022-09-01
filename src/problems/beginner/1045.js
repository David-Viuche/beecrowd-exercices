
function _1045_(lines) {

	let [a, b, c] = lines.shift().split(' ').map(e => parseFloat(e)).sort((a, b) => b - a);

	let res = ''

	if (a >= b + c) {
		return 'NAO FORMA TRIANGULO'
	}

	if (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
		res += '\nTRIANGULO RETANGULO'
	}

	if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
		res += '\nTRIANGULO OBTUSANGULO'
	}

	if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
		res += '\nTRIANGULO ACUTANGULO'
	}

	if (a == b && a == c) {
		res += '\nTRIANGULO EQUILATERO'
	}

	if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) {
		res += '\nTRIANGULO ISOSCELES'
	}

	return res.slice(1)
}

//console.log(_1045_(lines));

module.exports = _1045_;