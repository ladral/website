import {timeline, inView, animate, scroll} from "motion"

const headlines = document.querySelectorAll(".headline--motion");

headlines.forEach(headline => {
    const heading = headline.querySelector(".headline__text")
    const underscore = headline.querySelector(".headline__underscore")

    const sequence = [
        [heading,
            {opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "none"},
            {duration: 1, easing: [0.17, 0.55, 0.55, 1]}
        ],
        [underscore,
            {width: "100%", transform: "none"}, {duration: 1, easing: [0.17, 0.55, 0.55, 1]}
        ]
    ]

    inView(headline, () => {
        const controls = timeline(sequence, {delay: 0.5})

        return (leaveInfo) => {
            //TODO: reset animation only if element leaves the window on the upper edge
            controls.currentTime = 0
            controls.stop()
        }
    });
})

const scrollHintArrows = document.querySelectorAll(".illustration__scroll-hint-arrow--motion");

scrollHintArrows.forEach((arrow, index) => {
    animate(
        arrow,
        {y: [0, 10 + (index * 2), 0]},
        {easing: ["ease-in-out", "ease", "ease-in-out"], repeat: Infinity, duration: 1.5}
    )
})

const scrollHint = document.querySelector(".illustration__scroll-hint--motion")

scroll(({y}) => {
        const scrollAnimationDistance = 100;
        let currentScrollPositionY = y.current;

        scrollHint.style.setProperty('--__illustration__scroll-hint-Opacity', (1 - (currentScrollPositionY / scrollAnimationDistance)));
    }
)