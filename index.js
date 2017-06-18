function Point(x, y) {
  this.x = x;
  this.y = y;
}

// set Rectangle prototype to an instance of a Shape
Point.prototype.toString = function(){
   return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length;
}

function Shape() {
  // this.position = Point(x,y);
}
  Shape.prototype.addToPlane = function(x, y) {
  	this.position = new Point(x,y);
  };

  Shape.prototype.move = function(x,y) {
    this.position.x = x;
    this.position.y = y;
}

function Circle(r) {
	Shape.call(this);
 	this.radius = r;
 }

 Circle.prototype = Object.create(Shape.prototype);
 Circle.prototype.constructor = Circle;

 Circle.prototype.area = function() {
 	return Math.PI * this.radius^2;
 }

 Circle.prototype.circumference = function() {
   return 2 * Math.PI * this.radius;
 }

 Circle.prototype.diameter = function() {
   return 2 * this.radius;
 }

function Polygon(sides) {
  Shape.call(this, sides);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

Polygon.prototype.perimeter = function() {
  var p = 0;
  for(let i = 0; i < this.sides.length; i++) {
   p += this.sides[i].length
  }
  return p
}

function Quadrilateral(i1, i2, i3, i4) {
  Polygon.call(this, [new Side(i1), new Side(i2), new Side(i3), new Side(i4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(i1,i2,i3) {
  Polygon.call(this, [new Side(i1), new Side(i2), new Side(i3)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return (this.width * this.height)
}

function Square(width) {
  Rectangle.call(this, width, width);
  this.width = width;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
  return Square;
}
