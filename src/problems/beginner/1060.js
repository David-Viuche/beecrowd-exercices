
function _1060_(lines) {

	let numbers = lines.map(e => parseFloat(e))

	let con = 0

	for (let i = 0; i < numbers.length; i++) {
		if(numbers[i] > 0){
			con++
		}
	}

	return `${con} valores positivos`
}

//console.log(_1060_(lines));

module.exports = _1060_;