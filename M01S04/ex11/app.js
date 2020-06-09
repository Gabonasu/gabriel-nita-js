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