import { createLocalesSettings } from "./createLocalesSettings";
import { describe, it, expect } from "vitest";

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
const EMPTY_LOCALES = [];
const SINGLE_LOCALE = ["EN"];
const DUPLICATE_LOCALES = ["EN", "EN", "FR", "FR"];

describe("createLocalesSettings", () => {
  it("should create locales settings with the first locale enabled and the rest disabled", () => {
    // Arrange
    const locales = LOCALES;

    // Act
    const result = createLocalesSettings(locales);

    // Assert
    expect(result).toEqual({
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    });
});

  it("should handle an empty array", () => {
    // Arrange
    const locales = EMPTY_LOCALES;

    // Act
    const result = createLocalesSettings(locales);

    // Assert
    expect(result).toEqual({});
  });

  it("should handle an array with one locale", () => {
    // Arrange
    const locales = SINGLE_LOCALE;

    // Act
    const result = createLocalesSettings(locales);

    // Assert
    expect(result).toEqual({
      EN: { id: 0, enabled: true },
    });
    });


  it("should handle an array with duplicate locales", () => {
    // Arrange
    const locales = DUPLICATE_LOCALES;

    // Act
    const result = createLocalesSettings(locales);

    // Assert
    expect(result).toEqual({
      EN: { id: 0, enabled: false },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
    });
  });
});

