
function _1046_(lines) {

	let [a, b] = lines.shift().split(' ').map(e => parseInt(e));

	let acc = 0;
	let currHour = a;

	if (a == b) {
		return 'O JOGO DUROU 24 HORA(S)';
	}

	while (currHour != b) {
		acc++;
		currHour = (currHour == 23) ? 0 : currHour + 1;
	}

	return `O JOGO DUROU ${acc} HORA(S)`
}

//console.log(_1046_(lines));

module.exports = _1046_;
