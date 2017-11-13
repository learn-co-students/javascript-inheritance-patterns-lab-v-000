
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return (this.x + "," + this.y);
};

function Side(length) {
  this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane =
  Shape.prototype.move =
    function(x, y) { this.position = new Point(x, y) };

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() { return (2 * this.radius) };
Circle.prototype.area = function() { return (Math.PI * this.radius ^ 2) };
Circle.prototype.circumference = function() { return (Math.PI * this.diameter()) };

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() { return this.sides.reduce(function (sum, side) {return sum + side.length},0) };
Polygon.prototype.numberOfSides = function() { return this.sides.length };

function Quadrilateral(sideLength1, sideLength2, sideLength3, sideLength4) {
  var sides = [sideLength1, sideLength2, sideLength3, sideLength4].map(function(sideLength) { return new Side(sideLength) });
  Polygon.call(this, sides);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideLength1, sideLength2, sideLength3) {
  var sides = [sideLength1, sideLength2, sideLength3].map(function(sideLength) { return new Side(sideLength) });
  Polygon.call(this, sides);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Quadrilateral.call(this, this.width, this.height, this.width, this.height);
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() { return (this.width * this.height) };

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {return Object.getOwnPropertyNames(this).join()};
