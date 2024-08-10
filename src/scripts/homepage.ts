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
});
