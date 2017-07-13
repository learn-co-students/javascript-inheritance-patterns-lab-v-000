function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x}, ${this.y}`;
};

function Side(x) {
  this.length = x;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  return 2 * this.radius;
};
Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
};
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
};

function Polygon(arrOfSides) {
  Shape.call(this);
  this.sides = arrOfSides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Circle;
Polygon.prototype.perimeter = function() {
  return this.sides.map(side => {
    return side.length;
  }).reduce((sum, value) => {
    return sum + value;  
  }, 0);
};
Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};

function Triangle(a,b,c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Quadrilateral(a,b,c,d) {
  Polygon.call(this);
  this.sides = Array.from(arguments).map(a => new Side(a));
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(w, h) {
  Quadrilateral.call(this, w, h, w, h);
  this.width = w;
  this.height = h;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
    return this.width * this.height;
};

function Square(l) {
  Rectangle.call(this, l, l);
  this.length = l;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
    let result = '';
    for (var name in this) {
      if (this.hasOwnProperty(name)) {
        result += 'this.' + name + ' = ' + this[name] + '\n';
      }
    }
    return result;
  };
