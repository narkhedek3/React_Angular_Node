class Temp {
  constructor() {
   this.x = 10;
   this.getXArrow = () => this.x; 
  }

  getX() {
    return this.x;
  }

}

const temp = new Temp();

console.log(temp.getX());
console.log(temp.getXArrow());

const myObject = {
  x: 10,
  getX: function() {
    return this.x;
  },
  getXArrow: () => this.x
}

const unboundedGetX = myObject.getX;

console.log(unboundedGetX()); // undefined

const boundedGetX = unboundedGetX.bind(myObject);
console.log(boundedGetX());

// Arrow function does not have its own bindings to "this" "super" "arguments"
console.log(myObject.getXArrow());


