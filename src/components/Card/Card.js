import React from 'react'
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
          {job.isBooked && <p className='booked'>Job booked</p>}
          {!job.isBooked && <button className='book-btn' id={`book${job.id}`} onClick={() => bookThisJob(job.id)}>Book Job 🚀</button>}
          <button className='delete-btn' id={`delete${job.id}`} onClick={() => job.removeJob(job.id)}>🗑</button>
          {this.state.isBooked && <p className='booked'>Booked</p>}
          {!this.state.isBooked && <button className='book-btn button' id={`book${this.state.id}`} onClick={() => this.bookThisJob()}>Book</button>}
          <button className='delete-btn button' id={`delete${this.state.id}`} onClick={() => this.state.removeJob(this.state.id)}>🗑</button>
        </div>
      </div>
    )
}

export default Card
