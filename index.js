function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.prototype.constructor = Point
Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`
}


function Side(length){
  this.length = length
}
Side.prototype.constructor = Side




function Shape(){
}

Shape.prototype.constructor = Shape
Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y){
  this.position = new Point(x,y)
}



function Circle(radius){
  Shape.call(this)
  this.radius = radius
  this.diameter = function () {
    return radius * 2
  }
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius
}
Circle.prototype.area = function (){
  return Math.PI * this.radius ** 2
}


function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}
Polygon.prototype.perimeter = function(){
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}



function Quadrilateral(a,b,c,d){
  Polygon.call(this,[new Side(a), new Side(b), new Side(c), new Side(d)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral



function Rectangle(width,height){
  Quadrilateral.call(this,width,height,width,height)
  this.width = width
  this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function(){
  return this.width * this.height
}


function Square(side){
  Rectangle.call(this,side,side,side,side)
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = () => {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}

function Triangle(a,b,c){
  Polygon.call(this,[new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
