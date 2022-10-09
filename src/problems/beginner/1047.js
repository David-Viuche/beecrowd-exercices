
function _1047_(lines) {

	let [a, b, c, d] = lines.shift().split(' ').map(e => parseInt(e));

	let acc = 0;
	let currHour = a;

	if (a == c && b == d) {
		return 'O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)';
	}

	while (currHour != c) {
		acc++;
		currHour = (currHour == 23) ? 0 : currHour + 1;
	}

	let acc2 = 0;
	let currMin = b;

	if (b == d) {
		return `O JOGO DUROU ${acc} HORA(S) E ${acc2} MINUTO(S)`;
	}

	if (b > d) {
		acc--
		if(acc < 0)
			acc = 23
	}

	while (currMin != d) {
		acc2++;
		currMin = (currMin == 59) ? 0 : currMin + 1;
	}

	return `O JOGO DUROU ${acc} HORA(S) E ${acc2} MINUTO(S)`
}

//console.log(_1047_(lines));

module.exports = _1047_;

