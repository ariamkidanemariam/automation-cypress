describe('Part L: Scrolling Practice Suite', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  it('Automates page scrolling interactions and element visibility checks', () => {

    cy.scrollTo('bottom');


    cy.scrollTo('top');


    cy.get('#productTable').scrollIntoView();


    cy.get('#productTable').should('be.visible');
  });
});