// Only change code below this line
  class car {
      constructor ( manufacturer,model,production) {
          this.manufacturer = manufacturer;
          this.model = model;
          this.production = production;
      }
  }


// Only change code above this line

const bmw = new car("BMW", "BMW X3" , 2003);
console.log(bmw.manufacturer);
console.log(bmw.model);
console.log(bmw.production);

module.exports = car 