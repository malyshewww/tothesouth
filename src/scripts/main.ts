// import { BaseHelpers } from './helpers/base-helpers';

// BaseHelpers.addLoadedClass();

// import { DynamicAdaptive } from './modules/dynamic-adapt';
import { DynamicAdapt } from './modules/dynamic_adapt';

document.addEventListener('DOMContentLoaded', () => {
	const da = new DynamicAdapt('max');
	da.init();
});
