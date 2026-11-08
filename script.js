const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("music");

intro.addEventListener("click", () => {

    document.body.classList.add("abrir");

    music.play().catch(() => {});

    setTimeout(() => {

        intro.style.display = "none";
        content.style.display = "block";

        startParticles();

    }, 1800);

});

/* ALIAS */

function copyAlias(){

    navigator.clipboard.writeText(
        "frio.xv.ejemplo"
    );

    alert("Alias copiado ✅");
}

/* CUENTA REGRESIVA */

const eventDate =
new Date("2027-03-20T22:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();
    const distance = eventDate - now;

    if(distance < 0){
        return;
    }

    document.getElementById("days").innerText =
        Math.floor(distance / (1000*60*60*24));

    document.getElementById("hours").innerText =
        Math.floor((distance %
        (1000*60*60*24)) /
        (1000*60*60));

    document.getElementById("minutes").innerText =
        Math.floor((distance %
        (1000*60*60)) /
        (1000*60));

    document.getElementById("seconds").innerText =
        Math.floor((distance %
        (1000*60)) /
        1000);
}

updateCountdown();

setInterval(updateCountdown,1000);

/* PARTICULAS */

function startParticles(){

    const canvas =
    document.getElementById("particles");

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    const particles = [];

    for(let i=0;i<80;i++){

        particles.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            size:Math.random()*3+1,

            speed:Math.random()*0.6+0.2
        });
    }

    function animate(){

        ctx.clearRect(
            0,0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle =
        "rgba(255,255,255,.6)";

        particles.forEach(p=>{

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI*2
            );

            ctx.fill();

            p.y -= p.speed;

            if(p.y < 0){
                p.y = canvas.height;
            }

        });

        requestAnimationFrame(
            animate
        );
    }

    animate();
}
