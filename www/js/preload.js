
const loginButton = document.querySelector('.loginbutton');
const TEST = document.querySelector('.cursor');
const startup = document.getElementById('startup');

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';

        setTimeout(() => loadingScreen.remove(), 600);
    }, 5000);   
    setTimeout(() => {
        document.querySelector(".clock").classList.add("show");
    }, 5300);
    setTimeout(() => {
        document.querySelector(".loginbutton").classList.add("show");
    }, 5600);
});

loginButton.addEventListener('mouseenter', () => {
    TEST.classList.add('expand');
});

loginButton.addEventListener('mouseleave', () => {
    TEST.classList.remove('expand');
});

loginButton.addEventListener('click', () => {
    startup.style.transform = 'translateY(-100%)';
    startup.style.transition = 'transform 1s ease-in-out';
    wait(500).then(() => {
        startup.style.display = 'none';
    });
});


particlesJS.load('particles-js', 'www/js/particlesjs-config.json', function () {
    console.log('Particles.js chargé');
});