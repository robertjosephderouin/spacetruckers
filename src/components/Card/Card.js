import React from 'react'

const Card = ({ image, name, date, pay, fluff, id, isBooked }) => {
  if (isBooked) {
    return (
      <div className='card' id={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{pay}</p>
        <p>{fluff}</p>
        <p>Job booked</p>
      </div>
    )
  } else {
    return (
      <div className='card' id={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{pay}</p>
        <p>{fluff}</p>
        <button>Book Job 🚀</button>
      </div>
    )
  }
}

export default Card
