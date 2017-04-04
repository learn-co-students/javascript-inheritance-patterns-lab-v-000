function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length
}

function Shape() {
  this.x = 0
  this.y = 0
  this.position = null
}

Shape.prototype.addToPlane = function(x, y) {
  this.x = x
  this.y = y
  this.position = new Point(this.x, this.y)
}

Shape.prototype.move = function(x, y) {
  this.x = x
  this.y = y
  this.position = new Point(this.x, this.y)
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return (this.radius * 2)
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2)
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
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
  return this.sides.reduce((total, side) => {
    return total + side.length
  }, 0)
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this)
  this.side1 = side1
  this.side2 = side2
  this.side3 = side3
  this.side4 = side4
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral
