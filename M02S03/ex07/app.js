let breakpoint = 650;

function displayAlert() {
  alert('Butonul a fost apasat');
}

// PascalCase
// kebab-case-example
// snake_case_example

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  let buttonElement = document.querySelector('.btn');

  if (windowWidth > 650) {
    buttonElement.addEventListener('click', displayAlert);
  }

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if (windowWidth >= 650) {
      buttonElement.addEventListener('click', displayAlert);
    } else {
      buttonElement.removeEventListener('click', displayAlert);
    }
  });
});
