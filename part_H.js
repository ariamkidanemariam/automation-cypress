describe('Part H: Forms Practice Suite', () => {

  it('Automates filling out and submitting a form successfully', () => {

    cy.visit('testautomationpractice.blogspot.com');


    cy.get('#name').type('Alex');
    cy.get('#email').type('alex@example.com');
    cy.get('#phone').type('1234567890');


    cy.get('#textarea').type('123 Automation Lane, QA City');


    cy.get('#male').check().should('be.checked');


    cy.get('#sunday').check().should('be.checked');


    cy.get('#country').select('United States').should('have.value', 'usa');


    cy.get('#name').should('have.value', 'Alex');
    cy.get('#email').should('have.value', 'alex@example.com');
  });
});