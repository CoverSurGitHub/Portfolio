const btn = document.querySelector('.btn');

/* "�couteur" d'�v�nements sur le bouton pour d�tecter le clic de la souris */
btn.addEventListener('click', () => {
    /* fait d�filer la fen�tre vers le haut */
    window.scrollTo({
        top: 0,                
        left: 0,               
        behavior: "smooth"    
    });
});
