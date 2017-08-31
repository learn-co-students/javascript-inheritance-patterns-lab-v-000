function Point(x,y)
{
  this.x=x;
  this.y=y;
}


//Point.prototype.toString = () =>   { return new Point(this.x,this.y); }
Point.prototype.toString = function()
{
  return new Point(this.x,this.y);
}

function Side(len)
{
  this.length=len;
}

function Shape()
{

}

Shape.prototype.addToPlane=function(x,y){
  this.position=new Point(x,y);
 }

Shape.prototype.move = function(x,y){
  this.position=new Point(x,y);
}

function Circle(radius)
{
  Shape.call(this);
  this.radius=radius;

}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() { return Math.PI*this.radius*this.radius}
Circle.prototype.circumference = function()  { return 2*Math.PI*this.radius}
Circle.prototype.diameter=function() { return this.radius*2}

function Polygon(Side)
{
  Shape.call(this);
  this.sides=Side;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var sum=0;
  for(var i=0;i<this.sides.length;i++)
  {
    if(this.sides[i] instanceof Object)
      {
       sum=sum+this.sides[i].length;
      }
  else
    sum=sum+this.sides[i];
  }
  return sum;
}

Polygon.prototype.numberOfSides = function() { return this.sides.length }

function Quadrilateral(lside,rside,uside,dside)
{
  Polygon.call(this,[lside,rside,uside,dside]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(lside,rside,bside)
{
  Polygon.call(this,[lside,rside,bside]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width,height)
{
  this.width=width;
  this.height=height;
  Quadrilateral.call(this,width,height,width,height);

}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() { return this.width*this.height}


function Square(len)
{
  Rectangle.call(this,len,len);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;


Square.prototype.listProperties= () => {
  for (var prop in Square) {
          if(Square.hasOwnProperty(prop)) {
            var s;
             s= s+Square[prop];
            return s;
          }
        }
}
