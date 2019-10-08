const header = document.querySelector("header");

function toggle(){
    window.scrollY > 80 ? 
    header.classList.add("scroll_header") :
    header.classList.remove("scroll_header");
}

window.addEventListener("scroll", toggle, {passive: true});
window.addEventListener("touchmove", toggle, {passive: true});

