function Point(x ,y ){
  this.x = x;
  this.y = y;

  Point.prototype.toString = function() {
    return `(${x}, ${y})`
  }
}

function Side(length){
  this.length = length;
}

function Shape(){}
  Shape.prototype.addToPlane = function(x, y){
    this.position = new Point(x, y);
  }

  Shape.prototype.move = function(x, y){
    this.position = new Point(x, y);
  }


function Circle(radius){
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Shape;

Circle.prototype.diameter = function() {
  return (this.radius * 2);
}

Circle.prototype.area = function() {
  return(Math.PI * (this.radius * this.radius));
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}


function Polygon(sides){
  Shape.call(this);
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Shape;

Polygon.prototype.perimeter = function() {
  var perimeter = 0;
  for(var i=0; i < this.sides.length; i++){
    perimeter += this.sides[i].length;
  }
  return perimeter;
}

Polygon.prototype.numberOfSides = function () {
  return this.sides.length;
}

function Quadrilateral(w, x, y, z){
  Polygon.call(this, [new Side(w), new Side(x), new Side(y), new Side(z)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Polygon;

function Triangle(x, y, z){
  Polygon.call(this, [new Side(x), new Side(y), new Side(z)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Polygon;

function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Quadrilateral;

Rectangle.prototype.area = function (){
  return this.width *this.height
}

function Square(length){
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Rectangle;


Square.prototype.listProperties = function () {
  for (var prop in this) {
  console.log("square:" + prop + " = " + this[prop]);
  }
}
