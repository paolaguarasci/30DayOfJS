const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'; // evita il salto
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

// se faccio fixNav() viene eseguita una sola volta al caricamento della pagina
// window.addEventListener('scroll', fixNav());
window.addEventListener('scroll', fixNav);
