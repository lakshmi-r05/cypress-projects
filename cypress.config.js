const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 70000,
  projectId: 'fz5o3n',
  e2e: {
    // Use 'mochawesome' reporter for Cypress
    reporter: 'mochawesome',

    // Reporter options
    reporterOptions: {
      reportDir: 'reports',   // Directory to save the reports
      overwrite: false,   
      html: true,             // Generate an HTML report
      json: true,             // Generate a JSON report
    },

    // Specify the location of test files (specPattern)
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',  // Ensure it includes all types of files you want to test

    // Path to the support file
    supportFile: 'cypress/support/e2e.js',
    
    // Set timeouts
  


    viewportWidth: 1280,
    viewportHeight: 720,

    // Disable chrome web security for cross-origin issues if necessary
    chromeWebSecurity: false,

    // Setup node event listeners for additional configuration (optional)
    setupNodeEvents(on, config) {
      // Add custom event listeners here if needed
    
    },
  },
});