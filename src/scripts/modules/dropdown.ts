// Dropdown
function checkDropdownValue() {
	const dropdowns = document.querySelectorAll('.custom-dropdown');
	[...dropdowns].forEach((elem) => {
		const dropdownButton = elem.querySelector('.custom-dropdown__btn') as HTMLElement;
		const dropdownListItems = elem.querySelectorAll('.select-list__item');
		[...dropdownListItems].forEach((listItem) => {
			const dataValue = listItem.dataset.value;
			const dataValueStr = dataValue
				.toLowerCase()
				.replace(/[\s.,%,(.+\)]/g, '')
				.trim();
			const dropdownButtonStr = dropdownButton.innerText
				.toLowerCase()
				.replace(/[\s.,%,(.+\)]/g, '')
				.trim();
			if (dropdownButtonStr !== dataValueStr) return;
			listItem.classList.add('current');
		});
	});
}
checkDropdownValue();
function deactivateAllDropdowns() {
	const activeDropdownButtons = document.querySelectorAll('.custom-dropdown__btn.active');
	[...activeDropdownButtons].forEach((elem) => {
		let choice = elem.parentNode.querySelector('.custom-dropdown__choice');
		elem.classList.remove('active');
	});
}
function handleDropdownClicks(event) {
	const target = event.target as HTMLElement;

	if (target.matches('.custom-dropdown__btn')) {
		if (target.classList.contains('active')) {
			target.classList.remove('active');
		} else {
			// deactivateAllDropdowns();
			target.classList.add('active');
		}
	} else if (
		target.matches('.choice-dropdown') ||
		target.matches('.choice-dropdown__button') ||
		target.matches('.choice-dropdown__count')
	) {
		console.log(target);
		event.stopPropagation();
	} else {
		deactivateAllDropdowns();
		// if (target.matches('.select-list *')) {
		// 	deactivateAllDropdowns();
		// }
		// if (!target.matches('.select-list *')) {
		// 	deactivateAllDropdowns();
		// }
	}
	// if (target.closest('.choice-dropdown__save-btn')) {
	// 	deactivateAllDropdowns();
	// }
	if (target.closest('.select-list__item')) {
		const parent = target.closest('.custom-dropdown') as HTMLElement;
		const dropdownButton = parent.querySelector('.custom-dropdown__btn') as HTMLElement;
		const dropdownInput = parent.querySelector('.custom-dropdown__input') as HTMLElement;
		if (dropdownInput) {
			dropdownInput.value = target.dataset.value;
		}
		if (dropdownButton) {
			dropdownButton.textContent = target.dataset.value;
		}
		const currentItems = parent.querySelectorAll('.select-list__item.current');
		currentItems.forEach((item) => item.classList.remove('current'));
		target.classList.add('current');
	}
}
document.addEventListener('click', handleDropdownClicks, false);
