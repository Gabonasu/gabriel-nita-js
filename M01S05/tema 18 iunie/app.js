// 1. Creeaza o functie polimorfica pentru calcularea suprafetelor. Daca primeste un parametru, sa calculeze suprafata unui patrat. 
// Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
// 2. Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. 
// 3. Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
//    a. Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani”
//    b. Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: 
//       “Animalul meu are petAge ani”

function calculateArea (L, l, h) {
let sides = arguments.length ;
 switch (sides) {
  case 1:
    console.log (`Suprafata patratului este ${Math.pow(L, 2)}.`);
  break;
  case 2:
    console.log (`Suprafata dreptunghiului este ${L * l}.`);
  break;
  case 3:
    console.log(`Suprafata parlalelipipedului este ${L * l * h}.`);
  break;
 }
}

console.log(calculateArea(2));
console.log(calculateArea(2, 3));
console.log(calculateArea(2, 3, 4));

// ////////////////////////////////////////////////////////////////// //

function calculateCircleArea(r) {
  return `Aria cercului cu raza ${r} este: ${Math.PI * Math.pow(r, 2)}.`;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

// ////////////////////////////////////////////////////////////////// //

let pet = {
  getName: function () {
    return 'Dracarys';
  },
  getSpecies: function () {
    return 'dragon';
  },
  getAge: function () {
    return 450;
  },
};

console.warn('Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani”');
console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} de ani.`);

console.warn('Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”');

let accessor = (someMethod) => {
  let methodName = `get${someMethod}`;
  
  return pet[methodName]();
};

let petAge = accessor('Age');

console.log(`Animalul meu are ${petAge} de ani.`);