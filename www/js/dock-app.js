const applist = document.getElementById("app-list");
const chrome = document.getElementById("chrome");
const messages = document.getElementById("messages");
const mail = document.getElementById("mail");
const photos = document.getElementById("photos");
const music = document.getElementById("music");
const terminal = document.getElementById("terminal");
const trash = document.getElementById("trash");

applist.addEventListener("click", function(event) {
    console.log("App list clicked");
});

chrome.addEventListener("click", function(event) {
    console.log("Chrome clicked");
});

messages.addEventListener("click", function(event) {
    console.log("Messages clicked");
});

mail.addEventListener("click", function(event) {
    console.log("Mail clicked");
});

photos.addEventListener("click", function(event) {
    console.log("Photos clicked");
});

music.addEventListener("click", function(event) {
    console.log("Music clicked");
});

terminal.addEventListener("click", function(event) {
    console.log("Terminal clicked");
});

trash.addEventListener("click", function(event) {
    console.log("Trash clicked");
});