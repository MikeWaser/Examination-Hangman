// slumpmässigt väljer ett ord från en array.
function randomWordGenerator() {
  const words = ["Volvo", "Saab", "Ford", "Fiat", "Ferrari", "Porsche"];
  const randomWords = words[Math.floor(Math.random()*words.length)];
  return randomWords;
}

// en variable för att covered och revealed får samma ord och hämtar inte randomWordsGenerator var för sig.
let getWord = randomWordGenerator();

// en function för att för att hämta en sträng, ändra alla tecken till understräck och skapa mellanslag mellan varje understräck.
function coveredLettersWords (okok) {
  const splitWordsCovered = okok;
  const splitWords = splitWordsCovered.split("");
  for (let i = 0; i < splitWords.length; i++) {
    splitWords[i] = "_";
  }
  const joinSplitWordsCovered = splitWords.join(" ");
  return joinSplitWordsCovered;
}

// en function för att för att hämta en sträng och skapa mellanslag mellan varje tecken.
function revealingLettersWords (noknok) {
  const splitWordsRevealed = (noknok);
  const splitWords = splitWordsRevealed.split("");
  const joinSplitWordsRevealed = splitWords.join(" ");
  return joinSplitWordsRevealed;
}

const seeWords = document.querySelector("#currentWord");
seeWords.innerText = coveredLettersWords(getWord);

// splitWords.splice(0, 1, "_");


let guessLetter = document.querySelector("#guessLetter")
let showLetter = document.querySelector("#wrongLetter")

guessLetter.addEventListener("input", () => { // (guessLetter elr inputValue == randomWordGenerator.includes "maybe")
  let inputValue = guessLetter.value;
  showLetter.innerText = inputValue;
});


/***************************************************************************************************************************************************/
/***************************************************************************************************************************************************/
/***************************************************************************************************************************************************/
// Alla console.logs
console.log(revealingLettersWords(getWord));
console.log(coveredLettersWords(getWord));


/*

function () {
  if (input == randomWordGenerator.includes) {
    True (reveal letter)
  } else {
    False (add svg path)
  }
}

*/

/* if sats som gör en .includes() koll med nån loop från "Guess Letter". TRUE: .IndexOf() för det korrekt gissade blir replaced med ordinarie bokstav (med .splice() kanske), FALSE: returnar att du gissade fel och tar ett steg i listan/arrayen för SVG filen och emot failstate. */


// funktion som kollar words lista och guesses lista 

