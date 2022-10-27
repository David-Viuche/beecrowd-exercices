
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
console.log(_1060_(['7','-5','6','-3.4','4.6','12']));

module.exports = _1060_;