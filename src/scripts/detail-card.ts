import { Fancybox } from '@fancyapps/ui';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import hiddenContentBlocks from './modules/hidden-blocks';

import './modules/accordeon';
import './modules/custom-scrollbar';

// Fancybox

document.addEventListener('DOMContentLoaded', function () {
	hiddenContentBlocks();

	Fancybox.bind('[data-fancybox]', {
		groupAll: true,
		placeFocusBack: false,
		Image: {
			wheel: 'slide',
		},
		Hash: false,
	});
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
		let reviewsSwiper = new Swiper(reviewsSlider, {
			modules: [Navigation],
			speed: 800,
			slideClass: 'slider-reviews__item',
			wrapperClass: 'slider-reviews__wrapper',
			initialSlide: 0,
			grabCursor: true,
			navigation: {
				prevEl: buttonPrev,
				nextEl: buttonNext,
			},
			breakpoints: {
				300: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				767.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
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
	function initCategoriesSliders() {
		let categoriesSwiper = null;
		if (window.matchMedia('(min-width: 767.98px)').matches) {
			const categoriesSliders = document.querySelectorAll('.categories-slider__body');
			if (categoriesSliders.length) {
				categoriesSliders.forEach((categoriesSlider) => {
					const buttonPrev = categoriesSlider.parentNode.querySelector('.slider-button-prev');
					const buttonNext = categoriesSlider.parentNode.querySelector('.slider-button-next');
					categoriesSwiper = new Swiper(categoriesSlider, {
						modules: [Navigation],
						speed: 800,
						slideClass: 'categories-slider__item',
						spaceBetween: 30,
						navigation: {
							prevEl: buttonPrev,
							nextEl: buttonNext,
						},
						breakpoints: {
							300: {
								slidesPerView: 3,
								spaceBetween: 15,
								slidesPerGroup: 3,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 30,
								slidesPerGroup: 4,
							},
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
						},
					});
				});
			}
		} else {
			if (categoriesSwiper !== null) {
				categoriesSwiper.destroy();
			}
		}
	}
	initCategoriesSliders();

	const gallerySlider = document.querySelector('.gallery-body');
	let gallerySwiper = null;
	function initializeSwiper() {
		if (!gallerySwiper && gallerySlider) {
			const sliderPagination = gallerySlider.querySelector('.slider-pagination');
			gallerySwiper = new Swiper(gallerySlider, {
				modules: [Pagination],
				slideClass: 'gallery-item',
				spaceBetween: 10,
				slidesPerView: 1,
				speed: 800,
				centeredSlides: true,
				pagination: {
					el: sliderPagination,
					type: 'bullets',
					clickable: true,
					// dynamicBullets: true,
				},
			});
		}
	}
	function destroySwiper() {
		if (gallerySwiper) {
			gallerySwiper.destroy();
			gallerySwiper = null;
		}
	}
	function checkScreenWidth() {
		if (window.matchMedia('(max-width: 767.98px)').matches) {
			// Инициализация Swiper, если ширина экрана меньше или равна 991.98 пикселей
			initializeSwiper();
		} else {
			// Отмена инициализации Swiper, если ширина экрана больше 991.98 пикселей
			destroySwiper();
		}
	}
	// Проверяем при загрузке страницы
	checkScreenWidth();
	// Проверяем при изменении размера экрана
	window.addEventListener('resize', checkScreenWidth);

	// Смена цвета для прогресса в блоке отзывов
	const backgrounds = {
		red: '#FF6933',
		orange: '#FEBB02',
		blue: '#1C8CF3',
		green: '#18ABC6',
	};
	function getBackgroundLine(target) {
		let value = target.dataset.value.replace(',', '.');
		if (value === 0) return;
		if (value > 0 && value <= 2.2) {
			target.style.background = backgrounds['red'];
		}
		if (value > 2.2 && value <= 3.5) {
			target.style.background = backgrounds['orange'];
		}
		if (value > 3.5 && value <= 4.2) {
			target.style.background = backgrounds['blue'];
		}
		if (value > 4.2) {
			target.style.background = backgrounds['green'];
		}
	}
	const progressLocation = document.getElementById('progress_location');
	if (progressLocation) {
		getBackgroundLine(progressLocation);
	}
	const progressPrice = document.getElementById('progress_price');
	if (progressPrice) {
		getBackgroundLine(progressPrice);
	}
	const progressPurity = document.getElementById('progress_purity');
	if (progressPurity) {
		getBackgroundLine(progressPurity);
	}
	const progressService = document.getElementById('progress_service');
	if (progressService) {
		getBackgroundLine(progressService);
	}

	const roomSlider = document.querySelector('.room-item-slider');
	if (roomSlider) {
		const sliderPagination = roomSlider.querySelector('.slider-pagination');
		const sliderButtonPrev = roomSlider.querySelector('.slider-button-prev');
		const sliderButtonNext = roomSlider.querySelector('.slider-button-next');
		const roomSwiper = new Swiper(roomSlider, {
			modules: [Navigation, Pagination],
			slideClass: 'room-item-slider__slide',
			spaceBetween: 10,
			slidesPerView: 1,
			speed: 800,
			centeredSlides: true,
			pagination: {
				el: sliderPagination,
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				prevEl: sliderButtonPrev,
				nextEl: sliderButtonNext,
			},
			on: {
				init: function (swiper) {
					const slides = swiper.slides;
					const sliderControls = sliderButtonPrev?.parentNode || sliderButtonNext?.parentNode;
					if (slides.length <= swiper.passedParams.slidesPerView) {
						swiper.navigation.destroy();
						sliderControls?.remove();
						sliderPagination?.remove();
					}
				},
			},
		});
	}

	const places = document.querySelector('.room-item__places')?.innerHTML;
	console.log(places);
});
