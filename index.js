function Point (x, y) {
    this.x = x;
    this.y = y;
/*
    this.toString = () => {
      var location = "(" + x + ", " + y + ")"
      return location
    }
    */
}

Point.prototype.toString = function() {
  var location = "(" + this.x + ", " + this.y + ")"
  return location
}
function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}
Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function () {
  return this.radius * 2
}
Circle.prototype.area = function() {
  return ((this.radius * Math.PI)^2)
}

Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius)
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function() {
    return this.sides.length
}

Polygon.prototype.perimeter = function() {
  var perimeter = 0
  var totalSides = Polygon.prototype.numberOfSides.call(this)
  for (let i = 0; i < totalSides; i++) {
    perimeter += this.sides[i].length
  }
  return perimeter
}

function Side (length) {
  this.length = length
}

function Quadrilateral (sideA, sideB, sideC, sideD) {
  Polygon.call(this, [new Side(sideA), new Side(sideB), new Side(sideC), new Side(sideD)])

  this.sideA = sideA
  this.sideB = sideB
  this.sideC = sideC
  this.sideD = sideD
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle (sideA, sideB, sideC) {
  Polygon.call(this, [new Side(sideA), new Side(sideB), new Side(sideC)])

  this.sideA = sideA
  this.sideB = sideB
  this.sideC = sideC
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle (width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
    return this.width * this.height
}

function Square (length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  for(var prop in Square) {
    if(Square.hasOwnProperty(prop)) {
      return Square[prop].join()
    }
  }
}
