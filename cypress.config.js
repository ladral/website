const {defineConfig} = require("cypress");

module.exports = defineConfig({
    fixturesFolder: "test/cypress/fixtures",
    screenshotsFolder: "test/cypress/screenshots",
    videosFolder: "test/cypress/videos",
    downloadsFolder: "test/cypress/downloads",
    e2e: {
        supportFile: "test/cypress/support/e2e.js",
        specPattern: "test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        setupNodeEvents(on, config) {
            // implement node event listeners here

        },
    },
});
