import '../../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css';
import '../../../node_modules/@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';
let gallery = new Splide('.splide').mount();

document.addEventListener('alpine:init', () => {
    Alpine.data('modal', () => ({
        state: {
            open: false
        },
        images: [],
        projects: [
            {
                title: 'Ladral Website',
                images: [
                    {
                        id: "splied01-slide01",
                        url: new URL('../../assets/images/ladral-website-cloud.png', import.meta.url),
                    }
                ]
            },
            {
                title: 'Assembly Dashboard',
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
            }
        ],

        setModal(title) {
            // get images for matching project title
            // an update of the images will trigger a gallery refresh -> see x-init watching for images
            this.images = this.projects.filter(project => project.title === title).map(project => project.images)[0];

            // navigate gallery to first image
            gallery.go(0);

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', true);
            this.state.open = true;
        },
        closeModal() {
            this.state.open = false;

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', false);
        },
        refreshGallery() {
            // refresh gallery to handle updated content -> splide.js does not automatically refresh if content changes
            gallery.refresh();
            gallery.go(0);
        }
    }))
})