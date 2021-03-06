var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'node.js',
    'jquery'
  ],
  friends: [
    {
        name: 'Larry',
        surname: 'Larryson',
        age: 30
    },
    {
        name: 'Steven',
        surname: 'Stevenson',
        age: 31
    },
    {
        name: 'Carol',
        surname: 'Carolson',
        age: 29
    }
  ]
};

console.warn('Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.');
var message = '';

person.skills.forEach (function (skill, i) {
  if (i % 2 !== 0) { 
    message += skill + ' ';
  }
});

console.log(message.trim());

console.warn('In mod similar, afiseaza skillurile care contin litera a.');
message = '';

person.skills.forEach(function(skill) {
  // if (skill.indexOf('a') >= 0) {}
  if (skill.includes('a')) {
    message += `${skill} `;
  }
});

console.log(message.trim());

console.warn('Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."');
message = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend, i, friends) {
  var punctuation = ', ';
  var friendsLength = friends.length;

  message += `${friend.name} ${friend.surname}`;

  if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

message += punctuation;
});

console.log(message);

console.warn('Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.');
var totalAge = 0;

person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    totalAge += friend.age;
  }
});

console.log(totalAge);

console.warn(' Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.');
var totalYears = 0;

person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  var birthYear = (new Date(Date.now()).getFullYear()) - friendAge;

  if (friendAge % 2 !== 0) {
    totalYears += birthYear;
  }
});

console.log(totalYears);

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.');

person.friends.forEach(function (friend) {
  var ageDiff = person.age - friend.age;

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "');
message = '';

person.friends.forEach(function (friend) {
  var ageDiff = person.age - friend.age;

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani. `;
});

console.log(message.trim());

console.warn(' Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.');
message = '';
person.skills.reverse();

person.skills.forEach(function (skill, i, skills) {
  var punctuation = ', ';

  message += skill;

  if (i === skills.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);
person.skills.reverse();

// //////////////////////////////////////TEMA/////////////////////////////////////////////// //

console.warn('Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.');
message = '';

person.skills.forEach(function (skill, i, skills) {
  var punctuation =', ';

  message += skill;

  if (i === skills.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

// ///////////////////////////////////////////////////////////////////////////////////////////// //

console.warn('In mod similar, afiseaza skillurile care nu incep cu j.');
message = '';

person.skills.forEach(function (skill, i, skills) {
  var punctuation =', ';

  if (skill.charAt(0) !== 'j') {
    message += skill;
    message += punctuation;
  }
  
  
});

console.log(message.substring(0, message.length - 2) + '.');

// ///////////////////////////////////////////////////////////////////////////////////////////// //

console.warn('Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."');
message = 'Numele mari ale prietenilor mei sunt ';
let i = 0;

person.friends.forEach(function (friend, i) {
  let punctuation =', ';

  message += friend.surname;

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

// ///////////////////////////////////////////////////////////////////////////////////////////// //

console.warn('Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends');
message = 'Numarul total de ani este ';
let sum = 0;

person.friends.forEach(function (friend, i) {
  sum += friend.age;
});

message += sum;

console.log(`${message}.`);

// ///////////////////////////////////////////////////////////////////////////////////////////// //

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');
message = `Diferenta dintre persoana si prieteni este de `;
let dif = 0;

person.friends.forEach( function (friend, i) {
  let punctuation = ', '
  dif = Math.abs(person.age - friend.age);

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  
  message += dif;
  message += punctuation;

});

console.log(message);

// ///////////////////////////////////////////////////////////////////////////////////////////// //

console.warn('Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.');
message = '';
person.friends.reverse();

person.friends.forEach(function (friend, i) {
  let punctuation =', ';

  message += friend.surname;

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);
person.friends.reverse();