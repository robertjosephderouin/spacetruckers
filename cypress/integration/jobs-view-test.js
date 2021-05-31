describe('Jobs View', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should display all jobs on load', () => {
    cy.get('.job-container')
      .find('.card').should('have.length', 3)
  });
})
