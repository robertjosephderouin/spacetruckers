import jobData from '../fixtures/job-data.json';
import singleJob from '../fixtures/single-job.json';

const baseURL = 'https://spacetruckersapi.herokuapp.com/api/v1/jobs'
const jobURL = 'https://spacetruckersapi.herokuapp.com/api/v1/jobs/1'

Cypress.Commands.add('stubAllJobs', () => {
  cy.intercept(baseURL, jobData)
    .visit('http://localhost:3000/')
});

Cypress.Commands.add('stubSingleJob', () => {
  cy.intercept('PATCH', jobURL , { isBooked: true })
  .visit('http://localhost:3000/')
});

Cypress.Commands.add('modifiedJob', () => {
  cy.intercept(baseURL, singleJob)
    .visit('http://localhost:3000/')
});
