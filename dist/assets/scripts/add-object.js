import "../chunks/chunk-FZKHDX4X.js";

// src/scripts/modules/mask-phone.ts
function maskPhone(elem = document) {
  let inputs = elem.querySelectorAll('input[type="tel"]');
  if (inputs.length) {
    inputs.forEach((phone) => {
      let code = "+7", find = /\+7/;
      code = "+7";
      find = /\+7/;
      phone.addEventListener("focus", function() {
        phone.value = code + " " + phone.value.replace(code + " ", "");
      });
      phone.addEventListener("input", function() {
        let val = phone.value.replace(find, ""), res = code + "";
        val = val.replace(/[^0-9]/g, "");
        for (let i = 0; i < val.length; i++) {
          res += i === 0 ? "-" : "";
          res += i == 3 ? "-" : "";
          res += i == 6 || i == 8 ? "-" : "";
          if (i == 10) break;
          res += val[i];
        }
        phone.value = res;
      });
      phone.addEventListener("blur", function() {
        let val = phone.value.replace(find, "");
        val = val.trim();
        if (!val) phone.value = null;
      });
    });
  }
}
var mask_phone_default = maskPhone;

// src/scripts/add-object.ts
mask_phone_default();
var fields = document.querySelectorAll(".form-input");
function addfocus() {
  let parent = this.closest(".form-item");
  parent.classList.add("focus");
}
function remfocus() {
  let parent = this.closest(".form-item");
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}
fields.forEach((input) => {
  const errorBlock = input.closest(".form-item")?.querySelector(".error-message");
  if (errorBlock || input.value !== "") {
    let parent = input.closest(".form-item");
    parent.classList.add("focus");
  }
  input.addEventListener("focus", addfocus);
  input.addEventListener("blur", remfocus);
});
//# sourceMappingURL=add-object.js.map
