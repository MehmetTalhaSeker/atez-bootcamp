import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
const asyncWrite = (input: string) => {
  const joined = path.join(__dirname, "write.txt");
  fs.appendFile(joined, input + "\n", { flag: "a+" }, (err) => {
    if (err) {
      throw new Error("Writing failed!");
    }
  });
  return "Writing successful.";
};

describe("write tests", () => {
  it("should success", () => {
    expect(asyncWrite("ATEZ BOOTCAMP")).toEqual("Writing successful.");
    expect(asyncWrite("JJJJJJJJJJJJ")).toEqual("Writing successful.");
    expect(asyncWrite("DDDDDDDDDDDD")).toEqual("Writing successful.");
  });
});
