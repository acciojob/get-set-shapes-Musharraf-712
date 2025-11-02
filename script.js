//complete this code
class Rectangle {
	constructor(width, height){
	this.Widht = widht,
	this.Height = height
	}
	get Width(){
		return this.Width
	}
	get Height(){
		return this.Height
	}
	getArea(){
		return this.Width* this.Height
	}
}
const rectangle = new Rectangle(5,10)
console.log(rectangle.getArea())

class Square extends Rectangle {
	
	constructor(side)
	super(Side, Side)
	this.side = side

	getArea(){
		return this.Side*this.Side
	}
	getParimeter(){
		return this.Side*4
	}
}
const square = new Square(7)
console.log(square.getArea())
console.log(square.getParimeter())


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
