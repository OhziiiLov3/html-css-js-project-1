/* Word Counter */

/* Purpose: Program collects user input and 
counts the  number of words,letters, and spaces */

/* Functions- Test a group of charaters 
to determine if it is a word */

// 1st function: test input by taking in text as input and determines if it is a word or not
// checks all letters in text using regex to grab every letter.(gi = global search, case-insentitive)

const atLeastTwoChars = (text) => {
  const letter = text.match(/[a-z]/gi) || [];
  return letter.length >= 2;
};

//  2nd function - checks to see if word has three conscective characters to tell us if we have a word
// run a loop to check the number of occurrences from the text input
// filters to check if the length of the array[letter] is greater than 3

const abscenceOfThreeConsecuetiveChars = (text) => {
  for (const char of text) {
    const occurrences = Array.from(text).filter((value) => value === char).length;
    if (occurrences >= 3) {
      return false;
    }
  }
  return true;
};

// Constants
// acts as reference in the array to check true or false
const checks = [atLeastTwoChars, abscenceOfThreeConsecuetiveChars];

// cache elements - to reference and hook-on HTML elements to Javascript
const textInput = document.querySelector(".text-input");
const wordCountEl = document.querySelector(".word-count");
const letterCountEl = document.querySelector(".letter-count");
const spacesCountEl = document.querySelector(".spaces-count");

console.log(textInput);
console.log(wordCountEl);
console.log(letterCountEl);
console.log(spacesCountEl);

//  Event Listener - add event listener "input" to listen when user inputs value in textarea (textInput element).
// define a variable splitted to spilt groups of text in the text body and remove whitespaces
// trim()- removes whitespaces on bothsides of string
// split()- split string on spaces and dashes using regEX

textInput.addEventListener("input", () => {
  //  const trimmedText = textInput.value.trim();

  //   if (trimmedText === '') {
  //     wordCountEl.textContent = '0';
  //     letterCountEl.textContent = '0';
  //     spacesCountEl.textContent = '0';
  //     return;
  //   }

  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spacesCount = (textInput.value.match(/\s+/g) || []).length;
  let wordCount = 0;
  
  outer:
  for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        
       continue outer;
      }
    }
      wordCount++;
  }

  wordCountEl.textContent = wordCount;
  letterCountEl.textContent = letterCount;
  spacesCountEl.textContent = spacesCount;
});
