function Point(x, y) {
  this.x = x;
  this.y = y;
}

// Point.prototype.toString = () => {return this.x + ", " + this.y};
Point.prototype.toString = function() {
  return(this.x + "," + this.y);
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}
Shape.prototype.move = function(x, y) {
  this. position = new Point(x, y);
}

function Circle(r) {
  Shape.call(this);
  this.radius = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI;
}
Circle.prototype.area = function() {
  return Math.PI * this.radius ** 2;
}
Circle.prototype.diameter = function() {
  return this.radius * 2;
}

function Polygon(sideElements) {
  Shape.call(this);
  this.sides = sideElements;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function () {
  let p = 0;
  for (let i = 0, l = this.sides.length; i < l; i++) {
    p += this.sides[i].length;
  }
  return p;
}
Polygon.prototype.numberOfSides = function () {
  return this.sides.length;
}

function Side(length) {
  this.length = length;
}

function Quadrilateral(sideLength1, sideLength2, sideLength3, sideLength4) {
  Polygon.call(this, [new Side(sideLength1), new Side(sideLength2), new Side(sideLength3), new Side(sideLength4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideLength1, sideLength2, sideLength3) {
  Polygon.call(this, [new Side(sideLength1), new Side(sideLength2), new Side(sideLength3)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log("rect." + prop + " = " + this[prop]);
    }
  }
}
