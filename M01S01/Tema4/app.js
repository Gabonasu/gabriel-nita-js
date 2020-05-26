var inputRadius = document.getElementById('radius'),
  elementSphereSurface = document.getElementById('sphereSurface'),
  form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    var radius = inputRadius.value || 0,
    sphereVolume = 0;

    sphereSurface = 4 * (Math.PI * Math.pow(radius, 2));

    elementSphereSurface.innerText = sphereSurface;

    e.preventDefault();
  }, false)

  // Suprafata sfera //