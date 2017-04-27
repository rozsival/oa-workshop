import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { A } from './example';

class Counter extends Component {

  static propTypes = {
    initialCount: PropTypes.number.isRequired
  };

  static defaultProps = {
    initialCount: 1
  };

  constructor(props) {
    super(props);

    this.initialState = {
      currentCount: this.props.initialCount
    };
    this.state = this.initialState;
  }

  changeCount(add = true) {
    let { currentCount } = this.state;

    add ? currentCount += 1 : currentCount -=1;
    this.setState({ currentCount });
  }

  reset() {
    this.setState(this.initialState);
  }

  render() {
    return (
      <div>
        <h2>Počítadlo {A}</h2>
        <p>Aktuální počet: <strong>{this.state.currentCount}</strong></p>
        <button onClick={() => this.changeCount()}>Přidat 1</button>
        <button onClick={() => this.changeCount(false)}>Odečíst 1</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }

}

export default Counter;
