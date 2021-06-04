import React from 'react'
import Card from '../Card/Card'
import './Jobs.css';

const Jobs = ({ jobs, removeJob, bookJob}) => {
  const jobCards = jobs.map(job => {
    return(
        <Card
          key={job.id}
          job={job}
          removeJob={removeJob}
          bookJob={bookJob}
        />
      )
    })
  return (<div className='job-container'>{jobCards}</div>)
}

export default Jobs
