// src/scripts/modules/dropdown.ts
function checkDropdownValue() {
  const dropdowns = document.querySelectorAll(".custom-dropdown");
  [...dropdowns].forEach((elem) => {
    const dropdownButton = elem.querySelector(".custom-dropdown__btn");
    const dropdownListItems = elem.querySelectorAll(".select-list__item");
    [...dropdownListItems].forEach((listItem) => {
      const dataValue = listItem.dataset.value;
      if (dropdownButton.innerText !== dataValue) return;
      listItem.classList.add("current");
    });
  });
}
checkDropdownValue();
function deactivateAllDropdowns() {
  const activeDropdownButtons = document.querySelectorAll(".custom-dropdown__btn.active");
  [...activeDropdownButtons].forEach((elem) => {
    elem.classList.remove("active");
  });
}
function handleDropdownClicks(event) {
  const target = event.target;
  if (target.matches(".custom-dropdown__btn")) {
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      deactivateAllDropdowns();
      target.classList.add("active");
    }
  } else {
    deactivateAllDropdowns();
  }
  if (target.closest(".select-list__item")) {
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
//# sourceMappingURL=chunk-FZKHDX4X.js.map
