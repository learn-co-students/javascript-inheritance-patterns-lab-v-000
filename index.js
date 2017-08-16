function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `${this.x}, ${this.y}`
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.addToPlane(x, y)
}

function Side(length) {
  this.length = length
}

function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.circumference = function() {
  return this.diameter() * Math.PI
}

Circle.prototype.area = function() {
  return Math.pow(this.radius, 2) * Math.PI
}

function Polygon(sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

Polygon.prototype.perimeter = function() {
  return this.sides.map(side => side.length).reduce((a, b) => a + b)
}

function Quadrilateral(...args) {
  if (!(args.length === 4)) throw new Error('Quadrilateral must have 4 sides')
  Polygon.call(this, args.map(side => new Side(side)))
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.apply(this, Array(4).fill(length))
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  let props = []
  for (let prop in this) {
    if (this.hasOwnProperty(prop)) {
      props.push(this[prop])
    }
  }
  return props.join(',')
}

function Triangle(...args) {
  if (!(args.length === 3)) throw new Error('Triangle must have 3 sides')
  Polygon.call(this, args.map(side => new Side(side)))
}

Triangle.prototype = Object.create(Polygon.prototype)

Triangle.prototype.constructor = Triangle
