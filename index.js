function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.to_string = function () [
  return("(" + this.x + "," + this.y + ")");
}
