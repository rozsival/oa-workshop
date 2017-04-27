import React, { Component } from 'react';

class Clock extends Component {

  constructor() {
    super();

    this.state = { date: new Date() };
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const date = new Date();

    this.setState({ date });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h2>Hodiny</h2>
        <p>
          <strong>{date.toLocaleTimeString()}</strong>
        </p>
      </div>
    );
  }

}

export default Clock;
