const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("music");

intro.addEventListener("click", () => {

    document.body.classList.add("abrir");

    music.play().catch(() => {});

    setTimeout(() => {

        intro.style.display = "none";
        content.style.display = "block";

        window.scrollTo(0, 0);

    }, 2000);

});

const eventDate =
new Date("March 20, 2027 22:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    document.getElementById("days").innerText =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerText =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerText =
        Math.floor((distance % (1000 * 60)) / 1000);
}

updateCountdown();

setInterval(updateCountdown, 1000);
