function hiddenContentBlocks() {
	const textHiddenBlocks = document.querySelectorAll('.text-hidden');
	if (textHiddenBlocks.length > 0) {
		textHiddenBlocks.forEach((textHidden) => {
			//фиксированная макс высота
			const itemContent = textHidden.querySelector('.text-hidden-content');
			let heightOld = `${itemContent.clientHeight}px`;
			//высота дочернего блока с текстом
			let heightContent = itemContent.querySelector('.content-box')?.clientHeight + 'px';
			//если высота текста меньше или равна заданной фиксированной, то скрываем кнопку показать еще
			if (Number.parseInt(heightContent) <= Number.parseInt(heightOld)) {
				textHidden.parentNode.querySelector('.btn-show-more').style.display = 'none';
				textHidden.classList.add('text-hidden--not-scroll');
			} else {
				function textHide() {
					textHidden.classList.toggle('active');
					textHidden?.parentNode.querySelector('.btn-show-more')?.classList.toggle('active');
					if (textHidden.classList.contains('active')) {
						itemContent.style.maxHeight = heightContent;
					} else {
						itemContent.style.maxHeight = heightOld;
					}
				}
				textHidden.parentNode.querySelector('.btn-show-more')?.addEventListener('click', () => {
					textHide();
				});
				textHidden.querySelector('.text-hidden-gradient')?.addEventListener('click', () => {
					textHide();
				});
			}
		});
	}
}

export default hiddenContentBlocks;
