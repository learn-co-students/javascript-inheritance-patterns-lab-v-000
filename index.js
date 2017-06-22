function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + "," + this.y + ")";
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.diameter = function() {
  return(this.radius*2);
}

Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.perimeter = function() {
  return (this.sides.reduce(function(acc, side) {
    return acc + side.length
  }, 0))
}

Polygon.prototype.numberOfSides = function() {
  return (this.sides.length)
}

function Quadrilateral(sideOneLength, SideTwoLength, SideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(SideTwoLength), new Side(SideThreeLength), new Side(sideFourLength)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)


function Triangle(sideOneLength, SideTwoLength, SideThreeLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(SideTwoLength), new Side(SideThreeLength)])
}

Triangle.prototype = Object.create(Polygon.prototype)

function Side(length) {
  this.length = length;
}

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
  return (this.height * this.width);
}

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.listProperties = function() {

  return Object.keys(this).reduce(function(acc, val) {
    acc += val
  }, "")
}
