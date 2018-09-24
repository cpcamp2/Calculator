import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      operations: []
    }
  }

  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;
