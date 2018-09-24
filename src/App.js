import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import math from 'mathjs';
import update from 'immutability-helper';
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

  onClick = (e) => {
    const value = e.target.getAttribute('value');

    switch (value) {
      case 'clear':
        this.setState({
          operations: []
        })
        break;
      case 'equal':
        this.calculate()
        break;
      default:
        const newOperations = update(this.state.operations, { $push: [value]})
        this.setState({
          operations: newOperations
        })
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Display info={this.state.operations} />
        <Buttons onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
