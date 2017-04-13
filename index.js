// Point
function Point(x,y) {
  this.x = x;
  this.y = y;
};

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`;
};


// Side
function Side(length) {
  this.length = length;
};


// Shape
function Shape() {
  //  nothing here yet?
};

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
};

Shape.prototype.move = function(x,y) {
  this.position.x = x;
  this.position.y = y;
};


// Circle
Circle.prototype = Object.create(Shape.prototype);

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
};

Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return Math.PI*(this.radius*this.radius);
};

Circle.prototype.diameter = function() {
  return this.radius*2;
};

Circle.prototype.circumference = function() {
  return Math.PI*2*this.radius;
};


// Polygon
Polygon.prototype = Object.create(Shape.prototype);

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides.map(side => new Side(side));
};

Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(p,c) { return p + c.length}, 0)
};

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};


// Triangle
Triangle.prototype = Object.create(Polygon.prototype);

function Triangle(s1,s2,s3) {
  Polygon.call(this, [s1,s2,s3]);
};

Triangle.prototype.constructor = Triangle;


// Quadrilateral
Quadrilateral.prototype = Object.create(Polygon.prototype);

function Quadrilateral(s1,s2,s3,s4) {
  Polygon.call(this, [s1, s2, s3, s4]);
};

Quadrilateral.prototype.constructor = Quadrilateral;


// Rectangle
Rectangle.prototype = Object.create(Quadrilateral.prototype);

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
};

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};


// Square
Square.prototype = Object.create(Rectangle.prototype);

function Square(length) {
  Rectangle.call(this, length, length, length, length);
  this.length = length;
}

Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for(var prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
};
Square.prototype.listAllProperties = function() {
  for(var prop in this) {
    console.log(prop);
  }
};
