import {timeline, inView, animate, scroll, spring} from "motion"
import {isElementLeavingBottom} from "./motion.helper.mjs";
import {registerRevealMotion} from "./reveal.motion.mjs";
import {registerTimelineMotion, registerFadeInAnimation} from "./timeline.motion.mjs";
import {registerBounceAnimation} from "./scroll.motion.mjs";

/* scroll hint animation */
const scrollHintArrows = document.querySelectorAll(".illustration__scroll-hint-arrow--motion");
scrollHintArrows.forEach(registerBounceAnimation)

const scrollHint = document.querySelector(".illustration__scroll-hint--motion")
scroll(({y}) => {
        const scrollAnimationDistance = 100;
        let currentScrollPositionY = y.current;

        scrollHint.style.setProperty("--__illustration__scroll-hint-Opacity", (1 - (currentScrollPositionY / scrollAnimationDistance)));
    }
);

const headlines = document.querySelectorAll(".headline--motion");

headlines.forEach(headline => {
    const heading = headline.querySelector(".headline__text");
    const underscore = headline.querySelector(".headline__underscore");

    // preset styles to prevent design glitch on firs scroll
    heading.style.opacity = 0;
    heading.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    underscore.style.width = "0%";

    const sequence = [
        [heading,
            {opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "none"},
            {duration: 0.5, easing: [0.17, 0.55, 0.55, 1]}
        ],
        [underscore,
            {width: "100%", transform: "none"}, {duration: 0.5, easing: [0.17, 0.55, 0.55, 1]}
        ]
    ]

    let runAnimation = true;

    inView(headline, () => {
        const controls = timeline(sequence, {delay: 0.25})

        if (runAnimation === false) {
            controls.finish()
        }

        return (leaveInfo) => {
            controls.currentTime = 0
            controls.stop()
            runAnimation = isElementLeavingBottom(leaveInfo)
        }
    });
})

/* timeline animation */
const projectsTimelineStartIcon = document.querySelector(".projects__timeline-start-icon");
const projectsTimeline = document.querySelector(".projects__timeline");
registerTimelineMotion(projectsTimelineStartIcon, projectsTimeline)

/* fade-in animation for timeline indicators */
const timelineIndicators = document.querySelectorAll(".projects__timeline-indicator--motion");
timelineIndicators.forEach(registerFadeInAnimation);

/* reveal motion for project cards */
const revealElements = document.querySelectorAll(".reveal-motion");
revealElements.forEach(registerRevealMotion);