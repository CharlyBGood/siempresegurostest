let toggleBtn = document.getElementsByClassName("navbar_toggle")[0];
let toggleLinks = document.getElementsByClassName("nav-container-2")[0];

toggleBtn.addEventListener("click", openToggle);

function openToggle() {
  toggleLinks.classList.toggle("active");
  console.log("workddddssss");
  toggleLinks.onclick = function () {
    console.log("clicked on a link");
    toggleLinks.classList.remove("active");
  };
}

// SLIDESHOW 2

let slideIndex = 0;
let slides;
showSlides();

function showSlides(n) {
  let i;
  slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

// Next/previous controls
function plusSlides(position) {
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Thumbnail image controls
function currentSlide(n) {
  if (index > slides.length) {
    index = 1;
  } else if (index < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

// SLIDESHOW 2

// -------------------------------------

// MODAL ONE CONTAINER

let modalOne = document.getElementById("myModalOne");

let quienesBtn = document.getElementById("quienesSomosBtn");

let span1 = document.getElementsByClassName("close")[0];

span1.onclick = function () {
  modalOne.style.display = "none";
  document.body.style.overflow = "auto";
};

quienesBtn.onclick = function () {
  modalOne.style.display = "block";
  document.body.style.overflow = "hidden";
};

// MODAL ONE CONTAINER


// MODAL TWO CONTAINER
let modalTwo = document.getElementById("myModalTwo");

let segurosBtn = document.getElementById("segurosBtn");

let span = document.getElementsByClassName("close-2")[0];

span.onclick = function () {
  modalTwo.style.display = "none";
  document.body.style.overflow = "auto";
};

segurosBtn.onclick = function () {
  modalTwo.style.display = "block";
  document.body.style.overflow = "hidden";
};

// MODAL TWO CONTAINER

// MODAL THREE CONTAINER

let modalThree = document.getElementById("myModalThree");

let descargaBtn = document.getElementById("descargaBtn");

let span3 = document.getElementsByClassName("close-3")[0];

span3.onclick = function () {
  modalThree.style.display = "none";
  document.body.style.overflow = "auto";
};

descargaBtn.onclick = function () {
  modalThree.style.display = "block";
  document.body.style.overflow = "hidden";
};

// MODAL THREE CONTAINER

// MODAL CONTAINER FOUR

let modalFour = document.getElementById("myModalFour");

let contactoBtn = document.getElementById("contactoBtn");

let span4 = document.getElementsByClassName("close-4")[0];

span4.onclick = function () {
  modalFour.style.display = "none";
  document.body.style.overflow = "auto";
};

contactoBtn.onclick = function () {
  modalFour.style.display = "block";
  document.body.style.overflow = "hidden";
};

// close when click out of modal container

window.onclick = function (event) {
  if (
    event.target == modalOne ||
    event.target == modalTwo ||
    event.target == modalThree ||
    event.target == modalFour
  ) {
    modalOne.style.display = "none";
    modalTwo.style.display = "none";
    modalThree.style.display = "none";
    modalFour.style.display = "none";
    document.body.style.overflow = "auto";
  }
};


// MODALS TEST

let modalMenu = document.getElementsByClassName("modal-menu");

let allModals = document.getElementById("allModals");

let divChild = allModals.children;

for (let el of modalMenu) {
  el.addEventListener("click", tesTing);
}

function tesTing() {
  console.log("atrevido");
  if (divChild[0].style.display = "block") {
    divChild[3].style.display = "block";
    divChild[0].style.display = "none";
  }
  document.body.style.overflow = "hidden";
}

// MODALS TEST