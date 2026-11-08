const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    document.body.classList.add("abrir");

    music.play();

    setTimeout(() => {

        intro.style.display = "none";
        content.style.display = "block";

        window.scrollTo(0,0);

    },2500);

});

const eventDate =
new Date("March 20, 2027 22:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days =
    Math.floor(distance / (1000*60*60*24));

    const hours =
    Math.floor((distance %
    (1000*60*60*24))
    /(1000*60*60));

    const minutes =
    Math.floor((distance %
    (1000*60*60))
    /(1000*60));

    const seconds =
    Math.floor((distance %
    (1000*60))
    /1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();

setInterval(updateCountdown,1000);
