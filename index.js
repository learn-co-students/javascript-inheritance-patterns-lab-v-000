function Point(x,y) {
    this.x = x;
    this.y = y;    
}

Point.prototype.toString = function(){
    return `(${this.x}, ${this.y})`
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y){
	this.position = new Point(x,y); 
	return this.position.toString;
}

Shape.prototype.move = function(x,y) {
	this.position.x = x; 
	this.position.y = y; 
}



function Circle(r) {
	Shape.call(this);
	this.radius = r; 
}

Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; 

Circle.prototype.area = function() {
	return Math.PI * this.radius^2; 
}

Circle.prototype.diameter = function() {
	return this.radius * 2; 
}


Circle.prototype.circumference = function() {
	return 2 * Math.PI * this.radius;
}


function Polygon(s) {
	this.sides = s;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
    let p = this.sides.reduce(function(n, side){
        return n + side.length;
    }, 0)
    return p;
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length; 
}


function Side(l) {
	this.length = l;
}


function Quadrilateral(a, b, c, d) {
	let sides = [a, b, c, d]; 
	sides.forEach(function(element, index) {
		sides[index] = new Side(element); 
	}); 

	Polygon.call(this, sides);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(w, h) {
	Quadrilateral.call(this, w, h, w, h)
	this.width = w; 
	this.height = h; 
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(){
    return this.width * this.height;
}


function Square(length) {
    Quadrilateral.call(this,length,length,length,length)
    this.length = length;
    this.width = length;
    this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
	Object.getOwnPropertyNames(this).toString; 
}

function Triangle(a,b,c) {
    let sides_array = [a,b,c].map(function(value,index){
        return new Side(value);
    })
    Polygon.call(this,sides_array);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;