function Point(x, y) {
  this.x = x,
  this.y = y
  this.toString = function () {
    return "(" + x + ", " + y + ")"
  }
}
function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius*2
}

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

function Side(length) {
  this.length = length
}

function Polygon(array) {
  this.sides = array
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}
Polygon.prototype.perimeter = function() {
  let num = 0
  var i = 0
  for (i = 0; i < this.numberOfSides(); i++){
    num += this.sides[i].length
  }
  return num
}

function Quadrilateral(l1, l2, l3, l4) {
  this.sides = []
  for (var i = 0; i < arguments.length; i++){
    this.sides.push(new Side(arguments[i]))
  }
}
Quadrilateral.prototype = Object.create(Polygon.prototype)

function Triangle(s1, s2, s3) {
  this.sides = []
  for (var i = 0; i < arguments.length; i++){
    this.sides.push(new Side(arguments[i]))
  }
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
  this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
  this.width = width,
  this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  this.width = length
  this.height = length
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)]
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.consutrctor = Square
Square.prototype.area = function() {
  return this.width * this.height
}

Square.prototype.listProperties = function() {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log(prop)
    }
  }
}
