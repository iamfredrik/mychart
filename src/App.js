import React, { Component } from 'react';
import BarChart from './Components/BarChart';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[1000, 400, 232, 200, 233, 100, 50, 40]
    }
  }

  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data}/>
      </div>
    );
  }
}

export default App;
