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

  render() {

    if (this.state.isBooked) {
      return (
        <div className='card' id={this.state.id}>
        <img src={this.state.image} alt={this.state.name} />
        <h3>{this.state.name}</h3>
        <p>{this.state.date}</p>
        <p>{this.state.pay}</p>
        <p>{this.state.fluff}</p>
        <p>Job booked</p>
        <button onClick={() => this.state.deleteJob(this.state.id)}>🗑</button>
        </div>
      )
    } else {
      return (
        <div className='card' id={this.state.id}>
        <img src={this.state.image} alt={this.state.name} />
        <h3>{this.state.name}</h3>
        <p>{this.state.date}</p>
        <p>{this.state.pay}</p>
        <p>{this.state.fluff}</p>
        <button onClick={() => bookJob(this.state.id)}>Book Job 🚀</button>
        <button onClick={() => this.state.deleteJob(this.state.id)}>🗑</button>
        </div>
      )
    }
  }
}

export default Card
