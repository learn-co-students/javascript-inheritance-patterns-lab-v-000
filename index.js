function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    //   return "(" + this.x + ","+ this.y + ")"
   return `(${this.x},${this.y})`
  }
}

  function Side(length) {
     this.length = length;
  }


  function Shape() {
}
  Shape.prototype.addToPlane = function (x,y) {
    this.position = new Point(x, y)
  };
  Shape.prototype.move = function(x,y) {
    this.position.x = x;
    this.position.y = y;
  }

  function Circle(radius) {
    Shape.call(this, radius);
    this.radius = radius;
  }
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;

  Circle.prototype.area = function () {
    return Math.PI * this.radius^2;
  }
  Circle.prototype.circumference = function () {
    return 2 * Math.PI * this.radius;
  }

  Circle.prototype.diameter = function () {
    return this.radius * 2;
  }

  function Polygon(sides) { //or Side, this.Side = Side, Side holds length, how to incorporate it maybe add property Side function
    Shape.call(this, sides); //why aren't we passing through sides?
    this.sides = sides;
  }

  Polygon.prototype = Object.create(Shape.prototype);
  Polygon.prototype.contructor = Polygon;

  Polygon.prototype.perimeter = function() {
    var perimeter = 0;
   for(let i = 0; i < this.sides.length; i++) {
     perimeter += this.sides[i].length
   }
   return perimeter
 }

  Polygon.prototype.numberOfSides = function () {
    return this.sides.length
  }


  function Quadrilateral(a,b,c,d) {
    Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
  }

  Quadrilateral.prototype = Object.create(Polygon.prototype);
  Quadrilateral.prototype.contructor = Quadrilateral;

function Triangle (a,b,c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.contructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return (this.width * this.height)
}

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
for (var prop in Square) {
  return ("Square" + prop + " = " + Square[prop]);
}
}
