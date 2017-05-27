function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return(this.x + "," + this.y)
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

function Side(length) {
  this.length = length
}

function Circle(integer) {
  Shape.call(this)
  this.radius = integer
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(integer) {
  return (2 * this.radius)
}

Circle.prototype.area = function() {
    return(Math.PI * this.radius^2)
    // FAKE MATH!!
}

Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius)
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides 
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(a, b) {
  Quadrilateral.call(this, a, b, a, b)
  this.width = a
  this.height = b
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return(this.width * this.height)
}

function Square(a) {
  Rectangle.call(this, a, a, a, a)
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (var prop in this) {
  if(this.hasOwnProperty(prop)) {
    console.log(this + prop + " = " + this[prop]);
  }
}
}




