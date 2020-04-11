const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const CarStorage = require('./src/car/CarStorage');
const CarManager = require('./src/car/CarManager');
const readLine = require('readline-sync');


// custom forEach 
Object.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

function runApp() {

  function displayOptions() {
    console.log('Press 1 to add a car');
    console.log('Press 2 to remove a car');
    console.log('Press 3 to list all of the cars present in garage');
    console.log('Press exit to quit');
  }

  let car = new Car({ brandName: 'Bharat Motors', modelName: 'Ambeceder', releaseYear: 1990 });
  let car1 = new Car({ brandName: 'Mercedez', modelName: 'Benz', releaseYear: 1995 })
  let racingCar = new RacingCar({ brandName: 'Audi', modelName: 'Q7', releaseYear: 2010, category: 'SUV' });

  let myCars = [car, car1, racingCar];

  let carStorage = new CarStorage();
  let carManager = new CarManager();

  // myCars.forEach(function(car) {
  //   carStorage.addCar(car);
  // });

  let appIsRunning = true;
  displayOptions();

  while (appIsRunning) {
    let userInput = readLine.question("Enter option : ").toLowerCase().trim();

    // if (userInput === '1') {
    //   console.log('add car');
    // } else if (userInput === '2') {
    //   console.log('remove car');
    // } else if (userInput === '3') {
    //   myCars.forEach(function (car) {
    //     car.displayCarInfo();
    //   });
    // } else if (userInput === 'exit') {
    //   appIsRunning = false;
    //   console.log("Good bye...!!");
    // } else {
    //   console.log("invalid input..")
    // }

    switch(userInput) {
      case '1':
        const car = carManager.createCar();
        carStorage.addCar(car);
        break;
      case '2':
        const carId = readLine.question('Enter id of car which you want to remove \n');
        carStorage.removeCar(carId);
        break;
      case '3':
        carStorage.listCars();
        break;
      case 'exit':
        appIsRunning = false
        console.log('Good bye...!');
        break;
      default:
        console.log('invalid option');
    }

  }

}

runApp();