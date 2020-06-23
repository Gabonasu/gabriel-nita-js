let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    window.setTimeout(() => {
      this.turnLightsOff
    }, 3000);
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function () {
    let x = 0;
    this.speed = x;

    if (x >= this.topReverseSpeed) {
      return x;
    } else if (x <= this.topSpeed) {
      return x;
    } else {
      stop ();
    }
  }
};

console.warn('Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h".');
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn('Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".');
// ??? //