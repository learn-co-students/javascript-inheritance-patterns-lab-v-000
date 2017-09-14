function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + "," + this.y + ")"
}

function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype = Object.create(Point.prototype)
Shape.prototype.constructor = Shape

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}

function Circle(i) {
  this.radius = i;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius *2;
}

Circle.prototype.area = function() {
  return Math.PI*this.radius*this.radius
}

Circle.prototype.circumference = function() {
  return Math.PI*this.radius*2
}

function Side(l) {
  this.length = l;
}

function Polygon(sidesArray) {
  this.sides = sidesArray
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

Polygon.prototype.perimeter = function() {
  var p = 0
  this.sides.forEach(function(element) {
    p += element.length;
  });
  return p
}


function Quadrilateral(a,b,c,d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(x, y, z) {
  Polygon.call(this, [new Side(x), new Side(y), new Side(z)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(x,y) {
  Quadrilateral.call(this, x, y, x, y)
  this.width = x;
  this.height = y
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
  return this.width * this.height
}

function Square(x) {
  Rectangle.call(this, x, x)
  this.width = x
  this.height = x
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.area = function() {
  return this.sides[0].length*4
}

Square.prototype.listProperties = function(){
  for (var prop in this) {
    console.log(prop + " = " + this[prop]);
  }

}
