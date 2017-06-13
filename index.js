function Point(x, y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
	return "(" + this.x + ", " + this.y + ")"
}

function Side(l){
	this.length = l
}

function Shape(){

}

Shape.prototype.addToPlane = function(x, y){
		console.log("here")
	this.position = new Point(x, y)
	return this.position
}

Shape.prototype.move = function(x, y){
		console.log("in move")
	this.position = new Point(x, y)
	return this.position
}

function Circle(radius){
    this.radius = radius
}

Object.setPrototypeOf(Circle, Shape)

var testShape = new Shape()

Circle.prototype = testShape

Circle.prototype.diameter = function(){
	return 2*this.radius
}

Circle.prototype.area = function(){
	return Math.PI * this.radius^2
}

Circle.prototype.circumference = function(){
	return 2 * Math.PI * this.radius
}

function Side(length){
	this.length = length
}

function Polygon(sides_array) {
    this.sides_array = sides_array
}

Polygon.prototype = testShape

// 'this' in this function is coming out to Circle for some reason 
Polygon.prototype.circumference = function() {
	debugger
	this.sides_array.reduce(function(a, b){
		return a.length + b.length
	})
}