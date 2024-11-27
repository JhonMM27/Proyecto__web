const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");



// ----------------------------------- TOGGLE MENU -----------------------------------------

// MENU SHOW

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
};

// MENU HIDDEN
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
};
// REMOVE MENU MOVILE
navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
}));

//**************************************************** */ CHANGE BACKGROUND HEADER-----------*************************************

const scrollHeader = () =>{
    const header = document.getElementById("header");

    this.scrollY >= 50 
    ? header.classList.add("bg-header") 
    : header.classList.remove("bg-header");
}

window.addEventListener('scroll', scrollHeader);


// ------------------- SCROLL SECTION ACTIVE LINK --------------------------------------------------------
const activeLink = () => {
    const section = document.querySelectorAll('section');
    const navLink = document.querySelectorAll('.nav__link');

    let curret = "home";

    section.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop -60) {
            curret = section.getAttribute('id')
        }
    })

    navLink.forEach(item => {
        item.classList.remove('active-link');
        if (item.href.includes(curret)) {
            item.classList.add('active-link')
        }
    })
}


window.addEventListener('scroll', activeLink);

// ---------------------------------------- SHOW SCROLL UP ---------------------------------------------
const scrollup = () =>{
    const scrollup = document.getElementById("scroll-up");

    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll");
}

window.addEventListener('scroll', scrollup);




// ---------------------------------------------------- DARK LIGTH THEME ------------------------------------------

const themebuttom = document.getElementById('theme-button');

if(localStorage.getItem('mode') == 'light'){
    lightmode();
}else{
    darkmode();
}

themebuttom.addEventListener('click', (e) => {
    if(localStorage.getItem('mode') == 'light'){
        darkmode();
    }else{
        lightmode();
    }
})

function darkmode ()  {
    document.body.classList.add('dark-theme');
    themebuttom.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('mode','dark');
}
function lightmode ()  {
    document.body.classList.remove('dark-theme');
    themebuttom.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('mode','light');
}

// ==================== SROLL REVEAL ANIMATION ============================

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.home__img');
sr.reveal(".home__data", {origin : "bottom"});

sr.reveal(".acerca-de__data", {origin : "left"});
sr.reveal(".acerca-de__img", {origin : "right"});

sr.reveal(".popular__card", {interval : 100});

sr.reveal(".recientemente__data", {origin : "left"});
sr.reveal(".recientemente__img", {origin : "right"});

sr.reveal('.hoja-informativa');

sr.reveal('.footer')


