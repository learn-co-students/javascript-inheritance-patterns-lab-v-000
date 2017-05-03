function Point(x,y) {
    this.x = x;
    this.y = y;    
}

Point.prototype.toString = function(){
    return `(${this.x}, ${this.y})`
}

function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
    this.position = new Point(x,y);
    return this.position.toString;
}
Shape.prototype.move = function(x,y) {
    this.position.x = x;
    this.position.y = y;
}

function Circle(r) {
    Shape.call(this);
    this.radius = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
    return this.radius * 2;
}
Circle.prototype.area = function() {
    return Math.PI * this.radius^2; 
}
Circle.prototype.circumference = function() {
return 2 * Math.PI * this.radius;
}

function Side(l) {
    this.length = l;
}

function Polygon(sides) {
    this.sides = sides;
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
    let p = this.sides.reduce(function(acc,side){
        return acc+side.length;
    },0)
    return p;
}
Polygon.prototype.numberOfSides = function() {
    return this.sides.length;
}


function Quadrilateral(a,b,c,d) {
    let sides_array = [a,b,c,d].map(function(value,index){
        return new Side(value);
    })
    Polygon.call(this,sides_array);    
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(a,b,c) {
    let sides_array = [a,b,c].map(function(value,index){
        return new Side(value);
    })
    Polygon.call(this,sides_array);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width,height) {
    Quadrilateral.call(this,width,height,width,height);
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(){
    return this.width * this.height;
}

function Square(length) {
    Quadrilateral.call(this,length,length,length,length)
    this.length = length;
    this.width = length;
    this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
    let props = Object.getOwnPropertyNames(this).toString();
}










