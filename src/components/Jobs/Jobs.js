import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import './Jobs.css';

const Jobs = ({ jobs, removeJob, bookThisJob}) => {
  const jobCards = jobs.map(job => {
    return(
        <Card
          key={job.id}
          job={job}
          removeJob={removeJob}
          bookThisJob={bookThisJob}
        />
      )
    })
  return (<div className='job-container'>{jobCards}</div>)
}

export default Jobs

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeJob: PropTypes.func.isRequired,
  bookThisJob: PropTypes.func.isRequired
}
