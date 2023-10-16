// Timer
let time = 5 * 60; // 5 minuter, omvandlat till sekunder

const timerButton = document.getElementById("StartTimerBtn"); // Hämtar en knapp med id "StartTimerBtn" från HTML
const countdownEl = document.getElementById("countdown"); // Hämtar ett element med id "countdown" från HTML

let CountdownInterval; // En variabel för att lagra intervallet för nedräkningen

// Stänger av useInput (antagligen en inmatningsruta) tills timern startar
document.getElementById("inputBox").disabled = true;

// Funktion för att starta timer
function startTimer() {
  CountdownInterval = setInterval(updateCountdown, 1000); // Startar ett interval som uppdaterar nedräkningen varje sekund
  timerButton.disabled = true; // Inaktiverar startknappen när timern är igång
  document.getElementById("inputBox").disabled = false; // Aktiverar inmatning när timern startar
}

function updateCountdown() {
  const minutes = Math.floor(time / 60); // Räknar ut hela minuter
  let seconds = time % 60; // Räknar ut antalet sekunder kvar

  // Lägger till en nolla innan sekunden när den är < 10 för att ha formatet "MM:SS"
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Uppdaterar nedräkningen i DOM (Document Object Model)
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--; // Minskar tiden med 1 sekund

  // Kontrollerar om tiden har gått ut
  checkTimeOut();
}

