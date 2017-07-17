function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + ", " + this.y + " )");
}

function Side(length) {
  this.length = length;
}

function Shape() {}

  Shape.prototype.addToPlane = function(x,y) {
      this.position = new Point(x,y);
  }

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle (radius) {
  // call Shape constructor
  Shape.call(this);
  this.radius = radius;

}

//inherit from Shape prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

function Polygon (sides) {
  // call Shape constructor
  Shape.call(this);
  this.sides = sides;
  }

//inherit from Shape prototype
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

//extend Polygon
Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

Polygon.prototype.perimeter = function() {
  var p = 0;
  for (var i= 0; i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p)

}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  //call Polygon constructor
  Polygon.call(this, [new Side (sideOneLength), new Side (sideTwoLength), new Side (sideThreeLength), new Side (sideFourLength)]);

}
// set Quadrilateral prototype to an instance of a Shape
Quadrilateral.prototype = Object.create(Polygon.prototype);
// set Quadrilateral constructor
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  //call Polygon constructor
  Polygon.call(this, [new Side (sideOneLength), new Side (sideTwoLength), new Side (sideThreeLength)]);

}
// set Triangle prototype to an instance of a Shape
Triangle.prototype = Object.create(Polygon.prototype);
// set Triangle constructor
Triangle.prototype.constructor = Triangle

function Rectangle( width, height) {
  //call Quadrilateral constructor
  Quadrilateral.call(this, width, height, width, height);
  //set rectangle values
  this.width = width;
  this.height = height;
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Quadrilateral.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(length) {
  //call Rectangle constructor
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}
