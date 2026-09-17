const moon = document.getElementById("theme-moon");
const sun = document.getElementById("theme-sun");

const fgjour = document.querySelector(".fgjour");
const fgnuit = document.querySelector(".fgnuit");

const bgjour = document.querySelector(".bgjour");
const bgnuit = document.querySelector(".bgnuit");

function switchTheme(outFg, outBg, inFg, inBg) {
    // Le thème actuel part vers la droite
    outFg.classList.remove("active");
    outFg.classList.add("leaving");

    outBg.classList.remove("active");
    outBg.classList.add("leaving");

    // Le thème entrant est repositionné instantanément à gauche (sans transition)
    inFg.classList.remove("leaving", "active");
    inFg.classList.add("reset");

    inBg.classList.remove("leaving", "active");
    inBg.classList.add("reset");

    // Forcer le navigateur à prendre en compte le reset avant de relancer la transition
    void inFg.offsetWidth;

    requestAnimationFrame(() => {
        inFg.classList.remove("reset");
        inFg.classList.add("active");

        inBg.classList.remove("reset");
        inBg.classList.add("active");
    });
}

moon.addEventListener("click", () => {
    switchTheme(fgjour, bgjour, fgnuit, bgnuit);

    moon.classList.add("disable");
    sun.classList.remove("disable");
});

sun.addEventListener("click", () => {
    switchTheme(fgnuit, bgnuit, fgjour, bgjour);

    moon.classList.remove("disable");
    sun.classList.add("disable");
});