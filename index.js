const states = [
	"し", "か", "の", "こ", "た", "ん", "！", "<br>",
];

const transitions = [
	["し", "か", 0.5],
	["し", "た", 0.5],
	["か", "の", 1.0],
	["の", "こ", 1.0],
	["こ", "こ", 0.25],
	["こ", "の", 0.50],
	["こ", "し", 0.25],
	["た", "ん", 1.0],
	["ん", "た", 0.5],
	["ん", "！", 0.5],
	["！", "！", 0.5],
	["！", "<br>", 0.5],
	["<br>", "し", 1.0],
];

function validate() {
	for (const state of states) {
		let sum = 0.0;

		for (const transition of transitions)
			if (transition[0] == state)
				sum += transition[2];

		if (sum != 1.0) return false;
	}

	return true;
}


window.addEventListener('load', () => {
	if (!validate()) {
		alert("Program Error");
		return;
	}

	let state = "し";

	setInterval(() => {
		document.getElementById('output').innerHTML += state;
		let value = Math.random();

		for (const transition of transitions)
			if (transition[0] == state) {
				value -= transition[2];
				if (value <= 0.0) {
					state = transition[1]
					break;
				}
			}
	}, 1000 * 60 / 92.0 / 8.0);
});
