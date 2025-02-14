import { transformSecondsToWords } from "./transformSecondsToWords";
import { describe, it, expect } from "vitest";

const SECONDS = [2, 5, 100];
const EMPTY_SECONDS_LIST = [];
const SINGLE_SECOND_LIST = [42];
const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];

describe("transformSecondsToWords", () => {
  it("should transform an array of seconds to an array of strings", () => {

    // Arrange
    const expected = ["2", "5", "100"];
    
    // Act
    const actual = transformSecondsToWords(SECONDS);
    
    // Assert
    expect(actual).toEqual(expected);
    });

  it("should handle an empty array", () => {
    
    // Arrange
    const expected = [];
    
    // Act
    const actual = transformSecondsToWords(EMPTY_SECONDS_LIST);
    
    // Assert
    expect(actual).toEqual(expected);
    });

  it("should handle an array with one element", () => {
    
    // Arrange
    const expected = ["42"];
    
    // Act
    const actual = transformSecondsToWords(SINGLE_SECOND_LIST);
    
    // Assert
    expect(actual).toEqual(expected);
    });

  it("should handle an array with zero", () => {
    
    // Arrange
    const expected = ["0"];
    
    // Act
    const actual = transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO);
    
    // Assert
    expect(actual).toEqual(expected);
    });

  it("should handle an array with negative numbers", () => {
    
    // Arrange
    const expected = ["-1", "-60", "-3600"];
    
    // Act
    const actual = transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES);
    
    // Assert
    expect(actual).toEqual(expected);
    });
});
