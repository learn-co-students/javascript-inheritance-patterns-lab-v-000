function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function () {
    return `(${this.x}, ${this.y})`
  }
}

function Shape() {

}

Shape.prototype.addToPlane = function (x, y) {
    this.position = new Point(x, y);
}

Shape.prototype.move = function (x, y) {
  this.position.x = x;
  this.position.y = y;
}

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function () {
  return (this.radius * 2)
}
Circle.prototype.area = function () {
  return (Math.PI * this.radius^2)
}
Circle.prototype.circumference = function () {
  return (2 * Math.PI * this.radius)
}

function Side(length) {
  this.length = length;
}

function Polygon(sidesArray) {
  this.sides = sidesArray;
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.perimeter = function () {
  var p = 0;
  this.sides.forEach(function (sideObj) {
    p += sideObj.length;
  })
  return p
};
Polygon.prototype.numberOfSides = function () {
  return this.sides.length
};
Polygon.prototype.constructor = Polygon;

function Quadrilateral(a, b, c, d) {
  var sides = [new Side(a), new Side(b), new Side(c), new Side(d)];
  Polygon.call(this, sides);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);

function Triangle(a, b, c) {
  var sides = [new Side(a), new Side(b), new Side(c)];
  Polygon.call(this, sides);
}
Triangle.prototype = Object.create(Polygon.prototype);

function Rectangle(w, h) {
  this.width = w;
  this.height = h;
  Quadrilateral.call(this, w, w, h, h);
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.area = function () {
  return this.width * this.height
};

function Square(l) {
  this.length = l;
  Rectangle.call(this, l, l)
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.listProperties = function () {

};
