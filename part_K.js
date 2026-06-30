describe('Part K: Keyboard Actions Suite', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  it('Simulates special keyboard keys and layout commands', () => {

    cy.get('#name').type('Testing Keyboard Keys');


    cy.get('#name').type('{selectall}{backspace}').should('have.value', '');


    cy.get('#name').type('SubmitForm{enter}');


    cy.get('body').type('{uparrow}').type('{downarrow}');
    cy.get('body').type('{leftarrow}').type('{rightarrow}');


    cy.get('body').type('{esc}');
  });
});