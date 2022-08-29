
function _1040_(lines) {

	let data = lines.shift().split(' ');

	let n1 = parseFloat(data[0]);
	let n2 = parseFloat(data[1]);
	let n3 = parseFloat(data[2]);
	let n4 = parseFloat(data[3]);

	let mean = ((n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10).toFixed(1);

	let res = 'Media: ' + mean;

	if (mean >= 7) {
		return res += '\nAluno aprovado.';
	}

	if (mean < 5) {
		return res += '\nAluno reprovado.';
	}

	res += '\nAluno em exame.';

	let nExam = parseFloat(lines.shift()).toFixed(1);

	res += '\nNota do exame: ' + nExam;

	mean = ((parseFloat(mean) + parseFloat(nExam)) / 2).toFixed(1);

	if (mean >= 5) {
		res += '\nAluno aprovado.';
	}

	if (mean < 5) {
		res += '\nAluno reprovado.';
	}

	res += `\nMedia final: ${mean}`;

	return res
}

console.log(_1040_(['1.0 10.0 10.0 0.0']));

module.exports = _1040_;