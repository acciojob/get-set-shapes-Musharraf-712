class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // must call super() before using "this"
    super(side, side);
  }

  getPerimeter() {
    return this._width * 4;
  }
}

// Example usage (for manual check)
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // 5
console.log(rectangle.height); // 10
console.log(rectangle.getArea()); // 50

const square = new Square(7);
console.log(square.width); // 7
console.log(square.height); // 7
console.log(square.getArea()); // 49
console.log(square.getPerimeter()); // 28

// Do not change this part
window.Rectangle = Rectangle;
window.Square = Square;
