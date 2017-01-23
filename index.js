function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.position = function() {
  return(this.x + ", " + this.y);
}

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

Shape.prototype.addToPlane(x,y){
   Point.call(this, x, y);
}
