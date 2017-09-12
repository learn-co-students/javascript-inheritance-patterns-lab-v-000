function Point(x,y){
    this.x = x;
    this.y = y;
};

Point.prototype.toString = function(x,y){
    return `(${this.x}, ${this.y})`;
};

function Shape(){};

Shape.prototype.addToPlane = function(x,y){
    this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y){
    this.position = new Point(x,y);
};

function Circle(radius){
    Shape.call(this);
    this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function(){
    return(2*this.radius);
}

Circle.prototype.circumference = function(){
    return(this.diameter()* Math.PI);
}

Circle.prototype.area=function(){
    return(this.radius * this.radius * Math.PI);
}

function Polygon(arr){
    Shape.call(this);
    this.sides = arr;
};

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

function Side(l){
    this.length = l;
};

Polygon.prototype.numberOfSides = function(){
    return this.sides.length;
};

Polygon.prototype.perimeter = function(){
    let p = 0;
    let numSides = this.numberOfSides();
    for(var i=0; i<numSides; i++){
        p+= this.sides[i].length;
    }
    return p;
};

function Quadrilateral(s1,s2,s3,s4){
    Polygon.call(this,[new Side(s1), new Side(s2), new Side(s3), new Side(s4)]);
};

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(s1,s2,s3){
    Polygon.call(this,[new Side(s1), new Side(s2), new Side(s3)]);
};

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(s1,s2){
    Quadrilateral.call(this, s1, s2, s1, s2);
    this.width = s1;
    this.height = s2;
};

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.width * this.height;
};

function Square(length){
    Rectangle.call(this, length, length);
    this.length = length;
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function(){
    for (var prop in this){
        console.log(`square.${prop} = ${this[prop]}`)
    };
};