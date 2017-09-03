function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return ("("+this.x +", "+ this.y + ")");
  }
}

function Shape() {

}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position.x = x;
  this.position.y = y;
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

Circle.prototype.area = function() {
  return (Math.PI * this.radius * this.radius);
}

Circle.prototype.circumference = function() {
  return (Math.PI * 2 * this.radius);
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

Polygon.prototype.perimeter = function() {
  var perim = 0;
  for (var side in this.sides) {
    perim += this.sides[side].length;
  }
  return perim;
}

Polygon.prototype.numberOfSides = function() {
  return (this.sides.length);
}

function Quadrilateral(a,b,c,d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c),new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(a,b,c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.height = height;
  this.width = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return (this.height * this.width);
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (var prop in Square.prototype) {
    if (Square.prototype.hasOwnProperty(prop)) {
      console.log(prop + " ")
    }
  }
}
