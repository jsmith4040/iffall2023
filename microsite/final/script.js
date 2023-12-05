const nav = document.getElementById('nav');
const internalNav = document.getElementById('page-nav')
const hamburger = document.getElementById('hamburger');
const collapse = document.getElementById('collapse');
const readmore = document.getElementById('readmore');
const twisties = document.getElementById('twisties');
const simoneNav = document.getElementById('simone-nav');
let x = window.matchMedia("(max-width: 650px)");

hamburger.addEventListener('click', showNav);
collapse.addEventListener('click', hideNav);
if (readmore) {
    readmore.addEventListener('click', showTwisties);
}
simoneNav.addEventListener('mouseover', showSimoneDropdown);
simoneNav.addEventListener('mouseleave', hideSimoneDropdown);

function showNav() {
    if(x.matches) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'flex';
    }
}

function hideNav() {
    nav.style.display = 'none';
}

function showTwisties() {
    twisties.style.display = 'block';
}

function showSimoneDropdown() {
    if(x.matches) {

    } else {
        internalNav.style.display = 'block';
        console.log('merp');
    }
}

function hideSimoneDropdown() {
    internalNav.style.display = 'none';
}

