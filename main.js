// scroll down color changer code
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// the hum navbar code
window.onload = function(){
    const menu__btn = document.querySelector(".hamburger");
    const mobile__menu = document.querySelector(".mobile-nav")

    menu__btn.addEventListener("click", function(){
        menu__btn.classList.toggle('is-active');
        mobile__menu.classList.toggle('is-active');
    })  
}