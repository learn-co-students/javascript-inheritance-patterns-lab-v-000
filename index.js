function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return(this.x + ', ' + this.y);
}

function Side(length) {
    this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
    this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
    this.position = new Point(x, y);
}

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
    this.diameter = () => {
        return radius * 2;
    }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * this.radius^2;
}

Circle.prototype.circumference = function() {
    return Math.PI * (this.radius * 2);
}

function Polygon(sides) {
    Shape.call(this);
    this.sides = sides;
    this.numberOfSides = () => {
        return sides.length;
    }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
    var perim = 0;

    for(var i = 0; i < this.sides.length; i++) {
        perim += this.sides[i].length;
    }
    return perim;
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
    Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
    Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
    Quadrilateral.call(this, width, width, height, height);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

function Square(length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function () {
    for (var prop in Square) {
        if (Square.hasOwnProperty(prop)) {
            console.log('square.' + prop + ' = ' + Square[prop]);
        }
    }
}