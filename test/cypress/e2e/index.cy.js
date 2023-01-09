describe('When navigate to index page', () => {
    before(() => {
        cy.visit('http://localhost:1234/index.html');
    });

    context("header", () => {
        it('should have link to favicon', () => {
            cy.visit('http://localhost:1234/index.html').document()
                .its('head')
                .find('link[rel="icon"]')
                .should('have.attr', 'href')
                .should('contain', "favicon-");
        });
    });

    context('project icon', () => {
        it('should have viewbox attribute', () => {
            cy.get('.illustration__project-icon')
                .each((item, index) => {
                    cy.wrap(item)
                        .should('have.attr', 'viewBox');
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
                    .should('not.be.visible');
            });
        });
    });

    context('projects headline', () => {
        context('headline text', () => {
            it('should not be visible on page load', () => {
                cy.get('.projects__container > .headline--motion > .headline__text')
                    .first()
                    .should('not.be.visible');
            });

            it('should be visible after scrolling element in view', () => {
                cy.get('.projects__container > .headline--motion > .headline__text')
                    .first()
                    .scrollIntoView()
                    .should('not.be.visible');
            });
        });

        context('headline underscore', () => {
            it('should not be visible on page load', () => {
                cy.get('.projects__container > .headline--motion > .headline__underscore')
                    .first()
                    .should('not.be.visible');
            });

            it('should be visible after scrolling element in view', () => {
                cy.get('.projects__container > .headline--motion > .headline__underscore')
                    .first()
                    .scrollIntoView()
                    .should('be.visible');
            });
        });
    });

    context('project card', () => {
        it('should not be visible on page load', () => {
            // arrange
            const projectCards = cy.get('.reveal-motion > .project__card');

            // act
            cy.scrollTo(0, 0); // cypress automatically scrolls to element after selecting it -> scroll back to top of page

            // assert
            projectCards.each(projectCard => {
                cy.wrap(projectCard)
                    .should('not.be.visible');

            })
        });

        it('should be visible after scrolling down', () => {
            cy.get('.reveal-motion > .project__card').each(item => {
                cy.wrap(item)
                    .scrollIntoView()
                    .should('be.visible');
            });
        });
    });
})