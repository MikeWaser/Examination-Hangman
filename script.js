
// en variable för att covered och revealed får samma ord och hämtar inte randomWordsGenerator var för sig.
let getWord = randomWordGenerator();
const underScoreStringOut = coveredLettersWords(getWord);
const seeWords = document.querySelector("#currentWord");
seeWords.innerText = underScoreStringOut;

const guessLetter = document.querySelector("#guessLetter");
const showLetter = document.querySelector("#wrongLetter");

guessLetter.addEventListener("input", function() {
  const inputValue = guessLetter.value;
  showLetter.innerText = inputValue;
  let lastChar = inputValue[inputValue.length-1]
  const underScoreStringOut = coveredLettersWords(getWord);
  const notScoreStringOut = revealingLettersWords(getWord);
  const newString = replaceUnderscoresWithLetter(underScoreStringOut, notScoreStringOut, inputValue);
  console.log(newString);
  const seeWords = document.querySelector("#currentWord");
  seeWords.innerText = newString;
});

// slumpmässigt väljer ett ord från en array.
function randomWordGenerator() {
  const words = ["Volvo", "Saab", "Ford", "Fiat", "Ferrari", "Porsche"];
  const randomWords = words[Math.floor(Math.random()*words.length)];
  return randomWords;
}

// en function för att för att hämta en sträng, ändra alla tecken till understräck och skapa mellanslag mellan varje understräck.
function coveredLettersWords (okok) {
  const coveredWords = okok;
  const splitCoveredWords = coveredWords.split("");
  for (let i = 0; i < splitCoveredWords.length; i++) {
    splitCoveredWords[i] = "_";
  }
  const joinSplitWordsCovered = splitCoveredWords.join(" ");
  return joinSplitWordsCovered;
}

// en function för att för att hämta en sträng och skapa mellanslag mellan varje tecken.
function revealingLettersWords (noknok) {
  const revealedWords = noknok;
  const splitRevealedWords = revealedWords.split("");
  const joinSplitWordsRevealed = splitRevealedWords.join(" ");
  return joinSplitWordsRevealed;
}

function replaceUnderscoresWithLetter(underScoreString, knownWordString, userGuess) {
  const knownString = knownWordString;
  const underscoreIndexes = [];
  
  // Hittar indexet för bokstaven spelaren skriver i det slumpade ordet
  for (let i = 0; i < knownString.length; i++) {
    if (knownString[i] === userGuess) {
      underscoreIndexes.push(i);
    }
  }
  
  // Ersätter understräcket med det skrivna bokstav vid respektive index
  const replacedString = underScoreString.split('').map((char, index) => {
    if (underscoreIndexes.includes(index)) {
      return userGuess;
    } else {
      return char;
    }
  }).join('');
  console.log(underScoreString);
  console.log(knownWordString);
  return replacedString;
}



/****************************************************************************************************/



def print_word(word_to_check, guesses):
    """Check if letters in word, prints words in letter."""
    print("Word: ", end="")
    for letter in word_tocheck:
        if letter in guesses:
            print(letter, end="")
        else:
            print("", end="")
        print(" ", end="")


    """
    let word_to_print = ""
    for (int i; i = 0; i++) {
        if guesses.includes(word_to_check[i])
        word_to_print + word_to_check[0]
        else {
            word_toprint + ""
        }
        word_to_print + " "
    }
    return word_to_print
    """
    print()


    function print_word(word_to_check, guesses) {
      let word_to_print = "";
      console.log("Word: ", end="");
  
      for (let i = 0; i < word_to_check.length; i++) {
          if (guesses.includes(word_to_check[i])) {
              word_to_print += word_to_check[i];
          } else {
              word_to_print += "";
          }
          word_to_print += " ";
      }
  
      console.log(word_to_print);
  }
  