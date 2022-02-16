import logo from './logo.svg';
import ocean from './ocean.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Vivian Ellis</h2>
          <i>I am 19 years old.</i>
        </div>
        <div className="App-content">
          <img src={ocean} alt="Point Lobos" width="300" />
          <a href="http://www.teamwiess.com/">The Best Residential College Ever</a>
          <div className="Content-list">
            <h4>My favorite colors:</h4>
            <ul>
              <li>violet</li>
              <li>cerulean</li>
              <li>goldenrod</li>
            </ul>
          </div>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
