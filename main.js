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

const displayMessage = "Try Again";

const genNum = () => Math.floor(Math.random() * randomWord.length);
const answer = randomWord[genNum()];

function render() {
  for (let i = 0; i < acbLetters.length; i++) {
    const pickedLetters = document.createElement("div");
    pickedLetters.innerText = acbLetters[i];
    document.getElementById("main-letters").append(pickedLetters);
  }
}
render();

function createSpan() {
  for (let j = 0; j < answer.length; j++) {
    const span = document.createElement("span");
    span.innerText = answer[j];
    document.querySelector(".word").append(span);
  }
}
createSpan();

function handleClick(e) {
  console.log(e.target);
}

document.getElementById("main-letters").addEventListener("click", handleClick);




