const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');
module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',//for html reports
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
  },
});
