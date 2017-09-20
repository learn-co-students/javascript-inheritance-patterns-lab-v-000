function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return this.x + ", " + this.y
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
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
	return this.radius * 2
}

Circle.prototype.area = function() {
	return Math.PI * (2 * this.radius)
}

Circle.prototype.circumference = function() {
	return 2 * (Math.PI * this.radius)
}

function Side(length) {
	this.length = length
}

function Polygon(sidesArray) {
	this.sides = sidesArray
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.perimeter = function() {
	var total = 0
	for (var i=0; i<this.sides.length; i++) {
		total += this.sides[i].length
	}
	return total
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
	Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Triangle(side1, side2, side3) {
	Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)

function Rectangle(width, height) {
	this.width = width
	this.height = height
	Quadrilateral.call(this, width, width, height, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
	return this.width * this.height
}

function Square(length) {
	this.length = length
	Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function() {
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            console.log(this[prop]);            
        }
    }
}



