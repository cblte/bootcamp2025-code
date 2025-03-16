// %%
const test = (param) => {
  if (typeof param !== "number") {
    throw new Error("Invalid parameter type");
  }
};

try {
  test("test");
} catch (error) {
  console.error("Error:", error.message);
}
