describe('Error Handling', () => {

  describe('Status Error', () => {

    it('Should display error message for 500 status code', () => {
      cy.intercept('https://spacetruckersapi.herokuapp.com/api/v1/jobs', {
        statusCode: 500
      })
      cy.visit('http://localhost:3000/')
        .contains('something went wrong')
    });

  });
});
