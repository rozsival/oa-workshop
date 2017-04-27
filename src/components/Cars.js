import React, { Component } from 'react';

import AddCar from './AddCar';
import Car from './Car';

class Cars extends Component {

  constructor() {
    super();

    this.state = {
      cars: [
        {
          id: 1,
          brand: 'Porsche',
          model: '911',
          owned: false
        }
      ]
    };

    this.addCar = this.addCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
  }

  addCar(car) {
    let { cars } = this.state;

    car.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
    cars = cars.concat([car]);
    this.setState({ cars });
  }

  removeCar(id) {
    let { cars } = this.state;

    cars = cars.filter(car => car.id !== id);
    this.setState({ cars });
  }

  render() {
    return (
      <div>
        <h2>Auta</h2>
        <AddCar add={this.addCar} />
        {this.state.cars.map(car => {
          return <Car car={car}
            key={car.id}
            remove={this.removeCar}
          />
        })}
      </div>
    );
  }

}

export default Cars;
