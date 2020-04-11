class Car {

  // constructor(brandName, modelName, releaseYear) {
  //   this.brandName = brandName;
  //   this.modelName = modelName;
  //   this.releaseYear = releaseYear;
  // }

  constructor(carData) {
    this.brandName = carData.brandName;
    this.modelName = carData.modelName;
    this.releaseYear = carData.releaseYear;

    // to generate random id with number and characters
    this.id = '_' + Math.random().toString(36).substr(2,9);
  }

  displayCarInfo(additionalInfo) {
    if (additionalInfo) {
      console.log(`${this.id}: ${this.brandName} ${this.modelName} - ${this.releaseYear}  '${additionalInfo}'`);
    } else {
      console.log(`${this.id}: ${this.brandName} ${this.modelName} - ${this.releaseYear}`);
    }
    return true;
  }
}

module.exports = Car;