import { describe, it, expect } from "vitest";
import {extractVipsNames} from "./extractVipsNames";


const EMPTY_VIPS_LIST = [];

const SINGLE_VIP_LIST = [{ name: "Foo", age: 80 }];

const VIPS = [
  { name: "Foo", age: 80 },
  { name: "Bar", age: 2 },
  { name: "Fizz", age: 5 },
  { name: "Buzz", age: 16 },
  { name: "FizzBuzz", age: 100 },
];

const VIPS_WITH_DIFFERENT_AGES = [
  { name: "Foo", age: 80 },
  { name: "Bar", age: 2 },
  { name: "Fizz", age: 5 },
  { name: "Buzz", age: 16 },
  { name: "FizzBuzz", age: 100 },
];

describe("extractVipsNames", () => {
  it("should extract names from VIPS array", () => {

    // Arrange
    const vipsList = VIPS;
    const expected = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];
    
    // Act
    const result = extractVipsNames(vipsList);
    
    // Assert
    expect(result).toEqual(expected);
  });
        

  it("should handle an empty array", () => {

    // Arrange
    const vipsList = EMPTY_VIPS_LIST;
    const expected = [];
    
    // Act
    const result = extractVipsNames(vipsList);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should handle an array with one VIP", () => {

    // Arrange
    const vipsList = SINGLE_VIP_LIST;
    const expected = ["Foo"];
    
    // Act
    const result = extractVipsNames(vipsList);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should handle VIPs with different ages", () => {

    // Arrange
    const vipsList = VIPS_WITH_DIFFERENT_AGES;
    const expected = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];
    
    // Act
    const result = extractVipsNames(vipsList);

    // Assert
    expect(result).toEqual(expected);
  });
});
