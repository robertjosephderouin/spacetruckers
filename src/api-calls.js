export const getJobs = () => {
  return fetch('https://spacetruckersapi.herokuapp.com/api/v1/jobs')
  .then(response => response.json())
}

export const deleteJob = (id) => {
  return fetch(`https://spacetruckersapi.herokuapp.com/api/v1/jobs/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
}

export const bookJob = (id) => {
  return fetch(`https://spacetruckersapi.herokuapp.com/api/v1/jobs/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      isBooked: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}
