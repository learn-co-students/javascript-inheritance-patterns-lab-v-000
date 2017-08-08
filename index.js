//Define a Point object that is constructed with an x,y coordinate pair to indicate its position. Add a toString function to the Point prototype to return the location in (x, y) format.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.constructor = Point;
Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`;
}

//Define a Shape object. This will be the base for all shapes on the plane. It should have an addToPlane function that takes two integers, x and y, as arguments. This function should assign
// a Point to the Shape's position property based on these arguments. Shape should also define a move function that takes an x,y pair of arguments and moves the position to a new Point.
function Shape() {
}
Shape.prototype.constructor = Shape;
Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}
Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

//Define a Circle object that inherits from Shape and is constructed with an integer argument that sets the radius property.
//Define and implement functions on Circle to calculate area() and circumference() based on the radius.
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
  this.diameter = function() { return radius * 2}
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
  return this.diameter * Math.PI;
}
Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI;
}

//Define a Polygon object that inherits from Shape. It should be constructed with an array of Side objects that have a length property. Polygon should have a property called sides that
//holds the array of Side objects. Implement a function called perimeter() that calculates the perimeter of any Polygon based on the lengths of the sides. Implement a function called
//numberOfSides() that returns the number of sides.
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides //holds array of Side objects
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function () {
  let total = 0;
  for(var i = 0; i < this.sides.length; i++) {
    total += this.sides[i].length;
  }
  return total;
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Side(length) {
  this.length = length;
}
