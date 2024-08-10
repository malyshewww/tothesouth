import './modules/dropdown';

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', handleClicks);

	function handleClicks(e) {
		const target = e.target as HTMLElement;
		if (target.matches('.navigation-city__link') && target.parentNode.classList.contains('expanded')) {
			e.preventDefault();
			if (target.classList.contains('show')) {
				target.classList.remove('show');
			} else {
				target.classList.add('show');
			}
		}
		if (!target.matches('.navigation-city__link')) {
			const links = document.querySelectorAll('.navigation-city__link') as HTMLCollection;
			links.forEach((link) => link.classList.remove('show'));
		}
	}
});
