import {
  Navigation,
  Pagination,
  Swiper,
  hidden_blocks_default
} from "../chunks/chunk-3O2E7NIG.js";

// node_modules/@fancyapps/ui/dist/index.esm.js
var t = (t2, e2 = 1e4) => (t2 = parseFloat(t2 + "") || 0, Math.round((t2 + Number.EPSILON) * e2) / e2);
var e = function(t2) {
  if (!(t2 && t2 instanceof Element && t2.offsetParent)) return false;
  const e2 = t2.scrollHeight > t2.clientHeight, i2 = window.getComputedStyle(t2).overflowY, n2 = -1 !== i2.indexOf("hidden"), s2 = -1 !== i2.indexOf("visible");
  return e2 && !n2 && !s2;
};
var i = function(t2, n2 = void 0) {
  return !(!t2 || t2 === document.body || n2 && t2 === n2) && (e(t2) ? t2 : i(t2.parentElement, n2));
};
var n = function(t2) {
  var e2 = new DOMParser().parseFromString(t2, "text/html").body;
  if (e2.childElementCount > 1) {
    for (var i2 = document.createElement("div"); e2.firstChild; ) i2.appendChild(e2.firstChild);
    return i2;
  }
  return e2.firstChild;
};
var s = (t2) => `${t2 || ""}`.split(" ").filter((t3) => !!t3);
var o = (t2, e2, i2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.toggle(e3, i2 || false);
  });
};
var a = class {
  constructor(t2) {
    Object.defineProperty(this, "pageX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "pageY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "time", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nativePointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.nativePointer = t2, this.pageX = t2.pageX, this.pageY = t2.pageY, this.clientX = t2.clientX, this.clientY = t2.clientY, this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1, this.time = Date.now();
  }
};
var r = { passive: false };
var l = class {
  constructor(t2, { start: e2 = () => true, move: i2 = () => {
  }, end: n2 = () => {
  } }) {
    Object.defineProperty(this, "element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "moveCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "endCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "currentPointers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "startPointers", { enumerable: true, configurable: true, writable: true, value: [] }), this.element = t2, this.startCallback = e2, this.moveCallback = i2, this.endCallback = n2;
    for (const t3 of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[t3] = this[t3].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t2) {
    if (!t2.buttons || 0 !== t2.button) return;
    const e2 = new a(t2);
    this.currentPointers.some((t3) => t3.id === e2.id) || this.triggerPointerStart(e2, t2) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t2) {
    for (const e2 of Array.from(t2.changedTouches || [])) this.triggerPointerStart(new a(e2), t2);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t2) {
    const e2 = this.currentPointers.slice(), i2 = "changedTouches" in t2 ? Array.from(t2.changedTouches || []).map((t3) => new a(t3)) : [new a(t2)], n2 = [];
    for (const t3 of i2) {
      const e3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
      e3 < 0 || (n2.push(t3), this.currentPointers[e3] = t3);
    }
    n2.length && this.moveCallback(t2, this.currentPointers.slice(), e2);
  }
  onPointerEnd(t2) {
    t2.buttons > 0 && 0 !== t2.button || (this.triggerPointerEnd(t2, new a(t2)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t2) {
    for (const e2 of Array.from(t2.changedTouches || [])) this.triggerPointerEnd(t2, new a(e2));
  }
  triggerPointerStart(t2, e2) {
    return !!this.startCallback(e2, t2, this.currentPointers.slice()) && (this.currentPointers.push(t2), this.startPointers.push(t2), true);
  }
  triggerPointerEnd(t2, e2) {
    const i2 = this.currentPointers.findIndex((t3) => t3.id === e2.id);
    i2 < 0 || (this.currentPointers.splice(i2, 1), this.startPointers.splice(i2, 1), this.endCallback(t2, e2, this.currentPointers.slice()));
  }
  onWindowBlur() {
    this.clear();
  }
  clear() {
    for (; this.currentPointers.length; ) {
      const t2 = this.currentPointers[this.currentPointers.length - 1];
      this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", { bubbles: true, cancelable: true, clientX: t2.clientX, clientY: t2.clientY }), t2, this.currentPointers.slice());
    }
  }
  stop() {
    this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
};
function c(t2, e2) {
  return e2 ? Math.sqrt(Math.pow(e2.clientX - t2.clientX, 2) + Math.pow(e2.clientY - t2.clientY, 2)) : 0;
}
function h(t2, e2) {
  return e2 ? { clientX: (t2.clientX + e2.clientX) / 2, clientY: (t2.clientY + e2.clientY) / 2 } : t2;
}
var d = (t2) => "object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2);
var u = (t2, ...e2) => {
  const i2 = e2.length;
  for (let n2 = 0; n2 < i2; n2++) {
    const i3 = e2[n2] || {};
    Object.entries(i3).forEach(([e3, i4]) => {
      const n3 = Array.isArray(i4) ? [] : {};
      t2[e3] || Object.assign(t2, { [e3]: n3 }), d(i4) ? Object.assign(t2[e3], u(n3, i4)) : Array.isArray(i4) ? Object.assign(t2, { [e3]: [...i4] }) : Object.assign(t2, { [e3]: i4 });
    });
  }
  return t2;
};
var p = function(t2, e2) {
  return t2.split(".").reduce((t3, e3) => "object" == typeof t3 ? t3[e3] : void 0, e2);
};
var f = class {
  constructor(t2 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t2 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t2);
    for (const t3 of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t3.startsWith("on") && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
  }
  setOptions(t2) {
    this.options = t2 ? u({}, this.constructor.defaults, t2) : {};
    for (const [t3, e2] of Object.entries(this.option("on") || {})) this.on(t3, e2);
  }
  option(t2, ...e2) {
    let i2 = p(t2, this.options);
    return i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...e2)), i2;
  }
  optionFor(t2, e2, i2, ...n2) {
    let s2 = p(e2, t2);
    var o2;
    "string" != typeof (o2 = s2) || isNaN(o2) || isNaN(parseFloat(o2)) || (s2 = parseFloat(s2)), "true" === s2 && (s2 = true), "false" === s2 && (s2 = false), s2 && "function" == typeof s2 && (s2 = s2.call(this, this, t2, ...n2));
    let a2 = p(e2, this.options);
    return a2 && "function" == typeof a2 ? s2 = a2.call(this, this, t2, ...n2, s2) : void 0 === s2 && (s2 = a2), void 0 === s2 ? i2 : s2;
  }
  cn(t2) {
    const e2 = this.options.classes;
    return e2 && e2[t2] || "";
  }
  localize(t2, e2 = []) {
    t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, e3, i2) => {
      let n2 = "";
      return i2 ? n2 = this.option(`${e3[0] + e3.toLowerCase().substring(1)}.l10n.${i2}`) : e3 && (n2 = this.option(`l10n.${e3}`)), n2 || (n2 = t3), n2;
    });
    for (let i2 = 0; i2 < e2.length; i2++) t2 = t2.split(e2[i2][0]).join(e2[i2][1]);
    return t2 = t2.replace(/\{\{(.*?)\}\}/g, (t3, e3) => e3);
  }
  on(t2, e2) {
    let i2 = [];
    "string" == typeof t2 ? i2 = t2.split(" ") : Array.isArray(t2) && (i2 = t2), this.events || (this.events = /* @__PURE__ */ new Map()), i2.forEach((t3) => {
      let i3 = this.events.get(t3);
      i3 || (this.events.set(t3, []), i3 = []), i3.includes(e2) || i3.push(e2), this.events.set(t3, i3);
    });
  }
  off(t2, e2) {
    let i2 = [];
    "string" == typeof t2 ? i2 = t2.split(" ") : Array.isArray(t2) && (i2 = t2), i2.forEach((t3) => {
      const i3 = this.events.get(t3);
      if (Array.isArray(i3)) {
        const t4 = i3.indexOf(e2);
        t4 > -1 && i3.splice(t4, 1);
      }
    });
  }
  emit(t2, ...e2) {
    [...this.events.get(t2) || []].forEach((t3) => t3(this, ...e2)), "*" !== t2 && this.emit("*", t2, ...e2);
  }
};
Object.defineProperty(f, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(f, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
var g = class extends f {
  constructor(t2 = {}) {
    super(t2), Object.defineProperty(this, "plugins", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  attachPlugins(t2 = {}) {
    const e2 = /* @__PURE__ */ new Map();
    for (const [i2, n2] of Object.entries(t2)) {
      const t3 = this.option(i2), s2 = this.plugins[i2];
      s2 || false === t3 ? s2 && false === t3 && (s2.detach(), delete this.plugins[i2]) : e2.set(i2, new n2(this, t3 || {}));
    }
    for (const [t3, i2] of e2) this.plugins[t3] = i2, i2.attach();
  }
  detachPlugins(t2) {
    t2 = t2 || Object.keys(this.plugins);
    for (const e2 of t2) {
      const t3 = this.plugins[e2];
      t3 && t3.detach(), delete this.plugins[e2];
    }
    return this.emit("detachPlugins"), this;
  }
};
var m;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Error = 1] = "Error", t2[t2.Ready = 2] = "Ready", t2[t2.Panning = 3] = "Panning", t2[t2.Mousemove = 4] = "Mousemove", t2[t2.Destroy = 5] = "Destroy";
}(m || (m = {}));
var v = ["a", "b", "c", "d", "e", "f"];
var b = { PANUP: "Move up", PANDOWN: "Move down", PANLEFT: "Move left", PANRIGHT: "Move right", ZOOMIN: "Zoom in", ZOOMOUT: "Zoom out", TOGGLEZOOM: "Toggle zoom level", TOGGLE1TO1: "Toggle zoom level", ITERATEZOOM: "Toggle zoom level", ROTATECCW: "Rotate counterclockwise", ROTATECW: "Rotate clockwise", FLIPX: "Flip horizontally", FLIPY: "Flip vertically", FITX: "Fit horizontally", FITY: "Fit vertically", RESET: "Reset", TOGGLEFS: "Toggle fullscreen" };
var y = { content: null, width: "auto", height: "auto", panMode: "drag", touch: true, dragMinThreshold: 3, lockAxis: false, mouseMoveFactor: 1, mouseMoveFriction: 0.12, zoom: true, pinchToZoom: true, panOnlyZoomed: "auto", minScale: 1, maxScale: 2, friction: 0.25, dragFriction: 0.35, decelFriction: 0.05, click: "toggleZoom", dblClick: false, wheel: "zoom", wheelLimit: 7, spinner: true, bounds: "auto", infinite: false, rubberband: true, bounce: true, maxVelocity: 75, transformParent: false, classes: { content: "f-panzoom__content", isLoading: "is-loading", canZoomIn: "can-zoom_in", canZoomOut: "can-zoom_out", isDraggable: "is-draggable", isDragging: "is-dragging", inFullscreen: "in-fullscreen", htmlHasFullscreen: "with-panzoom-in-fullscreen" }, l10n: b };
var w = '<circle cx="25" cy="25" r="20"></circle>';
var x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>";
var E = (t2) => t2 && null !== t2 && t2 instanceof Element && "nodeType" in t2;
var S = (t2, e2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.remove(e3);
  });
};
var P = (t2, e2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.add(e3);
  });
};
var C = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
var T = 1e5;
var M = 1e4;
var O = "mousemove";
var A = "drag";
var L = "content";
var z = "auto";
var R = null;
var k = null;
var I = class _I extends g {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === k && (k = window.matchMedia("(hover: none)").matches), k;
  }
  get isMobile() {
    return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), R;
  }
  get panMode() {
    return this.options.panMode !== O || this.isTouchDevice ? A : O;
  }
  get panOnlyZoomed() {
    const t2 = this.options.panOnlyZoomed;
    return t2 === z ? this.isTouchDevice : t2;
  }
  get isInfinite() {
    return this.option("infinite");
  }
  get angle() {
    return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
  }
  get targetAngle() {
    return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
  }
  get scale() {
    const { a: t2, b: e2 } = this.current;
    return Math.sqrt(t2 * t2 + e2 * e2) || 1;
  }
  get targetScale() {
    const { a: t2, b: e2 } = this.target;
    return Math.sqrt(t2 * t2 + e2 * e2) || 1;
  }
  get minScale() {
    return this.option("minScale") || 1;
  }
  get fullScale() {
    const { contentRect: t2 } = this;
    return t2.fullWidth / t2.fitWidth || 1;
  }
  get maxScale() {
    return this.fullScale * (this.option("maxScale") || 1) || 1;
  }
  get coverScale() {
    const { containerRect: t2, contentRect: e2 } = this, i2 = Math.max(t2.height / e2.fitHeight, t2.width / e2.fitWidth) || 1;
    return Math.min(this.fullScale, i2);
  }
  get isScaling() {
    return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
  }
  get isContentLoading() {
    const t2 = this.content;
    return !!(t2 && t2 instanceof HTMLImageElement) && !t2.complete;
  }
  get isResting() {
    if (this.isBouncingX || this.isBouncingY) return false;
    for (const t2 of v) {
      const e2 = "e" == t2 || "f" === t2 ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t2] - this.current[t2]) > e2) return false;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t2, e2 = {}, i2 = {}) {
    var s2;
    if (super(e2), Object.defineProperty(this, "pointerTracker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "resizeObserver", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "updateTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "rAF", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isTicking", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ignoreBounds", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "clicks", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "trackingPoints", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "cwd", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "pmme", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "friction", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: m.Init }), Object.defineProperty(this, "isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "content", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "spinner", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "containerRect", { enumerable: true, configurable: true, writable: true, value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 } }), Object.defineProperty(this, "contentRect", { enumerable: true, configurable: true, writable: true, value: { top: 0, right: 0, bottom: 0, left: 0, fullWidth: 0, fullHeight: 0, fitWidth: 0, fitHeight: 0, width: 0, height: 0 } }), Object.defineProperty(this, "dragStart", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, top: 0, left: 0, time: 0 } }), Object.defineProperty(this, "dragOffset", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, time: 0 } }), Object.defineProperty(this, "current", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "velocity", { enumerable: true, configurable: true, writable: true, value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }), Object.defineProperty(this, "lockedAxis", { enumerable: true, configurable: true, writable: true, value: false }), !t2) throw new Error("Container Element Not Found");
    this.container = t2, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, _I.Plugins), i2)), this.emit("attachPlugins"), this.emit("init");
    const o2 = this.content;
    if (o2.addEventListener("load", this.onLoad), o2.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t2.classList.add(this.cn("isLoading"));
        const e3 = n(x);
        !t2.contains(o2) || o2.parentElement instanceof HTMLPictureElement ? this.spinner = t2.appendChild(e3) : this.spinner = (null === (s2 = o2.parentElement) || void 0 === s2 ? void 0 : s2.insertBefore(e3, o2)) || null;
      }
      this.emit("beforeLoad");
    } else queueMicrotask(() => {
      this.enable();
    });
  }
  initContent() {
    const { container: t2 } = this, e2 = this.cn(L);
    let i2 = this.option(L) || t2.querySelector(`.${e2}`);
    if (i2 || (i2 = t2.querySelector("img,picture") || t2.firstElementChild, i2 && P(i2, e2)), i2 instanceof HTMLPictureElement && (i2 = i2.querySelector("img")), !i2) throw new Error("No content found");
    this.content = i2;
  }
  onLoad() {
    const { spinner: t2, container: e2, state: i2 } = this;
    t2 && (t2.remove(), this.spinner = null), this.option("spinner") && e2.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i2 === m.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
  }
  getNextScale(t2) {
    const { fullScale: e2, targetScale: i2, coverScale: n2, maxScale: s2, minScale: o2 } = this;
    let a2 = o2;
    switch (t2) {
      case "toggleMax":
        a2 = i2 - o2 < 0.5 * (s2 - o2) ? s2 : o2;
        break;
      case "toggleCover":
        a2 = i2 - o2 < 0.5 * (n2 - o2) ? n2 : o2;
        break;
      case "toggleZoom":
        a2 = i2 - o2 < 0.5 * (e2 - o2) ? e2 : o2;
        break;
      case "iterateZoom":
        let t3 = [1, e2, s2].sort((t4, e3) => t4 - e3), r2 = t3.findIndex((t4) => t4 > i2 + 1e-5);
        a2 = t3[r2] || 1;
    }
    return a2;
  }
  attachObserver() {
    var t2;
    const e2 = () => {
      const { container: t3, containerRect: e3 } = this;
      return Math.abs(e3.width - t3.getBoundingClientRect().width) > 0.1 || Math.abs(e3.height - t3.getBoundingClientRect().height) > 0.1;
    };
    this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
      this.updateTimer || (e2() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
        e2() && this.onResize(), this.updateTimer = null;
      }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
    })), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.observe(this.container);
  }
  detachObserver() {
    var t2;
    null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect();
  }
  attachEvents() {
    const { container: t2 } = this;
    t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("wheel", this.onWheel, { passive: false }), this.pointerTracker = new l(t2, { start: this.onPointerDown, move: this.onPointerMove, end: this.onPointerUp }), document.addEventListener(O, this.onMouseMove);
  }
  detachEvents() {
    var t2;
    const { container: e2 } = this;
    e2.removeEventListener("click", this.onClick, { passive: false, capture: false }), e2.removeEventListener("wheel", this.onWheel, { passive: false }), null === (t2 = this.pointerTracker) || void 0 === t2 || t2.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, true), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t2 = this.friction, e2 = this.option("maxVelocity");
    for (const i2 of v) t2 ? (this.velocity[i2] *= 1 - t2, e2 && !this.isScaling && (this.velocity[i2] = Math.max(Math.min(this.velocity[i2], e2), -1 * e2)), this.current[i2] += this.velocity[i2]) : this.current[i2] = this.target[i2];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t2 of v) "e" === t2 && this.isBouncingX || "f" === t2 && this.isBouncingY || (this.velocity[t2] = (1 / (1 - this.friction) - 1) * (this.target[t2] - this.current[t2]));
  }
  checkBounds(t2 = 0, e2 = 0) {
    const { current: i2 } = this, n2 = i2.e + t2, s2 = i2.f + e2, o2 = this.getBounds(), { x: a2, y: r2 } = o2, l2 = a2.min, c2 = a2.max, h2 = r2.min, d2 = r2.max;
    let u2 = 0, p2 = 0;
    return l2 !== 1 / 0 && n2 < l2 ? u2 = l2 - n2 : c2 !== 1 / 0 && n2 > c2 && (u2 = c2 - n2), h2 !== 1 / 0 && s2 < h2 ? p2 = h2 - s2 : d2 !== 1 / 0 && s2 > d2 && (p2 = d2 - s2), Math.abs(u2) < 1e-4 && (u2 = 0), Math.abs(p2) < 1e-4 && (p2 = 0), Object.assign(Object.assign({}, o2), { xDiff: u2, yDiff: p2, inBounds: !u2 && !p2 });
  }
  clampTargetBounds() {
    const { target: t2 } = this, { x: e2, y: i2 } = this.getBounds();
    e2.min !== 1 / 0 && (t2.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (t2.e = Math.min(t2.e, e2.max)), i2.min !== 1 / 0 && (t2.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (t2.f = Math.min(t2.f, i2.max));
  }
  calculateContentDim(t2 = this.current) {
    const { content: e2, contentRect: i2 } = this, { fitWidth: n2, fitHeight: s2, fullWidth: o2, fullHeight: a2 } = i2;
    let r2 = o2, l2 = a2;
    if (this.option("zoom") || 0 !== this.angle) {
      const i3 = !(e2 instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e2).maxWidth || "none" === window.getComputedStyle(e2).maxHeight), c2 = i3 ? o2 : n2, h2 = i3 ? a2 : s2, d2 = this.getMatrix(t2), u2 = new DOMPoint(0, 0).matrixTransform(d2), p2 = new DOMPoint(0 + c2, 0).matrixTransform(d2), f2 = new DOMPoint(0 + c2, 0 + h2).matrixTransform(d2), g2 = new DOMPoint(0, 0 + h2).matrixTransform(d2), m2 = Math.abs(f2.x - u2.x), v2 = Math.abs(f2.y - u2.y), b2 = Math.abs(g2.x - p2.x), y2 = Math.abs(g2.y - p2.y);
      r2 = Math.max(m2, b2), l2 = Math.max(v2, y2);
    }
    return { contentWidth: r2, contentHeight: l2 };
  }
  setEdgeForce() {
    if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = false, void (this.isBouncingY = false);
    const { target: t2 } = this, { x: e2, y: i2, xDiff: n2, yDiff: s2 } = this.checkBounds();
    const o2 = this.option("maxVelocity");
    let a2 = this.velocity.e, r2 = this.velocity.f;
    0 !== n2 ? (this.isBouncingX = true, n2 * a2 <= 0 ? a2 += 0.14 * n2 : (a2 = 0.14 * n2, e2.min !== 1 / 0 && (this.target.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (this.target.e = Math.min(t2.e, e2.max))), o2 && (a2 = Math.max(Math.min(a2, o2), -1 * o2))) : this.isBouncingX = false, 0 !== s2 ? (this.isBouncingY = true, s2 * r2 <= 0 ? r2 += 0.14 * s2 : (r2 = 0.14 * s2, i2.min !== 1 / 0 && (this.target.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (this.target.f = Math.min(t2.f, i2.max))), o2 && (r2 = Math.max(Math.min(r2, o2), -1 * o2))) : this.isBouncingY = false, this.isBouncingX && (this.velocity.e = a2), this.isBouncingY && (this.velocity.f = r2);
  }
  enable() {
    const { content: t2 } = this, e2 = new DOMMatrixReadOnly(window.getComputedStyle(t2).transform);
    for (const t3 of v) this.current[t3] = this.target[t3] = e2[t3];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, this.emit("ready");
  }
  onClick(t2) {
    var e2;
    "click" === t2.type && 0 === t2.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e2 = this.pointerTracker) || void 0 === e2 || e2.clear(), this.trackingPoints = [], this.startDecelAnim());
    const i2 = t2.target;
    if (!i2 || t2.defaultPrevented) return;
    if (i2.hasAttribute("disabled")) return t2.preventDefault(), void t2.stopPropagation();
    if ((() => {
      const t3 = window.getSelection();
      return t3 && "Range" === t3.type;
    })() && !i2.closest("button")) return;
    const n2 = i2.closest("[data-panzoom-action]"), s2 = i2.closest("[data-panzoom-change]"), o2 = n2 || s2, a2 = o2 && E(o2) ? o2.dataset : null;
    if (a2) {
      const e3 = a2.panzoomChange, i3 = a2.panzoomAction;
      if ((e3 || i3) && t2.preventDefault(), e3) {
        let t3 = {};
        try {
          t3 = JSON.parse(e3);
        } catch (t4) {
          console && console.warn("The given data was not valid JSON");
        }
        return void this.applyChange(t3);
      }
      if (i3) return void (this[i3] && this[i3]());
    }
    if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t2.preventDefault(), void t2.stopPropagation();
    if (i2.closest("[data-fancybox]")) return;
    const r2 = this.content.getBoundingClientRect(), l2 = this.dragStart;
    if (l2.time && !this.canZoomOut() && (Math.abs(r2.x - l2.x) > 2 || Math.abs(r2.y - l2.y) > 2)) return;
    this.dragStart.time = 0;
    const c2 = (e3) => {
      this.option("zoom", t2) && e3 && "string" == typeof e3 && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e3) && "function" == typeof this[e3] && (t2.preventDefault(), this[e3]({ event: t2 }));
    }, h2 = this.option("click", t2), d2 = this.option("dblClick", t2);
    d2 ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t2), !t2.defaultPrevented && h2 && c2(h2)) : (this.emit("dblClick", t2), t2.defaultPrevented || c2(d2)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t2), !t2.defaultPrevented && h2 && c2(h2));
  }
  addTrackingPoint(t2) {
    const e2 = this.trackingPoints.filter((t3) => t3.time > Date.now() - 100);
    e2.push(t2), this.trackingPoints = e2;
  }
  onPointerDown(t2, e2, i2) {
    var n2;
    if (false === this.option("touch", t2)) return false;
    this.pwt = 0, this.dragOffset = { x: 0, y: 0, time: 0 }, this.trackingPoints = [];
    const s2 = this.content.getBoundingClientRect();
    if (this.dragStart = { x: s2.x, y: s2.y, top: s2.top, left: s2.left, time: Date.now() }, this.clickTimer) return false;
    if (this.panMode === O && this.targetScale > 1) return t2.preventDefault(), t2.stopPropagation(), false;
    const o2 = t2.composedPath()[0];
    if (!i2.length) {
      if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o2.nodeName) || o2.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return false;
      null === (n2 = window.getSelection()) || void 0 === n2 || n2.removeAllRanges();
    }
    if ("mousedown" === t2.type) ["A", "BUTTON"].includes(o2.nodeName) || t2.preventDefault();
    else if (Math.abs(this.velocity.a) > 0.3) return false;
    return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = true, this.addTrackingPoint(e2), this.emit("touchStart", t2)), true;
  }
  onPointerMove(e2, n2, s2) {
    if (false === this.option("touch", e2)) return;
    if (!this.isDragging) return;
    if (n2.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
    if (this.emit("touchMove", e2), e2.defaultPrevented) return;
    this.addTrackingPoint(n2[0]);
    const { content: o2 } = this, a2 = h(s2[0], s2[1]), r2 = h(n2[0], n2[1]);
    let l2 = 0, d2 = 0;
    if (n2.length > 1) {
      const t2 = o2.getBoundingClientRect();
      l2 = a2.clientX - t2.left - 0.5 * t2.width, d2 = a2.clientY - t2.top - 0.5 * t2.height;
    }
    const u2 = c(s2[0], s2[1]), p2 = c(n2[0], n2[1]);
    let f2 = u2 ? p2 / u2 : 1, g2 = r2.clientX - a2.clientX, m2 = r2.clientY - a2.clientY;
    this.dragOffset.x += g2, this.dragOffset.y += m2, this.dragOffset.time = Date.now() - this.dragStart.time;
    let v2 = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (v2 && !this.lockedAxis) if ("xy" === v2 || "y" === v2 || "touchmove" === e2.type) {
      if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e2.preventDefault();
      const t2 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
      this.lockedAxis = t2 > 45 && t2 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g2 = 0, m2 = 0;
    } else this.lockedAxis = v2;
    if (i(e2.target, this.content) && (v2 = "x", this.dragOffset.y = 0), v2 && "xy" !== v2 && this.lockedAxis !== v2 && t(this.targetScale) === t(this.minScale)) return;
    e2.cancelable && e2.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const b2 = this.checkBounds(g2, m2);
    this.option("rubberband") ? ("x" !== this.isInfinite && (b2.xDiff > 0 && g2 < 0 || b2.xDiff < 0 && g2 > 0) && (g2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitWidth * b2.xDiff))), "y" !== this.isInfinite && (b2.yDiff > 0 && m2 < 0 || b2.yDiff < 0 && m2 > 0) && (m2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitHeight * b2.yDiff)))) : (b2.xDiff && (g2 = 0), b2.yDiff && (m2 = 0));
    const y2 = this.targetScale, w2 = this.minScale, x2 = this.maxScale;
    y2 < 0.5 * w2 && (f2 = Math.max(f2, w2)), y2 > 1.5 * x2 && (f2 = Math.min(f2, x2)), "y" === this.lockedAxis && t(y2) === t(w2) && (g2 = 0), "x" === this.lockedAxis && t(y2) === t(w2) && (m2 = 0), this.applyChange({ originX: l2, originY: d2, panX: g2, panY: m2, scale: f2, friction: this.option("dragFriction"), ignoreBounds: true });
  }
  onPointerUp(t2, e2, n2) {
    if (n2.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e2), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), i(t2.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t2), this.isDragging = false, this.lockedAxis = false, this.state !== m.Destroy && (t2.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e2;
    const i2 = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const t2 of v) this.velocity[t2] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false;
    const { trackingPoints: n2 } = this, s2 = n2[0], o2 = n2[n2.length - 1];
    let a2 = 0, r2 = 0, l2 = 0;
    o2 && s2 && (a2 = o2.clientX - s2.clientX, r2 = o2.clientY - s2.clientY, l2 = o2.time - s2.time);
    const c2 = (null === (e2 = window.visualViewport) || void 0 === e2 ? void 0 : e2.scale) || 1;
    1 !== c2 && (a2 *= c2, r2 *= c2);
    let h2 = 0, d2 = 0, u2 = 0, p2 = 0, f2 = this.option("decelFriction");
    const g2 = this.targetScale;
    if (l2 > 0) {
      u2 = Math.abs(a2) > 3 ? a2 / (l2 / 30) : 0, p2 = Math.abs(r2) > 3 ? r2 / (l2 / 30) : 0;
      const t2 = this.option("maxVelocity");
      t2 && (u2 = Math.max(Math.min(u2, t2), -1 * t2), p2 = Math.max(Math.min(p2, t2), -1 * t2));
    }
    u2 && (h2 = u2 / (1 / (1 - f2) - 1)), p2 && (d2 = p2 / (1 / (1 - f2) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g2) === this.minScale) && (h2 = u2 = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g2) === this.minScale) && (d2 = p2 = 0);
    const m2 = this.dragOffset.x, b2 = this.dragOffset.y, y2 = this.option("dragMinThreshold") || 0;
    Math.abs(m2) < y2 && Math.abs(b2) < y2 && (h2 = d2 = 0, u2 = p2 = 0), (this.option("zoom") && (g2 < this.minScale - 1e-5 || g2 > this.maxScale + 1e-5) || i2 && !h2 && !d2) && (f2 = 0.35), this.applyChange({ panX: h2, panY: d2, friction: f2 }), this.emit("decel", u2, p2, m2, b2);
  }
  onWheel(t2) {
    var e2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(function(t3, e3) {
      return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
    });
    const i2 = Math.max(-1, Math.min(1, e2));
    if (this.emit("wheel", t2, i2), this.panMode === O) return;
    if (t2.defaultPrevented) return;
    const n2 = this.option("wheel");
    "pan" === n2 ? (t2.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({ panX: 2 * -t2.deltaX, panY: 2 * -t2.deltaY, bounce: false })) : "zoom" === n2 && false !== this.option("zoom") && this.zoomWithWheel(t2);
  }
  onMouseMove(t2) {
    this.panWithMouse(t2);
  }
  onKeydown(t2) {
    "Escape" === t2.key && this.toggleFS();
  }
  onResize() {
    this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
  }
  setTransform() {
    this.emit("beforeTransform");
    const { current: e2, target: i2, content: n2, contentRect: s2 } = this, o2 = Object.assign({}, C);
    for (const n3 of v) {
      const s3 = "e" == n3 || "f" === n3 ? M : T;
      o2[n3] = t(e2[n3], s3), Math.abs(i2[n3] - e2[n3]) < ("e" == n3 || "f" === n3 ? 0.51 : 1e-3) && (e2[n3] = i2[n3]);
    }
    let { a: a2, b: r2, c: l2, d: c2, e: h2, f: d2 } = o2, u2 = `matrix(${a2}, ${r2}, ${l2}, ${c2}, ${h2}, ${d2})`, p2 = n2.parentElement instanceof HTMLPictureElement ? n2.parentElement : n2;
    if (this.option("transformParent") && (p2 = p2.parentElement || p2), p2.style.transform === u2) return;
    p2.style.transform = u2;
    const { contentWidth: f2, contentHeight: g2 } = this.calculateContentDim();
    s2.width = f2, s2.height = g2, this.emit("afterTransform");
  }
  updateMetrics(e2 = false) {
    var i2;
    if (!this || this.state === m.Destroy) return;
    if (this.isContentLoading) return;
    const n2 = Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1), { container: s2, content: o2 } = this, a2 = o2 instanceof HTMLImageElement, r2 = s2.getBoundingClientRect(), l2 = getComputedStyle(this.container);
    let c2 = r2.width * n2, h2 = r2.height * n2;
    const d2 = parseFloat(l2.paddingTop) + parseFloat(l2.paddingBottom), u2 = c2 - (parseFloat(l2.paddingLeft) + parseFloat(l2.paddingRight)), p2 = h2 - d2;
    this.containerRect = { width: c2, height: h2, innerWidth: u2, innerHeight: p2 };
    const f2 = parseFloat(o2.dataset.width || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalWidth : t2 instanceof SVGElement ? t2.width.baseVal.value : Math.max(t2.offsetWidth, t2.scrollWidth), e3 || 0;
    })(o2), g2 = parseFloat(o2.dataset.height || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalHeight : t2 instanceof SVGElement ? t2.height.baseVal.value : Math.max(t2.offsetHeight, t2.scrollHeight), e3 || 0;
    })(o2);
    let v2 = this.option("width", f2) || z, b2 = this.option("height", g2) || z;
    const y2 = v2 === z, w2 = b2 === z;
    "number" != typeof v2 && (v2 = f2), "number" != typeof b2 && (b2 = g2), y2 && (v2 = f2 * (b2 / g2)), w2 && (b2 = g2 / (f2 / v2));
    let x2 = o2.parentElement instanceof HTMLPictureElement ? o2.parentElement : o2;
    this.option("transformParent") && (x2 = x2.parentElement || x2);
    const E2 = x2.getAttribute("style") || "";
    x2.style.setProperty("transform", "none", "important"), a2 && (x2.style.width = "", x2.style.height = ""), x2.offsetHeight;
    const S2 = o2.getBoundingClientRect();
    let P2 = S2.width * n2, C2 = S2.height * n2, T2 = P2, M2 = C2;
    P2 = Math.min(P2, v2), C2 = Math.min(C2, b2), a2 ? { width: P2, height: C2 } = ((t2, e3, i3, n3) => {
      const s3 = i3 / t2, o3 = n3 / e3, a3 = Math.min(s3, o3);
      return { width: t2 *= a3, height: e3 *= a3 };
    })(v2, b2, P2, C2) : (P2 = Math.min(P2, v2), C2 = Math.min(C2, b2));
    let O2 = 0.5 * (M2 - C2), A2 = 0.5 * (T2 - P2);
    this.contentRect = Object.assign(Object.assign({}, this.contentRect), { top: S2.top - r2.top + O2, bottom: r2.bottom - S2.bottom + O2, left: S2.left - r2.left + A2, right: r2.right - S2.right + A2, fitWidth: P2, fitHeight: C2, width: P2, height: C2, fullWidth: v2, fullHeight: b2 }), x2.style.cssText = E2, a2 && (x2.style.width = `${P2}px`, x2.style.height = `${C2}px`), this.setTransform(), true !== e2 && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const { contentWidth: e2, contentHeight: i2 } = this.calculateContentDim(this.target), { targetScale: n2, lockedAxis: s2 } = this, { fitWidth: o2, fitHeight: a2 } = this.contentRect;
    let r2 = 0, l2 = 0, c2 = 0, h2 = 0;
    const d2 = this.option("infinite");
    if (true === d2 || s2 && d2 === s2) r2 = -1 / 0, c2 = 1 / 0, l2 = -1 / 0, h2 = 1 / 0;
    else {
      let { containerRect: s3, contentRect: d3 } = this, u2 = t(o2 * n2, M), p2 = t(a2 * n2, M), { innerWidth: f2, innerHeight: g2 } = s3;
      if (s3.width === u2 && (f2 = s3.width), s3.width === p2 && (g2 = s3.height), e2 > f2) {
        c2 = 0.5 * (e2 - f2), r2 = -1 * c2;
        let t2 = 0.5 * (d3.right - d3.left);
        r2 += t2, c2 += t2;
      }
      if (o2 > f2 && e2 < f2 && (r2 -= 0.5 * (o2 - f2), c2 -= 0.5 * (o2 - f2)), i2 > g2) {
        h2 = 0.5 * (i2 - g2), l2 = -1 * h2;
        let t2 = 0.5 * (d3.bottom - d3.top);
        l2 += t2, h2 += t2;
      }
      a2 > g2 && i2 < g2 && (r2 -= 0.5 * (a2 - g2), c2 -= 0.5 * (a2 - g2));
    }
    return { x: { min: r2, max: c2 }, y: { min: l2, max: h2 } };
  }
  getBounds() {
    const t2 = this.option("bounds");
    return t2 !== z ? t2 : this.calculateBounds();
  }
  updateControls() {
    const e2 = this, i2 = e2.container, { panMode: n2, contentRect: s2, targetScale: a2, minScale: r2 } = e2;
    let l2 = r2, c2 = e2.option("click") || false;
    c2 && (l2 = e2.getNextScale(c2));
    let h2 = e2.canZoomIn(), d2 = e2.canZoomOut(), u2 = n2 === A && !!this.option("touch"), p2 = d2 && u2;
    if (u2 && (t(a2) < t(r2) && !this.panOnlyZoomed && (p2 = true), (t(s2.width, 1) > t(s2.fitWidth, 1) || t(s2.height, 1) > t(s2.fitHeight, 1)) && (p2 = true)), t(s2.width * a2, 1) < t(s2.fitWidth, 1) && (p2 = false), n2 === O && (p2 = false), o(i2, this.cn("isDraggable"), p2), !this.option("zoom")) return;
    let f2 = h2 && t(l2) > t(a2), g2 = !f2 && !p2 && d2 && t(l2) < t(a2);
    o(i2, this.cn("canZoomIn"), f2), o(i2, this.cn("canZoomOut"), g2);
    for (const t2 of i2.querySelectorAll("[data-panzoom-action]")) {
      let e3 = false, i3 = false;
      switch (t2.dataset.panzoomAction) {
        case "zoomIn":
          h2 ? e3 = true : i3 = true;
          break;
        case "zoomOut":
          d2 ? e3 = true : i3 = true;
          break;
        case "toggleZoom":
        case "iterateZoom":
          h2 || d2 ? e3 = true : i3 = true;
          const n3 = t2.querySelector("g");
          n3 && (n3.style.display = h2 ? "" : "none");
      }
      e3 ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex")) : i3 && (t2.setAttribute("disabled", ""), t2.setAttribute("tabindex", "-1"));
    }
  }
  panTo({ x: t2 = this.target.e, y: e2 = this.target.f, scale: i2 = this.targetScale, friction: n2 = this.option("friction"), angle: s2 = 0, originX: o2 = 0, originY: a2 = 0, flipX: r2 = false, flipY: l2 = false, ignoreBounds: c2 = false }) {
    this.state !== m.Destroy && this.applyChange({ panX: t2 - this.target.e, panY: e2 - this.target.f, scale: i2 / this.targetScale, angle: s2, originX: o2, originY: a2, friction: n2, flipX: r2, flipY: l2, ignoreBounds: c2 });
  }
  applyChange({ panX: e2 = 0, panY: i2 = 0, scale: n2 = 1, angle: s2 = 0, originX: o2 = -this.current.e, originY: a2 = -this.current.f, friction: r2 = this.option("friction"), flipX: l2 = false, flipY: c2 = false, ignoreBounds: h2 = false, bounce: d2 = this.option("bounce") }) {
    const u2 = this.state;
    if (u2 === m.Destroy) return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r2 || 0, this.ignoreBounds = h2;
    const { current: p2 } = this, f2 = p2.e, g2 = p2.f, b2 = this.getMatrix(this.target);
    let y2 = new DOMMatrix().translate(f2, g2).translate(o2, a2).translate(e2, i2);
    if (this.option("zoom")) {
      if (!h2) {
        const t2 = this.targetScale, e3 = this.minScale, i3 = this.maxScale;
        t2 * n2 < e3 && (n2 = e3 / t2), t2 * n2 > i3 && (n2 = i3 / t2);
      }
      y2 = y2.scale(n2);
    }
    y2 = y2.translate(-o2, -a2).translate(-f2, -g2).multiply(b2), s2 && (y2 = y2.rotate(s2)), l2 && (y2 = y2.scale(-1, 1)), c2 && (y2 = y2.scale(1, -1));
    for (const e3 of v) "e" !== e3 && "f" !== e3 && (y2[e3] > this.minScale + 1e-5 || y2[e3] < this.minScale - 1e-5) ? this.target[e3] = y2[e3] : this.target[e3] = t(y2[e3], M);
    (this.targetScale < this.scale || Math.abs(n2 - 1) > 0.1 || this.panMode === O || false === d2) && !h2 && this.clampTargetBounds(), u2 === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
  }
  stop(t2 = false) {
    if (this.state === m.Init || this.state === m.Destroy) return;
    const e2 = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const e3 of v) this.velocity[e3] = 0, "current" === t2 ? this.current[e3] = this.target[e3] : "target" === t2 && (this.target[e3] = this.current[e3]);
    this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false, this.state = m.Ready, e2 && (this.emit("endAnimation"), this.updateControls());
  }
  requestTick() {
    this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), this.isScaling && P(this.container, "is-scaling")), this.isTicking = true, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
  }
  panWithMouse(e2, i2 = this.option("mouseMoveFriction")) {
    if (this.pmme = e2, this.panMode !== O || !e2) return;
    if (t(this.targetScale) <= t(this.minScale)) return;
    this.emit("mouseMove", e2);
    const { container: n2, containerRect: s2, contentRect: o2 } = this, a2 = s2.width, r2 = s2.height, l2 = n2.getBoundingClientRect(), c2 = (e2.clientX || 0) - l2.left, h2 = (e2.clientY || 0) - l2.top;
    let { contentWidth: d2, contentHeight: u2 } = this.calculateContentDim(this.target);
    const p2 = this.option("mouseMoveFactor");
    p2 > 1 && (d2 !== a2 && (d2 *= p2), u2 !== r2 && (u2 *= p2));
    let f2 = 0.5 * (d2 - a2) - c2 / a2 * 100 / 100 * (d2 - a2);
    f2 += 0.5 * (o2.right - o2.left);
    let g2 = 0.5 * (u2 - r2) - h2 / r2 * 100 / 100 * (u2 - r2);
    g2 += 0.5 * (o2.bottom - o2.top), this.applyChange({ panX: f2 - this.target.e, panY: g2 - this.target.f, friction: i2 });
  }
  zoomWithWheel(e2) {
    if (this.state === m.Destroy || this.state === m.Init) return;
    const i2 = Date.now();
    if (i2 - this.pwt < 45) return void e2.preventDefault();
    this.pwt = i2;
    var n2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce(function(t2, e3) {
      return Math.abs(e3) > Math.abs(t2) ? e3 : t2;
    });
    const s2 = Math.max(-1, Math.min(1, n2)), { targetScale: o2, maxScale: a2, minScale: r2 } = this;
    let l2 = o2 * (100 + 45 * s2) / 100;
    t(l2) < t(r2) && t(o2) <= t(r2) ? (this.cwd += Math.abs(s2), l2 = r2) : t(l2) > t(a2) && t(o2) >= t(a2) ? (this.cwd += Math.abs(s2), l2 = a2) : (this.cwd = 0, l2 = Math.max(Math.min(l2, a2), r2)), this.cwd > this.option("wheelLimit") || (e2.preventDefault(), t(l2) !== t(o2) && this.zoomTo(l2, { event: e2 }));
  }
  canZoomIn() {
    return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
  }
  canZoomOut() {
    return this.option("zoom") && t(this.targetScale) > t(this.minScale);
  }
  zoomIn(t2 = 1.25, e2) {
    this.zoomTo(this.targetScale * t2, e2);
  }
  zoomOut(t2 = 0.8, e2) {
    this.zoomTo(this.targetScale * t2, e2);
  }
  zoomToFit(t2) {
    this.zoomTo("fit", t2);
  }
  zoomToCover(t2) {
    this.zoomTo("cover", t2);
  }
  zoomToFull(t2) {
    this.zoomTo("full", t2);
  }
  zoomToMax(t2) {
    this.zoomTo("max", t2);
  }
  toggleZoom(t2) {
    this.zoomTo(this.getNextScale("toggleZoom"), t2);
  }
  toggleMax(t2) {
    this.zoomTo(this.getNextScale("toggleMax"), t2);
  }
  toggleCover(t2) {
    this.zoomTo(this.getNextScale("toggleCover"), t2);
  }
  iterateZoom(t2) {
    this.zoomTo("next", t2);
  }
  zoomTo(t2 = 1, { friction: e2 = z, originX: i2 = z, originY: n2 = z, event: s2 } = {}) {
    if (this.isContentLoading || this.state === m.Destroy) return;
    const { targetScale: o2, fullScale: a2, maxScale: r2, coverScale: l2 } = this;
    if (this.stop(), this.panMode === O && (s2 = this.pmme || s2), s2 || i2 === z || n2 === z) {
      const t3 = this.content.getBoundingClientRect(), e3 = this.container.getBoundingClientRect(), o3 = s2 ? s2.clientX : e3.left + 0.5 * e3.width, a3 = s2 ? s2.clientY : e3.top + 0.5 * e3.height;
      i2 = o3 - t3.left - 0.5 * t3.width, n2 = a3 - t3.top - 0.5 * t3.height;
    }
    let c2 = 1;
    "number" == typeof t2 ? c2 = t2 : "full" === t2 ? c2 = a2 : "cover" === t2 ? c2 = l2 : "max" === t2 ? c2 = r2 : "fit" === t2 ? c2 = 1 : "next" === t2 && (c2 = this.getNextScale("iterateZoom")), c2 = c2 / o2 || 1, e2 = e2 === z ? c2 > 1 ? 0.15 : 0.25 : e2, this.applyChange({ scale: c2, originX: i2, originY: n2, friction: e2 }), s2 && this.panMode === O && this.panWithMouse(s2, e2);
  }
  rotateCCW() {
    this.applyChange({ angle: -90 });
  }
  rotateCW() {
    this.applyChange({ angle: 90 });
  }
  flipX() {
    this.applyChange({ flipX: true });
  }
  flipY() {
    this.applyChange({ flipY: true });
  }
  fitX() {
    this.stop("target");
    const { containerRect: t2, contentRect: e2, target: i2 } = this;
    this.applyChange({ panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e, panY: 0.5 * t2.height - (e2.top + 0.5 * e2.fitHeight) - i2.f, scale: t2.width / e2.fitWidth / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  fitY() {
    this.stop("target");
    const { containerRect: t2, contentRect: e2, target: i2 } = this;
    this.applyChange({ panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e, panY: 0.5 * t2.innerHeight - (e2.top + 0.5 * e2.fitHeight) - i2.f, scale: t2.height / e2.fitHeight / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  toggleFS() {
    const { container: t2 } = this, e2 = this.cn("inFullscreen"), i2 = this.cn("htmlHasFullscreen");
    t2.classList.toggle(e2);
    const n2 = t2.classList.contains(e2);
    n2 ? (document.documentElement.classList.add(i2), document.addEventListener("keydown", this.onKeydown, true)) : (document.documentElement.classList.remove(i2), document.removeEventListener("keydown", this.onKeydown, true)), this.updateMetrics(), this.emit(n2 ? "enterFS" : "exitFS");
  }
  getMatrix(t2 = this.current) {
    const { a: e2, b: i2, c: n2, d: s2, e: o2, f: a2 } = t2;
    return new DOMMatrix([e2, i2, n2, s2, o2, a2]);
  }
  reset(t2) {
    if (this.state !== m.Init && this.state !== m.Destroy) {
      this.stop("current");
      for (const t3 of v) this.target[t3] = C[t3];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t2 ? this.option("friction") : t2, this.state = m.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
    const { container: t2, content: e2 } = this, i2 = this.option("classes") || {};
    for (const e3 of Object.values(i2)) t2.classList.remove(e3 + "");
    e2 && (e2.removeEventListener("load", this.onLoad), e2.removeEventListener("error", this.onError)), this.detachPlugins();
  }
};
Object.defineProperty(I, "defaults", { enumerable: true, configurable: true, writable: true, value: y }), Object.defineProperty(I, "Plugins", { enumerable: true, configurable: true, writable: true, value: {} });
var D = function(t2, e2) {
  let i2 = true;
  return (...n2) => {
    i2 && (i2 = false, t2(...n2), setTimeout(() => {
      i2 = true;
    }, e2));
  };
};
var F = (t2, e2) => {
  let i2 = [];
  return t2.childNodes.forEach((t3) => {
    t3.nodeType !== Node.ELEMENT_NODE || e2 && !t3.matches(e2) || i2.push(t3);
  }), i2;
};
var j = { viewport: null, track: null, enabled: true, slides: [], axis: "x", transition: "fade", preload: 1, slidesPerPage: "auto", initialPage: 0, friction: 0.12, Panzoom: { decelFriction: 0.12 }, center: true, infinite: true, fill: true, dragFree: false, adaptiveHeight: false, direction: "ltr", classes: { container: "f-carousel", viewport: "f-carousel__viewport", track: "f-carousel__track", slide: "f-carousel__slide", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", inTransition: "in-transition", isSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
var B;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Destroy = 2] = "Destroy";
}(B || (B = {}));
var H = (t2) => {
  if ("string" == typeof t2 || t2 instanceof HTMLElement) t2 = { html: t2 };
  else {
    const e2 = t2.thumb;
    void 0 !== e2 && ("string" == typeof e2 && (t2.thumbSrc = e2), e2 instanceof HTMLImageElement && (t2.thumbEl = e2, t2.thumbElSrc = e2.src, t2.thumbSrc = e2.src), delete t2.thumb);
  }
  return Object.assign({ html: "", el: null, isDom: false, class: "", customClass: "", index: -1, dim: 0, gap: 0, pos: 0, transition: false }, t2);
};
var N = (t2 = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t2);
var _ = class extends f {
  constructor(t2, e2) {
    super(e2), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t2 });
  }
  attach() {
  }
  detach() {
  }
};
var $ = { classes: { list: "f-carousel__dots", isDynamic: "is-dynamic", hasDots: "has-dots", dot: "f-carousel__dot", isBeforePrev: "is-before-prev", isPrev: "is-prev", isCurrent: "is-current", isNext: "is-next", isAfterNext: "is-after-next" }, dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>', dynamicFrom: 11, maxCount: 1 / 0, minCount: 2 };
var W = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "isDynamic", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "list", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onRefresh() {
    this.refresh();
  }
  build() {
    let t2 = this.list;
    if (!t2) {
      t2 = document.createElement("ul"), P(t2, this.cn("list")), t2.setAttribute("role", "tablist");
      const e2 = this.instance.container;
      e2.appendChild(t2), P(e2, this.cn("hasDots")), this.list = t2;
    }
    return t2;
  }
  refresh() {
    var t2;
    const e2 = this.instance.pages.length, i2 = Math.min(2, this.option("minCount")), n2 = Math.max(2e3, this.option("maxCount")), s2 = this.option("dynamicFrom");
    if (e2 < i2 || e2 > n2) return void this.cleanup();
    const a2 = "number" == typeof s2 && e2 > 5 && e2 >= s2, r2 = !this.list || this.isDynamic !== a2 || this.list.children.length !== e2;
    r2 && this.cleanup();
    const l2 = this.build();
    if (o(l2, this.cn("isDynamic"), !!a2), r2) for (let t3 = 0; t3 < e2; t3++) l2.append(this.createItem(t3));
    let c2, h2 = 0;
    for (const e3 of [...l2.children]) {
      const i3 = h2 === this.instance.page;
      i3 && (c2 = e3), o(e3, this.cn("isCurrent"), i3), null === (t2 = e3.children[0]) || void 0 === t2 || t2.setAttribute("aria-selected", i3 ? "true" : "false");
      for (const t3 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) S(e3, this.cn(t3));
      h2++;
    }
    if (c2 = c2 || l2.firstChild, a2 && c2) {
      const t3 = c2.previousElementSibling, e3 = t3 && t3.previousElementSibling;
      P(t3, this.cn("isPrev")), P(e3, this.cn("isBeforePrev"));
      const i3 = c2.nextElementSibling, n3 = i3 && i3.nextElementSibling;
      P(i3, this.cn("isNext")), P(n3, this.cn("isAfterNext"));
    }
    this.isDynamic = a2;
  }
  createItem(t2 = 0) {
    var e2;
    const i2 = document.createElement("li");
    i2.setAttribute("role", "presentation");
    const s2 = n(this.instance.localize(this.option("dotTpl"), [["%d", t2 + 1]]).replace(/\%i/g, t2 + ""));
    return i2.appendChild(s2), null === (e2 = i2.children[0]) || void 0 === e2 || e2.setAttribute("role", "tab"), i2;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = false, S(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty(W, "defaults", { enumerable: true, configurable: true, writable: true, value: $ });
var X = "disabled";
var q = "next";
var Y = "prev";
var V = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prev", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "next", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isDom", { enumerable: true, configurable: true, writable: true, value: false });
  }
  onRefresh() {
    const t2 = this.instance, e2 = t2.pages.length, i2 = t2.page;
    if (e2 < 2) return void this.cleanup();
    this.build();
    let n2 = this.prev, s2 = this.next;
    n2 && s2 && (n2.removeAttribute(X), s2.removeAttribute(X), t2.isInfinite || (i2 <= 0 && n2.setAttribute(X, ""), i2 >= e2 - 1 && s2.setAttribute(X, "")));
  }
  addBtn(t2) {
    var e2;
    const i2 = this.instance, n2 = document.createElement("button");
    n2.setAttribute("tabindex", "0"), n2.setAttribute("title", i2.localize(`{{${t2.toUpperCase()}}}`)), P(n2, this.cn("button") + " " + this.cn(t2 === q ? "isNext" : "isPrev"));
    const s2 = i2.isRTL ? t2 === q ? Y : q : t2;
    var o2;
    return n2.innerHTML = i2.localize(this.option(`${s2}Tpl`)), n2.dataset[`carousel${o2 = t2, o2 ? o2.match("^[a-z]") ? o2.charAt(0).toUpperCase() + o2.substring(1) : o2 : ""}`] = "true", null === (e2 = this.container) || void 0 === e2 || e2.appendChild(n2), n2;
  }
  build() {
    const t2 = this.instance.container, e2 = this.cn("container");
    let { container: i2, prev: n2, next: s2 } = this;
    i2 || (i2 = t2.querySelector("." + e2), this.isDom = !!i2), i2 || (i2 = document.createElement("div"), P(i2, e2), t2.appendChild(i2)), this.container = i2, s2 || (s2 = i2.querySelector("[data-carousel-next]")), s2 || (s2 = this.addBtn(q)), this.next = s2, n2 || (n2 = i2.querySelector("[data-carousel-prev]")), n2 || (n2 = this.addBtn(Y)), this.prev = n2;
  }
  cleanup() {
    this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = false;
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty(V, "defaults", { enumerable: true, configurable: true, writable: true, value: { classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" }, nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>' } });
var Z = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "selectedIndex", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "nav", { enumerable: true, configurable: true, writable: true, value: null });
  }
  addAsTargetFor(t2) {
    this.target = this.instance, this.nav = t2, this.attachEvents();
  }
  addAsNavFor(t2) {
    this.nav = this.instance, this.target = t2, this.attachEvents();
  }
  attachEvents() {
    const { nav: t2, target: e2 } = this;
    t2 && e2 && (t2.options.initialSlide = e2.options.initialPage, t2.state === B.Ready ? this.onNavReady(t2) : t2.on("ready", this.onNavReady), e2.state === B.Ready ? this.onTargetReady(e2) : e2.on("ready", this.onTargetReady));
  }
  onNavReady(t2) {
    t2.on("createSlide", this.onNavCreateSlide), t2.on("Panzoom.click", this.onNavClick), t2.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
  }
  onTargetReady(t2) {
    t2.on("change", this.onTargetChange), t2.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
  }
  onNavClick(t2, e2, i2) {
    this.onNavTouch(t2, t2.panzoom, i2);
  }
  onNavTouch(t2, e2, i2) {
    var n2, s2;
    if (Math.abs(e2.dragOffset.x) > 3 || Math.abs(e2.dragOffset.y) > 3) return;
    const o2 = i2.target, { nav: a2, target: r2 } = this;
    if (!a2 || !r2 || !o2) return;
    const l2 = o2.closest("[data-index]");
    if (i2.stopPropagation(), i2.preventDefault(), !l2) return;
    const c2 = parseInt(l2.dataset.index || "", 10) || 0, h2 = r2.getPageForSlide(c2), d2 = a2.getPageForSlide(c2);
    a2.slideTo(d2), r2.slideTo(h2, { friction: (null === (s2 = null === (n2 = this.nav) || void 0 === n2 ? void 0 : n2.plugins) || void 0 === s2 ? void 0 : s2.Sync.option("friction")) || 0 }), this.markSelectedSlide(c2);
  }
  onNavCreateSlide(t2, e2) {
    e2.index === this.selectedIndex && this.markSelectedSlide(e2.index);
  }
  onTargetChange() {
    var t2, e2;
    const { target: i2, nav: n2 } = this;
    if (!i2 || !n2) return;
    if (n2.state !== B.Ready || i2.state !== B.Ready) return;
    const s2 = null === (e2 = null === (t2 = i2.pages[i2.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index, o2 = n2.getPageForSlide(s2);
    this.markSelectedSlide(s2), n2.slideTo(o2, null === n2.prevPage && null === i2.prevPage ? { friction: 0 } : void 0);
  }
  markSelectedSlide(t2) {
    const e2 = this.nav;
    e2 && e2.state === B.Ready && (this.selectedIndex = t2, [...e2.slides].map((e3) => {
      e3.el && e3.el.classList[e3.index === t2 ? "add" : "remove"]("is-nav-selected");
    }));
  }
  attach() {
    const t2 = this;
    let e2 = t2.options.target, i2 = t2.options.nav;
    e2 ? t2.addAsNavFor(e2) : i2 && t2.addAsTargetFor(i2);
  }
  detach() {
    const t2 = this, e2 = t2.nav, i2 = t2.target;
    e2 && (e2.off("ready", t2.onNavReady), e2.off("createSlide", t2.onNavCreateSlide), e2.off("Panzoom.click", t2.onNavClick), e2.off("Panzoom.touchEnd", t2.onNavTouch)), t2.nav = null, i2 && (i2.off("ready", t2.onTargetReady), i2.off("refresh", t2.onTargetChange), i2.off("change", t2.onTargetChange)), t2.target = null;
  }
};
Object.defineProperty(Z, "defaults", { enumerable: true, configurable: true, writable: true, value: { friction: 0.35 } });
var U = { Navigation: V, Dots: W, Sync: Z };
var G = "animationend";
var K = "isSelected";
var J = "slide";
var Q = class _Q extends g {
  get axis() {
    return this.isHorizontal ? "e" : "f";
  }
  get isEnabled() {
    return this.state === B.Ready;
  }
  get isInfinite() {
    let t2 = false;
    const { contentDim: e2, viewportDim: i2, pages: n2, slides: s2 } = this, o2 = s2[0];
    return n2.length >= 2 && o2 && e2 + o2.dim >= i2 && (t2 = this.option("infinite")), t2;
  }
  get isRTL() {
    return "rtl" === this.option("direction");
  }
  get isHorizontal() {
    return "x" === this.option("axis");
  }
  constructor(t2, e2 = {}, i2 = {}) {
    if (super(), Object.defineProperty(this, "bp", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "lp", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "userOptions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: B.Init }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "prevPage", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "viewport", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "slides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pages", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "panzoom", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "inTransition", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "contentDim", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "viewportDim", { enumerable: true, configurable: true, writable: true, value: 0 }), "string" == typeof t2 && (t2 = document.querySelector(t2)), !t2 || !E(t2)) throw new Error("No Element found");
    this.container = t2, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), this.userOptions = e2, this.userPlugins = i2, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t2, e2;
    const i2 = u({}, _Q.defaults, this.userOptions);
    let n2 = "";
    const s2 = i2.breakpoints;
    if (s2 && d(s2)) for (const [t3, e3] of Object.entries(s2)) window.matchMedia(t3).matches && d(e3) && (n2 += t3, u(i2, e3));
    n2 === this.bp && this.state !== B.Init || (this.bp = n2, this.state === B.Ready && (i2.initialSlide = (null === (e2 = null === (t2 = this.pages[this.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index) || 0), this.state !== B.Init && this.destroy(), super.setOptions(i2), false === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, _Q.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, this.emit("ready");
  }
  initLayout() {
    const { container: t2 } = this, e2 = this.option("classes");
    P(t2, this.cn("container")), o(t2, e2.isLTR, !this.isRTL), o(t2, e2.isRTL, this.isRTL), o(t2, e2.isVertical, !this.isHorizontal), o(t2, e2.isHorizontal, this.isHorizontal);
    let i2 = this.option("viewport") || t2.querySelector(`.${e2.viewport}`);
    i2 || (i2 = document.createElement("div"), P(i2, e2.viewport), i2.append(...F(t2, `.${e2.slide}`)), t2.prepend(i2)), i2.addEventListener("scroll", this.onScroll);
    let n2 = this.option("track") || t2.querySelector(`.${e2.track}`);
    n2 || (n2 = document.createElement("div"), P(n2, e2.track), n2.append(...Array.from(i2.childNodes))), n2.setAttribute("aria-live", "polite"), i2.contains(n2) || i2.prepend(n2), this.viewport = i2, this.track = n2, this.emit("initLayout");
  }
  initSlides() {
    const { track: t2 } = this;
    if (!t2) return;
    const e2 = [...this.slides], i2 = [];
    [...F(t2, `.${this.cn(J)}`)].forEach((t3) => {
      if (E(t3)) {
        const e3 = H({ el: t3, isDom: true, index: this.slides.length });
        i2.push(e3);
      }
    });
    for (let t3 of [...this.option("slides", []) || [], ...e2]) i2.push(H(t3));
    this.slides = i2;
    for (let t3 = 0; t3 < this.slides.length; t3++) this.slides[t3].index = t3;
    for (const t3 of i2) this.emit("beforeInitSlide", t3, t3.index), this.emit("initSlide", t3, t3.index);
    this.emit("initSlides");
  }
  setInitialPage() {
    const t2 = this.option("initialSlide");
    this.page = "number" == typeof t2 ? this.getPageForSlide(t2) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
  }
  setInitialPosition() {
    const { track: t2, pages: e2, isHorizontal: i2 } = this;
    if (!t2 || !e2.length) return;
    let n2 = this.page;
    e2[n2] || (this.page = n2 = 0);
    const s2 = (e2[n2].pos || 0) * (this.isRTL && i2 ? 1 : -1), o2 = i2 ? `${s2}px` : "0", a2 = i2 ? "0" : `${s2}px`;
    t2.style.transform = `translate3d(${o2}, ${a2}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
  }
  initPanzoom() {
    this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
    const t2 = this.option("Panzoom") || {};
    this.panzoom = new I(this.viewport, u({}, { content: this.track, zoom: false, panOnlyZoomed: false, lockAxis: this.isHorizontal ? "x" : "y", infinite: this.isInfinite, click: false, dblClick: false, touch: (t3) => !(this.pages.length < 2 && !t3.options.infinite), bounds: () => this.getBounds(), maxVelocity: (t3) => Math.abs(t3.target[this.axis] - t3.current[this.axis]) < 2 * this.viewportDim ? 100 : 0 }, t2)), this.panzoom.on("*", (t3, e2, ...i2) => {
      this.emit(`Panzoom.${e2}`, t3, ...i2);
    }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
  }
  attachEvents() {
    const t2 = this.container;
    t2 && (t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
  }
  createPages() {
    let t2 = [];
    const { contentDim: e2, viewportDim: i2 } = this;
    let n2 = this.option("slidesPerPage");
    n2 = ("auto" === n2 || e2 <= i2) && false !== this.option("fill") ? 1 / 0 : parseFloat(n2 + "");
    let s2 = 0, o2 = 0, a2 = 0;
    for (const e3 of this.slides) (!t2.length || o2 + e3.dim - i2 > 0.05 || a2 >= n2) && (t2.push(N()), s2 = t2.length - 1, o2 = 0, a2 = 0), t2[s2].slides.push(e3), o2 += e3.dim + e3.gap, a2++;
    return t2;
  }
  processPages() {
    const e2 = this.pages, { contentDim: i2, viewportDim: n2, isInfinite: s2 } = this, o2 = this.option("center"), a2 = this.option("fill"), r2 = a2 && o2 && i2 > n2 && !s2;
    if (e2.forEach((t2, e3) => {
      var s3;
      t2.index = e3, t2.pos = (null === (s3 = t2.slides[0]) || void 0 === s3 ? void 0 : s3.pos) || 0, t2.dim = 0;
      for (const [e4, i3] of t2.slides.entries()) t2.dim += i3.dim, e4 < t2.slides.length - 1 && (t2.dim += i3.gap);
      r2 && t2.pos + 0.5 * t2.dim < 0.5 * n2 ? t2.pos = 0 : r2 && t2.pos + 0.5 * t2.dim >= i2 - 0.5 * n2 ? t2.pos = i2 - n2 : o2 && (t2.pos += -0.5 * (n2 - t2.dim));
    }), e2.forEach((e3) => {
      a2 && !s2 && i2 > n2 && (e3.pos = Math.max(e3.pos, 0), e3.pos = Math.min(e3.pos, i2 - n2)), e3.pos = t(e3.pos, 1e3), e3.dim = t(e3.dim, 1e3), Math.abs(e3.pos) <= 0.1 && (e3.pos = 0);
    }), s2) return e2;
    const l2 = [];
    let c2;
    return e2.forEach((t2) => {
      const e3 = Object.assign({}, t2);
      c2 && e3.pos === c2.pos ? (c2.dim += e3.dim, c2.slides = [...c2.slides, ...e3.slides]) : (e3.index = l2.length, c2 = e3, l2.push(e3));
    }), l2;
  }
  getPageFromIndex(t2 = 0) {
    const e2 = this.pages.length;
    let i2;
    return t2 = parseInt((t2 || 0).toString()) || 0, i2 = this.isInfinite ? (t2 % e2 + e2) % e2 : Math.max(Math.min(t2, e2 - 1), 0), i2;
  }
  getSlideMetrics(e2) {
    var i2, n2;
    const s2 = this.isHorizontal ? "width" : "height";
    let o2 = 0, a2 = 0, r2 = e2.el;
    const l2 = !(!r2 || r2.parentNode);
    if (r2 ? o2 = parseFloat(r2.dataset[s2] || "") || 0 : (r2 = document.createElement("div"), r2.style.visibility = "hidden", (this.track || document.body).prepend(r2)), P(r2, this.cn(J) + " " + e2.class + " " + e2.customClass), o2) r2.style[s2] = `${o2}px`, r2.style["width" === s2 ? "height" : "width"] = "";
    else {
      l2 && (this.track || document.body).prepend(r2), o2 = r2.getBoundingClientRect()[s2] * Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1);
      let t2 = r2[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
      t2 - 1 > o2 && (o2 = t2);
    }
    const c2 = getComputedStyle(r2);
    return "content-box" === c2.boxSizing && (this.isHorizontal ? (o2 += parseFloat(c2.paddingLeft) || 0, o2 += parseFloat(c2.paddingRight) || 0) : (o2 += parseFloat(c2.paddingTop) || 0, o2 += parseFloat(c2.paddingBottom) || 0)), a2 = parseFloat(c2[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l2 ? null === (n2 = r2.parentElement) || void 0 === n2 || n2.removeChild(r2) : e2.el || r2.remove(), { dim: t(o2, 1e3), gap: t(a2, 1e3) };
  }
  getBounds() {
    const { isInfinite: t2, isRTL: e2, isHorizontal: i2, pages: n2 } = this;
    let s2 = { min: 0, max: 0 };
    if (t2) s2 = { min: -1 / 0, max: 1 / 0 };
    else if (n2.length) {
      const t3 = n2[0].pos, o2 = n2[n2.length - 1].pos;
      s2 = e2 && i2 ? { min: t3, max: o2 } : { min: -1 * o2, max: -1 * t3 };
    }
    return { x: i2 ? s2 : { min: 0, max: 0 }, y: i2 ? { min: 0, max: 0 } : s2 };
  }
  repositionSlides() {
    let e2, { isHorizontal: i2, isRTL: n2, isInfinite: s2, viewport: o2, viewportDim: a2, contentDim: r2, page: l2, pages: c2, slides: h2, panzoom: d2 } = this, u2 = 0, p2 = 0, f2 = 0, g2 = 0;
    d2 ? g2 = -1 * d2.current[this.axis] : c2[l2] && (g2 = c2[l2].pos || 0), e2 = i2 ? n2 ? "right" : "left" : "top", n2 && i2 && (g2 *= -1);
    for (const i3 of h2) {
      const n3 = i3.el;
      n3 ? ("top" === e2 ? (n3.style.right = "", n3.style.left = "") : n3.style.top = "", i3.index !== u2 ? n3.style[e2] = 0 === p2 ? "" : `${t(p2, 1e3)}px` : n3.style[e2] = "", f2 += i3.dim + i3.gap, u2++) : p2 += i3.dim + i3.gap;
    }
    if (s2 && f2 && o2) {
      let n3 = getComputedStyle(o2), s3 = "padding", l3 = i2 ? "Right" : "Bottom", c3 = parseFloat(n3[s3 + (i2 ? "Left" : "Top")]);
      g2 -= c3, a2 += c3, a2 += parseFloat(n3[s3 + l3]);
      for (const i3 of h2) i3.el && (t(i3.pos) < t(a2) && t(i3.pos + i3.dim + i3.gap) < t(g2) && t(g2) > t(r2 - a2) && (i3.el.style[e2] = `${t(p2 + f2, 1e3)}px`), t(i3.pos + i3.gap) >= t(r2 - a2) && t(i3.pos) > t(g2 + a2) && t(g2) < t(a2) && (i3.el.style[e2] = `-${t(f2, 1e3)}px`));
    }
    let m2, v2, b2 = [...this.inTransition];
    if (b2.length > 1 && (m2 = c2[b2[0]], v2 = c2[b2[1]]), m2 && v2) {
      let i3 = 0;
      for (const n3 of h2) n3.el ? this.inTransition.has(n3.index) && m2.slides.indexOf(n3) < 0 && (n3.el.style[e2] = `${t(i3 + (m2.pos - v2.pos), 1e3)}px`) : i3 += n3.dim + n3.gap;
    }
  }
  createSlideEl(t2) {
    const { track: e2, slides: i2 } = this;
    if (!e2 || !t2) return;
    if (t2.el && t2.el.parentNode) return;
    const n2 = t2.el || document.createElement("div");
    P(n2, this.cn(J)), P(n2, t2.class), P(n2, t2.customClass);
    const s2 = t2.html;
    s2 && (s2 instanceof HTMLElement ? n2.appendChild(s2) : n2.innerHTML = t2.html + "");
    const o2 = [];
    i2.forEach((t3, e3) => {
      t3.el && o2.push(e3);
    });
    const a2 = t2.index;
    let r2 = null;
    if (o2.length) {
      r2 = i2[o2.reduce((t3, e3) => Math.abs(e3 - a2) < Math.abs(t3 - a2) ? e3 : t3)];
    }
    const l2 = r2 && r2.el && r2.el.parentNode ? r2.index < t2.index ? r2.el.nextSibling : r2.el : null;
    e2.insertBefore(n2, e2.contains(l2) ? l2 : null), t2.el = n2, this.emit("createSlide", t2);
  }
  removeSlideEl(t2, e2 = false) {
    const i2 = null == t2 ? void 0 : t2.el;
    if (!i2 || !i2.parentNode) return;
    const n2 = this.cn(K);
    if (i2.classList.contains(n2) && (S(i2, n2), this.emit("unselectSlide", t2)), t2.isDom && !e2) return i2.removeAttribute("aria-hidden"), i2.removeAttribute("data-index"), void (i2.style.left = "");
    this.emit("removeSlide", t2);
    const s2 = new CustomEvent(G);
    i2.dispatchEvent(s2), t2.el && (t2.el.remove(), t2.el = null);
  }
  transitionTo(t2 = 0, e2 = this.option("transition")) {
    var i2, n2, s2, o2;
    if (!e2) return false;
    const a2 = this.page, { pages: r2, panzoom: l2 } = this;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const c2 = this.getPageFromIndex(t2);
    if (!l2 || !r2[c2] || r2.length < 2 || Math.abs(((null === (n2 = null === (i2 = r2[a2]) || void 0 === i2 ? void 0 : i2.slides[0]) || void 0 === n2 ? void 0 : n2.dim) || 0) - this.viewportDim) > 1) return false;
    let h2 = t2 > a2 ? 1 : -1;
    this.isInfinite && (0 === a2 && t2 === r2.length - 1 && (h2 = -1), a2 === r2.length - 1 && 0 === t2 && (h2 = 1));
    const d2 = r2[c2].pos * (this.isRTL ? 1 : -1);
    if (a2 === c2 && Math.abs(d2 - l2.target[this.axis]) < 1) return false;
    this.clearTransitions();
    const u2 = l2.isResting;
    P(this.container, this.cn("inTransition"));
    const p2 = (null === (s2 = r2[a2]) || void 0 === s2 ? void 0 : s2.slides[0]) || null, f2 = (null === (o2 = r2[c2]) || void 0 === o2 ? void 0 : o2.slides[0]) || null;
    this.inTransition.add(f2.index), this.createSlideEl(f2);
    let g2 = p2.el, m2 = f2.el;
    u2 || e2 === J || (e2 = "fadeFast", g2 = null);
    const v2 = this.isRTL ? "next" : "prev", b2 = this.isRTL ? "prev" : "next";
    return g2 && (this.inTransition.add(p2.index), p2.transition = e2, g2.addEventListener(G, this.onAnimationEnd), g2.classList.add(`f-${e2}Out`, `to-${h2 > 0 ? b2 : v2}`)), m2 && (f2.transition = e2, m2.addEventListener(G, this.onAnimationEnd), m2.classList.add(`f-${e2}In`, `from-${h2 > 0 ? v2 : b2}`)), l2.current[this.axis] = d2, l2.target[this.axis] = d2, l2.requestTick(), this.onChange(c2), true;
  }
  manageSlideVisiblity() {
    const t2 = /* @__PURE__ */ new Set(), e2 = /* @__PURE__ */ new Set(), i2 = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
    for (const n2 of this.slides) i2.has(n2) ? t2.add(n2) : e2.add(n2);
    for (const e3 of this.inTransition) t2.add(this.slides[e3]);
    for (const e3 of t2) this.createSlideEl(e3), this.lazyLoadSlide(e3);
    for (const i3 of e2) t2.has(i3) || this.removeSlideEl(i3);
    this.markSelectedSlides(), this.repositionSlides();
  }
  markSelectedSlides() {
    if (!this.pages[this.page] || !this.pages[this.page].slides) return;
    const t2 = "aria-hidden";
    let e2 = this.cn(K);
    if (e2) for (const i2 of this.slides) {
      const n2 = i2.el;
      n2 && (n2.dataset.index = `${i2.index}`, n2.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i2) ? n2.removeAttribute(t2) : n2.setAttribute(t2, "true") : this.pages[this.page].slides.includes(i2) ? (n2.classList.contains(e2) || (P(n2, e2), this.emit("selectSlide", i2)), n2.removeAttribute(t2)) : (n2.classList.contains(e2) && (S(n2, e2), this.emit("unselectSlide", i2)), n2.setAttribute(t2, "true")));
    }
  }
  flipInfiniteTrack() {
    const { axis: t2, isHorizontal: e2, isInfinite: i2, isRTL: n2, viewportDim: s2, contentDim: o2 } = this, a2 = this.panzoom;
    if (!a2 || !i2) return;
    let r2 = a2.current[t2], l2 = a2.target[t2] - r2, c2 = 0, h2 = 0.5 * s2;
    n2 && e2 ? (r2 < -h2 && (c2 = -1, r2 += o2), r2 > o2 - h2 && (c2 = 1, r2 -= o2)) : (r2 > h2 && (c2 = 1, r2 -= o2), r2 < -o2 + h2 && (c2 = -1, r2 += o2)), c2 && (a2.current[t2] = r2, a2.target[t2] = r2 + l2);
  }
  lazyLoadImg(t2, e2) {
    const i2 = this, s2 = "f-fadeIn", o2 = "is-preloading";
    let a2 = false, r2 = null;
    const l2 = () => {
      a2 || (a2 = true, r2 && (r2.remove(), r2 = null), S(e2, o2), e2.complete && (P(e2, s2), setTimeout(() => {
        S(e2, s2);
      }, 350)), this.option("adaptiveHeight") && t2.el && this.pages[this.page].slides.indexOf(t2) > -1 && (i2.updateMetrics(), i2.setViewportHeight()), this.emit("load", t2));
    };
    P(e2, o2), e2.src = e2.dataset.lazySrcset || e2.dataset.lazySrc || "", delete e2.dataset.lazySrc, delete e2.dataset.lazySrcset, e2.addEventListener("error", () => {
      l2();
    }), e2.addEventListener("load", () => {
      l2();
    }), setTimeout(() => {
      const i3 = e2.parentNode;
      i3 && t2.el && (e2.complete ? l2() : a2 || (r2 = n(x), i3.insertBefore(r2, e2)));
    }, 300);
  }
  lazyLoadSlide(t2) {
    const e2 = t2 && t2.el;
    if (!e2) return;
    const i2 = /* @__PURE__ */ new Set();
    let n2 = Array.from(e2.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
    e2.dataset.lazySrc && n2.push(e2), n2.map((t3) => {
      t3 instanceof HTMLImageElement ? i2.add(t3) : t3 instanceof HTMLElement && t3.dataset.lazySrc && (t3.style.backgroundImage = `url('${t3.dataset.lazySrc}')`, delete t3.dataset.lazySrc);
    });
    for (const e3 of i2) this.lazyLoadImg(t2, e3);
  }
  onAnimationEnd(t2) {
    var e2;
    const i2 = t2.target, n2 = i2 ? parseInt(i2.dataset.index || "", 10) || 0 : -1, s2 = this.slides[n2], o2 = t2.animationName;
    if (!i2 || !s2 || !o2) return;
    const a2 = !!this.inTransition.has(n2) && s2.transition;
    a2 && o2.substring(0, a2.length + 2) === `f-${a2}` && this.inTransition.delete(n2), this.inTransition.size || this.clearTransitions(), n2 === this.page && (null === (e2 = this.panzoom) || void 0 === e2 ? void 0 : e2.isResting) && this.emit("settle");
  }
  onDecel(t2, e2 = 0, i2 = 0, n2 = 0, s2 = 0) {
    if (this.option("dragFree")) return void this.setPageFromPosition();
    const { isRTL: o2, isHorizontal: a2, axis: r2, pages: l2 } = this, c2 = l2.length, h2 = Math.abs(Math.atan2(i2, e2) / (Math.PI / 180));
    let d2 = 0;
    if (d2 = h2 > 45 && h2 < 135 ? a2 ? 0 : i2 : a2 ? e2 : 0, !c2) return;
    let u2 = this.page, p2 = o2 && a2 ? 1 : -1;
    const f2 = t2.current[r2] * p2;
    let { pageIndex: g2 } = this.getPageFromPosition(f2);
    Math.abs(d2) > 5 ? (l2[u2].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u2 = g2), u2 = o2 && a2 ? d2 < 0 ? u2 - 1 : u2 + 1 : d2 < 0 ? u2 + 1 : u2 - 1) : u2 = 0 === n2 && 0 === s2 ? u2 : g2, this.slideTo(u2, { transition: false, friction: t2.option("decelFriction") });
  }
  onClick(t2) {
    const e2 = t2.target, i2 = e2 && E(e2) ? e2.dataset : null;
    let n2, s2;
    i2 && (void 0 !== i2.carouselPage ? (s2 = "slideTo", n2 = i2.carouselPage) : void 0 !== i2.carouselNext ? s2 = "slideNext" : void 0 !== i2.carouselPrev && (s2 = "slidePrev")), s2 ? (t2.preventDefault(), t2.stopPropagation(), e2 && !e2.hasAttribute("disabled") && this[s2](n2)) : this.emit("click", t2);
  }
  onSlideTo(t2) {
    const e2 = t2.detail || 0;
    this.slideTo(this.getPageForSlide(e2), { friction: 0 });
  }
  onChange(t2, e2 = 0) {
    const i2 = this.page;
    this.prevPage = i2, this.page = t2, this.option("adaptiveHeight") && this.setViewportHeight(), t2 !== i2 && (this.markSelectedSlides(), this.emit("change", t2, i2, e2));
  }
  onRefresh() {
    let t2 = this.contentDim, e2 = this.viewportDim;
    this.updateMetrics(), this.contentDim === t2 && this.viewportDim === e2 || this.slideTo(this.page, { friction: 0, transition: false });
  }
  onScroll() {
    var t2;
    null === (t2 = this.viewport) || void 0 === t2 || t2.scroll(0, 0);
  }
  onResize() {
    this.option("breakpoints") && this.processOptions();
  }
  onBeforeTransform(t2) {
    this.lp !== t2.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t2.current.e;
  }
  onEndAnimation() {
    this.inTransition.size || this.emit("settle");
  }
  reInit(t2 = null, e2 = null) {
    this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t2 || this.userOptions, this.userPlugins = e2 || this.userPlugins, this.processOptions();
  }
  slideTo(t2 = 0, { friction: e2 = this.option("friction"), transition: i2 = this.option("transition") } = {}) {
    if (this.state === B.Destroy) return;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const n2 = this.getPageFromIndex(t2), { axis: s2, isHorizontal: o2, isRTL: a2, pages: r2, panzoom: l2 } = this, c2 = r2.length, h2 = a2 && o2 ? 1 : -1;
    if (!l2 || !c2) return;
    if (this.page !== n2) {
      const e3 = new Event("beforeChange", { bubbles: true, cancelable: true });
      if (this.emit("beforeChange", e3, t2), e3.defaultPrevented) return;
    }
    if (this.transitionTo(t2, i2)) return;
    let d2 = r2[n2].pos;
    if (this.isInfinite) {
      const e3 = this.contentDim, i3 = l2.target[s2] * h2;
      if (2 === c2) d2 += e3 * Math.floor(parseFloat(t2 + "") / 2);
      else {
        d2 = [d2, d2 - e3, d2 + e3].reduce(function(t3, e4) {
          return Math.abs(e4 - i3) < Math.abs(t3 - i3) ? e4 : t3;
        });
      }
    }
    d2 *= h2, Math.abs(l2.target[s2] - d2) < 1 || (l2.panTo({ x: o2 ? d2 : 0, y: o2 ? 0 : d2, friction: e2 }), this.onChange(n2));
  }
  slideToClosest(t2) {
    if (this.panzoom) {
      const { pageIndex: e2 } = this.getPageFromPosition();
      this.slideTo(e2, t2);
    }
  }
  slideNext() {
    this.slideTo(this.page + 1);
  }
  slidePrev() {
    this.slideTo(this.page - 1);
  }
  clearTransitions() {
    this.inTransition.clear(), S(this.container, this.cn("inTransition"));
    const t2 = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e2 of this.slides) {
      const i2 = e2.el;
      if (i2) {
        i2.removeEventListener(G, this.onAnimationEnd), i2.classList.remove(...t2);
        const n2 = e2.transition;
        n2 && i2.classList.remove(`f-${n2}Out`, `f-${n2}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t2, e2) {
    var i2, n2, s2, o2;
    const a2 = this.panzoom, r2 = (null === (i2 = this.pages[this.page]) || void 0 === i2 ? void 0 : i2.pos) || 0, l2 = (null === (n2 = this.pages[this.page]) || void 0 === n2 ? void 0 : n2.dim) || 0, c2 = this.contentDim < this.viewportDim;
    let h2 = Array.isArray(e2) ? e2 : [e2];
    const d2 = [];
    for (const t3 of h2) d2.push(H(t3));
    this.slides.splice(t2, 0, ...d2);
    for (let t3 = 0; t3 < this.slides.length; t3++) this.slides[t3].index = t3;
    for (const t3 of d2) this.emit("beforeInitSlide", t3, t3.index);
    if (this.page >= t2 && (this.page += d2.length), this.updateMetrics(), a2) {
      const e3 = (null === (s2 = this.pages[this.page]) || void 0 === s2 ? void 0 : s2.pos) || 0, i3 = (null === (o2 = this.pages[this.page]) || void 0 === o2 ? void 0 : o2.dim) || 0, n3 = this.pages.length || 1, h3 = this.isRTL ? l2 - i3 : i3 - l2, d3 = this.isRTL ? r2 - e3 : e3 - r2;
      c2 && 1 === n3 ? (t2 <= this.page && (a2.current[this.axis] -= h3, a2.target[this.axis] -= h3), a2.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * e3 })) : d3 && t2 <= this.page && (a2.target[this.axis] -= d3, a2.current[this.axis] -= d3, a2.requestTick());
    }
    for (const t3 of d2) this.emit("initSlide", t3, t3.index);
  }
  prependSlide(t2) {
    this.addSlide(0, t2);
  }
  appendSlide(t2) {
    this.addSlide(this.slides.length, t2);
  }
  removeSlide(t2) {
    const e2 = this.slides.length;
    t2 = (t2 % e2 + e2) % e2;
    const i2 = this.slides[t2];
    if (i2) {
      this.removeSlideEl(i2, true), this.slides.splice(t2, 1);
      for (let t3 = 0; t3 < this.slides.length; t3++) this.slides[t3].index = t3;
      this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: false }), this.emit("destroySlide", i2);
    }
  }
  updateMetrics() {
    const { panzoom: e2, viewport: i2, track: n2, slides: s2, isHorizontal: o2, isInfinite: a2 } = this;
    if (!n2) return;
    const r2 = o2 ? "width" : "height", l2 = o2 ? "offsetWidth" : "offsetHeight";
    if (i2) {
      let e3 = Math.max(i2[l2], t(i2.getBoundingClientRect()[r2], 1e3)), n3 = getComputedStyle(i2), s3 = "padding", a3 = o2 ? "Right" : "Bottom";
      e3 -= parseFloat(n3[s3 + (o2 ? "Left" : "Top")]) + parseFloat(n3[s3 + a3]), this.viewportDim = e3;
    }
    let c2, h2 = 0;
    for (const [e3, i3] of s2.entries()) {
      let n3 = 0, o3 = 0;
      !i3.el && c2 ? (n3 = c2.dim, o3 = c2.gap) : ({ dim: n3, gap: o3 } = this.getSlideMetrics(i3), c2 = i3), n3 = t(n3, 1e3), o3 = t(o3, 1e3), i3.dim = n3, i3.gap = o3, i3.pos = h2, h2 += n3, (a2 || e3 < s2.length - 1) && (h2 += o3);
    }
    h2 = t(h2, 1e3), this.contentDim = h2, e2 && (e2.contentRect[r2] = h2, e2.contentRect[o2 ? "fullWidth" : "fullHeight"] = h2), this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e2, i2 = false, n2 = false) {
    void 0 === e2 && (e2 = this.page);
    const s2 = this, o2 = s2.panzoom, a2 = s2.contentDim, r2 = s2.pages[e2] || 0;
    if (!r2 || !o2) return e2 > this.page ? -1 : 1;
    let l2 = -1 * o2.current.e, c2 = t((l2 - r2.pos) / (1 * r2.dim), 1e3), h2 = c2, d2 = c2;
    this.isInfinite && true !== n2 && (h2 = t((l2 - r2.pos + a2) / (1 * r2.dim), 1e3), d2 = t((l2 - r2.pos - a2) / (1 * r2.dim), 1e3));
    let u2 = [c2, h2, d2].reduce(function(t2, e3) {
      return Math.abs(e3) < Math.abs(t2) ? e3 : t2;
    });
    return i2 ? u2 : u2 > 1 ? 1 : u2 < -1 ? -1 : u2;
  }
  setViewportHeight() {
    const { page: t2, pages: e2, viewport: i2, isHorizontal: n2 } = this;
    if (!i2 || !e2[t2]) return;
    let s2 = 0;
    n2 && this.track && (this.track.style.height = "auto", e2[t2].slides.forEach((t3) => {
      t3.el && (s2 = Math.max(s2, t3.el.offsetHeight));
    })), i2.style.height = s2 ? `${s2}px` : "";
  }
  getPageForSlide(t2) {
    for (const e2 of this.pages) for (const i2 of e2.slides) if (i2.index === t2) return e2.index;
    return -1;
  }
  getVisibleSlides(t2 = 0) {
    var e2;
    const i2 = /* @__PURE__ */ new Set();
    let { panzoom: n2, contentDim: s2, viewportDim: o2, pages: a2, page: r2 } = this;
    if (o2) {
      s2 = s2 + (null === (e2 = this.slides[this.slides.length - 1]) || void 0 === e2 ? void 0 : e2.gap) || 0;
      let l2 = 0;
      l2 = n2 && n2.state !== m.Init && n2.state !== m.Destroy ? -1 * n2.current[this.axis] : a2[r2] && a2[r2].pos || 0, this.isInfinite && (l2 -= Math.floor(l2 / s2) * s2), this.isRTL && this.isHorizontal && (l2 *= -1);
      const c2 = l2 - o2 * t2, h2 = l2 + o2 * (t2 + 1), d2 = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t3 of this.slides) for (const e3 of d2) {
        const n3 = t3.pos + e3 * s2, o3 = n3 + t3.dim + t3.gap;
        n3 < h2 && o3 > c2 && i2.add(t3);
      }
    }
    return i2;
  }
  getPageFromPosition(t2) {
    const { viewportDim: e2, contentDim: i2, slides: n2, pages: s2, panzoom: o2 } = this, a2 = s2.length, r2 = n2.length, l2 = n2[0], c2 = n2[r2 - 1], h2 = this.option("center");
    let d2 = 0, u2 = 0, p2 = 0, f2 = void 0 === t2 ? -1 * ((null == o2 ? void 0 : o2.target[this.axis]) || 0) : t2;
    h2 && (f2 += 0.5 * e2), this.isInfinite ? (f2 < l2.pos - 0.5 * c2.gap && (f2 -= i2, p2 = -1), f2 > c2.pos + c2.dim + 0.5 * c2.gap && (f2 -= i2, p2 = 1)) : f2 = Math.max(l2.pos || 0, Math.min(f2, c2.pos));
    let g2 = c2, m2 = n2.find((t3) => {
      const e3 = t3.pos - 0.5 * g2.gap, i3 = t3.pos + t3.dim + 0.5 * t3.gap;
      return g2 = t3, f2 >= e3 && f2 < i3;
    });
    return m2 || (m2 = c2), u2 = this.getPageForSlide(m2.index), d2 = u2 + p2 * a2, { page: d2, pageIndex: u2 };
  }
  setPageFromPosition() {
    const { pageIndex: t2 } = this.getPageFromPosition();
    this.onChange(t2);
  }
  destroy() {
    if ([B.Destroy].includes(this.state)) return;
    this.state = B.Destroy;
    const { container: t2, viewport: e2, track: i2, slides: n2, panzoom: s2 } = this, o2 = this.option("classes");
    t2.removeEventListener("click", this.onClick, { passive: false, capture: false }), t2.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s2 && (s2.destroy(), this.panzoom = null), n2 && n2.forEach((t3) => {
      this.removeSlideEl(t3);
    }), this.detachPlugins(), e2 && (e2.removeEventListener("scroll", this.onScroll), e2.offsetParent && i2 && i2.offsetParent && e2.replaceWith(...i2.childNodes));
    for (const [e3, i3] of Object.entries(o2)) "container" !== e3 && i3 && t2.classList.remove(i3);
    this.track = null, this.viewport = null, this.page = 0, this.slides = [];
    const a2 = this.events.get("ready");
    this.events = /* @__PURE__ */ new Map(), a2 && this.events.set("ready", a2);
  }
};
Object.defineProperty(Q, "Panzoom", { enumerable: true, configurable: true, writable: true, value: I }), Object.defineProperty(Q, "defaults", { enumerable: true, configurable: true, writable: true, value: j }), Object.defineProperty(Q, "Plugins", { enumerable: true, configurable: true, writable: true, value: U });
var tt = function(t2) {
  if (!E(t2)) return 0;
  const e2 = window.scrollY, i2 = window.innerHeight, n2 = e2 + i2, s2 = t2.getBoundingClientRect(), o2 = s2.y + e2, a2 = s2.height, r2 = o2 + a2;
  if (e2 > r2 || n2 < o2) return 0;
  if (e2 < o2 && n2 > r2) return 100;
  if (o2 < e2 && r2 > n2) return 100;
  let l2 = a2;
  o2 < e2 && (l2 -= e2 - o2), r2 > n2 && (l2 -= r2 - n2);
  const c2 = l2 / i2 * 100;
  return Math.round(c2);
};
var et = !("undefined" == typeof window || !window.document || !window.document.createElement);
var it;
var nt = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(",");
var st = (t2) => {
  if (t2 && et) {
    void 0 === it && document.createElement("div").focus({ get preventScroll() {
      return it = true, false;
    } });
    try {
      if (it) t2.focus({ preventScroll: true });
      else {
        const e2 = window.scrollY || document.body.scrollTop, i2 = window.scrollX || document.body.scrollLeft;
        t2.focus(), document.body.scrollTo({ top: e2, left: i2, behavior: "auto" });
      }
    } catch (t3) {
    }
  }
};
var ot = () => {
  const t2 = document;
  let e2, i2 = "", n2 = "", s2 = "";
  return t2.fullscreenEnabled ? (i2 = "requestFullscreen", n2 = "exitFullscreen", s2 = "fullscreenElement") : t2.webkitFullscreenEnabled && (i2 = "webkitRequestFullscreen", n2 = "webkitExitFullscreen", s2 = "webkitFullscreenElement"), i2 && (e2 = { request: function(e3 = t2.documentElement) {
    return "webkitRequestFullscreen" === i2 ? e3[i2](Element.ALLOW_KEYBOARD_INPUT) : e3[i2]();
  }, exit: function() {
    return t2[s2] && t2[n2]();
  }, isFullscreen: function() {
    return t2[s2];
  } }), e2;
};
var at = { animated: true, autoFocus: true, backdropClick: "close", Carousel: { classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" } }, closeButton: "auto", closeExisting: false, commonCaption: false, compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches, contentClick: "toggleZoom", contentDblClick: false, defaultType: "image", defaultDisplay: "flex", dragToClose: true, Fullscreen: { autoStart: false }, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, idle: 3500, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: Object.assign(Object.assign({}, b), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" }), parentEl: null, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, tpl: { closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>', main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>' }, trapFocus: true, wheel: "zoom" };
var rt;
var lt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Closing = 2] = "Closing", t2[t2.CustomClosing = 3] = "CustomClosing", t2[t2.Destroy = 4] = "Destroy";
}(rt || (rt = {})), function(t2) {
  t2[t2.Loading = 0] = "Loading", t2[t2.Opening = 1] = "Opening", t2[t2.Ready = 2] = "Ready", t2[t2.Closing = 3] = "Closing";
}(lt || (lt = {}));
var ct = "";
var ht = false;
var dt = false;
var ut = null;
var pt = () => {
  let t2 = "", e2 = "";
  const i2 = Oe.getInstance();
  if (i2) {
    const n2 = i2.carousel, s2 = i2.getSlide();
    if (n2 && s2) {
      let o2 = s2.slug || void 0, a2 = s2.triggerEl || void 0;
      e2 = o2 || (i2.option("slug") || ""), !e2 && a2 && a2.dataset && (e2 = a2.dataset.fancybox || ""), e2 && "true" !== e2 && (t2 = "#" + e2 + (!o2 && n2.slides.length > 1 ? "-" + (s2.index + 1) : ""));
    }
  }
  return { hash: t2, slug: e2, index: 1 };
};
var ft = () => {
  const t2 = new URL(document.URL).hash, e2 = t2.slice(1).split("-"), i2 = e2[e2.length - 1], n2 = i2 && /^\+?\d+$/.test(i2) && parseInt(e2.pop() || "1", 10) || 1;
  return { hash: t2, slug: e2.join("-"), index: n2 };
};
var gt = () => {
  const { slug: t2, index: e2 } = ft();
  if (!t2) return;
  let i2 = document.querySelector(`[data-slug="${t2}"]`);
  if (i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })), Oe.getInstance()) return;
  const n2 = document.querySelectorAll(`[data-fancybox="${t2}"]`);
  n2.length && (i2 = n2[e2 - 1], i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })));
};
var mt = () => {
  if (false === Oe.defaults.Hash) return;
  const t2 = Oe.getInstance();
  if (false === (null == t2 ? void 0 : t2.options.Hash)) return;
  const { slug: e2, index: i2 } = ft(), { slug: n2 } = pt();
  t2 && (e2 === n2 ? t2.jumpTo(i2 - 1) : (ht = true, t2.close())), gt();
};
var vt = () => {
  ut && clearTimeout(ut), queueMicrotask(() => {
    mt();
  });
};
var bt = () => {
  window.addEventListener("hashchange", vt, false), setTimeout(() => {
    mt();
  }, 500);
};
et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
var yt = "is-zooming-in";
var wt = class extends _ {
  onCreateSlide(t2, e2, i2) {
    const n2 = this.instance.optionFor(i2, "src") || "";
    i2.el && "image" === i2.type && "string" == typeof n2 && this.setImage(i2, n2);
  }
  onRemoveSlide(t2, e2, i2) {
    i2.panzoom && i2.panzoom.destroy(), i2.panzoom = void 0, i2.imageEl = void 0;
  }
  onChange(t2, e2, i2, n2) {
    S(this.instance.container, yt);
    for (const t3 of e2.slides) {
      const e3 = t3.panzoom;
      e3 && t3.index !== i2 && e3.reset(0.35);
    }
  }
  onClose() {
    var t2;
    const e2 = this.instance, i2 = e2.container, n2 = e2.getSlide();
    if (!i2 || !i2.parentElement || !n2) return;
    const { el: s2, contentEl: o2, panzoom: a2, thumbElSrc: r2 } = n2;
    if (!s2 || !r2 || !o2 || !a2 || a2.isContentLoading || a2.state === m.Init || a2.state === m.Destroy) return;
    a2.updateMetrics();
    let l2 = this.getZoomInfo(n2);
    if (!l2) return;
    this.instance.state = rt.CustomClosing, i2.classList.remove(yt), i2.classList.add("is-zooming-out"), o2.style.backgroundImage = `url('${r2}')`;
    const c2 = i2.getBoundingClientRect();
    1 === ((null === (t2 = window.visualViewport) || void 0 === t2 ? void 0 : t2.scale) || 1) && Object.assign(i2.style, { position: "absolute", top: `${i2.offsetTop + window.scrollY}px`, left: `${i2.offsetLeft + window.scrollX}px`, bottom: "auto", right: "auto", width: `${c2.width}px`, height: `${c2.height}px`, overflow: "hidden" });
    const { x: h2, y: d2, scale: u2, opacity: p2 } = l2;
    if (p2) {
      const t3 = ((t4, e3, i3, n3) => {
        const s3 = e3 - t4, o3 = n3 - i3;
        return (e4) => i3 + ((e4 - t4) / s3 * o3 || 0);
      })(a2.scale, u2, 1, 0);
      a2.on("afterTransform", () => {
        o2.style.opacity = t3(a2.scale) + "";
      });
    }
    a2.on("endAnimation", () => {
      e2.destroy();
    }), a2.target.a = u2, a2.target.b = 0, a2.target.c = 0, a2.target.d = u2, a2.panTo({ x: h2, y: d2, scale: u2, friction: p2 ? 0.2 : 0.33, ignoreBounds: true }), a2.isResting && e2.destroy();
  }
  setImage(t2, e2) {
    const i2 = this.instance;
    t2.src = e2, this.process(t2, e2).then((e3) => {
      const { contentEl: n2, imageEl: s2, thumbElSrc: o2, el: a2 } = t2;
      if (i2.isClosing() || !n2 || !s2) return;
      n2.offsetHeight;
      const r2 = !!i2.isOpeningSlide(t2) && this.getZoomInfo(t2);
      if (this.option("protected") && a2) {
        a2.addEventListener("contextmenu", (t4) => {
          t4.preventDefault();
        });
        const t3 = document.createElement("div");
        P(t3, "fancybox-protected"), n2.appendChild(t3);
      }
      if (o2 && r2) {
        const s3 = e3.contentRect, a3 = Math.max(s3.fullWidth, s3.fullHeight);
        let c2 = null;
        !r2.opacity && a3 > 1200 && (c2 = document.createElement("img"), P(c2, "fancybox-ghost"), c2.src = o2, n2.appendChild(c2));
        const h2 = () => {
          c2 && (P(c2, "f-fadeFastOut"), setTimeout(() => {
            c2 && (c2.remove(), c2 = null);
          }, 200));
        };
        (l2 = o2, new Promise((t3, e4) => {
          const i3 = new Image();
          i3.onload = t3, i3.onerror = e4, i3.src = l2;
        })).then(() => {
          i2.hideLoading(t2), t2.state = lt.Opening, this.instance.emit("reveal", t2), this.zoomIn(t2).then(() => {
            h2(), this.instance.done(t2);
          }, () => {
          }), c2 && setTimeout(() => {
            h2();
          }, a3 > 2500 ? 800 : 200);
        }, () => {
          i2.hideLoading(t2), i2.revealContent(t2);
        });
      } else {
        const n3 = this.optionFor(t2, "initialSize"), s3 = this.optionFor(t2, "zoom"), o3 = { event: i2.prevMouseMoveEvent || i2.options.event, friction: s3 ? 0.12 : 0 };
        let a3 = i2.optionFor(t2, "showClass") || void 0, r3 = true;
        i2.isOpeningSlide(t2) && ("full" === n3 ? e3.zoomToFull(o3) : "cover" === n3 ? e3.zoomToCover(o3) : "max" === n3 ? e3.zoomToMax(o3) : r3 = false, e3.stop("current")), r3 && a3 && (a3 = e3.isDragging ? "f-fadeIn" : ""), i2.hideLoading(t2), i2.revealContent(t2, a3);
      }
      var l2;
    }, () => {
      i2.setError(t2, "{{IMAGE_ERROR}}");
    });
  }
  process(t2, e2) {
    return new Promise((i2, s2) => {
      var o2;
      const a2 = this.instance, r2 = t2.el;
      a2.clearContent(t2), a2.showLoading(t2);
      let l2 = this.optionFor(t2, "content");
      if ("string" == typeof l2 && (l2 = n(l2)), !l2 || !E(l2)) {
        if (l2 = document.createElement("img"), l2 instanceof HTMLImageElement) {
          let i3 = "", n2 = t2.caption;
          i3 = "string" == typeof n2 && n2 ? n2.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t2.index + 1} of ${(null === (o2 = a2.carousel) || void 0 === o2 ? void 0 : o2.pages.length) || 1}`, l2.src = e2 || "", l2.alt = i3, l2.draggable = false, t2.srcset && l2.setAttribute("srcset", t2.srcset), this.instance.isOpeningSlide(t2) && (l2.fetchPriority = "high");
        }
        t2.sizes && l2.setAttribute("sizes", t2.sizes);
      }
      P(l2, "fancybox-image"), t2.imageEl = l2, a2.setContent(t2, l2, false);
      t2.panzoom = new I(r2, u({ transformParent: true }, this.option("Panzoom") || {}, { content: l2, width: (e3, i3) => a2.optionFor(t2, "width", "auto", i3) || "auto", height: (e3, i3) => a2.optionFor(t2, "height", "auto", i3) || "auto", wheel: () => {
        const t3 = a2.option("wheel");
        return ("zoom" === t3 || "pan" == t3) && t3;
      }, click: (e3, i3) => {
        var n2, s3;
        if (a2.isCompact || a2.isClosing()) return false;
        if (t2.index !== (null === (n2 = a2.getSlide()) || void 0 === n2 ? void 0 : n2.index)) return false;
        if (i3) {
          const t3 = i3.composedPath()[0];
          if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t3.nodeName)) return false;
        }
        let o3 = !i3 || i3.target && (null === (s3 = t2.contentEl) || void 0 === s3 ? void 0 : s3.contains(i3.target));
        return a2.option(o3 ? "contentClick" : "backdropClick") || false;
      }, dblClick: () => a2.isCompact ? "toggleZoom" : a2.option("contentDblClick") || false, spinner: false, panOnlyZoomed: true, wheelLimit: 1 / 0, on: { ready: (t3) => {
        i2(t3);
      }, error: () => {
        s2();
      }, destroy: () => {
        s2();
      } } }));
    });
  }
  zoomIn(t2) {
    return new Promise((e2, i2) => {
      const n2 = this.instance, s2 = n2.container, { panzoom: o2, contentEl: a2, el: r2 } = t2;
      o2 && o2.updateMetrics();
      const l2 = this.getZoomInfo(t2);
      if (!(l2 && r2 && a2 && o2 && s2)) return void i2();
      const { x: c2, y: h2, scale: d2, opacity: u2 } = l2, p2 = () => {
        t2.state !== lt.Closing && (u2 && (a2.style.opacity = Math.max(Math.min(1, 1 - (1 - o2.scale) / (1 - d2)), 0) + ""), o2.scale >= 1 && o2.scale > o2.targetScale - 0.1 && e2(o2));
      }, f2 = (t3) => {
        (t3.scale < 0.99 || t3.scale > 1.01) && !t3.isDragging || (S(s2, yt), a2.style.opacity = "", t3.off("endAnimation", f2), t3.off("touchStart", f2), t3.off("afterTransform", p2), e2(t3));
      };
      o2.on("endAnimation", f2), o2.on("touchStart", f2), o2.on("afterTransform", p2), o2.on(["error", "destroy"], () => {
        i2();
      }), o2.panTo({ x: c2, y: h2, scale: d2, friction: 0, ignoreBounds: true }), o2.stop("current");
      const g2 = { event: "mousemove" === o2.panMode ? n2.prevMouseMoveEvent || n2.options.event : void 0 }, m2 = this.optionFor(t2, "initialSize");
      P(s2, yt), n2.hideLoading(t2), "full" === m2 ? o2.zoomToFull(g2) : "cover" === m2 ? o2.zoomToCover(g2) : "max" === m2 ? o2.zoomToMax(g2) : o2.reset(0.172);
    });
  }
  getZoomInfo(t2) {
    const { el: e2, imageEl: i2, thumbEl: n2, panzoom: s2 } = t2, o2 = this.instance, a2 = o2.container;
    if (!e2 || !i2 || !n2 || !s2 || tt(n2) < 3 || !this.optionFor(t2, "zoom") || !a2 || o2.state === rt.Destroy) return false;
    if ("0" === getComputedStyle(a2).getPropertyValue("--f-images-zoom")) return false;
    const r2 = window.visualViewport || null;
    if (1 !== (r2 ? r2.scale : 1)) return false;
    let { top: l2, left: c2, width: h2, height: d2 } = n2.getBoundingClientRect(), { top: u2, left: p2, fitWidth: f2, fitHeight: g2 } = s2.contentRect;
    if (!(h2 && d2 && f2 && g2)) return false;
    const m2 = s2.container.getBoundingClientRect();
    p2 += m2.left, u2 += m2.top;
    const v2 = -1 * (p2 + 0.5 * f2 - (c2 + 0.5 * h2)), b2 = -1 * (u2 + 0.5 * g2 - (l2 + 0.5 * d2)), y2 = h2 / f2;
    let w2 = this.option("zoomOpacity") || false;
    return "auto" === w2 && (w2 = Math.abs(h2 / d2 - f2 / g2) > 0.1), { x: v2, y: b2, scale: y2, opacity: w2 };
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.change", t2.onChange), e2.on("Carousel.createSlide", t2.onCreateSlide), e2.on("Carousel.removeSlide", t2.onRemoveSlide), e2.on("close", t2.onClose);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.change", t2.onChange), e2.off("Carousel.createSlide", t2.onCreateSlide), e2.off("Carousel.removeSlide", t2.onRemoveSlide), e2.off("close", t2.onClose);
  }
};
Object.defineProperty(wt, "defaults", { enumerable: true, configurable: true, writable: true, value: { initialSize: "fit", Panzoom: { maxScale: 1 }, protected: false, zoom: true, zoomOpacity: "auto" } }), "function" == typeof SuppressedError && SuppressedError;
var xt = "html";
var Et = "image";
var St = "map";
var Pt = "youtube";
var Ct = "vimeo";
var Tt = "html5video";
var Mt = (t2, e2 = {}) => {
  const i2 = new URL(t2), n2 = new URLSearchParams(i2.search), s2 = new URLSearchParams();
  for (const [t3, i3] of [...n2, ...Object.entries(e2)]) {
    let e3 = i3 + "";
    if ("t" === t3) {
      let t4 = e3.match(/((\d*)m)?(\d*)s?/);
      t4 && s2.set("start", 60 * parseInt(t4[2] || "0") + parseInt(t4[3] || "0") + "");
    } else s2.set(t3, e3);
  }
  let o2 = s2 + "", a2 = t2.match(/#t=((.*)?\d+s)/);
  return a2 && (o2 += `#t=${a2[1]}`), o2;
};
var Ot = { ajax: null, autoSize: true, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: true, videoAutoplay: true, videoRatio: 16 / 9, videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, videoFormat: "", vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } };
var At = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
var Lt = class extends _ {
  onBeforeInitSlide(t2, e2, i2) {
    this.processType(i2);
  }
  onCreateSlide(t2, e2, i2) {
    this.setContent(i2);
  }
  onClearContent(t2, e2) {
    e2.xhr && (e2.xhr.abort(), e2.xhr = null);
    const i2 = e2.iframeEl;
    i2 && (i2.onload = i2.onerror = null, i2.src = "//about:blank", e2.iframeEl = null);
    const n2 = e2.contentEl, s2 = e2.placeholderEl;
    if ("inline" === e2.type && n2 && s2) n2.classList.remove("fancybox__content"), "none" !== getComputedStyle(n2).getPropertyValue("display") && (n2.style.display = "none"), setTimeout(() => {
      s2 && (n2 && s2.parentNode && s2.parentNode.insertBefore(n2, s2), s2.remove());
    }, 0), e2.contentEl = void 0, e2.placeholderEl = void 0;
    else for (; e2.el && e2.el.firstChild; ) e2.el.removeChild(e2.el.firstChild);
  }
  onSelectSlide(t2, e2, i2) {
    i2.state === lt.Ready && this.playVideo();
  }
  onUnselectSlide(t2, e2, i2) {
    var n2, s2;
    if (i2.type === Tt) {
      try {
        null === (s2 = null === (n2 = i2.el) || void 0 === n2 ? void 0 : n2.querySelector("video")) || void 0 === s2 || s2.pause();
      } catch (t3) {
      }
      return;
    }
    let o2;
    i2.type === Ct ? o2 = { method: "pause", value: "true" } : i2.type === Pt && (o2 = { event: "command", func: "pauseVideo" }), o2 && i2.iframeEl && i2.iframeEl.contentWindow && i2.iframeEl.contentWindow.postMessage(JSON.stringify(o2), "*"), i2.poller && clearTimeout(i2.poller);
  }
  onDone(t2, e2) {
    t2.isCurrentSlide(e2) && !t2.isClosing() && this.playVideo();
  }
  onRefresh(t2, e2) {
    e2.slides.forEach((t3) => {
      t3.el && (this.resizeIframe(t3), this.setAspectRatio(t3));
    });
  }
  onMessage(t2) {
    try {
      let e2 = JSON.parse(t2.data);
      if ("https://player.vimeo.com" === t2.origin) {
        if ("ready" === e2.event) for (let e3 of Array.from(document.getElementsByClassName("fancybox__iframe"))) e3 instanceof HTMLIFrameElement && e3.contentWindow === t2.source && (e3.dataset.ready = "true");
      } else if (t2.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e2.event) {
        const t3 = document.getElementById(e2.id);
        t3 && (t3.dataset.ready = "true");
      }
    } catch (t3) {
    }
  }
  loadAjaxContent(t2) {
    const e2 = this.instance.optionFor(t2, "src") || "";
    this.instance.showLoading(t2);
    const i2 = this.instance, n2 = new XMLHttpRequest();
    i2.showLoading(t2), n2.onreadystatechange = function() {
      n2.readyState === XMLHttpRequest.DONE && i2.state === rt.Ready && (i2.hideLoading(t2), 200 === n2.status ? i2.setContent(t2, n2.responseText) : i2.setError(t2, 404 === n2.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s2 = t2.ajax || null;
    n2.open(s2 ? "POST" : "GET", e2 + ""), n2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n2.send(s2), t2.xhr = n2;
  }
  setInlineContent(t2) {
    let e2 = null;
    if (E(t2.src)) e2 = t2.src;
    else if ("string" == typeof t2.src) {
      const i2 = t2.src.split("#", 2).pop();
      e2 = i2 ? document.getElementById(i2) : null;
    }
    if (e2) {
      if ("clone" === t2.type || e2.closest(".fancybox__slide")) {
        e2 = e2.cloneNode(true);
        const i2 = e2.dataset.animationName;
        i2 && (e2.classList.remove(i2), delete e2.dataset.animationName);
        let n2 = e2.getAttribute("id");
        n2 = n2 ? `${n2}--clone` : `clone-${this.instance.id}-${t2.index}`, e2.setAttribute("id", n2);
      } else if (e2.parentNode) {
        const i2 = document.createElement("div");
        i2.classList.add("fancybox-placeholder"), e2.parentNode.insertBefore(i2, e2), t2.placeholderEl = i2;
      }
      this.instance.setContent(t2, e2);
    } else this.instance.setError(t2, "{{ELEMENT_NOT_FOUND}}");
  }
  setIframeContent(t2) {
    const { src: e2, el: i2 } = t2;
    if (!e2 || "string" != typeof e2 || !i2) return;
    i2.classList.add("is-loading");
    const n2 = this.instance, s2 = document.createElement("iframe");
    s2.className = "fancybox__iframe", s2.setAttribute("id", `fancybox__iframe_${n2.id}_${t2.index}`);
    for (const [e3, i3] of Object.entries(this.optionFor(t2, "iframeAttr") || {})) s2.setAttribute(e3, i3);
    s2.onerror = () => {
      n2.setError(t2, "{{IFRAME_ERROR}}");
    }, t2.iframeEl = s2;
    const o2 = this.optionFor(t2, "preload");
    if ("iframe" !== t2.type || false === o2) return s2.setAttribute("src", t2.src + ""), n2.setContent(t2, s2, false), this.resizeIframe(t2), void n2.revealContent(t2);
    n2.showLoading(t2), s2.onload = () => {
      if (!s2.src.length) return;
      const e3 = "true" !== s2.dataset.ready;
      s2.dataset.ready = "true", this.resizeIframe(t2), e3 ? n2.revealContent(t2) : n2.hideLoading(t2);
    }, s2.setAttribute("src", e2), n2.setContent(t2, s2, false);
  }
  resizeIframe(t2) {
    const { type: e2, iframeEl: i2 } = t2;
    if (e2 === Pt || e2 === Ct) return;
    const n2 = null == i2 ? void 0 : i2.parentElement;
    if (!i2 || !n2) return;
    let s2 = t2.autoSize;
    void 0 === s2 && (s2 = this.optionFor(t2, "autoSize"));
    let o2 = t2.width || 0, a2 = t2.height || 0;
    o2 && a2 && (s2 = false);
    const r2 = n2 && n2.style;
    if (false !== t2.preload && false !== s2 && r2) try {
      const t3 = window.getComputedStyle(n2), e3 = parseFloat(t3.paddingLeft) + parseFloat(t3.paddingRight), s3 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom), l2 = i2.contentWindow;
      if (l2) {
        const t4 = l2.document, i3 = t4.getElementsByTagName(xt)[0], n3 = t4.body;
        r2.width = "", n3.style.overflow = "hidden", o2 = o2 || i3.scrollWidth + e3, r2.width = `${o2}px`, n3.style.overflow = "", r2.flex = "0 0 auto", r2.height = `${n3.scrollHeight}px`, a2 = i3.scrollHeight + s3;
      }
    } catch (t3) {
    }
    if (o2 || a2) {
      const t3 = { flex: "0 1 auto", width: "", height: "" };
      o2 && "auto" !== o2 && (t3.width = `${o2}px`), a2 && "auto" !== a2 && (t3.height = `${a2}px`), Object.assign(r2, t3);
    }
  }
  playVideo() {
    const t2 = this.instance.getSlide();
    if (!t2) return;
    const { el: e2 } = t2;
    if (!e2 || !e2.offsetParent) return;
    if (!this.optionFor(t2, "videoAutoplay")) return;
    if (t2.type === Tt) try {
      const t3 = e2.querySelector("video");
      if (t3) {
        const e3 = t3.play();
        void 0 !== e3 && e3.then(() => {
        }).catch((e4) => {
          t3.muted = true, t3.play();
        });
      }
    } catch (t3) {
    }
    if (t2.type !== Pt && t2.type !== Ct) return;
    const i2 = () => {
      if (t2.iframeEl && t2.iframeEl.contentWindow) {
        let e3;
        if ("true" === t2.iframeEl.dataset.ready) return e3 = t2.type === Pt ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e3 && t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"), void (t2.poller = void 0);
        t2.type === Pt && (e3 = { event: "listening", id: t2.iframeEl.getAttribute("id") }, t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"));
      }
      t2.poller = setTimeout(i2, 250);
    };
    i2();
  }
  processType(t2) {
    if (t2.html) return t2.type = xt, t2.src = t2.html, void (t2.html = "");
    const e2 = this.instance.optionFor(t2, "src", "");
    if (!e2 || "string" != typeof e2) return;
    let i2 = t2.type, n2 = null;
    if (n2 = e2.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
      const s2 = this.optionFor(t2, Pt), { nocookie: o2 } = s2, a2 = function(t3, e3) {
        var i3 = {};
        for (var n3 in t3) Object.prototype.hasOwnProperty.call(t3, n3) && e3.indexOf(n3) < 0 && (i3[n3] = t3[n3]);
        if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
          var s3 = 0;
          for (n3 = Object.getOwnPropertySymbols(t3); s3 < n3.length; s3++) e3.indexOf(n3[s3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, n3[s3]) && (i3[n3[s3]] = t3[n3[s3]]);
        }
        return i3;
      }(s2, ["nocookie"]), r2 = `www.youtube${o2 ? "-nocookie" : ""}.com`, l2 = Mt(e2, a2), c2 = encodeURIComponent(n2[2]);
      t2.videoId = c2, t2.src = `https://${r2}/embed/${c2}?${l2}`, t2.thumbSrc = t2.thumbSrc || `https://i.ytimg.com/vi/${c2}/mqdefault.jpg`, i2 = Pt;
    } else if (n2 = e2.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
      const s2 = Mt(e2, this.optionFor(t2, Ct)), o2 = encodeURIComponent(n2[1]), a2 = n2[4] || "";
      t2.videoId = o2, t2.src = `https://player.vimeo.com/video/${o2}?${a2 ? `h=${a2}${s2 ? "&" : ""}` : ""}${s2}`, i2 = Ct;
    }
    if (!i2 && t2.triggerEl) {
      const e3 = t2.triggerEl.dataset.type;
      At.includes(e3) && (i2 = e3);
    }
    i2 || "string" == typeof e2 && ("#" === e2.charAt(0) ? i2 = "inline" : (n2 = e2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i2 = Tt, t2.videoFormat = t2.videoFormat || "video/" + ("ogv" === n2[1] ? "ogg" : n2[1])) : e2.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i2 = Et : e2.match(/\.(pdf)((\?|#).*)?$/i) && (i2 = "pdf")), (n2 = e2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t2.src = `https://maps.google.${n2[1]}/?ll=${(n2[2] ? n2[2] + "&z=" + Math.floor(parseFloat(n2[3])) + (n2[4] ? n2[4].replace(/^\//, "&") : "") : n2[4] + "").replace(/\?/, "&")}&output=${n2[4] && n2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i2 = St) : (n2 = e2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t2.src = `https://maps.google.${n2[1]}/maps?q=${n2[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i2 = St), i2 = i2 || this.instance.option("defaultType"), t2.type = i2, i2 === Et && (t2.thumbSrc = t2.thumbSrc || t2.src);
  }
  setContent(t2) {
    const e2 = this.instance.optionFor(t2, "src") || "";
    if (t2 && t2.type && e2) {
      switch (t2.type) {
        case xt:
          this.instance.setContent(t2, e2);
          break;
        case Tt:
          const i2 = this.option("videoTpl");
          i2 && this.instance.setContent(t2, i2.replace(/\{\{src\}\}/gi, e2 + "").replace(/\{\{format\}\}/gi, this.optionFor(t2, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t2.poster || t2.thumbSrc || ""));
          break;
        case "inline":
        case "clone":
          this.setInlineContent(t2);
          break;
        case "ajax":
          this.loadAjaxContent(t2);
          break;
        case "pdf":
        case St:
        case Pt:
        case Ct:
          t2.preload = false;
        case "iframe":
          this.setIframeContent(t2);
      }
      this.setAspectRatio(t2);
    }
  }
  setAspectRatio(t2) {
    const e2 = t2.contentEl;
    if (!(t2.el && e2 && t2.type && [Pt, Ct, Tt].includes(t2.type))) return;
    let i2, n2 = t2.width || "auto", s2 = t2.height || "auto";
    if ("auto" === n2 || "auto" === s2) {
      i2 = this.optionFor(t2, "videoRatio");
      const e3 = (i2 + "").match(/(\d+)\s*\/\s?(\d+)/);
      i2 = e3 && e3.length > 2 ? parseFloat(e3[1]) / parseFloat(e3[2]) : parseFloat(i2 + "");
    } else n2 && s2 && (i2 = n2 / s2);
    if (!i2) return;
    e2.style.aspectRatio = "", e2.style.width = "", e2.style.height = "", e2.offsetHeight;
    const o2 = e2.getBoundingClientRect(), a2 = o2.width || 1, r2 = o2.height || 1;
    e2.style.aspectRatio = i2 + "", i2 < a2 / r2 ? (s2 = "auto" === s2 ? r2 : Math.min(r2, s2), e2.style.width = "auto", e2.style.height = `${s2}px`) : (n2 = "auto" === n2 ? a2 : Math.min(a2, n2), e2.style.width = `${n2}px`, e2.style.height = "auto");
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.beforeInitSlide", t2.onBeforeInitSlide), e2.on("Carousel.createSlide", t2.onCreateSlide), e2.on("Carousel.selectSlide", t2.onSelectSlide), e2.on("Carousel.unselectSlide", t2.onUnselectSlide), e2.on("Carousel.Panzoom.refresh", t2.onRefresh), e2.on("done", t2.onDone), e2.on("clearContent", t2.onClearContent), window.addEventListener("message", t2.onMessage);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.beforeInitSlide", t2.onBeforeInitSlide), e2.off("Carousel.createSlide", t2.onCreateSlide), e2.off("Carousel.selectSlide", t2.onSelectSlide), e2.off("Carousel.unselectSlide", t2.onUnselectSlide), e2.off("Carousel.Panzoom.refresh", t2.onRefresh), e2.off("done", t2.onDone), e2.off("clearContent", t2.onClearContent), window.removeEventListener("message", t2.onMessage);
  }
};
Object.defineProperty(Lt, "defaults", { enumerable: true, configurable: true, writable: true, value: Ot });
var zt = "play";
var Rt = "pause";
var kt = "ready";
var It = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: kt }), Object.defineProperty(this, "inHover", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "timer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "progressBar", { enumerable: true, configurable: true, writable: true, value: null });
  }
  get isActive() {
    return this.state !== kt;
  }
  onReady(t2) {
    this.option("autoStart") && (t2.isInfinite || t2.page < t2.pages.length - 1) && this.start();
  }
  onChange() {
    this.removeProgressBar(), this.pause();
  }
  onSettle() {
    this.resume();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.resume() : this.pause();
  }
  onMouseEnter() {
    this.inHover = true, this.pause();
  }
  onMouseLeave() {
    var t2;
    this.inHover = false, (null === (t2 = this.instance.panzoom) || void 0 === t2 ? void 0 : t2.isResting) && this.resume();
  }
  onTimerEnd() {
    const t2 = this.instance;
    "play" === this.state && (t2.isInfinite || t2.page !== t2.pages.length - 1 ? t2.slideNext() : t2.slideTo(0));
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null);
  }
  createProgressBar() {
    var t2;
    if (!this.option("showProgress")) return null;
    this.removeProgressBar();
    const e2 = this.instance, i2 = (null === (t2 = e2.pages[e2.page]) || void 0 === t2 ? void 0 : t2.slides) || [];
    let n2 = this.option("progressParentEl");
    if (n2 || (n2 = (1 === i2.length ? i2[0].el : null) || e2.viewport), !n2) return null;
    const s2 = document.createElement("div");
    return P(s2, "f-progress"), n2.prepend(s2), this.progressBar = s2, s2.offsetHeight, s2;
  }
  set() {
    const t2 = this, e2 = t2.instance;
    if (e2.pages.length < 2) return;
    if (t2.timer) return;
    const i2 = t2.option("timeout");
    t2.state = zt, P(e2.container, "has-autoplay");
    let n2 = t2.createProgressBar();
    n2 && (n2.style.transitionDuration = `${i2}ms`, n2.style.transform = "scaleX(1)"), t2.timer = setTimeout(() => {
      t2.timer = null, t2.inHover || t2.onTimerEnd();
    }, i2), t2.emit("set");
  }
  clear() {
    const t2 = this;
    t2.timer && (clearTimeout(t2.timer), t2.timer = null), t2.removeProgressBar();
  }
  start() {
    const t2 = this;
    if (t2.set(), t2.state !== kt) {
      if (t2.option("pauseOnHover")) {
        const e2 = t2.instance.container;
        e2.addEventListener("mouseenter", t2.onMouseEnter, false), e2.addEventListener("mouseleave", t2.onMouseLeave, false);
      }
      document.addEventListener("visibilitychange", t2.onVisibilityChange, false), t2.emit("start");
    }
  }
  stop() {
    const t2 = this, e2 = t2.state, i2 = t2.instance.container;
    t2.clear(), t2.state = kt, i2.removeEventListener("mouseenter", t2.onMouseEnter, false), i2.removeEventListener("mouseleave", t2.onMouseLeave, false), document.removeEventListener("visibilitychange", t2.onVisibilityChange, false), S(i2, "has-autoplay"), e2 !== kt && t2.emit("stop");
  }
  pause() {
    const t2 = this;
    t2.state === zt && (t2.state = Rt, t2.clear(), t2.emit(Rt));
  }
  resume() {
    const t2 = this, e2 = t2.instance;
    if (e2.isInfinite || e2.page !== e2.pages.length - 1) if (t2.state !== zt) {
      if (t2.state === Rt && !t2.inHover) {
        const e3 = new Event("resume", { bubbles: true, cancelable: true });
        t2.emit("resume", e3), e3.defaultPrevented || t2.set();
      }
    } else t2.set();
    else t2.stop();
  }
  toggle() {
    this.state === zt || this.state === Rt ? this.stop() : this.start();
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("ready", t2.onReady), e2.on("Panzoom.startAnimation", t2.onChange), e2.on("Panzoom.endAnimation", t2.onSettle), e2.on("Panzoom.touchMove", t2.onChange);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("ready", t2.onReady), e2.off("Panzoom.startAnimation", t2.onChange), e2.off("Panzoom.endAnimation", t2.onSettle), e2.off("Panzoom.touchMove", t2.onChange), t2.stop();
  }
};
Object.defineProperty(It, "defaults", { enumerable: true, configurable: true, writable: true, value: { autoStart: true, pauseOnHover: true, progressParentEl: null, showProgress: true, timeout: 3e3 } });
var Dt = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onPrepare(t2) {
    const e2 = t2.carousel;
    if (!e2) return;
    const i2 = t2.container;
    i2 && (e2.options.Autoplay = u({ autoStart: false }, this.option("Autoplay") || {}, { pauseOnHover: false, timeout: this.option("timeout"), progressParentEl: () => this.option("progressParentEl") || null, on: { start: () => {
      t2.emit("startSlideshow");
    }, set: (e3) => {
      var n2;
      i2.classList.add("has-slideshow"), (null === (n2 = t2.getSlide()) || void 0 === n2 ? void 0 : n2.state) !== lt.Ready && e3.pause();
    }, stop: () => {
      i2.classList.remove("has-slideshow"), t2.isCompact || t2.endIdle(), t2.emit("endSlideshow");
    }, resume: (e3, i3) => {
      var n2, s2, o2;
      !i3 || !i3.cancelable || (null === (n2 = t2.getSlide()) || void 0 === n2 ? void 0 : n2.state) === lt.Ready && (null === (o2 = null === (s2 = t2.carousel) || void 0 === s2 ? void 0 : s2.panzoom) || void 0 === o2 ? void 0 : o2.isResting) || i3.preventDefault();
    } } }), e2.attachPlugins({ Autoplay: It }), this.ref = e2.plugins.Autoplay);
  }
  onReady(t2) {
    const e2 = t2.carousel, i2 = this.ref;
    i2 && e2 && this.option("playOnStart") && (e2.isInfinite || e2.page < e2.pages.length - 1) && i2.start();
  }
  onDone(t2, e2) {
    const i2 = this.ref, n2 = t2.carousel;
    if (!i2 || !n2) return;
    const s2 = e2.panzoom;
    s2 && s2.on("startAnimation", () => {
      t2.isCurrentSlide(e2) && i2.stop();
    }), t2.isCurrentSlide(e2) && i2.resume();
  }
  onKeydown(t2, e2) {
    var i2;
    const n2 = this.ref;
    n2 && e2 === this.option("key") && "BUTTON" !== (null === (i2 = document.activeElement) || void 0 === i2 ? void 0 : i2.nodeName) && n2.toggle();
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.init", t2.onPrepare), e2.on("Carousel.ready", t2.onReady), e2.on("done", t2.onDone), e2.on("keydown", t2.onKeydown);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.init", t2.onPrepare), e2.off("Carousel.ready", t2.onReady), e2.off("done", t2.onDone), e2.off("keydown", t2.onKeydown);
  }
};
Object.defineProperty(Dt, "defaults", { enumerable: true, configurable: true, writable: true, value: { key: " ", playOnStart: false, progressParentEl: (t2) => {
  var e2;
  return (null === (e2 = t2.instance.container) || void 0 === e2 ? void 0 : e2.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t2.instance.container;
}, timeout: 3e3 } });
var Ft = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };
var jt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Hidden = 2] = "Hidden";
}(jt || (jt = {}));
var Bt = "isResting";
var Ht = "thumbWidth";
var Nt = "thumbHeight";
var _t = "thumbClipWidth";
var $t = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", { enumerable: true, configurable: true, writable: true, value: "modern" }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "thumbWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbClipWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbExtraGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: jt.Init });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t2, e2) {
    const i2 = e2.el ? e2.el.dataset : void 0;
    i2 && (e2.thumbSrc = i2.thumbSrc || e2.thumbSrc || "", e2[_t] = parseFloat(i2[_t] || "") || e2[_t] || 0, e2[Nt] = parseFloat(i2.thumbHeight || "") || e2[Nt] || 0), this.addSlide(e2);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t2;
    if (!this.isModern) return;
    const e2 = this.container, i2 = this.instance, n2 = i2.panzoom, s2 = this.carousel, a2 = s2 ? s2.panzoom : null, r2 = i2.page;
    if (n2 && s2 && a2) {
      if (n2.isDragging) {
        S(e2, this.cn(Bt));
        let n3 = (null === (t2 = s2.pages[r2]) || void 0 === t2 ? void 0 : t2.pos) || 0;
        n3 += i2.getProgress(r2) * (this[_t] + this.thumbGap);
        let o2 = a2.getBounds();
        -1 * n3 > o2.x.min && -1 * n3 < o2.x.max && a2.panTo({ x: -1 * n3, friction: 0.12 });
      } else o(e2, this.cn(Bt), n2.isResting);
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t2 of this.instance.slides || []) this.resizeModernSlide(t2);
    this.shiftModern();
  }
  isDisabled() {
    const t2 = this.option("minCount") || 0;
    if (t2) {
      const e3 = this.instance;
      let i2 = 0;
      for (const t3 of e3.slides || []) t3.thumbSrc && i2++;
      if (i2 < t2) return true;
    }
    const e2 = this.option("type");
    return ["modern", "classic"].indexOf(e2) < 0;
  }
  getThumb(t2) {
    const e2 = this.option("thumbTpl") || "";
    return { html: this.instance.localize(e2, [["%i", t2.index], ["%d", t2.index + 1], ["%s", t2.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]) };
  }
  addSlide(t2) {
    const e2 = this.carousel;
    e2 && e2.addSlide(t2.index, this.getThumb(t2));
  }
  getSlides() {
    const t2 = [];
    for (const e2 of this.instance.slides || []) t2.push(this.getThumb(e2));
    return t2;
  }
  resizeModernSlide(t2) {
    this.isModern && (t2[Ht] = t2[_t] && t2[Nt] ? Math.round(this[Nt] * (t2[_t] / t2[Nt])) : this[Ht]);
  }
  updateProps() {
    const t2 = this.container;
    if (!t2) return;
    const e2 = (e3) => parseFloat(getComputedStyle(t2).getPropertyValue("--f-thumb-" + e3)) || 0;
    this.thumbGap = e2("gap"), this.thumbExtraGap = e2("extra-gap"), this[Ht] = e2("width") || 40, this[_t] = e2("clip-width") || 40, this[Nt] = e2("height") || 40;
  }
  build() {
    const t2 = this;
    if (t2.state !== jt.Init) return;
    if (t2.isDisabled()) return void t2.emit("disabled");
    const e2 = t2.instance, i2 = e2.container, n2 = t2.getSlides(), s2 = t2.option("type");
    t2.type = s2;
    const o2 = t2.option("parentEl"), a2 = t2.cn("container"), r2 = t2.cn("track");
    let l2 = null == o2 ? void 0 : o2.querySelector("." + a2);
    l2 || (l2 = document.createElement("div"), P(l2, a2), o2 ? o2.appendChild(l2) : i2.after(l2)), P(l2, `is-${s2}`), P(i2, t2.cn("hasThumbs")), t2.container = l2, t2.updateProps();
    let c2 = l2.querySelector("." + r2);
    c2 || (c2 = document.createElement("div"), P(c2, t2.cn("track")), l2.appendChild(c2)), t2.track = c2;
    const h2 = u({}, { track: c2, infinite: false, center: true, fill: "classic" === s2, dragFree: true, slidesPerPage: 1, transition: false, preload: 0.25, friction: 0.12, Panzoom: { maxVelocity: 0 }, Dots: false, Navigation: false, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, t2.option("Carousel") || {}, { Sync: { target: e2 }, slides: n2 }), d2 = new e2.constructor(l2, h2);
    d2.on("createSlide", (e3, i3) => {
      t2.setProps(i3.index), t2.emit("createSlide", i3, i3.el);
    }), d2.on("ready", () => {
      t2.shiftModern(), t2.emit("ready");
    }), d2.on("refresh", () => {
      t2.shiftModern();
    }), d2.on("Panzoom.click", (e3, i3, n3) => {
      t2.onClick(n3);
    }), t2.carousel = d2, t2.state = jt.Ready;
  }
  onClick(t2) {
    t2.preventDefault(), t2.stopPropagation();
    const e2 = this.instance, { pages: i2, page: n2 } = e2, s2 = (t3) => {
      if (t3) {
        const e3 = t3.closest("[data-carousel-index]");
        if (e3) return [parseInt(e3.dataset.carouselIndex || "", 10) || 0, e3];
      }
      return [-1, void 0];
    }, o2 = (t3, e3) => {
      const i3 = document.elementFromPoint(t3, e3);
      return i3 ? s2(i3) : [-1, void 0];
    };
    let [a2, r2] = s2(t2.target);
    if (a2 > -1) return;
    const l2 = this[_t], c2 = t2.clientX, h2 = t2.clientY;
    let [d2, u2] = o2(c2 - l2, h2), [p2, f2] = o2(c2 + l2, h2);
    u2 && f2 ? (a2 = Math.abs(c2 - u2.getBoundingClientRect().right) < Math.abs(c2 - f2.getBoundingClientRect().left) ? d2 : p2, a2 === n2 && (a2 = a2 === d2 ? p2 : d2)) : u2 ? a2 = d2 : f2 && (a2 = p2), a2 > -1 && i2[a2] && e2.slideTo(a2);
  }
  getShift(t2) {
    var e2;
    const i2 = this, { instance: n2 } = i2, s2 = i2.carousel;
    if (!n2 || !s2) return 0;
    const o2 = i2[Ht], a2 = i2[_t], r2 = i2.thumbGap, l2 = i2.thumbExtraGap;
    if (!(null === (e2 = s2.slides[t2]) || void 0 === e2 ? void 0 : e2.el)) return 0;
    const c2 = 0.5 * (o2 - a2), h2 = n2.pages.length - 1;
    let d2 = n2.getProgress(0), u2 = n2.getProgress(h2), p2 = n2.getProgress(t2, false, true), f2 = 0, g2 = c2 + l2 + r2;
    const m2 = d2 < 0 && d2 > -1, v2 = u2 > 0 && u2 < 1;
    return 0 === t2 ? (f2 = g2 * Math.abs(d2), v2 && 1 === d2 && (f2 -= g2 * Math.abs(u2))) : t2 === h2 ? (f2 = g2 * Math.abs(u2) * -1, m2 && -1 === u2 && (f2 += g2 * Math.abs(d2))) : m2 || v2 ? (f2 = -1 * g2, f2 += g2 * Math.abs(d2), f2 += g2 * (1 - Math.abs(u2))) : f2 = g2 * p2, f2;
  }
  setProps(e2) {
    var i2;
    const n2 = this;
    if (!n2.isModern) return;
    const { instance: s2 } = n2, o2 = n2.carousel;
    if (s2 && o2) {
      const a2 = null === (i2 = o2.slides[e2]) || void 0 === i2 ? void 0 : i2.el;
      if (a2 && a2.childNodes.length) {
        let i3 = t(1 - Math.abs(s2.getProgress(e2))), o3 = t(n2.getShift(e2));
        a2.style.setProperty("--progress", i3 ? i3 + "" : ""), a2.style.setProperty("--shift", o3 + "");
      }
    }
  }
  shiftModern() {
    const t2 = this;
    if (!t2.isModern) return;
    const { instance: e2, track: i2 } = t2, n2 = e2.panzoom, s2 = t2.carousel;
    if (!(e2 && i2 && n2 && s2)) return;
    if (n2.state === m.Init || n2.state === m.Destroy) return;
    for (const i3 of e2.slides) t2.setProps(i3.index);
    let o2 = (t2[_t] + t2.thumbGap) * (s2.slides.length || 0);
    i2.style.setProperty("--width", o2 + "");
  }
  cleanup() {
    const t2 = this;
    t2.carousel && t2.carousel.destroy(), t2.carousel = null, t2.container && t2.container.remove(), t2.container = null, t2.track && t2.track.remove(), t2.track = null, t2.state = jt.Init, S(t2.instance.container, t2.cn("hasThumbs"));
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("initSlide", t2.onInitSlide), e2.state === B.Init ? e2.on("initSlides", t2.onInitSlides) : t2.onInitSlides(), e2.on(["change", "Panzoom.afterTransform"], t2.onChange), e2.on("Panzoom.refresh", t2.onRefresh);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("initSlide", t2.onInitSlide), e2.off("initSlides", t2.onInitSlides), e2.off(["change", "Panzoom.afterTransform"], t2.onChange), e2.off("Panzoom.refresh", t2.onRefresh), t2.cleanup();
  }
};
Object.defineProperty($t, "defaults", { enumerable: true, configurable: true, writable: true, value: Ft });
var Wt = Object.assign(Object.assign({}, Ft), { key: "t", showOnStart: true, parentEl: null });
var Xt = "is-masked";
var qt = "aria-hidden";
var Yt = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "hidden", { enumerable: true, configurable: true, writable: true, value: false });
  }
  get isEnabled() {
    const t2 = this.ref;
    return t2 && !t2.isDisabled();
  }
  get isHidden() {
    return this.hidden;
  }
  onClick(t2, e2) {
    e2.stopPropagation();
  }
  onCreateSlide(t2, e2) {
    var i2, n2, s2;
    const o2 = (null === (s2 = null === (n2 = null === (i2 = this.instance) || void 0 === i2 ? void 0 : i2.carousel) || void 0 === n2 ? void 0 : n2.slides[e2.index]) || void 0 === s2 ? void 0 : s2.type) || "", a2 = e2.el;
    if (a2 && o2) {
      let t3 = `for-${o2}`;
      ["video", "youtube", "vimeo", "html5video"].includes(o2) && (t3 += " for-video"), P(a2, t3);
    }
  }
  onInit() {
    var t2;
    const e2 = this, i2 = e2.instance, n2 = i2.carousel;
    if (e2.ref || !n2) return;
    const s2 = e2.option("parentEl") || i2.footer || i2.container;
    if (!s2) return;
    const o2 = u({}, e2.options, { parentEl: s2, classes: { container: "f-thumbs fancybox__thumbs" }, Carousel: { Sync: { friction: i2.option("Carousel.friction") || 0 } }, on: { ready: (t3) => {
      const i3 = t3.container;
      i3 && this.hidden && (e2.refresh(), i3.style.transition = "none", e2.hide(), i3.offsetHeight, queueMicrotask(() => {
        i3.style.transition = "", e2.show();
      }));
    } } });
    o2.Carousel = o2.Carousel || {}, o2.Carousel.on = u((null === (t2 = e2.options.Carousel) || void 0 === t2 ? void 0 : t2.on) || {}, { click: this.onClick, createSlide: this.onCreateSlide }), n2.options.Thumbs = o2, n2.attachPlugins({ Thumbs: $t }), e2.ref = n2.plugins.Thumbs, e2.option("showOnStart") || (e2.ref.state = jt.Hidden, e2.hidden = true);
  }
  onResize() {
    var t2;
    const e2 = null === (t2 = this.ref) || void 0 === t2 ? void 0 : t2.container;
    e2 && (e2.style.maxHeight = "");
  }
  onKeydown(t2, e2) {
    const i2 = this.option("key");
    i2 && i2 === e2 && this.toggle();
  }
  toggle() {
    const t2 = this.ref;
    if (t2 && !t2.isDisabled()) return t2.state === jt.Hidden ? (t2.state = jt.Init, void t2.build()) : void (this.hidden ? this.show() : this.hide());
  }
  show() {
    const t2 = this.ref;
    if (!t2 || t2.isDisabled()) return;
    const e2 = t2.container;
    e2 && (this.refresh(), e2.offsetHeight, e2.removeAttribute(qt), e2.classList.remove(Xt), this.hidden = false);
  }
  hide() {
    const t2 = this.ref, e2 = t2 && t2.container;
    e2 && (this.refresh(), e2.offsetHeight, e2.classList.add(Xt), e2.setAttribute(qt, "true")), this.hidden = true;
  }
  refresh() {
    const t2 = this.ref;
    if (!t2 || !t2.state) return;
    const e2 = t2.container, i2 = (null == e2 ? void 0 : e2.firstChild) || null;
    e2 && i2 && i2.childNodes.length && (e2.style.maxHeight = `${i2.getBoundingClientRect().height}px`);
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.state === rt.Init ? e2.on("Carousel.init", t2.onInit) : t2.onInit(), e2.on("resize", t2.onResize), e2.on("keydown", t2.onKeydown);
  }
  detach() {
    var t2;
    const e2 = this, i2 = e2.instance;
    i2.off("Carousel.init", e2.onInit), i2.off("resize", e2.onResize), i2.off("keydown", e2.onKeydown), null === (t2 = i2.carousel) || void 0 === t2 || t2.detachPlugins(["Thumbs"]), e2.ref = null;
  }
};
Object.defineProperty(Yt, "defaults", { enumerable: true, configurable: true, writable: true, value: Wt });
var Vt = { panLeft: { icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: { panX: -100 } }, panRight: { icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: { panX: 100 } }, panUp: { icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: { panY: -100 } }, panDown: { icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: { panY: 100 } }, zoomIn: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>', action: "zoomIn" }, zoomOut: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "zoomOut" }, toggle1to1: { icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>', action: "toggleZoom" }, toggleZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "toggleZoom" }, iterateZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "iterateZoom" }, rotateCCW: { icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>', action: "rotateCCW" }, rotateCW: { icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>', action: "rotateCW" }, flipX: { icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>', action: "flipX" }, flipY: { icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>', action: "flipY" }, fitX: { icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>', action: "fitX" }, fitY: { icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>', action: "fitY" }, reset: { icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>', action: "reset" }, toggleFS: { icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>', action: "toggleFS" } };
var Zt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Disabled = 2] = "Disabled";
}(Zt || (Zt = {}));
var Ut = { absolute: "auto", display: { left: ["infobar"], middle: [], right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"] }, enabled: "auto", items: { infobar: { tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>' }, download: { tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>' }, prev: { tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>' }, next: { tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>' }, slideshow: { tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, fullscreen: { tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, thumbs: { tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>' }, close: { tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>' } }, parentEl: null };
var Gt = { tabindex: "-1", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
var Kt = "has-toolbar";
var Jt = "fancybox__toolbar";
var Qt = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: Zt.Init }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onReady(t2) {
    var e2;
    if (!t2.carousel) return;
    let i2 = this.option("display"), n2 = this.option("absolute"), s2 = this.option("enabled");
    if ("auto" === s2) {
      const t3 = this.instance.carousel;
      let e3 = 0;
      if (t3) for (const i3 of t3.slides) (i3.panzoom || "image" === i3.type) && e3++;
      e3 || (s2 = false);
    }
    s2 || (i2 = void 0);
    let o2 = 0;
    const a2 = { left: [], middle: [], right: [] };
    if (i2) for (const t3 of ["left", "middle", "right"]) for (const n3 of i2[t3]) {
      const i3 = this.createEl(n3);
      i3 && (null === (e2 = a2[t3]) || void 0 === e2 || e2.push(i3), o2++);
    }
    let r2 = null;
    if (o2 && (r2 = this.createContainer()), r2) {
      for (const [t3, e3] of Object.entries(a2)) {
        const i3 = document.createElement("div");
        P(i3, Jt + "__column is-" + t3);
        for (const t4 of e3) i3.appendChild(t4);
        "auto" !== n2 || "middle" !== t3 || e3.length || (n2 = true), r2.appendChild(i3);
      }
      true === n2 && P(r2, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
    } else this.state = Zt.Disabled;
  }
  onClick(t2) {
    var e2, i2;
    const n2 = this.instance, s2 = n2.getSlide(), o2 = null == s2 ? void 0 : s2.panzoom, a2 = t2.target, r2 = a2 && E(a2) ? a2.dataset : null;
    if (!r2) return;
    if (void 0 !== r2.fancyboxToggleThumbs) return t2.preventDefault(), t2.stopPropagation(), void (null === (e2 = n2.plugins.Thumbs) || void 0 === e2 || e2.toggle());
    if (void 0 !== r2.fancyboxToggleFullscreen) return t2.preventDefault(), t2.stopPropagation(), void this.instance.toggleFullscreen();
    if (void 0 !== r2.fancyboxToggleSlideshow) {
      t2.preventDefault(), t2.stopPropagation();
      const e3 = null === (i2 = n2.carousel) || void 0 === i2 ? void 0 : i2.plugins.Autoplay;
      let s3 = e3.isActive;
      return o2 && "mousemove" === o2.panMode && !s3 && o2.reset(), void (s3 ? e3.stop() : e3.start());
    }
    const l2 = r2.panzoomAction, c2 = r2.panzoomChange;
    if ((c2 || l2) && (t2.preventDefault(), t2.stopPropagation()), c2) {
      let t3 = {};
      try {
        t3 = JSON.parse(c2);
      } catch (t4) {
      }
      o2 && o2.applyChange(t3);
    } else l2 && o2 && o2[l2] && o2[l2]();
  }
  onChange() {
    this.onRefresh();
  }
  onRefresh() {
    if (this.instance.isClosing()) return;
    const t2 = this.container;
    if (!t2) return;
    const e2 = this.instance.getSlide();
    if (!e2 || e2.state !== lt.Ready) return;
    const i2 = e2 && !e2.error && e2.panzoom;
    for (const e3 of t2.querySelectorAll("[data-panzoom-action]")) i2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    let n2 = i2 && i2.canZoomIn(), s2 = i2 && i2.canZoomOut();
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomIn"]')) n2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomOut"]')) s2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      s2 || n2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
      const t3 = e3.querySelector("g");
      t3 && (t3.style.display = n2 ? "" : "none");
    }
  }
  onDone(t2, e2) {
    var i2;
    null === (i2 = e2.panzoom) || void 0 === i2 || i2.on("afterTransform", () => {
      this.instance.isCurrentSlide(e2) && this.onRefresh();
    }), this.instance.isCurrentSlide(e2) && this.onRefresh();
  }
  createContainer() {
    const t2 = this.instance.container;
    if (!t2) return null;
    const e2 = this.option("parentEl") || t2;
    let i2 = e2.querySelector("." + Jt);
    return i2 || (i2 = document.createElement("div"), P(i2, Jt), e2.prepend(i2)), i2.addEventListener("click", this.onClick, { passive: false, capture: true }), t2 && P(t2, Kt), this.container = i2, i2;
  }
  createEl(t2) {
    const e2 = this.instance, i2 = e2.carousel;
    if (!i2) return null;
    if ("toggleFS" === t2) return null;
    if ("fullscreen" === t2 && !ot()) return null;
    let s2 = null;
    const o2 = i2.slides.length || 0;
    let a2 = 0, r2 = 0;
    for (const t3 of i2.slides) (t3.panzoom || "image" === t3.type) && a2++, ("image" === t3.type || t3.downloadSrc) && r2++;
    if (o2 < 2 && ["infobar", "prev", "next"].includes(t2)) return s2;
    if (void 0 !== Vt[t2] && !a2) return null;
    if ("download" === t2 && !r2) return null;
    if ("thumbs" === t2) {
      const t3 = e2.plugins.Thumbs;
      if (!t3 || !t3.isEnabled) return null;
    }
    if ("slideshow" === t2) {
      if (!i2.plugins.Autoplay || o2 < 2) return null;
    }
    if (void 0 !== Vt[t2]) {
      const e3 = Vt[t2];
      s2 = document.createElement("button"), s2.setAttribute("title", this.instance.localize(`{{${t2.toUpperCase()}}}`)), P(s2, "f-button"), e3.action && (s2.dataset.panzoomAction = e3.action), e3.change && (s2.dataset.panzoomChange = JSON.stringify(e3.change)), s2.appendChild(n(this.instance.localize(e3.icon)));
    } else {
      const e3 = (this.option("items") || [])[t2];
      e3 && (s2 = n(this.instance.localize(e3.tpl)), "function" == typeof e3.click && s2.addEventListener("click", (t3) => {
        t3.preventDefault(), t3.stopPropagation(), "function" == typeof e3.click && e3.click.call(this, this, t3);
      }));
    }
    const l2 = null == s2 ? void 0 : s2.querySelector("svg");
    if (l2) for (const [t3, e3] of Object.entries(Gt)) l2.getAttribute(t3) || l2.setAttribute(t3, String(e3));
    return s2;
  }
  removeContainer() {
    const t2 = this.container;
    t2 && t2.remove(), this.container = null, this.state = Zt.Disabled;
    const e2 = this.instance.container;
    e2 && S(e2, Kt);
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.initSlides", t2.onReady), e2.on("done", t2.onDone), e2.on(["reveal", "Carousel.change"], t2.onChange), t2.onReady(t2.instance);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.initSlides", t2.onReady), e2.off("done", t2.onDone), e2.off(["reveal", "Carousel.change"], t2.onChange), t2.removeContainer();
  }
};
Object.defineProperty(Qt, "defaults", { enumerable: true, configurable: true, writable: true, value: Ut });
var te = { Hash: class extends _ {
  onReady() {
    ht = false;
  }
  onChange(t2) {
    ut && clearTimeout(ut);
    const { hash: e2 } = pt(), { hash: i2 } = ft(), n2 = t2.isOpeningSlide(t2.getSlide());
    n2 && (ct = i2 === e2 ? "" : i2), e2 && e2 !== i2 && (ut = setTimeout(() => {
      try {
        if (t2.state === rt.Ready) {
          let t3 = "replaceState";
          n2 && !dt && (t3 = "pushState", dt = true), window.history[t3]({}, document.title, window.location.pathname + window.location.search + e2);
        }
      } catch (t3) {
      }
    }, 300));
  }
  onClose(t2) {
    if (ut && clearTimeout(ut), !ht && dt) return dt = false, ht = false, void window.history.back();
    if (!ht) try {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
    } catch (t3) {
    }
  }
  attach() {
    const t2 = this.instance;
    t2.on("ready", this.onReady), t2.on(["Carousel.ready", "Carousel.change"], this.onChange), t2.on("close", this.onClose);
  }
  detach() {
    const t2 = this.instance;
    t2.off("ready", this.onReady), t2.off(["Carousel.ready", "Carousel.change"], this.onChange), t2.off("close", this.onClose);
  }
  static parseURL() {
    return ft();
  }
  static startFromUrl() {
    gt();
  }
  static destroy() {
    window.removeEventListener("hashchange", vt, false);
  }
}, Html: Lt, Images: wt, Slideshow: Dt, Thumbs: Yt, Toolbar: Qt };
var ee = "with-fancybox";
var ie = "hide-scrollbar";
var ne = "--fancybox-scrollbar-compensate";
var se = "--fancybox-body-margin";
var oe = "aria-hidden";
var ae = "is-using-tab";
var re = "is-animated";
var le = "is-compact";
var ce = "is-loading";
var he = "is-opening";
var de = "has-caption";
var ue = "disabled";
var pe = "tabindex";
var fe = "download";
var ge = "href";
var me = "src";
var ve = (t2) => "string" == typeof t2;
var be = function() {
  var t2 = window.getSelection();
  return !!t2 && "Range" === t2.type;
};
var ye;
var we = null;
var xe = null;
var Ee = 0;
var Se = 0;
var Pe = 0;
var Ce = 0;
var Te = /* @__PURE__ */ new Map();
var Me = 0;
var Oe = class _Oe extends g {
  get isIdle() {
    return this.idle;
  }
  get isCompact() {
    return this.option("compact");
  }
  constructor(t2 = [], e2 = {}, i2 = {}) {
    super(e2), Object.defineProperty(this, "userSlides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "idle", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "idleTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "ignoreFocusChange", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "startedFs", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: rt.Init }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "footer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "lastFocus", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prevMouseMoveEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), ye || (ye = ot()), this.id = e2.id || ++Me, Te.set(this.id, this), this.userSlides = t2, this.userPlugins = i2, queueMicrotask(() => {
      this.init();
    });
  }
  init() {
    if (this.state === rt.Destroy) return;
    this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, _Oe.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), true === this.option("hideScrollbar") && (() => {
      if (!et) return;
      const t3 = document, e2 = t3.body, i2 = t3.documentElement;
      if (e2.classList.contains(ie)) return;
      let n2 = window.innerWidth - i2.getBoundingClientRect().width;
      const s2 = parseFloat(window.getComputedStyle(e2).marginRight);
      n2 < 0 && (n2 = 0), i2.style.setProperty(ne, `${n2}px`), s2 && e2.style.setProperty(se, `${s2}px`), e2.classList.add(ie);
    })(), this.initLayout(), this.scale();
    const t2 = () => {
      this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
        this.container && this.container.setAttribute(oe, "false");
      }, 16);
    };
    this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then(() => {
      this.startedFs = true, t2();
    }).catch(() => t2()) : t2();
  }
  initLayout() {
    var t2, e2;
    const i2 = this.option("parentEl") || document.body, s2 = n(this.localize(this.option("tpl.main") || ""));
    if (s2) {
      if (s2.setAttribute("id", `fancybox-${this.id}`), s2.setAttribute("aria-label", this.localize("{{MODAL}}")), s2.classList.toggle(le, this.isCompact), P(s2, this.option("mainClass") || ""), P(s2, he), this.container = s2, this.footer = s2.querySelector(".fancybox__footer"), i2.appendChild(s2), P(document.documentElement, ee), we && xe || (we = document.createElement("span"), P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t2 = s2.parentElement) || void 0 === t2 || t2.insertBefore(we, s2), null === (e2 = s2.parentElement) || void 0 === e2 || e2.append(xe)), s2.addEventListener("mousedown", (t3) => {
        Ee = t3.pageX, Se = t3.pageY, S(s2, ae);
      }), this.option("closeExisting")) for (const t3 of Te.values()) t3.id !== this.id && t3.close();
      else this.option("animated") && (P(s2, re), setTimeout(() => {
        this.isClosing() || S(s2, re);
      }, 350));
      this.emit("initLayout");
    }
  }
  initCarousel(t2) {
    const i2 = this.container;
    if (!i2) return;
    const n2 = i2.querySelector(".fancybox__carousel");
    if (!n2) return;
    const s2 = this.carousel = new Q(n2, u({}, { slides: t2, transition: "fade", Panzoom: { lockAxis: this.option("dragToClose") ? "xy" : "x", infinite: !!this.option("dragToClose") && "y" }, Dots: false, Navigation: { classes: { container: "fancybox__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" } }, initialPage: this.option("startIndex"), l10n: this.option("l10n") }, this.option("Carousel") || {}));
    s2.on("*", (t3, e2, ...i3) => {
      this.emit(`Carousel.${e2}`, t3, ...i3);
    }), s2.on(["ready", "change"], () => {
      this.manageCaption();
    }), this.on("Carousel.removeSlide", (t3, e2, i3) => {
      this.clearContent(i3), i3.state = void 0;
    }), s2.on("Panzoom.touchStart", () => {
      var t3, e2;
      this.isCompact || this.endIdle(), (null === (t3 = document.activeElement) || void 0 === t3 ? void 0 : t3.closest(".f-thumbs")) && (null === (e2 = this.container) || void 0 === e2 || e2.focus());
    }), s2.on("settle", () => {
      this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
    }), this.option("dragToClose") && (s2.on("Panzoom.afterTransform", (t3, i3) => {
      const n3 = this.getSlide();
      if (n3 && e(n3.el)) return;
      const s3 = this.container;
      if (s3) {
        const t4 = Math.abs(i3.current.f), e2 = t4 < 1 ? "" : Math.max(0.5, Math.min(1, 1 - t4 / i3.contentRect.fitHeight * 1.5));
        s3.style.setProperty("--fancybox-ts", e2 ? "0s" : ""), s3.style.setProperty("--fancybox-opacity", e2 + "");
      }
    }), s2.on("Panzoom.touchEnd", (t3, i3, n3) => {
      var s3;
      const o2 = this.getSlide();
      if (o2 && e(o2.el)) return;
      if (i3.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s3 = document.activeElement) || void 0 === s3 ? void 0 : s3.nodeName)) return;
      const a2 = Math.abs(i3.dragOffset.y);
      "y" === i3.lockedAxis && (a2 >= 200 || a2 >= 50 && i3.dragOffset.time < 300) && (n3 && n3.cancelable && n3.preventDefault(), this.close(n3, "f-throwOut" + (i3.current.f < 0 ? "Up" : "Down")));
    })), s2.on("change", (t3) => {
      var e2;
      let i3 = null === (e2 = this.getSlide()) || void 0 === e2 ? void 0 : e2.triggerEl;
      if (i3) {
        const e3 = new CustomEvent("slideTo", { bubbles: true, cancelable: true, detail: t3.page });
        i3.dispatchEvent(e3);
      }
    }), s2.on(["refresh", "change"], (t3) => {
      const e2 = this.container;
      if (!e2) return;
      for (const i4 of e2.querySelectorAll("[data-fancybox-current-index]")) i4.innerHTML = t3.page + 1;
      for (const i4 of e2.querySelectorAll("[data-fancybox-count]")) i4.innerHTML = t3.pages.length;
      if (!t3.isInfinite) {
        for (const i4 of e2.querySelectorAll("[data-fancybox-next]")) t3.page < t3.pages.length - 1 ? (i4.removeAttribute(ue), i4.removeAttribute(pe)) : (i4.setAttribute(ue, ""), i4.setAttribute(pe, "-1"));
        for (const i4 of e2.querySelectorAll("[data-fancybox-prev]")) t3.page > 0 ? (i4.removeAttribute(ue), i4.removeAttribute(pe)) : (i4.setAttribute(ue, ""), i4.setAttribute(pe, "-1"));
      }
      const i3 = this.getSlide();
      if (!i3) return;
      let n3 = i3.downloadSrc || "";
      n3 || "image" !== i3.type || i3.error || !ve(i3[me]) || (n3 = i3[me]);
      for (const t4 of e2.querySelectorAll("[data-fancybox-download]")) {
        const e3 = i3.downloadFilename;
        n3 ? (t4.removeAttribute(ue), t4.removeAttribute(pe), t4.setAttribute(ge, n3), t4.setAttribute(fe, e3 || n3), t4.setAttribute("target", "_blank")) : (t4.setAttribute(ue, ""), t4.setAttribute(pe, "-1"), t4.removeAttribute(ge), t4.removeAttribute(fe));
      }
    }), this.emit("initCarousel");
  }
  attachEvents() {
    const t2 = this, e2 = t2.container;
    if (!e2) return;
    e2.addEventListener("click", t2.onClick, { passive: false, capture: false }), e2.addEventListener("wheel", t2.onWheel, { passive: false, capture: false }), document.addEventListener("keydown", t2.onKeydown, { passive: false, capture: true }), document.addEventListener("visibilitychange", t2.onVisibilityChange, false), document.addEventListener("mousemove", t2.onMousemove), t2.option("trapFocus") && document.addEventListener("focus", t2.onFocus, true), window.addEventListener("resize", t2.onResize);
    const i2 = window.visualViewport;
    i2 && (i2.addEventListener("scroll", t2.onResize), i2.addEventListener("resize", t2.onResize));
  }
  detachEvents() {
    const t2 = this, e2 = t2.container;
    if (!e2) return;
    document.removeEventListener("keydown", t2.onKeydown, { passive: false, capture: true }), e2.removeEventListener("wheel", t2.onWheel, { passive: false, capture: false }), e2.removeEventListener("click", t2.onClick, { passive: false, capture: false }), document.removeEventListener("mousemove", t2.onMousemove), window.removeEventListener("resize", t2.onResize);
    const i2 = window.visualViewport;
    i2 && (i2.removeEventListener("resize", t2.onResize), i2.removeEventListener("scroll", t2.onResize)), document.removeEventListener("visibilitychange", t2.onVisibilityChange, false), document.removeEventListener("focus", t2.onFocus, true);
  }
  scale() {
    const t2 = this.container;
    if (!t2) return;
    const e2 = window.visualViewport, i2 = Math.max(1, (null == e2 ? void 0 : e2.scale) || 1);
    let n2 = "", s2 = "", o2 = "";
    if (e2 && i2 > 1) {
      let t3 = `${e2.offsetLeft}px`, a2 = `${e2.offsetTop}px`;
      n2 = e2.width * i2 + "px", s2 = e2.height * i2 + "px", o2 = `translate3d(${t3}, ${a2}, 0) scale(${1 / i2})`;
    }
    t2.style.transform = o2, t2.style.width = n2, t2.style.height = s2;
  }
  onClick(t2) {
    var e2;
    const { container: i2, isCompact: n2 } = this;
    if (!i2 || this.isClosing()) return;
    !n2 && this.option("idle") && this.resetIdle();
    const s2 = t2.composedPath()[0];
    if (s2.closest(".fancybox-spinner") || s2.closest("[data-fancybox-close]")) return t2.preventDefault(), void this.close(t2);
    if (s2.closest("[data-fancybox-prev]")) return t2.preventDefault(), void this.prev();
    if (s2.closest("[data-fancybox-next]")) return t2.preventDefault(), void this.next();
    if ("click" === t2.type && 0 === t2.detail) return;
    if (Math.abs(t2.pageX - Ee) > 30 || Math.abs(t2.pageY - Se) > 30) return;
    const o2 = document.activeElement;
    if (be() && o2 && i2.contains(o2)) return;
    if (n2 && "image" === (null === (e2 = this.getSlide()) || void 0 === e2 ? void 0 : e2.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
      this.toggleIdle(), this.clickTimer = null;
    }, 350));
    if (this.emit("click", t2), t2.defaultPrevented) return;
    let a2 = false;
    if (s2.closest(".fancybox__content")) {
      if (o2) {
        if (o2.closest("[contenteditable]")) return;
        s2.matches(nt) || o2.blur();
      }
      if (be()) return;
      a2 = this.option("contentClick");
    } else s2.closest(".fancybox__carousel") && !s2.matches(nt) && (a2 = this.option("backdropClick"));
    "close" === a2 ? (t2.preventDefault(), this.close(t2)) : "next" === a2 ? (t2.preventDefault(), this.next()) : "prev" === a2 && (t2.preventDefault(), this.prev());
  }
  onWheel(t2) {
    const e2 = t2.target;
    let n2 = this.option("wheel", t2);
    e2.closest(".fancybox__thumbs") && (n2 = "slide");
    const s2 = "slide" === n2, o2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(function(t3, e3) {
      return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
    }), a2 = Math.max(-1, Math.min(1, o2)), r2 = Date.now();
    this.pwt && r2 - this.pwt < 300 ? s2 && t2.preventDefault() : (this.pwt = r2, this.emit("wheel", t2, a2), t2.defaultPrevented || ("close" === n2 ? (t2.preventDefault(), this.close(t2)) : "slide" === n2 && (i(e2) || (t2.preventDefault(), this[a2 > 0 ? "prev" : "next"]()))));
  }
  onScroll() {
    window.scrollTo(Pe, Ce);
  }
  onKeydown(t2) {
    if (!this.isTopmost()) return;
    this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
    const e2 = t2.key, i2 = this.option("keyboard");
    if (!i2) return;
    const n2 = t2.composedPath()[0], s2 = document.activeElement && document.activeElement.classList, o2 = s2 && s2.contains("f-button") || n2.dataset.carouselPage || n2.dataset.carouselIndex;
    if ("Escape" !== e2 && !o2 && E(n2)) {
      if (n2.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n2.nodeName)) return;
    }
    if ("Tab" === t2.key ? P(this.container, ae) : S(this.container, ae), t2.ctrlKey || t2.altKey || t2.shiftKey) return;
    this.emit("keydown", e2, t2);
    const a2 = i2[e2];
    a2 && "function" == typeof this[a2] && (t2.preventDefault(), this[a2]());
  }
  onResize() {
    const t2 = this.container;
    if (!t2) return;
    const e2 = this.isCompact;
    t2.classList.toggle(le, e2), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
  }
  onFocus(t2) {
    this.isTopmost() && this.checkFocus(t2);
  }
  onMousemove(t2) {
    this.prevMouseMoveEvent = t2, !this.isCompact && this.option("idle") && this.resetIdle();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
  }
  manageCloseBtn(t2) {
    const e2 = this.optionFor(t2, "closeButton") || false;
    if ("auto" === e2) {
      const t3 = this.plugins.Toolbar;
      if (t3 && t3.state === Zt.Ready) return;
    }
    if (!e2) return;
    if (!t2.contentEl || t2.closeBtnEl) return;
    const i2 = this.option("tpl.closeButton");
    if (i2) {
      const e3 = n(this.localize(i2));
      t2.closeBtnEl = t2.contentEl.appendChild(e3), t2.el && P(t2.el, "has-close-btn");
    }
  }
  manageCaption(t2 = void 0) {
    var e2, i2;
    const n2 = "fancybox__caption", s2 = this.container;
    if (!s2) return;
    S(s2, de);
    const o2 = this.isCompact || this.option("commonCaption"), a2 = !o2;
    if (this.caption && this.stop(this.caption), a2 && this.caption && (this.caption.remove(), this.caption = null), o2 && !this.caption) for (const t3 of (null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.slides) || []) t3.captionEl && (t3.captionEl.remove(), t3.captionEl = void 0, S(t3.el, de), null === (i2 = t3.el) || void 0 === i2 || i2.removeAttribute("aria-labelledby"));
    if (t2 || (t2 = this.getSlide()), !t2 || o2 && !this.isCurrentSlide(t2)) return;
    const r2 = t2.el;
    let l2 = this.optionFor(t2, "caption", "");
    if (!l2) return void (o2 && this.caption && this.animate(this.caption, "f-fadeOut", () => {
      this.caption && (this.caption.innerHTML = "");
    }));
    let c2 = null;
    if (a2) {
      if (c2 = t2.captionEl || null, r2 && !c2) {
        const e3 = n2 + `_${this.id}_${t2.index}`;
        c2 = document.createElement("div"), P(c2, n2), c2.setAttribute("id", e3), t2.captionEl = r2.appendChild(c2), P(r2, de), r2.setAttribute("aria-labelledby", e3);
      }
    } else {
      if (c2 = this.caption, c2 || (c2 = s2.querySelector("." + n2)), !c2) {
        c2 = document.createElement("div"), c2.dataset.fancyboxCaption = "", P(c2, n2);
        (this.footer || s2).prepend(c2);
      }
      P(s2, de), this.caption = c2;
    }
    c2 && (c2.innerHTML = "", ve(l2) || "number" == typeof l2 ? c2.innerHTML = l2 + "" : l2 instanceof HTMLElement && c2.appendChild(l2));
  }
  checkFocus(t2) {
    this.focus(t2);
  }
  focus(t2) {
    var e2;
    if (this.ignoreFocusChange) return;
    const i2 = document.activeElement || null, n2 = (null == t2 ? void 0 : t2.target) || null, s2 = this.container, o2 = null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.viewport;
    if (!s2 || !o2) return;
    if (!t2 && i2 && s2.contains(i2)) return;
    const a2 = this.getSlide(), r2 = a2 && a2.state === lt.Ready ? a2.el : null;
    if (!r2 || r2.contains(i2) || s2 === i2) return;
    t2 && t2.cancelable && t2.preventDefault(), this.ignoreFocusChange = true;
    const l2 = Array.from(s2.querySelectorAll(nt));
    let c2 = [], h2 = null;
    for (let t3 of l2) {
      const e3 = !t3.offsetParent || !!t3.closest('[aria-hidden="true"]'), i3 = r2 && r2.contains(t3), n3 = !o2.contains(t3);
      if (t3 === s2 || (i3 || n3) && !e3) {
        c2.push(t3);
        const e4 = t3.dataset.origTabindex;
        void 0 !== e4 && e4 && (t3.tabIndex = parseFloat(e4)), t3.removeAttribute("data-orig-tabindex"), !t3.hasAttribute("autoFocus") && h2 || (h2 = t3);
      } else {
        const e4 = void 0 === t3.dataset.origTabindex ? t3.getAttribute("tabindex") || "" : t3.dataset.origTabindex;
        e4 && (t3.dataset.origTabindex = e4), t3.tabIndex = -1;
      }
    }
    let d2 = null;
    t2 ? (!n2 || c2.indexOf(n2) < 0) && (d2 = h2 || s2, c2.length && (i2 === xe ? d2 = c2[0] : this.lastFocus !== s2 && i2 !== we || (d2 = c2[c2.length - 1]))) : d2 = a2 && "image" === a2.type ? s2 : h2 || s2, d2 && st(d2), this.lastFocus = document.activeElement, this.ignoreFocusChange = false;
  }
  next() {
    const t2 = this.carousel;
    t2 && t2.pages.length > 1 && t2.slideNext();
  }
  prev() {
    const t2 = this.carousel;
    t2 && t2.pages.length > 1 && t2.slidePrev();
  }
  jumpTo(...t2) {
    this.carousel && this.carousel.slideTo(...t2);
  }
  isTopmost() {
    var t2;
    return (null === (t2 = _Oe.getInstance()) || void 0 === t2 ? void 0 : t2.id) == this.id;
  }
  animate(t2 = null, e2 = "", i2) {
    if (!t2 || !e2) return void (i2 && i2());
    this.stop(t2);
    const n2 = (s2) => {
      s2.target === t2 && t2.dataset.animationName && (t2.removeEventListener("animationend", n2), delete t2.dataset.animationName, i2 && i2(), S(t2, e2));
    };
    t2.dataset.animationName = e2, t2.addEventListener("animationend", n2), P(t2, e2);
  }
  stop(t2) {
    t2 && t2.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: t2 }));
  }
  setContent(t2, e2 = "", i2 = true) {
    if (this.isClosing()) return;
    const s2 = t2.el;
    if (!s2) return;
    let o2 = null;
    if (E(e2) ? o2 = e2 : (o2 = n(e2 + ""), E(o2) || (o2 = document.createElement("div"), o2.innerHTML = e2 + "")), ["img", "picture", "iframe", "video", "audio"].includes(o2.nodeName.toLowerCase())) {
      const t3 = document.createElement("div");
      t3.appendChild(o2), o2 = t3;
    }
    E(o2) && t2.filter && !t2.error && (o2 = o2.querySelector(t2.filter)), o2 && E(o2) ? (P(o2, "fancybox__content"), t2.id && o2.setAttribute("id", t2.id), s2.classList.add(`has-${t2.error ? "error" : t2.type || "unknown"}`), s2.prepend(o2), "none" === o2.style.display && (o2.style.display = ""), "none" === getComputedStyle(o2).getPropertyValue("display") && (o2.style.display = t2.display || this.option("defaultDisplay") || "flex"), t2.contentEl = o2, i2 && this.revealContent(t2), this.manageCloseBtn(t2), this.manageCaption(t2)) : this.setError(t2, "{{ELEMENT_NOT_FOUND}}");
  }
  revealContent(t2, e2) {
    const i2 = t2.el, n2 = t2.contentEl;
    i2 && n2 && (this.emit("reveal", t2), this.hideLoading(t2), t2.state = lt.Opening, (e2 = this.isOpeningSlide(t2) ? void 0 === e2 ? this.optionFor(t2, "showClass") : e2 : "f-fadeIn") ? this.animate(n2, e2, () => {
      this.done(t2);
    }) : this.done(t2));
  }
  done(t2) {
    this.isClosing() || (t2.state = lt.Ready, this.emit("done", t2), P(t2.el, "is-done"), this.isCurrentSlide(t2) && this.option("autoFocus") && queueMicrotask(() => {
      var e2;
      null === (e2 = t2.panzoom) || void 0 === e2 || e2.updateControls(), this.option("autoFocus") && this.focus();
    }), this.isOpeningSlide(t2) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
  }
  isCurrentSlide(t2) {
    const e2 = this.getSlide();
    return !(!t2 || !e2) && e2.index === t2.index;
  }
  isOpeningSlide(t2) {
    var e2, i2;
    return null === (null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.prevPage) && t2 && t2.index === (null === (i2 = this.getSlide()) || void 0 === i2 ? void 0 : i2.index);
  }
  showLoading(t2) {
    t2.state = lt.Loading;
    const e2 = t2.el;
    if (!e2) return;
    P(e2, ce), this.emit("loading", t2), t2.spinnerEl || setTimeout(() => {
      if (!this.isClosing() && !t2.spinnerEl && t2.state === lt.Loading) {
        let i2 = n(x);
        P(i2, "fancybox-spinner"), t2.spinnerEl = i2, e2.prepend(i2), this.animate(i2, "f-fadeIn");
      }
    }, 250);
  }
  hideLoading(t2) {
    const e2 = t2.el;
    if (!e2) return;
    const i2 = t2.spinnerEl;
    this.isClosing() ? null == i2 || i2.remove() : (S(e2, ce), i2 && this.animate(i2, "f-fadeOut", () => {
      i2.remove();
    }), t2.state === lt.Loading && (this.emit("loaded", t2), t2.state = lt.Ready));
  }
  setError(t2, e2) {
    if (this.isClosing()) return;
    const i2 = new Event("error", { bubbles: true, cancelable: true });
    if (this.emit("error", i2, t2), i2.defaultPrevented) return;
    t2.error = e2, this.hideLoading(t2), this.clearContent(t2);
    const n2 = document.createElement("div");
    n2.classList.add("fancybox-error"), n2.innerHTML = this.localize(e2 || "<p>{{ERROR}}</p>"), this.setContent(t2, n2);
  }
  clearContent(t2) {
    if (void 0 === t2.state) return;
    this.emit("clearContent", t2), t2.contentEl && (t2.contentEl.remove(), t2.contentEl = void 0);
    const e2 = t2.el;
    e2 && (S(e2, "has-error"), S(e2, "has-unknown"), S(e2, `has-${t2.type || "unknown"}`)), t2.closeBtnEl && t2.closeBtnEl.remove(), t2.closeBtnEl = void 0, t2.captionEl && t2.captionEl.remove(), t2.captionEl = void 0, t2.spinnerEl && t2.spinnerEl.remove(), t2.spinnerEl = void 0;
  }
  getSlide() {
    var t2;
    const e2 = this.carousel;
    return (null === (t2 = null == e2 ? void 0 : e2.pages[null == e2 ? void 0 : e2.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0;
  }
  close(t2, e2) {
    if (this.isClosing()) return;
    const i2 = new Event("shouldClose", { bubbles: true, cancelable: true });
    if (this.emit("shouldClose", i2, t2), i2.defaultPrevented) return;
    t2 && t2.cancelable && (t2.preventDefault(), t2.stopPropagation());
    const n2 = () => {
      this.proceedClose(t2, e2);
    };
    this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then(() => n2()) : n2();
  }
  clearIdle() {
    this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
  }
  setIdle(t2 = false) {
    const e2 = () => {
      this.clearIdle(), this.idle = true, P(this.container, "is-idle"), this.emit("setIdle");
    };
    if (this.clearIdle(), !this.isClosing()) if (t2) e2();
    else {
      const t3 = this.option("idle");
      t3 && (this.idleTimer = setTimeout(e2, t3));
    }
  }
  endIdle() {
    this.clearIdle(), this.idle && !this.isClosing() && (this.idle = false, S(this.container, "is-idle"), this.emit("endIdle"));
  }
  resetIdle() {
    this.endIdle(), this.setIdle();
  }
  toggleIdle() {
    this.idle ? this.endIdle() : this.setIdle(true);
  }
  toggleFullscreen() {
    ye && (ye.isFullscreen() ? ye.exit() : ye.request().then(() => {
      this.startedFs = true;
    }));
  }
  isClosing() {
    return [rt.Closing, rt.CustomClosing, rt.Destroy].includes(this.state);
  }
  proceedClose(t2, e2) {
    var i2, n2;
    this.state = rt.Closing, this.clearIdle(), this.detachEvents();
    const s2 = this.container, o2 = this.carousel, a2 = this.getSlide(), r2 = a2 && this.option("placeFocusBack") ? a2.triggerEl || this.option("triggerEl") : null;
    if (r2 && (tt(r2) ? st(r2) : r2.focus()), s2 && (S(s2, he), P(s2, "is-closing"), s2.setAttribute(oe, "true"), this.option("animated") && P(s2, re), s2.style.pointerEvents = "none"), o2) {
      o2.clearTransitions(), null === (i2 = o2.panzoom) || void 0 === i2 || i2.destroy(), null === (n2 = o2.plugins.Navigation) || void 0 === n2 || n2.detach();
      for (const t3 of o2.slides) {
        t3.state = lt.Closing, this.hideLoading(t3);
        const e3 = t3.contentEl;
        e3 && this.stop(e3);
        const i3 = null == t3 ? void 0 : t3.panzoom;
        i3 && (i3.stop(), i3.detachEvents(), i3.detachObserver()), this.isCurrentSlide(t3) || o2.emit("removeSlide", t3);
      }
    }
    Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), this.emit("close", t2), this.state !== rt.CustomClosing ? (void 0 === e2 && a2 && (e2 = this.optionFor(a2, "hideClass")), e2 && a2 ? (this.animate(a2.contentEl, e2, () => {
      o2 && o2.emit("removeSlide", a2);
    }), setTimeout(() => {
      this.destroy();
    }, 500)) : this.destroy()) : setTimeout(() => {
      this.destroy();
    }, 500);
  }
  destroy() {
    var t2;
    if (this.state === rt.Destroy) return;
    window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t2 = this.carousel) || void 0 === t2 || t2.destroy();
    const e2 = this.container;
    e2 && e2.remove(), Te.delete(this.id);
    const i2 = _Oe.getInstance();
    i2 ? i2.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), S(document.documentElement, ee), (() => {
      if (!et) return;
      const t3 = document, e3 = t3.body;
      e3.classList.remove(ie), e3.style.setProperty(se, ""), t3.documentElement.style.setProperty(ne, "");
    })(), this.emit("destroy"));
  }
  static bind(t2, e2, i2) {
    if (!et) return;
    let n2, s2 = "", o2 = {};
    if (void 0 === t2 ? n2 = document.body : ve(t2) ? (n2 = document.body, s2 = t2, "object" == typeof e2 && (o2 = e2 || {})) : (n2 = t2, ve(e2) && (s2 = e2), "object" == typeof i2 && (o2 = i2 || {})), !n2 || !E(n2)) return;
    s2 = s2 || "[data-fancybox]";
    const a2 = _Oe.openers.get(n2) || /* @__PURE__ */ new Map();
    a2.set(s2, o2), _Oe.openers.set(n2, a2), 1 === a2.size && n2.addEventListener("click", _Oe.fromEvent);
  }
  static unbind(t2, e2) {
    let i2, n2 = "";
    if (ve(t2) ? (i2 = document.body, n2 = t2) : (i2 = t2, ve(e2) && (n2 = e2)), !i2) return;
    const s2 = _Oe.openers.get(i2);
    s2 && n2 && s2.delete(n2), n2 && s2 || (_Oe.openers.delete(i2), i2.removeEventListener("click", _Oe.fromEvent));
  }
  static destroy() {
    let t2;
    for (; t2 = _Oe.getInstance(); ) t2.destroy();
    for (const t3 of _Oe.openers.keys()) t3.removeEventListener("click", _Oe.fromEvent);
    _Oe.openers = /* @__PURE__ */ new Map();
  }
  static fromEvent(t2) {
    if (t2.defaultPrevented) return;
    if (t2.button && 0 !== t2.button) return;
    if (t2.ctrlKey || t2.metaKey || t2.shiftKey) return;
    let e2 = t2.composedPath()[0];
    const i2 = e2.closest("[data-fancybox-trigger]");
    if (i2) {
      const t3 = i2.dataset.fancyboxTrigger || "", n3 = document.querySelectorAll(`[data-fancybox="${t3}"]`), s3 = parseInt(i2.dataset.fancyboxIndex || "", 10) || 0;
      e2 = n3[s3] || e2;
    }
    if (!(e2 && e2 instanceof Element)) return;
    let n2, s2, o2, a2;
    if ([..._Oe.openers].reverse().find(([t3, i3]) => !(!t3.contains(e2) || ![...i3].reverse().find(([i4, r3]) => {
      let l3 = e2.closest(i4);
      return !!l3 && (n2 = t3, s2 = i4, o2 = l3, a2 = r3, true);
    }))), !n2 || !s2 || !o2) return;
    a2 = a2 || {}, t2.preventDefault(), e2 = o2;
    let r2 = [], l2 = u({}, at, a2);
    l2.event = t2, l2.triggerEl = e2, l2.delegate = i2;
    const c2 = l2.groupAll, h2 = l2.groupAttr, d2 = h2 && e2 ? e2.getAttribute(`${h2}`) : "";
    if ((!e2 || d2 || c2) && (r2 = [].slice.call(n2.querySelectorAll(s2))), e2 && !c2 && (r2 = d2 ? r2.filter((t3) => t3.getAttribute(`${h2}`) === d2) : [e2]), !r2.length) return;
    const p2 = _Oe.getInstance();
    return p2 && p2.options.triggerEl && r2.indexOf(p2.options.triggerEl) > -1 ? void 0 : (e2 && (l2.startIndex = r2.indexOf(e2)), _Oe.fromNodes(r2, l2));
  }
  static fromSelector(t2, e2, i2) {
    let n2 = null, s2 = "", o2 = {};
    if (ve(t2) ? (n2 = document.body, s2 = t2, "object" == typeof e2 && (o2 = e2 || {})) : t2 instanceof HTMLElement && ve(e2) && (n2 = t2, s2 = e2, "object" == typeof i2 && (o2 = i2 || {})), !n2 || !s2) return false;
    const a2 = _Oe.openers.get(n2);
    return !!a2 && (o2 = u({}, a2.get(s2) || {}, o2), !!o2 && _Oe.fromNodes(Array.from(n2.querySelectorAll(s2)), o2));
  }
  static fromNodes(t2, e2) {
    e2 = u({}, at, e2 || {});
    const i2 = [];
    for (const n2 of t2) {
      const t3 = n2.dataset || {}, s2 = t3[me] || n2.getAttribute(ge) || n2.getAttribute("currentSrc") || n2.getAttribute(me) || void 0;
      let o2;
      const a2 = e2.delegate;
      let r2;
      a2 && i2.length === e2.startIndex && (o2 = a2 instanceof HTMLImageElement ? a2 : a2.querySelector("img:not([aria-hidden])")), o2 || (o2 = n2 instanceof HTMLImageElement ? n2 : n2.querySelector("img:not([aria-hidden])")), o2 && (r2 = o2.currentSrc || o2[me] || void 0, !r2 && o2.dataset && (r2 = o2.dataset.lazySrc || o2.dataset[me] || void 0));
      const l2 = { src: s2, triggerEl: n2, thumbEl: o2, thumbElSrc: r2, thumbSrc: r2 };
      for (const e3 in t3) {
        let i3 = t3[e3] + "";
        i3 = "false" !== i3 && ("true" === i3 || i3), l2[e3] = i3;
      }
      i2.push(l2);
    }
    return new _Oe(i2, e2);
  }
  static getInstance(t2) {
    if (t2) return Te.get(t2);
    return Array.from(Te.values()).reverse().find((t3) => !t3.isClosing() && t3) || null;
  }
  static getSlide() {
    var t2;
    return (null === (t2 = _Oe.getInstance()) || void 0 === t2 ? void 0 : t2.getSlide()) || null;
  }
  static show(t2 = [], e2 = {}) {
    return new _Oe(t2, e2);
  }
  static next() {
    const t2 = _Oe.getInstance();
    t2 && t2.next();
  }
  static prev() {
    const t2 = _Oe.getInstance();
    t2 && t2.prev();
  }
  static close(t2 = true, ...e2) {
    if (t2) for (const t3 of Te.values()) t3.close(...e2);
    else {
      const t3 = _Oe.getInstance();
      t3 && t3.close(...e2);
    }
  }
};
Object.defineProperty(Oe, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(Oe, "defaults", { enumerable: true, configurable: true, writable: true, value: at }), Object.defineProperty(Oe, "Plugins", { enumerable: true, configurable: true, writable: true, value: te }), Object.defineProperty(Oe, "openers", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() });

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/now.js
var now = function() {
  return root_default.Date.now();
};
var now_default = now;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now_default());
  }
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

