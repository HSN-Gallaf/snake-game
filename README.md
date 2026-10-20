# 🐍 Snake Game

A classic Snake Game built using **HTML, CSS, and JavaScript**. Control the snake, collect food, increase your score, and try to beat your highest score without hitting the walls or your own body.

## 🎮 Features

- **Three Difficulty Levels:** Choose between Easy, Medium, and Hard.
- **Score Tracking:** Earn one point every time the snake eats food.
- **Highest Score:** Save your highest score using the browser's Local Storage.
- **Dark and Light Themes:** Switch between dark and light modes.
- **Pause and Resume:** Pause or resume the game using the Spacebar.
- **Sound Effects:** Audio feedback when eating food or when the game ends.
- **Game Over Screen:** View your final score and restart the game.
- **Keyboard Controls:** Move the snake using the arrow keys.
- **Animations:** Use Animate.css for button animations.

## 🛠️ Technologies Used

- **HTML5** — Structures the game interface.
- **CSS3** — Styles the game board, snake, food, and themes.
- **JavaScript** — Implements game logic, movement, collision detection, and score tracking.
- **Local Storage** — Stores the highest score in the browser.
- **Animate.css** — Provides visual animations.
- **HTML Audio API** — Plays sound effects during gameplay.

## 🌐 Live Demo

Play the game here: [Snake Game](https://hsn-gallaf.github.io/snake-game/)

## 📁 Project Structure

```text
snake-game/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── eat-food.mp3
│   └── game-over.mp3
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <https://github.com/HSN-Gallaf/snake-game.git>
```

### 2. Navigate to the Project Directory

```bash
cd snake-game
```

### 3. Run the Game

Open `index.html` in your web browser to start playing.

You can also use the **Live Server** extension in Visual Studio Code for a convenient local development environment.

## 🕹️ How to Play

1. Open the game in your browser.
2. Choose a difficulty level.
3. Use the arrow keys to control the snake.
4. Collect the food to increase your score.
5. Avoid hitting the walls or the snake's own body.
6. Try to achieve a new highest score!

## ⌨️ Controls

| Key                  | Action                               |
| -------------------- | ------------------------------------ |
| ⬆️ Arrow Up          | Move up                              |
| ⬇️ Arrow Down        | Move down                            |
| ⬅️ Arrow Left        | Move left                            |
| ➡️ Arrow Right       | Move right                           |
| Spacebar             | Pause or resume the game             |
| ☀️ / 🌙 Theme Button | Switch between dark and light themes |

## ⚡ Difficulty Levels

| Level  | Game Interval | Description             |
| ------ | ------------: | ----------------------- |
| Easy   |        150 ms | Slower movement         |
| Medium |        100 ms | Moderate movement speed |
| Hard   |         70 ms | Faster movement         |

A lower interval means the snake moves more frequently, making the game more challenging.

## 🏆 Scoring System

- Each food item collected increases your score by one point.
- The highest score is stored in the browser's Local Storage.
- Your highest score remains available when you reopen the game in the same browser, provided the stored data is not cleared.

## 📌 Notes

- An internet connection is required to load Animate.css from its CDN.
- Make sure both sound files exist in the `assets/` directory.
- The highest score is stored locally in your browser and is not synchronized across devices.

## 📚 Resources

- **Snake Movement:** [GeeksforGeeks – Create a Snake Game Using HTML, CSS, and JavaScript](https://www.geeksforgeeks.org/javascript/create-a-snake-game-using-html-css-and-javascript/)
- **Dark and Light Mode:** [MDN Web Docs – `light-dark()` CSS Function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)
- **Animations:** [Animate.css](https://animate.style/)

## 📄 License

This project is available for personal and educational use. Add a license file if you intend to distribute it under specific licensing terms.
