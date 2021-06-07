describe('Error Handling', () => {

  describe('Status Error', () => {

    it('Should display error message for 500 status code', () => {
      cy.intercept('https://spacetruckersapi.herokuapp.com/api/v1/jobs', {
        statusCode: 500
      })
      cy.visit('http://localhost:3000/')
        .contains('something went wrong')
    });

    it('Should display error message for 404 status code', () => {
      cy.intercept('https://spacetruckersapi.herokuapp.com/api/v1/jobs', {
        statusCode: 404
      })
      cy.visit('http://localhost:3000/')
        .contains('something went wrong')
    });

    it('Should display error message for 400 status code', () => {
      cy.intercept('https://spacetruckersapi.herokuapp.com/api/v1/jobs', {
        statusCode: 400
      })
      cy.visit('http://localhost:3000/')
        .contains('something went wrong')
    });
  });
});