// node_modules/lodash-es/throttle.js
var FUNC_ERROR_TEXT2 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  if (isObject_default(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce_default(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_default = throttle;

// node_modules/simplebar-core/dist/index.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function getElementWindow$1(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }
  return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }
  return element.ownerDocument;
}
var getOptions$1 = function(obj) {
  var initialObj = {};
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(_2, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, initialObj);
  return options;
};
function addClasses$1(el, classes) {
  var _a2;
  if (!el)
    return;
  (_a2 = el.classList).add.apply(_a2, classes.split(" "));
}
function removeClasses$1(el, classes) {
  if (!el)
    return;
  classes.split(" ").forEach(function(className) {
    el.classList.remove(className);
  });
}
function classNamesToQuery$1(classNames) {
  return ".".concat(classNames.split(" ").join("."));
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var helpers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: addClasses$1,
  canUseDOM,
  classNamesToQuery: classNamesToQuery$1,
  getElementDocument: getElementDocument$1,
  getElementWindow: getElementWindow$1,
  getOptions: getOptions$1,
  removeClasses: removeClasses$1
});
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM) {
  window.addEventListener("resize", function() {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}
function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === "undefined") {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }
    var body = document.body;
    var box = document.createElement("div");
    box.classList.add("simplebar-hide-scrollbar");
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }
  return cachedScrollbarWidth;
}
var getElementWindow = getElementWindow$1;
var getElementDocument = getElementDocument$1;
var getOptions = getOptions$1;
var addClasses = addClasses$1;
var removeClasses = removeClasses$1;
var classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = (
  /** @class */
  function() {
    function SimpleBarCore2(element, options) {
      if (options === void 0) {
        options = {};
      }
      var _this = this;
      this.removePreventClickId = null;
      this.minScrollbarWidth = 20;
      this.stopScrollDelay = 175;
      this.isScrolling = false;
      this.isMouseEntering = false;
      this.isDragging = false;
      this.scrollXTicking = false;
      this.scrollYTicking = false;
      this.wrapperEl = null;
      this.contentWrapperEl = null;
      this.contentEl = null;
      this.offsetEl = null;
      this.maskEl = null;
      this.placeholderEl = null;
      this.heightAutoObserverWrapperEl = null;
      this.heightAutoObserverEl = null;
      this.rtlHelpers = null;
      this.scrollbarWidth = 0;
      this.resizeObserver = null;
      this.mutationObserver = null;
      this.elStyles = null;
      this.isRtl = null;
      this.mouseX = 0;
      this.mouseY = 0;
      this.onMouseMove = function() {
      };
      this.onWindowResize = function() {
      };
      this.onStopScrolling = function() {
      };
      this.onMouseEntered = function() {
      };
      this.onScroll = function() {
        var elWindow = getElementWindow(_this.el);
        if (!_this.scrollXTicking) {
          elWindow.requestAnimationFrame(_this.scrollX);
          _this.scrollXTicking = true;
        }
        if (!_this.scrollYTicking) {
          elWindow.requestAnimationFrame(_this.scrollY);
          _this.scrollYTicking = true;
        }
        if (!_this.isScrolling) {
          _this.isScrolling = true;
          addClasses(_this.el, _this.classNames.scrolling);
        }
        _this.showScrollbar("x");
        _this.showScrollbar("y");
        _this.onStopScrolling();
      };
      this.scrollX = function() {
        if (_this.axis.x.isOverflowing) {
          _this.positionScrollbar("x");
        }
        _this.scrollXTicking = false;
      };
      this.scrollY = function() {
        if (_this.axis.y.isOverflowing) {
          _this.positionScrollbar("y");
        }
        _this.scrollYTicking = false;
      };
      this._onStopScrolling = function() {
        removeClasses(_this.el, _this.classNames.scrolling);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isScrolling = false;
      };
      this.onMouseEnter = function() {
        if (!_this.isMouseEntering) {
          addClasses(_this.el, _this.classNames.mouseEntered);
          _this.showScrollbar("x");
          _this.showScrollbar("y");
          _this.isMouseEntering = true;
        }
        _this.onMouseEntered();
      };
      this._onMouseEntered = function() {
        removeClasses(_this.el, _this.classNames.mouseEntered);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isMouseEntering = false;
      };
      this._onMouseMove = function(e2) {
        _this.mouseX = e2.clientX;
        _this.mouseY = e2.clientY;
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseMoveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseMoveForAxis("y");
        }
      };
      this.onMouseLeave = function() {
        _this.onMouseMove.cancel();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseLeaveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseLeaveForAxis("y");
        }
        _this.mouseX = -1;
        _this.mouseY = -1;
      };
      this._onWindowResize = function() {
        _this.scrollbarWidth = _this.getScrollbarWidth();
        _this.hideNativeScrollbar();
      };
      this.onPointerEvent = function(e2) {
        if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el)
          return;
        var isWithinTrackXBounds, isWithinTrackYBounds;
        _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
        _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
        }
        if (isWithinTrackXBounds || isWithinTrackYBounds) {
          e2.stopPropagation();
          if (e2.type === "pointerdown" && e2.pointerType !== "touch") {
            if (isWithinTrackXBounds) {
              _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                _this.onDragStart(e2, "x");
              } else {
                _this.onTrackClick(e2, "x");
              }
            }
            if (isWithinTrackYBounds) {
              _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                _this.onDragStart(e2, "y");
              } else {
                _this.onTrackClick(e2, "y");
              }
            }
          }
        }
      };
      this.drag = function(e2) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!_this.draggedAxis || !_this.contentWrapperEl)
          return;
        var eventOffset;
        var track = _this.axis[_this.draggedAxis].track;
        var trackSize = (_b = (_a2 = track.rect) === null || _a2 === void 0 ? void 0 : _a2[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
        var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
        var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
        e2.preventDefault();
        e2.stopPropagation();
        if (_this.draggedAxis === "y") {
          eventOffset = e2.pageY;
        } else {
          eventOffset = e2.pageX;
        }
        var dragPos = eventOffset - ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
        dragPos = _this.draggedAxis === "x" && _this.isRtl ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
        var dragPerc = dragPos / (trackSize - scrollbar.size);
        var scrollPos = dragPerc * (contentSize - hostSize);
        if (_this.draggedAxis === "x" && _this.isRtl) {
          scrollPos = ((_l = SimpleBarCore2.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
        }
        _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
      };
      this.onEndDrag = function(e2) {
        _this.isDragging = false;
        var elDocument = getElementDocument(_this.el);
        var elWindow = getElementWindow(_this.el);
        e2.preventDefault();
        e2.stopPropagation();
        removeClasses(_this.el, _this.classNames.dragging);
        _this.onStopScrolling();
        elDocument.removeEventListener("mousemove", _this.drag, true);
        elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
        _this.removePreventClickId = elWindow.setTimeout(function() {
          elDocument.removeEventListener("click", _this.preventClick, true);
          elDocument.removeEventListener("dblclick", _this.preventClick, true);
          _this.removePreventClickId = null;
        });
      };
      this.preventClick = function(e2) {
        e2.preventDefault();
        e2.stopPropagation();
      };
      this.el = element;
      this.options = __assign(__assign({}, SimpleBarCore2.defaultOptions), options);
      this.classNames = __assign(__assign({}, SimpleBarCore2.defaultOptions.classNames), options.classNames);
      this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        }
      };
      if (typeof this.el !== "object" || !this.el.nodeName) {
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      }
      this.onMouseMove = throttle_default(this._onMouseMove, 64);
      this.onWindowResize = debounce_default(this._onWindowResize, 64, { leading: true });
      this.onStopScrolling = debounce_default(this._onStopScrolling, this.stopScrollDelay);
      this.onMouseEntered = debounce_default(this._onMouseEntered, this.stopScrollDelay);
      this.init();
    }
    SimpleBarCore2.getRtlHelpers = function() {
      if (SimpleBarCore2.rtlHelpers) {
        return SimpleBarCore2.rtlHelpers;
      }
      var dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var scrollbarDummyEl = dummyDiv.firstElementChild;
      var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
      if (!dummyChild)
        return null;
      document.body.appendChild(scrollbarDummyEl);
      scrollbarDummyEl.scrollLeft = 0;
      var dummyContainerOffset = SimpleBarCore2.getOffset(scrollbarDummyEl);
      var dummyChildOffset = SimpleBarCore2.getOffset(dummyChild);
      scrollbarDummyEl.scrollLeft = -999;
      var dummyChildOffsetAfterScroll = SimpleBarCore2.getOffset(dummyChild);
      document.body.removeChild(scrollbarDummyEl);
      SimpleBarCore2.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
      };
      return SimpleBarCore2.rtlHelpers;
    };
    SimpleBarCore2.prototype.getScrollbarWidth = function() {
      try {
        if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
          return 0;
        } else {
          return scrollbarWidth();
        }
      } catch (e2) {
        return scrollbarWidth();
      }
    };
    SimpleBarCore2.getOffset = function(el) {
      var rect = el.getBoundingClientRect();
      var elDocument = getElementDocument(el);
      var elWindow = getElementWindow(el);
      return {
        top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
        left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
      };
    };
    SimpleBarCore2.prototype.init = function() {
      if (canUseDOM) {
        this.initDOM();
        this.rtlHelpers = SimpleBarCore2.getRtlHelpers();
        this.scrollbarWidth = this.getScrollbarWidth();
        this.recalculate();
        this.initListeners();
      }
    };
    SimpleBarCore2.prototype.initDOM = function() {
      var _a2, _b;
      this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
      this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
      this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
      this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
      this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
      this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
      this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
      this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
      this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
      this.axis.x.scrollbar.el = ((_a2 = this.axis.x.track.el) === null || _a2 === void 0 ? void 0 : _a2.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      this.axis.y.scrollbar.el = ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      if (!this.options.autoHide) {
        addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
        addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
      }
    };
    SimpleBarCore2.prototype.initListeners = function() {
      var _this = this;
      var _a2;
      var elWindow = getElementWindow(this.el);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("pointerdown", this.onPointerEvent, true);
      this.el.addEventListener("mousemove", this.onMouseMove);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
      (_a2 = this.contentWrapperEl) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("scroll", this.onScroll);
      elWindow.addEventListener("resize", this.onWindowResize);
      if (!this.contentEl)
        return;
      if (window.ResizeObserver) {
        var resizeObserverStarted_1 = false;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
        this.resizeObserver = new resizeObserver(function() {
          if (!resizeObserverStarted_1)
            return;
          elWindow.requestAnimationFrame(function() {
            _this.recalculate();
          });
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function() {
          resizeObserverStarted_1 = true;
        });
      }
      this.mutationObserver = new elWindow.MutationObserver(function() {
        elWindow.requestAnimationFrame(function() {
          _this.recalculate();
        });
      });
      this.mutationObserver.observe(this.contentEl, {
        childList: true,
        subtree: true,
        characterData: true
      });
    };
    SimpleBarCore2.prototype.recalculate = function() {
      if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)
        return;
      var elWindow = getElementWindow(this.el);
      this.elStyles = elWindow.getComputedStyle(this.el);
      this.isRtl = this.elStyles.direction === "rtl";
      var contentElOffsetWidth = this.contentEl.offsetWidth;
      var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
      var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
      var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
      var elOverflowX = this.elStyles.overflowX;
      var elOverflowY = this.elStyles.overflowY;
      this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
      this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
      var contentElScrollHeight = this.contentEl.scrollHeight;
      var contentElScrollWidth = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
      this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
      this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
      var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
      this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
      this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
      this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
      this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
      this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
      this.hideNativeScrollbar();
      var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
      var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
      this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
      this.axis.x.scrollbar.size = this.getScrollbarSize("x");
      this.axis.y.scrollbar.size = this.getScrollbarSize("y");
      if (this.axis.x.scrollbar.el)
        this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
      if (this.axis.y.scrollbar.el)
        this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
      this.positionScrollbar("x");
      this.positionScrollbar("y");
      this.toggleTrackVisibility("x");
      this.toggleTrackVisibility("y");
    };
    SimpleBarCore2.prototype.getScrollbarSize = function(axis) {
      var _a2, _b;
      if (axis === void 0) {
        axis = "y";
      }
      if (!this.axis[axis].isOverflowing || !this.contentEl) {
        return 0;
      }
      var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
      var trackSize = (_b = (_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
      var scrollbarRatio = trackSize / contentSize;
      var scrollbarSize;
      scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
      if (this.options.scrollbarMaxSize) {
        scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
      }
      return scrollbarSize;
    };
    SimpleBarCore2.prototype.positionScrollbar = function(axis) {
      var _a2, _b, _c;
      if (axis === void 0) {
        axis = "y";
      }
      var scrollbar = this.axis[axis].scrollbar;
      if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) {
        return;
      }
      var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
      var trackSize = ((_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) || 0;
      var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
      var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      scrollOffset = axis === "x" && this.isRtl && ((_b = SimpleBarCore2.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
      if (axis === "x" && this.isRtl) {
        scrollOffset = ((_c = SimpleBarCore2.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative) ? scrollOffset : -scrollOffset;
      }
      var scrollPourcent = scrollOffset / (contentSize - hostSize);
      var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
      handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
      scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore2.prototype.toggleTrackVisibility = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var track = this.axis[axis].track.el;
      var scrollbar = this.axis[axis].scrollbar.el;
      if (!track || !scrollbar || !this.contentWrapperEl)
        return;
      if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
        track.style.visibility = "visible";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
      } else {
        track.style.visibility = "hidden";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
      }
      if (this.axis[axis].isOverflowing) {
        scrollbar.style.display = "block";
      } else {
        scrollbar.style.display = "none";
      }
    };
    SimpleBarCore2.prototype.showScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
        addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = true;
      }
    };
    SimpleBarCore2.prototype.hideScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.isDragging)
        return;
      if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = false;
      }
    };
    SimpleBarCore2.prototype.hideNativeScrollbar = function() {
      if (!this.offsetEl)
        return;
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
      this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
    };
    SimpleBarCore2.prototype.onMouseMoveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!currentAxis.track.el || !currentAxis.scrollbar.el)
        return;
      currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
      currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      if (this.isWithinBounds(currentAxis.track.rect)) {
        this.showScrollbar(axis);
        addClasses(currentAxis.track.el, this.classNames.hover);
        if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
          addClasses(currentAxis.scrollbar.el, this.classNames.hover);
        } else {
          removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
        }
      } else {
        removeClasses(currentAxis.track.el, this.classNames.hover);
        if (this.options.autoHide) {
          this.hideScrollbar(axis);
        }
      }
    };
    SimpleBarCore2.prototype.onMouseLeaveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      removeClasses(this.axis[axis].track.el, this.classNames.hover);
      removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
      if (this.options.autoHide) {
        this.hideScrollbar(axis);
      }
    };
    SimpleBarCore2.prototype.onDragStart = function(e2, axis) {
      var _a2;
      if (axis === void 0) {
        axis = "y";
      }
      this.isDragging = true;
      var elDocument = getElementDocument(this.el);
      var elWindow = getElementWindow(this.el);
      var scrollbar = this.axis[axis].scrollbar;
      var eventOffset = axis === "y" ? e2.pageY : e2.pageX;
      this.axis[axis].dragOffset = eventOffset - (((_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) || 0);
      this.draggedAxis = axis;
      addClasses(this.el, this.classNames.dragging);
      elDocument.addEventListener("mousemove", this.drag, true);
      elDocument.addEventListener("mouseup", this.onEndDrag, true);
      if (this.removePreventClickId === null) {
        elDocument.addEventListener("click", this.preventClick, true);
        elDocument.addEventListener("dblclick", this.preventClick, true);
      } else {
        elWindow.clearTimeout(this.removePreventClickId);
        this.removePreventClickId = null;
      }
    };
    SimpleBarCore2.prototype.onTrackClick = function(e2, axis) {
      var _this = this;
      var _a2, _b, _c, _d;
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl)
        return;
      e2.preventDefault();
      var elWindow = getElementWindow(this.el);
      this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      var scrollbar = this.axis[axis].scrollbar;
      var scrollbarOffset = (_b = (_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
      var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : "0px", 10);
      var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      var t2 = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
      var dir = t2 < 0 ? -1 : 1;
      var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
      var speed = 40;
      var scrollTo = function() {
        if (!_this.contentWrapperEl)
          return;
        if (dir === -1) {
          if (scrolled > scrollSize) {
            scrolled -= speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        } else {
          if (scrolled < scrollSize) {
            scrolled += speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        }
      };
      scrollTo();
    };
    SimpleBarCore2.prototype.getContentElement = function() {
      return this.contentEl;
    };
    SimpleBarCore2.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    };
    SimpleBarCore2.prototype.removeListeners = function() {
      var elWindow = getElementWindow(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter);
      this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
      this.el.removeEventListener("mousemove", this.onMouseMove);
      this.el.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.contentWrapperEl) {
        this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
      }
      elWindow.removeEventListener("resize", this.onWindowResize);
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.onMouseMove.cancel();
      this.onWindowResize.cancel();
      this.onStopScrolling.cancel();
      this.onMouseEntered.cancel();
    };
    SimpleBarCore2.prototype.unMount = function() {
      this.removeListeners();
    };
    SimpleBarCore2.prototype.isWithinBounds = function(bbox) {
      return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
    };
    SimpleBarCore2.prototype.findChild = function(el, query) {
      var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      return Array.prototype.filter.call(el.children, function(child) {
        return matches.call(child, query);
      })[0];
    };
    SimpleBarCore2.rtlHelpers = null;
    SimpleBarCore2.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    };
    SimpleBarCore2.getOptions = getOptions;
    SimpleBarCore2.helpers = helpers;
    return SimpleBarCore2;
  }()
);

