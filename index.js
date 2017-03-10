function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function() {
    return "(" + this.x + ", " + this.y+ ")";
}

function Side(length) {
    this.length = length;
}

//Shape object that all others inherit from
function Shape() {
}
Shape.prototype.addToPlane = function(x,y) {
    this.position = new Point(x,y);
}
Shape.prototype.move = function(x,y) {
    this.position.x = x;
    this.position.y = y;
}


//Begin Circle object, inherits from Shape
function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor =  Circle;
Circle.prototype.area = function() {
    return (Math.PI * this.radius^2);
}
Circle.prototype.circumference = function() {
    return (2 * Math.PI * this.radius);
}
Circle.prototype.diameter = function() {
    return (this.radius * 2);
}

//Begin Polygon object, inherits from Shape
function Polygon(sides) {
    Shape.call(this);
    this.sides = sides;
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
    var perimeter = 0;
    for(var side in this.sides) {
        perimeter += this.sides[side].length;
    }
    return perimeter;
}
Polygon.prototype.numberOfSides = function() {
    return this.sides.length;
}

//Begin Quadrilateral object, inherits from Polygon
function Quadrilateral(side1, side2, side3, side4) {
    Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


//Begin Rectangle object, inherits from Quadrilateral
function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height)
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
    return (this.width * this.height);
}

//Begin Square object, inherits from Rectangle
function Square(length) {
    Rectangle.call(this, length, length);
    this.length = length;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
    for(var prop in this) {
        if(this.hasOwnProperty(prop)) {
            console.log("square." + prop + " = " + this[prop]);
        }
    }
}

//Begin Triangle object, inherits from Polygon
function Triangle(side1, side2, side3) {
    Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;