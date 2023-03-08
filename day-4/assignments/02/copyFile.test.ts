import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const copy = (source: string, destination: string) => {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      throw new Error("Copy operation failed!");
    }
  });
  return "Success.";
};

describe("copy tests", () => {
  it("should success", () => {
    const src = path.join(__dirname, "./src/copyIt.txt");
    const dst = path.join(__dirname, "./dst/pasteIt.txt");
    expect(copy(src, dst)).toEqual("Success.");
  });
});
