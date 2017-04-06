// Point Prototype
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
};
// end Point Prototype

// Side
function Side(length) {
  this.length = length;
}
// end Side

// Shape Prototype
function Shape(x, y) {

}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
};

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
};
// end Shape Prototype

// Circle Prototype
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
};

Circle.prototype.circumference = function() {
  return(Math.PI * (2 * this.radius));
};

Circle.prototype.diameter = function() {
  return(2 * this.radius);
};
// end Circle Prototype

// Polygon Prototype
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  return this.sides.reduce((perimeter, side) => perimeter += side.length, 0);
};

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};
// end Polygon Prototype

// Quadrilateral Prototype
function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;
// end Quadrilateral Prototype

// Rectangle Prototype
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return (this.height * this.width);
};
// end Rectangle Prototype

// Triangle Prototype
function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
// end Triangle Prototype

// Square Prototype
function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength);
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
    return prop;
    }
  }
};
// end Square Prototype