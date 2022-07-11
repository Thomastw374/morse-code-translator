import { expect, it } from "@jest/globals";
import { translateMorseCode } from "./translate";

it("should translate 'Hello' to '.... . .-.. .-.. ---", () => {
    const result = translateMorseCode("Hello");
    expect(result).toBe(".... . .-.. .-.. ---");
})

it("should alert 'text empty' when english input is empty", () => {
    const result = translateMorseCode("")
    expect(result).toBe("text empty")
})

it("should translate '.,?' to '.-.-.- --..-- ..--..", () => {
  const result = translateMorseCode(".,?");
  expect(result).toBe(".-.-.- --..-- ..--..");
});