function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
    return `${this.x}, ${this.y}`
}

function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y) {
  this.position.x = x
  this.position.y = y
  // this also passes:   this.position = new Point(x,y)
}

function Side(intger) {
  this.length = intger
}


function Circle(radius) {
  this.radius = radius


}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.diameter = function () {
  return this.radius * 2
}

Circle.prototype.area = function() {
    return Math.PI * this.radius^2
}

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius
}

function Polygon(radius) {
  this.radius = radius
}

Polygon.prototype = Object.create(Shape.prototype)
