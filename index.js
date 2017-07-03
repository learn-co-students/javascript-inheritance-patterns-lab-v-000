function Point(x, y){
  this.x = x
  this.y = y
  this.toString = function(){
    return `(${x}, ${y})`
  }
}

function Side(length) {
  this.length = length;
}

// create the Shape constructor/base object
function Shape(){};
// add these functions to the prototype so they can be inherited
Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

// Circle Object
function Circle(radius){
  // call the constructor
  Shape.call(this);
  this.radius = radius;
}
// extend it's prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// add some items to it's prototype
Circle.prototype.diameter = function() {
  return(this.radius*2);
}

Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}

Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

// Polygon object (constructor only) and prototype
function Polygon(sides){
  Shape.call(this); // call the parent. why?
  this.sides = sides;
}
// assigning it's parent
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon; // for bookkeeping?
// the polygon funcitons setting to the prototype so that they inherit

Polygon.prototype.perimeter = function(){
  return this.sides.reduce((total, side) => {
    return total + side.length;
  }, 0);
}

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

// Quadrilateral constuctor
function Quadrilateral(side1, side2, side3, side4){
  // call the constructor/function to use the same internal variable assignment (for the functions we will need to extend the prototype)
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]);
}
// set up the prototype properties and constructor for record keeping
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


// Triangle
function Triangle(side1, side2, side3){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;


// Square and Rectangle

// // Rectangle
function Rectangle(width, height){
  Quadrilateral.call(this, width, height, height, width);
  this.width = width;
  this.height = height;
}
//
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

// Square
function Square(length){
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function(){
  var props = "";
  for (var prop in this){
    if(this.hasOwnProperty(prop)){
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}
