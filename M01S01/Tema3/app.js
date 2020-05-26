var inputRadius = document.getElementById('radius'),
  elementSphereVolume = document.getElementById('sphereVolume'),
  form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    var radius = inputRadius.value || 0,
    sphereVolume = 0;

    sphereVolume = 4 / 3 * (Math.PI * Math.pow(radius, 3));

    elementSphereVolume.innerText = sphereVolume;

    e.preventDefault();
  }, false)

  // Volum sfera //