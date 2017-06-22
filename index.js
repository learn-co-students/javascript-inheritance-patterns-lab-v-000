function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function()  {
  return("(" + this.x + "," + this.y +")");
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = Shape.prototype.addToPlane


function Circle(radius) {
  Shape.call(this)
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function(x){
  return (this.radius^2 * Math.PI)
}

Circle.prototype.circumference = function(x){
  return (Math.PI * (this.radius*2))
}


function Polygon() {

}
