describe('footer', () => {
    before(() => {
        cy.visit('http://localhost:1234/index.html');
    });

    context("links", () => {
        it('docker link should refer to docker hub profile', () => {
            cy.get('[data-cy="footer__docker-link"]')
                .should('have.attr', 'href')
                .and('equal', 'https://hub.docker.com/u/ladral')
        });

        it('github link should refer to github profile', () => {
            cy.get('[data-cy="footer__github-link"]')
                .should('have.attr', 'href')
                .and('equal', 'https://github.com/ladral')
        });
    });
});
