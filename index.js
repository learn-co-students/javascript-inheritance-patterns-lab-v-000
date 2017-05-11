function Point(x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
};

function Side(length) {
  this.length = length;
};


function Shape() {};

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
};

Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
};

Circle.prototype.diameter = function() {
  return(2 * this.radius);
};

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides;
};

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};

Polygon.prototype.perimeter = function() {
  var perimeter = 0;
  this.sides.forEach(side => {perimeter += side.length});
  return perimeter;
};

function Triangle(sideOne, sideTwo, sideThree) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree)]);
};

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
   Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)]);
};

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.height * this.width;
}

function Square(length) {
  Rectangle.call(this, length, length, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
  var properties = " "
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      properties += prop;
    }
  }
}
