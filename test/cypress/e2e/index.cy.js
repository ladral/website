describe('When navigate to index page', () => {
    context("header", () => {
        it('should have link to favicon', () => {
            cy.visit('http://localhost:1234/index.html').document()
                .its('head')
                .find('link[rel="icon"]')
                .should('have.attr', 'href')
                .should('contain', "favicon-");
        });
    });

    context('svg elements', () => {
        it('should have viewbox attribute', () => {
            cy.get('svg')
                .each((item, index) => {
                    cy.wrap(item)
                        .should('have.attr', 'viewBox')
                });
        });
    });

    context('scroll hint', () => {
        it('should be visible on page load', () => {
            cy.get('.illustration__scroll-hint').each(item => {
                cy.wrap(item)
                    .should('be.visible');
            });
        });

        it('should not be visible after scrolling down', () => {
            cy.get('.illustration__scroll-hint').each(item => {
                cy.scrollTo(0, 100)
                cy.wrap(item)
                    .should('not.be.visible')
            });
        });
    });
})