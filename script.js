// Timer
let time = 5 * 60; // 5 minuter, omvandlat till sekunder

const timerButton = document.getElementById("StartTimerBtn"); // Hämta knappen för att starta timern från DOM
const countdownEl = document.getElementById("countdown"); // Hämta elementet som visar nedräkningen från DOM

let CountdownInterval; // En variabel för att hålla koll på intervallet som uppdaterar nedräkningen

// Stänger av input-fältet tills timern startar
document.getElementById("inputBox").disabled = true;

// Funktion för att starta timer
function startTimer() {
  CountdownInterval = setInterval(updateCountdown, 1000); // Starta en uppdateringsfunktion varje sekund
  timerButton.disabled = true; // Inaktivera startknappen när timern är igång
  document.getElementById("inputBox").disabled = false; // Aktivera input-fältet när timern startar
}

function updateCountdown() {
  const minutes = Math.floor(time / 60); // Beräkna minuter från kvarvarande sekunder
  let seconds = time % 60; // Beräkna sekunder från kvarvarande sekunder

  // Lägger till en nolla framför sekunder när de är mindre än 10
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Uppdatera nedräkningen i DOM
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  // Kontrollera om tiden har gått ut
  checkTimeOut();
}

// Funktion för att kontrollera om tiden har gått ut
function checkTimeOut() {
  if (time === -1) {
    clearInterval(CountdownInterval); // Stoppa uppdateringsintervallet

    // Visa resultatet för förlust om tiden har gått ut
    handleGameResult(false);
  }
}

// En array med ord
const words = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Python",
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

// Hämta elementen från HTML
const userInputField = document.querySelector(".userInput input"); // Här hämtar vi input-fältet där spelaren gissar ordet
const currentWordElement = document.getElementById("currentWord"); // Här hämtar vi elementet som visar det aktuella ordet
const wrongLetterElement = document.getElementById("wrongLetter"); // Här hämtar vi elementet som visar felaktiga gissningar

// Sparar spelarens gissningar
const correctGuesses = []; // Array för korrekta gissningar
const wrongGuesses = []; // Array för felaktiga gissningar

// Lyssna på input
userInputField.addEventListener("input", function () {
  const userInput = userInputField.value.toLowerCase();

  // Kontrollera att input endast innehåller bokstäver, inte siffror/specialtecken
  if (!userInput.match(/^[a-z]+$/i)) {
    console.log("Felaktig inmatning. Ange endast bokstäver.");
    userInputField.value = "";
    return;
  }

  // Skickar bokstaven till updateCurrentWordDisplay om den stämmer
  if (
    randomWord.toLowerCase().includes(userInput) &&
    !correctGuesses.includes(userInput)
  ) {
    correctGuesses.push(userInput);
    updateCurrentWordDisplay();
    userInputField.value = "";
    return;
  }

  // Kollar ifall bokstaven spelaren gissar finns med i correctGuesses arrayn
  if (correctGuesses.includes(userInput) || wrongGuesses.includes(userInput)) {
    console.log("Du har redan gissat på den här bokstaven.");
    userInputField.value = "";
    return;
  }

  // Uppdaterar rutan med felaktiga gissningar och lägger till SVG delarna för varje fel spelaren har
  if (!wrongGuesses.includes(userInput)) {
    wrongGuesses.push(userInput);
    updateWrongLetterDisplay();

    //Gör samma sak som rad 131-147
    //showPath(wrongGuesses.length);
    //if (wrongGuesses.length >= 6) handleGameResult(false);

    if (wrongGuesses.length === 1) {
      showPath(1); // Visa första delen av "hangman" om spelaren gör ett fel
    } else if (wrongGuesses.length === 2) {
      showPath(2); // Visa andra delen av "hangman" om spelaren gör ytterligare ett fel
    } else if (wrongGuesses.length === 3) {
      showPath(3); // Visa tredje delen av "hangman" om spelaren gör ett tredje fel
    } else if (wrongGuesses.length === 4) {
      showPath(4); // Visa fjärde delen av "hangman" om spelaren gör ett fjärde fel
    } else if (wrongGuesses.length === 5) {
      showPath(5); // Visa femte delen av "hangman" om spelaren gör ett femte fel
    } else if (wrongGuesses.length >= 6) {
      showPath(6); // Visa sista delen av "hangman" om spelaren gör för många fel

      // Visa resultatet för förlust om spelaren har gjort för många felaktiga gissningar
      handleGameResult(false);
    }
  }
  userInputField.value = "";
});

// Tar reda på vilken bild som ska skrivas ut beroende på hur många fel man har
function showPath(pathNumber) {
  const selectedPath = document.getElementById(`path${pathNumber}`);
  selectedPath.style.display = "block";
}

// Funktion för att uppdatera visningen av ordet
function updateCurrentWordDisplay() {
  const displayWord = randomWord
    .split("")
    .map((char) => (correctGuesses.includes(char.toLowerCase()) ? char : "_"))
    .join(" ");
  currentWordElement.textContent = displayWord;

  const guess = displayWord
    .split("")
    .filter((letter) => letter.trim())
    .join("")
    .toLowerCase();
  const actual = randomWord
    .split("")
    .filter((letter) => letter.trim())
    .join("")
    .toLowerCase();

  // Om spelaren har gissat hela ordet korrekt
  if (guess === actual) {
    handleGameResult(true); // Visa resultatet för vinst om spelaren har gissat hela ordet korrekt
  }
}

// Funktion för att uppdatera visningen av felaktiga bokstäver
function updateWrongLetterDisplay() {
  wrongLetterElement.textContent = wrongGuesses.join(" "); // Visa de felaktiga gissningarna
}

// Funktion för att visa resultatpopupen
function handleGameResult(gameResult) {
  const input = document.querySelector("input");
  if (input) {
    input.disabled = true; // Inaktivera input-fältet när spelet är över
  }
  const resultPopup = document.getElementById("resultPopup"); // Hämta resultatpopupen från DOM
  const resultMessage = document.getElementById("resultMessage"); // Hämta elementet som visar resultatmeddelandet från DOM
  const newGameButton = document.getElementById("newGame"); // Hämta knappen för att starta ett nytt spel från DOM

  resultPopup.style.display = "flex"; // Visa resultatpopupen

  if (gameResult) {
    resultMessage.innerHTML = "<b>Du vann!</b>"; // Visa meddelande om vinst
    clearInterval(CountdownInterval); // Stoppa timerintervallet när spelet är över
  } else {
    resultMessage.innerHTML = "<b>Du förlorade!</b><br>Rätt ord var: " + randomWord; // Visa meddelande om förlust och det rätta ordet
    clearInterval(CountdownInterval); // Stoppa timerintervallet när spelet är över
  }

  newGameButton.style.display = "block"; // Visa knappen för att starta ett nytt spel
}

// Ladda om sidan för att starta en ny omgång
const newGameButton = document.getElementById("newGame"); // Hämta knappen för att starta ett nytt spel från DOM
newGameButton.addEventListener("click", function () {
  const resultPopup = document.getElementById("resultPopup"); // Hämta resultatpopupen från DOM
  resultPopup.style.display = "none"; // Dölj resultatpopupen
  location.reload(); // Ladda om sidan för att starta ett nytt spel
});
