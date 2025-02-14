//Implement same test defined in 00-imperative/getLongWords.test.js
import {getLongWords} from "./getLongWords";
import { describe, it, expect } from "vitest";

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];
const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
const EMPTY_ARRAY = [];
const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];

describe("getLongWords", () => {
    it("should return long words from LANGUAGES array", () => {
        // Arrange
        const words = LANGUAGES;

        // Act
        const result = getLongWords(words);

        // Assert
        expect(result).toEqual(["JavaScript", "TypeScript"]);
    });

    it("should return long words from BEATLES array", () => {
        // Arrange
        const words = BEATLES;

        // Act
        const result = getLongWords(words);

        // Assert
        expect(result).toEqual(["George", "Ringo"]);
    });

    it("should return an empty array if no words are long enough", () => {
        // Arrange
        const words = SHORT_WORDS;

        // Act
        const result = getLongWords(words);

        // Assert
        expect(result).toEqual([]);
    });

    it("should return the same array if all words are long enough", () => {
        // Arrange
        const words = ALL_LONG_WORDS;

        // Act
        const result = getLongWords(words);

        // Assert
        expect(result).toEqual(ALL_LONG_WORDS);
    });

    it("should handle an empty input array", () => {
        // Arrange
        const words = EMPTY_ARRAY;

        // Act
        const result = getLongWords(words);

        // Assert
        expect(result).toEqual([]);
    });

    it("should handle an array with mixed length words", () => {
        // Arrange
        const words = MIXED_LENGTH_WORDS;

        // Act
        const result = getLongWords(words);

        // Assert
        expect(result).toEqual(["short","adequate", "sufficient"]);
    });
});
