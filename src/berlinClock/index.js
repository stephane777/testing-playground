const generateString = (result, timeTypeValue, row) => {
	let light = row < 3 ? "R" : "Y";
	let column = row === 3 ? 11 : 4;
	if (column == 11) {
		let string =
			light.repeat(timeTypeValue) + "O".repeat(column - timeTypeValue);
		string = string
			.split("")
			.map((el, i) => (el === "Y" && [2, 5, 8].includes(i) ? "R" : el));
		result.push(string.join(""));
	} else {
		result.push(
			light.repeat(timeTypeValue) + "O".repeat(column - timeTypeValue)
		);
	}
};
const berlinClock = time => {
	const result = [];
	const [hours, minutes, seconds] = time.split(":").map(Number);
	// Seconde
	result.push(seconds % 2 ? "Y" : "O");

	const nb5Hour = Math.floor(hours / 5);
	generateString(result, nb5Hour, 1);

	// HOUR 2ND ROW : 1+1+1+1
	const nb1Hour = hours % 5;
	generateString(result, nb1Hour, 2);

	// MINUTE THIRD ROW
	const nbMinute = Math.floor(minutes / 5);
	generateString(result, nbMinute, 3);

	// MINUTE LAST ROW
	const nbLess5min = minutes % 5;
	generateString(result, nbLess5min, 4);

	return result.join("\n");
};

export default berlinClock;