// Funktion för att kontrollera om tiden har gått ut
function checkTimeOut() {
  if (time === -1) {
    clearInterval(CountdownInterval); // Stannar intervallet när tiden är 0

    // Visar resultatet för förlust om tiden har gått ut
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

// Väljer ett slumpmässigt ord från words listan
const randomWord = words[Math.floor(Math.random() * words.length)]; // Slumpmässigt ordval från arrayen
console.log(randomWord);

// Splittar det slumpmässiga ordet till en array av bokstäver
const splitWord = randomWord.split("");

// Skapar en array med underscores (_), en för varje bokstav i det slumpmässiga ordet
for (let i = 0; i < splitWord.length; i++) {
  splitWord[i] = "_";
}

// Slår ihop arrayen med underscores till en sträng med mellanslag och visar den på webbsidan
const joinSplitWord = splitWord.join(" ");
const seeWords = document.querySelector("#currentWord");
seeWords.innerText = joinSplitWord;

// Hämtar elementen från HTML
const userInputField = document.querySelector(".userInput input"); // Hämtar en inmatningsruta
const currentWordElement = document.getElementById("currentWord"); // Hämtar ett element med id "currentWord"
const wrongLetterElement = document.getElementById("wrongLetter"); // Hämtar ett element med id "wrongLetter"

// Sparar spelarens gissningar
const correctGuesses = []; // Array för korrekta gissningar
const wrongGuesses = []; // Array för felaktiga gissningar

// Lyssnar på input
userInputField.addEventListener("input", function () {
  const userInput = userInputField.value.toLowerCase(); // Hämtar inmatningen och konverterar den till gemener

  // Kontrollerar att input endast innehåller bokstäver, inte siffror/specialtecken
  if (!userInput.match(/^[a-z]+$/i)) {
    console.log("Felaktig inmatning. Ange endast bokstäver.");
    userInputField.value = ""; // Återställer inmatningsrutan om felaktig inmatning
    return;
  }

  // Skickar bokstaven till updateCurrentWordDisplay om den stämmer
  if (
    randomWord.toLowerCase().includes(userInput) && // Kontrollerar om den inmatade bokstaven finns i det slumpmässiga ordet
    !correctGuesses.includes(userInput) // Kontrollerar att bokstaven inte redan har gissats korrekt
  ) {
    correctGuesses.push(userInput); // Lägger till korrekt gissning i listan
    updateCurrentWordDisplay(); // Uppdaterar visningen av det aktuella ordet
    userInputField.value = ""; // Återställer inmatningsrutan
    return;
  }

  // Kollar om bokstaven som spelaren gissar på redan finns i korrekt gissningslista eller felaktiga gissningslista
  if (correctGuesses.includes(userInput) || wrongGuesses.includes(userInput)) {
    console.log("Du har redan gissat på den här bokstaven.");
    userInputField.value = ""; // Återställer inmatningsrutan
    return;
  }

  // Uppdaterar rutan med felaktiga gissningar och lägger till SVG-delarna för varje fel spelaren har
  if (!wrongGuesses.includes(userInput)) {
    wrongGuesses.push(userInput); // Lägger till felaktig gissning i listan
    updateWrongLetterDisplay(); // Uppdaterar visningen av felaktiga gissningar

    //Gör samma sak som rad 131 - 146
    /*showPath(wrongGuesses.length);
    if (wrongGuesses.length >= 6) handleGameResult(false);*/

    // Visa olika delar av "hänga gubbe" grafiken beroende på antalet felaktiga gissningar
    if (wrongGuesses.length === 1) {
      showPath(1); // Visar första delen av "hänga gubbe"
    } else if (wrongGuesses.length === 2) {
      showPath(2); // Visar andra delen
    } else if (wrongGuesses.length === 3) {
      showPath(3); // Visar tredje delen
    } else if (wrongGuesses.length === 4) {
      showPath(4); // Visar fjärde delen
    } else if (wrongGuesses.length === 5) {
      showPath(5); // Visar femte delen
    } else if (wrongGuesses.length >= 6) {
      showPath(6); // Visar den sista delen av "hänga gubbe"

      // Visa resultatet för förlust om spelaren har gjort för många felaktiga gissningar
      handleGameResult(false);
    }
  }
  userInputField.value = ""; // Återställer inmatningsrutan
});

// Tar reda på vilken bild som ska skrivas ut beroende på hur många fel man har
function showPath(pathNumber) {
  const selectedPath = document.getElementById(`path${pathNumber}`); // Hämtar elementet med det aktuella id:et
  selectedPath.style.display = "block"; // Visar den valda "hänga gubbe" delen
}

// Funktion för att uppdatera visningen av ordet
function updateCurrentWordDisplay() {
  const displayWord = randomWord
    .split("")
    .map((char) => (correctGuesses.includes(char.toLowerCase()) ? char : "_"))
    .join(" ");
  currentWordElement.textContent = displayWord; // Uppdaterar visningen av det aktuella ordet

  // Om spelaren har gissat hela ordet korrekt
  if (displayWord === randomWord.toLowerCase()) {
    handleGameResult(true); // Visa resultatet för vinst
  }
}

// Funktion för att uppdatera visningen av felaktiga bokstäver
function updateWrongLetterDisplay() {
  wrongLetterElement.textContent = wrongGuesses.join(" "); // Visar de felaktiga gissningarna
}

// Funktion för att visa resultatpopupen
function handleGameResult(gameResult) {
  const input = document.querySelector("input"); // Hämtar inmatningsrutan
  if (input) {
    input.disabled = true; // Inaktiverar inmatningsrutan
  }
  const resultPopup = document.getElementById("resultPopup"); // Hämtar resultatpopupen
  const resultMessage = document.getElementById("resultMessage"); // Hämtar meddelande-elementet i popupen
  const newGameButton = document.getElementById("newGame"); // Hämtar knappen för att starta en ny omgång

  resultPopup.style.display = "flex"; // Visar resultatpopupen

  if (gameResult) {
    resultMessage.innerHTML = "<b>Du vann!</b>"; // Visar vinstmeddelande
    clearInterval(CountdownInterval); // Stannar timern
  } else {
    resultMessage.innerHTML = "<b>Du förlorade!</b><br>Rätt ord var: " + randomWord; // Visar förlustmeddelande med det korrekta ordet
    clearInterval(CountdownInterval); // Stannar timern
  }

  newGameButton.style.display = "block"; // Visar knappen för att starta en ny omgång
}

// Ladda om sidan för att starta en ny omgång
const newGameButton = document.getElementById("newGame"); // Hämtar knappen för ny omgång
newGameButton.addEventListener("click", function () {
  const resultPopup = document.getElementById("resultPopup"); // Hämtar resultatpopupen
  resultPopup.style.display = "none"; // Döljer resultatpopupen
  location.reload(); // Laddar om sidan för att starta en ny omgång
});