class Car {
  constructor(
    make,
    color,
    wheels,
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  displaySpeed() {}
// Am adaugat parametrul s care scade si creste viteza in functie de valoarea sa.
// Cand nu este folosit intre paranteze, va incrementa/decrementa cu 1.
  accelerate(s) {
    if (s) {
      this.speed = this.speed + s;
    } else {
      this.speed++;
    }

    this.displaySpeed();
    
    return this;
  }

  decelerate(s) {
    if (s) {
      this.speed = this.speed - s;
    } else {
      this.speed--;
    }

    this.displaySpeed();

    return this;
  }
//Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare 
//(fara limite superioare sau inferioare pentru simplitate).
  setSpeed (newSpeed) {
    this.speed = newSpeed;

    this.displaySpeed();

    return this;
  }
  
}


let audi = new Car('Audi', 'black', 4, 50);

audi.accelerate().accelerate().accelerate().accelerate().accelerate().decelerate().decelerate().decelerate();

console.log(audi.speed);

let p = document.createElement('p');

p.innerText = `Masina se deplasa cu ${audi.speed} km/h.`;

document.body.appendChild(p);

// Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. 
audi.accelerate(12).decelerate(3).decelerate(4);

//Afiseaza viteza noua in DOM.

let p2 = document.createElement('p');

p2.innerText = `Noua viteza este ${audi.speed} km/h.`;

document.body.appendChild(p2);

// Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.
audi.setSpeed(4).accelerate();

// Afiseaza noua valoare in DOM.

let p3 = document.createElement('p');

p3.innerText = `Ultima ultima viteza este ${audi.speed} km/h.`;

document.body.appendChild(p3);