var data = {
  facing: 'east',
  started: false,
  positionX: 0,
  positionY: 0
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
      if (data.started === true) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
          var car = document.querySelector('img');
          data.positionY -= 10;
          car.style.top = data.positionY + 'px';
        }, 16);
      }
      break;
    case 'KeyS':
    case 'ArrowDown':
      car.setAttribute('class', 'car-down');
      data.facing = 'south';
      if (data.started === true) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
          var car = document.querySelector('img');
          data.positionY += 10;
          car.style.top = data.positionY + 'px';
        }, 16);
      }
      break;
    case 'KeyA':
    case 'ArrowLeft':
      car.setAttribute('class', 'car-left');
      data.facing = 'west';
      if (data.started === true) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
          var car = document.querySelector('img');
          data.positionX -= 10;
          car.style.left = data.positionX + 'px';
        }, 16);
      }
      break;
    case 'KeyD':
    case 'ArrowRight':
      car.setAttribute('class', 'car-right');
      data.facing = 'east';
      if (data.started === true) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
          var car = document.querySelector('img');
          data.positionX += 10;
          car.style.left = data.positionX + 'px';
        }, 16);
      }
      break;
  }

}

function startAndStopCar() {

  if (event.keyCode === 32 && data.started === false) {
    if (data.facing === 'east') {
      intervalId = setInterval(function () {
        var car = document.querySelector('img');
        data.positionX += 10;
        car.style.left = data.positionX + 'px';
      }, 16);
      data.started = true;
    } else if (data.facing === 'south') {
      intervalId = setInterval(function () {
        var car = document.querySelector('img');
        data.positionY += 10;
        car.style.top = data.positionY + 'px';
      }, 16);
      data.started = true;
    } else if (data.facing === 'west') {
      intervalId = setInterval(function () {
        var car = document.querySelector('img');
        data.positionX -= 10;
        car.style.left = data.positionX + 'px';
      }, 16);
      data.started = true;
    } else if (data.facing === 'north') {
      intervalId = setInterval(function () {
        var car = document.querySelector('img');
        data.positionY -= 10;
        car.style.top = data.positionY + 'px';
      }, 16);
      data.started = true;
    }

  } else if (event.keyCode === 32 && data.started === true) {
    clearInterval(intervalId);
    data.started = false;
  }

}

window.addEventListener('keydown', startAndStopCar);
