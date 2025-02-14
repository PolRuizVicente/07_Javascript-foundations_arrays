import {extendUsersSettings} from "./extendUsersSettings";
import { describe, it, expect } from "vitest";
const USERS = [
  {
    email: "lindsay.ferguson@reqres.in",
    firstName: "Lindsay",
    lastName: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    email: "michael.lawson@reqres.in",
    firstName: "Michael",
    lastName: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    email: "tobias.funke@reqres.in",
    firstName: "Tobias",
    lastName: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
];


describe("extendUsersSettings", () => {
    it("should add id and isEnabled properties to each user", () => {
      // Arrange
      const expectedOutput = [
        { ...USERS[0], id: 0, isEnabled: true },
        { ...USERS[1], id: 1, isEnabled: true },
        { ...USERS[2], id: 2, isEnabled: true },
      ];
  
      // Act
      const result = extendUsersSettings(USERS);
  
      // Assert
      expect(result).toEqual(expectedOutput);
    });
  
    it("should handle an empty array", () => {
      // Arrange
      const users = [];
      const expectedOutput = [];
  
      // Act
      const result = extendUsersSettings(users);
  
      // Assert
      expect(result).toEqual(expectedOutput);
    });
  });
  
