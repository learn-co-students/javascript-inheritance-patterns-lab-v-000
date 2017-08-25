function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return ("(" + this.x + "," + this.y + ")")
};

function Side(length) {
	this.length = length;
}

function Shape(x, y) {
	this.x = x;
	this.y = y;
}

Shape.prototype.addToPlane = function(x, y) {
	var pos = new Point(x, y);
	this.position = pos;
}

Shape.prototype.move = function(x, y) {
	var pos = new Point(x, y);
	this.position = pos;
}

function Circle(radius) {
	Shape.call(this);
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.circumference = function() {
	return 2 * Math.PI * this.radius 
}

Circle.prototype.area = function() {
	return Math.PI * this.radius * this.radius
}
Circle.prototype.diameter = function() {
	return 2 * this.radius
}

function Polygon(sides) {
	Shape.call(this);
	this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
	var perim = 0;
	for(var index in this.sides) {
		perim += this.sides[index].length;
	}
	return perim;
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length;
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
	Polygon.call(this);
	var sideArr = [];
	sideArr.push(new Side(sideOne));
	sideArr.push(new Side(sideTwo));
	sideArr.push(new Side(sideThree));
	sideArr.push(new Side(sideFour));
	this.sides = sideArr;
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
	return this.width * this.height
}

function Square(length) {
	Rectangle.call(this, length, length);
	this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
	var propStr = "";
	for(var prop in this) {
		if(this.hasOwnProperty(prop)) {
			propStr += prop;
		}
	}
	return propStr;
}

function Triangle(sideOne, sideTwo, sideThree) {
	Polygon.call(this);
	var sideArr = [];
	sideArr.push(new Side(sideOne));
	sideArr.push(new Side(sideTwo));
	sideArr.push(new Side(sideThree));
	this.sides = sideArr;
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;