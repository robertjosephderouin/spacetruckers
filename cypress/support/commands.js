import jobData from '../fixtures/job-data.json';
import modifiedJob from '../fixtures/modified-job.json';
import singleJob from '../fixtures/single-job.json';

const baseURL = 'https://spacetruckersapi.herokuapp.com/api/v1/jobs'
const jobURL = 'https://spacetruckersapi.herokuapp.com/api/v1/jobs/1'
const jobDeleteURL = 'https://spacetruckersapi.herokuapp.com/api/v1/jobs/2'

Cypress.Commands.add('stubAllJobs', () => {
  cy.intercept(baseURL, jobData)
    .visit('http://localhost:3000/')
});

Cypress.Commands.add('patchJob', () => {
  cy.intercept('PATCH', jobURL , modifiedJob)
});

Cypress.Commands.add('removeJob', () => {
  cy.intercept('DELETE', jobDeleteURL , singleJob)
});

Cypress.Commands.add('modifiedJob', () => {
  cy.intercept(baseURL, modifiedJob)
});

// Cypress.Commands.add('getSingleJob', () => {
//   cy.intercept(baseURL , singleJob)
// });
