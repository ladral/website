import '../../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/splide';

new Splide( '.splide' ).mount();

document.addEventListener('alpine:init', () => {
    Alpine.data('modal', () => ({
        state: {
            open: false
        },
        project: {
            title: ""
        },

        setModal(title)  {
            this.state.open = true;
            this.project.title = title;

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', true);
        },
        closeModal() {
            this.state.open = false;

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', false);
        }
    }))
})