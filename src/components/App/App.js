import './App.css';
import Jobs from '../Jobs/Jobs';
import React, { Component } from 'react'
import { getJobs, deleteJob, bookJob } from '../../api-calls'
import {Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getJobs()
      .then(data => {
        this.setState({ jobs: data })
      })
      .catch(() => {
        this.setState({ error: 'something went wrong' })
      })
  }

  bookThisJob = (id) => {
    bookJob(id)
      .then(() => {
        getJobs()
          .then(data => {
            this.setState({ jobs: data })
          })
          .catch(() => {
            this.setState({ error: 'something went wrong' })
          })
      })
      .catch(() => {
        this.setState({ error: 'something went wrong' })
      })
  }

  removeJob = (id) => {
    const filteredJobs = this.state.jobs.filter(job => job.id !== id);
    this.setState({ jobs: filteredJobs });
    deleteJob(id)
      .catch(() => {
        this.setState({ error: 'something went wrong' })
      })
  }

  render() {
    return (
      <main className="App">
        {!this.state.jobs.length && !this.state.error && <h2>Loading jobs...</h2>}
        {this.state.error && <p>{this.state.error}</p>}
        <h1>Space Truckers</h1>
        <h2 className='subtitle'>"Where were going, there are no laws."</h2>
        <nav className='nav-bar'>
          <Link to='/'>
            <h2 className='subtitle button'>Home</h2>
          </Link>
          <Link to='/booked'>
            <h2 className='subtitle button' >View Booked</h2>
          </Link>
        </nav>
        <Route exact path="/" render={() => {
          return (
            <Jobs jobs={this.state.jobs} removeJob={this.removeJob} bookThisJob={this.bookThisJob} />
          )
        }}/>
        <Route exact path="/booked" render={() => {
          return (
            <Jobs jobs={this.state.jobs.filter(job => job.isBooked)} removeJob={this.removeJob} bookThisJob={this.bookThisJob} />
          )
        }} />
      </main>
    );
  }
}

export default App;
