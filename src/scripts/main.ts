// import { BaseHelpers } from './helpers/base-helpers';

// BaseHelpers.addLoadedClass();

// import { DynamicAdaptive } from './modules/dynamic-adapt';
import { DynamicAdapt } from './modules/dynamic_adapt';
import { popups } from './modules/popups';

document.addEventListener('DOMContentLoaded', () => {
	// Инициализация динамиеского адаптива
	const da = new DynamicAdapt('max');
	da.init();

	// Инициализация модальных окон
	popups();

	function changePositionButton() {
		const textClamps = document.querySelectorAll('.text-clamp');
		if (textClamps) {
			textClamps.forEach((text) => {
				const p = text.querySelector('p');
				const button = text.querySelector('.btn-detail');
				if (text?.scrollHeight > text?.clientHeight) {
					button?.classList.add('changed');
				} else {
					button?.classList.remove('changed');
				}
			});
		}
	}
	changePositionButton();
	window.addEventListener('resize', changePositionButton);

	const menuCategory = document.querySelector('.menu-category');
	const headerMenu = document.querySelector('.menu');
	function menuActions(e) {
		const target = e.target;
		if (target === menuCategory || menuCategory?.contains(target)) {
			return;
		}
		if (target.closest('.header__btn-choice')) {
			target.classList.toggle('active');
			menuCategory?.classList.toggle('active');
		}
		if (!menuCategory || !target.closest('.header__btn-choice')) {
			document.querySelector('.header__btn-choice')?.classList.remove('active');
			menuCategory?.classList.remove('active');
		}
		if (target.closest('.header-burger')) {
			target.classList.toggle('active');
			headerMenu?.classList.toggle('active');
			document.body.classList.toggle('lock');
		}
	}
	document.addEventListener('click', menuActions);

	function openAcc(item, n) {
		item.classList.add('active');
		item.parentElement.classList.add('active');
		item.nextElementSibling.style.height = 'auto';
		item.nextElementSibling.style.opacity = '1';
		let height = item.nextElementSibling.clientHeight + n + 'px';
		item.nextElementSibling.style.height = '0px';
		setTimeout(function () {
			item.nextElementSibling.style.height = height;
		}, 0);
	}

	function closeAcc(item) {
		item.classList.remove('active');
		item.parentElement.classList.remove('active');
		item.nextElementSibling.style.height = item.nextElementSibling.clientHeight + 'px';
		item.nextElementSibling.style.opacity = '0';
		setTimeout(function () {
			item.nextElementSibling.style.height = '0px';
		}, 0);
	}

	function accordions(arr, n, open) {
		if (arr.length != 0) {
			if (open) {
				openAcc(arr[0], n);
			}
			arr.forEach(function (item, i) {
				item.addEventListener('click', function (e) {
					e.preventDefault();
					arr.forEach((item, k) => {
						if (k != i) {
							closeAcc(item);
						}
					});
					if (!item.classList.contains('active')) {
						openAcc(item, n);
					} else {
						closeAcc(item);
					}
				});
			});
		}
	}
	const menuCategoryButtons = document.querySelectorAll('[data-accordeon-button]');
	accordions(menuCategoryButtons, 0);

	// Удаялем filter-button-mobile с других страниц, кроме city-hotels
	const cityHotelsPage = document.querySelector('.city-hotels');
	if (cityHotelsPage == null) {
		const popupMap = document.querySelector('.popup-map');
		const filterButtonMobile = popupMap?.querySelector('.filter-button-mobile');
		if (filterButtonMobile) {
			filterButtonMobile.remove();
		}
	}

	// Динамические данные в меню
	const removeActiveClassLinks = () => {
		const categoryLinksActive = document.querySelectorAll('.menu-category__link.active');
		categoryLinksActive.forEach((link) => link.classList.remove('active'));
	};
	const categoryLinks = document.querySelectorAll('.menu-category__link');
	if (categoryLinks.length) {
		categoryLinks.forEach((link, index) => {
			const parent = link.closest('.menu-category__box')?.querySelector('.menu-category__list');
			let height = `${parent?.scrollHeight}`;
			const subList = link.nextElementSibling as HTMLElement;
			if (subList) {
				link.classList.add('expanded');
			}
			link.addEventListener('click', (e) => {
				e.preventDefault();
				if (subList) {
					if (window.innerWidth > 1024) {
						removeActiveClassLinks();
						link.classList.add('active');
						const dynamicBoxWrapper = document.querySelector('.dynamic-box') as HTMLElement;
						dynamicBoxWrapper.innerHTML = subList !== null ? subList.innerHTML : '';
					} else {
						link.classList.toggle('open');
						if (link.classList.contains('open')) {
							subList.style.height = `${subList?.scrollHeight}px`;
							parent.style.height = `${parent?.scrollHeight + subList?.scrollHeight}px`;
						} else {
							subList.style.height = `0px`;
							parent.style.height = `${height}px`;
						}
						[...categoryLinks].forEach((item2, index2) => {
							if (index != index2) {
								item2.classList.remove('open');
								let contentTwo = item2.nextElementSibling;
								if (contentTwo) {
									contentTwo.style.height = '0px';
									parent.style.height = `auto`;
								}
							}
						});
					}
				}
			});
		});
		if (window.innerWidth > 1024) {
			categoryLinks[0].click();
		}
	}
});
