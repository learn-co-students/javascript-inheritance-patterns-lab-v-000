

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



Polygon.prototype = Object.create(Shape.prototype)
// var array = [{length: 2}, {length: 4}, {length: 2}, {length: 4}]
Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}


Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Polygon(ary) { 
  this.sides = ary 
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

// function Triangle(a, b, c) {
//   Polygon.call(this, new Side(a), new Side(b), new Side(c));
// }

// two integer arguments that set width and height properties. 
//Implement an area() function to calculate the area
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Rectangle(x, y) {
  Quadrilateral.call(this, x, y, x, y)
  this.width = x
  this.height = y
}


Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height;
}


Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.listProperties = function() {

}

function Square(side) {
  Rectangle.call(this, side, side)
  this.length = side;
} 











