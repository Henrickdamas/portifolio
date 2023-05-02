window.addEventListener("scroll", function (){
    let header = document.querySelector('.header')
    header.classList.toggle('transition',window.scrollY > 10) 

})

