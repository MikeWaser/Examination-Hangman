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
const randomTerm = words[Math.floor(Math.random() * words.length)];
const splitTerm = randomTerm.split("");
const consoleSplitTerm = randomTerm.split("");
const consoleJoinSplitTerm = consoleSplitTerm.join("");
console.log(consoleSplitTerm);
console.log(consoleJoinSplitTerm);

for (let i = 0; i < splitTerm.length; i++) {
  splitTerm[i] = "_";
}

const joinSplitTerm = splitTerm.join(" ");

const seeWords = document.querySelector("#currentWord");

seeWords.innerText = joinSplitTerm;

// Timer code /Hampus

const correctGuesses = [];
const wrongGuesses = [];

const userInputField = document.querySelector(".userInput input");
const currentWordElement = document.getElementById("currentWord");
const wrongLetterElement = document.getElementById("wrongLetter");

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
            // Anropa funktionen för att visa förlustresultat
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

function updateCurrentWordDisplay() {
  const displayWord = randomTerm
    .split("")
    .map((char) => (correctGuesses.includes(char.toLowerCase()) ? char : "_"))
    .join(" ");
  currentWordElement.textContent = displayWord;

  // Kolla om användaren har gissat hela ordet
  if (displayWord.toLowerCase() === randomTerm.toLowerCase()) {
    // Här kan du lägga till kod för att hantera när användaren har gissat hela ordet korrekt.
  }
}

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

  // Visa resultatpopupen
  resultPopup.style.display = "block";

  // Uppdatera resultatmeddelandet
  if (isWinner) {
    resultMessage.textContent = "Du vann!";
  } else {
    resultMessage.innerHTML = "Du förlorade!<br>Rätt ord var: " + randomTerm;
  }

  // Visa knappen för att starta ett nytt spel
  newGameButton.style.display = "block";
}

// Lägg till en händelselyssnare för att starta ett nytt spel när knappen klickas
const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", function () {
  // Dölj resultatpopupen
  const resultPopup = document.getElementById("resultPopup");
  resultPopup.style.display = "none";

  // Återställ spelet, t.ex., genom att ladda om sidan
  location.reload();
});
