const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

// ----------------------------------- TOGGLE MENU -----------------------------------------

// Al dar click en las 3 rayas del menu, se despliega el menu 

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
};

// Al dar click en el X se cierra el Menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
};
// Al dar click en cualquiera de las aopciones del menu se cierra el menu
navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
}));

//**************************************************** */ CHANGE BACKGROUND HEADER-----------*************************************

//Agrega un background en nav al bajar 50 px con el scroll

const scrollHeader = () =>{
    const header = document.getElementById("header");

    this.scrollY >= 50 
    ? header.classList.add("bg-header") 
    : header.classList.remove("bg-header");
}

window.addEventListener('scroll', scrollHeader);


// ------------------- SCROLL SECTION ACTIVE LINK --------------------------------------------------------
//Verifica en que parte de la pagina se encuentra y respecto a este cambia en color de la letra en el nav

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
// Primero es que al bajar 350 px con el scroll hace aparcer la flecha del scroll app
// Al dar click en el scroll app que es la fleca que esta en la parte inferior deracha 
// Sube hasta el home

const scrollup = () =>{
    const scrollup = document.getElementById("scroll-up");

    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll");
}

window.addEventListener('scroll', scrollup);

// --------------------------------------- Carrucel de Imagenes ----------------------------------------
// Primero Inicializa el index en 0 que es la primera imagen,
//  en la funcion remueve la clase active de la primera imagen suma 1 al index y le añade active a esa imagen
// al terminar esa funcion el contador de reinicia. por lo tanto es un bucle 
const images = document.querySelectorAll('.home__carousel .home__img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3500);


// ---------------------------------------------------- DARK LIGTH THEME ------------------------------------------
// Primero en el primer if comprueba el estado (mode) de la pagina y lo cambia de thema a claro en caso sea darckMode.
// en teheme buttom hace el cambio de temas al hacer click en el icono cambiara thema segun sea el caso
// en las funciones (darkmode), primero añande el darkTheme a todo el body, tambien cabia el icono de luna a sol, y pone el modo en darkmode
// en la otra funcion (ligthMode) hace lo contrario. 
//
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
// Importo Scroll Reveal desde internet
// en la variable de sr se guarda los parametros de las animaciones
// en los demas sr llama a las clases de los contenedores donde se les vas a aplciar la animacion
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

sr.reveal('.footer', { origin: 'bottom', interval: 200 });

