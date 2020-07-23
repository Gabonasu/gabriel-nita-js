let image = document.getElementsByClassName('image')[0];
let imageX = document.getElementsByClassName('image-x')[0];
let messagePara = document.querySelector('.message-para');

let imageSource = image.src;
let imageSourceX = imageX.src;

image.addEventListener('load', () => {
  messagePara.innerText = 'Imaginea s-a incarcat';
  // add img click event listener
  
  image.addEventListener('click', () => {
    window.alert(`Imaginea cu URL-ul: ${imageSource} s-a incarcat.`)
  });

  imageX.addEventListener('click', () => {
    window.alert(`Imaginea cu URL-ul: ${imageSourceX} s-a incarcat.`)
  });
});
