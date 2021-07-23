const data = {
  facing: 'east',
  started: false,
  positionX: 0,
  positionY: 0
};


const game_settings = {
  background_image_size: 32, //px
  car_speed: 10,
  game_loop_speed: 16, //ms
}


let intervalId;
const car = document.querySelector('img');


window.addEventListener('keydown', aKeyIsDown);

// add this function to use only one listener
function aKeyIsDown(event) {

  // stops the arrows from scrolling
  event.preventDefault();
  event.stopPropagation();

  turnCar(event);
  startAndStopCar(event);
}


function turnCar(event) {
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


function startAndStopCar(event) {

  // change .keyCode to .code
  if (event.code === 'Space' && data.started === false) {

    // move the interval function for easier reading
    intervalId = setInterval(gameLoop, game_settings.game_loop_speed);

    data.started = true;
  } else if (event.code === 'Space' && data.started === true) {
    clearInterval(intervalId);
    data.started = false;
  }

}


const gameLoop = () => {

  // move the car in the right direction
  switch (data.facing) {
    case "east":
      data.positionX += game_settings.car_speed;
      break;
    case "west":
      data.positionX -= game_settings.car_speed;
      break;
    case "north":
      data.positionY -= game_settings.car_speed;
      break;
    case "south":
      data.positionY += game_settings.car_speed;
      break;
  }

  // move the background and not the car on the X axis
  document.body.style.backgroundPositionX = `${data.positionX % game_settings.background_image_size}px`;
  // move the background and not the car on the Y axis
  document.body.style.backgroundPositionY = `${data.positionY % game_settings.background_image_size}px`;
}

