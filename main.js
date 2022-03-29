let toggleBtn = document.getElementsByClassName('navbar_toggle')[0];
let toggleLinks = document.getElementsByClassName('nav-container-2')[0];

toggleBtn.addEventListener('click', ()=> {
    toggleLinks.classList.toggle('active');
    console.log('workddddssss')    
})