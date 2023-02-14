import {scroll} from "motion"
import {registerRevealMotion} from "./reveal.motion.mjs";
import {registerTimelineMotion, registerFadeInAnimation} from "./timeline.motion.mjs";
import {registerBounceAnimation} from "./scroll.motion.mjs";
import {registerHeadlineMotion} from "./headline.motion.mjs";

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

/* headline animation */
const headlines = document.querySelectorAll(".headline--motion");
headlines.forEach(headline => {
    const heading = headline.querySelector(".headline__text");
    const underscore = headline.querySelector(".headline__underscore");
    registerHeadlineMotion(headline, heading, underscore);
})

/* timeline animation */
const timelineStartIcon = document.querySelector(".timeline__start-icon");
const timelineLine = document.querySelector(".timeline__line");
registerTimelineMotion(timelineStartIcon, timelineLine)

/* fade-in animation for timeline indicators */
const timelineIndicators = document.querySelectorAll(".timeline__indicator--motion");
timelineIndicators.forEach(registerFadeInAnimation);

/* reveal motion for project cards */
const revealElements = document.querySelectorAll(".reveal-motion");
revealElements.forEach(registerRevealMotion);