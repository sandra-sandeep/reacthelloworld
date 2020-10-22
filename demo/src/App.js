import React from 'react';
import Draggable from 'react-draggable';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
	  <div>
	    <img src={logo} className="App-logo" alt="logo" />
          </div>
	</Draggable>
	<Draggable>
	  <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
	</Draggable>
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
