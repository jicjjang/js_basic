// ES5

/**
* Has 3 properties.
**/

// Has function property, local property, prototype property.
function A() {
  this.x = 10;  // property variable 'x'
}
A.x = 20
A.prototype.x = 30;   // prototype variable 'x'

console.log(A.x);             // 20
console.log(new A().x);       // 10
console.log(A.prototype.x);    // 30

/**
* Has 2 properties.
**/

// Has local property, prototype property.
function B1() {
}
B1.x = 20;
B1.prototype.x = 30;

console.log(B1.x);              // 20
console.log(new B1().x);        // 30
console.log(B1.prototype.x);    // 30

// Has function property, prototype property.
function B2() {
  this.x = 10;
}
B2.prototype.x = 30;

console.log(B2.x);              // undefined
console.log(new B2().x);        // 10
console.log(B2.prototype.x);    // 30

// Has function property, local property.
function B3() {
  this.x = 10;
}
B3.x = 20;

console.log(B3.x);              // 20
console.log(new B3().x);        // 10
console.log(B3.prototype.x);    // undefined

/**
* Has 1 properties.
**/

// Has function property
function C1() {
  this.x = 10;
}

console.log(C1.x);              // undefined
console.log(new C1().x);        // 10
console.log(C1.prototype.x);    // undefined

// Has local property
function C2() {
}
C2.x = 20;

console.log(C2.x);              // 20
console.log(new C2().x);        // undefined
console.log(C2.prototype.x);    // undefined

// Has prototype property.
function C3() {
}
C3.prototype.x = 30;

console.log(C3.x);              // undefined
console.log(new C3().x);        // 30
console.log(C3.prototype.x);    // 30


/*** Result ***/

// 1. local property is free.
// 2. If has not function property, that was override to prototype property.
// 3. If has not prototype property, this wasn't override to function property,

// new A() is call prototype. but, First priority has property variable. next, prototype property.
