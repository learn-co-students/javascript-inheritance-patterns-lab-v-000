function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return (this.x + ", " + this.y);
}

function Side(length) {
	this.length = length;
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y) {
	this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
	this.position = new Point(x,y);
}

function Circle(radius) {
	Shape.call(this);
	this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
	return (this.radius*2);
}

Circle.prototype.area = function() {
	return (Math.PI * this.radius ^ 2);
}

Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.radius);
}

function Polygon(sides) {
	Shape.call(this);
	this.sides = sides;
}

function Side(length) {
	this.length = length;
}

Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
	var perimeter = 0
	for (var i = 0; i < this.sides.length; i++) {
		perimeter  = perimeter + this.sides[i].length;
	}
	return(perimeter);
}

Polygon.prototype.numberOfSides = function() {
	return (this.sides.length);
}

function Quadrilateral(side1, side2, side3, side4) {
	Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]);
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}

Quadrilateral.prototype = Object.create(Polygon.prototype);

Quadrilateral.prototype.constructor = Quadrilateral;



function Triangle(side1, side2, side3) {
	Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

Triangle.prototype = Object.create(Polygon.prototype);

Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
	Quadrilateral.call(this, width, height, width, height);
	this.height	 = height;
	this.width = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
	return(this.height * this.width);
}

function Square(length) {
	Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
	for (var prop in this) {
		if(this.hasOwnProperty(prop)) {
			console.log(this[prop])
		}
	}
}