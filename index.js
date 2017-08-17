// PONIT
function Point(x, y) {
    this.x = x;
    this.y = y;
};

Point.prototype.toString = function() {
    return ("(" + this.x + ", " + this.y + ")")
}

// SIDE
function Side(length) {
    this.length = length;
}

// SHAPE
function Shape(x, y) {
    this.x = x;
    this.y = y;
}

// func ADD TO PLANE
Shape.prototype.addToPlane = function(x, y) {
    var pos = new Point(x, y);
    this.position = pos;
}

// func MOVE
Shape.prototype.move = function(x, y) {
    var pos = new Point(x, y);
    this.position = pos;
}

// CIRCLE
function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// func CIRCUMFERENCE
Circle.prototype.circumference = function() {
    return 2 * Math.PI * this.radius
}

// func AREA
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius
}

// func DIAMETER
Circle.prototype.diameter = function() {
    return 2 * this.radius;
}

// POLYGON
function Polygon(sides) {
    Shape.call(this);
    this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

// func PERIMETER
Polygon.prototype.perimeter = function() {
    var perim = 0;
    for(var index in this.sides) {
      perim += this.sides[index].length;
    }
    return perim;
}

// func NUMBEROFSIDES
Polygon.prototype.numberOfSides = function() {
    return this.sides.length;
}

// QUADRILATERAL
function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
    Polygon.call(this)
    var sideArr = [];
    sideArr.push(new Side(sideOne));
    sideArr.push(new Side(sideTwo));
    sideArr.push(new Side(sideThree));
    sideArr.push(new Side(sideFour));
    this.sides = sideArr;
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

// RECTANGLE
function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

// func AREA
Rectangle.prototype.area = function() {
    return this.width * this.height
}

// SQUARE
function Square(length) {
    Rectangle.call(this, length, length);
    this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// func LISTPROPERTIES
Square.prototype.listProperties = function() {
    var propStr = "";
    for(var prop in this) {
      if(this.hasOwnProperty(prop)) {
          propStr += prop
      }
    }
    return propStr;
}

// TRIANGLE
function Triangle(sideOne, sideTwo, sideThree) {
    Polygon.call(this);
    var sideArr = [];
    sideArr.push(new Side(sideOne));
    sideArr.push(new Side(sideTwo));
    sideArr.push(new Side(sideThree));
    this.sides = sideArr;
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
