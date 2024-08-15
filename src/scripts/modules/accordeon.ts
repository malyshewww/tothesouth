// Accordeon
const accordeons = document.querySelectorAll('.accordeon');
if (accordeons.length) {
	[...accordeons].forEach((accordeon) => {
		if (accordeon) {
			const accordeonItems = accordeon.querySelectorAll('.accordeon__item');
			[...accordeonItems].forEach((item, index) => {
				const header = item.querySelector('.accordeon__header');
				let content = item.querySelector('.accordeon__content');
				if (accordeon.classList.contains('accordeon-price')) {
					content.style.height = `${content.scrollHeight}px`;
					item.classList.add('active');
				}
				header.addEventListener('click', () => {
					console.log('header');
					item.classList.toggle('active');
					if (item.classList.contains('active')) {
						content.style.height = `${content.scrollHeight}px`;
					} else {
						content.style.height = '0px';
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
