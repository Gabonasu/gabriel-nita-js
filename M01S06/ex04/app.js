(() => {
  let showMessage = (message) => {
    let messageParagraph = document.createElement('p');

    messageParagraph.innerText = message;
    messageParagraph.classList.add('message');

    document.body.appendChild(messageParagraph);

  };

  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      console.log('Mouse-ul este pe scena');
      showMessage('Mouse-ul este pe scena');
    });

    stage.addEventListener('mouseout', () => {
      console.log('Mouse-ul nu este pe scena');
      showMessage('Mouse-ul nu este pe scena');
    });
  });
})();