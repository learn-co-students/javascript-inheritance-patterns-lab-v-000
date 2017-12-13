function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return(this.x + ", " + this.y);
}

function Side(length) {
  this.length = length;
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return (this.radius + this.radius);
}

Circle.prototype.area = function() {
  return ((Math.PI) * (this.radius * this.radius));
}

Circle.prototype.circumference = function() {
  return (2 * (Math.PI) * this.radius);
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

Polygon.prototype.perimeter = function() {
  var perimeter = 0;
  this.sides.forEach(function(side) {
    perimeter += side.length;
  });
  return perimeter;
}

function Quadrilateral(sideOneInt, sideTwoInt, sideThreeInt, sideFourInt) {
  var sideOne = new Side(sideOneInt);
  var sideTwo = new Side(sideTwoInt);
  var sideThree = new Side(sideThreeInt);
  var sideFour = new Side(sideFourInt);
  Polygon.call(this, [sideOne,sideTwo,sideThree,sideFour]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return (this.width * this.height);
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  for (var prop in this) {
    console.log("square." + prop + " = " + this[prop]);
  }
}

function Triangle(sideOneInt, sideTwoInt, sideThreeInt) {
  var sideOne = new Side(sideOneInt);
  var sideTwo = new Side(sideTwoInt);
  var sideThree = new Side(sideThreeInt);
  Polygon.call(this, [sideOne,sideTwo,sideThree]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
