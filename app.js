"use strict";

// Guess Game Development

// Function Setup
const main = document.querySelector(".main_div");
const againBtn = document.querySelector(".div_again");
const checkBtn = document.querySelector(".check");
const questionMark = document.querySelector(".div_question");

const startGuess = document.querySelector(".div_start");
const score = document.querySelector(".score_span");
const highestScore = document.querySelector(".div_highest_score");
const guess = document.querySelector(".div_guess");

// Generate random number between 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// questionMark.textContent = randomNumber;

// Set initial score
let initialScore = 20;
score.textContent = initialScore;

// Set high score
let highScore = 0;

function clickChecked() {
  //Get value of input
  const guessInput = Number(document.querySelector("#guess_num").value);

  if (!guessInput) {
    startGuess.textContent = "No number was inputed🤔";
  } else if (guessInput === randomNumber) {
    startGuess.textContent = "Yayy...You guessed correctly🎉";
    questionMark.textContent = randomNumber;
    questionMark.style.cssText =
      "background-color: burlywood; border-radius: 6px";
    guess.style.color = "white";
    guess.textContent = "Awesome";
    main.style.cssText =
      "background-image: url('https://res.cloudinary.com/do3z5k6nk/image/upload/v1706999104/won4_uc8hml.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; color: white;";
    document.querySelectorAll(".div_start, .div_score").forEach((element) => {
      element.style.cssText = "color: white; background-color: black;";
    });
    if (initialScore > highScore) {
      highScore = initialScore;
      document.querySelector(".highScore").textContent = highScore;
    }
  } else if (guessInput > randomNumber) {
    if (initialScore >= 1) {
      startGuess.textContent = "Guessed number is too high📉";
      initialScore--;
      score.textContent = initialScore;
    } else {
      startGuess.textContent = "GAME OVER";
      score.textContent = 0;
    }
  } else if (guessInput < randomNumber) {
    if (initialScore >= 1) {
      startGuess.textContent = "Guessed number is too low📈";
      initialScore--;
      score.textContent = initialScore;
    } else {
      startGuess.textContent = "GAME OVER";
      score.textContent = 0;
    }
  }
}

function onClickChecked() {
  checkBtn.addEventListener("click", clickChecked);
}
onClickChecked();

function clickAgainBtn() {
  initialScore = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = initialScore;

  questionMark.textContent = '?';

  document.querySelector("#guess_num").value = "";

  main.style.cssText =
    "background-image: url('https://res.cloudinary.com/do3z5k6nk/image/upload/v1706096971/Guessing%20Game/Game2_bpzdnj.webp'); background-size: cover; background-repeat: no-repeat; background-position: center; color: black;";

  startGuess.textContent = "Start guessing...let's go🏋️‍♂️";
  questionMark.style.cssText = "background-color: aqua; border-radius: 0";
  guess.style.color = "brown";
  guess.textContent = "Guess My Number🤔";
  document.querySelectorAll(".div_start, .div_score").forEach((element) => {
    element.style.cssText =
      "color: black; background-color: rgb(134, 131, 131);";
  });
}

function onClickAgainBtn() {
  againBtn.addEventListener("click", clickAgainBtn);
}

onClickAgainBtn();

// checkBtn.addEventListener("click", function clickChecked() {
//   const guessInput = Number(document.querySelector("#guess_num").value);

//   if (!guessInput) {
//     startGuess.textContent = "No number was inputed🤔";
//   } else if (guessInput === randomNumber) {
//     startGuess.textContent = "Yayy...You guessed correctly🎉";
//   } else if (guessInput > randomNumber) {
//     startGuess.textContent = "Guessed number is too high📉";
//     score--;
//   } else if (guessInput < randomNumber) {
//     startGuess.textContent = "Guessed number is too low📈";
//     score--;
//   }
// });
