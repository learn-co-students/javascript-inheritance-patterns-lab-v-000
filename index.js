//an OO lab, beatifully showcasing JavaScript's truly horrific syntax and object implementation.
  function Point(x,y) {
    this.x = x
    this.y = y
    // this.toString = (x,y) => {
    //   return(this.x + ", " + this.y)
    // }
  }
  Point.prototype.toString = function() {    //seems a bit funny to be overwriting JavaScript's .toString function for this obj
    return(this.x + ", " + this.y)
  }

  function Shape() {     //this.position declaration unnecessary but clearer
    this.position = null
  }

  Shape.prototype.addToPlane = function(x,y) { //should assign a Point to the Shape's position property based on (x,y)
    return this.position = new Point(x,y)
  }

  Shape.prototype.move = function(x,y) { //takes an x,y pair of arguments and moves the position to a new Point.
    return this.position = [x,y]
  }

  function Circle(radius) { //inherits from Shape and is constructed with an integer argument that sets the radius property.
    Shape.call(this)
    this.radius = radius
  }

  //Circle inherit from Shape prototype
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;

  Circle.prototype.area = function() {
    return (this.radius^2 * 3.141592653589793) //because fuck Math.PI
  }

  Circle.prototype.diameter = function() {
    return (this.radius * 2)
  }

  Circle.prototype.circumference = function() {
    return (2 * this.radius * 3.141592653589793)
  }

  function Side(length){
    this.length = length
  }

  function Polygon(sides) {
    Shape.call(this)
    this.sides = sides
  }

  //Polygon inherit from Shape prototype
  Polygon.prototype = Object.create(Shape.prototype);
  Polygon.prototype.constructor = Polygon;

  //perimeter function
  Polygon.prototype.perimeter = function() {
  return this.sides.reduce((total, javascriptSucks) => total + javascriptSucks.length, 0); //circumvents having to set it to a variable and then return it
  };

  Polygon.prototype.numberOfSides = function() {
    return this.sides.length;
  }

  //Polygon inherit from Shape prototype
  Quadrilateral.prototype = Object.create(Polygon.prototype);
  Quadrilateral.prototype.constructor = Quadrilateral;

  //Define a Quadrilateral object that inherits from Polygon and is constructed with four integer arguments representing the side lengths.
  function Quadrilateral(side1, side2, side3, side4) {

    this.side1 = new Side(side1)
    this.side2 = new Side(side2)
    this.side3 = new Side(side3)
    this.side4 = new Side(side4)

    Polygon.call(this, [this.side1, this.side2, this.side3, this.side4])
  }

  //Define a Triangle object that inherits from Polygon and is constructed with three integer arguments representing the side lengths.
  function Triangle(side1, side2, side3) {
    this.side1 = new Side(side1)
    this.side2 = new Side(side2)
    this.side3 = new Side(side3)

    Polygon.call(this, [this.side1, this.side2, this.side3])
  }

  Triangle.prototype = Object.create(Polygon.prototype)
  Triangle.prototype.constructor = Triangle;

  // Define a Rectangle object that inherits from Quadrilateral and is constructed with two integer arguments that set width and height properties.
  function Rectangle(width, height) {
    this.width = width
    this.height = height

    Quadrilateral.call(this, width, height, width, height)
  }

  Rectangle.prototype = Object.create(Quadrilateral.prototype)
  Rectangle.prototype.constructor = Rectangle;

  Rectangle.prototype.area = function() { //order matters.. must be declared after above .prototype functions.
    return (this.width * this.height)
  }

  function Square(side) { //Square object inherits from Rectangle and is constructed with a single integer argument that sets a length property.
    this.length = side
    Rectangle.call(this, side, side, side, side)
  }

  Square.prototype = Object.create(Rectangle.prototype)
  Square.prototype.constructor = Square;

  Square.prototype.listProperties = function(){
    for (var property in this) {
    if(this.hasOwnProperty(property)) {
      console.log("rect." + property + " = " + this[property]);
    }
  }
}

//implement a function for Square called listProperties() that returns a string containing only the properties that belong to Square. It should not list things inherited from the prototype chain.
