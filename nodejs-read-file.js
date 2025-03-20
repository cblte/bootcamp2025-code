import * as fs from "node:fs";
import { promises as pfs } from "node:fs";

fs.readFile("example-read.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

try {
  await pfs.writeFile("example.txt", "Hello, world!", "utf8");
  console.log("File written successfully");

  await pfs.rename("example.txt", "example-renamed.txt");
  console.log("File renamed successfully");
} catch (err) {
  console.error("Error renaming file:", err);
}
