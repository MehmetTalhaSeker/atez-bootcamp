import { describe, expect, it } from "vitest";

type ArrayOfTwoOrMore<T> = [T, T, ...T[]];

/**
 * A function that accepts infinite number of "numbers".
 * @param numbers only accepts "number" type.
 */
export const addNumbers = (...numbers: ArrayOfTwoOrMore<number>) => {
  return numbers.reduce((acc, curr) => {
    if (typeof curr !== "number") {
      throw new Error("Function parameters can only be numbers!");
    }
    return acc + curr;
  });
};

describe("addNumbers tests", () => {
  it("should successfully add numbers", function () {
    expect(addNumbers(6, 5)).toEqual(11);
    expect(addNumbers(6, 5, 4)).toEqual(15);
    expect(addNumbers(-6, 5, 4)).toEqual(3);
    expect(addNumbers(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)).toEqual(65);
  });

  it("should fail", () => {
    // @ts-expect-error
    expect(() => addNumbers("12", 12, "abc")).toThrowError();
    // @ts-expect-error
    expect(() => addNumbers(12, "abc")).toThrowError();
    // @ts-expect-error
    expect(() => addNumbers(12, "12")).toThrowError();
    // @ts-expect-error
    expect(() => addNumbers(true, false)).toThrowError();
    // @ts-expect-error
    expect(() => addNumbers([], false)).toThrowError();
    // @ts-expect-error
    expect(() => addNumbers()).toThrowError();
  });
});
