// Constants:
const snakeArray = [];

// Variables:
//  X and Y; headX, headY, tailX, tailY, foodX, foodY, VectorX, VectorY
let move = null;

let gridSize = 30;

// Snake head position
let headX = 15;
let headY = 15;

// Direction to move
let vectorX = 0;
let vectorY = 0;

// food position
let foodX;
let foodY;

// snake tail position
let lastSnakeArrayIndex = snakeArray.length - 1;

let tailX;
let tailY;

let newCellX;
let newCellY;

let preCellX;
let preCellY;
// Snake: snake array
// Others: Score, Speed, Level

// Cache Elements:
const gameBoardElement = document.querySelector(".game-board");
const snakeHeadElement = document.createElement("div");
const snakeBodyElement = document.createElement("div");
const foodElement = document.createElement("div");

// Function:

const initGame = () => {
  createSnake();
};

// Create Snake Head
const createSnake = () => {
  gameBoardElement.appendChild(snakeHeadElement);
  snakeHeadElement.classList.add("snake-head");
  snakeHeadElement.style.gridColumnStart = headX;
  snakeHeadElement.style.gridRowStart = headY;
  snakeArray.unshift([headX, headY]);
};
createSnake();

const ditectUserClick = (event) => {
  if (event.key !== move) {
    switch (event.key) {
      case "ArrowUp":
        move = "ArrowUp";
        vectorX = 0;
        vectorY = -1;
        break;
      case "ArrowDown":
        move = "ArrowDown";
        vectorX = 0;
        vectorY = 1;
        break;
      case "ArrowLeft":
        move = "ArrowLeft";
        vectorX = -1;
        vectorY = 0;
        break;
      case "ArrowRight":
        move = "ArrowRight";
        vectorX = 1;
        vectorY = 0;
        break;
    }
  }
};

const moveSnake = () => {
  headX = vectorX + headX;
  headY = vectorY + headY;
  snakeHeadElement.style.gridColumnStart = headX;
  snakeHeadElement.style.gridRowStart = headY;

  // Update the array head position
  snakeArray[0][0] = headX;
  snakeArray[0][1] = headY;

  if (snakeArray.length > 1) {
    for (let i = 1; i < snakeArray.length; i++) {
      preCellX = snakeArray[i - 1][0] - vectorX;
      preCellY = snakeArray[i - 1][1] - vectorY;
      if (i === 1) {
        snakeArray[i][0] = headX - vectorX;
        snakeArray[i][1] = headY - vectorY;
      } else {
        snakeArray[i][0] = preCellX;
        snakeArray[i][1] = preCellY;
      }

      gameBoardElement.children[i].style.gridColumnStart = snakeArray[i][0];
      gameBoardElement.children[i].style.gridRowStart = snakeArray[i][1];
    }
  }
};

const gameOver = () => {};

const addFood = () => {
  gameBoardElement.appendChild(foodElement);
  foodElement.classList.add("snake-food");
  foodX = Math.floor(Math.random() * gridSize);
  foodY = Math.floor(Math.random() * gridSize);

  foodElement.style.gridColumnStart = foodX;
  foodElement.style.gridRowStart = foodY;
};

addFood();

const eatFood = () => {
  if (foodX === headX && foodY === headY) {
    gameBoardElement.removeChild(foodElement);
    addSnakeCell();

    addFood();
  }
};

const addSnakeCell = () => {
  const bodyElement = document.createElement("div");
  bodyElement.classList.add("snake-body");
  gameBoardElement.appendChild(bodyElement);

  newCellX = foodX - vectorX;
  newCellY = foodY - vectorY;

  bodyElement.style.gridColumnStart = newCellX;
  bodyElement.style.gridRowStart = newCellY;

  snakeArray.push([newCellX, newCellY]);
};

// Event Listeners:

// Adds listenr for any keyboard click
window.addEventListener("keydown", ditectUserClick);

// Updates the snake head to make it move
setInterval(() => {
  eatFood();
  moveSnake();
}, 100);

// This migh cuse error if the food position is same as one of the snake body:

// gameBoardElement.children[i].style.gridColumnStart = snakeArray[i][0];
// gameBoardElement.children[i].style.gridRowStart = snakeArray[i][1];

// NOTE: ADD A LOCK TO WHEN THE SNAKE IS MOVING UP IT CANT MOVE DOWN AND OPASET AND IF ITS MOVING RIGH IT CANT MOVE LEFT
