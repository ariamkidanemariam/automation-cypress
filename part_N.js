describe('Part N: Mini Project - End-to-End Automation Suite', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com', { timeout: 10000 });
  });

  it('Executes a complete e2e user workflow with 5+ assertions', () => {

    cy.get('#name').type('Alex Mercer').should('have.value', 'Alex Mercer');
    cy.get('#email').type('alex.mercer@example.com').should('have.value', 'alex.mercer@example.com');


    cy.get('#country').select('Canada').should('have.value', 'canada');


    cy.get('#sunday').check().should('be.checked');
    cy.get('#monday').check().should('be.checked');
    cy.get('#sunday').uncheck().should('not.be.checked');

    cy.get('#male').check().should('be.checked');
    cy.get('#female').should('not.be.checked');


    cy.writeFile('cypress/fixtures/sample.txt', 'Mock content for file upload');
    cy.get('input[type="file"]').first().selectFile('cypress/fixtures/sample.txt', { force: true });


    cy.contains('Static Web Table').scrollIntoView().should('be.visible');


    cy.get('#name').should('have.value', 'Alex Mercer');
    cy.get('#email').should('have.value', 'alex.mercer@example.com');
    cy.get('#country').should('have.value', 'canada');
    cy.get('#male').should('be.checked');
    cy.get('h1').should('contain', 'Automation');
    cy.get('#name').should('be.visible');

    cy.get('table').first().find('tbody tr').should('have.length', 7);
  });
});