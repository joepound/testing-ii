import React, { Component } from "react";

import "./App.css";

import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  ball = () => {
    this.setState({ balls: this.state.balls < 3 ? this.state.balls + 1 : 0 });
  };

  strike = () => {
    this.setState({
      strikes: this.state.strikes < 2 ? this.state.strikes + 1 : 0
    });
  };

  foul = () =>
    this.state.strikes < 2 &&
    this.setState({ strikes: this.state.strikes + 1 });

  hit = () =>
    this.setState({
      balls: 0,
      strikes: 0
    });

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Baseball</h1>
        <Dashboard 
          ball={this.ball}
          strike={this.strike}
          foul={this.foul}
          hit={this.hit}/>
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;
