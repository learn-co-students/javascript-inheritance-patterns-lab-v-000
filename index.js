///////////////////////////// Point ////////////////////////////////////////////////////

const Point = function(x,y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  return "(" + this.x + "," + this.y + ")";
};

///////////////////////////// Side ////////////////////////////////////////////////////

const Side = function(length) {
  this.length = length
}

///////////////////////////// Shape ////////////////////////////////////////////////////

const Shape = function() {}
Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}

///////////////////////////// Circle ////////////////////////////////////////////////////

const Circle = function(radius) {
  Shape.call(this)
  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function() {
  return this.radius * 2;
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}
Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

///////////////////////////// Polygon ////////////////////////////////////////////////////

const Polygon = function(sides) {
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Circle
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}
Polygon.prototype.perimeter = function() {
  return this.sides
    .map(function(side){
      return side.length
    })
    .reduce(function(a,b){
      return a + b;
    })
}

///////////////////////////// Quadrilateral ////////////////////////////////////////////////////

const Quadrilateral = function(sideOne, sideTwo, sideThree, sideFour) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

///////////////////////////// Rectangle ////////////////////////////////////////////////////

const Rectangle = function(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

////////////////////////////// Square ////////////////////////////////////////////////////

const Square = function(l) {
  Rectangle.call(this, l, l)
  this.length = l
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
  let propList = ""
  for(var p in this) {
    if(this.hasOwnProperty(p)) {
      propList += "this." + p + " = " + this[p] - "\n"
    }
  }
  return propList
}

///////////////////////////// Triangle ////////////////////////////////////////////////////

const Triangle = function(sideOne, sideTwo, sideThree) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree)])
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Trinagle
