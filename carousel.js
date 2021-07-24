const carouselCards = document
  .querySelector("#heads")
  .querySelectorAll(".card");

window.addEventListener("load", () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 480) {
    carouselCards.forEach((card) => {
      const nameAndImageContainer = card.querySelector(".col-3");
      nameAndImageContainer.classList.remove("col-3");
      nameAndImageContainer.classList.add("col-12");

      const cardContent = card.querySelector(".col-9");
      cardContent.classList.remove("col-9");
      cardContent.classList.add("col-12");
    });
  } else {
    carouselCards.forEach((card) => {
      const nameAndImageContainer = card.querySelector(".col-12");
      nameAndImageContainer.classList.remove("col-12");
      nameAndImageContainer.classList.add("col-3");

      const cardContent = card.querySelector(".col-12");
      cardContent.classList.remove("col-12");
      cardContent.classList.add("col-9");
    });
  }
});

// Arrange the columns of carousel when window resizes to make it responsize.
window.addEventListener("resize", arrangeCarouselColumns);
function arrangeCarouselColumns() {
  if (window.innerWidth <= 480) {
    carouselCards.forEach((card) => {
      const nameAndImageContainer = card.querySelector(".col-3");
      nameAndImageContainer.classList.remove("col-3");
      nameAndImageContainer.classList.add("col-12");

      const cardContent = card.querySelector(".col-9");
      cardContent.classList.remove("col-9");
      cardContent.classList.add("col-12");
    });
  } else {
    carouselCards.forEach((card) => {
      const nameAndImageContainer = card.querySelector(".col-12");
      nameAndImageContainer.classList.remove("col-12");
      nameAndImageContainer.classList.add("col-3");

      const cardContent = card.querySelector(".col-12");
      cardContent.classList.remove("col-12");
      cardContent.classList.add("col-9");
    });
  }
}
