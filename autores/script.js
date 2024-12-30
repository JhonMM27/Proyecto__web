const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.autor__img');
sr.reveal(".autor__data", {origin : "bottom"});


sr.reveal(".autor-2__data", {origin : "left"});
sr.reveal(".autor-2__img", {origin : "right"});

sr.reveal(".footer__contenido",{origin : "bottom"});