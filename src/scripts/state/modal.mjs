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

            console.log("set")

        },
        closeModal() {
            this.state.open = false;

            let page = document.querySelector(".page")
            page.classList.toggle('u-no-scroll', false);
        }
    }))
})