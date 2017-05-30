'use strict';
function Point (x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`
}

function Side (length) {
  this.length = length
}

function Shape () {}
Shape.prototype = Object.create(Point.prototype)
Shape.prototype.constructor = Shape
Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y)
}
Shape.prototype.move = function (x, y) {
  this.position.x = x
  this.position.y = y
}

function Circle (radius) {
  Shape.call(this)
  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function () {
  return this.radius * 2
}
Circle.prototype.area = function () {
  return this.radius ** 2 * Math.PI
}
Circle.prototype.circumference = function () {
  return this.radius * 2 * Math.PI
}

function Polygon (sides) {
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function () {
  let total = 0
  for (var i=0; i<this.sides.length; i++) {
    total += this.sides[i].length
  }
  return total
}
Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

function Quadrilateral (one, two, three, four) {
  Polygon.call(this, [new Side(one), new Side(two), new Side(three), new Side(four)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle (width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square (side) {
  Rectangle.call(this, side, side)
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function () {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      return `square.${prop} = ${this.prop}`
    }
  }
}

function Triangle (one, two, three) {
  Polygon.call(this, [new Side(one), new Side(two), new Side(three)])
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
