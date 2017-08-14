
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return(this.x + ", " + this.y);
  }
}


function Shape() {

}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y);
}
Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y);
}

function Circle(radius){
  Shape.call(this);
  this.radius = radius;
  this.diameter = function() {
    return this.radius * 2;
  }
  this.area = function () {
    return  (Math.PI * (this.radius * this.radius));
  }
  this.circumference = function() {
    return (2 * Math.PI * this.radius);
  }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
  this.perimeter = function() {
    var sum = 0;
    this.sides.forEach( function(side) {
      sum += side.length;
    });
    return sum;
  }
  this.numberOfSides = function() {
    return this.sides.length;
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

function Side(length) {
  this.length = length;
}

function Quadrilateral(a, b, c, d) {
  this.sides = [new Side(a), new Side(b), new Side(c), new Side(d)];
  Polygon.call(this, this.sides)
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(a, b, c){
  this.sides = [new Side(a), new Side(b), new Side(c)];
  Polygon.call(this, this.sides);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height){
  this.width = width
  this.height = height
  Quadrilateral.call(this, this.width, this.height, this.width, this.height);
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return (this.width * this.height);
}

function Square(length) {
  this.length = length;
  Rectangle.call(this, this.length, this.length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function () {
  return Object.getOwnPropertyNames(Square).join(", ");
}
