function Point(x, y) {
  this.x = x; 
  this.y = y; 

} 

Point.prototype.toString = function() {
  return this.x + ", " + this.y; 
}

function Shape() {} 

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);  
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y); 
}

function Side(length) {
  this.length = length; 
}

function Circle(radius) {
  Shape.call(this); 
  this.radius = radius;  
}

Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; 

Circle.prototype.diameter = function() {
  return this.radius * 2; 
}

Circle.prototype.area = function() {
  return (Math.PI * this.radius^2); 
}

Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius); 
}

function Polygon(sides) {
  Shape.call(this); 
  this.sides = sides; 
}

Polygon.prototype = Object.create(Shape.prototype); 
Polygon.prototype.constructor = Polygon; 

Polygon.prototype.numberOfSides = function() {
  return this.sides.length; 
}

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(start, side) { 
    return start + side.length;  
  }, 0); 
}

function Quadrilateral(a, b, c, d) {
  this.sideLengths = [a, b, c, d]; 
  this.sides = this.sideLengths.map(function(sideLength) {
    return new Side(sideLength);  
  }); 
}

Quadrilateral.prototype = Object.create(Polygon.prototype); 
Quadrilateral.prototype.constructor = Quadrilateral; 

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);  
  this.width = width; 
  this.height = height; 
}
Rectangle.prototype = Object.create(Quadrilateral.prototype); 
Rectangle.prototype.constructor = Rectangle; 

Rectangle.prototype.area = function() {
  return this.width * this.height; 
}

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength); 
  this.length = sideLength; 
}
Square.prototype = Object.create(Rectangle.prototype); 
Square.prototype.constructor = Square; 
Square.prototype.listProperties = () => {
  var string = ""; 
  for (var name in this) {
    if (this.hasOwnProperty(name)) {
      string += name;  
    } 
  }
  return string; 
}

function Triangle(a, b, c) {
  this.sideLengths = [a, b, c]; 
  this.sides = this.sideLengths.map(function(sideLength) {
    return new Side(sideLength);  
  });  
}
Triangle.prototype = Object.create(Polygon.prototype); 
Triangle.prototype.constructor = Triangle; 
