// Cleaning input field after search
const toSearchBtn = document.querySelector(".tosearch");
const inputArea = document.querySelector("#mysearch");

toSearchBtn.addEventListener("click", function () {
  inputArea.value = "";
});

// Shop Now button smooth scroll

const shopNowBtn = document.querySelector(".shop-now");
const bestsellersSection = document.querySelector(".bestsellers");

function scrollSection(section, button) {
  button.addEventListener("click", function () {
    window.scrollTo({
      left: 0,
      top: section.offsetTop - 90,
      behavior: "smooth",
    });
  });
}

scrollSection(bestsellersSection, shopNowBtn);

//Billboard animation onload
const billboardText = document.querySelector(".wave-text");
const text = "Millions of products";
let i = 0;

setTimeout(function typing() {
  if (i < text.length) {
    billboardText.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}, 3000);
