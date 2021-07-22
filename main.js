window.addEventListener('keydown', turnCar);

function turnCar() {
  var car = document.querySelector('img');
  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      car.setAttribute('class', 'car-up');
      break;
    case 'KeyS':
    case 'ArrowDown':
      car.setAttribute('class', 'car-down');
      break;
    case 'KeyA':
    case 'ArrowLeft':
      car.setAttribute('class', 'car-left');
      break;
    case 'KeyD':
    case 'ArrowRight':
      car.setAttribute('class', 'car-right');
      break;
  }
}

function startCar() {
  var position = 0;
  var car = document.querySelector('img');
  if (event.keyCode === 32) {
    setInterval(function () {
      position += 10;
      car.style.left = position + 'px';
    }, 16);

  }
}

window.addEventListener('keydown', startCar);
