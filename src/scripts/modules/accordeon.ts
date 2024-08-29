// Accordeon
import { simpleBar } from './custom-scrollbar';

const accordeons = document.querySelectorAll('.accordeon');
if (accordeons.length) {
	[...accordeons].forEach((accordeon) => {
		if (accordeon) {
			const accordeonItems = accordeon.querySelectorAll('.accordeon__item');
			[...accordeonItems].forEach((item, index) => {
				const header = item.querySelector('.accordeon__header');
				let content = item.querySelector('.accordeon__content');
				if (accordeon.classList.contains('accordeon-price')) {
					content.style.height = `${simpleBar ? content?.scrollHeight + 1 : content?.scrollHeight}px`;
					item.classList.add('active');
				}
				header.addEventListener('click', () => {
					item.classList.toggle('active');
					if (item.classList.contains('active')) {
						content.style.height = `${content.scrollHeight}px`;
						// content.style.minHeight = `auto`;
					} else {
						content.style.height = '0px';
						// content.style.minHeight = `0px`;
					}
					removeAccordeonOpen(index);
				});
			});
			function removeAccordeonOpen(index1) {
				[...accordeonItems].forEach((item2, index2) => {
					if (index1 != index2) {
						item2.classList.remove('active');
						let contentTwo = item2.querySelector('.accordeon__content');
						contentTwo.style.height = '0px';
					}
				});
			}
		}
	});
}
function initAccordeonMobile() {
	if (window.innerWidth <= 767.98) {
		const accordeonsMobile = document.querySelectorAll('.accordeon-mobile');
		if (accordeonsMobile.length) {
			[...accordeonsMobile].forEach((accordeon) => {
				if (accordeon) {
					const accordeonItems = accordeon.querySelectorAll('.accordeon-mobile__item');
					[...accordeonItems].forEach((item, index) => {
						const header = item.querySelector('.accordeon-mobile__header');
						let content = item.querySelector('.accordeon-mobile__content');
						const accordeonParentContent = accordeon.closest('.accordeon__content');
						header.addEventListener('click', () => {
							console.log(accordeonParentContent);
							item.classList.toggle('active');
							if (item.classList.contains('active')) {
								content.style.height = `${content.scrollHeight}px`;
								accordeonParentContent.style.height = `100%`;
								accordeonParentContent.style.maxHeight = `100%`;
								// accordeonParentContent.style.height = `${accordeonParentContent?.clientHeight + content.scrollHeight}px`;
							} else {
								// accordeonParentContent.style.minHeight = `auto`;
								accordeonParentContent.style.height = `100%`;
								content.style.height = '0px';
							}
							accordeonItems.forEach((accItem) => {
								if (!accItem.classList.contains('active')) {
									accordeonParentContent.style.maxHeight = '100%';
									accordeonParentContent.style.height = '100%';
								}
							});
							removeAccordeonOpen(index);
						});
					});
					function removeAccordeonOpen(index1) {
						[...accordeonItems].forEach((item2, index2) => {
							if (index1 != index2) {
								item2.classList.remove('active');
								let contentTwo = item2.querySelector('.accordeon-mobile__content');
								contentTwo.style.height = '0px';
							}
						});
					}
				}
			});
		}
	}
}
initAccordeonMobile();
