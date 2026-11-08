/* ========================= */
/* APERTURA DE INVITACION */
/* ========================= */

const cover = document.getElementById("cover");
const contenido = document.getElementById("invitationContent");

cover.addEventListener("click", () => {

    cover.style.transition = "opacity 1.5s ease";
    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";

        contenido.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        activateAnimations();

    }, 1500);

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
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ========================= */
/* PARTICULAS MAGICAS */
/* ========================= */

const particles = document.getElementById("particles");

for (let i = 0; i < 180; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        (Math.random() * 10) + "s";

    particle.style.opacity =
        (0.3 + Math.random() * 0.7);

    particles.appendChild(particle);
}


/* ========================= */
/* APARICION DE SECCIONES */
/* ========================= */

function activateAnimations() {

    const sections =
        document.querySelectorAll(".fade-section");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        }, {
            threshold: 0.20
        });

    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ========================= */
/* COPIAR ALIAS */
/* ========================= */

function copyAlias() {

    navigator.clipboard.writeText(
        "fydiaz.27.mp"
    );

    const boton =
        document.querySelector(".copy-btn");

    const textoOriginal =
        boton.innerHTML;

    boton.innerHTML =
        "✅ Alias copiado";

    setTimeout(() => {

        boton.innerHTML =
            textoOriginal;

    }, 2500);

}


/* ========================= */
/* PARALLAX SUAVE */
/* ========================= */

window.addEventListener("scroll", () => {

    const scenes =
        document.querySelectorAll(".scene");

    scenes.forEach(scene => {

        const speed = 0.15;

        const offset =
            window.pageYOffset;

        scene.style.backgroundPositionY =
            -(offset * speed) + "px";

    });

});
