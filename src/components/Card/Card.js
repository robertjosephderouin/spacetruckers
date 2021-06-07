import React from 'react'
import PropTypes from 'prop-types'
import './Card.css';

const Card = ({ job, removeJob, bookThisJob }) => {
    return(
      <div className='card' id={job.id}>
        <div className='image-container'>
          <img className='image'src={job.image} alt={job.name} />
        </div>
        <h2>{job.name}</h2>
        <p className='date'>{job.date}</p>
        <p className='pay'>{job.pay}</p>
        <p className='fluff'>{job.fluff}</p>
        <div className='interactive-container'>
          {job.isBooked && <p className='booked' id={`booked${job.id}`}>Job booked</p>}
          {!job.isBooked && <button className='book-btn button' id={`book${job.id}`} onClick={() => bookThisJob(job.id)}>Book Job 🚀</button>}
          <button className='delete-btn button' id={`delete${job.id}`} onClick={() => removeJob(job.id)}>🗑</button>
        </div>
      </div>
    )
}

export default Card

Card.propTypes = {
  job: PropTypes.object.isRequired,
  removeJob: PropTypes.func.isRequired,
  bookThisJob: PropTypes.func.isRequired
}
