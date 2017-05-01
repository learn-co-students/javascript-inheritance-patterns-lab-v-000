function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return (this.x.toString() + ',' + this.y.toString())
  }
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x,y) {
  this.position.x = x;
  this.position.y = y;
}

function Side(x) {
  this.length = x;
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
  this.diameter = function() {
    return this.radius * 2;
  }
  this.area = function() {
    return Math.PI * this.radius^2
  }
  this.circumference = function() {
    return 2 * Math.PI * this.radius
  }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
  this.numberOfSides = function() {
    return this.sides.length;
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  let sum = 0;
  for (let i = 0; i < this.sides.length; i++) {
    sum += this.sides[i].length;
  }
  return sum;
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [side1, side2, side3, side4]);
  this.perimeter = function() {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
      sum += this.sides[i];
    }
    return sum;
  }
}

Quadrilateral.prototype = Object.create(Polygon.prototype);

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(side) {
  Rectangle.call(this, side, side);
  this.listProperties = function() {
    let properties = null;
    for (var prop in this) {
      if(this.hasOwnProperty(prop)) {
        properties << prop;
      }
    }
    return properties;
  }
}

Square.prototype = Object.create(Rectangle.prototype);

function Triangle(side1, side2, side3) {
  Polygon.call(this, [side1, side2, side3]);
  this.perimeter = function() {
    return side1 + side2 + side3;
  }
}

Triangle.prototype = Object.create(Polygon.prototype);