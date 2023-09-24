const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xz6ech",
  reporter: "cypress-mochawesome-reporter",
  viewportWidth: 1600,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  video: false,
  experimentalMemoryManagement: false,
  numTestsKeptInMemory: 0,
  // videoRecording: false,
  // watchForFileChanges: false,
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: "https://oms.staging.boxture.com",
    setupNodeEvents(on, config) {
      // on("task", {});
      // on("after:spec", (spec, results) => {
      //   if (results.stats.failures === 0 && results.video) {
      //     return del(results.video);
      //   }
      // });
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
      // implement node event listeners here
    },
  },
});
