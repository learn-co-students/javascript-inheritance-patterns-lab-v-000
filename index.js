function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')'
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}
Circle.prototype.circumference = function() {
  return this.radius * Math.PI * 2
}

Circle.prototype.diameter = function() {
  return this.radius * 2
}

function Side(length) {
  this.length = length
}

function Polygon(sidesArray) {
  this.sides = sidesArray
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(a, b) {
    return a + b.length;
  }, 0);
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.contructor = Quadrilateral

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
  let testSquare = new Square(4);
  let string = '';
  for(let s in testSquare) {
    if(testSquare.hasOwnProperty(s)) {
      string += s;
    }
  }
  return string;
}
