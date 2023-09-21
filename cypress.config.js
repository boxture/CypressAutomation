const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xz6ech",
  reporter: "cypress-mochawesome-reporter",
  viewportWidth: 1600,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  video: false,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    baseUrl: "https://oms.staging.boxture.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
      // implement node event listeners here
    },
  },
});
