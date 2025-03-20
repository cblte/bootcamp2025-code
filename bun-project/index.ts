import { file } from "bun";

async function readFile(filePath: string): Promise<string> {
  const data = await file(filePath).text();
  return data;
}

try {
  const content = await readFile("../example-read.txt");
  console.log(content);
} catch (error) {
  console.error("Error reading file:", error);
}