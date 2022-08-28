
function _1038_(lines) {

	let [x, y] = lines.shift().split(' ');

	let products = [4.00, 4.50, 5.00, 2.00, 1.50];

	let total = (products[x - 1] * y).toFixed(2);

	return 'Total: R$ ' + total;
}

//console.log(_1038_(lines));

module.exports = _1038_;