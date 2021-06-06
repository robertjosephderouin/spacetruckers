describe('Jobs View', () => {

  beforeEach(() => {

    cy.modifiedJob()
    .visit('http://localhost:3000/')
  });


  it('Should show booked jobs only when View Booked button is clicked', () => {
    cy.get('h2')
      .contains('View Booked')
      .click()
      .visit('http://localhost:3000/booked')
      .get('.card').should('have.length', 1)
  });
});
