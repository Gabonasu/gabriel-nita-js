var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false
  },
  friends: {
      larry: {
          name: 'Larry',
          surname: 'Larryson',
          age: 30
      },
      steven: {
          name: 'Steven',
          surname: 'Stevenson',
          age: 31
      },
      carol: {
          name: 'Carol',
          surname: 'Carolson',
          age: 29
      }
  }
};

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.');
var message = '';

Object.keys(person.skills).forEach(function (skillName) {
  if (person.skills[skillName] === true) {
    message += `${skillName} `;
  }
});

console.log(message.trim());

console.warn('Prin aceeasi metoda, afiseaza o lista inversata cu numele complet al prietenilor.');
message = '';
var friendsKeysNames = Object.keys(person.friends);
friendsKeysNames.reverse();

friendsKeysNames.forEach(function (friendKey, i, friends) {
  var friend = person.friends[friendKey];
  var punctutation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 1) {
    punctutation = '.';
  }

  message += punctutation;
});

console.log(message);

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()');
message = 'Prietenii mei sunt: ';

friendKeysNames = Object.keys(person.friends);
friendsKeysNames.forEach(function (friendKey, i, friends) {
  var friendsLength = friends.length;
  var friend = person.friends[friendKey];
  var separator = ', '; 

  message += friend.name;

  if (i === friendsLength - 1) {
    separator = '.';
  }

  if (i === friendsLength - 2) {
    separator = ' si ';
  }

  message += separator;

  //message += friend.name + separator;
});

console.log(message);

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry este mai mare|mic decat Dragos.” etc…');
friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  var message = '';

  if (person.age - friend.age > 0) {
    message = `${friend.name} este mai mic decat ${person.name}.`;
  } else if (person.age - friend.age < 0) {
    message = `${friend.name} este mai mare decat ${person.name}.`;
  } else {
    message = `${friend.name} si ${person.name} au aceeasi varsta.`;
  }

  console.log(message);
});

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');
Object.keys(person.skills).forEach(function (skillName, i, skills){
  console.log(skillName);
});

console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.');
Object.keys(person.friends).forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  console.log(`${friend.name} ${friend.surname}.`);
});

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()');

message = 'Prietenii mei sunt ';
friendsKeysNames = Object.keys(person.friends);
i = 0;

friendsKeysNames.forEach(function (friendKey, i, friends){
  let friend = person.friends[friendKey];
  let punctutation = '';

  if (i === friends.length - 1) {
    punctutation = '.';
  } else {
    punctutation =', ';
  }

  message +=`${friend.name} ${friend.surname}`;
  message += punctutation;
});
console.log(message);

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”');

friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.forEach(function (friendKey, i, friends) {
  let friend = person.friends[friendKey];
  let message = '';

  message += `${friend.name} are ${friend.age} ani.`;

  console.log(message);
});