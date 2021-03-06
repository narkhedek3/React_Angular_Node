const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const readLine = require('readline-sync');

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

  let appIsRunning = true;
  while(appIsRunning) {
    let userInput = readLine.question("Enter name : ");
    console.log(userInput);

    if(userInput.toLowerCase().trim() == 'exit') {
      appIsRunning = false;
      console.log("Good bye...!!");
    }
  }

}

runApp();