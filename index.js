// Define Point
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ", "+ this.y;
};

// Define Side
function Side(length) {
  this.length = length;
}

// Define Shape
function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
};

// Define Circle
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
  return Math.pow(this.radius, 2) * Math.PI;
};

Circle.prototype.circumference = function() {
  return this.diameter() * Math.PI;
};

// Define Polygon
function Polygon(arr) {
  Shape.call(this);
  this.sides = arr;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var sum = this.sides.reduce(function(prev,curr,i,arr){
    return prev + curr.length;
  },0);
  return sum;
};

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};

// Define Quadrilateral
function Quadrilateral(a,b,c,d) {
  Polygon.call(this, [new Side(a),new Side(b),new Side(c),new Side(d)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

// Define Triangle
function Triangle(a,b,c) {
  Polygon.call(this, [new Side(a),new Side(b),new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

// Define Rectangle
function Rectangle(w,h) {
  Quadrilateral.call(this, w,h,w,h);
  this.width = w;
  this.height = h;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

// Define Square
function Square(l) {
  Rectangle.call(this, l,l);
  this.length = l;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "¥n";
    }
  }
  return props;
};
