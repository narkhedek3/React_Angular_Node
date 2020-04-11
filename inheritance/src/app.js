const Car = require('./car/Car');
const RacingCar = require('./car/RacingCar');

Object.prototype.kiran = function () {
  console.log('my object function');
}

function runApp() {

  // here we need to maintain order of parameters i.e. first brandName then modelName then releaseYear
  // let car = new Car('Bharat Motors', 'Ambeceder', 1990);

  // no need to maintain order of data members i.e no specific order of brandName, 
  // modelName,releaseYear any thing can be written with any possible arrangement.

  let car = new Car({brandName: 'Bharat Motors', modelName: 'Ambeceder',releaseYear: 1990});

  let racingCar = new RacingCar({brandName: 'Audi', modelName: 'Q7', releaseYear: 2010, category: 'SUV'});

  car.displayCarInfo();
  racingCar.displayCarInfo();
  racingCar.racingCarBoost();

  // Everything can access Object prototype
  // if current object prototype doesn't have function it will check for parent goes till Object
  racingCar.kiran();

  "STRING".kiran();

  let num = 123;

  num.kiran();
  (123).kiran();
}

runApp();