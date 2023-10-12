function randomWordGenerator() {
  const words = ["Volvo", "Saab", "Ford", "Fiat", "Ferrari", "Porsche"];
  const randomWords = words[Math.floor(Math.random()*words.length)];
  return randomWords;
}
let getWord = randomWordGenerator();
function coveredLettersWords (okok) {
  const splitWordsCovered = okok;
  const splitWords = splitWordsCovered.split("");
  for (let i = 0; i < splitWords.length; i++) {
    splitWords[i] = "_";
  }
  const joinSplitWordsCovered = splitWords.join(" ");
  return joinSplitWordsCovered;
}
function revealingLettersWords (noknok) {
  const splitWordsRevealed = (noknok);
  const splitWords = splitWordsRevealed.split("");
  const joinSplitWordsRevealed = splitWords.join(" ");
  return joinSplitWordsRevealed;
}
console.log(coveredLettersWords(getWord));
console.log(revealingLettersWords(getWord));



// splitWords.splice(0, 1, "_");

const seeWords = document.querySelector("#currentWord");

seeWords.innerText = randomWordGenerator();

let guessLetter = document.querySelector("#guessLetter")
let showLetter = document.querySelector("#wrongLetter")
guessLetter.addEventListener("input", () => { // (guessLetter elr inputValue == randomWordGenerator.includes "maybe")
  let inputValue = guessLetter.value;
  showLetter.innerText = inputValue;
});

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



/*********************************************************************************************/
/*********************************************************************************************/
/*********************************************************************************************/




// function randomWordGenerator() {
//   const words = ["Volvo", "Saab", "Ford", "Fiat", "Ferrari", "Porsche"];
//   const randomWords = words[Math.floor(Math.random()*words.length)];
//   // const splitWords = randomWords.split("");
//   return randomWords;
// }
// let getWord = randomWordGenerator();
// console.log(getWord);
// console.log(typeof getWord);

// function coveredLettersWords (okok) {
//  /*  const splitWordsCovered = okok;
//   let result = splitWordsCovered.split("");
//   console.log(result);
//   let result2 = result.join("_")
//   console.log("kalle",result2)

// return result2; */
// const my_string = okok

// let pattern = my_string
// let replacement = "_";

// let my_new_string = my_string.replaceAll(pattern,replacement);

// console.log(my_new_string);

// }

// function revealingLettersWords (noknok) {
//   const splitWordsRevealed = (noknok);
//   // const joinSplitWordsRevealed = splitWordsRevealed.join(" ");
//   return splitWordsRevealed;
// }

// console.log(coveredLettersWords(getWord));
// console.log(revealingLettersWords(getWord));

// /* {
//   const splitWordsCovered = splitWords();
  
  
  
// } */

// // splitWords.splice(0, 1, "_");

// const seeWords = document.querySelector("#currentWord");

// seeWords.innerText = randomWordGenerator();

// let guessLetter = document.querySelector("#guessLetter")
// let showLetter = document.querySelector("#wrongLetter")
// guessLetter.addEventListener("input", () => { // (guessLetter elr inputValue == randomWordGenerator.includes "maybe")
//   let inputValue = guessLetter.value;
//   showLetter.innerText = inputValue;
// });

// /*

// function () {
//   if (input == randomWordGenerator.includes) {
//     True (reveal letter)
//   } else {
//     False (add svg path)
//   }
// }

// */

// /* if sats som gör en .includes() koll med nån loop från "Guess Letter". TRUE: .IndexOf() för det korrekt gissade blir replaced med ordinarie bokstav (med .splice() kanske), FALSE: returnar att du gissade fel och tar ett steg i listan/arrayen för SVG filen och emot failstate. */


// // funktion som kollar words lista och guesses lista 