// node_modules/simplebar/dist/index.mjs
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var _a = SimpleBarCore.helpers;
var getOptions2 = _a.getOptions;
var addClasses2 = _a.addClasses;
var canUseDOM2 = _a.canUseDOM;
var SimpleBar = (
  /** @class */
  function(_super) {
    __extends(SimpleBar2, _super);
    function SimpleBar2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      SimpleBar2.instances.set(args[0], _this);
      return _this;
    }
    SimpleBar2.initDOMLoadedElements = function() {
      document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
      window.removeEventListener("load", this.initDOMLoadedElements);
      Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(el) {
        if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar2.instances.has(el))
          new SimpleBar2(el, getOptions2(el.attributes));
      });
    };
    SimpleBar2.removeObserver = function() {
      var _a2;
      (_a2 = SimpleBar2.globalObserver) === null || _a2 === void 0 ? void 0 : _a2.disconnect();
    };
    SimpleBar2.prototype.initDOM = function() {
      var _this = this;
      var _a2, _b, _c;
      if (!Array.prototype.filter.call(this.el.children, function(child) {
        return child.classList.contains(_this.classNames.wrapper);
      }).length) {
        this.wrapperEl = document.createElement("div");
        this.contentWrapperEl = document.createElement("div");
        this.offsetEl = document.createElement("div");
        this.maskEl = document.createElement("div");
        this.contentEl = document.createElement("div");
        this.placeholderEl = document.createElement("div");
        this.heightAutoObserverWrapperEl = document.createElement("div");
        this.heightAutoObserverEl = document.createElement("div");
        addClasses2(this.wrapperEl, this.classNames.wrapper);
        addClasses2(this.contentWrapperEl, this.classNames.contentWrapper);
        addClasses2(this.offsetEl, this.classNames.offset);
        addClasses2(this.maskEl, this.classNames.mask);
        addClasses2(this.contentEl, this.classNames.contentEl);
        addClasses2(this.placeholderEl, this.classNames.placeholder);
        addClasses2(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl);
        addClasses2(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
        while (this.el.firstChild) {
          this.contentEl.appendChild(this.el.firstChild);
        }
        this.contentWrapperEl.appendChild(this.contentEl);
        this.offsetEl.appendChild(this.contentWrapperEl);
        this.maskEl.appendChild(this.offsetEl);
        this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
        this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
        this.wrapperEl.appendChild(this.maskEl);
        this.wrapperEl.appendChild(this.placeholderEl);
        this.el.appendChild(this.wrapperEl);
        (_a2 = this.contentWrapperEl) === null || _a2 === void 0 ? void 0 : _a2.setAttribute("tabindex", this.options.tabIndex.toString());
        (_b = this.contentWrapperEl) === null || _b === void 0 ? void 0 : _b.setAttribute("role", "region");
        (_c = this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c.setAttribute("aria-label", this.options.ariaLabel);
      }
      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var track = document.createElement("div");
        var scrollbar = document.createElement("div");
        addClasses2(track, this.classNames.track);
        addClasses2(scrollbar, this.classNames.scrollbar);
        track.appendChild(scrollbar);
        this.axis.x.track.el = track.cloneNode(true);
        addClasses2(this.axis.x.track.el, this.classNames.horizontal);
        this.axis.y.track.el = track.cloneNode(true);
        addClasses2(this.axis.y.track.el, this.classNames.vertical);
        this.el.appendChild(this.axis.x.track.el);
        this.el.appendChild(this.axis.y.track.el);
      }
      SimpleBarCore.prototype.initDOM.call(this);
      this.el.setAttribute("data-simplebar", "init");
    };
    SimpleBar2.prototype.unMount = function() {
      SimpleBarCore.prototype.unMount.call(this);
      SimpleBar2.instances["delete"](this.el);
    };
    SimpleBar2.initHtmlApi = function() {
      this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
      if (typeof MutationObserver !== "undefined") {
        this.globalObserver = new MutationObserver(SimpleBar2.handleMutations);
        this.globalObserver.observe(document, { childList: true, subtree: true });
      }
      if (document.readyState === "complete" || // @ts-ignore: IE specific
      document.readyState !== "loading" && !document.documentElement.doScroll) {
        window.setTimeout(this.initDOMLoadedElements);
      } else {
        document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
        window.addEventListener("load", this.initDOMLoadedElements);
      }
    };
    SimpleBar2.handleMutations = function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(addedNode) {
          if (addedNode.nodeType === 1) {
            if (addedNode.hasAttribute("data-simplebar")) {
              !SimpleBar2.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar2(addedNode, getOptions2(addedNode.attributes));
            } else {
              addedNode.querySelectorAll("[data-simplebar]").forEach(function(el) {
                if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar2.instances.has(el) && document.documentElement.contains(el))
                  new SimpleBar2(el, getOptions2(el.attributes));
              });
            }
          }
        });
        mutation.removedNodes.forEach(function(removedNode) {
          var _a2;
          if (removedNode.nodeType === 1) {
            if (removedNode.getAttribute("data-simplebar") === "init") {
              !document.documentElement.contains(removedNode) && ((_a2 = SimpleBar2.instances.get(removedNode)) === null || _a2 === void 0 ? void 0 : _a2.unMount());
            } else {
              Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function(el) {
                var _a3;
                !document.documentElement.contains(el) && ((_a3 = SimpleBar2.instances.get(el)) === null || _a3 === void 0 ? void 0 : _a3.unMount());
              });
            }
          }
        });
      });
    };
    SimpleBar2.instances = /* @__PURE__ */ new WeakMap();
    return SimpleBar2;
  }(SimpleBarCore)
);
if (canUseDOM2) {
  SimpleBar.initHtmlApi();
}

