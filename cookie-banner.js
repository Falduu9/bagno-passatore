// Cookie Banner Modale Professionale
document.addEventListener('DOMContentLoaded', function () {
    const cookieOverlay = document.getElementById('cookie-overlay');
    const cookieClose = document.getElementById('cookie-close');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    const preferencesBtn = document.getElementById('cookie-preferences');

    // Controlla se l'utente ha già espresso una scelta
    if (!localStorage.getItem('cookieChoice')) {
        // Mostra il modal dopo 500ms
        setTimeout(() => {
            cookieOverlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Blocca scroll
        }, 500);
    }

    // Funzione per chiudere
    function closeCookieBanner(choice) {
        localStorage.setItem('cookieChoice', choice);
        cookieOverlay.classList.remove('show');
        document.body.style.overflow = ''; // Riabilita scroll
    }

    // Pulsante Accetta
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
            closeCookieBanner('accepted');
            console.log('Cookie accettati');
        });
    }

    // Pulsante Nega
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function () {
            closeCookieBanner('rejected');
            console.log('Cookie negati');
        });
    }

    // Pulsante Preferenze (per ora chiude, puoi espanderlo)
    if (preferencesBtn) {
        preferencesBtn.addEventListener('click', function () {
            alert('Funzionalità preferenze in arrivo! Per ora puoi accettare o negare.');
        });
    }

    // Pulsante X per chiudere (considerato come rifiuto)
    if (cookieClose) {
        cookieClose.addEventListener('click', function () {
            closeCookieBanner('rejected');
        });
    }

    // Click fuori dal modal chiude
    cookieOverlay.addEventListener('click', function (e) {
        if (e.target === cookieOverlay) {
            closeCookieBanner('rejected');
        }
    });
});