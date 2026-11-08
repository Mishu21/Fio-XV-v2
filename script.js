const boton = document.getElementById("openInvitation");
const contenido = document.getElementById("invitationContent");

boton.addEventListener("click", () => {

    contenido.style.display = "block";

    contenido.scrollIntoView({
        behavior: "smooth"
    });

});

/* CUENTA REGRESIVA */

const targetDate =
new Date("March 27, 2027 21:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
        (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();

/* PARTICULAS MAGICAS */

const particles =
document.getElementById("particles");

for(let i = 0; i < 60; i++){

    const p =
    document.createElement("div");

    p.classList.add("particle");

    p.style.left =
    Math.random() * 100 + "%";

    p.style.animationDuration =
    (4 + Math.random() * 8) + "s";

    p.style.animationDelay =
    Math.random() * 5 + "s";

    particles.appendChild(p);

}
