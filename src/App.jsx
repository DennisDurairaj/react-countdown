import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let input;
    this.state = {
      deadline: 'December 21, 2017',
      newDeadline: ''
    };
  }

  changeDeadline () {
    debugger;
    this.setState({
      deadline: this.state.newDeadline
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <input onChange={event => this.setState({newDeadline: event.target.value})} type="text" placeholder="New date"/>
        <button onClick={() => this.changeDeadline()}>Submit</button>
      </div>
    )
  }
}

export default App;
