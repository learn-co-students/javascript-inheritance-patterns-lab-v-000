function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return `(${this.x}, ${this.y})`
}

function Side(length) {
	this.length = length;
}

function Shape() {
	this.position = null;
}

Object.assign(Shape.prototype, {
	addToPlane: function(x, y) {
		this.position = new Point(x, y);
	},
	move: function(x, y) {
		this.position.x = x;
		this.position.y = y;
	}
})

function Circle(radius) {
	Shape.call(this);
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Object.assign(Circle.prototype, {
	area: function() {
		return Math.PI * this.radius^2;
	},
	circumference: function() {
		return 2 * Math.PI * this.radius
	},
	diameter: function() {
		return 2 * this.radius;
	}
});

function Polygon(sides) {
	Shape.call(this)
	this.sides = sides;
};

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Object.assign(Polygon.prototype, {
	numberOfSides: function() {
		return this.sides.length;
	},
	perimeter: function() {
		var perimeter = 0;
		for (var i = 0, n = this.sides.length; i < n; i++) {
			perimeter += this.sides[i].length;
		}
	return perimeter;
	}
})

function Quadrilateral(side1, side2, side3, side4) {
    var sides = []
    for (var i = 0, n = arguments.length; i < n; i++) {
    	sides.push(new Side(arguments[i]))
    }
	Polygon.call(this, sides);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
	Quadrilateral.call(this, width, width, height, height);
	this.width = width;
	this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
	return this.width * this.height;
}

function Square(length) {
	Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
	var string = "";
	for (var key in this) {
		if (this.hasOwnProperty(key)) {
			string += key
		}
	}
	return string;
}

function Triangle(sides) {
	var sides = []
    for (var i = 0, n = arguments.length; i < n; i++) {
    	sides.push(new Side(arguments[i]))
    }
	Polygon.call(this, sides);	
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle;

