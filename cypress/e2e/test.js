import { login } from '../support/datacommand';
describe('DemoQA Automation Practice Form', () => {
    it('Fills out the entire form', () => {
      // Visit the form
    
      cy.fixture('example').then((data) => {
        cy.visit('https://demoqa.com/automation-practice-form');
        //cy.get()
        cy.login(data.firstName,data.lastName);
        //cy.log(data.firstName);
       // cy.login(data.firstName, data.lastName);
      });
  
      // Fill in basic details
      
      // Submit the form
   
  
      // Verify successful submission
     // cy.get('.modal-t+
      //  itle').should('contain', 'Thanks for submitting the form');
     // cy.get('.table').should('be.visible'); // Table with submitted data
    });
  });