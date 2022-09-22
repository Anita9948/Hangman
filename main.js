const acbLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const randomWord = [
  "thumps",
  "trips",
  "gores",
  "toddy",
  "locked",
  "gait",
  "coble",
  "prone",
  "cranes",
  "films",
];

let totalNumberGuesses = 6;
let displayMessage;

const genNum = () => Math.floor(Math.random() * randomWord.length);
let answer = randomWord[genNum()];
init();

function init() {
  createDiv();
  createHiddenWordEl();
  document.getElementById("main-letters").addEventListener("click", handleClick);
  document.getElementById("reset").addEventListener("click", resetGame);
}

const messageEl = document.getElementById("incorrect");
function render() {
  messageEl.innerText = isWon()
    ? "Winner"
    : `Remaining Guesses: ${totalNumberGuesses}`;
  if (gameOver()) messageEl.innerText = "Game Over!";
}

function createHiddenWordEl() {
  for (let i = 0; i < answer.length; i++) {
    const span = document.createElement("span");
    span.innerText = answer[i];
    document.querySelector(".word").append(span);
  }
}

function removeAllSpanEls() {
  document.querySelectorAll("span").forEach((span) => {
    span.remove();
  });
}

function isLetterInWord(cl) {
  let result = false;
  for (let i = 0; i < answer.length; i++) {
    if (cl.textContent === answer[i].toUpperCase()) {
      result = true;
    }
  }
  return result;
}
function showMatchingSpans(spans, cl) {
  for (let i = 0; i < spans.length; i++) {
    let currentSpanEls = spans[i];
    if (currentSpanEls.textContent.toUpperCase() === cl.textContent) {
      currentSpanEls.style.visibility = "visible";
    }
  }
}

function handleClick(e) {
  let curDiv = e.target;
  const spanEls = document.querySelectorAll("span");
  if (isLetterInWord(curDiv)) {
    showMatchingSpans(spanEls, curDiv);
  }

  e.target.style.color = isLetterInWord(curDiv) ? "green" : "red";
  if (gameOver()) return;
  totalNumberGuesses--;
  render();
}

function createDiv() {
  for (let i = 0; i < acbLetters.length; i++) {
    const mainKeyBoard = document.createElement("div");
    mainKeyBoard.innerText = acbLetters[i];
    document.getElementById("main-letters").append(mainKeyBoard);
  }
}

let winner = document.querySelectorAll("span");
function isWon() {
  let checking = 0;
  winner.forEach((span) => {
    if (span.style.visibility === "visible") checking++;
  });
  return checking === answer.length;
}

function gameOver() {
  return !isWon() && totalNumberGuesses === 0;
}

function resetGame(e) {
  console.log(e.target);
  totalNumberGuesses = 6;
  answer = randomWord[genNum()];
  removeAllSpanEls();
  createHiddenWordEl();
  render();
}
