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

//polygon

function Polygon(){

}