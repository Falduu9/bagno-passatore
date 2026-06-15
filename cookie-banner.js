// Cookie Banner Semplice per Bagno del Passatore
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    // Controlla se l'utente ha già espresso una scelta
    if (!localStorage.getItem('cookieChoice')) {
        // Mostra il banner dopo 1 secondo
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Pulsante Accetta
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
            localStorage.setItem('cookieChoice', 'accepted');
            cookieBanner.classList.remove('show');
            // Qui puoi aggiungere il caricamento di analytics se vuoi
            console.log('Cookie accettati');
        });
    }

    // Pulsante Rifiuta
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function () {
            localStorage.setItem('cookieChoice', 'rejected');
            cookieBanner.classList.remove('show');
            console.log('Cookie rifiutati');
        });
    }
});