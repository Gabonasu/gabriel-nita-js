var i = 1;

while (i <= 67) {
  console.log(i);

  i++;
}


while (i < 67) {
  console.log(i);

  i++;
}

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).');
var i = 1;
while (i < 67) {
  console.log(i);

  if (i === 12) {
    break;
  }

  i++;
}

console.warn('Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).');

var i = 1;
while (i <= 32) {
  console.log(i);

  if (i % 2 === 0) {
    continue;
  }

  i++;
}

