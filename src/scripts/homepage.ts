import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
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

	/*
		.text-hidden.seo-text 
                .text-hidden-content
                    .content
                        p  
                    button.text-hidden-content__gradient       
                
                button.text-hidden__btn.multiline-stroke 
                    span.text-hidden__btn-more Далее
                    span.text-hidden__btn-hide Свернуть
	*/
	//Блок со скрытым текстом
	const textHiddenBlocks = document.querySelectorAll('.text-hidden');
	if (textHiddenBlocks.length > 0) {
		textHiddenBlocks.forEach((textHidden) => {
			//фиксированная макс высота
			const itemContent = textHidden.querySelector('.text-hidden-content');
			let heightOld = itemContent.clientHeight + 'px';
			//высота дочернего блока с текстом
			let heightContent = itemContent.querySelector('.content').clientHeight + 'px';
			//если высота текста меньше или равна заданной фиксированной, то скрываем кнопку показать еще
			if (
				Number.parseInt(heightContent) === Number.parseInt(heightOld) ||
				Number.parseInt(heightContent) < Number.parseInt(heightOld)
			) {
				textHidden.querySelector('.text-hidden__btn').style.display = 'none';
				textHidden.classList.add('text-hidden--not-scroll');
			} else {
				function textHide() {
					textHidden.classList.toggle('open');
					if (textHidden.classList.contains('open')) {
						itemContent.style.maxHeight = heightContent;
						ScrollTrigger.refresh();
					} else {
						itemContent.style.maxHeight = heightOld;
						ScrollTrigger.refresh();
					}
				}
				textHidden.querySelector('.text-hidden__btn').addEventListener('click', () => {
					textHide();
				});
				textHidden.querySelector('.text-hidden-content__gradient').addEventListener('click', () => {
					textHide();
				});
			}
		});
	}
});
