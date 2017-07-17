// Simple Constructors
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return this.x + ", " + this.y;
};

function Side(length) {
    this.length = length;
}

//----**** New Object ****---- //

// Shape constructor
function Shape() {}

// Shape Behaviors
Shape.prototype.addToPlane = function(x, y) {
    this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
    this.addToPlane(x, y);
};

//----**** New Object ****---- //

// Circle Constructor
function Circle(radius) {
    Shape.call(this);
    
    // Properties
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

//Circle Behaviors
Circle.prototype.diameter = function() {
    return(this.radius * 2);
};

Circle.prototype.area = function() {
    return(Math.PI * this.radius^2);
};

Circle.prototype.circumference = function() {
    return(2 * Math.PI * this.radius);
};


//----**** New Object ****---- //

// Polygon Constructor
function Polygon(sides) {
    Shape.call(this);
    
    // properties
    this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.constructor = Polygon;

// Polygon Behaviors
Polygon.prototype.perimeter = function() {
  var perimeter = 0;
  for(var i = 0 ; i< this.sides.length ; i++) {
    perimeter += this.sides[i].length;
  }
  return(perimeter);
};

Polygon.prototype.numberOfSides = function () {
    return(this.sides.length);
};

//----**** New Object ****---- //

// Quadrilateral Constructor
function Quadrilateral(s1, s2, s3, s4) {
    Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]);
    
    // properties
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    this.s4 = s4;
}

Quadrilateral.prototype = Object.create(Polygon.prototype);

Quadrilateral.prototype.constructor = Quadrilateral;

//----**** New Object ****---- //

// Triangle Constructor
function Triangle(s1, s2, s3) {
    Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)]);
    
    // properties
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
}

Triangle.prototype = Object.create(Polygon.prototype);

Triangle.prototype.constructor = Triangle;

//----**** New Object ****---- //

// Rectangle Constructor
function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height);
    
    // properties
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.constructor = Rectangle;

// Rectangle Behaviors
Rectangle.prototype.area = function() {
    return(this.width * this.height);
};

//----**** New Object ****---- //

// Square Constructor
function Square(length) {
    Rectangle.call(this, length, length);
    
    // properties
    this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.constructor = Square;

// Square Behaviors
Square.prototype.listProperties = function() {
    for (var prop in this){
        if(this.hasOwnProperty(prop)){
            return("square." + prop + " = " + this[prop]);
        }
    }
};