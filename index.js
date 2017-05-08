function inherit(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return `(${this.x}, ${this.y})`;
  };
}

function Shape() {
  this.position = null;
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
  this.position.x = x;
  this.position.y = y;
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
  this.diameter = function() {
    return this.radius * 2;
  };
  this.area = function() {
    return Math.PI * Math.pow(this.radius, 2); // lint had a parsing error w/ **
  };
  this.circumference = function() {
    return Math.PI * this.diameter();
  };
}

inherit(Circle, Shape);

function Side(length) {
  this.length = length;
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

inherit(Polygon, Shape);

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};

Polygon.prototype.perimeter = function() {
  return this.sides.reduce((sum, side) => sum + side.length, 0);
};

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [
    new Side(side1),
    new Side(side2),
    new Side(side3),
    new Side(side4)
  ]);
}

inherit(Quadrilateral, Polygon);

function Triangle(side1, side2, side3) {
  Polygon.call(this, [
    new Side(side1),
    new Side(side2),
    new Side(side3)
  ]);
}

inherit(Triangle, Polygon);

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

inherit(Rectangle, Quadrilateral);

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
  this.listProperties = function() {
    return Object.keys(this).reduce((memo, prop) => `${memo}, ${prop}`);
  };
}

inherit(Square, Rectangle);
