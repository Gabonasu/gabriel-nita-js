class Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    this.posX = posX; 
    this.posY = posY; 
    this.height = height; 
    this.width = width; 
    this.color = color; 
    this.borderColor = borderColor;
  }

  shape = document.createElement('div');
  shapeRectangle = document.createElement('div');
  shapeCircle = document.createElement('div');
  shapeSquare = document.createElement('div');
  
  setPosX(x) {
    this.posX = x;
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c; 
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }

  render () {
    this.shape.classList.add('shape');

    this.shapeRectangle.classList.add('shape', 'shape--rectangle');
    this.shapeRectangle.style.backgroundColor = this.color;
    this.shape.appendChild(this.shapeRectangle);

    this.shapeCircle.classList.add('shape', 'shape--circle');
    this.shapeCircle.style.backgroundColor = this.color;
    this.shape.appendChild(this.shapeCircle);

    this.shapeSquare.classList.add('shape', 'shape--square');
    this.shapeSquare.style.backgroundColor = this.color;
    this.shape.appendChild(this.shapeSquare);

    document.body.appendChild(this.shape);
  }
}

class Rectangle extends Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    super(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
    );
  }
}

class Circle extends Shape {
  constructor(
    posX,
    posY, 
    radius, 
    color, 
    borderColor
  ) {
    super(
      posX,
      posY, 
      radius, 
      radius, 
      color, 
      borderColor
    );

    this.borderRadius = this.setBorderRadius(radius);
  }

  setBorderRadius(br) {

    return br;
  }
}

class Square extends Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    super(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
    );
  }
}

let rectangle = new Rectangle(150, 150, 150, 50, 'lightblue', 'blue');
rectangle.render();

let square = new Square(150, 150, 150, 150, 'red', 'blue');
square.render();
