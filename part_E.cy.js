describe('Part E: Assertions Practice Suite', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  it('Executes all ten required assertions successfully', () => {

    cy.get('.title').should('be.visible');


    cy.get('#name').should('exist');


    cy.get('.form-group').first().should('contain', 'Name:');


    cy.get('button.start').should('have.text', 'START');


    cy.get('#name').type('Alex').should('have.value', 'Alex');


    cy.get('table').first().find('th').should('have.length', 4);

    cy.get('#email').should('be.enabled');


    cy.get('#name').should('not.be.disabled');


    cy.get('#male').check().should('be.checked');


    cy.get('.wikipedia-search-wiki-link').should('have.attr', 'target', '_blank');
  });
});