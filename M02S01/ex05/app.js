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

render () {
  this.shape.classList.add('shape');
  document.body.appendChild(this.shape);
}

let rectangle = new Rectangle(105, 150, 50, 50, 'lightblue', 'blue');
