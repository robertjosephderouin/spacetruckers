import React from 'react'
import Card from '../Card/Card'

const Jobs = ({ jobs }) => {
  const jobCards = jobs.map((job) => {
    return
      (
        <Card
          image={job.image}
          name={job.name}
          date={job.date}
          pay={job.pay}
          fluff={job.fluff}
          key={job.id}
        />
      )
  });
  return (<div className='job-container'>{jobCards}</div>)
}

export default Jobs
