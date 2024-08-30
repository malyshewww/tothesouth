import './modules/calendar';
import './modules/forms';
import './modules/dropdown';

import maskPhone from './modules/mask-phone';

maskPhone();

const quantityBlocks = document.querySelectorAll('.choice-dropdown__item');
const inputAdalts = document.querySelector('input[name="count_adults"]');
const inputChildren = document.querySelector('input[name="count_children"]');
let outputAdults = inputAdalts?.value;
let outputChildren = inputChildren?.value;
for (let elem of quantityBlocks) {
	const buttonPlus = elem.querySelector('.button-plus');
	const buttonMinus = elem.querySelector('.button-minus');
	const input = elem.querySelector('.choice-dropdown__input');
	const dropdownCount = elem.querySelector('.choice-dropdown__count');
	let count = 0;
	buttonMinus.addEventListener('click', (e) => {
		console.log('minus');
		count--;
		count = count >= 0 ? count : 0;
		if (input?.getAttribute('name') === 'count_adults') {
			input.value = `
            ${count + ' ' + getNoun(count, 'взрослый', 'взрослых', 'взрослых')}`;
			dropdownCount.innerHTML = `${input.value}`;
			outputAdults = input.value;
		}
		if (input?.getAttribute('name') === 'count_children') {
			input.value = `
            ${count + ' ' + getNoun(count, 'ребенок', 'детей', 'детей')}`;
			dropdownCount.innerHTML = `${input.value}`;
			outputChildren = input.value;
		}
	});
	buttonPlus.addEventListener('click', (e) => {
		count++;
		dropdownCount.innerHTML = `${count}`;
		input.value = parseInt(count) + 1;
		if (input?.getAttribute('name') === 'count_adults') {
			input.value = `
            ${count + ' ' + getNoun(count, 'взрослый', 'взрослых', 'взрослых')}`;
			dropdownCount.innerHTML = `${input.value}`;
			outputAdults = input.value.trim('');
		}
		if (input?.getAttribute('name') === 'count_children') {
			input.value = `
            ${count + ' ' + getNoun(count, 'ребенок', 'детей', 'детей')}`;
			dropdownCount.innerHTML = `${input.value}`;
			outputChildren = input.value.trim('');
		}
	});
}

const buttonSave = document.querySelector('.choice-dropdown__save-btn');
const overlay = document.querySelector('.overlay');
if (buttonSave) {
	buttonSave.addEventListener('click', (e) => {
		console.log('save');
		const dropdownButton = e.target.closest('.form-item').querySelector('.custom-dropdown__btn');
		if (dropdownButton) {
			const dropdownButtonText = dropdownButton.querySelector('.custom-dropdown__btn-text');
			dropdownButtonText.innerHTML = outputAdults + ', ' + outputChildren;
			dropdownButton.classList.contains('active') && dropdownButton.classList.remove('active');
		}
		overlay?.classList.remove('active');
	});
}

function getNoun(number, one, two, five) {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five;
	}
	n %= 10;
	if (n === 1) {
		return one;
	}
	if (n >= 2 && n <= 4) {
		return two;
	}
	return five;
}
