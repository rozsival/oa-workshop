import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Clock from './components/Clock';
import Counter from './components/Counter';
import Cars from './components/Cars';
import ListSearch from './components/ListSearch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, people!</h2>
        </div>
        <Clock />
        <hr />
        <Counter initialCount={5} />
        <hr />
        <Cars />
        <hr />
        <ListSearch />
      </div>
    );
  }

}

export default App;
