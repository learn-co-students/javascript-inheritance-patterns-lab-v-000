function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {return this.x + ", " + this.y}

function Side(length) {
  this.length = length;
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius;
  this.diameter = function() { return this.radius * 2};
  this.area = function() { return Math.PI * this.radius^2 };
  this.circumference = function() { return 2 * Math.PI * this.radius};
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Polygon(sides) {
  Shape.call(this)
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() { return this.sides.length};

Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i = 0; i < this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c),new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(a,b,c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])

}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle


function Rectangle(a, b) {
  Quadrilateral.call(this, a, b, a, b)
  this.width = a;
  this.height = b;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() { return this.width * this.height};

function Square(a) {
  Rectangle.call(this, a, a)
  this.listProperties = function() {
    for (var prop in this) {
      console.log(this + "." + prop + " = " + this[prop]);
    }
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square
