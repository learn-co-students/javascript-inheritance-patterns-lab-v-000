
function Point(x, y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function(){
 return ("(" + this.x + ", " + this.y + ")");
 // console.log( `(${this.x}, ${this.y})`
}

function Side(length){
  this.length = length
}

function Shape(){}

  Shape.prototype.addToPlane = function(x,y){
    this.position = new Point(x,y)
  }

  Shape.prototype.move = function(x,y){
    this.position = new Point(x,y)
  }


function Circle(integer){
  Shape.call(this)
  this.radius = integer;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function(){
  return (this.radius * this.radius) * 3.14
}

Circle.prototype.circumference = function(){
  return (this.radius * this.radius)
}

Circle.prototype.diameter = function() {
  return(this.radius*2);
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function(){
  var perimeter_value = 0

  for (let i = 0; i < this.sides.length ; i ++) {
    perimeter_value += this.sides[i].length
  }
  return perimeter_value
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

function Quadrilateral(s1,s2,s3,s4){
  Polygon.call(this, [ new Side(s1), new Side(s2), new Side(s3), new Side(s4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(s1, s2, s3){
  Polygon.call(this, [ new Side(s1), new Side(s2), new Side(s3) ]);
};

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height){
  Quadrilateral.call(this, [new Side(width), new Side(height)])
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
    return (this.width) * (this.height)
}

Rectangle.prototype.perimeter = function(){
    return (this.width * 2) + (this.height * 2)
}

function Square(side){
  Rectangle.call(this, side, side)
  this.length = side
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}
