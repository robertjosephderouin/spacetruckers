import React from 'react'
import Card from '../Card/Card'

const Jobs = ({ jobs, deleteJob, bookJob}) => {
  const jobCards = jobs.map(job => {
    return(
        <Card
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          bookJob={bookJob}
        />
      )
    })
  return (<div className='job-container'>{jobCards}</div>)
}

export default Jobs
