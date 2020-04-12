const Car = require('./Car');

class RacingCar extends Car {

  
  constructor({category, ...carParams}) {
    super(carParams);
    this.category = category;
  }

  
  // constructor(carData) {
  //   super({ brandName: carData.brandName, modelName: carData.modelName, releaseYear: carData.releaseYear });
  //   this.category = carData.category;
  // }


  // constructor(category, ...args) {
  //   super(...args);
  //   this.category = category;
  // }

  // constructor(brandName, modelName, releaseYear, category) {
  //     super(brandName, modelName, releaseYear);
  //     this.category = category;
  // }

  racingCarBoost() {
    console.log("Nitro.................");
    return true;
  }

  displayCarInfo() {
    super.displayCarInfo(this.category);
    // console.log(`${this.brandName} ${this.modelName} - ${this.releaseYear} [ ${this.category} ]`);
    return true;
  }

}

module.exports = RacingCar;