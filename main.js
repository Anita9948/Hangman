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
const points = 5;

const genNum = () => Math.floor(Math.random() * randomWord.length);
const answer = randomWord[genNum()];

function render() {
  for (let i = 0; i < acbLetters.length; i++) {
    const mainKeyBoard = document.createElement("div");
    mainKeyBoard.innerText = acbLetters[i];
    document.getElementById("main-letters").append(mainKeyBoard);
  }
}
render();

function createSpan() {
  for (let i = 0; i < answer.length; i++) {
    const span = document.createElement("span");
    span.innerText = answer[i];
    document.querySelector(".word").append(span);
  }
}
createSpan();

function handleClick(e) {
  curDiv = e.target;
  const spanEls = document.querySelectorAll("span");
  if (isLetterInWord(curDiv)) {
    showMatchingSpans(spanEls,curDiv)
  }
  e.target.style.color = isLetterInWord(curDiv) ? 'green' : 'red'
}

document.getElementById("main-letters").addEventListener("click", handleClick);

function isLetterInWord(cl) {
  let result = false;
  for (let i = 0; i < answer.length; i++) {
    if (cl.textContent === answer[i].toUpperCase()) {
      result = true;
    }
  }
  return result;
}
function showMatchingSpans(spans,cl) {
    for (let i = 0; i < spans.length; i++) {
        let currentSpanEls = spans[i];
        console.log(i);
        if (currentSpanEls.textContent.toUpperCase() === cl.textContent) {
          currentSpanEls.style.visibility = "visible";
        }
      }
}
