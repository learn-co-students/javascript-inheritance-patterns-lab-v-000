function Point(x, y){
	this.x = x
	this.y = y
	this.toString = function(){
		return `(${this.x}, ${this.y})`
	}
}

function Shape(){
}



Shape.prototype.addToPlane = function(x, y){
		this.position = new Point(x, y)
	}

Shape.prototype.move = function(x,y){
	this.position.x = x
	this.position.y = y
}	


function Side(sides){
	return new Array(sides)
}

function Circle(radius){
	Shape.call(this);
	this.radius = radius
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle


Circle.prototype.circumference = function(){
	return this.radius * 2 * Math.PI
}
Circle.prototype.area = function(){
	return this.radius * this.radius * Math.PI
}
Circle.prototype.diameter = function(){
	return this.radius * 2
}


function Polygon(side){
	Shape.call(this);
	this.side = side
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function(){
	var perimeter = 0
	for (var i = 0; i<this.side.length; i++) {
		perimeter += this.side[i].length
	}
	return perimeter
}


Polygon.prototype.numberOfSides = function(){
	return this.side.length
}


function Quadrilateral(firstSide, secondSide, thirdSide, fourthSide){
	Polygon.call(this, [new Side(firstSide), new Side(secondSide), new Side(thirdSide), new Side(fourthSide)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral


function Triangle(firstSide, secondSide, thirdSide){
	Polygon.call(this, [new Side(firstSide), new Side(secondSide), new Side(thirdSide)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle


function Rectangle(width, height){
	Quadrilateral.call(this, width, width, height, height)
	this.width = width
	this.height = height

}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
	return this.width * this.height
}

function Square(length){
	Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function(){
	for (var prop in this) {
  console.log("this." + prop + " = " + this[prop]);
}
}
