function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {return this.x + ", " + this.y}

function Side(length) {
  this.length = length;
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius) {
  this.radius = radius;
  this.diameter = function() { return this.radius * 2};
  this.area = function() { return Math.PI * this.radius^2 };
  this.circumference = function() { return 2 * Math.PI * this.radius};
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Polygon(sides) {
  this.sides = sides;
  this.numberOfSides = function() { return this.sides.length};
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  perimeter = 0;
  for(i = 0; i < this.sides.length; i++) {
    perimeter = perimeter + this.sides[i].length;
  }
  return perimeter;
}

function Quadrilateral() {


}

function Triangle() {


}

function Rectangle() {


}

function Square() {


}
