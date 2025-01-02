Cypress.Commands.add('login', (firstName, lastName) => {
    cy.get('#firstName').type(firstName); // First Name
    cy.get('#lastName').type(lastName); // Last Name
    /*cy.get('#userEmail').type('john.doe@example.com'); // Email

    // Select Gender
    cy.get('label[for="gender-radio-1"]').click(); // Male

    // Enter Mobile Number
    cy.get('#userNumber').type('9876543210');

    // Select Date of Birth
    cy.get('#dateOfBirthInput').click(); // Open Date Picker
    cy.get('.react-datepicker__month-select').select('July'); // Select Month
   cy.get('.react-datepicker__year-select').select('1995'); // Select Year
    cy.get('.react-datepicker__day--010').eq(0).click(); // Select Day (10th)
   //y.get('.react-datepicker').find('.react-datepicker__day--010').click();

    // Enter Subjects
    cy.get('.subjects-auto-complete__value-container').type('Maths');
    cy.get('.subjects-auto-complete__menu').contains('Maths').click();

    // Select Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Upload a file
   cy.get('#uploadPicture').attachFile('test.jpeg'); // Ensure you have a file `sample.png` in your fixtures folder

    // Fill in Address
    cy.get('#currentAddress').type('123 Elm Street, Springfield');

    // Select State and City
    cy.get('#state').click(); // Open State dropdown
    cy.get('#react-select-3-option-0').click(); // Select "NCR"
    cy.get('#city').click(); // Open City dropdown
    cy.get('#react-select-4-option-0').click(); // Select "Delhi"*/
    cy.get('#submit').click();
  });