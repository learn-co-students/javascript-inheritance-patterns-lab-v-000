function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Side(n) {
  this.length = n;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y);
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(r) {
  Shape.call(this);
  this.radius = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return this.radius *2;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  return this.sides.map((side) => side.length).reduce((a, b) => a+b);
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(w, h) {
  Quadrilateral.call(this, w, h, w, h);
  this.width = w;
  this.height = h;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(n) {
  Rectangle.call(this, n, n);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var p = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      p += prop;
    }
  }
  return p;
}

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
