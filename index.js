function Point(x, y){
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function(x, y){
	return (this.x + "," + this.y);
	}

function Side(length){
	this.length = length;
}

function Shape(x, y){
	this.x = x;
	this.y = y;
}

Shape.prototype.addToPlane = function(x, y){
	this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y){
	this.position = new Point(x, y);
}

function Circle(radius){
	this.radius = radius;
	Shape.call(this);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(){
	return (this.radius * 2);
}
Circle.prototype.area = function(){
	return (Math.PI * this.radius^2);
}
Circle.prototype.circumference = function(){
	return (2 * Math.PI * this.radius);
}

function Polygon(array){
	this.sides = array.map(i => {return i.length});
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function(){
	return (this.sides.reduce((acc, val) => {return acc + val}, 0));
}

Polygon.prototype.numberOfSides = function(){
	return this.sides.length;
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour){
	this.sides = [sideOne, sideTwo, sideThree, sideFour];
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height){
	this.width = width;
	this.height = height;
	Quadrilateral.call(this, width, height, width, height);
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(){
	return this.width * this.height;
}

function Square(side){
	Rectangle.call(this, side, side)
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function(){
	for (var prop in this){
		return this[prop]
	}
}

function Triangle(sideOne, sideTwo, sideThree){
	this.sides = [sideOne, sideTwo, sideThree]
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;



