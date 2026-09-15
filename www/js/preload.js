const TEST = document.querySelector('.cursor');
const startup = document.getElementById('startup');

window.addEventListener('load', () => {

    const loadingScreen = document.querySelector('.loading');

    setTimeout(() => {

        // Lance le swipe diagonal
        loadingScreen.classList.add('hide');

        // Révèle la page
        startup.style.opacity = '1';
        startup.style.transform = 'scale(1)';
        startup.style.filter = 'blur(0)';

        // Supprime le preload après l'animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 4000);

    }, 5000);

});

particlesJS.load('particles-js', 'www/js/particlesjs-config.json', function () {
    console.log('Particles.js chargé');
});