import {animate, inView, spring} from "motion";
import {isElementLeavingBottom} from "./motion.helper.mjs";

function registerRevealMotion(revealElement) {
    // preset styles to prevent design glitch on firs scroll
    revealElement.style.opacity = 0;

    reveal(revealElement);
}

function reveal(element) {
    let runAnimation = true;

    inView(element, () => {
        const elementWidth = element.offsetWidth;

        const controls = animate(
            element,
            {x: [elementWidth , 0], opacity: [0, 1]},
            {easing: spring({stiffness: 50, damping: 12}), duration: 0.7, delay: 0.5}
        )

        if (runAnimation === false) {
            controls.finish()
        }

        return (leaveInfo) => {
            controls.currentTime = 0
            controls.stop()
            runAnimation = isElementLeavingBottom(leaveInfo)
        }
    });
}

module.exports = {
    registerRevealMotion
}