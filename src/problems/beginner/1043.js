
function _1043_(lines) {

	let data = lines.shift().split(' ');

	let a = parseFloat(data[0]);
	let b = parseFloat(data[1]);
	let c = parseFloat(data[2]);
	
	if (a + c > b && b + a > c && c + b > a) {
		return 'Perimetro = ' + (a + b + c).toFixed(1);
	}

	return 'Area = ' + (c * ((a + b) / 2)).toFixed(1);
}

//console.log(_1043_(lines));

module.exports = _1043_;