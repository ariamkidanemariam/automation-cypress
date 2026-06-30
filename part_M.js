describe('Part M: File Upload', () => {

  beforeEach(() => {
    cy.visit('testautomationpractice.blogspot.com');
  });

  it('Upload a text file', () => {

    cy.writeFile('cypress/fixtures/sample.txt', 'Mock text file contents');
    cy.get('input[type="file"]').first().selectFile('cypress/fixtures/sample.txt', { force: true });
  });

  it('Upload an image file', () => {

    cy.writeFile('cypress/fixtures/sample-image.png', 'Mock image file contents');
    cy.get('input[type="file"]').first().selectFile('cypress/fixtures/sample-image.png', { force: true });
  });

  it('Upload a PDF file', () => {

    cy.writeFile('cypress/fixtures/sample-document.pdf', 'Mock PDF document contents');
    cy.get('input[type="file"]').first().selectFile('cypress/fixtures/sample-document.pdf', { force: true });
  });
});