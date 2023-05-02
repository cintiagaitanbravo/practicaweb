const hamburguer = document.querySelector(".nav__icon");
const logo = document.querySelector('.nav__icon');
const menu = document.querySelector('.nav__list');
let openMenu=true

hamburguer.addEventListener('click', ()=>{

    if(open){
        logo.src = './images/logo-bookmarkwhite.svg'
        hamburguer.src = './images/icon-close.svg';
        openMenu = false;
    }else{
        logo.src = './images/logo-bookmark.svg'
        hamburguer.src = './images/icon-hamburger.svg';
        openMenu = true;

    }
    
     menu.classList.toggle('nav__list--show');   
});

