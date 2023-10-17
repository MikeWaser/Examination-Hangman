// Timer
let time = 2 * 60; // 5 minuter, omvandlat till sekunder

const timerButton = document.getElementById("StartTimerBtn");
const countdownEl = document.getElementById("countdown");

let CountdownInterval;

// Stänger av useInput tills timern startar
document.getElementById("inputBox").disabled = true;

// Funktion för att starta timer
function startTimer() {
  CountdownInterval = setInterval(updateCountdown, 1000);
  timerButton.disabled = true;
  document.getElementById("inputBox").disabled = false;
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

// Lägger till en nolla innan sekunden när den är < 10
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
    clearInterval(CountdownInterval);

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
/* console.log(randomWord); */

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
const userInputField = document.querySelector(".userInput input");
const currentWordElement = document.getElementById("currentWord");
const wrongLetterElement = document.getElementById("wrongLetter");

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


    //showPath(wrongGuesses.length);
    //if (wrongGuesses.length >= 6) handleGameResult(false);

    
    if (wrongGuesses.length === 1) {
      showPath(1);
    } else if (wrongGuesses.length === 2) {
      showPath(2);
    } else if (wrongGuesses.length === 3) {
      showPath(3);
    } else if (wrongGuesses.length === 4) {
      showPath(4);
    } else if (wrongGuesses.length === 5) {
      showPath(5);
    } else if (wrongGuesses.length >= 6) {
      showPath(6);

      // Visa resultatet för förlust om spealren har gjort för många felaktiga gissningar
      handleGameResult(false);
    }
  }
  userInputField.value = "";
});

// Tar reda på vilken bild som ska skrivas ut beroende på hur många fel man har
function showPath(pathNumber) {
  const selectedPath = document.getElementById(`path${pathNumber}`);
  /* console.log({selectedPath}); */
  selectedPath.style.display = "block";
}

// Funktion för att uppdatera visningen av ordet
function updateCurrentWordDisplay() {

  const displayWord = randomWord
    // .split("") -> "javascript" -> ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
    .split("")
    // .map(char) -> Itererar varje bokstav i ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"] och exekverar det som står i map((char) => // detta)
    .map((char) => (correctGuesses.includes(char.toLowerCase()) ? char : "_"))
    // .join(" ") -> ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"] -> "j a v a s c r i p t"
    .join(" ");
  currentWordElement.textContent = displayWord;

  // "st ri ng".trim() // -> "st ri ng"
  // "     st ri ng    ".trim() // -> "st ri ng"

  // const arr = [1,2,3,4]; // arr.map((number) => number.toString()) -> ["1","2","3","4"]

  const guess = displayWord
    .split("")
    .filter((letter) => letter !== " ")
    .join("")
    .toLowerCase(); // -> "HEJ" -> "hej"

  const actual = randomWord
    .split("")
    .filter((letter) => letter !== " ") // " " -> .trim() -> "" -> false
    .join("")
    .toLowerCase();

  // Om spelaren har gissat hela ordet korrekt
  if (guess === actual) {
    handleGameResult(true);
  }
}

// Funktion för att uppdatera visningen av felaktiga bokstäver
function updateWrongLetterDisplay() {
  wrongLetterElement.textContent = wrongGuesses.join(" ");
}

// Funktion för att visa resultatpopupen
function handleGameResult(gameResult) {
  const input = document.querySelector("input");
  if (input) {
    input.disabled = true;
  }
  const resultPopup = document.getElementById("resultPopup");
  const resultMessage = document.getElementById("resultMessage");
  const newGameButton = document.getElementById("newGame");

  resultPopup.style.display = "flex";

  if (gameResult) {
    resultMessage.innerHTML = "<b>Congratulations!<br>You won!</b>";
    clearInterval(CountdownInterval);
  } else {
    resultMessage.innerHTML = "<b>You lost!</b><br>The correct word was " + randomWord;
    clearInterval(CountdownInterval);
  }

  newGameButton.style.display = "block";
}

// Ladda om sidan för att starta en ny omgång
const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", function () {
  const resultPopup = document.getElementById("resultPopup");
  resultPopup.style.display = "none";
  location.reload(); 
});