import './App.css';
import Jobs from '../Jobs/Jobs';
import React, { Component } from 'react'
import jobs from '../../jobData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: jobs
    }
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredJobs = this.state.jobs.filter(job => job.id != id);
    // lets add a delete to this when we add the backend, but for now! 
    this.setState({ jobs: filteredJobs });
  }

  render() {
    return (
      <main className="App">
        <h1>Space Truckers</h1>
        <Jobs jobs={this.state.jobs}/>
      </main>
    );
  }
}

export default App;
