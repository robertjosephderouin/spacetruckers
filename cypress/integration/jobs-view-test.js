describe('Jobs View', () => {

  beforeEach(() => {
    cy.stubAllJobs()
  });

  describe('Page Load View', () => {

    it('Should display the company name on load', () => {
      cy.get('h1').contains('Space Truckers')
    });

    it('Should display all jobs on load', () => {
      cy.get('.job-container')
        .find('.card').should('have.length', 2)
    });

    it('Should load individual job data into each Card', () => {
      cy.get('.card').get('#1')
        .get('h2').contains('Mars')
        .get('.date').contains('11:10:2195')
        .get('.pay').contains(50000000)
        .get('#book1').contains('Book Job')
        .get('.fluff').contains('Mars is a barren planet with little resources.')
    });
  });

  describe('Delete Booking', () => {

      it('Should delete a job when the delete button is clicked', () => {
        cy.removeJob()
        // cy.getSingleJob()
        cy.get('#delete2')
          .click()
          .get('.card').should('have.length', 1)
        });
      });

  describe('Job Booking', () => {

    it('Should change the job value to booked when the booked button is clicked', () => {
      cy.stubAllJobs()
      cy.patchJob()
      cy.modifiedJob()
      cy.get('.interactive-container')
      .get('#book1')
      .click({ force: true })
      .get('.card').get('#1')
      .get('#booked1').contains('Job booked')
  });
});
});
