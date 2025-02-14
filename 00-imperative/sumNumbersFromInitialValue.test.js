import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";
import { describe, it, expect } from "vitest";

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe("sumNumbersFromInitialValue", () => {
    it("should return the correct sum with initial value 0", () => {
        // Arrange
        const numbersList = POSITIVE_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsZero;
        const expectedSum = 15;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });

    it("should return the correct sum with initial value 10", () => {
        // Arrange
        const numbersList = POSITIVE_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsTen;
        const expectedSum = 25;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });

    it("should return the initial value if the list is empty", () => {
        // Arrange
        const numbersList = EMPTY_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsZero;
        const expectedSum = initialAccumulatedValueAsZero;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });

    it("should handle negative numbers in the list", () => {
        // Arrange
        const numbersList = NEGATIVE_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsZero;
        const expectedSum = -15;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });

    it("should handle a mix of positive and negative numbers", () => {
        // Arrange
        const numbersList = MIXED_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsZero;
        const expectedSum = 3;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });

    it("should handle an initial value of 0", () => {
        // Arrange
        const numbersList = POSITIVE_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsZero;
        const expectedSum = 15;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });

    it("should handle an initial value of 100", () => {
        // Arrange
        const numbersList = POSITIVE_NUMBERS_LIST;
        const initialValue = initialAccumulatedValueAsOneHundred;
        const expectedSum = 115;

        // Act
        const result = sumNumbersFromInitialValue(numbersList, initialValue);

        // Assert
        expect(result).toBe(expectedSum);
    });
});
