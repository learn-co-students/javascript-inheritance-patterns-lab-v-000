
function Point(x, y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function(){
 // console.log("(" + this.x + ", " + this.y + ")");
 console.log( `(${this.x}, ${this.y})`
}

function Side(side_value){
  this.length = side_value
}

function Shape(sides, x, y){
 this.sides = sides;
 this.x = x;
 this.y = y;
}

Shape.prototype.addToPlane = function(x,y){
  Point.call(this, x, y)
}

Shape.prototype.move = function(x,y){
  this.x = x;
  this.y = y;
}

Shape.prototype.position = function(){
  var posish = new Point(this.x, this.y)
  return posish
}

function Circle(integer){
  this.radius = integer;
}

Circle.prototype.area = function(){
  return (this.radius * this.radius) * 3.14
}

Circle.prototype.circumference = function(){
  return (this.radius * this.radius)
}

function Polygon(array){

}

Polygon.prototype.numberOfSides = function(){

}

function Quadrilateral(){

}

function Triangle(){

}

function Rectangle(){

}

Rectangle.prototype.area = function(){

}

function Square(){

}

Rectangle.listProperties = function(){

}
