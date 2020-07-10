// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul paragrafului',
  class: 'clase de css',
});
let $body = $('body');

$p.appendTo($body);

// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/
// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
// https://api.jquery.com/append/
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/

let $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

$body.append($p2);

setTimeout(() => {
  $p2.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul:
// “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea”
// si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap()
// https://api.jquery.com/wrap/
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la
// inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

let $passwordSpan = jQuery('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p2);

let wrappingDiv = jQuery('<div>', {
  class: 'container',
});


// $('.nimic').add($p).add($p2).wrap(wrappingDiv);
$body.append(wrappingDiv);
$p.appendTo(wrappingDiv);
$p2.appendTo(wrappingDiv);

let msg = 'Mesaje';

$(`<h2>${msg}</h2>`).prependTo(wrappingDiv);

// 9. Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() 
//     https://api.jquery.com/after/ 
// 10. Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.
// 11. Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation. Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
//     https://api.jquery.com/before/ 
// 12. Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link
//     https://api.jquery.com/prepend 


let nav = jQuery('<div>', {
  class: 'navigation',
});
$('.container').after(nav);

$('<a class="nav-link">Primul Link</a>').appendTo(nav);

$('.navigation .nav-link').before('<h2>Navigatie</h2>');

$('<sup>1</sup>').prependTo('.nav-link');

// 13. Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container 
// 14. Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici.” 
// Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery. Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class

$('.container').before('<h1>Invat jQuery</h1>');

//----------------------- primul fail -----------------------------------------

// let para = jQuery('<p>', {
//   class: 'paragraph',
//   text: 'Documentatia jQuery poate fi gasita ',
// });

// let link = jQuery('<a>', {
//   text: 'aici',
//   target: '_blank',
//   href: 'https://jquery.com/',
// }).appendTo(para);

// $('.navigation').after(`${para}`);


// ------------------------- al doilea fail ------------------------------------------

// $('.navigation').after($('<a>', {
//   text: 'aici',
//   target: '_blank',
//   href: 'https://jquery.com/',
// })).after('Documentatia jQuery poate fi gasita ');

// --------------------------- al treilea fail --------------------------------------

// let link = jQuery('<a>', {
//   target: '_blank',
//   href: 'https://jquery.com/'  
// }).appendTo('.link');

// $('h1').after('<p>Documentatia poate fi gasita <span class="link">aici</span>.</p>');

// ---------------------------- al patrulea fail -------------------------------------

// let para = jQuery('<p>', {
//   class: 'paragraph',
//   text: 'Documentatia jQuery poate fi gasita ',
// });

// let link = jQuery('<a>', {
//   text: 'aici',
//   target: '_blank',
//   href: 'https://jquery.com/',
// });

// $('h1').after(`${para + link}`);