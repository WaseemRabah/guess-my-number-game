"use strict";

let secretNumber = generateRandomNumber();
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  const messageElement = document.querySelector(".message");
  messageElement.textContent = message;
  messageElement.style.backgroundColor = "#e114dd";
};

const updateScoreAndDisplayMessage = function (message, isGameOver = false) {
  if (!isGameOver) {
    score--;
    document.querySelector(".yourScore").textContent = score;
  } else {
    score = 0;
    document.querySelector(".yourScore").textContent = score;
  }
  displayMessage(message);
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-field").value);
  if (score > 1) {
    if (guess === 0 || !guess) {
      updateScoreAndDisplayMessage("Please enter a number between 1 and 20.");
    } else if (guess === secretNumber) {
      displayMessage("Congratulations! You won! 😍");
      document.body.style.backgroundColor = "green";
      document.querySelector(".message").style.backgroundColor = "green";
      document.querySelector(".secret-number").textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
    } else {
      const message =
        guess < secretNumber
          ? "The number is too low. 🤦‍♂️"
          : "The number is too high. 🤷‍♂️";
      updateScoreAndDisplayMessage(message);
    }
  } else {
    updateScoreAndDisplayMessage("GAME OVER. 😫", true);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".yourScore").textContent = score;
  displayMessage("Enter your number. 🤔");
  document.querySelector("body").style.backgroundColor = "#e114dd";
  document.querySelector(".input-field").value = "";
  document.querySelector(".secret-number").textContent = "?";
  secretNumber = generateRandomNumber();
});

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
