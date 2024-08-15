import { Fancybox } from '@fancyapps/ui';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import './modules/accordeon';
// import './modules/map-location';

// Fancybox
Fancybox.bind('[data-fancybox]', {
	groupAll: true,
	placeFocusBack: false,
	Image: {
		wheel: 'slide',
	},
	Hash: false,
});
document.addEventListener('DOMContentLoaded', function () {
	// Исправить баг с дублированием изображений в фенсибоксе, если свипер бесконечный
	const fancyboxInSlider = document.querySelectorAll('.swiper-slide-duplicate [data-fancybox]');
	if (fancyboxInSlider.length) {
		fancyboxInSlider.forEach(function (item) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				const href = item.getAttribute('href');
				item.closest('.swiper')
					.querySelector(".swiper-slide:not(.swiper-slide-duplicate) [data-fancybox][href='" + href + "']")
					.click();
			});
		});
	}
	const reviewsSlider = document.querySelector('.slider-reviews__body');
	if (reviewsSlider) {
		const buttonPrev = reviewsSlider.querySelector('.slider-button-prev');
		const buttonNext = reviewsSlider.querySelector('.slider-button-next');
		let newsSwiper = new Swiper(reviewsSlider, {
			modules: [Navigation],
			slidesPerView: 3,
			speed: 800,
			slideClass: 'slider-reviews__item',
			wrapperClass: 'slider-reviews__wrapper',
			spaceBetween: 20,
			initialSlide: 0,
			navigation: {
				prevEl: buttonPrev,
				nextEl: buttonNext,
			},
			on: {
				init: function (swiper) {
					const slides = swiper.slides;
					const sliderControls = buttonPrev?.parentNode || buttonNext?.parentNode;
					if (slides.length <= swiper.passedParams.slidesPerView) {
						swiper.navigation.destroy();
						sliderControls?.remove();
					}
				},
				progress: function (swiper) {
					if (swiper.progress > 0) {
						swiper.el.classList.add('progress');
					} else {
						swiper.el.classList.remove('progress');
					}
				},
			},
		});
	}

	// Смена цвета для прогресса в блоке отзывов
	const backgrounds = {
		red: '#FF6933',
		orange: '#FEBB02',
		blue: '#1C8CF3',
		green: '#18ABC6',
	};
	const progressItems = document.querySelectorAll('.progress-items');
	[...progressItems].forEach((item) => {
		const line = item.querySelector('.progress-bar span');
		const value = line.dataset.value.replace(',', '.');
		if (value === 0) return;
		if (value > 0 && value <= 2.2) {
			line.style.background = backgrounds['red'];
			line.style.setProperty('background-color', backgrounds['red']);
		}
		if (value > 2.2 && value <= 3.5) {
			line.style.background = backgrounds['orange'];
		}
		if (value > 3.5 && value <= 4.2) {
			line.style.background = backgrounds['blue'];
		}
		if (value > 4.2) {
			line.style.background = backgrounds['green'];
		}
	});
});
