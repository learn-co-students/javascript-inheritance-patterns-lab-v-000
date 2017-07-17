function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
		return "(" + this.x + "," + this.y + ")";
	}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
		this.position = new Point(x, y);
	}

Shape.prototype.move = function(x, y) {
		this.position = new Point(x, y);
	}

function Circle(radius) {
	Shape.call(this);
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
	return (Math.PI * this.radius^2);
}

Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.radius);
}

Circle.prototype.diameter = function() {
	return (2 * this.radius);
}

function Side(length) {
	this.length = length;
}

function Polygon(sides) {
	Shape.call(this);
	this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
	return this.sides.reduce((a,b) => a + b.length, 0);
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length;
}

function Triangle(sdeOne, sdeTwo, sdeThree){
	this.sdeOne = new Side(sdeOne);
	this.sdeTwo = new Side(sdeTwo);
	this.sdeThree = new Side(sdeThree);
	Polygon.call(this, [this.sdeOne, this.sdeTwo, this.sdeThree]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
	this.sideOne = new Side(sideOne);
	this.sideTwo = new Side(sideTwo);
	this.sideThree = new Side(sideThree);
	this.sideFour = new Side(sideFour);
	Polygon.call(this, [this.sideOne, this.sideTwo, this.sideThree, this.sideFour]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
	Quadrilateral.call(this, width, height, width, height);
	this.width = width;
	this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
	return this.width * this.height;
}

function Square(length){
	Rectangle.call(this, length, length);
	this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
	var properties = "";
	for (var prop in this) {
		if (this.hasOwnProperty(prop)) {
			properties += ("this." + prop + " = " + this[prop]);
		}
	}
	return properties;
}

