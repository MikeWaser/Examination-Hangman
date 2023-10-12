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

//Timer code /Hampus

const startingMinutes = 5;
let time = startingMinutes * 60;
const knapp = document.getElementById("StartTimerBtn");
const countdownEl = document.getElementById("countdown");

let CountdownInterval;

function startTimer() {
  CountdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    knapp.disabled = true;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time === -1) {
      clearInterval(CountdownInterval);
    }
  }
}
