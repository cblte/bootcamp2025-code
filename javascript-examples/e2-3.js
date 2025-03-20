/*
E2.3 Create a simple calculator simulator. Perform the basic operations as functions.
*/

// %%
const calc = {
  sum: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      console.error("a or b isNaN");
      return null;
    }
    return a + b;
  },
  sub: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      console.error("a or b isNaN");
      return null;
    }
    return a - b;
  },
  mul: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      console.error("a or b isNaN");
      return null;
    }
    return a * b;
  },
  div: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};

console.log("Sum:", calc.sum(3, 4)); // Output the result
console.log("Subtraction:", calc.sub(3, 4)); // Test the subtraction method
console.log("Multiplication:", calc.mul(3, 4)); // Test the multiplication method
console.log("Division:", calc.div(12, 4)); // Test the division method
