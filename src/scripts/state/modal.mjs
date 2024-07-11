import '../../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css';
import '../../../node_modules/@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

let gallery = new Splide('.splide').mount();

document.addEventListener('alpine:init', () => {
    Alpine.data('modal', () => ({
        state: {
            open: false,
            images: [],
        },
        projects: [
            {
                title: 'Ladral Website',
                images: [
                    {
                        id: "splied01-slide01",
                        url: new URL('../../assets/images/ladral-website-cloud.png', import.meta.url),
                    },
                    {
                        id: "splied01-slide02",
                        url: new URL('../../assets/images/ladral-website-footer.png', import.meta.url),
                    }
                ]
            },
            {
                title: 'Assembly Dashboard',
                images: [
                    {
                        id: "splied01-slide01",
                        url: new URL('../../assets/images/assembly-dashboard.png', import.meta.url),
                    },
                    {
                        id: "splied01-slide02",
                        url: new URL('../../assets/images/assembly-dashboard-docker-deployment.png', import.meta.url),
                    }
                ]
            },
            {
                title: 'Cunfin',
                images: [
                    {
                        id: "splied01-slide01",
                        url: new URL('../../assets/images/cunfin.png', import.meta.url),
                    },
                    {
                        id: "splied01-slide01",
                        url: new URL('../../assets/images/cunfin-kreya.png', import.meta.url),
                    },
                    {
                        id: "splied01-slide03",
                        url: new URL('../../assets/images/assembly-dashboard-docker-deployment-with-cunfin.png', import.meta.url),
                    }
                ]
            }
        ],

        setModal(title) {
            // deactivate background scroll
            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', true);

            // get images for matching project title
            // an update of the images will trigger a gallery refresh -> see x-init watching for images
            this.state.images = this.projects.filter(project => project.title === title).map(project => project.images)[0];
            this.state.open = true;

            // navigate gallery to first image
            gallery.go(0);
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