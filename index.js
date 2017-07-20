// Point

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
};

// Shape

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

// Circle:

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return this.radius * 2;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius ** 2);
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

// Polygon

function Polygon(sidesArray) {
  Shape.call(this);
  this.sides = sidesArray;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

Polygon.prototype.perimeter = function() {
  var perimeter = 0;
  for (let i = 0, l = this.sides.length; i < l; i++) {
    perimeter += this.sides[i].length;
  }
  return perimeter;
}

// Side

function Side(length) {
  this.length = length;
}

// Triangle

function Triangle(side1length, side2length, side3length) {
  Polygon.call(this, [new Side(side1length), new Side(side2length), new Side(side3length)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

// Quadrilateral

function Quadrilateral(side1length, side2length, side3length, side4length) {
  Polygon.call(this, [new Side(side1length), new Side(side2length), new Side(side3length), new Side(side4length)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

// Rectangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.height = height;
  this.width = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.height * this.width;
}

// Square

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(`${this}.${prop} = ${this[prop]}`);
    }
  }
}
