/* ================================= */
/* APERTURA DE LA INVITACION */
/* ================================= */

const cover =
    document.getElementById("cover");

const invitationContent =
    document.getElementById(
        "invitationContent"
    );

cover.addEventListener("click", () => {

    cover.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";

    cover.style.opacity = "0";

    cover.style.transform =
        "scale(1.08)";

    setTimeout(() => {

        cover.style.display =
            "none";

        invitationContent.style.display =
            "block";

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

function animateValue(id, value) {

    const element =
        document.getElementById(id);

    if (!element) return;

    if (
        element.textContent !==
        String(value)
    ) {

        element.style.opacity = "0";

        setTimeout(() => {

            element.textContent =
                value;

            element.style.opacity =
                "1";

        }, 150);

    }

}

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        targetDate - now;

    if (distance <= 0) {

        animateValue("days", 0);
        animateValue("hours", 0);
        animateValue("minutes", 0);
        animateValue("seconds", 0);

        return;

    }

    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        ) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (
            distance %
            (1000 * 60)
        ) /
        1000
    );

    animateValue("days", days);
    animateValue("hours", hours);
    animateValue("minutes", minutes);
    animateValue("seconds", seconds);

}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

/* ================================= */
/* APARICION ESCALONADA */
/* ================================= */

function activateAnimations() {

    const sections =
        document.querySelectorAll(
            ".fade-section"
        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;

                        entry.target
                            .classList
                            .add("visible");

                        const items =
                            entry.target.querySelectorAll(
                                "h2, h3, p, .btn, .time-box, .gift-card"
                            );

                        items.forEach(
                            (
                                item,
                                index
                            ) => {

                                item.animate(
                                    [
                                        {
                                            opacity: 0,
                                            transform:
                                                "translateY(25px)"
                                        },
                                        {
                                            opacity: 1,
                                            transform:
                                                "translateY(0)"
                                        }
                                    ],
                                    {
                                        duration: 900,
                                        delay:
                                            index *
                                            120,
                                        easing:
                                            "ease-out",
                                        fill:
                                            "forwards"
                                    }
                                );

                            }
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },

            {
                threshold: 0.15
            }

        );

    sections.forEach(
        section =>
            observer.observe(
                section
            )
    );

}

/* ================================= */
/* PARALLAX SUAVE MOBILE FRIENDLY */
/* ================================= */

let ticking = false;

function updateParallax() {

    const isMobile =
        window.innerWidth <= 768;

    const speed =
        isMobile
            ? 0.05
            : 0.12;

    document
        .querySelectorAll(".scene")
        .forEach(scene => {

            const rect =
                scene.getBoundingClientRect();

            const offset =
                rect.top * speed;

            scene.style.backgroundPosition =
                `center ${offset}px`;

        });

    ticking = false;

}

window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            requestAnimationFrame(
                updateParallax
            );

            ticking = true;

        }

    },
    { passive: true }
);

/* ================================= */
/* COPIAR ALIAS */
/* ================================= */

function copyAlias() {

    navigator.clipboard
        .writeText(
            "fydiaz.27.mp"
        )
        .then(() => {

            const button =
                document.querySelector(
                    ".btn-copy"
                );

            if (!button) return;

            const originalText =
                button.innerHTML;

            button.innerHTML =
                "✨ Alias copiado";

            setTimeout(() => {

                button.innerHTML =
                    originalText;

            }, 2500);

        });

}
