import React from 'react'

const Card = ({ image, name, date, pay, fluff }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{pay}</p>
      <p>{fluff}</p>
      <button>Book Job 🚀</button>
    </div>
  )
}

export default Card
