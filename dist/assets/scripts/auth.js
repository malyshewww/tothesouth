import {
  mask_phone_default
} from "../chunks/chunk-VXRPEELR.js";
import "../chunks/chunk-FDCBVWR5.js";

// src/scripts/auth.ts
mask_phone_default();
var fieldPassword = document.querySelectorAll(".field-password");
if (fieldPassword) {
  fieldPassword.forEach((field) => {
    const input = field.querySelector(".form-input");
    const btnPassword = field.querySelector(".btn-password");
    if (btnPassword) {
      btnPassword.addEventListener("click", () => {
        input?.setAttribute("type", `${input.type === "password" ? "text" : "password"}`);
      });
    }
  });
}
var inputsNumber = document.querySelectorAll(".form-input-number");
if (inputsNumber) {
  inputsNumber.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
      const currentInput = input, nextInput = input.nextElementSibling, prevInput = input.previousElementSibling;
      if (currentInput.value.length > 1) {
        currentInput.value = "";
        return;
      }
      if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }
      if (e.key === "Backspace") {
        inputsNumber.forEach((input2, index2) => {
          if (index1 <= index2 && prevInput) {
            input2.setAttribute("disabled", true);
            currentInput.value = "";
            prevInput.focus();
          }
        });
      }
    });
  });
}
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = seconds;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1e3);
}
window.addEventListener("load", () => {
  inputsNumber[0]?.focus();
  var oneMinutes = 60, display = document.querySelector(".code-auth__time span");
  if (display) {
    startTimer(oneMinutes, display);
  }
});
//# sourceMappingURL=auth.js.map
