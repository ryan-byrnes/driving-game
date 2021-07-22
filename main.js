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
