JavaScript Inheritance Patterns Lab
---

## Objectives

1. Practice writing JavaScript objects that inherit from other objects
2. Practice using `Object.create()`
3. Practice use `hasOwnProperty()`
4. Explain what a prototype is in JavaScript

## Introduction

- Remind (or call out) that a prototype is essentially just an object
- Objects have properties, and we can pass properties to related objects on the prototype
- Objects look for properties by climbing up the prototype chain

## Implementation

- Start simple by just checking that, e.g., `Rectangle.prototype` is `Shape` (riffing on the [MDN example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

- Then work on passing initialization variables:

``` javascript
function Shape(x, y) {
  this.x = x
  this.y = y
}

function Quadrilateral(
  x,
  y,
  topSideLength,
  rightSideLength,
  bottomSideLength,
  leftSideLength
) {
  Shape.call(this, x, y)
  this.topSideLength = topSideLength
  this.rightSideLength = rightSideLength
  this.bottomSideLength = bottomSideLength
  this.leftSideLength = leftSideLength
}

Quadrilateral.prototype = Object.create(Shape.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(x, y, length, width) {
  Quadrilateral.call(this, x, y, length, width, length, width)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

function Square(x, y, length) {
  Rectangle.call(this, x, y, length, length, length, length)
}
```

- The aim is almost to show students how onerous this can be before introducing the new `class` syntax in a later lesson

- Be sure to test that student's use `hasOwnProperty()` when iterating through a collection on an object.

## Resources

- [MDN: Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN: hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
