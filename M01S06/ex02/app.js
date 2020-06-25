let paragraphElement = document.createElement('p');
let userAgentString =  navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';
let browserName = 'Browser';
let userName = 'Vasilica';

if (userAgentString.includes(userAgentString.match(/chrome/ig))) {
  message = "Navighezi folosind Chrome.";
  browserName = 'Chrome';
}
// Se poate cauta in acest fel: (/chrome/ig), unde i = insensitive si g = cauta in tot sirul de caractere;


if (userAgentString.includes(userAgentString.match(/firefox/ig))) {
  message = "Navighezi folosind Firefox.";
  browserName = 'Firefox';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  let h1 = document.createElement('h1');
  h1.innerText = userName;

  document.body.appendChild(h1);
}, 3000);

// Edge //

if (userAgentString.includes(userAgentString.match(/edge/ig))) {
  message = "Navighezi folosind Edge.";
  browserName = 'Edge';
}

// remove paragraph //

setTimeout(() => {
 let removed = paragraphElement.remove('p');
}, 6000);

