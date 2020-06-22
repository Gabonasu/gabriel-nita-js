let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
  alert('Ai apasat butonul!');
};


// callback
button.addEventListener('click', clickHandler);
removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

// Adauga un buton nou in document cu id-ul query si folosind addEventListener() 
// ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
let button2 = document.getElementById('query');

let ageRequest = () => {
  let age = prompt('Varsta, va rog.');
  console.log(`Ai ${age} ani!`);
}

button2.addEventListener('click', ageRequest);

// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.
// Acest subpunct nu am stiut sa-l fac asa ca am mutat codul pentru el pe liniile 19 si 20 inauntrul metodei. Having some trouble figuring it out.


// Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila, 
//apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

let theMessage = document.getElementById('message');

