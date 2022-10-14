
function _1059_() {

	let num = 1;
	let res = ''
	
	while (num <= 100){

		if (num%2 == 0){
			res += num
			if (num != 100) {
				res += '\n' 
			}
		}

		num = num + 1 	
	}

	return res
}

//console.log(_1059_(lines));

module.exports = _1059_;