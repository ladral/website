import {timeline, inView} from "motion"

const headlines = document.querySelectorAll(".headline--animated");

headlines.forEach(headline => {
    const heading = headline.querySelector(".headline__text")
    const underscore = headline.querySelector(".headline__underscore")

    const sequence = [
        [heading, {opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "none"}, {duration: 1, easing: [0.17, 0.55, 0.55, 1]}],
        [underscore, {width: "100%", transform: "none"}, {duration: 1, easing: [0.17, 0.55, 0.55, 1]}]
    ]

    inView(headline, () => {
        timeline(sequence, {delay: 0.5})
    });
})