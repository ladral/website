import { animate, inView } from "motion"

const headlines = document.querySelectorAll(".headline");

headlines.forEach(headline => {
    inView(headline, () => {
        animate(
            headline,
            { opacity: 1, transform: "none" },
            { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
        );
    });
})
