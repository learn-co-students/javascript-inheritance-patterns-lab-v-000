function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + "," + this.y + ")";
}

function Side(length) {
  this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

function Circle(radius) {
  // call superclass constructor
  Shape.call(this);
  // set circle values
  this.radius = radius;
}

// set Circle prototype to an instance of a Shape
Circle.prototype = Object.create(Shape.prototype);
// set Circle constructor
Circle.prototype.constructor = Circle;

// extend with Circle behavior
Circle.prototype.diameter = function() {
  return this.radius * 2;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius^2;
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var p = 0;
  for (var i = 0; i < this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return p;
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideOne, sideTwo, sideThree) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var propString = "";
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      propString += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return propString;
}
