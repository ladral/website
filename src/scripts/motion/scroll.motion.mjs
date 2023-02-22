import {animate} from "motion";

function registerBounceAnimation(arrow, index) {
    animate(
        arrow,
        {y: [0, 10 + (index * 2), 0]},
        {easing: ["ease-in-out", "ease", "ease-in-out"], repeat: Infinity, duration: 1.5}
    );
}

export {registerBounceAnimation}
