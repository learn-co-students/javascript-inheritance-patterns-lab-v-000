function Point(x,y){
  this.x = x;
  this.y = y;
}

function Side(length) {
	this.length = length;
}

Point.prototype.toString= function (){
    return "("+ this.x + "," +this.y+")"
}

function Shape(position,x,y){
    this.x = x;
    this.y = y;
    this.position = position
}

Shape.prototype.addToPlane = function(x,y){
    this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
    this.position = new Point(x,y)
}

function Circle(radius,position,x,y){
    Shape.call(this,position,x,y);
    this.radius = radius;   
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.circumference = function(){
        return this.radius * 2 * Math.PI;
    }

Circle.prototype.area = function (){
    return Math.PI * this.radius * this.radius  
}

Circle.prototype.diameter = function(){
    return this.radius * 2;
}

function Polygon(sides,position,x,y){
    Shape.call(this,position,x,y);
    this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function (){
    var count = 0
    for( var index in this.sides ){
        count+= this.sides[index].length;
    }
    return count
}
Polygon.prototype.numberOfSides = function (){
  return this.sides.length;
}

function Quadrilateral (sideOne,sideTwo,sideThree,sideFour){
     Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle (sideOne,sideTwo,sideThree){
     Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle

function Rectangle(width,height){
  this.width = width;
  this.height = height;
  Quadrilateral.call(this, width, height, width, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
   return this.width * this.height;
}

function Square(length){
  Rectangle.call(this,length,length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;


Square.prototype.listProperties = function() {
	var string = "";
	for(var prop in this) {
		if(this.hasOwnProperty(prop)) {
			string += prop;
		}
	}
	return string;
}