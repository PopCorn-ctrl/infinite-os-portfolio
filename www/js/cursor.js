const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});


const customMenu = document.getElementById("customMenu");
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  //Set positiom of the custom menu to where user clicked
  customMenu.style.top = `${event.pageY}px`;
  customMenu.style.left = `${event.pageX}px`;
  customMenu.style.display = "block";
});
document.addEventListener("click", () => {
  customMenu.style.display = "none";
});