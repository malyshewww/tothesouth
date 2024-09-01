import VanillaCalendar from 'vanilla-calendar-pro';
import { IOptions } from 'vanilla-calendar-pro/types';

let resultString = '';
const overlay = document.querySelector('.overlay');
const device = window.innerWidth >= 767.98 ? 'desktop' : 'mobile';

const calendarOptions = (device) => {
	if (device === 'desktop') {
		return {
			DOMTemplates: {
				multiple: `
				<div class="vanilla-calendar-container">
					<div class="vanilla-calendar-choices">
						<div class="vanilla-calendar-choices__item">
							<div class="vanilla-calendar-choices__caption">Заезд</div>
							<div class="vanilla-calendar-choices__value" id="vanilla-calendar-value-from"></div>
						</div>
						<div class="vanilla-calendar-choices__item">
							<div class="vanilla-calendar-choices__caption">Выезд</div>
							<div class="vanilla-calendar-choices__value" id="vanilla-calendar-value-to">
							</div>
						</div>
					</div>
					<div class="vanilla-calendar-grid">
						<#Multiple>
						<div class="vanilla-calendar-column">
							<div class="vanilla-calendar-header">
								<#ArrowPrev />
							<div class="vanilla-calendar-header__content">
								<#Month />
								<#Year />
							</div>
							<#ArrowNext />
							</div>
							<div class="vanilla-calendar-wrapper">
							<#WeekNumbers />
							<div class="vanilla-calendar-content">
								<#Week />
								<#Days />
							</div>
							</div>
						</div>
						<#/Multiple>
					</div>
					<div class="vanilla-calendar-footer">
						<div class="vanilla-calendar-footer__buttons">
						<button class="vanilla-calendar-button vanilla-calendar-button-reset btn btn-blue-transparent" id="vanilla-calendar-button-reset" type="button">Сбросить</button>
						<button class="vanilla-calendar-button vanilla-calendar-button-add btn btn-blue" id="vanilla-calendar-button-add" type="button">Применить</button>
						</div>
					</div> 
					<#ControlTime />
				</div>
				`,
			},
			input: true,
			type: 'multiple',
			settings: {
				lang: 'ru',
				range: {
					disablePast: true,
				},
				selection: {
					day: 'multiple-ranged',
				},
				visibility: {
					weekend: false,
					daysOutside: false,
				},
			},
		};
	} else {
		return {
			DOMTemplates: {
				default: `
					<div class="vanilla-calendar-container">
						<div class="vanilla-calendar-choices">
							<div class="vanilla-calendar-choices__item">
								<div class="vanilla-calendar-choices__caption">Заезд</div>
								<div class="vanilla-calendar-choices__value" id="vanilla-calendar-value-from"></div>
							</div>
							<div class="vanilla-calendar-choices__item">
								<div class="vanilla-calendar-choices__caption">Выезд</div>
								<div class="vanilla-calendar-choices__value" id="vanilla-calendar-value-to">
								</div>
							</div>
						</div>
						<div class="vanilla-calendar-header">
							<#ArrowPrev />
							<div class="vanilla-calendar-header__content">
							<#Month />
							<#Year />
							</div>
							<#ArrowNext />
						</div>
						<div class="vanilla-calendar-wrapper">
							<#WeekNumbers />
							<div class="vanilla-calendar-content">
							<#Week />
							<#Days />
							</div>
						</div>
						<div class="vanilla-calendar-footer">
							<div class="vanilla-calendar-footer__buttons">
								<button class="vanilla-calendar-button vanilla-calendar-button-reset btn btn-blue-transparent" id="vanilla-calendar-button-reset" type="button">Сбросить</button>
								<button class="vanilla-calendar-button vanilla-calendar-button-add btn btn-blue" id="vanilla-calendar-button-add" type="button">Применить</button>
							</div>
						</div> 
					<#ControlTime />
				</div> 
				`,
			},
			type: 'default',
			input: true,
			settings: {
				lang: 'ru',
				selection: {
					day: 'multiple-ranged',
				},
				visibility: {
					weekend: false,
					daysOutside: false,
				},
			},
		};
	}
};

const opts = calendarOptions(device);

