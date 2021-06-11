// Slider 37 left arrow

const modal = document.querySelector(".modal");
const modalItem = document.querySelector(".modal-item");
const closeButton = document.querySelector(".close-button");
const items = document.querySelectorAll(".item");
const items2 = document.querySelectorAll(".item2");

let itemSource = "";
let itemIndex = 1;
let itemsLenght = items.length;
let images = [];

function slider() {
  items.forEach((image) => {
    image.addEventListener("click", () => {
      modal.classList.add("active");
      itemSource = image.getAttribute("src");
      modalItem.setAttribute("src", itemSource);
    });
  });
}

function sliderFunctions() {
  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  document.addEventListener("keyup", (e) => {
    const keyPressed = e.keyCode;

    if (keyPressed == 27) {
      modal.classList.remove("active");
    }
  });
}

// Animation

if (window.SimpleAnime) {
  new SimpleAnime();
}

slider();
sliderFunctions();
