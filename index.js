function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) { this.position = new Point(x, y) }
Shape.prototype.move = function(x, y) { this.position.x = x; this.position.y = y }

function Side(length) {
  this.length = length;
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() { return (Math.PI * this.radius^2) }
Circle.prototype.circumference = function() { return Math.PI * this.diameter }
Circle.prototype.diameter = function() { return 2 * this.radius }

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.numberOfSides = function() { return this.sides.length }
Polygon.prototype.perimeter = function() {
  return this.sides.reduce( function(acc, side) {
    return acc + side.length;
  }, 0 )
}

function Quadrilateral(l1, l2, l3, l4) {
  var sides = [new Side(l1), new Side(l2), new Side(l3), new Side(l4)];
  Polygon.call(this, sides);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(l1, l2, l3) {
  var sides = [new Side(l1), new Side(l2), new Side(l3)];
  Polygon.call(this, sides);
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
Rectangle.prototype.area = function() { return this.height * this.width }

function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Rectangle.prototype.listProperties = function() {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log("Rectangle." + prop + " = " + this[prop]);
    }
  }
}
