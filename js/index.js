const header = document.querySelector("header");
const navButton = document.querySelector(".toggle-mobile-nav");
const navMenu = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".mobile-overlay");
const playBtn = document.querySelector(".play-btn");
function toggle(){
    window.scrollY > 80 ? 
    header.classList.add("scroll-header") :
    header.classList.remove("scroll-header");
}

function toggleMobileNav(){
    navMenu.classList.toggle("is-active");
    overlay.classList.toggle("is-active");
    if (navIcon.classList.contains("lnr-menu")){
        navIcon.classList.remove("lnr-menu");
        navIcon.classList.add("lnr-cross");
    } else {
        navIcon.classList.remove("lnr-cross");
        navIcon.classList.add("lnr-menu");
    }

}

window.addEventListener("scroll", toggle, {passive: true});
window.addEventListener("touchmove", toggle, {passive: true});

const navIcon = navButton.firstElementChild;
navButton.addEventListener("click", toggleMobileNav);
