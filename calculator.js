// Page Elements
const calorieTotalEl = document.getElementById('calorieTotal');
const btnReset = document.getElementById('btnReset');
const btnChicken = document.getElementById('btnChicken');
const btnBeef = document.getElementById('btnBeef');
const btnSausage = document.getElementById('btnSausage');
const btnStrawberry = document.getElementById('btnStrawberry');
const btnCarrot = document.getElementById('btnCarrot');
const btnOnion = document.getElementById('btnOnion');
const btnBread = document.getElementById('btnBread');
const btnPasta = document.getElementById('btnPasta');
const btnCornFlakes = document.getElementById('btnCornFlakes');
const btnMilk = document.getElementById('btnMilk');
const btnYogurt = document.getElementById('btnYogurt');
const btnButter = document.getElementById('btnButter');

// array of buttons
const foodBtns = [
	btnChicken,
	btnBeef,
	btnSausage,
	btnStrawberry,
	btnCarrot,
	btnOnion,
	btnBroccoli,
	btnTomatoe,
	btnBread,
	btnPasta,
	btnCornFlakes,
	btnMilk,
	btnYogurt,
	btnButter,
];

const foodCalories = {
	chicken: 165 / 100,
	beef: 136 / 100,
	sausage: 304 / 100,
	strawberry: 33 / 100,
	carrot: 41 / 100,
	onion: 40 / 100,
	broccoli: 34 / 100,
	tomatoe: 18 / 100,
	bread: 265 / 100,
	pasta: 131 / 100,
	cornflakes: 357 / 100,
	milk: 61 / 100,
	yogurt: 61 / 100,
	butter: 717 / 100,
};

const displayCalories = () => {
	calorieTotalEl.innerHTML = `${Math.floor(
		Number(localStorage.getItem('calories')),
	)}kcals`;
};

// on load
if (!localStorage.getItem('calories')) {
	localStorage.setItem('calories', 0);
}

displayCalories();

const addCalories = (event) => {
	const food = event.srcElement.id.slice(3).toLowerCase();
	const userInput = Number(prompt(`How many grams of ${food} did you have?`));

	if (isNaN(userInput)) {
		alert('Please try again with a valid number...');
	} else {
		const grams = Number(userInput);
		localStorage.setItem(
			'calories',
			Number(localStorage.getItem('calories')) + grams * foodCalories[food],
		);
	}

	displayCalories();
};

const resetCalories = () => {
	localStorage.setItem('calories', 0);

	displayCalories();
};

// event listeners
foodBtns.forEach((element) => {
	element.addEventListener('click', addCalories);
});

btnReset.addEventListener('click', resetCalories);
