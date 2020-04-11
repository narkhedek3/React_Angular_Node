const readLine = require('readline-sync');
const Car = require('./Car');

class CarManager {

  // if user just hitted enter without writing anything..
  askQuestion(question, isAskingForNumber) {
    let answer;
    if(isAskingForNumber) {
      answer = readLine.questionInt(question);
    } else {
      answer = readLine.question(question);
    }
    
    if(!answer) {
      this.askQuestion(question);
    }
    return answer;
  }

  createCar() {
    const brandName = this.askQuestion('Brand of the car: \n');
    const modelName = this.askQuestion('Model of the car: \n');
    const releaseYear = parseInt(this.askQuestion('Release year of the car: \n', true));

    return new Car({brandName, modelName, releaseYear});
  }

}

module.exports = CarManager;