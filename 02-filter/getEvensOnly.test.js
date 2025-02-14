import { getEvensOnly } from "./getEvensOnly";
import { describe, it, expect } from "vitest";

const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
const EMPTY_NUMBERS_LIST = [];
const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];

describe("getEvensOnly", () => {
  it("should return only even numbers from the array", () => {
    // Arrange
    const expected = [2, 12, 42, 28];

    // Act
    const result = getEvensOnly(NUMBERS);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should handle an empty array", () => {
    // Arrange
    const numbersList = EMPTY_NUMBERS_LIST;
    const expected = [];

    // Act
    const result = getEvensOnly(numbersList);

    // Assert
    expect(result).toEqual(expected);
});

  it("should handle an array with no even numbers", () => {
    // Arrange
    const numbersList = NUMBERS_LIST_WITHOUT_EVEN_VALUES;
    const expected = [];

    // Act
    const result = getEvensOnly(numbersList);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should handle an array with all even numbers", () => {
    // Arrange
    const numbersList = NUMBERS_LIST_WITH_ALL_EVEN_VALUES;
    const expected = [2, 4, 6, 8, 10];

    // Act
    const result = getEvensOnly(numbersList);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should handle an array with negative even numbers", () => {
    // Arrange
    const numbersList = NUMBERS_LIST_WITH_NEGATIVE_VALUES;
    const expected = [-2, -4, -6, -8, -10];
    
    // Act
    const result = getEvensOnly(numbersList);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should handle an array with mixed positive and negative even numbers", () => {
    // Arrange
    const numbersList = NUMBERS_LIST_WITH_MIXED_VALUES;
    const expected = [4, -6, 8, -10];

    // Act
    const result = getEvensOnly(numbersList);

    // Assert
    expect(result).toEqual(expected);
    });
});