// src/scripts/modules/custom-scrollbar.ts
var simpleBar;
var tablePrice = document.querySelector(".table-price-wrap");
if (tablePrice) {
  if (window.innerWidth >= 767.98) {
    simpleBar = new SimpleBar(tablePrice, {
      autoHide: true
    });
  }
}

// src/scripts/modules/accordeon.ts
var accordeons = document.querySelectorAll(".accordeon");
if (accordeons.length) {
  [...accordeons].forEach((accordeon) => {
    if (accordeon) {
      let removeAccordeonOpen2 = function(index1) {
        [...accordeonItems].forEach((item2, index2) => {
          if (index1 != index2) {
            item2.classList.remove("active");
            let contentTwo = item2.querySelector(".accordeon__content");
            contentTwo.style.height = "0px";
          }
        });
      };
      var removeAccordeonOpen = removeAccordeonOpen2;
      const accordeonItems = accordeon.querySelectorAll(".accordeon__item");
      [...accordeonItems].forEach((item, index) => {
        const header = item.querySelector(".accordeon__header");
        let content = item.querySelector(".accordeon__content");
        if (accordeon.classList.contains("accordeon-price")) {
          content.style.height = `${simpleBar ? content?.scrollHeight + 1 : content?.scrollHeight}px`;
          item.classList.add("active");
        }
        header.addEventListener("click", () => {
          item.classList.toggle("active");
          if (item.classList.contains("active")) {
            content.style.height = `${content.scrollHeight}px`;
          } else {
            content.style.height = "0px";
          }
          removeAccordeonOpen2(index);
        });
      });
    }
  });
}
function initAccordeonMobile() {
  const accordeonsMobile = document.querySelectorAll(".accordeon-mobile");
  if (accordeonsMobile.length) {
    [...accordeonsMobile].forEach((accordeon) => {
      if (accordeon) {
        let removeAccordeonOpen2 = function(index1) {
          [...accordeonItems].forEach((item2, index2) => {
            if (index1 != index2) {
              item2.classList.remove("active");
              let contentTwo = item2.querySelector(".accordeon-mobile__content");
              contentTwo.style.height = "0px";
            }
          });
        };
        var removeAccordeonOpen = removeAccordeonOpen2;
        const accordeonItems = accordeon.querySelectorAll(".accordeon-mobile__item");
        [...accordeonItems].forEach((item, index) => {
          const header = item.querySelector(".accordeon-mobile__header");
          let content = item.querySelector(".accordeon-mobile__content");
          const accordeonParentContent = accordeon.closest(".accordeon__content");
          header.addEventListener("click", () => {
            console.log(accordeonParentContent);
            item.classList.toggle("active");
            if (item.classList.contains("active")) {
              content.style.height = `${content.scrollHeight}px`;
              accordeonParentContent.style.height = `100%`;
              accordeonParentContent.style.maxHeight = `100%`;
            } else {
              accordeonParentContent.style.height = `100%`;
              content.style.height = "0px";
            }
            accordeonItems.forEach((accItem) => {
              if (!accItem.classList.contains("active")) {
                accordeonParentContent.style.maxHeight = "100%";
                accordeonParentContent.style.height = "100%";
              }
            });
            removeAccordeonOpen2(index);
          });
        });
      }
    });
  }
}
initAccordeonMobile();

