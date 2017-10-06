/* 
1. Define a Point object that is constructed with an x,y coordinate pair to indicate its position. 
*/
function Point(x, y) {
  this.x = x;
  this.y = y;
}

/* 
1. Add a toString function to the Point prototype to return the location in (x, y) format.
*/
Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

/* 
1. Declare a function named
2. Function accepts parameter named, whose value is 
3. When call function, return
*/
function Side(length) {
  this.length = length;
}

/* 
1. Define a Shape object. This will be the base for all shapes on the plane. 
2. It should have an addToPlane function that takes two integers, x and y, as arguments. 
3. This function should assign a Point to the Shape's position property based on these arguments. 
4. Shape should also define a move function that takes an x,y pair of arguments and moves the position to a new Point.
*/

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y);
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

/*
Define a Circle object that inherits from Shape and is constructed with an integer argument that sets the radius property. 
Define and implement functions on Circle to calculate area() and circumference() based on the radius.
*/
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
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

/*Define a Polygon object that inherits from Shape. 
It should be constructed with an array of Side objects that have a length property. 
Polygon should have a property called sides that holds the array of Side objects. 
Implement a function called perimeter() that calculates the perimeter of any Polygon based on the lengths of the sides. 
Implement a function called numberOfSides() that returns the number of sides
*/
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}
Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

/* 
1. Define a Quadrilateral object that inherits from Polygon and is constructed with four integer arguments representing the side lengths.
*/
function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

/*Define a Triangle object that inherits from Polygon and is constructed with three integer arguments representing the side lengths.*/
function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

//Define a Rectangle object that inherits from Quadrilateral & is constructed w/ 2integer arguments that set width and height properties. 
//Implement an area() function to calculate the area.
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

/* 
1. Define a Square object that inherits from Rectangle and is constructed with a single integer argument that sets a length property. 
2. If everything is wired up right in the prototype chain, 
3. Square should have access to area(), perimeter(), numberOfSides(), addToPlane(), position, move(), width, height and so on.
*/
function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

/*Define and implement a function listProperties() that returns a string containing only the properties that belong to Square. 
It should not list the constructor, area, perimeter, and other things inherited from the prototype chain.
*/
Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}
