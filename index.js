function Point(xPos, yPos) {
  this.x = xPos;
  this.y = yPos;
}

Point.prototype.toString = function() {
 return(this.x + ", " + this.y);
}

function Shape() {

}

Shape.prototype.addToPlane = function(x, y) {
 this.position = new Point(x,y);
}

Shape.prototype.move = function(x, y) {
 this.position.x = x; 
 this.position.y = y;
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius;

  this.diameter = function() {
	  return this.radius * 2;
  }

  this.area = function() {
    return Math.PI * this.radius ** 2;
  }
   
  this.circumference = function() {
    return this.radius * Math.PI * 2;
  }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Side(length) {
 this.length = length;
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides;
  
  this.numberOfSides = function() {
	return this.sides.length;
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function () {
  var result = 0;
	for (var side in this.sides) {
          result += this.sides[side].length;
	}
	return result;
}

function Quadrilateral(side1 , side2, side3, side4) {
  Polygon.call(this)
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)];
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(side1, side2, side3) {
  Polygon.call(this)  
  this.sides = [new Side(side1), new Side(side2), new Side(side3)];
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this)
  this.width = width;
  this.height = height;
  this.sides = [new Side(width), new Side(height), new Side(width), new Side(height)];
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
	return this.width * this.height;
}

function Square(length) {
  Rectangle.call(this)
  this.width = length;
  this.height = length;
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)];
  this.listProperties = () => {
  	for (var prop in this) {
	  console.log(prop +' = '+this[prop]);
	}
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;


