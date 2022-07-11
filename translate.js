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

export const translateMorseCode = (englishString) => {
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
