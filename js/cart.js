// Cleaning input field after apply-promo

const applyPromoBtn = document.querySelector(".apply-promo");
const inputPromoArea = document.querySelector("#mypromo");

applyPromoBtn.addEventListener("click", function () {
  inputPromoArea.value = "";
});
