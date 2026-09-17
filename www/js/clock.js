function updateClock() {
  const now = new Date();

  const months = [
    "JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN",
    "JUIL", "AOÛT", "SEPT", "OCTO", "NOVE", "DÉCE"
  ];

  const day = String(now.getDate()).padStart(2, "0");
  const month = months[now.getMonth()];
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${day} ${month} - ${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

