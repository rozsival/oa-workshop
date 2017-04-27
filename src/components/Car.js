import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Car.css';

class Car extends Component {

  static propTypes = {
    car: PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      owned: PropTypes.bool
    }),
    remove: PropTypes.func.isRequired
  };

  handleRemove(id) {
    if (confirm('Opravdu chcete toto auto odstranit?')) {
      this.props.remove(id);
    }
  }

  render() {
    const { car } = this.props;

    return (
      <div className="Car-container">
        <ul className="Car-properties">
          <li>
            <strong>Značka: </strong>
            {car.brand}
          </li>
          <li>
            <strong>Model: </strong>
            {car.model}
          </li>
          <li>
            <strong>Mám v garáži? </strong>
            {car.owned ? (
              <span className="Car-owned">ANO</span>
            ) : (
              <span className="Car-notOwned">NE</span>
            )
            }
          </li>
        </ul>
        <button onClick={() => this.handleRemove(car.id)}>Odstranit</button>
      </div>
    );
  }

}

export default Car;
