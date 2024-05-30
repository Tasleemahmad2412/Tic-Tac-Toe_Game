"use strict";
// selections
const box = document.querySelectorAll(".box");
const playerXScore = document.querySelector(".player-1");
const playerYScore = document.querySelector(".player-2");
const RestartBtn = document.querySelector(".restart-btn");

// Logic
let turnCount = 0;
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function checkWin(BoxText) {
  return winCombinations.some((combination) => {
    const isWinning = combination.every(
      (index) => box[index].textContent === BoxText
    );
    if (isWinning) {
      combination.forEach((index) => box[index].classList.add("winning"));
    }
    return isWinning;
  });
}

let ScoreX = 0;
let ScoreY = 0;
box.forEach((b) =>
  b.addEventListener("click", function () {
    if (turnCount % 2 === 0) {
      b.textContent = "X";
      b.style.backgroundColor = "yellow";
      if (checkWin("X")) {
        alert("Player X wins!");
        ScoreX++;
        playerXScore.textContent = `Player-X Score: ${ScoreX}`;
        // You might want to reset the game here
      }
      turnCount++;
    } else {
      b.textContent = "O";
      b.style.backgroundColor = "blue";

      if (checkWin("O")) {
        alert("Player O wins!");
        ScoreY++;
        playerYScore.textContent = `Player-O Score: ${ScoreY}`;
        // You might want to reset the game here
      }

      turnCount++;
    }
  })
);

RestartBtn.addEventListener("click", function () {
  // Clear text content and background color of each box
  box.forEach((b) => {
    b.textContent = "";
    b.style.backgroundColor = "";
    b.classList.remove("winning");
  });
  // Reset turn count
  turnCount = 0;
});
