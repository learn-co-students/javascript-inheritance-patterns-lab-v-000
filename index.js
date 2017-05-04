// Working on the POINT object

function Point (x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`
}

// Working on the SHAPE object

function Shape () {
}

Shape.prototype.addToPlane = function (x,y) {
  this.position = new Point (x,y)
}

Shape.prototype.move = function (x,y) {
  this.position.x = x
  this.position.y = y
}

// Working on the CIRCLE object

function Circle (radius) {
  Shape.call (this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function () {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius
}

Circle.prototype.diameter = function () {
  return this.radius * 2
}

// Working on the SIDES object

function Side (length) {
  this.length = length
}

// Working on the POLYGON object

function Polygon (sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function () {
  var sum = 0
  for (let i = 0; i < this.sides.length; i++) {
    sum += this.sides[i].length
  }
  return sum
}
Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

// Working on the QUADRILATERAL object

function Quadrilateral (sideOneLength,sideTwoLength,sideThreeLength,sideFourLength) {
  var sideOne = new Side (sideOneLength)
  var sideTwo = new Side (sideTwoLength)
  var sideThree = new Side (sideThreeLength)
  var sideFour = new Side (sideFourLength)
  var sidesArray = [sideOne, sideTwo, sideThree, sideFour]
  Polygon.call (this,sidesArray)
}

Quadrilateral.prototype = Object.create (Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

// Working on the RECTANGLE object

function Rectangle (width,height) {
  this.width = width
  this.height = height
  Quadrilateral.call (this,width,height,width,height)
}

Rectangle.prototype = Object.create (Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

// Working on the TRIANGLE object

function Triangle (sideOneLength,sideTwoLength,sideThreeLength) {
  var sideOne = new Side (sideOneLength)
  var sideTwo = new Side (sideTwoLength)
  var sideThree = new Side (sideThreeLength)
  var sidesArray = [sideOne, sideTwo, sideThree]
  Polygon.call (this,sidesArray)
}

Triangle.prototype = Object.create (Polygon.prototype)
Triangle.prototype.constructor = Triangle

// Working on the SQUARE object

function Square (length) {
  Rectangle.call (this, length, length)
}

Square.prototype = Object.create (Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function () {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      return prop
    }
  }
}
