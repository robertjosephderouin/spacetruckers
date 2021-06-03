import React, { Component } from 'react'
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: props.job.image,
      name: props.job.name,
      date: props.job.date,
      pay: props.job.pay,
      fluff: props.job.fluff,
      id: props.job.id,
      isBooked: props.job.isBooked,
      deleteJob: props.deleteJob
    }
  }

  bookJob = () => {
    // we'll want to refactor this into a post request when the back end is up
    this.setState({ isBooked: true })
  }

  render() {
    return(
      <div className='card' id={this.state.id}>
        <div className='image-container'>
          <img className='image'src={this.state.image} alt={this.state.name} />
        </div>
        <h2>{this.state.name}</h2>
        <p className='date'>{this.state.date}</p>
        <p className='pay'>{this.state.pay}</p>
        <p className='fluff'>{this.state.fluff}</p>
        <div className='interactive-container'>
          {this.state.isBooked && <p className='booked'>Job booked</p>}
          {!this.state.isBooked && <button className='book-btn' id={`book${this.state.id}`} onClick={() => this.bookJob()}>Book Job 🚀</button>}
          <button className='delete-btn' id={`delete${this.state.id}`} onClick={() => this.state.deleteJob(this.state.id)}>🗑</button>
        </div>
      </div>
    )
  }
}

export default Card
