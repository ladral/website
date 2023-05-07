describe('When click on project card', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/index.html');
        cy.get('[data-cy="project__card"]')
            .first()
            .click()
    });

    it('modal should open', () => {
        cy.get('[data-cy="modal"]')
            .each((item, index) => {
                cy.wrap(item)
                    .should('be.visible');
            });
    });

})

describe('When modal open', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/index.html');
        cy.get('[data-cy="project__card"]')
            .first()
            .click()
    });

    context("click on close button", () => {
        it('modal should close', () => {
            cy.get('[data-cy="modal-close"]')
                .first()
                .click();

            cy.get('[data-cy="modal"]')
                .each((item, index) => {
                    cy.wrap(item)
                        .should('not.be.visible');
                });
        });
    });
})