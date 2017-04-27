import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './AddCar.css';

class AddCar extends Component {

  static propTypes = {
    add: PropTypes.func.isRequired
  };

  handleSubmit(event) {
    event.preventDefault();

    const refs = this.refs;
    const brand = refs.brand.value;
    const model = refs.model.value;
    const owned = (refs.owned.value === 'true');

    if (brand !== '' && model !== '') {
      this.props.add({
        brand,
        model,
        owned
      });

      refs.addCar.reset();
    } else {
      alert('Vyplňte značku a model auta!');
    }
  }

  render() {
    return (
      <div className="AddCar-container">
        <form ref="addCar" onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="brand">Značka:</label>
          <input id="brand" name="brand" type="text" ref="brand" />
          <label htmlFor="model">Model:</label>
          <input id="model" name="model" type="text" ref="model" />
          <label htmlFor="owned">Mám v garáži?</label>
          <select id="owned" ref="owned">
            <option value={true}>ANO</option>
            <option value={false}>NE</option>
          </select>
          <input className="AddCar-submit" type="submit" value="Přidat" />
        </form>
      </div>
    );
  }

}

export default AddCar;
