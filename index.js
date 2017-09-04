function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function pointToString() {
    return('('+ this.x + ', ' + this.y + ')')
  };
}

function Side(x) {
  this.x = x;
  this.length = this.x.valueOf()
}

function Shape(x, y, position) {
  this.position = position;
}

Shape.prototype.addToPlane = function addToPlane(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function move(x, y) {
  var p = new Point(x, y);
  return(this.position = p.toString());
}

function Circle(radius) {
  this.radius = radius;
  this.diameter = function diameter() {
    return(this.radius*2);
  }
  Shape.call(this, this, this, this, radius);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return(Math.PI*(this.radius*this.radius));
}

Circle.prototype.circumference = function() {
  return(2*Math.PI*this.radius);
}

function Polygon(sides) {
  this.sides = sides;
  Shape.call(this, this, this, this, sides);
  this.numberOfSides = function numberOfSides() {
    return((this.sides).length)
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  return(this.sides.map(function(value, index) {
    return(value.length)
    }).reduce(function(sum, value) {
      return(sum + value);
    }))
}

function Quadrilateral(w, x, y, z) {
  this.w = w;
  this.x = x;
  this.y = y;
  this.z = z;
  Polygon.call(this, [new Side(w), new Side(x), new Side(y), new Side(z)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


function Triangle(w, x, y) {
  this.w = w;
  this.x = x;
  this.y = y;
  Polygon.call(this, [new Side(w), new Side(x), new Side(y)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Quadrilateral.call(this, width, height, width, height);
  // Quadrilateral.call([new Side(width), new Side (height), new Side(width), new Side (height)]);
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return(this.width * this.height);
}

function Square(l) {
  this.l = l;
  Rectangle.call(this, l, l, l, l);
  this.listProperties = function listProperties() {
    for (var prop in this) {
      if(this.hasOwnProperty(prop)) {
      console.log("this." + prop + " = " + this[prop]);
      }
    }
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
