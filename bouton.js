const btn = document.querySelector('.btn');

/* "écouteur" d'événements sur le bouton pour détecter le clic de la souris */
btn.addEventListener('click', () => {
    /* fait défiler la fenêtre vers le haut */
    window.scrollTo({
        top: 0,                
        left: 0,               
        behavior: "smooth"    
    });
});
