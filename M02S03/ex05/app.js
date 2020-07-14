// window.addEventListener('resize', () => {
//   console.log('fereastra s-a redimensionat');
// });

let p = document.querySelector('.message');
let p2 = document.getElementById('my-id');
let oldWidth = window.innerWidth;

window.addEventListener('resize', (event) => {
  let newWidth = window.innerWidth;
  p.innerText = window.newWidth;

  if (newWidth !== oldWidth) {
    p2.innerText = 'Fereastra si-a schimbat latimea.';
  } else {
    p2.innerText = '';
  }
  
});