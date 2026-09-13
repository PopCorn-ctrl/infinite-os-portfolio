function updateClock() {

  const now = new Date();

  let hours = now.getHours();

  let minutes = now.getMinutes();

  let seconds = now.getSeconds();

  let ampm = "AM";

  if (hours >= 12) {

    ampm = "PM";

    if (hours > 12) hours -= 12;

  }

  if (hours === 0) hours = 12;

  hours = hours < 10 ? "0" + hours : hours;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").textContent = hours;

  document.getElementById("minutes").textContent = minutes;

  document.getElementById("seconds").textContent = seconds;

  document.getElementById("ampm").textContent = ampm;

}

setInterval(updateClock, 1000);

updateClock();