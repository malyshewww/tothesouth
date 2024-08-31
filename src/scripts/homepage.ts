import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import hiddenContentBlocks from './modules/hidden-blocks';

document.addEventListener('DOMContentLoaded', () => {
	hiddenContentBlocks();

	const newsSlider = document.querySelector('.main-news__slider');
	if (newsSlider) {
		const buttonPrev = newsSlider.closest('.main-news')?.querySelector('.slider-button-prev');
		const buttonNext = newsSlider.closest('.main-news')?.querySelector('.slider-button-next');
		let newsSwiper = new Swiper(newsSlider, {
			modules: [Navigation],
			speed: 800,
			slideClass: 'news-card',
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
			breakpoints: {
				300: {
					slidesPerView: 1.2,
					spaceBetween: 15,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
	function addFocusInput() {
		let parent = this.closest('form');
		parent.classList.add('focus');
	}
	function removeFocusInput() {
		let parent = this.closest('form');
		parent.classList.remove('focus');
	}
	const searchFormInput = document.querySelector('.search-form__input');
	if (searchFormInput) {
		searchFormInput.addEventListener('focus', addFocusInput);
		searchFormInput.addEventListener('blur', removeFocusInput);
	}
});
