describe('Jobs View', () => {

  beforeEach(() => {
    // cy.fixture('../fixtures/jobData.json')
    // .then((jobs) => {
    //   cy.intercept('http://localhost:3000/')
    // })
    cy.visit('http://localhost:3000/')
  });

  it('Should display the company name on load', () => {
    cy.get('h1').contains('Space Truckers')
  });

  it('Should display all jobs on load', () => {
    cy.get('.job-container')
      .find('.card').should('have.length', 4)
  });

  it('Should load individual job data into each Card', () => {
    cy.get('.card').get('#1')
      .get('h3').contains('Mars')
      .get('.date').contains('11:10:2195')
      .get('.pay').contains(50000000)
      .get('.fluff').contains('Mars is a barren planet with little resources after it was used up by hyper capitalists in the early 21st century.')
  })
})
