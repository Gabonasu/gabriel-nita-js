var person = {
  firstName: 'Ragnar',
  lastName: 'Lothbrok',
  email:'ragnarz@midgard.sk',
  birthYear: 1990,
  pets: [
    {
      name: 'Skogkatt',
      species: 'pisica',
      age: 10
    },
    {
      name: 'Vallhund',
      species: 'caine',
      age: 15
    },
    {
      name: 'Sven',
      species: 'corb',
      age: 7
    },
  ],
  zipCode: '00001'
};

var difference = new Date(Date.now()).getFullYear() - person.birthYear - person.pets[0].age; // ex 10
var petName = person.pets[0].name; // ex 11

var prop1 = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`; // Ex 16
var prop2 = person.pets[0].age - person.pets[2].age; // Ex 17
var prop3 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`; // Ex 18
var prop4 = `Animalele mele s-au nascut in ${new Date(Date.now()).getFullYear() - person.pets[0].age}, ${new Date(Date.now()).getFullYear() - person.pets[1].age} respectiv ${new Date(Date.now()).getFullYear() - person.pets[2].age}.`; // Ex 19
var prop5 = `Stiu ca nu era nevoie de console log la 16,17,18 si 19. Am adaugat doar pentru centralizare.` // Ex 20

console.warn('Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.');
console.log(`Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`);

// Ex 6 ^

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.');
console.log(`Am acelasi e-mail din copilarie: ${person.email}.`);

// Ex 7 ^

console.warn('Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”');
console.log(`Unul dintre cele ${person.pets.length} animale ale mele este ${person.pets[2].species} si are ${person.pets[2].age} de ani.`);

// Ex 8 ^

console.warn('Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.'); 
console.log(`Anul de nastere al lui ${person.pets[1].name} este: ${new Date(Date.now()).getFullYear() - person.pets[1].age}`);

// Ex 9 ^

console.warn('Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent.');
console.log(`${difference}`);

// Ex 10 ^

console.warn('Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.');
console.log(`${petName}`);

// Ex 11 ^

console.warn('Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.');
console.log(`Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`);

// Ex 12 ^

console.warn('Folosind metoda document.getElementById() afiseaza urmatoarele 4 afirmatii despre obiectul person.');
document.getElementById('prop01').innerText = prop1;
console.log(prop1);

// Ex 16 ^

console.warn('Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2.');
document.getElementById('prop02').innerText = prop2;
console.log(prop2);

// Ex 17 ^

console.warn('Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”');
document.getElementById('prop03').innerText = prop3;
console.log(prop3);

// Ex 18 ^

console.warn('Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.');
document.getElementById('prop04').innerText = prop4;
console.log(prop4);

// Ex 19 ^

console.warn('Am folosit variabile.')
document.getElementById('prop05').innerText = prop5;
console.log(prop5);