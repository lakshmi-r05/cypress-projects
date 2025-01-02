describe('practiceform', () => {
    it('practiceformtest', () => {
        cy.visit('https://demoqa.com/automation-practice-form', { timeout: 120000 });
        cy.get('#firstName').type('John');
        cy.get('#firstName').should('have.value', 'John');
          cy.get('#lastName').type("Test12");
    cy.get('#userEmail').type("example@example.com");
    //cy.get('label.custom-control-label::after').click();
    });
});
        //cy.visit('https://demoqa.com/automation-practice-form', () => {
           // cy.wait(2000);
           // cy.get('#firstName').type("Test11");
            // Commands to run on https://example.com
           // cy.get('selector').click();
          //});
     // cy.origin('https://demoqa.com/automation-practice-form');
      //cy.wait(2000);
   // cy.get('#firstName').type("Test11");
   // cy.get('#lastName').type("Test12");
    //cy.get('#userEmail').type("example@example.com");
    //cy.get('label.custom-control-label::after').click();

    //userNumbr