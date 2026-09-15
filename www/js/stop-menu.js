const stopMenu = document.querySelector(".stop-menu");
const logo = document.querySelector(".logo");

const quit = document.getElementById("close");
const refresh = document.getElementById("refresh");

logo.addEventListener("click", (e) => {
  e.stopPropagation();
  stopMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
    stopMenu.classList.remove("active");
});

stopMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

quit.addEventListener("click", () => {
    document.body.classList.add("shutdown");
    document.getElementById("shutdownScreen").classList.add("show");

    setTimeout(() => {
        window.close();
    }, 2000);
});

refresh.addEventListener("click", () => {
    window.location.reload();
    console.log("test")
})