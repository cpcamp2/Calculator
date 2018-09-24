import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import math from 'mathjs';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      operations: []
    }
  }

  calculate = () => {
    let solution = this.state.operations.join('');

    if (solution) {
      solution = math.eval(solution)
      solution = math.format(solution, { precision: 14 })
      this.setState({
        operations: [solution]
      })
    };
  }

  render() {
    return (
      <div className="App">
        <Display info={this.state.operations} />
        <Buttons />
      </div>
    );
  }
}

export default App;
