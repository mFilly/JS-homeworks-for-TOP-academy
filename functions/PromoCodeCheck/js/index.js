/* index.js */

import {isPromoCodeValid} from "./form.js"

const code = document.querySelector("#promo-code")

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value)
  if (result) {
    code.classList.remove("error")
  } else {
    code.classList.add("error")
  }
})