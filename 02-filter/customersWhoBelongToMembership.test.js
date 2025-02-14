import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership";
import { describe, it, expect } from "vitest";

const EMPTY_CUSTOMERS_LIST = [];

const CUSTOMERS_LIST = [
  { name: "Foo", isMember: true },
  { name: "Bar", isMember: false },
  { name: "Fizz", isMember: true },
  { name: "Buzz", isMember: false },
  { name: "FizzBuzz", isMember: true },
];

const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
  { name: "Bar", isMember: false },
  { name: "Buzz", isMember: false },
];

const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
  { name: "Foo", isMember: true },
  { name: "Fizz", isMember: true },
  { name: "FizzBuzz", isMember: true },
];

describe("customersWhoBelongToMembership", () => {
  it("should return an empty array when given an empty customers list", () => {
    // Arrange
    const customersList = EMPTY_CUSTOMERS_LIST;

    // Act
    const result = customersWhoBelongToMembership(customersList);

    // Assert
    expect(result).toEqual([]);
  });

  it("should return only the customers who are members", () => {
    // Arrange
    const customersList = CUSTOMERS_LIST;

    // Act
    const result = customersWhoBelongToMembership(customersList);

    // Assert
    expect(result).toEqual([
      { name: "Foo", isMember: true },
      { name: "Fizz", isMember: true },
      { name: "FizzBuzz", isMember: true },
    ]);
  });

  it("should return an empty array when no customers are members", () => {
    // Arrange
    const customersList = CUSTOMERS_LIST_WITH_NO_MEMBERS;

    // Act
    const result = customersWhoBelongToMembership(customersList);

    // Assert
    expect(result).toEqual([]);
  });

  it("should return all customers when all are members", () => {
    // Arrange
    const customersList = CUSTOMERS_LIST_WITH_ALL_MEMBERS;

    // Act
    const result = customersWhoBelongToMembership(customersList);

    // Assert
    expect(result).toEqual(CUSTOMERS_LIST_WITH_ALL_MEMBERS);
  });
});
