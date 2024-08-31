import './modules/range-slider';

// Показ/Скрытие кнопки "Показать ещё" в зависимости о тколичества элементов
const formGroups = document.querySelectorAll('.city-hotels .form-group');
if (formGroups.length) {
	formGroups.forEach((group) => {
		const checkboxes = group.querySelectorAll('.checkbox');
		if (checkboxes.length) {
			const btnShow = group.querySelector('.form-group__btn-show');
			if (btnShow) {
				btnShow.style.display = checkboxes.length < 6 ? 'none' : 'flex';
				btnShow.addEventListener('click', () => {
					group.classList.toggle('active');
					btnShow.style.display = 'none';
				});
			}
		}
	});
}
