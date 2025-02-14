import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer"; 
import { describe, it, expect } from "vitest";

const EMPTY_COUNTRIES_ARRAY = [];
const COUNTRIES_WITH_NO_SHORT_NAMES = ["United Kingdom", "Portugal", "Greece"];
const COUNTRIES_WITH_ALL_SHORT_NAMES = ["Italy", "Spain", "Japan"];
const COUNTRIES_WITH_MIXED_LENGTH = [
  "United Kingdom",
  "Italy",
  "France",
  "Portugal",
  "Greece",
];

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  it("should return countries with five characters or fewer", () => {
    
    // Arrange
    const countriesList = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(countriesList);

    // Assert
    expect(result).toEqual(["Italy"]);
  });

  it("should handle an empty array of countries", () => {
    // Arrange
    const countriesList = EMPTY_COUNTRIES_ARRAY;

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(countriesList);

    // Assert
    expect(result).toEqual([]);
  });

  it("should handle an array with no countries having five characters or fewer", () => {
    // Arrange
    const countriesList = COUNTRIES_WITH_NO_SHORT_NAMES;

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(countriesList);

    // Assert
    expect(result).toEqual([]);
  });

  it("should handle an array with all countries having five characters or fewer", () => {
    // Arrange
    const countriesList = COUNTRIES_WITH_ALL_SHORT_NAMES;

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(countriesList);

    // Assert
    expect(result).toEqual(["Italy", "Spain", "Japan"]);
  });
});
