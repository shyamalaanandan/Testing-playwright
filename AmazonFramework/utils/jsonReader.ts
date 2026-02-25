import fs from "fs";
import path from "path";

export function readJSON(fileName: string) {
  const filePath = path.resolve(process.cwd(), "testdata1", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}