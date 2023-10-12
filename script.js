// getElementByClass

const words = ["Volvo", "Saab", "Ford", "Fiat", "Ferrari", "Porsche"];
const randomWords = words[Math.floor(Math.random() * words.length)];
const splitWords = randomWords.split("");
const consoleSplitWords = randomWords.split("");
const consoleJoinSplitWords = consoleSplitWords.join("");
console.log(consoleSplitWords);
console.log(consoleJoinSplitWords);

for (let i = 0; i < splitWords.length; i++) {
  splitWords[i] = "_";
}

const joinSplitWords = splitWords.join(" ");

// const howMany = splitWords.length("");
// console.log(howMany);
// splitWords.splice(0, 1, "_");

const seeWords = document.querySelector("#currentWord");

seeWords.innerText = joinSplitWords;