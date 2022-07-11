const englishTextBox = document.querySelector(
  ".main__english-text-box"
);
const morseCodeTextBox = document.querySelector(
  ".main__morse-code-text-box"
);
const translateButton = document.querySelector(
  ".main__translate-button"
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

const translateMorseCode = (englishString) => {
  let morseCodeArr = [];
  for (let i = 0; i < englishString.length; i++) {
    if (englishString[i] == ".") {
      morseCodeArr.push(".-.-.-");
    } else if (englishString[i] == ",") {
      morseCodeArr.push("--..--");
    } else if (englishString[i] == "?") {
      morseCodeArr.push("..--..");
    } else {
      morseCodeArr.push(morseCodeAlphabet[englishString[i].toLowerCase()]);
    }
  }

  return morseCodeArr.join(" ");
};


const handleTranslate = (event) => {
  englishString = englishTextBox.value.toLowerCase();
  console.log(englishString);
  morseCodeTextBox.value = translateMorseCode(englishString);
};

translateButton.addEventListener("click", handleTranslate);
