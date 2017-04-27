import React, { Component } from 'react';

import './ListSearch.css';

class ListSearch extends Component {

  constructor() {
    super();

    this.initialState = {
      items: [
        'Jablko',
        'Banán',
        'Pomeranč',
        'Kiwi',
        'Jahoda',
        'Borůvka',
        'Pomelo'
      ]
    }
    this.state = this.initialState;
  }

  filterList(event) {
    let { items } = this.initialState;
    const search = event.target.value.toLocaleLowerCase();

    items = items.filter(item => {
      return item.toLocaleLowerCase().search(search) !== -1;
    });

    this.setState({ items });
  }

  render() {
    return (
      <div>
        <h2>Seznam s vyhledáváním</h2>
        <input className="ListSearch-search"
          type="text"
          placeholder="Vyhledávání"
          onChange={(event) => this.filterList(event)}
        />
        <ul className="ListSearch-list">
          {this.state.items.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    );
  }

}

export default ListSearch;
