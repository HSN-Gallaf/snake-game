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

let score = 0;

// let highestScore = window.localStorage.setItem("highestScore", 0);

// Others: Score, Speed, Level

// Cache Elements:
const gameBoardElement = document.querySelector(".game-board");
const gameOverElement = document.querySelector(".game-over-container");
const currentScoreElement = document.querySelector("#current-score");
const highestScoreElement = document.querySelector("#highest-score");
const levelChoiceElement = document.querySelector(".level-container");
const scoreTextElement = document.querySelector("#score-text");

const snakeHeadElement = document.createElement("div");
const foodElement = document.createElement("div");

// Score Defaul Value
currentScoreElement.textContent = `Score: ${score}`;
highestScoreElement.textContent = `Highest Score: ${window.localStorage.getItem("highestScore")}`;

// Function:

const initGame = (speed) => {
  levelChoiceElement.style.display = "none";
  changeFoodPosition();

  gameIntreval = setInterval(startGame, speed);
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

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * gridSize) + 1;
  foodY = Math.floor(Math.random() * gridSize) + 1;
};

const gameOver = () => {
  clearInterval(gameIntreval);

  scoreTextElement.textContent = `Your Score: ${score}`;

  headX = 15;
  headY = 15;
  gameOverElement.style.display = "flex";
  vectorX = 0;
  vectorY = 0;
  snakeArray.length = 0;
  score = 0;
};

const restartGame = () => {
  gameOverElement.style.display = "none";
  levelChoiceElement.style.display = "flex";
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
    changeFoodPosition();

    snakeArray.push([tailX, tailY]);

    // Update the score count
    score++;
    currentScoreElement.textContent = `Score: ${score}`;

    // Check if the current score is more than the highest score recoreded
    if (score > window.localStorage.getItem("highestScore")) {
      window.localStorage.setItem("highestScore", score);
      highestScoreElement.textContent = `Highest Score: ${window.localStorage.getItem("highestScore")}`;
    }
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
