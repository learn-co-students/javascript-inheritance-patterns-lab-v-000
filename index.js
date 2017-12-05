const PI = Math.PI
//point class
function Point(x,y) {
    this.x = x
    this.y = y
}

Point.prototype.toString = function (){
    return `(${this.x}, ${this.y})`
}

//shape super class
function Shape(position){
    this.position = position
}

Shape.prototype.addToPlane = function (x,y){
    let position = new Point(x,y)
    this.position = position
    return position
}

//learned not to use arrow functions, since they have the scope of wherever they were created.
// in this case, that would be global. Whoops.
Shape.prototype.move = function (x, y){
    this.addToPlane(x, y)
    return this.position
}

//circle stuff

function Circle(radius){
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function (){
    return this.radius * 2
}
Circle.prototype.area = function (){
    return this.radius * this.radius * PI
}
Circle.prototype.circumference = function (){
    return (this.radius * 2) * PI
}

//sides

function Side(length) {
    this.length = length
}

//polygon

function Polygon(sides){
    this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.numberOfSides = function(){
    return this.sides.length
}
Polygon.prototype.perimeter = function(){
    return this.sides.reduce(function(total, side){
        return total + side.length
    }, 0)
}



//Quadrilateral

function Quadrilateral(sideA, sideB, sideC, sideD){
    sideA = new Side(sideA)
    sideB = new Side(sideB)
    sideC = new Side(sideC)
    sideD = new Side(sideD)
    this.sides = []
    this.sides.push(sideA, sideB, sideC, sideD)
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

//Rectangle

function Rectangle(width, height){
    this.width = width
    this.height = height
    let sideA = new Side(width)
    let sideB = new Side(height)
    let rectSides = []
    rectSides.push(sideA, sideA, sideB, sideB)
    this.sides = rectSides
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function(){
    return this.width * this.height
}

//Square

function Square(length){
    this.length = length
    this.width = this.length
    this.height = this.length
    side = new Side(length)
    let sides = []
    sides.push(side, side, side, side)
    this.sides = sides
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function () {
    let myProperties = []
    for (const prop in this) {
        if(this.hasOwnProperty(prop)){
            myProperties.push(prop)
        }
    }
    return myProperties.join(', ')
}

//Triangle

function Triangle(sideA, sideB, sideC){
    sideA = new Side(sideA)
    sideB = new Side(sideB)
    sideC = new Side(sideC)
    this.sides = []
    this.sides.push(sideA, sideB, sideC)
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle