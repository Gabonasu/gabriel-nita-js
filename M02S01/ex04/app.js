class Car {
  constructor(
    left = 100,
    top = 100,
    color,
    topColor,
    wheelColor,
    capColor,
    interval
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.topColor = topColor ? topColor : color;
    this.wheelColor = wheelColor ? wheelColor : color;
    this.capColor = capColor ? capColor : color;
    this.interval = interval;
  }

  areLightsOn = false;
  areBreaksOn = false;
  areHazardsOn = false;

  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightBack = document.createElement('div');
  lightFront = document.createElement('div');
  wheelBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelCapBack = document.createElement('div');
  wheelCapFront = document.createElement('div');

  turnLightsOn () {
    this.areLightsOn = true;

    this.lightFront.classList.add('light--on');
  }

  turnLightsOff () {
    this.areLightsOn = false;

    this.lightFront.classList.remove('light--on');
  }

  // Creeaza metode numite engageBreak() si disenagageBreak() care vor aprinde respectiv stinge farul din spate. 
  engageBreak () {
    this.areBreaksOn = true;

    this.lightBack.classList.add('light--on');
  }

  disengageBreak () {
    this.areBreaksOn = false;

    this.lightBack.classList.remove('light--on');
  }

  // Creeaza o metoda numita toggleHazards() care sa functioneze ca avarie si sa aprinda si sa stinga farurile repetat. 
  // Foloseste o proprietate numita areHazardsOn pentru a putea tine cont de statusul sistemului.

  toggleHazards () {
    this.areHazardsOn = !this.areHazardsOn;

    if (this.areHazardsOn === true ) {
      this.lightBack.classList.add('light--hz');
      this.lightFront.classList.add('light--hz');
    } else {
      this.lightBack.classList.remove('light--hz');
      this.lightFront.classList.remove('light--hz');
    }

    if (this.interval === null) {
      this.interval = setInterval (() => {
        this.toggleHazards();
      }, 1000);
    } else {
      clearInterval (this.interval);
    }

    return this.areHazardsOn;
  }

  moveFrame (left, top) {
    if (!left || !top) {
      return;
    }

    this.left = left;
    this.top = top;

    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;
  }

  setColor (color) {
    if (!color) {
      return;
    }

    this.color = color;

    this.car.style.backgroundColor = this.color;
  }

  setTopColor (color) {
    if (!color) {
      return;
    }

    this.topColor = color;

    this.carTop.style.backgroundColor = this.topColor;
  }

  // Folosind fisierele rezultate din exercitiul 04.
  // Creeaza configurare pentru culoarea rotilor si a capacelor de roti si metode pentru schimbarea lor dinamica.

  setWheelColor (color) {
    if (!color) {
      return;
    }

    this.wheelColor = color;

    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;
  }

  setCapColor (color) {
    if (!color) {
      return;
    }

    this.capColor = color;

    this.wheelCapBack.style.backgroundColor = this.capColor;
    this.wheelCapFront.style.backgroundColor = this.capColor;
  }

  render () {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    // create car div
    this.car.classList.add('car', 'frame__car');
    this.car.style.backgroundColor = this.color;
    this.frame.appendChild(this.car);

    // create car top
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.topColor;
    this.car.appendChild(this.carTop);

    // create car body
    this.carBody.classList.add('car__body');
    this.car.appendChild(this.carBody);

    // create lights
    this.lightBack.classList.add('light', 'light--back');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.appendChild(this.lightBack);
    this.carBody.appendChild(this.lightFront);

    // create wheels
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.carBody.appendChild(this.wheelBack);
    this.carBody.appendChild(this.wheelFront);

    // create hubcaps
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelCapBack.style.backgroundColor = this.capColor;
    this.wheelCapFront.style.backgroundColor = this.capColor;
    this.wheelBack.appendChild(this.wheelCapBack);
    this.wheelFront.appendChild(this.wheelCapFront);

    document.body.appendChild(this.frame);
  }
}

let car = new Car(10, 20, 'lightblue', 'lightgreen', 'lightpink', 'lightseagreen');
car.render();


