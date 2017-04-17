function Point(x, y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function(){
  return "(" + this.x + ", " + this.y + ")"
}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  this.position = new Point(x,y)
  // console.log(Shape.prototype.position)
}

Shape.prototype.move = function(x, y){
  this.position.x = x;
  this.position.y = y;
}

function Side(length){
  this.length = length;
}

function Polygon(sides){
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function(){
  return this.sides.reduce((perimeter, side) => {
    return perimeter + side.length;
  }, 0);
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length;
}

function Circle(radius){
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(){
  return this.radius * 2;
}

Circle.prototype.circumference = function(){
  return Math.PI * this.radius * 2;
}

Circle.prototype.area = function(){
  return Math.PI * this.radius^2;
}

function Quadrilateral(side1, side2, side3, side4){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(side1, side2, side3){
  Polygon.call(this, [new Side(side1), new Side (side2), new Side(side3)])
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height){
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
  return this.width * this.height;
}

function Square(length){
  Rectangle.call(this, length, length);
  this.length = length;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function(){
  var list = [];
  for(var prop in this){
    if(this.hasOwnProperty(prop)){
      list.push(prop);
    }
  }
  return list.join(", ")
}
