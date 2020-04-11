const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const i = require('./src/lib/customArrayFunctions');

// custom forEach 
Object.prototype.forEach2 = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

function runApp() {
  let car = new Car({brandName: 'Bharat Motors', modelName: 'Ambeceder',releaseYear: 1990});
  let car1 = new Car({brandName: 'Mercedez', modelName: 'Benz',releaseYear: 1995})
  let racingCar = new RacingCar({brandName: 'Audi', modelName: 'Q7', releaseYear: 2010, category: 'SUV'});

  let myCars = [car, car1, racingCar];

  myCars.forEach(function(car) {
    car.displayCarInfo();
  });

  console.log('---------------------------------');

  // this is callback function for foreach2 custom function
  let displayCarInfoCallBack = function(car) {
    car.displayCarInfo();
  }

  myCars.forEach2(displayCarInfoCallBack);
  console.log('---------------------------------');

  // map
  let carBrands = myCars.map(function(car) {
    return car.brandName;
  });

  console.log(carBrands);
  console.log('---------------------------------');

  // filter == only checks returning falsy or truthy values. 
  let filteredCars = myCars.filter(function(car) {
    return car.category;
  });

  console.log(filteredCars);
  console.log('---------------------------------');

  // custom Array functions

  i.forEach(myCars, function(car) {
    car.displayCarInfo();
  });
  console.log('---------------------------------');

  mappedCars = i.map(myCars,function(car) {
    return car.brandName;
  });
  console.log(mappedCars);
  console.log('---------------------------------');

  filteredCars = i.filter(myCars,function(car) {
    return car.category;
  });
  console.log(filteredCars);
  console.log('---------------------------------');


}

runApp();