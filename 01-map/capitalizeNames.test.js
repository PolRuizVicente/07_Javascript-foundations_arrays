import {capitalizeMates} from "./capitalizeNames";
import { describe, it, expect } from "vitest";

const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const EMPTY_NAMES_LIST = [];
const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
const MIXED_CAPITALIZED_NAMES = ["jOhN", "JaCoB", "jInGlEhEiMeR", "sChMiDt"];

describe("capitalizeMates", () => {
  it("should capitalize all names in the array", () => {

    // Arrange
    const names = NAMES;
    const expected = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeMates(names);

    // Assert
    expect(result).toEqual(expected);

    });
  it("should handle an empty array", () => {
  
    // Arrange
    const names = EMPTY_NAMES_LIST;
    const expected = [];

    // Act
    const result = capitalizeMates(names);

    // Assert
    expect(result).toEqual(expected);

    });

  it("should handle names that are already capitalized correctly", () => {

    // Arrange
    const names = CAPITALIZED_NAMES;
    const expected = CAPITALIZED_NAMES;
    
    // Act
    const result = capitalizeMates(names);
    
    // Assert
    expect(result).toEqual(expected);

    });

  it("should handle names that are all uppercase", () => {

    // Arrange
    const names = UPPERCASED_NAMES;
    const expected = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeMates(names);

    // Assert
    expect(result).toEqual(expected);

    });

  it("should handle names that are all lowercase", () => {

    // Arrange
    const names = LOWERCASED_NAMES;
    const expected = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeMates(names);

    // Assert
    expect(result).toEqual(expected);

    });

  it("should handle names with mixed casing", () => {
    
    // Arrange
    const names = MIXED_CAPITALIZED_NAMES;
    const expected = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeMates(names);

    // Assert
    expect(result).toEqual(expected);

    });

});
