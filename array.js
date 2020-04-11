const Car = require('./Car');

function runApp() {
  // now i can create many car object using single line.. :=)
  const car = new Car('Mercedez', 'Benz', 1995);
  const car1 = new Car('Honda', 'City', 2002);

  carList = [car, car1];

  const car2 = new Car('Suzuki', 'Access', 2010);

  carList.push(car2);
  console.log(carList);

  for(let i = 0 ; i < carList['length']; i++) {
    console.log(carList[i].brandName);
  }
  
  let i = 0; 
  while(i < carList['length']) {
    console.log(carList[i].brandName);
    i++;
  }

  carList['forEach'](function(car) {
    console.log(car);
  });

  console.log('-----------');

  for(let car of carList) {
      console.log(car);
  }

  console.log('-----------');

  for(let c in car) {
      console.log(c);
  }

}

runApp();