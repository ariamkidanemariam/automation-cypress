describe('Part I: Tables', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  it('Count rows', () => {

    cy.get('#productTable tbody tr').should('have.length', 5);
  });

  it('Count columns', () => {

    cy.get('#productTable thead th').should('have.length', 4);
  });

  it('Read data from a row', () => {

    cy.get('#productTable tbody tr').eq(0).within(() => {
      cy.get('td').eq(0).should('contain', '1');
      cy.get('td').eq(1).should('contain', 'Product 1');
      cy.get('td').eq(2).should('contain', '$10.99');
    });
  });

  it('Click a button inside a row', () => {

    cy.get('#productTable tbody tr').eq(0).within(() => {
      cy.get('input[type="checkbox"]').check().should('be.checked');
    });
  });

  it('Verify table contents', () => {

    cy.get('#productTable thead th').eq(0).should('contain', 'ID');
    cy.get('#productTable thead th').eq(1).should('contain', 'Name');
    cy.get('#productTable thead th').eq(2).should('contain', 'Price');
    cy.get('#productTable thead th').eq(3).should('contain', 'Select');
  });
});