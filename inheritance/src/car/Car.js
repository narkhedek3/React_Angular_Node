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
  }

  displayCarInfo(additionalInfo) {
    if (additionalInfo) {
      console.log(`${this.brandName} ${this.modelName} - ${this.releaseYear} [ ${additionalInfo} ]`);
    } else {
      console.log(`${this.brandName} ${this.modelName} - ${this.releaseYear}`);
    }
    return true;
  }
}

module.exports = Car;