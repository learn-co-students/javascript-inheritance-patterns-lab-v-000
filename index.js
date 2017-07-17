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
  this.radius = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI;
}
Circle.prototype.area = function() {
  return this.radius ** 2 * Math.PI;
}
Circle.prototype.diameter = function() {
  return this.radius * 2;
}
