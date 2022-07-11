import { expect, it } from "@jest/globals";
import { translateMorseCode } from "./script";

it("should translate 'Hello' to '.... . .-.. .-.. ---", () => {
    const result = translateMorseCode("Hello");
    expect(result).toBe(".... . .-.. .-.. ---");
})

// it("should alert 'text empty' when english input is empty", () => {
//     const result = translateMorseCode("")
//     expect(result).toBe("")
// })