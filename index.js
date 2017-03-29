

function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return ("(" + this.x + ", " + this.y + ")");
}

function Side(x) {
  this.length = x;
}

function Shape() {

}

Shape.prototype.addToPlane = function(x, y) {
    this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  //moves position to a new Point
  this.position = new Point(x, y);
}

function Circle(integer) {
  this.radius = integer
  
  this.diameter = function() {
   return this.radius * 2;
  }

  this.area = function() {
    return 3.14 * this.radius^2;
  }

  this.circumference = function() {
    return 2 * Math.PI * this.radius;
  }
 
}


Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle


function Polygon() { //inherits from Shape 
  this.sides = //holds array of Side objects
  this.perimeter = function() {
    //based on the lengths of the sides
  }

  this.numberOfsides = function() {
    return //number of sides
  }

}
Polygon.prototype = Object.create(Shape.prototype)



function Quadrilateral() {

}


function Triangle() {

}


function Rectangle() {


}

function Square() {

}











