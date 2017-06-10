function Point(x, y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return `${this.x}, ${this.y}`
}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  this.position = new Point(x, y)
}
function Side(length){
  this.length = length
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}


Circle.prototype.diameter = function() {
  return this.radius * 2
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.perimeter = function (){
  var sidesLength = 0
  this.sides.forEach(function(side) {
    sidesLength += side.length
  }, )
  return sidesLength
}

Polygon.prototype.numberOfSides = function() {
  return this["sides"]["length"]
}

function Quadrilateral(a, b, c, d){
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Triangle(a, b, c){
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype)

function Rectangle(width, height){
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square(side){
  Rectangle.call(this, side, side)
  this.side = side
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function(){
  return Object.keys(this).join(", ")
}