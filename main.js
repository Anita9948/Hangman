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

const letterTracker = [];

function gameStart() { 
const genNum = () => Math.floor(Math.random() * randomWord.length);

}





function render() {
  for (let i = 0; i < acbLetters.length; i++) {
    const pickedLetters = document.createElement("div");
    pickedLetters.innerText = acbLetters[i];
    document.getElementById("main-letters").append(pickedLetters);
  }
}
render();
