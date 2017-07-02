function Point(x, y){
  this.x = x;
  this.y = y;
}

function Side(length){
  this.length = length
}

Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`;
}

function Shape(){

}

Shape.prototype.addToPlane = function(x, y){
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  this.addToPlane(x, y)
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(){
  return this.radius * 2
}

Circle.prototype.area = function(){
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function(){
  return this.sides.reduce((sum, side)=>side.length+sum, 0);
}
Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

function Quadrilateral(left, top, right, bottom){
  Polygon.call(this, [new Side(left), new Side(top), new Side(right), new Side(bottom)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height){
  Quadrilateral.call(this, height, width, height, width)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
  return this.width * this.height
}

function Square(size){
  Rectangle.call(this, size, size)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square;

//This code works
/*Square.prototype.listProperties = function(){
  return ''
}*/

Square.prototype.listProperties = function(){
  return Object.keys(this).filter((key)=>{
    this.hasOwnProperty(key)
  }).join(', ');
}

function Triangle(side1, side2, side3){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle;
