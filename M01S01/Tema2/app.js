var inputRadius = document.getElementById('radius'),
  elementCircleArea = document.getElementById('circleArea'),
  form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    var radius = inputRadius.value || 0,
    circleArea = 0;

    circleArea = Math.PI * Math.pow(radius, 2);

    elementCircleArea.innerText = circleArea;

    e.preventDefault();
  }, false)

  // Arie cerc //