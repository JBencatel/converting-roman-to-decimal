module.exports = (roman) => {
	let conversionList = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let romanCharacters = roman.split('');
	let convertedNumber = 0;

	for (let i = 0; i < romanCharacters.length; i++) {
		let currentRoman = romanCharacters[i];
		let currentDecimal = conversionList[currentRoman];

		let nextRoman = romanCharacters[i + 1];
		let nextDecimal = nextRoman ? conversionList[nextRoman] : 0;

		if (currentDecimal < nextDecimal) {
			convertedNumber -= currentDecimal;
		} else {
			convertedNumber += currentDecimal;
		}
	}

	return convertedNumber;
};
