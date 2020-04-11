class Car {
    
    constructor(brandName, modelName, releaseYear) {
        this.brandName = brandName;
        this.modelName = modelName;
        this.releaseYear = releaseYear;
    }

    displayCarInfo() {
        console.log(`${this.brandName} ${this.modelName} - ${this.releaseYear}`);
    }
}

module.exports = Car;