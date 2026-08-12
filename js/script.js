const images = [
    "images/warli1.png",
    "images/warli2.png",
    "images/warli3.png",
    "images/warli4.png",
    "images/warli5.png",
    "images/warli6.png"
];

const bg = document.getElementById("warli-bg");

function createBackground() {

    bg.innerHTML = "";

    const boxSize = 140;
    const cols = Math.ceil(window.innerWidth / boxSize);
    const rows = Math.ceil(document.documentElement.scrollHeight / boxSize);

    const total = cols * rows;

    for (let i = 0; i < total; i++) {

        const box = document.createElement("div");
        box.className = "warli-box";

        // 35% boxes remain empty
        if (Math.random() > 0.35) {

            const img = document.createElement("img");

            img.src = images[Math.floor(Math.random() * images.length)];

            const rotate = Math.floor(Math.random() * 360);
            const scale = (0.55 + Math.random() * 0.8).toFixed(2);
            const opacity = (0.08 + Math.random() * 0.10).toFixed(2);

            const flipX = Math.random() > 0.5 ? -1 : 1;
            const flipY = Math.random() > 0.5 ? -1 : 1;

            img.style.width = `${55 + Math.random() * 35}%`;

            img.style.opacity = opacity;

            img.style.transform =
                `translate(${Math.random()*12-6}px,${Math.random()*12-6}px)
                 rotate(${rotate}deg)
                 scale(${flipX * scale},${flipY * scale})`;

            img.style.animationDelay = `${Math.random()*6}s`;

            box.appendChild(img);
        }

        bg.appendChild(box);
    }

}

createBackground();

window.addEventListener("resize", createBackground);