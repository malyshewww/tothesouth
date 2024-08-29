// import { BaseHelpers } from './helpers/base-helpers';

// BaseHelpers.addLoadedClass();

// import { DynamicAdaptive } from './modules/dynamic-adapt';
import { DynamicAdapt } from './modules/dynamic_adapt';

document.addEventListener('DOMContentLoaded', () => {
	const da = new DynamicAdapt('max');
	da.init();
	function changePositionButton() {
		const textClamps = document.querySelectorAll('.text-clamp');
		if (textClamps) {
			textClamps.forEach((text) => {
				const button = text.querySelector('.btn-detail');
				if (text?.scrollHeight > text?.getBoundingClientRect().height + 1) {
					button?.classList.add('changed');
				} else {
					button?.classList.remove('changed');
				}
			});
		}
	}
	changePositionButton();
	window.addEventListener('resize', changePositionButton);
});
