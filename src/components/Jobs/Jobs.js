import React from 'react'
import Card from '../Card/Card'

const Jobs = ({ jobs, deleteJob}) => {
  console.log(jobs)
  const jobCards = jobs.map(job => {
    return(
        <Card
          image={job.image}
          name={job.name}
          date={job.date}
          pay={job.pay}
          fluff={job.fluff}
          id={job.id}
          key={job.id}
          isBooked={job.isBooked}
          deleteJob={deleteJob}
        />
      )
    })
  return (<div className='job-container'>{jobCards}</div>)
}

export default Jobs
