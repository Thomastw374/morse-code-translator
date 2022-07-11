const englishTextBox = document.querySelector(
  ".translator-container__english-text-box"
);
const morseCodeTextBox = document.querySelector(
  ".translator-container__morse-code-text-box"
);
const translateButton = document.querySelector(
  ".translator-container__translate-button"
);

const morseCodeAlphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

export const translateMorseCode = (event) => {
  englishString = englishTextBox.value.toLowerCase();
  console.log(englishString);
  let morseCodeArr = [];

  for (i = 0; i < englishString.length; i++) {
    if (englishString[i] == ".") {
      morseCodeArr.push(".-.-.-");
    } else if (englishString[i] == ",") {
      morseCodeArr.push("--..--");
    } else if (englishString[i] == "?") {
      morseCodeArr.push("..--..");
    } else {
        morseCodeArr.push(morseCodeAlphabet[englishString[i]]);
    }

    
  }

  morseCodeTextBox.value = morseCodeArr.join(" ");
};

translateButton.addEventListener("click", translateMorseCode);
