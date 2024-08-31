import { loadMap, isLoaded } from './map-popup';

// Окна
function popups(elem = document) {
	// Открыть
	let buttonOpenPopup = elem.querySelectorAll('[data-popup]');
	if (buttonOpenPopup.length) {
		//buttonOpenPopup = once("popups",buttonOpenPopup);

		buttonOpenPopup.forEach(function (item) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				let popup_id = item.getAttribute('data-popup');
				elem.querySelector('#' + popup_id + '').classList.add('active');
				document.body.classList.add('lock');
				if (popup_id === 'modal-map' && !isLoaded) {
					loadMap();
				}
			});
		});
	}
	// Закрыть
	let popup = elem.querySelectorAll('.popup');
	if (popup.length < 1 && elem.classList.contains('popup')) {
		popup = [elem];
	}
	if (popup.length) {
		//once("popups",popup);

		popup.forEach(function (item) {
			item.addEventListener('click', function (e) {
				if (e.target.matches('.popup') || e.target.matches('.popup__close')) {
					item.classList.remove('active');
					document.body.classList.remove('lock');
				}
			});
		});
	}
}

export { popups };
