// Constants:
const snakeHeadElement = document.createElement("div");
const foodElement = document.createElement("div");

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

// Snake: snake array
// Others: Score, Speed, Level

// Cache Elements:
const gameBoardElement = document.querySelector(".game-board");

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

const eatFood = () => {};

// Event Listeners:

// Adds listenr for any keyboard click
window.addEventListener("keydown", ditectUserClick);

// Updates the snake head to make it move
setInterval(() => {
  moveSnake();
  eatFood();
  snakeHeadElement.style.gridColumnStart = headX;
  snakeHeadElement.style.gridRowStart = headY;
}, 100);
