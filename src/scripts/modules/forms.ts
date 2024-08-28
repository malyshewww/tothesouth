const fields = document.querySelectorAll('.form-input, .form-textarea');
/*=== Add focus ===*/
function addfocus() {
	let parent = this.closest('.form-item');
	parent.classList.add('focus');
}
/*=== Remove focus ===*/
function remfocus() {
	let parent = this.closest('.form-item');
	if (this.value === '') {
		parent.classList.remove('focus');
	}
}

fields.forEach((input) => {
	const errorBlock = input.closest('.form-item')?.querySelector('.error-message');
	if (errorBlock || input.value !== '') {
		let parent = input.closest('.form-item');
		parent.classList.add('focus');
	}
	input.addEventListener('focus', addfocus);
	input.addEventListener('blur', remfocus);
});
