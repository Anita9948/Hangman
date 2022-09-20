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

function render() {
  for (let i = 0; i < acbLetters.length; i++) {
    const pickedLetters = document.createElement("div");
    pickedLetters.innerText = acbLetters[i];
    document.getElementById("main-letters").append(pickedLetters);
  }
}
render();
document
  .getElementById("main-letters")
  .addEventListener("click", (e) => console.log(e.target));
