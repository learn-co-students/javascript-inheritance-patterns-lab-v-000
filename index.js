function Point(x,y) {
  this.x = x;
  this.y = y;

  this.toString = function() {
    return (this.x + ", " + this.y)
  }
}

function Shape() {}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x,y)
};
