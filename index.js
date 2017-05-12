function Point(x, y) {
	this.x = x
	this.y = y
}

Point.prototype.toString = function() {
	return "(" + this.x + ", " + this.y + ")"
}

function Side(length) {
  this.length = length;
}

function Shape(position) {}

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

Circle.prototype.area = function() {
	return(Math.PI * this.radius^2)
}

Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.radius)
}

Circle.prototype.diameter = function() {
  return(this.radius*2);
}

function Polygon(sides) {
	Shape.call(this)
	this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
	let total = 0
	for(let i = 0; i < this.sides.length; i++) {
		total = total + this.sides[i].length
	}
	return total
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length
}

function Quadrilateral(a, b, c, d) {
	Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(a, b, c) {
	Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

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
	Rectangle.call(this, length, length, length, length)
	this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
	let sq = new Square()
	for (var prop in sq) {
  	if(sq.hasOwnProperty(prop)) {
    	console.log("sq." + prop + " = " + sq[prop]);
  	}
	}
}










