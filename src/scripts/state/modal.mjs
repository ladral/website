import '../../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css';
import '../../../node_modules/@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

let splide = new Splide( '.splide', {pagination: true}).mount();
document.addEventListener('alpine:init', () => {
    Alpine.data('modal', () => ({
        state: {
            open: false
        },
        project: {
            title: "",
            images: [
                {
                    id: "splied01-slide01",
                    url: new URL('../../assets/images/ladral-website-cloud.png', import.meta.url),
                },
                {
                    id: "splied01-slide02",
                    url: new URL('../../assets/images/ladral-website-cloud.png', import.meta.url),
                }
            ]
        },

        setModal(title)  {
            this.state.open = true;
            this.project.title = title;

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', true);
            splide.go(0);
            splide.refresh();
        },
        closeModal() {
            this.state.open = false;

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', false);
        }
    }))
})