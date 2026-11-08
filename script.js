/* ================================= */
/* APERTURA DE LA INVITACION */
/* ================================= */

const cover = document.getElementById("cover");
const invitationContent = document.getElementById("invitationContent");

cover.addEventListener("click", () => {

    cover.style.transition = "opacity 1.5s ease";
    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";

        invitationContent.style.display = "block";

        activateAnimations();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);

});


/* ================================= */
/* CUENTA REGRESIVA */
/* ================================= */

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
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ================================= */
/* PARTICULAS MAGICAS */
/* ================================= */

const particlesContainer =
document.getElementById("particles");

for (let i = 0; i < 25; i++) {

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.top =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (8 + Math.random() * 10) + "s";

    particle.style.animationDelay =
    Math.random() * 10 + "s";

    particle.style.opacity =
    0.2 + Math.random() * 0.8;

    particlesContainer.appendChild(particle);

}


/* ================================= */
/* ANIMACION DE SECCIONES */
/* ================================= */

function activateAnimations() {

    const sections =
    document.querySelectorAll(".fade-section");

    const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ================================= */
/* COPIAR ALIAS */
/* ================================= */

function copyAlias() {

    navigator.clipboard.writeText(
        "fydiaz.27.mp"
    );

    const button =
    document.querySelector(".btn-copy, .btn");

    const originalText =
    button.innerHTML;

    button.innerHTML =
    "✅ Alias Copiado";

    setTimeout(() => {

        button.innerHTML =
        originalText;

    }, 2500);

}
