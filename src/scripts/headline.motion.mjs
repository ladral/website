// preset styles to prevent design glitch on firs scroll
import {inView, timeline} from "motion";
import {isElementLeavingBottom} from "./motion.helper.mjs";

function registerHeadlineMotion(headline, heading, underscore) {
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
}

export {registerHeadlineMotion}
