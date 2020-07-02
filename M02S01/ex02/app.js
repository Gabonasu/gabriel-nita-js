class Vehicle {
  constructor (
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed () {
    console.log(`Viteza curenta este: ${this.speed} km/h`);
  }

  accelerate () {
    this.setSpeed(++this.speed);
  }

  decelerate () {
    this.setSpeed(--this.speed);
  }

  setSpeed (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor (
    make,
    color,
    speed,
    topSpeed,
    topReverseSpeed
  ) {
    super (
      make, 
      color, 
      4, 
      speed, 
      topSpeed, 
      topReverseSpeed
    );
  }
}

class Bicycle extends Vehicle {
  constructor (
    make,
    color,
    speed,
    topSpeed = 70,
    topReverseSpeed = -10
  ) {
    super (
      make,
      color,
      2,
      speed,
      topSpeed,
      topReverseSpeed
    );
  }
    decelerate () {
      if (--this.speed < 0) {
        this.speed = 0;
      }

      this.displaySpeed();
    }
}

class Tricycle extends Vehicle {
  constructor (
    make,
    color,
    speed,
    topSpeed = 70,
    topReverseSpeed = -10
  ) {
    super(make, color, 3, speed, topSpeed, topReverseSpeed);
  }
}

let bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(-10);

let trike = new Tricycle('Tryke', 'red', 2, 9, -2);

// Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3, viteza maxima 140, viteza minima -50). 
// Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(), ce observi?

let audi = new Car (
  'Audi',
  'blue',
  3,
  140,
  -50
);

audi.setSpeed(140);