// src/scripts/detail-card.ts
document.addEventListener("DOMContentLoaded", function() {
  hidden_blocks_default();
  Oe.bind("[data-fancybox]", {
    groupAll: true,
    placeFocusBack: false,
    Image: {
      wheel: "slide"
    },
    Hash: false
  });
  const fancyboxInSlider = document.querySelectorAll(".swiper-slide-duplicate [data-fancybox]");
  if (fancyboxInSlider.length) {
    fancyboxInSlider.forEach(function(item) {
      item.addEventListener("click", function(e2) {
        e2.preventDefault();
        const href = item.getAttribute("href");
        item.closest(".swiper").querySelector(".swiper-slide:not(.swiper-slide-duplicate) [data-fancybox][href='" + href + "']").click();
      });
    });
  }
  const reviewsSlider = document.querySelector(".slider-reviews__body");
  if (reviewsSlider) {
    const buttonPrev = reviewsSlider.querySelector(".slider-button-prev");
    const buttonNext = reviewsSlider.querySelector(".slider-button-next");
    let reviewsSwiper = new Swiper(reviewsSlider, {
      modules: [Navigation],
      speed: 800,
      slideClass: "slider-reviews__item",
      wrapperClass: "slider-reviews__wrapper",
      initialSlide: 0,
      grabCursor: true,
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext
      },
      breakpoints: {
        300: {
          slidesPerView: 1.5,
          spaceBetween: 15
        },
        767.98: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      on: {
        init: function(swiper) {
          const slides = swiper.slides;
          const sliderControls = buttonPrev?.parentNode || buttonNext?.parentNode;
          if (slides.length <= swiper.passedParams.slidesPerView) {
            swiper.navigation.destroy();
            sliderControls?.remove();
          }
        },
        progress: function(swiper) {
          if (swiper.progress > 0) {
            swiper.el.classList.add("progress");
          } else {
            swiper.el.classList.remove("progress");
          }
        }
      }
    });
  }
  function initCategoriesSliders() {
    let categoriesSwiper = null;
    if (window.matchMedia("(min-width: 767.98px)").matches) {
      const categoriesSliders = document.querySelectorAll(".categories-slider__body");
      if (categoriesSliders.length) {
        categoriesSliders.forEach((categoriesSlider) => {
          const buttonPrev = categoriesSlider.parentNode.querySelector(".slider-button-prev");
          const buttonNext = categoriesSlider.parentNode.querySelector(".slider-button-next");
          categoriesSwiper = new Swiper(categoriesSlider, {
            modules: [Navigation],
            speed: 800,
            slideClass: "categories-slider__item",
            spaceBetween: 30,
            navigation: {
              prevEl: buttonPrev,
              nextEl: buttonNext
            },
            breakpoints: {
              300: {
                slidesPerView: 3,
                spaceBetween: 15,
                slidesPerGroup: 3
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4
              }
            },
            on: {
              init: function(swiper) {
                const slides = swiper.slides;
                const sliderControls = buttonPrev?.parentNode || buttonNext?.parentNode;
                if (slides.length <= swiper.passedParams.slidesPerView) {
                  swiper.navigation.destroy();
                  sliderControls?.remove();
                }
              }
            }
          });
        });
      }
    } else {
      if (categoriesSwiper !== null) {
        categoriesSwiper.destroy();
      }
    }
  }
  initCategoriesSliders();
  const gallerySlider = document.querySelector(".gallery-body");
  let gallerySwiper = null;
  function initializeSwiper() {
    if (!gallerySwiper && gallerySlider) {
      const sliderPagination = gallerySlider.querySelector(".slider-pagination");
      gallerySwiper = new Swiper(gallerySlider, {
        modules: [Pagination],
        slideClass: "gallery-item",
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 800,
        centeredSlides: true,
        pagination: {
          el: sliderPagination,
          type: "bullets",
          clickable: true
          // dynamicBullets: true,
        }
      });
    }
  }
  function destroySwiper() {
    if (gallerySwiper) {
      gallerySwiper.destroy();
      gallerySwiper = null;
    }
  }
  function checkScreenWidth() {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
      initializeSwiper();
    } else {
      destroySwiper();
    }
  }
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
  const backgrounds = {
    red: "#FF6933",
    orange: "#FEBB02",
    blue: "#1C8CF3",
    green: "#18ABC6"
  };
  function getBackgroundLine(target) {
    let value = target.dataset.value.replace(",", ".");
    if (value === 0) return;
    if (value > 0 && value <= 2.2) {
      target.style.background = backgrounds["red"];
    }
    if (value > 2.2 && value <= 3.5) {
      target.style.background = backgrounds["orange"];
    }
    if (value > 3.5 && value <= 4.2) {
      target.style.background = backgrounds["blue"];
    }
    if (value > 4.2) {
      target.style.background = backgrounds["green"];
    }
  }
  const progressLocation = document.getElementById("progress_location");
  if (progressLocation) {
    getBackgroundLine(progressLocation);
  }
  const progressPrice = document.getElementById("progress_price");
  if (progressPrice) {
    getBackgroundLine(progressPrice);
  }
  const progressPurity = document.getElementById("progress_purity");
  if (progressPurity) {
    getBackgroundLine(progressPurity);
  }
  const progressService = document.getElementById("progress_service");
  if (progressService) {
    getBackgroundLine(progressService);
  }
});
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=detail-card.js.map
