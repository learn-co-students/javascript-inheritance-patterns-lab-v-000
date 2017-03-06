// Rectangle constructor
// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = function() {
//     return this.width * this.height;
//   };
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   };
// }

// // Square constructor
// function Square(sides, length) {
//   this.sides = sides;
//   this.width = length;
//   this.height = length;
//   this.area = function() {
//     return this.width * this.height;
//   },
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }
 
// var rect = new Rectangle(4, 3, 5);
// var square = new Square(4, 2);
 
// rect.area();
// square.area();

// above shows 2 shapes with similar properties
// it is possible to reduce code by creating a square out of
// a rectangle, inheriting the rectangle properties: 

// Rectangle constructor
function Rectangle(sides, width, height) {
  this.sides = sides;
  this.width = width;
  this.height = height;
  this.area = function() {
    return this.width * this.height;
  }
  this.perimeter = function() {
    return (this.width + this.height) * 2;
  }
}
 
// Square constructor
function Square(sides, length) {
  Rectangle.call(this, sides, length, length);
}
 
var rect = new Rectangle(4, 3, 5);
var square = new Square(4, 2);
 
rect.area();
square.area();

// above shows square created with rectangle constructor
// passing in 'this' to be the square object taking on the
// inherited rectangle properties, but is still not fully
// fledged Object as would be if constructed from Rectangle
// prototype. It is constructed with a copy of Rectangle, 
// not a 'live' version which would inherit changes in 
// prototype. So if we add a property to Rectangle.prototype,
// we see that square does NOT inherit it:

Rectangle.prototype.internalAngles = 90;
rect.internalAngles;
square.internalAngles;

// rect prototype becomes Rectangle()
var rect = new Rectangle(4, 3, 5);
// square prototype becomes Square()
var square = new Square(4, 2);
 
// this works because the rect prototype is still Rectangle
Rectangle.prototype.internalAngles = 90;
rect.internalAngles;
 
// but the square prototype is not Rectangle
square.internalAngles;

// above shows that the original Square never had the same
// prototype as Rectangle, so any newly instantiated 
// squares, will also NOT have the Rectangle prototype.
// therefore squares will still not inherit   
// properties of Rectangle protoype that are different from
// those Rectangle.prototype properties at the time that Square 
// was defined via Rectangle.call(this, sides, length, length)
// All we've done is borrowed its constructor function to make our own
// object, and made copies of its properties and methods, but haven't taken
// advantage of prototyping.















