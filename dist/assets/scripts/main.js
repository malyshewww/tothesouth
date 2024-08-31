import {
  isLoaded,
  loadMap
} from "../chunks/chunk-JYBK4SOB.js";

// src/scripts/modules/dynamic_adapt.ts
var DynamicAdapt = class {
  constructor(type) {
    this.type = type;
  }
  init() {
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = [...document.querySelectorAll("[data-da]")];
    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });
    this.arraySort(this.оbjects);
    this.mediaQueries = this.оbjects.map(({ breakpoint }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`).filter((item, index, self) => self.indexOf(item) === index);
    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(",");
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];
      const оbjectsFilter = this.оbjects.filter(({ breakpoint }) => breakpoint === mediaBreakpoint);
      matchMedia.addEventListener("change", () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }
  // Основная функция
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }
  // Функция перемещения
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === "first") {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }
  // Функция возврата
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== void 0) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }
  // Функция получения индекса внутри родителя
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }
  // Функция сортировки массива по breakpoint и place
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  arraySort(arr) {
    if (this.type === "min") {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return -1;
          }
          if (a.place === "last" || b.place === "first") {
            return 1;
          }
          return 0;
        }
        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return 1;
          }
          if (a.place === "last" || b.place === "first") {
            return -1;
          }
          return 0;
        }
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
};

// src/scripts/modules/popups.ts
function popups(elem = document) {
  let buttonOpenPopup = elem.querySelectorAll("[data-popup]");
  if (buttonOpenPopup.length) {
    buttonOpenPopup.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        let popup_id = item.getAttribute("data-popup");
        elem.querySelector("#" + popup_id).classList.add("active");
        document.body.classList.add("lock");
        if (popup_id === "modal-map" && !isLoaded) {
          loadMap();
        }
      });
    });
  }
  let popup = elem.querySelectorAll(".popup");
  if (popup.length < 1 && elem.classList.contains("popup")) {
    popup = [elem];
  }
  if (popup.length) {
    popup.forEach(function(item) {
      item.addEventListener("click", function(e) {
        if (e.target.matches(".popup") || e.target.matches(".popup__close")) {
          item.classList.remove("active");
          document.body.classList.remove("lock");
        }
      });
    });
  }
}

// src/scripts/main.ts
document.addEventListener("DOMContentLoaded", () => {
  const da = new DynamicAdapt("max");
  da.init();
  popups();
  function changePositionButton() {
    const textClamps = document.querySelectorAll(".text-clamp");
    if (textClamps) {
      textClamps.forEach((text) => {
        const p = text.querySelector("p");
        const button = text.querySelector(".btn-detail");
        if (text?.scrollHeight > text?.clientHeight) {
          button?.classList.add("changed");
        } else {
          button?.classList.remove("changed");
        }
      });
    }
  }
  changePositionButton();
  window.addEventListener("resize", changePositionButton);
  const menuCategory = document.querySelector(".menu-category");
  const headerMenu = document.querySelector(".menu");
  function menuActions(e) {
    const target = e.target;
    if (target === menuCategory || menuCategory?.contains(target)) {
      return;
    }
    if (target.closest(".header__btn-choice")) {
      target.classList.toggle("active");
      menuCategory?.classList.toggle("active");
    }
    if (!menuCategory || !target.closest(".header__btn-choice")) {
      document.querySelector(".header__btn-choice")?.classList.remove("active");
      menuCategory?.classList.remove("active");
    }
    if (target.closest(".header-burger")) {
      target.classList.toggle("active");
      headerMenu?.classList.toggle("active");
      document.body.classList.toggle("lock");
    }
  }
  document.addEventListener("click", menuActions);
  function openAcc(item, n) {
    item.classList.add("active");
    item.parentElement.classList.add("active");
    item.nextElementSibling.style.height = "auto";
    item.nextElementSibling.style.opacity = "1";
    let height = item.nextElementSibling.clientHeight + n + "px";
    item.nextElementSibling.style.height = "0px";
    setTimeout(function() {
      item.nextElementSibling.style.height = height;
    }, 0);
  }
  function closeAcc(item) {
    item.classList.remove("active");
    item.parentElement.classList.remove("active");
    item.nextElementSibling.style.height = item.nextElementSibling.clientHeight + "px";
    item.nextElementSibling.style.opacity = "0";
    setTimeout(function() {
      item.nextElementSibling.style.height = "0px";
    }, 0);
  }
  function accordions(arr, n, open) {
    if (arr.length != 0) {
      if (open) {
        openAcc(arr[0], n);
      }
      arr.forEach(function(item, i) {
        item.addEventListener("click", function(e) {
          e.preventDefault();
          arr.forEach((item2, k) => {
            if (k != i) {
              closeAcc(item2);
            }
          });
          if (!item.classList.contains("active")) {
            openAcc(item, n);
          } else {
            closeAcc(item);
          }
        });
      });
    }
  }
  const menuCategoryButtons = document.querySelectorAll("[data-accordeon-button]");
  accordions(menuCategoryButtons, 0);
  const cityHotelsPage = document.querySelector(".city-hotels");
  if (cityHotelsPage == null) {
    const popupMap = document.querySelector(".popup-map");
    const filterButtonMobile = popupMap?.querySelector(".filter-button-mobile");
    if (filterButtonMobile) {
      filterButtonMobile.remove();
    }
  }
});
//# sourceMappingURL=main.js.map
