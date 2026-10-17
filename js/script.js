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

// Game Intreval
let gameIntreval;

// Others: Score, Speed, Level

// Cache Elements:
const gameBoardElement = document.querySelector(".game-board");
const snakeHeadElement = document.createElement("div");
const foodElement = document.createElement("div");

// Function:

const initGame = () => {
  addFood();

  gameIntreval = setInterval(startGame, 100);
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
  foodX = Math.floor(Math.random() * gridSize) + 1;
  foodY = Math.floor(Math.random() * gridSize) + 1;
};

const gameOver = () => {
  vectorX = 0;
  vectorY = 0;

  snakeArray.length = 0;

  clearInterval(gameIntreval);
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

  // Check if the snake goes over the game board
  if (headX < 1 || headY < 1 || headX > gridSize || headY > gridSize) {
    gameOver();
    return;
  }

  // Check if the snake hit itself
  for (let i = 0; i < snakeArray.length; i++) {
    if (headX === snakeArray[i][0] && headY === snakeArray[i][1]) {
      gameOver();
      return;
    }
  }

  // change position of each body element in the array by adding the position
  for (let i = snakeArray.length - 1; i > 0; i--) {
    snakeArray[i] = snakeArray[i - 1];
  }

  // Move the first cell after the head to the head position
  if (snakeArray.length > 0) {
    snakeArray[0] = [headX - vectorX, headY - vectorY];
  }

  // Clear the elements indide the board
  gameBoardElement.innerHTML = "";

  // Re-render the head with the new position
  gameBoardElement.appendChild(snakeHeadElement);
  snakeHeadElement.classList.add("snake-head");
  snakeHeadElement.style.gridArea = `${headY} / ${headX}`;

  // Re-render the entire body with the new position
  for (let i = 0; i < snakeArray.length; i++) {
    const snakeBodyElement = document.createElement("div");
    gameBoardElement.appendChild(snakeBodyElement);
    snakeBodyElement.classList.add("snake-body");
    snakeBodyElement.style.gridArea = `${snakeArray[i][1]} / ${snakeArray[i][0]}`;
  }

  // Re-render the food with the new position
  gameBoardElement.appendChild(foodElement);
  foodElement.classList.add("snake-food");
  foodElement.style.gridArea = `${foodY} / ${foodX}`;
};

// Adds listenr for any keyboard click
window.addEventListener("keydown", ditectUserClick);
initGame();
