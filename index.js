function Point (x,y) {
  this.x = x
  this.y = y
} 
Point.prototype.constructor = Point
Point.prototype.toString = function() {
  return "("+this.x+","+this.y+")"
}

function Shape (){
  this.position = []
}
Shape.prototype.constructor = Shape
  Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
} 
Shape.prototype.move = function(x,y) {
  this.position.x = x
  this.position.y = y
} 

function Circle (x) {
  Shape.call(this);
  this.radius = x
}  
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area = function () {
  return Math.PI * (this.radius * this.radius)
}
Circle.prototype.circumference = function () {
  return Math.PI * (this.radius + this.radius)
}
Circle.prototype.diameter = function () {
  return 2 * this.radius
}

function Side (x) {
  this.length = x
}
Side.prototype.constructor = Side

function Polygon (sides) {
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function () {
  var result = this.sides.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.length;
    },0);
  return result
}
Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}


function Quadrilateral (w,x,y,z) {
  Polygon.call(this,[new Side(w),new Side(x), new Side(y), new Side(z)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral


function Rectangle (x,y) {
 Polygon.call(this,[new Side(x),new Side(x), new Side(y), new Side(y)]) 
 this.width = x
 this.height = y
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square(x){
  Rectangle.call(this,x,x)
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function (){
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log("square." + prop + " = " + this[prop]);
    }
  }
}

function Triangle (x,y,z) {
  Polygon.call(this,[new Side(x),new Side(y),new Side(z)])
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle