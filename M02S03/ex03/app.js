let p = document.createElement('p');
document.body.prepend(p);

let stageElement = document.querySelector('.stage');

let p2 = document.createElement('p');
p.after(p2);

let countIn = 0;
let countOut = 0;

let createMessage = (countIn, countOut) => {
  return `In: ${countIn}, Out: ${countOut}`;
}

stageElement.addEventListener('mouseover', () => {
  let message = 'Mouseul este pe scena.';
  countIn++;

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
});

stageElement.addEventListener('mouseout', () => {
  let message = 'Mouseul nu este pe scena.';
  countOut++;

  p.innerText = message;
});