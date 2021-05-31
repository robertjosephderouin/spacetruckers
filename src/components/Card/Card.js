import React from 'react'

const Card = ({ image, name, date, pay, fluff, id, deleteJob }) => {
  return (
    <div className='card' id={id}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{pay}</p>
      <p>{fluff}</p>
      <button>Book Job 🚀</button>
      <button onClick={() => deleteJob(id)}>🗑</button>
    </div>
  )
}

export default Card
