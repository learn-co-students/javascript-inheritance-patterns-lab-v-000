function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
  }

function Shape(x, y) {
  Point.call(this, x, y);
  this.position = this.toString;
}

Shape.prototype.addToPlane = function (x,y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function (x,y) {
  this.position = new Point(x, y);
  return this.toString;
}

function Circle(int) {
  Shape.call(this);
  this.radius = int;
  this.diameter = function () { return int*2; }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  return Math.PI * this.radius^2;
}

Circle.prototype.circumference = function () {
  return Math.PI * (this.diameter());
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

Polygon.prototype.numberOfSides = function () {
  return this.sides.length;
}

Polygon.prototype.perimeter = function () {

  var sum = 0;

  for (var i=0; i<this.sides.length; i++) {
    sum += this.sides[i].length;
  }

  return sum;
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this);
  this.sides = [new Side(a), new Side(b), new Side(c), new Side(d)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this);
  this.width = width;
  this.height = height;
  this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)];
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () { return this.width * this.height; }

function Square(length) {
  Rectangle.call(this);
  this.width = length;
  this.height = length;
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)];
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
        return key;
    }
  }
}

function Triangle(a, b, c) {
  Polygon.call(this);
  this.sides = [new Side(a), new Side(b), new Side(c)];
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
