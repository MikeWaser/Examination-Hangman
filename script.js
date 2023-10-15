// En array med ord som kan användas som målord i hangman-spelet
const words = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Python",
  "Node.js",
  "API",
  "Git",
  "SQL",
  "Database",
  "Variable",
  "Function",
  "Algorithm",
  "IDE",
  "DOM",
  "Boolean",
  "Callback",
  "Debugging",
  "Framework",
  "Syntax",
];

// Välj ett slumpmässigt ord från listan
const randomTerm = words[Math.floor(Math.random() * words.length)];

// Splitta det slumpmässiga ordet till en array av bokstäver
const splitTerm = randomTerm.split("");

// Skapa en kopia av det slumpmässiga ordet för konsolen
const consoleSplitTerm = randomTerm.split("");

// Slå ihop det kopiade ordet till en sträng för att visa i konsolen
const consoleJoinSplitTerm = consoleSplitTerm.join("");

// Visa den splittrade versionen av det slumpmässiga ordet i konsolen
console.log(consoleSplitTerm);

// Visa den joinade versionen av det splittrade ordet i konsolen
console.log(consoleJoinSplitTerm);

// Skapa en array med underscores (_), en för varje bokstav i det slumpmässiga ordet
for (let i = 0; i < splitTerm.length; i++) {
  splitTerm[i] = "_";
}

// Slå ihop arrayen med underscores till en sträng med mellanslag och visa den på webbsidan
const joinSplitTerm = splitTerm.join(" ");
const seeWords = document.querySelector("#currentWord");
seeWords.innerText = joinSplitTerm;

// Timer-kod
const correctGuesses = [];  // Array för korrekta gissningar
const wrongGuesses = [];    // Array för felaktiga gissningar

// Hämta elementen från HTML
const userInputField = document.querySelector(".userInput input");
const currentWordElement = document.getElementById("currentWord");
const wrongLetterElement = document.getElementById("wrongLetter");

let time = 5 * 60; // 5 minuter, omvandlat till sekunder

const knapp = document.getElementById("StartTimerBtn");
const countdownEl = document.getElementById("countdown");

let CountdownInterval;

// Funktion för att starta timer
function startTimer() {
  CountdownInterval = setInterval(updateCountdown, 10);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    knapp.disabled = true;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Uppdatera nedräkningen i DOM
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    // Kontrollera om tiden har gått ut
    checkTimeOut();
  }
}

// Funktion för att kontrollera om tiden har gått ut
function checkTimeOut() {
  if (time === -1) {
    clearInterval(CountdownInterval);
    // Visa resultatet för förlust om tiden har gått ut
    handleLossResult(false);
  }
}

// Lyssna på användarinput
userInputField.addEventListener("input", function () {
  const userInput = userInputField.value.toLowerCase();

  // Kontrollera att input endast innehåller bokstäver, inte siffror eller specialtecken
  if (userInput.match(/^[a-z]+$/i)) {
    if (userInput.length === 1) {
      if (randomTerm.toLowerCase().includes(userInput)) {
        if (!correctGuesses.includes(userInput)) {
          correctGuesses.push(userInput);
          updateCurrentWordDisplay();
        }
      } else {
        if (!wrongGuesses.includes(userInput)) {
          wrongGuesses.push(userInput);
          updateWrongLetterDisplay();
          if (wrongGuesses.length >= 6) {
            // Visa resultatet för förlust om användaren har gjort för många felaktiga gissningar
            handleLossResult(false);
          }
        }
      }
      userInputField.value = "";
    }
  } else {
    // Felaktig inmatning (siffror eller specialtecken)
    // Här kan du lägga till kod för att hantera felaktig inmatning
    console.log("Felaktig inmatning. Ange endast bokstäver.");
    userInputField.value = "";
  }
});

// Funktion för att uppdatera visningen av det aktuella ordet
function updateCurrentWordDisplay() {
  const displayWord = randomTerm
    .split("")
    .map((char) => (correctGuesses.includes(char.toLowerCase()) ? char : "_"))
    .join(" ");
  currentWordElement.textContent = displayWord;

  // Kolla om användaren har gissat hela ordet korrekt
  if (displayWord.toLowerCase() === randomTerm.toLowerCase()) {
    // Här kan du lägga till kod för att hantera när användaren har gissat hela ordet korrekt.
  }
}

// Funktion för att uppdatera visningen av felaktiga bokstäver
function updateWrongLetterDisplay() {
  wrongLetterElement.textContent = wrongGuesses.join(" ");
}

// Funktion för att visa en del av Hangman
function showHangmanPart(partNumber) {
  // Hämta delen från SVG eller använd annan metod för att visa Hangman
  // Implementera din egen logik här
}

// Funktion för att visa resultatpopupen
function handleLossResult(isWinner) {
  const resultPopup = document.getElementById("resultPopup");
  const resultMessage = document.getElementById("resultMessage");
  const newGameButton = document.getElementById("newGame");

  resultPopup.style.display = "block";

  if (isWinner) {
    resultMessage.textContent = "Du vann!";
  } else {
    resultMessage.innerHTML = "Du förlorade!<br>Rätt ord var: " + randomTerm;
  }

  newGameButton.style.display = "block";
}

// Lyssna på klick på knappen för att starta en ny omgång
const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", function () {
  const resultPopup = document.getElementById("resultPopup");
  resultPopup.style.display = "none";
  location.reload(); // Ladda om sidan för att starta en ny omgång
});
