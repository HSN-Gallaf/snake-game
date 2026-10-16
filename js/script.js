// Constants:
const snakeArray = [];

// Variables:
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

// Others: Score, Speed, Level

// Cache Elements:
const gameBoardElement = document.querySelector(".game-board");
const snakeHeadElement = document.createElement("div");
const foodElement = document.createElement("div");

// Function:

const initGame = () => {
  addFood();

  setInterval(startGame, 100);
};

const ditectUserClick = (event) => {
  // Detecet keyPress and prevent moving the opasite direction
  if (event.key === "ArrowUp" && vectorY !== 1) {
    vectorX = 0;
    vectorY = -1;
  } else if (event.key === "ArrowDown" && vectorY !== -1) {
    vectorX = 0;
    vectorY = 1;
  } else if (event.key === "ArrowLeft" && vectorX !== 1) {
    vectorX = -1;
    vectorY = 0;
  } else if (event.key === "ArrowRight" && vectorX !== -1) {
    vectorX = 1;
    vectorY = 0;
  }
};

const addFood = () => {
  gameBoardElement.appendChild(foodElement);
  foodElement.classList.add("snake-food");
  foodX = Math.floor(Math.random() * gridSize) + 1;
  foodY = Math.floor(Math.random() * gridSize) + 1;
  foodElement.style.gridArea = `${foodY} / ${foodX}`;
};

const startGame = () => {
  // snake tail position
  let tailX = snakeArray.length ? snakeArray[snakeArray.length - 1] : headX;
  let tailY = snakeArray.length ? snakeArray[snakeArray.length - 1] : headY;

  // move the head on keypress base on the vector
  headX += vectorX;
  headY += vectorY;

  // if snake hit the food
  if (foodX === headX && foodY === headY) {
    addFood();

    snakeArray.push([tailX, tailY]);
  }

  // change position of each body element in the array by adding the position
  for (let i = snakeArray.length - 1; i > 0; i--) {
    snakeArray[i] = snakeArray[i - 1];
  }

  if (snakeArray.length > 0) {
    snakeArray[0] = [headX - vectorX, headY - vectorY];
  }

  gameBoardElement.appendChild(snakeHeadElement);
  snakeHeadElement.classList.add("snake-head");
  snakeHeadElement.style.gridArea = `${headY} / ${headX}`;

  for (let child of gameBoardElement.children) {
    if (child.classList.contains("snake-body")) {
      child.remove();
    }
  }

  for (let i = 0; i < snakeArray.length; i++) {
    const snakeBodyElement = document.createElement("div");
    gameBoardElement.appendChild(snakeBodyElement);
    snakeBodyElement.classList.add("snake-body");
    snakeBodyElement.style.gridArea = `${snakeArray[i][1]} / ${snakeArray[i][0]}`;
  }
};

// Adds listenr for any keyboard click
window.addEventListener("keydown", ditectUserClick);
initGame();
