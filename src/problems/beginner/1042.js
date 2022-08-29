
function _1042_(lines) {

	let data = lines.shift().split(' ');

	let num1 = parseInt(data[0]);
	let num2 = parseInt(data[1]);
	let num3 = parseInt(data[2]);

	let res2 = `${num1}\n${num2}\n${num3}`;

	let dataSort = data.sort((a, b) => a - b);

	let res = `${dataSort[0]}\n${dataSort[1]}\n${dataSort[2]}\n\n` + res2;

	return res;
}

//console.log(_1042_(lines));

module.exports = _1042_;