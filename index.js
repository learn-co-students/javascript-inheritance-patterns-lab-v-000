function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return ("(" + this.x + "," + this.y + ")");
}

function Shape() {

}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return (this.radius * 2);
}

Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius);
}

Circle.prototype.area = function() {
  return (Math.PI * this.radius^2);
}

function Side(length) {
  this.length = length;
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return (this.sides.length);
}

Polygon.prototype.perimeter = function() {
  var count = 0;
  this.sides.forEach(function(side) {
    count += side.length;
  })
  return count;
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructer = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructer = Rectangle;

Rectangle.prototype.area = function() {
  return (this.width * this.height);
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructer = Square;

Square.prototype.listProperties = function() {
  var properties = "";
  for (var property in this) {
    if(this.hasOwnProperty(property)) {
      properties += "this." + property
    }
  }
  return properties;
}

function Triangle(lengthOne, lengthTwo, lengthThree) {
  Polygon.call(this, [new Side(lengthOne), new Side(lengthTwo), new Side(lengthThree)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructer = Triangle;
