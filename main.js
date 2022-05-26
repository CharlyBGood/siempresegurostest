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

quienesBtn.addEventListener('click', openOne);

function openOne() {
  modalOne.style.display = "block";
  document.body.style.overflow = "hidden";
};

// quienesBtn.onclick = function () {
//   modalOne.style.display = "block";
//   document.body.style.overflow = "hidden";
// };

// MODAL ONE CONTAINER


// MODAL TWO CONTAINER
let modalTwo = document.getElementById("myModalTwo");

let segurosBtn = document.getElementById("segurosBtn");

let span = document.getElementsByClassName("close-2")[0];

span.onclick = function () {
  modalTwo.style.display = "none";
  document.body.style.overflow = "auto";
};

segurosBtn.addEventListener('click', openTwo);

function openTwo() {
  modalTwo.style.display = "block";
  document.body.style.overflow = "hidden";
};

// segurosBtn.onclick = function () {
//   modalTwo.style.display = "block";
//   document.body.style.overflow = "hidden";
// };

// MODAL TWO CONTAINER

// MODAL THREE CONTAINER

let modalThree = document.getElementById("myModalThree");

let descargaBtn = document.getElementById("descargaBtn");

let span3 = document.getElementsByClassName("close-3")[0];

span3.onclick = function () {
  modalThree.style.display = "none";
  document.body.style.overflow = "auto";
};

descargaBtn.addEventListener('click', openThree);

function openThree() {
  modalThree.style.display = "block";
  document.body.style.overflow = "hidden";
};

// descargaBtn.onclick = function () {
//   modalThree.style.display = "block";
//   document.body.style.overflow = "hidden";
// };

// MODAL THREE CONTAINER

// MODAL CONTAINER FOUR

let modalFour = document.getElementById("myModalFour");

let contactoBtn = document.getElementById("contactoBtn");

let span4 = document.getElementsByClassName("close-4")[0];

span4.onclick = function () {
  modalFour.style.display = "none";
  document.body.style.overflow = "auto";
};

contactoBtn.addEventListener('click', openFour);

function openFour() {
  modalFour.style.display = "block";
  document.body.style.overflow = "hidden";
};

// contactoBtn.onclick = function () {
//   modalFour.style.display = "block";
//   document.body.style.overflow = "hidden";
// };

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


// for (let el of modalMenu) {
  
//   el.addEventListener("click", function(ev) {
//     console.log("atrevido");
// }

// MODALS TEST


let linksNav = document.querySelectorAll('.modal-menu');

linksNav[4].addEventListener('click', openModalOne);
linksNav[8].addEventListener('click', openModalOne);
linksNav[12].addEventListener('click', openModalOne);

function openModalOne() {
  console.log('funciona');
  openOne();
  modalTwo.style.display = 'none';
  modalThree.style.display = 'none';
  modalFour.style.display = 'none';
}

linksNav[1].addEventListener('click', openModalTwo);
linksNav[9].addEventListener('click', openModalTwo);
linksNav[13].addEventListener('click', openModalTwo);

function openModalTwo() {
  console.log('funciona 2');
  openTwo();
  modalOne.style.display = 'none';
  modalThree.style.display = 'none';
  modalFour.style.display = 'none';
}

linksNav[2].addEventListener('click', openModalThree);
linksNav[6].addEventListener('click', openModalThree);
linksNav[14].addEventListener('click', openModalThree);

function openModalThree() {
  console.log('funciona 3');
  openThree();
  modalOne.style.display = 'none';
  modalTwo.style.display = 'none';
  modalFour.style.display = 'none';
}

linksNav[3].addEventListener('click', openModalFour);
linksNav[7].addEventListener('click', openModalFour);
linksNav[11].addEventListener('click', openModalFour);

function openModalFour() {
  console.log('funciona 4');
  openFour();
  modalOne.style.display = 'none';
  modalTwo.style.display = 'none';
  modalThree.style.display = 'none';
}