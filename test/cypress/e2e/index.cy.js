describe('When navigate to index page', () => {
    context("header", () => {
        it('should have link to favicon', () => {
            cy.visit('http://localhost:1234/index.html').document()
                .its('head')
                .find('link[rel="icon"]')
                .should('have.attr', 'href')
                .should('contain', "favicon-");
        })
    })

    context("svg elements", () => {
        it('should have viewbox attribute', () => {
            cy.get('svg')
                .each((item, index) => {
                    cy.wrap(item)
                        .should('have.attr', 'viewBox')
                })
        })
    })
})