function Point (x, y) {
    this.x = x;
    this.y = y;
};

Point.prototype.toString = function () {
    return (this.x + ", " + this.y)
};


function Side (length) {
    this.length = length
};

function Shape() {};

Shape.prototype.addToPlane = function (x, y) {
    this.position = new Point(x, y);
};

Shape.prototype.move = function (x, y) {
    this.addToPlane(x, y);
};

function Circle(radius) {
    this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
    
Circle.prototype.area = function () {
    return (Math.PI * this.radius^2)
}
    
Circle.prototype.circumference = function () {
    return (2 * Math.PI * this.radius)
}

Circle.prototype.diameter = function () {
    return (this.radius * 2)
}


function Polygon (sides) {
    this.sides = sides;
};


Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function () {
    var sum = this.sides.reduce(function(acc, side) {
        return acc + side.length
    }, 0);
    return sum
}

Polygon.prototype.numberOfSides = function () {
    return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
    Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle (width, height) {
   Quadrilateral.call(this, width, height, width, height);
   this.width = width;
   this.height = height;
};

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}
 
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  for (var property in this) {
    if (this.hasOwnProperty(property)) {
      console.log(property)
    }
  }
}

function Triangle(side1, side2, side3) {
    Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3 )])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;