const options: IOptions = {
	...opts,
	actions: {
		changeToInput(e, self) {
			if (!self.HTMLInputElement) return;
			if (self.selectedDates[1]) {
				self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
				self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
			} else if (self.selectedDates[0]) {
				self.HTMLInputElement.value = self.selectedDates[0];
			} else {
				self.HTMLInputElement.value = '';
			}
		},
		clickDay(event, self) {
			const from = self.HTMLElement.querySelector('#vanilla-calendar-value-from');
			const to = self.HTMLElement.querySelector('#vanilla-calendar-value-to');
			const inputFrom = document.querySelector('input[name="date_from"]');
			const inputTo = document.querySelector('input[name="date_to"]');
			const inputCountNight = document.querySelector('input[name="count_night"]');
			const choicesDates = self.HTMLElement.querySelector('.vanilla-calendar-choices');
			const dateFrom = self.selectedDates[0];
			const dateTo = self.selectedDates.at(-1);
			const buttonAdd = self.HTMLElement.querySelector('#vanilla-calendar-button-add');
			const buttonReset = self.HTMLElement.querySelector('#vanilla-calendar-button-reset');
			if (choicesDates) {
				if (dateFrom) {
					choicesDates.classList.add('active');
				}
			}
			if (from) {
				from.textContent = dateFrom.split('-').reverse().join('.');
			}
			if (to) {
				to.textContent = dateTo.split('-').reverse().join('.');
			}
			if (inputFrom) {
				inputFrom.value = dateFrom;
			}
			if (inputTo) {
				inputTo.value = dateTo;
			}
			if (inputCountNight) {
				inputCountNight.value = getNumberOfDays(dateFrom, dateTo);
			}
			if (dateFrom !== '' || dateTo !== '') {
				buttonAdd?.removeAttribute('disabled');
				buttonReset?.removeAttribute('disabled');
			}
			const differenceDays = getNumberOfDays(dateFrom, dateTo);
			const night = getNoun(differenceDays, 'ночь', 'ночи', 'ночей');
			const mounthFrom = getMonthNameInGenitiveCase(new Date(dateFrom));
			const mounthTo = getMonthNameInGenitiveCase(new Date(dateTo));
			const numberDayFrom = getDay(dateFrom);
			const numberDayTo = getDay(dateTo);
			resultString = `${numberDayFrom} ${mounthFrom} - ${numberDayTo} ${mounthTo}, ${differenceDays} ${night}`;
			console.log(resultString);
			// console.log(self.selectedDates);
		},
		hideCalendar(self) {
			const calendarButton = document.querySelector('#calendar-input');
			if (calendarButton) {
				calendarButton.classList.remove('active');
			}
		},
		showCalendar(self) {
			const buttonAdd = self.HTMLElement.querySelector('#vanilla-calendar-button-add');
			const buttonReset = self.HTMLElement.querySelector('#vanilla-calendar-button-reset');
			const calendarButton = document.querySelector('#calendar-input');
			const dropdownButtons = document.querySelectorAll('.custom-dropdown__btn');
			const calendarContainer = self.HTMLElement.querySelector('.vanilla-calendar-container');
			const calendar = self.HTMLElement;
			if (window.innerWidth <= 767.98) {
				calendar.addEventListener('click', () => {
					// self.HTMLElement.classList.remove('active');
					// self.hide();
				});
				if (calendarContainer) {
					calendarContainer.addEventListener('click', (e) => {
						// console.log(e);
						// e.stopPropagation();
					});
				}
			}
			if (dropdownButtons) {
				dropdownButtons.forEach((btn) => {
					btn.classList.remove('active');
				});
			}
			if (calendarButton) {
				calendarButton.classList.add('active');
			}
			if (buttonAdd) {
				if (self.selectedDates[0] == null || self.selectedDates[self.selectedDates.length - 1] == null) {
					buttonAdd.setAttribute('disabled', true);
					buttonReset.setAttribute('disabled', true);
				}
				buttonAdd.addEventListener('click', () => {
					if (calendarButton) {
						calendarButton.innerHTML = resultString;
					}
					self.hide();
					if (window.innerWidth <= 767.98) {
						self.HTMLElement.classList.remove('active');
						overlay?.classList.remove('active');
					}
				});
			}
			if (buttonReset) {
				buttonReset.addEventListener('click', () => {
					if (calendarButton) {
						calendarButton.innerHTML = resultString;
					}
					buttonReset.setAttribute('disabled', true);
					buttonAdd?.setAttribute('disabled', true);
					const from = self.HTMLElement.querySelector('#vanilla-calendar-value-from');
					const to = self.HTMLElement.querySelector('#vanilla-calendar-value-to');
					const inputFrom = document.querySelector('input[name="date_from"]');
					const inputTo = document.querySelector('input[name="date_to"]');
					const inputCountNight = document.querySelector('input[name="count_night"]');
					const dayBtns = self.HTMLElement.querySelectorAll('.vanilla-calendar-day__btn');
					const choicesDates = self.HTMLElement.querySelector('.vanilla-calendar-choices');
					if (choicesDates) {
						choicesDates.classList.remove('active');
					}
					if (dayBtns) {
						[...dayBtns].forEach((btn) => {
							btn.classList.remove('vanilla-calendar-day__btn_selected');
						});
					}
					if (from) {
						from.textContent = '';
					}
					if (to) {
						to.textContent = '';
					}
					if (inputFrom) {
						inputFrom.value = '';
					}
					if (inputTo) {
						inputTo.value = '';
					}
					if (inputCountNight) {
						inputCountNight.value = '';
					}
					self.selectedDates = [];
					console.log(self);
					resultString = '';
				});
				if (overlay && window.innerWidth <= 767.98) {
					overlay.addEventListener('click', () => {
						self.HTMLElement.classList.remove('active');
					});
				}
			}
			if (window.innerWidth <= 767.98) {
				overlay?.classList.add('active');
				self.HTMLElement.classList.add('active');
			}
		},
	},
};

const getDay = (date) => {
	return date.split('-').reverse()[0];
};

const getMonthNameInGenitiveCase = (date = new Date()) =>
	date
		.toLocaleString('ru', {
			month: 'long',
			day: 'numeric',
		})
		.split(' ')[1];

function getNumberOfDays(start, end) {
	const date1 = new Date(start);
	const date2 = new Date(end);
	// One day in milliseconds
	const oneDay = 1000 * 3600 * 24;
	// Calculating the time difference between two dates
	const diffInTime = date2.getTime() - date1.getTime();
	// Calculating the no. of days between two dates
	const diffInDays = Math.round(diffInTime / oneDay);
	return diffInDays;
}

function getNoun(number, one, two, five) {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five;
	}
	n %= 10;
	if (n === 1) {
		return one;
	}
	if (n >= 2 && n <= 4) {
		return two;
	}
	return five;
}

const calendarTrigger = document.getElementById('calendar-input');
if (calendarTrigger) {
	const calendarInput = new VanillaCalendar(calendarTrigger, options);
	calendarInput.init();
}

const dropdownButton = document.querySelector('#calendar-input');
if (dropdownButton) {
	dropdownButton.addEventListener('click', () => {
		if (!dropdownButton.classList.contains('active')) {
			// calendarInput.hide();
			console.log('not act');
		} else {
			console.log('act');
			// calendarInput.show();
		}
	});
}
