describe('Stub Testing with Cypress', () => {
    it('should display stubbed user data', () => {
      // Step 1: Intercept the API call and return a stubbed response
      cy.intercept('GET', '/users', {
        statusCode: 200,
        body: {
          name: 'Mock User',
          email: 'mockuser@example.com',
        },
      }).as('getUser');
  
      // Step 2: Visit the web page
      cy.visit('cypress/fixtures/index.html'); // Change the URL to your local server
  
      // Step 3: Click the "Fetch User" button
      cy.get('#fetch-user').click();
  
      // Step 4: Verify the stubbed data is displayed
      cy.wait('@getUser'); // Wait for the intercepted API call
      cy.get('#user-data').should('contain', 'Mock User');
      cy.get('#user-data').should('contain', 'mockuser@example.com');
    });
  });