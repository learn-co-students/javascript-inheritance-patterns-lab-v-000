function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function toString() {
  var ret = '(' + this.x + ', ' + this.y + ')';
  return ret;
}

function Side(length) {
  this.length = length;
}

function Shape() {
}

Shape.prototype.addToPlane = function addToPlane(x, y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x, y) {
  this.position.x = x;
  this.position.y = y;
}

Shape.prototype.position = function() {
  return('(' + this.x + ', ' + this.y + ')');
}

function Circle(radius) {
  Shape.call(this, radius);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return Math.PI*this.radius^2
}

Circle.prototype.circumference = function() {
  return 2*Math.PI*this.radius;
}
Circle.prototype.diameter = function() {
  return 2*this.radius;
}

function Polygon(sides) {
  this.sides = [];
  for (let i = 0; i < sides.length; i++) {
    this.sides[i] = sides[i];
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function () {
  let perim = 0;
  for (let i = 0; i < this.sides.length; i++) {
    perim += this.sides[i].length;
  }
  return perim
}

function Side(length) {
  this.length = length;
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(a,b,c,d) {
  Polygon.call(this,[new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


function Rectangle(width,height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(l) {
  Rectangle.call(this,l,l);
  this.width = l;
  this.height = l;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  return 'height: ' + this.height + ', width: ' + this.width;
}

function Triangle(a,b,c) {
  Polygon.call(this,[new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
