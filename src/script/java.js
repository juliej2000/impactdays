/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton?.addEventListener("click", () => {

    const isOpen = mainNav?.classList.toggle("is-open") ?? false;

    menuButton.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Luk menu når der klikkes på et link */

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav?.classList.remove("is-open");
        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const cards = document.querySelectorAll(".program-card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.classList.add("reveal");

    observer.observe(card);

});


/* =====================================================
   HEADER ON SCROLL
===================================================== */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   CARD MOUSE MOVEMENT
===================================================== */

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width;

        const y =
            (event.clientY - rect.top) /
            rect.height;

        const rotateX = (0.5 - y) * 4;
        const rotateY = (x - 0.5) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});