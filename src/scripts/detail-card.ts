import { Fancybox } from '@fancyapps/ui';

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
});
