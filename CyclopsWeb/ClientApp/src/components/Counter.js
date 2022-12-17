import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { 
    currentCount: 0,
    increaseAmount: 1,
    timerCount: 0
  
  };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.upgradeCounter = this.upgradeCounter.bind(this);
    this.timerCounter = this.timerCounter.bind(this);
    this.timeCounter()
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + this.state.increaseAmount
    });
  }

  timerCounter() {
    
    if( this.state.currentCount >= 25)
    {
      this.setState({
        timerCount: this.state.timerCount + 1,
        currentCount: this.state.currentCount - 25
      });

    }

  }

  upgradeCounter() {

    if ( this.state.currentCount >= 10)
    {
      this.setState({
        increaseAmount: this.state.increaseAmount + 1,
        currentCount: this.state.currentCount - 10
      });
    }
    
  }

  timeCounter(){

    setInterval(() => {

      this.setState({
        currentCount: this.state.currentCount + this.state.timerCount
      });
    }, 1000)
  }
  
  render() {
    
    return (
      <div>
        <h1>Counter</h1>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
        <p aria-live="polite">Current click increase: <strong>{this.state.increaseAmount}</strong></p>
        <p aria-live="polite">Current timed increase: <strong>{this.state.timerCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
        <button className="btn btn-primary" onClick={this.upgradeCounter}>Upgrade</button>
        <button className="btn btn-primary" onClick={this.timerCounter}>Timer Upgrade</button>
      </div>
    );
  }
}
