describe('Part J: Browser Interactions', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  it('Browser Back - Navigate to previous page', () => {

    cy.get('#Wikipedia1_wikipedia-search-input').type('Cypress{enter}');
    cy.go('back');
    cy.url().should('include', 'testautomationpractice');
  });

  it('Browser Forward - Navigate to next page', () => {

    cy.get('#Wikipedia1_wikipedia-search-input').type('Cypress{enter}');
    cy.go('back');
    cy.go('forward');
    cy.url().should('include', 'testautomationpractice');
  });

  it('Reload - Refresh the page', () => {
    cy.get('#name').type('Test Name');
    cy.get('#name').should('have.value', 'Test Name');

    cy.reload();
    cy.get('#name').should('have.value', '');
  });

  it('Open a new tab - Visit href directly', () => {

    cy.get('a.wikipedia-search-wiki-link').first().invoke('removeAttr', 'target').click();
    cy.url().should('include', 'wikipedia');
  });

  it('Browser Alerts - Handle alert() popup', () => {
    cy.on('window:alert', (alertText) => {

      expect(alertText).to.equal('I am an alert box!');
    });

    cy.get('button[onclick="myFunctionAlert()"]').click();
  });

  it('Confirmation Dialogs - Click OK', () => {
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('Press a button!');
      return true;
    });

    cy.get('button[onclick="myFunctionConfirm()"]').click();
    cy.get('#demo').should('contain.text', 'You pressed OK!');
  });

  it('Confirmation Dialogs - Click Cancel', () => {
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('Press a button!');
      return false;
    });

    cy.get('button[onclick="myFunctionConfirm()"]').click();
    cy.get('#demo').should('contain.text', 'You pressed Cancel!');
  });

  it('Prompt Dialogs - Handle prompt() popup', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Cypress Test');
    });

    cy.get('button[onclick="myFunctionPrompt()"]').click();
    cy.get('#demo').should('contain.text', 'Hello Cypress Test!');
  });
});