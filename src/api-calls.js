export const getJobs = () => {
  return fetch('https://spacetruckersapi.herokuapp.com/api/v1/jobs')
  .then(response => response.json())
}
