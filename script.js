/* ============================================
   SCRIPT.JS - Logica Interattiva Bagno del Passatore
============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVBAR STICKY & SCROLL EFFECT ---
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        // Se scorriamo più di 50px, aggiungiamo la classe 'scrolled'
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Apri/Chiudi menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animazione hamburger (trasforma in X)
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            // Cambia colore barre se siamo in cima (sfondo trasparente)
            if (!header.classList.contains('scrolled')) {
                spans.forEach(span => span.style.backgroundColor = '#0f2c4a');
            }
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            // Ripristina colore originale basato sullo stato scrolled
            updateHamburgerColor();
        }
    });

    // Chiudi menu quando si clicca un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            // Reset icona hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Funzione helper per aggiornare colore hamburger
    function updateHamburgerColor() {
        const spans = hamburger.querySelectorAll('span');
        const color = header.classList.contains('scrolled') ? '#0f2c4a' : '#ffffff';
        spans.forEach(span => span.style.backgroundColor = color);
    }

    // Aggiorna colore hamburger anche allo scroll se menu è chiuso
    window.addEventListener('scroll', () => {
        if (!navMenu.classList.contains('active')) {
            updateHamburgerColor();
        }
    });

    // --- 3. SMOOTH SCROLL CON OFFSET ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcola offset dinamico in base allo stato della navbar
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 4. GESTIONE BOTTONE MENÙ RISTORANTE ---
    const btnMenu = document.querySelector('.btn-secondary'); // Selettore specifico per il bottone nel ristorante

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            // In produzione qui apriresti un PDF o una modale
            alert("🍽️ Menu del Bagno del Passatore\n");
        });
    }

});