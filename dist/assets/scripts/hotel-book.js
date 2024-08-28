import {
  mask_phone_default
} from "../chunks/chunk-VXRPEELR.js";
import "../chunks/chunk-FDCBVWR5.js";
import "../chunks/chunk-D3KMJQV6.js";

// node_modules/vanilla-calendar-pro/build/vanilla-calendar.min.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (e, t, n) => t in e ? __defProp(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var __spreadValues = (e, t) => {
  for (var n in t || (t = {})) __hasOwnProp.call(t, n) && __defNormalProp(e, n, t[n]);
  if (__getOwnPropSymbols) for (var n of __getOwnPropSymbols(t)) __propIsEnum.call(t, n) && __defNormalProp(e, n, t[n]);
  return e;
};
var __publicField = (e, t, n) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n);
var classes = { calendar: "vanilla-calendar", calendarDefault: "vanilla-calendar_default", calendarMultiple: "vanilla-calendar_multiple", calendarMonth: "vanilla-calendar_month", calendarYear: "vanilla-calendar_year", calendarHidden: "vanilla-calendar_hidden", calendarToInput: "vanilla-calendar_to-input", calendarToInputTop: "vanilla-calendar_to-input_top", calendarToInputBottom: "vanilla-calendar_to-input_bottom", controls: "vanilla-calendar-controls", grid: "vanilla-calendar-grid", gridDisabled: "vanilla-calendar-grid_disabled", column: "vanilla-calendar-column", columnMonth: "vanilla-calendar-column_month", columnYear: "vanilla-calendar-column_year", header: "vanilla-calendar-header", headerContent: "vanilla-calendar-header__content", month: "vanilla-calendar-month", monthDisabled: "vanilla-calendar-month_disabled", year: "vanilla-calendar-year", yearDisabled: "vanilla-calendar-year_disabled", arrow: "vanilla-calendar-arrow", arrowPrev: "vanilla-calendar-arrow_prev", arrowNext: "vanilla-calendar-arrow_next", wrapper: "vanilla-calendar-wrapper", content: "vanilla-calendar-content", week: "vanilla-calendar-week", weekDay: "vanilla-calendar-week__day", weekDayWeekend: "vanilla-calendar-week__day_weekend", days: "vanilla-calendar-days", daysSelecting: "vanilla-calendar-days_selecting", months: "vanilla-calendar-months", monthsSelecting: "vanilla-calendar-months_selecting", monthsMonth: "vanilla-calendar-months__month", monthsMonthSelected: "vanilla-calendar-months__month_selected", monthsMonthDisabled: "vanilla-calendar-months__month_disabled", years: "vanilla-calendar-years", yearsSelecting: "vanilla-calendar-years_selecting", yearsYear: "vanilla-calendar-years__year", yearsYearSelected: "vanilla-calendar-years__year_selected", yearsYearDisabled: "vanilla-calendar-years__year_disabled", time: "vanilla-calendar-time", timeContent: "vanilla-calendar-time__content", timeHours: "vanilla-calendar-time__hours", timeMinutes: "vanilla-calendar-time__minutes", timeKeeping: "vanilla-calendar-time__keeping", timeRanges: "vanilla-calendar-time__ranges", timeRange: "vanilla-calendar-time__range", day: "vanilla-calendar-day", dayHoverFirst: "vanilla-calendar-day_hover-first", dayHoverLast: "vanilla-calendar-day_hover-last", dayHoverIntermediate: "vanilla-calendar-day_hover-intermediate", daySelectedFirst: "vanilla-calendar-day_selected-first", daySelectedLast: "vanilla-calendar-day_selected-last", daySelectedIntermediate: "vanilla-calendar-day_selected-intermediate", dayPopup: "vanilla-calendar-day__popup", dayBtn: "vanilla-calendar-day__btn", dayBtnPrev: "vanilla-calendar-day__btn_prev", dayBtnNext: "vanilla-calendar-day__btn_next", dayBtnToday: "vanilla-calendar-day__btn_today", dayBtnSelected: "vanilla-calendar-day__btn_selected", dayBtnHover: "vanilla-calendar-day__btn_hover", dayBtnDisabled: "vanilla-calendar-day__btn_disabled", dayBtnWeekend: "vanilla-calendar-day__btn_weekend", dayBtnHoliday: "vanilla-calendar-day__btn_holiday", weekNumbers: "vanilla-calendar-week-numbers", weekNumbersTitle: "vanilla-calendar-week-numbers__title", weekNumbersContent: "vanilla-calendar-week-numbers__content", weekNumber: "vanilla-calendar-week-number", isFocus: "vanilla-calendar-is-focus" };
var DOMMultiple = (e) => `<div class="${e.controls}"><#ArrowPrev /><#ArrowNext /></div><div class="${e.grid}"><#Multiple><div class="${e.column}"><div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div></div><#/Multiple></div><#ControlTime />`;
var DOMMonths = (e) => `<div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><div class="${e.content}"><#Months /></div></div>`;
var DOMYears = (e) => `<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><div class="${e.content}"><#Years /></div></div>`;
var DefaultOptionsCalendar = class {
  constructor() {
    var e;
    __publicField(this, "isInit", false), __publicField(this, "isInputInit", false), __publicField(this, "input", false), __publicField(this, "type", "default"), __publicField(this, "months", 2), __publicField(this, "jumpMonths", 1), __publicField(this, "jumpToSelectedDate", false), __publicField(this, "toggleSelected", true), __publicField(this, "date", { min: "1970-01-01", max: "2470-12-31", today: /* @__PURE__ */ new Date() }), __publicField(this, "settings", { lang: "en", iso8601: true, range: { min: void 0, max: void 0, disablePast: false, disableGaps: false, edgesOnly: false, disableAllDays: false, disableWeekday: void 0, disabled: void 0, enabled: void 0 }, selection: { day: "single", month: true, year: true, time: false, controlTime: "all", stepHours: 1, stepMinutes: 1, cancelableDay: true }, selected: { dates: void 0, month: void 0, year: void 0, holidays: void 0, time: void 0 }, visibility: { theme: "system", themeDetect: "html[data-theme]", monthShort: true, weekNumbers: false, weekend: true, today: true, disabled: false, daysOutside: true, positionToInput: "left" } }), __publicField(this, "locale", { months: [], weekday: [] }), __publicField(this, "sanitizer", (e2) => e2), __publicField(this, "actions", { clickDay: null, clickWeekNumber: null, clickMonth: null, clickYear: null, clickArrow: null, changeTime: null, changeToInput: null, getDays: null, getMonths: null, getYears: null, initCalendar: null, updateCalendar: null, destroyCalendar: null, showCalendar: null, hideCalendar: null }), __publicField(this, "popups", {}), __publicField(this, "CSSClasses", __spreadValues({}, classes)), __publicField(this, "DOMTemplates", { default: (e = this.CSSClasses, `<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div><#ControlTime />`), multiple: DOMMultiple(this.CSSClasses), month: DOMMonths(this.CSSClasses), year: DOMYears(this.CSSClasses) }), __publicField(this, "HTMLElement"), __publicField(this, "HTMLOriginalElement"), __publicField(this, "HTMLInputElement"), __publicField(this, "rangeMin"), __publicField(this, "rangeMax"), __publicField(this, "rangeDisabled"), __publicField(this, "rangeEnabled"), __publicField(this, "selectedDates"), __publicField(this, "selectedHolidays"), __publicField(this, "selectedMonth"), __publicField(this, "selectedYear"), __publicField(this, "selectedHours"), __publicField(this, "selectedMinutes"), __publicField(this, "selectedKeeping"), __publicField(this, "selectedTime"), __publicField(this, "currentType"), __publicField(this, "correctMonths"), __publicField(this, "viewYear"), __publicField(this, "dateMin"), __publicField(this, "dateMax");
  }
};
var getDateString = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
var getDate = (e) => /* @__PURE__ */ new Date(`${e}T00:00:00`);
var parseDates = (e) => e.reduce((e2, t) => {
  if (t instanceof Date || "number" == typeof t) {
    const n = t instanceof Date ? t : new Date(t);
    e2.push(n.toISOString().substring(0, 10));
  } else t.match(/^(\d{4}-\d{2}-\d{2})$/g) ? e2.push(t) : t.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g, (t2, n, a) => {
    const s = getDate(n), l = getDate(a), i = new Date(s.getTime());
    for (; i <= l; i.setDate(i.getDate() + 1)) e2.push(getDateString(i));
    return t2;
  });
  return e2;
}, []);
var getLocalDate = () => {
  const e = /* @__PURE__ */ new Date();
  return new Date(e.getTime() - 6e4 * e.getTimezoneOffset()).toISOString().substring(0, 10);
};
var transformTime12 = (e) => e ? { 0: "12", 13: "01", 14: "02", 15: "03", 16: "04", 17: "05", 18: "06", 19: "07", 20: "08", 21: "09", 22: "10", 23: "11" }[Number(e)] || String(e) : "";
var messages = { notFoundSelector: (e) => `${e} is not found, check the first argument passed to new VanillaCalendar.`, notInit: 'The calendar has not been initialized, please initialize it using the "init()" method first.', notLocale: 'You specified "define" for "settings.lang" but did not provide the required values for "locale.weekday" or "locale.months".', incorrectTheme: 'Incorrect name of theme in "settings.visibility.theme".', incorrectTime: "The value of the time property can be: false, true, 12 or 24." };
var initSelectedMonthYear = (e) => {
  var t;
  if (e.jumpToSelectedDate && (null == (t = e.settings.selected.dates) ? void 0 : t.length) && void 0 === e.settings.selected.month && void 0 === e.settings.selected.year) {
    const t2 = getDate(parseDates(e.settings.selected.dates)[0]);
    e.settings.selected.month = t2.getMonth(), e.settings.selected.year = t2.getFullYear();
  }
  const n = void 0 !== e.settings.selected.month && Number(e.settings.selected.month) >= 0 && Number(e.settings.selected.month) < 12, a = void 0 !== e.settings.selected.year && Number(e.settings.selected.year) >= 0 && Number(e.settings.selected.year) <= 9999;
  e.selectedMonth = n ? Number(e.settings.selected.month) : e.date.today.getMonth(), e.selectedYear = a ? Number(e.settings.selected.year) : e.date.today.getFullYear(), e.viewYear = e.selectedYear;
};
var initRange = (e) => {
  var t, n, a;
  "today" === e.date.min && (e.date.min = getLocalDate()), "today" === e.date.max && (e.date.max = getLocalDate()), "today" === e.settings.range.min && (e.settings.range.min = getLocalDate()), "today" === e.settings.range.max && (e.settings.range.max = getLocalDate()), e.settings.range.min = e.settings.range.min ? getDate(e.date.min) >= getDate(e.settings.range.min) ? e.date.min : e.settings.range.min : e.date.min, e.settings.range.max = e.settings.range.max ? getDate(e.date.max) <= getDate(e.settings.range.max) ? e.date.max : e.settings.range.max : e.date.max;
  const s = e.settings.range.disablePast && !e.settings.range.disableAllDays && getDate(e.settings.range.min) < e.date.today;
  e.rangeMin = s || e.settings.range.disableAllDays ? getDateString(e.date.today) : e.settings.range.min, e.rangeMax = e.settings.range.disableAllDays ? getDateString(e.date.today) : e.settings.range.max, e.rangeDisabled = e.settings.range.disabled && !e.settings.range.disableAllDays ? parseDates(e.settings.range.disabled) : e.settings.range.disableAllDays ? [e.rangeMin] : [], e.rangeDisabled.length > 1 && e.rangeDisabled.sort((e2, t2) => +new Date(e2) - +new Date(t2)), e.rangeEnabled = e.settings.range.enabled ? parseDates(e.settings.range.enabled) : [], (null == (t = e.rangeEnabled) ? void 0 : t[0]) && (null == (n = e.rangeDisabled) ? void 0 : n[0]) && (e.rangeDisabled = e.rangeDisabled.filter((t2) => !e.rangeEnabled.includes(t2))), e.rangeEnabled.length > 1 && e.rangeEnabled.sort((e2, t2) => +new Date(e2) - +new Date(t2)), (null == (a = e.rangeEnabled) ? void 0 : a[0]) && e.settings.range.disableAllDays && (e.rangeMin = e.rangeEnabled[0], e.rangeMax = e.rangeEnabled[e.rangeEnabled.length - 1]);
};
var initSelectedDates = (e) => {
  var t, n;
  e.selectedDates = (null == (t = e.settings.selected.dates) ? void 0 : t[0]) ? parseDates(e.settings.selected.dates) : [], e.selectedHolidays = (null == (n = e.settings.selected.holidays) ? void 0 : n[0]) ? parseDates(e.settings.selected.holidays) : [];
};
var initDateMinMax = (e) => {
  e.dateMin = e.settings.visibility.disabled ? getDate(e.date.min) : getDate(e.rangeMin), e.dateMax = e.settings.visibility.disabled ? getDate(e.date.max) : getDate(e.rangeMax);
};
var initTime = (e) => {
  const t = true === e.settings.selection.time || 12 === e.settings.selection.time;
  if (t || 24 === e.settings.selection.time) {
    let n = false;
    if ("string" == typeof e.settings.selected.time) {
      const a = t ? /^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g : /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;
      e.settings.selected.time.replace(a, (a2, s, l, i) => (s && l && (n = true, e.selectedHours = s, e.selectedMinutes = l), i && t ? e.selectedKeeping = i : t && (e.selectedKeeping = "AM"), ""));
    }
    !n && t ? (e.selectedHours = transformTime12(String(e.date.today.getHours())), e.selectedMinutes = String(e.date.today.getMinutes()), e.selectedKeeping = Number(e.date.today.getHours()) >= 12 ? "PM" : "AM") : n || (e.selectedHours = String(e.date.today.getHours()), e.selectedMinutes = String(e.date.today.getMinutes())), e.selectedHours = Number(e.selectedHours) < 10 ? `0${Number(e.selectedHours)}` : `${e.selectedHours}`, e.selectedMinutes = Number(e.selectedMinutes) < 10 ? `0${Number(e.selectedMinutes)}` : `${e.selectedMinutes}`, e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping ? ` ${e.selectedKeeping}` : ""}`;
  } else if (e.settings.selection.time) throw new Error(messages.incorrectTime);
};
var initCorrectMonths = (e) => {
  e.correctMonths = "multiple" === e.type ? 1 === e.months ? 2 : e.months > 12 ? 12 : e.months : 1;
};
var setVariables = (e) => {
  e.currentType = e.type, initSelectedMonthYear(e), initRange(e), initSelectedDates(e), initDateMinMax(e), initTime(e), initCorrectMonths(e);
};
var setVisibilityArrows = ({ arrowPrev: e, arrowNext: t, isPrevHidden: n, isNextHidden: a }) => {
  e.style.visibility = n ? "hidden" : "", t.style.visibility = a ? "hidden" : "";
};
var visibilityArrows = (e) => {
  var t, n;
  if ("month" === e.currentType) return;
  const a = null == (t = e.HTMLElement) ? void 0 : t.querySelector(`.${e.CSSClasses.arrowPrev}`), s = null == (n = e.HTMLElement) ? void 0 : n.querySelector(`.${e.CSSClasses.arrowNext}`);
  if (!a || !s) return;
  ({ default: () => {
    const t2 = getDate(getDateString(new Date(e.selectedYear, e.selectedMonth, 1))), n2 = new Date(t2.getTime()), l = new Date(t2.getTime());
    n2.setMonth(n2.getMonth() - e.jumpMonths), l.setMonth(l.getMonth() + e.jumpMonths), e.settings.selection.year || (e.dateMin.setFullYear(t2.getFullYear()), e.dateMax.setFullYear(t2.getFullYear()));
    const i = !e.settings.selection.month || n2.getFullYear() < e.dateMin.getFullYear() || n2.getFullYear() === e.dateMin.getFullYear() && n2.getMonth() < e.dateMin.getMonth(), r = !e.settings.selection.month || l.getFullYear() > e.dateMax.getFullYear() || l.getFullYear() === e.dateMax.getFullYear() && l.getMonth() > e.dateMax.getMonth();
    setVisibilityArrows({ arrowPrev: a, arrowNext: s, isPrevHidden: i, isNextHidden: r });
  }, year: () => {
    setVisibilityArrows({ arrowPrev: a, arrowNext: s, isPrevHidden: e.dateMin.getFullYear() && e.viewYear - 7 <= e.dateMin.getFullYear(), isNextHidden: e.dateMax.getFullYear() && e.viewYear + 7 >= e.dateMax.getFullYear() });
  } })["multiple" === e.currentType ? "default" : e.currentType]();
};
var getWeekNumber = (e, t) => {
  if (!e) return null;
  const n = getDate(e), a = t ? n.getDay() || 7 : n.getDay();
  n.setDate(n.getDate() + 4 - a);
  const s = new Date(n.getFullYear(), 0, 1), l = Math.ceil(((+n - +s) / 864e5 + 1) / 7);
  return { year: n.getFullYear(), week: l };
};
function getOffset(e) {
  if (!e || !e.getBoundingClientRect) return { top: 0, bottom: 0, left: 0, right: 0 };
  const t = e.getBoundingClientRect(), n = document.documentElement;
  return { bottom: t.bottom, right: t.right, top: t.top + window.scrollY - n.clientTop, left: t.left + window.scrollX - n.clientLeft };
}
function getWindowScrollPosition() {
  return { left: window.scrollX || document.documentElement.scrollLeft || 0, top: window.scrollY || document.documentElement.scrollTop || 0 };
}
function getViewportDimensions() {
  return { vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) };
}
function calculateAvailableSpace(e) {
  const { top: t, left: n } = getWindowScrollPosition(), { top: a, left: s } = getOffset(e), { vh: l, vw: i } = getViewportDimensions(), r = a - t, d = s - n;
  return { top: r, bottom: l - (r + e.clientHeight), left: d, right: i - (d + e.clientWidth) };
}
function getAvailablePosition(e, t, n = 5) {
  const a = { top: true, bottom: true, left: true, right: true }, s = [];
  if (!t || !e) return { canShow: a, parentPositions: s };
  const { bottom: l, top: i } = calculateAvailableSpace(e), { top: r, left: d } = getOffset(e), { height: o, width: c } = t.getBoundingClientRect(), { vh: u, vw: m } = getViewportDimensions(), g = m / 2, h = u / 2;
  return [{ condition: r < h, position: "top" }, { condition: r > h, position: "bottom" }, { condition: d < g, position: "left" }, { condition: d > g, position: "right" }].forEach(({ condition: e2, position: t2 }) => {
    e2 && s.push(t2);
  }), Object.assign(a, { top: o <= i - n, bottom: o <= l - n, left: c <= d, right: c <= m - d }), { canShow: a, parentPositions: s };
}
function findBestPickerPosition(e, t) {
  const n = "left";
  if (!t || !e) return n;
  const { canShow: a, parentPositions: s } = getAvailablePosition(e, t), l = a.left && a.right;
  return (l && a.bottom ? "center" : l && a.top ? ["top", "center"] : Array.isArray(s) ? ["bottom" === s[0] ? "top" : "bottom", ...s.slice(1)] : s) || n;
}
var setPositionCalendar = (e, t, n, a) => {
  if (e) {
    const s = "auto" === n ? findBestPickerPosition(e, t) : n, l = { top: -t.offsetHeight, bottom: e.offsetHeight, left: 0, center: e.offsetWidth / 2 - t.offsetWidth / 2, right: e.offsetWidth - t.offsetWidth }, i = Array.isArray(s) ? s[0] : "bottom", r = Array.isArray(s) ? s[1] : s;
    "bottom" === i ? (t.classList.remove(a.calendarToInputTop), t.classList.add(a.calendarToInputBottom)) : (t.classList.remove(a.calendarToInputBottom), t.classList.add(a.calendarToInputTop));
    const { top: d, left: o } = getOffset(e), c = d + l[i], u = o + l[r];
    Object.assign(t.style, { left: `${u}px`, top: `${c}px` });
  }
};
var handleDay = (e, t, n, a) => {
  const s = e.CSSClasses.dayPopup, l = a.querySelector(`[data-calendar-day="${t}"]`);
  if (l && ((null == n ? void 0 : n.modifier) && l.classList.add(...n.modifier.trim().split(" ")), null == n ? void 0 : n.html)) {
    const t2 = l.parentElement, a2 = document.createElement("div");
    a2.className = s, a2.innerHTML = e.sanitizer(n.html), t2.appendChild(a2), setTimeout(() => {
      if (a2) {
        const { canShow: e2 } = getAvailablePosition(t2, a2), n2 = 5;
        let s2 = t2.offsetHeight, l2 = 0;
        e2.bottom || (s2 = -a2.offsetHeight - n2), e2.left && !e2.right && (l2 = t2.offsetWidth - a2.offsetWidth / 2), !e2.left && e2.right && (l2 = a2.offsetWidth / 2), Object.assign(a2.style, { left: `${l2}px`, top: `${s2}px` });
      }
    });
  }
};
var createPopup = (e, t) => {
  var n;
  e.popups && (null == (n = Object.entries(e.popups)) || n.forEach(([n2, a]) => handleDay(e, n2, a, t)));
};
var createWeekNumber = (e, t, n, a, s) => {
  const l = t[n].querySelector(`.${e.CSSClasses.dayBtn}`), i = getWeekNumber(null == l ? void 0 : l.dataset.calendarDay, e.settings.iso8601);
  if (!i) return;
  const r = a.cloneNode(true);
  r.innerText = String(i.week), r.dataset.calendarYearWeek = String(i.year), s.appendChild(r);
};
var createWeekNumbers = (e, t, n, a, s) => {
  if (!e.settings.visibility.weekNumbers) return;
  a.textContent = "";
  const l = document.createElement("b");
  l.className = e.CSSClasses.weekNumbersTitle, l.innerText = "#", a.appendChild(l);
  const i = document.createElement("div");
  i.className = e.CSSClasses.weekNumbersContent, a.appendChild(i);
  const r = document.createElement("button");
  r.type = "button", r.className = e.CSSClasses.weekNumber;
  const d = s.querySelectorAll(`.${e.CSSClasses.day}`), o = Math.ceil((t + n) / 7);
  for (let t2 = 0; t2 < o; t2++) createWeekNumber(e, d, 0 === t2 ? 6 : 7 * t2, r, i);
};
var setDisabledDays = (e, t, n) => {
  var a, s, l, i, r;
  const d = null == (a = e.settings.range.disableWeekday) ? void 0 : a.includes(n), o = e.settings.range.disableAllDays && !!(null == (s = e.rangeEnabled) ? void 0 : s[0]);
  !d && !o || (null == (l = e.rangeEnabled) ? void 0 : l.includes(t)) || (null == (i = e.rangeDisabled) ? void 0 : i.includes(t)) || (e.rangeDisabled.push(t), null == (r = e.rangeDisabled) || r.sort((e2, t2) => +new Date(e2) - +new Date(t2)));
};
var setDayModifier = (e, t, n, a, s, l, i) => {
  var r, d, o;
  if ((getDate(e.rangeMin) > getDate(l) || getDate(e.rangeMax) < getDate(l) || (null == (r = e.rangeDisabled) ? void 0 : r.includes(l)) || !e.settings.selection.month && i || !e.settings.selection.year && getDate(l).getFullYear() !== t) && (a.classList.add(e.CSSClasses.dayBtnDisabled), a.tabIndex = -1), e.settings.visibility.today && getDateString(e.date.today) === l && a.classList.add(e.CSSClasses.dayBtnToday), !e.settings.visibility.weekend || 0 !== s && 6 !== s || a.classList.add(e.CSSClasses.dayBtnWeekend), (null == (d = e.selectedHolidays) ? void 0 : d.includes(l)) && a.classList.add(e.CSSClasses.dayBtnHoliday), (null == (o = e.selectedDates) ? void 0 : o.includes(l)) && (a.classList.add(e.CSSClasses.dayBtnSelected), e.selectedDates.length > 1 && "multiple-ranged" === e.settings.selection.day && (e.selectedDates[0] === l && n.classList.add(e.CSSClasses.daySelectedFirst), e.selectedDates[e.selectedDates.length - 1] === l && n.classList.add(e.CSSClasses.daySelectedLast), e.selectedDates[0] !== l && e.selectedDates[e.selectedDates.length - 1] !== l && n.classList.add(e.CSSClasses.daySelectedIntermediate))), e.settings.range.edgesOnly && e.selectedDates.length > 1 && "multiple-ranged" === e.settings.selection.day) {
    const t2 = +new Date(e.selectedDates[0]), s2 = +new Date(e.selectedDates[e.selectedDates.length - 1]), i2 = +new Date(l);
    i2 > t2 && i2 < s2 && (a.classList.add(e.CSSClasses.dayBtnSelected), n.classList.add(e.CSSClasses.daySelectedIntermediate));
  }
};
var createDay = (e, t, n, a, s, l, i, r) => {
  const d = document.createElement("div");
  d.className = e.CSSClasses.day;
  const o = document.createElement("button");
  o.className = `${e.CSSClasses.dayBtn}${r ? ` ${r}` : ""}`, o.type = "button", o.innerText = String(a), o.dataset.calendarDay = l;
  e.settings.visibility.weekNumbers && (() => {
    const t2 = getWeekNumber(l, e.settings.iso8601);
    t2 && (o.dataset.calendarWeekNumber = String(t2.week));
  })(), i ? e.settings.visibility.daysOutside && d.appendChild(o) : d.appendChild(o), setDisabledDays(e, l, s), setDayModifier(e, t, d, o, s, l, i), n.appendChild(d), e.actions.getDays && e.actions.getDays(a, l, d, o, e);
};
var prevMonth = (e, t, n, a, s) => {
  let l = new Date(n, a, 0).getDate() - (s - 1);
  const i = 0 === a ? n - 1 : n, r = 0 === a ? 12 : a < 10 ? `0${a}` : a;
  for (let a2 = s; a2 > 0; a2--, l++) {
    const a3 = `${i}-${r}-${l}`, s2 = getDate(a3).getDay();
    createDay(e, n, t, l, s2, a3, true, e.CSSClasses.dayBtnPrev);
  }
};
var currentMonth = (e, t, n, a, s) => {
  for (let l = 1; l <= n; l++) {
    const n2 = new Date(a, s, l), i = getDateString(n2), r = n2.getDay();
    createDay(e, a, t, l, r, i, false, null);
  }
};
var nextMonth = (e, t, n, a, s, l) => {
  const i = l + n, r = 7 * Math.ceil(i / 7) - i, d = s + 1 === 12 ? a + 1 : a, o = s + 1 === 12 ? "01" : s + 2 < 10 ? `0${s + 2}` : s + 2;
  for (let n2 = 1; n2 <= r; n2++) {
    const s2 = `${d}-${o}-${n2 < 10 ? `0${n2}` : String(n2)}`, l2 = getDate(s2).getDay();
    createDay(e, a, t, n2, l2, s2, true, e.CSSClasses.dayBtnNext);
  }
};
var createDays = (e) => {
  const t = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.days}`), n = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.weekNumbers}`), a = new Date(e.selectedYear, e.selectedMonth, 1);
  t.forEach((t2, s) => {
    const l = new Date(a);
    l.setMonth(l.getMonth() + s);
    const i = l.getMonth(), r = l.getFullYear(), d = new Date(r, i, 1), o = new Date(r, i + 1, 0).getDate(), c = e.settings.iso8601 ? (0 !== d.getDay() ? d.getDay() : 7) - 1 : d.getDay();
    e.settings.selection.day && t2.classList.add(e.CSSClasses.daysSelecting), t2.textContent = "", prevMonth(e, t2, r, i, c), currentMonth(e, t2, o, r, i), nextMonth(e, t2, o, r, i, c), createWeekNumbers(e, c, o, n[s], t2), createPopup(e, t2);
  });
};
var visibilityMonth = (e, t, n, a) => {
  const s = new Date(a.setMonth(e.selectedMonth + n)).getMonth(), l = false === e.settings.selection.month || "only-arrows" === e.settings.selection.month;
  t.tabIndex = l ? -1 : 0, t.classList.toggle(e.CSSClasses.monthDisabled, l), t.setAttribute("data-calendar-selected-month", String(s)), t.innerText = e.locale.months[s];
};
var visibilityYear = (e, t, n, a) => {
  const s = new Date(a.setFullYear(e.selectedYear, e.selectedMonth + n)).getFullYear(), l = false === e.settings.selection.year || "only-arrows" === e.settings.selection.year;
  t.tabIndex = l ? -1 : 0, t.classList.toggle(e.CSSClasses.yearDisabled, l), t.setAttribute("data-calendar-selected-year", String(s)), t.innerText = String(s);
};
var visibilityTitle = (e) => {
  var t, n;
  const a = null == (t = e.HTMLElement) ? void 0 : t.querySelectorAll("[data-calendar-selected-month]"), s = null == (n = e.HTMLElement) ? void 0 : n.querySelectorAll("[data-calendar-selected-year]");
  if (!(null == a ? void 0 : a[0]) && (null == s ? void 0 : s[0])) return;
  const l = new Date(e.selectedYear, e.selectedMonth, 1);
  null == a || a.forEach((t2, n2) => visibilityMonth(e, t2, n2, l)), null == s || s.forEach((t2, n2) => visibilityYear(e, t2, n2, l));
};
var changeMonth = (e, t) => {
  const n = getDate(getDateString(new Date(e.selectedYear, e.selectedMonth, 1)));
  ({ prev: () => n.setMonth(n.getMonth() - e.jumpMonths), next: () => n.setMonth(n.getMonth() + e.jumpMonths) })[t](), [e.selectedMonth, e.selectedYear] = [n.getMonth(), n.getFullYear()], visibilityTitle(e), visibilityArrows(e), createDays(e);
};
var ArrowPrev = (e) => `<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"data-calendar-arrow="prev"></button>`;
var ArrowNext = (e) => `<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"data-calendar-arrow="next"></button>`;
var Month = (e) => `<button type="button"class="${e.CSSClasses.month}"data-calendar-selected-month></button>`;
var Year = (e) => `<button type="button"class="${e.CSSClasses.year}"data-calendar-selected-year></button>`;
var Week = (e) => `<div class="${e.CSSClasses.week}"></div>`;
var Days = (e) => `<div class="${e.CSSClasses.days}"></div>`;
var Months = (e) => `<div class="${e.CSSClasses.months}"></div>`;
var Years = (e) => `<div class="${e.CSSClasses.years}"></div>`;
var WeekNumbers = (e) => e.settings.visibility.weekNumbers ? `<div class="${e.CSSClasses.weekNumbers}"></div>` : "";
var ControlTime = (e) => e.settings.selection.time ? `<div class="${e.CSSClasses.time}"></div>` : "";
var components = Object.freeze(Object.defineProperty({ __proto__: null, ArrowNext, ArrowPrev, ControlTime, Days, Month, Months, Week, WeekNumbers, Year, Years }, Symbol.toStringTag, { value: "Module" }));
var DOMParser = (e, t) => t.replace(/[\n\t]/g, "").replace(/<#(?!\/?Multiple)(.*?)>/g, (t2, n) => {
  const a = (s = n.replace(/[/\s\n\t]/g, ""), components[s]);
  var s;
  const l = a ? a(e) : "";
  return e.sanitizer(l);
}).replace(/[\n\t]/g, "");
var MultipleParser = (e, t) => t.replace(/<#Multiple>(.*?)<#\/Multiple>/g, (t2, n) => {
  let a = "";
  for (let t3 = 0; t3 < e.correctMonths; t3++) a += n;
  return e.sanitizer(a);
}).replace(/[\n\t]/g, "");
var createDOM = (e, t) => {
  const { HTMLElement: n, CSSClasses: a, DOMTemplates: s, type: l, currentType: i, correctMonths: r } = e, d = (s2, l2) => {
    if (!t) return;
    const i2 = n.querySelector(`.${a.controls}`);
    i2 && n.removeChild(i2);
    n.querySelector(`.${a.grid}`).classList.add(a.gridDisabled);
    const r2 = t.closest(`.${a.column}`);
    r2.classList.add(s2), r2.innerHTML = DOMParser(e, l2);
  }, o = { default: () => {
    n.classList.add(a.calendarDefault), n.classList.remove(a.calendarMonth, a.calendarYear), n.innerHTML = DOMParser(e, s.default);
  }, multiple: () => {
    r && (n.classList.add(a.calendarMultiple), n.classList.remove(a.calendarMonth, a.calendarYear), n.innerHTML = MultipleParser(e, DOMParser(e, s.multiple)));
  }, month: () => {
    "multiple" !== l ? (n.classList.add(a.calendarMonth), n.classList.remove(a.calendarDefault, a.calendarYear), n.innerHTML = DOMParser(e, s.month)) : d(a.columnMonth, s.month);
  }, year: () => {
    "multiple" !== l ? (n.classList.add(a.calendarYear), n.classList.remove(a.calendarDefault, a.calendarMonth), n.innerHTML = DOMParser(e, s.year)) : d(a.columnYear, s.year);
  } };
  n.classList.add(a.calendar), o[i]();
};
var createYearEl = (e, t, n, a, s) => {
  const l = t.cloneNode(false);
  return l.className = `${e.CSSClasses.yearsYear}${n === s ? ` ${e.CSSClasses.yearsYearSelected}` : a ? ` ${e.CSSClasses.yearsYearDisabled}` : ""}`, l.dataset.calendarYear = String(s), l.title = String(s), l.innerText = String(s), a && (l.tabIndex = -1), l;
};
var createYears = (e, t) => {
  const n = (null == t ? void 0 : t.dataset.calendarSelectedYear) ? Number(null == t ? void 0 : t.dataset.calendarSelectedYear) : e.selectedYear;
  e.currentType = "year", createDOM(e, t), visibilityTitle(e), visibilityArrows(e);
  const a = e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);
  if (!e.settings.selection.year || !a) return;
  a.classList.add(e.CSSClasses.yearsSelecting);
  const s = "multiple" !== e.type || e.selectedYear === n ? 0 : 1, l = document.createElement("button");
  l.type = "button";
  for (let t2 = e.viewYear - 7; t2 < e.viewYear + 8; t2++) {
    const i = t2 < e.dateMin.getFullYear() + s || t2 > e.dateMax.getFullYear(), r = createYearEl(e, l, n, i, t2);
    a.appendChild(r), e.actions.getYears && e.actions.getYears(t2, r, e);
  }
};
var handleClickArrow = (e, t) => {
  const n = t.target.closest(`.${e.CSSClasses.arrow}`);
  n && (["default", "multiple"].includes(e.currentType) ? changeMonth(e, n.dataset.calendarArrow) : "year" === e.currentType && void 0 !== e.viewYear && (e.viewYear += { prev: -15, next: 15 }[n.dataset.calendarArrow], createYears(e, t.target)), e.actions.clickArrow && e.actions.clickArrow(t, e));
};
var handleClickWeekNumber = (e, t) => {
  var n;
  if (!e.settings.visibility.weekNumbers || !e.actions.clickWeekNumber) return;
  const a = t.target.closest(`.${e.CSSClasses.weekNumber}`), s = null == (n = e.HTMLElement) ? void 0 : n.querySelectorAll("[data-calendar-week-number]");
  if (!a || !s) return;
  const l = Number(a.innerText), i = Number(a.dataset.calendarYearWeek), r = Array.from(s).filter((e2) => Number(e2.dataset.calendarWeekNumber) === l);
  e.actions.clickWeekNumber(t, l, r, i, e);
};
var capitalizeFirstLetter = (e) => `${e.charAt(0).toUpperCase()}${e.substring(1, e.length)}`.replace(/\./, "");
var getLocaleWeekday = (e, t) => {
  const n = (/* @__PURE__ */ new Date(`1978-01-0${t + 1}T00:00:00.000Z`)).toLocaleString(e.settings.lang, { weekday: "short", timeZone: "UTC" });
  e.locale.weekday.push(capitalizeFirstLetter(n));
};
var getLocaleMonth = (e, t) => {
  const n = (/* @__PURE__ */ new Date(`1978-${t + 1 <= 9 ? `0${t + 1}` : t + 1}-01T00:00:00.000Z`)).toLocaleString(e.settings.lang, { month: "long", timeZone: "UTC" });
  e.locale.months.push(capitalizeFirstLetter(n));
};
var getLocale = (e) => {
  if ("define" !== e.settings.lang || !e.locale.weekday[6] || !e.locale.months[11]) {
    if ("define" === e.settings.lang) throw new Error(messages.notLocale);
    e.locale.weekday = [], e.locale.months = [];
    for (let t = 0; t < 7; t++) getLocaleWeekday(e, t);
    for (let t = 0; t < 12; t++) getLocaleMonth(e, t);
  }
};
var relationshipID = (e) => {
  if ("multiple" !== e.type) return 0;
  const t = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`), n = Array.from(t).findIndex((t2) => t2.classList.contains(`${e.CSSClasses.columnMonth}`));
  return n > 0 ? n : 0;
};
var createMonthEl = (e, t, n, a, s, l) => {
  const i = t.cloneNode(false);
  return i.className = `${e.CSSClasses.monthsMonth}${n === l ? ` ${e.CSSClasses.monthsMonthSelected}` : s ? ` ${e.CSSClasses.monthsMonthDisabled}` : ""}`, i.title = a, i.innerText = `${e.settings.visibility.monthShort ? a.substring(0, 3) : a}`, i.dataset.calendarMonth = String(l), s && (i.tabIndex = -1), i;
};
var createMonths = (e, t) => {
  var n, a;
  const s = (null == t ? void 0 : t.dataset.calendarSelectedMonth) ? Number(t.dataset.calendarSelectedMonth) : e.selectedMonth, l = null == (n = null == t ? void 0 : t.closest(`.${e.CSSClasses.column}`)) ? void 0 : n.querySelector(`.${e.CSSClasses.year}`), i = l ? Number(l.dataset.calendarSelectedYear) : e.selectedYear;
  e.currentType = "month", createDOM(e, t), visibilityTitle(e);
  const r = null == (a = e.HTMLElement) ? void 0 : a.querySelector(`.${e.CSSClasses.months}`);
  if (!e.settings.selection.month || !r) return;
  r.classList.add(e.CSSClasses.monthsSelecting);
  const d = e.jumpMonths > 1 ? e.locale.months.map((t2, n2) => s - e.jumpMonths * n2).concat(e.locale.months.map((t2, n2) => s + e.jumpMonths * n2)).filter((e2) => e2 >= 0 && e2 <= 12) : Array.from(Array(12).keys()), o = document.createElement("button");
  o.type = "button";
  for (let t2 = 0; t2 < 12; t2++) {
    const n2 = e.locale.months[t2], a2 = t2 < e.dateMin.getMonth() + relationshipID(e) && i <= e.dateMin.getFullYear() || t2 > e.dateMax.getMonth() + relationshipID(e) && i >= e.dateMax.getFullYear() || t2 !== s && !d.includes(t2), l2 = createMonthEl(e, o, s, n2, a2, t2);
    r.appendChild(l2), e.actions.getMonths && e.actions.getMonths(t2, l2, e);
  }
};
var transformTime24 = (e, t) => e && t ? { 0: { AM: "00", PM: "12" }, 1: { AM: "01", PM: "13" }, 2: { AM: "02", PM: "14" }, 3: { AM: "03", PM: "15" }, 4: { AM: "04", PM: "16" }, 5: { AM: "05", PM: "17" }, 6: { AM: "06", PM: "18" }, 7: { AM: "07", PM: "19" }, 8: { AM: "08", PM: "20" }, 9: { AM: "09", PM: "21" }, 10: { AM: "10", PM: "22" }, 11: { AM: "11", PM: "23" }, 12: { AM: "12", PM: "12" } }[Number(e)][t] : "";
var getInputElement = (e, t, n) => e.querySelector(`.${t}${n ? ` input[name="${n}"]` : ""}`);
var addMouseEvents = (e, t, n) => {
  e.addEventListener("mouseover", () => t.classList.add(n)), e.addEventListener("mouseout", () => t.classList.remove(n));
};
var setTime = (e, t, n, a) => {
  ({ hours: () => {
    e.selectedHours = n;
  }, minutes: () => {
    e.selectedMinutes = n;
  } })[a](), e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping ? ` ${e.selectedKeeping}` : ""}`, e.actions.changeTime && e.actions.changeTime(t, e), e.input && e.HTMLInputElement && e.actions.changeToInput && e.actions.changeToInput(t, e);
};
var changeRange = (e, t, n, a, s, l) => {
  t.addEventListener("input", (t2) => {
    const i = t2.target, r = Number(i.value), d = r < 10 ? `0${r}` : `${r}`;
    if ("hours" !== s || 12 !== l) return n.value = d, void setTime(e, t2, d, s);
    r < l && r > 0 ? (n.value = d, e.selectedKeeping = "AM", a.innerText = e.selectedKeeping, setTime(e, t2, d, s)) : (0 === r ? (e.selectedKeeping = "AM", a.innerText = "AM") : (e.selectedKeeping = "PM", a.innerText = "PM"), n.value = transformTime12(i.value), setTime(e, t2, transformTime12(i.value), s));
  });
};
var changeInput = (e, t, n, a, s, l) => {
  n.addEventListener("change", (n2) => {
    const i = n2.target, r = Number(i.value), d = r < 10 ? `0${r}` : `${r}`;
    "hours" === s && 12 === l ? i.value && r <= l && r > 0 ? (i.value = d, t.value = transformTime24(d, e.selectedKeeping), setTime(e, n2, d, s)) : i.value && r < 24 && (r > l || 0 === r) ? (0 === r ? (e.selectedKeeping = "AM", a.innerText = "AM") : (e.selectedKeeping = "PM", a.innerText = "PM"), i.value = transformTime12(i.value), t.value = d, setTime(e, n2, transformTime12(i.value), s)) : i.value = e.selectedHours : i.value && r <= l && r >= 0 ? (i.value = d, t.value = d, setTime(e, n2, d, s)) : "hours" === s ? i.value = e.selectedHours : "minutes" === s && (i.value = e.selectedMinutes);
  });
};
var clickBtnKeepingTime = (e, t, n) => {
  t.addEventListener("click", (a) => {
    e.selectedKeeping = t.innerText.includes("AM") ? "PM" : "AM", t.innerText = e.selectedKeeping, n.value = transformTime24(e.selectedHours, e.selectedKeeping), setTime(e, a, e.selectedHours, "hours");
  });
};
var changeTime = (e, t, n) => {
  const a = 24 === n ? 23 : n || 12, s = getInputElement(t, e.CSSClasses.timeRange, "hours"), l = getInputElement(t, e.CSSClasses.timeRange, "minutes"), i = getInputElement(t, e.CSSClasses.timeHours, "hours"), r = getInputElement(t, e.CSSClasses.timeMinutes, "minutes"), d = t.querySelector(`.${e.CSSClasses.timeKeeping}`);
  addMouseEvents(s, i, e.CSSClasses.isFocus), addMouseEvents(l, r, e.CSSClasses.isFocus), changeRange(e, s, i, d, "hours", a), changeRange(e, l, r, d, "minutes", 0), changeInput(e, s, i, d, "hours", a), changeInput(e, l, r, d, "minutes", 59), d && clickBtnKeepingTime(e, d, s);
};
var InputTime = (e, t, n, a) => `<label class="${t}"><input type="text"name="${e}"maxlength="2"value="${n}"${a ? "disabled" : ""}></label>`;
var RangeTime = (e, t, n, a, s, l) => `<label class="${t}"><input type="range"name="${e}"min="${n}"max="${a}"step="${s}"value="${l}"></label>`;
var createTime = (e) => {
  const t = e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);
  if (!t) return;
  const n = true === e.settings.selection.time ? 12 : e.settings.selection.time, a = "range" === e.settings.selection.controlTime, [s, l] = [0, 23], [i, r] = [0, 59];
  t.innerHTML = e.sanitizer(`<div class="${e.CSSClasses.timeContent}">${InputTime("hours", e.CSSClasses.timeHours, e.selectedHours, a)}${InputTime("minutes", e.CSSClasses.timeMinutes, e.selectedMinutes, a)}${12 === n ? `<button type="button" class="${e.CSSClasses.timeKeeping}"${a ? "disabled" : ""}>${e.selectedKeeping}</button>` : ""}</div><div class="${e.CSSClasses.timeRanges}">${RangeTime("hours", e.CSSClasses.timeRange, s, l, e.settings.selection.stepHours, e.selectedKeeping ? transformTime24(e.selectedHours, e.selectedKeeping) : e.selectedHours)}${RangeTime("minutes", e.CSSClasses.timeRange, i, r, e.settings.selection.stepMinutes, e.selectedMinutes)}</div>`), changeTime(e, t, n);
};
var createWeekDays = (e, t, n) => {
  const a = document.createElement("b");
  t.textContent = "";
  for (let s = 0; s < n.length; s++) {
    const l = n[s], i = a.cloneNode(true);
    i.className = `${e.CSSClasses.weekDay}`, i.className = `${e.CSSClasses.weekDay}${e.settings.visibility.weekend && e.settings.iso8601 ? 5 === s || 6 === s ? ` ${e.CSSClasses.weekDayWeekend}` : "" : e.settings.visibility.weekend && !e.settings.iso8601 && (0 === s || 6 === s) ? ` ${e.CSSClasses.weekDayWeekend}` : ""}`, i.innerText = `${l}`, t.appendChild(i);
  }
};
var createWeek = (e) => {
  const t = [...e.locale.weekday];
  if (!t[0]) return;
  e.settings.iso8601 && t.push(t.shift());
  e.HTMLElement.querySelectorAll(`.${e.CSSClasses.week}`).forEach((n) => createWeekDays(e, n, t));
};
var themes = ["light", "dark", "system"];
var haveListener = { value: false, set: () => {
  haveListener.value = true;
}, check: () => haveListener.value };
var getTheme = (e, t) => themes.find((n) => {
  var a;
  return "system" !== n && (null == (a = e.getAttribute(t)) ? void 0 : a.includes(n));
});
var setTheme = (e, t) => {
  e.dataset.calendarTheme = t;
};
var trackChangesThemeInSystemSettings = (e, t) => {
  var n;
  if (n = t, setTheme(e.HTMLElement, n.matches ? "dark" : "light"), "system" !== e.settings.visibility.theme || haveListener.check()) return;
  const a = (t2) => {
    const n2 = document.querySelectorAll(`.${e.CSSClasses.calendar}`);
    null == n2 || n2.forEach((e2) => setTheme(e2, t2.matches ? "dark" : "light"));
  };
  t.addEventListener ? t.addEventListener("change", a) : t.addListener(a), haveListener.set();
};
var trackChangesThemeInHTMLElement = (e, t, n) => {
  new MutationObserver((a) => {
    for (let s = 0; s < a.length; s++) {
      if (a[s].attributeName === n) {
        const a2 = getTheme(t, n);
        a2 && setTheme(e.HTMLElement, a2);
        break;
      }
    }
  }).observe(t, { attributes: true });
};
var detectTheme = (e, t) => {
  const n = e.settings.visibility.themeDetect ? document.querySelector(e.settings.visibility.themeDetect) : null;
  if (!n) return void trackChangesThemeInSystemSettings(e, t);
  const a = e.settings.visibility.themeDetect.replace(/^.*\[(.+)\]/g, (e2, t2) => t2), s = getTheme(n, a);
  s ? (setTheme(e.HTMLElement, s), trackChangesThemeInHTMLElement(e, n, a)) : trackChangesThemeInSystemSettings(e, t);
};
var changeTheme = (e) => {
  if (!themes.includes(e.settings.visibility.theme)) throw new Error(messages.incorrectTheme);
  if ("not all" === window.matchMedia("(prefers-color-scheme)").media) return void setTheme(e.HTMLElement, "light");
  ({ light: () => setTheme(e.HTMLElement, "light"), dark: () => setTheme(e.HTMLElement, "dark"), system: () => detectTheme(e, window.matchMedia("(prefers-color-scheme: dark)")) })[e.settings.visibility.theme]();
};
var create = (e) => {
  const t = { default: () => {
    createWeek(e), createDays(e);
  }, multiple: () => {
    createWeek(e), createDays(e);
  }, month: () => createMonths(e), year: () => createYears(e) };
  changeTheme(e), getLocale(e), createDOM(e), visibilityTitle(e), visibilityArrows(e), createTime(e), t[e.currentType]();
};
var current = { self: null, rangeMin: void 0, rangeMax: void 0 };
var removeHoverEffect = () => {
  var e;
  if (!(null == (e = current.self) ? void 0 : e.HTMLElement)) return;
  const { CSSClasses: t } = current.self;
  current.self.HTMLElement.querySelectorAll(`.${current.self.CSSClasses.dayBtnHover}`).forEach((e2) => {
    var n;
    e2.classList.remove(current.self.CSSClasses.dayBtnHover), null == (n = e2.parentElement) || n.classList.remove(t.dayHoverIntermediate, t.dayHoverFirst, t.dayHoverLast);
  });
};
var addHoverEffect = (e, t, n) => {
  var a, s, l;
  if (!(null == (a = current.self) ? void 0 : a.selectedDates)) return;
  const i = getDateString(e), { CSSClasses: r } = current.self;
  if (null == (s = current.self.rangeDisabled) ? void 0 : s.includes(i)) return;
  const d = null == (l = current.self.HTMLElement) ? void 0 : l.querySelectorAll(`[data-calendar-day="${i}"]`);
  null == d || d.forEach((e2) => {
    var t2;
    e2.classList.add(r.dayBtnHover), null == (t2 = e2.parentElement) || t2.classList.add(r.dayHoverIntermediate);
  }), null == t || t.forEach((e2) => {
    var t2;
    return null == (t2 = e2.parentElement) ? void 0 : t2.classList.add(r.dayHoverFirst);
  }), null == n || n.forEach((e2) => {
    var t2;
    return null == (t2 = e2.parentElement) ? void 0 : t2.classList.add(r.dayHoverLast);
  });
};
var handleHoverDaysEvent = (e) => {
  var t;
  if (!e.target || !(null == (t = current.self) ? void 0 : t.selectedDates)) return;
  if (!e.target.closest(`.${current.self.CSSClasses.days}`)) return void removeHoverEffect();
  const n = e.target.closest("[data-calendar-day]");
  if (!n) return;
  const a = n.dataset.calendarDay, s = getDate(current.self.selectedDates[0]), l = getDate(a), i = current.self.HTMLElement.querySelectorAll(`[data-calendar-day="${current.self.selectedDates[0]}"]`), r = current.self.HTMLElement.querySelectorAll(`[data-calendar-day="${a}"]`), [d, o] = s < l ? [i, r] : [r, i], [c, u] = s < l ? [s, l] : [l, s];
  removeHoverEffect();
  for (let e2 = new Date(c); e2 <= u; e2.setDate(e2.getDate() + 1)) addHoverEffect(e2, d, o);
};
var handleCancelSelectionDays = (e) => {
  current.self && "Escape" === e.key && (current.self.selectedDates = [], current.self.HTMLElement.removeEventListener("mousemove", handleHoverDaysEvent), document.removeEventListener("keydown", handleCancelSelectionDays), create(current.self));
};
var updateDisabledDates = () => {
  var e, t, n;
  if (!(null == (t = null == (e = current.self) ? void 0 : e.selectedDates) ? void 0 : t[0]) || !(null == (n = current.self.rangeDisabled) ? void 0 : n[0])) return;
  const a = getDate(current.self.selectedDates[0]), [s, l] = current.self.rangeDisabled.map((e2) => getDate(e2)).reduce(([e2, t2], n2) => [a >= n2 ? n2 : e2, a < n2 && null === t2 ? n2 : t2], [null, null]);
  s && (current.self.rangeMin = getDateString(new Date(s.setDate(s.getDate() + 1)))), l && (current.self.rangeMax = getDateString(new Date(l.setDate(l.getDate() - 1))));
};
var handleDayRangedSelection = (e, t) => {
  var n;
  if (t) {
    const a = 1 === e.selectedDates.length && e.selectedDates[0].includes(t);
    e.selectedDates = a && !e.settings.selection.cancelableDay ? [t, t] : a && e.settings.selection.cancelableDay ? [] : e.selectedDates.length > 1 ? [t] : [...e.selectedDates, t], null == (n = e.selectedDates) || n.sort((e2, t2) => +new Date(e2) - +new Date(t2));
  }
  e.settings.range.disableGaps && (current.rangeMin = current.rangeMin ? current.rangeMin : e.rangeMin, current.rangeMax = current.rangeMax ? current.rangeMax : e.rangeMax), current.self = e;
  ({ set: () => {
    e.HTMLElement.addEventListener("mousemove", handleHoverDaysEvent), document.addEventListener("keydown", handleCancelSelectionDays), e.settings.range.disableGaps && updateDisabledDates();
  }, reset: () => {
    const [t2, n2] = [e.selectedDates[0], e.selectedDates[e.selectedDates.length - 1]];
    e.selectedDates = e.selectedDates[0] !== e.selectedDates[e.selectedDates.length - 1] ? e.settings.range.edgesOnly ? [t2, n2] : parseDates([`${t2}:${n2}`]) : [e.selectedDates[0], e.selectedDates[0]], e.HTMLElement.removeEventListener("mousemove", handleHoverDaysEvent), document.removeEventListener("keydown", handleCancelSelectionDays), e.settings.range.disableGaps && current.self && (current.self.rangeMin = current.rangeMin, current.self.rangeMax = current.rangeMax);
  } })[1 === e.selectedDates.length ? "set" : "reset"]();
};
var handleDaySelection = (e, t, n) => {
  if (!t.dataset.calendarDay) return;
  const a = t.dataset.calendarDay, s = t.classList.contains(e.CSSClasses.dayBtnSelected);
  if (s && !e.settings.selection.cancelableDay) return;
  let l = true;
  void 0 !== e.toggleSelected && (l = "function" == typeof e.toggleSelected ? e.toggleSelected(e) : e.toggleSelected), s && !l || (e.selectedDates = s ? e.selectedDates.filter((e2) => e2 !== a) : n ? [...e.selectedDates, a] : [a]);
};
var handleClickDay = (e, t) => {
  var n;
  const a = t.target, s = (e2) => a.closest(`.${e2}`), l = s(e.CSSClasses.dayBtn);
  if (!e.settings.selection.day || !["single", "multiple", "multiple-ranged"].includes(e.settings.selection.day) || !l) return;
  ({ single: () => handleDaySelection(e, l, false), multiple: () => handleDaySelection(e, l, true), "multiple-ranged": () => handleDayRangedSelection(e, l.dataset.calendarDay) })[e.settings.selection.day](), null == (n = e.selectedDates) || n.sort((e2, t2) => +new Date(e2) - +new Date(t2)), e.actions.clickDay && e.actions.clickDay(t, e);
  e.input && e.HTMLInputElement && e.HTMLElement && e.actions.changeToInput && e.actions.changeToInput(t, e);
  const i = s(e.CSSClasses.dayBtnPrev), r = s(e.CSSClasses.dayBtnNext);
  ({ prev: () => changeMonth(e, "prev"), next: () => changeMonth(e, "next"), default: () => createDays(e) })[i ? "prev" : r ? "next" : "default"]();
};
var getColumnID = (e, t, n, a, s) => {
  const l = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`), i = Array.from(l).findIndex((e2) => e2.classList.contains(t)), r = Number(l[i].querySelector(`.${n}`).getAttribute(s));
  return "month" === e.currentType && i >= 0 ? a - i : "year" === e.currentType && e.selectedYear !== r ? a - 1 : a;
};
var handleItemClick = (e, t, n, a, s) => {
  const l = { year: () => {
    var n2, a2;
    return null == (a2 = (n2 = e.actions).clickYear) ? void 0 : a2.call(n2, t, e);
  }, month: () => {
    var n2, a2;
    return null == (a2 = (n2 = e.actions).clickMonth) ? void 0 : a2.call(n2, t, e);
  } };
  ({ year: () => {
    if ("multiple" === e.type) {
      const t2 = getColumnID(e, e.CSSClasses.columnYear, e.CSSClasses.year, Number(s.dataset.calendarYear), "data-calendar-selected-year"), n2 = e.selectedMonth < e.dateMin.getMonth() && t2 <= e.dateMin.getFullYear(), a2 = e.selectedMonth > e.dateMax.getMonth() && t2 >= e.dateMax.getFullYear(), l2 = t2 < e.dateMin.getFullYear(), i = t2 > e.dateMax.getFullYear();
      n2 || l2 ? (e.selectedYear = e.dateMin.getFullYear(), e.selectedMonth = e.dateMin.getMonth()) : a2 || i ? (e.selectedYear = e.dateMax.getFullYear(), e.selectedMonth = e.dateMax.getMonth()) : e.selectedYear = t2;
    } else e.selectedYear = Number(s.dataset.calendarYear);
  }, month: () => {
    if ("multiple" === e.type) {
      const t2 = getColumnID(e, e.CSSClasses.columnMonth, e.CSSClasses.month, Number(s.dataset.calendarMonth), "data-calendar-selected-month"), n2 = s.closest(`.${a.column}`).querySelector(`.${e.CSSClasses.year}`);
      e.selectedYear = Number(n2.dataset.calendarSelectedYear);
      const l2 = t2 < e.dateMin.getMonth() && e.selectedYear <= e.dateMin.getFullYear(), i = t2 > e.dateMax.getMonth() && e.selectedYear >= e.dateMax.getFullYear();
      e.selectedMonth = l2 ? e.dateMin.getMonth() : i ? e.dateMax.getMonth() : t2;
    } else e.selectedMonth = Number(s.dataset.calendarMonth);
  } })[n](), l[n](), e.currentType = e.type, create(e);
};
var handleClickMonthOrYear = (e, t, n, a) => {
  if (!e.settings.selection[n]) return;
  const s = t.target, l = (e2) => s.closest(`.${e2}`), i = l(a.header), r = l(a.item), d = l(e.CSSClasses.grid), o = l(e.CSSClasses.column);
  if (e.currentType !== n && i) {
    ({ year: () => createYears(e, s), month: () => createMonths(e, s) })[n]();
  } else r ? handleItemClick(e, t, n, a, r) : (e.currentType === n && i || "multiple" === e.type && e.currentType === n && d && !o) && (e.currentType = e.type, create(e));
};
var handleClick = (e) => {
  const t = (t2) => {
    handleClickArrow(e, t2), handleClickWeekNumber(e, t2), handleClickDay(e, t2), handleClickMonthOrYear(e, t2, "month", { header: e.CSSClasses.month, item: e.CSSClasses.monthsMonth, column: e.CSSClasses.columnMonth }), handleClickMonthOrYear(e, t2, "year", { header: e.CSSClasses.year, item: e.CSSClasses.yearsYear, column: e.CSSClasses.columnYear });
  };
  return e.HTMLElement.addEventListener("click", t), () => e.HTMLElement.removeEventListener("click", t);
};
var reset = (e, { year: t, month: n, dates: a, holidays: s, time: l } = {}) => {
  var i;
  const r = __spreadValues({}, e.settings.selected);
  e.settings.selected.year = t ? r.year : e.selectedYear, e.settings.selected.month = n ? r.month : e.selectedMonth, e.settings.selected.holidays = s ? r.holidays : e.selectedHolidays, e.settings.selected.time = l ? r.time : e.selectedTime, e.settings.selected.dates = "only-first" === a && (null == (i = e.selectedDates) ? void 0 : i[0]) ? [e.selectedDates[0]] : true === a ? r.dates : e.selectedDates, setVariables(e), create(e), e.settings.selected = r, "multiple-ranged" === e.settings.selection.day && a && handleDayRangedSelection(e);
};
var createCalendarToInput = (e, t = true) => {
  e.isInputInit = true;
  const n = document.createElement("div");
  return n.className = `${e.CSSClasses.calendar} ${e.CSSClasses.calendarToInput} ${e.CSSClasses.calendarHidden}`, e.HTMLElement = n, document.body.appendChild(e.HTMLElement), e.HTMLElement.style.visibility = "hidden", t && queueMicrotask(() => {
    setPositionCalendar(e.HTMLInputElement, n, e.settings.visibility.positionToInput, e.CSSClasses), e.HTMLElement.style.visibility = "visible", e.show();
  }), reset(e, { year: true, month: true, dates: true, holidays: true, time: true }), e.actions.initCalendar && e.actions.initCalendar(e), handleClick(e);
};
var handleInput = (e) => {
  const t = [];
  e.HTMLInputElement = e.HTMLElement;
  const n = () => setPositionCalendar(e.HTMLInputElement, e.HTMLElement, e.settings.visibility.positionToInput, e.CSSClasses), a = (t2) => {
    "Escape" === t2.key && ((null == e ? void 0 : e.HTMLInputElement) && (null == e ? void 0 : e.HTMLElement) && e.hide(), document.removeEventListener("keydown", a));
  }, s = (t2) => {
    var a2;
    e && t2.target !== e.HTMLInputElement && !(null == (a2 = e.HTMLElement) ? void 0 : a2.contains(t2.target)) && (e.HTMLInputElement && e.HTMLElement && e.hide(), window.removeEventListener("resize", n), document.removeEventListener("click", s, { capture: true }));
  }, l = () => {
    e.isInputInit ? (setPositionCalendar(e.HTMLInputElement, e.HTMLElement, e.settings.visibility.positionToInput, e.CSSClasses), e.HTMLElement.style.visibility = "visible", e.show()) : t.push(createCalendarToInput(e)), window.addEventListener("resize", n), document.addEventListener("click", s, { capture: true }), document.addEventListener("keydown", a);
  };
  return e.HTMLInputElement.addEventListener("click", l), e.HTMLInputElement.addEventListener("focus", l), () => {
    t.forEach((e2) => e2());
  };
};
var update = (e, { year: t, month: n, dates: a, holidays: s, time: l } = {}) => {
  if (!e.isInit) throw new Error(messages.notInit);
  e.input && !e.isInputInit && createCalendarToInput(e, false), reset(e, { year: t, month: n, dates: a, holidays: s, time: l }), e.actions.updateCalendar && e.actions.updateCalendar(e);
};
var destroy = (e) => {
  var t, n, a, s, l, i;
  if (!e.isInit) throw new Error(messages.notInit);
  e.input ? (null == (n = null == (t = e.HTMLElement) ? void 0 : t.parentElement) || n.removeChild(e.HTMLElement), null == (s = null == (a = e.HTMLInputElement) ? void 0 : a.replaceWith) || s.call(a, e.HTMLOriginalElement), e.HTMLInputElement = void 0) : null == (i = null == (l = e.HTMLElement) ? void 0 : l.replaceWith) || i.call(l, e.HTMLOriginalElement), e.HTMLElement = e.HTMLOriginalElement, e.actions.destroyCalendar && e.actions.destroyCalendar(e);
};
var VanillaCalendar = class extends DefaultOptionsCalendar {
  constructor(e, t) {
    if (super(), __publicField(this, "init", () => {
      return (e2 = this).HTMLOriginalElement = e2.HTMLElement.cloneNode(true), e2.isInit = true, e2.input ? handleInput(e2) : (setVariables(e2), create(e2), e2.actions.initCalendar && e2.actions.initCalendar(e2), handleClick(e2));
      var e2;
    }), __publicField(this, "update", (e2) => update(this, e2)), __publicField(this, "destroy", () => destroy(this)), __publicField(this, "show", () => {
      var e2;
      (e2 = this).currentType ? (e2.HTMLElement.classList.remove(e2.CSSClasses.calendarHidden), e2.actions.showCalendar && e2.actions.showCalendar(e2)) : e2.HTMLElement.click();
    }), __publicField(this, "hide", () => {
      var e2;
      (e2 = this).currentType && (e2.HTMLElement.classList.add(e2.CSSClasses.calendarHidden), e2.actions.hideCalendar && e2.actions.hideCalendar(e2));
    }), this.HTMLElement = "string" == typeof e ? document.querySelector(e) : e, !this.HTMLElement) throw new Error(messages.notFoundSelector(e));
    if (!t) return;
    const n = (e2, t2) => {
      Object.keys(t2).forEach((a) => {
        "object" != typeof e2[a] || "object" != typeof t2[a] || t2[a] instanceof Date ? e2[a] = t2[a] : n(e2[a], t2[a]);
      });
    };
    n(this, t);
  }
};

// src/scripts/modules/calendar.ts
var resultString = "";
var options = {
  DOMTemplates: {
    multiple: `
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
        `
  },
  input: true,
  type: "multiple",
  settings: {
    lang: "ru",
    range: {
      disablePast: true
    },
    selection: {
      day: "multiple-ranged"
    },
    visibility: {
      daysOutside: false
    }
  },
  actions: {
    changeToInput(e, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates[1]) {
        self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
        self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
      } else if (self.selectedDates[0]) {
        self.HTMLInputElement.value = self.selectedDates[0];
      } else {
        self.HTMLInputElement.value = "";
      }
    },
    clickDay(event, self) {
      const from = self.HTMLElement.querySelector("#vanilla-calendar-value-from");
      const to = self.HTMLElement.querySelector("#vanilla-calendar-value-to");
      const inputFrom = document.querySelector('input[name="date_from"]');
      const inputTo = document.querySelector('input[name="date_to"]');
      const inputCountNight = document.querySelector('input[name="count_night"]');
      const choicesDates = self.HTMLElement.querySelector(".vanilla-calendar-choices");
      const dateFrom = self.selectedDates[0];
      const dateTo = self.selectedDates.at(-1);
      if (choicesDates) {
        if (dateFrom) {
          choicesDates.classList.add("active");
        }
      }
      if (from) {
        from.textContent = dateFrom.split("-").reverse().join(".");
      }
      if (to) {
        to.textContent = dateTo.split("-").reverse().join(".");
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
      const differenceDays = getNumberOfDays(dateFrom, dateTo);
      const night = getNoun(differenceDays, "ночь", "ночи", "ночей");
      const mounthFrom = getMonthNameInGenitiveCase(new Date(dateFrom));
      const mounthTo = getMonthNameInGenitiveCase(new Date(dateTo));
      const numberDayFrom = getDay(dateFrom);
      const numberDayTo = getDay(dateTo);
      resultString = `${numberDayFrom} ${mounthFrom} - ${numberDayTo} ${mounthTo}, ${differenceDays} ${night}`;
      console.log(resultString);
    },
    hideCalendar(self) {
      const calendarButton = document.querySelector("#calendar-input");
      if (calendarButton) {
        calendarButton.classList.remove("active");
      }
    },
    showCalendar(self) {
      const buttonAdd = self.HTMLElement.querySelector("#vanilla-calendar-button-add");
      const buttonReset = self.HTMLElement.querySelector("#vanilla-calendar-button-reset");
      const calendarButton = document.querySelector("#calendar-input");
      const dropdownButtons = document.querySelectorAll(".custom-dropdown__btn");
      if (dropdownButtons) {
        dropdownButtons.forEach((btn) => {
          btn.classList.remove("active");
        });
      }
      if (calendarButton) {
        calendarButton.classList.add("active");
      }
      if (buttonAdd) {
        buttonAdd.addEventListener("click", () => {
          if (calendarButton) {
            calendarButton.innerHTML = resultString;
          }
          self.hide();
        });
      }
      if (buttonReset) {
        buttonReset.addEventListener("click", () => {
          if (calendarButton) {
            calendarButton.innerHTML = resultString;
          }
          const from = self.HTMLElement.querySelector("#vanilla-calendar-value-from");
          const to = self.HTMLElement.querySelector("#vanilla-calendar-value-to");
          const inputFrom = document.querySelector('input[name="date_from"]');
          const inputTo = document.querySelector('input[name="date_to"]');
          const inputCountNight = document.querySelector('input[name="count_night"]');
          const dayBtns = self.HTMLElement.querySelectorAll(".vanilla-calendar-day__btn");
          const choicesDates = self.HTMLElement.querySelector(".vanilla-calendar-choices");
          if (choicesDates) {
            choicesDates.classList.remove("active");
          }
          if (dayBtns) {
            [...dayBtns].forEach((btn) => {
              btn.classList.remove("vanilla-calendar-day__btn_selected");
            });
          }
          if (from) {
            from.textContent = "";
          }
          if (to) {
            to.textContent = "";
          }
          if (inputFrom) {
            inputFrom.value = "";
          }
          if (inputTo) {
            inputTo.value = "";
          }
          if (inputCountNight) {
            inputCountNight.value = "";
          }
          self.selectedDates = [];
          console.log(self);
          resultString = "";
        });
      }
    }
  }
};
var getDay = (date) => {
  return date.split("-").reverse()[0];
};
var getMonthNameInGenitiveCase = (date = /* @__PURE__ */ new Date()) => date.toLocaleString("ru", {
  month: "long",
  day: "numeric"
}).split(" ")[1];
function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const oneDay = 1e3 * 3600 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
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
console.log(VanillaCalendar);
var calendarInput = new VanillaCalendar("#calendar-input", options);
calendarInput.init();
var dropdownButton = document.querySelector("#calendar-input");
if (dropdownButton) {
  dropdownButton.addEventListener("click", () => {
    if (!dropdownButton.classList.contains("active")) {
      console.log("not act");
    } else {
      console.log("act");
    }
  });
}

// src/scripts/hotel-book.ts
mask_phone_default();
var quantityBlocks = document.querySelectorAll(".choice-dropdown__item");
var outputAdults = "";
var outputChildren = "";
for (let elem of quantityBlocks) {
  const buttonPlus = elem.querySelector(".button-plus");
  const buttonMinus = elem.querySelector(".button-minus");
  const input = elem.querySelector(".choice-dropdown__input");
  const dropdownCount = elem.querySelector(".choice-dropdown__count");
  let count = 0;
  buttonMinus.addEventListener("click", (e) => {
    console.log("minus");
    count--;
    count = count >= 0 ? count : 0;
    if (input?.getAttribute("name") === "count_adults") {
      input.value = `
            ${count + " " + getNoun2(count, "взрослый", "взрослых", "взрослых")}`;
      dropdownCount.innerHTML = `${input.value}`;
      outputAdults = input.value;
    }
    if (input?.getAttribute("name") === "count_children") {
      input.value = `
            ${count + " " + getNoun2(count, "ребенок", "детей", "детей")}`;
      dropdownCount.innerHTML = `${input.value}`;
      outputChildren = input.value;
    }
  });
  buttonPlus.addEventListener("click", (e) => {
    count++;
    dropdownCount.innerHTML = `${count}`;
    input.value = parseInt(count) + 1;
    if (input?.getAttribute("name") === "count_adults") {
      input.value = `
            ${count + " " + getNoun2(count, "взрослый", "взрослых", "взрослых")}`;
      dropdownCount.innerHTML = `${input.value}`;
      outputAdults = input.value.trim("");
    }
    if (input?.getAttribute("name") === "count_children") {
      input.value = `
            ${count + " " + getNoun2(count, "ребенок", "детей", "детей")}`;
      dropdownCount.innerHTML = `${input.value}`;
      outputChildren = input.value.trim("");
    }
  });
}
var buttonSave = document.querySelector(".choice-dropdown__save-btn");
if (buttonSave) {
  buttonSave.addEventListener("click", (e) => {
    console.log("save");
    const dropdownButton2 = e.target.closest(".form-item").querySelector(".custom-dropdown__btn");
    if (dropdownButton2) {
      const dropdownButtonText = dropdownButton2.querySelector(".custom-dropdown__btn-text");
      dropdownButtonText.innerHTML = outputAdults + ", " + outputChildren;
      dropdownButton2.classList.contains("active") && dropdownButton2.classList.remove("active");
    }
  });
}
function getNoun2(number, one, two, five) {
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
/*! Bundled license information:

vanilla-calendar-pro/build/vanilla-calendar.min.mjs:
  (*! name: vanilla-calendar-pro v2.9.9 | url: https://github.com/uvarov-frontend/vanilla-calendar-pro *)
*/
//# sourceMappingURL=hotel-book.js.map
