const lengthUnits = {
	mm: 0.001,
	cm: 0.01,
	m: 1,
	km: 1000,
	ft: 0.3048,
	inch: 0.0254,
};

const weightUnits = {
	g: 1,
	kg: 1000,
	mg: 0.001,
	lb: 453.592,
};

export function convertLength(value, from, to) {
	if (!lengthUnits[from] || !lengthUnits[to]) {
		return null;
	}

	const valueInMeter = value * lengthUnits[from];

	return valueInMeter / lengthUnits[to];
}

export function convertWeight(value, from, to) {
	if (!weightUnits[from] || !weightUnits[to]) {
		return null;
	}
	return (value * weightUnits[from]) / weightUnits[to];
}

export function convertTemperature(value, from, to) {
	if (from === to) return value;

	//ubah ke calcius dahulu
	let celcius;
	if (from === "c") celcius = value;
	else if (from === "f") celcius = ((value - 32) * 5) / 9;
	else if (from === "k") celcius = value - 273.15;

	//celcius ke target
	if (to === "c") return celcius;
	if (to === "f") return (celcius * 9) / 5 + 32;
	if (to === "k") return celcius + 273.15;

	return null;
}
