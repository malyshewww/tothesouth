// src/scripts/modules/dropdown.ts
var overlay = document.querySelector(".overlay");
function checkDropdownValue() {
  const dropdowns = document.querySelectorAll(".custom-dropdown");
  [...dropdowns].forEach((elem) => {
    const dropdownButton = elem.querySelector(".custom-dropdown__btn");
    const dropdownListItems = elem.querySelectorAll(".select-list__item");
    [...dropdownListItems].forEach((listItem) => {
      const dataValue = listItem.dataset.value;
      const dataValueStr = dataValue.toLowerCase().replace(/[\s.,%,(.+\)]/g, "").trim();
      const dropdownButtonStr = dropdownButton.innerText.toLowerCase().replace(/[\s.,%,(.+\)]/g, "").trim();
      if (dropdownButtonStr !== dataValueStr) return;
      listItem.classList.add("current");
    });
  });
}
checkDropdownValue();
function deactivateAllDropdowns() {
  const activeDropdownButtons = document.querySelectorAll(".custom-dropdown__btn.active");
  [...activeDropdownButtons].forEach((elem) => {
    let choice = elem.parentNode.querySelector(".custom-dropdown__choice");
    elem.classList.remove("active");
  });
}
function handleDropdownClicks(event) {
  const target = event.target;
  if (target.closest(".overlay")) {
    overlay?.classList.remove("active");
  }
  if (target.matches(".custom-dropdown__btn")) {
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      overlay?.classList.remove("active");
    } else {
      if (target.classList.contains("guests") && window.innerWidth <= 767.98) {
        overlay?.classList.add("active");
      }
      target.classList.add("active");
    }
  } else if (target.matches(".choice-dropdown") || target.matches(".choice-dropdown__button") || target.matches(".choice-dropdown__count")) {
    console.log(target);
    event.stopPropagation();
  } else {
    deactivateAllDropdowns();
  }
  if (target.closest(".select-list__item")) {
    console.log(target);
    const parent = target.closest(".custom-dropdown");
    const dropdownButton = parent.querySelector(".custom-dropdown__btn");
    const dropdownInput = parent.querySelector(".custom-dropdown__input");
    if (dropdownInput) {
      dropdownInput.value = target.dataset.value;
    }
    if (dropdownButton) {
      dropdownButton.textContent = target.dataset.value;
    }
    const currentItems = parent.querySelectorAll(".select-list__item.current");
    currentItems.forEach((item) => item.classList.remove("current"));
    target.classList.add("current");
  }
}
document.addEventListener("click", handleDropdownClicks, false);
//# sourceMappingURL=chunk-JFZJ3IS6.js.map
