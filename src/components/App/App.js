import './App.css';
import Jobs from '../Jobs/Jobs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    }
  }

  render() {
    return (
      <main className="App">
        <h1>Space Truckers</h1>
        <Jobs />
      </main>
    );
  }
}

export default App;
