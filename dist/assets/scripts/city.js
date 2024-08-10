import "../chunks/chunk-FZKHDX4X.js";

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
});
//# sourceMappingURL=city.js.map
