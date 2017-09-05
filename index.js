function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function () {
	return("(" + this.x + "," + this.y + ")");
}

function Shape () {

}

Shape.prototype.addToPlane = function (x, y) {
	this.position = new Point(x, y);
}

Shape.prototype.move = function (x, y) {
	this.position = new Point(x, y);
}

function Circle (radius) {
	Shape.call(this);
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
	return Math.PI * this.radius ^ 2
}

Circle.prototype.diameter = function () {
	return 2 * this.radius;
}

Circle.prototype.circumference = function () {
	return 2 * this.radius * Math.PI;
}

function Polygon (sides) {
	Shape.call(this);
	this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function () {
	return this.sides.map( function (side) {
		return side.length}
		).reduce( function (total, side) {
			return total + side;
		})
	}

	function Side(length) {
		this.length = length;
	}

	Polygon.prototype.numberOfSides = function () {
		return this.sides.length
	}

	function Quadrilateral (x,y,z,w) {
		Polygon.call(this, [new Side(x),new Side(y),new Side(z),new Side(w)])
	}

	Quadrilateral.prototype = Object.create(Polygon.prototype);
	Quadrilateral.prototype.constructor = Quadrilateral;

	function Triangle (x,y,z) {
		Polygon.call(this, [new Side(x),new Side(y),new Side(z)])
	}

	Triangle.prototype = Object.create(Polygon.prototype);
	Triangle.prototype.constructor = Polygon;

	function Rectangle (width, height) {
		Quadrilateral.call(this, width, width, height, height)
		this.width = width
		this.height = height
	}

	Rectangle.prototype = Object.create(Quadrilateral.prototype);
	Rectangle.prototype.constructor = Rectangle;

	Rectangle.prototype.area = function () {
		return this.width * this.height;
	}

	function Square (length) {
		Rectangle.call(this, length, length)
		this.length = length;
	}

	Square.prototype = Object.create(Rectangle.prototype);
	Square.prototype.constructor = Square;

	Square.prototype.listProperties = function() {
		for (var prop in this) {
			if(this.hasOwnProperty(prop)) {
				return prop;
			}
		}
	}
	





