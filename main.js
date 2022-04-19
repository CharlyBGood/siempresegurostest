let toggleBtn = document.getElementsByClassName('navbar_toggle')[0];
let toggleLinks = document.getElementsByClassName('nav-container-2')[0];

toggleBtn.addEventListener('click', ()=> {
    toggleLinks.classList.toggle('active');
    console.log('workddddssss')    
})

// slideshow

let slideshows = document.querySelectorAll('[data-component="slideshow"]');

slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    let index = 0, time = 5000;
    slides[index].classList.add('active');

    setInterval( () => {
        slides[index].classList.remove('active');

        // go over each slide incrementing the index
        index++;

        if (index === slides.length) index = 0;

        slides[index].classList.add('active');
    }, time);
}

// MODAL ONE CONTAINER

let modalOne = document.getElementById('myModalOne');

let quienesBtn = document.getElementById('quienesSomosBtn');

let span1 = document.getElementsByClassName('close')[0];

span1.onclick = function() {
    modalOne.style.display = 'none';
}

quienesBtn.onclick = function() {
    modalOne.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == modalOne) {
        modalOne.style.display = 'none';
    }
};

// MODAL ONE CONTAINER

// MODAL TWO CONTAINER
let modalTwo = document.getElementById('myModalTwo');

let segurosBtn = document.getElementById('segurosBtn');

let span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modalTwo.style.display = 'none';
}

segurosBtn.onclick = function() {
    modalTwo.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == modalTwo) {
        modalTwo.style.display = 'none';
    }
};


//  modal footer slideShow2

let slideIndex = 0;
carrousel();

function carrousel() {
    let i;
    let x = document.getElementsByClassName('slideShow2');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';        
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex-1].style.display = 'block';
    setTimeout(carrousel, 2000);
}

// MODAL TWO CONTAINER