
class CarStorage {
  
  constructor(cars) {
    this.cars = cars || [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar(carId) {
    const carIndex = this.cars.findIndex(function(car) {
      return car.id === carId;
    });

    if(carIndex === -1) {
      console.log('car does not exist...');
      return;
    }
    this.cars.splice(carIndex,1);
  }

  listCars() {
    if(this.cars.length === 0) {
      console.log('No cars in the garage..');
      return;
    }
    this.cars.forEach(function(car) {
      car.displayCarInfo(); 
    })
  }

}

module.exports = CarStorage;