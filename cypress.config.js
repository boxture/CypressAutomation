const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s9pf1a",
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 50000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  video: true,
  viewportWidth: 1600,
  viewportHeight: 900,
  video: false,
  env: {
    baseUrl: "https://oms.staging.boxture.com",
  },
  e2e: {
    experimentalStudio: true,
    baseUrl: "https://oms.staging.boxture.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/specfiles/**/*.js",
    // specPattern: 'cypress/integration/examples/*.js',
  },
});
