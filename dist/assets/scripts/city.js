import "../chunks/chunk-JYBK4SOB.js";
import "../chunks/chunk-JFZJ3IS6.js";

// src/scripts/city.ts
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", handleClicks);
  function handleClicks(e) {
    const target = e.target;
    if (target.matches(".navigation-city__link") && target.parentNode.classList.contains("expanded")) {
      e.preventDefault();
      if (target.classList.contains("show")) {
        target.classList.remove("show");
      } else {
        target.classList.add("show");
      }
    }
    if (!target.matches(".navigation-city__link")) {
      const links = document.querySelectorAll(".navigation-city__link");
      links.forEach((link) => link.classList.remove("show"));
    }
  }
  document.addEventListener("click", documentActions);
  const asideForm = document.querySelector(".aside-form");
  const overlay = document.querySelector(".overlay");
  const sortingBlock = document.querySelector(".sorting");
  const filter = document.querySelector(".filter");
  const modalMap = document.getElementById("modal-map");
  function documentActions(event) {
    let target = event.target;
    if (target.closest(".filter-button-mobile")) {
      asideForm?.classList.add("active");
      document.body.classList.add("lock");
      if (!modalMap?.classList.contains("active")) {
        overlay?.classList.add("active");
      }
    }
    if (target.closest(".form-heading__close") || target.closest(".aside-form .btn-submit") || target.closest(".overlay") || target.closest(".filter .btn")) {
      asideForm?.classList.remove("active");
      if (!modalMap?.classList.contains("active")) {
        document.body.classList.remove("lock");
      }
      overlay?.classList.remove("active");
      filter?.classList.remove("active");
    }
    if (target.matches(".sorting-button-mobile")) {
      sortingBlock?.classList.toggle("active");
    }
    if (!target.closest(".sorting") && sortingBlock?.classList.contains("active")) {
      sortingBlock?.classList.remove("active");
    }
    if (target.closest(".sorting__list-item")) {
      const sortingItems = document.querySelectorAll(".sorting__list-item.active");
      if (sortingItems) {
        sortingItems.forEach((item) => item.classList.remove("active"));
      }
      target.classList.add("active");
      sortingBlock?.classList.remove("active");
    }
    if (target.closest(".filter-button")) {
      asideForm?.classList.add("active");
      filter?.classList.add("active");
      document.body.classList.add("lock");
      overlay?.classList.add("active");
    }
  }
  if (asideForm) {
    const form = asideForm.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
  const navigationLinks = document.querySelectorAll(".navigation-city__link");
  const navigationCity = document.querySelector(".navigation-city");
  const navigationCityList = document.querySelector(".navigation-city__list");
  const navigationItems = document.querySelectorAll(".navigation-city__item");
  if (navigationLinks.length) {
    navigationLinks.forEach((link) => {
      if (link.classList.contains("active")) {
        const offset = link.getBoundingClientRect().left - navigationCity?.getBoundingClientRect().left;
        navigationCityList?.scrollTo(offset, 0);
      }
    });
  }
});
//# sourceMappingURL=city.js.map
