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

// modal container

let weAre = document.getElementById('quienes-somos');

weAre.addEventListener('click', modalPageOne);

let modalOne = document.getElementById('myModalOne');

let span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modalOne.style.display = 'none';
}

function modalPageOne() {
    console.log('it works!');
    modalOne.style.display = 'block';
}

window.addEventListener('click', function(event) {
    if (event.target == modalOne) {
        modalOne.style.display = 'none';
    }
});
