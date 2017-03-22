function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
//below Object.create is used to have Circle inherit from Shape prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return(this.radius * 2);
}

Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}

Circle.prototype.circumference = function() {
  return(Math.PI * this.radius * 2);
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
  var p = 0;
  for (let i=0, l = this.sides.length; i <l; i++) {
    p+= this.sides[i].length;
  }
  return(p);
}

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

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
  var props = "";
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      props += "this." + "prop" + " = " + this[prop] + "\n";
    }
  }
  return (props);
}
