describe('Booked Jobs View', () => {

  beforeEach(() => {
    cy.modifiedJob()
    .visit('http://localhost:3000')
  });

  describe('Booked Jobs User Story', () => {

    it('Should show booked jobs only when View Booked button is clicked', () => {
      cy.get('h2')
        .contains('View Booked')
        .click()
        .url().should('eq', 'http://localhost:3000/booked')
        .get('.card').should('have.length', 1)
    });

    it('Should show that the job card displays message that the job was booked', () => {
      cy.visit('http://localhost:3000/booked')
        .get('.card')
        .get('#1')
        .get('#booked1')
        .contains('Job booked')
    })
  });

  describe('Return Home User Story', () => {

    it('Should return home when the home button is selected', () => {
      cy.visit('http://localhost:3000/booked')
        .get('h2')
        .contains('Home')
        .click()
        .url().should('eq', 'http://localhost:3000/')
        .get('.card').should('have.length', 2)
    })
  });
});
