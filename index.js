function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.constructor = Point;

Point.prototype.toString = function() {
  return (this.x + ", " + this.y);
}

function Side(length) {
  this.length = length;
}

function Shape(x, y) {
  Point.call(this, x, y);
  this.position = new Point(x, y);
}

Shape.prototype = Object.create(Point.prototype);
Shape.prototype.constructor = Shape;

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y);
}

function Circle(radius, x, y) {
  Shape.call(this, x, y);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function () {
  return this.radius * 2;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * 2;
}

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius;
}

function Polygon(sides, x, y) {
  Shape.call(this, x, y);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

Polygon.prototype.perimeter = function () {
  var sum = 0;
  for (var i = 0; i < this.sides.length; i++) {
    sum += this.sides[i].length
  }
  return sum;
}

function Quadrilateral(side1, side2, side3, side4, sides, x, y) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)], x, y);
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height, side1, side2, side3, side4, sides, x, y) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return (this.height * this.width);
}

function Square(length, width, height, side1, side2, side3, side4, sides, x, y) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  for (var prop in Square) {
    if(Square.hasOwnProperty(prop)) {
      console.log("Square." + prop + " = " + Square[prop]);
    }
  }
}

function Triangle(side1, side2, side3, sides, x, y) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)], x, y);
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
