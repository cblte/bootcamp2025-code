/*
E3.5 Implement error handling and exceptions for exercise E2.1 when the argument is not an array and possibly other edge cases

E2.1 Write a function that accepts an array of numbers as a parameter, prints their values to the console, and returns the sum of those numbers

*/

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw "Input is not an array";
  }

  if (numbers.length === 0) {
    throw "Input is an empty array.";
  }

  numbers.forEach((v) => console.log(v));

  const result = numbers.reduce((a, i) => {
    if (isNaN(i)) {
      throw "Input contains non-numeric value";
    }
    return a + i;
  });

  console.log("Sum of all values:", result);
}

// Test with empty array
try {
  sumArray([]);
} catch (error) {
  console.error("Error:", error);
}

try {
  sumArray([1, 2, 3, 4, 5, 6]);
} catch (error) {
  console.error("Error:", error);
}

try {
  sumArray([1, 2, 3, "a", 5]);
} catch (error) {
  console.error("Error:", error);
}
