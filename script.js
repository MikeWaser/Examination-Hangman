// Array med ord som ska slumpas in i continer answer
const wordBank = [
  "javascript",
  "website",
  "game",
  "keyboard",
  "hangman",
  "coding",
];

const randomAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]

let currentWord = []

for (let i = 0 ; i < randomAnswer.length; i++){
currentWord.push("_")
}
document.getElementById("currentWord2").innerHTML = currentWord.join ("")