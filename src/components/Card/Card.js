import React, { Component } from 'react'

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
        <img src={this.state.image} alt={this.state.name} />
        <h3>{this.state.name}</h3>
        <p className='date'>{this.state.date}</p>
        <p className='pay'>{this.state.pay}</p>
        <p className='fluff'>{this.state.fluff}</p>
        {this.state.isBooked && <p>Job booked</p>}
        {!this.state.isBooked && <button onClick={() => this.bookJob()}>Book Job 🚀</button>}
        <button onClick={() => this.state.deleteJob(this.state.id)}>🗑</button>
      </div>
    )
  }
}

export default Card
