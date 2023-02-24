import { describe, expect, it } from "vitest";

const expectedError: Error = new Error(
  "Function parameter can only be positive number!"
);

/**
 * A function that calculates the factorial of given number.
 * @param num only accepts "number" type.
 */
export const calculateFactorial = (num: number) => {
  if (typeof num !== "number" || num < 0) {
    throw expectedError;
  }
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

describe("calculateFactorial tests", () => {
  it("should successfully calculate", function () {
    expect(calculateFactorial(0)).toEqual(1);
    expect(calculateFactorial(1)).toEqual(1);
    expect(calculateFactorial(2)).toEqual(2);
    expect(calculateFactorial(3)).toEqual(6);
    expect(calculateFactorial(4)).toEqual(24);
    expect(calculateFactorial(5)).toEqual(120);
    expect(calculateFactorial(6)).toEqual(720);
    expect(calculateFactorial(7)).toEqual(5040);
  });

  it("should fail", () => {
    expect(() => calculateFactorial(-1)).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => calculateFactorial("12", 12)).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => calculateFactorial()).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => calculateFactorial(true)).toThrowError(expectedError);
    // @ts-expect-error
    expect(() => calculateFactorial([])).toThrowError(expectedError);
  });
});
