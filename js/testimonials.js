// write review

const writeReviewBtn = document.querySelector(".write-review");
const testimonialsForm = document.querySelector(".testimonials-form");
const postReviewBtn = document.querySelector(".post-review");
const myReview = document.getElementById("myreview");
const myReviewName = document.getElementById("myreviewname");
const myReviewEmail = document.getElementById("myreviewemail");
const testimonialsContainer = document.querySelector(".testimonials-container");
const rating = document.querySelectorAll(".rating");
const testimonialRating = document.querySelector(".testimonial-rating");
const labels = document.querySelectorAll(".star-label");
const starIcons = document.querySelectorAll(".star-icon");
let starNumber;
let date = new Date();
console.log(date);

writeReviewBtn.addEventListener("click", function () {
  writeReviewBtn.style.display = "none";
  testimonialsForm.style.display = "block";
  rating.forEach((radiobtn, i) => {
    radiobtn.addEventListener("click", function (e) {
      starNumber = i;
      console.log(starNumber);
      for (let s = 0; s <= i; s++) {
        labels[s].style.color = "#fd4";
      }
    });
  });
});
postReviewBtn.addEventListener("click", function (e) {
  e.preventDefault();
  testimonialsForm.style.display = "none";

  let stars = "";
  for (let s = 0; s <= starNumber; s++) {
    stars += '<i class="fas fa-star star-icon"></i>';
  }

  const html = `
<div class="testimonial-card">
<div class="testimonial-card-data">
  <h4><i class="fas fa-angle-double-right"></i> ${myReviewName.value}</h4>
  <div class="testimonial-rating">${stars}</div>
</div>
<p class="testimonial-review">${myReview.value}</p>
<p class="date">${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</p>
</div>`;

  testimonialsContainer.insertAdjacentHTML("afterbegin", html);
  console.log(stars);
  labels.forEach((l) => (l.style.color = "var(--primary-color)"));
  myReviewName.value = myReview.value = myReviewEmail.value = "";
  writeReviewBtn.style.display = "block";
});
