var data = {
  facing: 'east',
  started: false
};

var intervalId;

window.addEventListener('keydown', turnCar);

function turnCar() {
  var car = document.querySelector('img');
  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      car.setAttribute('class', 'car-up');
      data.facing = 'north';
      break;
    case 'KeyS':
    case 'ArrowDown':
      car.setAttribute('class', 'car-down');
      data.facing = 'south';
      break;
    case 'KeyA':
    case 'ArrowLeft':
      car.setAttribute('class', 'car-left');
      data.facing = 'west';
      break;
    case 'KeyD':
    case 'ArrowRight':
      car.setAttribute('class', 'car-right');
      data.facing = 'east';
      break;
  }

}

function startAndStopCar() {

  if (event.keyCode === 32 && data.started === false) {
    // debugger;
    intervalId = setInterval(function () {
      var position = 0;
      var car = document.querySelector('img');
      position += 10;
      car.style.left = position + 'px';
    }, 16);
    data.started = true;

  } else if (event.keyCode === 32 && data.started === true) {
    clearInterval(intervalId);
    data.started = false;
  }

}

window.addEventListener('keydown', startAndStopCar);
