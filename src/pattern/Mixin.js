// es5

// If you didn't want inherit, just parent class properties move to child class.

// parameter is prototype or class object.
function mixin(base, supply) {
  for (var property in supply) {
    base[property] = supply[property];
  }
  return base;
}

function Animal() {}

Animal.prototype = {
  a: function () {
    console.log("this is Animal prototype a");
  },
  b: function () {
    console.log("this is Animal prototype b");
  }
}

function Vehicle() {}

Vehicle.prototype = {
  a: function () {
    console.log("this is Vehicle prototype a");
  },
  b: function () {
    console.log("this is Vehicle prototype b");
  }
}

// Not inherit, move properties.
var returnValueAnimal = mixin(Animal.prototype, Vehicle.prototype);
// var returnValueAnimal = mixin(Animal.prototype, new Vehicle());  // same method.

returnValueAnimal.a();   // this is Vehicle prototype a
returnValueAnimal.b();   // this is Vehicle prototype b
