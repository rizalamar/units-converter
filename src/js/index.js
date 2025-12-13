import {
	convertLength,
	convertWeight,
	convertTemperature,
} from "../components/converter.js";

const tabs = document.querySelectorAll(".tab-btn");
const valueLabel = document.getElementById("valueLabel");
const valueInput = document.getElementById("inputValue");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const convertButton = document.getElementById("convertButton");
const output = document.getElementById("output");
const resetButton = document.getElementById("resetButton");

let currentTab = "length";

function updateFormUI(tab) {
	if (tab === "length") {
		valueLabel.textContent = "Enter the length to convert";
		fromInput.placeholder = "e.g., ft";
		toInput.placeholder = "e.g., cm";
	}

	if (tab === "weight") {
		valueLabel.textContent = "Enter the weight to convert";
		fromInput.placeholder = "e.g., kg";
		toInput.placeholder = "e.g., g";
	}

	if (tab === "temperature") {
		valueLabel.textContent = "Enter the temperature to convert";
		fromInput.placeholder = "e.g., C / F / K";
		toInput.placeholder = "e.g., C / F / K";
	}
}

// Eventlisteners

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		// matikan semua tab
		tabs.forEach((t) => {
			t.classList.remove("text-blue-600", "border-b-2");
			t.classList.add(
				"border-transparent",
				"text-gray-500",
				"hover:text-gray-800"
			);
		});

		tab.classList.add("text-blue-600", "border-b-2");
		tab.classList.remove(
			"border-transparent",
			"text-gray-500",
			"hover:text-gray-800"
		);

		currentTab = tab.dataset.tab;
		console.log("Active: ", currentTab);
		updateFormUI(currentTab);
	});
});

convertButton.addEventListener("click", () => {
	const value = parseFloat(valueInput.value);
	const from = fromInput.value.toLowerCase();
	const to = toInput.value.toLowerCase();

	if (isNaN(value)) {
		output.textContent = "Please enter a number";
		return;
	}

	let result;

	if ((currentTab = "length")) {
		result = convertLength(value, from, to);
	}

	if ((currentTab = "weight")) {
		result = convertWeight(value, from, to);
	}

	if ((currentTab = "temperature")) {
		result = convertTemperature(value, from, to);
	}

	if (result === null) {
		output.textContent = "Invalid unit";
		return;
	}

	output.textContent = `${value} ${from} = ${result} ${to}`;
});

resetButton.addEventListener("click", () => {
	valueInput.value = "";
	fromInput.value = "";
	toInput.value = "";
	output.textContent = "";
});
