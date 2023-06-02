import {animate, scroll} from "motion"
import {registerRevealMotion} from "./reveal.motion.mjs";
import {registerTimelineMotion, registerFadeInAnimation} from "./timeline.motion.mjs";
import {registerBounceAnimation} from "./scroll.motion.mjs";
import {registerHeadlineMotion} from "./headline.motion.mjs";

/* header */
const header = document.querySelector(".header");

scroll(animate(header, {y: [header.offsetHeight * -1, 0]}), {
            target: document.querySelector(".illustration__project-logo"),
            offset: ["start start", "end start"]
        }
    )


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
const projectsTimeline = document.querySelector(".projects__timeline");
const timelineStartIcon = document.querySelector(".timeline__start-icon");
const timelineLine = document.querySelector(".timeline__line");
registerTimelineMotion(projectsTimeline, timelineStartIcon, timelineLine)

/* fade-in animation for timeline indicators */
const timelineIndicators = document.querySelectorAll(".timeline__indicator--motion");
timelineIndicators.forEach(registerFadeInAnimation);

/* reveal motion for project cards */
const revealElements = document.querySelectorAll(".reveal-motion");
revealElements.forEach(registerRevealMotion);