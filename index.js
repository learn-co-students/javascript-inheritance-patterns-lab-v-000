function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x}, ${this.y}`
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
  this.position.x = x;
  this.position.y = y;
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
}

Circle.prototype.circumference = function() {
  return Math.PI * 2 * this.radius;
}

Circle.prototype.diameter = function() {
  return 2 * this.radius;
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var sum = 0;
  for (var i = 0; i < this.sides.length; i++) {
    sum += this.sides[i].length;
  }
  return sum;
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(sideA,sideB,sideC,sideD) {
  Polygon.call(this,[new Side(sideA), new Side(sideB), new Side(sideC),
    new Side(sideD)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideA,sideB,sideC) {
  Polygon.call(this, [new Side(sideA), new Side(sideB), new Side(sideC)]);
}

Triangle.prototype = Object.create(Polygon.prototype)
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
  let out_string = ""
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      out_string = out_string + " " + prop;
    }
  }
  return out_string;
}
