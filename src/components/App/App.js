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
        <h1>Space Truckers</h1>
        <h2 className='subtitle'>"Where were going, there are no laws."</h2>
        <ui>
          <Link to='/'>
            <li className='subtitle'>Home</li>
          </Link>
          <Link to='/booked'>
            <li className='subtitle' >View Booked Jobs</li>
          </Link>
        </ui>
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
