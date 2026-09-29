// ============================
// CURRENT YEAR
// ============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ============================
// CURSOR GLOW
// ============================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animateGlow() {

        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        cursorGlow.style.left = `${currentX}px`;
        cursorGlow.style.top = `${currentY}px`;

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}


// ============================
// LINK CLICK EFFECT
// ============================

document.querySelectorAll(".link-card").forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.97)";

        setTimeout(() => {
            card.style.transform = "";
        }, 120);

    });

});


// ============================
// PREVENT EMPTY LINKS
// ============================

document.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        if (!href || href === "#") {
            event.preventDefault();
        }

    });

});