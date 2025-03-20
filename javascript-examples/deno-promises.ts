

try {
  const data = await Deno.readTextFile("./example-read.txt");
  console.log(data);
} catch (error) {
  console.error("Error reading file:", error);
}

export { };

