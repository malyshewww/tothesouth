var r=document.querySelector(".overlay");function d(){[...document.querySelectorAll(".custom-dropdown")].forEach(t=>{let e=t.querySelector(".custom-dropdown__btn");[...t.querySelectorAll(".select-list__item")].forEach(o=>{let n=o.dataset.value.toLowerCase().replace(/[\s.,%,(.+\)]/g,"").trim();e.innerText.toLowerCase().replace(/[\s.,%,(.+\)]/g,"").trim()===n&&o.classList.add("current")})})}d();function l(){[...document.querySelectorAll(".custom-dropdown__btn.active")].forEach(t=>{let e=t.parentNode.querySelector(".custom-dropdown__choice");t.classList.remove("active")})}function i(s){let t=s.target;if(t.closest(".overlay")&&r?.classList.remove("active"),t.matches(".custom-dropdown__btn")?t.classList.contains("active")?(t.classList.remove("active"),r?.classList.remove("active")):(t.classList.contains("guests")&&window.innerWidth<=767.98&&r?.classList.add("active"),t.classList.add("active")):t.matches(".choice-dropdown")||t.matches(".choice-dropdown__button")||t.matches(".choice-dropdown__count")?(console.log(t),s.stopPropagation()):l(),t.closest(".select-list__item")){console.log(t);let e=t.closest(".custom-dropdown"),c=e.querySelector(".custom-dropdown__btn"),o=e.querySelector(".custom-dropdown__input");o&&(o.value=t.dataset.value),c&&(c.textContent=t.dataset.value),e.querySelectorAll(".select-list__item.current").forEach(n=>n.classList.remove("current")),t.classList.add("current")}}document.addEventListener("click",i,!1);
