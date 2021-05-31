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
