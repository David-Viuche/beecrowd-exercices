
function _1050_(lines) {

	let [ddd] = lines.shift().split(' ').map(e => parseInt(e));

	let phoneNumbers = {
		61: "Brasilia",
		71: "Salvador",
		11: "Sao Paulo",
		21: "Rio de Janeiro",
		32: "Juiz de Fora",
		19: "Campinas",
		27: "Vitoria",
		31: "Belo Horizonte"
	}

	let res = phoneNumbers[ddd]

	return (res) ? res : "DDD nao cadastrado"
}

//console.log(_1050_(lines));

module.exports = _1050_;