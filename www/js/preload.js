const startup = document.getElementById("startup");

window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading");
    const startup = document.getElementById("startup");

    setTimeout(() => {
        loadingScreen.classList.add("hide");

        startup.style.opacity = "1";
        startup.style.transform = "scale(1)";
        startup.style.filter = "blur(0)";

        setTimeout(() => {
            document.querySelectorAll(".reveal").forEach((el, i) => {
                setTimeout(() => el.classList.add("show"), i * 200);
            });
        }, 600); 

        setTimeout(() => {
            loadingScreen.remove();
        }, 4000);

    }, 5000);
});