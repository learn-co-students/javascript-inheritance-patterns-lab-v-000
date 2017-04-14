function Point(x, y) {
  this.x = x 
  this.y = y
  this.toString = function() {
    return `${x}, ${y}`
  }
}

function Shape() {
  this.x = 0
  this.y = 0
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

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function() {
  return 2* Math.PI * this.radius
}

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  this.sides = sides 
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.constructor = Polygon

Polygon.prototype.perimeter = function() {
  var perimeter = 0 
  var sidesArr = this.sides
  sidesArr.forEach( i => {
    perimeter += i.length
  })
  return perimeter
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.constructor = Quadrilateral

function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.constructor = Triangle

function Rectangle(width, height) {
  Polygon.call(this, [new Side(width), new Side(width), new Side(height), new Side(height)])
  this.width = width 
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength)
  this.length = sideLength
}

Square.prototype = Object.create(Rectangle.prototype)
Square.constructor = Square

Square.prototype.listProperties = function() {
  var square = this
  for (var prop in square) {
    if(square.hasOwnProperty(prop)) {
      console.log("square " + prop + " = " + square[prop])
    }
  }
}