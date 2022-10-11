
function _1049_(lines) {

	let word1 = lines.shift();
	let word2 = lines.shift();
	let word3 = lines.shift();

	let animals = {
		vertebrado: {
			ave: {
				carnivoro: "aguia",
				onivoro: "pomba"
			},
			mamifero: {
				onivoro: "homem",
				herbivoro: "vaca"
			}
		},
		invertebrado: {
			inseto: {
				hematofago: "pulga",
				herbivoro: "lagarta"
			},
			anelideo: {
				hematofago: "sanguessuga",
				onivoro: "minhoca"
			}
		}
	}

	return animals[word1][word2][word3]
}

//console.log(_1049_(lines));

module.exports = _1049_;