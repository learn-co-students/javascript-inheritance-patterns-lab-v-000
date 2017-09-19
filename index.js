// first define constructor with params:
// function child(x, y, sides) {
 // this.sides = sides
//}

//then: 
// child.prototype = Object.create(parentShape.parameter)
// child.prototype.constructer = child

// then extend:
// child.prototype.perimeter = function () {
//    return this...etc;
//}

function Point(x, y) { //has toString function
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return (this.x + ", " + this.y)
}

function Shape() {
}

Shape.prototype = Object.create(Point.prototype);
Shape.prototype.constructor = Shape;

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);  
};

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return ( Math.PI * this.radius ** 2);
}

Circle.prototype.diameter = function() {
  return (this.radius * 2);
}

Circle.prototype.circumference = function() {
  return ( Math.PI * (2 * this.radius)); 
}


function Side(length) {
  this.length = length;
}

function Polygon(sides) { // inherits from Shape, knows :num of sides, perimeter, sides = array
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return (this.sides.length);
}

Polygon.prototype.perimeter = function() {
  var sum = this.sides.reduce(function(a, b){
    a += b.length;
    return(a)
  }, 0)
  return sum;
}

function Quadrilateral(side1Len, side2Len, side3Len, side4Len) { // inherits from Polygon, number of sides function

  Polygon.call(this, [new Side(side1Len), new Side(side2Len), new Side(side3Len), new Side(side4Len)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(side1Len, side2Len, side3Len) {
  Polygon.call(this, [new Side(side1Len), new Side(side2Len), new Side(side3Len)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) { //inherits from Quadrilateral

  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(0 {
  return (this.width * this.length);
})


function Square(myside) {

}