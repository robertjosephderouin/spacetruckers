import jobData from '../fixtures/job-data.json';
import singleJob from '../fixtures/single-job.json';

const baseURL = 'https://spacetruckersapi.herokuapp.com/api/v1/jobs'

Cypress.Commands.add('stubAllJobs', () => {
  cy.intercept(baseURL, jobData)
    .visit('http://localhost:3000/')
});

Cypress.Commands.add('stubSingleJob', () => {
  cy.intercept(`${baseURL/1}`, singleJob)
    .visit('http://localhost:3000/1')
});
