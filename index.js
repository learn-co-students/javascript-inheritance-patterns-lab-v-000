// Point Object

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ", " + this.y
}

// Side Object

function Side(length) {
  this.length = length
}

// Shape Object
function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x, y)
}

// Circle Object
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  return this.radius * 2
}
Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI
}
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius
}

// Polygon Object

function Polygon(sidesArray) {
  this.sides = sidesArray;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var total = 0
  for (var i = 0; i < this.sides.length; i++) {
    total += this.sides[i].length
  }
  return total
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

// Quadrilateral Object
function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

// Rectangle Object

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


// Square Object

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log("Square." + prop + " = " + this[prop]);
    }
  }
}


// Triangule Object

function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
