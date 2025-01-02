describe('Myfirstcode', () => {
    it('gmaillogin', () => {
    //  cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeZLP99SOKZa7-HXVX9PC9Ydkn0_9SYowW6MzhncBGsFChXC-JLR-I2DJRAsgSeC_Kx5RY8EzBzKLA&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1105423439%3A1735379700648519&ddm=1');
  // cy.intercept('POST', 'https://accounts.google.com/*', {
  //statusCode: 200,
  //body: { token: 'mocked-token' },
//}).as('mockLogin');
    cy.visit('https://accounts.google.com/signin');
   // cy.wait(2000);
    // cy.get('input[type="email"]').click();
      cy.get('input[type="email"]').type("lakshmi.ravishankaran@gmail.com");
      cy.get('#identifierNext').click();

     // cy.wait(1000);
     // cy.get('div.VfPpkd-RLmnJb').eq(1).click({force:true});
     // cy.wait(4000);
    //  cy.get('input[type="password"]').type("Saibaba01!");

    //  cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible');
    //  cy.get('input[type="password"]').type('Saibaba01!', { log: false }); // Avoid logging sensitive data
    //  cy.get('#passwordNext').click();
     // cy.get('div span.VfPpkd-vQzf8d').click({force:true});
     cy.url().should('include', 'mail.google.com');
     cy.get('div[role="main"]').should('contain.text', 'Inbox');
  });
  });