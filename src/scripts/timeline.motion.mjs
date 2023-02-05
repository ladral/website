import {animate, inView, timeline} from "motion";
import {isElementLeavingBottom} from "./motion.helper.mjs";

function registerTimelineMotion(projectsTimelineStartIcon, projectsTimeline) {
    // preset styles to prevent design glitch on firs scroll
    projectsTimelineStartIcon.style.opacity = 0;
    projectsTimeline.style.height = 0;

    inView(projectsTimelineStartIcon, () => {

        const sequence = [
            [projectsTimelineStartIcon,
                {opacity: [0, 1]},
                {duration: 1, easing: "ease-out"}
            ],
            [projectsTimeline,
                {height: ["0%", "100%"]},
                {duration: 2, easing: "ease-in-out", delay: 0.5}
            ]
        ]

        timeline(sequence);
    });
}

function registerFadeInAnimation(animationTarget) {
    // preset styles to prevent design glitch on firs scroll
    animationTarget.style.opacity = 0;

    let runAnimation = true;

    inView(animationTarget, () => {
        const controls = animate(
            animationTarget,
            {opacity: [0, 1], clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "none"},
            {duration: 0.5, easing: [0.17, 0.55, 0.55, 1], delay: 0.5}
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

export {registerTimelineMotion, registerFadeInAnimation}