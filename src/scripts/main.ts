// import { BaseHelpers } from './helpers/base-helpers';

// BaseHelpers.addLoadedClass();
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	const newsSlider = document.querySelector('.main-news__slider');

	if (newsSlider) {
		const buttonPrev = newsSlider.closest('.main-news')?.querySelector('.slider-button-prev');
		const buttonNext = newsSlider.closest('.main-news')?.querySelector('.slider-button-next');
		let newsSwiper = new Swiper(newsSlider, {
			modules: [Navigation],
			slidesPerView: 3,
			speed: 800,
			slideClass: 'news-card',
			spaceBetween: 30,
			navigation: {
				prevEl: buttonPrev,
				nextEl: buttonNext,
			},
			on: {
				init: function (swiper) {
					const slides = swiper.slides;
					const sliderControls = buttonPrev?.parentNode || buttonNext?.parentNode;
					if (slides.length >= 5) {
						swiper.slideTo(1);
					}
					if (slides.length <= swiper.passedParams.slidesPerView) {
						swiper.navigation.destroy();
						sliderControls?.remove();
					}
				},
			},
		});
	}

	// Dropdown
	function deactivateAllDropdowns() {
		const activeDropdownButtons = document.querySelectorAll('.custom-dropdown__btn.active');
		[...activeDropdownButtons].forEach((elem) => {
			elem.classList.remove('active');
		});
	}
	function handleDropdownClicks(event) {
		let target = event.target;
		if (target.matches('.custom-dropdown__btn')) {
			if (target.classList.contains('active')) {
				target.classList.remove('active');
			} else {
				deactivateAllDropdowns();
				target.classList.add('active');
			}
		} else {
			deactivateAllDropdowns();
			// if (target.matches('.select-list *')) {
			// 	deactivateAllDropdowns();
			// }
			// if (!target.matches('.select-list *')) {
			// 	deactivateAllDropdowns();
			// }
		}
		if (target.closest('.select-list__item')) {
			let parent = target.closest('.custom-dropdown');
			let dropdownButton = parent.querySelector('.custom-dropdown__btn');
			let dropdownInput = parent.querySelector('.custom-dropdown__input');
			if (dropdownInput) {
				dropdownInput.value = target.dataset.value;
			}
			if (dropdownButton) {
				dropdownButton.textContent = target.dataset.value;
			}
		}
	}
	document.addEventListener('click', handleDropdownClicks, false);
});
