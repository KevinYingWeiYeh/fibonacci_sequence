import React, { Component } from 'react';
import './App.css';
import FibonacciSequence from './components/fibonacci_sequence'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fibonacci Sequence calculator</h1>
        </header>
        <FibonacciSequence/>
        <div className="footer">
          <p>Engineering & Design by Kevin Yeh</p>
        </div>
      </div>
    );
  }
}

export default App;
