const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://oms.staging.boxture.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
