function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Shape() {
}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y);
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.diameter = function() {
  return(this.radius * 2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius ** 2);
}
Circle.prototype.circumference = function() {
  return(Math.PI * this.radius * 2);
}

function Side(length) {
  this.length = length;
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.perimeter = function() {
  var perim = 0;
  for(var i = 0; i < this.sides.length; i++) {
    perim += this.sides[i].length;
  }
  return(perim);
}

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length)
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
}

Triangle.prototype = Object.create(Polygon.prototype)

function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
  return(this.width * this.height);
}

function Square(side) {
  Rectangle.call(this, side, side)
  this.side = side;
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function() {
  var properties = "";
  for (var property in this) {
    if (this.hasOwnProperty(property)) {
      properties += "this." + property + " = " + this[property];
    }
  }
  return properties
}
