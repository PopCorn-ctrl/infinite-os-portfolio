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
  
  customMenu.style.display = "block";

  let x = event.pageX;
  let y = event.pageY;

  const menuWidth = customMenu.offsetWidth;
  const menuHeight = customMenu.offsetHeight

  if (x + menuWidth > window.innerWidth) {
    x = window.innerWidth - menuWidth;
  }

  if (y + menuHeight > window.innerHeight) {
    y = window.innerHeight - menuHeight;
  }

  customMenu.style.top = `${y}px`;
  customMenu.style.left = `${x}px`;
});
document.addEventListener("click", () => {
  customMenu.style.display = "none";
});