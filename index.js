function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Side(length) {
  this.length = length;
}

Point.prototype.toString = function () {
  return this.x + ", " + this.y;
}

function Shape() {
}
Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y);
}
Shape.prototype.move = function (x, y) {
  this.addToPlane(x, y);
}

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function () { return this.radius * 2; }
Circle.prototype.area = function() {
  return Math.PI * this.radius^2;
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

function Polygon(sides) {
  this.sides = sides;
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function () {
  return this.sides.reduce(function(acc, val) {
    return acc = acc + val.length;
  }, 0)
}
Polygon.prototype.numberOfSides = function () {
  return this.sides.length;
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function () {
  return this.width * this.height;
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function () {
  for(let prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
}

function Triangle(x, y, z) {
  Polygon.call(this, [new Side(x), new Side(y), new Side(z)]);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
