window.addEventListener("scroll", function (){
    let header = document.querySelector('.conteiner-menu')
    header.classList.toggle('transition',window.scrollY > 10) 

})


function menuShow() {
    let menuMobile = document.querySelector('.js-menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
