function Point(x,y) {
	this.x = x; 
	this.y = y; 
}

Point.prototype.toString = function() {
	return("(" + this.x + ", " + this.y + ")")
}

function Side(length) {
	this.length = length
}

function Shape() {
  
}

Shape.prototype.addToPlane = function(x,y) {
	this.position = new Point(x,y); 


}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x,y); 
};


function Circle(radius) {
  Shape.call(this); 
  this.radius = radius;
  this.diameter = function() {
  	return this.radius * 2; 
  },
  this.area = function() {
  	return Math.PI * this.radius ** 2;
  }
  this.circumference = function() {
  	return 2 * Math.PI * this.radius;
  }
}

Circle.prototype = Object.create(Shape.prototype);

//Circle.prototype.constructor = Circle

/*Circle.prototype.area = function() {
	Math.PI * this.radius ** 2
}

Circle.prototype.circumfrence = function() {
	2 * Math.PI * this.radius
}*/



function Polygon(sides) {
  Shape.call(this); 
  this.sides = sides; 
  /*
  this.perimeter = function() {
	var perim = 0;
	for (var i = 0; i < this.sides.length; i++) {
		perim+= this.sides[i].length; 
		}
	return(perim); 
  },
  this.numberOfSides = function() {
  	return this.sides.length; 
  } */
}


Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.constructor = Polygon; 

Polygon.prototype.perimeter = function() {
	var perim = 0;
  	for (var i = 0; i < this.sides.length; i++) {
  		perim+= this.sides[i].length; 
  	}
  	return(perim); 
}


Polygon.prototype.numberOfSides = function() {
	return this.sides.length; 
}



function Quadrilateral(s1, s2, s3, s4) {
	Polygon.call(this); 
	this.sides = [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]; 
}

Quadrilateral.prototype = Object.create(Polygon.prototype); 

function Rectangle(width, height) {
	Quadrilateral.call(this, width, height, width, height); 
	this.width = width; 
	this.height = height; 
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.area = function() {
	return this.width * this.height; 
}

function Square(length) {
	Rectangle.call(this, length, length)
	this.length = length
}

Square.prototype = Object.create(Rectangle.prototype); 

Square.prototype.listProperties = function() {
	var props = ""; 
	for (var prop in this) {
		if(this.hasOwnProperty(prop)) {
			props += "this." + prop + " = " + this[prop] + "\n"; 
		}
	}
	return(props); 
}

function Triangle(s1,s2,s3) {
	Polygon.call(this); 
	this.sides = [new Side(s1), new Side(s2), new Side(s3)]; 
}

Triangle.prototype = Object.create(Polygon.prototype); 
Triangle.prototype.constructor = Triangle; 





