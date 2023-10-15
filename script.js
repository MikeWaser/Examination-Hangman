// En array med ord
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

// Välj ett slumpmässigt ord från words listan
const randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

// Splitta det slumpmässiga ordet till en array av bokstäver
const splitWord = randomWord.split("");

// Skapa en array med underscores (_), en för varje bokstav i det slumpmässiga ordet
for (let i = 0; i < splitWord.length; i++) {
  splitWord[i] = "_";
}

// Slå ihop arrayen med underscores till en sträng med mellanslag och visa den på webbsidan
const joinSplitWord = splitWord.join(" ");
const seeWords = document.querySelector("#currentWord");
seeWords.innerText = joinSplitWord;


const correctGuesses = [];  // Array för korrekta gissningar
const wrongGuesses = [];    // Array för felaktiga gissningar

// Hämta elementen från HTML
const userInputField = document.querySelector(".userInput input");
const currentWordElement = document.getElementById("currentWord");
const wrongLetterElement = document.getElementById("wrongLetter");


// Timer
let time = 5 * 60; // 5 minuter, omvandlat till sekunder

const knapp = document.getElementById("StartTimerBtn");
const countdownEl = document.getElementById("countdown");

let CountdownInterval;

// Funktion för att starta timer
function startTimer() {
  CountdownInterval = setInterval(updateCountdown, 1000);

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
    handleGameResult(false);
  }
}

// Lyssna på input
userInputField.addEventListener("input", function () {
  const userInput = userInputField.value.toLowerCase();

  // Kontrollera att input endast innehåller bokstäver, inte siffror/specialtecken
  

  if (!userInput.match(/^[a-z]+$/i)) {
    console.log("Felaktig inmatning. Ange endast bokstäver.");
    userInputField.value = "";
    return;
  }

  if (randomWord.toLowerCase().includes(userInput) && !correctGuesses.includes(userInput)) {
    correctGuesses.push(userInput);
    updateCurrentWordDisplay();
    userInputField.value = "";
    return;
  }

  if (!wrongGuesses.includes(userInput)) {
    wrongGuesses.push(userInput);
    updateWrongLetterDisplay();
    if (wrongGuesses.length >= 6) {
      // Visa resultatet för förlust om spealren har gjort för många felaktiga gissningar
      handleGameResult(false);
    }
  }
  userInputField.value = "";
});

// Funktion för att uppdatera visningen av ordet
function updateCurrentWordDisplay() {
  const displayWord = randomWord
    .split("")
    .map((char) => (correctGuesses.includes(char.toLowerCase()) ? char : "_"))
    .join(" ");
  currentWordElement.textContent = displayWord;

  // DET HÄR ÄR ÄNDRAT
  const guess = displayWord.split('').filter(letter => letter.trim()).join('').toLowerCase();
  const actual = randomWord.split('').filter(letter => letter.trim()).join('').toLowerCase();

  // Kolla om användaren har gissat hela ordet korrekt
  if (guess === actual) {
    // Kod när spelaren har gissat hela ordet korrekt.
    // DET HÄR ÄR ÄNDRAT
    handleGameResult(true);
  }
}

// Funktion för att uppdatera visningen av felaktiga bokstäver
function updateWrongLetterDisplay() {
  wrongLetterElement.textContent = wrongGuesses.join(" ");
}

// Funktion för att visa en del av Hangman
function showHangmanPart(partNumber) {
  // Hämta delen från SVG 
}

// Funktion för att visa resultatpopupen
// DET HÄR ÄR ÄNDRAT
function handleGameResult(gameResult) {
  // DET HÄR ÄR ÄNDRAT
  const input = document.querySelector('input');
  if (input) {
    input.disabled = true;
  }
  const resultPopup = document.getElementById("resultPopup");
  const resultMessage = document.getElementById("resultMessage");
  const newGameButton = document.getElementById("newGame");

  resultPopup.style.display = "block";

  if (gameResult) {
    resultMessage.textContent = "Du vann!";
  } else {
    resultMessage.innerHTML = "Du förlorade!<br>Rätt ord var: " + randomWord;
  }

  newGameButton.style.display = "block";
}

const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", function () {
  const resultPopup = document.getElementById("resultPopup");
  resultPopup.style.display = "none";
  location.reload(); // Ladda om sidan för att starta en ny omgång
});
