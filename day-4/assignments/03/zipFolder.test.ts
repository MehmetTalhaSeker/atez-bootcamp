import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";

const zip = new AdmZip();

const zipDir = (sourceDir: string, outPath: string) => {
  zip.addLocalFolder(sourceDir);
  fs.writeFileSync(outPath, zip.toBuffer());
};

describe("copy tests", () => {
  it("should success", () => {
    const src = path.join(__dirname, "./src");
    const dst = path.join(__dirname, "./dst/output.zip");
    zipDir(src, dst);
  });
});
