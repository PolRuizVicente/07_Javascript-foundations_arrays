import { describe, it, expect } from "vitest";
import { feedMonkeys } from "./feedMonkeys";

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];
const specialCharacters = "🍉🍇";

describe("feedMonkeys", () => {
  it("should feed monkeys with bananas", () => {

      // Arrange

      const banana = "🍌";

      const expected = [
          "🐒 eats 🍌",
          "🦍 eats 🍌",
          "🦧 eats 🍌"
      ];

      // Act

      const result = feedMonkeys(MONKEYS_LIST, banana);

      // Assert

      expect(result).toEqual(expected);

  });

  it("should feed monkeys with apples", () => {

    // Arrange

    const apple = "🍎";

    const expected = [
        "🐒 eats 🍎",
        "🦍 eats 🍎",
        "🦧 eats 🍎"
    ];

    // Act

    const result = feedMonkeys(MONKEYS_LIST, apple);

    // Assert

    expect(result).toEqual(expected);

});

   it("should feed monkeys with grapes", () => {

    // Arrange

    const grape = "🍇";

    const expected = [
        "🐒 eats 🍇",
        "🦍 eats 🍇",
        "🦧 eats 🍇"
    ];

    // Act

    const result = feedMonkeys(MONKEYS_LIST, grape);

    // Assert

    expect(result).toEqual(expected);

});

  it("should return an empty array if no fruit is provided", () => {

  
    // Arrange

    const expected = [
        "🐒 eats ",
        "🦍 eats ",
        "🦧 eats "
    ];

    // Act

    const result = feedMonkeys(MONKEYS_LIST, "");

    // Assert

    expect(result).toEqual(expected);

});

  it("should handle feeding monkeys with special characters", () => {

    // Arrange

    const expected = [
        "🐒 eats 🍉🍇",
        "🦍 eats 🍉🍇",
        "🦧 eats 🍉🍇"
    ];

    // Act

    const result = feedMonkeys(MONKEYS_LIST, specialCharacters);

    // Assert
    expect(result).toEqual(expected);

    });
});
