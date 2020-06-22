var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
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

// person.friends.forEach((friend) => {
  
// });

// Tema Optionala folosind for si forEach (2 exemple separate) creati propozitii de genul: 
// Prietenul meu este Larry Larryson. 
// Prietenii mei sunt Larry Larryson si Carol Carolson. 
// Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson. 
// Prietenii mei sunt Larry Larryson, Steven Stevenson, Carol Carolson si Andra Andrason. 

// Puteti lucra intr-un fisier nou curat cu structura de date mai simpla. 
// Cautam algoritmi robusti care reactioneaza la dimensiunea arrayului de prieteni

// Bonus, daca arrayul este gol: Nu am prieteni.

/**
 * 
 * @param {*} count 
 * @param {*
 * singular: 'an',
 * plural: 'ani'
 * } words 
 */

function pluralize (count, words) {
  if (count > 1) {
    return words.plural || '';  //short-circuit
  } else {
    return words.singular || '';
  }
}

for (let i = 0; i < person.friends.length; i++) {
  let outerFriend = person.friends[i];
  let ageDiff = Math.abs(outerFriend.age - person.age);

  console.log(`Intre ${outerFriend.name} si ${person.name} este o diferenta de ${ageDiff} ${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}.`);


  for (let j = 0; j < person.friends.length; j++) {
    let innerFriend = person.friends[j];
    let ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    if (i !== j) {
      console.log(`Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDiff} ${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}.`);
    }
  }
}

console.log(`este o diferenta de 23 ${pluralize(23, {
  singular: 'an.',
  plural: 'ani.'
})}`);