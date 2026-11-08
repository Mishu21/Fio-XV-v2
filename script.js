/* ========================= */
/* APERTURA DE INVITACION */
/* ========================= */

const cover = document.getElementById("cover");
const contenido = document.getElementById("invitationContent");

cover.addEventListener("click", () => {

    cover.style.transition = "opacity 1.2s ease";
    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";

        contenido.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* ========================= */
/* CUENTA REGRESIVA */
/* ========================= */

const targetDate = new Date(
    "March 27, 2027 21:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    
