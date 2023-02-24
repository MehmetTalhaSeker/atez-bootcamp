import { describe, expect, it } from "vitest";

type ArrayOfTwoOrMore<T> = [T, T, ...T[]];
const expectedError: Error = new Error(
  "Function parameters can only be numbers"
);

/**
 * A function that accepts infinite number of "numbers". Returns result of multiplication.
 * @param numbers only accepts "number" type.
 * @return number
 */
export const multipleNumbers = (...numbers: ArrayOfTwoOrMore<number>) => {
  return numbers.reduce((acc, curr) => {
    if (typeof curr !== "number") {
      throw expectedError;
    }
    return acc * curr;
  });
};

describe("multipleNumbers tests", () => {
  it("should successfully add numbers", function () {
    expect(multipleNumbers(6, 5)).toEqual(30);
    expect(multipleNumbers(6, 5, -4)).toEqual(-120);
    expect(multipleNumbers(-3, 2, 0.5)).toEqual(-3);
    expect(multipleNumbers(5, 5)).toEqual(25);
    expect(multipleNumbers(5, 5, 0)).toEqual(0);
  });

  it("should fail", () => {
    // @ts-expect-error
    expect(() => multipleNumbers("12", 12, "abc")).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => multipleNumbers(12, "abc")).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => multipleNumbers(12, "12")).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => multipleNumbers(true, false)).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => multipleNumbers([], false)).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => multipleNumbers()).toThrowError();
  });
});
