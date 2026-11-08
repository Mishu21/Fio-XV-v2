const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const player = document.getElementById("music");

openBtn.addEventListener("click", () => {

    document.body.classList.add("open");

    player.play();

    setTimeout(() => {

        intro.style.display = "none";
        content.style.display = "block";

        window.scrollTo(0,0);

    }, 2200);

});

const eventDate = new Date(
"March 20, 2027 22:00:00"
).getTime();

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
    (1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown,1000);
