const Car = require('./Car');

function runApp() {
  // now i can create many car object using single line.. :=)
  const car = new Car('Mercedez', 'Benz', 1995);
  car.displayCarInfo();
  console.log(Car.prototype === car.__proto__);
}

runApp();