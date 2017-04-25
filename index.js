// Point 

function Point(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.toString = function() { 
    return `${this.x}, ${this.y}` 
}

//---------------------------------------
// Shape 

function Shape() {
    //function that defines the basis for Shape prototype 
} 

Shape.prototype.addToPlane = function(x, y) { //adds function to Shape prototype
      this.position = new Point(x,y) //assigns new point to shape object
}

Shape.prototype.move = function(x,y) { //adds function to Shape prototype
      this.position = new Point(x,y) //moves position to new point
}

//----------------------------------------
// Circle

function Circle(radius) { //circle object defined with radius/integer 
      Shape.call(this) //calls Circle function on Shape
      this.radius = radius //sets object radius to radius parameter
}

Circle.prototype = Object.create(Shape.prototype) //creates a new Circle prototype based on Shape prototype

Circle.prototype.constructor = Circle //the constructor has to be set, else Circle.prototype.constructor would be set to Shape

Circle.prototype.area = function() { //sets Circle prototype attribute area to appropriate equation 
  return(Math.PI * this.radius^2)
}

Circle.prototype.circumference = function() { //sets Circle prototype attribute circumference to appropriate equation 
  return(2 * Math.PI * this.radius)
}

Circle.prototype.diameter = function() { //sets Circle prototype attribute diameter to appropriate equation 
  return(this.radius*2)
}

//----------------------------------------
// Side 

function Side(length) { //sets the side length
  this.length = length
}

//----------------------------------------
// Polygon

function Polygon(sides) { //defines Polygon object
  Shape.call(this) 
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype) //Polygon prototype inherits from Shape prototype

Polygon.prototype.constructor = Polygon //the constructor has to be set, else Polygon.prototype.constructor would be set to Shape

Polygon.prototype.perimeter = function() { //perimeter function for Polygon
  var perimeter = 0 // sets var perimeter to 0 
  for (let i = 0; i < this.sides.length; i++) { //starts for loop
    perimeter = perimeter + this.sides[i].length //sets var perimeter to new value based on sum of current value and length of side
  }
  return(perimeter) //returns var perimeter after for loop is exhausted
}

Polygon.prototype.numberOfSides = function() { //adds number of sides functionality to Polygon prototype
  return(this.sides.length)
}

//----------------------------------------
// Triangle

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) { //defines Triangle object
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])//
}

Triangle.prototype = Object.create(Polygon.prototype) // see above

Triangle.prototype.constructor = Triangle // see above

//----------------------------------------
// Quadrilateral

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) { // quad. object defined 
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]) //utilizes Polygon functionality
}

Quadrilateral.prototype = Object.create(Polygon.prototype) // see above for similar example
 
Quadrilateral.prototype.constructor = Quadrilateral // see above for similar example

//----------------------------------------
// Rectangle

function Rectangle(width, height) { 
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype) // see above

Rectangle.prototype.constructor = Rectangle // see above

Rectangle.prototype.area = function() {
  return this.width * this.height
}

//----------------------------------------
// Square

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length 
}

Square.prototype = Object.create(Rectangle.prototype) // see above

Square.prototype.constructor = Square // see above

Square.prototype.listProperties = function() { //function to list properties of Sqaure
  var properties = "" //sets properties var to empty
  for (var property in this) { //loops over properties in this object
    if(this.hasOwnProperty(property)) { //if the property is found in this object
      properties += this[property] //adds string to properties var
    }
  }
  return(properties)
}